npm run build

cp -rf ./build/* ../

cd ../

git add .
git commit -m "update: 更新UI🌙"
git push origin master