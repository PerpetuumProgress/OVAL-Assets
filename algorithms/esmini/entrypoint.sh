#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")

tree --du -h /data/

Xvfb :1 -screen 0 ${RESOLUTION}x16 &> xvfb.log  &

cd /data/outputs
timeout $LENGTH /esmini-demo/bin/EgoSimulator --window 0 0 ${RESOLUTION//x/ } --osc $(find /data/inputs/ -name "scenario.xosc") &
ffmpeg -video_size $RESOLUTION  -framerate  $FRAMERATE -t $LENGTH -f x11grab -i :1.0  /data/outputs/output.mp4
