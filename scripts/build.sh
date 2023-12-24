set -ex

rm -rf index.html dist assets

yarn upgrade
yarn audit
yarn check
yarn format
yarn lint
# includes a call to `yarn vite build`
yarn test

mv dist/dev.html index.html
mv dist/assets* assets
mv dist* assets
cp src/images/android-chrome-192x192.png assets
cp src/images/android-chrome-512x512.png assets
rm -rf dist
rm -rf assets/dist
