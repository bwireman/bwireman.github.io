set -ex

rm -rf index.html dist assets

yarn check
yarn format
yarn lint
# includes a call to `yarn vite build`
yarn test

mv dist/dev.html index.html
mv dist/assets* assets
mv dist* assets
rm -rf dist
rm -rf assets/dist

