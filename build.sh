
npm ci
npm run build

rm -rf ./build
mkdir -p ./build/front ./build/server ./build/api

du -hd0 node_modules
cp -r -L ./node_modules ./build/server
cp -r -L ./node_modules ./build/api
cp -r apps/front/dist/* ./build/front
cp -r apps/server/dist/* ./build/server
cp -r apps/api/dist/* ./build/api
