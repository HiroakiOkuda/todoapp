bash
#!/bin/bash
set -e

# 変数のdebug

echo "key: $key"
echo "username: $username"
echo "host: $host"
echo "port: $port"

# Conoha VPSへSSH接続するキーを作成
mkdir -p ~/.ssh
echo "$key" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# ローカルでDockerイメージをビルドしてリモートホストへ転送
docker build -t todoapp-client .
docker save todoapp-client | gzip | ssh -i ~/.ssh/deploy_key $username@$host 'gunzip | docker load'

# SSHで接続して、Dockerコンテナを実行する
ssh -i ~/.ssh/deploy_key $username@$host "docker rm -f todoapp-client || true && docker run -d --name=todoapp-client -p $port:80 todoapp-client"