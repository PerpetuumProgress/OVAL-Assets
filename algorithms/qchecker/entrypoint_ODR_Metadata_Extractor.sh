#!/bin/bash

# Run any initialization commands or setup steps here
file=$(find data/inputs -type f -name "0" -print -quit)
mkdir meta_data_extractor/ODR/data
mkdir meta_data_extractor/ODR/data/inputs
mkdir meta_data_extractor/ODR/data/outputs
cp "$file" meta_data_extractor/ODR/data/inputs

# Execute the main.py script
cd meta_data_extractor/ODR
python3 main.py

cp -r data/outputs /data
