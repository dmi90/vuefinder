import { ref as L, watch as Re, inject as N, openBlock as w, createElementBlock as D, createElementVNode as f, unref as x, normalizeClass as ct, createTextVNode as et, toDisplayString as E, createCommentVNode as X, withDirectives as vt, vShow as me, createVNode as Ct, TransitionGroup as Oo, withCtx as F, Fragment as lt, renderList as wt, reactive as Le, onMounted as Mt, onUpdated as Po, withModifiers as Wt, nextTick as Ve, isRef as as, vModelSelect as jr, createStaticVNode as No, customRef as jo, withKeys as oe, vModelText as ne, normalizeStyle as ls, provide as jt, computed as Ro, createBlock as q, resolveDynamicComponent as Vo, renderSlot as Je } from "vue";
import de from "plupload";
var is;
const Oe = (is = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : is.getAttribute("content"), Pe = (r, { method: t = "get", params: s = {}, json: o = !0, signal: l = null }) => {
  const i = { method: t };
  if (i.signal = l, t == "get")
    r += "?" + new URLSearchParams(s);
  else {
    i.headers = {}, Oe && (i.headers["X-CSRF-Token"] = Oe);
    let d = new FormData();
    for (const [g, a] of Object.entries(s))
      d.append(g, a);
    i.body = d;
  }
  return fetch(r, i).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Bo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var o = r.get(t);
    o ? o.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var o = r.get(t);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var o = r.get(t);
    o && o.slice().map(function(l) {
      l(s);
    }), (o = r.get("*")) && o.slice().map(function(l) {
      l(t, s);
    });
  } };
}
function Qe(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(t));
  Re(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function l(g, a) {
    s.value = Object.assign({ ...s.value }, { [g]: a });
  }
  function i() {
    s.value = null;
  }
  return { getStore: (g, a = null) => s.value === null || s.value === "" ? a : s.value.hasOwnProperty(g) ? s.value[g] : a, setStore: l, clearStore: i };
}
const Rr = L("");
function At() {
  function r(t) {
    Rr.value = t;
  }
  return { apiUrl: Rr, setApiUrl: r };
}
const zo = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Ho = {
  key: 0,
  class: "flex text-center"
}, Uo = ["aria-label"], Ko = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Yo = [
  Ko
], Wo = ["aria-label"], Xo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Zo = [
  Xo
], Fo = ["aria-label"], qo = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Go = [
  qo
], Jo = ["aria-label"], Qo = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), tn = [
  Qo
], en = ["aria-label"], rn = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), sn = [
  rn
], on = ["aria-label"], nn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), an = [
  nn
], ln = ["aria-label"], cn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), un = [
  cn
], dn = {
  key: 1,
  class: "flex text-center"
}, hn = { class: "pl-2" }, fn = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, pn = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, gn = /* @__PURE__ */ f("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), mn = /* @__PURE__ */ f("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), vn = [
  gn,
  mn
], bn = { class: "flex text-center items-center justify-end" }, yn = ["aria-label"], Sn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), wn = [
  Sn
], _n = ["aria-label"], xn = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, kn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, Dn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, Cn = ["aria-label"], Mn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, En = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, $n = {
  name: "VFToolbar"
}, Tn = /* @__PURE__ */ Object.assign($n, {
  props: {
    data: Object
  },
  setup(r) {
    const t = N("emitter"), s = N("usePropDarkMode"), { getStore: o, setStore: l } = N("storage"), { t: i } = N("i18n"), d = L(o("viewport", "grid")), g = L([]), a = L(o("full-screen", !1)), v = L("");
    t.on("vf-search-query", ({ newQuery: I }) => {
      v.value = I;
    });
    const p = N("loadingState"), b = () => p.value, S = () => {
      a.value = !a.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (I) => {
      g.value = I;
    }), t.on("vf-view-toggle", (I) => {
      l("viewport", I), d.value = I;
    }), (I, $) => (w(), D("div", zo, [
      v.value.length ? (w(), D("div", dn, [
        f("div", hn, [
          et(E(x(i)("Search results for")) + " ", 1),
          f("span", fn, E(v.value), 1)
        ]),
        b() ? (w(), D("svg", pn, vn)) : X("", !0)
      ])) : (w(), D("div", Ho, [
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: $[0] || ($[0] = (M) => x(t).emit("vf-modal-show", { type: "new-folder", items: g.value }))
        }, Yo, 8, Uo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[1] || ($[1] = (M) => x(t).emit("vf-modal-show", { type: "new-file", items: g.value }))
        }, Zo, 8, Wo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[2] || ($[2] = (M) => g.value.length != 1 || x(t).emit("vf-modal-show", { type: "rename", items: g.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Go, 2))
        ], 8, Fo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[3] || ($[3] = (M) => !g.value.length || x(t).emit("vf-modal-show", { type: "delete", items: g.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, tn, 2))
        ], 8, Jo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[4] || ($[4] = (M) => x(t).emit("vf-modal-show", { type: "upload", items: g.value }))
        }, sn, 8, en),
        g.value.length == 1 && g.value[0].mime_type == "application/zip" ? (w(), D("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(i)("Unarchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[5] || ($[5] = (M) => !g.value.length || x(t).emit("vf-modal-show", { type: "unarchive", items: g.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, an, 2))
        ], 8, on)) : (w(), D("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(i)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[6] || ($[6] = (M) => !g.value.length || x(t).emit("vf-modal-show", { type: "archive", items: g.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, un, 2))
        ], 8, ln))
      ])),
      f("div", bn, [
        vt(f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), D("svg", {
            onClick: $[7] || ($[7] = (M) => x(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, wn))
        ], 8, yn), [
          [me, !x(s)]
        ]),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: S
        }, [
          (w(), D("svg", xn, [
            a.value ? (w(), D("path", kn)) : (w(), D("path", Dn))
          ]))
        ], 8, _n),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: $[8] || ($[8] = (M) => v.value.length || x(t).emit("vf-view-toggle", d.value == "list" ? "grid" : "list"))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([v.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            d.value == "grid" ? (w(), D("path", Mn)) : X("", !0),
            d.value == "list" ? (w(), D("path", En)) : X("", !0)
          ], 2))
        ], 8, Cn)
      ])
    ]));
  }
});
var In = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function An(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var cs = { exports: {} };
(function(r, t) {
  (function(s, o) {
    r.exports = o();
  })(In, function() {
    function s(c, u) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var m, n, h, y, _ = [], C = !0, B = !1;
        try {
          if (h = (e = e.call(c)).next, u === 0) {
            if (Object(e) !== e)
              return;
            C = !1;
          } else
            for (; !(C = (m = h.call(e)).done) && (_.push(m.value), _.length !== u); C = !0)
              ;
        } catch (W) {
          B = !0, n = W;
        } finally {
          try {
            if (!C && e.return != null && (y = e.return(), Object(y) !== y))
              return;
          } finally {
            if (B)
              throw n;
          }
        }
        return _;
      }
    }
    function o(c, u) {
      var e = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        u && (m = m.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
        })), e.push.apply(e, m);
      }
      return e;
    }
    function l(c) {
      for (var u = 1; u < arguments.length; u++) {
        var e = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(e), !0).forEach(function(m) {
          a(c, m, e[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(m) {
          Object.defineProperty(c, m, Object.getOwnPropertyDescriptor(e, m));
        });
      }
      return c;
    }
    function i(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var e = 0; e < u.length; e++) {
        var m = u[e];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, R(m.key), m);
      }
    }
    function g(c, u, e) {
      return u && d(c.prototype, u), e && d(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function a(c, u, e) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = e, c;
    }
    function v(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(u && u.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), u && b(c, u);
    }
    function p(c) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, p(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, n) {
        return m.__proto__ = n, m;
      }, b(c, u);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function I(c, u, e) {
      return S() ? I = Reflect.construct.bind() : I = function(n, h, y) {
        var _ = [null];
        _.push.apply(_, h);
        var C = Function.bind.apply(n, _), B = new C();
        return y && b(B, y.prototype), B;
      }, I.apply(null, arguments);
    }
    function $(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function M(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return M = function(m) {
        if (m === null || !$(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(m))
            return u.get(m);
          u.set(m, n);
        }
        function n() {
          return I(m, arguments, p(this).constructor);
        }
        return n.prototype = Object.create(m.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(n, m);
      }, M(c);
    }
    function T(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return T(c);
    }
    function z(c) {
      var u = S();
      return function() {
        var m = p(c), n;
        if (u) {
          var h = p(this).constructor;
          n = Reflect.construct(m, arguments, h);
        } else
          n = m.apply(this, arguments);
        return H(this, n);
      };
    }
    function P(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function V() {
      return typeof Reflect < "u" && Reflect.get ? V = Reflect.get.bind() : V = function(u, e, m) {
        var n = P(u, e);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, e);
          return h.get ? h.get.call(arguments.length < 3 ? u : m) : h.value;
        }
      }, V.apply(this, arguments);
    }
    function Z(c, u) {
      return G(c) || s(c, u) || rt(c, u) || pt();
    }
    function k(c) {
      return j(c) || ot(c) || rt(c) || bt();
    }
    function j(c) {
      if (Array.isArray(c))
        return ut(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function ot(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function rt(c, u) {
      if (c) {
        if (typeof c == "string")
          return ut(c, u);
        var e = Object.prototype.toString.call(c).slice(8, -1);
        if (e === "Object" && c.constructor && (e = c.constructor.name), e === "Map" || e === "Set")
          return Array.from(c);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return ut(c, u);
      }
    }
    function ut(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var e = 0, m = new Array(u); e < u; e++)
        m[e] = c[e];
      return m;
    }
    function bt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function gt(c, u) {
      var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!e) {
        if (Array.isArray(c) || (e = rt(c)) || u && c && typeof c.length == "number") {
          e && (c = e);
          var m = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return m >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[m++]
              };
            },
            e: function(C) {
              throw C;
            },
            f: n
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, _;
      return {
        s: function() {
          e = e.call(c);
        },
        n: function() {
          var C = e.next();
          return h = C.done, C;
        },
        e: function(C) {
          y = !0, _ = C;
        },
        f: function() {
          try {
            !h && e.return != null && e.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    function A(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var e = c[Symbol.toPrimitive];
      if (e !== void 0) {
        var m = e.call(c, u || "default");
        if (typeof m != "object")
          return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function R(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, e, m) {
      var n = u.x, h = u.y, y = m.x, _ = m.y, C = {
        "+": {
          x: n + y,
          y: h + _
        },
        "-": {
          x: n - y,
          y: h - _
        },
        "*": {
          x: n * y,
          y: h * _
        },
        "/": {
          x: n / y,
          y: h / _
        }
      };
      return C[e];
    }, tt = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: e,
        height: e
      };
    }, _t = function(u) {
      return {
        x: u,
        y: u
      };
    }, yt = function(c, u) {
      var e = u;
      window.addEventListener("resize", e), window.addEventListener("scroll", e);
      var m = new MutationObserver(e);
      c.forEach(function(h, y) {
        m.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return po(m, e);
      };
      return {
        observer: m,
        callback: e,
        cleanup: n
      };
    }, ke = function(c) {
      var u = Me(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, De = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ye = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, Ce = function(c, u) {
      var e;
      return function() {
        for (var m = arguments.length, n = new Array(m), h = 0; h < m; h++)
          n[h] = arguments[h];
        var y = function() {
          e = null, c.apply(void 0, n);
        };
        clearTimeout(e), e = setTimeout(y, u);
      };
    }, We = function() {
      var c, u, e, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((e = document.body) === null || e === void 0 ? void 0 : e.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, Er = function(c) {
      var u = function e(m) {
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = m[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (m.push(y), h++, e(m, h)) : m;
      };
      return u([c]);
    }, ro = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var e = c.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        bottom: e.bottom,
        right: e.right,
        width: (c.clientWidth || e.width) * u,
        height: (c.clientHeight || e.height) * u
      };
    }, $r = function(c, u) {
      var e = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Nt(c).forEach(function(m) {
        var n = u.getRect(m);
        e.top = Math.min(e.top, n.top), e.left = Math.min(e.left, n.left), e.bottom = Math.max(e.bottom, n.bottom), e.right = Math.max(e.right, n.right);
      }), e.height = e.bottom - e.top, e.width = e.right - e.left, e;
    }, Me = function(c) {
      return !c || c instanceof Document ? We() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : We().x,
        y: c.scrollTop >= 0 ? c.scrollTop : We().y
      };
    }, Tr = function(c) {
      var u = c.elementRect, e = c.containerRect, m = c.tolerance, n = m === void 0 ? {
        x: 0,
        y: 0
      } : m, h = [];
      return u.top - n.y < e.top && h.push("top"), u.left - n.x < e.left && h.push("left"), u.bottom + n.y > e.bottom && h.push("bottom"), u.right + n.y > e.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, so = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, oo = function(c) {
      var u = c.scrollAmount, e = c.initialPointerPos, m = c.pointerPos, n = {};
      return m.x > e.x - u.x ? (n.left = e.x - u.x, n.width = m.x - e.x + u.x) : (n.left = m.x, n.width = e.x - m.x - u.x), m.y > e.y - u.y ? (n.top = e.y - u.y, n.height = m.y - e.y + u.y) : (n.top = m.y, n.height = e.y - m.y - u.y), n;
    }, Ir = function(u) {
      var e = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(u);
      if (!m.transform || m.transform === "none")
        return e;
      if (m.transform.indexOf("3d") >= 0) {
        var n = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          e.x = parseInt(y[12]) || 0, e.y = parseInt(y[13]) || 0;
        }
        return e;
      }
      var _ = m.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, B = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        e.x = parseInt(B[4]) || 0, e.y = parseInt(B[5]) || 0;
      }
      return e;
    }, no = function(u) {
      var e = u.style.transform;
      if (!e || e.indexOf("translate") < 0)
        return Ir(u);
      var m = {
        x: 0,
        y: 0
      }, n = e.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          m.x = parseInt(C[0]) || 0, m.y = parseInt(C[1]) || 0;
        }
      }
      return !m.x && !m.x ? Ir(u) : m;
    }, io = function(u) {
      var e = u.style, m = {
        x: parseInt(e.left) || 0,
        y: parseInt(e.top) || 0
      };
      if (!m.x && !m.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return m;
    }, ao = function(c, u) {
      return u ? no(c) : io(c);
    }, lo = function(c) {
      var u = c.element, e = c.edges, m = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      e.includes("top") && le(u, {
        y: h.y + n.top - m.top,
        x: h.x
      }, y), e.includes("left") && le(u, {
        y: h.y,
        x: h.x + n.left - m.left
      }, y), e.includes("bottom") && le(u, {
        y: h.y + n.bottom - m.bottom,
        x: h.x
      }, y), e.includes("right") && le(u, {
        y: h.y,
        x: h.x + n.right - m.right
      }, y);
    }, Ar = function(c) {
      var u = c.computedStyle, e = c.node, m = u.position, n = m === "absolute" || m === "relative" || m === "fixed";
      !(e instanceof Document) && !n && (e.style.position = "relative");
    }, co = function(c) {
      var u = c.shiftKey, e = c.keyboardDragSpeed, m = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, B = {
        x: 0,
        y: 0
      }, W = u ? e * 4 * m : e * m;
      return h.left.includes(n) && (B.x = y.x || -W, !u && !y.x && _ && C(["left"], e)), h.right.includes(n) && (B.x = y.x || W, !u && !y.x && _ && C(["right"], e)), h.up.includes(n) && (B.y = y.y || -W, !u && !y.y && _ && C(["top"], e)), h.down.includes(n) && (B.y = y.y || W, !u && !y.y && _ && C(["bottom"], e)), B;
    }, uo = function(c) {
      var u = c.element, e = c.force, m = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !e || (n.has(u) ? m && n.delete(u) : n.add(u), u.classList.add(h));
    }, ho = function(c) {
      var u = c.element, e = c.force, m = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !e)
        return !1;
      var y = m.has(u), _ = n.has(u);
      y && !_ ? m.delete(u) : !y && _ && m.add(u), u.classList.remove(h);
    }, ae = function(u, e, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(e, '".'));
    }, Y = function(u, e, m, n) {
      if (e === void 0)
        return m ? a({}, u, n) : {};
      if (e === null)
        return a({}, u, null);
      var h = !0, y = !1, _ = typeof n == "string";
      _ && (h = typeof e == "string" || e instanceof String), _ && !h && (y = !0, ae(u, "string"));
      var C = !Number.isNaN(n) && typeof n == "number";
      C && (h = !Number.isNaN(e) && typeof e == "number"), C && !h && (y = !0, ae(u, "number"));
      var B = Object.prototype.toString.call(n) === "[object Object]";
      B && (h = Object.prototype.toString.call(e) === "[object Object]"), B && !h && (y = !0, ae(u, "object"));
      var W = typeof n == "boolean";
      W && (h = typeof e == "boolean"), W && !h && (y = !0, ae(u, "boolean"));
      var it = Array.isArray(n);
      it && (h = Array.isArray(e)), it && !h && (y = !0, ae(u, "array"));
      var xt = y || m;
      return u === "dragKeys" && h ? a({}, u, Object.assign(n, e)) : u === "dragKeys" && !h ? xt ? a({}, u, n) : {} : (u === "dropZones" && h && new Set(e.map(function(kt) {
        return kt.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? a({}, u, e) : xt ? a({}, u, n) : {});
    }, fo = function(c, u) {
      return l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, Gt = function(c, u) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (e > 0) {
        var n = (c.right - c.left) * e, h = (c.bottom - c.top) * e;
        m = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return m.left < u.right && // 1.
      m.right > u.left && // 2.
      m.top < u.bottom && // 3.
      m.bottom > u.top;
    }, Lr = function(c) {
      var u = c.element, e = c.posDirection, m = c.containerRect, n = c.useTransform, h = ao(u, n), y = O(h, "+", e);
      le(u, y, n);
      var _ = u.getBoundingClientRect(), C = Tr({
        elementRect: _,
        containerRect: m
      });
      lo({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: m,
        elementPos: y,
        useTransform: n
      });
    }, po = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, go = function(c, u, e) {
      if (u.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? m || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, _ = u.includes("left") && n.scrollLeft > 0, C = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * e), y && (n.scrollTop += 1 * e), _ && (n.scrollLeft -= 1 * e), C && (n.scrollLeft += 1 * e);
      }
    }, le = function(c, u, e) {
      if (e) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, mo = function(c) {
      for (var u = c.subscribe, e = c.publish, m = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(it) {
              return it.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var it = h.getTarget();
              return l({}, it ? {
                dropTarget: it.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var it = Z(B[C], 2), xt = it[0], kt = it[1];
        ["pre", !1].forEach(function(Et) {
          return u(Et ? "".concat(xt, ":").concat(Et) : xt, function(nt) {
            return kt.forEach(function(mt) {
              return (!mt.condition || mt.condition(nt)) && e(Et ? "".concat(Et).concat(mt.name) : mt.name, l(l({
                items: n.elements,
                isDragging: m.isDragging
              }, nt), mt.extraData ? mt.extraData(nt) : {}));
            });
          });
        });
      }, C = 0, B = Object.entries(y); C < B.length; C++)
        _();
    }, Nt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, vo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "DS", void 0), a(this, "_observers", void 0), a(this, "_node", void 0), a(this, "_parentNodes", void 0), a(this, "_computedStyle", void 0), a(this, "_computedBorder", void 0), a(this, "_rect", void 0), a(this, "setArea", function(n) {
          e.reset(), e._node = n, Ar({
            computedStyle: e.computedStyle,
            node: e._node
          }), setTimeout(function() {
            e.DS.PubSub.publish("Area:modified:pre", {
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              item: e
            });
          });
        }), a(this, "start", function() {
          e._observers = yt(e.parentNodes, Ce(function(n) {
            e.DS.PubSub.publish("Area:modified:pre", {
              event: n,
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              event: n,
              item: e
            });
          }, 60));
        }), a(this, "reset", function() {
          e._computedStyle = void 0, e._rect = void 0, e._computedBorder = void 0, e._parentNodes = void 0;
        }), a(this, "stop", function() {
          e._observers.cleanup(), e.reset();
        }), a(this, "scroll", function(n, h) {
          var y = {
            scroll_directions: n,
            scroll_multiplier: h
          };
          e.DS.PubSub.publish("Area:scroll:pre", y), go(e._node, n, h), e.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          e.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return g(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = ro(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.HTMLNode);
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_prevCursorPos", void 0), a(this, "_prevScrollPos", void 0), a(this, "_elements", []), a(this, "_dragKeys", void 0), a(this, "_dragKeysFlat", []), a(this, "_selectionRect", void 0), a(this, "assignDragkeys", function() {
          e._dragKeys = {
            up: e.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: e.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: e.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: e.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, e._dragKeysFlat = [].concat(k(e._dragKeys.up), k(e._dragKeys.down), k(e._dragKeys.left), k(e._dragKeys.right));
        }), a(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var C = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], C), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = $r(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var B = co({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: e.DS.Area.scroll,
              scrollDiff: e._scrollDiff,
              canScroll: e.DS.stores.ScrollStore.canScroll,
              dragKeys: e._dragKeys
            });
            e.DS.stores.SettingsStore.s.dragAsBlock && (B = e.limitDirection(B)), e._elements.forEach(function(W) {
              return Lr({
                element: W,
                posDirection: B,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), a(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: h,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), a(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = $r(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), a(this, "stop", function(n) {
          n != null && n.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), a(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !e._elements.length || y || e.DS.continue)) {
            var _ = O(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (_ = e.limitDirection(_)), e._elements.forEach(function(C) {
              return Lr({
                element: C,
                posDirection: _,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), a(this, "limitDirection", function(n) {
          var h = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, _ = {
            top: h.top - e._selectionRect.top + y.y,
            left: h.left - e._selectionRect.left + y.x,
            bottom: h.bottom - e._selectionRect.bottom + y.y,
            right: h.right - e._selectionRect.right + y.x
          };
          return n.x === 0 && n.y === 0 || (n.y < 0 && (n.y = Math.max(n.y, _.top)), n.x < 0 && (n.x = Math.max(n.x, _.left)), n.y > 0 && (n.y = Math.min(n.y, _.bottom)), n.x > 0 && (n.x = Math.min(n.x, _.right)), e._selectionRect.top += n.y, e._selectionRect.bottom += n.y, e._selectionRect.left += n.x, e._selectionRect.right += n.x), n;
        }), a(this, "handleZIndex", function(n) {
          e._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = m, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return g(c, [{
        key: "_cursorDiff",
        get: function() {
          var e = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? O(e, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = e, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var e = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? O(e, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = e, m;
        }
      }]), c;
    }(), yo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS, n = u.id, h = u.element, y = u.droppables;
        i(this, c), a(this, "id", void 0), a(this, "element", void 0), a(this, "_droppables", void 0), a(this, "_rect", void 0), a(this, "_observers", void 0), a(this, "_timeout", void 0), a(this, "_itemsDropped", []), a(this, "_itemsInside", void 0), a(this, "setReadyClasses", function(_) {
          if (!e.isDestroyed) {
            var C = e.droppables.filter(function(B) {
              return e.DS.SelectedSet.has(B);
            });
            C.length && (C.forEach(function(B) {
              B.classList[_]("".concat(e.Settings.droppableClass)), B.classList[_]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[_]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), a(this, "handleNoDrop", function() {
          var _;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(e.Settings.droppedTargetClass), C.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(C) {
            return !e.DS.SelectedSet.has(C);
          }), (_ = e._itemsDropped) !== null && _ !== void 0 && _.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), a(this, "handleDrop", function() {
          var _, C, B;
          e.isDestroyed || (e._itemsDropped = k(new Set([].concat(k(e._itemsDropped), k((_ = e.droppables) === null || _ === void 0 ? void 0 : _.filter(function(W) {
            return e.DS.SelectedSet.has(W);
          }))))), (C = e._itemsDropped) === null || C === void 0 || C.forEach(function(W) {
            W.classList.add("".concat(e.Settings.droppedTargetClass)), W.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (B = e._itemsDropped) !== null && B !== void 0 && B.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), a(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          e.droppables.forEach(function(C) {
            e.itemsInside.includes(C) ? (C.classList.add("".concat(e.Settings.droppedInsideClass)), C.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), _ = !0) : (C.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), C.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), _ ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), a(this, "start", function(_) {
          var C = _.isDragging;
          !C || e.isDestroyed || e.setReadyClasses("add");
        }), a(this, "stop", function(_) {
          var C = _.isDragging;
          !C || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), a(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Nt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          e.element && (e.element.classList.remove(C["dropZoneClass:pre"]), e.element.classList.add(C.dropZoneClass));
        }), this._observers = yt(this.parentNodes, Ce(function() {
          return e._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return g(c, [{
        key: "destroy",
        value: function() {
          var e = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(m) {
            m.classList.remove("".concat(e.Settings.droppedTargetClass)), m.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id)), m.classList.remove("".concat(e.Settings.droppableClass)), m.classList.remove("".concat(e.Settings.droppableClass, "-").concat(e.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var e = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(m) {
            return Gt(e.DS.SelectableSet.rects.get(m), e.rect, e.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return e._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Er(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(e) {
          this._droppables = e;
        }
      }]), c;
    }(), So = /* @__PURE__ */ g(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_zoneByElement", /* @__PURE__ */ new Map()), a(this, "_zoneById", /* @__PURE__ */ new Map()), a(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), a(this, "_zones", void 0), a(this, "setDropZones", function(n) {
          var h = n.dropZones;
          h && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = h.map(function(y) {
            return new yo(l({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var C = e._zonesByDroppable.get(_);
              if (!(C != null && C.length))
                return e._zonesByDroppable.set(_, [y]);
              e._zonesByDroppable.set(_, k(new Set([].concat(k(C), [y]))));
            });
          }));
        }), a(this, "_handleDrop", function(n) {
          e._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), a(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, _ = h.y, C = 0, B = n.length; C < B; C++) {
            var W = e._zoneByElement.get(n[C]);
            if (W && Gt(W.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(e.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), a(this, "stop", function(n) {
          var h = n.isDragging;
          if (h) {
            var y = e.getTarget();
            e._handleDrop(y);
          }
        }), a(this, "getItemsDroppedById", function(n) {
          var h = e._zoneById.get(n);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
        }), a(this, "getItemsInsideById", function(n, h) {
          var y = e._zoneById.get(n);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
          var _ = y.itemsInside;
          return h && y.handleItemsInsideClasses(), _;
        }), a(this, "getTarget", function(n) {
          var h;
          if ((h = e._zones) !== null && h !== void 0 && h.length) {
            var y = (n == null ? void 0 : n.x) || e.DS.stores.PointerStore.currentVal.x, _ = (n == null ? void 0 : n.y) || e.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
          var h = n.settings;
          return e.setDropZones(h);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), wo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "isInteracting", void 0), a(this, "isDragging", void 0), a(this, "init", function() {
          return e.DS.publish("Interaction:init:pre", {});
        }), a(this, "_init", function() {
          e.stop(), e.Settings.usePointerEvents ? e.DS.Area.HTMLNode.addEventListener("pointerdown", e.start, {
            passive: !1
          }) : e.DS.Area.HTMLNode.addEventListener("mousedown", e.start), e.DS.Area.HTMLNode.addEventListener("touchstart", e.start, {
            passive: !1
          }), e.DS.publish("Interaction:init", {});
        }), a(this, "start", function(n) {
          return e.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: e.isDragging
          });
        }), a(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), e._canInteract(n) && (e.isInteracting = !0, e.isDragging = e.isDragEvent(n), e.DS.publish("Interaction:start", {
            event: n,
            isDragging: e.isDragging
          }), e.Settings.usePointerEvents ? (document.addEventListener("pointerup", e.reset), document.addEventListener("pointercancel", e.reset)) : document.addEventListener("mouseup", e.reset), document.addEventListener("touchend", e.reset));
        }), a(this, "isDragEvent", function(n) {
          var h = (
            /** @type {Element} */
            n.target.closest(".".concat(e.Settings.selectableClass))
          );
          return !e.Settings.draggability || e.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !h ? !1 : (e.Settings.immediateDrag && (e.DS.SelectedSet.size ? e.DS.SelectedSet.has(h) || (e.DS.SelectedSet.clear(), e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!e.DS.SelectedSet.has(h));
        }), a(this, "onClick", function(n) {
          var h = n.event;
          if (e._canInteract(h) && !(h.detail > 0)) {
            var y = e.DS, _ = y.stores, C = _.PointerStore, B = _.KeyStore, W = y.SelectableSet, it = y.SelectedSet;
            C.start(h);
            var xt = (
              /** @type {any} */
              h.target
            );
            W.has(xt) && (B.isMultiSelectKeyPressed(h) || it.clear(), it.toggle(xt), e.reset());
          }
        }), a(this, "stop", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.DS.Area.HTMLNode;
          e.isInteracting = !1, e.isDragging = !1, e.Settings.usePointerEvents ? (n.removeEventListener("pointerdown", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", e.reset), document.removeEventListener("pointercancel", e.reset)) : (n.removeEventListener("mousedown", e.start), document.removeEventListener("mouseup", e.reset)), n.removeEventListener("touchstart", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", e.reset);
        }), a(this, "update", function(n) {
          var h = n.event, y = n.scroll_directions, _ = n.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: e.isDragging
          });
        }), a(this, "reset", function(n) {
          return e.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: e.isDragging
          });
        }), a(this, "_reset", function(n) {
          var h = e.isDragging;
          e.stop(), e.init(), e.DS.publish("Interaction:end", {
            event: n,
            isDragging: h
          });
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          e.stop(h["area:pre"]), e.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var h = n.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var h = n.event;
          return e._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var h = n.event;
          return e._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return g(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(e) {
            var m = (
              /** @type {MouseEvent} */
              e.clientX === 0 && /** @type {MouseEvent} */
              e.clientY === 0 && /** @type {MouseEvent} */
              e.detail === 0 && e.target
            );
            return (
              /** @type {MouseEvent} */
              !(e.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              e.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                e.target
              ) || // fix outside elements issue
              !m && !this.DS.SelectorArea.isClicked(e))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), _o = /* @__PURE__ */ g(
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "subscribers", {}), a(this, "subscribe", function(n, h) {
          return Array.isArray(e.subscribers[n]) || (e.subscribers[n] = []), e.subscribers[n].push(h), e.subscribers[n].length - 1;
        }), a(this, "unsubscribe", function(n, h, y) {
          y >= 0 ? e.subscribers[n].splice(y, 1) : h && (e.subscribers[n] = e.subscribers[n].filter(function(_) {
            return _ !== h;
          }));
        }), a(this, "publish", function(n, h) {
          Array.isArray(n) ? n.forEach(function(y) {
            return e._publish(y, h);
          }) : e._publish(n, h);
        }), a(this, "_publish", function(n, h) {
          var y = e.subscribers[n];
          Array.isArray(y) && (n.includes(":pre") ? e._handlePrePublish(y, h) : e._handlePublish(y, h));
        }), a(this, "_handlePublish", function(n, h) {
          for (var y = 0, _ = n.length; y < _; y++) {
            if (e.DS.stopped)
              return;
            n[y](h);
          }
        }), a(this, "_handlePrePublish", function(n, h) {
          for (var y = n.length; y--; ) {
            if (e.DS.stopped)
              return;
            n[y](h);
          }
        }), this.DS = m;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), xo = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = z(e);
      function e(m) {
        var n, h = m.DS;
        return i(this, e), n = u.call(this), a(T(n), "_rects", void 0), a(T(n), "_timeout", void 0), a(T(n), "init", function() {
          return Nt(n.Settings.selectables).forEach(function(y) {
            return n.add(y);
          });
        }), a(T(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(T(n), "_onClick", function(y) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), a(T(n), "_onPointer", function(y) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), a(T(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), a(T(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), a(T(n), "getRect", function(y) {
          return n._rects ? n.rects.get(y) : y.getBoundingClientRect();
        }), n.DS = h, n.Settings = h.stores.SettingsStore.s, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          n.forEach(function(C) {
            C.classList.remove(_["selectableClass:pre"]), C.classList.add(_.selectableClass);
          });
        }), n;
      }
      return g(e, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (V(p(e.prototype), "has", this).call(this, n))
              return this;
            var h = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", h), n.classList.add(this.Settings.selectableClass), n.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Ar({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), V(p(e.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!V(p(e.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selectable:removed:pre", h), n.classList.remove(this.Settings.selectableClass), n.classList.remove(this.Settings.hoverClass), n.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), V(p(e.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var n = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return n._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return n._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), e;
    }(/* @__PURE__ */ M(Set)), ko = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = z(e);
      function e(m) {
        var n, h = m.DS;
        return i(this, e), n = u.call(this), a(T(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(T(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), a(T(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), n.DS = h, n;
      }
      return g(e, [{
        key: "add",
        value: function(n) {
          if (V(p(e.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), V(p(e.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!V(p(e.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = V(p(e.prototype), "delete", this).call(this, n);
          return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(n) {
            return this.has(n) ? this.delete(n) : this.add(n), n;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), e;
    }(/* @__PURE__ */ M(Set)), Do = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_prevSelectedSet", void 0), a(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (e._storePrevious(h), e._handleInsideSelection(!0, h));
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          h || e.DS.continue || e._handleInsideSelection();
        }), a(this, "_handleInsideSelection", function(n, h) {
          var y = e.DS, _ = y.SelectableSet, C = y.SelectorArea, B = y.Selector, W = e.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && e.Settings.multiSelectToggling, it = e.Settings.selectionThreshold, xt = _.rects, kt = B.rect, Et = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), mt = gt(xt), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Ee = Z(ce.value, 2), ue = Ee[0], $e = Ee[1];
              C.isInside(ue, $e) && (Gt($e, kt, it) ? Et.set(ue, $e) : nt.set(ue, $e));
            }
          } catch (Xe) {
            mt.e(Xe);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Nr = e.filterSelected({
              select: Et,
              unselect: nt,
              selectorRect: kt
            }), Ao = Nr.select, Lo = Nr.unselect;
            Ao.forEach(function(Xe, Ze) {
              return uo({
                element: Ze,
                force: n,
                multiSelectionToggle: W,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), Lo.forEach(function(Xe, Ze) {
              return ho({
                element: Ze,
                force: n,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass,
                PrevSelectedSet: e._prevSelectedSet
              });
            });
          }
        }), a(this, "filterSelected", function(n) {
          var h = n.select, y = n.unselect;
          return n.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return g(c, [{
        key: "_storePrevious",
        value: function(e) {
          var m = this.DS, n = m.stores.KeyStore, h = m.SelectedSet;
          n.isMultiSelectKeyPressed(e) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_rect", void 0), a(this, "attachSelector", function() {
          var n, h;
          e.HTMLNode && (n = e.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ye(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (h = e.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), a(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = e.DS.stores.PointerStore, _ = y.initialValArea;
            Or(e.HTMLNode, U(_, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), a(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || e.DS.continue)) {
            var y = e.DS.stores, _ = y.ScrollStore, C = y.PointerStore, B = oo({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Or(e.HTMLNode, B), e._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          e.HTMLNode.classList.remove(h["selectorClass:pre"]), e.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return g(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_scrollInterval", void 0), a(this, "_rect", void 0), a(this, "currentEdges", []), a(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), a(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[h][y](e.HTMLNode);
        }), a(this, "updatePos", function() {
          e._rect = null;
          var n = e.DS.Area.rect, h = e.DS.Area.computedBorder, y = e.HTMLNode.style, _ = "".concat(n.top + h.top, "px"), C = "".concat(n.left + h.left, "px"), B = "".concat(n.width, "px"), W = "".concat(n.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== B && (y.width = B), y.height !== W && (y.height = W);
        }), a(this, "stop", function(n) {
          e.stopAutoScroll(), n && e.applyElements("remove");
        }), a(this, "startAutoScroll", function() {
          e.currentEdges = [], e._scrollInterval = setInterval(function() {
            return e.handleAutoScroll();
          }, 16);
        }), a(this, "handleAutoScroll", function() {
          if (!e.DS.continue) {
            var n = e.DS, h = n.stores.PointerStore, y = n.Area;
            e.currentEdges = Tr({
              elementRect: U(h.currentVal),
              containerRect: e.rect,
              tolerance: e.DS.stores.SettingsStore.s.overflowTolerance
            }), e.currentEdges.length && y.scroll(e.currentEdges, e.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), a(this, "stopAutoScroll", function() {
          e.currentEdges = [], clearInterval(e._scrollInterval);
        }), a(this, "isInside", function(n, h) {
          return e.DS.Area.HTMLNode.contains(n) && e.DS.stores.ScrollStore.canScroll ? !0 : Gt(e.rect, h || n.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = De(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          e.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), e.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          e.updatePos(), e.stopAutoScroll();
        });
      }
      return g(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(e) {
            var m = this.DS.stores.PointerStore, n = e ? m.getPointerPosition(e) : m.initialVal;
            return Gt({
              left: n.x,
              top: n.y,
              right: n.x,
              bottom: n.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_currentValues", /* @__PURE__ */ new Set()), a(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), a(this, "init", function() {
          document.addEventListener("keydown", e.keydown), document.addEventListener("keyup", e.keyup), window.addEventListener("blur", e.reset);
        }), a(this, "keydown", function(n) {
          var h = n.key.toLowerCase();
          e.DS.publish("KeyStore:down:pre", {
            event: n,
            key: h
          }), e._currentValues.add(h), e.DS.publish("KeyStore:down", {
            event: n,
            key: h
          });
        }), a(this, "keyup", function(n) {
          var h = n.key.toLowerCase();
          e.DS.publish("KeyStore:up:pre", {
            event: n,
            key: h
          }), e._currentValues.delete(h), e.DS.publish("KeyStore:up", {
            event: n,
            key: h
          });
        }), a(this, "stop", function() {
          document.removeEventListener("keydown", e.keydown), document.removeEventListener("keyup", e.reset), window.removeEventListener("blur", e.reset), e.reset();
        }), a(this, "reset", function() {
          return e._currentValues.clear();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init);
      }
      return g(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(e) {
            var m = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || e && n.some(function(h) {
              return e[m._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), $o = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_isMouseInteraction", !1), a(this, "_initialValArea", void 0), a(this, "_currentValArea", void 0), a(this, "_lastValArea", void 0), a(this, "_initialVal", void 0), a(this, "_currentVal", void 0), a(this, "_lastVal", void 0), a(this, "_lastTouch", void 0), a(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), a(this, "getPointerPosition", function(n) {
          return so({
            event: e._normalizedEvent(n)
          });
        }), a(this, "update", function(n) {
          n && (e.DS.publish("PointerStore:updated:pre", {
            event: n
          }), e.currentVal = e.getPointerPosition(n), e._isMouseInteraction && e.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), a(this, "stop", function() {
          e.Settings.usePointerEvents ? document.removeEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", e.update), document.removeEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return e._isMouseInteraction = !1;
          }, 100);
        }), a(this, "reset", function(n) {
          n && (e.currentVal = e.lastVal = e.getPointerPosition(n), e.stop(), e.init());
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return e.reset(h);
        });
      }
      return g(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(e) {
            e && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(e));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(e) {
            return "touches" in e && e.type !== "touchend" && (this._lastTouch = e), "touches" in e ? this._lastTouch.touches[0] : e;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._initialVal = e, this._initialValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._currentVal = e, this._currentValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._lastVal = e, this._lastValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, m = u.DS;
        i(this, c), a(this, "_initialVal", void 0), a(this, "_currentVal", void 0), a(this, "_canScroll", void 0), a(this, "init", function() {
          return e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), a(this, "start", function() {
          e._currentVal = e._initialVal = Me(e.DS.stores.SettingsStore.s.area), e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), a(this, "update", function() {
          return e._currentVal = Me(e.DS.stores.SettingsStore.s.area);
        }), a(this, "stop", function() {
          e.DS.stores.SettingsStore.s.area.removeEventListener("scroll", e.update), e._initialVal = {
            x: 0,
            y: 0
          }, e._canScroll = null;
        }), a(this, "reset", function() {
          e.stop(), e.start();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return e.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return e.reset();
        });
      }
      return g(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = ke(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var e = O(this.currentVal, "-", this.initialVal), m = _t(this.DS.stores.SettingsStore.s.zoom), n = O(O(e, "*", m), "-", e);
          return {
            x: e.x + n.x,
            y: e.y + n.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Me(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), Io = /* @__PURE__ */ g(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(u) {
        var e = this, m = u.DS, n = u.settings;
        i(this, c), a(this, "_settings", {}), a(this, "s", {}), a(this, "update", function(h) {
          var y = h.settings, _ = h.init;
          return e.DS.publish("Settings:updated:pre", l({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), a(this, "_update", function(h) {
          for (var y = h.settings, _ = h.init, C = fo(y, _), B = function() {
            var kt, Et = Z(it[W], 2), nt = Et[0], mt = Et[1];
            nt in e._settings || Object.defineProperty(e.s, nt, {
              get: function() {
                return e._settings[nt];
              },
              set: function(ue) {
                return e.update({
                  settings: a({}, nt, ue)
                });
              }
            }), e._settings["".concat(nt, ":pre")] = e._settings[nt], e._settings[nt] = mt;
            var ce = {
              settings: (kt = {}, a(kt, nt, e._settings[nt]), a(kt, "".concat(nt, ":pre"), e._settings["".concat(nt, ":pre")]), kt)
            };
            e.DS.publish("Settings:updated", ce), e.DS.publish("Settings:updated:".concat(nt), ce);
          }, W = 0, it = Object.entries(C); W < it.length; W++)
            B();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: n,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Pr = /* @__PURE__ */ function() {
      function c(u) {
        var e = this;
        i(this, c), a(this, "continue", !1), a(this, "start", function() {
          e.stopped = !1, e.Interaction.init();
        }), a(this, "break", function() {
          return e.continue = !0;
        }), a(this, "setSettings", function(m) {
          return e.stores.SettingsStore.update({
            settings: m
          });
        }), a(this, "getSelection", function() {
          return e.SelectedSet.elements;
        }), a(this, "getSelectables", function() {
          return e.SelectableSet.elements;
        }), a(this, "getInitialCursorPosition", function() {
          return e.stores.PointerStore.initialVal;
        }), a(this, "getCurrentCursorPosition", function() {
          return e.stores.PointerStore.currentVal;
        }), a(this, "getPreviousCursorPosition", function() {
          return e.stores.PointerStore.lastVal;
        }), a(this, "getInitialCursorPositionArea", function() {
          return e.stores.PointerStore.initialValArea;
        }), a(this, "getCurrentCursorPositionArea", function() {
          return e.stores.PointerStore.currentValArea;
        }), a(this, "getPreviousCursorPositionArea", function() {
          return e.stores.PointerStore.lastValArea;
        }), a(this, "isMultiSelect", function(m) {
          return e.stores.KeyStore.isMultiSelectKeyPressed(m);
        }), a(this, "isDragging", function() {
          return e.Interaction.isDragging;
        }), a(this, "getZoneByCoordinates", function(m) {
          var n;
          return (n = e.DropZones.getTarget(m)) === null || n === void 0 ? void 0 : n.toObject();
        }), a(this, "getItemsDroppedByZoneId", function(m) {
          return e.DropZones.getItemsDroppedById(m);
        }), a(this, "getItemsInsideByZoneId", function(m, n) {
          return e.DropZones.getItemsInsideById(m, n);
        }), this.PubSub = new _o({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new Io({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new $o({
          DS: this
        }), this.stores.ScrollStore = new To({
          DS: this
        }), this.stores.KeyStore = new Eo({
          DS: this
        }), this.Area = new vo({
          DS: this
        }), this.Selector = new Co({
          DS: this
        }), this.SelectorArea = new Mo({
          DS: this
        }), this.SelectableSet = new xo({
          DS: this
        }), this.SelectedSet = new ko({
          DS: this
        }), this.Selection = new Do({
          DS: this
        }), this.Drag = new bo({
          DS: this
        }), this.DropZones = new So({
          DS: this
        }), this.Interaction = new wo({
          DS: this
        }), mo({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return e.continue = !1;
        }), this.start();
      }
      return g(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(e), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), e && this.SelectableSet.clear(), m && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(e) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Nt(e)), n || this.addSelectables(e), m && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(e) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Nt(e)), n && this.removeSelectables(e), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(e) {
          var m = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Nt(e).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(e, n, h) : m.addSelection(e, n, h);
          }), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(e) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(e, m, n), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), e && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(e, m, n) {
          var h = Nt(e);
          return this.SelectableSet.addAll(h), m && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(e) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(e, m), this.addSelectables(e, n);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(e, m, n) {
          return this.SelectableSet.deleteAll(Nt(e)), m && this.removeSelection(e), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Pr.isCollision = Gt, Pr;
  });
})(cs);
var Ln = cs.exports;
const On = /* @__PURE__ */ An(Ln), us = (r, t, s, o, l) => (t = Math, s = t.log, o = 1024, l = s(r) / s(o) | 0, r / t.pow(o, l)).toFixed(0) + " " + (l ? "KMGTPEZY"[--l] + "iB" : "B"), ds = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), Pn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Nn = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), jn = [
  Nn
], Rn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Vn = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Bn = [
  Vn
], zn = {
  name: "VFSortIcon"
}, Te = /* @__PURE__ */ Object.assign(zn, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (w(), D("div", null, [
      r.direction == "down" ? (w(), D("svg", Pn, jn)) : X("", !0),
      r.direction == "up" ? (w(), D("svg", Rn, Bn)) : X("", !0)
    ]));
  }
}), Hn = ["onClick"], Un = {
  name: "VFToast.vue"
}, Kn = /* @__PURE__ */ Object.assign(Un, {
  setup(r) {
    const t = N("emitter"), { getStore: s } = N("storage"), o = L(s("full-screen", !1)), l = (a) => a == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = L([]), d = (a) => {
      i.value.splice(a, 1);
    }, g = (a) => {
      let v = i.value.findIndex((p) => p.id === a);
      v !== -1 && d(v);
    };
    return t.on("vf-toast-clear", () => {
      i.value = [];
    }), t.on("vf-toast-push", (a) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      a.id = v, i.value.push(a), setTimeout(() => {
        g(v);
      }, 5e3);
    }), (a, v) => (w(), D("div", {
      class: ct([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ct(Oo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (w(!0), D(lt, null, wt(i.value, (p, b) => (w(), D("div", {
            onClick: (S) => d(b),
            key: p,
            class: ct([l(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, Hn))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ft = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Yn } = At(), tr = (r, t) => Yn.value + "?" + Ft({ q: "preview", adapter: r, path: t }), Ht = typeof window < "u", hs = Ht && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), fs = Ht && "IntersectionObserver" in window, ps = Ht && "classList" in document.createElement("p"), gs = Ht && window.devicePixelRatio > 1, Wn = {
  elements_selector: ".lazy",
  container: hs || Ht ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, ms = (r) => Object.assign({}, Wn, r), Vr = function(r, t) {
  let s;
  const o = "LazyLoad::Initialized", l = new r(t);
  try {
    s = new CustomEvent(o, { detail: { instance: l } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: l });
  }
  window.dispatchEvent(s);
}, Xn = (r, t) => {
  if (t)
    if (!t.length)
      Vr(r, t);
    else
      for (let s = 0, o; o = t[s]; s += 1)
        Vr(r, o);
}, Pt = "src", hr = "srcset", fr = "sizes", vs = "poster", we = "llOriginalAttrs", bs = "data", pr = "loading", ys = "loaded", Ss = "applied", Zn = "entered", gr = "error", ws = "native", _s = "data-", xs = "ll-status", ft = (r, t) => r.getAttribute(_s + t), Fn = (r, t, s) => {
  const o = _s + t;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, _e = (r) => ft(r, xs), qt = (r, t) => Fn(r, xs, t), Be = (r) => qt(r, null), mr = (r) => _e(r) === null, qn = (r) => _e(r) === pr, Gn = (r) => _e(r) === gr, vr = (r) => _e(r) === ws, Jn = [pr, ys, Ss, gr], Qn = (r) => Jn.indexOf(_e(r)) >= 0, Ut = (r, t, s, o) => {
  if (!(!r || typeof r != "function")) {
    if (o !== void 0) {
      r(t, s, o);
      return;
    }
    if (s !== void 0) {
      r(t, s);
      return;
    }
    r(t);
  }
}, ie = (r, t) => {
  if (ps) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, $t = (r, t) => {
  if (ps) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, ti = (r) => {
  r.llTempImage = document.createElement("IMG");
}, ei = (r) => {
  delete r.llTempImage;
}, ks = (r) => r.llTempImage, ze = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, ri = (r) => {
  r.disconnect();
}, si = (r, t, s) => {
  t.unobserve_entered && ze(r, s);
}, br = (r, t) => {
  r && (r.loadingCount += t);
}, oi = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, t) => {
  r && (r.toLoadCount = t);
}, ni = (r) => r.loadingCount > 0, ii = (r) => r.toLoadCount > 0, Cs = (r) => {
  let t = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && t.push(o);
  return t;
}, yr = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Cs(s).forEach(t);
}, Ms = (r, t) => {
  Cs(r).forEach(t);
}, He = [Pt], Es = [Pt, vs], be = [Pt, hr, fr], $s = [bs], Ue = (r) => !!r[we], Ts = (r) => r[we], Is = (r) => delete r[we], se = (r, t) => {
  if (Ue(r))
    return;
  const s = {};
  t.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[we] = s;
}, ai = (r) => {
  Ue(r) || (r[we] = { backgroundImage: r.style.backgroundImage });
}, li = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Xt = (r, t) => {
  if (!Ue(r))
    return;
  const s = Ts(r);
  t.forEach((o) => {
    li(r, o, s[o]);
  });
}, ci = (r) => {
  if (!Ue(r))
    return;
  const t = Ts(r);
  r.style.backgroundImage = t.backgroundImage;
}, As = (r, t, s) => {
  ie(r, t.class_applied), qt(r, Ss), s && (t.unobserve_completed && ze(r, t), Ut(t.callback_applied, r, s));
}, Ls = (r, t, s) => {
  ie(r, t.class_loading), qt(r, pr), s && (br(s, 1), Ut(t.callback_loading, r, s));
}, zt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, Br = (r, t) => {
  zt(r, fr, ft(r, t.data_sizes)), zt(r, hr, ft(r, t.data_srcset)), zt(r, Pt, ft(r, t.data_src));
}, ui = (r, t) => {
  yr(r, (s) => {
    se(s, be), Br(s, t);
  }), se(r, be), Br(r, t);
}, di = (r, t) => {
  se(r, He), zt(r, Pt, ft(r, t.data_src));
}, hi = (r, t) => {
  Ms(r, (s) => {
    se(s, He), zt(s, Pt, ft(s, t.data_src));
  }), se(r, Es), zt(r, vs, ft(r, t.data_poster)), zt(r, Pt, ft(r, t.data_src)), r.load();
}, fi = (r, t) => {
  se(r, $s), zt(r, bs, ft(r, t.data_src));
}, pi = (r, t, s) => {
  const o = ft(r, t.data_bg), l = ft(r, t.data_bg_hidpi), i = gs && l ? l : o;
  i && (r.style.backgroundImage = `url("${i}")`, ks(r).setAttribute(Pt, i), Ls(r, t, s));
}, gi = (r, t, s) => {
  const o = ft(r, t.data_bg_multi), l = ft(r, t.data_bg_multi_hidpi), i = gs && l ? l : o;
  i && (r.style.backgroundImage = i, As(r, t, s));
}, mi = (r, t, s) => {
  const o = ft(r, t.data_bg_set);
  if (!o)
    return;
  const l = o.split("|");
  let i = l.map((d) => `image-set(${d})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = l.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = i.join()), As(r, t, s);
}, Os = {
  IMG: ui,
  IFRAME: di,
  VIDEO: hi,
  OBJECT: fi
}, vi = (r, t) => {
  const s = Os[r.tagName];
  s && s(r, t);
}, bi = (r, t, s) => {
  const o = Os[r.tagName];
  o && (o(r, t), Ls(r, t, s));
}, yi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], Si = (r) => yi.indexOf(r.tagName) > -1, Ps = (r, t) => {
  t && !ni(t) && !ii(t) && Ut(r.callback_finish, t);
}, zr = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, wi = (r, t, s) => {
  r.removeEventListener(t, s);
}, Sr = (r) => !!r.llEvLisnrs, _i = (r, t, s) => {
  Sr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  zr(r, o, t), zr(r, "error", s);
}, er = (r) => {
  if (!Sr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const o = t[s];
    wi(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ns = (r, t, s) => {
  ei(r), br(s, -1), oi(s), $t(r, t.class_loading), t.unobserve_completed && ze(r, s);
}, xi = (r, t, s, o) => {
  const l = vr(t);
  Ns(t, s, o), ie(t, s.class_loaded), qt(t, ys), Ut(s.callback_loaded, t, o), l || Ps(s, o);
}, ki = (r, t, s, o) => {
  const l = vr(t);
  Ns(t, s, o), ie(t, s.class_error), qt(t, gr), Ut(s.callback_error, t, o), s.restore_on_error && Xt(t, be), l || Ps(s, o);
}, wr = (r, t, s) => {
  const o = ks(r) || r;
  if (Sr(o))
    return;
  _i(o, (d) => {
    xi(d, r, t, s), er(o);
  }, (d) => {
    ki(d, r, t, s), er(o);
  });
}, Di = (r, t, s) => {
  ti(r), wr(r, t, s), ai(r), pi(r, t, s), gi(r, t, s), mi(r, t, s);
}, Ci = (r, t, s) => {
  wr(r, t, s), bi(r, t, s);
}, _r = (r, t, s) => {
  Si(r) ? Ci(r, t, s) : Di(r, t, s);
}, Mi = (r, t, s) => {
  r.setAttribute("loading", "lazy"), wr(r, t, s), vi(r, t), qt(r, ws);
}, Hr = (r) => {
  r.removeAttribute(Pt), r.removeAttribute(hr), r.removeAttribute(fr);
}, Ei = (r) => {
  yr(r, (t) => {
    Hr(t);
  }), Hr(r);
}, js = (r) => {
  yr(r, (t) => {
    Xt(t, be);
  }), Xt(r, be);
}, $i = (r) => {
  Ms(r, (t) => {
    Xt(t, He);
  }), Xt(r, Es), r.load();
}, Ti = (r) => {
  Xt(r, He);
}, Ii = (r) => {
  Xt(r, $s);
}, Ai = {
  IMG: js,
  IFRAME: Ti,
  VIDEO: $i,
  OBJECT: Ii
}, Li = (r) => {
  const t = Ai[r.tagName];
  if (!t) {
    ci(r);
    return;
  }
  t(r);
}, Oi = (r, t) => {
  mr(r) || vr(r) || ($t(r, t.class_entered), $t(r, t.class_exited), $t(r, t.class_applied), $t(r, t.class_loading), $t(r, t.class_loaded), $t(r, t.class_error));
}, Pi = (r, t) => {
  Li(r), Oi(r, t), Be(r), Is(r);
}, Ni = (r, t, s, o) => {
  s.cancel_on_exit && qn(r) && r.tagName === "IMG" && (er(r), Ei(r), js(r), $t(r, s.class_loading), br(o, -1), Be(r), Ut(s.callback_cancel, r, t, o));
}, ji = (r, t, s, o) => {
  const l = Qn(r);
  qt(r, Zn), ie(r, s.class_entered), $t(r, s.class_exited), si(r, s, o), Ut(s.callback_enter, r, t, o), !l && _r(r, s, o);
}, Ri = (r, t, s, o) => {
  mr(r) || (ie(r, s.class_exited), Ni(r, t, s, o), Ut(s.callback_exit, r, t, o));
}, Vi = ["IMG", "IFRAME", "VIDEO"], Rs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Bi = (r, t, s) => {
  r.forEach((o) => {
    Vi.indexOf(o.tagName) !== -1 && Mi(o, t, s);
  }), Ds(s, 0);
}, zi = (r) => r.isIntersecting || r.intersectionRatio > 0, Hi = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Ui = (r, t, s) => {
  r.forEach(
    (o) => zi(o) ? ji(o.target, o, t, s) : Ri(o.target, o, t, s)
  );
}, Ki = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, Yi = (r, t) => {
  ri(r), Ki(r, t);
}, Wi = (r, t) => {
  !fs || Rs(r) || (t._observer = new IntersectionObserver((s) => {
    Ui(s, r, t);
  }, Hi(r)));
}, Vs = (r) => Array.prototype.slice.call(r), Ne = (r) => r.container.querySelectorAll(r.elements_selector), Xi = (r) => Vs(r).filter(mr), Zi = (r) => Gn(r), Fi = (r) => Vs(r).filter(Zi), Ur = (r, t) => Xi(r || Ne(t)), qi = (r, t) => {
  Fi(Ne(r)).forEach((o) => {
    $t(o, r.class_error), Be(o);
  }), t.update();
}, Gi = (r, t) => {
  Ht && (t._onlineHandler = () => {
    qi(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Ji = (r) => {
  Ht && window.removeEventListener("online", r._onlineHandler);
}, xe = function(r, t) {
  const s = ms(r);
  this._settings = s, this.loadingCount = 0, Wi(s, this), Gi(s, this), this.update(t);
};
xe.prototype = {
  update: function(r) {
    const t = this._settings, s = Ur(r, t);
    if (Ds(this, s.length), hs || !fs) {
      this.loadAll(s);
      return;
    }
    if (Rs(t)) {
      Bi(s, t, this);
      return;
    }
    Yi(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Ji(this), Ne(this._settings).forEach((r) => {
      Is(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Ur(r, t).forEach((o) => {
      ze(o, this), _r(o, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Ne(r).forEach((t) => {
      Pi(t, r);
    });
  }
};
xe.load = (r, t) => {
  const s = ms(t);
  _r(r, s);
};
xe.resetStatus = (r) => {
  Be(r);
};
Ht && Xn(xe, window.lazyLoadOptions);
const Qi = { class: "relative flex-auto flex flex-col overflow-hidden" }, ta = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, ea = { class: "absolute" }, ra = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), sa = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, oa = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], na = { class: "grid grid-cols-12 items-center" }, ia = { class: "flex col-span-7 items-center" }, aa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, la = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ca = [
  la
], ua = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, da = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ha = [
  da
], fa = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, pa = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ga = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ma = { class: "grid grid-cols-12 items-center" }, va = { class: "flex col-span-7 items-center" }, ba = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ya = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Sa = [
  ya
], wa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, _a = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), xa = [
  _a
], ka = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Da = { class: "col-span-2 text-center" }, Ca = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Ma = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Ea = { class: "relative" }, $a = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ta = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ia = [
  Ta
], Aa = ["data-src", "alt"], La = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Oa = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Pa = [
  Oa
], Na = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, ja = { class: "break-all" }, Ra = {
  name: "VFExplorer"
}, Va = /* @__PURE__ */ Object.assign(Ra, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r, s = N("emitter"), { setStore: o, getStore: l } = N("storage"), i = N("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), g = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), a = L(null), v = L(null), p = L(0), b = L(null), { t: S } = N("i18n"), I = Math.floor(Math.random() * 2 ** 32), $ = L(l("full-screen", !1)), M = new xe();
    s.on("vf-fullscreen-toggle", () => {
      a.value.style.height = null, $.value = !$.value, o("full-screen", $.value);
    });
    const T = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      T.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: A
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let H = null;
    const z = () => {
      H && clearTimeout(H);
    }, P = L(!0), V = (A) => {
      A.touches.length > 1 && (P.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), P.value = !P.value);
    }, Z = (A) => {
      H = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(R);
      }, 500);
    }, k = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: A.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: A });
    }, j = Le({ active: !1, column: "", order: "" }), G = (A = !0) => {
      let R = [...t.data.files], O = j.column, tt = j.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (_t, yt) => typeof _t == "string" && typeof yt == "string" ? _t.toLowerCase().localeCompare(yt.toLowerCase()) : _t < yt ? -1 : _t > yt ? 1 : 0;
      return j.active && (R = R.slice().sort((_t, yt) => U(_t[O], yt[O]) * tt)), R;
    }, ot = (A) => {
      j.active && j.column == A ? (j.active = j.order == "asc", j.column = A, j.order = "desc") : (j.active = !0, j.column = A, j.order = "asc");
    }, rt = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ut = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(rt()));
    }, bt = (A, R) => {
      A.preventDefault();
      let O = JSON.parse(A.dataTransfer.getData("items"));
      if (O.find((tt) => tt.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: O, to: R } });
    }, pt = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((O) => O == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Mt(() => {
      b.value = new On({
        area: a.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Ve(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + I));
      })), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const O = A.target.offsetWidth - A.offsetX, tt = A.target.offsetHeight - A.offsetY;
          O < 15 && tt < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", rt()), p.value = b.value.getSelection().length;
      });
    }), Po(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), M.update();
    }), Mt(() => {
      Re(() => t.view, () => s.emit("vf-explorer-update"));
    }), (A, R) => (w(), D("div", Qi, [
      r.view == "list" || T.value.length ? (w(), D("div", ta, [
        f("div", {
          onClick: R[0] || (R[0] = (O) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          et(E(x(S)("Name")) + " ", 1),
          vt(Ct(Te, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, j.active && j.column == "basename"]
          ])
        ]),
        T.value.length ? X("", !0) : (w(), D("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          et(E(x(S)("Size")) + " ", 1),
          vt(Ct(Te, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, j.active && j.column == "file_size"]
          ])
        ])),
        T.value.length ? X("", !0) : (w(), D("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          et(E(x(S)("Date")) + " ", 1),
          vt(Ct(Te, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, j.active && j.column == "last_modified"]
          ])
        ])),
        T.value.length ? (w(), D("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          et(E(x(S)("Filepath")) + " ", 1),
          vt(Ct(Te, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [me, j.active && j.column == "path"]
          ])
        ])) : X("", !0)
      ])) : X("", !0),
      f("div", ea, [
        f("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          ra,
          f("div", sa, E(p.value), 1)
        ], 512)
      ]),
      f("div", {
        onTouchstart: V,
        onContextmenu: R[10] || (R[10] = Wt((O) => x(s).emit("vf-contextmenu-show", { event: O, area: a.value, items: rt() }), ["self", "prevent"])),
        class: ct([$.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: a
      }, [
        T.value.length ? (w(!0), D(lt, { key: 0 }, wt(G(), (O, tt) => (w(), D("div", {
          onDblclick: (U) => k(O),
          onTouchstart: R[4] || (R[4] = (U) => Z(U)),
          onTouchend: R[5] || (R[5] = (U) => z()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: rt(), target: O }), ["prevent"]),
          class: ct(["vf-item-" + x(I), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", na, [
            f("div", ia, [
              O.type == "dir" ? (w(), D("svg", aa, ca)) : (w(), D("svg", ua, ha)),
              f("span", fa, E(O.basename), 1)
            ]),
            f("div", pa, E(O.path), 1)
          ])
        ], 42, oa))), 256)) : X("", !0),
        r.view == "list" && !T.value.length ? (w(!0), D(lt, { key: 1 }, wt(G(), (O, tt) => (w(), D("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[6] || (R[6] = (U) => Z(U)),
          onTouchend: R[7] || (R[7] = (U) => z()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: rt(), target: O }), ["prevent"]),
          onDragstart: (U) => ut(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => bt(U, O),
          class: ct(["vf-item-" + x(I), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", ma, [
            f("div", va, [
              O.type == "dir" ? (w(), D("svg", ba, Sa)) : (w(), D("svg", wa, xa)),
              f("span", ka, E(O.basename), 1)
            ]),
            f("div", Da, E(O.file_size ? x(us)(O.file_size) : ""), 1),
            f("div", Ca, E(x(ds)(O.last_modified)), 1)
          ])
        ], 42, ga))), 256)) : X("", !0),
        r.view == "grid" && !T.value.length ? (w(!0), D(lt, { key: 2 }, wt(G(!1), (O, tt) => (w(), D("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[8] || (R[8] = (U) => Z(U)),
          onTouchend: R[9] || (R[9] = (U) => z()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: rt(), target: O }), ["prevent"]),
          onDragstart: (U) => ut(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => bt(U, O),
          class: ct(["vf-item-" + x(I), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", null, [
            f("div", Ea, [
              O.type == "dir" ? (w(), D("svg", $a, Ia)) : (O.mime_type ?? "").startsWith("image") ? (w(), D("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(tr)(x(i).value, O.path),
                alt: O.basename
              }, null, 8, Aa)) : (w(), D("svg", La, Pa)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (w(), D("div", Na, E(d(O.extension)), 1)) : X("", !0)
            ]),
            f("span", ja, E(g(O.basename)), 1)
          ])
        ], 42, Ma))), 256)) : X("", !0)
      ], 34),
      Ct(Kn)
    ]));
  }
}), Ba = "1.2.8", za = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ha = { class: "flex leading-5 items-center" }, Ua = ["aria-label"], Ka = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Ya = [
  Ka
], Wa = ["value"], Xa = { class: "ml-3" }, Za = { key: 0 }, Fa = { class: "ml-1" }, qa = { class: "flex leading-5 items-center" }, Ga = {
  value: "",
  disabled: ""
}, Ja = /* @__PURE__ */ No('<option value="en">English</option><option value="fr">French (Français)</option><option value="de">German (Deutsch)</option><option value="tr">Hebrew (עִברִית)</option><option value="hi">Hindi (हिंदी)</option><option value="fa">Persian (فارسی)</option><option value="ru">Russian (Pусский)</option><option value="sv">Swedish (Svenska)</option><option value="tr">Turkish (Türkçe)</option>', 9), Qa = ["aria-label"], tl = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), el = [
  tl
], rl = {
  name: "VFStatusbar"
}, sl = /* @__PURE__ */ Object.assign(rl, {
  props: {
    data: Object
  },
  setup(r) {
    const t = N("emitter"), { getStore: s, setStore: o } = N("storage"), l = L(0), i = N("adapter"), { t: d, changeLocale: g } = N("i18n"), a = L(s("locale", "")), v = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), o("adapter", i.value);
    };
    t.on("vf-nodes-selected", (b) => {
      l.value = b.length;
    });
    const p = L("");
    return t.on("vf-search-query", ({ newQuery: b }) => {
      p.value = b;
    }), (b, S) => (w(), D("div", za, [
      f("div", Ha, [
        f("div", {
          class: "mx-2",
          "aria-label": x(d)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ya, 8, Ua),
        vt(f("select", {
          "onUpdate:modelValue": S[0] || (S[0] = (I) => as(i) ? i.value = I : null),
          onChange: v,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (w(!0), D(lt, null, wt(r.data.storages, (I) => (w(), D("option", { value: I }, E(I), 9, Wa))), 256))
        ], 544), [
          [jr, x(i)]
        ]),
        f("div", Xa, [
          p.value.length ? (w(), D("span", Za, E(r.data.files.length) + " items found. ", 1)) : X("", !0),
          f("span", Fa, E(l.value > 0 ? l.value + " " + x(d)("item(s) selected.") : ""), 1)
        ])
      ]),
      f("div", qa, [
        vt(f("select", {
          "onUpdate:modelValue": S[1] || (S[1] = (I) => a.value = I),
          onChange: S[2] || (S[2] = (I) => x(g)(I.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          f("option", Ga, E(x(d)("Language")), 1),
          Ja
        ], 544), [
          [jr, a.value]
        ]),
        f("span", {
          class: "mr-1",
          "aria-label": x(d)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: S[3] || (S[3] = (I) => x(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(Ba), message: x(d)("Vuefinder is a file manager component for vue 3.") }))
        }, el, 8, Qa)
      ])
    ]));
  }
}), ol = (r, t = 0, s = !1) => {
  let o;
  return (...l) => {
    s && !o && r(...l), clearTimeout(o), o = setTimeout(() => {
      r(...l);
    }, t);
  };
}, nl = (r, t, s) => {
  const o = L(r);
  return jo((i, d) => ({
    get() {
      return i(), o.value;
    },
    set: ol(
      (g) => {
        o.value = g, d();
      },
      t,
      s
    )
  }));
}, il = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, al = ["aria-label"], ll = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), cl = [
  ll
], ul = ["aria-label"], dl = /* @__PURE__ */ f("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), hl = [
  dl
], fl = ["aria-label"], pl = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), gl = [
  pl
], ml = /* @__PURE__ */ f("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), vl = [
  ml
], bl = { class: "flex leading-5" }, yl = /* @__PURE__ */ f("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Sl = ["title", "onClick"], wl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, _l = /* @__PURE__ */ f("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), xl = /* @__PURE__ */ f("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), kl = [
  _l,
  xl
], Dl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, Cl = /* @__PURE__ */ f("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Ml = /* @__PURE__ */ f("div", { class: "w-full" }, null, -1), El = ["placeholder"], $l = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Tl = [
  $l
], Il = {
  name: "VFBreadcrumb"
}, Al = /* @__PURE__ */ Object.assign(Il, {
  props: {
    data: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), o = L(null), l = L([]), i = L(!1), d = L(null), g = r, { t: a } = N("i18n"), v = N("loadingState");
    t.on("vf-explorer-update", () => {
      let z = [], P = [];
      o.value = g.data.dirname ?? s.value + "://", o.value.length == 0 && (l.value = []), o.value.replace(s.value + "://", "").split("/").forEach(function(V) {
        z.push(V), z.join("/") != "" && P.push({
          basename: V,
          name: V,
          path: s.value + "://" + z.join("/"),
          type: "dir"
        });
      }), P.length > 4 && (P = P.slice(-5), P[0].name = ".."), l.value = P;
    });
    const p = () => {
      i.value = !1, S.value = "";
    };
    t.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      i.value = !0, Ve(() => d.value.focus());
    }, S = nl("", 400), I = () => v.value;
    Re(S, (z) => {
      t.emit("vf-toast-clear"), t.emit("vf-search-query", { newQuery: z });
    });
    const $ = () => l.value.length && !i.value, M = (z) => {
      z.preventDefault();
      let P = JSON.parse(z.dataTransfer.getData("items"));
      if (P.find((V) => V.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", {
        type: "move",
        items: { from: P, to: l.value[l.value.length - 2] ?? { path: s.value + "://" } }
      });
    }, T = (z) => {
      z.preventDefault(), $() ? z.dataTransfer.dropEffect = "copy" : (z.dataTransfer.dropEffect = "none", z.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && p();
    };
    return (z, P) => (w(), D("div", il, [
      f("span", {
        "aria-label": x(a)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), D("svg", {
          onDragover: P[0] || (P[0] = (V) => T(V)),
          onDrop: P[1] || (P[1] = (V) => M(V)),
          onClick: P[2] || (P[2] = (V) => {
            var Z;
            return !$() || x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((Z = l.value[l.value.length - 2]) == null ? void 0 : Z.path) ?? x(s) + "://" } });
          }),
          class: ct(["h-6 w-6 p-0.5 rounded", $() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, cl, 34))
      ], 8, al),
      I() ? (w(), D("span", {
        key: 1,
        "aria-label": x(a)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), D("svg", {
          onClick: P[4] || (P[4] = (V) => x(t).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, gl))
      ], 8, fl)) : (w(), D("span", {
        key: 0,
        "aria-label": x(a)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), D("svg", {
          onClick: P[3] || (P[3] = (V) => {
            x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, hl))
      ], 8, ul)),
      i.value ? (w(), D("div", Dl, [
        Cl,
        Ml,
        vt(f("input", {
          ref_key: "searchInput",
          ref: d,
          onKeydown: oe(p, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": P[6] || (P[6] = (V) => as(S) ? S.value = V : null),
          placeholder: x(a)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, El), [
          [ne, x(S)]
        ]),
        (w(), D("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, Tl))
      ])) : (w(), D("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(b, ["self"])
      }, [
        (w(), D("svg", {
          onClick: P[5] || (P[5] = (V) => x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, vl)),
        f("div", bl, [
          (w(!0), D(lt, null, wt(l.value, (V, Z) => (w(), D("div", { key: Z }, [
            yl,
            f("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: V.basename,
              onClick: (k) => x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: V.path } })
            }, E(V.name), 9, Sl)
          ]))), 128))
        ]),
        I() ? (w(), D("svg", wl, kl)) : X("", !0)
      ]))
    ]));
  }
}), Ll = ["onClick"], Ol = /* @__PURE__ */ f("span", { class: "px-1" }, null, -1), Pl = {
  name: "VFContextMenu"
}, Nl = /* @__PURE__ */ Object.assign(Pl, {
  props: {
    current: Object
  },
  setup(r) {
    const t = N("emitter"), s = L(null), { apiUrl: o } = At(), l = r, i = Le({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = L([]);
    t.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: g } = N("i18n"), a = {
      newfolder: {
        title: () => g("New Folder"),
        action: () => {
          t.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => g("Delete"),
        action: () => {
          t.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => g("Refresh"),
        action: () => {
          t.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: l.current.dirname } });
        }
      },
      preview: {
        title: () => g("Preview"),
        action: () => {
          t.emit("vf-modal-show", { type: "preview", adapter: l.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => g("Open"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => g("Open containing folder"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => g("Download"),
        action: () => {
          const S = o.value + "?" + Ft({ q: "download", adapter: l.current.adapter, path: d.value[0].path });
          t.emit("vf-download", S);
        }
      },
      archive: {
        title: () => g("Archive"),
        action: () => {
          t.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => g("Unarchive"),
        action: () => {
          t.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => g("Rename"),
        action: () => {
          t.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, v = (S) => {
      t.emit("vf-contextmenu-hide"), S.action();
    }, p = L("");
    t.on("vf-search-query", ({ newQuery: S }) => {
      p.value = S;
    }), t.on("vf-contextmenu-show", ({ event: S, area: I, items: $, target: M = null }) => {
      if (i.items = [], p.value)
        if (M)
          i.items.push(a.openDir), t.emit("vf-context-selected", [M]);
        else
          return;
      else
        !M && !p.value ? (i.items.push(a.refresh), i.items.push(a.newfolder), t.emit("vf-context-selected", [])) : $.length > 1 && $.some((T) => T.path === M.path) ? (i.items.push(a.refresh), i.items.push(a.archive), i.items.push(a.delete), t.emit("vf-context-selected", $)) : (M.type == "dir" ? i.items.push(a.open) : (i.items.push(a.preview), i.items.push(a.download)), i.items.push(a.rename), M.mime_type == "application/zip" ? i.items.push(a.unarchive) : i.items.push(a.archive), i.items.push(a.delete), t.emit("vf-context-selected", [M]));
      b(S, I);
    }), t.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const b = (S, I) => {
      i.active = !0, Ve(() => {
        let $ = I.getBoundingClientRect(), M = S.pageX, T = S.pageY, H = s.value.offsetHeight, z = s.value.offsetWidth;
        M = $.right - S.pageX + window.scrollX < z ? M - z : M, T = $.bottom - S.pageY + window.scrollY < H ? T - H : T, i.positions = {
          left: M + "px",
          top: T + "px"
        };
      });
    };
    return (S, I) => i.active ? (w(), D("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: ls(i.positions)
    }, [
      (w(!0), D(lt, null, wt(i.items, ($) => (w(), D("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: $.title,
        onClick: (M) => v($)
      }, [
        Ol,
        f("span", null, E($.title()), 1)
      ], 8, Ll))), 128))
    ], 4)) : X("", !0);
  }
}), jl = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(l.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Rl(r) {
  const t = await jl(/* @__PURE__ */ Object.assign({ "../locales/de.json": () => import("./de-7cc8715d.js"), "../locales/en.json": () => import("./en-7468722e.js"), "../locales/fa.json": () => import("./fa-edcf6a05.js"), "../locales/he.json": () => import("./he-3e4155f0.js"), "../locales/hi.json": () => import("./hi-da54379d.js"), "../locales/ru.json": () => import("./ru-98cf54ad.js"), "../locales/sv.json": () => import("./sv-4c7b3cd7.js"), "../locales/tr.json": () => import("./tr-1ee5cec3.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function Vl(r, t, s) {
  const { getStore: o, setStore: l } = Qe(r), i = L({}), d = (v, p = "en") => {
    Rl(v).then((b) => {
      i.value = b, l("locale", v), l("translations", b), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((b) => {
      p ? (s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d(p, null)) : s.emit("vf-toast-push", { label: "Locale cannot be loaded!", type: "error" });
    });
  };
  o("locale") ? i.value = o("translations") : d(t);
  const g = (v, ...p) => p.length ? g(v = v.replace("%s", p.shift()), ...p) : v;
  function a(v, ...p) {
    return i.value.hasOwnProperty(v) ? g(i.value[v], ...p) : g(v, ...p);
  }
  return { t: a, changeLocale: d };
}
const Bl = { class: "vuefinder" }, zl = /* @__PURE__ */ f("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Hl = {
  name: "VueFinder"
}, Ul = /* @__PURE__ */ Object.assign(Hl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    usePropDarkMode: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  emits: ["selected"],
  setup(r, { emit: t }) {
    const s = r, o = Bo(), { setStore: l, getStore: i } = Qe(s.id), d = L(i("adapter"));
    jt("emitter", o), jt("storage", Qe(s.id)), jt("postData", s.postData), jt("adapter", d), jt("maxFileSize", s.maxFileSize), jt("usePropDarkMode", s.usePropDarkMode);
    const g = Vl(s.id, s.locale, o);
    jt("i18n", g);
    const { apiUrl: a, setApiUrl: v } = At();
    v(s.url);
    const p = Le({ adapter: d.value, storages: [], dirname: ".", files: [] }), b = L(i("viewport", "grid")), S = s.usePropDarkMode ? Ro(() => s.dark) : L(i("darkMode", s.dark));
    o.on("vf-darkMode-toggle", () => {
      S.value = !S.value, l("darkMode", S.value);
    });
    const I = L(!1);
    jt("loadingState", I);
    const $ = L(i("full-screen", !1));
    o.on("vf-fullscreen-toggle", () => {
      $.value = !$.value, l("full-screen", $.value);
    }), o.on("vf-view-toggle", (P) => {
      b.value = P;
    });
    const M = Le({
      active: !1,
      type: "delete",
      data: {}
    });
    o.on("vf-modal-close", () => {
      M.active = !1;
    }), o.on("vf-modal-show", (P) => {
      M.active = !0, M.type = P.type, M.data = P;
    });
    const T = (P) => {
      Object.assign(p, P), o.emit("vf-nodes-selected", {}), o.emit("vf-explorer-update");
    };
    let H;
    o.on("vf-fetch-abort", () => {
      H.abort(), I.value = !1;
    }), o.on("vf-fetch", ({ params: P, onSuccess: V = null, onError: Z = null }) => {
      ["index", "search"].includes(P.q) && (H && H.abort(), I.value = !0), H = new AbortController();
      const k = H.signal;
      Pe(a.value, { params: P, signal: k }).then((j) => {
        d.value = j.adapter, ["index", "search"].includes(P.q) && (I.value = !1), o.emit("vf-modal-close"), T(j), V(j);
      }).catch((j) => {
        Z && Z(j);
      }).finally(() => {
      });
    }), o.on("vf-download", (P) => {
      document.getElementById("download_frame").src = P, o.emit("vf-modal-close");
    });
    const z = t;
    return o.on("vf-nodes-selected", (P) => {
      z("selected", P);
    }), Mt(() => {
      o.emit("vf-fetch", { params: { q: "index", adapter: d.value } });
    }), (P, V) => (w(), D("div", Bl, [
      f("div", {
        class: ct(x(S) ? "dark" : "")
      }, [
        f("div", {
          class: ct([$.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: ls($.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: V[0] || (V[0] = (Z) => x(o).emit("vf-contextmenu-hide")),
          onTouchstart: V[1] || (V[1] = (Z) => x(o).emit("vf-contextmenu-hide"))
        }, [
          Ct(Tn, { data: p }, null, 8, ["data"]),
          Ct(Al, { data: p }, null, 8, ["data"]),
          Ct(Va, {
            view: b.value,
            data: p
          }, null, 8, ["view", "data"]),
          Ct(sl, { data: p }, null, 8, ["data"])
        ], 38),
        M.active ? (w(), q(Vo("v-f-modal-" + M.type), {
          key: 0,
          selection: M.data,
          current: p
        }, null, 8, ["selection", "current"])) : X("", !0),
        Ct(Nl, { current: p }, null, 8, ["current"]),
        zl
      ], 2)
    ]));
  }
}), Kl = /* @__PURE__ */ f("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Yl = { class: "fixed z-10 inset-0 overflow-hidden" }, Wl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Xl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Zl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Lt = {
  __name: "ModalLayout",
  setup(r) {
    const t = N("emitter");
    return Mt(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), D("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = oe((l) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Kl,
      f("div", Yl, [
        f("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Wt((l) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          f("div", Wl, [
            f("div", Xl, [
              Je(s.$slots, "default")
            ]),
            f("div", Zl, [
              Je(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Fl = ["aria-label"], ql = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Gl = [
  ql
], Jl = {
  name: "Message"
}, Ot = /* @__PURE__ */ Object.assign(Jl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var a;
    const { t: s } = N("i18n"), o = L(!1), l = L(null), i = L((a = l.value) == null ? void 0 : a.strMessage), d = t;
    Re(i, () => o.value = !1);
    const g = () => {
      d("hidden"), o.value = !0;
    };
    return (v, p) => (w(), D("div", null, [
      o.value ? X("", !0) : (w(), D("div", {
        key: 0,
        ref_key: "strMessage",
        ref: l,
        class: ct(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Je(v.$slots, "default"),
        f("div", {
          class: "ml-auto cursor-pointer",
          onClick: g,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Gl, 8, Fl)
      ], 2))
    ]));
  }
}), Ql = { class: "sm:flex sm:items-start" }, tc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), ec = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, rc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, sc = { class: "mt-2" }, oc = { class: "text-sm text-gray-500" }, nc = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ic = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ac = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), lc = [
  ac
], cc = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, uc = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), dc = [
  uc
], hc = { class: "ml-1.5" }, fc = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, pc = {
  name: "VFModalDelete"
}, gc = /* @__PURE__ */ Object.assign(pc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = L(l.selection.items), d = L(""), g = () => {
      i.value.length && t.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: v }) => ({ path: a, type: v })))
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("Files deleted.") });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Delete!")), 1),
        f("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1),
        f("div", fc, E(x(o)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        f("div", Ql, [
          tc,
          f("div", ec, [
            f("h3", rc, E(x(o)("Delete files")), 1),
            f("div", sc, [
              f("p", oc, E(x(o)("Are you sure you want to delete these files?")), 1),
              (w(!0), D(lt, null, wt(i.value, (p) => (w(), D("p", nc, [
                p.type == "dir" ? (w(), D("svg", ic, lc)) : (w(), D("svg", cc, dc)),
                f("span", hc, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), mc = { class: "sm:flex sm:items-start" }, vc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), bc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, yc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Sc = { class: "mt-2" }, wc = { class: "text-sm text-gray-500" }, _c = {
  name: "VFModalMessage"
}, xc = /* @__PURE__ */ Object.assign(_c, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = N("emitter"), { t: s } = N("i18n");
    return (o, l) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l[0] || (l[0] = (i) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var i, d;
        return [
          f("div", mc, [
            vc,
            f("div", bc, [
              f("h3", yc, E(((i = r.selection) == null ? void 0 : i.title) ?? "Title"), 1),
              f("div", Sc, [
                f("p", wc, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), kc = { class: "sm:flex sm:items-start" }, Dc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Cc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Mc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ec = { class: "mt-2" }, $c = { class: "text-sm text-gray-500" }, Tc = ["placeholder"], Ic = {
  name: "VFModalNewFolder"
}, Ac = /* @__PURE__ */ Object.assign(Ic, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = L(""), d = L(""), g = () => {
      i.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: s.value,
          path: l.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("%s is created.", i.value) });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Create")), 1),
        f("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", kc, [
          Dc,
          f("div", Cc, [
            f("h3", Mc, E(x(o)("New Folder")), 1),
            f("div", Ec, [
              f("p", $c, E(x(o)("Create a new folder")), 1),
              vt(f("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => i.value = p),
                onKeyup: oe(g, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Folder Name"),
                type: "text"
              }, null, 40, Tc), [
                [ne, i.value]
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Lc = { class: "sm:flex sm:items-start" }, Oc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Nc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, jc = { class: "mt-2" }, Rc = { class: "text-sm text-gray-500" }, Vc = ["placeholder"], Bc = {
  name: "VFModalNewFile"
}, zc = /* @__PURE__ */ Object.assign(Bc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = L(""), d = L(""), g = () => {
      i.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: s.value,
          path: l.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("%s is created.", i.value) });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Create")), 1),
        f("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Lc, [
          Oc,
          f("div", Pc, [
            f("h3", Nc, E(x(o)("New File")), 1),
            f("div", jc, [
              f("p", Rc, E(x(o)("Create a new file")), 1),
              vt(f("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => i.value = p),
                onKeyup: oe(g, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("File Name"),
                type: "text"
              }, null, 40, Vc), [
                [ne, i.value]
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Hc = { class: "flex" }, Uc = ["aria-label"], Kc = { class: "ml-auto mb-2" }, Yc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Wc = { key: 1 }, Xc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = t, o = L(""), l = L(""), i = L(null), d = L(!1), { apiUrl: g } = At(), a = r, v = L(""), p = L(!1), { t: b } = N("i18n");
    Mt(() => {
      Pe(g.value, {
        params: { q: "preview", adapter: a.selection.adapter, path: a.selection.item.path },
        json: !1
      }).then((M) => {
        o.value = M, s("load");
      });
    });
    const S = () => {
      d.value = !d.value, l.value = o.value, d.value == !0 && Ve(() => {
        i.value.focus();
      });
    }, I = N("postData"), $ = () => {
      v.value = "", p.value = !1, Pe(g.value, {
        method: "POST",
        params: Object.assign(I, {
          q: "save",
          adapter: a.selection.adapter,
          path: a.selection.item.path,
          content: l.value
        }),
        json: !1
      }).then((M) => {
        v.value = b("Updated."), o.value = M, s("load"), d.value = !d.value;
      }).catch((M) => {
        v.value = b(M.message), p.value = !0;
      });
    };
    return (M, T) => (w(), D(lt, null, [
      f("div", Hc, [
        f("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Uc),
        f("div", Kc, [
          d.value ? (w(), D("button", {
            key: 0,
            onClick: $,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(b)("Save")), 1)) : X("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: T[0] || (T[0] = (H) => S())
          }, E(d.value ? x(b)("Cancel") : x(b)("Edit")), 1)
        ])
      ]),
      f("div", null, [
        d.value ? (w(), D("div", Wc, [
          vt(f("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": T[1] || (T[1] = (H) => l.value = H),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, l.value]
          ])
        ])) : (w(), D("pre", Yc, E(o.value), 1)),
        v.value.length ? (w(), q(Ot, {
          key: 2,
          onHidden: T[2] || (T[2] = (H) => v.value = ""),
          error: p.value
        }, {
          default: F(() => [
            et(E(v.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : X("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.6.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:44:19.860Z
 */
function Kr(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(r, l).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Bs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kr(Object(s), !0).forEach(function(o) {
      qc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Kr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(r);
}
function Zc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var o = t[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, Hs(o.key), o);
  }
}
function Fc(r, t, s) {
  return t && Yr(r.prototype, t), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function qc(r, t, s) {
  return t = Hs(t), t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function zs(r) {
  return Gc(r) || Jc(r) || Qc(r) || tu();
}
function Gc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Jc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Qc(r, t) {
  if (r) {
    if (typeof r == "string")
      return sr(r, t);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return sr(r, t);
  }
}
function sr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var s = 0, o = new Array(t); s < t; s++)
    o[s] = r[s];
  return o;
}
function tu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eu(r, t) {
  if (typeof r != "object" || r === null)
    return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(r, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Hs(r) {
  var t = eu(r, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Ke = typeof window < "u" && typeof window.document < "u", It = Ke ? window : {}, xr = Ke && It.document.documentElement ? "ontouchstart" in It.document.documentElement : !1, kr = Ke ? "PointerEvent" in It : !1, J = "cropper", Dr = "all", Us = "crop", Ks = "move", Ys = "zoom", Kt = "e", Yt = "w", Jt = "s", Rt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", or = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), ht = "".concat(J, "-hidden"), Xr = "".concat(J, "-hide"), ru = "".concat(J, "-invisible"), je = "".concat(J, "-modal"), nr = "".concat(J, "-move"), ye = "".concat(J, "Action"), Ie = "".concat(J, "Preview"), Cr = "crop", Ws = "move", Xs = "none", ir = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Zr = "dblclick", su = xr ? "touchstart" : "mousedown", ou = xr ? "touchmove" : "mousemove", nu = xr ? "touchend touchcancel" : "mouseup", Fr = kr ? "pointerdown" : su, qr = kr ? "pointermove" : ou, Gr = kr ? "pointerup pointercancel" : nu, Jr = "ready", Qr = "resize", ts = "wheel", ur = "zoom", es = "image/jpeg", iu = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, au = /^data:/, lu = /^data:image\/jpeg;base64,/, cu = /^img|canvas$/i, Zs = 200, Fs = 100, rs = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Cr,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Zs,
  minContainerHeight: Fs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, uu = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', du = Number.isNaN || It.isNaN;
function K(r) {
  return typeof r == "number" && !du(r);
}
var ss = function(t) {
  return t > 0 && t < 1 / 0;
};
function Fe(r) {
  return typeof r > "u";
}
function Zt(r) {
  return rr(r) === "object" && r !== null;
}
var hu = Object.prototype.hasOwnProperty;
function Qt(r) {
  if (!Zt(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && hu.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function dt(r) {
  return typeof r == "function";
}
var fu = Array.prototype.slice;
function qs(r) {
  return Array.from ? Array.from(r) : fu.call(r);
}
function st(r, t) {
  return r && dt(t) && (Array.isArray(r) || K(r.length) ? qs(r).forEach(function(s, o) {
    t.call(r, s, o, r);
  }) : Zt(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
    o[l - 1] = arguments[l];
  return Zt(t) && o.length > 0 && o.forEach(function(i) {
    Zt(i) && Object.keys(i).forEach(function(d) {
      t[d] = i[d];
    });
  }), t;
}, pu = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return pu.test(r) ? Math.round(r * t) / t : r;
}
var gu = /^width|height|left|top|marginLeft|marginTop$/;
function Vt(r, t) {
  var s = r.style;
  st(t, function(o, l) {
    gu.test(l) && K(o) && (o = "".concat(o, "px")), s[l] = o;
  });
}
function mu(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (t) {
    if (K(r.length)) {
      st(r, function(o) {
        at(o, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(t) < 0 && (r.className = "".concat(s, " ").concat(t)) : r.className = t;
  }
}
function Tt(r, t) {
  if (t) {
    if (K(r.length)) {
      st(r, function(s) {
        Tt(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function te(r, t, s) {
  if (t) {
    if (K(r.length)) {
      st(r, function(o) {
        te(o, t, s);
      });
      return;
    }
    s ? at(r, t) : Tt(r, t);
  }
}
var vu = /([a-z\d])([A-Z])/g;
function Mr(r) {
  return r.replace(vu, "$1-$2").toLowerCase();
}
function dr(r, t) {
  return Zt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Mr(t)));
}
function Se(r, t, s) {
  Zt(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Mr(t)), s);
}
function bu(r, t) {
  if (Zt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Mr(t)));
}
var Gs = /\s\s*/, Js = function() {
  var r = !1;
  if (Ke) {
    var t = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(i) {
        t = i;
      }
    });
    It.addEventListener("test", s, o), It.removeEventListener("test", s, o);
  }
  return r;
}();
function Dt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  t.trim().split(Gs).forEach(function(i) {
    if (!Js) {
      var d = r.listeners;
      d && d[i] && d[i][s] && (l = d[i][s], delete d[i][s], Object.keys(d[i]).length === 0 && delete d[i], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, l, o);
  });
}
function St(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  t.trim().split(Gs).forEach(function(i) {
    if (o.once && !Js) {
      var d = r.listeners, g = d === void 0 ? {} : d;
      l = function() {
        delete g[i][s], r.removeEventListener(i, l, o);
        for (var v = arguments.length, p = new Array(v), b = 0; b < v; b++)
          p[b] = arguments[b];
        s.apply(r, p);
      }, g[i] || (g[i] = {}), g[i][s] && r.removeEventListener(i, g[i][s], o), g[i][s] = l, r.listeners = g;
    }
    r.addEventListener(i, l, o);
  });
}
function re(r, t, s) {
  var o;
  return dt(Event) && dt(CustomEvent) ? o = new CustomEvent(t, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !0, !0, s)), r.dispatchEvent(o);
}
function Qs(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var qe = It.location, yu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var t = r.match(yu);
  return t !== null && (t[1] !== qe.protocol || t[2] !== qe.hostname || t[3] !== qe.port);
}
function ns(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function ve(r) {
  var t = r.rotate, s = r.scaleX, o = r.scaleY, l = r.translateX, i = r.translateY, d = [];
  K(l) && l !== 0 && d.push("translateX(".concat(l, "px)")), K(i) && i !== 0 && d.push("translateY(".concat(i, "px)")), K(t) && t !== 0 && d.push("rotate(".concat(t, "deg)")), K(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), K(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var g = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: g,
    msTransform: g,
    transform: g
  };
}
function Su(r) {
  var t = Bs({}, r), s = 0;
  return st(r, function(o, l) {
    delete t[l], st(t, function(i) {
      var d = Math.abs(o.startX - i.startX), g = Math.abs(o.startY - i.startY), a = Math.abs(o.endX - i.endX), v = Math.abs(o.endY - i.endY), p = Math.sqrt(d * d + g * g), b = Math.sqrt(a * a + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ae(r, t) {
  var s = r.pageX, o = r.pageY, l = {
    endX: s,
    endY: o
  };
  return t ? l : Bs({
    startX: s,
    startY: o
  }, l);
}
function wu(r) {
  var t = 0, s = 0, o = 0;
  return st(r, function(l) {
    var i = l.startX, d = l.startY;
    t += i, s += d, o += 1;
  }), t /= o, s /= o, {
    pageX: t,
    pageY: s
  };
}
function Bt(r) {
  var t = r.aspectRatio, s = r.height, o = r.width, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = ss(o), d = ss(s);
  if (i && d) {
    var g = s * t;
    l === "contain" && g > o || l === "cover" && g < o ? s = o / t : o = s * t;
  } else
    i ? s = o / t : d && (o = s * t);
  return {
    width: o,
    height: s
  };
}
function _u(r) {
  var t = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: t
    };
  var l = o % 90 * Math.PI / 180, i = Math.sin(l), d = Math.cos(l), g = t * d + s * i, a = t * i + s * d;
  return o > 90 ? {
    width: a,
    height: g
  } : {
    width: g,
    height: a
  };
}
function xu(r, t, s, o) {
  var l = t.aspectRatio, i = t.naturalWidth, d = t.naturalHeight, g = t.rotate, a = g === void 0 ? 0 : g, v = t.scaleX, p = v === void 0 ? 1 : v, b = t.scaleY, S = b === void 0 ? 1 : b, I = s.aspectRatio, $ = s.naturalWidth, M = s.naturalHeight, T = o.fillColor, H = T === void 0 ? "transparent" : T, z = o.imageSmoothingEnabled, P = z === void 0 ? !0 : z, V = o.imageSmoothingQuality, Z = V === void 0 ? "low" : V, k = o.maxWidth, j = k === void 0 ? 1 / 0 : k, G = o.maxHeight, ot = G === void 0 ? 1 / 0 : G, rt = o.minWidth, ut = rt === void 0 ? 0 : rt, bt = o.minHeight, pt = bt === void 0 ? 0 : bt, gt = document.createElement("canvas"), A = gt.getContext("2d"), R = Bt({
    aspectRatio: I,
    width: j,
    height: ot
  }), O = Bt({
    aspectRatio: I,
    width: ut,
    height: pt
  }, "cover"), tt = Math.min(R.width, Math.max(O.width, $)), U = Math.min(R.height, Math.max(O.height, M)), _t = Bt({
    aspectRatio: l,
    width: j,
    height: ot
  }), yt = Bt({
    aspectRatio: l,
    width: ut,
    height: pt
  }, "cover"), ke = Math.min(_t.width, Math.max(yt.width, i)), De = Math.min(_t.height, Math.max(yt.height, d)), Ye = [-ke / 2, -De / 2, ke, De];
  return gt.width = ee(tt), gt.height = ee(U), A.fillStyle = H, A.fillRect(0, 0, tt, U), A.save(), A.translate(tt / 2, U / 2), A.rotate(a * Math.PI / 180), A.scale(p, S), A.imageSmoothingEnabled = P, A.imageSmoothingQuality = Z, A.drawImage.apply(A, [r].concat(zs(Ye.map(function(Ce) {
    return Math.floor(ee(Ce));
  })))), A.restore(), gt;
}
var to = String.fromCharCode;
function ku(r, t, s) {
  var o = "";
  s += t;
  for (var l = t; l < s; l += 1)
    o += to(r.getUint8(l));
  return o;
}
var Du = /^data:.*,/;
function Cu(r) {
  var t = r.replace(Du, ""), s = atob(t), o = new ArrayBuffer(s.length), l = new Uint8Array(o);
  return st(l, function(i, d) {
    l[d] = s.charCodeAt(d);
  }), o;
}
function Mu(r, t) {
  for (var s = [], o = 8192, l = new Uint8Array(r); l.length > 0; )
    s.push(to.apply(null, qs(l.subarray(0, o)))), l = l.subarray(o);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function Eu(r) {
  var t = new DataView(r), s;
  try {
    var o, l, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var d = t.byteLength, g = 2; g + 1 < d; ) {
        if (t.getUint8(g) === 255 && t.getUint8(g + 1) === 225) {
          l = g;
          break;
        }
        g += 1;
      }
    if (l) {
      var a = l + 4, v = l + 10;
      if (ku(t, a, 4) === "Exif") {
        var p = t.getUint16(v);
        if (o = p === 18761, (o || p === 19789) && t.getUint16(v + 2, o) === 42) {
          var b = t.getUint32(v + 4, o);
          b >= 8 && (i = v + b);
        }
      }
    }
    if (i) {
      var S = t.getUint16(i, o), I, $;
      for ($ = 0; $ < S; $ += 1)
        if (I = i + $ * 12 + 2, t.getUint16(I, o) === 274) {
          I += 8, s = t.getUint16(I, o), t.setUint16(I, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function $u(r) {
  var t = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      t = 90, o = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, s = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: s,
    scaleY: o
  };
}
var Tu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, o = this.container, l = this.cropper, i = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    at(l, ht), Tt(t, ht);
    var g = {
      width: Math.max(o.offsetWidth, i >= 0 ? i : Zs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Fs)
    };
    this.containerData = g, Vt(l, {
      width: g.width,
      height: g.height
    }), at(t, ht), Tt(l, ht);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, o = this.options.viewMode, l = Math.abs(s.rotate) % 180 === 90, i = l ? s.naturalHeight : s.naturalWidth, d = l ? s.naturalWidth : s.naturalHeight, g = i / d, a = t.width, v = t.height;
    t.height * g > t.width ? o === 3 ? a = t.height * g : v = t.width / g : o === 3 ? v = t.width / g : a = t.height * g;
    var p = {
      aspectRatio: g,
      naturalWidth: i,
      naturalHeight: d,
      width: a,
      height: v
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (t.width - p.width) / 2, p.top = (t.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = Q({}, p);
  },
  limitCanvas: function(t, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, g = o.viewMode, a = i.aspectRatio, v = this.cropped && d;
    if (t) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      g > 1 ? (p = Math.max(p, l.width), b = Math.max(b, l.height), g === 3 && (b * a > p ? p = b * a : b = p / a)) : g > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * a > p ? p = b * a : b = p / a));
      var S = Bt({
        aspectRatio: a,
        width: p,
        height: b
      });
      p = S.width, b = S.height, i.minWidth = p, i.minHeight = b, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (s)
      if (g > (v ? 0 : 1)) {
        var I = l.width - i.width, $ = l.height - i.height;
        i.minLeft = Math.min(0, I), i.minTop = Math.min(0, $), i.maxLeft = Math.max(0, I), i.maxTop = Math.max(0, $), v && this.limited && (i.minLeft = Math.min(d.left, d.left + (d.width - i.width)), i.minTop = Math.min(d.top, d.top + (d.height - i.height)), i.maxLeft = d.left, i.maxTop = d.top, g === 2 && (i.width >= l.width && (i.minLeft = Math.min(0, I), i.maxLeft = Math.max(0, I)), i.height >= l.height && (i.minTop = Math.min(0, $), i.maxTop = Math.max(0, $))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = l.width, i.maxTop = l.height;
  },
  renderCanvas: function(t, s) {
    var o = this.canvasData, l = this.imageData;
    if (s) {
      var i = _u({
        width: l.naturalWidth * Math.abs(l.scaleX || 1),
        height: l.naturalHeight * Math.abs(l.scaleY || 1),
        degree: l.rotate || 0
      }), d = i.width, g = i.height, a = o.width * (d / o.naturalWidth), v = o.height * (g / o.naturalHeight);
      o.left -= (a - o.width) / 2, o.top -= (v - o.height) / 2, o.width = a, o.height = v, o.aspectRatio = d / g, o.naturalWidth = d, o.naturalHeight = g, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Vt(this.canvas, Q({
      width: o.width,
      height: o.height
    }, ve({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, o = this.imageData, l = o.naturalWidth * (s.width / s.naturalWidth), i = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: l,
      height: i,
      left: (s.width - l) / 2,
      top: (s.height - i) / 2
    }), Vt(this.image, Q({
      width: o.width,
      height: o.height
    }, ve(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, o = t.aspectRatio || t.initialAspectRatio, l = Number(t.autoCropArea) || 0.8, i = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? i.height = i.width / o : i.width = i.height * o), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * l), i.height = Math.max(i.minHeight, i.height * l), i.left = s.left + (s.width - i.width) / 2, i.top = s.top + (s.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(t, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, g = this.limited, a = o.aspectRatio;
    if (t) {
      var v = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = g ? Math.min(l.width, i.width, i.width + i.left, l.width - i.left) : l.width, S = g ? Math.min(l.height, i.height, i.height + i.top, l.height - i.top) : l.height;
      v = Math.min(v, l.width), p = Math.min(p, l.height), a && (v && p ? p * a > v ? p = v / a : v = p * a : v ? p = v / a : p && (v = p * a), S * a > b ? S = b / a : b = S * a), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (g ? (d.minLeft = Math.max(0, i.left), d.minTop = Math.max(0, i.top), d.maxLeft = Math.min(l.width, i.left + i.width) - d.width, d.maxTop = Math.min(l.height, i.top + i.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = l.width - d.width, d.maxTop = l.height - d.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, t.movable && t.cropBoxMovable && Se(this.face, ye, o.width >= s.width && o.height >= s.height ? Ks : Dr), Vt(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, ve({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), re(this.element, ir, this.getData());
  }
}, Iu = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, o = this.options.preview, l = s ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = l, d.alt = i, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var g = o;
      typeof o == "string" ? g = t.ownerDocument.querySelectorAll(o) : o.querySelector && (g = [o]), this.previews = g, st(g, function(a) {
        var v = document.createElement("img");
        Se(a, Ie, {
          width: a.offsetWidth,
          height: a.offsetHeight,
          html: a.innerHTML
        }), s && (v.crossOrigin = s), v.src = l, v.alt = i, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', a.innerHTML = "", a.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    st(this.previews, function(t) {
      var s = dr(t, Ie);
      Vt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, bu(t, Ie);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, o = this.cropBoxData, l = o.width, i = o.height, d = t.width, g = t.height, a = o.left - s.left - t.left, v = o.top - s.top - t.top;
    !this.cropped || this.disabled || (Vt(this.viewBoxImage, Q({
      width: d,
      height: g
    }, ve(Q({
      translateX: -a,
      translateY: -v
    }, t)))), st(this.previews, function(p) {
      var b = dr(p, Ie), S = b.width, I = b.height, $ = S, M = I, T = 1;
      l && (T = S / l, M = i * T), i && M > I && (T = I / i, $ = l * T, M = I), Vt(p, {
        width: $,
        height: M
      }), Vt(p.getElementsByTagName("img")[0], Q({
        width: d * T,
        height: g * T
      }, ve(Q({
        translateX: -a * T,
        translateY: -v * T
      }, t))));
    }));
  }
}, Au = {
  bind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    dt(s.cropstart) && St(t, cr, s.cropstart), dt(s.cropmove) && St(t, lr, s.cropmove), dt(s.cropend) && St(t, ar, s.cropend), dt(s.crop) && St(t, ir, s.crop), dt(s.zoom) && St(t, ur, s.zoom), St(o, Fr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && St(o, ts, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && St(o, Zr, this.onDblclick = this.dblclick.bind(this)), St(t.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), St(t.ownerDocument, Gr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && St(window, Qr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    dt(s.cropstart) && Dt(t, cr, s.cropstart), dt(s.cropmove) && Dt(t, lr, s.cropmove), dt(s.cropend) && Dt(t, ar, s.cropend), dt(s.crop) && Dt(t, ir, s.crop), dt(s.zoom) && Dt(t, ur, s.zoom), Dt(o, Fr, this.onCropStart), s.zoomable && s.zoomOnWheel && Dt(o, ts, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Dt(o, Zr, this.onDblclick), Dt(t.ownerDocument, qr, this.onCropMove), Dt(t.ownerDocument, Gr, this.onCropEnd), s.responsive && Dt(window, Qr, this.onResize);
  }
}, Lu = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, o = this.containerData, l = s.offsetWidth / o.width, i = s.offsetHeight / o.height, d = Math.abs(l - 1) > Math.abs(i - 1) ? l : i;
      if (d !== 1) {
        var g, a;
        t.restore && (g = this.getCanvasData(), a = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(st(g, function(v, p) {
          g[p] = v * d;
        })), this.setCropBoxData(st(a, function(v, p) {
          a[p] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Xs || this.setDragMode(mu(this.dragBox, or) ? Ws : Cr);
  },
  wheel: function(t) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, l = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? l = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? l = -t.wheelDelta / 120 : t.detail && (l = t.detail > 0 ? 1 : -1), this.zoom(-l * o, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, o = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (K(s) && s !== 1 || K(o) && o !== 0 || t.ctrlKey))) {
      var l = this.options, i = this.pointers, d;
      t.changedTouches ? st(t.changedTouches, function(g) {
        i[g.identifier] = Ae(g);
      }) : i[t.pointerId || 0] = Ae(t), Object.keys(i).length > 1 && l.zoomable && l.zoomOnTouch ? d = Ys : d = dr(t.target, ye), iu.test(d) && re(this.element, cr, {
        originalEvent: t,
        action: d
      }) !== !1 && (t.preventDefault(), this.action = d, this.cropping = !1, d === Us && (this.cropping = !0, at(this.dragBox, je)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      t.preventDefault(), re(this.element, lr, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? st(t.changedTouches, function(l) {
        Q(o[l.identifier] || {}, Ae(l, !0));
      }) : Q(o[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      t.changedTouches ? st(t.changedTouches, function(l) {
        delete o[l.identifier];
      }) : delete o[t.pointerId || 0], s && (t.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, je, this.cropped && this.options.modal)), re(this.element, ar, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, Ou = {
  change: function(t) {
    var s = this.options, o = this.canvasData, l = this.containerData, i = this.cropBoxData, d = this.pointers, g = this.action, a = s.aspectRatio, v = i.left, p = i.top, b = i.width, S = i.height, I = v + b, $ = p + S, M = 0, T = 0, H = l.width, z = l.height, P = !0, V;
    !a && t.shiftKey && (a = b && S ? b / S : 1), this.limited && (M = i.minLeft, T = i.minTop, H = M + Math.min(l.width, o.width, o.left + o.width), z = T + Math.min(l.height, o.height, o.top + o.height));
    var Z = d[Object.keys(d)[0]], k = {
      x: Z.endX - Z.startX,
      y: Z.endY - Z.startY
    }, j = function(ot) {
      switch (ot) {
        case Kt:
          I + k.x > H && (k.x = H - I);
          break;
        case Yt:
          v + k.x < M && (k.x = M - v);
          break;
        case Rt:
          p + k.y < T && (k.y = T - p);
          break;
        case Jt:
          $ + k.y > z && (k.y = z - $);
          break;
      }
    };
    switch (g) {
      case Dr:
        v += k.x, p += k.y;
        break;
      case Kt:
        if (k.x >= 0 && (I >= H || a && (p <= T || $ >= z))) {
          P = !1;
          break;
        }
        j(Kt), b += k.x, b < 0 && (g = Yt, b = -b, v -= b), a && (S = b / a, p += (i.height - S) / 2);
        break;
      case Rt:
        if (k.y <= 0 && (p <= T || a && (v <= M || I >= H))) {
          P = !1;
          break;
        }
        j(Rt), S -= k.y, p += k.y, S < 0 && (g = Jt, S = -S, p -= S), a && (b = S * a, v += (i.width - b) / 2);
        break;
      case Yt:
        if (k.x <= 0 && (v <= M || a && (p <= T || $ >= z))) {
          P = !1;
          break;
        }
        j(Yt), b -= k.x, v += k.x, b < 0 && (g = Kt, b = -b, v -= b), a && (S = b / a, p += (i.height - S) / 2);
        break;
      case Jt:
        if (k.y >= 0 && ($ >= z || a && (v <= M || I >= H))) {
          P = !1;
          break;
        }
        j(Jt), S += k.y, S < 0 && (g = Rt, S = -S, p -= S), a && (b = S * a, v += (i.width - b) / 2);
        break;
      case he:
        if (a) {
          if (k.y <= 0 && (p <= T || I >= H)) {
            P = !1;
            break;
          }
          j(Rt), S -= k.y, p += k.y, b = S * a;
        } else
          j(Rt), j(Kt), k.x >= 0 ? I < H ? b += k.x : k.y <= 0 && p <= T && (P = !1) : b += k.x, k.y <= 0 ? p > T && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        b < 0 && S < 0 ? (g = ge, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = fe, b = -b, v -= b) : S < 0 && (g = pe, S = -S, p -= S);
        break;
      case fe:
        if (a) {
          if (k.y <= 0 && (p <= T || v <= M)) {
            P = !1;
            break;
          }
          j(Rt), S -= k.y, p += k.y, b = S * a, v += i.width - b;
        } else
          j(Rt), j(Yt), k.x <= 0 ? v > M ? (b -= k.x, v += k.x) : k.y <= 0 && p <= T && (P = !1) : (b -= k.x, v += k.x), k.y <= 0 ? p > T && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        b < 0 && S < 0 ? (g = pe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = he, b = -b, v -= b) : S < 0 && (g = ge, S = -S, p -= S);
        break;
      case ge:
        if (a) {
          if (k.x <= 0 && (v <= M || $ >= z)) {
            P = !1;
            break;
          }
          j(Yt), b -= k.x, v += k.x, S = b / a;
        } else
          j(Jt), j(Yt), k.x <= 0 ? v > M ? (b -= k.x, v += k.x) : k.y >= 0 && $ >= z && (P = !1) : (b -= k.x, v += k.x), k.y >= 0 ? $ < z && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (g = he, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = pe, b = -b, v -= b) : S < 0 && (g = fe, S = -S, p -= S);
        break;
      case pe:
        if (a) {
          if (k.x >= 0 && (I >= H || $ >= z)) {
            P = !1;
            break;
          }
          j(Kt), b += k.x, S = b / a;
        } else
          j(Jt), j(Kt), k.x >= 0 ? I < H ? b += k.x : k.y >= 0 && $ >= z && (P = !1) : b += k.x, k.y >= 0 ? $ < z && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (g = fe, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = ge, b = -b, v -= b) : S < 0 && (g = he, S = -S, p -= S);
        break;
      case Ks:
        this.move(k.x, k.y), P = !1;
        break;
      case Ys:
        this.zoom(Su(d), t), P = !1;
        break;
      case Us:
        if (!k.x || !k.y) {
          P = !1;
          break;
        }
        V = Qs(this.cropper), v = Z.startX - V.left, p = Z.startY - V.top, b = i.minWidth, S = i.minHeight, k.x > 0 ? g = k.y > 0 ? pe : he : k.x < 0 && (v -= b, g = k.y > 0 ? ge : fe), k.y < 0 && (p -= S), this.cropped || (Tt(this.cropBox, ht), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    P && (i.width = b, i.height = S, i.left = v, i.top = p, this.action = g, this.renderCropBox()), st(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, Pu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, je), Tt(this.cropBox, ht), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Tt(this.dragBox, je), at(this.cropBox, ht)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), s ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, st(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Tt(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Wr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[J] ? (t[J] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, l = o.left, i = o.top;
    return this.moveTo(Fe(t) ? t : l + Number(t), Fe(s) ? s : i + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, l = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(t) && (o.left = t, l = !0), K(s) && (o.top = s, l = !0), l && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, s) {
    var o = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(o.width * t / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, s, o) {
    var l = this.options, i = this.canvasData, d = i.width, g = i.height, a = i.naturalWidth, v = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && l.zoomable) {
      var p = a * t, b = v * t;
      if (re(this.element, ur, {
        ratio: t,
        oldRatio: d / a,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, I = Qs(this.cropper), $ = S && Object.keys(S).length ? wu(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        i.left -= (p - d) * (($.pageX - I.left - i.left) / d), i.top -= (b - g) * (($.pageY - I.top - i.top) / g);
      } else
        Qt(s) && K(s.x) && K(s.y) ? (i.left -= (p - d) * ((s.x - i.left) / d), i.top -= (b - g) * ((s.y - i.top) / g)) : (i.left -= (p - d) / 2, i.top -= (b - g) / 2);
      i.width = p, i.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var s = this.imageData.scaleY;
    return this.scale(t, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.imageData, l = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(t) && (o.scaleX = t, l = !0), K(s) && (o.scaleY = s, l = !0), l && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, l = this.canvasData, i = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: i.left - l.left,
        y: i.top - l.top,
        width: i.width,
        height: i.height
      };
      var g = o.width / o.naturalWidth;
      if (st(d, function(p, b) {
        d[b] = p / g;
      }), t) {
        var a = Math.round(d.y + d.height), v = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = v - d.x, d.height = a - d.y;
      }
    } else
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (d.rotate = o.rotate || 0), s.scalable && (d.scaleX = o.scaleX || 1, d.scaleY = o.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var s = this.options, o = this.imageData, l = this.canvasData, i = {};
    if (this.ready && !this.disabled && Qt(t)) {
      var d = !1;
      s.rotatable && K(t.rotate) && t.rotate !== o.rotate && (o.rotate = t.rotate, d = !0), s.scalable && (K(t.scaleX) && t.scaleX !== o.scaleX && (o.scaleX = t.scaleX, d = !0), K(t.scaleY) && t.scaleY !== o.scaleY && (o.scaleY = t.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var g = o.width / o.naturalWidth;
      K(t.x) && (i.left = t.x * g + l.left), K(t.y) && (i.top = t.y * g + l.top), K(t.width) && (i.width = t.width * g), K(t.height) && (i.height = t.height * g), this.setCropBoxData(i);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, s = {};
    return this.ready && st(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = t[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) ? (s.width = t.width, s.height = t.width / o) : K(t.height) && (s.height = t.height, s.width = t.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var s = this.cropBoxData, o = this.options.aspectRatio, l, i;
    return this.ready && this.cropped && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) && t.width !== s.width && (l = !0, s.width = t.width), K(t.height) && t.height !== s.height && (i = !0, s.height = t.height), o && (l ? s.height = s.width / o : i && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = xu(this.image, this.imageData, s, t);
    if (!this.cropped)
      return o;
    var l = this.getData(t.rounded), i = l.x, d = l.y, g = l.width, a = l.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (i *= v, d *= v, g *= v, a *= v);
    var p = g / a, b = Bt({
      aspectRatio: p,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Bt({
      aspectRatio: p,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), I = Bt({
      aspectRatio: p,
      width: t.width || (v !== 1 ? o.width : g),
      height: t.height || (v !== 1 ? o.height : a)
    }), $ = I.width, M = I.height;
    $ = Math.min(b.width, Math.max(S.width, $)), M = Math.min(b.height, Math.max(S.height, M));
    var T = document.createElement("canvas"), H = T.getContext("2d");
    T.width = ee($), T.height = ee(M), H.fillStyle = t.fillColor || "transparent", H.fillRect(0, 0, $, M);
    var z = t.imageSmoothingEnabled, P = z === void 0 ? !0 : z, V = t.imageSmoothingQuality;
    H.imageSmoothingEnabled = P, V && (H.imageSmoothingQuality = V);
    var Z = o.width, k = o.height, j = i, G = d, ot, rt, ut, bt, pt, gt;
    j <= -g || j > Z ? (j = 0, ot = 0, ut = 0, pt = 0) : j <= 0 ? (ut = -j, j = 0, ot = Math.min(Z, g + j), pt = ot) : j <= Z && (ut = 0, ot = Math.min(g, Z - j), pt = ot), ot <= 0 || G <= -a || G > k ? (G = 0, rt = 0, bt = 0, gt = 0) : G <= 0 ? (bt = -G, G = 0, rt = Math.min(k, a + G), gt = rt) : G <= k && (bt = 0, rt = Math.min(a, k - G), gt = rt);
    var A = [j, G, ot, rt];
    if (pt > 0 && gt > 0) {
      var R = $ / g;
      A.push(ut * R, bt * R, pt * R, gt * R);
    }
    return H.drawImage.apply(H, [o].concat(zs(A.map(function(O) {
      return Math.floor(ee(O));
    })))), T;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var s = this.options;
    return !this.disabled && !Fe(t) && (s.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var s = this.options, o = this.dragBox, l = this.face;
    if (this.ready && !this.disabled) {
      var i = t === Cr, d = s.movable && t === Ws;
      t = i || d ? t : Xs, s.dragMode = t, Se(o, ye, t), te(o, or, i), te(o, nr, d), s.cropBoxMovable || (Se(l, ye, t), te(l, or, i), te(l, nr, d));
    }
    return this;
  }
}, Nu = It.Cropper, eo = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Zc(this, r), !t || !cu.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, rs, Qt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Fc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), l;
      if (!s[J]) {
        if (s[J] = this, o === "img") {
          if (this.isImg = !0, l = s.getAttribute("src") || "", this.originalUrl = l, !l)
            return;
          l = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (l = s.toDataURL());
        this.load(l);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var l = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (au.test(s)) {
          lu.test(s) ? this.read(Cu(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), g = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = g, d.onerror = g, d.ontimeout = g, d.onprogress = function() {
          d.getResponseHeader("content-type") !== es && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, i.checkCrossOrigin && os(s) && l.crossOrigin && (s = ns(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = l.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, l = this.imageData, i = Eu(s), d = 0, g = 1, a = 1;
      if (i > 1) {
        this.url = Mu(s, es);
        var v = $u(i);
        d = v.rotate, g = v.scaleX, a = v.scaleY;
      }
      o.rotatable && (l.rotate = d), o.scalable && (l.scaleX = g, l.scaleY = a), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, l = s.crossOrigin, i = o;
      this.options.checkCrossOrigin && os(o) && (l || (l = "anonymous"), i = ns(o)), this.crossOrigin = l, this.crossOriginUrl = i;
      var d = document.createElement("img");
      l && (d.crossOrigin = l), d.src = i || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), at(d, Xr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var l = It.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(It.navigator.userAgent), i = function(v, p) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !l) {
        i(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), g = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        i(d.width, d.height), l || g.removeChild(d);
      }, d.src = o.src, l || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", g.appendChild(d));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, o = this.options, l = this.image, i = s.parentNode, d = document.createElement("div");
        d.innerHTML = uu;
        var g = d.querySelector(".".concat(J, "-container")), a = g.querySelector(".".concat(J, "-canvas")), v = g.querySelector(".".concat(J, "-drag-box")), p = g.querySelector(".".concat(J, "-crop-box")), b = p.querySelector(".".concat(J, "-face"));
        this.container = i, this.cropper = g, this.canvas = a, this.dragBox = v, this.cropBox = p, this.viewBox = g.querySelector(".".concat(J, "-view-box")), this.face = b, a.appendChild(l), at(s, ht), i.insertBefore(g, s.nextSibling), Tt(l, Xr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, at(p, ht), o.guides || at(p.getElementsByClassName("".concat(J, "-dashed")), ht), o.center || at(p.getElementsByClassName("".concat(J, "-center")), ht), o.background && at(g, "".concat(J, "-bg")), o.highlight || at(b, ru), o.cropBoxMovable && (at(b, nr), Se(b, ye, Dr)), o.cropBoxResizable || (at(p.getElementsByClassName("".concat(J, "-line")), ht), at(p.getElementsByClassName("".concat(J, "-point")), ht)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), dt(o.ready) && St(s, Jr, o.ready, {
          once: !0
        }), re(s, Jr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Tt(this.element, ht);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Nu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(rs, Qt(s) && s);
    }
  }]), r;
}();
Q(eo.prototype, Tu, Iu, Au, Lu, Ou, Pu);
const ju = { class: "flex" }, Ru = ["aria-label"], Vu = { class: "ml-auto mb-2" }, Bu = { class: "w-full flex justify-center" }, zu = ["src"], Hu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = t, o = r, { t: l } = N("i18n"), { apiUrl: i } = At(), d = L(null), g = L(null), a = L(!1), v = L(""), p = L(!1), b = () => {
      a.value = !a.value, a.value ? g.value = new eo(d.value, {
        crop($) {
        }
      }) : g.value.destroy();
    }, S = N("postData"), I = () => {
      g.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        ($) => {
          v.value = "", p.value = !1, Pe(i.value, {
            method: "POST",
            params: Object.assign(S, {
              q: "upload",
              adapter: o.selection.adapter,
              path: o.selection.item.path,
              file: $
            }),
            name: o.selection.item.basename,
            json: !1
          }).then((M) => {
            v.value = l("Updated."), d.value.src = tr(o.selection.adapter, o.selection.item.path), b(), s("load");
          }).catch((M) => {
            v.value = l(M.message), p.value = !0;
          });
        }
      );
    };
    return Mt(() => {
      s("load");
    }), ($, M) => (w(), D(lt, null, [
      f("div", ju, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Ru),
        f("div", Vu, [
          a.value ? (w(), D("button", {
            key: 0,
            onClick: I,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(l)("Crop")), 1)) : X("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (T) => b())
          }, E(a.value ? x(l)("Cancel") : x(l)("Edit")), 1)
        ])
      ]),
      f("div", Bu, [
        f("img", {
          ref_key: "image",
          ref: d,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(o.selection.adapter, o.selection.item.path),
          alt: ""
        }, null, 8, zu)
      ]),
      v.value.length ? (w(), q(Ot, {
        key: 0,
        onHidden: M[1] || (M[1] = (T) => v.value = ""),
        error: p.value
      }, {
        default: F(() => [
          et(E(v.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : X("", !0)
    ], 64));
  }
}, Uu = { class: "flex" }, Ku = ["aria-label"], Yu = /* @__PURE__ */ f("div", null, null, -1), Wu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = t;
    return Mt(() => {
      s("load");
    }), (o, l) => (w(), D(lt, null, [
      f("div", Uu, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Ku)
      ]),
      Yu
    ], 64));
  }
}, Xu = ["aria-label"], Zu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Fu = ["src"], qu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const { apiUrl: s } = At(), o = r, l = t, i = () => s.value + "?" + Ft({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Mt(() => {
      l("load");
    }), (d, g) => (w(), D(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Xu),
      f("div", null, [
        f("video", Zu, [
          f("source", {
            src: i(),
            type: "video/mp4"
          }, null, 8, Fu),
          et(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Gu = ["aria-label"], Ju = {
  class: "w-full",
  controls: ""
}, Qu = ["src"], td = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const { apiUrl: s } = At(), o = r, l = t, i = () => s.value + "?" + Ft({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Mt(() => {
      l("load");
    }), (d, g) => (w(), D(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Gu),
      f("div", null, [
        f("audio", Ju, [
          f("source", {
            src: i(),
            type: "audio/mpeg"
          }, null, 8, Qu),
          et(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, ed = ["aria-label"], rd = ["data"], sd = ["src"], od = /* @__PURE__ */ f("p", null, [
  /* @__PURE__ */ et(" Your browser does not support PDFs. "),
  /* @__PURE__ */ f("a", { href: "https://example.com/test.pdf" }, "Download the PDF"),
  /* @__PURE__ */ et(" . ")
], -1), nd = [
  od
], id = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const { apiUrl: s } = At(), o = r, l = t, i = () => s.value + "?" + Ft({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Mt(() => {
      l("load");
    }), (d, g) => (w(), D(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, ed),
      f("div", null, [
        f("object", {
          class: "h-[60vh]",
          data: i(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          f("iframe", {
            class: "border-0",
            src: i(),
            width: "100%",
            height: "100%"
          }, nd, 8, sd)
        ], 8, rd)
      ])
    ], 64));
  }
}, ad = { class: "sm:flex sm:items-start" }, ld = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, cd = { class: "text-gray-700 dark:text-gray-200 text-sm" }, ud = {
  key: 0,
  class: "flex leading-5"
}, dd = /* @__PURE__ */ f("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ f("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), hd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, fd = { class: "font-bold pl-2" }, pd = { class: "font-bold pl-2" }, gd = {
  name: "VFModalPreview"
}, md = /* @__PURE__ */ Object.assign(gd, {
  props: {
    selection: Object
  },
  setup(r) {
    const { apiUrl: t } = At(), s = N("emitter"), { t: o } = N("i18n"), l = L(!1), i = (v) => l.value = v, d = r, g = (v) => (d.selection.item.mime_type ?? "").startsWith(v), a = () => {
      const v = t.value + "?" + Ft({ q: "download", adapter: d.selection.adapter, path: d.selection.item.path });
      s.emit("vf-download", v);
    };
    return (v, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: p[6] || (p[6] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Close")), 1),
        f("button", {
          type: "button",
          onClick: p[7] || (p[7] = (b) => a()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Download")), 1)
      ]),
      default: F(() => [
        f("div", ad, [
          f("div", ld, [
            f("div", null, [
              g("text") ? (w(), q(Xc, {
                key: 0,
                selection: r.selection,
                onLoad: p[0] || (p[0] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("image") ? (w(), q(Hu, {
                key: 1,
                selection: r.selection,
                onLoad: p[1] || (p[1] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("video") ? (w(), q(qu, {
                key: 2,
                selection: r.selection,
                onLoad: p[2] || (p[2] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("audio") ? (w(), q(td, {
                key: 3,
                selection: r.selection,
                onLoad: p[3] || (p[3] = (b) => i(!0))
              }, null, 8, ["selection"])) : g("application/pdf") ? (w(), q(id, {
                key: 4,
                selection: r.selection,
                onLoad: p[4] || (p[4] = (b) => i(!0))
              }, null, 8, ["selection"])) : (w(), q(Wu, {
                key: 5,
                selection: r.selection,
                onLoad: p[5] || (p[5] = (b) => i(!0))
              }, null, 8, ["selection"]))
            ]),
            f("div", cd, [
              l.value == !1 ? (w(), D("div", ud, [
                dd,
                f("span", null, E(x(o)("Loading")), 1)
              ])) : X("", !0)
            ])
          ])
        ]),
        f("div", hd, [
          f("div", null, [
            f("span", fd, E(x(o)("File Size")) + ": ", 1),
            et(E(x(us)(r.selection.item.file_size)), 1)
          ]),
          f("div", null, [
            f("span", pd, E(x(o)("Last Modified")) + ": ", 1),
            et(" " + E(x(ds)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), vd = { class: "sm:flex sm:items-start" }, bd = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), yd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, wd = { class: "mt-2" }, _d = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, xd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, kd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Dd = [
  kd
], Cd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Md = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ed = [
  Md
], $d = { class: "ml-1.5" }, Td = {
  name: "VFModalRename"
}, Id = /* @__PURE__ */ Object.assign(Td, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = L(l.selection.items[0]), d = L(l.selection.items[0].basename), g = L(""), a = () => {
      d.value != "" && t.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: s.value,
          path: l.current.dirname,
          item: i.value.path,
          name: d.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("%s is renamed.", d.value) });
        },
        onError: (v) => {
          g.value = o(v.message);
        }
      });
    };
    return (v, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Rename")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", vd, [
          bd,
          f("div", yd, [
            f("h3", Sd, E(x(o)("Rename")), 1),
            f("div", wd, [
              f("p", _d, [
                i.value.type == "dir" ? (w(), D("svg", xd, Dd)) : (w(), D("svg", Cd, Ed)),
                f("span", $d, E(i.value.basename), 1)
              ]),
              vt(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: oe(a, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 544), [
                [ne, d.value]
              ]),
              g.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => g.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(g.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ad = { class: "sm:flex sm:items-start" }, Ld = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Od = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Pd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Nd = { class: "mt-2" }, jd = { class: "text-gray-500 mb-1" }, Rd = ["id"], Vd = {
  key: 0,
  class: "py-2"
}, Bd = ["disabled"], zd = {
  name: "VFModalUpload"
}, Hd = /* @__PURE__ */ Object.assign(zd, {
  props: {
    current: Object
  },
  setup(r) {
    const t = N("emitter"), { apiUrl: s } = At(), { t: o } = N("i18n"), l = N("maxFileSize"), i = r, d = L(null), g = L(null), a = L(null), v = L([]), p = L(""), b = L(!0), S = () => {
      p.value = "", d.value.start();
    }, I = N("postData");
    return Mt(() => {
      d.value = new de.Uploader({
        runtimes: "html5",
        browse_button: a.value,
        container: g.value,
        max_file_size: l,
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + Ft(Object.assign(I, { q: "upload", adapter: i.current.adapter, path: i.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Oe && { "X-CSRF-Token": Oe }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function($, M) {
            b.value = !1, de.each(M, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: de.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function($, M) {
            v.value[v.value.findIndex((T) => T.id == M.id)].percent = M.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, t.emit("vf-fetch", { params: { q: "index", adapter: i.current.adapter, path: i.current.dirname } });
          },
          Error: function($, M) {
            d.value.stop(), M.code == de.HTTP_ERROR ? p.value = o(JSON.parse(M.response).message) : M.code == de.FILE_SIZE_ERROR ? p.value = o("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [l]) : p.value = o(M.message);
          }
        }
      }), d.value.init();
    }), ($, M) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          disabled: b.value,
          onClick: Wt(S, ["prevent"]),
          type: "button",
          class: ct([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(x(o)("Upload")), 11, Bd),
        f("button", {
          type: "button",
          onClick: M[1] || (M[1] = (T) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Ad, [
          Ld,
          f("div", Od, [
            f("h3", Pd, E(x(o)("Upload files")), 1),
            f("div", Nd, [
              f("div", jd, [
                (w(!0), D(lt, null, wt(v.value, (T) => (w(), D("div", null, [
                  f("div", {
                    id: T.id
                  }, [
                    et(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    f("b", null, E(T.percent), 1)
                  ], 8, Rd)
                ]))), 256)),
                v.value.length ? X("", !0) : (w(), D("div", Vd, E(x(o)("No files selected!")), 1))
              ]),
              f("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: g
              }, [
                f("button", {
                  ref_key: "pickFiles",
                  ref: a,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(o)("Select Files")), 513)
              ], 512),
              p.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: M[0] || (M[0] = (T) => p.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(p.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ud = { class: "sm:flex sm:items-start" }, Kd = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Yd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Wd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Xd = { class: "mt-2" }, Zd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Fd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Gd = [
  qd
], Jd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), th = [
  Qd
], eh = { class: "ml-1.5" }, rh = ["placeholder"], sh = {
  name: "VFModalArchive"
}, oh = /* @__PURE__ */ Object.assign(sh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = L(""), d = L(""), g = L(l.selection.items), a = () => {
      g.value.length && t.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(g.value.map(({ path: v, type: p }) => ({ path: v, type: p }))),
          name: i.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = o(v.message);
        }
      });
    };
    return (v, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Archive")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Ud, [
          Kd,
          f("div", Yd, [
            f("h3", Wd, E(x(o)("Archive the files")), 1),
            f("div", Xd, [
              (w(!0), D(lt, null, wt(g.value, (b) => (w(), D("p", Zd, [
                b.type == "dir" ? (w(), D("svg", Fd, Gd)) : (w(), D("svg", Jd, th)),
                f("span", eh, E(b.basename), 1)
              ]))), 256)),
              vt(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value = b),
                onKeyup: oe(a, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, rh), [
                [ne, i.value]
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), nh = { class: "sm:flex sm:items-start" }, ih = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), ah = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, lh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ch = { class: "mt-2" }, uh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, dh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, hh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), fh = [
  hh
], ph = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, gh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), mh = [
  gh
], vh = { class: "ml-1.5" }, bh = { class: "my-1 text-sm text-gray-500" }, yh = {
  name: "VFModalUnarchive"
}, Sh = /* @__PURE__ */ Object.assign(yh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r;
    L("");
    const i = L(l.selection.items[0]), d = L(""), g = L([]), a = () => {
      t.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: s.value,
          path: l.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("The file unarchived.") });
        },
        onError: (v) => {
          d.value = o(v.message);
        }
      });
    };
    return (v, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Unarchive")), 1),
        f("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", nh, [
          ih,
          f("div", ah, [
            f("h3", lh, E(x(o)("Unarchive")), 1),
            f("div", ch, [
              (w(!0), D(lt, null, wt(g.value, (b) => (w(), D("p", uh, [
                b.type == "dir" ? (w(), D("svg", dh, fh)) : (w(), D("svg", ph, mh)),
                f("span", vh, E(b.basename), 1)
              ]))), 256)),
              f("p", bh, E(x(o)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wh = { class: "sm:flex sm:items-start" }, _h = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), xh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, kh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Dh = { class: "mt-2" }, Ch = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Mh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Eh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), $h = [
  Eh
], Th = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ih = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ah = [
  Ih
], Lh = { class: "ml-1.5" }, Oh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Ph = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Nh = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), jh = { class: "ml-1.5 overflow-auto" }, Rh = {
  name: "VFModalMove"
}, Vh = /* @__PURE__ */ Object.assign(Rh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = N("emitter"), { t: s } = N("i18n");
    N("storage");
    const o = N("adapter"), l = r, i = L(l.selection.items.from), d = L(""), g = () => {
      i.value.length && t.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: o.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: v }) => ({ path: a, type: v }))),
          item: l.selection.items.to.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: s("Files moved.", l.selection.items.to.name) });
        },
        onError: (a) => {
          d.value = s(a.message);
        }
      });
    };
    return (a, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Yes, Move!")), 1),
        f("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", wh, [
          _h,
          f("div", xh, [
            f("h3", kh, E(x(s)("Move files")), 1),
            f("div", Dh, [
              (w(!0), D(lt, null, wt(i.value, (p) => (w(), D("p", Ch, [
                p.type == "dir" ? (w(), D("svg", Mh, $h)) : (w(), D("svg", Th, Ah)),
                f("span", Lh, E(p.path), 1)
              ]))), 256)),
              f("p", Oh, E(x(s)("Are you sure you want to move these files?")), 1),
              f("p", Ph, [
                Nh,
                f("span", jh, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  et(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: oh,
  ModalDelete: gc,
  ModalMessage: xc,
  ModalMove: Vh,
  ModalNewFile: zc,
  ModalNewFolder: Ac,
  ModalPreview: md,
  ModalRename: Id,
  ModalUnarchive: Sh,
  ModalUpload: Hd
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  VueFinder: Ul,
  ...Bh
};
const Uh = {
  install(r) {
    for (const t in Ge)
      if (Ge.hasOwnProperty(t)) {
        const s = Ge[t];
        r.component(s.name, s);
      }
  }
};
export {
  Uh as default
};
