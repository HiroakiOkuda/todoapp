bash
#!/bin/bash
set -e

# Conoha VPSへSSH接続するキーを作成
mkdir -p ~/.ssh
echo "$CONOHA_VPS_SSH_KEY" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# SSHでVPSに接続してコードをアップロード
ssh -oStrictHostKeyChecking=no -i ~/.ssh/deploy_key $CONOHA_VPS_USER@$CONOHA_VPS_HOST "rm -rf $CONOHA_VPS_DIR/*"
rsync -avz -e "ssh -oStrictHostKeyChecking=no -i ~/.ssh/deploy_key" --exclude='.git' ./ $CONOHA_VPS_USER@$CONOHA_VPS_HOST:$CONOHA_VPS_DIR --delete