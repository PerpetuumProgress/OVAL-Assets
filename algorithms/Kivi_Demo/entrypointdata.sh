#!/bin/bash
echo "Start algorithm ..."
python3 ./usr/src/app/val.py --weights ./usr/src/app/trained_network.pt --data ./usr/src/app/data/test.yaml --project ./data/outputs/
echo "Stop algorithm ..."