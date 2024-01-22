rm -r /media/pluto/
mkdir /media/pluto/

# ffmpeg -i "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" \
#        -vf "scale=w=10:h=10" \
#        -f hls -hls_time 10 -hls_list_size 0 -segment_list_flags +live -hls_playlist_type event -hls_flags independent_segments   /media/pluto/index.m3u8

# ffmpeg -i  "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -c copy -f hls -hls_time 10 -hls_segment_filename "/media/pluto/output%03d.ts" -hls_playlist_type vod /media/pluto/index.m3u8

# ffmpeg -i "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -c:a copy -f hls -hls_time 10 -hls_segment_filename "/media/pluto/segment%03d.ts" -hls_playlist_type vod /media/pluto/index.m3u8

# ffmpeg -i "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -map_metadata -1 -map_chapters -1 -threads 0 -map 0:0 -map 0:1 -map -0:s -codec:v:0 libx264 -pix_fmt yuv420p -preset veryfast -crf 23 -maxrate 39831010 -bufsize 79662020 -profile:v:0 high -level 41 -x264opts:0 subme=0:me_range=4:rc_lookahead=10:me=dia:no_chroma_me:8x8dct=0:partitions=none -force_key_frames:0 expr:gte(t,0+n_forced*3) -vf scale=trunc(min(max(iw\,ih*dar)\,min(3840\,1920*dar))/2)*2:trunc(min(max(iw/dar\,ih)\,min(3840/dar\,1920))/2)*2 -start_at_zero -vsync -1 -codec:a:0 aac -ac 6 -ab 640000 -copyts -avoid_negative_ts disabled -max_muxing_queue_size 2048 -f hls -max_delay 5000000 -hls_time 3 -hls_segment_type mpegts -start_number 0 -hls_segment_filename /media/pluto/segment%d.ts -hls_playlist_type vod -hls_list_size 0 -y /media/pluto/index.m3u8
time ffmpeg -i "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -force_key_frames "expr:gte(t,n_forced*3)" -c:v copy -c:a aac -ac 2 -f hls -hls_time 10 -hls_list_size 0 -segment_list_flags +live -hls_playlist_type event -hls_flags independent_segments -s 10x10 -f nut /media/pluto/index.m3u8
