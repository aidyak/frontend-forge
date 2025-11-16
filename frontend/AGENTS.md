# Repository Guidelines

## プロジェクト構成
- `src/`: React + TypeScript の主コード。`main.tsx` でエントリ、`App.tsx` がサンプル画面。`assets/` は画像等、`App.test.tsx` がサンプルテスト、`setupTests.ts` で matcher を登録。
- `public/`: 静的配信用。`index.html` は Vite テンプレート。
- ルート設定: `vite.config.ts`（ビルド）、`vitest.config.ts`（テスト）、`tsconfig*.json`（型設定）、`eslint.config.js`（Lint）。生成物は `dist/`（無視対象）。

## セットアップ / ビルド・実行
- 推奨パッケージマネージャー: `pnpm`（`pnpm install` で依存取得）。
- 開発サーバー: `pnpm dev`（標準ポート 5173、衝突時は `pnpm dev -- --port 5xxx`）。
- 本番ビルド: `pnpm build`（`tsc -b` 後 `vite build`、成果物は `dist/`）。
- ビルド確認: `pnpm preview`（ローカルで `dist/` をサーブ）。
- 静的解析: `pnpm lint`（ESLint flat config、TypeScript/React/HMR 対応）。
- テスト実行: `pnpm test`（Vitest ブラウザランナー、Playwright Chromium）。

## コーディング規約
- 言語: TypeScript + React 19。JSX/TSX を使用。
- スタイル目安: インデント 2 スペース、シングルクォート、セミコロンなし（既存コードに準拠）。import 並びやスペースは ESLint/フォーマッターに委譲。
- Lint 設定: `recommended` + `typescript` + `react-hooks` + `react-refresh`。`dist` は無視。必要に応じて型チェック系ルールを拡張可能。
- CSS: グローバルは `src/index.css`、コンポーネント単位は `App.css` など。クラス名は `kebab-case` を推奨。

## テスト方針
- フレームワーク: Vitest + @testing-library/jest-dom。`src/setupTests.ts` で matcher を登録。
- 実行環境: ブラウザモード（Playwright Chromium）。DOM 操作は Testing Library を優先し、実ユーザー操作に近い記述を推奨。
- 追加テスト: ファイルは対象コンポーネント付近に `*.test.tsx` で配置。主要 UI・ロジックごとに少なくとも 1 ケースを用意し、過度なモックは避ける。
- 任意で `pnpm test --coverage` を用いてカバレッジ確認（閾値未設定）。

## コミット / PR ガイド
- Git 履歴は未整備。読みやすさのため Conventional Commits 形式を推奨（例: `feat: add counter`, `fix: handle null state`, `chore: update deps`）。件名は命令形で簡潔に。
- PR では以下を明記: 変更概要、テスト実行結果（`pnpm lint` / `pnpm test`）、関連 Issue/タスク番号、UI 変更があればスクリーンショットや GIF。
- 原則 1 PR = 1 目的。大きな差分は分割を検討し、自己レビュー後に提出。

## セキュリティ / 設定ヒント
- API キーなど秘匿情報は `.env` 系に置き、VCS に含めない。Vite でクライアント公開する環境変数は `VITE_` 接頭辞を付ける。
- 依存の更新時は `pnpm update --interactive` などで影響を確認し、ビルド・テストを再実行してから PR を作成。
