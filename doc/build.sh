set -e
gitbook install && gitbook build ./ ./_tmpbook/doc

cd ./website/
npm i
npm run build
mv -f ./target/* ../_tmpbook/
cd ../
