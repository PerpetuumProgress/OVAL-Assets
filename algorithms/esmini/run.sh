rm data/outputs/* -f
docker run --rm -v $(pwd)/data/inputs:/data/inputs/ -v $(pwd)/data/outputs:/data/outputs/  spokorny/ocean "./entrypoint.sh"
mpv data/outputs/output.mp4
