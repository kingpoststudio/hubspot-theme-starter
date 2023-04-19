/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a = (e) => (n) => typeof n == "function" ? ((t, o) => (customElements.define(t, o), o))(e, n) : ((t, o) => {
  const { kind: r, elements: i } = o;
  return { kind: r, elements: i, finisher(l) {
    customElements.define(t, l);
  } };
})(e, n);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u = ({ finisher: e, descriptor: n }) => (t, o) => {
  var r;
  if (o === void 0) {
    const i = (r = t.originalKey) !== null && r !== void 0 ? r : t.key, l = n != null ? { kind: "method", placement: "prototype", key: i, descriptor: n(t.key) } : { ...t, key: i };
    return e != null && (l.finisher = function(s) {
      e(s, i);
    }), l;
  }
  {
    const i = t.constructor;
    n !== void 0 && Object.defineProperty(t, o, n(o)), e == null || e(i, o);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var d;
const m = ((d = window.HTMLSlotElement) === null || d === void 0 ? void 0 : d.prototype.assignedElements) != null ? (e, n) => e.assignedElements(n) : (e, n) => e.assignedNodes(n).filter((t) => t.nodeType === Node.ELEMENT_NODE);
function f(e) {
  const { slot: n, selector: t } = e ?? {};
  return u({ descriptor: (o) => ({ get() {
    var r;
    const i = "slot" + (n ? `[name=${n}]` : ":not([name])"), l = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(i), s = l != null ? m(l, e) : [];
    return t ? s.filter((c) => c.matches(t)) : s;
  }, enumerable: !0, configurable: !0 }) });
}
export {
  a as e,
  f as l,
  u as o
};
