! function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function (t) {
        return t
    }, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/", e(e.s = 103)
}([function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(29);
    Object.defineProperty(e, "buildTEMessage", {
        enumerable: !0,
        get: function () {
            return r(o).default
        }
    });
    var i = n(30);
    Object.defineProperty(e, "isTEEvent", {
        enumerable: !0,
        get: function () {
            return r(i).default
        }
    });
    var s = n(31);
    Object.defineProperty(e, "isTwitchOrigin", {
        enumerable: !0,
        get: function () {
            return r(s).default
        }
    });
    var a = n(32);
    Object.defineProperty(e, "notifyAnyHost", {
        enumerable: !0,
        get: function () {
            return r(a).default
        }
    });
    var u = n(33);
    Object.defineProperty(e, "subscribeToTwitchMessage", {
        enumerable: !0,
        get: function () {
            return r(u).default
        }
    });
    e.TE_MESSAGE_NAMESPACE = "twitch-everywhere"
}, function (t, e, n) {
    ! function (t, n) {
        n(e)
    }(0, function (t) {
        function e(t, e, n) {
            this.nodeName = t, this.attributes = e, this.children = n, this.key = e && e.key
        }

        function n(t, n) {
            var r, o, i, s, a;
            for (a = arguments.length; a-- > 2;) q.push(arguments[a]);
            for (n && n.children && (q.length || q.push(n.children), delete n.children); q.length;)
                if ((i = q.pop()) instanceof Array)
                    for (a = i.length; a--;) q.push(i[a]);
                else null != i && i !== !0 && i !== !1 && ("number" == typeof i && (i = String(i)), s = "string" == typeof i, s && o ? r[r.length - 1] += i : ((r || (r = [])).push(i), o = s));
            var u = new e(t, n || void 0, r || D);
            return B.vnode && B.vnode(u), u
        }

        function r(t, e) {
            if (e)
                for (var n in e) t[n] = e[n];
            return t
        }

        function o(t) {
            return r({}, t)
        }

        function i(t, e) {
            for (var n = e.split("."), r = 0; r < n.length && t; r++) t = t[n[r]];
            return t
        }

        function s(t) {
            return "function" == typeof t
        }

        function a(t) {
            return "string" == typeof t
        }

        function u(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e
        }

        function c(t, e) {
            return n(t.nodeName, r(o(t.attributes), e), arguments.length > 2 ? [].slice.call(arguments, 2) : t.children)
        }

        function f(t, e, n) {
            var r = e.split(".");
            return function (e) {
                for (var o = e && e.target || this, s = {}, u = s, c = a(n) ? i(e, n) : o.nodeName ? o.type.match(/^che|rad/) ? o.checked : o.value : e, f = 0; f < r.length - 1; f++) u = u[r[f]] || (u[r[f]] = !f && t.state[r[f]] || {});
                u[r[f]] = c, t.setState(s)
            }
        }

        function l(t) {
            !t._dirty && (t._dirty = !0) && 1 == J.push(t) && (B.debounceRendering || G)(p)
        }

        function p() {
            var t, e = J;
            for (J = []; t = e.pop();) t._dirty && I(t)
        }

        function h(t) {
            var e = t && t.nodeName;
            return e && s(e) && !(e.prototype && e.prototype.render)
        }

        function d(t, e) {
            return t.nodeName(y(t), e || W)
        }

        function _(t, e) {
            return a(e) ? t instanceof Text : a(e.nodeName) ? !t._componentConstructor && v(t, e.nodeName) : s(e.nodeName) ? !t._componentConstructor || t._componentConstructor === e.nodeName || h(e) : void 0
        }

        function v(t, e) {
            return t.normalizedNodeName === e || H(t.nodeName) === H(e)
        }

        function y(t) {
            var e = o(t.attributes);
            e.children = t.children;
            var n = t.nodeName.defaultProps;
            if (n)
                for (var r in n) void 0 === e[r] && (e[r] = n[r]);
            return e
        }

        function g(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }

        function b(t, e, n, r, o) {
            if ("className" === e && (e = "class"), "class" === e && r && "object" == typeof r && (r = u(r)), "key" === e);
            else if ("class" !== e || o)
                if ("style" === e) {
                    if ((!r || a(r) || a(n)) && (t.style.cssText = r || ""), r && "object" == typeof r) {
                        if (!a(n))
                            for (var i in n) i in r || (t.style[i] = "");
                        for (var i in r) t.style[i] = "number" != typeof r[i] || Y[i] ? r[i] : r[i] + "px"
                    }
                } else if ("dangerouslySetInnerHTML" === e) r && (t.innerHTML = r.__html || "");
            else if ("o" == e[0] && "n" == e[1]) {
                var c = t._listeners || (t._listeners = {});
                e = H(e.substring(2)), r ? c[e] || t.addEventListener(e, w, !!K[e]) : c[e] && t.removeEventListener(e, w, !!K[e]), c[e] = r
            } else if ("list" !== e && "type" !== e && !o && e in t) m(t, e, null == r ? "" : r), null != r && r !== !1 || t.removeAttribute(e);
            else {
                var f = o && e.match(/^xlink\:?(.+)/);
                null == r || r === !1 ? f ? t.removeAttributeNS("http://www.w3.org/1999/xlink", H(f[1])) : t.removeAttribute(e) : "object" == typeof r || s(r) || (f ? t.setAttributeNS("http://www.w3.org/1999/xlink", H(f[1]), r) : t.setAttribute(e, r))
            } else t.className = r || ""
        }

        function m(t, e, n) {
            try {
                t[e] = n
            } catch (t) {}
        }

        function w(t) {
            return this._listeners[t.type](B.event && B.event(t) || t)
        }

        function E(t) {
            if (g(t), t instanceof Element) {
                t._component = t._componentConstructor = null;
                var e = t.normalizedNodeName || H(t.nodeName);
                ($[e] || ($[e] = [])).push(t)
            }
        }

        function S(t, e) {
            var n = H(t),
                r = $[n] && $[n].pop() || (e ? document.createElementNS("http://www.w3.org/2000/svg", t) : document.createElement(t));
            return r.normalizedNodeName = n, r
        }

        function T() {
            for (var t; t = Q.pop();) B.afterMount && B.afterMount(t), t.componentDidMount && t.componentDidMount()
        }

        function x(t, e, n, r, o, i) {
            X++ || (Z = o && void 0 !== o.ownerSVGElement, tt = t && !(V in t));
            var s = A(t, e, n, r);
            return o && s.parentNode !== o && o.appendChild(s), --X || (tt = !1, i || T()), s
        }

        function A(t, e, n, r) {
            for (var o = e && e.attributes && e.attributes.ref; h(e);) e = d(e, n);
            if (null == e && (e = ""), a(e)) return t && t instanceof Text && t.parentNode ? t.nodeValue != e && (t.nodeValue = e) : (t && O(t), t = document.createTextNode(e)), t;
            if (s(e.nodeName)) return M(t, e, n, r);
            var i = t,
                u = String(e.nodeName),
                c = Z,
                f = e.children;
            if (Z = "svg" === u || "foreignObject" !== u && Z, t) {
                if (!v(t, u)) {
                    for (i = S(u, Z); t.firstChild;) i.appendChild(t.firstChild);
                    t.parentNode && t.parentNode.replaceChild(i, t), O(t)
                }
            } else i = S(u, Z);
            var l = i.firstChild,
                p = i[V];
            if (!p) {
                i[V] = p = {};
                for (var _ = i.attributes, y = _.length; y--;) p[_[y].name] = _[y].value
            }
            return !tt && f && 1 === f.length && "string" == typeof f[0] && l && l instanceof Text && !l.nextSibling ? l.nodeValue != f[0] && (l.nodeValue = f[0]) : (f && f.length || l) && j(i, f, n, r, !!p.dangerouslySetInnerHTML), P(i, e.attributes, p), o && (p.ref = o)(i), Z = c, i
        }

        function j(t, e, n, r, o) {
            var i, s, a, u, c = t.childNodes,
                f = [],
                l = {},
                p = 0,
                h = 0,
                d = c.length,
                v = 0,
                y = e && e.length;
            if (d)
                for (var b = 0; b < d; b++) {
                    var m = c[b],
                        w = m[V],
                        E = y ? (s = m._component) ? s.__key : w ? w.key : null : null;
                    null != E ? (p++, l[E] = m) : (tt || o || w || m instanceof Text) && (f[v++] = m)
                }
            if (y)
                for (var b = 0; b < y; b++) {
                    a = e[b], u = null;
                    var E = a.key;
                    if (null != E) p && E in l && (u = l[E], l[E] = void 0, p--);
                    else if (!u && h < v)
                        for (i = h; i < v; i++)
                            if ((s = f[i]) && _(s, a)) {
                                u = s, f[i] = void 0, i === v - 1 && v--, i === h && h++;
                                break
                            }
                    u = A(u, a, n, r), u && u !== t && (b >= d ? t.appendChild(u) : u !== c[b] && (u === c[b + 1] && g(c[b]), t.insertBefore(u, c[b] || null)))
                }
            if (p)
                for (var b in l) l[b] && O(l[b]);
            for (; h <= v;)(u = f[v--]) && O(u)
        }

        function O(t, e) {
            var n = t._component;
            if (n) N(n, !e);
            else {
                t[V] && t[V].ref && t[V].ref(null), e || E(t);
                for (var r; r = t.lastChild;) O(r, e)
            }
        }

        function P(t, e, n) {
            var r;
            for (r in n) e && r in e || null == n[r] || b(t, r, n[r], n[r] = void 0, Z);
            if (e)
                for (r in e) "children" === r || "innerHTML" === r || r in n && e[r] === ("value" === r || "checked" === r ? t[r] : n[r]) || b(t, r, n[r], n[r] = e[r], Z)
        }

        function C(t) {
            var e = t.constructor.name,
                n = et[e];
            n ? n.push(t) : et[e] = [t]
        }

        function k(t, e, n) {
            var r = new t(e, n),
                o = et[t.name];
            if (U.call(r, e, n), o)
                for (var i = o.length; i--;)
                    if (o[i].constructor === t) {
                        r.nextBase = o[i].nextBase, o.splice(i, 1);
                        break
                    }
            return r
        }

        function R(t, e, n, r, o) {
            t._disable || (t._disable = !0, (t.__ref = e.ref) && delete e.ref, (t.__key = e.key) && delete e.key, !t.base || o ? t.componentWillMount && t.componentWillMount() : t.componentWillReceiveProps && t.componentWillReceiveProps(e, r), r && r !== t.context && (t.prevContext || (t.prevContext = t.context), t.context = r), t.prevProps || (t.prevProps = t.props), t.props = e, t._disable = !1, 0 !== n && (1 !== n && B.syncComponentUpdates === !1 && t.base ? l(t) : I(t, 1, o)), t.__ref && t.__ref(t))
        }

        function I(t, e, n, i) {
            if (!t._disable) {
                var a, u, c, f, l = t.props,
                    p = t.state,
                    _ = t.context,
                    v = t.prevProps || l,
                    g = t.prevState || p,
                    b = t.prevContext || _,
                    m = t.base,
                    w = t.nextBase,
                    E = m || w,
                    S = t._component;
                if (m && (t.props = v, t.state = g, t.context = b, 2 !== e && t.shouldComponentUpdate && t.shouldComponentUpdate(l, p, _) === !1 ? a = !0 : t.componentWillUpdate && t.componentWillUpdate(l, p, _), t.props = l, t.state = p, t.context = _), t.prevProps = t.prevState = t.prevContext = t.nextBase = null, t._dirty = !1, !a) {
                    for (t.render && (u = t.render(l, p, _)), t.getChildContext && (_ = r(o(_), t.getChildContext())); h(u);) u = d(u, _);
                    var A, j, P = u && u.nodeName;
                    if (s(P)) {
                        var C = y(u);
                        c = S, c && c.constructor === P && C.key == c.__key ? R(c, C, 1, _) : (A = c, c = k(P, C, _), c.nextBase = c.nextBase || w, c._parentComponent = t, t._component = c, R(c, C, 0, _), I(c, 1, n, !0)), j = c.base
                    } else f = E, A = S, A && (f = t._component = null), (E || 1 === e) && (f && (f._component = null), j = x(f, u, _, n || !m, E && E.parentNode, !0));
                    if (E && j !== E && c !== S) {
                        var M = E.parentNode;
                        M && j !== M && (M.replaceChild(j, E), A || (E._component = null, O(E)))
                    }
                    if (A && N(A, j !== E), t.base = j, j && !i) {
                        for (var U = t, L = t; L = L._parentComponent;)(U = L).base = j;
                        j._component = U, j._componentConstructor = U.constructor
                    }
                }!m || n ? Q.unshift(t) : a || (t.componentDidUpdate && t.componentDidUpdate(v, g, b), B.afterUpdate && B.afterUpdate(t));
                var q, D = t._renderCallbacks;
                if (D)
                    for (; q = D.pop();) q.call(t);
                X || i || T()
            }
        }

        function M(t, e, n, r) {
            for (var o = t && t._component, i = o, s = t, a = o && t._componentConstructor === e.nodeName, u = a, c = y(e); o && !u && (o = o._parentComponent);) u = o.constructor === e.nodeName;
            return o && u && (!r || o._component) ? (R(o, c, 3, n, r), t = o.base) : (i && !a && (N(i, !0), t = s = null), o = k(e.nodeName, c, n), t && !o.nextBase && (o.nextBase = t, s = null), R(o, c, 1, n, r), t = o.base, s && t !== s && (s._component = null, O(s))), t
        }

        function N(t, e) {
            B.beforeUnmount && B.beforeUnmount(t);
            var n = t.base;
            t._disable = !0, t.componentWillUnmount && t.componentWillUnmount(), t.base = null;
            var r = t._component;
            if (r) N(r, e);
            else if (n) {
                n[V] && n[V].ref && n[V].ref(null), t.nextBase = n, e && (g(n), C(t));
                for (var o; o = n.lastChild;) O(o, !e)
            }
            t.__ref && t.__ref(null), t.componentDidUnmount && t.componentDidUnmount()
        }

        function U(t, e) {
            this._dirty = !0, this.context = e, this.props = t, this.state || (this.state = {})
        }

        function L(t, e, n) {
            return x(n, t, {}, !1, e)
        }
        var B = {},
            q = [],
            D = [],
            F = {},
            H = function (t) {
                return F[t] || (F[t] = t.toLowerCase())
            },
            z = "undefined" != typeof Promise && Promise.resolve(),
            G = z ? function (t) {
                z.then(t)
            } : setTimeout,
            W = {},
            V = "undefined" != typeof Symbol ? Symbol.for("preactattr") : "__preactattr_",
            Y = {
                boxFlex: 1,
                boxFlexGroup: 1,
                columnCount: 1,
                fillOpacity: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                fontWeight: 1,
                lineClamp: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                strokeOpacity: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1
            },
            K = {
                blur: 1,
                error: 1,
                focus: 1,
                load: 1,
                resize: 1,
                scroll: 1
            },
            J = [],
            $ = {},
            Q = [],
            X = 0,
            Z = !1,
            tt = !1,
            et = {};
        r(U.prototype, {
            linkState: function (t, e) {
                var n = this._linkedStates || (this._linkedStates = {});
                return n[t + e] || (n[t + e] = f(this, t, e))
            },
            setState: function (t, e) {
                var n = this.state;
                this.prevState || (this.prevState = o(n)), r(n, s(t) ? t(n, this.props) : t), e && (this._renderCallbacks = this._renderCallbacks || []).push(e), l(this)
            },
            forceUpdate: function () {
                I(this, 2)
            },
            render: function () {}
        }), t.h = n, t.cloneElement = c, t.Component = U, t.render = L, t.rerender = p, t.options = B
    })
}, function (t, e, n) {
    var r = n(57),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(9);
    e.default = {
        _queryParams: null,
        get href() {
            return location.href
        },
        get origin() {
            return location.origin
        },
        get queryParams() {
            return this._queryParams || (this._queryParams = (0, r.parseQueryParams)(location.search)), this._queryParams
        },
        reload: function () {
            location.reload()
        },
        visit: function (t) {
            location.assign(t)
        },
        updateParams: function (t) {
            history.pushState({}, "", t)
        }
    }
}, function (t, e) {
    var n = Array.isArray;
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : s(t)
    }
    var o = n(14),
        i = n(163),
        s = n(194),
        a = "[object Null]",
        u = "[object Undefined]",
        c = o ? o.toStringTag : void 0;
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = i(t, e);
        return o(n) ? n : void 0
    }
    var o = n(137),
        i = n(165);
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
}, function (t, e) {
    function n(t) {
        return null != t && "object" == typeof t
    }
    t.exports = n
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e = {};
        return t.substring(1).toLowerCase().split("&").forEach(function (t) {
            if (t.length) {
                var n = t.split("="),
                    r = n[0],
                    o = n[1];
                try {
                    e[r] = decodeURIComponent(o)
                } catch (t) {
                    e[r] = o
                }
            }
        }), e
    }

    function o(t) {
        var e = [];
        return Object.keys(t).forEach(function (n) {
            var r = t[n];
            if (r) {
                var o = encodeURIComponent(r);
                e.push(n + "=" + o)
            }
        }), e.length ? "?" + e.join("&") : ""
    }
    e.__esModule = !0, e.parseQueryParams = r, e.buildQueryParams = o
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = n(11),
        i = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        s = function () {},
        a = s,
        u = {},
        c = {
            DEBUG: 1,
            INFO: 2,
            WARNING: 3,
            ERROR: 4,
            CRITICAL: 5
        },
        f = c.WARNING,
        l = function () {
            function t(e) {
                r(this, t), this._opts = e
            }
            return t.prototype.debug = function (t) {
                f <= c.DEBUG && this._log("DEBUG: " + t)
            }, t.prototype.info = function (t) {
                f <= c.INFO && this._log("INFO: " + t)
            }, t.prototype.warning = function (t) {
                f <= c.WARNING && this._log("WARNING: " + t)
            }, t.prototype.error = function (t) {
                f <= c.ERROR && this._log("ERROR: " + t)
            }, t.prototype.critical = function (t) {
                f <= c.CRITICAL && this._log("CRITICAL: " + t)
            }, t.prototype._log = function (t) {
                var e = this._opts.prefix + t;
                this._opts.logFunc ? this._opts.logFunc(e) : a(e)
            }, t
        }(),
        p = {
            setLogger: function (t) {
                a = "function" == typeof t ? t : s
            },
            setLevel: function () {
                var t = (i.default.urlParams.pubsub_log_level || "").toUpperCase();
                if (t) {
                    var e = c[t];
                    if (e) return f = e,
                        function () {}
                }
                return function (t) {
                    f = t ? c[t.toUpperCase()] || c.WARNING : c.WARNING
                }
            }(),
            _getLogger: function (t) {
                return u[t] || (u[t] = new l({
                    prefix: "pubsub.js [" + t + "] "
                })), u[t]
            },
            _noopLogger: new l({
                prefix: "",
                logFunc: s
            })
        },
        h = window.console;
    h && h.log && (h.log.apply ? p.setLogger(function () {
        h.log.apply(h, arguments)
    }) : p.setLogger(function () {
        for (var t = [], e = 0; e < arguments.length; ++e) t.push(arguments[e]);
        h.log(t.join(" "))
    })), e.default = p
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = {};
    r.randomInt = function (t) {
        return Math.floor(Math.random() * t)
    }, r.time = {
        seconds: function (t) {
            return 1e3 * t
        },
        now: function () {
            return (new Date).getTime()
        }
    }, r.urlParams = function () {
        for (var t = {}, e = window.location.search.substr(1), n = e.split("&"), r = 0; r < n.length; ++r) {
            var o = n[r].split("=");
            t[decodeURIComponent(o[0])] = o.length > 1 ? decodeURIComponent(o[1]) : ""
        }
        return t
    }(), r.generateString = function (t) {
        for (var e = "", n = "GbHi8bXd2f26Vj8NqmcnHFztp53C1pSdpVjsf9ANBCtpYHvWauyz0123456789", o = 0; o < t; o++) e += n.charAt(r.randomInt(n.length));
        return e
    }, r.inIframe = function () {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }, e.default = r
}, function (t, e, n) {
    function r(t, e, n, r) {
        var s = !n;
        n || (n = {});
        for (var a = -1, u = e.length; ++a < u;) {
            var c = e[a],
                f = r ? r(n[c], t[c], c, n, t) : void 0;
            void 0 === f && (f = t[c]), s ? i(n, c, f) : o(n, c, f)
        }
        return n
    }
    var o = n(37),
        i = n(51);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return null != t && i(t.length) && !o(t)
    }
    var o = n(69),
        i = n(70);
    t.exports = r
}, function (t, e, n) {
    var r = n(2),
        o = r.Symbol;
    t.exports = o
}, function (t, e, n) {
    function r(t) {
        return s(t) ? o(t) : i(t)
    }
    var o = n(49),
        i = n(139),
        s = n(13);
    t.exports = r
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = function () {
        function t() {
            r(this, t)
        }
        return t.prototype.on = function (t, e, n) {
            return this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e, n), this
        }, t.prototype.off = function (t, e) {
            if (this._events)
                for (var n = this._events[t] || [], r = this._events[t] = [], o = 0; o < n.length; o += 2) n[o] !== e && (r.push(n[o]), r.push(n[o + 1]));
            return this
        }, t.prototype._trigger = function (t) {
            if (this._events)
                for (var e = this._events[t] || [], n = 1; n < e.length; n += 2) e[n - 1].apply(e[n], Array.prototype.slice.call(arguments, 1));
            return this
        }, t.prototype.count = function (t) {
            if (this._events) {
                return (this._events[t] || []).length / 2
            }
            return 0
        }, t
    }();
    e.default = o
}, function (t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(179),
        i = n(180),
        s = n(181),
        a = n(182),
        u = n(183);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = s, r.prototype.has = a, r.prototype.set = u, t.exports = r
}, function (t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
        return o
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        for (var n = t.length; n--;)
            if (o(t[n][0], e)) return n;
        return -1
    }
    var o = n(42);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = t.__data__;
        return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
    var o = n(177);
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
    var r = Object.prototype;
    t.exports = n
}, function (t, e, n) {
    var r = n(6),
        o = r(Object, "create");
    t.exports = o
}, function (t, e, n) {
    function r(t) {
        return "symbol" == typeof t || i(t) && o(t) == s
    }
    var o = n(5),
        i = n(8),
        s = "[object Symbol]";
    t.exports = r
}, function (t, e, n) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function o() {
        u.Dobbin.configure({
            Promise: Promise,
            useSendBeacon: !1
        })
    }

    function i(t) {
        var e = t.eventName,
            n = Object.assign({}, t);
        delete n.eventName, u.Dobbin.trackEvent(e, n)
    }

    function s() {
        var t = f.default.queryParams,
            e = t.te_client,
            n = window,
            r = n.navigator,
            o = n.innerHeight,
            i = {};
        return i.device_id = p.get(v.DEVICE_ID), i.page_session_id = d.generate(), i.url = f.default.href, i.client_time = Date.now(), i.te_client = _.CLIENT_WHITELIST.indexOf(e) !== -1 ? e : null, i.language = r.language, i.platform = g, i.viewport_height = o, i.browser = r.userAgent, i
    }

    function a(t) {
        var e = t.channel,
            n = void 0 === e ? {} : e,
            r = t.stream,
            o = void 0 === r ? {} : r,
            i = t.user,
            a = void 0 === i ? {} : i,
            u = t.followed,
            c = void 0 === u ? {} : u,
            l = t.subscribed,
            p = void 0 === l ? {} : l,
            h = f.default.queryParams,
            d = s();
        return d.eventName = y.TE_INIT, d.theme = h.theme, d.font_size = h.fontsize, d.vod_id = h.video, d.collection_id = h.collection, d.referrer_url = h.referrer, d.channel = n.name, d.channel_id = n._id, d.is_live = Boolean(o.stream), a.name && (d.login = a.name, d.user_id = a._id, d.is_following = Boolean(c.channel), d.is_subscriber = Boolean(p.channel)), d
    }
    e.__esModule = !0, e.PLAYER_TYPE = void 0, e.configureTrackingService = o, e.trackEvent = i, e.getSharedFields = s, e.getInitFields = a;
    var u = n(111),
        c = n(3),
        f = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c),
        l = n(107),
        p = r(l),
        h = n(48),
        d = r(h),
        _ = n(102),
        v = n(27),
        y = n(101),
        g = "te-embed";
    e.PLAYER_TYPE = "twitch_everywhere"
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.PLAYER_API = Object.freeze({
        PAUSE: "pause",
        PLAY: "play",
        SEEK: "seek",
        SET_CHANNEL: "setChannel",
        SET_CHANNEL_ID: "setChannelId",
        SET_COLLECTION: "setCollection",
        SET_QUALITY: "setQuality",
        SET_VIDEO: "setVideo",
        SET_MUTED: "setMuted",
        SET_VOLUME: "setVolume",
        GET_MUTED: "getMuted",
        GET_VOLUME: "getVolume",
        GET_CHANNEL: "getChannel",
        GET_CHANNEL_ID: "getChannelId",
        GET_CURRENT_TIME: "getCurrentTime",
        GET_DURATION: "getDuration",
        GET_ENDED: "getEnded",
        GET_PLAYBACK_STATS: "getPlaybackStats",
        GET_QUALITIES: "getQualities",
        GET_QUALITY: "getQuality",
        GET_VIDEO: "getVideo",
        IS_PAUSED: "isPaused"
    })
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.PLAYER_BRIDGE_API = Object.freeze({
        UPDATE_STATE: "updateState"
    }), e.PLAYER_BRIDGE_MESSAGE_NAMESPACE = "twitch-everywhere-player-bridge"
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.DEVICE_ID = "device_id", e.CLIENT_ID = "jzkbprff40iqj646a697cyrvl0zt2m6"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        return a.default.parse(t)
    }

    function i(t, e) {
        var n = new Date;
        n.setFullYear(n.getFullYear() + 10), document.cookie = a.default.serialize(t, e, {
            domain: c.default.hostname,
            expires: n,
            maxAge: f,
            path: c.default.pathname
        })
    }
    e.__esModule = !0, e.parseCookie = o, e.setCookie = i;
    var s = n(110),
        a = r(s),
        u = n(3),
        c = r(u),
        f = 31536e4
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        return {
            eventName: t,
            params: e,
            namespace: o.TE_MESSAGE_NAMESPACE
        }
    }
    e.__esModule = !0, e.default = r;
    var o = n(0)
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        return "object" === o(t.data) && t.data.namespace === i.TE_MESSAGE_NAMESPACE && t.data.eventName === e
    }
    e.__esModule = !0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.default = r;
    var i = n(0)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return o.test(t)
    }
    e.__esModule = !0, e.default = r;
    var o = /^https?:\/\/([\w\d]+\.)*twitch\.tv(:\d+)?$/
}, function (t, e, n) {
    "use strict";

    function r(t) {
        window.parent.postMessage(t, "*")
    }
    e.__esModule = !0, e.default = r
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        var n = o(e);
        return t.addEventListener("message", n),
            function () {
                return t.removeEventListener("message", n)
            }
    }

    function o(t) {
        return function (e) {
            if ((0, i.isTwitchOrigin)(e.origin)) return t(e)
        }
    }
    e.__esModule = !0, e.default = r;
    var i = n(0)
}, function (t, e, n) {
    var r = n(6),
        o = n(2),
        i = r(o, "Map");
    t.exports = i
}, function (t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(184),
        i = n(185),
        s = n(186),
        a = n(187),
        u = n(188);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = s, r.prototype.has = a, r.prototype.set = u, t.exports = r
}, function (t, e) {
    function n(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
        return t
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        var r = t[e];
        a.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n)
    }
    var o = n(51),
        i = n(42),
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return o(t) ? t : i(t, e) ? [t] : s(a(t))
    }
    var o = n(4),
        i = n(176),
        s = n(206),
        a = n(221);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = new t.constructor(t.byteLength);
        return new o(e).set(new o(t)), e
    }
    var o = n(118);
    t.exports = r
}, function (t, e, n) {
    var r = n(61),
        o = r(Object.getPrototypeOf, Object);
    t.exports = o
}, function (t, e, n) {
    var r = n(124),
        o = n(73),
        i = Object.prototype,
        s = i.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function (t) {
            return null == t ? [] : (t = Object(t), r(a(t), function (e) {
                return s.call(t, e)
            }))
        } : o;
    t.exports = u
}, function (t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e
    }
    t.exports = n
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = function () {
        function t() {
            r(this, t), this._map = {}, this._size = 0
        }
        return t.prototype.set = function (t, e) {
            this._map.hasOwnProperty(t) || (this._size += 1), this._map[t] = e
        }, t.prototype.get = function (t) {
            return this._map[t]
        }, t.prototype.has = function (t) {
            return this._map.hasOwnProperty(t)
        }, t.prototype.remove = function (t) {
            this._map.hasOwnProperty(t) && (this._size -= 1), delete this._map[t]
        }, t.prototype.size = function () {
            return this._size
        }, t.prototype.map = function () {
            return this._map
        }, t.prototype.values = function () {
            var t = [];
            for (var e in this._map) this._map.hasOwnProperty(e) && t.push(this._map[e]);
            return t
        }, t
    }();
    e.default = o
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        return (0, b.default)(t) ? "" + t.charAt(0).toUpperCase() + t.slice(1) : null
    }
    e.__esModule = !0;
    var u = n(1),
        c = n(0),
        f = n(104),
        l = r(f),
        p = n(24),
        h = n(3),
        d = r(h),
        _ = n(9),
        v = n(216),
        y = r(v),
        g = n(71),
        b = r(g),
        m = n(109),
        w = r(m),
        E = "video-player",
        S = function (t) {
            function e(n) {
                o(this, e);
                var r = i(this, t.call(this, n));
                return r.elementId = E, r.listeners = [], r.notifyAnyHost = n.notifyAnyHost || c.notifyAnyHost, r.Player = n.Player || Twitch.Player, r.TE_EVENTS = n.EmbedEvents || Twitch.EmbedEvents, r.playerBridge = null, r.goToChannel = r.goToChannel.bind(r), r
            }
            return s(e, t), e.prototype.componentWillReceiveProps = function (t) {
                if (this.player) {
                    var e = t.hostedChannel,
                        n = t.isHosting,
                        r = t.channel,
                        o = t.video,
                        i = t.collection,
                        s = r && !n && "" === e,
                        a = r && this.props.channel !== r,
                        u = !r && o && this.props.video !== o,
                        c = !r && i && this.props.collection !== i;
                    return n ? this.player.setChannel(e) : s || a ? this.player.setChannel(r) : u ? this.player.setVideo(o) : c ? this.player.setCollection(i) : void 0
                }
            }, e.prototype.componentDidMount = function () {
                var t = {
                    playsinline: !0,
                    allowfullscreen: !0,
                    player: p.PLAYER_TYPE,
                    targetOrigin: d.default.origin
                };
                this.props.video ? t.video = this.props.video : this.props.collection ? t.collection = this.props.collection : t.channel = this.props.channel, this.player = new this.Player(this.elementId, t), this._initListeners()
            }, e.prototype._initListeners = function () {
                var t = this;
                this.proxyVideoEventToHost("pause", function () {
                    return {}
                }), this.proxyVideoEventToHost("play", function () {
                    return {
                        sessionId: t.player.getPlaySessionId()
                    }
                }), this.proxyVideoEventToHost("ready", function () {
                    var e = document.getElementById(E).getElementsByTagName("iframe")[0];
                    return t.playerBridge = new l.default(t.player, e), {}
                }), this._playerSubscribe(this.TE_EVENTS.TRANSITION_TO_RECOMMENDED_VOD, function (t) {
                    var e = t.vodId,
                        n = (0, y.default)(d.default.queryParams, ["channel", "video"]);
                    n.video = e, d.default.updateParams((0, _.buildQueryParams)(n))
                })
            }, e.prototype._playerSubscribe = function (t, e) {
                this.player.addEventListener(t, e), this.listeners.push([t, e])
            }, e.prototype.componentWillUnmount = function () {
                var t = this;
                this.listeners.forEach(function (e) {
                    var n;
                    (n = t.player).removeEventListener.apply(n, e)
                }), this.player.destroy(), this.playerBridge.destroy()
            }, e.prototype.proxyVideoEventToHost = function (t, e) {
                var n = this,
                    r = function () {
                        var r = (0, c.buildTEMessage)("video." + t, e());
                        n.notifyAnyHost(r)
                    };
                this.player.addEventListener(t, r), this.listeners.push([t, r])
            }, e.prototype.goToChannel = function (t) {
                t.preventDefault(), window.open("https://www.twitch.tv/" + this.props.hostedChannel), this.player.pause()
            }, e.prototype.renderHeader = function (t) {
                var e = (0, w.default)({
                    "c-te__hosting__header": !0,
                    "c-te__hosting__header__hidden": !t
                });
                return (0, u.h)("div", {
                    className: e
                }, (0, u.h)("div", {
                    className: "c-te__hosting__avatar-container"
                }, (0, u.h)("figure", {
                    className: "tw-avatar tw-avatar--size-30"
                }, (0, u.h)("img", {
                    src: this.props.hostedChannelAvatarURL,
                    alt: "Hosted Channel " + a(this.props.hostedChannel) + "'s avatar"
                }))), (0, u.h)("div", {
                    className: "c-text"
                }, "Hosting ", (0, u.h)("a", {
                    href: "#",
                    className: "c-te__hosting__channel-name",
                    onClick: this.goToChannel
                }, a(this.props.hostedChannel))))
            }, e.prototype.render = function () {
                var t = this.props.isHosting,
                    e = (0, w.default)({
                        "c-te__video-player": !0,
                        "c-te__video-player__hosting": t
                    });
                return (0, u.h)("div", {
                    className: "c-te__video-player__container"
                }, this.renderHeader(t), (0, u.h)("div", {
                    id: this.elementId,
                    "data-test-video-player": !0,
                    className: e
                }))
            }, e
        }(u.Component);
    e.default = S
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.KRAKEN_BASE_URL = "https://api.twitch.tv/kraken", e.API_BASE_URL = "https://api.twitch.tv/api", e.TMI_BASE_URL = "https://tmi.twitch.tv"
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
        return f.default.get(l.KRAKEN_BASE_URL + "/channels/" + t, {
            version: e
        })
    }

    function o(t) {
        return f.default.get(l.TMI_BASE_URL + "/hosts?host=" + t)
    }

    function i(t) {
        return f.default.get(l.KRAKEN_BASE_URL + "/streams/" + t)
    }

    function s() {
        return f.default.get(l.KRAKEN_BASE_URL + "/user")
    }

    function a(t, e) {
        return f.default.get(l.KRAKEN_BASE_URL + "/users/" + t + "/follows/channels/" + e)
    }

    function u(t, e) {
        return f.default.get(l.KRAKEN_BASE_URL + "/users/" + t + "/subscriptions/" + e)
    }
    e.__esModule = !0, e.fetchChannel = r, e.fetchTargetHost = o, e.fetchStream = i, e.fetchUser = s, e.fetchUserFollowsChannel = a, e.fetchUserSubscribeChannel = u;
    var c = n(106),
        f = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c),
        l = n(46),
        p = 3
}, function (t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, e = "GbHi8bXd2f26Vj8NqmcnHFztp53C1pSdpVjsf9ANBCtpYHvWauyz0123456789", n = "", r = 0; r < t; r++) {
            var o = Math.floor(Math.random() * e.length);
            n += e.charAt(o)
        }
        return n
    }
    e.__esModule = !0, e.generate = r
}, function (t, e, n) {
    function r(t, e) {
        var n = s(t),
            r = !n && i(t),
            f = !n && !r && a(t),
            p = !n && !r && !f && c(t),
            h = n || r || f || p,
            d = h ? o(t.length, String) : [],
            _ = d.length;
        for (var v in t) !e && !l.call(t, v) || h && ("length" == v || f && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, _)) || d.push(v);
        return d
    }
    var o = n(143),
        i = n(67),
        s = n(4),
        a = n(68),
        u = n(60),
        c = n(213),
        f = Object.prototype,
        l = f.hasOwnProperty;
    t.exports = r
}, function (t, e) {
    function n(t, e, n, r) {
        var o = -1,
            i = null == t ? 0 : t.length;
        for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t);
        return n
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        "__proto__" == e && o ? o(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
    var o = n(56);
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n) {
        var r = e(t);
        return i(t) ? r : o(r, n(t))
    }
    var o = n(36),
        i = n(4);
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n) {
        return e === e ? s(t, e, n) : o(t, i, n)
    }
    var o = n(132),
        i = n(136),
        s = n(205);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return s(i(t, e, o), t + "")
    }
    var o = n(66),
        i = n(62),
        s = n(63);
    t.exports = r
}, function (t, e) {
    function n(t) {
        return function (e) {
            return t(e)
        }
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(6),
        o = function () {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = o
}, function (t, e, n) {
    (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(225))
}, function (t, e, n) {
    function r(t) {
        return o(t, s, i)
    }
    var o = n(52),
        i = n(59),
        s = n(72);
    t.exports = r
}, function (t, e, n) {
    var r = n(36),
        o = n(40),
        i = n(41),
        s = n(73),
        a = Object.getOwnPropertySymbols,
        u = a ? function (t) {
            for (var e = []; t;) r(e, i(t)), t = o(t);
            return e
        } : s;
    t.exports = u
}, function (t, e) {
    function n(t, e) {
        return !!(e = null == e ? r : e) && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        return function (n) {
            return t(e(n))
        }
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function () {
                for (var r = arguments, s = -1, a = i(r.length - e, 0), u = Array(a); ++s < a;) u[s] = r[e + s];
                s = -1;
                for (var c = Array(e + 1); ++s < e;) c[s] = r[s];
                return c[e] = n(u), o(t, this, c)
            }
    }
    var o = n(122),
        i = Math.max;
    t.exports = r
}, function (t, e, n) {
    var r = n(141),
        o = n(199),
        i = o(r);
    t.exports = i
}, function (t, e, n) {
    function r(t) {
        if ("string" == typeof t || o(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
    var o = n(23),
        i = 1 / 0;
    t.exports = r
}, function (t, e) {
    function n(t) {
        if (null != t) {
            try {
                return o.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
    var r = Function.prototype,
        o = r.toString;
    t.exports = n
}, function (t, e) {
    function n(t) {
        return t
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(135),
        o = n(8),
        i = Object.prototype,
        s = i.hasOwnProperty,
        a = i.propertyIsEnumerable,
        u = r(function () {
            return arguments
        }()) ? r : function (t) {
            return o(t) && s.call(t, "callee") && !a.call(t, "callee")
        };
    t.exports = u
}, function (t, e, n) {
    (function (t) {
        var r = n(2),
            o = n(217),
            i = "object" == typeof e && e && !e.nodeType && e,
            s = i && "object" == typeof t && t && !t.nodeType && t,
            a = s && s.exports === i,
            u = a ? r.Buffer : void 0,
            c = u ? u.isBuffer : void 0,
            f = c || o;
        t.exports = f
    }).call(e, n(43)(t))
}, function (t, e, n) {
    function r(t) {
        if (!i(t)) return !1;
        var e = o(t);
        return e == a || e == u || e == s || e == c
    }
    var o = n(5),
        i = n(7),
        s = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = r
}, function (t, e) {
    function n(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
    var r = 9007199254740991;
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        return "string" == typeof t || !i(t) && s(t) && o(t) == a
    }
    var o = n(5),
        i = n(4),
        s = n(8),
        a = "[object String]";
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return s(t) ? o(t, !0) : i(t)
    }
    var o = n(49),
        i = n(140),
        s = n(13);
    t.exports = r
}, function (t, e) {
    function n() {
        return []
    }
    t.exports = n
}, function (t, e) {
    ! function (t) {
        "use strict";

        function e(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function n(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function r(t) {
            var e = {
                next: function () {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return y.iterable && (e[Symbol.iterator] = function () {
                return e
            }), e
        }

        function o(t) {
            this.map = {}, t instanceof o ? t.forEach(function (t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function (t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e])
            }, this)
        }

        function i(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function s(t) {
            return new Promise(function (e, n) {
                t.onload = function () {
                    e(t.result)
                }, t.onerror = function () {
                    n(t.error)
                }
            })
        }

        function a(t) {
            var e = new FileReader,
                n = s(e);
            return e.readAsArrayBuffer(t), n
        }

        function u(t) {
            var e = new FileReader,
                n = s(e);
            return e.readAsText(t), n
        }

        function c(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
            return n.join("")
        }

        function f(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function l() {
            return this.bodyUsed = !1, this._initBody = function (t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (y.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (y.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (y.arrayBuffer && y.blob && b(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !m(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = f(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, y.blob && (this.blob = function () {
                var t = i(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }), this.text = function () {
                var t = i(this);
                if (t) return t;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, y.formData && (this.formData = function () {
                return this.text().then(d)
            }), this.json = function () {
                return this.text().then(JSON.parse)
            }, this
        }

        function p(t) {
            var e = t.toUpperCase();
            return w.indexOf(e) > -1 ? e : t
        }

        function h(t, e) {
            e = e || {};
            var n = e.body;
            if (t instanceof h) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new o(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new o(e.headers)), this.method = p(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function d(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function (t) {
                if (t) {
                    var n = t.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }), e
        }

        function _(t) {
            var e = new o;
            return t.split(/\r?\n/).forEach(function (t) {
                var n = t.split(":"),
                    r = n.shift().trim();
                if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o)
                }
            }), e
        }

        function v(t, e) {
            e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new o(e.headers), this.url = e.url || "", this._initBody(t)
        }
        if (!t.fetch) {
            var y = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function () {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (y.arrayBuffer) var g = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = function (t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                m = ArrayBuffer.isView || function (t) {
                    return t && g.indexOf(Object.prototype.toString.call(t)) > -1
                };
            o.prototype.append = function (t, r) {
                t = e(t), r = n(r);
                var o = this.map[t];
                this.map[t] = o ? o + "," + r : r
            }, o.prototype.delete = function (t) {
                delete this.map[e(t)]
            }, o.prototype.get = function (t) {
                return t = e(t), this.has(t) ? this.map[t] : null
            }, o.prototype.has = function (t) {
                return this.map.hasOwnProperty(e(t))
            }, o.prototype.set = function (t, r) {
                this.map[e(t)] = n(r)
            }, o.prototype.forEach = function (t, e) {
                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }, o.prototype.keys = function () {
                var t = [];
                return this.forEach(function (e, n) {
                    t.push(n)
                }), r(t)
            }, o.prototype.values = function () {
                var t = [];
                return this.forEach(function (e) {
                    t.push(e)
                }), r(t)
            }, o.prototype.entries = function () {
                var t = [];
                return this.forEach(function (e, n) {
                    t.push([n, e])
                }), r(t)
            }, y.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            h.prototype.clone = function () {
                return new h(this, {
                    body: this._bodyInit
                })
            }, l.call(h.prototype), l.call(v.prototype), v.prototype.clone = function () {
                return new v(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            }, v.error = function () {
                var t = new v(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var E = [301, 302, 303, 307, 308];
            v.redirect = function (t, e) {
                if (E.indexOf(e) === -1) throw new RangeError("Invalid status code");
                return new v(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = o, t.Request = h, t.Response = v, t.fetch = function (t, e) {
                return new Promise(function (n, r) {
                    var o = new h(t, e),
                        i = new XMLHttpRequest;
                    i.onload = function () {
                        var t = {
                            status: i.status,
                            statusText: i.statusText,
                            headers: _(i.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in i ? i.response : i.responseText;
                        n(new v(e, t))
                    }, i.onerror = function () {
                        r(new TypeError("Network request failed"))
                    }, i.ontimeout = function () {
                        r(new TypeError("Network request failed"))
                    }, i.open(o.method, o.url, !0), "include" === o.credentials && (i.withCredentials = !0), "responseType" in i && y.blob && (i.responseType = "blob"), o.headers.forEach(function (t, e) {
                        i.setRequestHeader(e, t)
                    }), i.send(void 0 === o._bodyInit ? null : o._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}, , , , , function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        var e = (0, d.getInitFields)(t);
        return (0, d.trackEvent)(e)
    }
    e.__esModule = !0, e.UnrecognizedLayoutError = void 0;
    var u = n(1),
        c = n(207),
        f = r(c),
        l = n(3),
        p = r(l),
        h = n(47),
        d = n(24),
        _ = n(28),
        v = n(108),
        y = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(v),
        g = n(96),
        b = r(g),
        m = n(95),
        w = r(m),
        E = n(97),
        S = r(E),
        T = n(98),
        x = r(T),
        A = n(93),
        j = r(A),
        O = n(92),
        P = r(O),
        C = n(99),
        k = r(C),
        R = function (t) {
            function e() {
                o(this, e);
                var n = i(this, t.apply(this, arguments));
                return n.defaultParams = {
                    layout: "video-with-chat",
                    theme: "light",
                    isHosting: !1,
                    hostedChannel: "",
                    hostedChannelAvatarURL: "",
                    channelId: 0,
                    video: "",
                    collection: ""
                }, n.hostChannel = n._hostChannel.bind(n), n.unhostChannel = n._unhostChannel.bind(n), n.state = (0, f.default)({}, n.defaultParams, p.default.queryParams), n
            }
            return s(e, t), e.prototype._hostChannel = function (t) {
                var e = this;
                return (0, h.fetchChannel)(t).then(function (n) {
                    var r = n.logo;
                    e.setState({
                        hostedChannel: t,
                        isHosting: !0,
                        hostedChannelAvatarURL: r
                    })
                })
            }, e.prototype._unhostChannel = function () {
                this.setState({
                    hostedChannel: "",
                    isHosting: !1,
                    hostedChannelAvatarURL: ""
                })
            }, e.prototype.componentDidMount = function () {
                var t = this,
                    e = (0, _.parseCookie)(document.cookie).login,
                    n = this.state.channel,
                    r = {
                        channel: (0, h.fetchChannel)(n),
                        stream: (0, h.fetchStream)(n)
                    };
                e && (r.user = (0, h.fetchUser)(), r.followed = (0, h.fetchUserFollowsChannel)(e, n), r.subscribed = (0, h.fetchUserSubscribeChannel)(e, n)), y.allByStatus(r).then(function (e) {
                    a(e), t.setState({
                        channelId: e.channel._id
                    })
                })
            }, e.prototype.handleNoMatchingLayout = function (t) {
                var e = t.queryParams;
                throw new I(e.layout)
            }, e.prototype.render = function () {
                return (0, u.h)("div", {
                    id: "app",
                    className: "c-te"
                }, (0, u.h)(P.default, null), (0, u.h)(k.default, null), (0, u.h)(j.default, {
                    channelId: this.state.channelId,
                    unhostChannel: this.unhostChannel,
                    hostChannel: this.hostChannel
                }), (0, u.h)(S.default, {
                    defaults: this.defaultParams,
                    currentState: this.state
                }, (0, u.h)(x.default, {
                    layoutName: "video-with-chat",
                    component: b.default
                }), (0, u.h)(x.default, {
                    layoutName: "video",
                    component: w.default
                }), (0, u.h)(x.default, {
                    component: this.handleNoMatchingLayout
                })))
            }, e
        }(u.Component);
    e.default = R;
    var I = e.UnrecognizedLayoutError = function (t) {
        function e(n) {
            return o(this, e), i(this, t.call(this, "Could not find a layout matching: " + n))
        }
        return s(e, t), e
    }(Error)
}, function (t, e, n) {
    "use strict";
    var r = n(224),
        o = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    n(74), window.Promise || (window.Promise = o.default), "function" != typeof Object.assign && (Object.assign = function (t, e) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (null != o)
                for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
        }
        return n
    })
}, function (t, e) {}, , function (t, e, n) {
    "use strict";
    e.__esModule = !0, e.Stats = void 0;
    var r = n(84),
        o = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    e.Stats = o.default, e.default = {
        Stats: o.default
    }
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        var n = u[t];
        if (!n) throw new Error("Invalid environment - got " + t);
        if (!e) throw new Error("Invalid prefix - got " + e);
        window[a] = window[a] || {};
        var r = window[a];
        r[t] || (r[t] = new c(n));
        var o = r[t];
        return new f(o, e)
    }
    e.__esModule = !0;
    var i = 500,
        s = 20,
        a = "__Twitch__statsInstances_1",
        u = {
            production: {
                addr: "https://client-event-reporter.twitch.tv"
            },
            darklaunch: {
                addr: "https://client-event-reporter-darklaunch.twitch.tv"
            }
        };
    u.staging = u.darklaunch, u.development = u.darklaunch, u.test = u.darklaunch;
    var c = function () {
            function t(e) {
                if (r(this, t), !e) throw new Error("config is required");
                this._addr = e.addr, this._resetCombinedStats(), this._recordDelay = i, this._maxPendingStats = s
            }
            return t.prototype.logCounter = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                this._combinedStats.counters.push({
                    key: t,
                    count: e,
                    sample_rate: n
                }), this._record()
            }, t.prototype.logTimer = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                this._combinedStats.timers.push({
                    key: t,
                    milliseconds: e,
                    sample_rate: n
                }), this._record()
            }, t.prototype.logLine = function (t) {
                this._combinedStats.log_lines.push({
                    log_line: t
                }), this._record()
            }, t.prototype.logGauge = function (t) {
                this._combinedStats.gauges.push({
                    key: t
                }), this._record()
            }, t.prototype._resetCombinedStats = function () {
                this._combinedStats = {
                    timers: [],
                    counters: [],
                    log_lines: [],
                    gauges: []
                }
            }, t.prototype._record = function () {
                var t = this;
                this._numPendingStats() > this._maxPendingStats ? (this._flushTimeout && (clearTimeout(this._flushTimeout), this._flushTimeout = null), this._flush()) : this._flushTimeout || (this._flushTimeout = setTimeout(function () {
                    t._flushTimeout = null, t._flush()
                }, this._recordDelay))
            }, t.prototype._flush = function () {
                var t = this._combinedStats;
                this._resetCombinedStats();
                var e = this._addr + "/v1/stats",
                    n = this._createCorsRequest("POST", e);
                if (!n) return void console.log("WARNING: Cannot send stats because CORS is unsupported");
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify(t))
            }, t.prototype._numPendingStats = function () {
                var t = this._combinedStats;
                return t.timers.length + t.counters.length + t.log_lines.length + t.gauges.length
            }, t.prototype._createCorsRequest = function (t, e) {
                var n = new XMLHttpRequest;
                return "withCredentials" in n ? n.open(t, e, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest, n.open(t, e)) : n = null, n
            }, t
        }(),
        f = function () {
            function t(e, n) {
                if (r(this, t), !e) throw new Error("Missing backend");
                if (!n) throw new Error("Missing prefix");
                this._backend = e, this._prefix = n
            }
            return t.prototype.logCounter = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                this._backend.logCounter(this._prefix + "." + t, e, n)
            }, t.prototype.logTimer = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                this._backend.logTimer(this._prefix + "." + t, e, n)
            }, t.prototype.logLine = function (t) {
                this._backend.logLine(t)
            }, t.prototype.logGauge = function (t) {
                this._backend.logGauge(t)
            }, t.prototype.setPrefix = function (t) {
                if (!t) throw new Error("Missing prefix");
                this._prefix = t
            }, t
        }();
    e.StatsBackend = c, e.PrefixedStats = f, e.default = {
        getInstance: o
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = n(16),
        u = r(a),
        c = n(10),
        f = r(c),
        l = n(11),
        p = r(l),
        h = n(44),
        d = r(h),
        _ = f.default._getLogger("IframeClient"),
        v = function (t) {
            function e(n) {
                o(this, e);
                var r = i(this, t.call(this, n));
                return r._parentUrl = n.parentUrl, r._pendingResponses = new d.default, r._listens = new u.default, window.addEventListener("message", r.receiveMessage.bind(r), !1), r
            }
            return s(e, t), e.prototype.connect = function () {
                window.parent.postMessage({
                    twitch_protocol: "pubsub",
                    type: "connect"
                }, this._parentUrl)
            }, e.prototype.verify = function () {
                window.parent.postMessage({
                    twitch_protocol: "pubsub",
                    type: "verify"
                }, this._parentUrl), this._verifyTimeout = setTimeout(this._unverified.bind(this), 1e3)
            }, e.prototype.Listen = function (t) {
                _.debug("listening on " + t.topic);
                var e = this._generateNonce(),
                    n = {
                        twitch_protocol: "pubsub",
                        type: "LISTEN",
                        nonce: e,
                        data: {
                            topics: [t.topic],
                            auth_token: t.auth
                        }
                    };
                this._send(e, n, t)
            }, e.prototype.Unlisten = function (t) {
                if (_.debug("unlistening on " + t.topic + "(" + this._listens.count(t.topic) + " listeners)"), this._listens.count(t.topic) > 1) return t.message && this._listens.off(t.topic, t.message), t.success && t.success(), void _.debug("now have " + this._listens.count(t.topic) + " listeners");
                var e = this._generateNonce(),
                    n = {
                        twitch_protocol: "pubsub",
                        type: "UNLISTEN",
                        nonce: e,
                        data: {
                            topics: [t.topic]
                        }
                    };
                this._send(e, n, t)
            }, e.prototype._send = function (t, e, n) {
                this._pendingResponses.set(t, {
                    timeout: setTimeout(this._onResponseTimeout.bind(this), 3e4, t),
                    topic: n.topic,
                    auth: n.auth,
                    message: e,
                    callbacks: {
                        success: n.success,
                        failure: n.failure,
                        message: n.message
                    }
                }), window.parent.postMessage(e, this._parentUrl)
            }, e.prototype.receiveMessage = function (t) {
                if ("pubsub" == t.data.twitch_protocol) switch (_.debug("Received message: " + JSON.stringify(t.data)), t.data.type) {
                    case "connected":
                        this._trigger("connected");
                        break;
                    case "disconnected":
                        this._trigger("disconnected");
                        break;
                    case "success":
                        this.handleResponse(!0, t.data);
                        break;
                    case "failure":
                        this.handleResponse(!1, t.data);
                        break;
                    case "message":
                        this.handleMessage(t.data.topic, t.data.message);
                        break;
                    case "verify":
                        this._verified()
                }
            }, e.prototype.handleResponse = function (t, e) {
                if (this._pendingResponses.has(e.nonce)) {
                    var n = this._pendingResponses.get(e.nonce);
                    _.debug("ResponseInfo: " + JSON.stringify(n)), clearTimeout(n.timeout), this._pendingResponses.remove(e.nonce), t ? (n.callbacks.message && ("LISTEN" === n.message.type ? this._listens.on(n.topic, n.callbacks.message, this) : "UNLISTEN" === n.message.type && this._listens.off(n.topic, n.callbacks.message, this)), n.callbacks.success && n.callbacks.success()) : n.callbacks.failure && n.callbacks.failure(e.error)
                }
            }, e.prototype.handleMessage = function (t, e) {
                _.debug("received '" + e + "' on topic " + t), this._listens._trigger(t, e)
            }, e.prototype._onResponseTimeout = function (t) {
                _.debug("response timed out: " + t)
            }, e.prototype._verified = function () {
                _.debug("Verified"), clearTimeout(this._verifyTimeout), this._trigger("verified")
            }, e.prototype._unverified = function () {
                window.removeEventListener("message", this.receiveMessage.bind(this), !1), this._trigger("unverified")
            }, e.prototype._generateNonce = function () {
                return p.default.generateString(30)
            }, e
        }(u.default);
    e.default = v
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = n(10),
        i = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        s = i.default._getLogger("IframeHost"),
        a = function () {
            function t(e) {
                r(this, t), this._driver = e, this._sources = [], this._driver.on("connected", this.handleConnected, this), this._driver.on("disconnected", this.handleDisconnected, this), window.addEventListener("message", this.receiveMessage.bind(this), !1)
            }
            return t.prototype.receiveMessage = function (t) {
                if ("pubsub" == t.data.twitch_protocol) switch (s.debug("Received message: " + JSON.stringify(t.data)), t.data.type) {
                    case "LISTEN":
                        this.handleListen(t.source, t.data.nonce, t.data.data);
                        break;
                    case "UNLISTEN":
                        this.handleUnlisten(t.source, t.data.nonce, t.data.data);
                        break;
                    case "connect":
                        this._sources.push(t.source), this._driver.connect();
                        break;
                    case "verify":
                        t.source.postMessage({
                            twitch_protocol: "pubsub",
                            type: "verify"
                        }, "*")
                }
            }, t.prototype.handleListen = function (t, e, n) {
                var r = function () {
                        t.postMessage({
                            twitch_protocol: "pubsub",
                            type: "success",
                            nonce: e
                        }, "*")
                    },
                    o = function (n) {
                        t.postMessage({
                            twitch_protocol: "pubsub",
                            type: "failure",
                            nonce: e,
                            error: n
                        }, "*")
                    },
                    i = function (e) {
                        t.postMessage({
                            twitch_protocol: "pubsub",
                            type: "message",
                            topic: n.topics[0],
                            message: e
                        }, "*")
                    };
                this._driver.Listen({
                    topic: n.topics[0],
                    auth: n.auth_token,
                    success: r,
                    failure: o,
                    message: i
                })
            }, t.prototype.handleUnlisten = function (t, e, n) {
                var r = function () {
                        t.postMessage({
                            twitch_protocol: "pubsub",
                            type: "success",
                            nonce: e
                        }, "*")
                    },
                    o = function (n) {
                        t.postMessage({
                            twitch_protocol: "pubsub",
                            type: "failure",
                            nonce: e,
                            error: n
                        }, "*")
                    },
                    i = function (e) {
                        t.postMessage({
                            twitch_protocol: "pubsub",
                            type: "message",
                            topic: n.topics[0],
                            message: e
                        }, "*")
                    };
                this._driver.Unlisten({
                    topic: n.topics[0],
                    auth: n.auth_token,
                    success: r,
                    failure: o,
                    message: i
                })
            }, t.prototype.handleConnected = function () {
                for (var t = 0; t < this._sources.length; t++) this._sources[t].postMessage({
                    twitch_protocol: "pubsub",
                    type: "connected"
                }, "*")
            }, t.prototype.handleDisconnected = function () {
                for (var t = 0; t < this._sources.length; t++) this._sources[t].postMessage({
                    twitch_protocol: "pubsub",
                    type: "disconnected"
                }, "*")
            }, t
        }();
    e.default = a
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        if ("production" !== t && "staging" !== t && "darklaunch" !== t) throw "Invalid Pubsub instance environment";
        return null === window.__Twitch__pubsubInstances[t] && (window.__Twitch__pubsubInstances[t] = new j(t)), window.__Twitch__pubsubInstances[t]
    }
    e.__esModule = !0;
    var u = n(16),
        c = r(u),
        f = n(10),
        l = r(f),
        p = n(11),
        h = r(p),
        d = n(85),
        _ = r(d),
        v = n(86),
        y = r(v),
        g = n(90),
        b = r(g),
        m = n(83),
        w = n(89),
        E = r(w),
        S = l.default._getLogger("PubsubDriver"),
        T = 3e4,
        x = /^https?:\/\/([\w-]+\.)*twitch\.tv(:\d+)?\/.*$/,
        A = 1,
        j = function (t) {
            function e(n) {
                o(this, e);
                var r = i(this, t.call(this, n));
                return r._env = h.default.urlParams.pubsub_environment || n, r._clientReady = !1, r._hasDisconnected = !1, r._queuedRequests = [], r._stats = m.Stats.getInstance(r._env, "pubsub-js-client"), r._numDisconnects = 0, h.default.inIframe() && x.test(document.referrer) ? (S.debug("Driver is in an iframe"), r._client = new _.default({
                    parentUrl: document.referrer
                }), r._clientType = "iframe-verified") : (S.debug("Driver is not in an iframe"), r._client = new b.default({
                    env: r._env,
                    stats: r._stats
                }), r._iframeHost = new y.default(r._client), r._clientType = "ws"), r._stats.setPrefix("pubsub-js-client." + r._clientType), "true" === h.default.urlParams.force_pubsub_tester ? A = 1 : "false" === h.default.urlParams.force_pubsub_tester && (A = 0), Math.random() < A && window.setTimeout(r.runTest.bind(r), T), r._client.on("unverified", r._clientUnverified, r), r._client.on("verified", r._clientVerified, r), r._client.verify(), r
            }
            return s(e, t), e.prototype.runTest = function () {
                this._tester = new E.default({
                    env: this._env,
                    driver: this,
                    stats: this._stats
                })
            }, e.prototype.connect = function () {}, e.prototype.Listen = function (t) {
                this._clientReady ? this._client.Listen(t) : this._queuedRequests.push({
                    type: "LISTEN",
                    opts: t
                })
            }, e.prototype.Unlisten = function (t) {
                this._clientReady ? this._client.Unlisten(t) : this._queuedRequests.push({
                    type: "UNLISTEN",
                    opts: t
                })
            }, e.prototype._flushQueuedRequests = function () {
                for (S.debug("Flushing " + this._queuedRequests.length + " queued requests"); this._queuedRequests.length > 0;) {
                    var t = this._queuedRequests.shift();
                    switch (t.type) {
                        case "LISTEN":
                            this._client.Listen(t.opts);
                            break;
                        case "UNLISTEN":
                            this._client.Unlisten(t.opts)
                    }
                }
            }, e.prototype._clientConnected = function () {
                S.debug("Client connected"), this._client.on("disconnected", this._clientDisconnected, this), this._stats.logCounter("connected", 1), this._trigger("connected"), this._hasDisconnected && this._trigger("reconnected"), this._clientReady = !0, this._flushQueuedRequests()
            }, e.prototype._clientDisconnected = function () {
                S.debug("Client disconnected"), this._trigger("disconnected"), this._clientReady = !1, this._numDisconnects += 1, this._hasDisconnected = !0
            }, e.prototype._clientVerified = function () {
                S.debug("Client verified (type = " + this._clientType + ")"), this._stats.setPrefix("pubsub-js-client." + this._clientType), this._client.on("connected", this._clientConnected, this), this._client.connect(), window.setInterval(this._sendClientTypeGauge.bind(this), 6e4)
            }, e.prototype._clientUnverified = function () {
                S.debug("Unverified IframeClient"), this._client.off("verified", this._clientVerified, this), this._client.off("unverified", this._clientUnverified, this), this._client = new b.default({
                    env: this._env,
                    stats: this._stats
                }), this._clientType = "iframe-unverified", this._client.on("unverified", this._clientUnverified, this), this._client.on("verified", this._clientVerified, this), this._client.verify()
            }, e.prototype._sendClientTypeGauge = function () {
                this._stats.logGauge("pubsub-js-client." + this._clientType)
            }, e
        }(c.default);
    window.__Twitch__pubsubInstances = window.__Twitch__pubsubInstances || {
        production: null,
        staging: null,
        darklaunch: null
    }, e.default = {
        getInstance: a
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = n(16),
        u = r(a),
        c = n(10),
        f = r(c),
        l = n(11),
        p = r(l),
        h = f.default._getLogger("PubsubSocket"),
        d = function (t) {
            function e(n) {
                o(this, e);
                var r = i(this, t.call(this, n));
                return r._opts = n, r._addr = n.addr, r._stats = n.stats, r._connectionAttempts = 0, r._sentPing = r._receivedPong = !1, r._id = "[" + p.default.generateString(10) + "] ", window.addEventListener("beforeunload", r._beforeUnload.bind(r)), r
            }
            return s(e, t), e.prototype.connect = function () {
                h.debug(this._id + "connecting to " + this._addr), this._connecting = !0, this._socketConnectTime = p.default.time.now();
                try {
                    this._socket = new WebSocket(this._addr), this._socket.onmessage = this._onMessage.bind(this), this._socket.onerror = this._onError.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onopen = this._onOpen.bind(this)
                } catch (t) {
                    this._stats.logCounter("socket.error.security_err", 1, 1), this._trigger("connection_failure")
                }
            }, e.prototype.close = function () {
                h.debug(this._id + "closing"), this._closing = !0, this._clearTimeouts(), this._socket.close()
            }, e.prototype.send = function (t) {
                h.debug(this._id + "sending " + JSON.stringify(t)), this._isReady() ? this._socket.send(JSON.stringify(t)) : this._trigger("error", "not_ready")
            }, e.prototype._isReady = function () {
                return h.debug(this._id + "_isReady called"), !!this._socket && this._socket.readyState === WebSocket.OPEN
            }, e.prototype._onMessage = function (t) {
                h.debug(this._id + "received message: " + t.data);
                try {
                    var e = JSON.parse(t.data);
                    switch (e.type) {
                        case "RESPONSE":
                            this._trigger("response", e);
                            break;
                        case "MESSAGE":
                            this._trigger("message", e);
                            break;
                        case "PONG":
                            this._receivedPong = !0;
                            break;
                        case "RECONNECT":
                            this._trigger("reconnect")
                    }
                } catch (t) {
                    this._stats.logLine("onMessage JSON Parse error: " + t)
                }
            }, e.prototype._onError = function (t) {
                h.debug(this._id + "error: " + JSON.stringify(t))
            }, e.prototype._onClose = function (t) {
                if (h.debug(this._id + "onClose triggered with code " + t.code + "(closing = " + this._closing + ", connecting = " + this._connecting + ")"), this._clearTimeouts(), this._connecting) {
                    var e = Math.pow(2, this._connectionAttempts);
                    e > 120 && (e = 120), h.debug(this._id + "reconnecting in " + e + " seconds"), this._connectionAttempts += 1, this._nextConnectionAttempt = setTimeout(this.connect.bind(this), 1e3 * e)
                } else if (this._closing) this._closed = !0, this._trigger("connection_failure");
                else {
                    if (this._windowUnloading) return;
                    h.debug(this._id + "unexpected close"), this._stats.logCounter("socket.error.unexpected_closed", 1, 1), this._stats.logCounter("socket.error.close." + t.code, 1, 1);
                    var n = "pubsub-js-client unexpected_close. code: " + t.code + ", reason: " + t.reason + ", wasClean: " + t.wasClean;
                    this._stats.logLine(n), this._closed = !0, this._trigger("connection_failure")
                }
            }, e.prototype._onOpen = function (t) {
                h.debug(this._id + " socket opened"), this._connectionAttempts = 0, this._connecting = !1, this._socketConnectTime && this._stats.logTimer("socket.connect", p.default.time.now() - this._socketConnectTime, .1), this._stats.logCounter("socket.connection_retries." + this._connectionAttempts, 1, .1), this._ping(), this._pingInterval = window.setInterval(this._ping.bind(this), 24e4), this._trigger("open")
            }, e.prototype._ping = function () {
                h.debug(this._id + "sending PING");
                try {
                    this._socket.send(JSON.stringify({
                        type: "PING"
                    })), this._sentPing = !0, this._pongTimeout && clearTimeout(this._pongTimeout), this._pongTimeout = setTimeout(this._pongTimedOut.bind(this), 3e4)
                } catch (t) {
                    this._stats.logCounter("socket.error.ping_send_error", 1, 1), this._stats.logLine("ping error: closed: " + this._closed + ", error: " + t), this.close()
                }
            }, e.prototype._pongTimedOut = function () {
                this._sentPing && !this._receivedPong && (h.debug(this._id + "Pong timed out!"), this._stats.logCounter("socket.error.pong_timed_out", 1, 1), this.close())
            }, e.prototype._clearTimeouts = function () {
                this._sentPing = this._receivedPong = !1, clearTimeout(this._pongTimeout), clearInterval(this._pingInterval), clearTimeout(this._nextConnectionAttempt)
            }, e.prototype._beforeUnload = function () {
                this._windowUnloading = !0
            }, e
        }(u.default);
    e.default = d
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var i = n(11),
        s = r(i),
        a = n(10),
        u = r(a),
        c = "https://pubster.twitch.tv/publish",
        f = "https://pubster-darklaunch.twitch.tv/publish",
        l = "pubsubtest.unique.",
        p = "pubsubtest.shared." + s.default.randomInt(10),
        h = u.default._getLogger("PubsubTest"),
        d = function () {
            function t(e) {
                switch (o(this, t), h.debug("PubsubTest enabled"), this._env = e.env, this._driver = e.driver, this._stats = e.stats, this._env) {
                    case "production":
                        this._addr = c;
                        break;
                    case "darklaunch":
                        this._addr = f;
                        break;
                    default:
                        this._env = "production", this._addr = c
                }
                this._statKeys = {
                    uniqueSuccess: "test.unique.success",
                    uniqueFailure: "test.unique.failure",
                    sharedSuccess: "test.shared.success",
                    sharedFailure: "test.shared.failure"
                }, this._uniqueKey = l + s.default.generateString(20), this._sharedKey = p, this._listeningUnique = this._listeningShared = !1, this.sendListens()
            }
            return t.prototype.sendListens = function () {
                this._driver.Listen({
                    topic: this._uniqueKey,
                    auth: "",
                    success: this._gotUniqueOk.bind(this),
                    failure: this._gotUniqueFail.bind(this),
                    message: this._gotUniqueMessage.bind(this)
                }), this._driver.Listen({
                    topic: this._sharedKey,
                    auth: "",
                    success: this._gotSharedOk.bind(this),
                    failure: this._gotSharedFail.bind(this),
                    message: this._gotSharedMessage.bind(this)
                })
            }, t.prototype._gotUniqueOk = function () {
                this._listeningUnique = !0, this._listeningShared && this.startTesting()
            }, t.prototype._gotUniqueFail = function (t) {}, t.prototype._gotSharedOk = function () {
                this._listeningShared = !0, this._listeningUnique && this.startTesting()
            }, t.prototype._gotSharedFail = function (t) {}, t.prototype.startTesting = function () {
                h.debug("startTesting"), this._driver.on("connected", this.resumeTesting, this), this._driver.on("disconnected", this.stopTesting, this), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
            }, t.prototype.resumeTesting = function () {
                h.debug("resumeTesting"), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
            }, t.prototype.stopTesting = function () {
                h.debug("stopTesting"), clearInterval(this._publishInterval), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1
            }, t.prototype.checkAndSend = function () {
                h.debug("checkAndSend: unique: sent = " + this._sentUniqueMessage + ", received = " + this._receivedUniqueMessage), !this._receivedUniqueMessage && this._sentUniqueMessage && (h.debug("unique failure"), this._stats.logCounter(this._statKeys.uniqueFailure, 1, 1)), !this._receivedSharedMessage && this._sentSharedMessage && (h.debug("shared failure"), this._stats.logCounter(this._statKeys.sharedFailure, 1, 1)), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1, this._expectedMessage = s.default.generateString(30), $.ajax({
                    type: "POST",
                    url: this._addr,
                    contentType: "application/json",
                    timeout: 3e4,
                    data: JSON.stringify({
                        topics: [this._uniqueKey],
                        data: this._expectedMessage
                    }),
                    success: function () {
                        h.debug("unique message sent"), this._sentUniqueMessage = !0
                    }.bind(this)
                }), this._sentUniqueMessageTime = s.default.time.now(), Math.random() < 1e-4 && ($.ajax({
                    type: "POST",
                    url: this._addr,
                    contentType: "application/json",
                    timeout: 3e4,
                    data: JSON.stringify({
                        topics: [this._sharedKey],
                        data: this._expectedMessage
                    }),
                    success: function () {
                        h.debug("shared message sent"), this._sentSharedMessage = !0
                    }.bind(this)
                }), this._sentSharedMessageTime = s.default.time.now())
            }, t.prototype._gotUniqueMessage = function (t) {
                if (h.debug("received unique message: " + t), t === this._expectedMessage) {
                    var e = s.default.time.now() - this._sentUniqueMessageTime;
                    this._receivedUniqueMessage = !0, this._stats.logTimer(this._statKeys.uniqueSuccess, e, .1), this._stats.logCounter(this._statKeys.uniqueSuccess, 1, .1)
                }
            }, t.prototype._gotSharedMessage = function (t) {
                if (t === this._expectedMessage) {
                    var e = s.default.time.now() - this._sentSharedMessageTime;
                    this._receivedSharedMessage = !0, this._stats.logTimer(this._statKeys.sharedSuccess, e, .1), this._stats.logCounter(this._statKeys.sharedSuccess, 1, .1)
                }
            }, t
        }();
    e.default = d
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = n(16),
        u = r(a),
        c = n(10),
        f = r(c),
        l = n(11),
        p = r(l),
        h = n(88),
        d = r(h),
        _ = n(44),
        v = r(_),
        y = f.default._getLogger("WebsocketClient"),
        g = "wss://pubsub-edge.twitch.tv:443/v1",
        b = "wss://pubsub-edge-darklaunch.twitch.tv:443/v1",
        m = "ws://localhost:6900/v1",
        w = function (t) {
            function e(n) {
                o(this, e);
                var r = i(this, t.call(this, n));
                switch (r._opts = n, r._env = n.env, r._stats = n.stats, r._env) {
                    case "production":
                        r._addr = g;
                        break;
                    case "darklaunch":
                        r._addr = b;
                        break;
                    case "development":
                        r._addr = m;
                        break;
                    default:
                        r._addr = g
                }
                return window.WebSocket ? (r._queuedRequests = [], r._pendingResponses = new v.default, r._pendingReplayResponses = new v.default, r._listens = new u.default, r._replays = new v.default, r._replaysSize = 0, r._firstConnectTime = r._firstListenTime = 0, r._connectCalled = r._reconnecting = !1, r._primarySocket = new d.default({
                    stats: r._stats,
                    addr: r._addr
                }), r._bindPrimary(r._primarySocket), r) : i(r)
            }
            return s(e, t), e.prototype.verify = function () {
                this._trigger("verified")
            }, e.prototype.connect = function () {
                window.WebSocket && (this._connectCalled ? this._primarySocket._isReady() && this._trigger("connected") : (this._connectCalled = !0, this._primarySocket.connect()))
            }, e.prototype._bindPrimary = function (t) {
                t.on("open", this._onPrimaryOpen, this), t.on("response", this._onResponse, this), t.on("message", this._onMessage, this), t.on("reconnect", this._onReconnect, this), t.on("connection_failure", this._onConnectionFailure, this)
            }, e.prototype._unbindPrimary = function (t) {
                t.off("open", this._onPrimaryOpen, this), t.off("response", this._onResponse, this), t.off("message", this._onMessage, this), t.off("reconnect", this._onReconnect, this), t.off("connection_failure", this._onConnectionFailure, this)
            }, e.prototype._onPrimaryOpen = function () {
                y.debug("primary open: " + this._primarySocket._id), 0 === this._firstConnectTime && (this._firstConnectTime = p.default.time.now(), this._firstListenTimeout = setTimeout(this._neverListened.bind(this), 45e3)), this._connected = !0, this._trigger("connected"), this._flushQueuedRequests()
            }, e.prototype._onResponse = function (t) {
                if (y.debug("primary response: " + JSON.stringify(t)), this._pendingResponses.has(t.nonce)) {
                    var e = this._pendingResponses.get(t.nonce);
                    y.debug("responseInfo: " + JSON.stringify(e)), clearTimeout(e.timeout), this._pendingResponses.remove(t.nonce), "" === t.error ? ("LISTEN" === e.message.type ? (0 === this._firstListenTime && (clearTimeout(this._firstListenTimeout), this._firstListenTime = p.default.time.now(), this._stats.logTimer("time_to_first_listen", this._firstListenTime - this._firstConnectTime, .1)), this._replays.set(t.nonce, {
                        nonce: t.nonce,
                        message: e.callbacks.message,
                        topic: e.topic,
                        auth: e.auth
                    }), e.callbacks.message && this._listens.on(e.topic, e.callbacks.message, this)) : "UNLISTEN" === e.message.type && (this._replays.remove(t.nonce), e.callbacks.message && this._listens.off(e.topic, e.callbacks.message, this)), e.callbacks.success && e.callbacks.success()) : e.callbacks.failure && e.callbacks.failure(t.error)
                }
            }, e.prototype._onResponseTimeout = function (t) {
                if (this._pendingResponses.has(t)) {
                    var e = this._pendingResponses.get(t);
                    this._pendingResponses.remove(t), e.opts.failure && e.opts.failure("response timeout")
                }
            }, e.prototype._onMessage = function (t) {
                y.debug("primary message: " + JSON.stringify(t)), this._listens._trigger(t.data.topic, t.data.message)
            }, e.prototype._onConnectionFailure = function () {
                y.debug("connection failure"), this._trigger("disconnected"), this._notifyWhenOpen = !0, this._onReconnect()
            }, e.prototype._onReconnect = function () {
                y.debug("reconnecting..."), this._reconnecting = !0, this._backupSocket = new d.default({
                    stats: this._stats,
                    addr: this._addr
                }), this._bindBackup(this._backupSocket), setTimeout(this._backupSocket.connect.bind(this._backupSocket), this._jitteredReconnectDelay())
            }, e.prototype._bindBackup = function (t) {
                t.on("open", this._onBackupOpen, this), t.on("response", this._onBackupResponse, this)
            }, e.prototype._unbindBackup = function (t) {
                t.off("open", this._onBackupOpen, this), t.off("response", this._onBackupResponse, this)
            }, e.prototype._onBackupOpen = function () {
                y.debug("Backup socket opened"), this._replays.size() > 0 ? this._replayBackup() : (this._swapSockets(), this._notifyWhenOpen && (y.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected")))
            }, e.prototype._replayBackup = function () {
                for (var t = this._replays.values(), e = 0; e < t.length; e++) {
                    var n = {
                        type: "LISTEN",
                        nonce: this._generateNonce(),
                        data: {
                            topics: [t[e].topic],
                            auth_token: t[e].auth
                        }
                    };
                    this._pendingReplayResponses.set(n.nonce, !0), this._backupSocket.send(n)
                }
            }, e.prototype._onBackupResponse = function (t) {
                this._pendingReplayResponses.has(t.nonce) && "" === t.error && (this._pendingReplayResponses.remove(t.nonce), 0 === this._pendingReplayResponses.size() && (this._swapSockets(), this._notifyWhenOpen && (y.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected"))))
            }, e.prototype._swapSockets = function () {
                y.debug("swapping primary " + this._primarySocket._id + " and backup " + this._backupSocket._id), this._unbindPrimary(this._primarySocket), this._unbindBackup(this._backupSocket), this._bindPrimary(this._backupSocket), this._primarySocket.close(), this._primarySocket = this._backupSocket, this._reconnecting = !1, this._flushQueuedRequests()
            }, e.prototype.Listen = function (t) {
                if (window.WebSocket) {
                    y.debug("listening on " + t.topic);
                    var e = this._generateNonce(),
                        n = {
                            type: "LISTEN",
                            nonce: e,
                            data: {
                                topics: [t.topic],
                                auth_token: t.auth
                            }
                        };
                    this._queuedSend(e, n, t)
                }
            }, e.prototype.Unlisten = function (t) {
                if (window.WebSocket) {
                    if (y.debug("unlistening on " + t.topic + "(" + this._listens.count(t.topic) + " listeners)"), this._listens.count(t.topic) > 1) {
                        this._listens.off(t.topic, t.message);
                        for (var e in this._replays.map())
                            if (this._replays.get(e).message === t.message) {
                                this._replays.remove(e);
                                break
                            }
                        return t.success && t.success(), void y.debug("now have " + this._listens.count(t.topic) + " listeners")
                    }
                    var n = this._generateNonce(),
                        r = {
                            type: "UNLISTEN",
                            nonce: n,
                            data: {
                                topics: [t.topic]
                            }
                        };
                    this._queuedSend(n, r, t)
                }
            }, e.prototype._queuedSend = function (t, e, n) {
                this._reconnecting || this._primarySocket._isReady() === !1 ? (y.debug("queuing"), this._queuedRequests.push({
                    nonce: t,
                    msg: e,
                    opts: n
                })) : (y.debug("sending immediately"), this._send(t, e, n))
            }, e.prototype._flushQueuedRequests = function () {
                for (y.debug("flushing " + this._queuedRequests.length + " listen/unlistens"); this._queuedRequests.length > 0;) {
                    var t = this._queuedRequests.shift();
                    this._send(t.nonce, t.msg, t.opts)
                }
            }, e.prototype._send = function (t, e, n) {
                this._pendingResponses.set(t, {
                    timeout: setTimeout(this._onResponseTimeout.bind(this), 3e4, t),
                    topic: n.topic,
                    auth: n.auth,
                    message: e,
                    callbacks: {
                        success: n.success,
                        failure: n.failure,
                        message: n.message
                    }
                }), this._primarySocket.send(e)
            }, e.prototype._neverListened = function () {
                this._stats.logCounter("first_listen_timeout", 1)
            }, e.prototype._generateNonce = function () {
                return p.default.generateString(30)
            }, e.prototype._jitteredReconnectDelay = function () {
                return p.default.randomInt(2e3)
            }, e
        }(u.default);
    e.default = w
}, , function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s() {
        var t = (0, f.buildQueryParams)({
            client_id: h.CLIENT_ID,
            lang: "en",
            popup: !0,
            origin_uri: p.default.origin
        });
        return "" + v + t
    }

    function a(t) {
        return t.origin === _ && "object" === u(t.data) && t.data.messageType === g
    }
    e.__esModule = !0, e.AUTHENTICATION_SUCCESS = e.AUTHENTICATION_REQUIRED = e.AUTHENTICATION_URL = e.PASSPORT_ORIGIN = void 0;
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        c = n(1),
        f = n(9),
        l = n(3),
        p = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(l),
        h = n(27),
        d = n(0),
        _ = e.PASSPORT_ORIGIN = "https://passport.twitch.tv",
        v = e.AUTHENTICATION_URL = "https://passport.twitch.tv/sessions/new",
        y = e.AUTHENTICATION_REQUIRED = "authentication-required",
        g = e.AUTHENTICATION_SUCCESS = "authenticationSuccess",
        b = function (t) {
            function e(n) {
                r(this, e);
                var i = o(this, t.call(this, n));
                return i.authWindow = null, i.unsubscribers = [], i.handleAuthenticationRequest = function (t) {
                    (0, d.isTEEvent)(t, y) && (i.authWindow = i.props.window.open(s()), i.subscribe(i.handleAuthenticationSuccess))
                }, i.handleAuthenticationSuccess = function (t) {
                    a(t) && (i.authWindow.close(), p.default.reload())
                }, i.subscribe(i.handleAuthenticationRequest), i
            }
            return i(e, t), e.prototype.subscribe = function (t) {
                var e = (0, d.subscribeToTwitchMessage)(this.props.window, t);
                this.unsubscribers.push(e)
            }, e.prototype.componentWillUnmount = function () {
                this.unsubscribers.forEach(function (t) {
                    return t()
                })
            }, e.prototype.render = function () {
                return null
            }, e
        }(c.Component);
    b.defaultProps = {
        window: window
    }, e.default = b
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
        return f + "." + t
    }
    e.__esModule = !0;
    var a = n(1),
        u = n(105),
        c = n(47),
        f = "stream-chat-room-v1",
        l = function (t) {
            function e() {
                r(this, e);
                var n = o(this, t.apply(this, arguments));
                return n._handleMessage = n._handleMessage.bind(n), n._pubSub = new u.PubSub(n._handleMessage), n
            }
            return i(e, t), e.prototype.componentDidMount = function () {
                var t = this.props.channelId;
                this._pubSub.listen(s(t))
            }, e.prototype.componentWillReceiveProps = function (t) {
                var e = t.channelId;
                this.props.channelId !== e && (this._pubSub.unlisten(s(e)), this._pubSub.listen(s(e)), this._checkIfHosting(e))
            }, e.prototype._checkIfHosting = function (t) {
                var e = this.props.hostChannel;
                return (0, c.fetchTargetHost)(t).then(function (t) {
                    var e = t.hosts,
                        n = e[0];
                    return (0, c.fetchChannel)(n.target_id, "5")
                }).then(function (t) {
                    var n = t.name;
                    e(n)
                }).catch(function () {})
            }, e.prototype._handleMessage = function (t) {
                var e = t.type,
                    n = t.data,
                    r = this.props,
                    o = r.hostChannel,
                    i = r.unhostChannel;
                if ("host_target_change" === e) {
                    var s = n.target_channel_login;
                    return s ? o(s) : i()
                }
            }, e.prototype.componentWillUnmount = function () {
                this._pubSub.destroy()
            }, e.prototype.render = function () {
                return null
            }, e
        }(a.Component);
    e.default = l
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e = "https://go.twitch.tv/embed/" + t.channel + "/chat",
            n = (0, i.buildQueryParams)({
                darkpopout: "dark" === t.theme,
                "te-theme": t.theme,
                "te-font-size": t.fontSize,
                origin: a.default.origin
            });
        return (0, o.h)("div", {
            className: "c-te__chat"
        }, (0, o.h)("iframe", {
            scrolling: "no",
            frameBorder: "0",
            src: "" + e + n,
            height: t.height,
            width: t.width,
            id: "chat-embed"
        }))
    }
    e.__esModule = !0, e.default = r;
    var o = n(1),
        i = n(9),
        s = n(3),
        a = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e = t.queryParams;
        return (0, o.h)("div", {
            className: "c-te__layout"
        }, (0, o.h)(s.default, {
            channel: e.channel,
            video: e.video,
            collection: e.collection,
            isHosting: e.isHosting,
            hostedChannel: e.hostedChannel,
            hostedChannelAvatarURL: e.hostedChannelAvatarURL
        }))
    }
    e.__esModule = !0, e.default = r;
    var o = n(1),
        i = n(45),
        s = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        var e = t.queryParams;
        return (0, i.h)("div", {
            className: "c-te__layout c-te__layout--video-with-chat"
        }, (0, i.h)(c.default, {
            channel: e.channel,
            video: e.video,
            collection: e.collection,
            isHosting: e.isHosting,
            hostedChannel: e.hostedChannel,
            hostedChannelAvatarURL: e.hostedChannelAvatarURL
        }), (0, i.h)(a.default, {
            channel: e.channel,
            fontSize: e["font-size"],
            isHosting: e.isHosting,
            theme: e.theme,
            chat: e.chat
        }))
    }
    e.__esModule = !0, e.default = o;
    var i = n(1),
        s = n(94),
        a = r(s),
        u = n(45),
        c = r(u)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        for (var e = t.children, n = t.defaults, r = void 0 === n ? {} : n, i = t.currentState, a = Object.assign({}, r, s.default.queryParams, i), u = a.channel, c = a.video, f = a.collection, l = !u && (c || f), p = l ? "video" : a.layout, h = null, d = 0; d < e.length && (h = e[d], h.attributes.layoutName !== p); d++);
        return (0, o.cloneElement)(h, {
            queryParams: a
        })
    }
    e.__esModule = !0, e.default = r;
    var o = n(1),
        i = n(3),
        s = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return (0, o.h)(t.component, {
            queryParams: t.queryParams
        })
    }
    e.__esModule = !0, e.default = r;
    var o = n(1)
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
        if (t.match(/^[a-z0-9_]+$/i)) return t;
        throw new Error("Invalid channel name: '" + t + "'")
    }

    function a(t) {
        var e = s(t);
        return p + "/" + e
    }
    e.__esModule = !0, e.SUBSCRIBE = e.DID_SUBSCRIBE = e.BASE_TWITCH_URL = void 0, e.validateChannelName = s;
    var u = n(1),
        c = n(3),
        f = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c),
        l = n(0),
        p = e.BASE_TWITCH_URL = "https://subs.twitch.tv",
        h = e.DID_SUBSCRIBE = "did-subscribe",
        d = e.SUBSCRIBE = "subscribe",
        _ = function (t) {
            function e(n) {
                r(this, e);
                var i = o(this, t.call(this, n));
                return i.unsubscribers = [], i.handleSubscriptionRequest = function (t) {
                    if ((0, l.isTEEvent)(t, d)) {
                        var e = t.data.params.channelName;
                        i.subscriptionWindow = i.props.window.open(a(e)), i.subscribe(i.handleSubscriptionSuccess)
                    }
                }, i.handleSubscriptionSuccess = function (t) {
                    (0, l.isTEEvent)(t, h) && (i.subscriptionWindow.close(), f.default.reload())
                }, i.subscribe(i.handleSubscriptionRequest), i
            }
            return i(e, t), e.prototype.subscribe = function (t) {
                var e = (0, l.subscribeToTwitchMessage)(this.props.window, t);
                this.unsubscribers.push(e)
            }, e.prototype.componentWillUnmount = function () {
                this.unsubscribers.forEach(function (t) {
                    return t()
                })
            }, e.prototype.render = function () {
                return null
            }, e
        }(u.Component);
    _.defaultProps = {
        window: window
    }, e.default = _
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.RESOLVED = "resolved", e.REJECTED = "rejected"
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.TE_INIT = "embed_init"
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    e.CLIENT_WHITELIST = ["amazon_vse", "bodybuilding", "amazon_launchpad", "weebly"]
}, function (t, e, n) {
    "use strict";

    function r() {
        (0, i.configureTrackingService)();
        var t = n(79).default;
        s = (0, o.render)((0, o.h)(t, null), document.body, s)
    }
    n(80);
    var o = n(1),
        i = n(24);
    n(81);
    var s = void 0;
    r()
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o, i = n(25),
        s = n(26),
        a = Object.freeze((o = {}, o[i.PLAYER_API.PAUSE] = !0, o[i.PLAYER_API.PLAY] = !0, o[i.PLAYER_API.SEEK] = !0, o[i.PLAYER_API.SET_CHANNEL] = !0, o[i.PLAYER_API.SET_CHANNEL_ID] = !0, o[i.PLAYER_API.SET_COLLECTION] = !0, o[i.PLAYER_API.SET_QUALITY] = !0, o[i.PLAYER_API.SET_VIDEO] = !0, o[i.PLAYER_API.SET_MUTED] = !0, o[i.PLAYER_API.SET_VOLUME] = !0, o[s.PLAYER_BRIDGE_API.GET_INITIAL_STATE] = !0, o)),
        u = function () {
            function t(e, n) {
                r(this, t), this._player = e, this._playerIframe = n, window.addEventListener("message", this._handleMessages.bind(this)), this._player._addPlayerStateListener(this._updatePlayerState.bind(this))
            }
            return t.prototype.destroy = function () {
                this._player._removeBridgeStatusListener(this._updatePlayerState.bind(this)), window.removeEventListener("message", this._handleMessages.bind(this))
            }, t.prototype._handleMessages = function (t) {
                var e = t.data,
                    n = t.source,
                    r = n === window.parent,
                    o = e.namespace === s.PLAYER_BRIDGE_MESSAGE_NAMESPACE;
                if (r && o && a[e.eventName] && e.eventName !== s.PLAYER_BRIDGE_API.GET_INITIAL_STATE) {
                    var i;
                    (i = this._player)[e.eventName].apply(i, e.params)
                }
            }, t.prototype._updatePlayerState = function (t) {
                var e = {
                    eventName: s.PLAYER_BRIDGE_API.UPDATE_STATE,
                    params: t,
                    namespace: s.PLAYER_BRIDGE_MESSAGE_NAMESPACE
                };
                window.parent.postMessage(e, "*")
            }, t
        }();
    e.default = u
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
        try {
            return JSON.parse(t)
        } catch (t) {
            return {}
        }
    }

    function s(t, e) {
        if (void 0 === t) throw new Error(t + " is not a valid input");
        if ((void 0 === t ? "undefined" : a(t)) !== e) throw new Error(t + " is not of type " + e)
    }
    e.__esModule = !0, e.PubSub = void 0;
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        u = n(87),
        c = r(u),
        f = n(210),
        l = r(f),
        p = n(223),
        h = r(p),
        d = "production";
    e.PubSub = function () {
        function t(e) {
            o(this, t), s(e, "function"), this._pubSub = c.default.getInstance(d), this._topics = [], this._messageHandler = e
        }
        return t.prototype.listen = function (t) {
            var e = this;
            s(t, "string"), (0, l.default)(this._topics, t) || this._pubSub.Listen({
                topic: t,
                success: function () {
                    e._topics.push(t)
                },
                failure: function (t) {
                    console.error("Pubsub: error listening: %o", t)
                },
                message: this._onMessage.bind(this)
            })
        }, t.prototype.unlisten = function (t) {
            var e = this;
            s(t, "string"), (0, l.default)(this._topics, t) && this._pubSub.Unlisten({
                topic: t,
                success: function () {
                    e._topics = (0, h.default)(e._topics, t)
                },
                failure: function (t) {
                    console.error("Pubsub: error unlistening: %o", t)
                },
                message: this._onMessage.bind(this)
            })
        }, t.prototype._onMessage = function (t) {
            var e = i(t);
            this._messageHandler(e)
        }, t.prototype.destroy = function () {
            var t = this;
            this._topics.forEach(function (e) {
                return t.unlisten(e)
            })
        }, t
    }()
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(28),
        s = n(27),
        a = n(46);
    n(74);
    var u = function () {
        function t() {
            r(this, t), this.baseRequestHeaders = {
                "Client-ID": s.CLIENT_ID,
                Accept: "application/json",
                "Twitch-Api-Token": (0, i.parseCookie)(document.cookie).api_token
            }, this.baseRequestOptions = {
                mode: "cors"
            }, this.login = (0, i.parseCookie)(document.cookie).login, this.oAuthPromise = null
        }
        return t.prototype.buildOptions = function (t) {
            var e = o({}, this.baseRequestHeaders, t.headers);
            return o({}, this.baseRequestOptions, t, {
                headers: e
            })
        }, t.prototype.getAuthToken = function () {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return e ? (this.login === e && this.oAuthPromise || (this.login = e, this.oAuthPromise = fetch(a.API_BASE_URL + "/viewer/token.json", this.buildOptions({
                credentials: "include"
            })).then(function (t) {
                return t.json()
            }).then(function (t) {
                return t.token
            })), this.oAuthPromise.then(function (e) {
                return e && (t.baseRequestHeaders.Authorization = "OAuth " + e), e
            })) : Promise.resolve(null)
        }, t.prototype._checkStatus = function (t) {
            return t.ok ? t : t.json().then(function (e) {
                var n = o({}, e, {
                    requestStatus: t.status
                });
                return Promise.reject(n)
            })
        }, t.prototype.request = function (t) {
            var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.version,
                s = n;
            delete s.version;
            var a = r ? "application/vnd.twitchtv.v" + r + "+json" : "application/json",
                u = o({
                    headers: {
                        Accept: a
                    }
                }, s),
                c = (0, i.parseCookie)(document.cookie).login;
            return this.getAuthToken(c).then(function () {
                return fetch(t, e.buildOptions(u))
            }).then(this._checkStatus).then(function (t) {
                return t.json()
            })
        }, t.prototype.get = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = o({}, e);
            return n.method = "GET", this.request(t, n)
        }, t.prototype.post = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = o({}, n);
            return r.body = e, r.method = "POST", this.request(t, r)
        }, t.prototype.put = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = o({}, n);
            return r.body = e, r.method = "PUT", this.request(t, r)
        }, t.prototype.delete = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = o({}, e);
            return n.method = "DELETE", this.request(t, n)
        }, t
    }();
    e.default = new u
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e = (0, s.parseCookie)(document.cookie)[t];
        return e || (e = i.generate(), (0, s.setCookie)(t, e)), e
    }
    e.__esModule = !0, e.get = r;
    var o = n(48),
        i = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }(o),
        s = n(28)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        if (Array.isArray(t)) return Promise.all(t);
        var e = Object.keys(t),
            n = e.map(function (e) {
                return t[e]
            });
        return Promise.all(n).then(function (t) {
            var n = {};
            return e.forEach(function (e, r) {
                n[e] = t[r]
            }), n
        })
    }

    function o(t) {
        return t.then(function (t) {
            return {
                data: t,
                status: s.RESOLVED
            }
        }).catch(function (t) {
            return {
                error: t,
                status: s.REJECTED
            }
        })
    }

    function i(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.RESOLVED;
        if (e !== s.RESOLVED && e !== s.REJECTED) throw new Error('Status should be a string "resolved" or "rejected"');
        if (Array.isArray(t)) {
            return r(t.map(o)).then(function (t) {
                return t.map(function (t) {
                    return t.status !== e ? null : t.status === s.REJECTED ? t.error : t.data
                })
            })
        }
        var n = Object.keys(t);
        return r(n.map(function (e) {
            return t[e]
        }).map(o)).then(function (t) {
            var r = {};
            return t.forEach(function (t, o) {
                var i = n[o];
                t.status === e && (t.status === s.REJECTED ? r[i] = t.error : t.status === s.RESOLVED && (r[i] = t.data))
            }), r
        })
    }
    e.__esModule = !0, e.all = r, e.reflect = o, e.allByStatus = i;
    var s = n(100)
}, function (t, e, n) {
    var r, o;
    ! function () {
        "use strict";

        function n() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var r = arguments[e];
                if (r) {
                    var o = typeof r;
                    if ("string" === o || "number" === o) t.push(r);
                    else if (Array.isArray(r)) t.push(n.apply(null, r));
                    else if ("object" === o)
                        for (var s in r) i.call(r, s) && r[s] && t.push(s)
                }
            }
            return t.join(" ")
        }
        var i = {}.hasOwnProperty;
        void 0 !== t && t.exports ? t.exports = n : (r = [], void 0 !== (o = function () {
            return n
        }.apply(e, r)) && (t.exports = o))
    }()
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if ("string" != typeof t) throw new TypeError("argument str must be a string");
        for (var n = {}, r = e || {}, o = t.split(u), a = r.decode || s, c = 0; c < o.length; c++) {
            var f = o[c],
                l = f.indexOf("=");
            if (!(l < 0)) {
                var p = f.substr(0, l).trim(),
                    h = f.substr(++l, f.length).trim();
                '"' == h[0] && (h = h.slice(1, -1)), void 0 == n[p] && (n[p] = i(h, a))
            }
        }
        return n
    }

    function o(t, e, n) {
        var r = n || {},
            o = r.encode || a;
        if ("function" != typeof o) throw new TypeError("option encode is invalid");
        if (!c.test(t)) throw new TypeError("argument name is invalid");
        var i = o(e);
        if (i && !c.test(i)) throw new TypeError("argument val is invalid");
        var s = t + "=" + i;
        if (null != r.maxAge) {
            var u = r.maxAge - 0;
            if (isNaN(u)) throw new Error("maxAge should be a Number");
            s += "; Max-Age=" + Math.floor(u)
        }
        if (r.domain) {
            if (!c.test(r.domain)) throw new TypeError("option domain is invalid");
            s += "; Domain=" + r.domain
        }
        if (r.path) {
            if (!c.test(r.path)) throw new TypeError("option path is invalid");
            s += "; Path=" + r.path
        }
        if (r.expires) {
            if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
            s += "; Expires=" + r.expires.toUTCString()
        }
        if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite) {
            switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                case !0:
                    s += "; SameSite=Strict";
                    break;
                case "lax":
                    s += "; SameSite=Lax";
                    break;
                case "strict":
                    s += "; SameSite=Strict";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
        }
        return s
    }

    function i(t, e) {
        try {
            return e(t)
        } catch (e) {
            return t
        }
    }
    e.parse = r, e.serialize = o;
    var s = decodeURIComponent,
        a = encodeURIComponent,
        u = /; */,
        c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
}, function (t, e, n) {
    ! function (e, n) {
        t.exports = n()
    }(0, function () {
        return function (t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.i = function (t) {
                return t
            }, e.d = function (t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, e.n = function (t) {
                var n = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return e.d(n, "a", n), n
            }, e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, e.p = "", e(e.s = 10)
        }([function (t, e, n) {
            "use strict";

            function r(t) {
                t.Promise && (o = t.Promise), void 0 !== t.useSendBeacon && (i = t.useSendBeacon), t.serviceUrls && (t.serviceUrls.mixpanel && (c.mixpanel = t.serviceUrls.mixpanel), t.serviceUrls.spade && (c.spade = t.serviceUrls.spade), t.serviceUrls.untrusted_spade && (c.untrusted_spade = t.serviceUrls.untrusted_spade)), t.serviceBatchSizes && (t.serviceBatchSizes.mixpanel && (f.mixpanel = t.serviceBatchSizes.mixpanel), t.serviceBatchSizes.spade && (f.spade = t.serviceBatchSizes.spade), t.serviceBatchSizes.untrusted_spade && (f.untrusted_spade = t.serviceBatchSizes.untrusted_spade))
            }
            n.d(e, "b", function () {
                return s
            }), n.d(e, "a", function () {
                return a
            }), n.d(e, "d", function () {
                return u
            }), e.g = r, n.d(e, "e", function () {
                return o
            }), n.d(e, "f", function () {
                return i
            }), n.d(e, "c", function () {
                return c
            }), n.d(e, "h", function () {
                return f
            });
            var o, i = !0,
                s = "mixpanel",
                a = "spade",
                u = "untrusted_spade",
                c = {
                    spade: {
                        href: "//trowel.twitch.tv/"
                    },
                    untrusted_spade: {
                        href: "//spade.twitch.tv/"
                    },
                    mixpanel: {
                        href: "//api.mixpanel.com/track"
                    }
                },
                f = {
                    spade: 100,
                    untrusted_spade: 100,
                    mixpanel: 50
                }
        }, function (t, e, n) {
            ! function (n, r) {
                t.exports = e = function () {
                    var t = t || function (t, e) {
                        var n = Object.create || function () {
                                function t() {}
                                return function (e) {
                                    var n;
                                    return t.prototype = e, n = new t, t.prototype = null, n
                                }
                            }(),
                            r = {},
                            o = r.lib = {},
                            i = o.Base = function () {
                                return {
                                    extend: function (t) {
                                        var e = n(this);
                                        return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                                            e.$super.init.apply(this, arguments)
                                        }), e.init.prototype = e, e.$super = this, e
                                    },
                                    create: function () {
                                        var t = this.extend();
                                        return t.init.apply(t, arguments), t
                                    },
                                    init: function () {},
                                    mixIn: function (t) {
                                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                                    },
                                    clone: function () {
                                        return this.init.prototype.extend(this)
                                    }
                                }
                            }(),
                            s = o.WordArray = i.extend({
                                init: function (t, e) {
                                    t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length
                                },
                                toString: function (t) {
                                    return (t || u).stringify(this)
                                },
                                concat: function (t) {
                                    var e = this.words,
                                        n = t.words,
                                        r = this.sigBytes,
                                        o = t.sigBytes;
                                    if (this.clamp(), r % 4)
                                        for (var i = 0; i < o; i++) {
                                            var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                            e[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8
                                        } else
                                            for (var i = 0; i < o; i += 4) e[r + i >>> 2] = n[i >>> 2];
                                    return this.sigBytes += o, this
                                },
                                clamp: function () {
                                    var e = this.words,
                                        n = this.sigBytes;
                                    e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                                },
                                clone: function () {
                                    var t = i.clone.call(this);
                                    return t.words = this.words.slice(0), t
                                },
                                random: function (e) {
                                    for (var n, r = [], o = 0; o < e; o += 4) {
                                        var i = function (e) {
                                            var e = e,
                                                n = 987654321,
                                                r = 4294967295;
                                            return function () {
                                                n = 36969 * (65535 & n) + (n >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r;
                                                var o = (n << 16) + e & r;
                                                return o /= 4294967296, (o += .5) * (t.random() > .5 ? 1 : -1)
                                            }
                                        }(4294967296 * (n || t.random()));
                                        n = 987654071 * i(), r.push(4294967296 * i() | 0)
                                    }
                                    return new s.init(r, e)
                                }
                            }),
                            a = r.enc = {},
                            u = a.Hex = {
                                stringify: function (t) {
                                    for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
                                        var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                        r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
                                    }
                                    return r.join("")
                                },
                                parse: function (t) {
                                    for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                                    return new s.init(n, e / 2)
                                }
                            },
                            c = a.Latin1 = {
                                stringify: function (t) {
                                    for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
                                        var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                        r.push(String.fromCharCode(i))
                                    }
                                    return r.join("")
                                },
                                parse: function (t) {
                                    for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                                    return new s.init(n, e)
                                }
                            },
                            f = a.Utf8 = {
                                stringify: function (t) {
                                    try {
                                        return decodeURIComponent(escape(c.stringify(t)))
                                    } catch (t) {
                                        throw new Error("Malformed UTF-8 data")
                                    }
                                },
                                parse: function (t) {
                                    return c.parse(unescape(encodeURIComponent(t)))
                                }
                            },
                            l = o.BufferedBlockAlgorithm = i.extend({
                                reset: function () {
                                    this._data = new s.init, this._nDataBytes = 0
                                },
                                _append: function (t) {
                                    "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                                },
                                _process: function (e) {
                                    var n = this._data,
                                        r = n.words,
                                        o = n.sigBytes,
                                        i = this.blockSize,
                                        a = 4 * i,
                                        u = o / a;
                                    u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0);
                                    var c = u * i,
                                        f = t.min(4 * c, o);
                                    if (c) {
                                        for (var l = 0; l < c; l += i) this._doProcessBlock(r, l);
                                        var p = r.splice(0, c);
                                        n.sigBytes -= f
                                    }
                                    return new s.init(p, f)
                                },
                                clone: function () {
                                    var t = i.clone.call(this);
                                    return t._data = this._data.clone(), t
                                },
                                _minBufferSize: 0
                            }),
                            p = (o.Hasher = l.extend({
                                cfg: i.extend(),
                                init: function (t) {
                                    this.cfg = this.cfg.extend(t), this.reset()
                                },
                                reset: function () {
                                    l.reset.call(this), this._doReset()
                                },
                                update: function (t) {
                                    return this._append(t), this._process(), this
                                },
                                finalize: function (t) {
                                    return t && this._append(t), this._doFinalize()
                                },
                                blockSize: 16,
                                _createHelper: function (t) {
                                    return function (e, n) {
                                        return new t.init(n).finalize(e)
                                    }
                                },
                                _createHmacHelper: function (t) {
                                    return function (e, n) {
                                        return new p.HMAC.init(t, n).finalize(e)
                                    }
                                }
                            }), r.algo = {});
                        return r
                    }(Math);
                    return t
                }()
            }()
        }, function (t, e, n) {
            "use strict";

            function r(t, e, n, r) {
                void 0 === n && (n = {}), void 0 === r && (r = "");
                var o = new XMLHttpRequest;
                return o.open(t, e, !0), n && Object.keys(n).forEach(function (t) {
                    n.hasOwnProperty(t) && o.setRequestHeader(t, n[t])
                }), new i.e(function (n, i) {
                    o.onreadystatechange = function () {
                        o.readyState === s && (o.status >= 200 && o.status < 300 ? n(o.responseText) : i(new Error("dobbin.js " + t + " " + e + " responded " + o.status + "\n" + o.responseText)))
                    }, o.send(r)
                })
            }

            function o(t, e) {
                if (i.f && navigator.sendBeacon) {
                    var n = new Blob([e], {
                        type: "application/x-www-form-urlencoded; charset=UTF-8"
                    });
                    if (navigator.sendBeacon(t, n)) return i.e.resolve("sendBeacon")
                }
                return r("POST", t, {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }, e)
            }
            var i = n(0);
            e.a = o;
            var s = 4
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return o.stringify(i.parse(JSON.stringify(t)))
            }
            var o = n(5),
                i = (n.n(o), n(6));
            n.n(i), e.a = r
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(3),
                o = n(0),
                i = n(8),
                s = n(7),
                a = n(9),
                u = n(2);
            n.d(e, "Dobbin", function () {
                return c
            });
            var c = function () {
                function t() {}
                return t.trackEvent = function (t, e, r) {
                    void 0 === r && (r = [o.a, o.b]);
                    var i = {
                        event: t,
                        properties: e
                    };
                    return n.i(a.a)(t) ? this.trackUrgentEvent(i, r) : (this.eventBuffer.forEach(function (t, e) {
                        r.indexOf(e) !== -1 && t.push(i)
                    }), this.hookUnload(), this.queueFlush())
                }, t.trackUrgentEvent = function (t, e) {
                    var i, s = n.i(r.a)([t]),
                        c = e.map(function (t) {
                            return n.i(u.a)(o.c[t].href, "data=" + s)
                        });
                    return t.event === a.b && e.indexOf(o.a) !== -1 && (i = this.trackUrgentEvent({
                        event: a.c,
                        properties: t.properties
                    }, [o.d]), c.push(i)), o.e.all(c)
                }, t.queueFlush = function () {
                    var t = this;
                    return this.queuedFlush || (this.queuedFlush = new o.e(function (e) {
                        n.i(i.a)(function (n) {
                            e(t.flush(n))
                        })
                    })), this.queuedFlush
                }, t.flush = function (t) {
                    this.queuedFlush = void 0;
                    for (var e = this.eventBuffer.totalSize(), n = e; n > 0;) {
                        if (t.timeRemaining() <= 0) {
                            this.queueFlush();
                            break
                        }
                        this.eventBuffer.forEach(function (t) {
                            n -= t.flushOnce()
                        })
                    }
                    return {
                        flushed: e - n,
                        buffered: n
                    }
                }, t.hookUnload = function () {
                    var t = this;
                    this.unloadHooked || (this.unloadHooked = !0, navigator && navigator.sendBeacon && window.addEventListener("unload", function () {
                        o.f && t.eventBuffer.forEach(function (e, n) {
                            if (n === o.a) {
                                var r = {
                                    event: "unload-events-debug",
                                    properties: e.getEventsCounts()
                                };
                                t.trackUrgentEvent(r, [o.a])
                            }
                            for (var i = 1; i;) i = e.flushOnce()
                        })
                    }))
                }, t
            }();
            c.events = {
                EVENT_PAGEVIEW: a.b,
                UNTRUSTED_EVENT_PAGEVIEW: a.d,
                UNTRUSTED_EVENT_PAGEVIEW_FILTERED: a.c
            }, c.configure = o.g, c.eventBuffer = new s.a, c.queuedFlush = void 0, c.unloadHooked = !1
        }, function (t, e, n) {
            ! function (r, o) {
                t.exports = e = function (t) {
                    return function () {
                        function e(t, e, n) {
                            for (var r = [], i = 0, s = 0; s < e; s++)
                                if (s % 4) {
                                    var a = n[t.charCodeAt(s - 1)] << s % 4 * 2,
                                        u = n[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                                    r[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++
                                }
                            return o.create(r, i)
                        }
                        var n = t,
                            r = n.lib,
                            o = r.WordArray;
                        n.enc.Base64 = {
                            stringify: function (t) {
                                var e = t.words,
                                    n = t.sigBytes,
                                    r = this._map;
                                t.clamp();
                                for (var o = [], i = 0; i < n; i += 3)
                                    for (var s = e[i >>> 2] >>> 24 - i % 4 * 8 & 255, a = e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, u = e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, c = s << 16 | a << 8 | u, f = 0; f < 4 && i + .75 * f < n; f++) o.push(r.charAt(c >>> 6 * (3 - f) & 63));
                                var l = r.charAt(64);
                                if (l)
                                    for (; o.length % 4;) o.push(l);
                                return o.join("")
                            },
                            parse: function (t) {
                                var n = t.length,
                                    r = this._map,
                                    o = this._reverseMap;
                                if (!o) {
                                    o = this._reverseMap = [];
                                    for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i
                                }
                                var s = r.charAt(64);
                                if (s) {
                                    var a = t.indexOf(s);
                                    a !== -1 && (n = a)
                                }
                                return e(t, n, o)
                            },
                            _map: "GbHi8bXd2f26Vj8NqmcnHFztp53C1pSdpVjsf9ANBCtpYHvWauyz0123456789+/="
                        }
                    }(), t.enc.Base64
                }(n(1))
            }()
        }, function (t, e, n) {
            ! function (r, o) {
                t.exports = e = function (t) {
                    return t.enc.Utf8
                }(n(1))
            }()
        }, function (t, e, n) {
            "use strict";
            var r = n(0),
                o = n(3),
                i = n(2);
            n.d(e, "a", function () {
                return a
            });
            var s = function () {
                    function t(t) {
                        this.service = t, this.events = []
                    }
                    return Object.defineProperty(t.prototype, "length", {
                        get: function () {
                            return this.events.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.push = function (t) {
                        return this.events.push(t)
                    }, t.prototype.flushOnce = function () {
                        if (0 === this.events.length) return 0;
                        var t = this.getBatch(),
                            e = n.i(o.a)(t),
                            s = "data=" + e;
                        return n.i(i.a)(r.c[this.service].href, s), t.length
                    }, t.prototype.getEventsCounts = function () {
                        var t = {};
                        return this.events.forEach(function (e) {
                            var n = e.event;
                            t[n] = t[n] || 0, t[n]++
                        }), t
                    }, t.prototype.getBatch = function () {
                        var t = Math.max(r.h[this.service], 1);
                        return this.events.splice(0, t)
                    }, t
                }(),
                a = function () {
                    function t() {
                        this.services = (t = {}, t[r.b] = new s(r.b), t[r.a] = new s(r.a), t[r.d] = new s(r.d), t);
                        var t
                    }
                    return t.prototype.forEach = function (t) {
                        var e = this;
                        Object.keys(this.services).forEach(function (n) {
                            t(e.services[n], n)
                        })
                    }, t.prototype.totalSize = function () {
                        var t = 0;
                        return this.forEach(function (e) {
                            t += e.length
                        }), t
                    }, t
                }()
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                function e(r) {
                    r - n < 24 ? t({
                        didTimeout: !1,
                        timeRemaining: function () {
                            return Math.max(0, 24 - (performance.now() - r))
                        }
                    }) : (n = r, requestAnimationFrame(e))
                }
                var n = performance.now();
                requestAnimationFrame(e)
            }
            n.d(e, "a", function () {
                return o
            });
            var o = window.requestIdleCallback || r
        }, function (t, e, n) {
            "use strict";

            function r(t) {
                return a.indexOf(t) !== -1
            }
            n.d(e, "b", function () {
                return o
            }), n.d(e, "d", function () {
                return i
            }), n.d(e, "c", function () {
                return s
            }), e.a = r;
            var o = "pageview",
                i = "x_untrusted_pageview",
                s = "x_untrusted_pageview_filtered",
                a = [o, "benchmark_fetch_start", "benchmark_validate_transition", "benchmark_complete_transition"]
        }, function (t, e, n) {
            t.exports = n(4)
        }])
    })
}, function (t, e, n) {
    var r = n(6),
        o = n(2),
        i = r(o, "DataView");
    t.exports = i
}, function (t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(166),
        i = n(167),
        s = n(168),
        a = n(169),
        u = n(170);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = s, r.prototype.has = a, r.prototype.set = u, t.exports = r
}, function (t, e, n) {
    var r = n(6),
        o = n(2),
        i = r(o, "Promise");
    t.exports = i
}, function (t, e, n) {
    var r = n(6),
        o = n(2),
        i = r(o, "Set");
    t.exports = i
}, function (t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new o; ++e < n;) this.add(t[e])
    }
    var o = n(35),
        i = n(196),
        s = n(197);
    r.prototype.add = r.prototype.push = i, r.prototype.has = s, t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = this.__data__ = new o(t);
        this.size = e.size
    }
    var o = n(17),
        i = n(200),
        s = n(201),
        a = n(202),
        u = n(203),
        c = n(204);
    r.prototype.clear = i, r.prototype.delete = s, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
}, function (t, e, n) {
    var r = n(2),
        o = r.Uint8Array;
    t.exports = o
}, function (t, e, n) {
    var r = n(6),
        o = n(2),
        i = r(o, "WeakMap");
    t.exports = i
}, function (t, e) {
    function n(t, e) {
        return t.set(e[0], e[1]), t
    }
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        return t.add(e), t
    }
    t.exports = n
}, function (t, e) {
    function n(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1;);
        return t
    }
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
            var s = t[n];
            e(s, n, t) && (i[o++] = s)
        }
        return i
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        return !!(null == t ? 0 : t.length) && o(t, e, 0) > -1
    }
    var o = n(53);
    t.exports = r
}, function (t, e) {
    function n(t, e, n) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o;)
            if (n(e, t[r])) return !0;
        return !1
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        return t && o(e, i(e), t)
    }
    var o = n(12),
        i = n(15);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return t && o(e, i(e), t)
    }
    var o = n(12),
        i = n(72);
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n, k, R, I) {
        var M, N = e & S,
            U = e & T,
            L = e & x;
        if (n && (M = R ? n(t, k, R, I) : n(t)), void 0 !== M) return M;
        if (!w(t)) return t;
        var B = b(t);
        if (B) {
            if (M = v(t), !N) return f(t, M)
        } else {
            var q = _(t),
                D = q == j || q == O;
            if (m(t)) return c(t, N);
            if (q == P || q == A || D && !R) {
                if (M = U || D ? {} : g(t), !N) return U ? p(t, u(M, t)) : l(t, a(M, t))
            } else {
                if (!C[q]) return R ? t : {};
                M = y(t, q, r, N)
            }
        }
        I || (I = new o);
        var F = I.get(t);
        if (F) return F;
        I.set(t, M);
        var H = L ? U ? d : h : U ? keysIn : E,
            z = B ? void 0 : H(t);
        return i(z || t, function (o, i) {
            z && (i = o, o = t[i]), s(M, i, r(o, e, n, i, t, I))
        }), M
    }
    var o = n(117),
        i = n(123),
        s = n(37),
        a = n(127),
        u = n(128),
        c = n(148),
        f = n(155),
        l = n(156),
        p = n(157),
        h = n(162),
        d = n(58),
        _ = n(164),
        v = n(171),
        y = n(172),
        g = n(173),
        b = n(4),
        m = n(68),
        w = n(7),
        E = n(15),
        S = 1,
        T = 2,
        x = 4,
        A = "[object Arguments]",
        j = "[object Function]",
        O = "[object GeneratorFunction]",
        P = "[object Object]",
        C = {};
    C[A] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C[P] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C[j] = C["[object WeakMap]"] = !1, t.exports = r
}, function (t, e, n) {
    var r = n(7),
        o = Object.create,
        i = function () {
            function t() {}
            return function (e) {
                if (!r(e)) return {};
                if (o) return o(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = i
}, function (t, e, n) {
    function r(t, e, n, r) {
        var l = -1,
            p = i,
            h = !0,
            d = t.length,
            _ = [],
            v = e.length;
        if (!d) return _;
        n && (e = a(e, u(n))), r ? (p = s, h = !1) : e.length >= f && (p = c, h = !1, e = new o(e));
        t: for (; ++l < d;) {
            var y = t[l],
                g = null == n ? y : n(y);
            if (y = r || 0 !== y ? y : 0, h && g === g) {
                for (var b = v; b--;)
                    if (e[b] === g) continue t;
                _.push(y)
            } else p(e, g, r) || _.push(y)
        }
        return _
    }
    var o = n(116),
        i = n(125),
        s = n(126),
        a = n(18),
        u = n(55),
        c = n(147),
        f = 200;
    t.exports = r
}, function (t, e) {
    function n(t, e, n, r) {
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
            if (e(t[i], i, t)) return i;
        return -1
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e, n, s, a) {
        var u = -1,
            c = t.length;
        for (n || (n = i), a || (a = []); ++u < c;) {
            var f = t[u];
            e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, s, a) : o(a, f) : s || (a[a.length] = f)
        }
        return a
    }
    var o = n(36),
        i = n(174);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        e = o(e, t);
        for (var n = 0, r = e.length; null != t && n < r;) t = t[i(e[n++])];
        return n && n == r ? t : void 0
    }
    var o = n(38),
        i = n(64);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return i(t) && o(t) == s
    }
    var o = n(5),
        i = n(8),
        s = "[object Arguments]";
    t.exports = r
}, function (t, e) {
    function n(t) {
        return t !== t
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        return !(!s(t) || i(t)) && (o(t) ? h : u).test(a(t))
    }
    var o = n(69),
        i = n(178),
        s = n(7),
        a = n(65),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        f = Object.prototype,
        l = c.toString,
        p = f.hasOwnProperty,
        h = RegExp("^" + l.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return s(t) && i(t.length) && !!a[o(t)]
    }
    var o = n(5),
        i = n(70),
        s = n(8),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = r
}, function (t, e, n) {
    function r(t) {
        if (!o(t)) return i(t);
        var e = [];
        for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
    var o = n(21),
        i = n(191),
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        if (!o(t)) return s(t);
        var e = i(t),
            n = [];
        for (var r in t)("constructor" != r || !e && u.call(t, r)) && n.push(r);
        return n
    }
    var o = n(7),
        i = n(21),
        s = n(192),
        a = Object.prototype,
        u = a.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    var r = n(208),
        o = n(56),
        i = n(66),
        s = o ? function (t, e) {
            return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : i;
    t.exports = s
}, function (t, e) {
    function n(t, e, n) {
        var r = -1,
            o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e), n = n > o ? o : n, n < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++r < o;) i[r] = t[r + e];
        return i
    }
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        if ("string" == typeof t) return t;
        if (s(t)) return i(t, r) + "";
        if (a(t)) return f ? f.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -u ? "-0" : e
    }
    var o = n(14),
        i = n(18),
        s = n(4),
        a = n(23),
        u = 1 / 0,
        c = o ? o.prototype : void 0,
        f = c ? c.toString : void 0;
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return e = o(e, t), null == (t = s(t, e)) || delete t[a(i(e))]
    }
    var o = n(38),
        i = n(214),
        s = n(195),
        a = n(64);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return o(e, function (e) {
            return t[e]
        })
    }
    var o = n(18);
    t.exports = r
}, function (t, e) {
    function n(t, e) {
        return t.has(e)
    }
    t.exports = n
}, function (t, e, n) {
    (function (t) {
        function r(t, e) {
            if (e) return t.slice();
            var n = t.length,
                r = c ? c(n) : new t.constructor(n);
            return t.copy(r), r
        }
        var o = n(2),
            i = "object" == typeof e && e && !e.nodeType && e,
            s = i && "object" == typeof t && t && !t.nodeType && t,
            a = s && s.exports === i,
            u = a ? o.Buffer : void 0,
            c = u ? u.allocUnsafe : void 0;
        t.exports = r
    }).call(e, n(43)(t))
}, function (t, e, n) {
    function r(t, e) {
        var n = e ? o(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength)
    }
    var o = n(39);
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n) {
        var r = e ? n(s(t), a) : s(t);
        return i(r, o, new t.constructor)
    }
    var o = n(120),
        i = n(50),
        s = n(189),
        a = 1;
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = new t.constructor(t.source, r.exec(t));
        return e.lastIndex = t.lastIndex, e
    }
    var r = /\w*$/;
    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        var r = e ? n(s(t), a) : s(t);
        return i(r, o, new t.constructor)
    }
    var o = n(121),
        i = n(50),
        s = n(198),
        a = 1;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return s ? Object(s.call(t)) : {}
    }
    var o = n(14),
        i = o ? o.prototype : void 0,
        s = i ? i.valueOf : void 0;
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = e ? o(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length)
    }
    var o = n(39);
    t.exports = r
}, function (t, e) {
    function n(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        return o(t, i(t), e)
    }
    var o = n(12),
        i = n(41);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return o(t, i(t), e)
    }
    var o = n(12),
        i = n(59);
    t.exports = r
}, function (t, e, n) {
    var r = n(2),
        o = r["__core-js_shared__"];
    t.exports = o
}, function (t, e, n) {
    function r(t) {
        return o(function (e, n) {
            var r = -1,
                o = n.length,
                s = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0;
            for (s = t.length > 3 && "function" == typeof s ? (o--, s) : void 0, a && i(n[0], n[1], a) && (s = o < 3 ? void 0 : s, o = 1), e = Object(e); ++r < o;) {
                var u = n[r];
                u && t(e, u, r, s)
            }
            return e
        })
    }
    var o = n(54),
        i = n(175);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return o(t) ? void 0 : t
    }
    var o = n(212);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return s(i(t, void 0, o), t + "")
    }
    var o = n(209),
        i = n(62),
        s = n(63);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return o(t, s, i)
    }
    var o = n(52),
        i = n(41),
        s = n(15);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = s.call(t, u),
            n = t[u];
        try {
            t[u] = void 0
        } catch (t) {}
        var r = a.call(t);
        return e ? t[u] = n : delete t[u], r
    }
    var o = n(14),
        i = Object.prototype,
        s = i.hasOwnProperty,
        a = i.toString,
        u = o ? o.toStringTag : void 0;
    t.exports = r
}, function (t, e, n) {
    var r = n(112),
        o = n(34),
        i = n(114),
        s = n(115),
        a = n(119),
        u = n(5),
        c = n(65),
        f = c(r),
        l = c(o),
        p = c(i),
        h = c(s),
        d = c(a),
        _ = u;
    (r && "[object DataView]" != _(new r(new ArrayBuffer(1))) || o && "[object Map]" != _(new o) || i && "[object Promise]" != _(i.resolve()) || s && "[object Set]" != _(new s) || a && "[object WeakMap]" != _(new a)) && (_ = function (t) {
        var e = u(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? c(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case p:
                return "[object Promise]";
            case h:
                return "[object Set]";
            case d:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = _
}, function (t, e) {
    function n(t, e) {
        return null == t ? void 0 : t[e]
    }
    t.exports = n
}, function (t, e, n) {
    function r() {
        this.__data__ = o ? o(null) : {}, this.size = 0
    }
    var o = n(22);
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        var e = this.__data__;
        if (o) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return a.call(e, t) ? e[t] : void 0
    }
    var o = n(22),
        i = "__lodash_hash_undefined__",
        s = Object.prototype,
        a = s.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = this.__data__;
        return o ? void 0 !== e[t] : s.call(e, t)
    }
    var o = n(22),
        i = Object.prototype,
        s = i.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this
    }
    var o = n(22),
        i = "__lodash_hash_undefined__";
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = t.length,
            n = t.constructor(e);
        return e && "string" == typeof t[0] && o.call(t, "index") && (n.index = t.index, n.input = t.input), n
    }
    var r = Object.prototype,
        o = r.hasOwnProperty;
    t.exports = n
}, function (t, e, n) {
    function r(t, e, n, r) {
        var C = t.constructor;
        switch (e) {
            case b:
                return o(t);
            case l:
            case p:
                return new C(+t);
            case m:
                return i(t, r);
            case w:
            case E:
            case S:
            case T:
            case x:
            case A:
            case j:
            case O:
            case P:
                return f(t, r);
            case h:
                return s(t, r, n);
            case d:
            case y:
                return new C(t);
            case _:
                return a(t);
            case v:
                return u(t, r, n);
            case g:
                return c(t)
        }
    }
    var o = n(39),
        i = n(149),
        s = n(150),
        a = n(151),
        u = n(152),
        c = n(153),
        f = n(154),
        l = "[object Boolean]",
        p = "[object Date]",
        h = "[object Map]",
        d = "[object Number]",
        _ = "[object RegExp]",
        v = "[object Set]",
        y = "[object String]",
        g = "[object Symbol]",
        b = "[object ArrayBuffer]",
        m = "[object DataView]",
        w = "[object Float32Array]",
        E = "[object Float64Array]",
        S = "[object Int8Array]",
        T = "[object Int16Array]",
        x = "[object Int32Array]",
        A = "[object Uint8Array]",
        j = "[object Uint8ClampedArray]",
        O = "[object Uint16Array]",
        P = "[object Uint32Array]";
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return "function" != typeof t.constructor || s(t) ? {} : o(i(t))
    }
    var o = n(130),
        i = n(40),
        s = n(21);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return s(t) || i(t) || !!(a && t && t[a])
    }
    var o = n(14),
        i = n(67),
        s = n(4),
        a = o ? o.isConcatSpreadable : void 0;
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n) {
        if (!a(n)) return !1;
        var r = typeof e;
        return !!("number" == r ? i(n) && s(e, n.length) : "string" == r && e in n) && o(n[e], t)
    }
    var o = n(42),
        i = n(13),
        s = n(60),
        a = n(7);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        if (o(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (a.test(t) || !s.test(t) || null != e && t in Object(e))
    }
    var o = n(4),
        i = n(23),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        return !!i && i in t
    }
    var o = n(158),
        i = function () {
            var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = r
}, function (t, e) {
    function n() {
        this.__data__ = [], this.size = 0
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = o(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : s.call(e, n, 1), --this.size, !0)
    }
    var o = n(19),
        i = Array.prototype,
        s = i.splice;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = o(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    var o = n(19);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return o(this.__data__, t) > -1
    }
    var o = n(19);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = this.__data__,
            r = o(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }
    var o = n(19);
    t.exports = r
}, function (t, e, n) {
    function r() {
        this.size = 0, this.__data__ = {
            hash: new o,
            map: new(s || i),
            string: new o
        }
    }
    var o = n(113),
        i = n(17),
        s = n(34);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = o(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var o = n(20);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return o(this, t).get(t)
    }
    var o = n(20);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return o(this, t).has(t)
    }
    var o = n(20);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = o(this, t),
            r = n.size;
        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }
    var o = n(20);
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t, r) {
            n[++e] = [r, t]
        }), n
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        var e = o(t, function (t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
    var o = n(215),
        i = 500;
    t.exports = r
}, function (t, e, n) {
    var r = n(61),
        o = r(Object.keys, Object);
    t.exports = o
}, function (t, e) {
    function n(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
    t.exports = n
}, function (t, e, n) {
    (function (t) {
        var r = n(57),
            o = "object" == typeof e && e && !e.nodeType && e,
            i = o && "object" == typeof t && t && !t.nodeType && t,
            s = i && i.exports === o,
            a = s && r.process,
            u = function () {
                try {
                    return a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(e, n(43)(t))
}, function (t, e) {
    function n(t) {
        return o.call(t)
    }
    var r = Object.prototype,
        o = r.toString;
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        return e.length < 2 ? t : o(t, i(e, 0, -1))
    }
    var o = n(134),
        i = n(142);
    t.exports = r
}, function (t, e) {
    function n(t) {
        return this.__data__.set(t, r), this
    }
    var r = "__lodash_hash_undefined__";
    t.exports = n
}, function (t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}, function (t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t) {
            n[++e] = t
        }), n
    }
    t.exports = n
}, function (t, e) {
    function n(t) {
        var e = 0,
            n = 0;
        return function () {
            var s = i(),
                a = o - (s - n);
            if (n = s, a > 0) {
                if (++e >= r) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var r = 800,
        o = 16,
        i = Date.now;
    t.exports = n
}, function (t, e, n) {
    function r() {
        this.__data__ = new o, this.size = 0
    }
    var o = n(17);
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
    t.exports = n
}, function (t, e) {
    function n(t) {
        return this.__data__.get(t)
    }
    t.exports = n
}, function (t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        if (n instanceof o) {
            var r = n.__data__;
            if (!i || r.length < a - 1) return r.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new s(r)
        }
        return n.set(t, e), this.size = n.size, this
    }
    var o = n(17),
        i = n(34),
        s = n(35),
        a = 200;
    t.exports = r
}, function (t, e) {
    function n(t, e, n) {
        for (var r = n - 1, o = t.length; ++r < o;)
            if (t[r] === e) return r;
        return -1
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(190),
        o = /^\./,
        i = r(function (t) {
            var e = [];
            return o.test(t) && e.push(""), t.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, function (t, n, r, o) {
                e.push(r ? o.replace(/\\(\\)?/g, "$1") : n || t)
            }), e
        });
    t.exports = i
}, function (t, e, n) {
    var r = n(37),
        o = n(12),
        i = n(159),
        s = n(13),
        a = n(21),
        u = n(15),
        c = Object.prototype,
        f = c.hasOwnProperty,
        l = i(function (t, e) {
            if (a(e) || s(e)) return void o(e, u(e), t);
            for (var n in e) f.call(e, n) && r(t, n, e[n])
        });
    t.exports = l
}, function (t, e) {
    function n(t) {
        return function () {
            return t
        }
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        return (null == t ? 0 : t.length) ? o(t, 1) : []
    }
    var o = n(133);
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n, r) {
        t = i(t) ? t : u(t), n = n && !r ? a(n) : 0;
        var f = t.length;
        return n < 0 && (n = c(f + n, 0)), s(t) ? n <= f && t.indexOf(e, n) > -1 : !!f && o(t, e, n) > -1
    }
    var o = n(53),
        i = n(13),
        s = n(71),
        a = n(219),
        u = n(222),
        c = Math.max;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return i(t) && o(t)
    }
    var o = n(13),
        i = n(8);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        if (!s(t) || o(t) != a) return !1;
        var e = i(t);
        if (null === e) return !0;
        var n = l.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && f.call(n) == p
    }
    var o = n(5),
        i = n(40),
        s = n(8),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        f = u.toString,
        l = c.hasOwnProperty,
        p = f.call(Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(138),
        o = n(55),
        i = n(193),
        s = i && i.isTypedArray,
        a = s ? o(s) : r;
    t.exports = a
}, function (t, e) {
    function n(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0
    }
    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function () {
            var r = arguments,
                o = e ? e.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var s = t.apply(this, r);
            return n.cache = i.set(o, s) || i, s
        };
        return n.cache = new(r.Cache || o), n
    }
    var o = n(35),
        i = "Expected a function";
    r.Cache = o, t.exports = r
}, function (t, e, n) {
    var r = n(18),
        o = n(129),
        i = n(145),
        s = n(38),
        a = n(12),
        u = n(160),
        c = n(161),
        f = n(58),
        l = c(function (t, e) {
            var n = {};
            if (null == t) return n;
            var c = !1;
            e = r(e, function (e) {
                return e = s(e, t), c || (c = e.length > 1), e
            }), a(t, f(t), n), c && (n = o(n, 7, u));
            for (var l = e.length; l--;) i(n, e[l]);
            return n
        });
    t.exports = l
}, function (t, e) {
    function n() {
        return !1
    }
    t.exports = n
}, function (t, e, n) {
    function r(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = o(t)) === i || t === -i) {
            return (t < 0 ? -1 : 1) * s
        }
        return t === t ? t : 0
    }
    var o = n(220),
        i = 1 / 0,
        s = 1.7976931348623157e308;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = o(t),
            n = e % 1;
        return e === e ? n ? e - n : e : 0
    }
    var o = n(218);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return s;
        if (o(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || f.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? s : +t
    }
    var o = n(7),
        i = n(23),
        s = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        l = parseInt;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return null == t ? "" : o(t)
    }
    var o = n(144);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return null == t ? [] : o(t, i(t))
    }
    var o = n(146),
        i = n(15);
    t.exports = r
}, function (t, e, n) {
    var r = n(131),
        o = n(54),
        i = n(211),
        s = o(function (t, e) {
            return i(t) ? r(t, e) : []
        });
    t.exports = s
}, function (t, e) {
    ! function (e) {
        function n() {}

        function r(t, e) {
            return function () {
                t.apply(e, arguments)
            }
        }

        function o(t) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
        }

        function i(t, e) {
            for (; 3 === t._state;) t = t._value;
            if (0 === t._state) return void t._deferreds.push(e);
            t._handled = !0, o._immediateFn(function () {
                var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null === n) return void(1 === t._state ? s : a)(e.promise, t._value);
                var r;
                try {
                    r = n(t._value)
                } catch (t) {
                    return void a(e.promise, t)
                }
                s(e.promise, r)
            })
        }

        function s(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if (e instanceof o) return t._state = 3, t._value = e, void u(t);
                    if ("function" == typeof n) return void f(r(n, e), t)
                }
                t._state = 1, t._value = e, u(t)
            } catch (e) {
                a(t, e)
            }
        }

        function a(t, e) {
            t._state = 2, t._value = e, u(t)
        }

        function u(t) {
            2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () {
                t._handled || o._unhandledRejectionFn(t._value)
            });
            for (var e = 0, n = t._deferreds.length; e < n; e++) i(t, t._deferreds[e]);
            t._deferreds = null
        }

        function c(t, e, n) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
        }

        function f(t, e) {
            var n = !1;
            try {
                t(function (t) {
                    n || (n = !0, s(e, t))
                }, function (t) {
                    n || (n = !0, a(e, t))
                })
            } catch (t) {
                if (n) return;
                n = !0, a(e, t)
            }
        }
        var l = setTimeout;
        o.prototype.catch = function (t) {
            return this.then(null, t)
        }, o.prototype.then = function (t, e) {
            var r = new this.constructor(n);
            return i(this, new c(t, e, r)), r
        }, o.all = function (t) {
            var e = Array.prototype.slice.call(t);
            return new o(function (t, n) {
                function r(i, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a) return void a.call(s, function (t) {
                                r(i, t)
                            }, n)
                        }
                        e[i] = s, 0 == --o && t(e)
                    } catch (t) {
                        n(t)
                    }
                }
                if (0 === e.length) return t([]);
                for (var o = e.length, i = 0; i < e.length; i++) r(i, e[i])
            })
        }, o.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === o ? t : new o(function (e) {
                e(t)
            })
        }, o.reject = function (t) {
            return new o(function (e, n) {
                n(t)
            })
        }, o.race = function (t) {
            return new o(function (e, n) {
                for (var r = 0, o = t.length; r < o; r++) t[r].then(e, n)
            })
        }, o._immediateFn = "function" == typeof setImmediate && function (t) {
            setImmediate(t)
        } || function (t) {
            l(t, 0)
        }, o._unhandledRejectionFn = function (t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }, o._setImmediateFn = function (t) {
            o._immediateFn = t
        }, o._setUnhandledRejectionFn = function (t) {
            o._unhandledRejectionFn = t
        }, void 0 !== t && t.exports ? t.exports = o : e.Promise || (e.Promise = o)
    }(this)
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}]);
