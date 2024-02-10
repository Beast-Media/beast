import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1707526314389 implements MigrationInterface {
  name = 'Init1707526314389';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_entity" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "isOwner" boolean NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "library_entity" ("id" varchar PRIMARY KEY NOT NULL, "type" varchar NOT NULL, "name" varchar NOT NULL, "path" varchar NOT NULL, CONSTRAINT "unique_name" UNIQUE ("name"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "library_access_entity" ("id" varchar PRIMARY KEY NOT NULL, "access" varchar NOT NULL, "userId" varchar, "libraryId" varchar)`,
    );
    await queryRunner.query(
      `CREATE TABLE "movie_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "overview" text, "tmdbId" integer NOT NULL, "images" text NOT NULL, "mediaId" varchar NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_tmdbId" UNIQUE ("tmdbId"), CONSTRAINT "REL_71e556c2ad58de5dd7d15b91c1" UNIQUE ("mediaId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "media_stream_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "streamIndex" integer NOT NULL, "type" varchar NOT NULL, "mediaId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "media_entity" ("id" varchar PRIMARY KEY NOT NULL, "path" varchar NOT NULL, "width" integer NOT NULL, "height" integer NOT NULL, "bitrate" integer NOT NULL, "duration" integer NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_path" UNIQUE ("path"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "episode_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "episode_number" integer NOT NULL, "overview" text, "images" text NOT NULL, "mediaId" varchar NOT NULL, "seasonId" varchar NOT NULL, CONSTRAINT "REL_20a184ec67f9c2811477bc5a0f" UNIQUE ("mediaId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "season_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "season_number" integer NOT NULL, "overview" text, "images" text NOT NULL, "showId" varchar NOT NULL, CONSTRAINT "unique_season_for_show" UNIQUE ("season_number", "showId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "show_entity" ("id" varchar PRIMARY KEY NOT NULL, "tvmazeId" integer NOT NULL, "name" varchar NOT NULL, "path" varchar NOT NULL, "overview" text, "images" text NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_tvmazeId" UNIQUE ("tvmazeId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "server_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_library_access_entity" ("id" varchar PRIMARY KEY NOT NULL, "access" varchar NOT NULL, "userId" varchar, "libraryId" varchar, CONSTRAINT "FK_1cf195c429111594a471c5dae58" FOREIGN KEY ("userId") REFERENCES "user_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_37a088ea1eebe8e5c17be5de6cf" FOREIGN KEY ("libraryId") REFERENCES "library_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_library_access_entity"("id", "access", "userId", "libraryId") SELECT "id", "access", "userId", "libraryId" FROM "library_access_entity"`,
    );
    await queryRunner.query(`DROP TABLE "library_access_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_library_access_entity" RENAME TO "library_access_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_movie_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "overview" text, "tmdbId" integer NOT NULL, "images" text NOT NULL, "mediaId" varchar NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_tmdbId" UNIQUE ("tmdbId"), CONSTRAINT "REL_71e556c2ad58de5dd7d15b91c1" UNIQUE ("mediaId"), CONSTRAINT "FK_71e556c2ad58de5dd7d15b91c11" FOREIGN KEY ("mediaId") REFERENCES "media_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_8efb645b89b426e60e766686785" FOREIGN KEY ("libraryId") REFERENCES "library_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_movie_entity"("id", "name", "overview", "tmdbId", "images", "mediaId", "libraryId") SELECT "id", "name", "overview", "tmdbId", "images", "mediaId", "libraryId" FROM "movie_entity"`,
    );
    await queryRunner.query(`DROP TABLE "movie_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_movie_entity" RENAME TO "movie_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_media_stream_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "streamIndex" integer NOT NULL, "type" varchar NOT NULL, "mediaId" varchar NOT NULL, CONSTRAINT "FK_ec846b4060558ca10f018801815" FOREIGN KEY ("mediaId") REFERENCES "media_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_media_stream_entity"("id", "name", "streamIndex", "type", "mediaId") SELECT "id", "name", "streamIndex", "type", "mediaId" FROM "media_stream_entity"`,
    );
    await queryRunner.query(`DROP TABLE "media_stream_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_media_stream_entity" RENAME TO "media_stream_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_media_entity" ("id" varchar PRIMARY KEY NOT NULL, "path" varchar NOT NULL, "width" integer NOT NULL, "height" integer NOT NULL, "bitrate" integer NOT NULL, "duration" integer NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_path" UNIQUE ("path"), CONSTRAINT "FK_e696b40df671b4bb1cdbda57f92" FOREIGN KEY ("libraryId") REFERENCES "library_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_media_entity"("id", "path", "width", "height", "bitrate", "duration", "libraryId") SELECT "id", "path", "width", "height", "bitrate", "duration", "libraryId" FROM "media_entity"`,
    );
    await queryRunner.query(`DROP TABLE "media_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_media_entity" RENAME TO "media_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_episode_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "episode_number" integer NOT NULL, "overview" text, "images" text NOT NULL, "mediaId" varchar NOT NULL, "seasonId" varchar NOT NULL, CONSTRAINT "REL_20a184ec67f9c2811477bc5a0f" UNIQUE ("mediaId"), CONSTRAINT "FK_20a184ec67f9c2811477bc5a0f1" FOREIGN KEY ("mediaId") REFERENCES "media_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7a6dbe6fc6b24c4efb2c7914e53" FOREIGN KEY ("seasonId") REFERENCES "season_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_episode_entity"("id", "name", "episode_number", "overview", "images", "mediaId", "seasonId") SELECT "id", "name", "episode_number", "overview", "images", "mediaId", "seasonId" FROM "episode_entity"`,
    );
    await queryRunner.query(`DROP TABLE "episode_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_episode_entity" RENAME TO "episode_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_season_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "season_number" integer NOT NULL, "overview" text, "images" text NOT NULL, "showId" varchar NOT NULL, CONSTRAINT "unique_season_for_show" UNIQUE ("season_number", "showId"), CONSTRAINT "FK_318db52547fdccb165224ccfc86" FOREIGN KEY ("showId") REFERENCES "show_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_season_entity"("id", "name", "season_number", "overview", "images", "showId") SELECT "id", "name", "season_number", "overview", "images", "showId" FROM "season_entity"`,
    );
    await queryRunner.query(`DROP TABLE "season_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_season_entity" RENAME TO "season_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_show_entity" ("id" varchar PRIMARY KEY NOT NULL, "tvmazeId" integer NOT NULL, "name" varchar NOT NULL, "path" varchar NOT NULL, "overview" text, "images" text NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_tvmazeId" UNIQUE ("tvmazeId"), CONSTRAINT "FK_c3176b266dd2ef79182b568e87a" FOREIGN KEY ("libraryId") REFERENCES "library_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_show_entity"("id", "tvmazeId", "name", "path", "overview", "images", "libraryId") SELECT "id", "tvmazeId", "name", "path", "overview", "images", "libraryId" FROM "show_entity"`,
    );
    await queryRunner.query(`DROP TABLE "show_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_show_entity" RENAME TO "show_entity"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "show_entity" RENAME TO "temporary_show_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "show_entity" ("id" varchar PRIMARY KEY NOT NULL, "tvmazeId" integer NOT NULL, "name" varchar NOT NULL, "path" varchar NOT NULL, "overview" text, "images" text NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_tvmazeId" UNIQUE ("tvmazeId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "show_entity"("id", "tvmazeId", "name", "path", "overview", "images", "libraryId") SELECT "id", "tvmazeId", "name", "path", "overview", "images", "libraryId" FROM "temporary_show_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_show_entity"`);
    await queryRunner.query(
      `ALTER TABLE "season_entity" RENAME TO "temporary_season_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "season_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "season_number" integer NOT NULL, "overview" text, "images" text NOT NULL, "showId" varchar NOT NULL, CONSTRAINT "unique_season_for_show" UNIQUE ("season_number", "showId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "season_entity"("id", "name", "season_number", "overview", "images", "showId") SELECT "id", "name", "season_number", "overview", "images", "showId" FROM "temporary_season_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_season_entity"`);
    await queryRunner.query(
      `ALTER TABLE "episode_entity" RENAME TO "temporary_episode_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "episode_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "episode_number" integer NOT NULL, "overview" text, "images" text NOT NULL, "mediaId" varchar NOT NULL, "seasonId" varchar NOT NULL, CONSTRAINT "REL_20a184ec67f9c2811477bc5a0f" UNIQUE ("mediaId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "episode_entity"("id", "name", "episode_number", "overview", "images", "mediaId", "seasonId") SELECT "id", "name", "episode_number", "overview", "images", "mediaId", "seasonId" FROM "temporary_episode_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_episode_entity"`);
    await queryRunner.query(
      `ALTER TABLE "media_entity" RENAME TO "temporary_media_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "media_entity" ("id" varchar PRIMARY KEY NOT NULL, "path" varchar NOT NULL, "width" integer NOT NULL, "height" integer NOT NULL, "bitrate" integer NOT NULL, "duration" integer NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_path" UNIQUE ("path"))`,
    );
    await queryRunner.query(
      `INSERT INTO "media_entity"("id", "path", "width", "height", "bitrate", "duration", "libraryId") SELECT "id", "path", "width", "height", "bitrate", "duration", "libraryId" FROM "temporary_media_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_media_entity"`);
    await queryRunner.query(
      `ALTER TABLE "media_stream_entity" RENAME TO "temporary_media_stream_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "media_stream_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "streamIndex" integer NOT NULL, "type" varchar NOT NULL, "mediaId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "media_stream_entity"("id", "name", "streamIndex", "type", "mediaId") SELECT "id", "name", "streamIndex", "type", "mediaId" FROM "temporary_media_stream_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_media_stream_entity"`);
    await queryRunner.query(
      `ALTER TABLE "movie_entity" RENAME TO "temporary_movie_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "movie_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "overview" text, "tmdbId" integer NOT NULL, "images" text NOT NULL, "mediaId" varchar NOT NULL, "libraryId" varchar NOT NULL, CONSTRAINT "unique_tmdbId" UNIQUE ("tmdbId"), CONSTRAINT "REL_71e556c2ad58de5dd7d15b91c1" UNIQUE ("mediaId"))`,
    );
    await queryRunner.query(
      `INSERT INTO "movie_entity"("id", "name", "overview", "tmdbId", "images", "mediaId", "libraryId") SELECT "id", "name", "overview", "tmdbId", "images", "mediaId", "libraryId" FROM "temporary_movie_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_movie_entity"`);
    await queryRunner.query(
      `ALTER TABLE "library_access_entity" RENAME TO "temporary_library_access_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "library_access_entity" ("id" varchar PRIMARY KEY NOT NULL, "access" varchar NOT NULL, "userId" varchar, "libraryId" varchar)`,
    );
    await queryRunner.query(
      `INSERT INTO "library_access_entity"("id", "access", "userId", "libraryId") SELECT "id", "access", "userId", "libraryId" FROM "temporary_library_access_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_library_access_entity"`);
    await queryRunner.query(`DROP TABLE "server_entity"`);
    await queryRunner.query(`DROP TABLE "show_entity"`);
    await queryRunner.query(`DROP TABLE "season_entity"`);
    await queryRunner.query(`DROP TABLE "episode_entity"`);
    await queryRunner.query(`DROP TABLE "media_entity"`);
    await queryRunner.query(`DROP TABLE "media_stream_entity"`);
    await queryRunner.query(`DROP TABLE "movie_entity"`);
    await queryRunner.query(`DROP TABLE "library_access_entity"`);
    await queryRunner.query(`DROP TABLE "library_entity"`);
    await queryRunner.query(`DROP TABLE "user_entity"`);
  }
}
