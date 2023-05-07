#!/usr/bin/env bash
# A script to read and set env variables from a file

echo $process.env

filename=$process.env

if [ ! -f $filename ]; then
    echo "File $filename does not exist"
    exit 2
fi

while read line; do
    # echo "setting $line"
    export "$line"
done < $filename
