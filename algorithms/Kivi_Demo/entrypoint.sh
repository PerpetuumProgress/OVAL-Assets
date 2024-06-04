#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")

echo "Find local_data_path ..."
local_data_path=$(find /data/inputs/ -type d -name "KIVI_data" | head -n 1)

if [ -d "$local_data_path" ]; then
    echo "Found local_data_path: $local_data_path"
    echo "Copy Data to Local Path"
    cp -r "$local_data_path/"* /usr/src/custom_data/
else
    echo "KIVI_data folder not found!"
    exit 1
fi

cd ../..

echo "Start algorithm ..."
timeout 30 python3 ./usr/src/app/val.py --weights ./usr/src/app/trained_network.pt --data ./usr/src/app/data/test.yaml --project ./data/outputs
echo "Stop algorithm ..."