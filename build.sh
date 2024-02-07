npm run build

mkdir -p ./build/front ./build/server ./build/api

du -hd0 node_modules


cp -r ./node_modules ./build
cp -r apps/front/dist/* ./build/front
cp -r apps/server/dist/* ./build/server
cp -r apps/api/dist/* ./build/api
