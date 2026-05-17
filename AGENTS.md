# AGENTS.md — lifevision-network-web

LVN ウェブサイトリポ専用の AI 指示書。Codex CLI 起動時に自動連結ロード。

## このリポの目的

一般社団法人 Life Vision NetWork (LVN) の公式ウェブサイト構築。3 目的:
1. レクリエーション指導者資格取得のリード獲得 (最優先)
2. イベント・体験者募集
3. 団体理念・活動認知

## 上位設計書

本リポの判断は以下を SSOT として参照:
- `~/Library/CloudStorage/GoogleDrive-ryohmori@yairilab.net/マイドライブ/ai-company/businesses/welfare/current_state.md`
- `~/Library/CloudStorage/GoogleDrive-ryohmori@yairilab.net/マイドライブ/ai-company/businesses/welfare/website_plan.md`
- `~/Library/CloudStorage/GoogleDrive-ryohmori@yairilab.net/マイドライブ/ai-company/businesses/welfare/specs/`
- `~/Library/CloudStorage/GoogleDrive-ryohmori@yairilab.net/マイドライブ/ai-company/businesses/welfare/research/`

## 技術座組 (確定)

- Next.js 16 + React 19 + TypeScript + TailwindCSS v4
- Cloudflare Workers (`@opennextjs/cloudflare`)
- microCMS (Phase 3 で接続)

## カラー・タイポ規約

- LVN 8 色パレットは `src/app/globals.css` の `@theme` で定義済
- Tailwind は `text-[color:var(--color-lvn-blue)]` のように CSS 変数経由で参照
- 職種カラーは `--color-role-medical` 等の semantic alias を使う
- 見出し: Zen Maru Gothic (丸ゴシック・親しみ + しゃれ)
- 本文: Zen Maru Gothic Medium
- 英語: Poppins

## 重要原則

- **アクセシビリティ AA 必須** (`prefers-reduced-motion` 対応・コントラスト比 4.5:1 以上)
- **多色 × インクルージョン**: 1 色推しせず、LVN 8 色を場面別に使い分け
- **シラフゲームズの肉球モチーフ / モジニーキャラ流用 NG** (LVN 独立ブランド)

## 運用責任

- 初期: Teresa (AI) が主担当
- 将来: 現場の人に引き継ぎ可能な設計を維持 (microCMS 日本語 GUI)
