import ve, { createContext as be, useEffect as ce, useContext as Ee, useState as ae, useRef as se, useCallback as fe } from "react";
import { Howl as le } from "howler";
import { Trophy as ye, AudioWaveform as ke, AudioLines as Re, Waves as Te, Volume2 as ge } from "lucide-react";
var V = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function _e() {
  if (de) return M;
  de = 1;
  var i = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function a(p, s, u) {
    var v = null;
    if (u !== void 0 && (v = "" + u), s.key !== void 0 && (v = "" + s.key), "key" in s) {
      u = {};
      for (var k in s)
        k !== "key" && (u[k] = s[k]);
    } else u = s;
    return s = u.ref, {
      $$typeof: i,
      type: p,
      key: v,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return M.Fragment = d, M.jsx = a, M.jsxs = a, M;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function xe() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === N ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case Q:
          return "Profiler";
        case z:
          return "StrictMode";
        case ee:
          return "Suspense";
        case re:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case B:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function a(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), d(e);
      }
    }
    function p(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === B)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function v(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, r) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function G() {
      var e = i(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, t, o, f, c, C, b) {
      return t = c.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: c,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: G
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, o, f, c, C, b) {
      var n = r.children;
      if (n !== void 0)
        if (o)
          if (H(n)) {
            for (o = 0; o < n.length; o++)
              A(n[o]);
            Object.freeze && Object.freeze(n);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(n);
      if (L.call(r, "key")) {
        n = i(e);
        var E = Object.keys(r).filter(function(oe) {
          return oe !== "key";
        });
        o = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", q[n + o] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          n,
          E,
          n
        ), q[n + o] = !0);
      }
      if (n = null, t !== void 0 && (a(t), n = "" + t), v(r) && (a(r.key), n = "" + r.key), "key" in r) {
        t = {};
        for (var _ in r)
          _ !== "key" && (t[_] = r[_]);
      } else t = r;
      return n && k(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        n,
        c,
        f,
        s(),
        t,
        C,
        b
      );
    }
    function A(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var m = ve, P = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), X = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), g = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, H = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, D = {}, S = m["react-stack-bottom-frame"].bind(
      m,
      u
    )(), J = w(p(u)), q = {};
    W.Fragment = O, W.jsx = function(e, r, t, o, f) {
      var c = 1e4 > g.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        o,
        f,
        c ? Error("react-stack-top-frame") : S,
        c ? w(p(e)) : J
      );
    }, W.jsxs = function(e, r, t, o, f) {
      var c = 1e4 > g.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        o,
        f,
        c ? Error("react-stack-top-frame") : S,
        c ? w(p(e)) : J
      );
    };
  }()), W;
}
var me;
function Se() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? V.exports = _e() : V.exports = xe()), V.exports;
}
var h = Se();
const Ce = (i, d) => {
  const a = {
    className: d ? "sound-indicator" : "",
    size: i.size ?? 20,
    strokeWidth: i.strokeWidth ?? 2.5
  };
  switch (i.name) {
    case "speaker":
      return /* @__PURE__ */ h.jsx(ge, { ...a });
    case "waves":
      return /* @__PURE__ */ h.jsx(Te, { ...a });
    case "audioLines":
      return /* @__PURE__ */ h.jsx(Re, { ...a });
    case "audioWaves":
      return /* @__PURE__ */ h.jsx(ke, { ...a });
    case "trophy":
      return /* @__PURE__ */ h.jsx(ye, { ...a });
    default:
      return null;
  }
}, we = be({});
function Oe({ children: i, ...d }) {
  return ce(() => {
    const a = () => {
      const p = new Audio();
      p.muted = !0, p.play().catch(() => {
      }), window.removeEventListener("click", a);
    };
    return window.addEventListener("click", a), () => window.removeEventListener("click", a);
  }, []), /* @__PURE__ */ h.jsx(we.Provider, { value: d, children: i });
}
const ie = /* @__PURE__ */ new Map();
function $e(i) {
  var ue;
  const d = Ee(we), {
    children: a,
    providedFX: p = "boop",
    customFX: s = null,
    noClickSound: u = !1,
    loading: v = null,
    wrap: k = null,
    fetchCooldown: G = 1e4,
    clickCooldown: R = 0,
    hoverFX: T = null,
    enableHaptics: A = !0,
    keyboardKey: m = null,
    icon: P = null,
    showTooltip: Z = !1,
    tooltipText: O = "Now playing…",
    tooltipPosition: z = "top",
    tooltipAnimation: Q = "fade",
    theme: U = "auto",
    customTheme: X = null,
    animationSpeed: K = "1s",
    layout: ee = "inline-flex",
    className: re = "",
    style: te = {},
    apiBaseUrl: B
  } = { ...d, ...i }, [$, N] = ae(null), [g, L] = ae(!0), [H, w] = ae(!1), Y = se(0), D = se(0), S = se(null), J = typeof window < "u" && ((ue = window.matchMedia) == null ? void 0 : ue.call(window, "(prefers-color-scheme: dark)").matches), q = U === "auto" ? J ? "dark" : "light" : U, e = {
    light: { tooltipBg: "#333", tooltipColor: "#fff", pulseColor: "#888" },
    dark: { tooltipBg: "#000", tooltipColor: "#fff", pulseColor: "#fff" },
    neon: { tooltipBg: "#0ff", tooltipColor: "#000", pulseColor: "#0ff" },
    pastel: { tooltipBg: "#ffeef1", tooltipColor: "#222", pulseColor: "#ffaacc" },
    mono: { tooltipBg: "#666", tooltipColor: "#eee", pulseColor: "#aaa" }
  }, r = e[q] ?? e.light, t = X ? { ...r, ...X } : r, o = {
    top: "translateX(-50%)",
    bottom: "translateX(-50%)",
    left: "translateY(-50%)",
    right: "translateY(-50%)"
  }, f = {
    top: "top: -1.5rem; left: 50%;",
    bottom: "bottom: -1.5rem; left: 50%;",
    left: "left: -1.5rem; top: 50%;",
    right: "right: -1.5rem; top: 50%;"
  }, c = {
    fade: "opacity 0.3s ease-in-out",
    scale: "transform 0.3s ease-in-out",
    slide: "top 0.3s ease-in-out"
  }, C = k ?? `
    .wrap,
    .wrap:before,
    .wrap:after {
      margin: 0;
      padding: 0;
    }
    .wrap {
      position: relative;
      display: ${ee};
      align-items: center;
      gap: 0.5rem;
      border: none;
      font-family: inherit;
      cursor: pointer;
      color: inherit;
      background: transparent;
    }
    .wrap.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    .sound-indicator {
      animation: pulse ${K} ease-in-out infinite;
      color: ${t.pulseColor};
    }
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.6; }
      100% { transform: scale(1); opacity: 1; }
    }
    .tooltip {
      position: absolute;
      ${f[z] || f.top}
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: inherit;
      opacity: 0.9;
      white-space: nowrap;
      color: ${t.tooltipColor};
      background: ${t.tooltipBg};
      transform: ${o[z] || "translateX(-50%)"};
      transition: ${c[Q] || c.fade};
    }
  `, b = p || "boop", n = fe((l) => {
    if (!l) return;
    const j = Date.now();
    new le({
      src: [`${l}?t=${j}`],
      autoplay: !0,
      onloaderror: (x, F) => console.error("Howler load error:", F),
      onplay: () => w(!0),
      onend: () => w(!1)
    }).play(), A && window.navigator.vibrate && window.navigator.vibrate(50), R > 0 && (L(!1), setTimeout(() => L(!0), R));
  }, [R, A]), E = async () => {
    const l = Date.now();
    if (s) {
      ie.set("custom", s), N(s);
      return;
    }
    const j = ie.get(b);
    if (j && l - Y.current < G) {
      N(j);
      return;
    }
    try {
      const y = B ?? (typeof window < "u" && window.location.hostname === "localhost" ? "" : "https://soundzjs.vercel.app"), x = await fetch(`${y}/api/sounds?sound=${b}`), F = x.headers.get("content-type");
      if (!x.ok)
        throw new Error(`Fetch failed: ${x.status} ${x.statusText}`);
      if (!(F != null && F.includes("application/json"))) {
        const he = await x.text();
        throw new Error(`Expected JSON, got: ${he.slice(0, 100)}...`);
      }
      const I = await x.json();
      I != null && I.url && (ie.set(b, I.url), N(I.url), Y.current = l);
    } catch (y) {
      console.error("Sound fetch failed:", y);
    }
  };
  ce(() => {
    E();
    const l = document.createElement("style");
    return l.innerHTML = C, document.head.appendChild(l), S.current = l, () => {
      S.current && document.head.removeChild(S.current);
    };
  }, [s, b, C]);
  const _ = () => {
    if (!u) {
      const l = Date.now();
      if (!$ || R > 0 && l - D.current < R) return;
      D.current = l, n($);
    }
  }, oe = () => {
    const l = typeof window < "u" && window.location.hostname === "localhost" ? "http://localhost:3000" : "https://soundzjs.vercel.app";
    T && (T.includes("/") ? new le({
      src: [`${T}?t=${Date.now()}`],
      autoplay: !0,
      onloaderror: (j, y) => console.error("Howler load error:", y),
      onplay: () => w(!0),
      onend: () => w(!1)
    }).play() : new le({
      src: [`${l}/sounds/${T}.mp3?t=${Date.now()}`],
      autoplay: !0,
      onloaderror: (j, y) => console.error("Howler load error:", y),
      onplay: () => w(!0),
      onend: () => w(!1)
    }).play());
  }, ne = fe((l) => {
    m && l.key.toLowerCase() === m.toLowerCase() && g && _();
  }, [m, g, _]);
  return ce(() => {
    if (m)
      return window.addEventListener("keydown", ne), () => window.removeEventListener("keydown", ne);
  }, [m, ne]), $ ? /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `wrap ${g ? "" : "disabled"} ${re}`,
      onClick: _,
      onMouseEnter: oe,
      style: te,
      tabIndex: 0,
      children: [
        H && Z && /* @__PURE__ */ h.jsx("div", { className: "tooltip", children: O }),
        P && Ce(P, H),
        a
      ]
    }
  ) : v ? v() : /* @__PURE__ */ h.jsx("p", { children: "Loading sound…" });
}
export {
  $e as Soundz,
  Oe as SoundzProvider
};
