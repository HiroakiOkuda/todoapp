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

# ローカルでPodmanイメージをビルドしてリモートホストへ転送
podman build -t todoapp-client .
podman save todoapp-client | gzip | ssh -i ~/.ssh/deploy_key "${USERNAME}@${HOST}" -p "${PORT}" 'gunzip | podman load'

# SSHで接続し、Podmanコンテナの管理
ssh -i ~/.ssh/deploy_key "${USERNAME}@${HOST}" -p "${PORT}" << 'EOF'

# Podmanコンテナの削除と実行
podman rm -f todoapp-client || true
if ! podman run -d --name=todoapp-client -p 3000:3000 todoapp-client; then
    echo "Failed to run Podman container."
    exit 1
fi

EOF

# エラーがあれば出力
if [ $? -eq 0 ]; then
    echo "Deployment succeeded"
else 
    echo "Deployment failed"
    exit 1
fi