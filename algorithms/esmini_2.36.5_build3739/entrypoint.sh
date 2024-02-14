#!/bin/bash

Xvfb :1 -screen 0 ${RESOLUTION}x16 &> xvfb.log  &

cd /data/outputs

timeout $LENGTH /esmini-demo/bin/odrviewer --window 0 0 ${RESOLUTION//x/ } --odr $(find /data/inputs/ -name ""0"") --density 5.0 --ground_plane  & ffmpeg -video_size $RESOLUTION  -framerate  $FRAMERATE -t $LENGTH -f x11grab -i :1.0  /data/outputs/output.mp4
