import { css as m, LitElement as i, html as c } from "lit";
import { e as f } from "./query-assigned-elements-4116bfbb.js";
import { e as d } from "./property-ca27685b.js";
var u = Object.defineProperty, h = Object.getOwnPropertyDescriptor, l = (p, r, s, t) => {
  for (var e = t > 1 ? void 0 : t ? h(r, s) : r, a = p.length - 1, n; a >= 0; a--)
    (n = p[a]) && (e = (t ? n(r, s, e) : n(e)) || e);
  return t && e && u(r, s, e), e;
};
let o = class extends i {
  constructor() {
    super(...arguments), this.theme = "light";
  }
  render() {
    return c`
      <div class="wrapper ${this.theme}">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="cta"></slot>
      </div>
    `;
  }
};
o.styles = m`
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      max-width: 20rem;
      margin: 0 auto;
      padding: 2rem;
      background: #fff;
      border-radius: 1rem;
      box-shadow: var(--box-shadow);
    }

    .wrapper.dark {
      background: #000;
      color: #fff;
    }

    .wrapper > slot[name="title"] {
      text-transform: uppercase;
    }
  `;
l([
  d({ type: String })
], o.prototype, "theme", 2);
o = l([
  f("hubspot-card")
], o);
export {
  o as default
};
