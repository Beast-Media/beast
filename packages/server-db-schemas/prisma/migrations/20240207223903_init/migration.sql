-- CreateEnum
CREATE TYPE "LibraryType" AS ENUM ('MOVIES', 'TV_SHOWS');

-- CreateEnum
CREATE TYPE "StreamType" AS ENUM ('video', 'audio', 'subtitle', 'attachment');

-- CreateEnum
CREATE TYPE "LibraryAccessType" AS ENUM ('READ', 'WRITE');

-- CreateTable
CREATE TABLE "Library" (
    "id" TEXT NOT NULL,
    "type" "LibraryType" NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stream" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "streamIndex" INTEGER NOT NULL,
    "type" "StreamType" NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "Stream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "bitrate" INTEGER NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL,
    "mediaId" TEXT NOT NULL,
    "seasonId" TEXT,
    "overview" TEXT,
    "name" TEXT NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "season_number" INTEGER NOT NULL,
    "overview" TEXT,
    "showId" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Show" (
    "id" TEXT NOT NULL,
    "tvmazeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "overview" TEXT,
    "images" TEXT[],
    "libraryId" TEXT NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "images" TEXT[],
    "tmdbId" INTEGER NOT NULL,
    "mediaId" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isOwner" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryAccess" (
    "id" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "access" "LibraryAccessType" NOT NULL,

    CONSTRAINT "LibraryAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Library_id_key" ON "Library"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Library_name_key" ON "Library"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Library_path_key" ON "Library"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Stream_id_key" ON "Stream"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stream_mediaId_streamIndex_key" ON "Stream"("mediaId", "streamIndex");

-- CreateIndex
CREATE UNIQUE INDEX "Media_id_key" ON "Media"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Media_path_key" ON "Media"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_id_key" ON "Episode"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_mediaId_key" ON "Episode"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_seasonId_episode_number_key" ON "Episode"("seasonId", "episode_number");

-- CreateIndex
CREATE UNIQUE INDEX "Season_id_key" ON "Season"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Season_showId_season_number_key" ON "Season"("showId", "season_number");

-- CreateIndex
CREATE UNIQUE INDEX "Show_id_key" ON "Show"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Show_tvmazeId_key" ON "Show"("tvmazeId");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdbId_key" ON "Movie"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_mediaId_key" ON "Movie"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Server_id_key" ON "Server"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryAccess_id_key" ON "LibraryAccess"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryAccess_libraryId_userId_access_key" ON "LibraryAccess"("libraryId", "userId", "access");

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryAccess" ADD CONSTRAINT "LibraryAccess_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryAccess" ADD CONSTRAINT "LibraryAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
