/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c = (t, i) => i.kind === "method" && i.descriptor && !("value" in i.descriptor) ? { ...i, finisher(r) {
  r.createProperty(i.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: i.key, initializer() {
  typeof i.initializer == "function" && (this[i.key] = i.initializer.call(this));
}, finisher(r) {
  r.createProperty(i.key, t);
} };
function y(t) {
  return (i, r) => r !== void 0 ? ((e, o, n) => {
    o.constructor.createProperty(n, e);
  })(t, i, r) : c(t, i);
}
export {
  y as e
};
