#! /usr/bin/env bash

npm run build

if [ "$(git status -s)" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf dist
mkdir dist
git worktree prune
rm -rf .git/worktrees/dist/

echo "Checking out gh-pages branch into dist"
git worktree add -B gh-pages dist origin/gh-pages

echo "Removing existing files"
rm -rf dist/*

echo "Generating site"
npm run build

echo "Updating gh-pages branch"
cd dist && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

echo "Pushing to github"
git push origin gh-pages
