# Life Vision NetWork (LVN) — Public Website

一般社団法人 Life Vision NetWork (LVN) の公式ウェブサイト。

## 技術スタック

- **Framework**: Next.js 16 + React 19 + TypeScript
- **Styling**: TailwindCSS v4 (`@theme` ディレクティブ)
- **Deploy**: Cloudflare Workers (`@opennextjs/cloudflare` 経由)
- **CMS**: microCMS (Phase 3 で接続予定)
- **Fonts**: Zen Maru Gothic (日本語) + Poppins (英語)

## 開発

```bash
npm install
npm run dev
# → http://localhost:3000
```

## デプロイ

```bash
npm run cf:deploy  # Cloudflare Workers へデプロイ
npm run cf:preview # ローカルで Workers プレビュー
```

## 設計ドキュメント

設計書は別リポ `shelaugh/ai-company` の `businesses/welfare/` に集約:

- `current_state.md` — 現状ステータス
- `website_plan.md` — サイト構築プラン
- `specs/lvn-spec-original-20260225.md` — オーナー叩き台
- `specs/lvn-poem-20250627.md` — キャッチコピー資産
- `research/` — リサーチ Agent 結果 (4 ファイル)
- `assets/logo/lvn-logo-draft-20260304.png` — 仮ロゴ

## LVN カラーパレット (仮ロゴから抽出)

| 色 | Hex | 職種割当 |
|---|---|---|
| ピンク | `#FF4FB0` | 保育 / こどもパネル |
| レッド | `#FF5A5A` | スポーツ / 資格申込 CTA |
| パープル | `#9B5BFF` | 福祉 / 国際文化 |
| ブルー | `#2D8BFF` | 医療 / Co Lab LIFE |
| ライムグリーン | `#B6EE5E` | おもいやり / なごみカフェ |
| グリーン | `#4FC04F` | 介護 / しあわせ |
| イエロー | `#FFD647` | レクリエーション / ボドレク |
| オレンジ | `#FFA235` | お知らせ強調 |

## ライセンス

Private — Life Vision NetWork (一般社団法人) 専用。
