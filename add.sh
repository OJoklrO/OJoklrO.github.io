# !/bin/bash

read -p "name: " fname
read -p "title:" title

BLOGPATH="/home/$USER/blog/docs/category/"
time=$(date "+%Y-%m-%d")

filename=$BLOGPATH$time"$fname.md"
touch $filename
# time: year-month-day

echo "---
title: $title
date: $time
---
" > $filename

typora $filename
