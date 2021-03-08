# !/bin/bash

read -p "title: " title

BLOGPATH="/home/$USER/blog/docs/category/"

filename=$BLOGPATH"$title.md"
touch $filename
# time: year-month-day
time=$(date "+%Y-%m-%d")

echo "---
title: $title
date: $time
---
" > $filename

typora $filename
