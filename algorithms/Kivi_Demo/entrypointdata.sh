#!/bin/bash

echo "Start algorithm ..."
cp ../custom_data/runs/result.zip ../../../data/outputs/result.zip
python3 ./val.py --weights ./trained_network.pt --data ./data/test.yaml --project ../../../data/outputs/
echo "Stop algorithm ..."