#!/usr/bin/env sh

cd ~/blog
git add .
git commit -m 'deploy.sh publish'

git pull origin master
git push origin master

cd -