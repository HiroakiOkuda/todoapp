bash
#!/bin/bash
set -e

# Conoha VPSへSSH接続するキーを作成
mkdir -p ~/.ssh
ssh-keyscan -p ${PORT} ${HOST} >> ~/.ssh/known_hosts
echo "${PRIVATE_KEY}" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# ローカルでDockerイメージをビルドしてリモートホストへ転送
docker build -t todoapp-client .
docker save todoapp-client | gzip | ssh -i ~/.ssh/deploy_key ${USERNAME}@${HOST} 'gunzip | docker load'

# SSHで接続して、Dockerコンテナを実行する
ssh -i ~/.ssh/deploy_key ${USERNAME}@${HOST} -p ${PORT} "docker rm -f todoapp-client || true && docker run -d --name=todoapp-client -p ${PORT}:80 todoapp-client"