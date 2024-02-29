import { parse } from 'path/posix';

export interface PossibleResults {
    title: string[];
    season: number[];
    episode: number[];
    year: number[];
}

const simpleTitleRegex = /(?:(480|540|576|720|1080|2160)[ip]|[xh][\W_]?26[45]|DD\W?5\W1|[<>?*]|848x480|1280x720|1920x1080|3840x2160|4096x2160|(8|10)b(it)?|10-bit|12bit)\s*?/ig
const websitePrefixRegex = /^(?:\[\s*)?(?:www\.)?[-a-z0-9-]{1,256}\.(?<!Naruto-Kun\.)(?:[a-z]{2,6}\.[a-z]{2,6}|xn--[a-z0-9-]{4,}|[a-z]{2,})\b(?:\s*\]|[ -]{2,})[ -]*/i
const websitePostfixRegex = /(?:\[\s*)?(?:www\.)?[-a-z0-9-]{1,256}\.(?:xn--[a-z0-9-]{4,}|[a-z]{2,6})\b(?:\s*\])$/i
const cleanTorrentSuffixRegex = /\[(?:ettv|rartv|rarbg|cttv|publichd)\]$/i

const normalizedReplace = [
    simpleTitleRegex, 
    websitePrefixRegex, 
    websitePostfixRegex, 
    cleanTorrentSuffixRegex,
    /(?<hash>\[\w{8}\])/,
    /H264|HEVC|WEBRiP|MULTi|x264/gm,
    /\(\)|\[\]/i,
]

export function parseTitle(path: string) {
    const tryMatch = (part: string) => {
        const replaceRegexes = [
            /^\[(?<subgroup>.+?)\][-_. ]?/i,
            /\[(.* Sub)\]/i,
            /\[(.* Dub)\]/i,
            /Season \d+/i,
            /S\d+\+S\d+/i,
            /Season One|Two|Three|Four|Five|Six|Seven|Eight|Nine/i,
            /S(\d+)/i,
            /E(\d+)/i,
            /(\d+)nd season/i,
            /(\d+)st season/i,
            /(\d+)rd season/i,
            ...normalizedReplace,
        ];

        for (const regex of replaceRegexes) {
            part = part.replace(regex, '')
        }

        part = part.replace(/\.|_/g, ' ');
        part = part.replace(/\s\s+/g, ' ').trim();

        const titleRegexes = [
            /(?<title>[^-]+?)(?:(?<![-_. ]|\b[0]\d+) - )/i,
            /(?<title>.+?)(?:(?<!\b[0]\d+))(?:[. ]-[. ])/i,
            /^(?<title>.*)/i
        ]

        for (const regex of titleRegexes) {
            const match = part.match(regex);
            if (match && match.groups?.title)
                return match.groups.title;
        }

        return null;
    }
    
    const titles: string[] = [];
    const parts = path.split('/');
    for (const [index, part] of parts.entries()) {
        if (parts.length === 3 && index == 1)
            continue;
        const match = tryMatch(part);
        if (match && !titles.includes(match))
            titles.push(match);
    }
    return titles;
}


export function parseSeasons(path: string) {
    const tryMatch = (part: string) => {
        const replaceRegexes = [
            ...normalizedReplace,
        ];

        for (const regex of replaceRegexes) {
            part = part.replace(regex, '') 
        }

        part = part.replace(/\./g, ' ');
        part = part.replace(/\s\s+/g, ' ').trim();
        const seasonRegexes = [
            /S(?<seasonstart>\d+)-S(?<seasonend>\d+)/i,
            /Season (?<season>\d+)/i,
            /Season (?<season>One|Two|Three|Four|Five|Six|Seven|Eight|Nine)/i,
            /S(?<season>\d+)E(?<episode>\d+)/i,
            /S(?<season>\d+) (?<episode>\d+)/i,
            /S(?<season>\d+)/i,
            /Vol (?<season>\d+)/i,
            /Vol (?<season>\d+)-(?<episode>\d+)/i,
            /(?<season>\d+)nd season/i,
            /(?<season>\d+)st season/i,
            /(?<season>\d+)rd season/i,
            /(?<season>(?<!\d+)\d{1,2})(?:(?:-|x){1,2}(?<episode>\d{2}))/i
        ]

        for (const regex of seasonRegexes) {
            const match = part.match(regex);
            if (match && match.groups?.seasonstart)
                break;
            if (match && match.groups?.season)
                return parseInt(match.groups.season);
        }

        return null;
    }
    
    const seasons: number[] = [];
    const parts = path.split('/');
    for (const [index, part] of parts.entries()) {
        const match = tryMatch(part);
        if (match && !seasons.includes(match))
            seasons.push(match);
    }
    return seasons;
}

export function parseEpisodes(path: string) {
    const tryMatch = (part: string) => {
        const replaceRegexes = [
            ...normalizedReplace,
        ];

        for (const regex of replaceRegexes) {
            part = part.replace(regex, '') 
        }

        part = part.replace(/\./g, ' ');
        part = part.replace(/\s\s+/g, ' ').trim();

        const episodesRegex = [
            /Episode (?<episode>\d+)/i,
            /Episode (?<episode>One|Two|Three|Four|Five|Six|Seven|Eight|Nine)/i,
            /S(?<season>\d+)E(?<episode>\d+)/i,
            /S(?<season>\d+) (?<episode>\d+)/i,
            /E(?<episode>\d+)/i,
            /(?<episode>\d+)v\d+/i,
            /(?<season>(?<!\d+)\d{1,2})(?:(?:-|x){1,2}(?<episode>\d{2}))/i,
            / - (?<episode>\d+)/,
        ]
        for (const regex of episodesRegex) {
            const match = part.match(regex);
            if (match && match.groups?.episode)
                return parseInt(match.groups.episode);
        }

        return null;
    }
    
    const episodes: number[] = [];
    const parts = path.split('/');
    for (const [index, part] of parts.entries()) {
        const match = tryMatch(part);
        if (parts.length > 1 && index == 0)
            continue;
        if (parts.length > 2 && index == 1)
            continue;

        if (match && !episodes.includes(match))
            episodes.push(match);
    }
    return episodes;
}

export function parsePath(path: string, type: 'TV_SHOW' | 'MOVIE'): PossibleResults {

    const pathWitoutExt = path.split('.').reverse().slice(1).reverse().join('.')

    const titles = parseTitle(pathWitoutExt);
    const seasons = parseSeasons(pathWitoutExt);
    const episodes = parseEpisodes(pathWitoutExt);

    const result: PossibleResults = { title: titles, episode: episodes, season: seasons, year: [] } 
    return result;
}