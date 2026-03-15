# mark-down

mark-downは、マークダウンパーサーのmarkedをフォークしたタグです。マークダウンをHTMLに変換し、外部のマークダウンファイルを読み込んで表示する機能を持っています。

## デモ

[デモページ](https://code4fukui.github.io/mark-down/demo/)でmark-downを動作させることができます。

## 機能

- マークダウンをHTMLに変換する
- 外部のマークダウンファイルを読み込んで表示できる

## 使い方

```html
<script type="module" src="https://code4fukui.github.io/mark-down/mark-down.js"></script>
<mark-down>
# Marked in the browser

Rendered by **marked**.
</mark-down>
```

mark-downタグのsrc属性に指定したURLからmark-down.jsを読み込むことで利用できます。

## ライセンス

MITライセンスです。