(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function vr(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function _r(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = de(r) ? ii(r) : _r(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else {
    if (de(e)) return e;
    if (re(e)) return e;
  }
}
const ri = /;(?![^(]*\))/g,
  oi = /:([^]+)/,
  si = /\/\*.*?\*\//gs;
function ii(e) {
  const t = {};
  return (
    e
      .replace(si, "")
      .split(ri)
      .forEach((n) => {
        if (n) {
          const r = n.split(oi);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function _t(e) {
  let t = "";
  if (de(e)) t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const r = _t(e[n]);
      r && (t += r + " ");
    }
  else if (re(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const li =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ai = vr(li);
function Ho(e) {
  return !!e || e === "";
}
function ci(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = nn(e[r], t[r]);
  return n;
}
function nn(e, t) {
  if (e === t) return !0;
  let n = Vr(e),
    r = Vr(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = Gt(e)), (r = Gt(t)), n || r)) return e === t;
  if (((n = O(e)), (r = O(t)), n || r)) return n && r ? ci(e, t) : !1;
  if (((n = re(e)), (r = re(t)), n || r)) {
    if (!n || !r) return !1;
    const o = Object.keys(e).length,
      s = Object.keys(t).length;
    if (o !== s) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        a = t.hasOwnProperty(i);
      if ((l && !a) || (!l && a) || !nn(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function kr(e, t) {
  return e.findIndex((n) => nn(n, t));
}
const Re = (e) =>
    de(e)
      ? e
      : e == null
      ? ""
      : O(e) || (re(e) && (e.toString === Uo || !$(e.toString)))
      ? JSON.stringify(e, No, 2)
      : String(e),
  No = (e, t) =>
    t && t.__v_isRef
      ? No(e, t.value)
      : Et(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : Bt(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : re(t) && !O(t) && !Vo(t)
      ? String(t)
      : t,
  se = {},
  Kt = [],
  Ne = () => {},
  ui = () => !1,
  fi = /^on[^a-z]/,
  An = (e) => fi.test(e),
  xr = (e) => e.startsWith("onUpdate:"),
  xe = Object.assign,
  wr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  di = Object.prototype.hasOwnProperty,
  G = (e, t) => di.call(e, t),
  O = Array.isArray,
  Et = (e) => rn(e) === "[object Map]",
  Bt = (e) => rn(e) === "[object Set]",
  Vr = (e) => rn(e) === "[object Date]",
  $ = (e) => typeof e == "function",
  de = (e) => typeof e == "string",
  Gt = (e) => typeof e == "symbol",
  re = (e) => e !== null && typeof e == "object",
  jo = (e) => re(e) && $(e.then) && $(e.catch),
  Uo = Object.prototype.toString,
  rn = (e) => Uo.call(e),
  hi = (e) => rn(e).slice(8, -1),
  Vo = (e) => rn(e) === "[object Object]",
  yr = (e) =>
    de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  pn = vr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Sn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  pi = /-(\w)/g,
  Ze = Sn((e) => e.replace(pi, (t, n) => (n ? n.toUpperCase() : ""))),
  gi = /\B([A-Z])/g,
  Ot = Sn((e) => e.replace(gi, "-$1").toLowerCase()),
  Cn = Sn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  jn = Sn((e) => (e ? `on${Cn(e)}` : "")),
  qt = (e, t) => !Object.is(e, t),
  gn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  wn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  yn = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Wr;
const mi = () =>
  Wr ||
  (Wr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let De;
class bi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = De),
      !t && De && (this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = De;
      try {
        return (De = this), t();
      } finally {
        De = n;
      }
    }
  }
  on() {
    De = this;
  }
  off() {
    De = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function vi(e, t = De) {
  t && t.active && t.effects.push(e);
}
function _i() {
  return De;
}
const Tr = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Wo = (e) => (e.w & ct) > 0,
  Go = (e) => (e.n & ct) > 0,
  ki = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ct;
  },
  xi = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        Wo(o) && !Go(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~ct),
          (o.n &= ~ct);
      }
      t.length = n;
    }
  },
  Xn = new WeakMap();
let Nt = 0,
  ct = 1;
const er = 30;
let $e;
const kt = Symbol(""),
  tr = Symbol("");
class zr {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      vi(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = $e,
      n = lt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = $e),
        ($e = this),
        (lt = !0),
        (ct = 1 << ++Nt),
        Nt <= er ? ki(this) : Gr(this),
        this.fn()
      );
    } finally {
      Nt <= er && xi(this),
        (ct = 1 << --Nt),
        ($e = this.parent),
        (lt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    $e === this
      ? (this.deferStop = !0)
      : this.active &&
        (Gr(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Gr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let lt = !0;
const qo = [];
function Ft() {
  qo.push(lt), (lt = !1);
}
function Dt() {
  const e = qo.pop();
  lt = e === void 0 ? !0 : e;
}
function Ke(e, t, n) {
  if (lt && $e) {
    let r = Xn.get(e);
    r || Xn.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Tr())), Yo(o);
  }
}
function Yo(e, t) {
  let n = !1;
  Nt <= er ? Go(e) || ((e.n |= ct), (n = !Wo(e))) : (n = !e.has($e)),
    n && (e.add($e), $e.deps.push(e));
}
function et(e, t, n, r, o, s) {
  const i = Xn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && O(e)) {
    const a = Number(r);
    i.forEach((u, f) => {
      (f === "length" || f >= a) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        O(e)
          ? yr(n) && l.push(i.get("length"))
          : (l.push(i.get(kt)), Et(e) && l.push(i.get(tr)));
        break;
      case "delete":
        O(e) || (l.push(i.get(kt)), Et(e) && l.push(i.get(tr)));
        break;
      case "set":
        Et(e) && l.push(i.get(kt));
        break;
    }
  if (l.length === 1) l[0] && nr(l[0]);
  else {
    const a = [];
    for (const u of l) u && a.push(...u);
    nr(Tr(a));
  }
}
function nr(e, t) {
  const n = O(e) ? e : [...e];
  for (const r of n) r.computed && qr(r);
  for (const r of n) r.computed || qr(r);
}
function qr(e, t) {
  (e !== $e || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const wi = vr("__proto__,__v_isRef,__isVue"),
  Zo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Gt)
  ),
  yi = Kr(),
  Ti = Kr(!1, !0),
  zi = Kr(!0),
  Yr = Ki();
function Ki() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = q(this);
        for (let s = 0, i = this.length; s < i; s++) Ke(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(q)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Ft();
        const r = q(this)[t].apply(this, n);
        return Dt(), r;
      };
    }),
    e
  );
}
function Ei(e) {
  const t = q(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
function Kr(e = !1, t = !1) {
  return function (r, o, s) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && s === (e ? (t ? ji : ts) : t ? es : Xo).get(r))
      return r;
    const i = O(r);
    if (!e) {
      if (i && G(Yr, o)) return Reflect.get(Yr, o, s);
      if (o === "hasOwnProperty") return Ei;
    }
    const l = Reflect.get(r, o, s);
    return (Gt(o) ? Zo.has(o) : wi(o)) || (e || Ke(r, "get", o), t)
      ? l
      : _e(l)
      ? i && yr(o)
        ? l
        : l.value
      : re(l)
      ? e
        ? ns(l)
        : on(l)
      : l;
  };
}
const Ai = Jo(),
  Si = Jo(!0);
function Jo(e = !1) {
  return function (n, r, o, s) {
    let i = n[r];
    if (Ct(i) && _e(i) && !_e(o)) return !1;
    if (
      !e &&
      (!Tn(o) && !Ct(o) && ((i = q(i)), (o = q(o))), !O(n) && _e(i) && !_e(o))
    )
      return (i.value = o), !0;
    const l = O(n) && yr(r) ? Number(r) < n.length : G(n, r),
      a = Reflect.set(n, r, o, s);
    return (
      n === q(s) && (l ? qt(o, i) && et(n, "set", r, o) : et(n, "add", r, o)), a
    );
  };
}
function Ci(e, t) {
  const n = G(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && et(e, "delete", t, void 0), r;
}
function Ri(e, t) {
  const n = Reflect.has(e, t);
  return (!Gt(t) || !Zo.has(t)) && Ke(e, "has", t), n;
}
function Mi(e) {
  return Ke(e, "iterate", O(e) ? "length" : kt), Reflect.ownKeys(e);
}
const Qo = { get: yi, set: Ai, deleteProperty: Ci, has: Ri, ownKeys: Mi },
  Pi = {
    get: zi,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Ii = xe({}, Qo, { get: Ti, set: Si }),
  Er = (e) => e,
  Rn = (e) => Reflect.getPrototypeOf(e);
function an(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = q(e),
    s = q(t);
  n || (t !== s && Ke(o, "get", t), Ke(o, "get", s));
  const { has: i } = Rn(o),
    l = r ? Er : n ? Cr : Yt;
  if (i.call(o, t)) return l(e.get(t));
  if (i.call(o, s)) return l(e.get(s));
  e !== o && e.get(t);
}
function cn(e, t = !1) {
  const n = this.__v_raw,
    r = q(n),
    o = q(e);
  return (
    t || (e !== o && Ke(r, "has", e), Ke(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function un(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ke(q(e), "iterate", kt), Reflect.get(e, "size", e)
  );
}
function Zr(e) {
  e = q(e);
  const t = q(this);
  return Rn(t).has.call(t, e) || (t.add(e), et(t, "add", e, e)), this;
}
function Jr(e, t) {
  t = q(t);
  const n = q(this),
    { has: r, get: o } = Rn(n);
  let s = r.call(n, e);
  s || ((e = q(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), s ? qt(t, i) && et(n, "set", e, t) : et(n, "add", e, t), this
  );
}
function Qr(e) {
  const t = q(this),
    { has: n, get: r } = Rn(t);
  let o = n.call(t, e);
  o || ((e = q(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && et(t, "delete", e, void 0), s;
}
function Xr() {
  const e = q(this),
    t = e.size !== 0,
    n = e.clear();
  return t && et(e, "clear", void 0, void 0), n;
}
function fn(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      l = q(i),
      a = t ? Er : e ? Cr : Yt;
    return (
      !e && Ke(l, "iterate", kt), i.forEach((u, f) => r.call(o, a(u), a(f), s))
    );
  };
}
function dn(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = q(o),
      i = Et(s),
      l = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      u = o[e](...r),
      f = n ? Er : t ? Cr : Yt;
    return (
      !t && Ke(s, "iterate", a ? tr : kt),
      {
        next() {
          const { value: p, done: h } = u.next();
          return h
            ? { value: p, done: h }
            : { value: l ? [f(p[0]), f(p[1])] : f(p), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function nt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Bi() {
  const e = {
      get(s) {
        return an(this, s);
      },
      get size() {
        return un(this);
      },
      has: cn,
      add: Zr,
      set: Jr,
      delete: Qr,
      clear: Xr,
      forEach: fn(!1, !1),
    },
    t = {
      get(s) {
        return an(this, s, !1, !0);
      },
      get size() {
        return un(this);
      },
      has: cn,
      add: Zr,
      set: Jr,
      delete: Qr,
      clear: Xr,
      forEach: fn(!1, !0),
    },
    n = {
      get(s) {
        return an(this, s, !0);
      },
      get size() {
        return un(this, !0);
      },
      has(s) {
        return cn.call(this, s, !0);
      },
      add: nt("add"),
      set: nt("set"),
      delete: nt("delete"),
      clear: nt("clear"),
      forEach: fn(!0, !1),
    },
    r = {
      get(s) {
        return an(this, s, !0, !0);
      },
      get size() {
        return un(this, !0);
      },
      has(s) {
        return cn.call(this, s, !0);
      },
      add: nt("add"),
      set: nt("set"),
      delete: nt("delete"),
      clear: nt("clear"),
      forEach: fn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = dn(s, !1, !1)),
        (n[s] = dn(s, !0, !1)),
        (t[s] = dn(s, !1, !0)),
        (r[s] = dn(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Oi, Fi, Di, Li] = Bi();
function Ar(e, t) {
  const n = t ? (e ? Li : Di) : e ? Fi : Oi;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(G(n, o) && o in r ? n : r, o, s);
}
const $i = { get: Ar(!1, !1) },
  Hi = { get: Ar(!1, !0) },
  Ni = { get: Ar(!0, !1) },
  Xo = new WeakMap(),
  es = new WeakMap(),
  ts = new WeakMap(),
  ji = new WeakMap();
function Ui(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Vi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ui(hi(e));
}
function on(e) {
  return Ct(e) ? e : Sr(e, !1, Qo, $i, Xo);
}
function Wi(e) {
  return Sr(e, !1, Ii, Hi, es);
}
function ns(e) {
  return Sr(e, !0, Pi, Ni, ts);
}
function Sr(e, t, n, r, o) {
  if (!re(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = Vi(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function At(e) {
  return Ct(e) ? At(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ct(e) {
  return !!(e && e.__v_isReadonly);
}
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
function rs(e) {
  return At(e) || Ct(e);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function os(e) {
  return wn(e, "__v_skip", !0), e;
}
const Yt = (e) => (re(e) ? on(e) : e),
  Cr = (e) => (re(e) ? ns(e) : e);
function ss(e) {
  lt && $e && ((e = q(e)), Yo(e.dep || (e.dep = Tr())));
}
function is(e, t) {
  e = q(e);
  const n = e.dep;
  n && nr(n);
}
function _e(e) {
  return !!(e && e.__v_isRef === !0);
}
function Le(e) {
  return ls(e, !1);
}
function Gi(e) {
  return ls(e, !0);
}
function ls(e, t) {
  return _e(e) ? e : new qi(e, t);
}
class qi {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : q(t)),
      (this._value = n ? t : Yt(t));
  }
  get value() {
    return ss(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Tn(t) || Ct(t);
    (t = n ? t : q(t)),
      qt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Yt(t)), is(this));
  }
}
function ke(e) {
  return _e(e) ? e.value : e;
}
const Yi = {
  get: (e, t, n) => ke(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return _e(o) && !_e(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function as(e) {
  return At(e) ? e : new Proxy(e, Yi);
}
var cs;
class Zi {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[cs] = !1),
      (this._dirty = !0),
      (this.effect = new zr(t, () => {
        this._dirty || ((this._dirty = !0), is(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = q(this);
    return (
      ss(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
cs = "__v_isReadonly";
function Ji(e, t, n = !1) {
  let r, o;
  const s = $(e);
  return (
    s ? ((r = e), (o = Ne)) : ((r = e.get), (o = e.set)),
    new Zi(r, o, s || !o, n)
  );
}
function at(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Mn(s, t, n);
  }
  return o;
}
function Me(e, t, n, r) {
  if ($(e)) {
    const s = at(e, t, n, r);
    return (
      s &&
        jo(s) &&
        s.catch((i) => {
          Mn(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(Me(e[s], t, n, r));
  return o;
}
function Mn(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      l = n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, i, l) === !1) return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      at(a, null, 10, [e, i, l]);
      return;
    }
  }
  Qi(e, n, o, r);
}
function Qi(e, t, n, r = !0) {
  console.error(e);
}
let Zt = !1,
  rr = !1;
const ve = [];
let Ye = 0;
const St = [];
let Xe = null,
  gt = 0;
const us = Promise.resolve();
let Rr = null;
function fs(e) {
  const t = Rr || us;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xi(e) {
  let t = Ye + 1,
    n = ve.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Jt(ve[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Mr(e) {
  (!ve.length || !ve.includes(e, Zt && e.allowRecurse ? Ye + 1 : Ye)) &&
    (e.id == null ? ve.push(e) : ve.splice(Xi(e.id), 0, e), ds());
}
function ds() {
  !Zt && !rr && ((rr = !0), (Rr = us.then(ps)));
}
function el(e) {
  const t = ve.indexOf(e);
  t > Ye && ve.splice(t, 1);
}
function tl(e) {
  O(e)
    ? St.push(...e)
    : (!Xe || !Xe.includes(e, e.allowRecurse ? gt + 1 : gt)) && St.push(e),
    ds();
}
function eo(e, t = Zt ? Ye + 1 : 0) {
  for (; t < ve.length; t++) {
    const n = ve[t];
    n && n.pre && (ve.splice(t, 1), t--, n());
  }
}
function hs(e) {
  if (St.length) {
    const t = [...new Set(St)];
    if (((St.length = 0), Xe)) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, Xe.sort((n, r) => Jt(n) - Jt(r)), gt = 0; gt < Xe.length; gt++)
      Xe[gt]();
    (Xe = null), (gt = 0);
  }
}
const Jt = (e) => (e.id == null ? 1 / 0 : e.id),
  nl = (e, t) => {
    const n = Jt(e) - Jt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ps(e) {
  (rr = !1), (Zt = !0), ve.sort(nl);
  const t = Ne;
  try {
    for (Ye = 0; Ye < ve.length; Ye++) {
      const n = ve[Ye];
      n && n.active !== !1 && at(n, null, 14);
    }
  } finally {
    (Ye = 0),
      (ve.length = 0),
      hs(),
      (Zt = !1),
      (Rr = null),
      (ve.length || St.length) && ps();
  }
}
function rl(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || se;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: h } = r[f] || se;
    h && (o = n.map((g) => (de(g) ? g.trim() : g))), p && (o = n.map(yn));
  }
  let l,
    a = r[(l = jn(t))] || r[(l = jn(Ze(t)))];
  !a && s && (a = r[(l = jn(Ot(t)))]), a && Me(a, e, 6, o);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Me(u, e, 6, o);
  }
}
function gs(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    l = !1;
  if (!$(e)) {
    const a = (u) => {
      const f = gs(u, t, !0);
      f && ((l = !0), xe(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !s && !l
    ? (re(e) && r.set(e, null), null)
    : (O(s) ? s.forEach((a) => (i[a] = null)) : xe(i, s),
      re(e) && r.set(e, i),
      i);
}
function Pn(e, t) {
  return !e || !An(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Ot(t)) || G(e, t));
}
let Se = null,
  In = null;
function zn(e) {
  const t = Se;
  return (Se = e), (In = (e && e.type.__scopeId) || null), t;
}
function ms(e) {
  In = e;
}
function bs() {
  In = null;
}
function Ae(e, t = Se, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && uo(-1);
    const s = zn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      zn(s), r._d && uo(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Un(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: u,
    render: f,
    renderCache: p,
    data: h,
    setupState: g,
    ctx: v,
    inheritAttrs: y,
  } = e;
  let D, C;
  const F = zn(e);
  try {
    if (n.shapeFlag & 4) {
      const V = o || r;
      (D = qe(f.call(V, V, p, s, g, h, v))), (C = a);
    } else {
      const V = t;
      (D = qe(
        V.length > 1 ? V(s, { attrs: a, slots: l, emit: u }) : V(s, null)
      )),
        (C = t.props ? a : ol(a));
    }
  } catch (V) {
    (Ut.length = 0), Mn(V, e, 1), (D = U(Ue));
  }
  let M = D;
  if (C && y !== !1) {
    const V = Object.keys(C),
      { shapeFlag: ie } = M;
    V.length && ie & 7 && (i && V.some(xr) && (C = sl(C, i)), (M = ut(M, C)));
  }
  return (
    n.dirs && ((M = ut(M)), (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (M.transition = n.transition),
    (D = M),
    zn(F),
    D
  );
}
const ol = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || An(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  sl = (e, t) => {
    const n = {};
    for (const r in e) (!xr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function il(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? to(r, i, u) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const h = f[p];
        if (i[h] !== r[h] && !Pn(u, h)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? to(r, i, u)
        : !0
      : !!i;
  return !1;
}
function to(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Pn(n, s)) return !0;
  }
  return !1;
}
function ll({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const al = (e) => e.__isSuspense;
function cl(e, t) {
  t && t.pendingBranch
    ? O(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : tl(e);
}
function mn(e, t) {
  if (ce) {
    let n = ce.provides;
    const r = ce.parent && ce.parent.provides;
    r === n && (n = ce.provides = Object.create(r)), (n[e] = t);
  }
}
function je(e, t, n = !1) {
  const r = ce || Se;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && $(t) ? t.call(r.proxy) : t;
  }
}
const hn = {};
function bn(e, t, n) {
  return vs(e, t, n);
}
function vs(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = se
) {
  const l = _i() === (ce == null ? void 0 : ce.scope) ? ce : null;
  let a,
    u = !1,
    f = !1;
  if (
    (_e(e)
      ? ((a = () => e.value), (u = Tn(e)))
      : At(e)
      ? ((a = () => e), (r = !0))
      : O(e)
      ? ((f = !0),
        (u = e.some((M) => At(M) || Tn(M))),
        (a = () =>
          e.map((M) => {
            if (_e(M)) return M.value;
            if (At(M)) return vt(M);
            if ($(M)) return at(M, l, 2);
          })))
      : $(e)
      ? t
        ? (a = () => at(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return p && p(), Me(e, l, 3, [h]);
          })
      : (a = Ne),
    t && r)
  ) {
    const M = a;
    a = () => vt(M());
  }
  let p,
    h = (M) => {
      p = C.onStop = () => {
        at(M, l, 4);
      };
    },
    g;
  if (Xt)
    if (
      ((h = Ne),
      t ? n && Me(t, l, 3, [a(), f ? [] : void 0, h]) : a(),
      o === "sync")
    ) {
      const M = oa();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else return Ne;
  let v = f ? new Array(e.length).fill(hn) : hn;
  const y = () => {
    if (C.active)
      if (t) {
        const M = C.run();
        (r || u || (f ? M.some((V, ie) => qt(V, v[ie])) : qt(M, v))) &&
          (p && p(),
          Me(t, l, 3, [M, v === hn ? void 0 : f && v[0] === hn ? [] : v, h]),
          (v = M));
      } else C.run();
  };
  y.allowRecurse = !!t;
  let D;
  o === "sync"
    ? (D = y)
    : o === "post"
    ? (D = () => ze(y, l && l.suspense))
    : ((y.pre = !0), l && (y.id = l.uid), (D = () => Mr(y)));
  const C = new zr(a, D);
  t
    ? n
      ? y()
      : (v = C.run())
    : o === "post"
    ? ze(C.run.bind(C), l && l.suspense)
    : C.run();
  const F = () => {
    C.stop(), l && l.scope && wr(l.scope.effects, C);
  };
  return g && g.push(F), F;
}
function ul(e, t, n) {
  const r = this.proxy,
    o = de(e) ? (e.includes(".") ? _s(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  $(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = ce;
  Rt(this);
  const l = vs(o, s.bind(r), n);
  return i ? Rt(i) : xt(), l;
}
function _s(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function vt(e, t) {
  if (!re(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), _e(e))) vt(e.value, t);
  else if (O(e)) for (let n = 0; n < e.length; n++) vt(e[n], t);
  else if (Bt(e) || Et(e))
    e.forEach((n) => {
      vt(n, t);
    });
  else if (Vo(e)) for (const n in e) vt(e[n], t);
  return e;
}
function fl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ts(() => {
      e.isMounted = !0;
    }),
    zs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ce = [Function, Array],
  dl = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ce,
      onEnter: Ce,
      onAfterEnter: Ce,
      onEnterCancelled: Ce,
      onBeforeLeave: Ce,
      onLeave: Ce,
      onAfterLeave: Ce,
      onLeaveCancelled: Ce,
      onBeforeAppear: Ce,
      onAppear: Ce,
      onAfterAppear: Ce,
      onAppearCancelled: Ce,
    },
    setup(e, { slots: t }) {
      const n = Zl(),
        r = fl();
      let o;
      return () => {
        const s = t.default && xs(t.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          for (const y of s)
            if (y.type !== Ue) {
              i = y;
              break;
            }
        }
        const l = q(e),
          { mode: a } = l;
        if (r.isLeaving) return Vn(i);
        const u = no(i);
        if (!u) return Vn(i);
        const f = or(u, l, r, n);
        sr(u, f);
        const p = n.subTree,
          h = p && no(p);
        let g = !1;
        const { getTransitionKey: v } = u.type;
        if (v) {
          const y = v();
          o === void 0 ? (o = y) : y !== o && ((o = y), (g = !0));
        }
        if (h && h.type !== Ue && (!mt(u, h) || g)) {
          const y = or(h, l, r, n);
          if ((sr(h, y), a === "out-in"))
            return (
              (r.isLeaving = !0),
              (y.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Vn(i)
            );
          a === "in-out" &&
            u.type !== Ue &&
            (y.delayLeave = (D, C, F) => {
              const M = ks(r, h);
              (M[String(h.key)] = h),
                (D._leaveCb = () => {
                  C(), (D._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = F);
            });
        }
        return i;
      };
    },
  },
  hl = dl;
function ks(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function or(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: p,
      onLeave: h,
      onAfterLeave: g,
      onLeaveCancelled: v,
      onBeforeAppear: y,
      onAppear: D,
      onAfterAppear: C,
      onAppearCancelled: F,
    } = t,
    M = String(e.key),
    V = ks(n, e),
    ie = (H, ae) => {
      H && Me(H, r, 9, ae);
    },
    pe = (H, ae) => {
      const oe = ae[1];
      ie(H, ae),
        O(H) ? H.every((ge) => ge.length <= 1) && oe() : H.length <= 1 && oe();
    },
    ye = {
      mode: s,
      persisted: i,
      beforeEnter(H) {
        let ae = l;
        if (!n.isMounted)
          if (o) ae = y || l;
          else return;
        H._leaveCb && H._leaveCb(!0);
        const oe = V[M];
        oe && mt(e, oe) && oe.el._leaveCb && oe.el._leaveCb(), ie(ae, [H]);
      },
      enter(H) {
        let ae = a,
          oe = u,
          ge = f;
        if (!n.isMounted)
          if (o) (ae = D || a), (oe = C || u), (ge = F || f);
          else return;
        let me = !1;
        const Pe = (H._enterCb = (Je) => {
          me ||
            ((me = !0),
            Je ? ie(ge, [H]) : ie(oe, [H]),
            ye.delayedLeave && ye.delayedLeave(),
            (H._enterCb = void 0));
        });
        ae ? pe(ae, [H, Pe]) : Pe();
      },
      leave(H, ae) {
        const oe = String(e.key);
        if ((H._enterCb && H._enterCb(!0), n.isUnmounting)) return ae();
        ie(p, [H]);
        let ge = !1;
        const me = (H._leaveCb = (Pe) => {
          ge ||
            ((ge = !0),
            ae(),
            Pe ? ie(v, [H]) : ie(g, [H]),
            (H._leaveCb = void 0),
            V[oe] === e && delete V[oe]);
        });
        (V[oe] = e), h ? pe(h, [H, me]) : me();
      },
      clone(H) {
        return or(H, t, n, r);
      },
    };
  return ye;
}
function Vn(e) {
  if (Bn(e)) return (e = ut(e)), (e.children = null), e;
}
function no(e) {
  return Bn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function sr(e, t) {
  e.shapeFlag & 6 && e.component
    ? sr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function xs(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === be
      ? (i.patchFlag & 128 && o++, (r = r.concat(xs(i.children, t, l))))
      : (t || i.type !== Ue) && r.push(l != null ? ut(i, { key: l }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function ws(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const vn = (e) => !!e.type.__asyncLoader,
  Bn = (e) => e.type.__isKeepAlive;
function pl(e, t) {
  ys(e, "a", t);
}
function gl(e, t) {
  ys(e, "da", t);
}
function ys(e, t, n = ce) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((On(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Bn(o.parent.vnode) && ml(r, t, n, o), (o = o.parent);
  }
}
function ml(e, t, n, r) {
  const o = On(t, e, r, !0);
  Ks(() => {
    wr(r[t], o);
  }, n);
}
function On(e, t, n = ce, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Ft(), Rt(n);
          const l = Me(t, n, e, i);
          return xt(), Dt(), l;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const tt =
    (e) =>
    (t, n = ce) =>
      (!Xt || e === "sp") && On(e, (...r) => t(...r), n),
  bl = tt("bm"),
  Ts = tt("m"),
  vl = tt("bu"),
  _l = tt("u"),
  zs = tt("bum"),
  Ks = tt("um"),
  kl = tt("sp"),
  xl = tt("rtg"),
  wl = tt("rtc");
function yl(e, t = ce) {
  On("ec", e, t);
}
function Wn(e, t) {
  const n = Se;
  if (n === null) return e;
  const r = Ln(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, a, u = se] = t[s];
    i &&
      ($(i) && (i = { mounted: i, updated: i }),
      i.deep && vt(l),
      o.push({
        dir: i,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: u,
      }));
  }
  return e;
}
function dt(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[r];
    a && (Ft(), Me(a, n, 8, [e.el, l, e, t]), Dt());
  }
}
const Es = "components";
function Pr(e, t) {
  return zl(Es, e, !0, t) || e;
}
const Tl = Symbol();
function zl(e, t, n = !0, r = !1) {
  const o = Se || ce;
  if (o) {
    const s = o.type;
    if (e === Es) {
      const l = ta(s, !1);
      if (l && (l === t || l === Ze(t) || l === Cn(Ze(t)))) return s;
    }
    const i = ro(o[e] || s[e], t) || ro(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function ro(e, t) {
  return e && (e[t] || e[Ze(t)] || e[Cn(Ze(t))]);
}
function ir(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (O(e) || de(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (re(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const u = i[l];
        o[l] = t(e[u], u, l, s && s[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
const lr = (e) => (e ? (Ls(e) ? Ln(e) || e.proxy : lr(e.parent)) : null),
  jt = xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => lr(e.parent),
    $root: (e) => lr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => Mr(e.update)),
    $nextTick: (e) => e.n || (e.n = fs.bind(e.proxy)),
    $watch: (e) => ul.bind(e),
  }),
  Gn = (e, t) => e !== se && !e.__isScriptSetup && G(e, t),
  Kl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const g = i[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (Gn(r, t)) return (i[t] = 1), r[t];
          if (o !== se && G(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && G(u, t)) return (i[t] = 3), s[t];
          if (n !== se && G(n, t)) return (i[t] = 4), n[t];
          ar && (i[t] = 0);
        }
      }
      const f = jt[t];
      let p, h;
      if (f) return t === "$attrs" && Ke(e, "get", t), f(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== se && G(n, t)) return (i[t] = 4), n[t];
      if (((h = a.config.globalProperties), G(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Gn(o, t)
        ? ((o[t] = n), !0)
        : r !== se && G(r, t)
        ? ((r[t] = n), !0)
        : G(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== se && G(e, i)) ||
        Gn(t, i) ||
        ((l = s[0]) && G(l, i)) ||
        G(r, i) ||
        G(jt, i) ||
        G(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : G(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let ar = !0;
function El(e) {
  const t = Ir(e),
    n = e.proxy,
    r = e.ctx;
  (ar = !1), t.beforeCreate && oo(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: f,
    beforeMount: p,
    mounted: h,
    beforeUpdate: g,
    updated: v,
    activated: y,
    deactivated: D,
    beforeDestroy: C,
    beforeUnmount: F,
    destroyed: M,
    unmounted: V,
    render: ie,
    renderTracked: pe,
    renderTriggered: ye,
    errorCaptured: H,
    serverPrefetch: ae,
    expose: oe,
    inheritAttrs: ge,
    components: me,
    directives: Pe,
    filters: Je,
  } = t;
  if ((u && Al(u, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const te in i) {
      const Q = i[te];
      $(Q) && (r[te] = Q.bind(n));
    }
  if (o) {
    const te = o.call(n, n);
    re(te) && (e.data = on(te));
  }
  if (((ar = !0), s))
    for (const te in s) {
      const Q = s[te],
        Ie = $(Q) ? Q.bind(n, n) : $(Q.get) ? Q.get.bind(n, n) : Ne,
        ft = !$(Q) && $(Q.set) ? Q.set.bind(n) : Ne,
        Be = he({ get: Ie, set: ft });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Te) => (Be.value = Te),
      });
    }
  if (l) for (const te in l) As(l[te], r, n, te);
  if (a) {
    const te = $(a) ? a.call(n) : a;
    Reflect.ownKeys(te).forEach((Q) => {
      mn(Q, te[Q]);
    });
  }
  f && oo(f, e, "c");
  function ue(te, Q) {
    O(Q) ? Q.forEach((Ie) => te(Ie.bind(n))) : Q && te(Q.bind(n));
  }
  if (
    (ue(bl, p),
    ue(Ts, h),
    ue(vl, g),
    ue(_l, v),
    ue(pl, y),
    ue(gl, D),
    ue(yl, H),
    ue(wl, pe),
    ue(xl, ye),
    ue(zs, F),
    ue(Ks, V),
    ue(kl, ae),
    O(oe))
  )
    if (oe.length) {
      const te = e.exposed || (e.exposed = {});
      oe.forEach((Q) => {
        Object.defineProperty(te, Q, {
          get: () => n[Q],
          set: (Ie) => (n[Q] = Ie),
        });
      });
    } else e.exposed || (e.exposed = {});
  ie && e.render === Ne && (e.render = ie),
    ge != null && (e.inheritAttrs = ge),
    me && (e.components = me),
    Pe && (e.directives = Pe);
}
function Al(e, t, n = Ne, r = !1) {
  O(e) && (e = cr(e));
  for (const o in e) {
    const s = e[o];
    let i;
    re(s)
      ? "default" in s
        ? (i = je(s.from || o, s.default, !0))
        : (i = je(s.from || o))
      : (i = je(s)),
      _e(i) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[o] = i);
  }
}
function oo(e, t, n) {
  Me(O(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function As(e, t, n, r) {
  const o = r.includes(".") ? _s(n, r) : () => n[r];
  if (de(e)) {
    const s = t[e];
    $(s) && bn(o, s);
  } else if ($(e)) bn(o, e.bind(n));
  else if (re(e))
    if (O(e)) e.forEach((s) => As(s, t, n, r));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) && bn(o, s, e);
    }
}
function Ir(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = s.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !n && !r
      ? (a = t)
      : ((a = {}), o.length && o.forEach((u) => Kn(a, u, i, !0)), Kn(a, t, i)),
    re(t) && s.set(t, a),
    a
  );
}
function Kn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Kn(e, s, n, !0), o && o.forEach((i) => Kn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Sl[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Sl = {
  data: so,
  props: pt,
  emits: pt,
  methods: pt,
  computed: pt,
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  components: pt,
  directives: pt,
  watch: Rl,
  provide: so,
  inject: Cl,
};
function so(e, t) {
  return t
    ? e
      ? function () {
          return xe(
            $(e) ? e.call(this, this) : e,
            $(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Cl(e, t) {
  return pt(cr(e), cr(t));
}
function cr(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? xe(xe(Object.create(null), e), t) : t;
}
function Rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xe(Object.create(null), e);
  for (const r in t) n[r] = we(e[r], t[r]);
  return n;
}
function Ml(e, t, n, r = !1) {
  const o = {},
    s = {};
  wn(s, Dn, 1), (e.propsDefaults = Object.create(null)), Ss(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : Wi(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function Pl(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    l = q(o),
    [a] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let h = f[p];
        if (Pn(e.emitsOptions, h)) continue;
        const g = t[h];
        if (a)
          if (G(s, h)) g !== s[h] && ((s[h] = g), (u = !0));
          else {
            const v = Ze(h);
            o[v] = ur(a, l, v, g, e, !1);
          }
        else g !== s[h] && ((s[h] = g), (u = !0));
      }
    }
  } else {
    Ss(e, t, o, s) && (u = !0);
    let f;
    for (const p in l)
      (!t || (!G(t, p) && ((f = Ot(p)) === p || !G(t, f)))) &&
        (a
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (o[p] = ur(a, l, p, void 0, e, !0))
          : delete o[p]);
    if (s !== l) for (const p in s) (!t || !G(t, p)) && (delete s[p], (u = !0));
  }
  u && et(e, "set", "$attrs");
}
function Ss(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (pn(a)) continue;
      const u = t[a];
      let f;
      o && G(o, (f = Ze(a)))
        ? !s || !s.includes(f)
          ? (n[f] = u)
          : ((l || (l = {}))[f] = u)
        : Pn(e.emitsOptions, a) ||
          ((!(a in r) || u !== r[a]) && ((r[a] = u), (i = !0)));
    }
  if (s) {
    const a = q(n),
      u = l || se;
    for (let f = 0; f < s.length; f++) {
      const p = s[f];
      n[p] = ur(o, a, p, u[p], e, !G(u, p));
    }
  }
  return i;
}
function ur(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = G(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && $(a)) {
        const { propsDefaults: u } = o;
        n in u ? (r = u[n]) : (Rt(o), (r = u[n] = a.call(null, t)), xt());
      } else r = a;
    }
    i[0] &&
      (s && !l ? (r = !1) : i[1] && (r === "" || r === Ot(n)) && (r = !0));
  }
  return r;
}
function Cs(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!$(e)) {
    const f = (p) => {
      a = !0;
      const [h, g] = Cs(p, t, !0);
      xe(i, h), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!s && !a) return re(e) && r.set(e, Kt), Kt;
  if (O(s))
    for (let f = 0; f < s.length; f++) {
      const p = Ze(s[f]);
      io(p) && (i[p] = se);
    }
  else if (s)
    for (const f in s) {
      const p = Ze(f);
      if (io(p)) {
        const h = s[f],
          g = (i[p] = O(h) || $(h) ? { type: h } : Object.assign({}, h));
        if (g) {
          const v = co(Boolean, g.type),
            y = co(String, g.type);
          (g[0] = v > -1),
            (g[1] = y < 0 || v < y),
            (v > -1 || G(g, "default")) && l.push(p);
        }
      }
    }
  const u = [i, l];
  return re(e) && r.set(e, u), u;
}
function io(e) {
  return e[0] !== "$";
}
function lo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ao(e, t) {
  return lo(e) === lo(t);
}
function co(e, t) {
  return O(t) ? t.findIndex((n) => ao(n, e)) : $(t) && ao(t, e) ? 0 : -1;
}
const Rs = (e) => e[0] === "_" || e === "$stable",
  Br = (e) => (O(e) ? e.map(qe) : [qe(e)]),
  Il = (e, t, n) => {
    if (t._n) return t;
    const r = Ae((...o) => Br(t(...o)), n);
    return (r._c = !1), r;
  },
  Ms = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Rs(o)) continue;
      const s = e[o];
      if ($(s)) t[o] = Il(o, s, r);
      else if (s != null) {
        const i = Br(s);
        t[o] = () => i;
      }
    }
  },
  Ps = (e, t) => {
    const n = Br(t);
    e.slots.default = () => n;
  },
  Bl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = q(t)), wn(t, "_", n)) : Ms(t, (e.slots = {}));
    } else (e.slots = {}), t && Ps(e, t);
    wn(e.slots, Dn, 1);
  },
  Ol = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = se;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (s = !1)
          : (xe(o, t), !n && l === 1 && delete o._)
        : ((s = !t.$stable), Ms(t, o)),
        (i = t);
    } else t && (Ps(e, t), (i = { default: 1 }));
    if (s) for (const l in o) !Rs(l) && !(l in i) && delete o[l];
  };
function Is() {
  return {
    app: null,
    config: {
      isNativeTag: ui,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Fl = 0;
function Dl(e, t) {
  return function (r, o = null) {
    $(r) || (r = Object.assign({}, r)), o != null && !re(o) && (o = null);
    const s = Is(),
      i = new Set();
    let l = !1;
    const a = (s.app = {
      _uid: Fl++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: sa,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && $(u.install)
              ? (i.add(u), u.install(a, ...f))
              : $(u) && (i.add(u), u(a, ...f))),
          a
        );
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), a;
      },
      component(u, f) {
        return f ? ((s.components[u] = f), a) : s.components[u];
      },
      directive(u, f) {
        return f ? ((s.directives[u] = f), a) : s.directives[u];
      },
      mount(u, f, p) {
        if (!l) {
          const h = U(r, o);
          return (
            (h.appContext = s),
            f && t ? t(h, u) : e(h, u, p),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            Ln(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, f) {
        return (s.provides[u] = f), a;
      },
    });
    return a;
  };
}
function fr(e, t, n, r, o = !1) {
  if (O(e)) {
    e.forEach((h, g) => fr(h, t && (O(t) ? t[g] : t), n, r, o));
    return;
  }
  if (vn(r) && !o) return;
  const s = r.shapeFlag & 4 ? Ln(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: l, r: a } = e,
    u = t && t.r,
    f = l.refs === se ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (u != null &&
      u !== a &&
      (de(u)
        ? ((f[u] = null), G(p, u) && (p[u] = null))
        : _e(u) && (u.value = null)),
    $(a))
  )
    at(a, l, 12, [i, f]);
  else {
    const h = de(a),
      g = _e(a);
    if (h || g) {
      const v = () => {
        if (e.f) {
          const y = h ? (G(p, a) ? p[a] : f[a]) : a.value;
          o
            ? O(y) && wr(y, s)
            : O(y)
            ? y.includes(s) || y.push(s)
            : h
            ? ((f[a] = [s]), G(p, a) && (p[a] = f[a]))
            : ((a.value = [s]), e.k && (f[e.k] = a.value));
        } else
          h
            ? ((f[a] = i), G(p, a) && (p[a] = i))
            : g && ((a.value = i), e.k && (f[e.k] = i));
      };
      i ? ((v.id = -1), ze(v, n)) : v();
    }
  }
}
const ze = cl;
function Ll(e) {
  return $l(e);
}
function $l(e, t) {
  const n = mi();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: f,
      parentNode: p,
      nextSibling: h,
      setScopeId: g = Ne,
      insertStaticContent: v,
    } = e,
    y = (
      c,
      d,
      m,
      b = null,
      x = null,
      z = null,
      A = !1,
      T = null,
      K = !!d.dynamicChildren
    ) => {
      if (c === d) return;
      c && !mt(c, d) && ((b = E(c)), Te(c, x, z, !0), (c = null)),
        d.patchFlag === -2 && ((K = !1), (d.dynamicChildren = null));
      const { type: w, ref: I, shapeFlag: R } = d;
      switch (w) {
        case Fn:
          D(c, d, m, b);
          break;
        case Ue:
          C(c, d, m, b);
          break;
        case _n:
          c == null && F(d, m, b, A);
          break;
        case be:
          me(c, d, m, b, x, z, A, T, K);
          break;
        default:
          R & 1
            ? ie(c, d, m, b, x, z, A, T, K)
            : R & 6
            ? Pe(c, d, m, b, x, z, A, T, K)
            : (R & 64 || R & 128) && w.process(c, d, m, b, x, z, A, T, K, W);
      }
      I != null && x && fr(I, c && c.ref, z, d || c, !d);
    },
    D = (c, d, m, b) => {
      if (c == null) r((d.el = l(d.children)), m, b);
      else {
        const x = (d.el = c.el);
        d.children !== c.children && u(x, d.children);
      }
    },
    C = (c, d, m, b) => {
      c == null ? r((d.el = a(d.children || "")), m, b) : (d.el = c.el);
    },
    F = (c, d, m, b) => {
      [c.el, c.anchor] = v(c.children, d, m, b, c.el, c.anchor);
    },
    M = ({ el: c, anchor: d }, m, b) => {
      let x;
      for (; c && c !== d; ) (x = h(c)), r(c, m, b), (c = x);
      r(d, m, b);
    },
    V = ({ el: c, anchor: d }) => {
      let m;
      for (; c && c !== d; ) (m = h(c)), o(c), (c = m);
      o(d);
    },
    ie = (c, d, m, b, x, z, A, T, K) => {
      (A = A || d.type === "svg"),
        c == null ? pe(d, m, b, x, z, A, T, K) : ae(c, d, x, z, A, T, K);
    },
    pe = (c, d, m, b, x, z, A, T) => {
      let K, w;
      const { type: I, props: R, shapeFlag: B, transition: L, dirs: j } = c;
      if (
        ((K = c.el = i(c.type, z, R && R.is, R)),
        B & 8
          ? f(K, c.children)
          : B & 16 &&
            H(c.children, K, null, b, x, z && I !== "foreignObject", A, T),
        j && dt(c, null, b, "created"),
        ye(K, c, c.scopeId, A, b),
        R)
      ) {
        for (const X in R)
          X !== "value" &&
            !pn(X) &&
            s(K, X, null, R[X], z, c.children, b, x, S);
        "value" in R && s(K, "value", null, R.value),
          (w = R.onVnodeBeforeMount) && Ge(w, b, c);
      }
      j && dt(c, null, b, "beforeMount");
      const ne = (!x || (x && !x.pendingBranch)) && L && !L.persisted;
      ne && L.beforeEnter(K),
        r(K, d, m),
        ((w = R && R.onVnodeMounted) || ne || j) &&
          ze(() => {
            w && Ge(w, b, c), ne && L.enter(K), j && dt(c, null, b, "mounted");
          }, x);
    },
    ye = (c, d, m, b, x) => {
      if ((m && g(c, m), b)) for (let z = 0; z < b.length; z++) g(c, b[z]);
      if (x) {
        let z = x.subTree;
        if (d === z) {
          const A = x.vnode;
          ye(c, A, A.scopeId, A.slotScopeIds, x.parent);
        }
      }
    },
    H = (c, d, m, b, x, z, A, T, K = 0) => {
      for (let w = K; w < c.length; w++) {
        const I = (c[w] = T ? ot(c[w]) : qe(c[w]));
        y(null, I, d, m, b, x, z, A, T);
      }
    },
    ae = (c, d, m, b, x, z, A) => {
      const T = (d.el = c.el);
      let { patchFlag: K, dynamicChildren: w, dirs: I } = d;
      K |= c.patchFlag & 16;
      const R = c.props || se,
        B = d.props || se;
      let L;
      m && ht(m, !1),
        (L = B.onVnodeBeforeUpdate) && Ge(L, m, d, c),
        I && dt(d, c, m, "beforeUpdate"),
        m && ht(m, !0);
      const j = x && d.type !== "foreignObject";
      if (
        (w
          ? oe(c.dynamicChildren, w, T, m, b, j, z)
          : A || Q(c, d, T, null, m, b, j, z, !1),
        K > 0)
      ) {
        if (K & 16) ge(T, d, R, B, m, b, x);
        else if (
          (K & 2 && R.class !== B.class && s(T, "class", null, B.class, x),
          K & 4 && s(T, "style", R.style, B.style, x),
          K & 8)
        ) {
          const ne = d.dynamicProps;
          for (let X = 0; X < ne.length; X++) {
            const fe = ne[X],
              Oe = R[fe],
              yt = B[fe];
            (yt !== Oe || fe === "value") &&
              s(T, fe, Oe, yt, x, c.children, m, b, S);
          }
        }
        K & 1 && c.children !== d.children && f(T, d.children);
      } else !A && w == null && ge(T, d, R, B, m, b, x);
      ((L = B.onVnodeUpdated) || I) &&
        ze(() => {
          L && Ge(L, m, d, c), I && dt(d, c, m, "updated");
        }, b);
    },
    oe = (c, d, m, b, x, z, A) => {
      for (let T = 0; T < d.length; T++) {
        const K = c[T],
          w = d[T],
          I =
            K.el && (K.type === be || !mt(K, w) || K.shapeFlag & 70)
              ? p(K.el)
              : m;
        y(K, w, I, null, b, x, z, A, !0);
      }
    },
    ge = (c, d, m, b, x, z, A) => {
      if (m !== b) {
        if (m !== se)
          for (const T in m)
            !pn(T) && !(T in b) && s(c, T, m[T], null, A, d.children, x, z, S);
        for (const T in b) {
          if (pn(T)) continue;
          const K = b[T],
            w = m[T];
          K !== w && T !== "value" && s(c, T, w, K, A, d.children, x, z, S);
        }
        "value" in b && s(c, "value", m.value, b.value);
      }
    },
    me = (c, d, m, b, x, z, A, T, K) => {
      const w = (d.el = c ? c.el : l("")),
        I = (d.anchor = c ? c.anchor : l(""));
      let { patchFlag: R, dynamicChildren: B, slotScopeIds: L } = d;
      L && (T = T ? T.concat(L) : L),
        c == null
          ? (r(w, m, b), r(I, m, b), H(d.children, m, I, x, z, A, T, K))
          : R > 0 && R & 64 && B && c.dynamicChildren
          ? (oe(c.dynamicChildren, B, m, x, z, A, T),
            (d.key != null || (x && d === x.subTree)) && Bs(c, d, !0))
          : Q(c, d, m, I, x, z, A, T, K);
    },
    Pe = (c, d, m, b, x, z, A, T, K) => {
      (d.slotScopeIds = T),
        c == null
          ? d.shapeFlag & 512
            ? x.ctx.activate(d, m, b, A, K)
            : Je(d, m, b, x, z, A, K)
          : Lt(c, d, K);
    },
    Je = (c, d, m, b, x, z, A) => {
      const T = (c.component = Yl(c, b, x));
      if ((Bn(c) && (T.ctx.renderer = W), Jl(T), T.asyncDep)) {
        if ((x && x.registerDep(T, ue), !c.el)) {
          const K = (T.subTree = U(Ue));
          C(null, K, d, m);
        }
        return;
      }
      ue(T, c, d, m, x, z, A);
    },
    Lt = (c, d, m) => {
      const b = (d.component = c.component);
      if (il(c, d, m))
        if (b.asyncDep && !b.asyncResolved) {
          te(b, d, m);
          return;
        } else (b.next = d), el(b.update), b.update();
      else (d.el = c.el), (b.vnode = d);
    },
    ue = (c, d, m, b, x, z, A) => {
      const T = () => {
          if (c.isMounted) {
            let { next: I, bu: R, u: B, parent: L, vnode: j } = c,
              ne = I,
              X;
            ht(c, !1),
              I ? ((I.el = j.el), te(c, I, A)) : (I = j),
              R && gn(R),
              (X = I.props && I.props.onVnodeBeforeUpdate) && Ge(X, L, I, j),
              ht(c, !0);
            const fe = Un(c),
              Oe = c.subTree;
            (c.subTree = fe),
              y(Oe, fe, p(Oe.el), E(Oe), c, x, z),
              (I.el = fe.el),
              ne === null && ll(c, fe.el),
              B && ze(B, x),
              (X = I.props && I.props.onVnodeUpdated) &&
                ze(() => Ge(X, L, I, j), x);
          } else {
            let I;
            const { el: R, props: B } = d,
              { bm: L, m: j, parent: ne } = c,
              X = vn(d);
            if (
              (ht(c, !1),
              L && gn(L),
              !X && (I = B && B.onVnodeBeforeMount) && Ge(I, ne, d),
              ht(c, !0),
              R && N)
            ) {
              const fe = () => {
                (c.subTree = Un(c)), N(R, c.subTree, c, x, null);
              };
              X
                ? d.type.__asyncLoader().then(() => !c.isUnmounted && fe())
                : fe();
            } else {
              const fe = (c.subTree = Un(c));
              y(null, fe, m, b, c, x, z), (d.el = fe.el);
            }
            if ((j && ze(j, x), !X && (I = B && B.onVnodeMounted))) {
              const fe = d;
              ze(() => Ge(I, ne, fe), x);
            }
            (d.shapeFlag & 256 ||
              (ne && vn(ne.vnode) && ne.vnode.shapeFlag & 256)) &&
              c.a &&
              ze(c.a, x),
              (c.isMounted = !0),
              (d = m = b = null);
          }
        },
        K = (c.effect = new zr(T, () => Mr(w), c.scope)),
        w = (c.update = () => K.run());
      (w.id = c.uid), ht(c, !0), w();
    },
    te = (c, d, m) => {
      d.component = c;
      const b = c.vnode.props;
      (c.vnode = d),
        (c.next = null),
        Pl(c, d.props, b, m),
        Ol(c, d.children, m),
        Ft(),
        eo(),
        Dt();
    },
    Q = (c, d, m, b, x, z, A, T, K = !1) => {
      const w = c && c.children,
        I = c ? c.shapeFlag : 0,
        R = d.children,
        { patchFlag: B, shapeFlag: L } = d;
      if (B > 0) {
        if (B & 128) {
          ft(w, R, m, b, x, z, A, T, K);
          return;
        } else if (B & 256) {
          Ie(w, R, m, b, x, z, A, T, K);
          return;
        }
      }
      L & 8
        ? (I & 16 && S(w, x, z), R !== w && f(m, R))
        : I & 16
        ? L & 16
          ? ft(w, R, m, b, x, z, A, T, K)
          : S(w, x, z, !0)
        : (I & 8 && f(m, ""), L & 16 && H(R, m, b, x, z, A, T, K));
    },
    Ie = (c, d, m, b, x, z, A, T, K) => {
      (c = c || Kt), (d = d || Kt);
      const w = c.length,
        I = d.length,
        R = Math.min(w, I);
      let B;
      for (B = 0; B < R; B++) {
        const L = (d[B] = K ? ot(d[B]) : qe(d[B]));
        y(c[B], L, m, null, x, z, A, T, K);
      }
      w > I ? S(c, x, z, !0, !1, R) : H(d, m, b, x, z, A, T, K, R);
    },
    ft = (c, d, m, b, x, z, A, T, K) => {
      let w = 0;
      const I = d.length;
      let R = c.length - 1,
        B = I - 1;
      for (; w <= R && w <= B; ) {
        const L = c[w],
          j = (d[w] = K ? ot(d[w]) : qe(d[w]));
        if (mt(L, j)) y(L, j, m, null, x, z, A, T, K);
        else break;
        w++;
      }
      for (; w <= R && w <= B; ) {
        const L = c[R],
          j = (d[B] = K ? ot(d[B]) : qe(d[B]));
        if (mt(L, j)) y(L, j, m, null, x, z, A, T, K);
        else break;
        R--, B--;
      }
      if (w > R) {
        if (w <= B) {
          const L = B + 1,
            j = L < I ? d[L].el : b;
          for (; w <= B; )
            y(null, (d[w] = K ? ot(d[w]) : qe(d[w])), m, j, x, z, A, T, K), w++;
        }
      } else if (w > B) for (; w <= R; ) Te(c[w], x, z, !0), w++;
      else {
        const L = w,
          j = w,
          ne = new Map();
        for (w = j; w <= B; w++) {
          const Ee = (d[w] = K ? ot(d[w]) : qe(d[w]));
          Ee.key != null && ne.set(Ee.key, w);
        }
        let X,
          fe = 0;
        const Oe = B - j + 1;
        let yt = !1,
          Nr = 0;
        const $t = new Array(Oe);
        for (w = 0; w < Oe; w++) $t[w] = 0;
        for (w = L; w <= R; w++) {
          const Ee = c[w];
          if (fe >= Oe) {
            Te(Ee, x, z, !0);
            continue;
          }
          let We;
          if (Ee.key != null) We = ne.get(Ee.key);
          else
            for (X = j; X <= B; X++)
              if ($t[X - j] === 0 && mt(Ee, d[X])) {
                We = X;
                break;
              }
          We === void 0
            ? Te(Ee, x, z, !0)
            : (($t[We - j] = w + 1),
              We >= Nr ? (Nr = We) : (yt = !0),
              y(Ee, d[We], m, null, x, z, A, T, K),
              fe++);
        }
        const jr = yt ? Hl($t) : Kt;
        for (X = jr.length - 1, w = Oe - 1; w >= 0; w--) {
          const Ee = j + w,
            We = d[Ee],
            Ur = Ee + 1 < I ? d[Ee + 1].el : b;
          $t[w] === 0
            ? y(null, We, m, Ur, x, z, A, T, K)
            : yt && (X < 0 || w !== jr[X] ? Be(We, m, Ur, 2) : X--);
        }
      }
    },
    Be = (c, d, m, b, x = null) => {
      const { el: z, type: A, transition: T, children: K, shapeFlag: w } = c;
      if (w & 6) {
        Be(c.component.subTree, d, m, b);
        return;
      }
      if (w & 128) {
        c.suspense.move(d, m, b);
        return;
      }
      if (w & 64) {
        A.move(c, d, m, W);
        return;
      }
      if (A === be) {
        r(z, d, m);
        for (let R = 0; R < K.length; R++) Be(K[R], d, m, b);
        r(c.anchor, d, m);
        return;
      }
      if (A === _n) {
        M(c, d, m);
        return;
      }
      if (b !== 2 && w & 1 && T)
        if (b === 0) T.beforeEnter(z), r(z, d, m), ze(() => T.enter(z), x);
        else {
          const { leave: R, delayLeave: B, afterLeave: L } = T,
            j = () => r(z, d, m),
            ne = () => {
              R(z, () => {
                j(), L && L();
              });
            };
          B ? B(z, j, ne) : ne();
        }
      else r(z, d, m);
    },
    Te = (c, d, m, b = !1, x = !1) => {
      const {
        type: z,
        props: A,
        ref: T,
        children: K,
        dynamicChildren: w,
        shapeFlag: I,
        patchFlag: R,
        dirs: B,
      } = c;
      if ((T != null && fr(T, null, m, c, !0), I & 256)) {
        d.ctx.deactivate(c);
        return;
      }
      const L = I & 1 && B,
        j = !vn(c);
      let ne;
      if ((j && (ne = A && A.onVnodeBeforeUnmount) && Ge(ne, d, c), I & 6))
        _(c.component, m, b);
      else {
        if (I & 128) {
          c.suspense.unmount(m, b);
          return;
        }
        L && dt(c, null, d, "beforeUnmount"),
          I & 64
            ? c.type.remove(c, d, m, x, W, b)
            : w && (z !== be || (R > 0 && R & 64))
            ? S(w, d, m, !1, !0)
            : ((z === be && R & 384) || (!x && I & 16)) && S(K, d, m),
          b && wt(c);
      }
      ((j && (ne = A && A.onVnodeUnmounted)) || L) &&
        ze(() => {
          ne && Ge(ne, d, c), L && dt(c, null, d, "unmounted");
        }, m);
    },
    wt = (c) => {
      const { type: d, el: m, anchor: b, transition: x } = c;
      if (d === be) {
        ln(m, b);
        return;
      }
      if (d === _n) {
        V(c);
        return;
      }
      const z = () => {
        o(m), x && !x.persisted && x.afterLeave && x.afterLeave();
      };
      if (c.shapeFlag & 1 && x && !x.persisted) {
        const { leave: A, delayLeave: T } = x,
          K = () => A(m, z);
        T ? T(c.el, z, K) : K();
      } else z();
    },
    ln = (c, d) => {
      let m;
      for (; c !== d; ) (m = h(c)), o(c), (c = m);
      o(d);
    },
    _ = (c, d, m) => {
      const { bum: b, scope: x, update: z, subTree: A, um: T } = c;
      b && gn(b),
        x.stop(),
        z && ((z.active = !1), Te(A, c, d, m)),
        T && ze(T, d),
        ze(() => {
          c.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    S = (c, d, m, b = !1, x = !1, z = 0) => {
      for (let A = z; A < c.length; A++) Te(c[A], d, m, b, x);
    },
    E = (c) =>
      c.shapeFlag & 6
        ? E(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : h(c.anchor || c.el),
    P = (c, d, m) => {
      c == null
        ? d._vnode && Te(d._vnode, null, null, !0)
        : y(d._vnode || null, c, d, null, null, null, m),
        eo(),
        hs(),
        (d._vnode = c);
    },
    W = {
      p: y,
      um: Te,
      m: Be,
      r: wt,
      mt: Je,
      mc: H,
      pc: Q,
      pbc: oe,
      n: E,
      o: e,
    };
  let le, N;
  return (
    t && ([le, N] = t(W)), { render: P, hydrate: le, createApp: Dl(P, le) }
  );
}
function ht({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Bs(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (O(r) && O(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[s] = ot(o[s])), (l.el = i.el)),
        n || Bs(i, l)),
        l.type === Fn && (l.el = i.el);
    }
}
function Hl(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (l = (s + i) >> 1), e[n[l]] < u ? (s = l + 1) : (i = l);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const Nl = (e) => e.__isTeleport,
  be = Symbol(void 0),
  Fn = Symbol(void 0),
  Ue = Symbol(void 0),
  _n = Symbol(void 0),
  Ut = [];
let He = null;
function Y(e = !1) {
  Ut.push((He = e ? null : []));
}
function jl() {
  Ut.pop(), (He = Ut[Ut.length - 1] || null);
}
let Qt = 1;
function uo(e) {
  Qt += e;
}
function Os(e) {
  return (
    (e.dynamicChildren = Qt > 0 ? He || Kt : null),
    jl(),
    Qt > 0 && He && He.push(e),
    e
  );
}
function J(e, t, n, r, o, s) {
  return Os(k(e, t, n, r, o, s, !0));
}
function Fs(e, t, n, r, o) {
  return Os(U(e, t, n, r, o, !0));
}
function dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dn = "__vInternal",
  Ds = ({ key: e }) => e ?? null,
  kn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? de(e) || _e(e) || $(e)
        ? { i: Se, r: e, k: t, f: !!n }
        : e
      : null;
function k(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === be ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ds(t),
    ref: t && kn(t),
    scopeId: In,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Se,
  };
  return (
    l
      ? (Fr(a, n), s & 128 && e.normalize(a))
      : n && (a.shapeFlag |= de(n) ? 8 : 16),
    Qt > 0 &&
      !i &&
      He &&
      (a.patchFlag > 0 || s & 6) &&
      a.patchFlag !== 32 &&
      He.push(a),
    a
  );
}
const U = Ul;
function Ul(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === Tl) && (e = Ue), dr(e))) {
    const l = ut(e, t, !0);
    return (
      n && Fr(l, n),
      Qt > 0 &&
        !s &&
        He &&
        (l.shapeFlag & 6 ? (He[He.indexOf(e)] = l) : He.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((na(e) && (e = e.__vccOpts), t)) {
    t = Vl(t);
    let { class: l, style: a } = t;
    l && !de(l) && (t.class = _t(l)),
      re(a) && (rs(a) && !O(a) && (a = xe({}, a)), (t.style = _r(a)));
  }
  const i = de(e) ? 1 : al(e) ? 128 : Nl(e) ? 64 : re(e) ? 4 : $(e) ? 2 : 0;
  return k(e, t, n, r, o, i, s, !0);
}
function Vl(e) {
  return e ? (rs(e) || Dn in e ? xe({}, e) : e) : null;
}
function ut(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    l = t ? Wl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ds(l),
    ref:
      t && t.ref ? (n && o ? (O(o) ? o.concat(kn(t)) : [o, kn(t)]) : kn(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== be ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ut(e.ssContent),
    ssFallback: e.ssFallback && ut(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ee(e = " ", t = 0) {
  return U(Fn, null, e, t);
}
function Or(e, t) {
  const n = U(_n, null, e);
  return (n.staticCount = t), n;
}
function Fe(e = "", t = !1) {
  return t ? (Y(), Fs(Ue, null, e)) : U(Ue, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean"
    ? U(Ue)
    : O(e)
    ? U(be, null, e.slice())
    : typeof e == "object"
    ? ot(e)
    : U(Fn, null, String(e));
}
function ot(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ut(e);
}
function Fr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (O(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Fr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Dn in t)
        ? (t._ctx = Se)
        : o === 3 &&
          Se &&
          (Se.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    $(t)
      ? ((t = { default: t, _ctx: Se }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [ee(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Wl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = _t([t.class, r.class]));
      else if (o === "style") t.style = _r([t.style, r.style]);
      else if (An(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(O(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ge(e, t, n, r = null) {
  Me(e, t, 7, [n, r]);
}
const Gl = Is();
let ql = 0;
function Yl(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Gl,
    s = {
      uid: ql++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new bi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Cs(r, o),
      emitsOptions: gs(r, o),
      emit: null,
      emitted: null,
      propsDefaults: se,
      inheritAttrs: r.inheritAttrs,
      ctx: se,
      data: se,
      props: se,
      attrs: se,
      slots: se,
      refs: se,
      setupState: se,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = rl.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let ce = null;
const Zl = () => ce || Se,
  Rt = (e) => {
    (ce = e), e.scope.on();
  },
  xt = () => {
    ce && ce.scope.off(), (ce = null);
  };
function Ls(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Jl(e, t = !1) {
  Xt = t;
  const { props: n, children: r } = e.vnode,
    o = Ls(e);
  Ml(e, n, o, t), Bl(e, r);
  const s = o ? Ql(e, t) : void 0;
  return (Xt = !1), s;
}
function Ql(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = os(new Proxy(e.ctx, Kl)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? ea(e) : null);
    Rt(e), Ft();
    const s = at(r, e, 0, [e.props, o]);
    if ((Dt(), xt(), jo(s))) {
      if ((s.then(xt, xt), t))
        return s
          .then((i) => {
            fo(e, i, t);
          })
          .catch((i) => {
            Mn(i, e, 0);
          });
      e.asyncDep = s;
    } else fo(e, s, t);
  } else $s(e, t);
}
function fo(e, t, n) {
  $(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : re(t) && (e.setupState = as(t)),
    $s(e, n);
}
let ho;
function $s(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ho && !r.render) {
      const o = r.template || Ir(e).template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          u = xe(xe({ isCustomElement: s, delimiters: l }, i), a);
        r.render = ho(o, u);
      }
    }
    e.render = r.render || Ne;
  }
  Rt(e), Ft(), El(e), Dt(), xt();
}
function Xl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ke(e, "get", "$attrs"), t[n];
    },
  });
}
function ea(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Xl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ln(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(as(os(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in jt) return jt[n](e);
        },
        has(t, n) {
          return n in t || n in jt;
        },
      }))
    );
}
function ta(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function na(e) {
  return $(e) && "__vccOpts" in e;
}
const he = (e, t) => Ji(e, t, Xt);
function Hs(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? re(t) && !O(t)
      ? dr(t)
        ? U(e, null, [t])
        : U(e, t)
      : U(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && dr(n) && (n = [n]),
      U(e, t, n));
}
const ra = Symbol(""),
  oa = () => je(ra),
  sa = "3.2.47",
  ia = "http://www.w3.org/2000/svg",
  bt = typeof document < "u" ? document : null,
  po = bt && bt.createElement("template"),
  la = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? bt.createElementNS(ia, e)
        : bt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => bt.createTextNode(e),
    createComment: (e) => bt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => bt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        po.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = po.content;
        if (r) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function aa(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function ca(e, t, n) {
  const r = e.style,
    o = de(n);
  if (n && !o) {
    if (t && !de(t)) for (const s in t) n[s] == null && hr(r, s, "");
    for (const s in n) hr(r, s, n[s]);
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = s);
  }
}
const go = /\s*!important$/;
function hr(e, t, n) {
  if (O(n)) n.forEach((r) => hr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = ua(e, t);
    go.test(n)
      ? e.setProperty(Ot(r), n.replace(go, ""), "important")
      : (e[r] = n);
  }
}
const mo = ["Webkit", "Moz", "ms"],
  qn = {};
function ua(e, t) {
  const n = qn[t];
  if (n) return n;
  let r = Ze(t);
  if (r !== "filter" && r in e) return (qn[t] = r);
  r = Cn(r);
  for (let o = 0; o < mo.length; o++) {
    const s = mo[o] + r;
    if (s in e) return (qn[t] = s);
  }
  return t;
}
const bo = "http://www.w3.org/1999/xlink";
function fa(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(bo, t.slice(6, t.length))
      : e.setAttributeNS(bo, t, n);
  else {
    const s = ai(t);
    n == null || (s && !Ho(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : n);
  }
}
function da(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || e.tagName === "OPTION") && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Ho(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function it(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ha(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function pa(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [l, a] = ga(t);
    if (r) {
      const u = (s[t] = va(r, o));
      it(e, l, u, a);
    } else i && (ha(e, l, i, a), (s[t] = void 0));
  }
}
const vo = /(?:Once|Passive|Capture)$/;
function ga(e) {
  let t;
  if (vo.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(vo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t];
}
let Yn = 0;
const ma = Promise.resolve(),
  ba = () => Yn || (ma.then(() => (Yn = 0)), (Yn = Date.now()));
function va(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Me(_a(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = ba()), n;
}
function _a(e, t) {
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const _o = /^on[a-z]/,
  ka = (e, t, n, r, o = !1, s, i, l, a) => {
    t === "class"
      ? aa(e, r, o)
      : t === "style"
      ? ca(e, n, r)
      : An(t)
      ? xr(t) || pa(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : xa(e, t, r, o)
        )
      ? da(e, t, r, s, i, l, a)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        fa(e, t, r, o));
  };
function xa(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && _o.test(t) && $(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (_o.test(t) && de(n))
    ? !1
    : t in e;
}
const wa = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
hl.props;
const Mt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => gn(t, n) : t;
};
function ya(e) {
  e.target.composing = !0;
}
function ko(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Ta = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e._assign = Mt(o);
      const s = r || (o.props && o.props.type === "number");
      it(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), s && (l = yn(l)), e._assign(l);
      }),
        n &&
          it(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (it(e, "compositionstart", ya),
          it(e, "compositionend", ko),
          it(e, "change", ko));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: o } },
      s
    ) {
      if (
        ((e._assign = Mt(s)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (r && e.value.trim() === t) ||
              ((o || e.type === "number") && yn(e.value) === t))))
      )
        return;
      const i = t ?? "";
      e.value !== i && (e.value = i);
    },
  },
  za = {
    deep: !0,
    created(e, t, n) {
      (e._assign = Mt(n)),
        it(e, "change", () => {
          const r = e._modelValue,
            o = en(e),
            s = e.checked,
            i = e._assign;
          if (O(r)) {
            const l = kr(r, o),
              a = l !== -1;
            if (s && !a) i(r.concat(o));
            else if (!s && a) {
              const u = [...r];
              u.splice(l, 1), i(u);
            }
          } else if (Bt(r)) {
            const l = new Set(r);
            s ? l.add(o) : l.delete(o), i(l);
          } else i(Ns(e, s));
        });
    },
    mounted: xo,
    beforeUpdate(e, t, n) {
      (e._assign = Mt(n)), xo(e, t, n);
    },
  };
function xo(e, { value: t, oldValue: n }, r) {
  (e._modelValue = t),
    O(t)
      ? (e.checked = kr(t, r.props.value) > -1)
      : Bt(t)
      ? (e.checked = t.has(r.props.value))
      : t !== n && (e.checked = nn(t, Ns(e, !0)));
}
const Ka = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = Bt(t);
    it(e, "change", () => {
      const s = Array.prototype.filter
        .call(e.options, (i) => i.selected)
        .map((i) => (n ? yn(en(i)) : en(i)));
      e._assign(e.multiple ? (o ? new Set(s) : s) : s[0]);
    }),
      (e._assign = Mt(r));
  },
  mounted(e, { value: t }) {
    wo(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Mt(n);
  },
  updated(e, { value: t }) {
    wo(e, t);
  },
};
function wo(e, t) {
  const n = e.multiple;
  if (!(n && !O(t) && !Bt(t))) {
    for (let r = 0, o = e.options.length; r < o; r++) {
      const s = e.options[r],
        i = en(s);
      if (n) O(t) ? (s.selected = kr(t, i) > -1) : (s.selected = t.has(i));
      else if (nn(en(s), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function en(e) {
  return "_value" in e ? e._value : e.value;
}
function Ns(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ea = xe({ patchProp: ka }, la);
let yo;
function Aa() {
  return yo || (yo = Ll(Ea));
}
const Sa = (...e) => {
  const t = Aa().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Ca(r);
      if (!o) return;
      const s = t._component;
      !$(s) && !s.render && !s.template && (s.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Ca(e) {
  return de(e) ? document.querySelector(e) : e;
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const zt = typeof window < "u";
function Ra(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Z = Object.assign;
function Zn(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Ve(o) ? o.map(e) : e(o);
  }
  return n;
}
const Vt = () => {},
  Ve = Array.isArray,
  Ma = /\/$/,
  Pa = (e) => e.replace(Ma, "");
function Jn(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = t.slice(0, a)),
      (s = t.slice(a + 1, l > -1 ? l : t.length)),
      (o = e(s))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = Fa(r ?? t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
  );
}
function Ia(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function To(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Ba(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Pt(t.matched[r], n.matched[o]) &&
    js(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Pt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function js(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Oa(e[n], t[n])) return !1;
  return !0;
}
function Oa(e, t) {
  return Ve(e) ? zo(e, t) : Ve(t) ? zo(t, e) : e === t;
}
function zo(e, t) {
  return Ve(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Fa(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let o = n.length - 1,
    s,
    i;
  for (s = 0; s < r.length; s++)
    if (((i = r[s]), i !== "."))
      if (i === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    r.slice(s - (s === r.length ? 1 : 0)).join("/")
  );
}
var tn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(tn || (tn = {}));
var Wt;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Wt || (Wt = {}));
function Da(e) {
  if (!e)
    if (zt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Pa(e);
}
const La = /^[^#]+#/;
function $a(e, t) {
  return e.replace(La, "#") + t;
}
function Ha(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const $n = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Na(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Ha(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Ko(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const pr = new Map();
function ja(e, t) {
  pr.set(e, t);
}
function Ua(e) {
  const t = pr.get(e);
  return pr.delete(e), t;
}
let Va = () => location.protocol + "//" + location.host;
function Us(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let l = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      a = o.slice(l);
    return a[0] !== "/" && (a = "/" + a), To(a, "");
  }
  return To(n, e) + r + o;
}
function Wa(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const l = ({ state: h }) => {
    const g = Us(e, location),
      v = n.value,
      y = t.value;
    let D = 0;
    if (h) {
      if (((n.value = g), (t.value = h), i && i === v)) {
        i = null;
        return;
      }
      D = y ? h.position - y.position : 0;
    } else r(g);
    o.forEach((C) => {
      C(n.value, v, {
        delta: D,
        type: tn.pop,
        direction: D ? (D > 0 ? Wt.forward : Wt.back) : Wt.unknown,
      });
    });
  };
  function a() {
    i = n.value;
  }
  function u(h) {
    o.push(h);
    const g = () => {
      const v = o.indexOf(h);
      v > -1 && o.splice(v, 1);
    };
    return s.push(g), g;
  }
  function f() {
    const { history: h } = window;
    h.state && h.replaceState(Z({}, h.state, { scroll: $n() }), "");
  }
  function p() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f),
    { pauseListeners: a, listen: u, destroy: p }
  );
}
function Eo(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? $n() : null,
  };
}
function Ga(e) {
  const { history: t, location: n } = window,
    r = { value: Us(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(a, u, f) {
    const p = e.indexOf("#"),
      h =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + a
          : Va() + e + a;
    try {
      t[f ? "replaceState" : "pushState"](u, "", h), (o.value = u);
    } catch (g) {
      console.error(g), n[f ? "replace" : "assign"](h);
    }
  }
  function i(a, u) {
    const f = Z({}, t.state, Eo(o.value.back, a, o.value.forward, !0), u, {
      position: o.value.position,
    });
    s(a, f, !0), (r.value = a);
  }
  function l(a, u) {
    const f = Z({}, o.value, t.state, { forward: a, scroll: $n() });
    s(f.current, f, !0);
    const p = Z({}, Eo(r.value, a, null), { position: f.position + 1 }, u);
    s(a, p, !1), (r.value = a);
  }
  return { location: r, state: o, push: l, replace: i };
}
function qa(e) {
  e = Da(e);
  const t = Ga(e),
    n = Wa(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = Z(
    { location: "", base: e, go: r, createHref: $a.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Ya(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Vs(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const rt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ws = Symbol("");
var Ao;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ao || (Ao = {}));
function It(e, t) {
  return Z(new Error(), { type: e, [Ws]: !0 }, t);
}
function Qe(e, t) {
  return e instanceof Error && Ws in e && (t == null || !!(e.type & t));
}
const So = "[^/]+?",
  Za = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ja = /[.+*?^${}()[\]/\\]/g;
function Qa(e, t) {
  const n = Z({}, Za, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const f = u.length ? [] : [90];
    n.strict && !u.length && (o += "/");
    for (let p = 0; p < u.length; p++) {
      const h = u[p];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        p || (o += "/"), (o += h.value.replace(Ja, "\\$&")), (g += 40);
      else if (h.type === 1) {
        const { value: v, repeatable: y, optional: D, regexp: C } = h;
        s.push({ name: v, repeatable: y, optional: D });
        const F = C || So;
        if (F !== So) {
          g += 10;
          try {
            new RegExp(`(${F})`);
          } catch (V) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${F}): ` + V.message
            );
          }
        }
        let M = y ? `((?:${F})(?:/(?:${F}))*)` : `(${F})`;
        p || (M = D && u.length < 2 ? `(?:/${M})` : "/" + M),
          D && (M += "?"),
          (o += M),
          (g += 20),
          D && (g += -8),
          y && (g += -20),
          F === ".*" && (g += -50);
      }
      f.push(g);
    }
    r.push(f);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function l(u) {
    const f = u.match(i),
      p = {};
    if (!f) return null;
    for (let h = 1; h < f.length; h++) {
      const g = f[h] || "",
        v = s[h - 1];
      p[v.name] = g && v.repeatable ? g.split("/") : g;
    }
    return p;
  }
  function a(u) {
    let f = "",
      p = !1;
    for (const h of e) {
      (!p || !f.endsWith("/")) && (f += "/"), (p = !1);
      for (const g of h)
        if (g.type === 0) f += g.value;
        else if (g.type === 1) {
          const { value: v, repeatable: y, optional: D } = g,
            C = v in u ? u[v] : "";
          if (Ve(C) && !y)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            );
          const F = Ve(C) ? C.join("/") : C;
          if (!F)
            if (D)
              h.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${v}"`);
          f += F;
        }
    }
    return f || "/";
  }
  return { re: i, score: r, keys: s, parse: l, stringify: a };
}
function Xa(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function ec(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Xa(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Co(r)) return 1;
    if (Co(o)) return -1;
  }
  return o.length - r.length;
}
function Co(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const tc = { type: 0, value: "" },
  nc = /[a-zA-Z0-9_]/;
function rc(e) {
  if (!e) return [[]];
  if (e === "/") return [[tc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${u}": ${g}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let l = 0,
    a,
    u = "",
    f = "";
  function p() {
    u &&
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: u,
            regexp: f,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (u && p(), i()) : a === ":" ? (p(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : nc.test(a)
          ? h()
          : (p(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + a)
            : (n = 3)
          : (f += a);
        break;
      case 3:
        p(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), p(), i(), o;
}
function oc(e, t, n) {
  const r = Qa(rc(e.path), n),
    o = Z(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function sc(e, t) {
  const n = [],
    r = new Map();
  t = Po({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return r.get(f);
  }
  function s(f, p, h) {
    const g = !h,
      v = ic(f);
    v.aliasOf = h && h.record;
    const y = Po(t, f),
      D = [v];
    if ("alias" in f) {
      const M = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const V of M)
        D.push(
          Z({}, v, {
            components: h ? h.record.components : v.components,
            path: V,
            aliasOf: h ? h.record : v,
          })
        );
    }
    let C, F;
    for (const M of D) {
      const { path: V } = M;
      if (p && V[0] !== "/") {
        const ie = p.record.path,
          pe = ie[ie.length - 1] === "/" ? "" : "/";
        M.path = p.record.path + (V && pe + V);
      }
      if (
        ((C = oc(M, p, y)),
        h
          ? h.alias.push(C)
          : ((F = F || C),
            F !== C && F.alias.push(C),
            g && f.name && !Mo(C) && i(f.name)),
        v.children)
      ) {
        const ie = v.children;
        for (let pe = 0; pe < ie.length; pe++)
          s(ie[pe], C, h && h.children[pe]);
      }
      (h = h || C),
        ((C.record.components && Object.keys(C.record.components).length) ||
          C.record.name ||
          C.record.redirect) &&
          a(C);
    }
    return F
      ? () => {
          i(F);
        }
      : Vt;
  }
  function i(f) {
    if (Vs(f)) {
      const p = r.get(f);
      p &&
        (r.delete(f),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i));
    } else {
      const p = n.indexOf(f);
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(f) {
    let p = 0;
    for (
      ;
      p < n.length &&
      ec(f, n[p]) >= 0 &&
      (f.record.path !== n[p].record.path || !Gs(f, n[p]));

    )
      p++;
    n.splice(p, 0, f), f.record.name && !Mo(f) && r.set(f.record.name, f);
  }
  function u(f, p) {
    let h,
      g = {},
      v,
      y;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h)) throw It(1, { location: f });
      (y = h.record.name),
        (g = Z(
          Ro(
            p.params,
            h.keys.filter((F) => !F.optional).map((F) => F.name)
          ),
          f.params &&
            Ro(
              f.params,
              h.keys.map((F) => F.name)
            )
        )),
        (v = h.stringify(g));
    } else if ("path" in f)
      (v = f.path),
        (h = n.find((F) => F.re.test(v))),
        h && ((g = h.parse(v)), (y = h.record.name));
    else {
      if (((h = p.name ? r.get(p.name) : n.find((F) => F.re.test(p.path))), !h))
        throw It(1, { location: f, currentLocation: p });
      (y = h.record.name),
        (g = Z({}, p.params, f.params)),
        (v = h.stringify(g));
    }
    const D = [];
    let C = h;
    for (; C; ) D.unshift(C.record), (C = C.parent);
    return { name: y, path: v, params: g, matched: D, meta: ac(D) };
  }
  return (
    e.forEach((f) => s(f)),
    {
      addRoute: s,
      resolve: u,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function Ro(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function ic(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: lc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function lc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Mo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ac(e) {
  return e.reduce((t, n) => Z(t, n.meta), {});
}
function Po(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Gs(e, t) {
  return t.children.some((n) => n === e || Gs(e, n));
}
const qs = /#/g,
  cc = /&/g,
  uc = /\//g,
  fc = /=/g,
  dc = /\?/g,
  Ys = /\+/g,
  hc = /%5B/g,
  pc = /%5D/g,
  Zs = /%5E/g,
  gc = /%60/g,
  Js = /%7B/g,
  mc = /%7C/g,
  Qs = /%7D/g,
  bc = /%20/g;
function Dr(e) {
  return encodeURI("" + e)
    .replace(mc, "|")
    .replace(hc, "[")
    .replace(pc, "]");
}
function vc(e) {
  return Dr(e).replace(Js, "{").replace(Qs, "}").replace(Zs, "^");
}
function gr(e) {
  return Dr(e)
    .replace(Ys, "%2B")
    .replace(bc, "+")
    .replace(qs, "%23")
    .replace(cc, "%26")
    .replace(gc, "`")
    .replace(Js, "{")
    .replace(Qs, "}")
    .replace(Zs, "^");
}
function _c(e) {
  return gr(e).replace(fc, "%3D");
}
function kc(e) {
  return Dr(e).replace(qs, "%23").replace(dc, "%3F");
}
function xc(e) {
  return e == null ? "" : kc(e).replace(uc, "%2F");
}
function En(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function wc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Ys, " "),
      i = s.indexOf("="),
      l = En(i < 0 ? s : s.slice(0, i)),
      a = i < 0 ? null : En(s.slice(i + 1));
    if (l in t) {
      let u = t[l];
      Ve(u) || (u = t[l] = [u]), u.push(a);
    } else t[l] = a;
  }
  return t;
}
function Io(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = _c(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ve(r) ? r.map((s) => s && gr(s)) : [r && gr(r)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function yc(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Ve(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Tc = Symbol(""),
  Bo = Symbol(""),
  Hn = Symbol(""),
  Lr = Symbol(""),
  mr = Symbol("");
function Ht() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function st(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, l) => {
      const a = (p) => {
          p === !1
            ? l(It(4, { from: n, to: t }))
            : p instanceof Error
            ? l(p)
            : Ya(p)
            ? l(It(2, { from: t, to: p }))
            : (s &&
                r.enterCallbacks[o] === s &&
                typeof p == "function" &&
                s.push(p),
              i());
        },
        u = e.call(r && r.instances[o], t, n, a);
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(a)), f.catch((p) => l(p));
    });
}
function Qn(e, t, n, r) {
  const o = [];
  for (const s of e)
    for (const i in s.components) {
      let l = s.components[i];
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (zc(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(st(u, n, r, s, i));
        } else {
          let a = l();
          o.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
                );
              const f = Ra(u) ? u.default : u;
              s.components[i] = f;
              const h = (f.__vccOpts || f)[t];
              return h && st(h, n, r, s, i)();
            })
          );
        }
    }
  return o;
}
function zc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Oo(e) {
  const t = je(Hn),
    n = je(Lr),
    r = he(() => t.resolve(ke(e.to))),
    o = he(() => {
      const { matched: a } = r.value,
        { length: u } = a,
        f = a[u - 1],
        p = n.matched;
      if (!f || !p.length) return -1;
      const h = p.findIndex(Pt.bind(null, f));
      if (h > -1) return h;
      const g = Fo(a[u - 2]);
      return u > 1 && Fo(f) === g && p[p.length - 1].path !== g
        ? p.findIndex(Pt.bind(null, a[u - 2]))
        : h;
    }),
    s = he(() => o.value > -1 && Ac(n.params, r.value.params)),
    i = he(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        js(n.params, r.value.params)
    );
  function l(a = {}) {
    return Ec(a)
      ? t[ke(e.replace) ? "replace" : "push"](ke(e.to)).catch(Vt)
      : Promise.resolve();
  }
  return {
    route: r,
    href: he(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l,
  };
}
const Kc = ws({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Oo,
    setup(e, { slots: t }) {
      const n = on(Oo(e)),
        { options: r } = je(Hn),
        o = he(() => ({
          [Do(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Do(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : Hs(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  br = Kc;
function Ec(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Ac(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!Ve(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function Fo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Do = (e, t, n) => e ?? t ?? n,
  Sc = ws({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = je(mr),
        o = he(() => e.route || r.value),
        s = je(Bo, 0),
        i = he(() => {
          let u = ke(s);
          const { matched: f } = o.value;
          let p;
          for (; (p = f[u]) && !p.components; ) u++;
          return u;
        }),
        l = he(() => o.value.matched[i.value]);
      mn(
        Bo,
        he(() => i.value + 1)
      ),
        mn(Tc, l),
        mn(mr, o);
      const a = Le();
      return (
        bn(
          () => [a.value, l.value, e.name],
          ([u, f, p], [h, g, v]) => {
            f &&
              ((f.instances[p] = u),
              g &&
                g !== f &&
                u &&
                u === h &&
                (f.leaveGuards.size || (f.leaveGuards = g.leaveGuards),
                f.updateGuards.size || (f.updateGuards = g.updateGuards))),
              u &&
                f &&
                (!g || !Pt(f, g) || !h) &&
                (f.enterCallbacks[p] || []).forEach((y) => y(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = o.value,
            f = e.name,
            p = l.value,
            h = p && p.components[f];
          if (!h) return Lo(n.default, { Component: h, route: u });
          const g = p.props[f],
            v = g
              ? g === !0
                ? u.params
                : typeof g == "function"
                ? g(u)
                : g
              : null,
            D = Hs(
              h,
              Z({}, v, t, {
                onVnodeUnmounted: (C) => {
                  C.component.isUnmounted && (p.instances[f] = null);
                },
                ref: a,
              })
            );
          return Lo(n.default, { Component: D, route: u }) || D;
        }
      );
    },
  });
function Lo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Xs = Sc;
function Cc(e) {
  const t = sc(e.routes, e),
    n = e.parseQuery || wc,
    r = e.stringifyQuery || Io,
    o = e.history,
    s = Ht(),
    i = Ht(),
    l = Ht(),
    a = Gi(rt);
  let u = rt;
  zt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = Zn.bind(null, (_) => "" + _),
    p = Zn.bind(null, xc),
    h = Zn.bind(null, En);
  function g(_, S) {
    let E, P;
    return (
      Vs(_) ? ((E = t.getRecordMatcher(_)), (P = S)) : (P = _), t.addRoute(P, E)
    );
  }
  function v(_) {
    const S = t.getRecordMatcher(_);
    S && t.removeRoute(S);
  }
  function y() {
    return t.getRoutes().map((_) => _.record);
  }
  function D(_) {
    return !!t.getRecordMatcher(_);
  }
  function C(_, S) {
    if (((S = Z({}, S || a.value)), typeof _ == "string")) {
      const c = Jn(n, _, S.path),
        d = t.resolve({ path: c.path }, S),
        m = o.createHref(c.fullPath);
      return Z(c, d, {
        params: h(d.params),
        hash: En(c.hash),
        redirectedFrom: void 0,
        href: m,
      });
    }
    let E;
    if ("path" in _) E = Z({}, _, { path: Jn(n, _.path, S.path).path });
    else {
      const c = Z({}, _.params);
      for (const d in c) c[d] == null && delete c[d];
      (E = Z({}, _, { params: p(_.params) })), (S.params = p(S.params));
    }
    const P = t.resolve(E, S),
      W = _.hash || "";
    P.params = f(h(P.params));
    const le = Ia(r, Z({}, _, { hash: vc(W), path: P.path })),
      N = o.createHref(le);
    return Z(
      { fullPath: le, hash: W, query: r === Io ? yc(_.query) : _.query || {} },
      P,
      { redirectedFrom: void 0, href: N }
    );
  }
  function F(_) {
    return typeof _ == "string" ? Jn(n, _, a.value.path) : Z({}, _);
  }
  function M(_, S) {
    if (u !== _) return It(8, { from: S, to: _ });
  }
  function V(_) {
    return ye(_);
  }
  function ie(_) {
    return V(Z(F(_), { replace: !0 }));
  }
  function pe(_) {
    const S = _.matched[_.matched.length - 1];
    if (S && S.redirect) {
      const { redirect: E } = S;
      let P = typeof E == "function" ? E(_) : E;
      return (
        typeof P == "string" &&
          ((P = P.includes("?") || P.includes("#") ? (P = F(P)) : { path: P }),
          (P.params = {})),
        Z(
          { query: _.query, hash: _.hash, params: "path" in P ? {} : _.params },
          P
        )
      );
    }
  }
  function ye(_, S) {
    const E = (u = C(_)),
      P = a.value,
      W = _.state,
      le = _.force,
      N = _.replace === !0,
      c = pe(E);
    if (c)
      return ye(
        Z(F(c), {
          state: typeof c == "object" ? Z({}, W, c.state) : W,
          force: le,
          replace: N,
        }),
        S || E
      );
    const d = E;
    d.redirectedFrom = S;
    let m;
    return (
      !le &&
        Ba(r, P, E) &&
        ((m = It(16, { to: d, from: P })), ft(P, P, !0, !1)),
      (m ? Promise.resolve(m) : ae(d, P))
        .catch((b) => (Qe(b) ? (Qe(b, 2) ? b : Ie(b)) : te(b, d, P)))
        .then((b) => {
          if (b) {
            if (Qe(b, 2))
              return ye(
                Z({ replace: N }, F(b.to), {
                  state: typeof b.to == "object" ? Z({}, W, b.to.state) : W,
                  force: le,
                }),
                S || d
              );
          } else b = ge(d, P, !0, N, W);
          return oe(d, P, b), b;
        })
    );
  }
  function H(_, S) {
    const E = M(_, S);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function ae(_, S) {
    let E;
    const [P, W, le] = Rc(_, S);
    E = Qn(P.reverse(), "beforeRouteLeave", _, S);
    for (const c of P)
      c.leaveGuards.forEach((d) => {
        E.push(st(d, _, S));
      });
    const N = H.bind(null, _, S);
    return (
      E.push(N),
      Tt(E)
        .then(() => {
          E = [];
          for (const c of s.list()) E.push(st(c, _, S));
          return E.push(N), Tt(E);
        })
        .then(() => {
          E = Qn(W, "beforeRouteUpdate", _, S);
          for (const c of W)
            c.updateGuards.forEach((d) => {
              E.push(st(d, _, S));
            });
          return E.push(N), Tt(E);
        })
        .then(() => {
          E = [];
          for (const c of _.matched)
            if (c.beforeEnter && !S.matched.includes(c))
              if (Ve(c.beforeEnter))
                for (const d of c.beforeEnter) E.push(st(d, _, S));
              else E.push(st(c.beforeEnter, _, S));
          return E.push(N), Tt(E);
        })
        .then(
          () => (
            _.matched.forEach((c) => (c.enterCallbacks = {})),
            (E = Qn(le, "beforeRouteEnter", _, S)),
            E.push(N),
            Tt(E)
          )
        )
        .then(() => {
          E = [];
          for (const c of i.list()) E.push(st(c, _, S));
          return E.push(N), Tt(E);
        })
        .catch((c) => (Qe(c, 8) ? c : Promise.reject(c)))
    );
  }
  function oe(_, S, E) {
    for (const P of l.list()) P(_, S, E);
  }
  function ge(_, S, E, P, W) {
    const le = M(_, S);
    if (le) return le;
    const N = S === rt,
      c = zt ? history.state : {};
    E &&
      (P || N
        ? o.replace(_.fullPath, Z({ scroll: N && c && c.scroll }, W))
        : o.push(_.fullPath, W)),
      (a.value = _),
      ft(_, S, E, N),
      Ie();
  }
  let me;
  function Pe() {
    me ||
      (me = o.listen((_, S, E) => {
        if (!ln.listening) return;
        const P = C(_),
          W = pe(P);
        if (W) {
          ye(Z(W, { replace: !0 }), P).catch(Vt);
          return;
        }
        u = P;
        const le = a.value;
        zt && ja(Ko(le.fullPath, E.delta), $n()),
          ae(P, le)
            .catch((N) =>
              Qe(N, 12)
                ? N
                : Qe(N, 2)
                ? (ye(N.to, P)
                    .then((c) => {
                      Qe(c, 20) &&
                        !E.delta &&
                        E.type === tn.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Vt),
                  Promise.reject())
                : (E.delta && o.go(-E.delta, !1), te(N, P, le))
            )
            .then((N) => {
              (N = N || ge(P, le, !1)),
                N &&
                  (E.delta && !Qe(N, 8)
                    ? o.go(-E.delta, !1)
                    : E.type === tn.pop && Qe(N, 20) && o.go(-1, !1)),
                oe(P, le, N);
            })
            .catch(Vt);
      }));
  }
  let Je = Ht(),
    Lt = Ht(),
    ue;
  function te(_, S, E) {
    Ie(_);
    const P = Lt.list();
    return (
      P.length ? P.forEach((W) => W(_, S, E)) : console.error(_),
      Promise.reject(_)
    );
  }
  function Q() {
    return ue && a.value !== rt
      ? Promise.resolve()
      : new Promise((_, S) => {
          Je.add([_, S]);
        });
  }
  function Ie(_) {
    return (
      ue ||
        ((ue = !_),
        Pe(),
        Je.list().forEach(([S, E]) => (_ ? E(_) : S())),
        Je.reset()),
      _
    );
  }
  function ft(_, S, E, P) {
    const { scrollBehavior: W } = e;
    if (!zt || !W) return Promise.resolve();
    const le =
      (!E && Ua(Ko(_.fullPath, 0))) ||
      ((P || !E) && history.state && history.state.scroll) ||
      null;
    return fs()
      .then(() => W(_, S, le))
      .then((N) => N && Na(N))
      .catch((N) => te(N, _, S));
  }
  const Be = (_) => o.go(_);
  let Te;
  const wt = new Set(),
    ln = {
      currentRoute: a,
      listening: !0,
      addRoute: g,
      removeRoute: v,
      hasRoute: D,
      getRoutes: y,
      resolve: C,
      options: e,
      push: V,
      replace: ie,
      go: Be,
      back: () => Be(-1),
      forward: () => Be(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: Lt.add,
      isReady: Q,
      install(_) {
        const S = this;
        _.component("RouterLink", br),
          _.component("RouterView", Xs),
          (_.config.globalProperties.$router = S),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ke(a),
          }),
          zt &&
            !Te &&
            a.value === rt &&
            ((Te = !0), V(o.location).catch((W) => {}));
        const E = {};
        for (const W in rt) E[W] = he(() => a.value[W]);
        _.provide(Hn, S), _.provide(Lr, on(E)), _.provide(mr, a);
        const P = _.unmount;
        wt.add(_),
          (_.unmount = function () {
            wt.delete(_),
              wt.size < 1 &&
                ((u = rt),
                me && me(),
                (me = null),
                (a.value = rt),
                (Te = !1),
                (ue = !1)),
              P();
          });
      },
    };
  return ln;
}
function Tt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Rc(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => Pt(u, l)) ? r.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((u) => Pt(u, a)) || o.push(a));
  }
  return [n, r, o];
}
function ei() {
  return je(Hn);
}
function ti() {
  return je(Lr);
}
const Mc = "/FS_KlimaVision/assets/Logo-6e84bca8.svg";
const Nn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  sn = (e) => (ms("data-v-0179af34"), (e = e()), bs(), e),
  Pc = { class: "min-h-16 relative mx-auto p-2 font-semibold md:shadow-sm" },
  Ic = { class: "item-center flex justify-between" },
  Bc = sn(() =>
    k("img", { src: Mc, class: "ml-4 h-10 self-center lg:ml-10" }, null, -1)
  ),
  Oc = [Bc],
  Fc = {
    class: "hidden items-center justify-center space-x-8 text-zinc-800 md:flex",
  },
  Dc = sn(() => k("div", { class: "hidden items-center md:flex" }, null, -1)),
  Lc = sn(() =>
    k(
      "span",
      {
        class:
          "hamburger-top absolute top-0 left-0 h-0.5 w-6 rotate-0 bg-slate-900 transition-all duration-500",
      },
      null,
      -1
    )
  ),
  $c = sn(() =>
    k(
      "span",
      {
        class:
          "hamburger-middle absolute top-0 left-0 h-0.5 w-5 translate-y-[7px] rotate-0 bg-slate-900 transition-all duration-500",
      },
      null,
      -1
    )
  ),
  Hc = sn(() =>
    k(
      "span",
      {
        class:
          "hamburger-bottom absolute top-0 left-0 h-0.5 w-6 translate-y-[14px] rotate-0 bg-slate-900 transition-all duration-500",
      },
      null,
      -1
    )
  ),
  Nc = [Lc, $c, Hc],
  jc = { class: "md:hidden" },
  Uc = {
    __name: "MainNav",
    setup(e) {
      const t = Le(!1),
        n = ei();
      function r() {
        t.value = !t.value;
      }
      const o = () => {
        n.push("/"), console.log("klickt");
      };
      return (s, i) => {
        const l = Pr("RouterLink");
        return (
          Y(),
          J("nav", Pc, [
            k("div", Ic, [
              k("div", { onClick: o, class: "" }, Oc),
              k("div", Fc, [
                U(
                  l,
                  {
                    to: "/",
                    class:
                      "rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100",
                  },
                  { default: Ae(() => [ee("Home")]), _: 1 }
                ),
                U(
                  l,
                  {
                    to: "/co2-data",
                    class:
                      "rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100",
                  },
                  { default: Ae(() => [ee("CO2-Data")]), _: 1 }
                ),
                U(
                  l,
                  {
                    to: "/about",
                    class:
                      "rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100",
                  },
                  { default: Ae(() => [ee("About")]), _: 1 }
                ),
                U(
                  l,
                  {
                    to: "/blog",
                    class:
                      "rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100",
                  },
                  { default: Ae(() => [ee("Blog")]), _: 1 }
                ),
              ]),
              Dc,
              k(
                "button",
                {
                  id: "menu-btn",
                  onClick: r,
                  class: _t([
                    { open: t.value },
                    "hamburger relative block h-6 w-6 cursor-pointer self-center transition-all duration-300 focus:outline-none md:hidden",
                  ]),
                },
                Nc,
                2
              ),
            ]),
            k("div", jc, [
              k(
                "div",
                {
                  id: "hamMenuBackdrop",
                  onClick: r,
                  class: _t([
                    { hidden: !t.value, flex: t.value },
                    "fixed left-0 top-0 z-10 m-0 h-screen w-screen bg-slate-100 bg-opacity-20 backdrop-blur-sm",
                  ]),
                },
                null,
                2
              ),
              k(
                "div",
                {
                  id: "menu",
                  class: _t([
                    { hidden: !t.value, flex: t.value },
                    "absolute left-6 right-6 z-20 mt-10 flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md transition-all duration-200 sm:w-auto sm:self-center",
                  ]),
                },
                [
                  U(
                    l,
                    {
                      onClick: r,
                      to: "/",
                      class: "border-b-2 hover:text-emerald-700",
                    },
                    { default: Ae(() => [ee("Home")]), _: 1 }
                  ),
                  U(
                    l,
                    {
                      onClick: r,
                      to: "/co2-data",
                      class: "border-b-2 hover:text-emerald-700",
                    },
                    { default: Ae(() => [ee("CO2-Data")]), _: 1 }
                  ),
                  U(
                    l,
                    {
                      onClick: r,
                      to: "/about",
                      class: "border-b-2 hover:text-emerald-700",
                    },
                    { default: Ae(() => [ee("About")]), _: 1 }
                  ),
                  U(
                    l,
                    {
                      onClick: r,
                      to: "/blog",
                      class: "border-b-2 hover:text-emerald-700",
                    },
                    { default: Ae(() => [ee("Blog")]), _: 1 }
                  ),
                ],
                2
              ),
            ]),
          ])
        );
      };
    },
  },
  Vc = Nn(Uc, [["__scopeId", "data-v-0179af34"]]),
  Wc = { class: "h-40 w-screen bg-zinc-800 p-5 font-bold" },
  Gc = {
    class:
      "flex list-none items-center justify-center space-x-4 py-4 font-black text-emerald-100",
  },
  qc = k(
    "p",
    { class: "mt-6 flex justify-center text-emerald-50" },
    "KlimaVision ©2023",
    -1
  ),
  Yc = {
    __name: "Footer",
    setup(e) {
      return (t, n) => (
        Y(),
        J("footer", null, [
          k("div", Wc, [
            k("div", Gc, [
              U(
                ke(br),
                { to: "/impressum" },
                { default: Ae(() => [ee("Impressum")]), _: 1 }
              ),
              U(
                ke(br),
                { to: "/datenschutz" },
                { default: Ae(() => [ee("Datenschutz")]), _: 1 }
              ),
            ]),
            qc,
          ]),
        ])
      );
    },
  };
const Zc = {
    __name: "App",
    setup(e) {
      const t = ti();
      return (n, r) => (
        Y(),
        J(
          be,
          null,
          [U(Vc), (Y(), Fs(ke(Xs), { key: ke(t).fullPath })), U(Yc)],
          64
        )
      );
    },
  },
  Jc = [
    {
      titel: "Co2-Report 2022",
      id: 0,
      text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde tausend mannigfaltige Gräschen mir merkwürdig werden; wenn ich das Wimmeln der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf, das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! Wenn's dann um meine Augen dämmert, und die Welt um mich her und der Himmel ganz in meiner Seele ruhn wie die Gestalt einer",
      picUrl:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      titel: "Die neue KlimaVision Website ist Online",
      id: 1,
      text: "Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte! Hatte einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um die Früchte seiner Arbeit zu erleichtern? Oder gehörten die Schritte hinter ihm zu einem der unzähligen Gesetzeshüter dieser Stadt, und die stählerne Acht um seine Handgelenke würde gleich zuschnappen? Er konnte die Aufforderung stehen zu bleiben schon hören. Gehetzt sah er sich um. Plötzlich erblickte er den schmalen Durchgang. Blitzartig drehte er sich nach rechts und verschwand zwischen den beiden Gebäuden. Beinahe wäre er dabei über den umgestürzten Mülleimer gefallen, der mitten im Weg lag. Er versuchte, sich in der Dunkelheit seinen Weg zu ertasten und erstarrte: Anscheinend gab es keinen anderen Ausweg aus diesem kleinen Hof als den Durchgang, durch den er gekommen war. Die Schritte wurden lauter und lauter, er sah eine dunkle Gestalt um die Ecke biegen. Fieberhaft irrten seine Augen durch die nächtliche Dunkelheit und suchten einen Ausweg. War jetzt wirklich alles vorbei,",
      picUrl:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      titel: "Die KlimaCon 2022  -  Wir waren dabei!",
      id: 2,
      text: "Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,",
      picUrl:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      titel: "Die KlimaCon 2021 -  Wir waren dabei!",
      id: 3,
      text: "Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,",
      picUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      titel: "Co2 geht uns alle etwas an!",
      id: 4,
      text: "Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,",
      picUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    },
    {
      titel: "Noch können wir die Zukunft Retten!",
      id: 5,
      text: "Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,",
      picUrl:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ],
  $r = { data: Jc },
  Qc = {
    class:
      "group flex flex-col overflow-hidden rounded-md bg-sky-50 shadow-md shadow-zinc-900/80",
  },
  Xc = ["src"],
  eu = { class: "p-4" },
  tu = { class: "h-16 py-4 text-center text-xl font-semibold text-green-600" },
  nu = { class: "mt-8 font-sans text-zinc-800 line-clamp-4" },
  xn = {
    __name: "BlogCard",
    props: {
      blogHeadline: String,
      blogText: String,
      blogPic: String,
      blogId: Number,
    },
    setup(e) {
      return (t, n) => {
        const r = Pr("RouterLink");
        return (
          Y(),
          J("div", Qc, [
            k(
              "img",
              {
                src: e.blogPic,
                height: "400",
                width: "400",
                class:
                  "mx-auto transition-all duration-300 group-hover:scale-105",
              },
              null,
              8,
              Xc
            ),
            k("div", eu, [
              k("h3", tu, Re(e.blogHeadline), 1),
              k("p", nu, Re(e.blogText), 1),
            ]),
            U(
              r,
              {
                class:
                  "text-md peer m-4 rounded-md bg-green-600 px-4 py-2 text-center font-medium text-zinc-800 transition-all duration-200 hover:scale-105 hover:bg-sky-400 hover:text-green-50",
                to: { name: "Blogpage", params: { id: e.blogId } },
              },
              { default: Ae(() => [ee("Mehr Lesen")]), _: 1 },
              8,
              ["to"]
            ),
          ])
        );
      };
    },
  };
const ru = (e) => (ms("data-v-d7fc13dd"), (e = e()), bs(), e),
  ou = {
    class:
      "flex w-full justify-center bg-sky-200 bg-opacity-40 shadow-md backdrop-blur-lg",
  },
  su = { class: "max-w-6xl self-center" },
  iu = ru(() => k("h2", null, "Unsere neusten Beiträge", -1)),
  lu = {
    class: "grid grid-cols-1 gap-x-3 gap-y-4 p-4 sm:grid-cols-2 md:grid-cols-3",
  },
  au = {
    __name: "BlogPreview",
    setup(e) {
      const t = Le($r.data);
      return (n, r) => (
        Y(),
        J("div", ou, [
          k("div", su, [
            iu,
            k("div", lu, [
              U(
                xn,
                {
                  "blog-headline": t.value[0].titel,
                  "blog-text": t.value[0].text,
                  "blog-pic": t.value[0].picUrl,
                  "blog-id": t.value[0].id,
                },
                null,
                8,
                ["blog-headline", "blog-text", "blog-pic", "blog-id"]
              ),
              U(
                xn,
                {
                  "blog-headline": t.value[1].titel,
                  "blog-text": t.value[1].text,
                  "blog-pic": t.value[1].picUrl,
                  "blog-id": t.value[1].id,
                },
                null,
                8,
                ["blog-headline", "blog-text", "blog-pic", "blog-id"]
              ),
              U(
                xn,
                {
                  "blog-headline": t.value[2].titel,
                  "blog-text": t.value[2].text,
                  "blog-pic": t.value[2].picUrl,
                  "blog-id": t.value[2].id,
                },
                null,
                8,
                ["blog-headline", "blog-text", "blog-pic", "blog-id"]
              ),
            ]),
          ]),
        ])
      );
    },
  },
  Hr = Nn(au, [["__scopeId", "data-v-d7fc13dd"]]),
  cu = { class: "relative" },
  uu = Or(
    '<div class="fixed inset-0 -z-10 mx-auto mt-[32rem] h-[20rem] w-[20rem] animate-spin-slow rounded-full bg-gradient-to-t from-green-600 to-sky-600 opacity-30 ring-4 ring-sky-800 blur-md md:mt-96 md:h-96 md:w-96 lg:h-[40rem] lg:w-[40rem]"></div><header class="relative mx-auto my-4 flex max-w-6xl items-center justify-start overflow-hidden text-6xl font-bold"><h1 class="ml-4 max-w-sm bg-gradient-to-br from-green-600 to-sky-500 bg-clip-text p-8 text-transparent md:mx-auto"><span class="text-zinc-700">Co2</span> geht uns alle etwas an! </h1><div class="absolute left-1/2 -z-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 20 20" stroke-width="0.6" stroke="currentColor" class="h-64 w-64 stroke-sky-400 opacity-40"><path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"></path></svg></div></header>',
    2
  ),
  fu = { class: "mx-auto flex flex-col" },
  du = k(
    "div",
    { class: "my-4 max-w-full self-center" },
    [
      k(
        "div",
        {
          class:
            "z-0 max-w-5xl bg-sky-200/20 p-4 shadow-md backdrop-blur-md md:rounded-2xl md:p-10",
        },
        [
          k(
            "h2",
            { class: "font-serif text-3xl font-extrabold text-green-600" },
            " Wir sind KlimaVision "
          ),
          k(
            "p",
            { class: "my-4 px-2 text-lg font-medium text-zinc-800" },
            " KlimaVision ist eine Non-Profit-Organisation, die sich dem Klimaschutz und der Reduzierung von CO2-Emissionen verschrieben hat. Wir betreiben eine Informationsplattform, auf der die CO2-Emissionen von Ländern und Unternehmen einsehbar sind. Unsere Datenbank bietet benutzerfreundliche Filter- und Sortiermöglichkeiten. Wir arbeiten eng mit Experten zusammen, um aktuelle und zuverlässige Informationen bereitzustellen. Wir fördern aktiv erneuerbare Energien und Technologien zur Emissionsreduzierung. Werden Sie Teil unserer Mission und helfen Sie uns, eine bessere Zukunft für unseren Planeten zu schaffen. "
          ),
        ]
      ),
    ],
    -1
  ),
  hu = {
    class:
      "flex items-center justify-center bg-green-600/60 p-5 backdrop-blur-lg md:flex-row md:rounded-md md:p-10",
  },
  pu = { class: "flex flex-col justify-center p-10" },
  gu = k(
    "h2",
    { class: "font-serif text-8xl font-bold text-zinc-800" },
    " The Co2 Report ",
    -1
  ),
  mu = k(
    "p",
    { class: "py-10 font-mono text-lg font-bold text-zinc-900" },
    " Sehen Sie sich die die Co2 Ausstöße von Ländern und unternehmen an! ",
    -1
  ),
  bu = k(
    "div",
    {
      class:
        "relative flex max-w-6xl justify-center self-center overflow-hidden py-10",
    },
    null,
    -1
  ),
  vu = {
    __name: "HomeView",
    setup(e) {
      return (t, n) => {
        const r = Pr("RouterLink");
        return (
          Y(),
          J("div", cu, [
            uu,
            k("main", fu, [
              du,
              k("div", hu, [
                k("div", pu, [
                  gu,
                  mu,
                  U(
                    r,
                    {
                      to: "/co2-data",
                      class:
                        "text-md peer mx-10 rounded-md bg-zinc-800 px-4 py-2 text-center font-medium text-sky-100 transition-all duration-200 hover:scale-105 hover:bg-sky-400 hover:text-green-50",
                    },
                    { default: Ae(() => [ee("Zu den Daten!")]), _: 1 }
                  ),
                ]),
                bu,
              ]),
              U(Hr),
            ]),
          ])
        );
      };
    },
  },
  _u = [
    {
      land: "Afghanistan",
      co2Total: "8672",
      proKopf: "0.23",
      bevolkerung: "38041754",
      anteil: "0.03%",
    },
    {
      land: "Ägypten",
      co2Total: "238560",
      proKopf: "2.38",
      bevolkerung: "100388073",
      anteil: "0.71%",
    },
    {
      land: "Albanien",
      co2Total: "4536",
      proKopf: "1.59",
      bevolkerung: "2854191",
      anteil: "0.01%",
    },
    {
      land: "Algerien",
      co2Total: "150006",
      proKopf: "3.48",
      bevolkerung: "43053054",
      anteil: "0.45%",
    },
    {
      land: "Andorra",
      co2Total: "469",
      proKopf: "6.08",
      bevolkerung: "77142",
      anteil: "0.00%",
    },
    {
      land: "Angola",
      co2Total: "34693",
      proKopf: "1.09",
      bevolkerung: "31825295",
      anteil: "0.10%",
    },
    {
      land: "Antigua und Barbuda",
      co2Total: "557",
      proKopf: "5.74",
      bevolkerung: "97118",
      anteil: "0.00%",
    },
    {
      land: "Äquatorialguinea",
      co2Total: "5655",
      proKopf: "4.17",
      bevolkerung: "1355986",
      anteil: "0.02%",
    },
    {
      land: "Argentinien",
      co2Total: "201348",
      proKopf: "4.48",
      bevolkerung: "44938712",
      anteil: "0.60%",
    },
    {
      land: "Armenien",
      co2Total: "5156",
      proKopf: "1.74",
      bevolkerung: "2957731",
      anteil: "0.02%",
    },
    {
      land: "Aserbaidschan",
      co2Total: "37620",
      proKopf: "3.75",
      bevolkerung: "10023318",
      anteil: "0.11%",
    },
    {
      land: "Äthiopien",
      co2Total: "14870",
      proKopf: "0.13",
      bevolkerung: "112078730",
      anteil: "0.04%",
    },
    {
      land: "Australien",
      co2Total: "375908",
      proKopf: "14.59",
      bevolkerung: "25766605",
      anteil: "1.13%",
    },
    {
      land: "Bahamas",
      co2Total: "1786",
      proKopf: "4.59",
      bevolkerung: "389482",
      anteil: "0.01%",
    },
    {
      land: "Bahrain",
      co2Total: "31694",
      proKopf: "21.11",
      bevolkerung: "1501635",
      anteil: "0.09%",
    },
    {
      land: "Bangladesch",
      co2Total: "84246",
      proKopf: "0.5",
      bevolkerung: "167310838",
      anteil: "0.25%",
    },
    {
      land: "Barbados",
      co2Total: "1276",
      proKopf: "4.45",
      bevolkerung: "287025",
      anteil: "0.00%",
    },
    {
      land: "Belgien",
      co2Total: "96889",
      proKopf: "8.44",
      bevolkerung: "11484055",
      anteil: "0.29%",
    },
    {
      land: "Belize",
      co2Total: "568",
      proKopf: "1.46",
      bevolkerung: "390353",
      anteil: "0.00%",
    },
    {
      land: "Benin",
      co2Total: "6476",
      proKopf: "0.55",
      bevolkerung: "11801151",
      anteil: "0.02%",
    },
    {
      land: "Bhutan",
      co2Total: "1261",
      proKopf: "1.73",
      bevolkerung: "727145",
      anteil: "0.00%",
    },
    {
      land: "Bolivien",
      co2Total: "21606",
      proKopf: "1.88",
      bevolkerung: "11513100",
      anteil: "0.06%",
    },
    {
      land: "Bosnien und Herzegowina",
      co2Total: "21848",
      proKopf: "6.62",
      bevolkerung: "3301000",
      anteil: "0.07%",
    },
    {
      land: "Botswana",
      co2Total: "6340",
      proKopf: "2.7",
      bevolkerung: "2346179",
      anteil: "0.02%",
    },
    {
      land: "Brasilien",
      co2Total: "462299",
      proKopf: "2.17",
      bevolkerung: "212559417",
      anteil: "1.38%",
    },
    {
      land: "Brunei",
      co2Total: "7664",
      proKopf: "17.69",
      bevolkerung: "433285",
      anteil: "0.02%",
    },
    {
      land: "Bulgarien",
      co2Total: "41708",
      proKopf: "5.98",
      bevolkerung: "6975761",
      anteil: "0.12%",
    },
    {
      land: "Burkina Faso",
      co2Total: "3418",
      proKopf: "0.17",
      bevolkerung: "20321378",
      anteil: "0.01%",
    },
    {
      land: "Burundi",
      co2Total: "495",
      proKopf: "0.04",
      bevolkerung: "11530580",
      anteil: "0.00%",
    },
    {
      land: "Chile",
      co2Total: "85822",
      proKopf: "4.53",
      bevolkerung: "18952038",
      anteil: "0.26%",
    },
    {
      land: "Volksrepublik China",
      co2Total: "9893038",
      proKopf: "7.08",
      bevolkerung: "1397715000",
      anteil: "29.63%",
    },
    {
      land: "Costa Rica",
      co2Total: "8023",
      proKopf: "1.59",
      bevolkerung: "5047561",
      anteil: "0.02%",
    },
    {
      land: "Elfenbeinküste",
      co2Total: "9674",
      proKopf: "0.38",
      bevolkerung: "25716544",
      anteil: "0.03%",
    },
    {
      land: "Dänemark",
      co2Total: "31786",
      proKopf: "5.46",
      bevolkerung: "5818553",
      anteil: "0.10%",
    },
    {
      land: "Deutschland",
      co2Total: "727973",
      proKopf: "8.76",
      bevolkerung: "83132799",
      anteil: "2.18%",
    },
    {
      land: "Dominica",
      co2Total: "180",
      proKopf: "2.5",
      bevolkerung: "71808",
      anteil: "0.00%",
    },
    {
      land: "Dominikanische Republik",
      co2Total: "25258",
      proKopf: "2.35",
      bevolkerung: "10738958",
      anteil: "0.08%",
    },
    {
      land: "Dschibuti",
      co2Total: "620",
      proKopf: "0.64",
      bevolkerung: "973560",
      anteil: "0.00%",
    },
    {
      land: "Ecuador",
      co2Total: "41155",
      proKopf: "2.37",
      bevolkerung: "17373662",
      anteil: "0.12%",
    },
    {
      land: "El Salvador",
      co2Total: "7169",
      proKopf: "1.11",
      bevolkerung: "6453553",
      anteil: "0.02%",
    },
    {
      land: "Eritrea",
      co2Total: "711",
      proKopf: "0.11",
      bevolkerung: "6333135",
      anteil: "0.00%",
    },
    {
      land: "Estland",
      co2Total: "16590",
      proKopf: "12.46",
      bevolkerung: "1331824",
      anteil: "0.05%",
    },
    {
      land: "Fidschi",
      co2Total: "2046",
      proKopf: "2.3",
      bevolkerung: "889953",
      anteil: "0.01%",
    },
    {
      land: "Finnland",
      co2Total: "45871",
      proKopf: "8.31",
      bevolkerung: "5520314",
      anteil: "0.14%",
    },
    {
      land: "Frankreich",
      co2Total: "303276",
      proKopf: "4.52",
      bevolkerung: "67059887",
      anteil: "0.91%",
    },
    {
      land: "Gabun",
      co2Total: "5321",
      proKopf: "2.45",
      bevolkerung: "2172579",
      anteil: "0.02%",
    },
    {
      land: "Gambia",
      co2Total: "532",
      proKopf: "0.23",
      bevolkerung: "2347706",
      anteil: "0.00%",
    },
    {
      land: "Ghana",
      co2Total: "16670",
      proKopf: "0.54",
      bevolkerung: "30792608",
      anteil: "0.05%",
    },
    {
      land: "Grenada",
      co2Total: "268",
      proKopf: "2.39",
      bevolkerung: "112003",
      anteil: "0.00%",
    },
    {
      land: "Griechenland",
      co2Total: "62434",
      proKopf: "5.83",
      bevolkerung: "10716322",
      anteil: "0.19%",
    },
    {
      land: "Guatemala",
      co2Total: "16777",
      proKopf: "1.01",
      bevolkerung: "16604026",
      anteil: "0.05%",
    },
    {
      land: "Guinea",
      co2Total: "2996",
      proKopf: "0.23",
      bevolkerung: "12771246",
      anteil: "0.01%",
    },
    {
      land: "Guinea-Bissau",
      co2Total: "293",
      proKopf: "0.15",
      bevolkerung: "1920922",
      anteil: "0.00%",
    },
    {
      land: "Guyana",
      co2Total: "2384",
      proKopf: "3.05",
      bevolkerung: "782766",
      anteil: "0.01%",
    },
    {
      land: "Haiti",
      co2Total: "2978",
      proKopf: "0.26",
      bevolkerung: "11263077",
      anteil: "0.01%",
    },
    {
      land: "Honduras",
      co2Total: "9813",
      proKopf: "1.01",
      bevolkerung: "9746117",
      anteil: "0.03%",
    },
    {
      land: "Indien",
      co2Total: "2407672",
      proKopf: "1.76",
      bevolkerung: "1366417754",
      anteil: "7.21%",
    },
    {
      land: "Indonesien",
      co2Total: "563325",
      proKopf: "2.08",
      bevolkerung: "270203917",
      anteil: "1.69%",
    },
    {
      land: "Irak",
      co2Total: "190061",
      proKopf: "4.83",
      bevolkerung: "39309783",
      anteil: "0.57%",
    },
    {
      land: "Iran",
      co2Total: "661710",
      proKopf: "7.98",
      bevolkerung: "82913906",
      anteil: "1.98%",
    },
    {
      land: "Irland",
      co2Total: "37711",
      proKopf: "7.53",
      bevolkerung: "5007069",
      anteil: "0.11%",
    },
    {
      land: "Island",
      co2Total: "2065",
      proKopf: "5.71",
      bevolkerung: "361313",
      anteil: "0.01%",
    },
    {
      land: "Israel",
      co2Total: "65166",
      proKopf: "7.2",
      bevolkerung: "9053300",
      anteil: "0.20%",
    },
    {
      land: "Italien",
      co2Total: "320411",
      proKopf: "5.31",
      bevolkerung: "60297396",
      anteil: "0.96%",
    },
    {
      land: "Jamaika",
      co2Total: "8225",
      proKopf: "2.79",
      bevolkerung: "2948279",
      anteil: "0.02%",
    },
    {
      land: "Japan",
      co2Total: "1135886",
      proKopf: "9",
      bevolkerung: "126226568",
      anteil: "3.40%",
    },
    {
      land: "Jemen",
      co2Total: "10609",
      proKopf: "0.36",
      bevolkerung: "29161922",
      anteil: "0.03%",
    },
    {
      land: "Jordanien",
      co2Total: "25108",
      proKopf: "2.49",
      bevolkerung: "10101694",
      anteil: "0.08%",
    },
    {
      land: "Kambodscha",
      co2Total: "9919",
      proKopf: "0.6",
      bevolkerung: "16486542",
      anteil: "0.03%",
    },
    {
      land: "Kamerun",
      co2Total: "8291",
      proKopf: "0.32",
      bevolkerung: "25876380",
      anteil: "0.02%",
    },
    {
      land: "Kanada",
      co2Total: "544894",
      proKopf: "14.73",
      bevolkerung: "36991981",
      anteil: "1.63%",
    },
    {
      land: "Kap Verde",
      co2Total: "543",
      proKopf: "1.12",
      bevolkerung: "483628",
      anteil: "0.00%",
    },
    {
      land: "Kasachstan",
      co2Total: "247207",
      proKopf: "13.35",
      bevolkerung: "18513930",
      anteil: "0.74%",
    },
    {
      land: "Katar",
      co2Total: "103259",
      proKopf: "36.46",
      bevolkerung: "2832067",
      anteil: "0.31%",
    },
    {
      land: "Kenia",
      co2Total: "17910",
      proKopf: "0.34",
      bevolkerung: "52573973",
      anteil: "0.05%",
    },
    {
      land: "Kirgisistan",
      co2Total: "9787",
      proKopf: "1.52",
      bevolkerung: "6456900",
      anteil: "0.03%",
    },
    {
      land: "Kiribati",
      co2Total: "66",
      proKopf: "0.56",
      bevolkerung: "117606",
      anteil: "0.00%",
    },
    {
      land: "Kolumbien",
      co2Total: "97814",
      proKopf: "1.94",
      bevolkerung: "50339443",
      anteil: "0.29%",
    },
    {
      land: "Komoren",
      co2Total: "202",
      proKopf: "0.24",
      bevolkerung: "850886",
      anteil: "0.00%",
    },
    {
      land: "Demokratische Republik Kongo",
      co2Total: "2021",
      proKopf: "0.02",
      bevolkerung: "86790567",
      anteil: "0.01%",
    },
    {
      land: "Südkorea",
      co2Total: "620302",
      proKopf: "12",
      bevolkerung: "51709098",
      anteil: "1.86%",
    },
    {
      land: "Kroatien",
      co2Total: "17488",
      proKopf: "4.3",
      bevolkerung: "4067500",
      anteil: "0.05%",
    },
    {
      land: "Kuba",
      co2Total: "28284",
      proKopf: "2.5",
      bevolkerung: "11333483",
      anteil: "0.08%",
    },
    {
      land: "Kuwait",
      co2Total: "98734",
      proKopf: "23.47",
      bevolkerung: "4207083",
      anteil: "0.30%",
    },
    {
      land: "Laos",
      co2Total: "17763",
      proKopf: "2.48",
      bevolkerung: "7169455",
      anteil: "0.05%",
    },
    {
      land: "Lesotho",
      co2Total: "2512",
      proKopf: "1.18",
      bevolkerung: "2125268",
      anteil: "0.01%",
    },
    {
      land: "Lettland",
      co2Total: "7004",
      proKopf: "3.66",
      bevolkerung: "1912789",
      anteil: "0.02%",
    },
    {
      land: "Libanon",
      co2Total: "24796",
      proKopf: "3.62",
      bevolkerung: "6855713",
      anteil: "0.07%",
    },
    {
      land: "Liberia",
      co2Total: "1386",
      proKopf: "0.28",
      bevolkerung: "4937374",
      anteil: "0.00%",
    },
    {
      land: "Libyen",
      co2Total: "50564",
      proKopf: "7.46",
      bevolkerung: "6777452",
      anteil: "0.15%",
    },
    {
      land: "Liechtenstein",
      co2Total: "51",
      proKopf: "1.35",
      bevolkerung: "38019",
      anteil: "0.00%",
    },
    {
      land: "Litauen",
      co2Total: "12963",
      proKopf: "4.65",
      bevolkerung: "2786844",
      anteil: "0.04%",
    },
    {
      land: "Luxemburg",
      co2Total: "8988",
      proKopf: "13.93",
      bevolkerung: "645397",
      anteil: "0.03%",
    },
    {
      land: "Madagaskar",
      co2Total: "3905",
      proKopf: "0.14",
      bevolkerung: "26969307",
      anteil: "0.01%",
    },
    {
      land: "Malawi",
      co2Total: "1298",
      proKopf: "0.07",
      bevolkerung: "18628747",
      anteil: "0.00%",
    },
    {
      land: "Malaysia",
      co2Total: "248289",
      proKopf: "7.65",
      bevolkerung: "32447385",
      anteil: "0.74%",
    },
    {
      land: "Malediven",
      co2Total: "1445",
      proKopf: "2.72",
      bevolkerung: "530953",
      anteil: "0.00%",
    },
    {
      land: "Mali",
      co2Total: "3179",
      proKopf: "0.16",
      bevolkerung: "19658031",
      anteil: "0.01%",
    },
    {
      land: "Malta",
      co2Total: "1342",
      proKopf: "2.67",
      bevolkerung: "502653",
      anteil: "0.00%",
    },
    {
      land: "Marokko",
      co2Total: "61276",
      proKopf: "1.66",
      bevolkerung: "36910560",
      anteil: "0.18%",
    },
    {
      land: "Marshallinseln",
      co2Total: "143",
      proKopf: "2.43",
      bevolkerung: "58791",
      anteil: "0.00%",
    },
    {
      land: "Mauretanien",
      co2Total: "2739",
      proKopf: "0.61",
      bevolkerung: "4525696",
      anteil: "0.01%",
    },
    {
      land: "Mauritius",
      co2Total: "4349",
      proKopf: "3.44",
      bevolkerung: "1265711",
      anteil: "0.01%",
    },
    {
      land: "Mexiko",
      co2Total: "486406",
      proKopf: "3.86",
      bevolkerung: "126014024",
      anteil: "1.46%",
    },
    {
      land: "Republik Moldau",
      co2Total: "5115",
      proKopf: "1.92",
      bevolkerung: "2657637",
      anteil: "0.02%",
    },
    {
      land: "Mongolei",
      co2Total: "25368",
      proKopf: "7.87",
      bevolkerung: "3225167",
      anteil: "0.08%",
    },
    {
      land: "Montenegro",
      co2Total: "2017",
      proKopf: "3.24",
      bevolkerung: "622137",
      anteil: "0.01%",
    },
    {
      land: "Mosambik",
      co2Total: "7943",
      proKopf: "0.26",
      bevolkerung: "30366036",
      anteil: "0.02%",
    },
    {
      land: "Myanmar",
      co2Total: "25280",
      proKopf: "0.47",
      bevolkerung: "54045420",
      anteil: "0.08%",
    },
    {
      land: "Namibia",
      co2Total: "4228",
      proKopf: "1.69",
      bevolkerung: "2494530",
      anteil: "0.01%",
    },
    {
      land: "Nepal",
      co2Total: "9105",
      proKopf: "0.32",
      bevolkerung: "28608710",
      anteil: "0.03%",
    },
    {
      land: "Neuseeland",
      co2Total: "34382",
      proKopf: "6.99",
      bevolkerung: "4917000",
      anteil: "0.10%",
    },
    {
      land: "Nicaragua",
      co2Total: "5592",
      proKopf: "0.85",
      bevolkerung: "6545502",
      anteil: "0.02%",
    },
    {
      land: "Niederlande",
      co2Total: "170780",
      proKopf: "9.85",
      bevolkerung: "17332850",
      anteil: "0.51%",
    },
    {
      land: "Niger",
      co2Total: "2017",
      proKopf: "0.09",
      bevolkerung: "23310715",
      anteil: "0.01%",
    },
    {
      land: "Nigeria",
      co2Total: "120369",
      proKopf: "0.6",
      bevolkerung: "200963599",
      anteil: "0.36%",
    },
    {
      land: "Norwegen",
      co2Total: "41023",
      proKopf: "7.67",
      bevolkerung: "5347896",
      anteil: "0.12%",
    },
    {
      land: "Oman",
      co2Total: "63457",
      proKopf: "12.05",
      bevolkerung: "5266535",
      anteil: "0.19%",
    },
    {
      land: "Österreich",
      co2Total: "61448",
      proKopf: "6.92",
      bevolkerung: "8877067",
      anteil: "0.18%",
    },
    {
      land: "Pakistan",
      co2Total: "201150",
      proKopf: "0.93",
      bevolkerung: "216565318",
      anteil: "0.60%",
    },
    {
      land: "Palau",
      co2Total: "224",
      proKopf: "12.27",
      bevolkerung: "18233",
      anteil: "0.00%",
    },
    {
      land: "Panama",
      co2Total: "10715",
      proKopf: "2.52",
      bevolkerung: "4246439",
      anteil: "0.03%",
    },
    {
      land: "Papua-Neuguinea",
      co2Total: "7536",
      proKopf: "0.86",
      bevolkerung: "8776109",
      anteil: "0.02%",
    },
    {
      land: "Paraguay",
      co2Total: "7407",
      proKopf: "1.05",
      bevolkerung: "7044636",
      anteil: "0.02%",
    },
    {
      land: "Peru",
      co2Total: "57414",
      proKopf: "1.77",
      bevolkerung: "32510453",
      anteil: "0.17%",
    },
    {
      land: "Philippinen",
      co2Total: "122287",
      proKopf: "1.13",
      bevolkerung: "108116615",
      anteil: "0.37%",
    },
    {
      land: "Polen",
      co2Total: "299037",
      proKopf: "7.88",
      bevolkerung: "37970874",
      anteil: "0.90%",
    },
    {
      land: "Portugal",
      co2Total: "48742",
      proKopf: "4.75",
      bevolkerung: "10269417",
      anteil: "0.15%",
    },
    {
      land: "Ruanda",
      co2Total: "1115",
      proKopf: "0.09",
      bevolkerung: "12626950",
      anteil: "0.00%",
    },
    {
      land: "Rumänien",
      co2Total: "69259",
      proKopf: "3.58",
      bevolkerung: "19356544",
      anteil: "0.21%",
    },
    {
      land: "Russland",
      co2Total: "1732027",
      proKopf: "12",
      bevolkerung: "144373535",
      anteil: "5.19%",
    },
    {
      land: "Salomonen",
      co2Total: "169",
      proKopf: "0.25",
      bevolkerung: "669823",
      anteil: "0.00%",
    },
    {
      land: "Sambia",
      co2Total: "5141",
      proKopf: "0.29",
      bevolkerung: "17861030",
      anteil: "0.02%",
    },
    {
      land: "Samoa",
      co2Total: "246",
      proKopf: "1.21",
      bevolkerung: "202506",
      anteil: "0.00%",
    },
    {
      land: "São Tomé und Príncipe",
      co2Total: "121",
      proKopf: "0.56",
      bevolkerung: "215056",
      anteil: "0.00%",
    },
    {
      land: "Saudi-Arabien",
      co2Total: "563449",
      proKopf: "16.44",
      bevolkerung: "34268528",
      anteil: "1.69%",
    },
    {
      land: "Schweden",
      co2Total: "43252",
      proKopf: "4.21",
      bevolkerung: "10285453",
      anteil: "0.13%",
    },
    {
      land: "Schweiz",
      co2Total: "34477",
      proKopf: "4.02",
      bevolkerung: "8574832",
      anteil: "0.10%",
    },
    {
      land: "Senegal",
      co2Total: "10902",
      proKopf: "0.67",
      bevolkerung: "16296364",
      anteil: "0.03%",
    },
    {
      land: "Serbien",
      co2Total: "45221",
      proKopf: "6.51",
      bevolkerung: "6944975",
      anteil: "0.14%",
    },
    {
      land: "Seychellen",
      co2Total: "605",
      proKopf: "6.2",
      bevolkerung: "97625",
      anteil: "0.00%",
    },
    {
      land: "Sierra Leone",
      co2Total: "1093",
      proKopf: "0.14",
      bevolkerung: "7813215",
      anteil: "0.00%",
    },
    {
      land: "Simbabwe",
      co2Total: "10983",
      proKopf: "0.75",
      bevolkerung: "14645468",
      anteil: "0.03%",
    },
    {
      land: "Singapur",
      co2Total: "37535",
      proKopf: "6.58",
      bevolkerung: "5703569",
      anteil: "0.11%",
    },
    {
      land: "Slowakei",
      co2Total: "32424",
      proKopf: "5.94",
      bevolkerung: "5454073",
      anteil: "0.10%",
    },
    {
      land: "Slowenien",
      co2Total: "12633",
      proKopf: "6.05",
      bevolkerung: "2087946",
      anteil: "0.04%",
    },
    {
      land: "Somalia",
      co2Total: "645",
      proKopf: "0.04",
      bevolkerung: "15442905",
      anteil: "0.00%",
    },
    {
      land: "Spanien",
      co2Total: "244002",
      proKopf: "5.18",
      bevolkerung: "47076781",
      anteil: "0.73%",
    },
    {
      land: "Sri Lanka",
      co2Total: "23362",
      proKopf: "1.07",
      bevolkerung: "21803000",
      anteil: "0.07%",
    },
    {
      land: "St. Kitts und Nevis",
      co2Total: "238",
      proKopf: "4.51",
      bevolkerung: "52823",
      anteil: "0.00%",
    },
    {
      land: "St. Lucia",
      co2Total: "414",
      proKopf: "2.27",
      bevolkerung: "182790",
      anteil: "0.00%",
    },
    {
      land: "St. Vincent und die Grenadinen",
      co2Total: "220",
      proKopf: "2.19",
      bevolkerung: "100455",
      anteil: "0.00%",
    },
    {
      land: "Südafrika",
      co2Total: "476644",
      proKopf: "8.14",
      bevolkerung: "58558270",
      anteil: "1.43%",
    },
    {
      land: "Sudan",
      co2Total: "20000",
      proKopf: "0.47",
      bevolkerung: "42813238",
      anteil: "0.06%",
    },
    {
      land: "Südsudan",
      co2Total: "1727",
      proKopf: "0.16",
      bevolkerung: "11062113",
      anteil: "0.01%",
    },
    {
      land: "Suriname",
      co2Total: "1738",
      proKopf: "2.99",
      bevolkerung: "581372",
      anteil: "0.01%",
    },
    {
      land: "Syrien",
      co2Total: "28830",
      proKopf: "1.69",
      bevolkerung: "17070135",
      anteil: "0.09%",
    },
    {
      land: "Tadschikistan",
      co2Total: "5310",
      proKopf: "0.57",
      bevolkerung: "9321018",
      anteil: "0.02%",
    },
    {
      land: "Tansania",
      co2Total: "11973",
      proKopf: "0.21",
      bevolkerung: "58005463",
      anteil: "0.04%",
    },
    {
      land: "Thailand",
      co2Total: "283763",
      proKopf: "4.08",
      bevolkerung: "69625582",
      anteil: "0.85%",
    },
    {
      land: "Osttimor",
      co2Total: "495",
      proKopf: "0.14",
      bevolkerung: "3500000",
      anteil: "0.00%",
    },
    {
      land: "Togo",
      co2Total: "3000",
      proKopf: "0.37",
      bevolkerung: "8082366",
      anteil: "0.01%",
    },
    {
      land: "Tonga",
      co2Total: "128",
      proKopf: "1.28",
      bevolkerung: "100209",
      anteil: "0.00%",
    },
    {
      land: "Trinidad und Tobago",
      co2Total: "43868",
      proKopf: "31.45",
      bevolkerung: "1394973",
      anteil: "0.13%",
    },
    {
      land: "Tschad",
      co2Total: "1016",
      proKopf: "0.06",
      bevolkerung: "15946876",
      anteil: "0.00%",
    },
    {
      land: "Tschechien",
      co2Total: "102218",
      proKopf: "9.58",
      bevolkerung: "10669709",
      anteil: "0.31%",
    },
    {
      land: "Tunesien",
      co2Total: "29937",
      proKopf: "2.56",
      bevolkerung: "11694719",
      anteil: "0.09%",
    },
    {
      land: "Türkei",
      co2Total: "372725",
      proKopf: "4.47",
      bevolkerung: "83429615",
      anteil: "1.12%",
    },
    {
      land: "Turkmenistan",
      co2Total: "70630",
      proKopf: "11.89",
      bevolkerung: "5942089",
      anteil: "0.21%",
    },
    {
      land: "Tuvalu",
      co2Total: "11",
      proKopf: "0.94",
      bevolkerung: "11646",
      anteil: "0.00%",
    },
    {
      land: "Uganda",
      co2Total: "5680",
      proKopf: "0.13",
      bevolkerung: "44269594",
      anteil: "0.02%",
    },
    {
      land: "Ukraine",
      co2Total: "202250",
      proKopf: "4.56",
      bevolkerung: "44385155",
      anteil: "0.61%",
    },
    {
      land: "Ungarn",
      co2Total: "45537",
      proKopf: "4.66",
      bevolkerung: "9769949",
      anteil: "0.14%",
    },
    {
      land: "Uruguay",
      co2Total: "6766",
      proKopf: "1.95",
      bevolkerung: "3461734",
      anteil: "0.02%",
    },
    {
      land: "Usbekistan",
      co2Total: "91811",
      proKopf: "2.73",
      bevolkerung: "33580650",
      anteil: "0.28%",
    },
    {
      land: "Vanuatu",
      co2Total: "147",
      proKopf: "0.49",
      bevolkerung: "299882",
      anteil: "0.00%",
    },
    {
      land: "Venezuela",
      co2Total: "164175",
      proKopf: "5.76",
      bevolkerung: "28515829",
      anteil: "0.49%",
    },
    {
      land: "Vereinigte Arabische Emirate",
      co2Total: "206324",
      proKopf: "21.12",
      bevolkerung: "9770529",
      anteil: "0.62%",
    },
    {
      land: "Vereinigte Staaten",
      co2Total: "5006302",
      proKopf: "15.25",
      bevolkerung: "328239523",
      anteil: "15.00%",
    },
    {
      land: "Vereinigtes Königreich",
      co2Total: "379025",
      proKopf: "5.67",
      bevolkerung: "66834405",
      anteil: "1.14%",
    },
    {
      land: "Vietnam",
      co2Total: "192668",
      proKopf: "2",
      bevolkerung: "96462106",
      anteil: "0.58%",
    },
    {
      land: "Weißrussland",
      co2Total: "58280",
      proKopf: "6.16",
      bevolkerung: "9466856",
      anteil: "0.17%",
    },
    {
      land: "Zentralafrikanische Republik",
      co2Total: "297",
      proKopf: "0.06",
      bevolkerung: "4745185",
      anteil: "0.00%",
    },
    {
      land: "Republik Zypern",
      co2Total: "6626",
      proKopf: "5.53",
      bevolkerung: "1198575",
      anteil: "0.02%",
    },
  ],
  ku = [
    { unternehmen: "Micron A ", co2Total: "14870", sektor: "IT" },
    { unternehmen: "Outback A", co2Total: "375908", sektor: "Müllentsorgung" },
    { unternehmen: "A Destiny", co2Total: "1786", sektor: "Finanzen" },
    { unternehmen: "Balance ", co2Total: "31694", sektor: "Lebensmittel" },
    { unternehmen: "Genie GmbH", co2Total: "84246", sektor: "IT" },
    { unternehmen: "Webs AG", co2Total: "1276", sektor: "Müllentsorgung" },
    { unternehmen: "Wagner GmbH", co2Total: "564", sektor: "Finanzen" },
    { unternehmen: "Priblob Media", co2Total: "0.4", sektor: "Medien" },
    { unternehmen: "Tomorrow", co2Total: "4621", sektor: "IT" },
    { unternehmen: "Yesterday", co2Total: "212354", sektor: "Müllentsorgung" },
    { unternehmen: "Aragon S.E.", co2Total: "1223", sektor: "Finanzen" },
    { unternehmen: "Microduft", co2Total: "12321", sektor: "Lebensmittel" },
    { unternehmen: "Duschen und Tragen", co2Total: "1568", sektor: "IT" },
    { unternehmen: "Poust AG", co2Total: "4987", sektor: "Müllentsorgung" },
    { unternehmen: "Cybersport", co2Total: "687", sektor: "Finanzen" },
    { unternehmen: "Notibooks ", co2Total: "1357", sektor: "Beauty" },
    { unternehmen: "Bla GmbH", co2Total: "63", sektor: "Medien" },
  ],
  $o = { country: _u, business: ku },
  xu = { class: "flex flex-col justify-between md:max-w-full md:flex-row" },
  wu = k(
    "h3",
    {
      class:
        "my-4 text-center font-serif text-2xl font-bold max-sm:my-2 max-sm:text-lg",
    },
    " Daten Auswählen ",
    -1
  ),
  yu = { class: "flex h-12 items-center justify-center space-x-2 text-lg" },
  Tu = k("label", { class: "text-center font-bold" }, "Länder", -1),
  zu = k("label", { class: "text-center font-bold" }, "Unternehmen", -1),
  Ku = k(
    "h3",
    {
      class:
        "my-4 text-center font-serif text-2xl font-bold max-sm:my-2 max-sm:text-lg",
    },
    " Suchen ",
    -1
  ),
  Eu = { class: "flex flex-col" },
  Au = k(
    "h3",
    {
      class:
        "my-4 text-center font-serif text-2xl font-bold max-sm:my-2 max-sm:text-lg",
    },
    " Sortieren ",
    -1
  ),
  Su = k("option", null, "Alphabetisch Aufsteigend", -1),
  Cu = k("option", null, "Alphabetisch Absteigend", -1),
  Ru = k("option", null, "Gesamt-Emmisionen Aufsteigend", -1),
  Mu = k("option", null, "Gesamt-Emmisionen Absteigend", -1),
  Pu = { key: 0 },
  Iu = { key: 1 },
  Bu = { key: 2 },
  Ou = { key: 3 },
  Fu = { key: 4, class: "max-lg:hidden" },
  Du = { key: 5, class: "max-lg:hidden" },
  Lu = { key: 6 },
  $u = { key: 7 },
  Hu = {
    class:
      "z-10 flex grow justify-center backdrop-blur-lg md:max-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-14rem)] md:overflow-y-scroll",
  },
  Nu = {
    key: 0,
    class:
      "text-md p-1 shadow-zinc-800 max-sm:mx-0 max-sm:text-sm md:mx-10 md:h-0 md:border-separate md:border-spacing-0.5 lg:border-spacing-x-1 lg:border-spacing-y-1",
  },
  ju = k(
    "thead",
    { class: "max-h-10 bg-emerald-900 text-sky-100" },
    [
      k("tr", { class: "[&>*]:px-2 md:[&>*]:rounded-md" }, [
        k("th", { class: "" }, "Land"),
        k("th", { class: "" }, [
          ee(" Gesamt-Emmision "),
          k("br"),
          ee(" in kt "),
        ]),
        k("th", { class: "" }, [ee("Pro Kopf "), k("br"), ee("in t")]),
        k("th", { class: "" }, [
          ee(" Globaler Anteil "),
          k("br"),
          ee(" in % "),
        ]),
        k("th", { class: "max-lg:hidden" }, "Bevölkerung"),
      ]),
    ],
    -1
  ),
  Uu = {
    class:
      "border-gray-700 text-center font-medium text-zinc-900 sm:[&>*]:px-2 md:[&>*]:rounded-sm",
  },
  Vu = { class: "max-lg:hidden" },
  Wu = {
    key: 1,
    class:
      "text-md max-sm:mx-0 max-sm:text-sm md:mx-10 md:h-0 md:border-separate md:border-spacing-0.5 lg:border-spacing-y-1",
  },
  Gu = k(
    "thead",
    { class: "max-h-10 bg-emerald-900 text-sky-100" },
    [
      k("tr", { class: "[&>*]:px-2 md:[&>*]:rounded-md" }, [
        k("th", { class: "" }, "Unternehmen"),
        k("th", { class: "" }, [
          ee(" Gesamt-Emmision "),
          k("br"),
          ee(" in t "),
        ]),
        k("th", { class: "" }, "Sektor"),
      ]),
    ],
    -1
  ),
  qu = {
    class:
      "border-gray-700 text-center font-medium text-zinc-900 sm:[&>*]:px-2 md:[&>*]:rounded-sm",
  },
  Yu = {
    __name: "DataView",
    setup(e) {
      const t = Le($o.country),
        n = Le($o.business),
        r = Le(""),
        o = navigator.language,
        s = Le("Alphabetisch Aufsteigend"),
        i = Le(!1),
        a = Le(
          !![
            "de",
            "ar",
            "dv",
            "fa",
            "ha",
            "he",
            "khw",
            "ks",
            "ku",
            "ps",
            "ur",
            "yi",
          ].includes(o.split("-")[0])
        ),
        u = he(() => (i.value == !0 ? n.value : t.value)),
        f = he(() =>
          i.value === !0
            ? p.value.filter(function (g) {
                if (
                  g.unternehmen.toLowerCase().includes(r.value.toLowerCase()) ||
                  g.sektor.toLowerCase().includes(r.value.toLowerCase())
                )
                  return !0;
              })
            : p.value.filter((g) =>
                g.land.toLowerCase().includes(r.value.toLowerCase())
              )
        ),
        p = he(() => {
          if (i.value === !0)
            switch (s.value) {
              case "Alphabetisch Aufsteigend":
                return u.value.sort((g, v) =>
                  h(g.unternehmen) > h(v.unternehmen) ? 1 : -1
                );
              case "Alphabetisch Absteigend":
                return u.value.sort((g, v) =>
                  h(g.unternehmen) < h(v.unternehmen) ? 1 : -1
                );
              case "Gesamt-Emmisionen Aufsteigend":
                return u.value.sort((g, v) => g.co2Total - v.co2Total);
              case "Gesamt-Emmisionen Absteigend":
                return u.value.sort((g, v) => v.co2Total - g.co2Total);
              case "Sektor Aufsteigend":
                return u.value.sort((g, v) =>
                  h(g.sektor) > h(v.sektor) ? 1 : -1
                );
              case "Sektor Absteigend":
                return u.value.sort((g, v) =>
                  h(g.sektor) < h(v.sektor) ? 1 : -1
                );
              default:
                return (
                  (s.value = "Alphabetisch Aufsteigend"),
                  u.value.sort((g, v) =>
                    h(g.unternehmen) > h(v.unternehmen) ? 1 : -1
                  )
                );
            }
          else
            switch (s.value) {
              case "Alphabetisch Aufsteigend":
                return u.value.sort((g, v) => (h(g.land) > h(v.land) ? 1 : -1));
              case "Alphabetisch Absteigend":
                return u.value.sort((g, v) => (h(g.land) < h(v.land) ? 1 : -1));
              case "Gesamt-Emmisionen Aufsteigend":
                return u.value.sort((g, v) => g.co2Total - v.co2Total);
              case "Gesamt-Emmisionen Absteigend":
                return u.value.sort((g, v) => v.co2Total - g.co2Total);
              case "pro-Kopf-Emmisionen Aufsteigend":
                return u.value.sort((g, v) => g.proKopf - v.proKopf);
              case "pro-Kopf-Emmisionen Absteigend":
                return u.value.sort((g, v) => v.proKopf - g.proKopf);
              case "globaler Anteil Aufsteigend":
                return u.value.sort(
                  (g, v) => parseFloat(g.anteil) - parseFloat(v.anteil)
                );
              case "globaler Anteil Absteigend":
                return u.value.sort(
                  (g, v) => parseFloat(v.anteil) - parseFloat(g.anteil)
                );
              case "Bevölkerung Aufsteigend":
                return u.value.sort((g, v) => g.bevolkerung - v.bevolkerung);
              case "Bevölkerung Absteigend":
                return u.value.sort((g, v) => v.bevolkerung - g.bevolkerung);
              default:
                return (
                  (s.value = "Alphabetisch Aufsteigend"),
                  u.value.sort((g, v) => (h(g.land) > h(v.land) ? 1 : -1))
                );
            }
        });
      function h(g) {
        return (
          (g = g.toLowerCase()),
          (g = g.replace(/ä/g, "ae")),
          (g = g.replace(/ö/g, "oe")),
          (g = g.replace(/ü/g, "ue")),
          (g = g.replace(/ß/g, "ss")),
          g
        );
      }
      return (g, v) => (
        Y(),
        J("div", null, [
          k("main", xu, [
            k(
              "menu",
              {
                class: _t([
                  "relative z-0 m-2 flex min-w-[20rem] flex-col overflow-hidden rounded-2xl bg-sky-800/20 p-4 shadow-sm shadow-zinc-300 backdrop-blur-2xl before:absolute before:top-16 before:-z-10 before:flex before:h-60 before:w-56 before:animate-spin-slow before:self-center before:rounded-full before:bg-green-500 before:bg-gradient-to-br before:from-sky-400 before:opacity-30 before:blur-lg md:before:top-[40vh] lg:max-w-[20rem]",
                  { "md:order-last": a.value },
                ]),
              },
              [
                wu,
                k("div", yu, [
                  Tu,
                  Wn(
                    k(
                      "input",
                      {
                        "onUpdate:modelValue":
                          v[0] || (v[0] = (y) => (i.value = y)),
                        type: "checkbox",
                        class: "toggle toggle-md bg-green-600",
                      },
                      null,
                      512
                    ),
                    [[za, i.value]]
                  ),
                  zu,
                ]),
                Ku,
                Wn(
                  k(
                    "input",
                    {
                      type: "search",
                      "onUpdate:modelValue":
                        v[1] || (v[1] = (y) => (r.value = y)),
                      placeholder: "Suchen",
                      class:
                        "m-2 h-10 rounded-lg p-2 text-sm outline-none ring-2 ring-green-600 transition-all duration-500 focus:bg-green-100",
                    },
                    null,
                    512
                  ),
                  [[Ta, r.value]]
                ),
                k("div", Eu, [
                  Au,
                  Wn(
                    k(
                      "select",
                      {
                        "onUpdate:modelValue":
                          v[2] || (v[2] = (y) => (s.value = y)),
                        class:
                          "select m-2 text-sm outline-none transition-all duration-500 focus:border focus:border-green-700 focus:bg-green-100",
                      },
                      [
                        Su,
                        Cu,
                        Ru,
                        Mu,
                        i.value
                          ? Fe("", !0)
                          : (Y(),
                            J("option", Pu, "pro-Kopf-Emmisionen Aufsteigend")),
                        i.value
                          ? Fe("", !0)
                          : (Y(),
                            J("option", Iu, "pro-Kopf-Emmisionen Absteigend")),
                        ee(' v-if="!isBusiness" '),
                        i.value
                          ? Fe("", !0)
                          : (Y(),
                            J("option", Bu, "globaler Anteil Aufsteigend")),
                        i.value
                          ? Fe("", !0)
                          : (Y(),
                            J("option", Ou, "globaler Anteil Absteigend")),
                        i.value
                          ? Fe("", !0)
                          : (Y(), J("option", Fu, " Bevölkerung Aufsteigend ")),
                        i.value
                          ? Fe("", !0)
                          : (Y(), J("option", Du, " Bevölkerung Absteigend ")),
                        i.value
                          ? (Y(), J("option", Lu, "Sektor Aufsteigend"))
                          : Fe("", !0),
                        i.value
                          ? (Y(), J("option", $u, "Sektor Absteigend"))
                          : Fe("", !0),
                      ],
                      512
                    ),
                    [[Ka, s.value]]
                  ),
                ]),
              ],
              2
            ),
            k("div", Hu, [
              i.value
                ? Fe("", !0)
                : (Y(),
                  J("table", Nu, [
                    ju,
                    (Y(!0),
                    J(
                      be,
                      null,
                      ir(
                        ke(f),
                        (y) => (
                          Y(),
                          J(
                            "tbody",
                            {
                              key: y.land,
                              class: "odd:bg-sky-200 even:bg-green-200",
                            },
                            [
                              k("tr", Uu, [
                                k("td", null, Re(y.land), 1),
                                k(
                                  "td",
                                  null,
                                  Re(parseInt(y.co2Total).toLocaleString()),
                                  1
                                ),
                                k(
                                  "td",
                                  null,
                                  Re(parseFloat(y.proKopf).toLocaleString()),
                                  1
                                ),
                                k(
                                  "td",
                                  null,
                                  Re(parseFloat(y.anteil).toLocaleString()),
                                  1
                                ),
                                k(
                                  "td",
                                  Vu,
                                  Re(parseInt(y.bevolkerung).toLocaleString()),
                                  1
                                ),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ])),
              i.value
                ? (Y(),
                  J("table", Wu, [
                    Gu,
                    (Y(!0),
                    J(
                      be,
                      null,
                      ir(
                        ke(f),
                        (y) => (
                          Y(),
                          J(
                            "tbody",
                            {
                              key: y.unternehmen,
                              class: "odd:bg-sky-200 even:bg-green-200",
                            },
                            [
                              k("tr", qu, [
                                k("td", null, Re(y.unternehmen), 1),
                                k(
                                  "td",
                                  null,
                                  Re(parseInt(y.co2Total).toLocaleString()),
                                  1
                                ),
                                k("td", null, Re(y.sektor), 1),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : Fe("", !0),
            ]),
          ]),
        ])
      );
    },
  };
const Zu = Or(
    '<header class="relative mx-auto my-4 flex max-w-6xl items-center justify-start overflow-hidden text-6xl font-bold"><h1 class="ml-4 max-w-sm bg-gradient-to-br from-green-600 to-sky-300 bg-clip-text p-8 text-transparent md:mx-auto"><span class="text-zinc-700">Co2</span> geht uns alle etwas an! </h1><div class="absolute left-1/2 -z-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 20 20" stroke-width="0.6" stroke="currentColor" class="h-64 w-64 stroke-sky-600 opacity-40"><path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"></path></svg></div></header>',
    1
  ),
  Ju = k(
    "main",
    { class: "mx-auto mt-10 max-w-4xl px-2" },
    [
      k("div", null, [
        k("div", { class: "flex items-center" }, [
          k(
            "p",
            {
              class:
                "py-4 text-lg font-semibold text-zinc-800 md:leading-loose",
            },
            [
              ee(
                " KlimaVision ist eine Non-Profit-Organisation, die sich für den Klimaschutz und die "
              ),
              k("u", { class: "" }, "Reduzierung von CO2-Emissionen"),
              ee(
                " einsetzt. Wir betreiben eine Informationsplattform, auf der Sie die CO2-Emissionen aller Länder und großer Unternehmen einsehen können. "
              ),
            ]
          ),
          k(
            "svg",
            {
              fill: "#000000",
              height: "200px",
              width: "800px",
              version: "1.1",
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              viewBox: "0 0 442.525 442.525",
              class: "fill-green-600 stroke-green-600",
            },
            [
              k("g", null, [
                k("path", {
                  d: `M385.057,205.853c2.419-8.397,3.177-17.067,3.177-25.587c0-57.761-46.991-104.752-104.751-104.752\r
		c-22.791,0-44.459,7.196-62.66,20.812c-17.59,13.156-30.855,31.899-37.354,52.781c-0.215,0.691-0.955,2.281-3.948,1.784\r
		c-0.264-0.044-0.542-0.037-0.824-0.056c-0.984-0.063-2.051-0.117-3.153-0.117c-34.256,0-64.816,22.152-76.529,55.286\r
		c-0.174,0.493-0.708,1.654-2.122,1.38c-0.144-0.028-0.287-0.059-0.431-0.087c-5.191-1.041-10.514-1.567-15.822-1.567\r
		C36.174,205.73,0,241.905,0,286.371c0,44.465,36.174,80.64,80.638,80.64h281.247c44.466,0,80.641-36.175,80.641-80.64\r
		c0-34.865-22.822-66.047-55.811-76.721C385.902,209.388,384.2,208.826,385.057,205.853z M361.885,352.011H80.638\r
		c-36.192,0-65.638-29.445-65.638-65.64c0-36.194,29.445-65.641,65.638-65.641c4.441,0,8.892,0.453,13.227,1.346\r
		c1.416,0.292,2.839,0.439,4.227,0.439c7.023,0,12.497-3.844,14.643-10.282c9.27-27.822,34.51-46.515,62.808-46.515\r
		c0.912,0,1.909,0.067,2.965,0.139c1.149,0.078,2.339,0.158,3.614,0.17l0.265,0.001c8.692,0,13.84-4.001,15.298-11.892\r
		c0.041-0.224,0.074-0.439,0.107-0.575c11.738-37.711,46.175-63.047,85.691-63.047c49.489,0,89.751,40.263,89.751,89.752\r
		c0,8.493-1.244,17.086-3.697,25.539c-1.194,4.117-0.924,7.778,0.805,10.883c2.57,4.615,7.192,5.905,9.414,6.525l0.352,0.099\r
		c27.92,8.05,47.419,33.98,47.419,63.059C427.525,322.565,398.079,352.011,361.885,352.011z`,
                }),
                k("path", {
                  d: `M189.365,225.192c-4.302-1.388-9.292-2.151-14.052-2.151c-22.581,0-38.352,15.598-38.352,37.931\r
		c0,21.853,14.345,36.534,35.695,36.534c8.507,0,14.687-1.841,17.614-2.94c1-0.375,3.655-1.373,3.279-5.5l-1.022-4.578\r
		c-0.455-2.111-1.855-3.371-3.741-3.371c-0.823,0-1.565,0.248-2.051,0.435c-2.427,0.93-6.295,2.167-11.843,2.167\r
		c-12.853,0-21.488-9.366-21.488-23.307c0-14.327,8.6-23.585,21.908-23.585c4.205,0,7.904,0.626,10.993,1.861l0.16,0.065\r
		c0.488,0.203,1.225,0.509,2.092,0.509c1.023,0,2.87-0.439,3.733-3.372l1.381-4.692l0.052-0.224\r
		C194.161,228.457,192.449,226.187,189.365,225.192z`,
                }),
                k("path", {
                  d: `M238.29,222.762c-20.933,0-35.555,15.598-35.555,37.932c0,21.675,14.161,36.813,34.437,36.813\r
		c17.191,0,35.694-11.87,35.694-37.932C272.866,237.899,258.648,222.762,238.29,222.762z M237.732,284.278\r
		c-10.75,0-18.553-10.096-18.553-24.005c0-12.088,5.823-24.285,18.832-24.285c14.453,0,18.273,15.703,18.273,24.006\r
		C256.283,274.065,248.482,284.278,237.732,284.278z`,
                }),
                k("path", {
                  d: `M326.691,285.473h-14.803c-2.625,0-1.327-1.278-0.681-1.91c11.59-11.327,20.177-21.27,20.177-33.531\r
		c0-10.557-6.855-21.209-22.172-21.209c-5.997,0-11.775,1.688-16.709,4.881c-3.072,1.989-4.229,4.903-2.968,7.449l1.238,2.742\r
		l0.089,0.18c0.736,1.378,2.09,2.2,3.621,2.2c1.603,0,2.933-0.864,3.831-1.448c3.032-1.972,6.115-2.971,9.164-2.971\r
		c6.344,0,9.428,3.021,9.428,9.206c-0.082,8.083-6.65,15.635-22.326,30.559c-0.74,0.636-5.064,4.381-6.992,6.824\r
		c-0.996,1.263-0.972,2.874-0.951,4.295l0.006,0.568c0,3.413,2.917,5.198,5.799,5.198h34.188c0.218,0.023,0.534,0.048,0.906,0.048\r
		c3.723,0,5.39-2.38,5.39-4.739v-3C332.927,287.345,329.804,285.501,326.691,285.473z`,
                }),
              ]),
            ]
          ),
        ]),
        k(
          "p",
          {
            class: "py-4 text-lg font-semibold text-zinc-800 md:leading-loose",
          },
          [
            ee(
              " Unsere Datenbank ist sehr benutzerfreundlich und bietet umfangreiche Filter- und Sortiermöglichkeiten, um Ihnen einen einfachen und schnellen Zugang zu relevanten Informationen zu ermöglichen. Wir glauben, dass "
            ),
            k(
              "u",
              null,
              "Transparenz ein wichtiger Faktor bei der Bekämpfung des Klimawandels ist."
            ),
            ee(
              " Daher sind wir bestrebt, so viele Daten wie möglich zur Verfügung zu stellen und einfach zugänglich zu machen. "
            ),
          ]
        ),
        k(
          "p",
          {
            class: "py-4 text-lg font-semibold text-zinc-800 md:leading-loose",
          },
          [
            ee(
              " Unser Ziel ist es, Verbraucher, Unternehmen und Regierungen dazu zu ermutigen, ihren Beitrag zur Reduzierung von CO2-Emissionen zu leisten. Wir arbeiten eng mit Experten und Forschern aus verschiedenen Bereichen zusammen, um sicherzustellen, dass die Informationen auf unserer Plattform stets aktuell und zuverlässig sind. Darüber hinaus fördern wir aktiv die Verwendung erneuerbarer Energien und den Einsatz von Technologien, die zu einer Reduzierung der CO2-Emissionen beitragen. "
            ),
            k(
              "u",
              null,
              " Wir möchten, dass Sie Teil unserer Mission werden und uns dabei helfen, eine bessere Zukunft für unseren Planeten zu schaffen."
            ),
            ee(
              " Wir laden Sie ein, sich unsere Plattform anzusehen und uns bei unseren Bemühungen zu unterstützen. Zusammen können wir eine positive Veränderung bewirken. "
            ),
          ]
        ),
      ]),
    ],
    -1
  ),
  Qu = {
    __name: "AboutView",
    setup(e) {
      return (t, n) => (Y(), J(be, null, [Zu, Ju, U(Hr)], 64));
    },
  },
  Xu = { class: "max- mx-auto flex max-w-6xl flex-col justify-center" },
  ef = k(
    "h1",
    { class: "my-8 text-center text-3xl font-bold text-green-600" },
    " Der KlimaVision Blog ",
    -1
  ),
  tf = { class: "my-10 mx-4 grid grid-cols-1 gap-4 md:grid-cols-3" },
  nf = { class: "" },
  rf = {
    __name: "BlogView",
    setup(e) {
      const t = Le($r.data);
      return (n, r) => (
        Y(),
        J("div", Xu, [
          ef,
          k("div", tf, [
            (Y(!0),
            J(
              be,
              null,
              ir(
                t.value,
                (o) => (
                  Y(),
                  J("div", nf, [
                    U(
                      xn,
                      {
                        "blog-headline": o.titel,
                        "blog-text": o.text,
                        "blog-pic": o.picUrl,
                        "blog-id": o.id,
                        class: "",
                      },
                      null,
                      8,
                      ["blog-headline", "blog-text", "blog-pic", "blog-id"]
                    ),
                  ])
                )
              ),
              256
            )),
          ]),
        ])
      );
    },
  };
const of = {},
  sf = { class: "my-16 flex min-h-screen" },
  lf = Or(
    '<div class="mx-auto flex flex-col space-y-16"><h1 class="text-3xl font-bold text-green-600">Impressum</h1><p> Anbieter:<br>Max Mustermann<br>Musterstraße 1<br>80999 München </p><p> Kontakt:<br>Telefon: 089/1234567-8<br>Telefax: 089/1234567-9<br>E-Mail: mail@mustermann.de<br>Website: www.mustermann.de </p><p>Bei redaktionellen Inhalten:</p><p> Verantwortlich nach § 55 Abs.2 RStV<br>Moritz Schreiberling<br>Musterstraße 2<br>80999 München </p></div>',
    1
  ),
  af = [lf];
function cf(e, t) {
  return Y(), J("div", sf, af);
}
const uf = Nn(of, [["render", cf]]);
const ff = {},
  df = { class: "my-16 flex min-h-screen" },
  hf = k(
    "div",
    { class: "mx-auto flex max-w-3xl flex-col space-y-16" },
    [
      k(
        "h1",
        { class: "text-3xl font-bold text-green-600" },
        "Datenschutzerklärung"
      ),
      k(
        "p",
        null,
        " Datenschutzerklärung Verantwortlich im Sinne der Datenschutzgesetzes: Datenschutz Als Webseitenbetreiber nehmen wir den Schutz aller persönlichen Daten sehr ernst. Alle personenbezogenen Informationen werden vertraulich und gemäß den gesetzlichen Vorschriften behandelt, wie in dieser Datenschutzerklärung erläutert. Unserer Webseite kann selbstverständlich genutzt werden, ohne dass Sie persönliche Daten angeben. Wenn jedoch zu irgendeinem Zeitpunkt persönliche Daten wie z.B. Name, Adresse oder E-Mail abgefragt werden, wird dies auf freiwilliger Basis geschehen. Niemals werden von uns erhobene Daten ohne Ihre spezielle Genehmigung an Dritte weitergegeben. Datenübertragung im Internet, wie zum Beispiel über E-Mail, kann immer Sicherheitslücken aufweisen. Der komplette Schutz der Daten ist im Internet nicht möglich. "
      ),
      k(
        "p",
        null,
        " Auskunft, Löschung, Sperrung Zu jedem Zeitpunkt können Sie sich über die personenbezogenen Daten, deren Herkunft und Empfänger und den Nutzen der Datenverarbeitung informieren und unentgeltlich eine Korrektur, Sperrung oder Löschung dieser Daten verlangen. Bitte nutzen Sie dafür die im Impressum angegebenen Kontaktwege. Für weitere Fragen zum Thema stehen wir Ihnen ebenfalls jederzeit zur Verfügung. Server-Log-Files Der Seiten-Provider erhebt und speichert automatisch Daten in Server-Log Files, die von Ihrem Browser an uns übermittelt werden. Diese Daten enthalten: – Browsertyp/ Browserversion – Betriebssystem des Rechners – Referrer URL – Hostname des zugreifenden Rechners – Uhrzeit der Serveranfrage Diese Daten sind nicht personenbezogen. Es erfolgt keine Zusammenführung dieser Daten mit anderen Datenquellen. Wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden behalten wir uns das Recht vor, diese Daten nachträglich zu überprüfen. Cookies Viele Internetseiten verwenden Cookies. Cookies sind unschädlich für Ihren Rechner und virenfrei. Sie dienen dazu, Internet-Angebote für die Besucher einer Webseite freundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Computer abgelegt werden und die Ihr Browser verwendet. Wir verwenden in der Regel so genannte „Session-Cookies“. Diese werden nach Verlassen unserer Seite automatisch gelöscht. Andere Cookies bleiben auf Ihrem Computer gespeichert, bis Sie diese löschen. Diese Cookies helfen dabei, Ihren Rechner beim nächsten Besuch wiederzuerkennen. Über die Browsereinstellungen können sie festlegen, dass Sie über neue Cookies informiert werden und Cookies jeweils annehmen müssen. Ebenso können Sie die Annahme von Cookies für bestimmte Fälle oder generell ausschließen oder das automatische Löschen der Cookies beim Schließen des Browser aktivieren. "
      ),
      k(
        "p",
        null,
        " >Werden Cookies deaktiviert, kann die Funktionalität unserer Website eingeschränkt sein. Änderung der Datenschutzbestimmungen Unsere Datenschutzerklärung können in unregelmäßigen Abständen angepasst werden, damit sie den aktuellen rechtlichen Anforderungen entsprechen oder um Änderungen unserer Dienstleistungen umzusetzen, z. B. bei der Einfügung neuer Angebote. Für Ihren nächsten Besuch gilt dann automatisch die neue Datenschutzerklärung. Kontakt zum Datenschutzmitarbeiter Für Fragen zum Datenschutz schicken Sie uns bitte eine Nachricht an mit dem Betreff „Datenschutz“. "
      ),
    ],
    -1
  ),
  pf = [hf];
function gf(e, t) {
  return Y(), J("div", df, pf);
}
const mf = Nn(ff, [["render", gf]]),
  bf = { class: "float mx-auto max-w-6xl justify-center" },
  vf = ["src"],
  _f = { class: "py-10 px-2 font-serif text-6xl font-bold text-green-600" },
  kf = { class: "mb-10 p-6 text-lg leading-8 text-zinc-900" },
  xf = {
    __name: "Blogpage",
    setup(e) {
      const t = Le($r.data);
      ei();
      const n = ti(),
        r = parseInt(n.params.id),
        o = he(() =>
          t.value[r] ? t.value[r].titel : "Dieser Blog existiert leider nicht"
        ),
        s = he(() => (t.value[r] ? t.value[r].text : "blaa")),
        i = he(() => (t.value[r] ? t.value[r].picUrl : !1));
      return (l, a) => (
        Y(),
        J(
          be,
          null,
          [
            k("div", bf, [
              ke(i)
                ? (Y(),
                  J("img", { key: 0, src: ke(i), class: "p-10" }, null, 8, vf))
                : Fe("", !0),
              k("h1", _f, Re(ke(o)), 1),
              k("p", kf, Re(ke(s)), 1),
            ]),
            U(Hr),
          ],
          64
        )
      );
    },
  },
  wf = Cc({
    history: qa("/FS_KlimaVision/"),
    routes: [
      { path: "/", name: "home", component: vu },
      { path: "/co2-data", name: "co2-data", component: Yu },
      { path: "/about", name: "about", component: Qu },
      { path: "/blog", name: "blog", component: rf },
      { path: "/impressum", name: "impressum", component: uf },
      { path: "/datenschutz", name: "datenschutz", component: mf },
      { path: "/blog/:id", name: "Blogpage", component: xf },
    ],
    scrollBehavior(e, t, n) {
      return n || { top: 0 };
    },
  });
const ni = Sa(Zc);
ni.use(wf);
ni.mount("#app");
