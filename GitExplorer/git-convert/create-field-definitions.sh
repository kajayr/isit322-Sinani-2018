#!/bin/bash
echo `curl https://api.github.com/users/kajayr > ~/Git/ISIT322/isit322-leosinani-2018/GitExplorer/git-convert/git-user.json`
echo `cd ../git-convert/ && node scripts/mytest1.js > ~/Git/ISIT322/isit322-leosinani-2018/GitExplorer/client/src/field-definitions.js`

