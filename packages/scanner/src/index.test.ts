import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import { PossibleResults, parsePath } from '.'
import filteredPaths from './filtered-paths.json'
import { writeFileSync } from 'fs'
const results: Record<string, (PossibleResults)> = {};
// describe.concurrent('Should match each paths', () => {
//    const list = ['[Crocante] Tsuki ga Michibiku Isekai Douchuu 2nd Season - 05 (1080p) [x264][EN-US][ES-LA][PT-BR][FR].mkv'];
   const list = filteredPaths;
    test.each(list)('parsePath(%s)', (path) => {
        const res = parsePath(path, 'TV_SHOW');
        results[path] = res
        expect(res.title.length).greaterThanOrEqual(1)
        // expect(res.season.length).greaterThanOrEqual(1)
        expect(res.episode.length).greaterThanOrEqual(1)
    })

   
// })

afterAll(() => {
    console.log(results.size)
    writeFileSync('./results.json', JSON.stringify(results, null, 2));
})