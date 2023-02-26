set -ex

rm -rf dist assets

yarn check
yarn format
yarn lint

yarn run vite build
mv dist/dev.html index.html
mv dist/assets* assets
mv dist* assets
rm -rf dist
