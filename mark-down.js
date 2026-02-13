import { marked } from "./marked.js";

const markdown = (html, comp) => {
  comp = comp || document.body;
  comp.innerHTML = marked(html);
};

class MarkDown extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  constructor() {
    super();
    this._abort = null;
    this._connected = false;
  }

  connectedCallback() {
    this._connected = true;
    this._render();
  }

  disconnectedCallback() {
    this._connected = false;
    if (this._abort) {
      this._abort.abort();
      this._abort = null;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name !== "src" || oldValue === newValue) return;
    if (!this._connected) return;
    this._render();
  }

  async _render() {
    // 前の fetch があれば中断
    if (this._abort) this._abort.abort();
    this._abort = new AbortController();

    const src = this.getAttribute("src");
    if (src) {
      try {
        const res = await fetch(src, { signal: this._abort.signal });
        const text = await res.text();
        // 途中で切断されてたら何もしない
        if (!this.isConnected) return;
        markdown(text, this);
      } catch (e) {
        // abort は無視、それ以外は軽く表示（お好みで）
        if (e.name !== "AbortError") {
          this.textContent = `Failed to load: ${src}`;
        }
      }
    } else {
      // src が消えたら中身を markdown 化（初期HTML内テキストを使う）
      markdown(this.textContent, this);
    }
  }
  get src() {
    return this.getAttribute("src");
  }

  set src(value) {
    if (value === null || value === undefined) {
      this.removeAttribute("src");
    } else {
      this.setAttribute("src", value);
    }
  }
}

customElements.define("mark-down", MarkDown);

export { markdown };
