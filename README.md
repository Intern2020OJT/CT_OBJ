# CT_OBJ

## 1. mongodb 安装与启动
```sh
$ tar -zxvf mongodb-macos-x86_64-4.2.1.tgz
$ mv mongodb-macos-x86_64-4.2.1.tgz  mongodb-4.2.1
$ cd mongodb-4.2.1
$ mkdir data
$ cd ..
$ bin/mongod --dbpath ./data/
```

默认端口27017


## 2. 用nvm安装，nodejs12


## 3. 启动
```sh
nvm use 12
npm install
npm run start
```

## 4. 导入用户数据
```sh
nvm use 12
cd ../项目根目录
node ./src/tool/import_user.js
```
