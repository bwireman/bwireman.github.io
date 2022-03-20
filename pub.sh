set -e
cd assets/js

gleam clean
rm out.js
gleam build --target javascript
yarn run esbuild src/entry.js --minify --bundle --outfile=out.js
