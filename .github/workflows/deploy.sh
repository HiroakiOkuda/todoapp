bash
#!/bin/bash
set -e

# Conoha VPSへSSH接続するキーを作成
mkdir -p ~/.ssh
echo "$CONOHA_VPS_SSH_KEY" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# ローカルでDockerイメージをビルドしてリモートホストへ転送
docker build -t todoapp-client .
docker save todoapp-client | gzip | ssh -i ~/.ssh/deploy_key $CONOHA_VPS_USER@$CONOHA_VPS_HOST 'gunzip | docker load'

# SSHで接続して、Dockerコンテナを実行する
ssh -i ~/.ssh/deploy_key $CONOHA_VPS_USER@$CONOHA_VPS_HOST "docker rm -f todoapp-client || true && docker run -d --name=todoapp-client -p $APP_PORT:80 todoapp-client"