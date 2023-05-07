#!/usr/bin/env bash
# A srcipt to read  and set env variables from a file

filename=.env

if [ ! -f $filename ]; then
    echo "File $filename does not exist"
    exit 2
fi

while read line; do
    # echo "setting $line"
    export "$line"
done < $filename
