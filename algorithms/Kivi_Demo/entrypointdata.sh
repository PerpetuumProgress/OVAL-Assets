#!/bin/bash
echo "Start algorithm ..."
python3 ./val.py --weights ./trained_network.pt --data ./data/test.yaml --project ../../../data/outputs/
echo "Stop algorithm ..."