# mark-down

ブラウザでMarkdownをレンダリングするためのカスタムHTML要素です。[marked](https://github.com/markedjs/marked)からフォークされました。

## デモ

mark-downの動作を確認するには[デモページ](./demo/)をご覧ください。

## 機能

- **宣言的な使用:** Markdownを`<mark-down>`タグで囲むだけで使用できます。
- **外部ファイルの読み込み:** `src`属性を使用して、リモートのMarkdownファイルを取得およびレンダリングできます。
- **動的更新:** `src`属性が変更されると、要素が自動的に再レンダリングされます。
- **標準規格準拠:** CommonMarkおよびGitHub Flavored Markdownをサポートしています。

## 使い方

ページにスクリプトを追加し、以下の2つのいずれかの方法で`<mark-down>`要素を使用します。

### 1. インラインコンテンツ

Markdownを直接要素内に配置します。

```html
<script type="module" src="https://code4fukui.github.io/mark-down/mark-down.js"></script>

<mark-down>
# Marked in the browser

Rendered by **marked**.
</mark-down>
```

### 2. 外部ファイル

`src`属性を使用してMarkdownファイルを指定します。コンテンツは非同期で取得され、レンダリングされます。

```html
<script type="module" src="https://code4fukui.github.io/mark-down/mark-down.js"></script>

<mark-down src="./path/to/your/file.md"></mark-down>
```

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
