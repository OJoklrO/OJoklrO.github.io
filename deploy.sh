#!/usr/bin/env sh

cd ~/blog
git add .
git commit -m 'deploy.sh publish'

git pull origin master
git push -f origin master

cd -
