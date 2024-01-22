import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { TVMazeEpisode, TVMazeSeason, TVMazeShow } from './tvmaze.dto';
import { assertEquals } from 'typia';

@Injectable()
export class TVMazeService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getMillisToSleep(retryHeaderString: string) {
    let millisToSleep = Math.round(parseFloat(retryHeaderString) * 1000);
    if (isNaN(millisToSleep)) {
      millisToSleep = Math.max(
        0,
        new Date(retryHeaderString).getTime() - new Date().getTime(),
      );
    }
    return millisToSleep;
  }

  async fetchTVMaze<
    R,
    P extends Record<string, string | number | string[]> = never,
    B = unknown,
  >(
    path: string,
    body?: B,
    params?: P,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  ): Promise<R> {
    const url = new URL(`https://api.tvmaze.com/${path}`);
    if (params) {
      for (const [key, param] of Object.entries(params)) {
        url.searchParams.append(
          key,
          Array.isArray(param) ? param.join(',') : param.toString(),
        );
      }
    }

    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    const fetchRetry = async (
      callFetch: () => Promise<Response>,
    ): Promise<Response> => {
      const res = await callFetch();
      if (res.status === 429) {
        const retryAfter = res.headers.get('retry-after') ?? '5';
        const millisToSleep = this.getMillisToSleep(retryAfter);
        await sleep(millisToSleep);
        return fetchRetry(callFetch);
      }
      return res;
    };

    return (
      await fetchRetry(() =>
        fetch(url, {
          method,
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }),
      )
    ).json();
  }

  async getTVShowMeta(tvmazeId: number): Promise<TVMazeShow> {
    return this.cacheManager.wrap(`@tvmaze/show/${tvmazeId}`, async () =>
      assertEquals(
        await this.fetchTVMaze<TVMazeShow, { thetvdb: number }>(
          `lookup/shows`,
          undefined,
          { thetvdb: tvmazeId },
        ),
      ),
    );
  }

  async getTVShowEpisodesMeta(tvmazeId: number): Promise<TVMazeEpisode[]> {
    return this.cacheManager.wrap(`@tvmaze/episodes/${tvmazeId}`, async () =>
      assertEquals(
        await this.fetchTVMaze<TVMazeEpisode[]>(`shows/${tvmazeId}/episodes`),
      ),
    );
  }

  async getTVShowSeasonsMeta(tvmazeId: number): Promise<TVMazeSeason[]> {
    return this.cacheManager.wrap(`@tvmaze/seasons/${tvmazeId}`, async () => {
      const res = await this.fetchTVMaze<TVMazeSeason[]>(
        `shows/${tvmazeId}/seasons`,
      );
      console.log(res);
      return assertEquals(res);
    });
  }
}
