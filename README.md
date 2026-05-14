# mark-down

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element for rendering Markdown in the browser, forked from [marked](https://github.com/markedjs/marked).

## Demo

Checkout the [demo page](./demo/) to see mark-down in action.

## Features

- **Declarative Usage:** Simply wrap your Markdown in a `<mark-down>` tag.
- **External File Loading:** Use the `src` attribute to fetch and render remote Markdown files.
- **Dynamic Updates:** The element automatically re-renders when the `src` attribute changes.
- **Standards Compliant:** Supports CommonMark and GitHub Flavored Markdown.

## Usage

Add the script to your page, then use the `<mark-down>` element in one of two ways.

### 1. Inline Content

Place Markdown directly inside the element.

```html
<script type="module" src="https://code4fukui.github.io/mark-down/mark-down.js"></script>

<mark-down>
# Marked in the browser

Rendered by **marked**.
</mark-down>
```

### 2. External File

Use the `src` attribute to point to a Markdown file. The content will be fetched and rendered asynchronously.

```html
<script type="module" src="https://code4fukui.github.io/mark-down/mark-down.js"></script>

<mark-down src="./path/to/your/file.md"></mark-down>
```

## License

MIT License — see [LICENSE](LICENSE).