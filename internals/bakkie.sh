#!/usr/bin/env bash

set -u
set -e
set -x

echo Building $1

echo Build distribution of this branch
export NODE_ENV=development

rm -rf node_modules
npm install
npm run build:acc

echo Publish distribution in web-dir
OUTDIR=/var/www/html/signals/builds/$1
if [ ! -d ${OUTDIR} ];
	then mkdir -p ${OUTDIR};
fi
cp -r build/* ${OUTDIR}

echo Generate new index.html for all branches
echo '<h1>SIA links</h1>' > /var/www/html/signals/index.html
echo "<h2>Generated at `date`</h2>" >> /var/www/html/signals/index.html
find /var/www/html/signals -name index.html -printf "%T+\t%p\n" \
    | sort -r \
    | grep 'signals' \
    | sed 's/^.*\/signals/\/signals/' \
    | sed 's/\/index.html//' \
    | sed 's/^.*$/<p><a href="\0">\0<\/a><p>/' \
    >> /var/www/html/signals/index.html
echo Done
