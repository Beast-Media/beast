# Beast

Beast is a free media server software that allows you to stream your local media library to all of your devices and friends.
It organizes movie and television content and adds posters, plot summaries, cast and crew lists, technical details, critical reviews, and subtitles.
Beast is also capable of transcoding files if the codec is incompatible with the device playing the media.
It can run on any linux system and supports docker.

# Prerequisites

You need to already have a media library managed by Sonarr or Radarr. 
This is required to index the library and load the required metadatas as Beast will curently not index the library by itself.

# Building & Contributing

For information on building and contributing to the codebase, see [CONTRIBUTING.md](https://github.com/Beast-Media/beast/blob/main/CONTRIBUTING.md).

# Contributions

Any contributions submitted for inclusion in this repository will be licensed under:

- MIT License ([LICENSE](https://github.com/Beast-Media/beast/blob/main/LICENSE))


# Testing

You want to test it yourself?

You can use this docker image to run it!

```yml
version: '3'
services:
  beast-server:
    image: beastmedia/server:latest
    ports:
      - 1000:3000
    environment:
      # Path to the server datas (db, trancoding, metadatas)
      - SERVER_DATA_PATH=/volumes
      # location of your movies and tv shoes
      - SERVER_LIBRARIES_ROOT=/mnt/libraries
      # url to the local frontent
      - API_APP_PATH=https://api.beast-media.org
      - SERVER_PORT=3000
    volumes:
      - ./volumes:/volumes
      - /mnt/libraries:/mnt/libraries
```

## You need to have a media library already setup with sonar and radarr

> You also need the name of the files to contain the tmdbId or tvmazeId in the name !

Here are the templates for sonarr and radarr 

### Sonarr

Standard Episode Format
 -> ``{Series Title} - S{season:00}E{episode:00} - {Episode Title} {Quality Full} ID{TvMazeId}ID``

Daily Episode Format
 -> ``{Series Title} - S{season:00}E{episode:00} - {Episode Title} {Quality Full} ID{TvMazeId}ID``

Anime Episode Format
 -> ``{Series Title} - S{season:00}E{episode:00} - {Episode Title} {Quality Full} ID{TvMazeId}ID``


### Radarr

Standard Movie Format
 -> ``{Movie Title} ({Release Year}) {Quality Full} ID{TmdbId}ID``

# In Progress

This project is still in active developpement and is not usable as is.

Check https://github.com/orgs/Beast-Media/projects/3 to see the current progress and roadmap.
