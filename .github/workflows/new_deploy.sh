# GitHub Secretsから必要なシークレットキー情報を取得
KEY=$KEY
HOST=$HOST
USERNAME=$USERNAME
PORT=$PORT

# Conoha VPSへSSH接続するキーを設定
mkdir -p ~/.ssh
ssh-keyscan -p ${PORT} ${HOST} >> ~/.ssh/known_hosts
echo "${KEY}" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# ローカルでDockerイメージをビルドしてリモートホストへ転送
docker build -t todoapp-client .
docker save todoapp-client | gzip | ssh -i ~/.ssh/deploy_key ${USERNAME}@${HOST} -p ${PORT} 'gunzip | docker load'

# SSHで接続し、Dockerコンテナの管理
ssh -i ~/.ssh/deploy_key ${USERNAME}@${HOST} -p ${PORT} << 'EOF'
# Dockerコンテナの削除と実行
podman rm -f todoapp-client > /dev/null 2>&1 || echo "Container removal failed"
podman run -d --name=todoapp-client -p 3000:3000 todoapp-client > /dev/null 2>&1 || echo "Failed to run Docker container"

# エラーがあれば出力
if [ \$? -ne 0 ]; then
    echo "Failed to run Docker container."
    exit 1
fi