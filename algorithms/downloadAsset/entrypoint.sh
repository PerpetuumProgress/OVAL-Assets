#!/bin/bash

file=$(find data/inputs -type f -name "0" -print -quit)
cp "$file" data/inputs
cp "$file" data/outputs