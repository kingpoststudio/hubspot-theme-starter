import { css as p, LitElement as f, html as i } from "lit";
import { e as m } from "./query-assigned-elements-4116bfbb.js";
var c = Object.defineProperty, u = Object.getOwnPropertyDescriptor, d = (a, r, s, t) => {
  for (var e = t > 1 ? void 0 : t ? u(r, s) : r, o = a.length - 1, l; o >= 0; o--)
    (l = a[o]) && (e = (t ? l(r, s, e) : l(e)) || e);
  return t && e && c(r, s, e), e;
};
let n = class extends f {
  render() {
    return i`
      <slot></slot>
    `;
  }
};
n.styles = p`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: #f5f5f5;
    }
  `;
n = d([
  m("hubspot-container")
], n);
export {
  n as default
};
