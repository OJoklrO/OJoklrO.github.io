# !/bin/bash

read -p "name: " fname
read -p "title:" title

BLOGPATH="/home/$USER/blog/post/category/"
date=$(date "+%Y-%m-%d")
time=$(date "+%H-%M-%S")

filename=$BLOGPATH$date-$time$fname.md
touch $filename
# time: year-month-day

echo "---
title: $title
date: $date
time: $time
---

# $title
" > $filename

typora $filename
