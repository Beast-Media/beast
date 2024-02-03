import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { validateEquals } from 'typia';
import { TMDBConfig, TMDBMovie } from './tmdb.dto';
import { MODULE_OPTIONS_TOKEN } from './tmdb.consts';

@Injectable()
export class TMDBService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(MODULE_OPTIONS_TOKEN) private config: TMDBConfig
  ) {}

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

  async fetchTMDB<
    R,
    P extends Record<string, string | number | string[]> = never,
    B = unknown,
  >(
    path: string,
    body?: B,
    params?: P,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  ): Promise<R> {
    const url = new URL(`${this.config.endpointUrl}${path}`);
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
           ...(this.config.apiKey ?  {'Authorization': `Bearer ${this.config.apiKey}`} : {}),
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }),
      )
    ).json();
  }

  async getMovie(tmdbId: number): Promise<TMDBMovie | null> {
    return this.cacheManager.wrap(`@tmdb/movie/${tmdbId}`, async () => {
      const res = await this.fetchTMDB<TMDBMovie | null>(`movie/${tmdbId}`);
      const validation = validateEquals(res);
      if (validation.errors.length > 0) console.log(validation.errors);
      return (validation.success && validation.data) || null;
    });
  }
}
