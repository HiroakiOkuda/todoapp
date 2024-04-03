# GitHub Secretsから必要なシークレットキー情報を取得
KEY="$KEY"
HOST="$HOST"
USERNAME="$USERNAME"
PORT="$PORT"

# Conoha VPSへSSH接続するキーを設定
mkdir -p ~/.ssh
ssh-keyscan -p "${PORT}" "${HOST}" >> ~/.ssh/known_hosts
echo "${KEY}" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# ローカルでdockerイメージをビルドしてリモートホストへ転送
docker build -t todoapp-client -f ./docker/Dockerfile_todoapp_conoha .
docker save todoapp-client | gzip | ssh -i ~/.ssh/deploy_key "${USERNAME}@${HOST}" -p "${PORT}" 'gunzip | docker load'

# SSHで接続し、dockerコンテナの管理
ssh -i ~/.ssh/deploy_key "${USERNAME}@${HOST}" -p "${PORT}" << EOF

# dockerコンテナの削除と実行
    docker stop todoapp-client || true  # 既に実行中のコンテナがあれば停止
    docker rm todoapp-client || true  # 停止したコンテナを削除
    docker run -d --name todoapp-client -p 3000:3000 todoapp-client  # 新しいコンテナを起動
EOF

# エラーがあれば出力
if [ $? -eq 0 ]; then
    echo "Deployment succeeded"
else 
    echo "Deployment failed"
    exit 1
fi