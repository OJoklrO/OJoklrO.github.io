#!/usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f --set-upstream git@github.com:OJoklrO/OJoklrO.github.io.git master

cd -