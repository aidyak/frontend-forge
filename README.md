![Forge Logo](public/forge_logo.png)

# Frontend Forge
フロントエンドと軽量バックエンドをまとめたモノレポ

## ディレクトリ構成
- `frontend/` : React + TypeScript + Vite。UI とブラウザ/ユニットテストを含む。
- `backend/`  : Hono (AWS Lambda 想定) の API。esbuild でバンドル。
- `public/`   : 共有アセット（ロゴなど）。

## セットアップ
```bash
pnpm install --filter ./frontend
pnpm install --filter ./backend
```

## よく使うコマンド
- フロントエンド開発: `cd frontend && pnpm dev`
- フロントエンドビルド: `cd frontend && pnpm build`
- フロントエンドテスト: `cd frontend && pnpm test`（ブラウザ: `pnpm test:browser`）
- バックエンドビルド: `cd backend && pnpm build`
- バックエンドテスト: `cd backend && pnpm test`

## バックエンドデプロイ例（AWS Lambda）
```bash
cd backend
pnpm build && pnpm zip
pnpm update   # aws-cli が hello 関数を更新
```

## 補足
- Node.js 20 以降を推奨（pnpm v10 で検証）。
- 環境変数やシークレットはコミットせず、各クラウドのシークレット管理を使用すること。
