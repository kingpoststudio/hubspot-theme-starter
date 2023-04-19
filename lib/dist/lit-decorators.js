import { o as s, l as c } from "./query-assigned-elements-4116bfbb.js";
import { e as A } from "./query-assigned-elements-4116bfbb.js";
import { e as v } from "./property-ca27685b.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function m(e) {
  return v({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function p(e) {
  return s({ finisher: (n, t) => {
    Object.assign(n.prototype[t], e);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function g(e, n) {
  return s({ descriptor: (t) => {
    const o = { get() {
      var r, l;
      return (l = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(e)) !== null && l !== void 0 ? l : null;
    }, enumerable: !0, configurable: !0 };
    if (n) {
      const r = typeof t == "symbol" ? Symbol() : "__" + t;
      o.get = function() {
        var l, i;
        return this[r] === void 0 && (this[r] = (i = (l = this.renderRoot) === null || l === void 0 ? void 0 : l.querySelector(e)) !== null && i !== void 0 ? i : null), this[r];
      };
    }
    return o;
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function b(e) {
  return s({ descriptor: (n) => ({ get() {
    var t, o;
    return (o = (t = this.renderRoot) === null || t === void 0 ? void 0 : t.querySelectorAll(e)) !== null && o !== void 0 ? o : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function h(e) {
  return s({ descriptor: (n) => ({ async get() {
    var t;
    return await this.updateComplete, (t = this.renderRoot) === null || t === void 0 ? void 0 : t.querySelector(e);
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function q(e, n, t) {
  let o, r = e;
  return typeof e == "object" ? (r = e.slot, o = e) : o = { flatten: n }, t ? c({ slot: r, flatten: n, selector: t }) : s({ descriptor: (l) => ({ get() {
    var i, u;
    const d = "slot" + (r ? `[name=${r}]` : ":not([name])"), a = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(d);
    return (u = a == null ? void 0 : a.assignedNodes(o)) !== null && u !== void 0 ? u : [];
  }, enumerable: !0, configurable: !0 }) });
}
export {
  A as customElement,
  p as eventOptions,
  v as property,
  g as query,
  b as queryAll,
  c as queryAssignedElements,
  q as queryAssignedNodes,
  h as queryAsync,
  m as state
};
