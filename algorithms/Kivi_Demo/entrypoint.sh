#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")

echo "Find local_data_path ..."
echo $(dirname $(find /data/inputs/ -type d -name "KIVI_data"))

echo "Copy Data to Local Path"
cp $(dirname $(find /data/inputs/ -type d -name "KIVI_data")) /usr/src/custom_data

echo "Tree /data/:"
ls -R /data/

echo "Start algorithm ..."
python3 ./val.py --weights trained_network.pt --data test.yaml 