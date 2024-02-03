rm -r /mnt/g/Videos/pluto
mkdir /mnt/g/Videos/pluto

rm -r /mnt/g/Videos/pluto2
mkdir /mnt/g/Videos/pluto2

# ffmpeg -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" \
#        -vf "scale=w=10:h=10" \
#        -live_start_index 2 -f hls -hls_time 10 -segment_list_flags +live -hls_playlist_type event /mnt/g/Videos/pluto2/index.m3u8
# ffmpeg -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" \
# -filter_complex \
# "[0:v]split=3[v1][v2][v3]; \
# [v1]copy[v1out]; [v2]scale=w=1280:h=720[v2out]; [v3]scale=w=640:h=360[v3out]" \
# -map "[v1out]" -c:v:0 libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v:0 5M -maxrate:v:0 5M -minrate:v:0 5M -bufsize:v:0 10M -preset slow -g 48 -sc_threshold 0 -keyint_min 48 \
# -map "[v2out]" -c:v:1 libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v:1 3M -maxrate:v:1 3M -minrate:v:1 3M -bufsize:v:1 3M -preset slow -g 48 -sc_threshold 0 -keyint_min 48 \
# -map "[v3out]" -c:v:2 libx264 -x264-params "nal-hrd=cbr:force-cfr=1" -b:v:2 1M -maxrate:v:2 1M -minrate:v:2 1M -bufsize:v:2 1M -preset slow -g 48 -sc_threshold 0 -keyint_min 48 \
# -map a:0 -c:a:0 aac -b:a:0 96k -ac 2 \
# -map a:0 -c:a:1 aac -b:a:1 96k -ac 2 \
# -map a:0 -c:a:2 aac -b:a:2 48k -ac 2 \
# -f hls \
# -hls_time 2 \
# -hls_playlist_type vod \
# -hls_flags independent_segments \
# -hls_segment_type mpegts \
# -hls_segment_filename /mnt/g/Videos/pluto2/stream_%v/data%02d.ts \
# -master_pl_name /mnt/g/Videos/pluto2/index.m3u8 \
# -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" /mnt/g/Videos/pluto2/stream_%v.m3u8

# ffmpeg -i  "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -c copy -f hls -hls_time 10 -hls_segment_filename "/media/pluto/output%03d.ts" -hls_playlist_type vod /media/pluto/index.m3u8

# ffmpeg -i "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -c:a copy -f hls -hls_time 10 -hls_segment_filename "/media/pluto/segment%03d.ts" -hls_playlist_type vod /media/pluto/index.m3u8

# ffmpeg -i "/media/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -map_metadata -1 -map_chapters -1 -threads 0 -map 0:0 -map 0:1 -map -0:s -codec:v:0 libx264 -pix_fmt yuv420p -preset veryfast -crf 23 -maxrate 39831010 -bufsize 79662020 -profile:v:0 high -level 41 -x264opts:0 subme=0:me_range=4:rc_lookahead=10:me=dia:no_chroma_me:8x8dct=0:partitions=none -force_key_frames:0 expr:gte(t,0+n_forced*3) -vf scale=trunc(min(max(iw\,ih*dar)\,min(3840\,1920*dar))/2)*2:trunc(min(max(iw/dar\,ih)\,min(3840/dar\,1920))/2)*2 -start_at_zero -vsync -1 -codec:a:0 aac -ac 6 -ab 640000 -copyts -avoid_negative_ts disabled -max_muxing_queue_size 2048 -f hls -max_delay 5000000 -hls_time 3 -hls_segment_type mpegts -start_number 0 -hls_segment_filename /media/pluto/segment%d.ts -hls_playlist_type vod -hls_list_size 0 -y /media/pluto/index.m3u8
# time ffmpeg -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -force_key_frames "expr:gte(t,n_forced*3)" -c:v copy -c:a aac -ac 2 -f hls -hls_time 10 -hls_list_size 0 -segment_list_flags +live -hls_playlist_type event -hls_flags independent_segments -s 10x10 -f nut /mnt/g/Videos/pluto2/index.m3u8


# ffmpeg -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -map 0:0 -map 0:1 -c:a copy -c:v libx264 -use_timeline 1 -use_template 1 -window_size 5 -adaptation_sets "id=0,streams=v id=1,streams=a" -f dash /mnt/g/Videos/pluto/index.mpd

# ffmpeg -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" \
# -map 0:v -b:v:0 800k -s:v:0 640x360 -c:v:0 libx264 -bf 1 -keyint_min 120 -g 120 -sc_threshold 0 -b_strategy 0 -use_timeline 1 -use_template 1 -adaptation_sets "id=0,streams=v id=1,streams=a" -f dash /mnt/g/Videos/pluto/intermediate_360p.mpd \
# -map 0:v -b:v:1 1500k -s:v:1 1280x720 -c:v:1 libx264 -bf 1 -keyint_min 120 -g 120 -sc_threshold 0 -b_strategy 0 -use_timeline 1 -use_template 1 -adaptation_sets "id=0,streams=v id=1,streams=a" -f dash /mnt/g/Videos/pluto/intermediate_720p.mpd 

# ffmpeg -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -preset ultrafast \
# -map 0:v -c:v libx264 -x264-params keyint=60:min-keyint=60:no-scenecut=1 \
# -map 0:a -c:a copy \
# -f dash /mnt/g/Videos/pluto/index.mpd

# ffmpeg \
#     -i "/mnt/g/Videos/tvshows/PLUTO/Season 1/PLUTO - S01E07 - Episode 7 WEBDL-1080p ID431093ID.mkv" -ss 20 -preset ultrafast -strict -2 \
#     -map 0:v -c:v libx264 -x264-params keyint=60:min-keyint=60:no-scenecut=1 \
#     -map 0:a -c:a copy -map 0:1 -map 0:0 -seg_duration 10 \
#     -f dash "/mnt/g/Videos/pluto/index.mpd"