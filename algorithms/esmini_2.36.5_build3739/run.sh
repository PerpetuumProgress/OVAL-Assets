rm data/outputs/* -f
docker run --rm -v $(pwd)/data/inputs:/data/inputs/ -v $(pwd)/data/outputs:/data/outputs/  esmini "./entrypoint.sh"
