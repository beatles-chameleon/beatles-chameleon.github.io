set -e

GIT_SITE="git@github.com"
TEAM_NAME="beatles-chameleon"
PROJECT_NAME="${TEAM_NAME}.github.io"

sh ./check.sh

# mac下如果使用自带的sed命令需要修改为以下
/usr/bin/sed -i "" 's#/chameleon/doc/#/doc/#g' "book.json"

if [ ! -d "./${PROJECT_NAME}" ];then
git clone ${GIT_SITE}:${TEAM_NAME}/${PROJECT_NAME}.git  --depth=1
else
cd ./${PROJECT_NAME}
git pull
cd ../
fi

cd ./website/
npm i
npm run build
cp CNAME ../${PROJECT_NAME}/
cp -rf ./target/* ../${PROJECT_NAME}/
cd ../

gitbook install && gitbook build && rm -rf ./${PROJECT_NAME}/doc && mv -f ./_book ./${PROJECT_NAME}/doc
rm -rf ./${PROJECT_NAME}/doc/website

# mac下如果使用自带的sed命令需要修改为以下
/usr/bin/sed -i "" 's#/doc/#/chameleon/doc/#g' "book.json"


cd ./${PROJECT_NAME}
git diff

read -p "你确定要推送到beatles-chameleon.github.io吗[Y/y]?" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
git add .
git commit -am "help document"
git push origin master
echo "\033[36m推送完毕\033[0m"
cd ../
else
echo "你取消了推送"
cd ../
fi
