function _mergeNamespaces(ze, Gr) {
    for (var Wr = 0; Wr < Gr.length; Wr++) {
        const Kr = Gr[Wr];
        if (typeof Kr != "string" && !Array.isArray(Kr)) {
            for (const Yr in Kr)
                if (Yr !== "default" && !(Yr in ze)) {
                    const Qr = Object.getOwnPropertyDescriptor(Kr, Yr);
                    Qr && Object.defineProperty(ze, Yr, Qr.get ? Qr : { enumerable: !0, get: () => Kr[Yr] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(ze, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(ze) {
    return ze && ze.__esModule && Object.prototype.hasOwnProperty.call(ze, "default") ? ze.default : ze;
}
var htmx_min$1 = { exports: {} };
(function (module) {
    (function (ze, Gr) {
        module.exports ? (module.exports = Gr()) : (ze.htmx = ze.htmx || Gr());
    })(typeof self < "u" ? self : commonjsGlobal, function () {
        return (function () {
            var Q = {
                    onLoad: F,
                    process: zt,
                    on: de,
                    off: ge,
                    trigger: ce,
                    ajax: Nr,
                    find: C,
                    findAll: f,
                    closest: v,
                    values: function (ze, Gr) {
                        var Wr = dr(ze, Gr || "post");
                        return Wr.values;
                    },
                    remove: _,
                    addClass: z,
                    removeClass: n,
                    toggleClass: $,
                    takeClass: W,
                    defineExtension: Ur,
                    removeExtension: Br,
                    logAll: V,
                    logNone: j,
                    logger: null,
                    config: {
                        historyEnabled: !0,
                        historyCacheSize: 10,
                        refreshOnHistoryMiss: !1,
                        defaultSwapStyle: "innerHTML",
                        defaultSwapDelay: 0,
                        defaultSettleDelay: 20,
                        includeIndicatorStyles: !0,
                        indicatorClass: "htmx-indicator",
                        requestClass: "htmx-request",
                        addedClass: "htmx-added",
                        settlingClass: "htmx-settling",
                        swappingClass: "htmx-swapping",
                        allowEval: !0,
                        allowScriptTags: !0,
                        inlineScriptNonce: "",
                        attributesToSettle: ["class", "style", "width", "height"],
                        withCredentials: !1,
                        timeout: 0,
                        wsReconnectDelay: "full-jitter",
                        wsBinaryType: "blob",
                        disableSelector: "[hx-disable], [data-hx-disable]",
                        useTemplateFragments: !1,
                        scrollBehavior: "smooth",
                        defaultFocusScroll: !1,
                        getCacheBusterParam: !1,
                        globalViewTransitions: !1,
                        methodsThatUseUrlParams: ["get"],
                        selfRequestsOnly: !1,
                        ignoreTitle: !1,
                        scrollIntoViewOnBoost: !0,
                        triggerSpecsCache: null,
                    },
                    parseInterval: d,
                    _: t,
                    createEventSource: function (ze) {
                        return new EventSource(ze, { withCredentials: !0 });
                    },
                    createWebSocket: function (ze) {
                        var Gr = new WebSocket(ze, []);
                        return (Gr.binaryType = Q.config.wsBinaryType), Gr;
                    },
                    version: "1.9.12",
                },
                r = {
                    addTriggerHandler: Lt,
                    bodyContains: se,
                    canAccessLocalStorage: U,
                    findThisElement: xe,
                    filterValues: yr,
                    hasAttribute: o,
                    getAttributeValue: te,
                    getClosestAttributeValue: ne,
                    getClosestMatch: c,
                    getExpressionVars: Hr,
                    getHeaders: xr,
                    getInputValues: dr,
                    getInternalData: ae,
                    getSwapSpecification: wr,
                    getTriggerSpecs: it,
                    getTarget: ye,
                    makeFragment: l,
                    mergeObjects: le,
                    makeSettleInfo: T,
                    oobSwap: Ee,
                    querySelectorExt: ue,
                    selectAndSwap: je,
                    settleImmediately: nr,
                    shouldCancel: ut,
                    triggerEvent: ce,
                    triggerErrorEvent: fe,
                    withExtensions: R,
                },
                w = ["get", "post", "put", "delete", "patch"],
                i = w
                    .map(function (ze) {
                        return "[hx-" + ze + "], [data-hx-" + ze + "]";
                    })
                    .join(", "),
                S = e("head"),
                q = e("title"),
                H = e("svg", !0);
            function e(ze, Gr) {
                return new RegExp("<" + ze + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + ze + ">", Gr ? "gim" : "im");
            }
            function d(ze) {
                if (ze == null) return;
                let Gr = NaN;
                return (
                    ze.slice(-2) == "ms" ? (Gr = parseFloat(ze.slice(0, -2))) : ze.slice(-1) == "s" ? (Gr = parseFloat(ze.slice(0, -1)) * 1e3) : ze.slice(-1) == "m" ? (Gr = parseFloat(ze.slice(0, -1)) * 1e3 * 60) : (Gr = parseFloat(ze)),
                    isNaN(Gr) ? void 0 : Gr
                );
            }
            function ee(ze, Gr) {
                return ze.getAttribute && ze.getAttribute(Gr);
            }
            function o(ze, Gr) {
                return ze.hasAttribute && (ze.hasAttribute(Gr) || ze.hasAttribute("data-" + Gr));
            }
            function te(ze, Gr) {
                return ee(ze, Gr) || ee(ze, "data-" + Gr);
            }
            function u(ze) {
                return ze.parentElement;
            }
            function re() {
                return document;
            }
            function c(ze, Gr) {
                for (; ze && !Gr(ze); ) ze = u(ze);
                return ze || null;
            }
            function L(ze, Gr, Wr) {
                var Kr = te(Gr, Wr),
                    Yr = te(Gr, "hx-disinherit");
                return ze !== Gr && Yr && (Yr === "*" || Yr.split(" ").indexOf(Wr) >= 0) ? "unset" : Kr;
            }
            function ne(ze, Gr) {
                var Wr = null;
                if (
                    (c(ze, function (Kr) {
                        return (Wr = L(ze, Kr, Gr));
                    }),
                    Wr !== "unset")
                )
                    return Wr;
            }
            function h(ze, Gr) {
                var Wr = ze.matches || ze.matchesSelector || ze.msMatchesSelector || ze.mozMatchesSelector || ze.webkitMatchesSelector || ze.oMatchesSelector;
                return Wr && Wr.call(ze, Gr);
            }
            function A(ze) {
                var Gr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    Wr = Gr.exec(ze);
                return Wr ? Wr[1].toLowerCase() : "";
            }
            function s(ze, Gr) {
                for (var Wr = new DOMParser(), Kr = Wr.parseFromString(ze, "text/html"), Yr = Kr.body; Gr > 0; ) Gr--, (Yr = Yr.firstChild);
                return Yr == null && (Yr = re().createDocumentFragment()), Yr;
            }
            function N(ze) {
                return /<body/.test(ze);
            }
            function l(ze) {
                var Gr = !N(ze),
                    Wr = A(ze),
                    Kr = ze;
                if ((Wr === "head" && (Kr = Kr.replace(S, "")), Q.config.useTemplateFragments && Gr)) {
                    var Yr = s("<body><template>" + Kr + "</template></body>", 0),
                        Qr = Yr.querySelector("template").content;
                    return (
                        Q.config.allowScriptTags
                            ? oe(Qr.querySelectorAll("script"), function (Jr) {
                                  Q.config.inlineScriptNonce && (Jr.nonce = Q.config.inlineScriptNonce), (Jr.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1);
                              })
                            : oe(Qr.querySelectorAll("script"), function (Jr) {
                                  _(Jr);
                              }),
                        Qr
                    );
                }
                switch (Wr) {
                    case "thead":
                    case "tbody":
                    case "tfoot":
                    case "colgroup":
                    case "caption":
                        return s("<table>" + Kr + "</table>", 1);
                    case "col":
                        return s("<table><colgroup>" + Kr + "</colgroup></table>", 2);
                    case "tr":
                        return s("<table><tbody>" + Kr + "</tbody></table>", 2);
                    case "td":
                    case "th":
                        return s("<table><tbody><tr>" + Kr + "</tr></tbody></table>", 3);
                    case "script":
                    case "style":
                        return s("<div>" + Kr + "</div>", 1);
                    default:
                        return s(Kr, 0);
                }
            }
            function ie(ze) {
                ze && ze();
            }
            function I(ze, Gr) {
                return Object.prototype.toString.call(ze) === "[object " + Gr + "]";
            }
            function k(ze) {
                return I(ze, "Function");
            }
            function P(ze) {
                return I(ze, "Object");
            }
            function ae(ze) {
                var Gr = "htmx-internal-data",
                    Wr = ze[Gr];
                return Wr || (Wr = ze[Gr] = {}), Wr;
            }
            function M(ze) {
                var Gr = [];
                if (ze) for (var Wr = 0; Wr < ze.length; Wr++) Gr.push(ze[Wr]);
                return Gr;
            }
            function oe(ze, Gr) {
                if (ze) for (var Wr = 0; Wr < ze.length; Wr++) Gr(ze[Wr]);
            }
            function X(ze) {
                var Gr = ze.getBoundingClientRect(),
                    Wr = Gr.top,
                    Kr = Gr.bottom;
                return Wr < window.innerHeight && Kr >= 0;
            }
            function se(ze) {
                return ze.getRootNode && ze.getRootNode() instanceof window.ShadowRoot ? re().body.contains(ze.getRootNode().host) : re().body.contains(ze);
            }
            function D(ze) {
                return ze.trim().split(/\s+/);
            }
            function le(ze, Gr) {
                for (var Wr in Gr) Gr.hasOwnProperty(Wr) && (ze[Wr] = Gr[Wr]);
                return ze;
            }
            function E(ze) {
                try {
                    return JSON.parse(ze);
                } catch (Gr) {
                    return b(Gr), null;
                }
            }
            function U() {
                var ze = "htmx:localStorageTest";
                try {
                    return localStorage.setItem(ze, ze), localStorage.removeItem(ze), !0;
                } catch {
                    return !1;
                }
            }
            function B(ze) {
                try {
                    var Gr = new URL(ze);
                    return Gr && (ze = Gr.pathname + Gr.search), /^\/$/.test(ze) || (ze = ze.replace(/\/+$/, "")), ze;
                } catch {
                    return ze;
                }
            }
            function t(e) {
                return Tr(re().body, function () {
                    return eval(e);
                });
            }
            function F(ze) {
                var Gr = Q.on("htmx:load", function (Wr) {
                    ze(Wr.detail.elt);
                });
                return Gr;
            }
            function V() {
                Q.logger = function (ze, Gr, Wr) {
                    console && console.log(Gr, ze, Wr);
                };
            }
            function j() {
                Q.logger = null;
            }
            function C(ze, Gr) {
                return Gr ? ze.querySelector(Gr) : C(re(), ze);
            }
            function f(ze, Gr) {
                return Gr ? ze.querySelectorAll(Gr) : f(re(), ze);
            }
            function _(ze, Gr) {
                (ze = p(ze)),
                    Gr
                        ? setTimeout(function () {
                              _(ze), (ze = null);
                          }, Gr)
                        : ze.parentElement.removeChild(ze);
            }
            function z(ze, Gr, Wr) {
                (ze = p(ze)),
                    Wr
                        ? setTimeout(function () {
                              z(ze, Gr), (ze = null);
                          }, Wr)
                        : ze.classList && ze.classList.add(Gr);
            }
            function n(ze, Gr, Wr) {
                (ze = p(ze)),
                    Wr
                        ? setTimeout(function () {
                              n(ze, Gr), (ze = null);
                          }, Wr)
                        : ze.classList && (ze.classList.remove(Gr), ze.classList.length === 0 && ze.removeAttribute("class"));
            }
            function $(ze, Gr) {
                (ze = p(ze)), ze.classList.toggle(Gr);
            }
            function W(ze, Gr) {
                (ze = p(ze)),
                    oe(ze.parentElement.children, function (Wr) {
                        n(Wr, Gr);
                    }),
                    z(ze, Gr);
            }
            function v(ze, Gr) {
                if (((ze = p(ze)), ze.closest)) return ze.closest(Gr);
                do if (ze == null || h(ze, Gr)) return ze;
                while ((ze = ze && u(ze)));
                return null;
            }
            function g(ze, Gr) {
                return ze.substring(0, Gr.length) === Gr;
            }
            function G(ze, Gr) {
                return ze.substring(ze.length - Gr.length) === Gr;
            }
            function J(ze) {
                var Gr = ze.trim();
                return g(Gr, "<") && G(Gr, "/>") ? Gr.substring(1, Gr.length - 2) : Gr;
            }
            function Z(ze, Gr) {
                return Gr.indexOf("closest ") === 0
                    ? [v(ze, J(Gr.substr(8)))]
                    : Gr.indexOf("find ") === 0
                    ? [C(ze, J(Gr.substr(5)))]
                    : Gr === "next"
                    ? [ze.nextElementSibling]
                    : Gr.indexOf("next ") === 0
                    ? [K(ze, J(Gr.substr(5)))]
                    : Gr === "previous"
                    ? [ze.previousElementSibling]
                    : Gr.indexOf("previous ") === 0
                    ? [Y(ze, J(Gr.substr(9)))]
                    : Gr === "document"
                    ? [document]
                    : Gr === "window"
                    ? [window]
                    : Gr === "body"
                    ? [document.body]
                    : re().querySelectorAll(J(Gr));
            }
            var K = function (ze, Gr) {
                    for (var Wr = re().querySelectorAll(Gr), Kr = 0; Kr < Wr.length; Kr++) {
                        var Yr = Wr[Kr];
                        if (Yr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_PRECEDING) return Yr;
                    }
                },
                Y = function (ze, Gr) {
                    for (var Wr = re().querySelectorAll(Gr), Kr = Wr.length - 1; Kr >= 0; Kr--) {
                        var Yr = Wr[Kr];
                        if (Yr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_FOLLOWING) return Yr;
                    }
                };
            function ue(ze, Gr) {
                return Gr ? Z(ze, Gr)[0] : Z(re().body, ze)[0];
            }
            function p(ze) {
                return I(ze, "String") ? C(ze) : ze;
            }
            function ve(ze, Gr, Wr) {
                return k(Gr) ? { target: re().body, event: ze, listener: Gr } : { target: p(ze), event: Gr, listener: Wr };
            }
            function de(ze, Gr, Wr) {
                jr(function () {
                    var Yr = ve(ze, Gr, Wr);
                    Yr.target.addEventListener(Yr.event, Yr.listener);
                });
                var Kr = k(Gr);
                return Kr ? Gr : Wr;
            }
            function ge(ze, Gr, Wr) {
                return (
                    jr(function () {
                        var Kr = ve(ze, Gr, Wr);
                        Kr.target.removeEventListener(Kr.event, Kr.listener);
                    }),
                    k(Gr) ? Gr : Wr
                );
            }
            var pe = re().createElement("output");
            function me(ze, Gr) {
                var Wr = ne(ze, Gr);
                if (Wr) {
                    if (Wr === "this") return [xe(ze, Gr)];
                    var Kr = Z(ze, Wr);
                    return Kr.length === 0 ? (b('The selector "' + Wr + '" on ' + Gr + " returned no matches!"), [pe]) : Kr;
                }
            }
            function xe(ze, Gr) {
                return c(ze, function (Wr) {
                    return te(Wr, Gr) != null;
                });
            }
            function ye(ze) {
                var Gr = ne(ze, "hx-target");
                if (Gr) return Gr === "this" ? xe(ze, "hx-target") : ue(ze, Gr);
                var Wr = ae(ze);
                return Wr.boosted ? re().body : ze;
            }
            function be(ze) {
                for (var Gr = Q.config.attributesToSettle, Wr = 0; Wr < Gr.length; Wr++) if (ze === Gr[Wr]) return !0;
                return !1;
            }
            function we(ze, Gr) {
                oe(ze.attributes, function (Wr) {
                    !Gr.hasAttribute(Wr.name) && be(Wr.name) && ze.removeAttribute(Wr.name);
                }),
                    oe(Gr.attributes, function (Wr) {
                        be(Wr.name) && ze.setAttribute(Wr.name, Wr.value);
                    });
            }
            function Se(ze, Gr) {
                for (var Wr = Fr(Gr), Kr = 0; Kr < Wr.length; Kr++) {
                    var Yr = Wr[Kr];
                    try {
                        if (Yr.isInlineSwap(ze)) return !0;
                    } catch (Qr) {
                        b(Qr);
                    }
                }
                return ze === "outerHTML";
            }
            function Ee(ze, Gr, Wr) {
                var Kr = "#" + ee(Gr, "id"),
                    Yr = "outerHTML";
                ze === "true" || (ze.indexOf(":") > 0 ? ((Yr = ze.substr(0, ze.indexOf(":"))), (Kr = ze.substr(ze.indexOf(":") + 1, ze.length))) : (Yr = ze));
                var Qr = re().querySelectorAll(Kr);
                return (
                    Qr
                        ? (oe(Qr, function (Jr) {
                              var Zr,
                                  ei = Gr.cloneNode(!0);
                              (Zr = re().createDocumentFragment()), Zr.appendChild(ei), Se(Yr, Jr) || (Zr = ei);
                              var ti = { shouldSwap: !0, target: Jr, fragment: Zr };
                              ce(Jr, "htmx:oobBeforeSwap", ti) &&
                                  ((Jr = ti.target),
                                  ti.shouldSwap && Fe(Yr, Jr, Jr, Zr, Wr),
                                  oe(Wr.elts, function (ri) {
                                      ce(ri, "htmx:oobAfterSwap", ti);
                                  }));
                          }),
                          Gr.parentNode.removeChild(Gr))
                        : (Gr.parentNode.removeChild(Gr), fe(re().body, "htmx:oobErrorNoTarget", { content: Gr })),
                    ze
                );
            }
            function Ce(ze, Gr, Wr) {
                var Kr = ne(ze, "hx-select-oob");
                if (Kr)
                    for (var Yr = Kr.split(","), Qr = 0; Qr < Yr.length; Qr++) {
                        var Jr = Yr[Qr].split(":", 2),
                            Zr = Jr[0].trim();
                        Zr.indexOf("#") === 0 && (Zr = Zr.substring(1));
                        var ei = Jr[1] || "true",
                            ti = Gr.querySelector("#" + Zr);
                        ti && Ee(ei, ti, Wr);
                    }
                oe(f(Gr, "[hx-swap-oob], [data-hx-swap-oob]"), function (ri) {
                    var ii = te(ri, "hx-swap-oob");
                    ii != null && Ee(ii, ri, Wr);
                });
            }
            function Re(ze) {
                oe(f(ze, "[hx-preserve], [data-hx-preserve]"), function (Gr) {
                    var Wr = te(Gr, "id"),
                        Kr = re().getElementById(Wr);
                    Kr != null && Gr.parentNode.replaceChild(Kr, Gr);
                });
            }
            function Te(ze, Gr, Wr) {
                oe(Gr.querySelectorAll("[id]"), function (Kr) {
                    var Yr = ee(Kr, "id");
                    if (Yr && Yr.length > 0) {
                        var Qr = Yr.replace("'", "\\'"),
                            Jr = Kr.tagName.replace(":", "\\:"),
                            Zr = ze.querySelector(Jr + "[id='" + Qr + "']");
                        if (Zr && Zr !== ze) {
                            var ei = Kr.cloneNode();
                            we(Kr, Zr),
                                Wr.tasks.push(function () {
                                    we(Kr, ei);
                                });
                        }
                    }
                });
            }
            function Oe(ze) {
                return function () {
                    n(ze, Q.config.addedClass), zt(ze), Nt(ze), qe(ze), ce(ze, "htmx:load");
                };
            }
            function qe(ze) {
                var Gr = "[autofocus]",
                    Wr = h(ze, Gr) ? ze : ze.querySelector(Gr);
                Wr != null && Wr.focus();
            }
            function a(ze, Gr, Wr, Kr) {
                for (Te(ze, Wr, Kr); Wr.childNodes.length > 0; ) {
                    var Yr = Wr.firstChild;
                    z(Yr, Q.config.addedClass), ze.insertBefore(Yr, Gr), Yr.nodeType !== Node.TEXT_NODE && Yr.nodeType !== Node.COMMENT_NODE && Kr.tasks.push(Oe(Yr));
                }
            }
            function He(ze, Gr) {
                for (var Wr = 0; Wr < ze.length; ) Gr = ((Gr << 5) - Gr + ze.charCodeAt(Wr++)) | 0;
                return Gr;
            }
            function Le(ze) {
                var Gr = 0;
                if (ze.attributes)
                    for (var Wr = 0; Wr < ze.attributes.length; Wr++) {
                        var Kr = ze.attributes[Wr];
                        Kr.value && ((Gr = He(Kr.name, Gr)), (Gr = He(Kr.value, Gr)));
                    }
                return Gr;
            }
            function Ae(ze) {
                var Gr = ae(ze);
                if (Gr.onHandlers) {
                    for (var Wr = 0; Wr < Gr.onHandlers.length; Wr++) {
                        const Kr = Gr.onHandlers[Wr];
                        ze.removeEventListener(Kr.event, Kr.listener);
                    }
                    delete Gr.onHandlers;
                }
            }
            function Ne(ze) {
                var Gr = ae(ze);
                Gr.timeout && clearTimeout(Gr.timeout),
                    Gr.webSocket && Gr.webSocket.close(),
                    Gr.sseEventSource && Gr.sseEventSource.close(),
                    Gr.listenerInfos &&
                        oe(Gr.listenerInfos, function (Wr) {
                            Wr.on && Wr.on.removeEventListener(Wr.trigger, Wr.listener);
                        }),
                    Ae(ze),
                    oe(Object.keys(Gr), function (Wr) {
                        delete Gr[Wr];
                    });
            }
            function m(ze) {
                ce(ze, "htmx:beforeCleanupElement"),
                    Ne(ze),
                    ze.children &&
                        oe(ze.children, function (Gr) {
                            m(Gr);
                        });
            }
            function Ie(ze, Gr, Wr) {
                if (ze.tagName === "BODY") return Ue(ze, Gr, Wr);
                var Kr,
                    Yr = ze.previousSibling;
                for (
                    a(u(ze), ze, Gr, Wr),
                        Yr == null ? (Kr = u(ze).firstChild) : (Kr = Yr.nextSibling),
                        Wr.elts = Wr.elts.filter(function (Qr) {
                            return Qr != ze;
                        });
                    Kr && Kr !== ze;

                )
                    Kr.nodeType === Node.ELEMENT_NODE && Wr.elts.push(Kr), (Kr = Kr.nextElementSibling);
                m(ze), u(ze).removeChild(ze);
            }
            function ke(ze, Gr, Wr) {
                return a(ze, ze.firstChild, Gr, Wr);
            }
            function Pe(ze, Gr, Wr) {
                return a(u(ze), ze, Gr, Wr);
            }
            function Me(ze, Gr, Wr) {
                return a(ze, null, Gr, Wr);
            }
            function Xe(ze, Gr, Wr) {
                return a(u(ze), ze.nextSibling, Gr, Wr);
            }
            function De(ze, Gr, Wr) {
                return m(ze), u(ze).removeChild(ze);
            }
            function Ue(ze, Gr, Wr) {
                var Kr = ze.firstChild;
                if ((a(ze, Kr, Gr, Wr), Kr)) {
                    for (; Kr.nextSibling; ) m(Kr.nextSibling), ze.removeChild(Kr.nextSibling);
                    m(Kr), ze.removeChild(Kr);
                }
            }
            function Be(ze, Gr, Wr) {
                var Kr = Wr || ne(ze, "hx-select");
                if (Kr) {
                    var Yr = re().createDocumentFragment();
                    oe(Gr.querySelectorAll(Kr), function (Qr) {
                        Yr.appendChild(Qr);
                    }),
                        (Gr = Yr);
                }
                return Gr;
            }
            function Fe(ze, Gr, Wr, Kr, Yr) {
                switch (ze) {
                    case "none":
                        return;
                    case "outerHTML":
                        Ie(Wr, Kr, Yr);
                        return;
                    case "afterbegin":
                        ke(Wr, Kr, Yr);
                        return;
                    case "beforebegin":
                        Pe(Wr, Kr, Yr);
                        return;
                    case "beforeend":
                        Me(Wr, Kr, Yr);
                        return;
                    case "afterend":
                        Xe(Wr, Kr, Yr);
                        return;
                    case "delete":
                        De(Wr);
                        return;
                    default:
                        for (var Qr = Fr(Gr), Jr = 0; Jr < Qr.length; Jr++) {
                            var Zr = Qr[Jr];
                            try {
                                var ei = Zr.handleSwap(ze, Wr, Kr, Yr);
                                if (ei) {
                                    if (typeof ei.length < "u")
                                        for (var ti = 0; ti < ei.length; ti++) {
                                            var ri = ei[ti];
                                            ri.nodeType !== Node.TEXT_NODE && ri.nodeType !== Node.COMMENT_NODE && Yr.tasks.push(Oe(ri));
                                        }
                                    return;
                                }
                            } catch (ii) {
                                b(ii);
                            }
                        }
                        ze === "innerHTML" ? Ue(Wr, Kr, Yr) : Fe(Q.config.defaultSwapStyle, Gr, Wr, Kr, Yr);
                }
            }
            function Ve(ze) {
                if (ze.indexOf("<title") > -1) {
                    var Gr = ze.replace(H, ""),
                        Wr = Gr.match(q);
                    if (Wr) return Wr[2];
                }
            }
            function je(ze, Gr, Wr, Kr, Yr, Qr) {
                Yr.title = Ve(Kr);
                var Jr = l(Kr);
                if (Jr) return Ce(Wr, Jr, Yr), (Jr = Be(Wr, Jr, Qr)), Re(Jr), Fe(ze, Wr, Gr, Jr, Yr);
            }
            function _e(ze, Gr, Wr) {
                var Kr = ze.getResponseHeader(Gr);
                if (Kr.indexOf("{") === 0) {
                    var Yr = E(Kr);
                    for (var Qr in Yr)
                        if (Yr.hasOwnProperty(Qr)) {
                            var Jr = Yr[Qr];
                            P(Jr) || (Jr = { value: Jr }), ce(Wr, Qr, Jr);
                        }
                } else for (var Zr = Kr.split(","), ei = 0; ei < Zr.length; ei++) ce(Wr, Zr[ei].trim(), []);
            }
            var x = /[\s,]/,
                $e = /[_$a-zA-Z]/,
                We = /[_$a-zA-Z0-9]/,
                Ge = ['"', "'", "/"],
                Je = /[^\s]/,
                Ze = /[{(]/,
                Ke = /[})]/;
            function Ye(ze) {
                for (var Gr = [], Wr = 0; Wr < ze.length; ) {
                    if ($e.exec(ze.charAt(Wr))) {
                        for (var Kr = Wr; We.exec(ze.charAt(Wr + 1)); ) Wr++;
                        Gr.push(ze.substr(Kr, Wr - Kr + 1));
                    } else if (Ge.indexOf(ze.charAt(Wr)) !== -1) {
                        var Yr = ze.charAt(Wr),
                            Kr = Wr;
                        for (Wr++; Wr < ze.length && ze.charAt(Wr) !== Yr; ) ze.charAt(Wr) === "\\" && Wr++, Wr++;
                        Gr.push(ze.substr(Kr, Wr - Kr + 1));
                    } else {
                        var Qr = ze.charAt(Wr);
                        Gr.push(Qr);
                    }
                    Wr++;
                }
                return Gr;
            }
            function Qe(ze, Gr, Wr) {
                return $e.exec(ze.charAt(0)) && ze !== "true" && ze !== "false" && ze !== "this" && ze !== Wr && Gr !== ".";
            }
            function et(ze, Gr, Wr) {
                if (Gr[0] === "[") {
                    Gr.shift();
                    for (var Kr = 1, Yr = " return (function(" + Wr + "){ return (", Qr = null; Gr.length > 0; ) {
                        var Jr = Gr[0];
                        if (Jr === "]") {
                            if ((Kr--, Kr === 0)) {
                                Qr === null && (Yr = Yr + "true"), Gr.shift(), (Yr += ")})");
                                try {
                                    var Zr = Tr(
                                        ze,
                                        function () {
                                            return Function(Yr)();
                                        },
                                        function () {
                                            return !0;
                                        }
                                    );
                                    return (Zr.source = Yr), Zr;
                                } catch (ei) {
                                    return fe(re().body, "htmx:syntax:error", { error: ei, source: Yr }), null;
                                }
                            }
                        } else Jr === "[" && Kr++;
                        Qe(Jr, Qr, Wr) ? (Yr += "((" + Wr + "." + Jr + ") ? (" + Wr + "." + Jr + ") : (window." + Jr + "))") : (Yr = Yr + Jr), (Qr = Gr.shift());
                    }
                }
            }
            function y(ze, Gr) {
                for (var Wr = ""; ze.length > 0 && !Gr.test(ze[0]); ) Wr += ze.shift();
                return Wr;
            }
            function tt(ze) {
                var Gr;
                return ze.length > 0 && Ze.test(ze[0]) ? (ze.shift(), (Gr = y(ze, Ke).trim()), ze.shift()) : (Gr = y(ze, x)), Gr;
            }
            var rt = "input, textarea, select";
            function nt(ze, Gr, Wr) {
                var Kr = [],
                    Yr = Ye(Gr);
                do {
                    y(Yr, Je);
                    var Qr = Yr.length,
                        Jr = y(Yr, /[,\[\s]/);
                    if (Jr !== "")
                        if (Jr === "every") {
                            var Zr = { trigger: "every" };
                            y(Yr, Je), (Zr.pollInterval = d(y(Yr, /[,\[\s]/))), y(Yr, Je);
                            var ei = et(ze, Yr, "event");
                            ei && (Zr.eventFilter = ei), Kr.push(Zr);
                        } else if (Jr.indexOf("sse:") === 0) Kr.push({ trigger: "sse", sseEvent: Jr.substr(4) });
                        else {
                            var ti = { trigger: Jr },
                                ei = et(ze, Yr, "event");
                            for (ei && (ti.eventFilter = ei); Yr.length > 0 && Yr[0] !== ","; ) {
                                y(Yr, Je);
                                var ri = Yr.shift();
                                if (ri === "changed") ti.changed = !0;
                                else if (ri === "once") ti.once = !0;
                                else if (ri === "consume") ti.consume = !0;
                                else if (ri === "delay" && Yr[0] === ":") Yr.shift(), (ti.delay = d(y(Yr, x)));
                                else if (ri === "from" && Yr[0] === ":") {
                                    if ((Yr.shift(), Ze.test(Yr[0]))) var ii = tt(Yr);
                                    else {
                                        var ii = y(Yr, x);
                                        if (ii === "closest" || ii === "find" || ii === "next" || ii === "previous") {
                                            Yr.shift();
                                            var ni = tt(Yr);
                                            ni.length > 0 && (ii += " " + ni);
                                        }
                                    }
                                    ti.from = ii;
                                } else
                                    ri === "target" && Yr[0] === ":"
                                        ? (Yr.shift(), (ti.target = tt(Yr)))
                                        : ri === "throttle" && Yr[0] === ":"
                                        ? (Yr.shift(), (ti.throttle = d(y(Yr, x))))
                                        : ri === "queue" && Yr[0] === ":"
                                        ? (Yr.shift(), (ti.queue = y(Yr, x)))
                                        : ri === "root" && Yr[0] === ":"
                                        ? (Yr.shift(), (ti[ri] = tt(Yr)))
                                        : ri === "threshold" && Yr[0] === ":"
                                        ? (Yr.shift(), (ti[ri] = y(Yr, x)))
                                        : fe(ze, "htmx:syntax:error", { token: Yr.shift() });
                            }
                            Kr.push(ti);
                        }
                    Yr.length === Qr && fe(ze, "htmx:syntax:error", { token: Yr.shift() }), y(Yr, Je);
                } while (Yr[0] === "," && Yr.shift());
                return Wr && (Wr[Gr] = Kr), Kr;
            }
            function it(ze) {
                var Gr = te(ze, "hx-trigger"),
                    Wr = [];
                if (Gr) {
                    var Kr = Q.config.triggerSpecsCache;
                    Wr = (Kr && Kr[Gr]) || nt(ze, Gr, Kr);
                }
                return Wr.length > 0 ? Wr : h(ze, "form") ? [{ trigger: "submit" }] : h(ze, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(ze, rt) ? [{ trigger: "change" }] : [{ trigger: "click" }];
            }
            function at(ze) {
                ae(ze).cancelled = !0;
            }
            function ot(ze, Gr, Wr) {
                var Kr = ae(ze);
                Kr.timeout = setTimeout(function () {
                    se(ze) && Kr.cancelled !== !0 && (ct(Wr, ze, Wt("hx:poll:trigger", { triggerSpec: Wr, target: ze })) || Gr(ze), ot(ze, Gr, Wr));
                }, Wr.pollInterval);
            }
            function st(ze) {
                return location.hostname === ze.hostname && ee(ze, "href") && ee(ze, "href").indexOf("#") !== 0;
            }
            function lt(ze, Gr, Wr) {
                if ((ze.tagName === "A" && st(ze) && (ze.target === "" || ze.target === "_self")) || ze.tagName === "FORM") {
                    Gr.boosted = !0;
                    var Kr, Yr;
                    if (ze.tagName === "A") (Kr = "get"), (Yr = ee(ze, "href"));
                    else {
                        var Qr = ee(ze, "method");
                        (Kr = Qr ? Qr.toLowerCase() : "get"), (Yr = ee(ze, "action"));
                    }
                    Wr.forEach(function (Jr) {
                        ht(
                            ze,
                            function (Zr, ei) {
                                if (v(Zr, Q.config.disableSelector)) {
                                    m(Zr);
                                    return;
                                }
                                he(Kr, Yr, Zr, ei);
                            },
                            Gr,
                            Jr,
                            !0
                        );
                    });
                }
            }
            function ut(ze, Gr) {
                return !!(
                    (ze.type === "submit" || ze.type === "click") &&
                    (Gr.tagName === "FORM" || (h(Gr, 'input[type="submit"], button') && v(Gr, "form") !== null) || (Gr.tagName === "A" && Gr.href && (Gr.getAttribute("href") === "#" || Gr.getAttribute("href").indexOf("#") !== 0)))
                );
            }
            function ft(ze, Gr) {
                return ae(ze).boosted && ze.tagName === "A" && Gr.type === "click" && (Gr.ctrlKey || Gr.metaKey);
            }
            function ct(ze, Gr, Wr) {
                var Kr = ze.eventFilter;
                if (Kr)
                    try {
                        return Kr.call(Gr, Wr) !== !0;
                    } catch (Yr) {
                        return fe(re().body, "htmx:eventFilter:error", { error: Yr, source: Kr.source }), !0;
                    }
                return !1;
            }
            function ht(ze, Gr, Wr, Kr, Yr) {
                var Qr = ae(ze),
                    Jr;
                Kr.from ? (Jr = Z(ze, Kr.from)) : (Jr = [ze]),
                    Kr.changed &&
                        Jr.forEach(function (Zr) {
                            var ei = ae(Zr);
                            ei.lastValue = Zr.value;
                        }),
                    oe(Jr, function (Zr) {
                        var ei = function (ti) {
                            if (!se(ze)) {
                                Zr.removeEventListener(Kr.trigger, ei);
                                return;
                            }
                            if (!ft(ze, ti) && ((Yr || ut(ti, ze)) && ti.preventDefault(), !ct(Kr, ze, ti))) {
                                var ri = ae(ti);
                                if (((ri.triggerSpec = Kr), ri.handledFor == null && (ri.handledFor = []), ri.handledFor.indexOf(ze) < 0)) {
                                    if ((ri.handledFor.push(ze), Kr.consume && ti.stopPropagation(), Kr.target && ti.target && !h(ti.target, Kr.target))) return;
                                    if (Kr.once) {
                                        if (Qr.triggeredOnce) return;
                                        Qr.triggeredOnce = !0;
                                    }
                                    if (Kr.changed) {
                                        var ii = ae(Zr);
                                        if (ii.lastValue === Zr.value) return;
                                        ii.lastValue = Zr.value;
                                    }
                                    if ((Qr.delayed && clearTimeout(Qr.delayed), Qr.throttle)) return;
                                    Kr.throttle > 0
                                        ? Qr.throttle ||
                                          (Gr(ze, ti),
                                          (Qr.throttle = setTimeout(function () {
                                              Qr.throttle = null;
                                          }, Kr.throttle)))
                                        : Kr.delay > 0
                                        ? (Qr.delayed = setTimeout(function () {
                                              Gr(ze, ti);
                                          }, Kr.delay))
                                        : (ce(ze, "htmx:trigger"), Gr(ze, ti));
                                }
                            }
                        };
                        Wr.listenerInfos == null && (Wr.listenerInfos = []), Wr.listenerInfos.push({ trigger: Kr.trigger, listener: ei, on: Zr }), Zr.addEventListener(Kr.trigger, ei);
                    });
            }
            var vt = !1,
                dt = null;
            function gt() {
                dt ||
                    ((dt = function () {
                        vt = !0;
                    }),
                    window.addEventListener("scroll", dt),
                    setInterval(function () {
                        vt &&
                            ((vt = !1),
                            oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function (ze) {
                                pt(ze);
                            }));
                    }, 200));
            }
            function pt(ze) {
                if (!o(ze, "data-hx-revealed") && X(ze)) {
                    ze.setAttribute("data-hx-revealed", "true");
                    var Gr = ae(ze);
                    Gr.initHash
                        ? ce(ze, "revealed")
                        : ze.addEventListener(
                              "htmx:afterProcessNode",
                              function (Wr) {
                                  ce(ze, "revealed");
                              },
                              { once: !0 }
                          );
                }
            }
            function mt(ze, Gr, Wr) {
                for (var Kr = D(Wr), Yr = 0; Yr < Kr.length; Yr++) {
                    var Qr = Kr[Yr].split(/:(.+)/);
                    Qr[0] === "connect" && xt(ze, Qr[1], 0), Qr[0] === "send" && bt(ze);
                }
            }
            function xt(ze, Gr, Wr) {
                if (se(ze)) {
                    if (Gr.indexOf("/") == 0) {
                        var Kr = location.hostname + (location.port ? ":" + location.port : "");
                        location.protocol == "https:" ? (Gr = "wss://" + Kr + Gr) : location.protocol == "http:" && (Gr = "ws://" + Kr + Gr);
                    }
                    var Yr = Q.createWebSocket(Gr);
                    (Yr.onerror = function (Qr) {
                        fe(ze, "htmx:wsError", { error: Qr, socket: Yr }), yt(ze);
                    }),
                        (Yr.onclose = function (Qr) {
                            if ([1006, 1012, 1013].indexOf(Qr.code) >= 0) {
                                var Jr = wt(Wr);
                                setTimeout(function () {
                                    xt(ze, Gr, Wr + 1);
                                }, Jr);
                            }
                        }),
                        (Yr.onopen = function (Qr) {
                            Wr = 0;
                        }),
                        (ae(ze).webSocket = Yr),
                        Yr.addEventListener("message", function (Qr) {
                            if (!yt(ze)) {
                                var Jr = Qr.data;
                                R(ze, function (ni) {
                                    Jr = ni.transformResponse(Jr, null, ze);
                                });
                                for (var Zr = T(ze), ei = l(Jr), ti = M(ei.children), ri = 0; ri < ti.length; ri++) {
                                    var ii = ti[ri];
                                    Ee(te(ii, "hx-swap-oob") || "true", ii, Zr);
                                }
                                nr(Zr.tasks);
                            }
                        });
                }
            }
            function yt(ze) {
                if (!se(ze)) return ae(ze).webSocket.close(), !0;
            }
            function bt(ze) {
                var Gr = c(ze, function (Wr) {
                    return ae(Wr).webSocket != null;
                });
                Gr
                    ? ze.addEventListener(it(ze)[0].trigger, function (Wr) {
                          var Kr = ae(Gr).webSocket,
                              Yr = xr(ze, Gr),
                              Qr = dr(ze, "post"),
                              Jr = Qr.errors,
                              Zr = Qr.values,
                              ei = Hr(ze),
                              ti = le(Zr, ei),
                              ri = yr(ti, ze);
                          if (((ri.HEADERS = Yr), Jr && Jr.length > 0)) {
                              ce(ze, "htmx:validation:halted", Jr);
                              return;
                          }
                          Kr.send(JSON.stringify(ri)), ut(Wr, ze) && Wr.preventDefault();
                      })
                    : fe(ze, "htmx:noWebSocketSourceError");
            }
            function wt(ze) {
                var Gr = Q.config.wsReconnectDelay;
                if (typeof Gr == "function") return Gr(ze);
                if (Gr === "full-jitter") {
                    var Wr = Math.min(ze, 6),
                        Kr = 1e3 * Math.pow(2, Wr);
                    return Kr * Math.random();
                }
                b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
            }
            function St(ze, Gr, Wr) {
                for (var Kr = D(Wr), Yr = 0; Yr < Kr.length; Yr++) {
                    var Qr = Kr[Yr].split(/:(.+)/);
                    Qr[0] === "connect" && Et(ze, Qr[1]), Qr[0] === "swap" && Ct(ze, Qr[1]);
                }
            }
            function Et(ze, Gr) {
                var Wr = Q.createEventSource(Gr);
                (Wr.onerror = function (Kr) {
                    fe(ze, "htmx:sseError", { error: Kr, source: Wr }), Tt(ze);
                }),
                    (ae(ze).sseEventSource = Wr);
            }
            function Ct(ze, Gr) {
                var Wr = c(ze, Ot);
                if (Wr) {
                    var Kr = ae(Wr).sseEventSource,
                        Yr = function (Qr) {
                            if (!Tt(Wr)) {
                                if (!se(ze)) {
                                    Kr.removeEventListener(Gr, Yr);
                                    return;
                                }
                                var Jr = Qr.data;
                                R(ze, function (ri) {
                                    Jr = ri.transformResponse(Jr, null, ze);
                                });
                                var Zr = wr(ze),
                                    ei = ye(ze),
                                    ti = T(ze);
                                je(Zr.swapStyle, ei, ze, Jr, ti), nr(ti.tasks), ce(ze, "htmx:sseMessage", Qr);
                            }
                        };
                    (ae(ze).sseListener = Yr), Kr.addEventListener(Gr, Yr);
                } else fe(ze, "htmx:noSSESourceError");
            }
            function Rt(ze, Gr, Wr) {
                var Kr = c(ze, Ot);
                if (Kr) {
                    var Yr = ae(Kr).sseEventSource,
                        Qr = function () {
                            Tt(Kr) || (se(ze) ? Gr(ze) : Yr.removeEventListener(Wr, Qr));
                        };
                    (ae(ze).sseListener = Qr), Yr.addEventListener(Wr, Qr);
                } else fe(ze, "htmx:noSSESourceError");
            }
            function Tt(ze) {
                if (!se(ze)) return ae(ze).sseEventSource.close(), !0;
            }
            function Ot(ze) {
                return ae(ze).sseEventSource != null;
            }
            function qt(ze, Gr, Wr, Kr) {
                var Yr = function () {
                    Wr.loaded || ((Wr.loaded = !0), Gr(ze));
                };
                Kr > 0 ? setTimeout(Yr, Kr) : Yr();
            }
            function Ht(ze, Gr, Wr) {
                var Kr = !1;
                return (
                    oe(w, function (Yr) {
                        if (o(ze, "hx-" + Yr)) {
                            var Qr = te(ze, "hx-" + Yr);
                            (Kr = !0),
                                (Gr.path = Qr),
                                (Gr.verb = Yr),
                                Wr.forEach(function (Jr) {
                                    Lt(ze, Jr, Gr, function (Zr, ei) {
                                        if (v(Zr, Q.config.disableSelector)) {
                                            m(Zr);
                                            return;
                                        }
                                        he(Yr, Qr, Zr, ei);
                                    });
                                });
                        }
                    }),
                    Kr
                );
            }
            function Lt(ze, Gr, Wr, Kr) {
                if (Gr.sseEvent) Rt(ze, Kr, Gr.sseEvent);
                else if (Gr.trigger === "revealed") gt(), ht(ze, Kr, Wr, Gr), pt(ze);
                else if (Gr.trigger === "intersect") {
                    var Yr = {};
                    Gr.root && (Yr.root = ue(ze, Gr.root)), Gr.threshold && (Yr.threshold = parseFloat(Gr.threshold));
                    var Qr = new IntersectionObserver(function (Jr) {
                        for (var Zr = 0; Zr < Jr.length; Zr++) {
                            var ei = Jr[Zr];
                            if (ei.isIntersecting) {
                                ce(ze, "intersect");
                                break;
                            }
                        }
                    }, Yr);
                    Qr.observe(ze), ht(ze, Kr, Wr, Gr);
                } else Gr.trigger === "load" ? ct(Gr, ze, Wt("load", { elt: ze })) || qt(ze, Kr, Wr, Gr.delay) : Gr.pollInterval > 0 ? ((Wr.polling = !0), ot(ze, Kr, Gr)) : ht(ze, Kr, Wr, Gr);
            }
            function At(ze) {
                if (!ze.htmxExecuted && Q.config.allowScriptTags && (ze.type === "text/javascript" || ze.type === "module" || ze.type === "")) {
                    var Gr = re().createElement("script");
                    oe(ze.attributes, function (Kr) {
                        Gr.setAttribute(Kr.name, Kr.value);
                    }),
                        (Gr.textContent = ze.textContent),
                        (Gr.async = !1),
                        Q.config.inlineScriptNonce && (Gr.nonce = Q.config.inlineScriptNonce);
                    var Wr = ze.parentElement;
                    try {
                        Wr.insertBefore(Gr, ze);
                    } catch (Kr) {
                        b(Kr);
                    } finally {
                        ze.parentElement && ze.parentElement.removeChild(ze);
                    }
                }
            }
            function Nt(ze) {
                h(ze, "script") && At(ze),
                    oe(f(ze, "script"), function (Gr) {
                        At(Gr);
                    });
            }
            function It(ze) {
                var Gr = ze.attributes;
                if (!Gr) return !1;
                for (var Wr = 0; Wr < Gr.length; Wr++) {
                    var Kr = Gr[Wr].name;
                    if (g(Kr, "hx-on:") || g(Kr, "data-hx-on:") || g(Kr, "hx-on-") || g(Kr, "data-hx-on-")) return !0;
                }
                return !1;
            }
            function kt(ze) {
                var Gr = null,
                    Wr = [];
                if ((It(ze) && Wr.push(ze), document.evaluate))
                    for (var Kr = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', ze); (Gr = Kr.iterateNext()); )
                        Wr.push(Gr);
                else if (typeof ze.getElementsByTagName == "function") for (var Yr = ze.getElementsByTagName("*"), Qr = 0; Qr < Yr.length; Qr++) It(Yr[Qr]) && Wr.push(Yr[Qr]);
                return Wr;
            }
            function Pt(ze) {
                if (ze.querySelectorAll) {
                    var Gr = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]",
                        Wr = ze.querySelectorAll(i + Gr + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
                    return Wr;
                } else return [];
            }
            function Mt(ze) {
                var Gr = v(ze.target, "button, input[type='submit']"),
                    Wr = Dt(ze);
                Wr && (Wr.lastButtonClicked = Gr);
            }
            function Xt(ze) {
                var Gr = Dt(ze);
                Gr && (Gr.lastButtonClicked = null);
            }
            function Dt(ze) {
                var Gr = v(ze.target, "button, input[type='submit']");
                if (Gr) {
                    var Wr = p("#" + ee(Gr, "form")) || v(Gr, "form");
                    if (Wr) return ae(Wr);
                }
            }
            function Ut(ze) {
                ze.addEventListener("click", Mt), ze.addEventListener("focusin", Mt), ze.addEventListener("focusout", Xt);
            }
            function Bt(ze) {
                for (var Gr = Ye(ze), Wr = 0, Kr = 0; Kr < Gr.length; Kr++) {
                    const Yr = Gr[Kr];
                    Yr === "{" ? Wr++ : Yr === "}" && Wr--;
                }
                return Wr;
            }
            function Ft(ze, Gr, Wr) {
                var Kr = ae(ze);
                Array.isArray(Kr.onHandlers) || (Kr.onHandlers = []);
                var Yr,
                    Qr = function (Jr) {
                        return Tr(ze, function () {
                            Yr || (Yr = new Function("event", Wr)), Yr.call(ze, Jr);
                        });
                    };
                ze.addEventListener(Gr, Qr), Kr.onHandlers.push({ event: Gr, listener: Qr });
            }
            function Vt(ze) {
                var Gr = te(ze, "hx-on");
                if (Gr) {
                    for (
                        var Wr = {},
                            Kr = Gr.split(`
`),
                            Yr = null,
                            Qr = 0;
                        Kr.length > 0;

                    ) {
                        var Jr = Kr.shift(),
                            Zr = Jr.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                        Qr === 0 && Zr ? (Jr.split(":"), (Yr = Zr[1].slice(0, -1)), (Wr[Yr] = Zr[2])) : (Wr[Yr] += Jr), (Qr += Bt(Jr));
                    }
                    for (var ei in Wr) Ft(ze, ei, Wr[ei]);
                }
            }
            function jt(ze) {
                Ae(ze);
                for (var Gr = 0; Gr < ze.attributes.length; Gr++) {
                    var Wr = ze.attributes[Gr].name,
                        Kr = ze.attributes[Gr].value;
                    if (g(Wr, "hx-on") || g(Wr, "data-hx-on")) {
                        var Yr = Wr.indexOf("-on") + 3,
                            Qr = Wr.slice(Yr, Yr + 1);
                        if (Qr === "-" || Qr === ":") {
                            var Jr = Wr.slice(Yr + 1);
                            g(Jr, ":") ? (Jr = "htmx" + Jr) : g(Jr, "-") ? (Jr = "htmx:" + Jr.slice(1)) : g(Jr, "htmx-") && (Jr = "htmx:" + Jr.slice(5)), Ft(ze, Jr, Kr);
                        }
                    }
                }
            }
            function _t(ze) {
                if (v(ze, Q.config.disableSelector)) {
                    m(ze);
                    return;
                }
                var Gr = ae(ze);
                if (Gr.initHash !== Le(ze)) {
                    Ne(ze), (Gr.initHash = Le(ze)), Vt(ze), ce(ze, "htmx:beforeProcessNode"), ze.value && (Gr.lastValue = ze.value);
                    var Wr = it(ze),
                        Kr = Ht(ze, Gr, Wr);
                    Kr ||
                        (ne(ze, "hx-boost") === "true"
                            ? lt(ze, Gr, Wr)
                            : o(ze, "hx-trigger") &&
                              Wr.forEach(function (Jr) {
                                  Lt(ze, Jr, Gr, function () {});
                              })),
                        (ze.tagName === "FORM" || (ee(ze, "type") === "submit" && o(ze, "form"))) && Ut(ze);
                    var Yr = te(ze, "hx-sse");
                    Yr && St(ze, Gr, Yr);
                    var Qr = te(ze, "hx-ws");
                    Qr && mt(ze, Gr, Qr), ce(ze, "htmx:afterProcessNode");
                }
            }
            function zt(ze) {
                if (((ze = p(ze)), v(ze, Q.config.disableSelector))) {
                    m(ze);
                    return;
                }
                _t(ze),
                    oe(Pt(ze), function (Gr) {
                        _t(Gr);
                    }),
                    oe(kt(ze), jt);
            }
            function $t(ze) {
                return ze.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
            }
            function Wt(ze, Gr) {
                var Wr;
                return (
                    window.CustomEvent && typeof window.CustomEvent == "function" ? (Wr = new CustomEvent(ze, { bubbles: !0, cancelable: !0, detail: Gr })) : ((Wr = re().createEvent("CustomEvent")), Wr.initCustomEvent(ze, !0, !0, Gr)), Wr
                );
            }
            function fe(ze, Gr, Wr) {
                ce(ze, Gr, le({ error: Gr }, Wr));
            }
            function Gt(ze) {
                return ze === "htmx:afterProcessNode";
            }
            function R(ze, Gr) {
                oe(Fr(ze), function (Wr) {
                    try {
                        Gr(Wr);
                    } catch (Kr) {
                        b(Kr);
                    }
                });
            }
            function b(ze) {
                console.error ? console.error(ze) : console.log && console.log("ERROR: ", ze);
            }
            function ce(ze, Gr, Wr) {
                (ze = p(ze)), Wr == null && (Wr = {}), (Wr.elt = ze);
                var Kr = Wt(Gr, Wr);
                Q.logger && !Gt(Gr) && Q.logger(ze, Gr, Wr), Wr.error && (b(Wr.error), ce(ze, "htmx:error", { errorInfo: Wr }));
                var Yr = ze.dispatchEvent(Kr),
                    Qr = $t(Gr);
                if (Yr && Qr !== Gr) {
                    var Jr = Wt(Qr, Kr.detail);
                    Yr = Yr && ze.dispatchEvent(Jr);
                }
                return (
                    R(ze, function (Zr) {
                        Yr = Yr && Zr.onEvent(Gr, Kr) !== !1 && !Kr.defaultPrevented;
                    }),
                    Yr
                );
            }
            var Jt = location.pathname + location.search;
            function Zt() {
                var ze = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
                return ze || re().body;
            }
            function Kt(ze, Gr, Wr, Kr) {
                if (U()) {
                    if (Q.config.historyCacheSize <= 0) {
                        localStorage.removeItem("htmx-history-cache");
                        return;
                    }
                    ze = B(ze);
                    for (var Yr = E(localStorage.getItem("htmx-history-cache")) || [], Qr = 0; Qr < Yr.length; Qr++)
                        if (Yr[Qr].url === ze) {
                            Yr.splice(Qr, 1);
                            break;
                        }
                    var Jr = { url: ze, content: Gr, title: Wr, scroll: Kr };
                    for (ce(re().body, "htmx:historyItemCreated", { item: Jr, cache: Yr }), Yr.push(Jr); Yr.length > Q.config.historyCacheSize; ) Yr.shift();
                    for (; Yr.length > 0; )
                        try {
                            localStorage.setItem("htmx-history-cache", JSON.stringify(Yr));
                            break;
                        } catch (Zr) {
                            fe(re().body, "htmx:historyCacheError", { cause: Zr, cache: Yr }), Yr.shift();
                        }
                }
            }
            function Yt(ze) {
                if (!U()) return null;
                ze = B(ze);
                for (var Gr = E(localStorage.getItem("htmx-history-cache")) || [], Wr = 0; Wr < Gr.length; Wr++) if (Gr[Wr].url === ze) return Gr[Wr];
                return null;
            }
            function Qt(ze) {
                var Gr = Q.config.requestClass,
                    Wr = ze.cloneNode(!0);
                return (
                    oe(f(Wr, "." + Gr), function (Kr) {
                        n(Kr, Gr);
                    }),
                    Wr.innerHTML
                );
            }
            function er() {
                var ze = Zt(),
                    Gr = Jt || location.pathname + location.search,
                    Wr;
                try {
                    Wr = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
                } catch {
                    Wr = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
                }
                Wr || (ce(re().body, "htmx:beforeHistorySave", { path: Gr, historyElt: ze }), Kt(Gr, Qt(ze), re().title, window.scrollY)), Q.config.historyEnabled && history.replaceState({ htmx: !0 }, re().title, window.location.href);
            }
            function tr(ze) {
                Q.config.getCacheBusterParam && ((ze = ze.replace(/org\.htmx\.cache-buster=[^&]*&?/, "")), (G(ze, "&") || G(ze, "?")) && (ze = ze.slice(0, -1))), Q.config.historyEnabled && history.pushState({ htmx: !0 }, "", ze), (Jt = ze);
            }
            function rr(ze) {
                Q.config.historyEnabled && history.replaceState({ htmx: !0 }, "", ze), (Jt = ze);
            }
            function nr(ze) {
                oe(ze, function (Gr) {
                    Gr.call();
                });
            }
            function ir(ze) {
                var Gr = new XMLHttpRequest(),
                    Wr = { path: ze, xhr: Gr };
                ce(re().body, "htmx:historyCacheMiss", Wr),
                    Gr.open("GET", ze, !0),
                    Gr.setRequestHeader("HX-Request", "true"),
                    Gr.setRequestHeader("HX-History-Restore-Request", "true"),
                    Gr.setRequestHeader("HX-Current-URL", re().location.href),
                    (Gr.onload = function () {
                        if (this.status >= 200 && this.status < 400) {
                            ce(re().body, "htmx:historyCacheMissLoad", Wr);
                            var Kr = l(this.response);
                            Kr = Kr.querySelector("[hx-history-elt],[data-hx-history-elt]") || Kr;
                            var Yr = Zt(),
                                Qr = T(Yr),
                                Jr = Ve(this.response);
                            if (Jr) {
                                var Zr = C("title");
                                Zr ? (Zr.innerHTML = Jr) : (window.document.title = Jr);
                            }
                            Ue(Yr, Kr, Qr), nr(Qr.tasks), (Jt = ze), ce(re().body, "htmx:historyRestore", { path: ze, cacheMiss: !0, serverResponse: this.response });
                        } else fe(re().body, "htmx:historyCacheMissLoadError", Wr);
                    }),
                    Gr.send();
            }
            function ar(ze) {
                er(), (ze = ze || location.pathname + location.search);
                var Gr = Yt(ze);
                if (Gr) {
                    var Wr = l(Gr.content),
                        Kr = Zt(),
                        Yr = T(Kr);
                    Ue(Kr, Wr, Yr),
                        nr(Yr.tasks),
                        (document.title = Gr.title),
                        setTimeout(function () {
                            window.scrollTo(0, Gr.scroll);
                        }, 0),
                        (Jt = ze),
                        ce(re().body, "htmx:historyRestore", { path: ze, item: Gr });
                } else Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : ir(ze);
            }
            function or(ze) {
                var Gr = me(ze, "hx-indicator");
                return (
                    Gr == null && (Gr = [ze]),
                    oe(Gr, function (Wr) {
                        var Kr = ae(Wr);
                        (Kr.requestCount = (Kr.requestCount || 0) + 1), Wr.classList.add.call(Wr.classList, Q.config.requestClass);
                    }),
                    Gr
                );
            }
            function sr(ze) {
                var Gr = me(ze, "hx-disabled-elt");
                return (
                    Gr == null && (Gr = []),
                    oe(Gr, function (Wr) {
                        var Kr = ae(Wr);
                        (Kr.requestCount = (Kr.requestCount || 0) + 1), Wr.setAttribute("disabled", "");
                    }),
                    Gr
                );
            }
            function lr(ze, Gr) {
                oe(ze, function (Wr) {
                    var Kr = ae(Wr);
                    (Kr.requestCount = (Kr.requestCount || 0) - 1), Kr.requestCount === 0 && Wr.classList.remove.call(Wr.classList, Q.config.requestClass);
                }),
                    oe(Gr, function (Wr) {
                        var Kr = ae(Wr);
                        (Kr.requestCount = (Kr.requestCount || 0) - 1), Kr.requestCount === 0 && Wr.removeAttribute("disabled");
                    });
            }
            function ur(ze, Gr) {
                for (var Wr = 0; Wr < ze.length; Wr++) {
                    var Kr = ze[Wr];
                    if (Kr.isSameNode(Gr)) return !0;
                }
                return !1;
            }
            function fr(ze) {
                return ze.name === "" || ze.name == null || ze.disabled || v(ze, "fieldset[disabled]") || ze.type === "button" || ze.type === "submit" || ze.tagName === "image" || ze.tagName === "reset" || ze.tagName === "file"
                    ? !1
                    : ze.type === "checkbox" || ze.type === "radio"
                    ? ze.checked
                    : !0;
            }
            function cr(ze, Gr, Wr) {
                if (ze != null && Gr != null) {
                    var Kr = Wr[ze];
                    Kr === void 0 ? (Wr[ze] = Gr) : Array.isArray(Kr) ? (Array.isArray(Gr) ? (Wr[ze] = Kr.concat(Gr)) : Kr.push(Gr)) : Array.isArray(Gr) ? (Wr[ze] = [Kr].concat(Gr)) : (Wr[ze] = [Kr, Gr]);
                }
            }
            function hr(ze, Gr, Wr, Kr, Yr) {
                if (!(Kr == null || ur(ze, Kr))) {
                    if ((ze.push(Kr), fr(Kr))) {
                        var Qr = ee(Kr, "name"),
                            Jr = Kr.value;
                        Kr.multiple &&
                            Kr.tagName === "SELECT" &&
                            (Jr = M(Kr.querySelectorAll("option:checked")).map(function (ei) {
                                return ei.value;
                            })),
                            Kr.files && (Jr = M(Kr.files)),
                            cr(Qr, Jr, Gr),
                            Yr && vr(Kr, Wr);
                    }
                    if (h(Kr, "form")) {
                        var Zr = Kr.elements;
                        oe(Zr, function (ei) {
                            hr(ze, Gr, Wr, ei, Yr);
                        });
                    }
                }
            }
            function vr(ze, Gr) {
                ze.willValidate &&
                    (ce(ze, "htmx:validation:validate"),
                    ze.checkValidity() || (Gr.push({ elt: ze, message: ze.validationMessage, validity: ze.validity }), ce(ze, "htmx:validation:failed", { message: ze.validationMessage, validity: ze.validity })));
            }
            function dr(ze, Gr) {
                var Wr = [],
                    Kr = {},
                    Yr = {},
                    Qr = [],
                    Jr = ae(ze);
                Jr.lastButtonClicked && !se(Jr.lastButtonClicked) && (Jr.lastButtonClicked = null);
                var Zr = (h(ze, "form") && ze.noValidate !== !0) || te(ze, "hx-validate") === "true";
                if (
                    (Jr.lastButtonClicked && (Zr = Zr && Jr.lastButtonClicked.formNoValidate !== !0),
                    Gr !== "get" && hr(Wr, Yr, Qr, v(ze, "form"), Zr),
                    hr(Wr, Kr, Qr, ze, Zr),
                    Jr.lastButtonClicked || ze.tagName === "BUTTON" || (ze.tagName === "INPUT" && ee(ze, "type") === "submit"))
                ) {
                    var ei = Jr.lastButtonClicked || ze,
                        ti = ee(ei, "name");
                    cr(ti, ei.value, Yr);
                }
                var ri = me(ze, "hx-include");
                return (
                    oe(ri, function (ii) {
                        hr(Wr, Kr, Qr, ii, Zr),
                            h(ii, "form") ||
                                oe(ii.querySelectorAll(rt), function (ni) {
                                    hr(Wr, Kr, Qr, ni, Zr);
                                });
                    }),
                    (Kr = le(Kr, Yr)),
                    { errors: Qr, values: Kr }
                );
            }
            function gr(ze, Gr, Wr) {
                ze !== "" && (ze += "&"), String(Wr) === "[object Object]" && (Wr = JSON.stringify(Wr));
                var Kr = encodeURIComponent(Wr);
                return (ze += encodeURIComponent(Gr) + "=" + Kr), ze;
            }
            function pr(ze) {
                var Gr = "";
                for (var Wr in ze)
                    if (ze.hasOwnProperty(Wr)) {
                        var Kr = ze[Wr];
                        Array.isArray(Kr)
                            ? oe(Kr, function (Yr) {
                                  Gr = gr(Gr, Wr, Yr);
                              })
                            : (Gr = gr(Gr, Wr, Kr));
                    }
                return Gr;
            }
            function mr(ze) {
                var Gr = new FormData();
                for (var Wr in ze)
                    if (ze.hasOwnProperty(Wr)) {
                        var Kr = ze[Wr];
                        Array.isArray(Kr)
                            ? oe(Kr, function (Yr) {
                                  Gr.append(Wr, Yr);
                              })
                            : Gr.append(Wr, Kr);
                    }
                return Gr;
            }
            function xr(ze, Gr, Wr) {
                var Kr = { "HX-Request": "true", "HX-Trigger": ee(ze, "id"), "HX-Trigger-Name": ee(ze, "name"), "HX-Target": te(Gr, "id"), "HX-Current-URL": re().location.href };
                return Rr(ze, "hx-headers", !1, Kr), Wr !== void 0 && (Kr["HX-Prompt"] = Wr), ae(ze).boosted && (Kr["HX-Boosted"] = "true"), Kr;
            }
            function yr(ze, Gr) {
                var Wr = ne(Gr, "hx-params");
                if (Wr) {
                    if (Wr === "none") return {};
                    if (Wr === "*") return ze;
                    if (Wr.indexOf("not ") === 0)
                        return (
                            oe(Wr.substr(4).split(","), function (Yr) {
                                (Yr = Yr.trim()), delete ze[Yr];
                            }),
                            ze
                        );
                    var Kr = {};
                    return (
                        oe(Wr.split(","), function (Yr) {
                            (Yr = Yr.trim()), (Kr[Yr] = ze[Yr]);
                        }),
                        Kr
                    );
                } else return ze;
            }
            function br(ze) {
                return ee(ze, "href") && ee(ze, "href").indexOf("#") >= 0;
            }
            function wr(ze, Gr) {
                var Wr = Gr || ne(ze, "hx-swap"),
                    Kr = { swapStyle: ae(ze).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
                if ((Q.config.scrollIntoViewOnBoost && ae(ze).boosted && !br(ze) && (Kr.show = "top"), Wr)) {
                    var Yr = D(Wr);
                    if (Yr.length > 0)
                        for (var Qr = 0; Qr < Yr.length; Qr++) {
                            var Jr = Yr[Qr];
                            if (Jr.indexOf("swap:") === 0) Kr.swapDelay = d(Jr.substr(5));
                            else if (Jr.indexOf("settle:") === 0) Kr.settleDelay = d(Jr.substr(7));
                            else if (Jr.indexOf("transition:") === 0) Kr.transition = Jr.substr(11) === "true";
                            else if (Jr.indexOf("ignoreTitle:") === 0) Kr.ignoreTitle = Jr.substr(12) === "true";
                            else if (Jr.indexOf("scroll:") === 0) {
                                var Zr = Jr.substr(7),
                                    ei = Zr.split(":"),
                                    ti = ei.pop(),
                                    ri = ei.length > 0 ? ei.join(":") : null;
                                (Kr.scroll = ti), (Kr.scrollTarget = ri);
                            } else if (Jr.indexOf("show:") === 0) {
                                var ii = Jr.substr(5),
                                    ei = ii.split(":"),
                                    ni = ei.pop(),
                                    ri = ei.length > 0 ? ei.join(":") : null;
                                (Kr.show = ni), (Kr.showTarget = ri);
                            } else if (Jr.indexOf("focus-scroll:") === 0) {
                                var si = Jr.substr(13);
                                Kr.focusScroll = si == "true";
                            } else Qr == 0 ? (Kr.swapStyle = Jr) : b("Unknown modifier in hx-swap: " + Jr);
                        }
                }
                return Kr;
            }
            function Sr(ze) {
                return ne(ze, "hx-encoding") === "multipart/form-data" || (h(ze, "form") && ee(ze, "enctype") === "multipart/form-data");
            }
            function Er(ze, Gr, Wr) {
                var Kr = null;
                return (
                    R(Gr, function (Yr) {
                        Kr == null && (Kr = Yr.encodeParameters(ze, Wr, Gr));
                    }),
                    Kr ?? (Sr(Gr) ? mr(Wr) : pr(Wr))
                );
            }
            function T(ze) {
                return { tasks: [], elts: [ze] };
            }
            function Cr(ze, Gr) {
                var Wr = ze[0],
                    Kr = ze[ze.length - 1];
                if (Gr.scroll) {
                    var Yr = null;
                    Gr.scrollTarget && (Yr = ue(Wr, Gr.scrollTarget)), Gr.scroll === "top" && (Wr || Yr) && ((Yr = Yr || Wr), (Yr.scrollTop = 0)), Gr.scroll === "bottom" && (Kr || Yr) && ((Yr = Yr || Kr), (Yr.scrollTop = Yr.scrollHeight));
                }
                if (Gr.show) {
                    var Yr = null;
                    if (Gr.showTarget) {
                        var Qr = Gr.showTarget;
                        Gr.showTarget === "window" && (Qr = "body"), (Yr = ue(Wr, Qr));
                    }
                    Gr.show === "top" && (Wr || Yr) && ((Yr = Yr || Wr), Yr.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior })),
                        Gr.show === "bottom" && (Kr || Yr) && ((Yr = Yr || Kr), Yr.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior }));
                }
            }
            function Rr(ze, Gr, Wr, Kr) {
                if ((Kr == null && (Kr = {}), ze == null)) return Kr;
                var Yr = te(ze, Gr);
                if (Yr) {
                    var Qr = Yr.trim(),
                        Jr = Wr;
                    if (Qr === "unset") return null;
                    Qr.indexOf("javascript:") === 0 ? ((Qr = Qr.substr(11)), (Jr = !0)) : Qr.indexOf("js:") === 0 && ((Qr = Qr.substr(3)), (Jr = !0)), Qr.indexOf("{") !== 0 && (Qr = "{" + Qr + "}");
                    var Zr;
                    Jr
                        ? (Zr = Tr(
                              ze,
                              function () {
                                  return Function("return (" + Qr + ")")();
                              },
                              {}
                          ))
                        : (Zr = E(Qr));
                    for (var ei in Zr) Zr.hasOwnProperty(ei) && Kr[ei] == null && (Kr[ei] = Zr[ei]);
                }
                return Rr(u(ze), Gr, Wr, Kr);
            }
            function Tr(ze, Gr, Wr) {
                return Q.config.allowEval ? Gr() : (fe(ze, "htmx:evalDisallowedError"), Wr);
            }
            function Or(ze, Gr) {
                return Rr(ze, "hx-vars", !0, Gr);
            }
            function qr(ze, Gr) {
                return Rr(ze, "hx-vals", !1, Gr);
            }
            function Hr(ze) {
                return le(Or(ze), qr(ze));
            }
            function Lr(ze, Gr, Wr) {
                if (Wr !== null)
                    try {
                        ze.setRequestHeader(Gr, Wr);
                    } catch {
                        ze.setRequestHeader(Gr, encodeURIComponent(Wr)), ze.setRequestHeader(Gr + "-URI-AutoEncoded", "true");
                    }
            }
            function Ar(ze) {
                if (ze.responseURL && typeof URL < "u")
                    try {
                        var Gr = new URL(ze.responseURL);
                        return Gr.pathname + Gr.search;
                    } catch {
                        fe(re().body, "htmx:badResponseUrl", { url: ze.responseURL });
                    }
            }
            function O(ze, Gr) {
                return Gr.test(ze.getAllResponseHeaders());
            }
            function Nr(ze, Gr, Wr) {
                return (
                    (ze = ze.toLowerCase()),
                    Wr
                        ? Wr instanceof Element || I(Wr, "String")
                            ? he(ze, Gr, null, null, { targetOverride: p(Wr), returnPromise: !0 })
                            : he(ze, Gr, p(Wr.source), Wr.event, { handler: Wr.handler, headers: Wr.headers, values: Wr.values, targetOverride: p(Wr.target), swapOverride: Wr.swap, select: Wr.select, returnPromise: !0 })
                        : he(ze, Gr, null, null, { returnPromise: !0 })
                );
            }
            function Ir(ze) {
                for (var Gr = []; ze; ) Gr.push(ze), (ze = ze.parentElement);
                return Gr;
            }
            function kr(ze, Gr, Wr) {
                var Kr, Yr;
                if (typeof URL == "function") {
                    Yr = new URL(Gr, document.location.href);
                    var Qr = document.location.origin;
                    Kr = Qr === Yr.origin;
                } else (Yr = Gr), (Kr = g(Gr, document.location.origin));
                return Q.config.selfRequestsOnly && !Kr ? !1 : ce(ze, "htmx:validateUrl", le({ url: Yr, sameHost: Kr }, Wr));
            }
            function he(ze, Gr, Wr, Kr, Yr, Qr) {
                var Jr = null,
                    Zr = null;
                if (((Yr = Yr ?? {}), Yr.returnPromise && typeof Promise < "u"))
                    var ei = new Promise(function (Ri, Di) {
                        (Jr = Ri), (Zr = Di);
                    });
                Wr == null && (Wr = re().body);
                var ti = Yr.handler || Mr,
                    ri = Yr.select || null;
                if (!se(Wr)) return ie(Jr), ei;
                var ii = Yr.targetOverride || ye(Wr);
                if (ii == null || ii == pe) return fe(Wr, "htmx:targetError", { target: te(Wr, "hx-target") }), ie(Zr), ei;
                var ni = ae(Wr),
                    si = ni.lastButtonClicked;
                if (si) {
                    var li = ee(si, "formaction");
                    li != null && (Gr = li);
                    var ui = ee(si, "formmethod");
                    ui != null && ui.toLowerCase() !== "dialog" && (ze = ui);
                }
                var oi = ne(Wr, "hx-confirm");
                if (Qr === void 0) {
                    var ai = function (Ri) {
                            return he(ze, Gr, Wr, Kr, Yr, !!Ri);
                        },
                        pi = { target: ii, elt: Wr, path: Gr, verb: ze, triggeringEvent: Kr, etc: Yr, issueRequest: ai, question: oi };
                    if (ce(Wr, "htmx:confirm", pi) === !1) return ie(Jr), ei;
                }
                var ci = Wr,
                    hi = ne(Wr, "hx-sync"),
                    fi = null,
                    vi = !1;
                if (hi) {
                    var bi = hi.split(":"),
                        yi = bi[0].trim();
                    if ((yi === "this" ? (ci = xe(Wr, "hx-sync")) : (ci = ue(Wr, yi)), (hi = (bi[1] || "drop").trim()), (ni = ae(ci)), hi === "drop" && ni.xhr && ni.abortable !== !0)) return ie(Jr), ei;
                    if (hi === "abort") {
                        if (ni.xhr) return ie(Jr), ei;
                        vi = !0;
                    } else if (hi === "replace") ce(ci, "htmx:abort");
                    else if (hi.indexOf("queue") === 0) {
                        var Ei = hi.split(" ");
                        fi = (Ei[1] || "last").trim();
                    }
                }
                if (ni.xhr)
                    if (ni.abortable) ce(ci, "htmx:abort");
                    else {
                        if (fi == null) {
                            if (Kr) {
                                var di = ae(Kr);
                                di && di.triggerSpec && di.triggerSpec.queue && (fi = di.triggerSpec.queue);
                            }
                            fi == null && (fi = "last");
                        }
                        return (
                            ni.queuedRequests == null && (ni.queuedRequests = []),
                            fi === "first" && ni.queuedRequests.length === 0
                                ? ni.queuedRequests.push(function () {
                                      he(ze, Gr, Wr, Kr, Yr);
                                  })
                                : fi === "all"
                                ? ni.queuedRequests.push(function () {
                                      he(ze, Gr, Wr, Kr, Yr);
                                  })
                                : fi === "last" &&
                                  ((ni.queuedRequests = []),
                                  ni.queuedRequests.push(function () {
                                      he(ze, Gr, Wr, Kr, Yr);
                                  })),
                            ie(Jr),
                            ei
                        );
                    }
                var mi = new XMLHttpRequest();
                (ni.xhr = mi), (ni.abortable = vi);
                var wi = function () {
                        if (((ni.xhr = null), (ni.abortable = !1), ni.queuedRequests != null && ni.queuedRequests.length > 0)) {
                            var Ri = ni.queuedRequests.shift();
                            Ri();
                        }
                    },
                    gi = ne(Wr, "hx-prompt");
                if (gi) {
                    var Ti = prompt(gi);
                    if (Ti === null || !ce(Wr, "htmx:prompt", { prompt: Ti, target: ii })) return ie(Jr), wi(), ei;
                }
                if (oi && !Qr && !confirm(oi)) return ie(Jr), wi(), ei;
                var xi = xr(Wr, ii, Ti);
                ze !== "get" && !Sr(Wr) && (xi["Content-Type"] = "application/x-www-form-urlencoded"), Yr.headers && (xi = le(xi, Yr.headers));
                var Mi = dr(Wr, ze),
                    _i = Mi.errors,
                    Si = Mi.values;
                Yr.values && (Si = le(Si, Yr.values));
                var Ai = Hr(Wr),
                    Ci = le(Si, Ai),
                    Oi = yr(Ci, Wr);
                Q.config.getCacheBusterParam && ze === "get" && (Oi["org.htmx.cache-buster"] = ee(ii, "id") || "true"), (Gr == null || Gr === "") && (Gr = re().location.href);
                var Li = Rr(Wr, "hx-request"),
                    qi = ae(Wr).boosted,
                    zi = Q.config.methodsThatUseUrlParams.indexOf(ze) >= 0,
                    Ii = {
                        boosted: qi,
                        useUrlParams: zi,
                        parameters: Oi,
                        unfilteredParameters: Ci,
                        headers: xi,
                        target: ii,
                        verb: ze,
                        errors: _i,
                        withCredentials: Yr.credentials || Li.credentials || Q.config.withCredentials,
                        timeout: Yr.timeout || Li.timeout || Q.config.timeout,
                        path: Gr,
                        triggeringEvent: Kr,
                    };
                if (!ce(Wr, "htmx:configRequest", Ii)) return ie(Jr), wi(), ei;
                if (((Gr = Ii.path), (ze = Ii.verb), (xi = Ii.headers), (Oi = Ii.parameters), (_i = Ii.errors), (zi = Ii.useUrlParams), _i && _i.length > 0)) return ce(Wr, "htmx:validation:halted", Ii), ie(Jr), wi(), ei;
                var Vi = Gr.split("#"),
                    Gi = Vi[0],
                    $i = Vi[1],
                    ki = Gr;
                if (zi) {
                    ki = Gi;
                    var Wi = Object.keys(Oi).length !== 0;
                    Wi && (ki.indexOf("?") < 0 ? (ki += "?") : (ki += "&"), (ki += pr(Oi)), $i && (ki += "#" + $i));
                }
                if (!kr(Wr, ki, Ii)) return fe(Wr, "htmx:invalidPath", Ii), ie(Zr), ei;
                if ((mi.open(ze.toUpperCase(), ki, !0), mi.overrideMimeType("text/html"), (mi.withCredentials = Ii.withCredentials), (mi.timeout = Ii.timeout), !Li.noHeaders)) {
                    for (var Bi in xi)
                        if (xi.hasOwnProperty(Bi)) {
                            var Xi = xi[Bi];
                            Lr(mi, Bi, Xi);
                        }
                }
                var Pi = { xhr: mi, target: ii, requestConfig: Ii, etc: Yr, boosted: qi, select: ri, pathInfo: { requestPath: Gr, finalRequestPath: ki, anchor: $i } };
                if (
                    ((mi.onload = function () {
                        try {
                            var Ri = Ir(Wr);
                            if (((Pi.pathInfo.responsePath = Ar(mi)), ti(Wr, Pi), lr(Hi, Fi), ce(Wr, "htmx:afterRequest", Pi), ce(Wr, "htmx:afterOnLoad", Pi), !se(Wr))) {
                                for (var Di = null; Ri.length > 0 && Di == null; ) {
                                    var Ni = Ri.shift();
                                    se(Ni) && (Di = Ni);
                                }
                                Di && (ce(Di, "htmx:afterRequest", Pi), ce(Di, "htmx:afterOnLoad", Pi));
                            }
                            ie(Jr), wi();
                        } catch (ji) {
                            throw (fe(Wr, "htmx:onLoadError", le({ error: ji }, Pi)), ji);
                        }
                    }),
                    (mi.onerror = function () {
                        lr(Hi, Fi), fe(Wr, "htmx:afterRequest", Pi), fe(Wr, "htmx:sendError", Pi), ie(Zr), wi();
                    }),
                    (mi.onabort = function () {
                        lr(Hi, Fi), fe(Wr, "htmx:afterRequest", Pi), fe(Wr, "htmx:sendAbort", Pi), ie(Zr), wi();
                    }),
                    (mi.ontimeout = function () {
                        lr(Hi, Fi), fe(Wr, "htmx:afterRequest", Pi), fe(Wr, "htmx:timeout", Pi), ie(Zr), wi();
                    }),
                    !ce(Wr, "htmx:beforeRequest", Pi))
                )
                    return ie(Jr), wi(), ei;
                var Hi = or(Wr),
                    Fi = sr(Wr);
                oe(["loadstart", "loadend", "progress", "abort"], function (Ri) {
                    oe([mi, mi.upload], function (Di) {
                        Di.addEventListener(Ri, function (Ni) {
                            ce(Wr, "htmx:xhr:" + Ri, { lengthComputable: Ni.lengthComputable, loaded: Ni.loaded, total: Ni.total });
                        });
                    });
                }),
                    ce(Wr, "htmx:beforeSend", Pi);
                var Ui = zi ? null : Er(mi, Wr, Oi);
                return mi.send(Ui), ei;
            }
            function Pr(ze, Gr) {
                var Wr = Gr.xhr,
                    Kr = null,
                    Yr = null;
                if (
                    (O(Wr, /HX-Push:/i)
                        ? ((Kr = Wr.getResponseHeader("HX-Push")), (Yr = "push"))
                        : O(Wr, /HX-Push-Url:/i)
                        ? ((Kr = Wr.getResponseHeader("HX-Push-Url")), (Yr = "push"))
                        : O(Wr, /HX-Replace-Url:/i) && ((Kr = Wr.getResponseHeader("HX-Replace-Url")), (Yr = "replace")),
                    Kr)
                )
                    return Kr === "false" ? {} : { type: Yr, path: Kr };
                var Qr = Gr.pathInfo.finalRequestPath,
                    Jr = Gr.pathInfo.responsePath,
                    Zr = ne(ze, "hx-push-url"),
                    ei = ne(ze, "hx-replace-url"),
                    ti = ae(ze).boosted,
                    ri = null,
                    ii = null;
                return (
                    Zr ? ((ri = "push"), (ii = Zr)) : ei ? ((ri = "replace"), (ii = ei)) : ti && ((ri = "push"), (ii = Jr || Qr)),
                    ii ? (ii === "false" ? {} : (ii === "true" && (ii = Jr || Qr), Gr.pathInfo.anchor && ii.indexOf("#") === -1 && (ii = ii + "#" + Gr.pathInfo.anchor), { type: ri, path: ii })) : {}
                );
            }
            function Mr(ze, Gr) {
                var Wr = Gr.xhr,
                    Kr = Gr.target,
                    Yr = Gr.etc;
                Gr.requestConfig;
                var Qr = Gr.select;
                if (ce(ze, "htmx:beforeOnLoad", Gr)) {
                    if ((O(Wr, /HX-Trigger:/i) && _e(Wr, "HX-Trigger", ze), O(Wr, /HX-Location:/i))) {
                        er();
                        var Jr = Wr.getResponseHeader("HX-Location"),
                            Zr;
                        Jr.indexOf("{") === 0 && ((Zr = E(Jr)), (Jr = Zr.path), delete Zr.path),
                            Nr("GET", Jr, Zr).then(function () {
                                tr(Jr);
                            });
                        return;
                    }
                    var ei = O(Wr, /HX-Refresh:/i) && Wr.getResponseHeader("HX-Refresh") === "true";
                    if (O(Wr, /HX-Redirect:/i)) {
                        (location.href = Wr.getResponseHeader("HX-Redirect")), ei && location.reload();
                        return;
                    }
                    if (ei) {
                        location.reload();
                        return;
                    }
                    O(Wr, /HX-Retarget:/i) && (Wr.getResponseHeader("HX-Retarget") === "this" ? (Gr.target = ze) : (Gr.target = ue(ze, Wr.getResponseHeader("HX-Retarget"))));
                    var ti = Pr(ze, Gr),
                        ri = Wr.status >= 200 && Wr.status < 400 && Wr.status !== 204,
                        ii = Wr.response,
                        ni = Wr.status >= 400,
                        si = Q.config.ignoreTitle,
                        li = le({ shouldSwap: ri, serverResponse: ii, isError: ni, ignoreTitle: si }, Gr);
                    if (ce(Kr, "htmx:beforeSwap", li)) {
                        if (((Kr = li.target), (ii = li.serverResponse), (ni = li.isError), (si = li.ignoreTitle), (Gr.target = Kr), (Gr.failed = ni), (Gr.successful = !ni), li.shouldSwap)) {
                            Wr.status === 286 && at(ze),
                                R(ze, function (bi) {
                                    ii = bi.transformResponse(ii, Wr, ze);
                                }),
                                ti.type && er();
                            var ui = Yr.swapOverride;
                            O(Wr, /HX-Reswap:/i) && (ui = Wr.getResponseHeader("HX-Reswap"));
                            var Zr = wr(ze, ui);
                            Zr.hasOwnProperty("ignoreTitle") && (si = Zr.ignoreTitle), Kr.classList.add(Q.config.swappingClass);
                            var oi = null,
                                ai = null,
                                pi = function () {
                                    try {
                                        var bi = document.activeElement,
                                            yi = {};
                                        try {
                                            yi = { elt: bi, start: bi ? bi.selectionStart : null, end: bi ? bi.selectionEnd : null };
                                        } catch {}
                                        var Ei;
                                        Qr && (Ei = Qr),
                                            O(Wr, /HX-Reselect:/i) && (Ei = Wr.getResponseHeader("HX-Reselect")),
                                            ti.type &&
                                                (ce(re().body, "htmx:beforeHistoryUpdate", le({ history: ti }, Gr)),
                                                ti.type === "push" ? (tr(ti.path), ce(re().body, "htmx:pushedIntoHistory", { path: ti.path })) : (rr(ti.path), ce(re().body, "htmx:replacedInHistory", { path: ti.path })));
                                        var di = T(Kr);
                                        if ((je(Zr.swapStyle, Kr, ze, ii, di, Ei), yi.elt && !se(yi.elt) && ee(yi.elt, "id"))) {
                                            var mi = document.getElementById(ee(yi.elt, "id")),
                                                wi = { preventScroll: Zr.focusScroll !== void 0 ? !Zr.focusScroll : !Q.config.defaultFocusScroll };
                                            if (mi) {
                                                if (yi.start && mi.setSelectionRange)
                                                    try {
                                                        mi.setSelectionRange(yi.start, yi.end);
                                                    } catch {}
                                                mi.focus(wi);
                                            }
                                        }
                                        if (
                                            (Kr.classList.remove(Q.config.swappingClass),
                                            oe(di.elts, function (xi) {
                                                xi.classList && xi.classList.add(Q.config.settlingClass), ce(xi, "htmx:afterSwap", Gr);
                                            }),
                                            O(Wr, /HX-Trigger-After-Swap:/i))
                                        ) {
                                            var gi = ze;
                                            se(ze) || (gi = re().body), _e(Wr, "HX-Trigger-After-Swap", gi);
                                        }
                                        var Ti = function () {
                                            if (
                                                (oe(di.tasks, function (Si) {
                                                    Si.call();
                                                }),
                                                oe(di.elts, function (Si) {
                                                    Si.classList && Si.classList.remove(Q.config.settlingClass), ce(Si, "htmx:afterSettle", Gr);
                                                }),
                                                Gr.pathInfo.anchor)
                                            ) {
                                                var xi = re().getElementById(Gr.pathInfo.anchor);
                                                xi && xi.scrollIntoView({ block: "start", behavior: "auto" });
                                            }
                                            if (di.title && !si) {
                                                var Mi = C("title");
                                                Mi ? (Mi.innerHTML = di.title) : (window.document.title = di.title);
                                            }
                                            if ((Cr(di.elts, Zr), O(Wr, /HX-Trigger-After-Settle:/i))) {
                                                var _i = ze;
                                                se(ze) || (_i = re().body), _e(Wr, "HX-Trigger-After-Settle", _i);
                                            }
                                            ie(oi);
                                        };
                                        Zr.settleDelay > 0 ? setTimeout(Ti, Zr.settleDelay) : Ti();
                                    } catch (xi) {
                                        throw (fe(ze, "htmx:swapError", Gr), ie(ai), xi);
                                    }
                                },
                                ci = Q.config.globalViewTransitions;
                            if ((Zr.hasOwnProperty("transition") && (ci = Zr.transition), ci && ce(ze, "htmx:beforeTransition", Gr) && typeof Promise < "u" && document.startViewTransition)) {
                                var hi = new Promise(function (bi, yi) {
                                        (oi = bi), (ai = yi);
                                    }),
                                    fi = pi;
                                pi = function () {
                                    document.startViewTransition(function () {
                                        return fi(), hi;
                                    });
                                };
                            }
                            Zr.swapDelay > 0 ? setTimeout(pi, Zr.swapDelay) : pi();
                        }
                        ni && fe(ze, "htmx:responseError", le({ error: "Response Status Error Code " + Wr.status + " from " + Gr.pathInfo.requestPath }, Gr));
                    }
                }
            }
            var Xr = {};
            function Dr() {
                return {
                    init: function (ze) {
                        return null;
                    },
                    onEvent: function (ze, Gr) {
                        return !0;
                    },
                    transformResponse: function (ze, Gr, Wr) {
                        return ze;
                    },
                    isInlineSwap: function (ze) {
                        return !1;
                    },
                    handleSwap: function (ze, Gr, Wr, Kr) {
                        return !1;
                    },
                    encodeParameters: function (ze, Gr, Wr) {
                        return null;
                    },
                };
            }
            function Ur(ze, Gr) {
                Gr.init && Gr.init(r), (Xr[ze] = le(Dr(), Gr));
            }
            function Br(ze) {
                delete Xr[ze];
            }
            function Fr(ze, Gr, Wr) {
                if (ze == null) return Gr;
                Gr == null && (Gr = []), Wr == null && (Wr = []);
                var Kr = te(ze, "hx-ext");
                return (
                    Kr &&
                        oe(Kr.split(","), function (Yr) {
                            if (((Yr = Yr.replace(/ /g, "")), Yr.slice(0, 7) == "ignore:")) {
                                Wr.push(Yr.slice(7));
                                return;
                            }
                            if (Wr.indexOf(Yr) < 0) {
                                var Qr = Xr[Yr];
                                Qr && Gr.indexOf(Qr) < 0 && Gr.push(Qr);
                            }
                        }),
                    Fr(u(ze), Gr, Wr)
                );
            }
            var Vr = !1;
            re().addEventListener("DOMContentLoaded", function () {
                Vr = !0;
            });
            function jr(ze) {
                Vr || re().readyState === "complete" ? ze() : re().addEventListener("DOMContentLoaded", ze);
            }
            function _r() {
                Q.config.includeIndicatorStyles !== !1 &&
                    re().head.insertAdjacentHTML(
                        "beforeend",
                        "<style>                      ." +
                            Q.config.indicatorClass +
                            "{opacity:0}                      ." +
                            Q.config.requestClass +
                            " ." +
                            Q.config.indicatorClass +
                            "{opacity:1; transition: opacity 200ms ease-in;}                      ." +
                            Q.config.requestClass +
                            "." +
                            Q.config.indicatorClass +
                            "{opacity:1; transition: opacity 200ms ease-in;}                    </style>"
                    );
            }
            function zr() {
                var ze = re().querySelector('meta[name="htmx-config"]');
                return ze ? E(ze.content) : null;
            }
            function $r() {
                var ze = zr();
                ze && (Q.config = le(Q.config, ze));
            }
            return (
                jr(function () {
                    $r(), _r();
                    var ze = re().body;
                    zt(ze);
                    var Gr = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
                    ze.addEventListener("htmx:abort", function (Kr) {
                        var Yr = Kr.target,
                            Qr = ae(Yr);
                        Qr && Qr.xhr && Qr.xhr.abort();
                    });
                    const Wr = window.onpopstate ? window.onpopstate.bind(window) : null;
                    (window.onpopstate = function (Kr) {
                        Kr.state && Kr.state.htmx
                            ? (ar(),
                              oe(Gr, function (Yr) {
                                  ce(Yr, "htmx:restored", { document: re(), triggerEvent: ce });
                              }))
                            : Wr && Wr(Kr);
                    }),
                        setTimeout(function () {
                            ce(ze, "htmx:load", {}), (ze = null);
                        }, 0);
                }),
                Q
            );
        })();
    });
})(htmx_min$1);
var htmx_minExports = htmx_min$1.exports;
const htmx_min = getDefaultExportFromCjs(htmx_minExports),
    htmx$1 = _mergeNamespaces({ __proto__: null, default: htmx_min }, [htmx_minExports]);
var flushPending = !1,
    flushing = !1,
    queue = [],
    lastFlushedIndex = -1;
function scheduler(ze) {
    queueJob(ze);
}
function queueJob(ze) {
    queue.includes(ze) || queue.push(ze), queueFlush();
}
function dequeueJob(ze) {
    let Gr = queue.indexOf(ze);
    Gr !== -1 && Gr > lastFlushedIndex && queue.splice(Gr, 1);
}
function queueFlush() {
    !flushing && !flushPending && ((flushPending = !0), queueMicrotask(flushJobs));
}
function flushJobs() {
    (flushPending = !1), (flushing = !0);
    for (let ze = 0; ze < queue.length; ze++) queue[ze](), (lastFlushedIndex = ze);
    (queue.length = 0), (lastFlushedIndex = -1), (flushing = !1);
}
var reactive,
    effect,
    release,
    raw,
    shouldSchedule = !0;
function disableEffectScheduling(ze) {
    (shouldSchedule = !1), ze(), (shouldSchedule = !0);
}
function setReactivityEngine(ze) {
    (reactive = ze.reactive),
        (release = ze.release),
        (effect = (Gr) =>
            ze.effect(Gr, {
                scheduler: (Wr) => {
                    shouldSchedule ? scheduler(Wr) : Wr();
                },
            })),
        (raw = ze.raw);
}
function overrideEffect(ze) {
    effect = ze;
}
function elementBoundEffect(ze) {
    let Gr = () => {};
    return [
        (Kr) => {
            let Yr = effect(Kr);
            return (
                ze._x_effects ||
                    ((ze._x_effects = new Set()),
                    (ze._x_runEffects = () => {
                        ze._x_effects.forEach((Qr) => Qr());
                    })),
                ze._x_effects.add(Yr),
                (Gr = () => {
                    Yr !== void 0 && (ze._x_effects.delete(Yr), release(Yr));
                }),
                Yr
            );
        },
        () => {
            Gr();
        },
    ];
}
function watch(ze, Gr) {
    let Wr = !0,
        Kr,
        Yr = effect(() => {
            let Qr = ze();
            JSON.stringify(Qr),
                Wr
                    ? (Kr = Qr)
                    : queueMicrotask(() => {
                          Gr(Qr, Kr), (Kr = Qr);
                      }),
                (Wr = !1);
        });
    return () => release(Yr);
}
var onAttributeAddeds = [],
    onElRemoveds = [],
    onElAddeds = [];
function onElAdded(ze) {
    onElAddeds.push(ze);
}
function onElRemoved(ze, Gr) {
    typeof Gr == "function" ? (ze._x_cleanups || (ze._x_cleanups = []), ze._x_cleanups.push(Gr)) : ((Gr = ze), onElRemoveds.push(Gr));
}
function onAttributesAdded(ze) {
    onAttributeAddeds.push(ze);
}
function onAttributeRemoved(ze, Gr, Wr) {
    ze._x_attributeCleanups || (ze._x_attributeCleanups = {}), ze._x_attributeCleanups[Gr] || (ze._x_attributeCleanups[Gr] = []), ze._x_attributeCleanups[Gr].push(Wr);
}
function cleanupAttributes(ze, Gr) {
    ze._x_attributeCleanups &&
        Object.entries(ze._x_attributeCleanups).forEach(([Wr, Kr]) => {
            (Gr === void 0 || Gr.includes(Wr)) && (Kr.forEach((Yr) => Yr()), delete ze._x_attributeCleanups[Wr]);
        });
}
function cleanupElement(ze) {
    if (ze._x_cleanups) for (; ze._x_cleanups.length; ) ze._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate),
    currentlyObserving = !1;
function startObservingMutations() {
    observer.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), (currentlyObserving = !0);
}
function stopObservingMutations() {
    flushObserver(), observer.disconnect(), (currentlyObserving = !1);
}
var queuedMutations = [];
function flushObserver() {
    let ze = observer.takeRecords();
    queuedMutations.push(() => ze.length > 0 && onMutate(ze));
    let Gr = queuedMutations.length;
    queueMicrotask(() => {
        if (queuedMutations.length === Gr) for (; queuedMutations.length > 0; ) queuedMutations.shift()();
    });
}
function mutateDom(ze) {
    if (!currentlyObserving) return ze();
    stopObservingMutations();
    let Gr = ze();
    return startObservingMutations(), Gr;
}
var isCollecting = !1,
    deferredMutations = [];
function deferMutations() {
    isCollecting = !0;
}
function flushAndStopDeferringMutations() {
    (isCollecting = !1), onMutate(deferredMutations), (deferredMutations = []);
}
function onMutate(ze) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(ze);
        return;
    }
    let Gr = new Set(),
        Wr = new Set(),
        Kr = new Map(),
        Yr = new Map();
    for (let Qr = 0; Qr < ze.length; Qr++)
        if (
            !ze[Qr].target._x_ignoreMutationObserver &&
            (ze[Qr].type === "childList" && (ze[Qr].addedNodes.forEach((Jr) => Jr.nodeType === 1 && Gr.add(Jr)), ze[Qr].removedNodes.forEach((Jr) => Jr.nodeType === 1 && Wr.add(Jr))), ze[Qr].type === "attributes")
        ) {
            let Jr = ze[Qr].target,
                Zr = ze[Qr].attributeName,
                ei = ze[Qr].oldValue,
                ti = () => {
                    Kr.has(Jr) || Kr.set(Jr, []), Kr.get(Jr).push({ name: Zr, value: Jr.getAttribute(Zr) });
                },
                ri = () => {
                    Yr.has(Jr) || Yr.set(Jr, []), Yr.get(Jr).push(Zr);
                };
            Jr.hasAttribute(Zr) && ei === null ? ti() : Jr.hasAttribute(Zr) ? (ri(), ti()) : ri();
        }
    Yr.forEach((Qr, Jr) => {
        cleanupAttributes(Jr, Qr);
    }),
        Kr.forEach((Qr, Jr) => {
            onAttributeAddeds.forEach((Zr) => Zr(Jr, Qr));
        });
    for (let Qr of Wr) Gr.has(Qr) || onElRemoveds.forEach((Jr) => Jr(Qr));
    Gr.forEach((Qr) => {
        (Qr._x_ignoreSelf = !0), (Qr._x_ignore = !0);
    });
    for (let Qr of Gr) Wr.has(Qr) || (Qr.isConnected && (delete Qr._x_ignoreSelf, delete Qr._x_ignore, onElAddeds.forEach((Jr) => Jr(Qr)), (Qr._x_ignore = !0), (Qr._x_ignoreSelf = !0)));
    Gr.forEach((Qr) => {
        delete Qr._x_ignoreSelf, delete Qr._x_ignore;
    }),
        (Gr = null),
        (Wr = null),
        (Kr = null),
        (Yr = null);
}
function scope(ze) {
    return mergeProxies(closestDataStack(ze));
}
function addScopeToNode(ze, Gr, Wr) {
    return (
        (ze._x_dataStack = [Gr, ...closestDataStack(Wr || ze)]),
        () => {
            ze._x_dataStack = ze._x_dataStack.filter((Kr) => Kr !== Gr);
        }
    );
}
function closestDataStack(ze) {
    return ze._x_dataStack ? ze._x_dataStack : typeof ShadowRoot == "function" && ze instanceof ShadowRoot ? closestDataStack(ze.host) : ze.parentNode ? closestDataStack(ze.parentNode) : [];
}
function mergeProxies(ze) {
    return new Proxy({ objects: ze }, mergeProxyTrap);
}
var mergeProxyTrap = {
    ownKeys({ objects: ze }) {
        return Array.from(new Set(ze.flatMap((Gr) => Object.keys(Gr))));
    },
    has({ objects: ze }, Gr) {
        return Gr == Symbol.unscopables ? !1 : ze.some((Wr) => Object.prototype.hasOwnProperty.call(Wr, Gr) || Reflect.has(Wr, Gr));
    },
    get({ objects: ze }, Gr, Wr) {
        return Gr == "toJSON" ? collapseProxies : Reflect.get(ze.find((Kr) => Reflect.has(Kr, Gr)) || {}, Gr, Wr);
    },
    set({ objects: ze }, Gr, Wr, Kr) {
        const Yr = ze.find((Jr) => Object.prototype.hasOwnProperty.call(Jr, Gr)) || ze[ze.length - 1],
            Qr = Object.getOwnPropertyDescriptor(Yr, Gr);
        return Qr != null && Qr.set && Qr != null && Qr.get ? Qr.set.call(Kr, Wr) || !0 : Reflect.set(Yr, Gr, Wr);
    },
};
function collapseProxies() {
    return Reflect.ownKeys(this).reduce((Gr, Wr) => ((Gr[Wr] = Reflect.get(this, Wr)), Gr), {});
}
function initInterceptors(ze) {
    let Gr = (Kr) => typeof Kr == "object" && !Array.isArray(Kr) && Kr !== null,
        Wr = (Kr, Yr = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(Kr)).forEach(([Qr, { value: Jr, enumerable: Zr }]) => {
                if (Zr === !1 || Jr === void 0 || (typeof Jr == "object" && Jr !== null && Jr.__v_skip)) return;
                let ei = Yr === "" ? Qr : `${Yr}.${Qr}`;
                typeof Jr == "object" && Jr !== null && Jr._x_interceptor ? (Kr[Qr] = Jr.initialize(ze, ei, Qr)) : Gr(Jr) && Jr !== Kr && !(Jr instanceof Element) && Wr(Jr, ei);
            });
        };
    return Wr(ze);
}
function interceptor(ze, Gr = () => {}) {
    let Wr = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(Kr, Yr, Qr) {
            return ze(
                this.initialValue,
                () => get(Kr, Yr),
                (Jr) => set(Kr, Yr, Jr),
                Yr,
                Qr
            );
        },
    };
    return (
        Gr(Wr),
        (Kr) => {
            if (typeof Kr == "object" && Kr !== null && Kr._x_interceptor) {
                let Yr = Wr.initialize.bind(Wr);
                Wr.initialize = (Qr, Jr, Zr) => {
                    let ei = Kr.initialize(Qr, Jr, Zr);
                    return (Wr.initialValue = ei), Yr(Qr, Jr, Zr);
                };
            } else Wr.initialValue = Kr;
            return Wr;
        }
    );
}
function get(ze, Gr) {
    return Gr.split(".").reduce((Wr, Kr) => Wr[Kr], ze);
}
function set(ze, Gr, Wr) {
    if ((typeof Gr == "string" && (Gr = Gr.split(".")), Gr.length === 1)) ze[Gr[0]] = Wr;
    else {
        if (Gr.length === 0) throw error;
        return ze[Gr[0]] || (ze[Gr[0]] = {}), set(ze[Gr[0]], Gr.slice(1), Wr);
    }
}
var magics = {};
function magic(ze, Gr) {
    magics[ze] = Gr;
}
function injectMagics(ze, Gr) {
    return (
        Object.entries(magics).forEach(([Wr, Kr]) => {
            let Yr = null;
            function Qr() {
                if (Yr) return Yr;
                {
                    let [Jr, Zr] = getElementBoundUtilities(Gr);
                    return (Yr = { interceptor, ...Jr }), onElRemoved(Gr, Zr), Yr;
                }
            }
            Object.defineProperty(ze, `$${Wr}`, {
                get() {
                    return Kr(Gr, Qr());
                },
                enumerable: !1,
            });
        }),
        ze
    );
}
function tryCatch(ze, Gr, Wr, ...Kr) {
    try {
        return Wr(...Kr);
    } catch (Yr) {
        handleError(Yr, ze, Gr);
    }
}
function handleError(ze, Gr, Wr = void 0) {
    (ze = Object.assign(ze ?? { message: "No error message given." }, { el: Gr, expression: Wr })),
        console.warn(
            `Alpine Expression Error: ${ze.message}

${
    Wr
        ? 'Expression: "' +
          Wr +
          `"

`
        : ""
}`,
            Gr
        ),
        setTimeout(() => {
            throw ze;
        }, 0);
}
var shouldAutoEvaluateFunctions = !0;
function dontAutoEvaluateFunctions(ze) {
    let Gr = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = !1;
    let Wr = ze();
    return (shouldAutoEvaluateFunctions = Gr), Wr;
}
function evaluate(ze, Gr, Wr = {}) {
    let Kr;
    return evaluateLater(ze, Gr)((Yr) => (Kr = Yr), Wr), Kr;
}
function evaluateLater(...ze) {
    return theEvaluatorFunction(...ze);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(ze) {
    theEvaluatorFunction = ze;
}
function normalEvaluator(ze, Gr) {
    let Wr = {};
    injectMagics(Wr, ze);
    let Kr = [Wr, ...closestDataStack(ze)],
        Yr = typeof Gr == "function" ? generateEvaluatorFromFunction(Kr, Gr) : generateEvaluatorFromString(Kr, Gr, ze);
    return tryCatch.bind(null, ze, Gr, Yr);
}
function generateEvaluatorFromFunction(ze, Gr) {
    return (Wr = () => {}, { scope: Kr = {}, params: Yr = [] } = {}) => {
        let Qr = Gr.apply(mergeProxies([Kr, ...ze]), Yr);
        runIfTypeOfFunction(Wr, Qr);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(ze, Gr) {
    if (evaluatorMemo[ze]) return evaluatorMemo[ze];
    let Wr = Object.getPrototypeOf(async function () {}).constructor,
        Kr = /^[\n\s]*if.*\(.*\)/.test(ze.trim()) || /^(let|const)\s/.test(ze.trim()) ? `(async()=>{ ${ze} })()` : ze,
        Qr = (() => {
            try {
                let Jr = new Wr(["__self", "scope"], `with (scope) { __self.result = ${Kr} }; __self.finished = true; return __self.result;`);
                return Object.defineProperty(Jr, "name", { value: `[Alpine] ${ze}` }), Jr;
            } catch (Jr) {
                return handleError(Jr, Gr, ze), Promise.resolve();
            }
        })();
    return (evaluatorMemo[ze] = Qr), Qr;
}
function generateEvaluatorFromString(ze, Gr, Wr) {
    let Kr = generateFunctionFromString(Gr, Wr);
    return (Yr = () => {}, { scope: Qr = {}, params: Jr = [] } = {}) => {
        (Kr.result = void 0), (Kr.finished = !1);
        let Zr = mergeProxies([Qr, ...ze]);
        if (typeof Kr == "function") {
            let ei = Kr(Kr, Zr).catch((ti) => handleError(ti, Wr, Gr));
            Kr.finished
                ? (runIfTypeOfFunction(Yr, Kr.result, Zr, Jr, Wr), (Kr.result = void 0))
                : ei
                      .then((ti) => {
                          runIfTypeOfFunction(Yr, ti, Zr, Jr, Wr);
                      })
                      .catch((ti) => handleError(ti, Wr, Gr))
                      .finally(() => (Kr.result = void 0));
        }
    };
}
function runIfTypeOfFunction(ze, Gr, Wr, Kr, Yr) {
    if (shouldAutoEvaluateFunctions && typeof Gr == "function") {
        let Qr = Gr.apply(Wr, Kr);
        Qr instanceof Promise ? Qr.then((Jr) => runIfTypeOfFunction(ze, Jr, Wr, Kr)).catch((Jr) => handleError(Jr, Yr, Gr)) : ze(Qr);
    } else typeof Gr == "object" && Gr instanceof Promise ? Gr.then((Qr) => ze(Qr)) : ze(Gr);
}
var prefixAsString = "x-";
function prefix(ze = "") {
    return prefixAsString + ze;
}
function setPrefix(ze) {
    prefixAsString = ze;
}
var directiveHandlers = {};
function directive(ze, Gr) {
    return (
        (directiveHandlers[ze] = Gr),
        {
            before(Wr) {
                if (!directiveHandlers[Wr]) {
                    console.warn(String.raw`Cannot find directive \`${Wr}\`. \`${ze}\` will use the default order of execution`);
                    return;
                }
                const Kr = directiveOrder.indexOf(Wr);
                directiveOrder.splice(Kr >= 0 ? Kr : directiveOrder.indexOf("DEFAULT"), 0, ze);
            },
        }
    );
}
function directiveExists(ze) {
    return Object.keys(directiveHandlers).includes(ze);
}
function directives(ze, Gr, Wr) {
    if (((Gr = Array.from(Gr)), ze._x_virtualDirectives)) {
        let Qr = Object.entries(ze._x_virtualDirectives).map(([Zr, ei]) => ({ name: Zr, value: ei })),
            Jr = attributesOnly(Qr);
        (Qr = Qr.map((Zr) => (Jr.find((ei) => ei.name === Zr.name) ? { name: `x-bind:${Zr.name}`, value: `"${Zr.value}"` } : Zr))), (Gr = Gr.concat(Qr));
    }
    let Kr = {};
    return Gr.map(toTransformedAttributes((Qr, Jr) => (Kr[Qr] = Jr)))
        .filter(outNonAlpineAttributes)
        .map(toParsedDirectives(Kr, Wr))
        .sort(byPriority)
        .map((Qr) => getDirectiveHandler(ze, Qr));
}
function attributesOnly(ze) {
    return Array.from(ze)
        .map(toTransformedAttributes())
        .filter((Gr) => !outNonAlpineAttributes(Gr));
}
var isDeferringHandlers = !1,
    directiveHandlerStacks = new Map(),
    currentHandlerStackKey = Symbol();
function deferHandlingDirectives(ze) {
    isDeferringHandlers = !0;
    let Gr = Symbol();
    (currentHandlerStackKey = Gr), directiveHandlerStacks.set(Gr, []);
    let Wr = () => {
            for (; directiveHandlerStacks.get(Gr).length; ) directiveHandlerStacks.get(Gr).shift()();
            directiveHandlerStacks.delete(Gr);
        },
        Kr = () => {
            (isDeferringHandlers = !1), Wr();
        };
    ze(Wr), Kr();
}
function getElementBoundUtilities(ze) {
    let Gr = [],
        Wr = (Zr) => Gr.push(Zr),
        [Kr, Yr] = elementBoundEffect(ze);
    return Gr.push(Yr), [{ Alpine: alpine_default, effect: Kr, cleanup: Wr, evaluateLater: evaluateLater.bind(evaluateLater, ze), evaluate: evaluate.bind(evaluate, ze) }, () => Gr.forEach((Zr) => Zr())];
}
function getDirectiveHandler(ze, Gr) {
    let Wr = () => {},
        Kr = directiveHandlers[Gr.type] || Wr,
        [Yr, Qr] = getElementBoundUtilities(ze);
    onAttributeRemoved(ze, Gr.original, Qr);
    let Jr = () => {
        ze._x_ignore || ze._x_ignoreSelf || (Kr.inline && Kr.inline(ze, Gr, Yr), (Kr = Kr.bind(Kr, ze, Gr, Yr)), isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(Kr) : Kr());
    };
    return (Jr.runCleanups = Qr), Jr;
}
var startingWith = (ze, Gr) => ({ name: Wr, value: Kr }) => (Wr.startsWith(ze) && (Wr = Wr.replace(ze, Gr)), { name: Wr, value: Kr }),
    into = (ze) => ze;
function toTransformedAttributes(ze = () => {}) {
    return ({ name: Gr, value: Wr }) => {
        let { name: Kr, value: Yr } = attributeTransformers.reduce((Qr, Jr) => Jr(Qr), { name: Gr, value: Wr });
        return Kr !== Gr && ze(Kr, Gr), { name: Kr, value: Yr };
    };
}
var attributeTransformers = [];
function mapAttributes(ze) {
    attributeTransformers.push(ze);
}
function outNonAlpineAttributes({ name: ze }) {
    return alpineAttributeRegex().test(ze);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(ze, Gr) {
    return ({ name: Wr, value: Kr }) => {
        let Yr = Wr.match(alpineAttributeRegex()),
            Qr = Wr.match(/:([a-zA-Z0-9\-_:]+)/),
            Jr = Wr.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            Zr = Gr || ze[Wr] || Wr;
        return { type: Yr ? Yr[1] : null, value: Qr ? Qr[1] : null, modifiers: Jr.map((ei) => ei.replace(".", "")), expression: Kr, original: Zr };
    };
}
var DEFAULT = "DEFAULT",
    directiveOrder = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", DEFAULT, "teleport"];
function byPriority(ze, Gr) {
    let Wr = directiveOrder.indexOf(ze.type) === -1 ? DEFAULT : ze.type,
        Kr = directiveOrder.indexOf(Gr.type) === -1 ? DEFAULT : Gr.type;
    return directiveOrder.indexOf(Wr) - directiveOrder.indexOf(Kr);
}
function dispatch(ze, Gr, Wr = {}) {
    ze.dispatchEvent(new CustomEvent(Gr, { detail: Wr, bubbles: !0, composed: !0, cancelable: !0 }));
}
function walk(ze, Gr) {
    if (typeof ShadowRoot == "function" && ze instanceof ShadowRoot) {
        Array.from(ze.children).forEach((Yr) => walk(Yr, Gr));
        return;
    }
    let Wr = !1;
    if ((Gr(ze, () => (Wr = !0)), Wr)) return;
    let Kr = ze.firstElementChild;
    for (; Kr; ) walk(Kr, Gr), (Kr = Kr.nextElementSibling);
}
function warn(ze, ...Gr) {
    console.warn(`Alpine Warning: ${ze}`, ...Gr);
}
var started = !1;
function start() {
    started && warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
        (started = !0),
        document.body || warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
        dispatch(document, "alpine:init"),
        dispatch(document, "alpine:initializing"),
        startObservingMutations(),
        onElAdded((Gr) => initTree(Gr, walk)),
        onElRemoved((Gr) => destroyTree(Gr)),
        onAttributesAdded((Gr, Wr) => {
            directives(Gr, Wr).forEach((Kr) => Kr());
        });
    let ze = (Gr) => !closestRoot(Gr.parentElement, !0);
    Array.from(document.querySelectorAll(allSelectors().join(",")))
        .filter(ze)
        .forEach((Gr) => {
            initTree(Gr);
        }),
        dispatch(document, "alpine:initialized"),
        setTimeout(() => {
            warnAboutMissingPlugins();
        });
}
var rootSelectorCallbacks = [],
    initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((ze) => ze());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((ze) => ze());
}
function addRootSelector(ze) {
    rootSelectorCallbacks.push(ze);
}
function addInitSelector(ze) {
    initSelectorCallbacks.push(ze);
}
function closestRoot(ze, Gr = !1) {
    return findClosest(ze, (Wr) => {
        if ((Gr ? allSelectors() : rootSelectors()).some((Yr) => Wr.matches(Yr))) return !0;
    });
}
function findClosest(ze, Gr) {
    if (ze) {
        if (Gr(ze)) return ze;
        if ((ze._x_teleportBack && (ze = ze._x_teleportBack), !!ze.parentElement)) return findClosest(ze.parentElement, Gr);
    }
}
function isRoot(ze) {
    return rootSelectors().some((Gr) => ze.matches(Gr));
}
var initInterceptors2 = [];
function interceptInit(ze) {
    initInterceptors2.push(ze);
}
function initTree(ze, Gr = walk, Wr = () => {}) {
    deferHandlingDirectives(() => {
        Gr(ze, (Kr, Yr) => {
            Wr(Kr, Yr), initInterceptors2.forEach((Qr) => Qr(Kr, Yr)), directives(Kr, Kr.attributes).forEach((Qr) => Qr()), Kr._x_ignore && Yr();
        });
    });
}
function destroyTree(ze, Gr = walk) {
    Gr(ze, (Wr) => {
        cleanupAttributes(Wr), cleanupElement(Wr);
    });
}
function warnAboutMissingPlugins() {
    [
        ["ui", "dialog", ["[x-dialog], [x-popover]"]],
        ["anchor", "anchor", ["[x-anchor]"]],
        ["sort", "sort", ["[x-sort]"]],
    ].forEach(([Gr, Wr, Kr]) => {
        directiveExists(Wr) ||
            Kr.some((Yr) => {
                if (document.querySelector(Yr)) return warn(`found "${Yr}", but missing ${Gr} plugin`), !0;
            });
    });
}
var tickStack = [],
    isHolding = !1;
function nextTick$1(ze = () => {}) {
    return (
        queueMicrotask(() => {
            isHolding ||
                setTimeout(() => {
                    releaseNextTicks();
                });
        }),
        new Promise((Gr) => {
            tickStack.push(() => {
                ze(), Gr();
            });
        })
    );
}
function releaseNextTicks() {
    for (isHolding = !1; tickStack.length; ) tickStack.shift()();
}
function holdNextTicks() {
    isHolding = !0;
}
function setClasses(ze, Gr) {
    return Array.isArray(Gr) ? setClassesFromString(ze, Gr.join(" ")) : typeof Gr == "object" && Gr !== null ? setClassesFromObject(ze, Gr) : typeof Gr == "function" ? setClasses(ze, Gr()) : setClassesFromString(ze, Gr);
}
function setClassesFromString(ze, Gr) {
    let Wr = (Yr) =>
            Yr.split(" ")
                .filter((Qr) => !ze.classList.contains(Qr))
                .filter(Boolean),
        Kr = (Yr) => (
            ze.classList.add(...Yr),
            () => {
                ze.classList.remove(...Yr);
            }
        );
    return (Gr = Gr === !0 ? (Gr = "") : Gr || ""), Kr(Wr(Gr));
}
function setClassesFromObject(ze, Gr) {
    let Wr = (Zr) => Zr.split(" ").filter(Boolean),
        Kr = Object.entries(Gr)
            .flatMap(([Zr, ei]) => (ei ? Wr(Zr) : !1))
            .filter(Boolean),
        Yr = Object.entries(Gr)
            .flatMap(([Zr, ei]) => (ei ? !1 : Wr(Zr)))
            .filter(Boolean),
        Qr = [],
        Jr = [];
    return (
        Yr.forEach((Zr) => {
            ze.classList.contains(Zr) && (ze.classList.remove(Zr), Jr.push(Zr));
        }),
        Kr.forEach((Zr) => {
            ze.classList.contains(Zr) || (ze.classList.add(Zr), Qr.push(Zr));
        }),
        () => {
            Jr.forEach((Zr) => ze.classList.add(Zr)), Qr.forEach((Zr) => ze.classList.remove(Zr));
        }
    );
}
function setStyles(ze, Gr) {
    return typeof Gr == "object" && Gr !== null ? setStylesFromObject(ze, Gr) : setStylesFromString(ze, Gr);
}
function setStylesFromObject(ze, Gr) {
    let Wr = {};
    return (
        Object.entries(Gr).forEach(([Kr, Yr]) => {
            (Wr[Kr] = ze.style[Kr]), Kr.startsWith("--") || (Kr = kebabCase(Kr)), ze.style.setProperty(Kr, Yr);
        }),
        setTimeout(() => {
            ze.style.length === 0 && ze.removeAttribute("style");
        }),
        () => {
            setStyles(ze, Wr);
        }
    );
}
function setStylesFromString(ze, Gr) {
    let Wr = ze.getAttribute("style", Gr);
    return (
        ze.setAttribute("style", Gr),
        () => {
            ze.setAttribute("style", Wr || "");
        }
    );
}
function kebabCase(ze) {
    return ze.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(ze, Gr = () => {}) {
    let Wr = !1;
    return function () {
        Wr ? Gr.apply(this, arguments) : ((Wr = !0), ze.apply(this, arguments));
    };
}
directive("transition", (ze, { value: Gr, modifiers: Wr, expression: Kr }, { evaluate: Yr }) => {
    typeof Kr == "function" && (Kr = Yr(Kr)), Kr !== !1 && (!Kr || typeof Kr == "boolean" ? registerTransitionsFromHelper(ze, Wr, Gr) : registerTransitionsFromClassString(ze, Kr, Gr));
});
function registerTransitionsFromClassString(ze, Gr, Wr) {
    registerTransitionObject(ze, setClasses, ""),
        {
            enter: (Yr) => {
                ze._x_transition.enter.during = Yr;
            },
            "enter-start": (Yr) => {
                ze._x_transition.enter.start = Yr;
            },
            "enter-end": (Yr) => {
                ze._x_transition.enter.end = Yr;
            },
            leave: (Yr) => {
                ze._x_transition.leave.during = Yr;
            },
            "leave-start": (Yr) => {
                ze._x_transition.leave.start = Yr;
            },
            "leave-end": (Yr) => {
                ze._x_transition.leave.end = Yr;
            },
        }[Wr](Gr);
}
function registerTransitionsFromHelper(ze, Gr, Wr) {
    registerTransitionObject(ze, setStyles);
    let Kr = !Gr.includes("in") && !Gr.includes("out") && !Wr,
        Yr = Kr || Gr.includes("in") || ["enter"].includes(Wr),
        Qr = Kr || Gr.includes("out") || ["leave"].includes(Wr);
    Gr.includes("in") && !Kr && (Gr = Gr.filter((ai, pi) => pi < Gr.indexOf("out"))), Gr.includes("out") && !Kr && (Gr = Gr.filter((ai, pi) => pi > Gr.indexOf("out")));
    let Jr = !Gr.includes("opacity") && !Gr.includes("scale"),
        Zr = Jr || Gr.includes("opacity"),
        ei = Jr || Gr.includes("scale"),
        ti = Zr ? 0 : 1,
        ri = ei ? modifierValue(Gr, "scale", 95) / 100 : 1,
        ii = modifierValue(Gr, "delay", 0) / 1e3,
        ni = modifierValue(Gr, "origin", "center"),
        si = "opacity, transform",
        li = modifierValue(Gr, "duration", 150) / 1e3,
        ui = modifierValue(Gr, "duration", 75) / 1e3,
        oi = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    Yr &&
        ((ze._x_transition.enter.during = { transformOrigin: ni, transitionDelay: `${ii}s`, transitionProperty: si, transitionDuration: `${li}s`, transitionTimingFunction: oi }),
        (ze._x_transition.enter.start = { opacity: ti, transform: `scale(${ri})` }),
        (ze._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
        Qr &&
            ((ze._x_transition.leave.during = { transformOrigin: ni, transitionDelay: `${ii}s`, transitionProperty: si, transitionDuration: `${ui}s`, transitionTimingFunction: oi }),
            (ze._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
            (ze._x_transition.leave.end = { opacity: ti, transform: `scale(${ri})` }));
}
function registerTransitionObject(ze, Gr, Wr = {}) {
    ze._x_transition ||
        (ze._x_transition = {
            enter: { during: Wr, start: Wr, end: Wr },
            leave: { during: Wr, start: Wr, end: Wr },
            in(Kr = () => {}, Yr = () => {}) {
                transition$1(ze, Gr, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, Kr, Yr);
            },
            out(Kr = () => {}, Yr = () => {}) {
                transition$1(ze, Gr, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, Kr, Yr);
            },
        });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (ze, Gr, Wr, Kr) {
    const Yr = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let Qr = () => Yr(Wr);
    if (Gr) {
        ze._x_transition && (ze._x_transition.enter || ze._x_transition.leave)
            ? ze._x_transition.enter && (Object.entries(ze._x_transition.enter.during).length || Object.entries(ze._x_transition.enter.start).length || Object.entries(ze._x_transition.enter.end).length)
                ? ze._x_transition.in(Wr)
                : Qr()
            : ze._x_transition
            ? ze._x_transition.in(Wr)
            : Qr();
        return;
    }
    (ze._x_hidePromise = ze._x_transition
        ? new Promise((Jr, Zr) => {
              ze._x_transition.out(
                  () => {},
                  () => Jr(Kr)
              ),
                  ze._x_transitioning && ze._x_transitioning.beforeCancel(() => Zr({ isFromCancelledTransition: !0 }));
          })
        : Promise.resolve(Kr)),
        queueMicrotask(() => {
            let Jr = closestHide(ze);
            Jr
                ? (Jr._x_hideChildren || (Jr._x_hideChildren = []), Jr._x_hideChildren.push(ze))
                : Yr(() => {
                      let Zr = (ei) => {
                          let ti = Promise.all([ei._x_hidePromise, ...(ei._x_hideChildren || []).map(Zr)]).then(([ri]) => (ri == null ? void 0 : ri()));
                          return delete ei._x_hidePromise, delete ei._x_hideChildren, ti;
                      };
                      Zr(ze).catch((ei) => {
                          if (!ei.isFromCancelledTransition) throw ei;
                      });
                  });
        });
};
function closestHide(ze) {
    let Gr = ze.parentNode;
    if (Gr) return Gr._x_hidePromise ? Gr : closestHide(Gr);
}
function transition$1(ze, Gr, { during: Wr, start: Kr, end: Yr } = {}, Qr = () => {}, Jr = () => {}) {
    if ((ze._x_transitioning && ze._x_transitioning.cancel(), Object.keys(Wr).length === 0 && Object.keys(Kr).length === 0 && Object.keys(Yr).length === 0)) {
        Qr(), Jr();
        return;
    }
    let Zr, ei, ti;
    performTransition(ze, {
        start() {
            Zr = Gr(ze, Kr);
        },
        during() {
            ei = Gr(ze, Wr);
        },
        before: Qr,
        end() {
            Zr(), (ti = Gr(ze, Yr));
        },
        after: Jr,
        cleanup() {
            ei(), ti();
        },
    });
}
function performTransition(ze, Gr) {
    let Wr,
        Kr,
        Yr,
        Qr = once(() => {
            mutateDom(() => {
                (Wr = !0), Kr || Gr.before(), Yr || (Gr.end(), releaseNextTicks()), Gr.after(), ze.isConnected && Gr.cleanup(), delete ze._x_transitioning;
            });
        });
    (ze._x_transitioning = {
        beforeCancels: [],
        beforeCancel(Jr) {
            this.beforeCancels.push(Jr);
        },
        cancel: once(function () {
            for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
            Qr();
        }),
        finish: Qr,
    }),
        mutateDom(() => {
            Gr.start(), Gr.during();
        }),
        holdNextTicks(),
        requestAnimationFrame(() => {
            if (Wr) return;
            let Jr = Number(getComputedStyle(ze).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
                Zr = Number(getComputedStyle(ze).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
            Jr === 0 && (Jr = Number(getComputedStyle(ze).animationDuration.replace("s", "")) * 1e3),
                mutateDom(() => {
                    Gr.before();
                }),
                (Kr = !0),
                requestAnimationFrame(() => {
                    Wr ||
                        (mutateDom(() => {
                            Gr.end();
                        }),
                        releaseNextTicks(),
                        setTimeout(ze._x_transitioning.finish, Jr + Zr),
                        (Yr = !0));
                });
        });
}
function modifierValue(ze, Gr, Wr) {
    if (ze.indexOf(Gr) === -1) return Wr;
    const Kr = ze[ze.indexOf(Gr) + 1];
    if (!Kr || (Gr === "scale" && isNaN(Kr))) return Wr;
    if (Gr === "duration" || Gr === "delay") {
        let Yr = Kr.match(/([0-9]+)ms/);
        if (Yr) return Yr[1];
    }
    return Gr === "origin" && ["top", "right", "left", "center", "bottom"].includes(ze[ze.indexOf(Gr) + 2]) ? [Kr, ze[ze.indexOf(Gr) + 2]].join(" ") : Kr;
}
var isCloning = !1;
function skipDuringClone(ze, Gr = () => {}) {
    return (...Wr) => (isCloning ? Gr(...Wr) : ze(...Wr));
}
function onlyDuringClone(ze) {
    return (...Gr) => isCloning && ze(...Gr);
}
var interceptors = [];
function interceptClone(ze) {
    interceptors.push(ze);
}
function cloneNode(ze, Gr) {
    interceptors.forEach((Wr) => Wr(ze, Gr)),
        (isCloning = !0),
        dontRegisterReactiveSideEffects(() => {
            initTree(Gr, (Wr, Kr) => {
                Kr(Wr, () => {});
            });
        }),
        (isCloning = !1);
}
var isCloningLegacy = !1;
function clone(ze, Gr) {
    Gr._x_dataStack || (Gr._x_dataStack = ze._x_dataStack),
        (isCloning = !0),
        (isCloningLegacy = !0),
        dontRegisterReactiveSideEffects(() => {
            cloneTree(Gr);
        }),
        (isCloning = !1),
        (isCloningLegacy = !1);
}
function cloneTree(ze) {
    let Gr = !1;
    initTree(ze, (Kr, Yr) => {
        walk(Kr, (Qr, Jr) => {
            if (Gr && isRoot(Qr)) return Jr();
            (Gr = !0), Yr(Qr, Jr);
        });
    });
}
function dontRegisterReactiveSideEffects(ze) {
    let Gr = effect;
    overrideEffect((Wr, Kr) => {
        let Yr = Gr(Wr);
        return release(Yr), () => {};
    }),
        ze(),
        overrideEffect(Gr);
}
function bind(ze, Gr, Wr, Kr = []) {
    switch ((ze._x_bindings || (ze._x_bindings = reactive({})), (ze._x_bindings[Gr] = Wr), (Gr = Kr.includes("camel") ? camelCase(Gr) : Gr), Gr)) {
        case "value":
            bindInputValue(ze, Wr);
            break;
        case "style":
            bindStyles(ze, Wr);
            break;
        case "class":
            bindClasses(ze, Wr);
            break;
        case "selected":
        case "checked":
            bindAttributeAndProperty(ze, Gr, Wr);
            break;
        default:
            bindAttribute(ze, Gr, Wr);
            break;
    }
}
function bindInputValue(ze, Gr) {
    if (ze.type === "radio") ze.attributes.value === void 0 && (ze.value = Gr), window.fromModel && (typeof Gr == "boolean" ? (ze.checked = safeParseBoolean(ze.value) === Gr) : (ze.checked = checkedAttrLooseCompare(ze.value, Gr)));
    else if (ze.type === "checkbox")
        Number.isInteger(Gr)
            ? (ze.value = Gr)
            : !Array.isArray(Gr) && typeof Gr != "boolean" && ![null, void 0].includes(Gr)
            ? (ze.value = String(Gr))
            : Array.isArray(Gr)
            ? (ze.checked = Gr.some((Wr) => checkedAttrLooseCompare(Wr, ze.value)))
            : (ze.checked = !!Gr);
    else if (ze.tagName === "SELECT") updateSelect(ze, Gr);
    else {
        if (ze.value === Gr) return;
        ze.value = Gr === void 0 ? "" : Gr;
    }
}
function bindClasses(ze, Gr) {
    ze._x_undoAddedClasses && ze._x_undoAddedClasses(), (ze._x_undoAddedClasses = setClasses(ze, Gr));
}
function bindStyles(ze, Gr) {
    ze._x_undoAddedStyles && ze._x_undoAddedStyles(), (ze._x_undoAddedStyles = setStyles(ze, Gr));
}
function bindAttributeAndProperty(ze, Gr, Wr) {
    bindAttribute(ze, Gr, Wr), setPropertyIfChanged(ze, Gr, Wr);
}
function bindAttribute(ze, Gr, Wr) {
    [null, void 0, !1].includes(Wr) && attributeShouldntBePreservedIfFalsy(Gr) ? ze.removeAttribute(Gr) : (isBooleanAttr(Gr) && (Wr = Gr), setIfChanged(ze, Gr, Wr));
}
function setIfChanged(ze, Gr, Wr) {
    ze.getAttribute(Gr) != Wr && ze.setAttribute(Gr, Wr);
}
function setPropertyIfChanged(ze, Gr, Wr) {
    ze[Gr] !== Wr && (ze[Gr] = Wr);
}
function updateSelect(ze, Gr) {
    const Wr = [].concat(Gr).map((Kr) => Kr + "");
    Array.from(ze.options).forEach((Kr) => {
        Kr.selected = Wr.includes(Kr.value);
    });
}
function camelCase(ze) {
    return ze.toLowerCase().replace(/-(\w)/g, (Gr, Wr) => Wr.toUpperCase());
}
function checkedAttrLooseCompare(ze, Gr) {
    return ze == Gr;
}
function safeParseBoolean(ze) {
    return [1, "1", "true", "on", "yes", !0].includes(ze) ? !0 : [0, "0", "false", "off", "no", !1].includes(ze) ? !1 : ze ? !!ze : null;
}
function isBooleanAttr(ze) {
    return [
        "disabled",
        "checked",
        "required",
        "readonly",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule",
    ].includes(ze);
}
function attributeShouldntBePreservedIfFalsy(ze) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(ze);
}
function getBinding(ze, Gr, Wr) {
    return ze._x_bindings && ze._x_bindings[Gr] !== void 0 ? ze._x_bindings[Gr] : getAttributeBinding(ze, Gr, Wr);
}
function extractProp(ze, Gr, Wr, Kr = !0) {
    if (ze._x_bindings && ze._x_bindings[Gr] !== void 0) return ze._x_bindings[Gr];
    if (ze._x_inlineBindings && ze._x_inlineBindings[Gr] !== void 0) {
        let Yr = ze._x_inlineBindings[Gr];
        return (Yr.extract = Kr), dontAutoEvaluateFunctions(() => evaluate(ze, Yr.expression));
    }
    return getAttributeBinding(ze, Gr, Wr);
}
function getAttributeBinding(ze, Gr, Wr) {
    let Kr = ze.getAttribute(Gr);
    return Kr === null ? (typeof Wr == "function" ? Wr() : Wr) : Kr === "" ? !0 : isBooleanAttr(Gr) ? !![Gr, "true"].includes(Kr) : Kr;
}
function debounce(ze, Gr) {
    var Wr;
    return function () {
        var Kr = this,
            Yr = arguments,
            Qr = function () {
                (Wr = null), ze.apply(Kr, Yr);
            };
        clearTimeout(Wr), (Wr = setTimeout(Qr, Gr));
    };
}
function throttle(ze, Gr) {
    let Wr;
    return function () {
        let Kr = this,
            Yr = arguments;
        Wr || (ze.apply(Kr, Yr), (Wr = !0), setTimeout(() => (Wr = !1), Gr));
    };
}
function entangle({ get: ze, set: Gr }, { get: Wr, set: Kr }) {
    let Yr = !0,
        Qr,
        Jr = effect(() => {
            let Zr = ze(),
                ei = Wr();
            if (Yr) Kr(cloneIfObject(Zr)), (Yr = !1);
            else {
                let ti = JSON.stringify(Zr),
                    ri = JSON.stringify(ei);
                ti !== Qr ? Kr(cloneIfObject(Zr)) : ti !== ri && Gr(cloneIfObject(ei));
            }
            (Qr = JSON.stringify(ze())), JSON.stringify(Wr());
        });
    return () => {
        release(Jr);
    };
}
function cloneIfObject(ze) {
    return typeof ze == "object" ? JSON.parse(JSON.stringify(ze)) : ze;
}
function plugin(ze) {
    (Array.isArray(ze) ? ze : [ze]).forEach((Wr) => Wr(alpine_default));
}
var stores = {},
    isReactive = !1;
function store(ze, Gr) {
    if ((isReactive || ((stores = reactive(stores)), (isReactive = !0)), Gr === void 0)) return stores[ze];
    (stores[ze] = Gr), typeof Gr == "object" && Gr !== null && Gr.hasOwnProperty("init") && typeof Gr.init == "function" && stores[ze].init(), initInterceptors(stores[ze]);
}
function getStores() {
    return stores;
}
var binds = {};
function bind2(ze, Gr) {
    let Wr = typeof Gr != "function" ? () => Gr : Gr;
    return ze instanceof Element ? applyBindingsObject(ze, Wr()) : ((binds[ze] = Wr), () => {});
}
function injectBindingProviders(ze) {
    return (
        Object.entries(binds).forEach(([Gr, Wr]) => {
            Object.defineProperty(ze, Gr, {
                get() {
                    return (...Kr) => Wr(...Kr);
                },
            });
        }),
        ze
    );
}
function applyBindingsObject(ze, Gr, Wr) {
    let Kr = [];
    for (; Kr.length; ) Kr.pop()();
    let Yr = Object.entries(Gr).map(([Jr, Zr]) => ({ name: Jr, value: Zr })),
        Qr = attributesOnly(Yr);
    return (
        (Yr = Yr.map((Jr) => (Qr.find((Zr) => Zr.name === Jr.name) ? { name: `x-bind:${Jr.name}`, value: `"${Jr.value}"` } : Jr))),
        directives(ze, Yr, Wr).map((Jr) => {
            Kr.push(Jr.runCleanups), Jr();
        }),
        () => {
            for (; Kr.length; ) Kr.pop()();
        }
    );
}
var datas = {};
function data(ze, Gr) {
    datas[ze] = Gr;
}
function injectDataProviders(ze, Gr) {
    return (
        Object.entries(datas).forEach(([Wr, Kr]) => {
            Object.defineProperty(ze, Wr, {
                get() {
                    return (...Yr) => Kr.bind(Gr)(...Yr);
                },
                enumerable: !1,
            });
        }),
        ze
    );
}
var Alpine$1 = {
        get reactive() {
            return reactive;
        },
        get release() {
            return release;
        },
        get effect() {
            return effect;
        },
        get raw() {
            return raw;
        },
        version: "3.14.1",
        flushAndStopDeferringMutations,
        dontAutoEvaluateFunctions,
        disableEffectScheduling,
        startObservingMutations,
        stopObservingMutations,
        setReactivityEngine,
        onAttributeRemoved,
        onAttributesAdded,
        closestDataStack,
        skipDuringClone,
        onlyDuringClone,
        addRootSelector,
        addInitSelector,
        interceptClone,
        addScopeToNode,
        deferMutations,
        mapAttributes,
        evaluateLater,
        interceptInit,
        setEvaluator,
        mergeProxies,
        extractProp,
        findClosest,
        onElRemoved,
        closestRoot,
        destroyTree,
        interceptor,
        transition: transition$1,
        setStyles,
        mutateDom,
        directive,
        entangle,
        throttle,
        debounce,
        evaluate,
        initTree,
        nextTick: nextTick$1,
        prefixed: prefix,
        prefix: setPrefix,
        plugin,
        magic,
        store,
        start,
        clone,
        cloneNode,
        bound: getBinding,
        $data: scope,
        watch,
        walk,
        data,
        bind: bind2,
    },
    alpine_default = Alpine$1;
function makeMap(ze, Gr) {
    const Wr = Object.create(null),
        Kr = ze.split(",");
    for (let Yr = 0; Yr < Kr.length; Yr++) Wr[Kr[Yr]] = !0;
    return (Yr) => !!Wr[Yr];
}
var EMPTY_OBJ = Object.freeze({}),
    hasOwnProperty = Object.prototype.hasOwnProperty,
    hasOwn = (ze, Gr) => hasOwnProperty.call(ze, Gr),
    isArray = Array.isArray,
    isMap = (ze) => toTypeString(ze) === "[object Map]",
    isString = (ze) => typeof ze == "string",
    isSymbol = (ze) => typeof ze == "symbol",
    isObject$2 = (ze) => ze !== null && typeof ze == "object",
    objectToString = Object.prototype.toString,
    toTypeString = (ze) => objectToString.call(ze),
    toRawType = (ze) => toTypeString(ze).slice(8, -1),
    isIntegerKey = (ze) => isString(ze) && ze !== "NaN" && ze[0] !== "-" && "" + parseInt(ze, 10) === ze,
    cacheStringFunction = (ze) => {
        const Gr = Object.create(null);
        return (Wr) => Gr[Wr] || (Gr[Wr] = ze(Wr));
    },
    capitalize = cacheStringFunction((ze) => ze.charAt(0).toUpperCase() + ze.slice(1)),
    hasChanged = (ze, Gr) => ze !== Gr && (ze === ze || Gr === Gr),
    targetMap = new WeakMap(),
    effectStack = [],
    activeEffect,
    ITERATE_KEY = Symbol("iterate"),
    MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(ze) {
    return ze && ze._isEffect === !0;
}
function effect2(ze, Gr = EMPTY_OBJ) {
    isEffect(ze) && (ze = ze.raw);
    const Wr = createReactiveEffect(ze, Gr);
    return Gr.lazy || Wr(), Wr;
}
function stop(ze) {
    ze.active && (cleanup(ze), ze.options.onStop && ze.options.onStop(), (ze.active = !1));
}
var uid = 0;
function createReactiveEffect(ze, Gr) {
    const Wr = function () {
        if (!Wr.active) return ze();
        if (!effectStack.includes(Wr)) {
            cleanup(Wr);
            try {
                return enableTracking(), effectStack.push(Wr), (activeEffect = Wr), ze();
            } finally {
                effectStack.pop(), resetTracking(), (activeEffect = effectStack[effectStack.length - 1]);
            }
        }
    };
    return (Wr.id = uid++), (Wr.allowRecurse = !!Gr.allowRecurse), (Wr._isEffect = !0), (Wr.active = !0), (Wr.raw = ze), (Wr.deps = []), (Wr.options = Gr), Wr;
}
function cleanup(ze) {
    const { deps: Gr } = ze;
    if (Gr.length) {
        for (let Wr = 0; Wr < Gr.length; Wr++) Gr[Wr].delete(ze);
        Gr.length = 0;
    }
}
var shouldTrack = !0,
    trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack), (shouldTrack = !1);
}
function enableTracking() {
    trackStack.push(shouldTrack), (shouldTrack = !0);
}
function resetTracking() {
    const ze = trackStack.pop();
    shouldTrack = ze === void 0 ? !0 : ze;
}
function track(ze, Gr, Wr) {
    if (!shouldTrack || activeEffect === void 0) return;
    let Kr = targetMap.get(ze);
    Kr || targetMap.set(ze, (Kr = new Map()));
    let Yr = Kr.get(Wr);
    Yr || Kr.set(Wr, (Yr = new Set())), Yr.has(activeEffect) || (Yr.add(activeEffect), activeEffect.deps.push(Yr), activeEffect.options.onTrack && activeEffect.options.onTrack({ effect: activeEffect, target: ze, type: Gr, key: Wr }));
}
function trigger(ze, Gr, Wr, Kr, Yr, Qr) {
    const Jr = targetMap.get(ze);
    if (!Jr) return;
    const Zr = new Set(),
        ei = (ri) => {
            ri &&
                ri.forEach((ii) => {
                    (ii !== activeEffect || ii.allowRecurse) && Zr.add(ii);
                });
        };
    if (Gr === "clear") Jr.forEach(ei);
    else if (Wr === "length" && isArray(ze))
        Jr.forEach((ri, ii) => {
            (ii === "length" || ii >= Kr) && ei(ri);
        });
    else
        switch ((Wr !== void 0 && ei(Jr.get(Wr)), Gr)) {
            case "add":
                isArray(ze) ? isIntegerKey(Wr) && ei(Jr.get("length")) : (ei(Jr.get(ITERATE_KEY)), isMap(ze) && ei(Jr.get(MAP_KEY_ITERATE_KEY)));
                break;
            case "delete":
                isArray(ze) || (ei(Jr.get(ITERATE_KEY)), isMap(ze) && ei(Jr.get(MAP_KEY_ITERATE_KEY)));
                break;
            case "set":
                isMap(ze) && ei(Jr.get(ITERATE_KEY));
                break;
        }
    const ti = (ri) => {
        ri.options.onTrigger && ri.options.onTrigger({ effect: ri, target: ze, key: Wr, type: Gr, newValue: Kr, oldValue: Yr, oldTarget: Qr }), ri.options.scheduler ? ri.options.scheduler(ri) : ri();
    };
    Zr.forEach(ti);
}
var isNonTrackableKeys = makeMap("__proto__,__v_isRef,__isVue"),
    builtInSymbols = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((ze) => Symbol[ze])
            .filter(isSymbol)
    ),
    get2 = createGetter(),
    readonlyGet = createGetter(!0),
    arrayInstrumentations = createArrayInstrumentations();
function createArrayInstrumentations() {
    const ze = {};
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((Gr) => {
            ze[Gr] = function (...Wr) {
                const Kr = toRaw(this);
                for (let Qr = 0, Jr = this.length; Qr < Jr; Qr++) track(Kr, "get", Qr + "");
                const Yr = Kr[Gr](...Wr);
                return Yr === -1 || Yr === !1 ? Kr[Gr](...Wr.map(toRaw)) : Yr;
            };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((Gr) => {
            ze[Gr] = function (...Wr) {
                pauseTracking();
                const Kr = toRaw(this)[Gr].apply(this, Wr);
                return resetTracking(), Kr;
            };
        }),
        ze
    );
}
function createGetter(ze = !1, Gr = !1) {
    return function (Kr, Yr, Qr) {
        if (Yr === "__v_isReactive") return !ze;
        if (Yr === "__v_isReadonly") return ze;
        if (Yr === "__v_raw" && Qr === (ze ? (Gr ? shallowReadonlyMap : readonlyMap) : Gr ? shallowReactiveMap : reactiveMap).get(Kr)) return Kr;
        const Jr = isArray(Kr);
        if (!ze && Jr && hasOwn(arrayInstrumentations, Yr)) return Reflect.get(arrayInstrumentations, Yr, Qr);
        const Zr = Reflect.get(Kr, Yr, Qr);
        return (isSymbol(Yr) ? builtInSymbols.has(Yr) : isNonTrackableKeys(Yr)) || (ze || track(Kr, "get", Yr), Gr) ? Zr : isRef(Zr) ? (!Jr || !isIntegerKey(Yr) ? Zr.value : Zr) : isObject$2(Zr) ? (ze ? readonly(Zr) : reactive2(Zr)) : Zr;
    };
}
var set2 = createSetter();
function createSetter(ze = !1) {
    return function (Wr, Kr, Yr, Qr) {
        let Jr = Wr[Kr];
        if (!ze && ((Yr = toRaw(Yr)), (Jr = toRaw(Jr)), !isArray(Wr) && isRef(Jr) && !isRef(Yr))) return (Jr.value = Yr), !0;
        const Zr = isArray(Wr) && isIntegerKey(Kr) ? Number(Kr) < Wr.length : hasOwn(Wr, Kr),
            ei = Reflect.set(Wr, Kr, Yr, Qr);
        return Wr === toRaw(Qr) && (Zr ? hasChanged(Yr, Jr) && trigger(Wr, "set", Kr, Yr, Jr) : trigger(Wr, "add", Kr, Yr)), ei;
    };
}
function deleteProperty(ze, Gr) {
    const Wr = hasOwn(ze, Gr),
        Kr = ze[Gr],
        Yr = Reflect.deleteProperty(ze, Gr);
    return Yr && Wr && trigger(ze, "delete", Gr, void 0, Kr), Yr;
}
function has(ze, Gr) {
    const Wr = Reflect.has(ze, Gr);
    return (!isSymbol(Gr) || !builtInSymbols.has(Gr)) && track(ze, "has", Gr), Wr;
}
function ownKeys(ze) {
    return track(ze, "iterate", isArray(ze) ? "length" : ITERATE_KEY), Reflect.ownKeys(ze);
}
var mutableHandlers = { get: get2, set: set2, deleteProperty, has, ownKeys },
    readonlyHandlers = {
        get: readonlyGet,
        set(ze, Gr) {
            return console.warn(`Set operation on key "${String(Gr)}" failed: target is readonly.`, ze), !0;
        },
        deleteProperty(ze, Gr) {
            return console.warn(`Delete operation on key "${String(Gr)}" failed: target is readonly.`, ze), !0;
        },
    },
    toReactive = (ze) => (isObject$2(ze) ? reactive2(ze) : ze),
    toReadonly = (ze) => (isObject$2(ze) ? readonly(ze) : ze),
    toShallow = (ze) => ze,
    getProto = (ze) => Reflect.getPrototypeOf(ze);
function get$1(ze, Gr, Wr = !1, Kr = !1) {
    ze = ze.__v_raw;
    const Yr = toRaw(ze),
        Qr = toRaw(Gr);
    Gr !== Qr && !Wr && track(Yr, "get", Gr), !Wr && track(Yr, "get", Qr);
    const { has: Jr } = getProto(Yr),
        Zr = Kr ? toShallow : Wr ? toReadonly : toReactive;
    if (Jr.call(Yr, Gr)) return Zr(ze.get(Gr));
    if (Jr.call(Yr, Qr)) return Zr(ze.get(Qr));
    ze !== Yr && ze.get(Gr);
}
function has$1(ze, Gr = !1) {
    const Wr = this.__v_raw,
        Kr = toRaw(Wr),
        Yr = toRaw(ze);
    return ze !== Yr && !Gr && track(Kr, "has", ze), !Gr && track(Kr, "has", Yr), ze === Yr ? Wr.has(ze) : Wr.has(ze) || Wr.has(Yr);
}
function size(ze, Gr = !1) {
    return (ze = ze.__v_raw), !Gr && track(toRaw(ze), "iterate", ITERATE_KEY), Reflect.get(ze, "size", ze);
}
function add(ze) {
    ze = toRaw(ze);
    const Gr = toRaw(this);
    return getProto(Gr).has.call(Gr, ze) || (Gr.add(ze), trigger(Gr, "add", ze, ze)), this;
}
function set$1(ze, Gr) {
    Gr = toRaw(Gr);
    const Wr = toRaw(this),
        { has: Kr, get: Yr } = getProto(Wr);
    let Qr = Kr.call(Wr, ze);
    Qr ? checkIdentityKeys(Wr, Kr, ze) : ((ze = toRaw(ze)), (Qr = Kr.call(Wr, ze)));
    const Jr = Yr.call(Wr, ze);
    return Wr.set(ze, Gr), Qr ? hasChanged(Gr, Jr) && trigger(Wr, "set", ze, Gr, Jr) : trigger(Wr, "add", ze, Gr), this;
}
function deleteEntry(ze) {
    const Gr = toRaw(this),
        { has: Wr, get: Kr } = getProto(Gr);
    let Yr = Wr.call(Gr, ze);
    Yr ? checkIdentityKeys(Gr, Wr, ze) : ((ze = toRaw(ze)), (Yr = Wr.call(Gr, ze)));
    const Qr = Kr ? Kr.call(Gr, ze) : void 0,
        Jr = Gr.delete(ze);
    return Yr && trigger(Gr, "delete", ze, void 0, Qr), Jr;
}
function clear() {
    const ze = toRaw(this),
        Gr = ze.size !== 0,
        Wr = isMap(ze) ? new Map(ze) : new Set(ze),
        Kr = ze.clear();
    return Gr && trigger(ze, "clear", void 0, void 0, Wr), Kr;
}
function createForEach(ze, Gr) {
    return function (Kr, Yr) {
        const Qr = this,
            Jr = Qr.__v_raw,
            Zr = toRaw(Jr),
            ei = Gr ? toShallow : ze ? toReadonly : toReactive;
        return !ze && track(Zr, "iterate", ITERATE_KEY), Jr.forEach((ti, ri) => Kr.call(Yr, ei(ti), ei(ri), Qr));
    };
}
function createIterableMethod(ze, Gr, Wr) {
    return function (...Kr) {
        const Yr = this.__v_raw,
            Qr = toRaw(Yr),
            Jr = isMap(Qr),
            Zr = ze === "entries" || (ze === Symbol.iterator && Jr),
            ei = ze === "keys" && Jr,
            ti = Yr[ze](...Kr),
            ri = Wr ? toShallow : Gr ? toReadonly : toReactive;
        return (
            !Gr && track(Qr, "iterate", ei ? MAP_KEY_ITERATE_KEY : ITERATE_KEY),
            {
                next() {
                    const { value: ii, done: ni } = ti.next();
                    return ni ? { value: ii, done: ni } : { value: Zr ? [ri(ii[0]), ri(ii[1])] : ri(ii), done: ni };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function createReadonlyMethod(ze) {
    return function (...Gr) {
        {
            const Wr = Gr[0] ? `on key "${Gr[0]}" ` : "";
            console.warn(`${capitalize(ze)} operation ${Wr}failed: target is readonly.`, toRaw(this));
        }
        return ze === "delete" ? !1 : this;
    };
}
function createInstrumentations() {
    const ze = {
            get(Qr) {
                return get$1(this, Qr);
            },
            get size() {
                return size(this);
            },
            has: has$1,
            add,
            set: set$1,
            delete: deleteEntry,
            clear,
            forEach: createForEach(!1, !1),
        },
        Gr = {
            get(Qr) {
                return get$1(this, Qr, !1, !0);
            },
            get size() {
                return size(this);
            },
            has: has$1,
            add,
            set: set$1,
            delete: deleteEntry,
            clear,
            forEach: createForEach(!1, !0),
        },
        Wr = {
            get(Qr) {
                return get$1(this, Qr, !0);
            },
            get size() {
                return size(this, !0);
            },
            has(Qr) {
                return has$1.call(this, Qr, !0);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            delete: createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(!0, !1),
        },
        Kr = {
            get(Qr) {
                return get$1(this, Qr, !0, !0);
            },
            get size() {
                return size(this, !0);
            },
            has(Qr) {
                return has$1.call(this, Qr, !0);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            delete: createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(!0, !0),
        };
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((Qr) => {
            (ze[Qr] = createIterableMethod(Qr, !1, !1)), (Wr[Qr] = createIterableMethod(Qr, !0, !1)), (Gr[Qr] = createIterableMethod(Qr, !1, !0)), (Kr[Qr] = createIterableMethod(Qr, !0, !0));
        }),
        [ze, Wr, Gr, Kr]
    );
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = createInstrumentations();
function createInstrumentationGetter(ze, Gr) {
    const Wr = ze ? readonlyInstrumentations : mutableInstrumentations;
    return (Kr, Yr, Qr) => (Yr === "__v_isReactive" ? !ze : Yr === "__v_isReadonly" ? ze : Yr === "__v_raw" ? Kr : Reflect.get(hasOwn(Wr, Yr) && Yr in Kr ? Wr : Kr, Yr, Qr));
}
var mutableCollectionHandlers = { get: createInstrumentationGetter(!1) },
    readonlyCollectionHandlers = { get: createInstrumentationGetter(!0) };
function checkIdentityKeys(ze, Gr, Wr) {
    const Kr = toRaw(Wr);
    if (Kr !== Wr && Gr.call(ze, Kr)) {
        const Yr = toRawType(ze);
        console.warn(
            `Reactive ${Yr} contains both the raw and reactive versions of the same object${
                Yr === "Map" ? " as keys" : ""
            }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
        );
    }
}
var reactiveMap = new WeakMap(),
    shallowReactiveMap = new WeakMap(),
    readonlyMap = new WeakMap(),
    shallowReadonlyMap = new WeakMap();
function targetTypeMap(ze) {
    switch (ze) {
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
function getTargetType(ze) {
    return ze.__v_skip || !Object.isExtensible(ze) ? 0 : targetTypeMap(toRawType(ze));
}
function reactive2(ze) {
    return ze && ze.__v_isReadonly ? ze : createReactiveObject(ze, !1, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(ze) {
    return createReactiveObject(ze, !0, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(ze, Gr, Wr, Kr, Yr) {
    if (!isObject$2(ze)) return console.warn(`value cannot be made reactive: ${String(ze)}`), ze;
    if (ze.__v_raw && !(Gr && ze.__v_isReactive)) return ze;
    const Qr = Yr.get(ze);
    if (Qr) return Qr;
    const Jr = getTargetType(ze);
    if (Jr === 0) return ze;
    const Zr = new Proxy(ze, Jr === 2 ? Kr : Wr);
    return Yr.set(ze, Zr), Zr;
}
function toRaw(ze) {
    return (ze && toRaw(ze.__v_raw)) || ze;
}
function isRef(ze) {
    return !!(ze && ze.__v_isRef === !0);
}
magic("nextTick", () => nextTick$1);
magic("dispatch", (ze) => dispatch.bind(dispatch, ze));
magic("watch", (ze, { evaluateLater: Gr, cleanup: Wr }) => (Kr, Yr) => {
    let Qr = Gr(Kr),
        Zr = watch(() => {
            let ei;
            return Qr((ti) => (ei = ti)), ei;
        }, Yr);
    Wr(Zr);
});
magic("store", getStores);
magic("data", (ze) => scope(ze));
magic("root", (ze) => closestRoot(ze));
magic("refs", (ze) => (ze._x_refs_proxy || (ze._x_refs_proxy = mergeProxies(getArrayOfRefObject(ze))), ze._x_refs_proxy));
function getArrayOfRefObject(ze) {
    let Gr = [];
    return (
        findClosest(ze, (Wr) => {
            Wr._x_refs && Gr.push(Wr._x_refs);
        }),
        Gr
    );
}
var globalIdMemo = {};
function findAndIncrementId(ze) {
    return globalIdMemo[ze] || (globalIdMemo[ze] = 0), ++globalIdMemo[ze];
}
function closestIdRoot(ze, Gr) {
    return findClosest(ze, (Wr) => {
        if (Wr._x_ids && Wr._x_ids[Gr]) return !0;
    });
}
function setIdRoot(ze, Gr) {
    ze._x_ids || (ze._x_ids = {}), ze._x_ids[Gr] || (ze._x_ids[Gr] = findAndIncrementId(Gr));
}
magic("id", (ze, { cleanup: Gr }) => (Wr, Kr = null) => {
    let Yr = `${Wr}${Kr ? `-${Kr}` : ""}`;
    return cacheIdByNameOnElement(ze, Yr, Gr, () => {
        let Qr = closestIdRoot(ze, Wr),
            Jr = Qr ? Qr._x_ids[Wr] : findAndIncrementId(Wr);
        return Kr ? `${Wr}-${Jr}-${Kr}` : `${Wr}-${Jr}`;
    });
});
interceptClone((ze, Gr) => {
    ze._x_id && (Gr._x_id = ze._x_id);
});
function cacheIdByNameOnElement(ze, Gr, Wr, Kr) {
    if ((ze._x_id || (ze._x_id = {}), ze._x_id[Gr])) return ze._x_id[Gr];
    let Yr = Kr();
    return (
        (ze._x_id[Gr] = Yr),
        Wr(() => {
            delete ze._x_id[Gr];
        }),
        Yr
    );
}
magic("el", (ze) => ze);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(ze, Gr, Wr) {
    magic(Gr, (Kr) => warn(`You can't use [$${Gr}] without first installing the "${ze}" plugin here: https://alpinejs.dev/plugins/${Wr}`, Kr));
}
directive("modelable", (ze, { expression: Gr }, { effect: Wr, evaluateLater: Kr, cleanup: Yr }) => {
    let Qr = Kr(Gr),
        Jr = () => {
            let ri;
            return Qr((ii) => (ri = ii)), ri;
        },
        Zr = Kr(`${Gr} = __placeholder`),
        ei = (ri) => Zr(() => {}, { scope: { __placeholder: ri } }),
        ti = Jr();
    ei(ti),
        queueMicrotask(() => {
            if (!ze._x_model) return;
            ze._x_removeModelListeners.default();
            let ri = ze._x_model.get,
                ii = ze._x_model.set,
                ni = entangle(
                    {
                        get() {
                            return ri();
                        },
                        set(si) {
                            ii(si);
                        },
                    },
                    {
                        get() {
                            return Jr();
                        },
                        set(si) {
                            ei(si);
                        },
                    }
                );
            Yr(ni);
        });
});
directive("teleport", (ze, { modifiers: Gr, expression: Wr }, { cleanup: Kr }) => {
    ze.tagName.toLowerCase() !== "template" && warn("x-teleport can only be used on a <template> tag", ze);
    let Yr = getTarget(Wr),
        Qr = ze.content.cloneNode(!0).firstElementChild;
    (ze._x_teleport = Qr),
        (Qr._x_teleportBack = ze),
        ze.setAttribute("data-teleport-template", !0),
        Qr.setAttribute("data-teleport-target", !0),
        ze._x_forwardEvents &&
            ze._x_forwardEvents.forEach((Zr) => {
                Qr.addEventListener(Zr, (ei) => {
                    ei.stopPropagation(), ze.dispatchEvent(new ei.constructor(ei.type, ei));
                });
            }),
        addScopeToNode(Qr, {}, ze);
    let Jr = (Zr, ei, ti) => {
        ti.includes("prepend") ? ei.parentNode.insertBefore(Zr, ei) : ti.includes("append") ? ei.parentNode.insertBefore(Zr, ei.nextSibling) : ei.appendChild(Zr);
    };
    mutateDom(() => {
        Jr(Qr, Yr, Gr),
            skipDuringClone(() => {
                initTree(Qr), (Qr._x_ignore = !0);
            })();
    }),
        (ze._x_teleportPutBack = () => {
            let Zr = getTarget(Wr);
            mutateDom(() => {
                Jr(ze._x_teleport, Zr, Gr);
            });
        }),
        Kr(() => Qr.remove());
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(ze) {
    let Gr = skipDuringClone(
        () => document.querySelector(ze),
        () => teleportContainerDuringClone
    )();
    return Gr || warn(`Cannot find x-teleport element for selector: "${ze}"`), Gr;
}
var handler = () => {};
handler.inline = (ze, { modifiers: Gr }, { cleanup: Wr }) => {
    Gr.includes("self") ? (ze._x_ignoreSelf = !0) : (ze._x_ignore = !0),
        Wr(() => {
            Gr.includes("self") ? delete ze._x_ignoreSelf : delete ze._x_ignore;
        });
};
directive("ignore", handler);
directive(
    "effect",
    skipDuringClone((ze, { expression: Gr }, { effect: Wr }) => {
        Wr(evaluateLater(ze, Gr));
    })
);
function on(ze, Gr, Wr, Kr) {
    let Yr = ze,
        Qr = (ei) => Kr(ei),
        Jr = {},
        Zr = (ei, ti) => (ri) => ti(ei, ri);
    if (
        (Wr.includes("dot") && (Gr = dotSyntax(Gr)),
        Wr.includes("camel") && (Gr = camelCase2(Gr)),
        Wr.includes("passive") && (Jr.passive = !0),
        Wr.includes("capture") && (Jr.capture = !0),
        Wr.includes("window") && (Yr = window),
        Wr.includes("document") && (Yr = document),
        Wr.includes("debounce"))
    ) {
        let ei = Wr[Wr.indexOf("debounce") + 1] || "invalid-wait",
            ti = isNumeric(ei.split("ms")[0]) ? Number(ei.split("ms")[0]) : 250;
        Qr = debounce(Qr, ti);
    }
    if (Wr.includes("throttle")) {
        let ei = Wr[Wr.indexOf("throttle") + 1] || "invalid-wait",
            ti = isNumeric(ei.split("ms")[0]) ? Number(ei.split("ms")[0]) : 250;
        Qr = throttle(Qr, ti);
    }
    return (
        Wr.includes("prevent") &&
            (Qr = Zr(Qr, (ei, ti) => {
                ti.preventDefault(), ei(ti);
            })),
        Wr.includes("stop") &&
            (Qr = Zr(Qr, (ei, ti) => {
                ti.stopPropagation(), ei(ti);
            })),
        Wr.includes("once") &&
            (Qr = Zr(Qr, (ei, ti) => {
                ei(ti), Yr.removeEventListener(Gr, Qr, Jr);
            })),
        (Wr.includes("away") || Wr.includes("outside")) &&
            ((Yr = document),
            (Qr = Zr(Qr, (ei, ti) => {
                ze.contains(ti.target) || (ti.target.isConnected !== !1 && ((ze.offsetWidth < 1 && ze.offsetHeight < 1) || (ze._x_isShown !== !1 && ei(ti))));
            }))),
        Wr.includes("self") &&
            (Qr = Zr(Qr, (ei, ti) => {
                ti.target === ze && ei(ti);
            })),
        (isKeyEvent(Gr) || isClickEvent(Gr)) &&
            (Qr = Zr(Qr, (ei, ti) => {
                isListeningForASpecificKeyThatHasntBeenPressed(ti, Wr) || ei(ti);
            })),
        Yr.addEventListener(Gr, Qr, Jr),
        () => {
            Yr.removeEventListener(Gr, Qr, Jr);
        }
    );
}
function dotSyntax(ze) {
    return ze.replace(/-/g, ".");
}
function camelCase2(ze) {
    return ze.toLowerCase().replace(/-(\w)/g, (Gr, Wr) => Wr.toUpperCase());
}
function isNumeric(ze) {
    return !Array.isArray(ze) && !isNaN(ze);
}
function kebabCase2(ze) {
    return [" ", "_"].includes(ze)
        ? ze
        : ze
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/[_\s]/, "-")
              .toLowerCase();
}
function isKeyEvent(ze) {
    return ["keydown", "keyup"].includes(ze);
}
function isClickEvent(ze) {
    return ["contextmenu", "click", "mouse"].some((Gr) => ze.includes(Gr));
}
function isListeningForASpecificKeyThatHasntBeenPressed(ze, Gr) {
    let Wr = Gr.filter((Qr) => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(Qr));
    if (Wr.includes("debounce")) {
        let Qr = Wr.indexOf("debounce");
        Wr.splice(Qr, isNumeric((Wr[Qr + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (Wr.includes("throttle")) {
        let Qr = Wr.indexOf("throttle");
        Wr.splice(Qr, isNumeric((Wr[Qr + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (Wr.length === 0 || (Wr.length === 1 && keyToModifiers(ze.key).includes(Wr[0]))) return !1;
    const Yr = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((Qr) => Wr.includes(Qr));
    return (
        (Wr = Wr.filter((Qr) => !Yr.includes(Qr))),
        !(Yr.length > 0 && Yr.filter((Jr) => ((Jr === "cmd" || Jr === "super") && (Jr = "meta"), ze[`${Jr}Key`])).length === Yr.length && (isClickEvent(ze.type) || keyToModifiers(ze.key).includes(Wr[0])))
    );
}
function keyToModifiers(ze) {
    if (!ze) return [];
    ze = kebabCase2(ze);
    let Gr = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        comma: ",",
        equal: "=",
        minus: "-",
        underscore: "_",
    };
    return (
        (Gr[ze] = ze),
        Object.keys(Gr)
            .map((Wr) => {
                if (Gr[Wr] === ze) return Wr;
            })
            .filter((Wr) => Wr)
    );
}
directive("model", (ze, { modifiers: Gr, expression: Wr }, { effect: Kr, cleanup: Yr }) => {
    let Qr = ze;
    Gr.includes("parent") && (Qr = ze.parentNode);
    let Jr = evaluateLater(Qr, Wr),
        Zr;
    typeof Wr == "string" ? (Zr = evaluateLater(Qr, `${Wr} = __placeholder`)) : typeof Wr == "function" && typeof Wr() == "string" ? (Zr = evaluateLater(Qr, `${Wr()} = __placeholder`)) : (Zr = () => {});
    let ei = () => {
            let ni;
            return Jr((si) => (ni = si)), isGetterSetter(ni) ? ni.get() : ni;
        },
        ti = (ni) => {
            let si;
            Jr((li) => (si = li)), isGetterSetter(si) ? si.set(ni) : Zr(() => {}, { scope: { __placeholder: ni } });
        };
    typeof Wr == "string" &&
        ze.type === "radio" &&
        mutateDom(() => {
            ze.hasAttribute("name") || ze.setAttribute("name", Wr);
        });
    var ri = ze.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(ze.type) || Gr.includes("lazy") ? "change" : "input";
    let ii = isCloning
        ? () => {}
        : on(ze, ri, Gr, (ni) => {
              ti(getInputValue(ze, Gr, ni, ei()));
          });
    if (
        (Gr.includes("fill") && ([void 0, null, ""].includes(ei()) || (ze.type === "checkbox" && Array.isArray(ei())) || (ze.tagName.toLowerCase() === "select" && ze.multiple)) && ti(getInputValue(ze, Gr, { target: ze }, ei())),
        ze._x_removeModelListeners || (ze._x_removeModelListeners = {}),
        (ze._x_removeModelListeners.default = ii),
        Yr(() => ze._x_removeModelListeners.default()),
        ze.form)
    ) {
        let ni = on(ze.form, "reset", [], (si) => {
            nextTick$1(() => ze._x_model && ze._x_model.set(getInputValue(ze, Gr, { target: ze }, ei())));
        });
        Yr(() => ni());
    }
    (ze._x_model = {
        get() {
            return ei();
        },
        set(ni) {
            ti(ni);
        },
    }),
        (ze._x_forceModelUpdate = (ni) => {
            ni === void 0 && typeof Wr == "string" && Wr.match(/\./) && (ni = ""), (window.fromModel = !0), mutateDom(() => bind(ze, "value", ni)), delete window.fromModel;
        }),
        Kr(() => {
            let ni = ei();
            (Gr.includes("unintrusive") && document.activeElement.isSameNode(ze)) || ze._x_forceModelUpdate(ni);
        });
});
function getInputValue(ze, Gr, Wr, Kr) {
    return mutateDom(() => {
        if (Wr instanceof CustomEvent && Wr.detail !== void 0) return Wr.detail !== null && Wr.detail !== void 0 ? Wr.detail : Wr.target.value;
        if (ze.type === "checkbox")
            if (Array.isArray(Kr)) {
                let Yr = null;
                return (
                    Gr.includes("number") ? (Yr = safeParseNumber(Wr.target.value)) : Gr.includes("boolean") ? (Yr = safeParseBoolean(Wr.target.value)) : (Yr = Wr.target.value),
                    Wr.target.checked ? (Kr.includes(Yr) ? Kr : Kr.concat([Yr])) : Kr.filter((Qr) => !checkedAttrLooseCompare2(Qr, Yr))
                );
            } else return Wr.target.checked;
        else {
            if (ze.tagName.toLowerCase() === "select" && ze.multiple)
                return Gr.includes("number")
                    ? Array.from(Wr.target.selectedOptions).map((Yr) => {
                          let Qr = Yr.value || Yr.text;
                          return safeParseNumber(Qr);
                      })
                    : Gr.includes("boolean")
                    ? Array.from(Wr.target.selectedOptions).map((Yr) => {
                          let Qr = Yr.value || Yr.text;
                          return safeParseBoolean(Qr);
                      })
                    : Array.from(Wr.target.selectedOptions).map((Yr) => Yr.value || Yr.text);
            {
                let Yr;
                return (
                    ze.type === "radio" ? (Wr.target.checked ? (Yr = Wr.target.value) : (Yr = Kr)) : (Yr = Wr.target.value),
                    Gr.includes("number") ? safeParseNumber(Yr) : Gr.includes("boolean") ? safeParseBoolean(Yr) : Gr.includes("trim") ? Yr.trim() : Yr
                );
            }
        }
    });
}
function safeParseNumber(ze) {
    let Gr = ze ? parseFloat(ze) : null;
    return isNumeric2(Gr) ? Gr : ze;
}
function checkedAttrLooseCompare2(ze, Gr) {
    return ze == Gr;
}
function isNumeric2(ze) {
    return !Array.isArray(ze) && !isNaN(ze);
}
function isGetterSetter(ze) {
    return ze !== null && typeof ze == "object" && typeof ze.get == "function" && typeof ze.set == "function";
}
directive("cloak", (ze) => queueMicrotask(() => mutateDom(() => ze.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive(
    "init",
    skipDuringClone((ze, { expression: Gr }, { evaluate: Wr }) => (typeof Gr == "string" ? !!Gr.trim() && Wr(Gr, {}, !1) : Wr(Gr, {}, !1)))
);
directive("text", (ze, { expression: Gr }, { effect: Wr, evaluateLater: Kr }) => {
    let Yr = Kr(Gr);
    Wr(() => {
        Yr((Qr) => {
            mutateDom(() => {
                ze.textContent = Qr;
            });
        });
    });
});
directive("html", (ze, { expression: Gr }, { effect: Wr, evaluateLater: Kr }) => {
    let Yr = Kr(Gr);
    Wr(() => {
        Yr((Qr) => {
            mutateDom(() => {
                (ze.innerHTML = Qr), (ze._x_ignoreSelf = !0), initTree(ze), delete ze._x_ignoreSelf;
            });
        });
    });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (ze, { value: Gr, modifiers: Wr, expression: Kr, original: Yr }, { effect: Qr, cleanup: Jr }) => {
    if (!Gr) {
        let ei = {};
        injectBindingProviders(ei),
            evaluateLater(ze, Kr)(
                (ri) => {
                    applyBindingsObject(ze, ri, Yr);
                },
                { scope: ei }
            );
        return;
    }
    if (Gr === "key") return storeKeyForXFor(ze, Kr);
    if (ze._x_inlineBindings && ze._x_inlineBindings[Gr] && ze._x_inlineBindings[Gr].extract) return;
    let Zr = evaluateLater(ze, Kr);
    Qr(() =>
        Zr((ei) => {
            ei === void 0 && typeof Kr == "string" && Kr.match(/\./) && (ei = ""), mutateDom(() => bind(ze, Gr, ei, Wr));
        })
    ),
        Jr(() => {
            ze._x_undoAddedClasses && ze._x_undoAddedClasses(), ze._x_undoAddedStyles && ze._x_undoAddedStyles();
        });
};
handler2.inline = (ze, { value: Gr, modifiers: Wr, expression: Kr }) => {
    Gr && (ze._x_inlineBindings || (ze._x_inlineBindings = {}), (ze._x_inlineBindings[Gr] = { expression: Kr, extract: !1 }));
};
directive("bind", handler2);
function storeKeyForXFor(ze, Gr) {
    ze._x_keyExpression = Gr;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (ze, { expression: Gr }, { cleanup: Wr }) => {
    if (shouldSkipRegisteringDataDuringClone(ze)) return;
    Gr = Gr === "" ? "{}" : Gr;
    let Kr = {};
    injectMagics(Kr, ze);
    let Yr = {};
    injectDataProviders(Yr, Kr);
    let Qr = evaluate(ze, Gr, { scope: Yr });
    (Qr === void 0 || Qr === !0) && (Qr = {}), injectMagics(Qr, ze);
    let Jr = reactive(Qr);
    initInterceptors(Jr);
    let Zr = addScopeToNode(ze, Jr);
    Jr.init && evaluate(ze, Jr.init),
        Wr(() => {
            Jr.destroy && evaluate(ze, Jr.destroy), Zr();
        });
});
interceptClone((ze, Gr) => {
    ze._x_dataStack && ((Gr._x_dataStack = ze._x_dataStack), Gr.setAttribute("data-has-alpine-state", !0));
});
function shouldSkipRegisteringDataDuringClone(ze) {
    return isCloning ? (isCloningLegacy ? !0 : ze.hasAttribute("data-has-alpine-state")) : !1;
}
directive("show", (ze, { modifiers: Gr, expression: Wr }, { effect: Kr }) => {
    let Yr = evaluateLater(ze, Wr);
    ze._x_doHide ||
        (ze._x_doHide = () => {
            mutateDom(() => {
                ze.style.setProperty("display", "none", Gr.includes("important") ? "important" : void 0);
            });
        }),
        ze._x_doShow ||
            (ze._x_doShow = () => {
                mutateDom(() => {
                    ze.style.length === 1 && ze.style.display === "none" ? ze.removeAttribute("style") : ze.style.removeProperty("display");
                });
            });
    let Qr = () => {
            ze._x_doHide(), (ze._x_isShown = !1);
        },
        Jr = () => {
            ze._x_doShow(), (ze._x_isShown = !0);
        },
        Zr = () => setTimeout(Jr),
        ei = once(
            (ii) => (ii ? Jr() : Qr()),
            (ii) => {
                typeof ze._x_toggleAndCascadeWithTransitions == "function" ? ze._x_toggleAndCascadeWithTransitions(ze, ii, Jr, Qr) : ii ? Zr() : Qr();
            }
        ),
        ti,
        ri = !0;
    Kr(() =>
        Yr((ii) => {
            (!ri && ii === ti) || (Gr.includes("immediate") && (ii ? Zr() : Qr()), ei(ii), (ti = ii), (ri = !1));
        })
    );
});
directive("for", (ze, { expression: Gr }, { effect: Wr, cleanup: Kr }) => {
    let Yr = parseForExpression(Gr),
        Qr = evaluateLater(ze, Yr.items),
        Jr = evaluateLater(ze, ze._x_keyExpression || "index");
    (ze._x_prevKeys = []),
        (ze._x_lookup = {}),
        Wr(() => loop$1(ze, Yr, Qr, Jr)),
        Kr(() => {
            Object.values(ze._x_lookup).forEach((Zr) => Zr.remove()), delete ze._x_prevKeys, delete ze._x_lookup;
        });
});
function loop$1(ze, Gr, Wr, Kr) {
    let Yr = (Jr) => typeof Jr == "object" && !Array.isArray(Jr),
        Qr = ze;
    Wr((Jr) => {
        isNumeric3(Jr) && Jr >= 0 && (Jr = Array.from(Array(Jr).keys(), (oi) => oi + 1)), Jr === void 0 && (Jr = []);
        let Zr = ze._x_lookup,
            ei = ze._x_prevKeys,
            ti = [],
            ri = [];
        if (Yr(Jr))
            Jr = Object.entries(Jr).map(([oi, ai]) => {
                let pi = getIterationScopeVariables(Gr, ai, oi, Jr);
                Kr(
                    (ci) => {
                        ri.includes(ci) && warn("Duplicate key on x-for", ze), ri.push(ci);
                    },
                    { scope: { index: oi, ...pi } }
                ),
                    ti.push(pi);
            });
        else
            for (let oi = 0; oi < Jr.length; oi++) {
                let ai = getIterationScopeVariables(Gr, Jr[oi], oi, Jr);
                Kr(
                    (pi) => {
                        ri.includes(pi) && warn("Duplicate key on x-for", ze), ri.push(pi);
                    },
                    { scope: { index: oi, ...ai } }
                ),
                    ti.push(ai);
            }
        let ii = [],
            ni = [],
            si = [],
            li = [];
        for (let oi = 0; oi < ei.length; oi++) {
            let ai = ei[oi];
            ri.indexOf(ai) === -1 && si.push(ai);
        }
        ei = ei.filter((oi) => !si.includes(oi));
        let ui = "template";
        for (let oi = 0; oi < ri.length; oi++) {
            let ai = ri[oi],
                pi = ei.indexOf(ai);
            if (pi === -1) ei.splice(oi, 0, ai), ii.push([ui, oi]);
            else if (pi !== oi) {
                let ci = ei.splice(oi, 1)[0],
                    hi = ei.splice(pi - 1, 1)[0];
                ei.splice(oi, 0, hi), ei.splice(pi, 0, ci), ni.push([ci, hi]);
            } else li.push(ai);
            ui = ai;
        }
        for (let oi = 0; oi < si.length; oi++) {
            let ai = si[oi];
            Zr[ai]._x_effects && Zr[ai]._x_effects.forEach(dequeueJob), Zr[ai].remove(), (Zr[ai] = null), delete Zr[ai];
        }
        for (let oi = 0; oi < ni.length; oi++) {
            let [ai, pi] = ni[oi],
                ci = Zr[ai],
                hi = Zr[pi],
                fi = document.createElement("div");
            mutateDom(() => {
                hi || warn('x-for ":key" is undefined or invalid', Qr, pi, Zr), hi.after(fi), ci.after(hi), hi._x_currentIfEl && hi.after(hi._x_currentIfEl), fi.before(ci), ci._x_currentIfEl && ci.after(ci._x_currentIfEl), fi.remove();
            }),
                hi._x_refreshXForScope(ti[ri.indexOf(pi)]);
        }
        for (let oi = 0; oi < ii.length; oi++) {
            let [ai, pi] = ii[oi],
                ci = ai === "template" ? Qr : Zr[ai];
            ci._x_currentIfEl && (ci = ci._x_currentIfEl);
            let hi = ti[pi],
                fi = ri[pi],
                vi = document.importNode(Qr.content, !0).firstElementChild,
                bi = reactive(hi);
            addScopeToNode(vi, bi, Qr),
                (vi._x_refreshXForScope = (yi) => {
                    Object.entries(yi).forEach(([Ei, di]) => {
                        bi[Ei] = di;
                    });
                }),
                mutateDom(() => {
                    ci.after(vi), skipDuringClone(() => initTree(vi))();
                }),
                typeof fi == "object" && warn("x-for key cannot be an object, it must be a string or an integer", Qr),
                (Zr[fi] = vi);
        }
        for (let oi = 0; oi < li.length; oi++) Zr[li[oi]]._x_refreshXForScope(ti[ri.indexOf(li[oi])]);
        Qr._x_prevKeys = ri;
    });
}
function parseForExpression(ze) {
    let Gr = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        Wr = /^\s*\(|\)\s*$/g,
        Kr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Yr = ze.match(Kr);
    if (!Yr) return;
    let Qr = {};
    Qr.items = Yr[2].trim();
    let Jr = Yr[1].replace(Wr, "").trim(),
        Zr = Jr.match(Gr);
    return Zr ? ((Qr.item = Jr.replace(Gr, "").trim()), (Qr.index = Zr[1].trim()), Zr[2] && (Qr.collection = Zr[2].trim())) : (Qr.item = Jr), Qr;
}
function getIterationScopeVariables(ze, Gr, Wr, Kr) {
    let Yr = {};
    return (
        /^\[.*\]$/.test(ze.item) && Array.isArray(Gr)
            ? ze.item
                  .replace("[", "")
                  .replace("]", "")
                  .split(",")
                  .map((Jr) => Jr.trim())
                  .forEach((Jr, Zr) => {
                      Yr[Jr] = Gr[Zr];
                  })
            : /^\{.*\}$/.test(ze.item) && !Array.isArray(Gr) && typeof Gr == "object"
            ? ze.item
                  .replace("{", "")
                  .replace("}", "")
                  .split(",")
                  .map((Jr) => Jr.trim())
                  .forEach((Jr) => {
                      Yr[Jr] = Gr[Jr];
                  })
            : (Yr[ze.item] = Gr),
        ze.index && (Yr[ze.index] = Wr),
        ze.collection && (Yr[ze.collection] = Kr),
        Yr
    );
}
function isNumeric3(ze) {
    return !Array.isArray(ze) && !isNaN(ze);
}
function handler3() {}
handler3.inline = (ze, { expression: Gr }, { cleanup: Wr }) => {
    let Kr = closestRoot(ze);
    Kr._x_refs || (Kr._x_refs = {}), (Kr._x_refs[Gr] = ze), Wr(() => delete Kr._x_refs[Gr]);
};
directive("ref", handler3);
directive("if", (ze, { expression: Gr }, { effect: Wr, cleanup: Kr }) => {
    ze.tagName.toLowerCase() !== "template" && warn("x-if can only be used on a <template> tag", ze);
    let Yr = evaluateLater(ze, Gr),
        Qr = () => {
            if (ze._x_currentIfEl) return ze._x_currentIfEl;
            let Zr = ze.content.cloneNode(!0).firstElementChild;
            return (
                addScopeToNode(Zr, {}, ze),
                mutateDom(() => {
                    ze.after(Zr), skipDuringClone(() => initTree(Zr))();
                }),
                (ze._x_currentIfEl = Zr),
                (ze._x_undoIf = () => {
                    walk(Zr, (ei) => {
                        ei._x_effects && ei._x_effects.forEach(dequeueJob);
                    }),
                        Zr.remove(),
                        delete ze._x_currentIfEl;
                }),
                Zr
            );
        },
        Jr = () => {
            ze._x_undoIf && (ze._x_undoIf(), delete ze._x_undoIf);
        };
    Wr(() =>
        Yr((Zr) => {
            Zr ? Qr() : Jr();
        })
    ),
        Kr(() => ze._x_undoIf && ze._x_undoIf());
});
directive("id", (ze, { expression: Gr }, { evaluate: Wr }) => {
    Wr(Gr).forEach((Yr) => setIdRoot(ze, Yr));
});
interceptClone((ze, Gr) => {
    ze._x_ids && (Gr._x_ids = ze._x_ids);
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive(
    "on",
    skipDuringClone((ze, { value: Gr, modifiers: Wr, expression: Kr }, { cleanup: Yr }) => {
        let Qr = Kr ? evaluateLater(ze, Kr) : () => {};
        ze.tagName.toLowerCase() === "template" && (ze._x_forwardEvents || (ze._x_forwardEvents = []), ze._x_forwardEvents.includes(Gr) || ze._x_forwardEvents.push(Gr));
        let Jr = on(ze, Gr, Wr, (Zr) => {
            Qr(() => {}, { scope: { $event: Zr }, params: [Zr] });
        });
        Yr(() => Jr());
    })
);
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(ze, Gr, Wr) {
    directive(Gr, (Kr) => warn(`You can't use [x-${Gr}] without first installing the "${ze}" plugin here: https://alpinejs.dev/plugins/${Wr}`, Kr));
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
var src_default = alpine_default,
    module_default = src_default;
function isObject$1(ze) {
    return ze !== null && typeof ze == "object" && "constructor" in ze && ze.constructor === Object;
}
function extend$1(ze, Gr) {
    ze === void 0 && (ze = {}),
        Gr === void 0 && (Gr = {}),
        Object.keys(Gr).forEach((Wr) => {
            typeof ze[Wr] > "u" ? (ze[Wr] = Gr[Wr]) : isObject$1(Gr[Wr]) && isObject$1(ze[Wr]) && Object.keys(Gr[Wr]).length > 0 && extend$1(ze[Wr], Gr[Wr]);
        });
}
const ssrDocument = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return { initEvent() {} };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
};
function getDocument() {
    const ze = typeof document < "u" ? document : {};
    return extend$1(ze, ssrDocument), ze;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: { userAgent: "" },
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function ze() {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return "";
            },
        };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {};
    },
    requestAnimationFrame(ze) {
        return typeof setTimeout > "u" ? (ze(), null) : setTimeout(ze, 0);
    },
    cancelAnimationFrame(ze) {
        typeof setTimeout > "u" || clearTimeout(ze);
    },
};
function getWindow() {
    const ze = typeof window < "u" ? window : {};
    return extend$1(ze, ssrWindow), ze;
}
function classesToTokens(ze) {
    return (
        ze === void 0 && (ze = ""),
        ze
            .trim()
            .split(" ")
            .filter((Gr) => !!Gr.trim())
    );
}
function deleteProps(ze) {
    const Gr = ze;
    Object.keys(Gr).forEach((Wr) => {
        try {
            Gr[Wr] = null;
        } catch {}
        try {
            delete Gr[Wr];
        } catch {}
    });
}
function nextTick(ze, Gr) {
    return Gr === void 0 && (Gr = 0), setTimeout(ze, Gr);
}
function now() {
    return Date.now();
}
function getComputedStyle$1(ze) {
    const Gr = getWindow();
    let Wr;
    return Gr.getComputedStyle && (Wr = Gr.getComputedStyle(ze, null)), !Wr && ze.currentStyle && (Wr = ze.currentStyle), Wr || (Wr = ze.style), Wr;
}
function getTranslate(ze, Gr) {
    Gr === void 0 && (Gr = "x");
    const Wr = getWindow();
    let Kr, Yr, Qr;
    const Jr = getComputedStyle$1(ze);
    return (
        Wr.WebKitCSSMatrix
            ? ((Yr = Jr.transform || Jr.webkitTransform),
              Yr.split(",").length > 6 &&
                  (Yr = Yr.split(", ")
                      .map((Zr) => Zr.replace(",", "."))
                      .join(", ")),
              (Qr = new Wr.WebKitCSSMatrix(Yr === "none" ? "" : Yr)))
            : ((Qr = Jr.MozTransform || Jr.OTransform || Jr.MsTransform || Jr.msTransform || Jr.transform || Jr.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (Kr = Qr.toString().split(","))),
        Gr === "x" && (Wr.WebKitCSSMatrix ? (Yr = Qr.m41) : Kr.length === 16 ? (Yr = parseFloat(Kr[12])) : (Yr = parseFloat(Kr[4]))),
        Gr === "y" && (Wr.WebKitCSSMatrix ? (Yr = Qr.m42) : Kr.length === 16 ? (Yr = parseFloat(Kr[13])) : (Yr = parseFloat(Kr[5]))),
        Yr || 0
    );
}
function isObject(ze) {
    return typeof ze == "object" && ze !== null && ze.constructor && Object.prototype.toString.call(ze).slice(8, -1) === "Object";
}
function isNode(ze) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? ze instanceof HTMLElement : ze && (ze.nodeType === 1 || ze.nodeType === 11);
}
function extend() {
    const ze = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        Gr = ["__proto__", "constructor", "prototype"];
    for (let Wr = 1; Wr < arguments.length; Wr += 1) {
        const Kr = Wr < 0 || arguments.length <= Wr ? void 0 : arguments[Wr];
        if (Kr != null && !isNode(Kr)) {
            const Yr = Object.keys(Object(Kr)).filter((Qr) => Gr.indexOf(Qr) < 0);
            for (let Qr = 0, Jr = Yr.length; Qr < Jr; Qr += 1) {
                const Zr = Yr[Qr],
                    ei = Object.getOwnPropertyDescriptor(Kr, Zr);
                ei !== void 0 &&
                    ei.enumerable &&
                    (isObject(ze[Zr]) && isObject(Kr[Zr])
                        ? Kr[Zr].__swiper__
                            ? (ze[Zr] = Kr[Zr])
                            : extend(ze[Zr], Kr[Zr])
                        : !isObject(ze[Zr]) && isObject(Kr[Zr])
                        ? ((ze[Zr] = {}), Kr[Zr].__swiper__ ? (ze[Zr] = Kr[Zr]) : extend(ze[Zr], Kr[Zr]))
                        : (ze[Zr] = Kr[Zr]));
            }
        }
    }
    return ze;
}
function setCSSProperty(ze, Gr, Wr) {
    ze.style.setProperty(Gr, Wr);
}
function animateCSSModeScroll(ze) {
    let { swiper: Gr, targetPosition: Wr, side: Kr } = ze;
    const Yr = getWindow(),
        Qr = -Gr.translate;
    let Jr = null,
        Zr;
    const ei = Gr.params.speed;
    (Gr.wrapperEl.style.scrollSnapType = "none"), Yr.cancelAnimationFrame(Gr.cssModeFrameID);
    const ti = Wr > Qr ? "next" : "prev",
        ri = (ni, si) => (ti === "next" && ni >= si) || (ti === "prev" && ni <= si),
        ii = () => {
            (Zr = new Date().getTime()), Jr === null && (Jr = Zr);
            const ni = Math.max(Math.min((Zr - Jr) / ei, 1), 0),
                si = 0.5 - Math.cos(ni * Math.PI) / 2;
            let li = Qr + si * (Wr - Qr);
            if ((ri(li, Wr) && (li = Wr), Gr.wrapperEl.scrollTo({ [Kr]: li }), ri(li, Wr))) {
                (Gr.wrapperEl.style.overflow = "hidden"),
                    (Gr.wrapperEl.style.scrollSnapType = ""),
                    setTimeout(() => {
                        (Gr.wrapperEl.style.overflow = ""), Gr.wrapperEl.scrollTo({ [Kr]: li });
                    }),
                    Yr.cancelAnimationFrame(Gr.cssModeFrameID);
                return;
            }
            Gr.cssModeFrameID = Yr.requestAnimationFrame(ii);
        };
    ii();
}
function elementChildren(ze, Gr) {
    Gr === void 0 && (Gr = "");
    const Wr = [...ze.children];
    return ze instanceof HTMLSlotElement && Wr.push(...ze.assignedElements()), Gr ? Wr.filter((Kr) => Kr.matches(Gr)) : Wr;
}
function elementIsChildOf(ze, Gr) {
    const Wr = Gr.contains(ze);
    return !Wr && Gr instanceof HTMLSlotElement ? [...Gr.assignedElements()].includes(ze) : Wr;
}
function showWarning(ze) {
    try {
        console.warn(ze);
        return;
    } catch {}
}
function createElement(ze, Gr) {
    Gr === void 0 && (Gr = []);
    const Wr = document.createElement(ze);
    return Wr.classList.add(...(Array.isArray(Gr) ? Gr : classesToTokens(Gr))), Wr;
}
function elementPrevAll(ze, Gr) {
    const Wr = [];
    for (; ze.previousElementSibling; ) {
        const Kr = ze.previousElementSibling;
        Gr ? Kr.matches(Gr) && Wr.push(Kr) : Wr.push(Kr), (ze = Kr);
    }
    return Wr;
}
function elementNextAll(ze, Gr) {
    const Wr = [];
    for (; ze.nextElementSibling; ) {
        const Kr = ze.nextElementSibling;
        Gr ? Kr.matches(Gr) && Wr.push(Kr) : Wr.push(Kr), (ze = Kr);
    }
    return Wr;
}
function elementStyle(ze, Gr) {
    return getWindow().getComputedStyle(ze, null).getPropertyValue(Gr);
}
function elementIndex(ze) {
    let Gr = ze,
        Wr;
    if (Gr) {
        for (Wr = 0; (Gr = Gr.previousSibling) !== null; ) Gr.nodeType === 1 && (Wr += 1);
        return Wr;
    }
}
function elementParents(ze, Gr) {
    const Wr = [];
    let Kr = ze.parentElement;
    for (; Kr; ) Wr.push(Kr), (Kr = Kr.parentElement);
    return Wr;
}
function elementOuterSize(ze, Gr, Wr) {
    const Kr = getWindow();
    return (
        ze[Gr === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(Kr.getComputedStyle(ze, null).getPropertyValue(Gr === "width" ? "margin-right" : "margin-top")) +
        parseFloat(Kr.getComputedStyle(ze, null).getPropertyValue(Gr === "width" ? "margin-left" : "margin-bottom"))
    );
}
let support;
function calcSupport() {
    const ze = getWindow(),
        Gr = getDocument();
    return { smoothScroll: Gr.documentElement && Gr.documentElement.style && "scrollBehavior" in Gr.documentElement.style, touch: !!("ontouchstart" in ze || (ze.DocumentTouch && Gr instanceof ze.DocumentTouch)) };
}
function getSupport() {
    return support || (support = calcSupport()), support;
}
let deviceCached;
function calcDevice(ze) {
    let { userAgent: Gr } = ze === void 0 ? {} : ze;
    const Wr = getSupport(),
        Kr = getWindow(),
        Yr = Kr.navigator.platform,
        Qr = Gr || Kr.navigator.userAgent,
        Jr = { ios: !1, android: !1 },
        Zr = Kr.screen.width,
        ei = Kr.screen.height,
        ti = Qr.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ri = Qr.match(/(iPad).*OS\s([\d_]+)/);
    const ii = Qr.match(/(iPod)(.*OS\s([\d_]+))?/),
        ni = !ri && Qr.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        si = Yr === "Win32";
    let li = Yr === "MacIntel";
    const ui = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return (
        !ri && li && Wr.touch && ui.indexOf(`${Zr}x${ei}`) >= 0 && ((ri = Qr.match(/(Version)\/([\d.]+)/)), ri || (ri = [0, 1, "13_0_0"]), (li = !1)),
        ti && !si && ((Jr.os = "android"), (Jr.android = !0)),
        (ri || ni || ii) && ((Jr.os = "ios"), (Jr.ios = !0)),
        Jr
    );
}
function getDevice(ze) {
    return ze === void 0 && (ze = {}), deviceCached || (deviceCached = calcDevice(ze)), deviceCached;
}
let browser;
function calcBrowser() {
    const ze = getWindow(),
        Gr = getDevice();
    let Wr = !1;
    function Kr() {
        const Zr = ze.navigator.userAgent.toLowerCase();
        return Zr.indexOf("safari") >= 0 && Zr.indexOf("chrome") < 0 && Zr.indexOf("android") < 0;
    }
    if (Kr()) {
        const Zr = String(ze.navigator.userAgent);
        if (Zr.includes("Version/")) {
            const [ei, ti] = Zr.split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((ri) => Number(ri));
            Wr = ei < 16 || (ei === 16 && ti < 2);
        }
    }
    const Yr = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ze.navigator.userAgent),
        Qr = Kr(),
        Jr = Qr || (Yr && Gr.ios);
    return { isSafari: Wr || Qr, needPerspectiveFix: Wr, need3dFix: Jr, isWebView: Yr };
}
function getBrowser() {
    return browser || (browser = calcBrowser()), browser;
}
function Resize(ze) {
    let { swiper: Gr, on: Wr, emit: Kr } = ze;
    const Yr = getWindow();
    let Qr = null,
        Jr = null;
    const Zr = () => {
            !Gr || Gr.destroyed || !Gr.initialized || (Kr("beforeResize"), Kr("resize"));
        },
        ei = () => {
            !Gr ||
                Gr.destroyed ||
                !Gr.initialized ||
                ((Qr = new ResizeObserver((ii) => {
                    Jr = Yr.requestAnimationFrame(() => {
                        const { width: ni, height: si } = Gr;
                        let li = ni,
                            ui = si;
                        ii.forEach((oi) => {
                            let { contentBoxSize: ai, contentRect: pi, target: ci } = oi;
                            (ci && ci !== Gr.el) || ((li = pi ? pi.width : (ai[0] || ai).inlineSize), (ui = pi ? pi.height : (ai[0] || ai).blockSize));
                        }),
                            (li !== ni || ui !== si) && Zr();
                    });
                })),
                Qr.observe(Gr.el));
        },
        ti = () => {
            Jr && Yr.cancelAnimationFrame(Jr), Qr && Qr.unobserve && Gr.el && (Qr.unobserve(Gr.el), (Qr = null));
        },
        ri = () => {
            !Gr || Gr.destroyed || !Gr.initialized || Kr("orientationchange");
        };
    Wr("init", () => {
        if (Gr.params.resizeObserver && typeof Yr.ResizeObserver < "u") {
            ei();
            return;
        }
        Yr.addEventListener("resize", Zr), Yr.addEventListener("orientationchange", ri);
    }),
        Wr("destroy", () => {
            ti(), Yr.removeEventListener("resize", Zr), Yr.removeEventListener("orientationchange", ri);
        });
}
function Observer(ze) {
    let { swiper: Gr, extendParams: Wr, on: Kr, emit: Yr } = ze;
    const Qr = [],
        Jr = getWindow(),
        Zr = function (ri, ii) {
            ii === void 0 && (ii = {});
            const ni = Jr.MutationObserver || Jr.WebkitMutationObserver,
                si = new ni((li) => {
                    if (Gr.__preventObserver__) return;
                    if (li.length === 1) {
                        Yr("observerUpdate", li[0]);
                        return;
                    }
                    const ui = function () {
                        Yr("observerUpdate", li[0]);
                    };
                    Jr.requestAnimationFrame ? Jr.requestAnimationFrame(ui) : Jr.setTimeout(ui, 0);
                });
            si.observe(ri, { attributes: typeof ii.attributes > "u" ? !0 : ii.attributes, childList: Gr.isElement || (typeof ii.childList > "u" ? !0 : ii).childList, characterData: typeof ii.characterData > "u" ? !0 : ii.characterData }),
                Qr.push(si);
        },
        ei = () => {
            if (Gr.params.observer) {
                if (Gr.params.observeParents) {
                    const ri = elementParents(Gr.hostEl);
                    for (let ii = 0; ii < ri.length; ii += 1) Zr(ri[ii]);
                }
                Zr(Gr.hostEl, { childList: Gr.params.observeSlideChildren }), Zr(Gr.wrapperEl, { attributes: !1 });
            }
        },
        ti = () => {
            Qr.forEach((ri) => {
                ri.disconnect();
            }),
                Qr.splice(0, Qr.length);
        };
    Wr({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), Kr("init", ei), Kr("destroy", ti);
}
var eventsEmitter = {
    on(ze, Gr, Wr) {
        const Kr = this;
        if (!Kr.eventsListeners || Kr.destroyed || typeof Gr != "function") return Kr;
        const Yr = Wr ? "unshift" : "push";
        return (
            ze.split(" ").forEach((Qr) => {
                Kr.eventsListeners[Qr] || (Kr.eventsListeners[Qr] = []), Kr.eventsListeners[Qr][Yr](Gr);
            }),
            Kr
        );
    },
    once(ze, Gr, Wr) {
        const Kr = this;
        if (!Kr.eventsListeners || Kr.destroyed || typeof Gr != "function") return Kr;
        function Yr() {
            Kr.off(ze, Yr), Yr.__emitterProxy && delete Yr.__emitterProxy;
            for (var Qr = arguments.length, Jr = new Array(Qr), Zr = 0; Zr < Qr; Zr++) Jr[Zr] = arguments[Zr];
            Gr.apply(Kr, Jr);
        }
        return (Yr.__emitterProxy = Gr), Kr.on(ze, Yr, Wr);
    },
    onAny(ze, Gr) {
        const Wr = this;
        if (!Wr.eventsListeners || Wr.destroyed || typeof ze != "function") return Wr;
        const Kr = Gr ? "unshift" : "push";
        return Wr.eventsAnyListeners.indexOf(ze) < 0 && Wr.eventsAnyListeners[Kr](ze), Wr;
    },
    offAny(ze) {
        const Gr = this;
        if (!Gr.eventsListeners || Gr.destroyed || !Gr.eventsAnyListeners) return Gr;
        const Wr = Gr.eventsAnyListeners.indexOf(ze);
        return Wr >= 0 && Gr.eventsAnyListeners.splice(Wr, 1), Gr;
    },
    off(ze, Gr) {
        const Wr = this;
        return (
            !Wr.eventsListeners ||
                Wr.destroyed ||
                !Wr.eventsListeners ||
                ze.split(" ").forEach((Kr) => {
                    typeof Gr > "u"
                        ? (Wr.eventsListeners[Kr] = [])
                        : Wr.eventsListeners[Kr] &&
                          Wr.eventsListeners[Kr].forEach((Yr, Qr) => {
                              (Yr === Gr || (Yr.__emitterProxy && Yr.__emitterProxy === Gr)) && Wr.eventsListeners[Kr].splice(Qr, 1);
                          });
                }),
            Wr
        );
    },
    emit() {
        const ze = this;
        if (!ze.eventsListeners || ze.destroyed || !ze.eventsListeners) return ze;
        let Gr, Wr, Kr;
        for (var Yr = arguments.length, Qr = new Array(Yr), Jr = 0; Jr < Yr; Jr++) Qr[Jr] = arguments[Jr];
        return (
            typeof Qr[0] == "string" || Array.isArray(Qr[0]) ? ((Gr = Qr[0]), (Wr = Qr.slice(1, Qr.length)), (Kr = ze)) : ((Gr = Qr[0].events), (Wr = Qr[0].data), (Kr = Qr[0].context || ze)),
            Wr.unshift(Kr),
            (Array.isArray(Gr) ? Gr : Gr.split(" ")).forEach((ei) => {
                ze.eventsAnyListeners &&
                    ze.eventsAnyListeners.length &&
                    ze.eventsAnyListeners.forEach((ti) => {
                        ti.apply(Kr, [ei, ...Wr]);
                    }),
                    ze.eventsListeners &&
                        ze.eventsListeners[ei] &&
                        ze.eventsListeners[ei].forEach((ti) => {
                            ti.apply(Kr, Wr);
                        });
            }),
            ze
        );
    },
};
function updateSize() {
    const ze = this;
    let Gr, Wr;
    const Kr = ze.el;
    typeof ze.params.width < "u" && ze.params.width !== null ? (Gr = ze.params.width) : (Gr = Kr.clientWidth),
        typeof ze.params.height < "u" && ze.params.height !== null ? (Wr = ze.params.height) : (Wr = Kr.clientHeight),
        !((Gr === 0 && ze.isHorizontal()) || (Wr === 0 && ze.isVertical())) &&
            ((Gr = Gr - parseInt(elementStyle(Kr, "padding-left") || 0, 10) - parseInt(elementStyle(Kr, "padding-right") || 0, 10)),
            (Wr = Wr - parseInt(elementStyle(Kr, "padding-top") || 0, 10) - parseInt(elementStyle(Kr, "padding-bottom") || 0, 10)),
            Number.isNaN(Gr) && (Gr = 0),
            Number.isNaN(Wr) && (Wr = 0),
            Object.assign(ze, { width: Gr, height: Wr, size: ze.isHorizontal() ? Gr : Wr }));
}
function updateSlides() {
    const ze = this;
    function Gr(di, mi) {
        return parseFloat(di.getPropertyValue(ze.getDirectionLabel(mi)) || 0);
    }
    const Wr = ze.params,
        { wrapperEl: Kr, slidesEl: Yr, size: Qr, rtlTranslate: Jr, wrongRTL: Zr } = ze,
        ei = ze.virtual && Wr.virtual.enabled,
        ti = ei ? ze.virtual.slides.length : ze.slides.length,
        ri = elementChildren(Yr, `.${ze.params.slideClass}, swiper-slide`),
        ii = ei ? ze.virtual.slides.length : ri.length;
    let ni = [];
    const si = [],
        li = [];
    let ui = Wr.slidesOffsetBefore;
    typeof ui == "function" && (ui = Wr.slidesOffsetBefore.call(ze));
    let oi = Wr.slidesOffsetAfter;
    typeof oi == "function" && (oi = Wr.slidesOffsetAfter.call(ze));
    const ai = ze.snapGrid.length,
        pi = ze.slidesGrid.length;
    let ci = Wr.spaceBetween,
        hi = -ui,
        fi = 0,
        vi = 0;
    if (typeof Qr > "u") return;
    typeof ci == "string" && ci.indexOf("%") >= 0 ? (ci = (parseFloat(ci.replace("%", "")) / 100) * Qr) : typeof ci == "string" && (ci = parseFloat(ci)),
        (ze.virtualSize = -ci),
        ri.forEach((di) => {
            Jr ? (di.style.marginLeft = "") : (di.style.marginRight = ""), (di.style.marginBottom = ""), (di.style.marginTop = "");
        }),
        Wr.centeredSlides && Wr.cssMode && (setCSSProperty(Kr, "--swiper-centered-offset-before", ""), setCSSProperty(Kr, "--swiper-centered-offset-after", ""));
    const bi = Wr.grid && Wr.grid.rows > 1 && ze.grid;
    bi ? ze.grid.initSlides(ri) : ze.grid && ze.grid.unsetSlides();
    let yi;
    const Ei = Wr.slidesPerView === "auto" && Wr.breakpoints && Object.keys(Wr.breakpoints).filter((di) => typeof Wr.breakpoints[di].slidesPerView < "u").length > 0;
    for (let di = 0; di < ii; di += 1) {
        yi = 0;
        let mi;
        if ((ri[di] && (mi = ri[di]), bi && ze.grid.updateSlide(di, mi, ri), !(ri[di] && elementStyle(mi, "display") === "none"))) {
            if (Wr.slidesPerView === "auto") {
                Ei && (ri[di].style[ze.getDirectionLabel("width")] = "");
                const wi = getComputedStyle(mi),
                    gi = mi.style.transform,
                    Ti = mi.style.webkitTransform;
                if ((gi && (mi.style.transform = "none"), Ti && (mi.style.webkitTransform = "none"), Wr.roundLengths)) yi = ze.isHorizontal() ? elementOuterSize(mi, "width") : elementOuterSize(mi, "height");
                else {
                    const xi = Gr(wi, "width"),
                        Mi = Gr(wi, "padding-left"),
                        _i = Gr(wi, "padding-right"),
                        Si = Gr(wi, "margin-left"),
                        Ai = Gr(wi, "margin-right"),
                        Ci = wi.getPropertyValue("box-sizing");
                    if (Ci && Ci === "border-box") yi = xi + Si + Ai;
                    else {
                        const { clientWidth: Oi, offsetWidth: Li } = mi;
                        yi = xi + Mi + _i + Si + Ai + (Li - Oi);
                    }
                }
                gi && (mi.style.transform = gi), Ti && (mi.style.webkitTransform = Ti), Wr.roundLengths && (yi = Math.floor(yi));
            } else (yi = (Qr - (Wr.slidesPerView - 1) * ci) / Wr.slidesPerView), Wr.roundLengths && (yi = Math.floor(yi)), ri[di] && (ri[di].style[ze.getDirectionLabel("width")] = `${yi}px`);
            ri[di] && (ri[di].swiperSlideSize = yi),
                li.push(yi),
                Wr.centeredSlides
                    ? ((hi = hi + yi / 2 + fi / 2 + ci),
                      fi === 0 && di !== 0 && (hi = hi - Qr / 2 - ci),
                      di === 0 && (hi = hi - Qr / 2 - ci),
                      Math.abs(hi) < 1 / 1e3 && (hi = 0),
                      Wr.roundLengths && (hi = Math.floor(hi)),
                      vi % Wr.slidesPerGroup === 0 && ni.push(hi),
                      si.push(hi))
                    : (Wr.roundLengths && (hi = Math.floor(hi)), (vi - Math.min(ze.params.slidesPerGroupSkip, vi)) % ze.params.slidesPerGroup === 0 && ni.push(hi), si.push(hi), (hi = hi + yi + ci)),
                (ze.virtualSize += yi + ci),
                (fi = yi),
                (vi += 1);
        }
    }
    if (
        ((ze.virtualSize = Math.max(ze.virtualSize, Qr) + oi),
        Jr && Zr && (Wr.effect === "slide" || Wr.effect === "coverflow") && (Kr.style.width = `${ze.virtualSize + ci}px`),
        Wr.setWrapperSize && (Kr.style[ze.getDirectionLabel("width")] = `${ze.virtualSize + ci}px`),
        bi && ze.grid.updateWrapperSize(yi, ni),
        !Wr.centeredSlides)
    ) {
        const di = [];
        for (let mi = 0; mi < ni.length; mi += 1) {
            let wi = ni[mi];
            Wr.roundLengths && (wi = Math.floor(wi)), ni[mi] <= ze.virtualSize - Qr && di.push(wi);
        }
        (ni = di), Math.floor(ze.virtualSize - Qr) - Math.floor(ni[ni.length - 1]) > 1 && ni.push(ze.virtualSize - Qr);
    }
    if (ei && Wr.loop) {
        const di = li[0] + ci;
        if (Wr.slidesPerGroup > 1) {
            const mi = Math.ceil((ze.virtual.slidesBefore + ze.virtual.slidesAfter) / Wr.slidesPerGroup),
                wi = di * Wr.slidesPerGroup;
            for (let gi = 0; gi < mi; gi += 1) ni.push(ni[ni.length - 1] + wi);
        }
        for (let mi = 0; mi < ze.virtual.slidesBefore + ze.virtual.slidesAfter; mi += 1) Wr.slidesPerGroup === 1 && ni.push(ni[ni.length - 1] + di), si.push(si[si.length - 1] + di), (ze.virtualSize += di);
    }
    if ((ni.length === 0 && (ni = [0]), ci !== 0)) {
        const di = ze.isHorizontal() && Jr ? "marginLeft" : ze.getDirectionLabel("marginRight");
        ri.filter((mi, wi) => (!Wr.cssMode || Wr.loop ? !0 : wi !== ri.length - 1)).forEach((mi) => {
            mi.style[di] = `${ci}px`;
        });
    }
    if (Wr.centeredSlides && Wr.centeredSlidesBounds) {
        let di = 0;
        li.forEach((wi) => {
            di += wi + (ci || 0);
        }),
            (di -= ci);
        const mi = di > Qr ? di - Qr : 0;
        ni = ni.map((wi) => (wi <= 0 ? -ui : wi > mi ? mi + oi : wi));
    }
    if (Wr.centerInsufficientSlides) {
        let di = 0;
        li.forEach((wi) => {
            di += wi + (ci || 0);
        }),
            (di -= ci);
        const mi = (Wr.slidesOffsetBefore || 0) + (Wr.slidesOffsetAfter || 0);
        if (di + mi < Qr) {
            const wi = (Qr - di - mi) / 2;
            ni.forEach((gi, Ti) => {
                ni[Ti] = gi - wi;
            }),
                si.forEach((gi, Ti) => {
                    si[Ti] = gi + wi;
                });
        }
    }
    if ((Object.assign(ze, { slides: ri, snapGrid: ni, slidesGrid: si, slidesSizesGrid: li }), Wr.centeredSlides && Wr.cssMode && !Wr.centeredSlidesBounds)) {
        setCSSProperty(Kr, "--swiper-centered-offset-before", `${-ni[0]}px`), setCSSProperty(Kr, "--swiper-centered-offset-after", `${ze.size / 2 - li[li.length - 1] / 2}px`);
        const di = -ze.snapGrid[0],
            mi = -ze.slidesGrid[0];
        (ze.snapGrid = ze.snapGrid.map((wi) => wi + di)), (ze.slidesGrid = ze.slidesGrid.map((wi) => wi + mi));
    }
    if (
        (ii !== ti && ze.emit("slidesLengthChange"),
        ni.length !== ai && (ze.params.watchOverflow && ze.checkOverflow(), ze.emit("snapGridLengthChange")),
        si.length !== pi && ze.emit("slidesGridLengthChange"),
        Wr.watchSlidesProgress && ze.updateSlidesOffset(),
        ze.emit("slidesUpdated"),
        !ei && !Wr.cssMode && (Wr.effect === "slide" || Wr.effect === "fade"))
    ) {
        const di = `${Wr.containerModifierClass}backface-hidden`,
            mi = ze.el.classList.contains(di);
        ii <= Wr.maxBackfaceHiddenSlides ? mi || ze.el.classList.add(di) : mi && ze.el.classList.remove(di);
    }
}
function updateAutoHeight(ze) {
    const Gr = this,
        Wr = [],
        Kr = Gr.virtual && Gr.params.virtual.enabled;
    let Yr = 0,
        Qr;
    typeof ze == "number" ? Gr.setTransition(ze) : ze === !0 && Gr.setTransition(Gr.params.speed);
    const Jr = (Zr) => (Kr ? Gr.slides[Gr.getSlideIndexByData(Zr)] : Gr.slides[Zr]);
    if (Gr.params.slidesPerView !== "auto" && Gr.params.slidesPerView > 1)
        if (Gr.params.centeredSlides)
            (Gr.visibleSlides || []).forEach((Zr) => {
                Wr.push(Zr);
            });
        else
            for (Qr = 0; Qr < Math.ceil(Gr.params.slidesPerView); Qr += 1) {
                const Zr = Gr.activeIndex + Qr;
                if (Zr > Gr.slides.length && !Kr) break;
                Wr.push(Jr(Zr));
            }
    else Wr.push(Jr(Gr.activeIndex));
    for (Qr = 0; Qr < Wr.length; Qr += 1)
        if (typeof Wr[Qr] < "u") {
            const Zr = Wr[Qr].offsetHeight;
            Yr = Zr > Yr ? Zr : Yr;
        }
    (Yr || Yr === 0) && (Gr.wrapperEl.style.height = `${Yr}px`);
}
function updateSlidesOffset() {
    const ze = this,
        Gr = ze.slides,
        Wr = ze.isElement ? (ze.isHorizontal() ? ze.wrapperEl.offsetLeft : ze.wrapperEl.offsetTop) : 0;
    for (let Kr = 0; Kr < Gr.length; Kr += 1) Gr[Kr].swiperSlideOffset = (ze.isHorizontal() ? Gr[Kr].offsetLeft : Gr[Kr].offsetTop) - Wr - ze.cssOverflowAdjustment();
}
const toggleSlideClasses$1 = (ze, Gr, Wr) => {
    Gr && !ze.classList.contains(Wr) ? ze.classList.add(Wr) : !Gr && ze.classList.contains(Wr) && ze.classList.remove(Wr);
};
function updateSlidesProgress(ze) {
    ze === void 0 && (ze = (this && this.translate) || 0);
    const Gr = this,
        Wr = Gr.params,
        { slides: Kr, rtlTranslate: Yr, snapGrid: Qr } = Gr;
    if (Kr.length === 0) return;
    typeof Kr[0].swiperSlideOffset > "u" && Gr.updateSlidesOffset();
    let Jr = -ze;
    Yr && (Jr = ze), (Gr.visibleSlidesIndexes = []), (Gr.visibleSlides = []);
    let Zr = Wr.spaceBetween;
    typeof Zr == "string" && Zr.indexOf("%") >= 0 ? (Zr = (parseFloat(Zr.replace("%", "")) / 100) * Gr.size) : typeof Zr == "string" && (Zr = parseFloat(Zr));
    for (let ei = 0; ei < Kr.length; ei += 1) {
        const ti = Kr[ei];
        let ri = ti.swiperSlideOffset;
        Wr.cssMode && Wr.centeredSlides && (ri -= Kr[0].swiperSlideOffset);
        const ii = (Jr + (Wr.centeredSlides ? Gr.minTranslate() : 0) - ri) / (ti.swiperSlideSize + Zr),
            ni = (Jr - Qr[0] + (Wr.centeredSlides ? Gr.minTranslate() : 0) - ri) / (ti.swiperSlideSize + Zr),
            si = -(Jr - ri),
            li = si + Gr.slidesSizesGrid[ei],
            ui = si >= 0 && si <= Gr.size - Gr.slidesSizesGrid[ei],
            oi = (si >= 0 && si < Gr.size - 1) || (li > 1 && li <= Gr.size) || (si <= 0 && li >= Gr.size);
        oi && (Gr.visibleSlides.push(ti), Gr.visibleSlidesIndexes.push(ei)),
            toggleSlideClasses$1(ti, oi, Wr.slideVisibleClass),
            toggleSlideClasses$1(ti, ui, Wr.slideFullyVisibleClass),
            (ti.progress = Yr ? -ii : ii),
            (ti.originalProgress = Yr ? -ni : ni);
    }
}
function updateProgress(ze) {
    const Gr = this;
    if (typeof ze > "u") {
        const ri = Gr.rtlTranslate ? -1 : 1;
        ze = (Gr && Gr.translate && Gr.translate * ri) || 0;
    }
    const Wr = Gr.params,
        Kr = Gr.maxTranslate() - Gr.minTranslate();
    let { progress: Yr, isBeginning: Qr, isEnd: Jr, progressLoop: Zr } = Gr;
    const ei = Qr,
        ti = Jr;
    if (Kr === 0) (Yr = 0), (Qr = !0), (Jr = !0);
    else {
        Yr = (ze - Gr.minTranslate()) / Kr;
        const ri = Math.abs(ze - Gr.minTranslate()) < 1,
            ii = Math.abs(ze - Gr.maxTranslate()) < 1;
        (Qr = ri || Yr <= 0), (Jr = ii || Yr >= 1), ri && (Yr = 0), ii && (Yr = 1);
    }
    if (Wr.loop) {
        const ri = Gr.getSlideIndexByData(0),
            ii = Gr.getSlideIndexByData(Gr.slides.length - 1),
            ni = Gr.slidesGrid[ri],
            si = Gr.slidesGrid[ii],
            li = Gr.slidesGrid[Gr.slidesGrid.length - 1],
            ui = Math.abs(ze);
        ui >= ni ? (Zr = (ui - ni) / li) : (Zr = (ui + li - si) / li), Zr > 1 && (Zr -= 1);
    }
    Object.assign(Gr, { progress: Yr, progressLoop: Zr, isBeginning: Qr, isEnd: Jr }),
        (Wr.watchSlidesProgress || (Wr.centeredSlides && Wr.autoHeight)) && Gr.updateSlidesProgress(ze),
        Qr && !ei && Gr.emit("reachBeginning toEdge"),
        Jr && !ti && Gr.emit("reachEnd toEdge"),
        ((ei && !Qr) || (ti && !Jr)) && Gr.emit("fromEdge"),
        Gr.emit("progress", Yr);
}
const toggleSlideClasses = (ze, Gr, Wr) => {
    Gr && !ze.classList.contains(Wr) ? ze.classList.add(Wr) : !Gr && ze.classList.contains(Wr) && ze.classList.remove(Wr);
};
function updateSlidesClasses() {
    const ze = this,
        { slides: Gr, params: Wr, slidesEl: Kr, activeIndex: Yr } = ze,
        Qr = ze.virtual && Wr.virtual.enabled,
        Jr = ze.grid && Wr.grid && Wr.grid.rows > 1,
        Zr = (ii) => elementChildren(Kr, `.${Wr.slideClass}${ii}, swiper-slide${ii}`)[0];
    let ei, ti, ri;
    if (Qr)
        if (Wr.loop) {
            let ii = Yr - ze.virtual.slidesBefore;
            ii < 0 && (ii = ze.virtual.slides.length + ii), ii >= ze.virtual.slides.length && (ii -= ze.virtual.slides.length), (ei = Zr(`[data-swiper-slide-index="${ii}"]`));
        } else ei = Zr(`[data-swiper-slide-index="${Yr}"]`);
    else Jr ? ((ei = Gr.filter((ii) => ii.column === Yr)[0]), (ri = Gr.filter((ii) => ii.column === Yr + 1)[0]), (ti = Gr.filter((ii) => ii.column === Yr - 1)[0])) : (ei = Gr[Yr]);
    ei && (Jr || ((ri = elementNextAll(ei, `.${Wr.slideClass}, swiper-slide`)[0]), Wr.loop && !ri && (ri = Gr[0]), (ti = elementPrevAll(ei, `.${Wr.slideClass}, swiper-slide`)[0]), Wr.loop && !ti === 0 && (ti = Gr[Gr.length - 1]))),
        Gr.forEach((ii) => {
            toggleSlideClasses(ii, ii === ei, Wr.slideActiveClass), toggleSlideClasses(ii, ii === ri, Wr.slideNextClass), toggleSlideClasses(ii, ii === ti, Wr.slidePrevClass);
        }),
        ze.emitSlidesClasses();
}
const processLazyPreloader = (ze, Gr) => {
        if (!ze || ze.destroyed || !ze.params) return;
        const Wr = () => (ze.isElement ? "swiper-slide" : `.${ze.params.slideClass}`),
            Kr = Gr.closest(Wr());
        if (Kr) {
            let Yr = Kr.querySelector(`.${ze.params.lazyPreloaderClass}`);
            !Yr &&
                ze.isElement &&
                (Kr.shadowRoot
                    ? (Yr = Kr.shadowRoot.querySelector(`.${ze.params.lazyPreloaderClass}`))
                    : requestAnimationFrame(() => {
                          Kr.shadowRoot && ((Yr = Kr.shadowRoot.querySelector(`.${ze.params.lazyPreloaderClass}`)), Yr && Yr.remove());
                      })),
                Yr && Yr.remove();
        }
    },
    unlazy = (ze, Gr) => {
        if (!ze.slides[Gr]) return;
        const Wr = ze.slides[Gr].querySelector('[loading="lazy"]');
        Wr && Wr.removeAttribute("loading");
    },
    preload = (ze) => {
        if (!ze || ze.destroyed || !ze.params) return;
        let Gr = ze.params.lazyPreloadPrevNext;
        const Wr = ze.slides.length;
        if (!Wr || !Gr || Gr < 0) return;
        Gr = Math.min(Gr, Wr);
        const Kr = ze.params.slidesPerView === "auto" ? ze.slidesPerViewDynamic() : Math.ceil(ze.params.slidesPerView),
            Yr = ze.activeIndex;
        if (ze.params.grid && ze.params.grid.rows > 1) {
            const Jr = Yr,
                Zr = [Jr - Gr];
            Zr.push(...Array.from({ length: Gr }).map((ei, ti) => Jr + Kr + ti)),
                ze.slides.forEach((ei, ti) => {
                    Zr.includes(ei.column) && unlazy(ze, ti);
                });
            return;
        }
        const Qr = Yr + Kr - 1;
        if (ze.params.rewind || ze.params.loop)
            for (let Jr = Yr - Gr; Jr <= Qr + Gr; Jr += 1) {
                const Zr = ((Jr % Wr) + Wr) % Wr;
                (Zr < Yr || Zr > Qr) && unlazy(ze, Zr);
            }
        else for (let Jr = Math.max(Yr - Gr, 0); Jr <= Math.min(Qr + Gr, Wr - 1); Jr += 1) Jr !== Yr && (Jr > Qr || Jr < Yr) && unlazy(ze, Jr);
    };
function getActiveIndexByTranslate(ze) {
    const { slidesGrid: Gr, params: Wr } = ze,
        Kr = ze.rtlTranslate ? ze.translate : -ze.translate;
    let Yr;
    for (let Qr = 0; Qr < Gr.length; Qr += 1) typeof Gr[Qr + 1] < "u" ? (Kr >= Gr[Qr] && Kr < Gr[Qr + 1] - (Gr[Qr + 1] - Gr[Qr]) / 2 ? (Yr = Qr) : Kr >= Gr[Qr] && Kr < Gr[Qr + 1] && (Yr = Qr + 1)) : Kr >= Gr[Qr] && (Yr = Qr);
    return Wr.normalizeSlideIndex && (Yr < 0 || typeof Yr > "u") && (Yr = 0), Yr;
}
function updateActiveIndex(ze) {
    const Gr = this,
        Wr = Gr.rtlTranslate ? Gr.translate : -Gr.translate,
        { snapGrid: Kr, params: Yr, activeIndex: Qr, realIndex: Jr, snapIndex: Zr } = Gr;
    let ei = ze,
        ti;
    const ri = (si) => {
        let li = si - Gr.virtual.slidesBefore;
        return li < 0 && (li = Gr.virtual.slides.length + li), li >= Gr.virtual.slides.length && (li -= Gr.virtual.slides.length), li;
    };
    if ((typeof ei > "u" && (ei = getActiveIndexByTranslate(Gr)), Kr.indexOf(Wr) >= 0)) ti = Kr.indexOf(Wr);
    else {
        const si = Math.min(Yr.slidesPerGroupSkip, ei);
        ti = si + Math.floor((ei - si) / Yr.slidesPerGroup);
    }
    if ((ti >= Kr.length && (ti = Kr.length - 1), ei === Qr && !Gr.params.loop)) {
        ti !== Zr && ((Gr.snapIndex = ti), Gr.emit("snapIndexChange"));
        return;
    }
    if (ei === Qr && Gr.params.loop && Gr.virtual && Gr.params.virtual.enabled) {
        Gr.realIndex = ri(ei);
        return;
    }
    const ii = Gr.grid && Yr.grid && Yr.grid.rows > 1;
    let ni;
    if (Gr.virtual && Yr.virtual.enabled && Yr.loop) ni = ri(ei);
    else if (ii) {
        const si = Gr.slides.filter((ui) => ui.column === ei)[0];
        let li = parseInt(si.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(li) && (li = Math.max(Gr.slides.indexOf(si), 0)), (ni = Math.floor(li / Yr.grid.rows));
    } else if (Gr.slides[ei]) {
        const si = Gr.slides[ei].getAttribute("data-swiper-slide-index");
        si ? (ni = parseInt(si, 10)) : (ni = ei);
    } else ni = ei;
    Object.assign(Gr, { previousSnapIndex: Zr, snapIndex: ti, previousRealIndex: Jr, realIndex: ni, previousIndex: Qr, activeIndex: ei }),
        Gr.initialized && preload(Gr),
        Gr.emit("activeIndexChange"),
        Gr.emit("snapIndexChange"),
        (Gr.initialized || Gr.params.runCallbacksOnInit) && (Jr !== ni && Gr.emit("realIndexChange"), Gr.emit("slideChange"));
}
function updateClickedSlide(ze, Gr) {
    const Wr = this,
        Kr = Wr.params;
    let Yr = ze.closest(`.${Kr.slideClass}, swiper-slide`);
    !Yr &&
        Wr.isElement &&
        Gr &&
        Gr.length > 1 &&
        Gr.includes(ze) &&
        [...Gr.slice(Gr.indexOf(ze) + 1, Gr.length)].forEach((Zr) => {
            !Yr && Zr.matches && Zr.matches(`.${Kr.slideClass}, swiper-slide`) && (Yr = Zr);
        });
    let Qr = !1,
        Jr;
    if (Yr) {
        for (let Zr = 0; Zr < Wr.slides.length; Zr += 1)
            if (Wr.slides[Zr] === Yr) {
                (Qr = !0), (Jr = Zr);
                break;
            }
    }
    if (Yr && Qr) (Wr.clickedSlide = Yr), Wr.virtual && Wr.params.virtual.enabled ? (Wr.clickedIndex = parseInt(Yr.getAttribute("data-swiper-slide-index"), 10)) : (Wr.clickedIndex = Jr);
    else {
        (Wr.clickedSlide = void 0), (Wr.clickedIndex = void 0);
        return;
    }
    Kr.slideToClickedSlide && Wr.clickedIndex !== void 0 && Wr.clickedIndex !== Wr.activeIndex && Wr.slideToClickedSlide();
}
var update = { updateSize, updateSlides, updateAutoHeight, updateSlidesOffset, updateSlidesProgress, updateProgress, updateSlidesClasses, updateActiveIndex, updateClickedSlide };
function getSwiperTranslate(ze) {
    ze === void 0 && (ze = this.isHorizontal() ? "x" : "y");
    const Gr = this,
        { params: Wr, rtlTranslate: Kr, translate: Yr, wrapperEl: Qr } = Gr;
    if (Wr.virtualTranslate) return Kr ? -Yr : Yr;
    if (Wr.cssMode) return Yr;
    let Jr = getTranslate(Qr, ze);
    return (Jr += Gr.cssOverflowAdjustment()), Kr && (Jr = -Jr), Jr || 0;
}
function setTranslate(ze, Gr) {
    const Wr = this,
        { rtlTranslate: Kr, params: Yr, wrapperEl: Qr, progress: Jr } = Wr;
    let Zr = 0,
        ei = 0;
    const ti = 0;
    Wr.isHorizontal() ? (Zr = Kr ? -ze : ze) : (ei = ze),
        Yr.roundLengths && ((Zr = Math.floor(Zr)), (ei = Math.floor(ei))),
        (Wr.previousTranslate = Wr.translate),
        (Wr.translate = Wr.isHorizontal() ? Zr : ei),
        Yr.cssMode
            ? (Qr[Wr.isHorizontal() ? "scrollLeft" : "scrollTop"] = Wr.isHorizontal() ? -Zr : -ei)
            : Yr.virtualTranslate || (Wr.isHorizontal() ? (Zr -= Wr.cssOverflowAdjustment()) : (ei -= Wr.cssOverflowAdjustment()), (Qr.style.transform = `translate3d(${Zr}px, ${ei}px, ${ti}px)`));
    let ri;
    const ii = Wr.maxTranslate() - Wr.minTranslate();
    ii === 0 ? (ri = 0) : (ri = (ze - Wr.minTranslate()) / ii), ri !== Jr && Wr.updateProgress(ze), Wr.emit("setTranslate", Wr.translate, Gr);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(ze, Gr, Wr, Kr, Yr) {
    ze === void 0 && (ze = 0), Gr === void 0 && (Gr = this.params.speed), Wr === void 0 && (Wr = !0), Kr === void 0 && (Kr = !0);
    const Qr = this,
        { params: Jr, wrapperEl: Zr } = Qr;
    if (Qr.animating && Jr.preventInteractionOnTransition) return !1;
    const ei = Qr.minTranslate(),
        ti = Qr.maxTranslate();
    let ri;
    if ((Kr && ze > ei ? (ri = ei) : Kr && ze < ti ? (ri = ti) : (ri = ze), Qr.updateProgress(ri), Jr.cssMode)) {
        const ii = Qr.isHorizontal();
        if (Gr === 0) Zr[ii ? "scrollLeft" : "scrollTop"] = -ri;
        else {
            if (!Qr.support.smoothScroll) return animateCSSModeScroll({ swiper: Qr, targetPosition: -ri, side: ii ? "left" : "top" }), !0;
            Zr.scrollTo({ [ii ? "left" : "top"]: -ri, behavior: "smooth" });
        }
        return !0;
    }
    return (
        Gr === 0
            ? (Qr.setTransition(0), Qr.setTranslate(ri), Wr && (Qr.emit("beforeTransitionStart", Gr, Yr), Qr.emit("transitionEnd")))
            : (Qr.setTransition(Gr),
              Qr.setTranslate(ri),
              Wr && (Qr.emit("beforeTransitionStart", Gr, Yr), Qr.emit("transitionStart")),
              Qr.animating ||
                  ((Qr.animating = !0),
                  Qr.onTranslateToWrapperTransitionEnd ||
                      (Qr.onTranslateToWrapperTransitionEnd = function (ni) {
                          !Qr ||
                              Qr.destroyed ||
                              (ni.target === this &&
                                  (Qr.wrapperEl.removeEventListener("transitionend", Qr.onTranslateToWrapperTransitionEnd),
                                  (Qr.onTranslateToWrapperTransitionEnd = null),
                                  delete Qr.onTranslateToWrapperTransitionEnd,
                                  (Qr.animating = !1),
                                  Wr && Qr.emit("transitionEnd")));
                      }),
                  Qr.wrapperEl.addEventListener("transitionend", Qr.onTranslateToWrapperTransitionEnd))),
        !0
    );
}
var translate = { getTranslate: getSwiperTranslate, setTranslate, minTranslate, maxTranslate, translateTo };
function setTransition(ze, Gr) {
    const Wr = this;
    Wr.params.cssMode || ((Wr.wrapperEl.style.transitionDuration = `${ze}ms`), (Wr.wrapperEl.style.transitionDelay = ze === 0 ? "0ms" : "")), Wr.emit("setTransition", ze, Gr);
}
function transitionEmit(ze) {
    let { swiper: Gr, runCallbacks: Wr, direction: Kr, step: Yr } = ze;
    const { activeIndex: Qr, previousIndex: Jr } = Gr;
    let Zr = Kr;
    if ((Zr || (Qr > Jr ? (Zr = "next") : Qr < Jr ? (Zr = "prev") : (Zr = "reset")), Gr.emit(`transition${Yr}`), Wr && Qr !== Jr)) {
        if (Zr === "reset") {
            Gr.emit(`slideResetTransition${Yr}`);
            return;
        }
        Gr.emit(`slideChangeTransition${Yr}`), Zr === "next" ? Gr.emit(`slideNextTransition${Yr}`) : Gr.emit(`slidePrevTransition${Yr}`);
    }
}
function transitionStart(ze, Gr) {
    ze === void 0 && (ze = !0);
    const Wr = this,
        { params: Kr } = Wr;
    Kr.cssMode || (Kr.autoHeight && Wr.updateAutoHeight(), transitionEmit({ swiper: Wr, runCallbacks: ze, direction: Gr, step: "Start" }));
}
function transitionEnd(ze, Gr) {
    ze === void 0 && (ze = !0);
    const Wr = this,
        { params: Kr } = Wr;
    (Wr.animating = !1), !Kr.cssMode && (Wr.setTransition(0), transitionEmit({ swiper: Wr, runCallbacks: ze, direction: Gr, step: "End" }));
}
var transition = { setTransition, transitionStart, transitionEnd };
function slideTo(ze, Gr, Wr, Kr, Yr) {
    ze === void 0 && (ze = 0), Wr === void 0 && (Wr = !0), typeof ze == "string" && (ze = parseInt(ze, 10));
    const Qr = this;
    let Jr = ze;
    Jr < 0 && (Jr = 0);
    const { params: Zr, snapGrid: ei, slidesGrid: ti, previousIndex: ri, activeIndex: ii, rtlTranslate: ni, wrapperEl: si, enabled: li } = Qr;
    if ((!li && !Kr && !Yr) || Qr.destroyed || (Qr.animating && Zr.preventInteractionOnTransition)) return !1;
    typeof Gr > "u" && (Gr = Qr.params.speed);
    const ui = Math.min(Qr.params.slidesPerGroupSkip, Jr);
    let oi = ui + Math.floor((Jr - ui) / Qr.params.slidesPerGroup);
    oi >= ei.length && (oi = ei.length - 1);
    const ai = -ei[oi];
    if (Zr.normalizeSlideIndex)
        for (let fi = 0; fi < ti.length; fi += 1) {
            const vi = -Math.floor(ai * 100),
                bi = Math.floor(ti[fi] * 100),
                yi = Math.floor(ti[fi + 1] * 100);
            typeof ti[fi + 1] < "u" ? (vi >= bi && vi < yi - (yi - bi) / 2 ? (Jr = fi) : vi >= bi && vi < yi && (Jr = fi + 1)) : vi >= bi && (Jr = fi);
        }
    if (
        Qr.initialized &&
        Jr !== ii &&
        ((!Qr.allowSlideNext && (ni ? ai > Qr.translate && ai > Qr.minTranslate() : ai < Qr.translate && ai < Qr.minTranslate())) || (!Qr.allowSlidePrev && ai > Qr.translate && ai > Qr.maxTranslate() && (ii || 0) !== Jr))
    )
        return !1;
    Jr !== (ri || 0) && Wr && Qr.emit("beforeSlideChangeStart"), Qr.updateProgress(ai);
    let pi;
    Jr > ii ? (pi = "next") : Jr < ii ? (pi = "prev") : (pi = "reset");
    const ci = Qr.virtual && Qr.params.virtual.enabled;
    if (!(ci && Yr) && ((ni && -ai === Qr.translate) || (!ni && ai === Qr.translate)))
        return Qr.updateActiveIndex(Jr), Zr.autoHeight && Qr.updateAutoHeight(), Qr.updateSlidesClasses(), Zr.effect !== "slide" && Qr.setTranslate(ai), pi !== "reset" && (Qr.transitionStart(Wr, pi), Qr.transitionEnd(Wr, pi)), !1;
    if (Zr.cssMode) {
        const fi = Qr.isHorizontal(),
            vi = ni ? ai : -ai;
        if (Gr === 0)
            ci && ((Qr.wrapperEl.style.scrollSnapType = "none"), (Qr._immediateVirtual = !0)),
                ci && !Qr._cssModeVirtualInitialSet && Qr.params.initialSlide > 0
                    ? ((Qr._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                          si[fi ? "scrollLeft" : "scrollTop"] = vi;
                      }))
                    : (si[fi ? "scrollLeft" : "scrollTop"] = vi),
                ci &&
                    requestAnimationFrame(() => {
                        (Qr.wrapperEl.style.scrollSnapType = ""), (Qr._immediateVirtual = !1);
                    });
        else {
            if (!Qr.support.smoothScroll) return animateCSSModeScroll({ swiper: Qr, targetPosition: vi, side: fi ? "left" : "top" }), !0;
            si.scrollTo({ [fi ? "left" : "top"]: vi, behavior: "smooth" });
        }
        return !0;
    }
    return (
        Qr.setTransition(Gr),
        Qr.setTranslate(ai),
        Qr.updateActiveIndex(Jr),
        Qr.updateSlidesClasses(),
        Qr.emit("beforeTransitionStart", Gr, Kr),
        Qr.transitionStart(Wr, pi),
        Gr === 0
            ? Qr.transitionEnd(Wr, pi)
            : Qr.animating ||
              ((Qr.animating = !0),
              Qr.onSlideToWrapperTransitionEnd ||
                  (Qr.onSlideToWrapperTransitionEnd = function (vi) {
                      !Qr ||
                          Qr.destroyed ||
                          (vi.target === this &&
                              (Qr.wrapperEl.removeEventListener("transitionend", Qr.onSlideToWrapperTransitionEnd), (Qr.onSlideToWrapperTransitionEnd = null), delete Qr.onSlideToWrapperTransitionEnd, Qr.transitionEnd(Wr, pi)));
                  }),
              Qr.wrapperEl.addEventListener("transitionend", Qr.onSlideToWrapperTransitionEnd)),
        !0
    );
}
function slideToLoop(ze, Gr, Wr, Kr) {
    ze === void 0 && (ze = 0), Wr === void 0 && (Wr = !0), typeof ze == "string" && (ze = parseInt(ze, 10));
    const Yr = this;
    if (Yr.destroyed) return;
    typeof Gr > "u" && (Gr = Yr.params.speed);
    const Qr = Yr.grid && Yr.params.grid && Yr.params.grid.rows > 1;
    let Jr = ze;
    if (Yr.params.loop)
        if (Yr.virtual && Yr.params.virtual.enabled) Jr = Jr + Yr.virtual.slidesBefore;
        else {
            let Zr;
            if (Qr) {
                const ni = Jr * Yr.params.grid.rows;
                Zr = Yr.slides.filter((si) => si.getAttribute("data-swiper-slide-index") * 1 === ni)[0].column;
            } else Zr = Yr.getSlideIndexByData(Jr);
            const ei = Qr ? Math.ceil(Yr.slides.length / Yr.params.grid.rows) : Yr.slides.length,
                { centeredSlides: ti } = Yr.params;
            let ri = Yr.params.slidesPerView;
            ri === "auto" ? (ri = Yr.slidesPerViewDynamic()) : ((ri = Math.ceil(parseFloat(Yr.params.slidesPerView, 10))), ti && ri % 2 === 0 && (ri = ri + 1));
            let ii = ei - Zr < ri;
            if ((ti && (ii = ii || Zr < Math.ceil(ri / 2)), Kr && ti && Yr.params.slidesPerView !== "auto" && !Qr && (ii = !1), ii)) {
                const ni = ti ? (Zr < Yr.activeIndex ? "prev" : "next") : Zr - Yr.activeIndex - 1 < Yr.params.slidesPerView ? "next" : "prev";
                Yr.loopFix({ direction: ni, slideTo: !0, activeSlideIndex: ni === "next" ? Zr + 1 : Zr - ei + 1, slideRealIndex: ni === "next" ? Yr.realIndex : void 0 });
            }
            if (Qr) {
                const ni = Jr * Yr.params.grid.rows;
                Jr = Yr.slides.filter((si) => si.getAttribute("data-swiper-slide-index") * 1 === ni)[0].column;
            } else Jr = Yr.getSlideIndexByData(Jr);
        }
    return (
        requestAnimationFrame(() => {
            Yr.slideTo(Jr, Gr, Wr, Kr);
        }),
        Yr
    );
}
function slideNext(ze, Gr, Wr) {
    Gr === void 0 && (Gr = !0);
    const Kr = this,
        { enabled: Yr, params: Qr, animating: Jr } = Kr;
    if (!Yr || Kr.destroyed) return Kr;
    typeof ze > "u" && (ze = Kr.params.speed);
    let Zr = Qr.slidesPerGroup;
    Qr.slidesPerView === "auto" && Qr.slidesPerGroup === 1 && Qr.slidesPerGroupAuto && (Zr = Math.max(Kr.slidesPerViewDynamic("current", !0), 1));
    const ei = Kr.activeIndex < Qr.slidesPerGroupSkip ? 1 : Zr,
        ti = Kr.virtual && Qr.virtual.enabled;
    if (Qr.loop) {
        if (Jr && !ti && Qr.loopPreventsSliding) return !1;
        if ((Kr.loopFix({ direction: "next" }), (Kr._clientLeft = Kr.wrapperEl.clientLeft), Kr.activeIndex === Kr.slides.length - 1 && Qr.cssMode))
            return (
                requestAnimationFrame(() => {
                    Kr.slideTo(Kr.activeIndex + ei, ze, Gr, Wr);
                }),
                !0
            );
    }
    return Qr.rewind && Kr.isEnd ? Kr.slideTo(0, ze, Gr, Wr) : Kr.slideTo(Kr.activeIndex + ei, ze, Gr, Wr);
}
function slidePrev(ze, Gr, Wr) {
    Gr === void 0 && (Gr = !0);
    const Kr = this,
        { params: Yr, snapGrid: Qr, slidesGrid: Jr, rtlTranslate: Zr, enabled: ei, animating: ti } = Kr;
    if (!ei || Kr.destroyed) return Kr;
    typeof ze > "u" && (ze = Kr.params.speed);
    const ri = Kr.virtual && Yr.virtual.enabled;
    if (Yr.loop) {
        if (ti && !ri && Yr.loopPreventsSliding) return !1;
        Kr.loopFix({ direction: "prev" }), (Kr._clientLeft = Kr.wrapperEl.clientLeft);
    }
    const ii = Zr ? Kr.translate : -Kr.translate;
    function ni(ai) {
        return ai < 0 ? -Math.floor(Math.abs(ai)) : Math.floor(ai);
    }
    const si = ni(ii),
        li = Qr.map((ai) => ni(ai));
    let ui = Qr[li.indexOf(si) - 1];
    if (typeof ui > "u" && Yr.cssMode) {
        let ai;
        Qr.forEach((pi, ci) => {
            si >= pi && (ai = ci);
        }),
            typeof ai < "u" && (ui = Qr[ai > 0 ? ai - 1 : ai]);
    }
    let oi = 0;
    if (
        (typeof ui < "u" &&
            ((oi = Jr.indexOf(ui)), oi < 0 && (oi = Kr.activeIndex - 1), Yr.slidesPerView === "auto" && Yr.slidesPerGroup === 1 && Yr.slidesPerGroupAuto && ((oi = oi - Kr.slidesPerViewDynamic("previous", !0) + 1), (oi = Math.max(oi, 0)))),
        Yr.rewind && Kr.isBeginning)
    ) {
        const ai = Kr.params.virtual && Kr.params.virtual.enabled && Kr.virtual ? Kr.virtual.slides.length - 1 : Kr.slides.length - 1;
        return Kr.slideTo(ai, ze, Gr, Wr);
    } else if (Yr.loop && Kr.activeIndex === 0 && Yr.cssMode)
        return (
            requestAnimationFrame(() => {
                Kr.slideTo(oi, ze, Gr, Wr);
            }),
            !0
        );
    return Kr.slideTo(oi, ze, Gr, Wr);
}
function slideReset(ze, Gr, Wr) {
    Gr === void 0 && (Gr = !0);
    const Kr = this;
    if (!Kr.destroyed) return typeof ze > "u" && (ze = Kr.params.speed), Kr.slideTo(Kr.activeIndex, ze, Gr, Wr);
}
function slideToClosest(ze, Gr, Wr, Kr) {
    Gr === void 0 && (Gr = !0), Kr === void 0 && (Kr = 0.5);
    const Yr = this;
    if (Yr.destroyed) return;
    typeof ze > "u" && (ze = Yr.params.speed);
    let Qr = Yr.activeIndex;
    const Jr = Math.min(Yr.params.slidesPerGroupSkip, Qr),
        Zr = Jr + Math.floor((Qr - Jr) / Yr.params.slidesPerGroup),
        ei = Yr.rtlTranslate ? Yr.translate : -Yr.translate;
    if (ei >= Yr.snapGrid[Zr]) {
        const ti = Yr.snapGrid[Zr],
            ri = Yr.snapGrid[Zr + 1];
        ei - ti > (ri - ti) * Kr && (Qr += Yr.params.slidesPerGroup);
    } else {
        const ti = Yr.snapGrid[Zr - 1],
            ri = Yr.snapGrid[Zr];
        ei - ti <= (ri - ti) * Kr && (Qr -= Yr.params.slidesPerGroup);
    }
    return (Qr = Math.max(Qr, 0)), (Qr = Math.min(Qr, Yr.slidesGrid.length - 1)), Yr.slideTo(Qr, ze, Gr, Wr);
}
function slideToClickedSlide() {
    const ze = this;
    if (ze.destroyed) return;
    const { params: Gr, slidesEl: Wr } = ze,
        Kr = Gr.slidesPerView === "auto" ? ze.slidesPerViewDynamic() : Gr.slidesPerView;
    let Yr = ze.clickedIndex,
        Qr;
    const Jr = ze.isElement ? "swiper-slide" : `.${Gr.slideClass}`;
    if (Gr.loop) {
        if (ze.animating) return;
        (Qr = parseInt(ze.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
            Gr.centeredSlides
                ? Yr < ze.loopedSlides - Kr / 2 || Yr > ze.slides.length - ze.loopedSlides + Kr / 2
                    ? (ze.loopFix(),
                      (Yr = ze.getSlideIndex(elementChildren(Wr, `${Jr}[data-swiper-slide-index="${Qr}"]`)[0])),
                      nextTick(() => {
                          ze.slideTo(Yr);
                      }))
                    : ze.slideTo(Yr)
                : Yr > ze.slides.length - Kr
                ? (ze.loopFix(),
                  (Yr = ze.getSlideIndex(elementChildren(Wr, `${Jr}[data-swiper-slide-index="${Qr}"]`)[0])),
                  nextTick(() => {
                      ze.slideTo(Yr);
                  }))
                : ze.slideTo(Yr);
    } else ze.slideTo(Yr);
}
var slide = { slideTo, slideToLoop, slideNext, slidePrev, slideReset, slideToClosest, slideToClickedSlide };
function loopCreate(ze) {
    const Gr = this,
        { params: Wr, slidesEl: Kr } = Gr;
    if (!Wr.loop || (Gr.virtual && Gr.params.virtual.enabled)) return;
    const Yr = () => {
            elementChildren(Kr, `.${Wr.slideClass}, swiper-slide`).forEach((ii, ni) => {
                ii.setAttribute("data-swiper-slide-index", ni);
            });
        },
        Qr = Gr.grid && Wr.grid && Wr.grid.rows > 1,
        Jr = Wr.slidesPerGroup * (Qr ? Wr.grid.rows : 1),
        Zr = Gr.slides.length % Jr !== 0,
        ei = Qr && Gr.slides.length % Wr.grid.rows !== 0,
        ti = (ri) => {
            for (let ii = 0; ii < ri; ii += 1) {
                const ni = Gr.isElement ? createElement("swiper-slide", [Wr.slideBlankClass]) : createElement("div", [Wr.slideClass, Wr.slideBlankClass]);
                Gr.slidesEl.append(ni);
            }
        };
    if (Zr) {
        if (Wr.loopAddBlankSlides) {
            const ri = Jr - (Gr.slides.length % Jr);
            ti(ri), Gr.recalcSlides(), Gr.updateSlides();
        } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        Yr();
    } else if (ei) {
        if (Wr.loopAddBlankSlides) {
            const ri = Wr.grid.rows - (Gr.slides.length % Wr.grid.rows);
            ti(ri), Gr.recalcSlides(), Gr.updateSlides();
        } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        Yr();
    } else Yr();
    Gr.loopFix({ slideRealIndex: ze, direction: Wr.centeredSlides ? void 0 : "next" });
}
function loopFix(ze) {
    let { slideRealIndex: Gr, slideTo: Wr = !0, direction: Kr, setTranslate: Yr, activeSlideIndex: Qr, byController: Jr, byMousewheel: Zr } = ze === void 0 ? {} : ze;
    const ei = this;
    if (!ei.params.loop) return;
    ei.emit("beforeLoopFix");
    const { slides: ti, allowSlidePrev: ri, allowSlideNext: ii, slidesEl: ni, params: si } = ei,
        { centeredSlides: li } = si;
    if (((ei.allowSlidePrev = !0), (ei.allowSlideNext = !0), ei.virtual && si.virtual.enabled)) {
        Wr &&
            (!si.centeredSlides && ei.snapIndex === 0
                ? ei.slideTo(ei.virtual.slides.length, 0, !1, !0)
                : si.centeredSlides && ei.snapIndex < si.slidesPerView
                ? ei.slideTo(ei.virtual.slides.length + ei.snapIndex, 0, !1, !0)
                : ei.snapIndex === ei.snapGrid.length - 1 && ei.slideTo(ei.virtual.slidesBefore, 0, !1, !0)),
            (ei.allowSlidePrev = ri),
            (ei.allowSlideNext = ii),
            ei.emit("loopFix");
        return;
    }
    let ui = si.slidesPerView;
    ui === "auto" ? (ui = ei.slidesPerViewDynamic()) : ((ui = Math.ceil(parseFloat(si.slidesPerView, 10))), li && ui % 2 === 0 && (ui = ui + 1));
    const oi = si.slidesPerGroupAuto ? ui : si.slidesPerGroup;
    let ai = oi;
    ai % oi !== 0 && (ai += oi - (ai % oi)), (ai += si.loopAdditionalSlides), (ei.loopedSlides = ai);
    const pi = ei.grid && si.grid && si.grid.rows > 1;
    ti.length < ui + ai
        ? showWarning(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
          )
        : pi && si.grid.fill === "row" && showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const ci = [],
        hi = [];
    let fi = ei.activeIndex;
    typeof Qr > "u" ? (Qr = ei.getSlideIndex(ti.filter((gi) => gi.classList.contains(si.slideActiveClass))[0])) : (fi = Qr);
    const vi = Kr === "next" || !Kr,
        bi = Kr === "prev" || !Kr;
    let yi = 0,
        Ei = 0;
    const di = pi ? Math.ceil(ti.length / si.grid.rows) : ti.length,
        wi = (pi ? ti[Qr].column : Qr) + (li && typeof Yr > "u" ? -ui / 2 + 0.5 : 0);
    if (wi < ai) {
        yi = Math.max(ai - wi, oi);
        for (let gi = 0; gi < ai - wi; gi += 1) {
            const Ti = gi - Math.floor(gi / di) * di;
            if (pi) {
                const xi = di - Ti - 1;
                for (let Mi = ti.length - 1; Mi >= 0; Mi -= 1) ti[Mi].column === xi && ci.push(Mi);
            } else ci.push(di - Ti - 1);
        }
    } else if (wi + ui > di - ai) {
        Ei = Math.max(wi - (di - ai * 2), oi);
        for (let gi = 0; gi < Ei; gi += 1) {
            const Ti = gi - Math.floor(gi / di) * di;
            pi
                ? ti.forEach((xi, Mi) => {
                      xi.column === Ti && hi.push(Mi);
                  })
                : hi.push(Ti);
        }
    }
    if (
        ((ei.__preventObserver__ = !0),
        requestAnimationFrame(() => {
            ei.__preventObserver__ = !1;
        }),
        bi &&
            ci.forEach((gi) => {
                (ti[gi].swiperLoopMoveDOM = !0), ni.prepend(ti[gi]), (ti[gi].swiperLoopMoveDOM = !1);
            }),
        vi &&
            hi.forEach((gi) => {
                (ti[gi].swiperLoopMoveDOM = !0), ni.append(ti[gi]), (ti[gi].swiperLoopMoveDOM = !1);
            }),
        ei.recalcSlides(),
        si.slidesPerView === "auto"
            ? ei.updateSlides()
            : pi &&
              ((ci.length > 0 && bi) || (hi.length > 0 && vi)) &&
              ei.slides.forEach((gi, Ti) => {
                  ei.grid.updateSlide(Ti, gi, ei.slides);
              }),
        si.watchSlidesProgress && ei.updateSlidesOffset(),
        Wr)
    ) {
        if (ci.length > 0 && bi) {
            if (typeof Gr > "u") {
                const gi = ei.slidesGrid[fi],
                    xi = ei.slidesGrid[fi + yi] - gi;
                Zr
                    ? ei.setTranslate(ei.translate - xi)
                    : (ei.slideTo(fi + Math.ceil(yi), 0, !1, !0), Yr && ((ei.touchEventsData.startTranslate = ei.touchEventsData.startTranslate - xi), (ei.touchEventsData.currentTranslate = ei.touchEventsData.currentTranslate - xi)));
            } else if (Yr) {
                const gi = pi ? ci.length / si.grid.rows : ci.length;
                ei.slideTo(ei.activeIndex + gi, 0, !1, !0), (ei.touchEventsData.currentTranslate = ei.translate);
            }
        } else if (hi.length > 0 && vi)
            if (typeof Gr > "u") {
                const gi = ei.slidesGrid[fi],
                    xi = ei.slidesGrid[fi - Ei] - gi;
                Zr
                    ? ei.setTranslate(ei.translate - xi)
                    : (ei.slideTo(fi - Ei, 0, !1, !0), Yr && ((ei.touchEventsData.startTranslate = ei.touchEventsData.startTranslate - xi), (ei.touchEventsData.currentTranslate = ei.touchEventsData.currentTranslate - xi)));
            } else {
                const gi = pi ? hi.length / si.grid.rows : hi.length;
                ei.slideTo(ei.activeIndex - gi, 0, !1, !0);
            }
    }
    if (((ei.allowSlidePrev = ri), (ei.allowSlideNext = ii), ei.controller && ei.controller.control && !Jr)) {
        const gi = { slideRealIndex: Gr, direction: Kr, setTranslate: Yr, activeSlideIndex: Qr, byController: !0 };
        Array.isArray(ei.controller.control)
            ? ei.controller.control.forEach((Ti) => {
                  !Ti.destroyed && Ti.params.loop && Ti.loopFix({ ...gi, slideTo: Ti.params.slidesPerView === si.slidesPerView ? Wr : !1 });
              })
            : ei.controller.control instanceof ei.constructor && ei.controller.control.params.loop && ei.controller.control.loopFix({ ...gi, slideTo: ei.controller.control.params.slidesPerView === si.slidesPerView ? Wr : !1 });
    }
    ei.emit("loopFix");
}
function loopDestroy() {
    const ze = this,
        { params: Gr, slidesEl: Wr } = ze;
    if (!Gr.loop || (ze.virtual && ze.params.virtual.enabled)) return;
    ze.recalcSlides();
    const Kr = [];
    ze.slides.forEach((Yr) => {
        const Qr = typeof Yr.swiperSlideIndex > "u" ? Yr.getAttribute("data-swiper-slide-index") * 1 : Yr.swiperSlideIndex;
        Kr[Qr] = Yr;
    }),
        ze.slides.forEach((Yr) => {
            Yr.removeAttribute("data-swiper-slide-index");
        }),
        Kr.forEach((Yr) => {
            Wr.append(Yr);
        }),
        ze.recalcSlides(),
        ze.slideTo(ze.realIndex, 0);
}
var loop = { loopCreate, loopFix, loopDestroy };
function setGrabCursor(ze) {
    const Gr = this;
    if (!Gr.params.simulateTouch || (Gr.params.watchOverflow && Gr.isLocked) || Gr.params.cssMode) return;
    const Wr = Gr.params.touchEventsTarget === "container" ? Gr.el : Gr.wrapperEl;
    Gr.isElement && (Gr.__preventObserver__ = !0),
        (Wr.style.cursor = "move"),
        (Wr.style.cursor = ze ? "grabbing" : "grab"),
        Gr.isElement &&
            requestAnimationFrame(() => {
                Gr.__preventObserver__ = !1;
            });
}
function unsetGrabCursor() {
    const ze = this;
    (ze.params.watchOverflow && ze.isLocked) ||
        ze.params.cssMode ||
        (ze.isElement && (ze.__preventObserver__ = !0),
        (ze[ze.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""),
        ze.isElement &&
            requestAnimationFrame(() => {
                ze.__preventObserver__ = !1;
            }));
}
var grabCursor = { setGrabCursor, unsetGrabCursor };
function closestElement(ze, Gr) {
    Gr === void 0 && (Gr = this);
    function Wr(Kr) {
        if (!Kr || Kr === getDocument() || Kr === getWindow()) return null;
        Kr.assignedSlot && (Kr = Kr.assignedSlot);
        const Yr = Kr.closest(ze);
        return !Yr && !Kr.getRootNode ? null : Yr || Wr(Kr.getRootNode().host);
    }
    return Wr(Gr);
}
function preventEdgeSwipe(ze, Gr, Wr) {
    const Kr = getWindow(),
        { params: Yr } = ze,
        Qr = Yr.edgeSwipeDetection,
        Jr = Yr.edgeSwipeThreshold;
    return Qr && (Wr <= Jr || Wr >= Kr.innerWidth - Jr) ? (Qr === "prevent" ? (Gr.preventDefault(), !0) : !1) : !0;
}
function onTouchStart(ze) {
    const Gr = this,
        Wr = getDocument();
    let Kr = ze;
    Kr.originalEvent && (Kr = Kr.originalEvent);
    const Yr = Gr.touchEventsData;
    if (Kr.type === "pointerdown") {
        if (Yr.pointerId !== null && Yr.pointerId !== Kr.pointerId) return;
        Yr.pointerId = Kr.pointerId;
    } else Kr.type === "touchstart" && Kr.targetTouches.length === 1 && (Yr.touchId = Kr.targetTouches[0].identifier);
    if (Kr.type === "touchstart") {
        preventEdgeSwipe(Gr, Kr, Kr.targetTouches[0].pageX);
        return;
    }
    const { params: Qr, touches: Jr, enabled: Zr } = Gr;
    if (!Zr || (!Qr.simulateTouch && Kr.pointerType === "mouse") || (Gr.animating && Qr.preventInteractionOnTransition)) return;
    !Gr.animating && Qr.cssMode && Qr.loop && Gr.loopFix();
    let ei = Kr.target;
    if ((Qr.touchEventsTarget === "wrapper" && !elementIsChildOf(ei, Gr.wrapperEl)) || ("which" in Kr && Kr.which === 3) || ("button" in Kr && Kr.button > 0) || (Yr.isTouched && Yr.isMoved)) return;
    const ti = !!Qr.noSwipingClass && Qr.noSwipingClass !== "",
        ri = Kr.composedPath ? Kr.composedPath() : Kr.path;
    ti && Kr.target && Kr.target.shadowRoot && ri && (ei = ri[0]);
    const ii = Qr.noSwipingSelector ? Qr.noSwipingSelector : `.${Qr.noSwipingClass}`,
        ni = !!(Kr.target && Kr.target.shadowRoot);
    if (Qr.noSwiping && (ni ? closestElement(ii, ei) : ei.closest(ii))) {
        Gr.allowClick = !0;
        return;
    }
    if (Qr.swipeHandler && !ei.closest(Qr.swipeHandler)) return;
    (Jr.currentX = Kr.pageX), (Jr.currentY = Kr.pageY);
    const si = Jr.currentX,
        li = Jr.currentY;
    if (!preventEdgeSwipe(Gr, Kr, si)) return;
    Object.assign(Yr, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
        (Jr.startX = si),
        (Jr.startY = li),
        (Yr.touchStartTime = now()),
        (Gr.allowClick = !0),
        Gr.updateSize(),
        (Gr.swipeDirection = void 0),
        Qr.threshold > 0 && (Yr.allowThresholdMove = !1);
    let ui = !0;
    ei.matches(Yr.focusableElements) && ((ui = !1), ei.nodeName === "SELECT" && (Yr.isTouched = !1)), Wr.activeElement && Wr.activeElement.matches(Yr.focusableElements) && Wr.activeElement !== ei && Wr.activeElement.blur();
    const oi = ui && Gr.allowTouchMove && Qr.touchStartPreventDefault;
    (Qr.touchStartForcePreventDefault || oi) && !ei.isContentEditable && Kr.preventDefault(), Qr.freeMode && Qr.freeMode.enabled && Gr.freeMode && Gr.animating && !Qr.cssMode && Gr.freeMode.onTouchStart(), Gr.emit("touchStart", Kr);
}
function onTouchMove(ze) {
    const Gr = getDocument(),
        Wr = this,
        Kr = Wr.touchEventsData,
        { params: Yr, touches: Qr, rtlTranslate: Jr, enabled: Zr } = Wr;
    if (!Zr || (!Yr.simulateTouch && ze.pointerType === "mouse")) return;
    let ei = ze;
    if ((ei.originalEvent && (ei = ei.originalEvent), ei.type === "pointermove" && (Kr.touchId !== null || ei.pointerId !== Kr.pointerId))) return;
    let ti;
    if (ei.type === "touchmove") {
        if (((ti = [...ei.changedTouches].filter((vi) => vi.identifier === Kr.touchId)[0]), !ti || ti.identifier !== Kr.touchId)) return;
    } else ti = ei;
    if (!Kr.isTouched) {
        Kr.startMoving && Kr.isScrolling && Wr.emit("touchMoveOpposite", ei);
        return;
    }
    const ri = ti.pageX,
        ii = ti.pageY;
    if (ei.preventedByNestedSwiper) {
        (Qr.startX = ri), (Qr.startY = ii);
        return;
    }
    if (!Wr.allowTouchMove) {
        ei.target.matches(Kr.focusableElements) || (Wr.allowClick = !1), Kr.isTouched && (Object.assign(Qr, { startX: ri, startY: ii, currentX: ri, currentY: ii }), (Kr.touchStartTime = now()));
        return;
    }
    if (Yr.touchReleaseOnEdges && !Yr.loop) {
        if (Wr.isVertical()) {
            if ((ii < Qr.startY && Wr.translate <= Wr.maxTranslate()) || (ii > Qr.startY && Wr.translate >= Wr.minTranslate())) {
                (Kr.isTouched = !1), (Kr.isMoved = !1);
                return;
            }
        } else if ((ri < Qr.startX && Wr.translate <= Wr.maxTranslate()) || (ri > Qr.startX && Wr.translate >= Wr.minTranslate())) return;
    }
    if (Gr.activeElement && ei.target === Gr.activeElement && ei.target.matches(Kr.focusableElements)) {
        (Kr.isMoved = !0), (Wr.allowClick = !1);
        return;
    }
    Kr.allowTouchCallbacks && Wr.emit("touchMove", ei), (Qr.previousX = Qr.currentX), (Qr.previousY = Qr.currentY), (Qr.currentX = ri), (Qr.currentY = ii);
    const ni = Qr.currentX - Qr.startX,
        si = Qr.currentY - Qr.startY;
    if (Wr.params.threshold && Math.sqrt(ni ** 2 + si ** 2) < Wr.params.threshold) return;
    if (typeof Kr.isScrolling > "u") {
        let vi;
        (Wr.isHorizontal() && Qr.currentY === Qr.startY) || (Wr.isVertical() && Qr.currentX === Qr.startX)
            ? (Kr.isScrolling = !1)
            : ni * ni + si * si >= 25 && ((vi = (Math.atan2(Math.abs(si), Math.abs(ni)) * 180) / Math.PI), (Kr.isScrolling = Wr.isHorizontal() ? vi > Yr.touchAngle : 90 - vi > Yr.touchAngle));
    }
    if (
        (Kr.isScrolling && Wr.emit("touchMoveOpposite", ei),
        typeof Kr.startMoving > "u" && (Qr.currentX !== Qr.startX || Qr.currentY !== Qr.startY) && (Kr.startMoving = !0),
        Kr.isScrolling || (ei.type === "touchmove" && Kr.preventTouchMoveFromPointerMove))
    ) {
        Kr.isTouched = !1;
        return;
    }
    if (!Kr.startMoving) return;
    (Wr.allowClick = !1), !Yr.cssMode && ei.cancelable && ei.preventDefault(), Yr.touchMoveStopPropagation && !Yr.nested && ei.stopPropagation();
    let li = Wr.isHorizontal() ? ni : si,
        ui = Wr.isHorizontal() ? Qr.currentX - Qr.previousX : Qr.currentY - Qr.previousY;
    Yr.oneWayMovement && ((li = Math.abs(li) * (Jr ? 1 : -1)), (ui = Math.abs(ui) * (Jr ? 1 : -1))), (Qr.diff = li), (li *= Yr.touchRatio), Jr && ((li = -li), (ui = -ui));
    const oi = Wr.touchesDirection;
    (Wr.swipeDirection = li > 0 ? "prev" : "next"), (Wr.touchesDirection = ui > 0 ? "prev" : "next");
    const ai = Wr.params.loop && !Yr.cssMode,
        pi = (Wr.touchesDirection === "next" && Wr.allowSlideNext) || (Wr.touchesDirection === "prev" && Wr.allowSlidePrev);
    if (!Kr.isMoved) {
        if ((ai && pi && Wr.loopFix({ direction: Wr.swipeDirection }), (Kr.startTranslate = Wr.getTranslate()), Wr.setTransition(0), Wr.animating)) {
            const vi = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0, detail: { bySwiperTouchMove: !0 } });
            Wr.wrapperEl.dispatchEvent(vi);
        }
        (Kr.allowMomentumBounce = !1), Yr.grabCursor && (Wr.allowSlideNext === !0 || Wr.allowSlidePrev === !0) && Wr.setGrabCursor(!0), Wr.emit("sliderFirstMove", ei);
    }
    let ci;
    if ((new Date().getTime(), Kr.isMoved && Kr.allowThresholdMove && oi !== Wr.touchesDirection && ai && pi && Math.abs(li) >= 1)) {
        Object.assign(Qr, { startX: ri, startY: ii, currentX: ri, currentY: ii, startTranslate: Kr.currentTranslate }), (Kr.loopSwapReset = !0), (Kr.startTranslate = Kr.currentTranslate);
        return;
    }
    Wr.emit("sliderMove", ei), (Kr.isMoved = !0), (Kr.currentTranslate = li + Kr.startTranslate);
    let hi = !0,
        fi = Yr.resistanceRatio;
    if (
        (Yr.touchReleaseOnEdges && (fi = 0),
        li > 0
            ? (ai &&
                  pi &&
                  !ci &&
                  Kr.allowThresholdMove &&
                  Kr.currentTranslate >
                      (Yr.centeredSlides
                          ? Wr.minTranslate() -
                            Wr.slidesSizesGrid[Wr.activeIndex + 1] -
                            (Yr.slidesPerView !== "auto" && Wr.slides.length - Yr.slidesPerView >= 2 ? Wr.slidesSizesGrid[Wr.activeIndex + 1] + Wr.params.spaceBetween : 0) -
                            Wr.params.spaceBetween
                          : Wr.minTranslate()) &&
                  Wr.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
              Kr.currentTranslate > Wr.minTranslate() && ((hi = !1), Yr.resistance && (Kr.currentTranslate = Wr.minTranslate() - 1 + (-Wr.minTranslate() + Kr.startTranslate + li) ** fi)))
            : li < 0 &&
              (ai &&
                  pi &&
                  !ci &&
                  Kr.allowThresholdMove &&
                  Kr.currentTranslate <
                      (Yr.centeredSlides
                          ? Wr.maxTranslate() +
                            Wr.slidesSizesGrid[Wr.slidesSizesGrid.length - 1] +
                            Wr.params.spaceBetween +
                            (Yr.slidesPerView !== "auto" && Wr.slides.length - Yr.slidesPerView >= 2 ? Wr.slidesSizesGrid[Wr.slidesSizesGrid.length - 1] + Wr.params.spaceBetween : 0)
                          : Wr.maxTranslate()) &&
                  Wr.loopFix({ direction: "next", setTranslate: !0, activeSlideIndex: Wr.slides.length - (Yr.slidesPerView === "auto" ? Wr.slidesPerViewDynamic() : Math.ceil(parseFloat(Yr.slidesPerView, 10))) }),
              Kr.currentTranslate < Wr.maxTranslate() && ((hi = !1), Yr.resistance && (Kr.currentTranslate = Wr.maxTranslate() + 1 - (Wr.maxTranslate() - Kr.startTranslate - li) ** fi))),
        hi && (ei.preventedByNestedSwiper = !0),
        !Wr.allowSlideNext && Wr.swipeDirection === "next" && Kr.currentTranslate < Kr.startTranslate && (Kr.currentTranslate = Kr.startTranslate),
        !Wr.allowSlidePrev && Wr.swipeDirection === "prev" && Kr.currentTranslate > Kr.startTranslate && (Kr.currentTranslate = Kr.startTranslate),
        !Wr.allowSlidePrev && !Wr.allowSlideNext && (Kr.currentTranslate = Kr.startTranslate),
        Yr.threshold > 0)
    )
        if (Math.abs(li) > Yr.threshold || Kr.allowThresholdMove) {
            if (!Kr.allowThresholdMove) {
                (Kr.allowThresholdMove = !0), (Qr.startX = Qr.currentX), (Qr.startY = Qr.currentY), (Kr.currentTranslate = Kr.startTranslate), (Qr.diff = Wr.isHorizontal() ? Qr.currentX - Qr.startX : Qr.currentY - Qr.startY);
                return;
            }
        } else {
            Kr.currentTranslate = Kr.startTranslate;
            return;
        }
    !Yr.followFinger ||
        Yr.cssMode ||
        (((Yr.freeMode && Yr.freeMode.enabled && Wr.freeMode) || Yr.watchSlidesProgress) && (Wr.updateActiveIndex(), Wr.updateSlidesClasses()),
        Yr.freeMode && Yr.freeMode.enabled && Wr.freeMode && Wr.freeMode.onTouchMove(),
        Wr.updateProgress(Kr.currentTranslate),
        Wr.setTranslate(Kr.currentTranslate));
}
function onTouchEnd(ze) {
    const Gr = this,
        Wr = Gr.touchEventsData;
    let Kr = ze;
    Kr.originalEvent && (Kr = Kr.originalEvent);
    let Yr;
    if (Kr.type === "touchend" || Kr.type === "touchcancel") {
        if (((Yr = [...Kr.changedTouches].filter((fi) => fi.identifier === Wr.touchId)[0]), !Yr || Yr.identifier !== Wr.touchId)) return;
    } else {
        if (Wr.touchId !== null || Kr.pointerId !== Wr.pointerId) return;
        Yr = Kr;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(Kr.type) && !(["pointercancel", "contextmenu"].includes(Kr.type) && (Gr.browser.isSafari || Gr.browser.isWebView))) return;
    (Wr.pointerId = null), (Wr.touchId = null);
    const { params: Jr, touches: Zr, rtlTranslate: ei, slidesGrid: ti, enabled: ri } = Gr;
    if (!ri || (!Jr.simulateTouch && Kr.pointerType === "mouse")) return;
    if ((Wr.allowTouchCallbacks && Gr.emit("touchEnd", Kr), (Wr.allowTouchCallbacks = !1), !Wr.isTouched)) {
        Wr.isMoved && Jr.grabCursor && Gr.setGrabCursor(!1), (Wr.isMoved = !1), (Wr.startMoving = !1);
        return;
    }
    Jr.grabCursor && Wr.isMoved && Wr.isTouched && (Gr.allowSlideNext === !0 || Gr.allowSlidePrev === !0) && Gr.setGrabCursor(!1);
    const ii = now(),
        ni = ii - Wr.touchStartTime;
    if (Gr.allowClick) {
        const fi = Kr.path || (Kr.composedPath && Kr.composedPath());
        Gr.updateClickedSlide((fi && fi[0]) || Kr.target, fi), Gr.emit("tap click", Kr), ni < 300 && ii - Wr.lastClickTime < 300 && Gr.emit("doubleTap doubleClick", Kr);
    }
    if (
        ((Wr.lastClickTime = now()),
        nextTick(() => {
            Gr.destroyed || (Gr.allowClick = !0);
        }),
        !Wr.isTouched || !Wr.isMoved || !Gr.swipeDirection || (Zr.diff === 0 && !Wr.loopSwapReset) || (Wr.currentTranslate === Wr.startTranslate && !Wr.loopSwapReset))
    ) {
        (Wr.isTouched = !1), (Wr.isMoved = !1), (Wr.startMoving = !1);
        return;
    }
    (Wr.isTouched = !1), (Wr.isMoved = !1), (Wr.startMoving = !1);
    let si;
    if ((Jr.followFinger ? (si = ei ? Gr.translate : -Gr.translate) : (si = -Wr.currentTranslate), Jr.cssMode)) return;
    if (Jr.freeMode && Jr.freeMode.enabled) {
        Gr.freeMode.onTouchEnd({ currentPos: si });
        return;
    }
    const li = si >= -Gr.maxTranslate() && !Gr.params.loop;
    let ui = 0,
        oi = Gr.slidesSizesGrid[0];
    for (let fi = 0; fi < ti.length; fi += fi < Jr.slidesPerGroupSkip ? 1 : Jr.slidesPerGroup) {
        const vi = fi < Jr.slidesPerGroupSkip - 1 ? 1 : Jr.slidesPerGroup;
        typeof ti[fi + vi] < "u" ? (li || (si >= ti[fi] && si < ti[fi + vi])) && ((ui = fi), (oi = ti[fi + vi] - ti[fi])) : (li || si >= ti[fi]) && ((ui = fi), (oi = ti[ti.length - 1] - ti[ti.length - 2]));
    }
    let ai = null,
        pi = null;
    Jr.rewind && (Gr.isBeginning ? (pi = Jr.virtual && Jr.virtual.enabled && Gr.virtual ? Gr.virtual.slides.length - 1 : Gr.slides.length - 1) : Gr.isEnd && (ai = 0));
    const ci = (si - ti[ui]) / oi,
        hi = ui < Jr.slidesPerGroupSkip - 1 ? 1 : Jr.slidesPerGroup;
    if (ni > Jr.longSwipesMs) {
        if (!Jr.longSwipes) {
            Gr.slideTo(Gr.activeIndex);
            return;
        }
        Gr.swipeDirection === "next" && (ci >= Jr.longSwipesRatio ? Gr.slideTo(Jr.rewind && Gr.isEnd ? ai : ui + hi) : Gr.slideTo(ui)),
            Gr.swipeDirection === "prev" && (ci > 1 - Jr.longSwipesRatio ? Gr.slideTo(ui + hi) : pi !== null && ci < 0 && Math.abs(ci) > Jr.longSwipesRatio ? Gr.slideTo(pi) : Gr.slideTo(ui));
    } else {
        if (!Jr.shortSwipes) {
            Gr.slideTo(Gr.activeIndex);
            return;
        }
        Gr.navigation && (Kr.target === Gr.navigation.nextEl || Kr.target === Gr.navigation.prevEl)
            ? Kr.target === Gr.navigation.nextEl
                ? Gr.slideTo(ui + hi)
                : Gr.slideTo(ui)
            : (Gr.swipeDirection === "next" && Gr.slideTo(ai !== null ? ai : ui + hi), Gr.swipeDirection === "prev" && Gr.slideTo(pi !== null ? pi : ui));
    }
}
function onResize() {
    const ze = this,
        { params: Gr, el: Wr } = ze;
    if (Wr && Wr.offsetWidth === 0) return;
    Gr.breakpoints && ze.setBreakpoint();
    const { allowSlideNext: Kr, allowSlidePrev: Yr, snapGrid: Qr } = ze,
        Jr = ze.virtual && ze.params.virtual.enabled;
    (ze.allowSlideNext = !0), (ze.allowSlidePrev = !0), ze.updateSize(), ze.updateSlides(), ze.updateSlidesClasses();
    const Zr = Jr && Gr.loop;
    (Gr.slidesPerView === "auto" || Gr.slidesPerView > 1) && ze.isEnd && !ze.isBeginning && !ze.params.centeredSlides && !Zr
        ? ze.slideTo(ze.slides.length - 1, 0, !1, !0)
        : ze.params.loop && !Jr
        ? ze.slideToLoop(ze.realIndex, 0, !1, !0)
        : ze.slideTo(ze.activeIndex, 0, !1, !0),
        ze.autoplay &&
            ze.autoplay.running &&
            ze.autoplay.paused &&
            (clearTimeout(ze.autoplay.resizeTimeout),
            (ze.autoplay.resizeTimeout = setTimeout(() => {
                ze.autoplay && ze.autoplay.running && ze.autoplay.paused && ze.autoplay.resume();
            }, 500))),
        (ze.allowSlidePrev = Yr),
        (ze.allowSlideNext = Kr),
        ze.params.watchOverflow && Qr !== ze.snapGrid && ze.checkOverflow();
}
function onClick(ze) {
    const Gr = this;
    Gr.enabled && (Gr.allowClick || (Gr.params.preventClicks && ze.preventDefault(), Gr.params.preventClicksPropagation && Gr.animating && (ze.stopPropagation(), ze.stopImmediatePropagation())));
}
function onScroll() {
    const ze = this,
        { wrapperEl: Gr, rtlTranslate: Wr, enabled: Kr } = ze;
    if (!Kr) return;
    (ze.previousTranslate = ze.translate), ze.isHorizontal() ? (ze.translate = -Gr.scrollLeft) : (ze.translate = -Gr.scrollTop), ze.translate === 0 && (ze.translate = 0), ze.updateActiveIndex(), ze.updateSlidesClasses();
    let Yr;
    const Qr = ze.maxTranslate() - ze.minTranslate();
    Qr === 0 ? (Yr = 0) : (Yr = (ze.translate - ze.minTranslate()) / Qr), Yr !== ze.progress && ze.updateProgress(Wr ? -ze.translate : ze.translate), ze.emit("setTranslate", ze.translate, !1);
}
function onLoad(ze) {
    const Gr = this;
    processLazyPreloader(Gr, ze.target), !(Gr.params.cssMode || (Gr.params.slidesPerView !== "auto" && !Gr.params.autoHeight)) && Gr.update();
}
function onDocumentTouchStart() {
    const ze = this;
    ze.documentTouchHandlerProceeded || ((ze.documentTouchHandlerProceeded = !0), ze.params.touchReleaseOnEdges && (ze.el.style.touchAction = "auto"));
}
const events = (ze, Gr) => {
    const Wr = getDocument(),
        { params: Kr, el: Yr, wrapperEl: Qr, device: Jr } = ze,
        Zr = !!Kr.nested,
        ei = Gr === "on" ? "addEventListener" : "removeEventListener",
        ti = Gr;
    !Yr ||
        typeof Yr == "string" ||
        (Wr[ei]("touchstart", ze.onDocumentTouchStart, { passive: !1, capture: Zr }),
        Yr[ei]("touchstart", ze.onTouchStart, { passive: !1 }),
        Yr[ei]("pointerdown", ze.onTouchStart, { passive: !1 }),
        Wr[ei]("touchmove", ze.onTouchMove, { passive: !1, capture: Zr }),
        Wr[ei]("pointermove", ze.onTouchMove, { passive: !1, capture: Zr }),
        Wr[ei]("touchend", ze.onTouchEnd, { passive: !0 }),
        Wr[ei]("pointerup", ze.onTouchEnd, { passive: !0 }),
        Wr[ei]("pointercancel", ze.onTouchEnd, { passive: !0 }),
        Wr[ei]("touchcancel", ze.onTouchEnd, { passive: !0 }),
        Wr[ei]("pointerout", ze.onTouchEnd, { passive: !0 }),
        Wr[ei]("pointerleave", ze.onTouchEnd, { passive: !0 }),
        Wr[ei]("contextmenu", ze.onTouchEnd, { passive: !0 }),
        (Kr.preventClicks || Kr.preventClicksPropagation) && Yr[ei]("click", ze.onClick, !0),
        Kr.cssMode && Qr[ei]("scroll", ze.onScroll),
        Kr.updateOnWindowResize ? ze[ti](Jr.ios || Jr.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : ze[ti]("observerUpdate", onResize, !0),
        Yr[ei]("load", ze.onLoad, { capture: !0 }));
};
function attachEvents() {
    const ze = this,
        { params: Gr } = ze;
    (ze.onTouchStart = onTouchStart.bind(ze)),
        (ze.onTouchMove = onTouchMove.bind(ze)),
        (ze.onTouchEnd = onTouchEnd.bind(ze)),
        (ze.onDocumentTouchStart = onDocumentTouchStart.bind(ze)),
        Gr.cssMode && (ze.onScroll = onScroll.bind(ze)),
        (ze.onClick = onClick.bind(ze)),
        (ze.onLoad = onLoad.bind(ze)),
        events(ze, "on");
}
function detachEvents() {
    events(this, "off");
}
var events$1 = { attachEvents, detachEvents };
const isGridEnabled = (ze, Gr) => ze.grid && Gr.grid && Gr.grid.rows > 1;
function setBreakpoint() {
    const ze = this,
        { realIndex: Gr, initialized: Wr, params: Kr, el: Yr } = ze,
        Qr = Kr.breakpoints;
    if (!Qr || (Qr && Object.keys(Qr).length === 0)) return;
    const Jr = ze.getBreakpoint(Qr, ze.params.breakpointsBase, ze.el);
    if (!Jr || ze.currentBreakpoint === Jr) return;
    const ei = (Jr in Qr ? Qr[Jr] : void 0) || ze.originalParams,
        ti = isGridEnabled(ze, Kr),
        ri = isGridEnabled(ze, ei),
        ii = ze.params.grabCursor,
        ni = ei.grabCursor,
        si = Kr.enabled;
    ti && !ri
        ? (Yr.classList.remove(`${Kr.containerModifierClass}grid`, `${Kr.containerModifierClass}grid-column`), ze.emitContainerClasses())
        : !ti &&
          ri &&
          (Yr.classList.add(`${Kr.containerModifierClass}grid`),
          ((ei.grid.fill && ei.grid.fill === "column") || (!ei.grid.fill && Kr.grid.fill === "column")) && Yr.classList.add(`${Kr.containerModifierClass}grid-column`),
          ze.emitContainerClasses()),
        ii && !ni ? ze.unsetGrabCursor() : !ii && ni && ze.setGrabCursor(),
        ["navigation", "pagination", "scrollbar"].forEach((ci) => {
            if (typeof ei[ci] > "u") return;
            const hi = Kr[ci] && Kr[ci].enabled,
                fi = ei[ci] && ei[ci].enabled;
            hi && !fi && ze[ci].disable(), !hi && fi && ze[ci].enable();
        });
    const li = ei.direction && ei.direction !== Kr.direction,
        ui = Kr.loop && (ei.slidesPerView !== Kr.slidesPerView || li),
        oi = Kr.loop;
    li && Wr && ze.changeDirection(), extend(ze.params, ei);
    const ai = ze.params.enabled,
        pi = ze.params.loop;
    Object.assign(ze, { allowTouchMove: ze.params.allowTouchMove, allowSlideNext: ze.params.allowSlideNext, allowSlidePrev: ze.params.allowSlidePrev }),
        si && !ai ? ze.disable() : !si && ai && ze.enable(),
        (ze.currentBreakpoint = Jr),
        ze.emit("_beforeBreakpoint", ei),
        Wr && (ui ? (ze.loopDestroy(), ze.loopCreate(Gr), ze.updateSlides()) : !oi && pi ? (ze.loopCreate(Gr), ze.updateSlides()) : oi && !pi && ze.loopDestroy()),
        ze.emit("breakpoint", ei);
}
function getBreakpoint(ze, Gr, Wr) {
    if ((Gr === void 0 && (Gr = "window"), !ze || (Gr === "container" && !Wr))) return;
    let Kr = !1;
    const Yr = getWindow(),
        Qr = Gr === "window" ? Yr.innerHeight : Wr.clientHeight,
        Jr = Object.keys(ze).map((Zr) => {
            if (typeof Zr == "string" && Zr.indexOf("@") === 0) {
                const ei = parseFloat(Zr.substr(1));
                return { value: Qr * ei, point: Zr };
            }
            return { value: Zr, point: Zr };
        });
    Jr.sort((Zr, ei) => parseInt(Zr.value, 10) - parseInt(ei.value, 10));
    for (let Zr = 0; Zr < Jr.length; Zr += 1) {
        const { point: ei, value: ti } = Jr[Zr];
        Gr === "window" ? Yr.matchMedia(`(min-width: ${ti}px)`).matches && (Kr = ei) : ti <= Wr.clientWidth && (Kr = ei);
    }
    return Kr || "max";
}
var breakpoints = { setBreakpoint, getBreakpoint };
function prepareClasses(ze, Gr) {
    const Wr = [];
    return (
        ze.forEach((Kr) => {
            typeof Kr == "object"
                ? Object.keys(Kr).forEach((Yr) => {
                      Kr[Yr] && Wr.push(Gr + Yr);
                  })
                : typeof Kr == "string" && Wr.push(Gr + Kr);
        }),
        Wr
    );
}
function addClasses() {
    const ze = this,
        { classNames: Gr, params: Wr, rtl: Kr, el: Yr, device: Qr } = ze,
        Jr = prepareClasses(
            [
                "initialized",
                Wr.direction,
                { "free-mode": ze.params.freeMode && Wr.freeMode.enabled },
                { autoheight: Wr.autoHeight },
                { rtl: Kr },
                { grid: Wr.grid && Wr.grid.rows > 1 },
                { "grid-column": Wr.grid && Wr.grid.rows > 1 && Wr.grid.fill === "column" },
                { android: Qr.android },
                { ios: Qr.ios },
                { "css-mode": Wr.cssMode },
                { centered: Wr.cssMode && Wr.centeredSlides },
                { "watch-progress": Wr.watchSlidesProgress },
            ],
            Wr.containerModifierClass
        );
    Gr.push(...Jr), Yr.classList.add(...Gr), ze.emitContainerClasses();
}
function removeClasses() {
    const ze = this,
        { el: Gr, classNames: Wr } = ze;
    !Gr || typeof Gr == "string" || (Gr.classList.remove(...Wr), ze.emitContainerClasses());
}
var classes = { addClasses, removeClasses };
function checkOverflow() {
    const ze = this,
        { isLocked: Gr, params: Wr } = ze,
        { slidesOffsetBefore: Kr } = Wr;
    if (Kr) {
        const Yr = ze.slides.length - 1,
            Qr = ze.slidesGrid[Yr] + ze.slidesSizesGrid[Yr] + Kr * 2;
        ze.isLocked = ze.size > Qr;
    } else ze.isLocked = ze.snapGrid.length === 1;
    Wr.allowSlideNext === !0 && (ze.allowSlideNext = !ze.isLocked), Wr.allowSlidePrev === !0 && (ze.allowSlidePrev = !ze.isLocked), Gr && Gr !== ze.isLocked && (ze.isEnd = !1), Gr !== ze.isLocked && ze.emit(ze.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = { checkOverflow },
    defaults = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
function moduleExtendParams(ze, Gr) {
    return function (Kr) {
        Kr === void 0 && (Kr = {});
        const Yr = Object.keys(Kr)[0],
            Qr = Kr[Yr];
        if (typeof Qr != "object" || Qr === null) {
            extend(Gr, Kr);
            return;
        }
        if (
            (ze[Yr] === !0 && (ze[Yr] = { enabled: !0 }),
            Yr === "navigation" && ze[Yr] && ze[Yr].enabled && !ze[Yr].prevEl && !ze[Yr].nextEl && (ze[Yr].auto = !0),
            ["pagination", "scrollbar"].indexOf(Yr) >= 0 && ze[Yr] && ze[Yr].enabled && !ze[Yr].el && (ze[Yr].auto = !0),
            !(Yr in ze && "enabled" in Qr))
        ) {
            extend(Gr, Kr);
            return;
        }
        typeof ze[Yr] == "object" && !("enabled" in ze[Yr]) && (ze[Yr].enabled = !0), ze[Yr] || (ze[Yr] = { enabled: !1 }), extend(Gr, Kr);
    };
}
const prototypes = { eventsEmitter, update, translate, transition, slide, loop, grabCursor, events: events$1, breakpoints, checkOverflow: checkOverflow$1, classes },
    extendedDefaults = {};
class Swiper {
    constructor() {
        let Gr, Wr;
        for (var Kr = arguments.length, Yr = new Array(Kr), Qr = 0; Qr < Kr; Qr++) Yr[Qr] = arguments[Qr];
        Yr.length === 1 && Yr[0].constructor && Object.prototype.toString.call(Yr[0]).slice(8, -1) === "Object" ? (Wr = Yr[0]) : ([Gr, Wr] = Yr), Wr || (Wr = {}), (Wr = extend({}, Wr)), Gr && !Wr.el && (Wr.el = Gr);
        const Jr = getDocument();
        if (Wr.el && typeof Wr.el == "string" && Jr.querySelectorAll(Wr.el).length > 1) {
            const ri = [];
            return (
                Jr.querySelectorAll(Wr.el).forEach((ii) => {
                    const ni = extend({}, Wr, { el: ii });
                    ri.push(new Swiper(ni));
                }),
                ri
            );
        }
        const Zr = this;
        (Zr.__swiper__ = !0),
            (Zr.support = getSupport()),
            (Zr.device = getDevice({ userAgent: Wr.userAgent })),
            (Zr.browser = getBrowser()),
            (Zr.eventsListeners = {}),
            (Zr.eventsAnyListeners = []),
            (Zr.modules = [...Zr.__modules__]),
            Wr.modules && Array.isArray(Wr.modules) && Zr.modules.push(...Wr.modules);
        const ei = {};
        Zr.modules.forEach((ri) => {
            ri({ params: Wr, swiper: Zr, extendParams: moduleExtendParams(Wr, ei), on: Zr.on.bind(Zr), once: Zr.once.bind(Zr), off: Zr.off.bind(Zr), emit: Zr.emit.bind(Zr) });
        });
        const ti = extend({}, defaults, ei);
        return (
            (Zr.params = extend({}, ti, extendedDefaults, Wr)),
            (Zr.originalParams = extend({}, Zr.params)),
            (Zr.passedParams = extend({}, Wr)),
            Zr.params &&
                Zr.params.on &&
                Object.keys(Zr.params.on).forEach((ri) => {
                    Zr.on(ri, Zr.params.on[ri]);
                }),
            Zr.params && Zr.params.onAny && Zr.onAny(Zr.params.onAny),
            Object.assign(Zr, {
                enabled: Zr.params.enabled,
                el: Gr,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return Zr.params.direction === "horizontal";
                },
                isVertical() {
                    return Zr.params.direction === "vertical";
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: Zr.params.allowSlideNext,
                allowSlidePrev: Zr.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: Zr.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null,
                },
                allowClick: !0,
                allowTouchMove: Zr.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
            }),
            Zr.emit("_swiper"),
            Zr.params.init && Zr.init(),
            Zr
        );
    }
    getDirectionLabel(Gr) {
        return this.isHorizontal()
            ? Gr
            : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
              }[Gr];
    }
    getSlideIndex(Gr) {
        const { slidesEl: Wr, params: Kr } = this,
            Yr = elementChildren(Wr, `.${Kr.slideClass}, swiper-slide`),
            Qr = elementIndex(Yr[0]);
        return elementIndex(Gr) - Qr;
    }
    getSlideIndexByData(Gr) {
        return this.getSlideIndex(this.slides.filter((Wr) => Wr.getAttribute("data-swiper-slide-index") * 1 === Gr)[0]);
    }
    recalcSlides() {
        const Gr = this,
            { slidesEl: Wr, params: Kr } = Gr;
        Gr.slides = elementChildren(Wr, `.${Kr.slideClass}, swiper-slide`);
    }
    enable() {
        const Gr = this;
        Gr.enabled || ((Gr.enabled = !0), Gr.params.grabCursor && Gr.setGrabCursor(), Gr.emit("enable"));
    }
    disable() {
        const Gr = this;
        Gr.enabled && ((Gr.enabled = !1), Gr.params.grabCursor && Gr.unsetGrabCursor(), Gr.emit("disable"));
    }
    setProgress(Gr, Wr) {
        const Kr = this;
        Gr = Math.min(Math.max(Gr, 0), 1);
        const Yr = Kr.minTranslate(),
            Jr = (Kr.maxTranslate() - Yr) * Gr + Yr;
        Kr.translateTo(Jr, typeof Wr > "u" ? 0 : Wr), Kr.updateActiveIndex(), Kr.updateSlidesClasses();
    }
    emitContainerClasses() {
        const Gr = this;
        if (!Gr.params._emitClasses || !Gr.el) return;
        const Wr = Gr.el.className.split(" ").filter((Kr) => Kr.indexOf("swiper") === 0 || Kr.indexOf(Gr.params.containerModifierClass) === 0);
        Gr.emit("_containerClasses", Wr.join(" "));
    }
    getSlideClasses(Gr) {
        const Wr = this;
        return Wr.destroyed
            ? ""
            : Gr.className
                  .split(" ")
                  .filter((Kr) => Kr.indexOf("swiper-slide") === 0 || Kr.indexOf(Wr.params.slideClass) === 0)
                  .join(" ");
    }
    emitSlidesClasses() {
        const Gr = this;
        if (!Gr.params._emitClasses || !Gr.el) return;
        const Wr = [];
        Gr.slides.forEach((Kr) => {
            const Yr = Gr.getSlideClasses(Kr);
            Wr.push({ slideEl: Kr, classNames: Yr }), Gr.emit("_slideClass", Kr, Yr);
        }),
            Gr.emit("_slideClasses", Wr);
    }
    slidesPerViewDynamic(Gr, Wr) {
        Gr === void 0 && (Gr = "current"), Wr === void 0 && (Wr = !1);
        const Kr = this,
            { params: Yr, slides: Qr, slidesGrid: Jr, slidesSizesGrid: Zr, size: ei, activeIndex: ti } = Kr;
        let ri = 1;
        if (typeof Yr.slidesPerView == "number") return Yr.slidesPerView;
        if (Yr.centeredSlides) {
            let ii = Qr[ti] ? Math.ceil(Qr[ti].swiperSlideSize) : 0,
                ni;
            for (let si = ti + 1; si < Qr.length; si += 1) Qr[si] && !ni && ((ii += Math.ceil(Qr[si].swiperSlideSize)), (ri += 1), ii > ei && (ni = !0));
            for (let si = ti - 1; si >= 0; si -= 1) Qr[si] && !ni && ((ii += Qr[si].swiperSlideSize), (ri += 1), ii > ei && (ni = !0));
        } else if (Gr === "current") for (let ii = ti + 1; ii < Qr.length; ii += 1) (Wr ? Jr[ii] + Zr[ii] - Jr[ti] < ei : Jr[ii] - Jr[ti] < ei) && (ri += 1);
        else for (let ii = ti - 1; ii >= 0; ii -= 1) Jr[ti] - Jr[ii] < ei && (ri += 1);
        return ri;
    }
    update() {
        const Gr = this;
        if (!Gr || Gr.destroyed) return;
        const { snapGrid: Wr, params: Kr } = Gr;
        Kr.breakpoints && Gr.setBreakpoint(),
            [...Gr.el.querySelectorAll('[loading="lazy"]')].forEach((Jr) => {
                Jr.complete && processLazyPreloader(Gr, Jr);
            }),
            Gr.updateSize(),
            Gr.updateSlides(),
            Gr.updateProgress(),
            Gr.updateSlidesClasses();
        function Yr() {
            const Jr = Gr.rtlTranslate ? Gr.translate * -1 : Gr.translate,
                Zr = Math.min(Math.max(Jr, Gr.maxTranslate()), Gr.minTranslate());
            Gr.setTranslate(Zr), Gr.updateActiveIndex(), Gr.updateSlidesClasses();
        }
        let Qr;
        if (Kr.freeMode && Kr.freeMode.enabled && !Kr.cssMode) Yr(), Kr.autoHeight && Gr.updateAutoHeight();
        else {
            if ((Kr.slidesPerView === "auto" || Kr.slidesPerView > 1) && Gr.isEnd && !Kr.centeredSlides) {
                const Jr = Gr.virtual && Kr.virtual.enabled ? Gr.virtual.slides : Gr.slides;
                Qr = Gr.slideTo(Jr.length - 1, 0, !1, !0);
            } else Qr = Gr.slideTo(Gr.activeIndex, 0, !1, !0);
            Qr || Yr();
        }
        Kr.watchOverflow && Wr !== Gr.snapGrid && Gr.checkOverflow(), Gr.emit("update");
    }
    changeDirection(Gr, Wr) {
        Wr === void 0 && (Wr = !0);
        const Kr = this,
            Yr = Kr.params.direction;
        return (
            Gr || (Gr = Yr === "horizontal" ? "vertical" : "horizontal"),
            Gr === Yr ||
                (Gr !== "horizontal" && Gr !== "vertical") ||
                (Kr.el.classList.remove(`${Kr.params.containerModifierClass}${Yr}`),
                Kr.el.classList.add(`${Kr.params.containerModifierClass}${Gr}`),
                Kr.emitContainerClasses(),
                (Kr.params.direction = Gr),
                Kr.slides.forEach((Qr) => {
                    Gr === "vertical" ? (Qr.style.width = "") : (Qr.style.height = "");
                }),
                Kr.emit("changeDirection"),
                Wr && Kr.update()),
            Kr
        );
    }
    changeLanguageDirection(Gr) {
        const Wr = this;
        (Wr.rtl && Gr === "rtl") ||
            (!Wr.rtl && Gr === "ltr") ||
            ((Wr.rtl = Gr === "rtl"),
            (Wr.rtlTranslate = Wr.params.direction === "horizontal" && Wr.rtl),
            Wr.rtl ? (Wr.el.classList.add(`${Wr.params.containerModifierClass}rtl`), (Wr.el.dir = "rtl")) : (Wr.el.classList.remove(`${Wr.params.containerModifierClass}rtl`), (Wr.el.dir = "ltr")),
            Wr.update());
    }
    mount(Gr) {
        const Wr = this;
        if (Wr.mounted) return !0;
        let Kr = Gr || Wr.params.el;
        if ((typeof Kr == "string" && (Kr = document.querySelector(Kr)), !Kr)) return !1;
        (Kr.swiper = Wr), Kr.parentNode && Kr.parentNode.host && Kr.parentNode.host.nodeName === Wr.params.swiperElementNodeName.toUpperCase() && (Wr.isElement = !0);
        const Yr = () => `.${(Wr.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let Jr = Kr && Kr.shadowRoot && Kr.shadowRoot.querySelector ? Kr.shadowRoot.querySelector(Yr()) : elementChildren(Kr, Yr())[0];
        return (
            !Jr &&
                Wr.params.createElements &&
                ((Jr = createElement("div", Wr.params.wrapperClass)),
                Kr.append(Jr),
                elementChildren(Kr, `.${Wr.params.slideClass}`).forEach((Zr) => {
                    Jr.append(Zr);
                })),
            Object.assign(Wr, {
                el: Kr,
                wrapperEl: Jr,
                slidesEl: Wr.isElement && !Kr.parentNode.host.slideSlots ? Kr.parentNode.host : Jr,
                hostEl: Wr.isElement ? Kr.parentNode.host : Kr,
                mounted: !0,
                rtl: Kr.dir.toLowerCase() === "rtl" || elementStyle(Kr, "direction") === "rtl",
                rtlTranslate: Wr.params.direction === "horizontal" && (Kr.dir.toLowerCase() === "rtl" || elementStyle(Kr, "direction") === "rtl"),
                wrongRTL: elementStyle(Jr, "display") === "-webkit-box",
            }),
            !0
        );
    }
    init(Gr) {
        const Wr = this;
        if (Wr.initialized || Wr.mount(Gr) === !1) return Wr;
        Wr.emit("beforeInit"),
            Wr.params.breakpoints && Wr.setBreakpoint(),
            Wr.addClasses(),
            Wr.updateSize(),
            Wr.updateSlides(),
            Wr.params.watchOverflow && Wr.checkOverflow(),
            Wr.params.grabCursor && Wr.enabled && Wr.setGrabCursor(),
            Wr.params.loop && Wr.virtual && Wr.params.virtual.enabled
                ? Wr.slideTo(Wr.params.initialSlide + Wr.virtual.slidesBefore, 0, Wr.params.runCallbacksOnInit, !1, !0)
                : Wr.slideTo(Wr.params.initialSlide, 0, Wr.params.runCallbacksOnInit, !1, !0),
            Wr.params.loop && Wr.loopCreate(),
            Wr.attachEvents();
        const Yr = [...Wr.el.querySelectorAll('[loading="lazy"]')];
        return (
            Wr.isElement && Yr.push(...Wr.hostEl.querySelectorAll('[loading="lazy"]')),
            Yr.forEach((Qr) => {
                Qr.complete
                    ? processLazyPreloader(Wr, Qr)
                    : Qr.addEventListener("load", (Jr) => {
                          processLazyPreloader(Wr, Jr.target);
                      });
            }),
            preload(Wr),
            (Wr.initialized = !0),
            preload(Wr),
            Wr.emit("init"),
            Wr.emit("afterInit"),
            Wr
        );
    }
    destroy(Gr, Wr) {
        Gr === void 0 && (Gr = !0), Wr === void 0 && (Wr = !0);
        const Kr = this,
            { params: Yr, el: Qr, wrapperEl: Jr, slides: Zr } = Kr;
        return (
            typeof Kr.params > "u" ||
                Kr.destroyed ||
                (Kr.emit("beforeDestroy"),
                (Kr.initialized = !1),
                Kr.detachEvents(),
                Yr.loop && Kr.loopDestroy(),
                Wr &&
                    (Kr.removeClasses(),
                    Qr && typeof Qr != "string" && Qr.removeAttribute("style"),
                    Jr && Jr.removeAttribute("style"),
                    Zr &&
                        Zr.length &&
                        Zr.forEach((ei) => {
                            ei.classList.remove(Yr.slideVisibleClass, Yr.slideFullyVisibleClass, Yr.slideActiveClass, Yr.slideNextClass, Yr.slidePrevClass), ei.removeAttribute("style"), ei.removeAttribute("data-swiper-slide-index");
                        })),
                Kr.emit("destroy"),
                Object.keys(Kr.eventsListeners).forEach((ei) => {
                    Kr.off(ei);
                }),
                Gr !== !1 && (Kr.el && typeof Kr.el != "string" && (Kr.el.swiper = null), deleteProps(Kr)),
                (Kr.destroyed = !0)),
            null
        );
    }
    static extendDefaults(Gr) {
        extend(extendedDefaults, Gr);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(Gr) {
        Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
        const Wr = Swiper.prototype.__modules__;
        typeof Gr == "function" && Wr.indexOf(Gr) < 0 && Wr.push(Gr);
    }
    static use(Gr) {
        return Array.isArray(Gr) ? (Gr.forEach((Wr) => Swiper.installModule(Wr)), Swiper) : (Swiper.installModule(Gr), Swiper);
    }
}
Object.keys(prototypes).forEach((ze) => {
    Object.keys(prototypes[ze]).forEach((Gr) => {
        Swiper.prototype[Gr] = prototypes[ze][Gr];
    });
});
Swiper.use([Resize, Observer]);
function Autoplay(ze) {
    let { swiper: Gr, extendParams: Wr, on: Kr, emit: Yr, params: Qr } = ze;
    (Gr.autoplay = { running: !1, paused: !1, timeLeft: 0 }), Wr({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !1, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } });
    let Jr,
        Zr,
        ei = Qr && Qr.autoplay ? Qr.autoplay.delay : 3e3,
        ti = Qr && Qr.autoplay ? Qr.autoplay.delay : 3e3,
        ri,
        ii = new Date().getTime(),
        ni,
        si,
        li,
        ui,
        oi,
        ai,
        pi;
    function ci(Si) {
        !Gr || Gr.destroyed || !Gr.wrapperEl || (Si.target === Gr.wrapperEl && (Gr.wrapperEl.removeEventListener("transitionend", ci), !(pi || (Si.detail && Si.detail.bySwiperTouchMove)) && di()));
    }
    const hi = () => {
            if (Gr.destroyed || !Gr.autoplay.running) return;
            Gr.autoplay.paused ? (ni = !0) : ni && ((ti = ri), (ni = !1));
            const Si = Gr.autoplay.paused ? ri : ii + ti - new Date().getTime();
            (Gr.autoplay.timeLeft = Si),
                Yr("autoplayTimeLeft", Si, Si / ei),
                (Zr = requestAnimationFrame(() => {
                    hi();
                }));
        },
        fi = () => {
            let Si;
            return (
                Gr.virtual && Gr.params.virtual.enabled ? (Si = Gr.slides.filter((Ci) => Ci.classList.contains("swiper-slide-active"))[0]) : (Si = Gr.slides[Gr.activeIndex]),
                Si ? parseInt(Si.getAttribute("data-swiper-autoplay"), 10) : void 0
            );
        },
        vi = (Si) => {
            if (Gr.destroyed || !Gr.autoplay.running) return;
            cancelAnimationFrame(Zr), hi();
            let Ai = typeof Si > "u" ? Gr.params.autoplay.delay : Si;
            (ei = Gr.params.autoplay.delay), (ti = Gr.params.autoplay.delay);
            const Ci = fi();
            !Number.isNaN(Ci) && Ci > 0 && typeof Si > "u" && ((Ai = Ci), (ei = Ci), (ti = Ci)), (ri = Ai);
            const Oi = Gr.params.speed,
                Li = () => {
                    !Gr ||
                        Gr.destroyed ||
                        (Gr.params.autoplay.reverseDirection
                            ? !Gr.isBeginning || Gr.params.loop || Gr.params.rewind
                                ? (Gr.slidePrev(Oi, !0, !0), Yr("autoplay"))
                                : Gr.params.autoplay.stopOnLastSlide || (Gr.slideTo(Gr.slides.length - 1, Oi, !0, !0), Yr("autoplay"))
                            : !Gr.isEnd || Gr.params.loop || Gr.params.rewind
                            ? (Gr.slideNext(Oi, !0, !0), Yr("autoplay"))
                            : Gr.params.autoplay.stopOnLastSlide || (Gr.slideTo(0, Oi, !0, !0), Yr("autoplay")),
                        Gr.params.cssMode &&
                            ((ii = new Date().getTime()),
                            requestAnimationFrame(() => {
                                vi();
                            })));
                };
            return (
                Ai > 0
                    ? (clearTimeout(Jr),
                      (Jr = setTimeout(() => {
                          Li();
                      }, Ai)))
                    : requestAnimationFrame(() => {
                          Li();
                      }),
                Ai
            );
        },
        bi = () => {
            (ii = new Date().getTime()), (Gr.autoplay.running = !0), vi(), Yr("autoplayStart");
        },
        yi = () => {
            (Gr.autoplay.running = !1), clearTimeout(Jr), cancelAnimationFrame(Zr), Yr("autoplayStop");
        },
        Ei = (Si, Ai) => {
            if (Gr.destroyed || !Gr.autoplay.running) return;
            clearTimeout(Jr), Si || (ai = !0);
            const Ci = () => {
                Yr("autoplayPause"), Gr.params.autoplay.waitForTransition ? Gr.wrapperEl.addEventListener("transitionend", ci) : di();
            };
            if (((Gr.autoplay.paused = !0), Ai)) {
                oi && (ri = Gr.params.autoplay.delay), (oi = !1), Ci();
                return;
            }
            (ri = (ri || Gr.params.autoplay.delay) - (new Date().getTime() - ii)), !(Gr.isEnd && ri < 0 && !Gr.params.loop) && (ri < 0 && (ri = 0), Ci());
        },
        di = () => {
            (Gr.isEnd && ri < 0 && !Gr.params.loop) || Gr.destroyed || !Gr.autoplay.running || ((ii = new Date().getTime()), ai ? ((ai = !1), vi(ri)) : vi(), (Gr.autoplay.paused = !1), Yr("autoplayResume"));
        },
        mi = () => {
            if (Gr.destroyed || !Gr.autoplay.running) return;
            const Si = getDocument();
            Si.visibilityState === "hidden" && ((ai = !0), Ei(!0)), Si.visibilityState === "visible" && di();
        },
        wi = (Si) => {
            Si.pointerType === "mouse" && ((ai = !0), (pi = !0), !(Gr.animating || Gr.autoplay.paused) && Ei(!0));
        },
        gi = (Si) => {
            Si.pointerType === "mouse" && ((pi = !1), Gr.autoplay.paused && di());
        },
        Ti = () => {
            Gr.params.autoplay.pauseOnMouseEnter && (Gr.el.addEventListener("pointerenter", wi), Gr.el.addEventListener("pointerleave", gi));
        },
        xi = () => {
            Gr.el && typeof Gr.el != "string" && (Gr.el.removeEventListener("pointerenter", wi), Gr.el.removeEventListener("pointerleave", gi));
        },
        Mi = () => {
            getDocument().addEventListener("visibilitychange", mi);
        },
        _i = () => {
            getDocument().removeEventListener("visibilitychange", mi);
        };
    Kr("init", () => {
        Gr.params.autoplay.enabled && (Ti(), Mi(), bi());
    }),
        Kr("destroy", () => {
            xi(), _i(), Gr.autoplay.running && yi();
        }),
        Kr("_freeModeStaticRelease", () => {
            (li || ai) && di();
        }),
        Kr("_freeModeNoMomentumRelease", () => {
            Gr.params.autoplay.disableOnInteraction ? yi() : Ei(!0, !0);
        }),
        Kr("beforeTransitionStart", (Si, Ai, Ci) => {
            Gr.destroyed || !Gr.autoplay.running || (Ci || !Gr.params.autoplay.disableOnInteraction ? Ei(!0, !0) : yi());
        }),
        Kr("sliderFirstMove", () => {
            if (!(Gr.destroyed || !Gr.autoplay.running)) {
                if (Gr.params.autoplay.disableOnInteraction) {
                    yi();
                    return;
                }
                (si = !0),
                    (li = !1),
                    (ai = !1),
                    (ui = setTimeout(() => {
                        (ai = !0), (li = !0), Ei(!0);
                    }, 200));
            }
        }),
        Kr("touchEnd", () => {
            if (!(Gr.destroyed || !Gr.autoplay.running || !si)) {
                if ((clearTimeout(ui), clearTimeout(Jr), Gr.params.autoplay.disableOnInteraction)) {
                    (li = !1), (si = !1);
                    return;
                }
                li && Gr.params.cssMode && di(), (li = !1), (si = !1);
            }
        }),
        Kr("slideChange", () => {
            Gr.destroyed || !Gr.autoplay.running || (oi = !0);
        }),
        Object.assign(Gr.autoplay, { start: bi, stop: yi, pause: Ei, resume: di });
}
function Thumb(ze) {
    let { swiper: Gr, extendParams: Wr, on: Kr } = ze;
    Wr({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
    let Yr = !1,
        Qr = !1;
    Gr.thumbs = { swiper: null };
    function Jr() {
        const ti = Gr.thumbs.swiper;
        if (!ti || ti.destroyed) return;
        const ri = ti.clickedIndex,
            ii = ti.clickedSlide;
        if ((ii && ii.classList.contains(Gr.params.thumbs.slideThumbActiveClass)) || typeof ri > "u" || ri === null) return;
        let ni;
        ti.params.loop ? (ni = parseInt(ti.clickedSlide.getAttribute("data-swiper-slide-index"), 10)) : (ni = ri), Gr.params.loop ? Gr.slideToLoop(ni) : Gr.slideTo(ni);
    }
    function Zr() {
        const { thumbs: ti } = Gr.params;
        if (Yr) return !1;
        Yr = !0;
        const ri = Gr.constructor;
        if (ti.swiper instanceof ri)
            (Gr.thumbs.swiper = ti.swiper),
                Object.assign(Gr.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                Object.assign(Gr.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                Gr.thumbs.swiper.update();
        else if (isObject(ti.swiper)) {
            const ii = Object.assign({}, ti.swiper);
            Object.assign(ii, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (Gr.thumbs.swiper = new ri(ii)), (Qr = !0);
        }
        return Gr.thumbs.swiper.el.classList.add(Gr.params.thumbs.thumbsContainerClass), Gr.thumbs.swiper.on("tap", Jr), !0;
    }
    function ei(ti) {
        const ri = Gr.thumbs.swiper;
        if (!ri || ri.destroyed) return;
        const ii = ri.params.slidesPerView === "auto" ? ri.slidesPerViewDynamic() : ri.params.slidesPerView;
        let ni = 1;
        const si = Gr.params.thumbs.slideThumbActiveClass;
        if (
            (Gr.params.slidesPerView > 1 && !Gr.params.centeredSlides && (ni = Gr.params.slidesPerView),
            Gr.params.thumbs.multipleActiveThumbs || (ni = 1),
            (ni = Math.floor(ni)),
            ri.slides.forEach((oi) => oi.classList.remove(si)),
            ri.params.loop || (ri.params.virtual && ri.params.virtual.enabled))
        )
            for (let oi = 0; oi < ni; oi += 1)
                elementChildren(ri.slidesEl, `[data-swiper-slide-index="${Gr.realIndex + oi}"]`).forEach((ai) => {
                    ai.classList.add(si);
                });
        else for (let oi = 0; oi < ni; oi += 1) ri.slides[Gr.realIndex + oi] && ri.slides[Gr.realIndex + oi].classList.add(si);
        const li = Gr.params.thumbs.autoScrollOffset,
            ui = li && !ri.params.loop;
        if (Gr.realIndex !== ri.realIndex || ui) {
            const oi = ri.activeIndex;
            let ai, pi;
            if (ri.params.loop) {
                const ci = ri.slides.filter((hi) => hi.getAttribute("data-swiper-slide-index") === `${Gr.realIndex}`)[0];
                (ai = ri.slides.indexOf(ci)), (pi = Gr.activeIndex > Gr.previousIndex ? "next" : "prev");
            } else (ai = Gr.realIndex), (pi = ai > Gr.previousIndex ? "next" : "prev");
            ui && (ai += pi === "next" ? li : -1 * li),
                ri.visibleSlidesIndexes &&
                    ri.visibleSlidesIndexes.indexOf(ai) < 0 &&
                    (ri.params.centeredSlides ? (ai > oi ? (ai = ai - Math.floor(ii / 2) + 1) : (ai = ai + Math.floor(ii / 2) - 1)) : ai > oi && ri.params.slidesPerGroup, ri.slideTo(ai, ti ? 0 : void 0));
        }
    }
    Kr("beforeInit", () => {
        const { thumbs: ti } = Gr.params;
        if (!(!ti || !ti.swiper))
            if (typeof ti.swiper == "string" || ti.swiper instanceof HTMLElement) {
                const ri = getDocument(),
                    ii = () => {
                        const si = typeof ti.swiper == "string" ? ri.querySelector(ti.swiper) : ti.swiper;
                        if (si && si.swiper) (ti.swiper = si.swiper), Zr(), ei(!0);
                        else if (si) {
                            const li = `${Gr.params.eventsPrefix}init`,
                                ui = (oi) => {
                                    (ti.swiper = oi.detail[0]), si.removeEventListener(li, ui), Zr(), ei(!0), ti.swiper.update(), Gr.update();
                                };
                            si.addEventListener(li, ui);
                        }
                        return si;
                    },
                    ni = () => {
                        if (Gr.destroyed) return;
                        ii() || requestAnimationFrame(ni);
                    };
                requestAnimationFrame(ni);
            } else Zr(), ei(!0);
    }),
        Kr("slideChange update resize observerUpdate", () => {
            ei();
        }),
        Kr("setTransition", (ti, ri) => {
            const ii = Gr.thumbs.swiper;
            !ii || ii.destroyed || ii.setTransition(ri);
        }),
        Kr("beforeDestroy", () => {
            const ti = Gr.thumbs.swiper;
            !ti || ti.destroyed || (Qr && ti.destroy());
        }),
        Object.assign(Gr.thumbs, { init: Zr, update: ei });
}
function clamp(ze, Gr, Wr) {
    return Math.max(ze, Math.min(Gr, Wr));
}
class Animate {
    constructor() {
        (this.isRunning = !1), (this.value = 0), (this.from = 0), (this.to = 0), (this.currentTime = 0);
    }
    advance(Gr) {
        var Wr;
        if (!this.isRunning) return;
        let Kr = !1;
        if (this.duration && this.easing) {
            this.currentTime += Gr;
            const Yr = clamp(0, this.currentTime / this.duration, 1);
            Kr = Yr >= 1;
            const Qr = Kr ? 1 : this.easing(Yr);
            this.value = this.from + (this.to - this.from) * Qr;
        } else
            this.lerp
                ? ((this.value = (function (Qr, Jr, Zr, ei) {
                      return (function (ri, ii, ni) {
                          return (1 - ni) * ri + ni * ii;
                      })(Qr, Jr, 1 - Math.exp(-Zr * ei));
                  })(this.value, this.to, 60 * this.lerp, Gr)),
                  Math.round(this.value) === this.to && ((this.value = this.to), (Kr = !0)))
                : ((this.value = this.to), (Kr = !0));
        Kr && this.stop(), (Wr = this.onUpdate) === null || Wr === void 0 || Wr.call(this, this.value, Kr);
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(Gr, Wr, { lerp: Kr, duration: Yr, easing: Qr, onStart: Jr, onUpdate: Zr }) {
        (this.from = this.value = Gr), (this.to = Wr), (this.lerp = Kr), (this.duration = Yr), (this.easing = Qr), (this.currentTime = 0), (this.isRunning = !0), Jr == null || Jr(), (this.onUpdate = Zr);
    }
}
class Dimensions {
    constructor(Gr, Wr, { autoResize: Kr = !0, debounce: Yr = 250 } = {}) {
        (this.wrapper = Gr),
            (this.content = Wr),
            (this.width = 0),
            (this.height = 0),
            (this.scrollHeight = 0),
            (this.scrollWidth = 0),
            (this.resize = () => {
                this.onWrapperResize(), this.onContentResize();
            }),
            (this.onWrapperResize = () => {
                this.wrapper instanceof Window ? ((this.width = window.innerWidth), (this.height = window.innerHeight)) : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
                this.wrapper instanceof Window
                    ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
                    : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            Kr &&
                ((this.debouncedResize = (function (Jr, Zr) {
                    let ei;
                    return function (...ti) {
                        let ri = this;
                        clearTimeout(ei),
                            (ei = setTimeout(() => {
                                (ei = void 0), Jr.apply(ri, ti);
                            }, Zr));
                    };
                })(this.resize, Yr)),
                this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)), this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
                this.contentResizeObserver.observe(this.content)),
            this.resize();
    }
    destroy() {
        var Gr, Wr;
        (Gr = this.wrapperResizeObserver) === null || Gr === void 0 || Gr.disconnect(),
            (Wr = this.contentResizeObserver) === null || Wr === void 0 || Wr.disconnect(),
            this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1);
    }
    get limit() {
        return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
}
class Emitter {
    constructor() {
        this.events = {};
    }
    emit(Gr, ...Wr) {
        var Kr;
        let Yr = this.events[Gr] || [];
        for (let Qr = 0, Jr = Yr.length; Qr < Jr; Qr++) (Kr = Yr[Qr]) === null || Kr === void 0 || Kr.call(Yr, ...Wr);
    }
    on(Gr, Wr) {
        var Kr;
        return (
            (!((Kr = this.events[Gr]) === null || Kr === void 0) && Kr.push(Wr)) || (this.events[Gr] = [Wr]),
            () => {
                var Yr;
                this.events[Gr] = (Yr = this.events[Gr]) === null || Yr === void 0 ? void 0 : Yr.filter((Qr) => Wr !== Qr);
            }
        );
    }
    off(Gr, Wr) {
        var Kr;
        this.events[Gr] = (Kr = this.events[Gr]) === null || Kr === void 0 ? void 0 : Kr.filter((Yr) => Wr !== Yr);
    }
    destroy() {
        this.events = {};
    }
}
const t = 100 / 6,
    i = { passive: !1 };
class VirtualScroll {
    constructor(Gr, Wr = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        (this.element = Gr),
            (this.options = Wr),
            (this.touchStart = { x: 0, y: 0 }),
            (this.lastDelta = { x: 0, y: 0 }),
            (this.window = { width: 0, height: 0 }),
            (this.emitter = new Emitter()),
            (this.onTouchStart = (Kr) => {
                const { clientX: Yr, clientY: Qr } = Kr.targetTouches ? Kr.targetTouches[0] : Kr;
                (this.touchStart.x = Yr), (this.touchStart.y = Qr), (this.lastDelta = { x: 0, y: 0 }), this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: Kr });
            }),
            (this.onTouchMove = (Kr) => {
                const { clientX: Yr, clientY: Qr } = Kr.targetTouches ? Kr.targetTouches[0] : Kr,
                    Jr = -(Yr - this.touchStart.x) * this.options.touchMultiplier,
                    Zr = -(Qr - this.touchStart.y) * this.options.touchMultiplier;
                (this.touchStart.x = Yr), (this.touchStart.y = Qr), (this.lastDelta = { x: Jr, y: Zr }), this.emitter.emit("scroll", { deltaX: Jr, deltaY: Zr, event: Kr });
            }),
            (this.onTouchEnd = (Kr) => {
                this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: Kr });
            }),
            (this.onWheel = (Kr) => {
                let { deltaX: Yr, deltaY: Qr, deltaMode: Jr } = Kr;
                (Yr *= Jr === 1 ? t : Jr === 2 ? this.window.width : 1),
                    (Qr *= Jr === 1 ? t : Jr === 2 ? this.window.height : 1),
                    (Yr *= this.options.wheelMultiplier),
                    (Qr *= this.options.wheelMultiplier),
                    this.emitter.emit("scroll", { deltaX: Yr, deltaY: Qr, event: Kr });
            }),
            (this.onWindowResize = () => {
                this.window = { width: window.innerWidth, height: window.innerHeight };
            }),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, i),
            this.element.addEventListener("touchstart", this.onTouchStart, i),
            this.element.addEventListener("touchmove", this.onTouchMove, i),
            this.element.addEventListener("touchend", this.onTouchEnd, i);
    }
    on(Gr, Wr) {
        return this.emitter.on(Gr, Wr);
    }
    destroy() {
        this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, i),
            this.element.removeEventListener("touchstart", this.onTouchStart, i),
            this.element.removeEventListener("touchmove", this.onTouchMove, i),
            this.element.removeEventListener("touchend", this.onTouchEnd, i);
    }
}
class Lenis {
    constructor({
        wrapper: Gr = window,
        content: Wr = document.documentElement,
        eventsTarget: Kr = Gr,
        smoothWheel: Yr = !0,
        syncTouch: Qr = !1,
        syncTouchLerp: Jr = 0.075,
        touchInertiaMultiplier: Zr = 35,
        duration: ei,
        easing: ti = (hi) => Math.min(1, 1.001 - Math.pow(2, -10 * hi)),
        lerp: ri = 0.1,
        infinite: ii = !1,
        orientation: ni = "vertical",
        gestureOrientation: si = "vertical",
        touchMultiplier: li = 1,
        wheelMultiplier: ui = 1,
        autoResize: oi = !0,
        prevent: ai,
        virtualScroll: pi,
        __experimental__naiveDimensions: ci = !1,
    } = {}) {
        (this._isScrolling = !1),
            (this._isStopped = !1),
            (this._isLocked = !1),
            (this._preventNextNativeScrollEvent = !1),
            (this._resetVelocityTimeout = null),
            (this.time = 0),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.animate = new Animate()),
            (this.emitter = new Emitter()),
            (this.onPointerDown = (hi) => {
                hi.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (hi) => {
                if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(hi) === !1) return;
                const { deltaX: fi, deltaY: vi, event: bi } = hi;
                if ((this.emitter.emit("virtual-scroll", { deltaX: fi, deltaY: vi, event: bi }), bi.ctrlKey)) return;
                const yi = bi.type.includes("touch"),
                    Ei = bi.type.includes("wheel");
                if (((this.isTouching = bi.type === "touchstart" || bi.type === "touchmove"), this.options.syncTouch && yi && bi.type === "touchstart" && !this.isStopped && !this.isLocked)) return void this.reset();
                const di = fi === 0 && vi === 0,
                    mi = (this.options.gestureOrientation === "vertical" && vi === 0) || (this.options.gestureOrientation === "horizontal" && fi === 0);
                if (di || mi) return;
                let wi = bi.composedPath();
                wi = wi.slice(0, wi.indexOf(this.rootElement));
                const gi = this.options.prevent;
                if (
                    wi.find((_i) => {
                        var Si, Ai, Ci, Oi, Li;
                        return (
                            _i instanceof HTMLElement &&
                            ((typeof gi == "function" && (gi == null ? void 0 : gi(_i))) ||
                                ((Si = _i.hasAttribute) === null || Si === void 0 ? void 0 : Si.call(_i, "data-lenis-prevent")) ||
                                (yi && ((Ai = _i.hasAttribute) === null || Ai === void 0 ? void 0 : Ai.call(_i, "data-lenis-prevent-touch"))) ||
                                (Ei && ((Ci = _i.hasAttribute) === null || Ci === void 0 ? void 0 : Ci.call(_i, "data-lenis-prevent-wheel"))) ||
                                (((Oi = _i.classList) === null || Oi === void 0 ? void 0 : Oi.contains("lenis")) && !(!((Li = _i.classList) === null || Li === void 0) && Li.contains("lenis-stopped"))))
                        );
                    })
                )
                    return;
                if (this.isStopped || this.isLocked) return void bi.preventDefault();
                if (!((this.options.syncTouch && yi) || (this.options.smoothWheel && Ei))) return (this.isScrolling = "native"), void this.animate.stop();
                bi.preventDefault();
                let Ti = vi;
                this.options.gestureOrientation === "both" ? (Ti = Math.abs(vi) > Math.abs(fi) ? vi : fi) : this.options.gestureOrientation === "horizontal" && (Ti = fi);
                const xi = yi && this.options.syncTouch,
                    Mi = yi && bi.type === "touchend" && Math.abs(Ti) > 5;
                Mi && (Ti = this.velocity * this.options.touchInertiaMultiplier),
                    this.scrollTo(this.targetScroll + Ti, Object.assign({ programmatic: !1 }, xi ? { lerp: Mi ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
            }),
            (this.onNativeScroll = () => {
                if ((this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)), this._preventNextNativeScrollEvent)) this._preventNextNativeScrollEvent = !1;
                else if (this.isScrolling === !1 || this.isScrolling === "native") {
                    const hi = this.animatedScroll;
                    (this.animatedScroll = this.targetScroll = this.actualScroll),
                        (this.lastVelocity = this.velocity),
                        (this.velocity = this.animatedScroll - hi),
                        (this.direction = Math.sign(this.animatedScroll - hi)),
                        (this.isScrolling = "native"),
                        this.emit(),
                        this.velocity !== 0 &&
                            (this._resetVelocityTimeout = setTimeout(() => {
                                (this.lastVelocity = this.velocity), (this.velocity = 0), (this.isScrolling = !1), this.emit();
                            }, 400));
                }
            }),
            (window.lenisVersion = "1.1.13"),
            (Gr && Gr !== document.documentElement && Gr !== document.body) || (Gr = window),
            (this.options = {
                wrapper: Gr,
                content: Wr,
                eventsTarget: Kr,
                smoothWheel: Yr,
                syncTouch: Qr,
                syncTouchLerp: Jr,
                touchInertiaMultiplier: Zr,
                duration: ei,
                easing: ti,
                lerp: ri,
                infinite: ii,
                gestureOrientation: si,
                orientation: ni,
                touchMultiplier: li,
                wheelMultiplier: ui,
                autoResize: oi,
                prevent: ai,
                virtualScroll: pi,
                __experimental__naiveDimensions: ci,
            }),
            (this.dimensions = new Dimensions(Gr, Wr, { autoResize: oi })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
            this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
            (this.virtualScroll = new VirtualScroll(Kr, { touchMultiplier: li, wheelMultiplier: ui })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
        this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName();
    }
    on(Gr, Wr) {
        return this.emitter.on(Gr, Wr);
    }
    off(Gr, Wr) {
        return this.emitter.off(Gr, Wr);
    }
    setScroll(Gr) {
        this.isHorizontal ? (this.rootElement.scrollLeft = Gr) : (this.rootElement.scrollTop = Gr);
    }
    resize() {
        this.dimensions.resize(), (this.animatedScroll = this.targetScroll = this.actualScroll), this.emit();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        (this.isLocked = !1), (this.isScrolling = !1), (this.animatedScroll = this.targetScroll = this.actualScroll), (this.lastVelocity = this.velocity = 0), this.animate.stop();
    }
    start() {
        this.isStopped && ((this.isStopped = !1), this.reset());
    }
    stop() {
        this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
    }
    raf(Gr) {
        const Wr = Gr - (this.time || Gr);
        (this.time = Gr), this.animate.advance(0.001 * Wr);
    }
    scrollTo(
        Gr,
        {
            offset: Wr = 0,
            immediate: Kr = !1,
            lock: Yr = !1,
            duration: Qr = this.options.duration,
            easing: Jr = this.options.easing,
            lerp: Zr = this.options.lerp,
            onStart: ei,
            onComplete: ti,
            force: ri = !1,
            programmatic: ii = !0,
            userData: ni,
        } = {}
    ) {
        if ((!this.isStopped && !this.isLocked) || ri) {
            if (typeof Gr == "string" && ["top", "left", "start"].includes(Gr)) Gr = 0;
            else if (typeof Gr == "string" && ["bottom", "right", "end"].includes(Gr)) Gr = this.limit;
            else {
                let si;
                if ((typeof Gr == "string" ? (si = document.querySelector(Gr)) : Gr instanceof HTMLElement && Gr != null && Gr.nodeType && (si = Gr), si)) {
                    if (this.options.wrapper !== window) {
                        const ui = this.rootElement.getBoundingClientRect();
                        Wr -= this.isHorizontal ? ui.left : ui.top;
                    }
                    const li = si.getBoundingClientRect();
                    Gr = (this.isHorizontal ? li.left : li.top) + this.animatedScroll;
                }
            }
            if (typeof Gr == "number") {
                if (((Gr += Wr), (Gr = Math.round(Gr)), this.options.infinite ? ii && (this.targetScroll = this.animatedScroll = this.scroll) : (Gr = clamp(0, Gr, this.limit)), Gr === this.targetScroll))
                    return ei == null || ei(this), void (ti == null || ti(this));
                if (((this.userData = ni ?? {}), Kr))
                    return (this.animatedScroll = this.targetScroll = Gr), this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), ti == null || ti(this), void (this.userData = {});
                ii || (this.targetScroll = Gr),
                    this.animate.fromTo(this.animatedScroll, Gr, {
                        duration: Qr,
                        easing: Jr,
                        lerp: Zr,
                        onStart: () => {
                            Yr && (this.isLocked = !0), (this.isScrolling = "smooth"), ei == null || ei(this);
                        },
                        onUpdate: (si, li) => {
                            (this.isScrolling = "smooth"),
                                (this.lastVelocity = this.velocity),
                                (this.velocity = si - this.animatedScroll),
                                (this.direction = Math.sign(this.velocity)),
                                (this.animatedScroll = si),
                                this.setScroll(this.scroll),
                                ii && (this.targetScroll = si),
                                li || this.emit(),
                                li && (this.reset(), this.emit(), ti == null || ti(this), (this.userData = {}), this.preventNextNativeScrollEvent());
                        },
                    });
            }
        }
    }
    preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1;
            });
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
        return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal";
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
        return this.options.infinite
            ? (function (Wr, Kr) {
                  return ((Wr % Kr) + Kr) % Kr;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
        return this._isScrolling;
    }
    set isScrolling(Gr) {
        this._isScrolling !== Gr && ((this._isScrolling = Gr), this.updateClassName());
    }
    get isStopped() {
        return this._isStopped;
    }
    set isStopped(Gr) {
        this._isStopped !== Gr && ((this._isStopped = Gr), this.updateClassName());
    }
    get isLocked() {
        return this._isLocked;
    }
    set isLocked(Gr) {
        this._isLocked !== Gr && ((this._isLocked = Gr), this.updateClassName());
    }
    get isSmooth() {
        return this.isScrolling === "smooth";
    }
    get className() {
        let Gr = "lenis";
        return this.isStopped && (Gr += " lenis-stopped"), this.isLocked && (Gr += " lenis-locked"), this.isScrolling && (Gr += " lenis-scrolling"), this.isScrolling === "smooth" && (Gr += " lenis-smooth"), Gr;
    }
    updateClassName() {
        this.cleanUpClassName(), (this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim());
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
}
window.htmx = htmx$1;
window.Alpine = module_default;
window.Swiper = Swiper;
window.SwiperAutoplay = Autoplay;
window.SwiperThumbs = Thumb;
window.Lenis = Lenis;
document.addEventListener("alpine:init", () => {
    Alpine.data("home", () => ({
        heroSwiper: null,
        heroSwiperTitle: "",
        uiSwiper: null,
        reviewSwiper: null,
        initHeroSwiper() {
            (this.heroSwiper = new window.Swiper(".media-swiper", { slidesPerView: 1, loop: !0 })),
                (this.heroSwiperTitle = this.heroSwiper.slides[this.heroSwiper.activeIndex].dataset.title),
                this.heroSwiper.on("slideChange", () => {
                    this.heroSwiperTitle = this.heroSwiper.slides[this.heroSwiper.activeIndex].dataset.title;
                });
        },
        initUiSwiper() {
            this.uiSwiper = new window.Swiper(".ui-swiper", { modules: [window.SwiperAutoplay], slidesPerView: 1, spaceBetween: 20, loop: !0, autoplay: { delay: 2e3 } });
        },
        initReviewSwiper() {
            this.reviewSwiper = new window.Swiper(".review-swiper", { modules: [window.SwiperAutoplay], slidesPerView: 1, spaceBetween: 24, loop: !0, autoplay: { delay: 2e3 }, breakpoints: { 768: { slidesPerView: 2, spaceBetween: 24 } } });
        },
        init() {
            this.initHeroSwiper(), this.initUiSwiper(), this.initReviewSwiper();
        },
    })),
        Alpine.data("product", () => ({
            activeProductId: null,
            activeShopifyId: null,
            activeTab: "information",
            mediaSwiper: null,
            mediaThumbSwiper: null,
            isPurchaseModalOpen: !1,
            initMediaSwiper() {
                (this.mediaThumbSwiper = new window.Swiper(".media-thumb-swiper", { slidesPerView: 4, spaceBetween: 8, loop: !0, breakpoints: { 768: { slidesPerView: 5, spaceBetween: 8 } } })),
                    (this.mediaSwiper = new window.Swiper(".media-swiper", { modules: [window.SwiperThumbs], slidesPerView: 1, spaceBetween: 0, loop: !0, thumbs: { swiper: this.mediaThumbSwiper, slideThumbActiveClass: "active" } }));
            },
            init() {
                this.initMediaSwiper(), this.$nextTick(() => this.$refs.products.querySelectorAll("button")[0].click()), window.location.hash && (this.activeTab = window.location.hash.replace("#", ""));
            },
        }));
});
Alpine.start();
function animateTypingWords() {
    document.querySelectorAll(".typing-words").forEach((ze) => {
        const Gr = ze.dataset.words.split(",");
        let Wr = 0,
            Kr = Gr[Wr].length,
            Yr = 1,
            Qr = 100,
            Jr = 2e3;
        const Zr = () => {
                Kr < Gr[Wr].length ? ((ze.innerHTML = Gr[Wr].slice(0, Kr + 1)), (ze.dataset.text = Gr[Wr].slice(0, Kr + 1)), (Kr += Yr), setTimeout(Zr, Qr)) : setTimeout(ei, Jr);
            },
            ei = () => {
                Kr > 0 ? ((ze.innerHTML = Gr[Wr].slice(0, Kr - 1)), (ze.dataset.text = Gr[Wr].slice(0, Kr - 1)), (Kr -= Yr), setTimeout(ei, Qr)) : ((Wr = (Wr + 1) % Gr.length), setTimeout(Zr, 500));
            };
        setTimeout(ei, 500);
    });
}
htmx.on("htmx:load", animateTypingWords);
function smoothScroll() {
    window.lenisInstance = new window.Lenis({ speed: 0.9, autoResize: !0 });
    function ze(Gr) {
        window.lenisInstance.raf(Gr), requestAnimationFrame(ze);
    }
    requestAnimationFrame(ze);
}
smoothScroll();
htmx.on("htmx:load", () => {
    window.lenisInterval || window.lenisInstance.resize();
});
document.addEventListener("aos:in", () => {
    window.lenisInterval || window.lenisInstance.resize();
});
document.addEventListener("contextmenu", (ze) => {
    ze.preventDefault();
});
document.addEventListener("keydown", (ze) => {
    ze.key === "F12" && ze.preventDefault();
});
document.addEventListener("copy", (ze) => {
    ze.preventDefault();
});
htmx.on("htmx:load", window.initializeSellSnEmbed);
//# sourceMappingURL=app-Cu8h15KX.js.map
