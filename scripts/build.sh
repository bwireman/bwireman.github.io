#!/usr/bin/bash
set -ex

rm -rf index.html dist assets

npm upgrade
npm audit
npm run format
npm run lint
# includes a call to `yarn vite build`
npm run test

mv dist/dev.html index.html
mv dist/assets* assets
mv dist* assets
cp src/images/android-chrome-192x192.png assets
cp src/images/android-chrome-512x512.png assets
rm -rf dist
rm -rf assets/dist
