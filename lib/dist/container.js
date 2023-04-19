import { css as a, LitElement as f, html as m } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p = (t) => (e) => typeof e == "function" ? ((s, n) => (customElements.define(s, n), n))(t, e) : ((s, n) => {
  const { kind: o, elements: r } = n;
  return { kind: o, elements: r, finisher(l) {
    customElements.define(s, l);
  } };
})(t, e);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i;
((i = window.HTMLSlotElement) === null || i === void 0 ? void 0 : i.prototype.assignedElements) != null;
var u = Object.defineProperty, c = Object.getOwnPropertyDescriptor, E = (t, e, s, n) => {
  for (var o = n > 1 ? void 0 : n ? c(e, s) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (o = (n ? l(e, s, o) : l(o)) || o);
  return n && o && u(e, s, o), o;
};
let d = class extends f {
  render() {
    return m`
      <slot></slot>
    `;
  }
};
d.styles = a`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: #f5f5f5;
    }
  `;
d = E([
  p("hubspot-container")
], d);
export {
  d as default
};
