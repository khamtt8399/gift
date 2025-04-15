const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"./concurrent-BpJAzku4.js",
			"./writeEffect-AR-eltf6.js",
			"./animationSetup-DnxAb-5H.js",
			"./cascade-BAMwmGLg.js",
			"./loop-Gne9yU5X.js",
			"./writeAndUnwriteText-PbXJ1MI3.js",
			"./unwriteEffect-DcMsDGgo.js",
			"./loopOnce-D-JZyTtz.js",
			"./loopRandom-CIs9f61N.js",
			"./scramble-CgGs5LG2.js",
		])
) => i.map((i) => d[i]);
(function () {
	const D = document.createElement("link").relList;
	if (D && D.supports && D.supports("modulepreload")) return;
	for (const A of document.querySelectorAll('link[rel="modulepreload"]'))
		F(A);
	new MutationObserver((A) => {
		for (const C of A)
			if (C.type === "childList")
				for (const E of C.addedNodes)
					E.tagName === "LINK" && E.rel === "modulepreload" && F(E);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(A) {
		const C = {};
		return (
			A.integrity && (C.integrity = A.integrity),
			A.referrerPolicy && (C.referrerPolicy = A.referrerPolicy),
			A.crossOrigin === "use-credentials"
				? (C.credentials = "include")
				: A.crossOrigin === "anonymous"
				? (C.credentials = "omit")
				: (C.credentials = "same-origin"),
			C
		);
	}
	function F(A) {
		if (A.ep) return;
		A.ep = !0;
		const C = e(A);
		fetch(A.href, C);
	}
})();
const je = !1;
var _0 = Array.isArray,
	o1 = Array.prototype.indexOf,
	Ee = Array.from,
	l1 = Object.defineProperty,
	cD = Object.getOwnPropertyDescriptor,
	cF = Object.getOwnPropertyDescriptors,
	c1 = Object.prototype,
	f1 = Array.prototype,
	re = Object.getPrototypeOf,
	qe = Object.isExtensible;
function d1(u) {
	return typeof (u == null ? void 0 : u.then) == "function";
}
function _1(u) {
	return u();
}
function F0(u) {
	for (var D = 0; D < u.length; D++) u[D]();
}
const Iu = 2,
	fF = 4,
	v0 = 8,
	ne = 16,
	Yu = 32,
	mD = 64,
	C0 = 128,
	yu = 256,
	A0 = 512,
	_u = 1024,
	$u = 2048,
	AD = 4096,
	Zu = 8192,
	m0 = 16384,
	v1 = 32768,
	h0 = 65536,
	m1 = 1 << 17,
	h1 = 1 << 19,
	dF = 1 << 20,
	q0 = 1 << 21,
	fD = Symbol("$state"),
	g1 = Symbol("legacy props");
function _F(u) {
	return u === this.v;
}
function te(u, D) {
	return u != u
		? D == D
		: u !== D ||
				(u !== null && typeof u == "object") ||
				typeof u == "function";
}
function p1(u, D) {
	return u !== D;
}
function ie(u) {
	return !te(u, this.v);
}
function y1(u) {
	throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function w1() {
	throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function b1(u) {
	throw new Error("https://svelte.dev/e/effect_orphan");
}
function S1() {
	throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function M1(u) {
	throw new Error("https://svelte.dev/e/props_invalid_value");
}
function N1() {
	throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function T1() {
	throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function L1() {
	throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let hD = !1,
	I1 = !1;
function P1() {
	hD = !0;
}
const O1 = 1,
	x1 = 2,
	R1 = 16,
	k1 = 1,
	$1 = 2,
	vF = 4,
	j1 = 8,
	q1 = 16,
	U1 = 1,
	G1 = 2,
	Bu = Symbol(),
	H1 = "http://www.w3.org/1999/xhtml",
	z1 = "http://www.w3.org/2000/svg";
function mF(u) {
	throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let uu = null;
function E0(u) {
	uu = u;
}
function jD(u, D = !1, e) {
	var F = (uu = {
		p: uu,
		c: null,
		d: !1,
		e: null,
		m: !1,
		s: u,
		x: null,
		l: null,
	});
	hD && !D && (uu.l = { s: null, u: null, r1: [], r2: FD(!1) }),
		NF(() => {
			F.d = !0;
		});
}
function qD(u) {
	const D = uu;
	if (D !== null) {
		const E = D.e;
		if (E !== null) {
			var e = J,
				F = Z;
			D.e = null;
			try {
				for (var A = 0; A < E.length; A++) {
					var C = E[A];
					ju(C.effect), Su(C.reaction), ae(C.fn);
				}
			} finally {
				ju(e), Su(F);
			}
		}
		(uu = D.p), (D.m = !0);
	}
	return {};
}
function gD() {
	return !hD || (uu !== null && uu.l === null);
}
function tD(u) {
	if (typeof u != "object" || u === null || fD in u) return u;
	const D = re(u);
	if (D !== c1 && D !== f1) return u;
	var e = new Map(),
		F = _0(u),
		A = Qu(0),
		C = Z,
		E = (r) => {
			var t = Z;
			Su(C);
			var n = r();
			return Su(t), n;
		};
	return (
		F && e.set("length", Qu(u.length)),
		new Proxy(u, {
			defineProperty(r, t, n) {
				(!("value" in n) ||
					n.configurable === !1 ||
					n.enumerable === !1 ||
					n.writable === !1) &&
					N1();
				var i = e.get(t);
				return (
					i === void 0
						? ((i = E(() => Qu(n.value))), e.set(t, i))
						: W(
								i,
								E(() => tD(n.value))
						  ),
					!0
				);
			},
			deleteProperty(r, t) {
				var n = e.get(t);
				if (n === void 0)
					t in r &&
						e.set(
							t,
							E(() => Qu(Bu))
						);
				else {
					if (F && typeof t == "string") {
						var i = e.get("length"),
							B = Number(t);
						Number.isInteger(B) && B < i.v && W(i, B);
					}
					W(n, Bu), Ue(A);
				}
				return !0;
			},
			get(r, t, n) {
				var s;
				if (t === fD) return u;
				var i = e.get(t),
					B = t in r;
				if (
					(i === void 0 &&
						(!B || ((s = cD(r, t)) != null && s.writable)) &&
						((i = E(() => Qu(tD(B ? r[t] : Bu)))), e.set(t, i)),
					i !== void 0)
				) {
					var a = I(i);
					return a === Bu ? void 0 : a;
				}
				return Reflect.get(r, t, n);
			},
			getOwnPropertyDescriptor(r, t) {
				var n = Reflect.getOwnPropertyDescriptor(r, t);
				if (n && "value" in n) {
					var i = e.get(t);
					i && (n.value = I(i));
				} else if (n === void 0) {
					var B = e.get(t),
						a = B == null ? void 0 : B.v;
					if (B !== void 0 && a !== Bu)
						return {
							enumerable: !0,
							configurable: !0,
							value: a,
							writable: !0,
						};
				}
				return n;
			},
			has(r, t) {
				var a;
				if (t === fD) return !0;
				var n = e.get(t),
					i = (n !== void 0 && n.v !== Bu) || Reflect.has(r, t);
				if (
					n !== void 0 ||
					(J !== null &&
						(!i || ((a = cD(r, t)) != null && a.writable)))
				) {
					n === void 0 &&
						((n = E(() => Qu(i ? tD(r[t]) : Bu))), e.set(t, n));
					var B = I(n);
					if (B === Bu) return !1;
				}
				return i;
			},
			set(r, t, n, i) {
				var g;
				var B = e.get(t),
					a = t in r;
				if (F && t === "length")
					for (var s = n; s < B.v; s += 1) {
						var d = e.get(s + "");
						d !== void 0
							? W(d, Bu)
							: s in r &&
							  ((d = E(() => Qu(Bu))), e.set(s + "", d));
					}
				B === void 0
					? (!a || ((g = cD(r, t)) != null && g.writable)) &&
					  ((B = E(() => Qu(void 0))),
					  W(
							B,
							E(() => tD(n))
					  ),
					  e.set(t, B))
					: ((a = B.v !== Bu),
					  W(
							B,
							E(() => tD(n))
					  ));
				var o = Reflect.getOwnPropertyDescriptor(r, t);
				if ((o != null && o.set && o.set.call(i, n), !a)) {
					if (F && typeof t == "string") {
						var _ = e.get("length"),
							c = Number(t);
						Number.isInteger(c) && c >= _.v && W(_, c + 1);
					}
					Ue(A);
				}
				return !0;
			},
			ownKeys(r) {
				I(A);
				var t = Reflect.ownKeys(r).filter((B) => {
					var a = e.get(B);
					return a === void 0 || a.v !== Bu;
				});
				for (var [n, i] of e) i.v !== Bu && !(n in r) && t.push(n);
				return t;
			},
			setPrototypeOf() {
				T1();
			},
		})
	);
}
function Ue(u, D = 1) {
	W(u, u.v + D);
}
function PD(u) {
	var D = Iu | $u,
		e = Z !== null && (Z.f & Iu) !== 0 ? Z : null;
	return (
		J === null || (e !== null && (e.f & yu) !== 0)
			? (D |= yu)
			: (J.f |= dF),
		{
			ctx: uu,
			deps: null,
			effects: null,
			equals: _F,
			f: D,
			fn: u,
			reactions: null,
			rv: 0,
			v: null,
			wv: 0,
			parent: e ?? J,
		}
	);
}
function Be(u) {
	const D = PD(u);
	return (D.equals = ie), D;
}
function hF(u) {
	var D = u.effects;
	if (D !== null) {
		u.effects = null;
		for (var e = 0; e < D.length; e += 1) Ju(D[e]);
	}
}
function V1(u) {
	for (var D = u.parent; D !== null; ) {
		if ((D.f & Iu) === 0) return D;
		D = D.parent;
	}
	return null;
}
function gF(u) {
	var D,
		e = J;
	ju(V1(u));
	try {
		hF(u), (D = qF(u));
	} finally {
		ju(e);
	}
	return D;
}
function pF(u) {
	var D = gF(u),
		e = (DD || (u.f & yu) !== 0) && u.deps !== null ? AD : _u;
	Mu(u, e), u.equals(D) || ((u.v = D), (u.wv = $F()));
}
const OD = new Map();
function FD(u, D) {
	var e = { f: 0, v: u, reactions: null, equals: _F, rv: 0, wv: 0 };
	return e;
}
function Qu(u, D) {
	const e = FD(u);
	return eA(e), e;
}
function au(u, D = !1) {
	var F;
	const e = FD(u);
	return (
		D || (e.equals = ie),
		hD &&
			uu !== null &&
			uu.l !== null &&
			((F = uu.l).s ?? (F.s = [])).push(e),
		e
	);
}
function W(u, D, e = !1) {
	Z !== null &&
		!Ru &&
		gD() &&
		(Z.f & (Iu | ne)) !== 0 &&
		!(du != null && du.includes(u)) &&
		L1();
	let F = e ? tD(D) : D;
	return TD(u, F);
}
function TD(u, D) {
	if (!u.equals(D)) {
		var e = u.v;
		UD ? OD.set(u, D) : OD.set(u, e),
			(u.v = D),
			(u.f & Iu) !== 0 &&
				((u.f & $u) !== 0 && gF(u), Mu(u, (u.f & yu) === 0 ? _u : AD)),
			(u.wv = $F()),
			yF(u, $u),
			gD() &&
				J !== null &&
				(J.f & _u) !== 0 &&
				(J.f & (Yu | mD)) === 0 &&
				(bu === null ? FA([u]) : bu.push(u));
	}
	return D;
}
function Ge(u, D = 1) {
	var e = I(u),
		F = D === 1 ? e++ : e--;
	return W(u, e), F;
}
function yF(u, D) {
	var e = u.reactions;
	if (e !== null)
		for (var F = gD(), A = e.length, C = 0; C < A; C++) {
			var E = e[C],
				r = E.f;
			(r & $u) === 0 &&
				((!F && E === J) ||
					(Mu(E, D),
					(r & (_u | yu)) !== 0 &&
						((r & Iu) !== 0 ? yF(E, AD) : S0(E))));
		}
}
let Z1 = !1;
var He, wF, bF, SF;
function K1() {
	if (He === void 0) {
		(He = window), (wF = /Firefox/.test(navigator.userAgent));
		var u = Element.prototype,
			D = Node.prototype,
			e = Text.prototype;
		(bF = cD(D, "firstChild").get),
			(SF = cD(D, "nextSibling").get),
			qe(u) &&
				((u.__click = void 0),
				(u.__className = void 0),
				(u.__attributes = null),
				(u.__style = void 0),
				(u.__e = void 0)),
			qe(e) && (e.__t = void 0);
	}
}
function g0(u = "") {
	return document.createTextNode(u);
}
function r0(u) {
	return bF.call(u);
}
function p0(u) {
	return SF.call(u);
}
function Au(u, D) {
	return r0(u);
}
function Hu(u, D) {
	{
		var e = r0(u);
		return e instanceof Comment && e.data === "" ? p0(e) : e;
	}
}
function fu(u, D = 1, e = !1) {
	let F = u;
	for (; D--; ) F = p0(F);
	return F;
}
function W1(u) {
	u.textContent = "";
}
function MF(u) {
	J === null && Z === null && b1(),
		Z !== null && (Z.f & yu) !== 0 && J === null && w1(),
		UD && y1();
}
function J1(u, D) {
	var e = D.last;
	e === null
		? (D.last = D.first = u)
		: ((e.next = u), (u.prev = e), (D.last = u));
}
function pD(u, D, e, F = !0) {
	var A = J,
		C = {
			ctx: uu,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: u | $u,
			first: null,
			fn: D,
			last: null,
			next: null,
			parent: A,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0,
		};
	if (e)
		try {
			b0(C), (C.f |= v1);
		} catch (t) {
			throw (Ju(C), t);
		}
	else D !== null && S0(C);
	var E =
		e &&
		C.deps === null &&
		C.first === null &&
		C.nodes_start === null &&
		C.teardown === null &&
		(C.f & (dF | C0)) === 0;
	if (!E && F && (A !== null && J1(C, A), Z !== null && (Z.f & Iu) !== 0)) {
		var r = Z;
		(r.effects ?? (r.effects = [])).push(C);
	}
	return C;
}
function NF(u) {
	const D = pD(v0, null, !1);
	return Mu(D, _u), (D.teardown = u), D;
}
function U0(u) {
	MF();
	var D = J !== null && (J.f & Yu) !== 0 && uu !== null && !uu.m;
	if (D) {
		var e = uu;
		(e.e ?? (e.e = [])).push({ fn: u, effect: J, reaction: Z });
	} else {
		var F = ae(u);
		return F;
	}
}
function Y1(u) {
	return MF(), y0(u);
}
function Q1(u) {
	const D = pD(mD, u, !0);
	return (e = {}) =>
		new Promise((F) => {
			e.outro
				? Ku(D, () => {
						Ju(D), F(void 0);
				  })
				: (Ju(D), F(void 0));
		});
}
function ae(u) {
	return pD(fF, u, !1);
}
function mu(u, D) {
	var e = uu,
		F = { effect: null, ran: !1 };
	e.l.r1.push(F),
		(F.effect = y0(() => {
			u(), !F.ran && ((F.ran = !0), W(e.l.r2, !0), dD(D));
		}));
}
function X1() {
	var u = uu;
	y0(() => {
		if (I(u.l.r2)) {
			for (var D of u.l.r1) {
				var e = D.effect;
				(e.f & _u) !== 0 && Mu(e, AD), wD(e) && b0(e), (D.ran = !1);
			}
			u.l.r2.v = !1;
		}
	});
}
function y0(u) {
	return pD(v0, u, !0);
}
function se(u, D = [], e = PD) {
	const F = D.map(e);
	return yD(() => u(...F.map(I)));
}
function yD(u, D = 0) {
	return pD(v0 | ne | D, u, !0);
}
function Wu(u, D = !0) {
	return pD(v0 | Yu, u, !0, D);
}
function TF(u) {
	var D = u.teardown;
	if (D !== null) {
		const e = UD,
			F = Z;
		Ve(!0), Su(null);
		try {
			D.call(null);
		} finally {
			Ve(e), Su(F);
		}
	}
}
function LF(u, D = !1) {
	var e = u.first;
	for (u.first = u.last = null; e !== null; ) {
		var F = e.next;
		(e.f & mD) !== 0 ? (e.parent = null) : Ju(e, D), (e = F);
	}
}
function uA(u) {
	for (var D = u.first; D !== null; ) {
		var e = D.next;
		(D.f & Yu) === 0 && Ju(D), (D = e);
	}
}
function Ju(u, D = !0) {
	var e = !1;
	if ((D || (u.f & h1) !== 0) && u.nodes_start !== null) {
		for (var F = u.nodes_start, A = u.nodes_end; F !== null; ) {
			var C = F === A ? null : p0(F);
			F.remove(), (F = C);
		}
		e = !0;
	}
	LF(u, D && !e), B0(u, 0), Mu(u, m0);
	var E = u.transitions;
	if (E !== null) for (const t of E) t.stop();
	TF(u);
	var r = u.parent;
	r !== null && r.first !== null && IF(u),
		(u.next =
			u.prev =
			u.teardown =
			u.ctx =
			u.deps =
			u.fn =
			u.nodes_start =
			u.nodes_end =
				null);
}
function IF(u) {
	var D = u.parent,
		e = u.prev,
		F = u.next;
	e !== null && (e.next = F),
		F !== null && (F.prev = e),
		D !== null &&
			(D.first === u && (D.first = F), D.last === u && (D.last = e));
}
function Ku(u, D) {
	var e = [];
	oe(u, e, !0),
		PF(e, () => {
			Ju(u), D && D();
		});
}
function PF(u, D) {
	var e = u.length;
	if (e > 0) {
		var F = () => --e || D();
		for (var A of u) A.out(F);
	} else D();
}
function oe(u, D, e) {
	if ((u.f & Zu) === 0) {
		if (((u.f ^= Zu), u.transitions !== null))
			for (const E of u.transitions) (E.is_global || e) && D.push(E);
		for (var F = u.first; F !== null; ) {
			var A = F.next,
				C = (F.f & h0) !== 0 || (F.f & Yu) !== 0;
			oe(F, D, C ? e : !1), (F = A);
		}
	}
}
function BD(u) {
	OF(u, !0);
}
function OF(u, D) {
	if ((u.f & Zu) !== 0) {
		(u.f ^= Zu),
			(u.f & _u) === 0 && (u.f ^= _u),
			wD(u) && (Mu(u, $u), S0(u));
		for (var e = u.first; e !== null; ) {
			var F = e.next,
				A = (e.f & h0) !== 0 || (e.f & Yu) !== 0;
			OF(e, A ? D : !1), (e = F);
		}
		if (u.transitions !== null)
			for (const C of u.transitions) (C.is_global || D) && C.in();
	}
}
let xD = [],
	G0 = [];
function xF() {
	var u = xD;
	(xD = []), F0(u);
}
function DA() {
	var u = G0;
	(G0 = []), F0(u);
}
function RF(u) {
	xD.length === 0 && queueMicrotask(xF), xD.push(u);
}
function ze() {
	xD.length > 0 && xF(), G0.length > 0 && DA();
}
let QD = !1,
	n0 = !1,
	t0 = null,
	iD = !1,
	UD = !1;
function Ve(u) {
	UD = u;
}
let LD = [];
let Z = null,
	Ru = !1;
function Su(u) {
	Z = u;
}
let J = null;
function ju(u) {
	J = u;
}
let du = null;
function eA(u) {
	Z !== null && Z.f & q0 && (du === null ? (du = [u]) : du.push(u));
}
let cu = null,
	pu = 0,
	bu = null;
function FA(u) {
	bu = u;
}
let kF = 1,
	i0 = 0,
	DD = !1;
function $F() {
	return ++kF;
}
function wD(u) {
	var B;
	var D = u.f;
	if ((D & $u) !== 0) return !0;
	if ((D & AD) !== 0) {
		var e = u.deps,
			F = (D & yu) !== 0;
		if (e !== null) {
			var A,
				C,
				E = (D & A0) !== 0,
				r = F && J !== null && !DD,
				t = e.length;
			if (E || r) {
				var n = u,
					i = n.parent;
				for (A = 0; A < t; A++)
					(C = e[A]),
						(E ||
							!(
								(B = C == null ? void 0 : C.reactions) !=
									null && B.includes(n)
							)) &&
							(C.reactions ?? (C.reactions = [])).push(n);
				E && (n.f ^= A0),
					r && i !== null && (i.f & yu) === 0 && (n.f ^= yu);
			}
			for (A = 0; A < t; A++)
				if (((C = e[A]), wD(C) && pF(C), C.wv > u.wv)) return !0;
		}
		(!F || (J !== null && !DD)) && Mu(u, _u);
	}
	return !1;
}
function CA(u, D) {
	for (var e = D; e !== null; ) {
		if ((e.f & C0) !== 0)
			try {
				e.fn(u);
				return;
			} catch {
				e.f ^= C0;
			}
		e = e.parent;
	}
	throw ((QD = !1), u);
}
function AA(u) {
	return (u.f & m0) === 0 && (u.parent === null || (u.parent.f & C0) === 0);
}
function w0(u, D, e, F) {
	if (QD) {
		if ((e === null && (QD = !1), AA(D))) throw u;
		return;
	}
	e !== null && (QD = !0);
	{
		CA(u, D);
		return;
	}
}
function jF(u, D, e = !0) {
	var F = u.reactions;
	if (F !== null)
		for (var A = 0; A < F.length; A++) {
			var C = F[A];
			(du != null && du.includes(u)) ||
				((C.f & Iu) !== 0
					? jF(C, D, !1)
					: D === C &&
					  (e ? Mu(C, $u) : (C.f & _u) !== 0 && Mu(C, AD), S0(C)));
		}
}
function qF(u) {
	var s;
	var D = cu,
		e = pu,
		F = bu,
		A = Z,
		C = DD,
		E = du,
		r = uu,
		t = Ru,
		n = u.f;
	(cu = null),
		(pu = 0),
		(bu = null),
		(DD = (n & yu) !== 0 && (Ru || !iD || Z === null)),
		(Z = (n & (Yu | mD)) === 0 ? u : null),
		(du = null),
		E0(u.ctx),
		(Ru = !1),
		i0++,
		(u.f |= q0);
	try {
		var i = (0, u.fn)(),
			B = u.deps;
		if (cu !== null) {
			var a;
			if ((B0(u, pu), B !== null && pu > 0))
				for (B.length = pu + cu.length, a = 0; a < cu.length; a++)
					B[pu + a] = cu[a];
			else u.deps = B = cu;
			if (!DD)
				for (a = pu; a < B.length; a++)
					((s = B[a]).reactions ?? (s.reactions = [])).push(u);
		} else B !== null && pu < B.length && (B0(u, pu), (B.length = pu));
		if (
			gD() &&
			bu !== null &&
			!Ru &&
			B !== null &&
			(u.f & (Iu | AD | $u)) === 0
		)
			for (a = 0; a < bu.length; a++) jF(bu[a], u);
		return (
			A !== u &&
				(i0++, bu !== null && (F === null ? (F = bu) : F.push(...bu))),
			i
		);
	} finally {
		(cu = D),
			(pu = e),
			(bu = F),
			(Z = A),
			(DD = C),
			(du = E),
			E0(r),
			(Ru = t),
			(u.f ^= q0);
	}
}
function EA(u, D) {
	let e = D.reactions;
	if (e !== null) {
		var F = o1.call(e, u);
		if (F !== -1) {
			var A = e.length - 1;
			A === 0 ? (e = D.reactions = null) : ((e[F] = e[A]), e.pop());
		}
	}
	e === null &&
		(D.f & Iu) !== 0 &&
		(cu === null || !cu.includes(D)) &&
		(Mu(D, AD), (D.f & (yu | A0)) === 0 && (D.f ^= A0), hF(D), B0(D, 0));
}
function B0(u, D) {
	var e = u.deps;
	if (e !== null) for (var F = D; F < e.length; F++) EA(u, e[F]);
}
function b0(u) {
	var D = u.f;
	if ((D & m0) === 0) {
		Mu(u, _u);
		var e = J,
			F = uu,
			A = iD;
		(J = u), (iD = !0);
		try {
			(D & ne) !== 0 ? uA(u) : LF(u), TF(u);
			var C = qF(u);
			(u.teardown = typeof C == "function" ? C : null), (u.wv = kF);
			var E = u.deps,
				r;
			je && I1 && u.f & $u;
		} catch (t) {
			w0(t, u, e, F || u.ctx);
		} finally {
			(iD = A), (J = e);
		}
	}
}
function rA() {
	try {
		S1();
	} catch (u) {
		if (t0 !== null) w0(u, t0, null);
		else throw u;
	}
}
function UF() {
	var u = iD;
	try {
		var D = 0;
		for (iD = !0; LD.length > 0; ) {
			D++ > 1e3 && rA();
			var e = LD,
				F = e.length;
			LD = [];
			for (var A = 0; A < F; A++) {
				var C = tA(e[A]);
				nA(C);
			}
			OD.clear();
		}
	} finally {
		(n0 = !1), (iD = u), (t0 = null);
	}
}
function nA(u) {
	var D = u.length;
	if (D !== 0)
		for (var e = 0; e < D; e++) {
			var F = u[e];
			if ((F.f & (m0 | Zu)) === 0)
				try {
					wD(F) &&
						(b0(F),
						F.deps === null &&
							F.first === null &&
							F.nodes_start === null &&
							(F.teardown === null ? IF(F) : (F.fn = null)));
				} catch (A) {
					w0(A, F, null, F.ctx);
				}
		}
}
function S0(u) {
	n0 || ((n0 = !0), queueMicrotask(UF));
	for (var D = (t0 = u); D.parent !== null; ) {
		D = D.parent;
		var e = D.f;
		if ((e & (mD | Yu)) !== 0) {
			if ((e & _u) === 0) return;
			D.f ^= _u;
		}
	}
	LD.push(D);
}
function tA(u) {
	for (var D = [], e = u; e !== null; ) {
		var F = e.f,
			A = (F & (Yu | mD)) !== 0,
			C = A && (F & _u) !== 0;
		if (!C && (F & Zu) === 0) {
			if ((F & fF) !== 0) D.push(e);
			else if (A) e.f ^= _u;
			else {
				var E = Z;
				try {
					(Z = e), wD(e) && b0(e);
				} catch (n) {
					w0(n, e, null, e.ctx);
				} finally {
					Z = E;
				}
			}
			var r = e.first;
			if (r !== null) {
				e = r;
				continue;
			}
		}
		var t = e.parent;
		for (e = e.next; e === null && t !== null; )
			(e = t.next), (t = t.parent);
	}
	return D;
}
function iA(u) {
	var D;
	for (ze(); LD.length > 0; ) (n0 = !0), UF(), ze();
	return D;
}
function I(u) {
	var D = u.f,
		e = (D & Iu) !== 0;
	if (Z !== null && !Ru) {
		if (!(du != null && du.includes(u))) {
			var F = Z.deps;
			u.rv < i0 &&
				((u.rv = i0),
				cu === null && F !== null && F[pu] === u
					? pu++
					: cu === null
					? (cu = [u])
					: (!DD || !cu.includes(u)) && cu.push(u));
		}
	} else if (e && u.deps === null && u.effects === null) {
		var A = u,
			C = A.parent;
		C !== null && (C.f & yu) === 0 && (A.f ^= yu);
	}
	return e && ((A = u), wD(A) && pF(A)), UD && OD.has(u) ? OD.get(u) : u.v;
}
function dD(u) {
	var D = Ru;
	try {
		return (Ru = !0), u();
	} finally {
		Ru = D;
	}
}
const BA = -7169;
function Mu(u, D) {
	u.f = (u.f & BA) | D;
}
function Cu(u) {
	if (!(typeof u != "object" || !u || u instanceof EventTarget)) {
		if (fD in u) H0(u);
		else if (!Array.isArray(u))
			for (let D in u) {
				const e = u[D];
				typeof e == "object" && e && fD in e && H0(e);
			}
	}
}
function H0(u, D = new Set()) {
	if (
		typeof u == "object" &&
		u !== null &&
		!(u instanceof EventTarget) &&
		!D.has(u)
	) {
		D.add(u), u instanceof Date && u.getTime();
		for (let F in u)
			try {
				H0(u[F], D);
			} catch {}
		const e = re(u);
		if (
			e !== Object.prototype &&
			e !== Array.prototype &&
			e !== Map.prototype &&
			e !== Set.prototype &&
			e !== Date.prototype
		) {
			const F = cF(e);
			for (let A in F) {
				const C = F[A].get;
				if (C)
					try {
						C.call(u);
					} catch {}
			}
		}
	}
}
const aA = ["touchstart", "touchmove"];
function sA(u) {
	return aA.includes(u);
}
function oA(u) {
	var D = Z,
		e = J;
	Su(null), ju(null);
	try {
		return u();
	} finally {
		Su(D), ju(e);
	}
}
const GF = new Set(),
	z0 = new Set();
function lA(u, D, e, F = {}) {
	function A(C) {
		if ((F.capture || MD.call(D, C), !C.cancelBubble))
			return oA(() => (e == null ? void 0 : e.call(this, C)));
	}
	return (
		u.startsWith("pointer") || u.startsWith("touch") || u === "wheel"
			? RF(() => {
					D.addEventListener(u, A, F);
			  })
			: D.addEventListener(u, A, F),
		A
	);
}
function V0(u, D, e, F, A) {
	var C = { capture: F, passive: A },
		E = lA(u, D, e, C);
	(D === document.body || D === window || D === document) &&
		NF(() => {
			D.removeEventListener(u, E, C);
		});
}
function cA(u) {
	for (var D = 0; D < u.length; D++) GF.add(u[D]);
	for (var e of z0) e(u);
}
function MD(u) {
	var g;
	var D = this,
		e = D.ownerDocument,
		F = u.type,
		A = ((g = u.composedPath) == null ? void 0 : g.call(u)) || [],
		C = A[0] || u.target,
		E = 0,
		r = u.__root;
	if (r) {
		var t = A.indexOf(r);
		if (t !== -1 && (D === document || D === window)) {
			u.__root = D;
			return;
		}
		var n = A.indexOf(D);
		if (n === -1) return;
		t <= n && (E = t);
	}
	if (((C = A[E] || u.target), C !== D)) {
		l1(u, "currentTarget", {
			configurable: !0,
			get() {
				return C || e;
			},
		});
		var i = Z,
			B = J;
		Su(null), ju(null);
		try {
			for (var a, s = []; C !== null; ) {
				var d = C.assignedSlot || C.parentNode || C.host || null;
				try {
					var o = C["__" + F];
					if (o != null && (!C.disabled || u.target === C))
						if (_0(o)) {
							var [_, ...c] = o;
							_.apply(C, [u, ...c]);
						} else o.call(C, u);
				} catch (m) {
					a ? s.push(m) : (a = m);
				}
				if (u.cancelBubble || d === D || d === null) break;
				C = d;
			}
			if (a) {
				for (let m of s)
					queueMicrotask(() => {
						throw m;
					});
				throw a;
			}
		} finally {
			(u.__root = D), delete u.currentTarget, Su(i), ju(B);
		}
	}
}
function fA(u) {
	var D = document.createElement("template");
	return (D.innerHTML = u), D.content;
}
function a0(u, D) {
	var e = J;
	e.nodes_start === null && ((e.nodes_start = u), (e.nodes_end = D));
}
function Eu(u, D) {
	var e = (D & U1) !== 0,
		F = (D & G1) !== 0,
		A,
		C = !u.startsWith("<!>");
	return () => {
		A === void 0 && ((A = fA(C ? u : "<!>" + u)), e || (A = r0(A)));
		var E = F || wF ? document.importNode(A, !0) : A.cloneNode(!0);
		if (e) {
			var r = r0(E),
				t = E.lastChild;
			a0(r, t);
		} else a0(E, E);
		return E;
	};
}
function aD() {
	var u = document.createDocumentFragment(),
		D = document.createComment(""),
		e = g0();
	return u.append(D, e), a0(D, e), u;
}
function Q(u, D) {
	u !== null && u.before(D);
}
function HF(u, D) {
	var e = D == null ? "" : typeof D == "object" ? D + "" : D;
	e !== (u.__t ?? (u.__t = u.nodeValue)) &&
		((u.__t = e), (u.nodeValue = e + ""));
}
function dA(u, D) {
	return _A(u, D);
}
const sD = new Map();
function _A(
	u,
	{
		target: D,
		anchor: e,
		props: F = {},
		events: A,
		context: C,
		intro: E = !0,
	}
) {
	K1();
	var r = new Set(),
		t = (B) => {
			for (var a = 0; a < B.length; a++) {
				var s = B[a];
				if (!r.has(s)) {
					r.add(s);
					var d = sA(s);
					D.addEventListener(s, MD, { passive: d });
					var o = sD.get(s);
					o === void 0
						? (document.addEventListener(s, MD, { passive: d }),
						  sD.set(s, 1))
						: sD.set(s, o + 1);
				}
			}
		};
	t(Ee(GF)), z0.add(t);
	var n = void 0,
		i = Q1(() => {
			var B = e ?? D.appendChild(g0());
			return (
				Wu(() => {
					if (C) {
						jD({});
						var a = uu;
						a.c = C;
					}
					A && (F.$$events = A), (n = u(B, F) || {}), C && qD();
				}),
				() => {
					var d;
					for (var a of r) {
						D.removeEventListener(a, MD);
						var s = sD.get(a);
						--s === 0
							? (document.removeEventListener(a, MD),
							  sD.delete(a))
							: sD.set(a, s);
					}
					z0.delete(t),
						B !== e &&
							((d = B.parentNode) == null || d.removeChild(B));
				}
			);
		});
	return vA.set(n, i), n;
}
let vA = new WeakMap();
const O0 = 0,
	ZD = 1,
	x0 = 2;
function Ze(u, D, e, F, A) {
	var C = u,
		E = gD(),
		r = uu,
		t = Bu,
		n,
		i,
		B,
		a = (E ? FD : au)(void 0),
		s = (E ? FD : au)(void 0),
		d = !1;
	function o(c, g) {
		(d = !0), g && (ju(_), Su(_), E0(r));
		try {
			c === O0 && e && (n ? BD(n) : (n = Wu(() => e(C)))),
				c === ZD && F && (i ? BD(i) : (i = Wu(() => F(C, a)))),
				c !== O0 && n && Ku(n, () => (n = null)),
				c !== ZD && i && Ku(i, () => (i = null)),
				c !== x0 && B && Ku(B, () => (B = null));
		} finally {
			g && (E0(null), Su(null), ju(null), iA());
		}
	}
	var _ = yD(() => {
		if (t !== (t = D())) {
			if (d1(t)) {
				var c = t;
				(d = !1),
					c.then(
						(g) => {
							c === t && (TD(a, g), o(ZD, !0));
						},
						(g) => {
							if (c === t) throw (TD(s, g), o(x0, !0), s.v);
						}
					),
					RF(() => {
						d || o(O0, !0);
					});
			} else TD(a, t), o(ZD, !1);
			return () => (t = Bu);
		}
	});
}
function RD(u, D, [e, F] = [0, 0]) {
	var A = u,
		C = null,
		E = null,
		r = Bu,
		t = e > 0 ? h0 : 0,
		n = !1;
	const i = (a, s = !0) => {
			(n = !0), B(s, a);
		},
		B = (a, s) => {
			r !== (r = a) &&
				(r
					? (C ? BD(C) : s && (C = Wu(() => s(A))),
					  E &&
							Ku(E, () => {
								E = null;
							}))
					: (E ? BD(E) : s && (E = Wu(() => s(A, [e + 1, F]))),
					  C &&
							Ku(C, () => {
								C = null;
							})));
		};
	yD(() => {
		(n = !1), D(i), n || B(null, null);
	}, t);
}
function mA(u, D, e) {
	var F = u,
		A = Bu,
		C,
		E = gD() ? p1 : te;
	yD(() => {
		E(A, (A = D())) && (C && Ku(C), (C = Wu(() => e(F))));
	});
}
function hA(u, D, e, F) {
	for (var A = [], C = D.length, E = 0; E < C; E++) oe(D[E].e, A, !0);
	var r = C > 0 && A.length === 0 && e !== null;
	if (r) {
		var t = e.parentNode;
		W1(t), t.append(e), F.clear(), Xu(u, D[0].prev, D[C - 1].next);
	}
	PF(A, () => {
		for (var n = 0; n < C; n++) {
			var i = D[n];
			r || (F.delete(i.k), Xu(u, i.prev, i.next)), Ju(i.e, !r);
		}
	});
}
function gA(u, D, e, F, A, C = null) {
	var E = u,
		r = { flags: D, items: new Map(), first: null };
	{
		var t = u;
		E = t.appendChild(g0());
	}
	var n = null,
		i = !1,
		B = Be(() => {
			var a = e();
			return _0(a) ? a : a == null ? [] : Ee(a);
		});
	yD(() => {
		var a = I(B),
			s = a.length;
		(i && s === 0) ||
			((i = s === 0),
			pA(a, r, E, A, D, F, e),
			C !== null &&
				(s === 0
					? n
						? BD(n)
						: (n = Wu(() => C(E)))
					: n !== null &&
					  Ku(n, () => {
							n = null;
					  })),
			I(B));
	});
}
function pA(u, D, e, F, A, C, E) {
	var r = u.length,
		t = D.items,
		n = D.first,
		i = n,
		B,
		a = null,
		s = [],
		d = [],
		o,
		_,
		c,
		g;
	for (g = 0; g < r; g += 1) {
		if (((o = u[g]), (_ = C(o, g)), (c = t.get(_)), c === void 0)) {
			var m = i ? i.e.nodes_start : e;
			(a = wA(m, D, a, a === null ? D.first : a.next, o, _, g, F, A, E)),
				t.set(_, a),
				(s = []),
				(d = []),
				(i = a.next);
			continue;
		}
		if ((yA(c, o, g), (c.e.f & Zu) !== 0 && BD(c.e), c !== i)) {
			if (B !== void 0 && B.has(c)) {
				if (s.length < d.length) {
					var h = d[0],
						y;
					a = h.prev;
					var N = s[0],
						p = s[s.length - 1];
					for (y = 0; y < s.length; y += 1) Ke(s[y], h, e);
					for (y = 0; y < d.length; y += 1) B.delete(d[y]);
					Xu(D, N.prev, p.next),
						Xu(D, a, N),
						Xu(D, p, h),
						(i = h),
						(a = p),
						(g -= 1),
						(s = []),
						(d = []);
				} else
					B.delete(c),
						Ke(c, i, e),
						Xu(D, c.prev, c.next),
						Xu(D, c, a === null ? D.first : a.next),
						Xu(D, a, c),
						(a = c);
				continue;
			}
			for (s = [], d = []; i !== null && i.k !== _; )
				(i.e.f & Zu) === 0 && (B ?? (B = new Set())).add(i),
					d.push(i),
					(i = i.next);
			if (i === null) continue;
			c = i;
		}
		s.push(c), (a = c), (i = c.next);
	}
	if (i !== null || B !== void 0) {
		for (var P = B === void 0 ? [] : Ee(B); i !== null; )
			(i.e.f & Zu) === 0 && P.push(i), (i = i.next);
		var U = P.length;
		if (U > 0) {
			var H = r === 0 ? e : null;
			hA(D, P, H, t);
		}
	}
	(J.first = D.first && D.first.e), (J.last = a && a.e);
}
function yA(u, D, e, F) {
	TD(u.v, D), (u.i = e);
}
function wA(u, D, e, F, A, C, E, r, t, n) {
	var i = (t & O1) !== 0,
		B = (t & R1) === 0,
		a = i ? (B ? au(A) : FD(A)) : A,
		s = (t & x1) === 0 ? E : FD(E),
		d = { i: s, v: a, k: C, a: null, e: null, prev: e, next: F };
	try {
		return (
			(d.e = Wu(() => r(u, a, s, n), Z1)),
			(d.e.prev = e && e.e),
			(d.e.next = F && F.e),
			e === null ? (D.first = d) : ((e.next = d), (e.e.next = d.e)),
			F !== null && ((F.prev = d), (F.e.prev = d.e)),
			d
		);
	} finally {
	}
}
function Ke(u, D, e) {
	for (
		var F = u.next ? u.next.e.nodes_start : e,
			A = D ? D.e.nodes_start : e,
			C = u.e.nodes_start;
		C !== F;

	) {
		var E = p0(C);
		A.before(C), (C = E);
	}
}
function Xu(u, D, e) {
	D === null ? (u.first = e) : ((D.next = e), (D.e.next = e && e.e)),
		e !== null && ((e.prev = D), (e.e.prev = D && D.e));
}
function We(u, D, e, F, A) {
	var r;
	var C = (r = D.$$slots) == null ? void 0 : r[e],
		E = !1;
	C === !0 && ((C = D.children), (E = !0)),
		C === void 0 || C(u, E ? () => F : F);
}
function bA(u, D, e, F, A, C) {
	var E,
		r,
		t = null,
		n = u,
		i;
	yD(() => {
		const B = D() || null;
		var a = B === "svg" ? z1 : null;
		B !== E &&
			(i &&
				(B === null
					? Ku(i, () => {
							(i = null), (r = null);
					  })
					: B === r
					? BD(i)
					: Ju(i)),
			B &&
				B !== r &&
				(i = Wu(() => {
					if (
						((t = a
							? document.createElementNS(a, B)
							: document.createElement(B)),
						a0(t, t),
						F)
					) {
						var s = t.appendChild(g0());
						F(t, s);
					}
					(J.nodes_end = t), n.before(t);
				})),
			(E = B),
			E && (r = E));
	}, h0);
}
function SA(u, D, e) {
	ae(() => {
		var F = dD(() => D(u, e == null ? void 0 : e()) || {});
		if (e && F != null && F.update) {
			var A = !1,
				C = {};
			y0(() => {
				var E = e();
				Cu(E), A && te(C, E) && ((C = E), F.update(E));
			}),
				(A = !0);
		}
		if (F != null && F.destroy) return () => F.destroy();
	});
}
const Je = [
	...` 	
\r\f \v\uFEFF`,
];
function MA(u, D, e) {
	var F = "" + u;
	if (e) {
		for (var A in e)
			if (e[A]) F = F ? F + " " + A : A;
			else if (F.length)
				for (var C = A.length, E = 0; (E = F.indexOf(A, E)) >= 0; ) {
					var r = E + C;
					(E === 0 || Je.includes(F[E - 1])) &&
					(r === F.length || Je.includes(F[r]))
						? (F =
								(E === 0 ? "" : F.substring(0, E)) +
								F.substring(r + 1))
						: (E = r);
				}
	}
	return F === "" ? null : F;
}
function NA(u, D) {
	return u == null ? null : String(u);
}
function TA(u, D, e, F, A, C) {
	var E = u.__className;
	if (E !== e || E === void 0) {
		var r = MA(e, F, C);
		r == null ? u.removeAttribute("class") : u.setAttribute("class", r),
			(u.__className = e);
	} else if (C && A !== C)
		for (var t in C) {
			var n = !!C[t];
			(A == null || n !== !!A[t]) && u.classList.toggle(t, n);
		}
	return C;
}
function LA(u, D, e, F) {
	var A = u.__style;
	if (A !== D) {
		var C = NA(D);
		C == null ? u.removeAttribute("style") : (u.style.cssText = C),
			(u.__style = D);
	}
	return F;
}
const IA = Symbol("is custom element"),
	PA = Symbol("is html");
function zF(u, D, e, F) {
	var A = OA(u);
	A[D] !== (A[D] = e) &&
		(e == null
			? u.removeAttribute(D)
			: typeof e != "string" && xA(u).includes(D)
			? (u[D] = e)
			: u.setAttribute(D, e));
}
function OA(u) {
	return (
		u.__attributes ??
		(u.__attributes = {
			[IA]: u.nodeName.includes("-"),
			[PA]: u.namespaceURI === H1,
		})
	);
}
var Ye = new Map();
function xA(u) {
	var D = Ye.get(u.nodeName);
	if (D) return D;
	Ye.set(u.nodeName, (D = []));
	for (var e, F = u, A = Element.prototype; A !== F; ) {
		e = cF(F);
		for (var C in e) e[C].set && D.push(C);
		F = re(F);
	}
	return D;
}
function M0(u = !1) {
	const D = uu,
		e = D.l.u;
	if (!e) return;
	let F = () => Cu(D.s);
	if (u) {
		let A = 0,
			C = {};
		const E = PD(() => {
			let r = !1;
			const t = D.s;
			for (const n in t) t[n] !== C[n] && ((C[n] = t[n]), (r = !0));
			return r && A++, A;
		});
		F = () => I(E);
	}
	e.b.length &&
		Y1(() => {
			Qe(D, F), F0(e.b);
		}),
		U0(() => {
			const A = dD(() => e.m.map(_1));
			return () => {
				for (const C of A) typeof C == "function" && C();
			};
		}),
		e.a.length &&
			U0(() => {
				Qe(D, F), F0(e.a);
			});
}
function Qe(u, D) {
	if (u.l.s) for (const e of u.l.s) I(e);
	D();
}
let KD = !1;
function RA(u) {
	var D = KD;
	try {
		return (KD = !1), [u(), KD];
	} finally {
		KD = D;
	}
}
const kA = {
	get(u, D) {
		if (!u.exclude.includes(D))
			return I(u.version), D in u.special ? u.special[D]() : u.props[D];
	},
	set(u, D, e) {
		return (
			D in u.special ||
				(u.special[D] = hu(
					{
						get [D]() {
							return u.props[D];
						},
					},
					D,
					vF
				)),
			u.special[D](e),
			Ge(u.version),
			!0
		);
	},
	getOwnPropertyDescriptor(u, D) {
		if (!u.exclude.includes(D) && D in u.props)
			return { enumerable: !0, configurable: !0, value: u.props[D] };
	},
	deleteProperty(u, D) {
		return u.exclude.includes(D) || (u.exclude.push(D), Ge(u.version)), !0;
	},
	has(u, D) {
		return u.exclude.includes(D) ? !1 : D in u.props;
	},
	ownKeys(u) {
		return Reflect.ownKeys(u.props).filter((D) => !u.exclude.includes(D));
	},
};
function $A(u, D) {
	return new Proxy({ props: u, exclude: D, special: {}, version: FD(0) }, kA);
}
function Xe(u) {
	var D;
	return ((D = u.ctx) == null ? void 0 : D.d) ?? !1;
}
function hu(u, D, e, F) {
	var N;
	var A = (e & k1) !== 0,
		C = !hD || (e & $1) !== 0,
		E = (e & j1) !== 0,
		r = (e & q1) !== 0,
		t = !1,
		n;
	E ? ([n, t] = RA(() => u[D])) : (n = u[D]);
	var i = fD in u || g1 in u,
		B =
			(E &&
				(((N = cD(u, D)) == null ? void 0 : N.set) ??
					(i && D in u && ((p) => (u[D] = p))))) ||
			void 0,
		a = F,
		s = !0,
		d = !1,
		o = () => ((d = !0), s && ((s = !1), r ? (a = dD(F)) : (a = F)), a);
	n === void 0 && F !== void 0 && (B && C && M1(), (n = o()), B && B(n));
	var _;
	if (C)
		_ = () => {
			var p = u[D];
			return p === void 0 ? o() : ((s = !0), (d = !1), p);
		};
	else {
		var c = (A ? PD : Be)(() => u[D]);
		(c.f |= m1),
			(_ = () => {
				var p = I(c);
				return p !== void 0 && (a = void 0), p === void 0 ? a : p;
			});
	}
	if ((e & vF) === 0) return _;
	if (B) {
		var g = u.$$legacy;
		return function (p, P) {
			return arguments.length > 0
				? ((!C || !P || g || t) && B(P ? _() : p), p)
				: _();
		};
	}
	var m = !1,
		h = au(n),
		y = PD(() => {
			var p = _(),
				P = I(h);
			return m ? ((m = !1), P) : (h.v = p);
		});
	return (
		E && I(y),
		A || (y.equals = ie),
		function (p, P) {
			if (arguments.length > 0) {
				const U = P ? I(y) : C && E ? tD(p) : p;
				if (!y.equals(U)) {
					if (
						((m = !0), W(h, U), d && a !== void 0 && (a = U), Xe(y))
					)
						return p;
					dD(() => I(y));
				}
				return p;
			}
			return Xe(y) ? y.v : I(y);
		}
	);
}
function le(u) {
	uu === null && mF(),
		hD && uu.l !== null
			? qA(uu).m.push(u)
			: U0(() => {
					const D = dD(u);
					if (typeof D == "function") return D;
			  });
}
function jA(u, D, { bubbles: e = !1, cancelable: F = !1 } = {}) {
	return new CustomEvent(u, { detail: D, bubbles: e, cancelable: F });
}
function Kn() {
	const u = uu;
	return (
		u === null && mF(),
		(D, e, F) => {
			var C;
			const A = (C = u.s.$$events) == null ? void 0 : C[D];
			if (A) {
				const E = _0(A) ? A.slice() : [A],
					r = jA(D, e, F);
				for (const t of E) t.call(u.x, r);
				return !r.defaultPrevented;
			}
			return !0;
		}
	);
}
function qA(u) {
	var D = u.l;
	return D.u ?? (D.u = { a: [], b: [], m: [] });
}
const UA = "5";
var lF;
typeof window < "u" &&
	(
		(lF = window.__svelte ?? (window.__svelte = {})).v ?? (lF.v = new Set())
	).add(UA);
P1();
const GA = "./assets/warning-oV-Xuofl.png";
var HA =
	Eu(`<main><div class="popup-overlay svelte-1gdj0jn"><div class="popup svelte-1gdj0jn"><img class="warning-ico svelte-1gdj0jn" alt="warning-icon"> <p>Ồ không! Ngọc Diệp hãy xem trên máy tính để có trải nghiệm tốt
				nhất nha (^^)</p> <button class="svelte-1gdj0jn">Okiii thôi!</button></div></div></main>`);
function zA(u, D) {
	let e = hu(D, "closePopup", 8);
	var F = HA(),
		A = Au(F),
		C = Au(A),
		E = Au(C);
	zF(E, "src", GA);
	var r = fu(E, 4);
	V0("click", r, function (...t) {
		var n;
		(n = e()) == null || n.apply(this, t);
	}),
		Q(u, F);
}
const VA = "modulepreload",
	ZA = function (u) {
		return "/" + u;
	},
	uF = {},
	oD = function (D, e, F) {
		let A = Promise.resolve();
		if (e && e.length > 0) {
			document.getElementsByTagName("link");
			const E = document.querySelector("meta[property=csp-nonce]"),
				r =
					(E == null ? void 0 : E.nonce) ||
					(E == null ? void 0 : E.getAttribute("nonce"));
			A = Promise.allSettled(
				e.map((t) => {
					if (((t = ZA(t)), t in uF)) return;
					uF[t] = !0;
					const n = t.endsWith(".css"),
						i = n ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${i}`)) return;
					const B = document.createElement("link");
					if (
						((B.rel = n ? "stylesheet" : VA),
						n || (B.as = "script"),
						(B.crossOrigin = ""),
						(B.href = t),
						r && B.setAttribute("nonce", r),
						document.head.appendChild(B),
						n)
					)
						return new Promise((a, s) => {
							B.addEventListener("load", a),
								B.addEventListener("error", () =>
									s(
										new Error(
											`Unable to preload CSS for ${t}`
										)
									)
								);
						});
				})
			);
		}
		function C(E) {
			const r = new Event("vite:preloadError", { cancelable: !0 });
			if (((r.payload = E), window.dispatchEvent(r), !r.defaultPrevented))
				throw E;
		}
		return A.then((E) => {
			for (const r of E || []) r.status === "rejected" && C(r.reason);
			return D().catch(C);
		});
	};
function ce(u) {
	if (Object.prototype.hasOwnProperty.call(u, "__esModule")) return u;
	var D = u.default;
	if (typeof D == "function") {
		var e = function F() {
			return this instanceof F
				? Reflect.construct(D, arguments, this.constructor)
				: D.apply(this, arguments);
		};
		e.prototype = D.prototype;
	} else e = {};
	return (
		Object.defineProperty(e, "__esModule", { value: !0 }),
		Object.keys(u).forEach(function (F) {
			var A = Object.getOwnPropertyDescriptor(u, F);
			Object.defineProperty(
				e,
				F,
				A.get
					? A
					: {
							enumerable: !0,
							get: function () {
								return u[F];
							},
					  }
			);
		}),
		e
	);
}
var R0 = {},
	bD = {},
	Z0 = function (u, D) {
		return (
			(Z0 =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (e, F) {
						e.__proto__ = F;
					}) ||
				function (e, F) {
					for (var A in F)
						Object.prototype.hasOwnProperty.call(F, A) &&
							(e[A] = F[A]);
				}),
			Z0(u, D)
		);
	};
function fe(u, D) {
	if (typeof D != "function" && D !== null)
		throw new TypeError(
			"Class extends value " + String(D) + " is not a constructor or null"
		);
	Z0(u, D);
	function e() {
		this.constructor = u;
	}
	u.prototype =
		D === null ? Object.create(D) : ((e.prototype = D.prototype), new e());
}
var s0 = function () {
	return (
		(s0 =
			Object.assign ||
			function (D) {
				for (var e, F = 1, A = arguments.length; F < A; F++) {
					e = arguments[F];
					for (var C in e)
						Object.prototype.hasOwnProperty.call(e, C) &&
							(D[C] = e[C]);
				}
				return D;
			}),
		s0.apply(this, arguments)
	);
};
function VF(u, D) {
	var e = {};
	for (var F in u)
		Object.prototype.hasOwnProperty.call(u, F) &&
			D.indexOf(F) < 0 &&
			(e[F] = u[F]);
	if (u != null && typeof Object.getOwnPropertySymbols == "function")
		for (var A = 0, F = Object.getOwnPropertySymbols(u); A < F.length; A++)
			D.indexOf(F[A]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(u, F[A]) &&
				(e[F[A]] = u[F[A]]);
	return e;
}
function ZF(u, D, e, F) {
	var A = arguments.length,
		C =
			A < 3
				? D
				: F === null
				? (F = Object.getOwnPropertyDescriptor(D, e))
				: F,
		E;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
		C = Reflect.decorate(u, D, e, F);
	else
		for (var r = u.length - 1; r >= 0; r--)
			(E = u[r]) &&
				(C = (A < 3 ? E(C) : A > 3 ? E(D, e, C) : E(D, e)) || C);
	return A > 3 && C && Object.defineProperty(D, e, C), C;
}
function KF(u, D) {
	return function (e, F) {
		D(e, F, u);
	};
}
function WF(u, D, e, F, A, C) {
	function E(c) {
		if (c !== void 0 && typeof c != "function")
			throw new TypeError("Function expected");
		return c;
	}
	for (
		var r = F.kind,
			t = r === "getter" ? "get" : r === "setter" ? "set" : "value",
			n = !D && u ? (F.static ? u : u.prototype) : null,
			i = D || (n ? Object.getOwnPropertyDescriptor(n, F.name) : {}),
			B,
			a = !1,
			s = e.length - 1;
		s >= 0;
		s--
	) {
		var d = {};
		for (var o in F) d[o] = o === "access" ? {} : F[o];
		for (var o in F.access) d.access[o] = F.access[o];
		d.addInitializer = function (c) {
			if (a)
				throw new TypeError(
					"Cannot add initializers after decoration has completed"
				);
			C.push(E(c || null));
		};
		var _ = (0, e[s])(
			r === "accessor" ? { get: i.get, set: i.set } : i[t],
			d
		);
		if (r === "accessor") {
			if (_ === void 0) continue;
			if (_ === null || typeof _ != "object")
				throw new TypeError("Object expected");
			(B = E(_.get)) && (i.get = B),
				(B = E(_.set)) && (i.set = B),
				(B = E(_.init)) && A.unshift(B);
		} else (B = E(_)) && (r === "field" ? A.unshift(B) : (i[t] = B));
	}
	n && Object.defineProperty(n, F.name, i), (a = !0);
}
function JF(u, D, e) {
	for (var F = arguments.length > 2, A = 0; A < D.length; A++)
		e = F ? D[A].call(u, e) : D[A].call(u);
	return F ? e : void 0;
}
function YF(u) {
	return typeof u == "symbol" ? u : "".concat(u);
}
function QF(u, D, e) {
	return (
		typeof D == "symbol" &&
			(D = D.description ? "[".concat(D.description, "]") : ""),
		Object.defineProperty(u, "name", {
			configurable: !0,
			value: e ? "".concat(e, " ", D) : D,
		})
	);
}
function XF(u, D) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
		return Reflect.metadata(u, D);
}
function uC(u, D, e, F) {
	function A(C) {
		return C instanceof e
			? C
			: new e(function (E) {
					E(C);
			  });
	}
	return new (e || (e = Promise))(function (C, E) {
		function r(i) {
			try {
				n(F.next(i));
			} catch (B) {
				E(B);
			}
		}
		function t(i) {
			try {
				n(F.throw(i));
			} catch (B) {
				E(B);
			}
		}
		function n(i) {
			i.done ? C(i.value) : A(i.value).then(r, t);
		}
		n((F = F.apply(u, D || [])).next());
	});
}
function DC(u, D) {
	var e = {
			label: 0,
			sent: function () {
				if (C[0] & 1) throw C[1];
				return C[1];
			},
			trys: [],
			ops: [],
		},
		F,
		A,
		C,
		E = Object.create(
			(typeof Iterator == "function" ? Iterator : Object).prototype
		);
	return (
		(E.next = r(0)),
		(E.throw = r(1)),
		(E.return = r(2)),
		typeof Symbol == "function" &&
			(E[Symbol.iterator] = function () {
				return this;
			}),
		E
	);
	function r(n) {
		return function (i) {
			return t([n, i]);
		};
	}
	function t(n) {
		if (F) throw new TypeError("Generator is already executing.");
		for (; E && ((E = 0), n[0] && (e = 0)), e; )
			try {
				if (
					((F = 1),
					A &&
						(C =
							n[0] & 2
								? A.return
								: n[0]
								? A.throw || ((C = A.return) && C.call(A), 0)
								: A.next) &&
						!(C = C.call(A, n[1])).done)
				)
					return C;
				switch (((A = 0), C && (n = [n[0] & 2, C.value]), n[0])) {
					case 0:
					case 1:
						C = n;
						break;
					case 4:
						return e.label++, { value: n[1], done: !1 };
					case 5:
						e.label++, (A = n[1]), (n = [0]);
						continue;
					case 7:
						(n = e.ops.pop()), e.trys.pop();
						continue;
					default:
						if (
							((C = e.trys),
							!(C = C.length > 0 && C[C.length - 1]) &&
								(n[0] === 6 || n[0] === 2))
						) {
							e = 0;
							continue;
						}
						if (
							n[0] === 3 &&
							(!C || (n[1] > C[0] && n[1] < C[3]))
						) {
							e.label = n[1];
							break;
						}
						if (n[0] === 6 && e.label < C[1]) {
							(e.label = C[1]), (C = n);
							break;
						}
						if (C && e.label < C[2]) {
							(e.label = C[2]), e.ops.push(n);
							break;
						}
						C[2] && e.ops.pop(), e.trys.pop();
						continue;
				}
				n = D.call(u, e);
			} catch (i) {
				(n = [6, i]), (A = 0);
			} finally {
				F = C = 0;
			}
		if (n[0] & 5) throw n[1];
		return { value: n[0] ? n[1] : void 0, done: !0 };
	}
}
var N0 = Object.create
	? function (u, D, e, F) {
			F === void 0 && (F = e);
			var A = Object.getOwnPropertyDescriptor(D, e);
			(!A ||
				("get" in A ? !D.__esModule : A.writable || A.configurable)) &&
				(A = {
					enumerable: !0,
					get: function () {
						return D[e];
					},
				}),
				Object.defineProperty(u, F, A);
	  }
	: function (u, D, e, F) {
			F === void 0 && (F = e), (u[F] = D[e]);
	  };
function eC(u, D) {
	for (var e in u)
		e !== "default" &&
			!Object.prototype.hasOwnProperty.call(D, e) &&
			N0(D, u, e);
}
function o0(u) {
	var D = typeof Symbol == "function" && Symbol.iterator,
		e = D && u[D],
		F = 0;
	if (e) return e.call(u);
	if (u && typeof u.length == "number")
		return {
			next: function () {
				return (
					u && F >= u.length && (u = void 0),
					{ value: u && u[F++], done: !u }
				);
			},
		};
	throw new TypeError(
		D ? "Object is not iterable." : "Symbol.iterator is not defined."
	);
}
function de(u, D) {
	var e = typeof Symbol == "function" && u[Symbol.iterator];
	if (!e) return u;
	var F = e.call(u),
		A,
		C = [],
		E;
	try {
		for (; (D === void 0 || D-- > 0) && !(A = F.next()).done; )
			C.push(A.value);
	} catch (r) {
		E = { error: r };
	} finally {
		try {
			A && !A.done && (e = F.return) && e.call(F);
		} finally {
			if (E) throw E.error;
		}
	}
	return C;
}
function FC() {
	for (var u = [], D = 0; D < arguments.length; D++)
		u = u.concat(de(arguments[D]));
	return u;
}
function CC() {
	for (var u = 0, D = 0, e = arguments.length; D < e; D++)
		u += arguments[D].length;
	for (var F = Array(u), A = 0, D = 0; D < e; D++)
		for (var C = arguments[D], E = 0, r = C.length; E < r; E++, A++)
			F[A] = C[E];
	return F;
}
function Pu(u, D, e) {
	if (e || arguments.length === 2)
		for (var F = 0, A = D.length, C; F < A; F++)
			(C || !(F in D)) &&
				(C || (C = Array.prototype.slice.call(D, 0, F)), (C[F] = D[F]));
	return u.concat(C || Array.prototype.slice.call(D));
}
function _D(u) {
	return this instanceof _D ? ((this.v = u), this) : new _D(u);
}
function AC(u, D, e) {
	if (!Symbol.asyncIterator)
		throw new TypeError("Symbol.asyncIterator is not defined.");
	var F = e.apply(u, D || []),
		A,
		C = [];
	return (
		(A = Object.create(
			(typeof AsyncIterator == "function" ? AsyncIterator : Object)
				.prototype
		)),
		r("next"),
		r("throw"),
		r("return", E),
		(A[Symbol.asyncIterator] = function () {
			return this;
		}),
		A
	);
	function E(s) {
		return function (d) {
			return Promise.resolve(d).then(s, B);
		};
	}
	function r(s, d) {
		F[s] &&
			((A[s] = function (o) {
				return new Promise(function (_, c) {
					C.push([s, o, _, c]) > 1 || t(s, o);
				});
			}),
			d && (A[s] = d(A[s])));
	}
	function t(s, d) {
		try {
			n(F[s](d));
		} catch (o) {
			a(C[0][3], o);
		}
	}
	function n(s) {
		s.value instanceof _D
			? Promise.resolve(s.value.v).then(i, B)
			: a(C[0][2], s);
	}
	function i(s) {
		t("next", s);
	}
	function B(s) {
		t("throw", s);
	}
	function a(s, d) {
		s(d), C.shift(), C.length && t(C[0][0], C[0][1]);
	}
}
function EC(u) {
	var D, e;
	return (
		(D = {}),
		F("next"),
		F("throw", function (A) {
			throw A;
		}),
		F("return"),
		(D[Symbol.iterator] = function () {
			return this;
		}),
		D
	);
	function F(A, C) {
		D[A] = u[A]
			? function (E) {
					return (e = !e)
						? { value: _D(u[A](E)), done: !1 }
						: C
						? C(E)
						: E;
			  }
			: C;
	}
}
function rC(u) {
	if (!Symbol.asyncIterator)
		throw new TypeError("Symbol.asyncIterator is not defined.");
	var D = u[Symbol.asyncIterator],
		e;
	return D
		? D.call(u)
		: ((u = typeof o0 == "function" ? o0(u) : u[Symbol.iterator]()),
		  (e = {}),
		  F("next"),
		  F("throw"),
		  F("return"),
		  (e[Symbol.asyncIterator] = function () {
				return this;
		  }),
		  e);
	function F(C) {
		e[C] =
			u[C] &&
			function (E) {
				return new Promise(function (r, t) {
					(E = u[C](E)), A(r, t, E.done, E.value);
				});
			};
	}
	function A(C, E, r, t) {
		Promise.resolve(t).then(function (n) {
			C({ value: n, done: r });
		}, E);
	}
}
function nC(u, D) {
	return (
		Object.defineProperty
			? Object.defineProperty(u, "raw", { value: D })
			: (u.raw = D),
		u
	);
}
var KA = Object.create
		? function (u, D) {
				Object.defineProperty(u, "default", {
					enumerable: !0,
					value: D,
				});
		  }
		: function (u, D) {
				u.default = D;
		  },
	K0 = function (u) {
		return (
			(K0 =
				Object.getOwnPropertyNames ||
				function (D) {
					var e = [];
					for (var F in D)
						Object.prototype.hasOwnProperty.call(D, F) &&
							(e[e.length] = F);
					return e;
				}),
			K0(u)
		);
	};
function tC(u) {
	if (u && u.__esModule) return u;
	var D = {};
	if (u != null)
		for (var e = K0(u), F = 0; F < e.length; F++)
			e[F] !== "default" && N0(D, u, e[F]);
	return KA(D, u), D;
}
function iC(u) {
	return u && u.__esModule ? u : { default: u };
}
function BC(u, D, e, F) {
	if (e === "a" && !F)
		throw new TypeError("Private accessor was defined without a getter");
	if (typeof D == "function" ? u !== D || !F : !D.has(u))
		throw new TypeError(
			"Cannot read private member from an object whose class did not declare it"
		);
	return e === "m" ? F : e === "a" ? F.call(u) : F ? F.value : D.get(u);
}
function aC(u, D, e, F, A) {
	if (F === "m") throw new TypeError("Private method is not writable");
	if (F === "a" && !A)
		throw new TypeError("Private accessor was defined without a setter");
	if (typeof D == "function" ? u !== D || !A : !D.has(u))
		throw new TypeError(
			"Cannot write private member to an object whose class did not declare it"
		);
	return F === "a" ? A.call(u, e) : A ? (A.value = e) : D.set(u, e), e;
}
function sC(u, D) {
	if (D === null || (typeof D != "object" && typeof D != "function"))
		throw new TypeError("Cannot use 'in' operator on non-object");
	return typeof u == "function" ? D === u : u.has(D);
}
function oC(u, D, e) {
	if (D != null) {
		if (typeof D != "object" && typeof D != "function")
			throw new TypeError("Object expected.");
		var F, A;
		if (e) {
			if (!Symbol.asyncDispose)
				throw new TypeError("Symbol.asyncDispose is not defined.");
			F = D[Symbol.asyncDispose];
		}
		if (F === void 0) {
			if (!Symbol.dispose)
				throw new TypeError("Symbol.dispose is not defined.");
			(F = D[Symbol.dispose]), e && (A = F);
		}
		if (typeof F != "function")
			throw new TypeError("Object not disposable.");
		A &&
			(F = function () {
				try {
					A.call(this);
				} catch (C) {
					return Promise.reject(C);
				}
			}),
			u.stack.push({ value: D, dispose: F, async: e });
	} else e && u.stack.push({ async: !0 });
	return D;
}
var WA =
	typeof SuppressedError == "function"
		? SuppressedError
		: function (u, D, e) {
				var F = new Error(e);
				return (
					(F.name = "SuppressedError"),
					(F.error = u),
					(F.suppressed = D),
					F
				);
		  };
function lC(u) {
	function D(C) {
		(u.error = u.hasError
			? new WA(C, u.error, "An error was suppressed during disposal.")
			: C),
			(u.hasError = !0);
	}
	var e,
		F = 0;
	function A() {
		for (; (e = u.stack.pop()); )
			try {
				if (!e.async && F === 1)
					return (F = 0), u.stack.push(e), Promise.resolve().then(A);
				if (e.dispose) {
					var C = e.dispose.call(e.value);
					if (e.async)
						return (
							(F |= 2),
							Promise.resolve(C).then(A, function (E) {
								return D(E), A();
							})
						);
				} else F |= 1;
			} catch (E) {
				D(E);
			}
		if (F === 1)
			return u.hasError ? Promise.reject(u.error) : Promise.resolve();
		if (u.hasError) throw u.error;
	}
	return A();
}
function cC(u, D) {
	return typeof u == "string" && /^\.\.?\//.test(u)
		? u.replace(
				/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
				function (e, F, A, C, E) {
					return F
						? D
							? ".jsx"
							: ".js"
						: A && (!C || !E)
						? e
						: A + C + "." + E.toLowerCase() + "js";
				}
		  )
		: u;
}
const JA = {
		__extends: fe,
		__assign: s0,
		__rest: VF,
		__decorate: ZF,
		__param: KF,
		__esDecorate: WF,
		__runInitializers: JF,
		__propKey: YF,
		__setFunctionName: QF,
		__metadata: XF,
		__awaiter: uC,
		__generator: DC,
		__createBinding: N0,
		__exportStar: eC,
		__values: o0,
		__read: de,
		__spread: FC,
		__spreadArrays: CC,
		__spreadArray: Pu,
		__await: _D,
		__asyncGenerator: AC,
		__asyncDelegator: EC,
		__asyncValues: rC,
		__makeTemplateObject: nC,
		__importStar: tC,
		__importDefault: iC,
		__classPrivateFieldGet: BC,
		__classPrivateFieldSet: aC,
		__classPrivateFieldIn: sC,
		__addDisposableResource: oC,
		__disposeResources: lC,
		__rewriteRelativeImportExtension: cC,
	},
	YA = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				__addDisposableResource: oC,
				get __assign() {
					return s0;
				},
				__asyncDelegator: EC,
				__asyncGenerator: AC,
				__asyncValues: rC,
				__await: _D,
				__awaiter: uC,
				__classPrivateFieldGet: BC,
				__classPrivateFieldIn: sC,
				__classPrivateFieldSet: aC,
				__createBinding: N0,
				__decorate: ZF,
				__disposeResources: lC,
				__esDecorate: WF,
				__exportStar: eC,
				__extends: fe,
				__generator: DC,
				__importDefault: iC,
				__importStar: tC,
				__makeTemplateObject: nC,
				__metadata: XF,
				__param: KF,
				__propKey: YF,
				__read: de,
				__rest: VF,
				__rewriteRelativeImportExtension: cC,
				__runInitializers: JF,
				__setFunctionName: QF,
				__spread: FC,
				__spreadArray: Pu,
				__spreadArrays: CC,
				__values: o0,
				default: JA,
			},
			Symbol.toStringTag,
			{ value: "Module" }
		)
	),
	QA = ce(YA);
function fC(u) {
	return Intl.getCanonicalLocales(u);
}
function XA(u, D) {
	var e = D.zoneNames,
		F = D.uppercaseLinks,
		A = u.toUpperCase(),
		C = e.reduce(function (r, t) {
			return (r[t.toUpperCase()] = t), r;
		}, {}),
		E = F[A] || C[A];
	return E === "Etc/UTC" || E === "Etc/GMT" ? "UTC" : E;
}
/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */ var W0 = 9e15,
	ED = 1e9,
	J0 = "0123456789abcdef",
	l0 =
		"2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
	c0 =
		"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
	Y0 = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -9e15,
		maxE: W0,
		crypto: !1,
	},
	dC,
	zu,
	R = !0,
	T0 = "[DecimalError] ",
	CD = T0 + "Invalid argument: ",
	_C = T0 + "Precision limit exceeded",
	vC = T0 + "crypto unavailable",
	mC = "[object Decimal]",
	lu = Math.floor,
	nu = Math.pow,
	uE = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
	DE = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
	eE = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
	hC = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
	Lu = 1e7,
	T = 7,
	FE = 9007199254740991,
	CE = l0.length - 1,
	Q0 = c0.length - 1,
	v = { toStringTag: mC };
v.absoluteValue = v.abs = function () {
	var u = new this.constructor(this);
	return u.s < 0 && (u.s = 1), b(u);
};
v.ceil = function () {
	return b(new this.constructor(this), this.e + 1, 2);
};
v.clampedTo = v.clamp = function (u, D) {
	var e,
		F = this,
		A = F.constructor;
	if (((u = new A(u)), (D = new A(D)), !u.s || !D.s)) return new A(NaN);
	if (u.gt(D)) throw Error(CD + D);
	return (e = F.cmp(u)), e < 0 ? u : F.cmp(D) > 0 ? D : new A(F);
};
v.comparedTo = v.cmp = function (u) {
	var D,
		e,
		F,
		A,
		C = this,
		E = C.d,
		r = (u = new C.constructor(u)).d,
		t = C.s,
		n = u.s;
	if (!E || !r)
		return !t || !n
			? NaN
			: t !== n
			? t
			: E === r
			? 0
			: !E ^ (t < 0)
			? 1
			: -1;
	if (!E[0] || !r[0]) return E[0] ? t : r[0] ? -n : 0;
	if (t !== n) return t;
	if (C.e !== u.e) return (C.e > u.e) ^ (t < 0) ? 1 : -1;
	for (F = E.length, A = r.length, D = 0, e = F < A ? F : A; D < e; ++D)
		if (E[D] !== r[D]) return (E[D] > r[D]) ^ (t < 0) ? 1 : -1;
	return F === A ? 0 : (F > A) ^ (t < 0) ? 1 : -1;
};
v.cosine = v.cos = function () {
	var u,
		D,
		e = this,
		F = e.constructor;
	return e.d
		? e.d[0]
			? ((u = F.precision),
			  (D = F.rounding),
			  (F.precision = u + Math.max(e.e, e.sd()) + T),
			  (F.rounding = 1),
			  (e = AE(F, bC(F, e))),
			  (F.precision = u),
			  (F.rounding = D),
			  b(zu == 2 || zu == 3 ? e.neg() : e, u, D, !0))
			: new F(1)
		: new F(NaN);
};
v.cubeRoot = v.cbrt = function () {
	var u,
		D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n,
		i = this,
		B = i.constructor;
	if (!i.isFinite() || i.isZero()) return new B(i);
	for (
		R = !1,
			C = i.s * nu(i.s * i, 1 / 3),
			!C || Math.abs(C) == 1 / 0
				? ((e = su(i.d)),
				  (u = i.e),
				  (C = (u - e.length + 1) % 3) &&
						(e += C == 1 || C == -2 ? "0" : "00"),
				  (C = nu(e, 1 / 3)),
				  (u = lu((u + 1) / 3) - (u % 3 == (u < 0 ? -1 : 2))),
				  C == 1 / 0
						? (e = "5e" + u)
						: ((e = C.toExponential()),
						  (e = e.slice(0, e.indexOf("e") + 1) + u)),
				  (F = new B(e)),
				  (F.s = i.s))
				: (F = new B(C.toString())),
			E = (u = B.precision) + 3;
		;

	)
		if (
			((r = F),
			(t = r.times(r).times(r)),
			(n = t.plus(i)),
			(F = X(n.plus(i).times(r), n.plus(t), E + 2, 1)),
			su(r.d).slice(0, E) === (e = su(F.d)).slice(0, E))
		)
			if (
				((e = e.slice(E - 3, E + 1)),
				e == "9999" || (!A && e == "4999"))
			) {
				if (!A && (b(r, u + 1, 0), r.times(r).times(r).eq(i))) {
					F = r;
					break;
				}
				(E += 4), (A = 1);
			} else {
				(!+e || (!+e.slice(1) && e.charAt(0) == "5")) &&
					(b(F, u + 1, 1), (D = !F.times(F).times(F).eq(i)));
				break;
			}
	return (R = !0), b(F, u, B.rounding, D);
};
v.decimalPlaces = v.dp = function () {
	var u,
		D = this.d,
		e = NaN;
	if (D) {
		if (((u = D.length - 1), (e = (u - lu(this.e / T)) * T), (u = D[u]), u))
			for (; u % 10 == 0; u /= 10) e--;
		e < 0 && (e = 0);
	}
	return e;
};
v.dividedBy = v.div = function (u) {
	return X(this, new this.constructor(u));
};
v.dividedToIntegerBy = v.divToInt = function (u) {
	var D = this,
		e = D.constructor;
	return b(X(D, new e(u), 0, 1, 1), e.precision, e.rounding);
};
v.equals = v.eq = function (u) {
	return this.cmp(u) === 0;
};
v.floor = function () {
	return b(new this.constructor(this), this.e + 1, 3);
};
v.greaterThan = v.gt = function (u) {
	return this.cmp(u) > 0;
};
v.greaterThanOrEqualTo = v.gte = function (u) {
	var D = this.cmp(u);
	return D == 1 || D === 0;
};
v.hyperbolicCosine = v.cosh = function () {
	var u,
		D,
		e,
		F,
		A,
		C = this,
		E = C.constructor,
		r = new E(1);
	if (!C.isFinite()) return new E(C.s ? 1 / 0 : NaN);
	if (C.isZero()) return r;
	(e = E.precision),
		(F = E.rounding),
		(E.precision = e + Math.max(C.e, C.sd()) + 4),
		(E.rounding = 1),
		(A = C.d.length),
		A < 32
			? ((u = Math.ceil(A / 3)), (D = (1 / I0(4, u)).toString()))
			: ((u = 16), (D = "2.3283064365386962890625e-10")),
		(C = vD(E, 1, C.times(D), new E(1), !0));
	for (var t, n = u, i = new E(8); n--; )
		(t = C.times(C)), (C = r.minus(t.times(i.minus(t.times(i)))));
	return b(C, (E.precision = e), (E.rounding = F), !0);
};
v.hyperbolicSine = v.sinh = function () {
	var u,
		D,
		e,
		F,
		A = this,
		C = A.constructor;
	if (!A.isFinite() || A.isZero()) return new C(A);
	if (
		((D = C.precision),
		(e = C.rounding),
		(C.precision = D + Math.max(A.e, A.sd()) + 4),
		(C.rounding = 1),
		(F = A.d.length),
		F < 3)
	)
		A = vD(C, 2, A, A, !0);
	else {
		(u = 1.4 * Math.sqrt(F)),
			(u = u > 16 ? 16 : u | 0),
			(A = A.times(1 / I0(5, u))),
			(A = vD(C, 2, A, A, !0));
		for (var E, r = new C(5), t = new C(16), n = new C(20); u--; )
			(E = A.times(A)),
				(A = A.times(r.plus(E.times(t.times(E).plus(n)))));
	}
	return (C.precision = D), (C.rounding = e), b(A, D, e, !0);
};
v.hyperbolicTangent = v.tanh = function () {
	var u,
		D,
		e = this,
		F = e.constructor;
	return e.isFinite()
		? e.isZero()
			? new F(e)
			: ((u = F.precision),
			  (D = F.rounding),
			  (F.precision = u + 7),
			  (F.rounding = 1),
			  X(e.sinh(), e.cosh(), (F.precision = u), (F.rounding = D)))
		: new F(e.s);
};
v.inverseCosine = v.acos = function () {
	var u = this,
		D = u.constructor,
		e = u.abs().cmp(1),
		F = D.precision,
		A = D.rounding;
	return e !== -1
		? e === 0
			? u.isNeg()
				? ku(D, F, A)
				: new D(0)
			: new D(NaN)
		: u.isZero()
		? ku(D, F + 4, A).times(0.5)
		: ((D.precision = F + 6),
		  (D.rounding = 1),
		  (u = new D(1).minus(u).div(u.plus(1)).sqrt().atan()),
		  (D.precision = F),
		  (D.rounding = A),
		  u.times(2));
};
v.inverseHyperbolicCosine = v.acosh = function () {
	var u,
		D,
		e = this,
		F = e.constructor;
	return e.lte(1)
		? new F(e.eq(1) ? 0 : NaN)
		: e.isFinite()
		? ((u = F.precision),
		  (D = F.rounding),
		  (F.precision = u + Math.max(Math.abs(e.e), e.sd()) + 4),
		  (F.rounding = 1),
		  (R = !1),
		  (e = e.times(e).minus(1).sqrt().plus(e)),
		  (R = !0),
		  (F.precision = u),
		  (F.rounding = D),
		  e.ln())
		: new F(e);
};
v.inverseHyperbolicSine = v.asinh = function () {
	var u,
		D,
		e = this,
		F = e.constructor;
	return !e.isFinite() || e.isZero()
		? new F(e)
		: ((u = F.precision),
		  (D = F.rounding),
		  (F.precision = u + 2 * Math.max(Math.abs(e.e), e.sd()) + 6),
		  (F.rounding = 1),
		  (R = !1),
		  (e = e.times(e).plus(1).sqrt().plus(e)),
		  (R = !0),
		  (F.precision = u),
		  (F.rounding = D),
		  e.ln());
};
v.inverseHyperbolicTangent = v.atanh = function () {
	var u,
		D,
		e,
		F,
		A = this,
		C = A.constructor;
	return A.isFinite()
		? A.e >= 0
			? new C(A.abs().eq(1) ? A.s / 0 : A.isZero() ? A : NaN)
			: ((u = C.precision),
			  (D = C.rounding),
			  (F = A.sd()),
			  Math.max(F, u) < 2 * -A.e - 1
					? b(new C(A), u, D, !0)
					: ((C.precision = e = F - A.e),
					  (A = X(A.plus(1), new C(1).minus(A), e + u, 1)),
					  (C.precision = u + 4),
					  (C.rounding = 1),
					  (A = A.ln()),
					  (C.precision = u),
					  (C.rounding = D),
					  A.times(0.5)))
		: new C(NaN);
};
v.inverseSine = v.asin = function () {
	var u,
		D,
		e,
		F,
		A = this,
		C = A.constructor;
	return A.isZero()
		? new C(A)
		: ((D = A.abs().cmp(1)),
		  (e = C.precision),
		  (F = C.rounding),
		  D !== -1
				? D === 0
					? ((u = ku(C, e + 4, F).times(0.5)), (u.s = A.s), u)
					: new C(NaN)
				: ((C.precision = e + 6),
				  (C.rounding = 1),
				  (A = A.div(new C(1).minus(A.times(A)).sqrt().plus(1)).atan()),
				  (C.precision = e),
				  (C.rounding = F),
				  A.times(2)));
};
v.inverseTangent = v.atan = function () {
	var u,
		D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n = this,
		i = n.constructor,
		B = i.precision,
		a = i.rounding;
	if (n.isFinite()) {
		if (n.isZero()) return new i(n);
		if (n.abs().eq(1) && B + 4 <= Q0)
			return (E = ku(i, B + 4, a).times(0.25)), (E.s = n.s), E;
	} else {
		if (!n.s) return new i(NaN);
		if (B + 4 <= Q0)
			return (E = ku(i, B + 4, a).times(0.5)), (E.s = n.s), E;
	}
	for (
		i.precision = r = B + 10,
			i.rounding = 1,
			e = Math.min(28, (r / T + 2) | 0),
			u = e;
		u;
		--u
	)
		n = n.div(n.times(n).plus(1).sqrt().plus(1));
	for (
		R = !1,
			D = Math.ceil(r / T),
			F = 1,
			t = n.times(n),
			E = new i(n),
			A = n;
		u !== -1;

	)
		if (
			((A = A.times(t)),
			(C = E.minus(A.div((F += 2)))),
			(A = A.times(t)),
			(E = C.plus(A.div((F += 2)))),
			E.d[D] !== void 0)
		)
			for (u = D; E.d[u] === C.d[u] && u--; );
	return (
		e && (E = E.times(2 << (e - 1))),
		(R = !0),
		b(E, (i.precision = B), (i.rounding = a), !0)
	);
};
v.isFinite = function () {
	return !!this.d;
};
v.isInteger = v.isInt = function () {
	return !!this.d && lu(this.e / T) > this.d.length - 2;
};
v.isNaN = function () {
	return !this.s;
};
v.isNegative = v.isNeg = function () {
	return this.s < 0;
};
v.isPositive = v.isPos = function () {
	return this.s > 0;
};
v.isZero = function () {
	return !!this.d && this.d[0] === 0;
};
v.lessThan = v.lt = function (u) {
	return this.cmp(u) < 0;
};
v.lessThanOrEqualTo = v.lte = function (u) {
	return this.cmp(u) < 1;
};
v.logarithm = v.log = function (u) {
	var D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n = this,
		i = n.constructor,
		B = i.precision,
		a = i.rounding,
		s = 5;
	if (u == null) (u = new i(10)), (D = !0);
	else {
		if (((u = new i(u)), (e = u.d), u.s < 0 || !e || !e[0] || u.eq(1)))
			return new i(NaN);
		D = u.eq(10);
	}
	if (((e = n.d), n.s < 0 || !e || !e[0] || n.eq(1)))
		return new i(e && !e[0] ? -1 / 0 : n.s != 1 ? NaN : e ? 0 : 1 / 0);
	if (D)
		if (e.length > 1) C = !0;
		else {
			for (A = e[0]; A % 10 === 0; ) A /= 10;
			C = A !== 1;
		}
	if (
		((R = !1),
		(r = B + s),
		(E = eD(n, r)),
		(F = D ? f0(i, r + 10) : eD(u, r)),
		(t = X(E, F, r, 1)),
		kD(t.d, (A = B), a))
	)
		do
			if (
				((r += 10),
				(E = eD(n, r)),
				(F = D ? f0(i, r + 10) : eD(u, r)),
				(t = X(E, F, r, 1)),
				!C)
			) {
				+su(t.d).slice(A + 1, A + 15) + 1 == 1e14 &&
					(t = b(t, B + 1, 0));
				break;
			}
		while (kD(t.d, (A += 10), a));
	return (R = !0), b(t, B, a);
};
v.minus = v.sub = function (u) {
	var D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n,
		i,
		B,
		a,
		s = this,
		d = s.constructor;
	if (((u = new d(u)), !s.d || !u.d))
		return (
			!s.s || !u.s
				? (u = new d(NaN))
				: s.d
				? (u.s = -u.s)
				: (u = new d(u.d || s.s !== u.s ? s : NaN)),
			u
		);
	if (s.s != u.s) return (u.s = -u.s), s.plus(u);
	if (
		((n = s.d),
		(a = u.d),
		(r = d.precision),
		(t = d.rounding),
		!n[0] || !a[0])
	) {
		if (a[0]) u.s = -u.s;
		else if (n[0]) u = new d(s);
		else return new d(t === 3 ? -0 : 0);
		return R ? b(u, r, t) : u;
	}
	if (
		((e = lu(u.e / T)), (i = lu(s.e / T)), (n = n.slice()), (C = i - e), C)
	) {
		for (
			B = C < 0,
				B
					? ((D = n), (C = -C), (E = a.length))
					: ((D = a), (e = i), (E = n.length)),
				F = Math.max(Math.ceil(r / T), E) + 2,
				C > F && ((C = F), (D.length = 1)),
				D.reverse(),
				F = C;
			F--;

		)
			D.push(0);
		D.reverse();
	} else {
		for (
			F = n.length, E = a.length, B = F < E, B && (E = F), F = 0;
			F < E;
			F++
		)
			if (n[F] != a[F]) {
				B = n[F] < a[F];
				break;
			}
		C = 0;
	}
	for (
		B && ((D = n), (n = a), (a = D), (u.s = -u.s)),
			E = n.length,
			F = a.length - E;
		F > 0;
		--F
	)
		n[E++] = 0;
	for (F = a.length; F > C; ) {
		if (n[--F] < a[F]) {
			for (A = F; A && n[--A] === 0; ) n[A] = Lu - 1;
			--n[A], (n[F] += Lu);
		}
		n[F] -= a[F];
	}
	for (; n[--E] === 0; ) n.pop();
	for (; n[0] === 0; n.shift()) --e;
	return n[0]
		? ((u.d = n), (u.e = L0(n, e)), R ? b(u, r, t) : u)
		: new d(t === 3 ? -0 : 0);
};
v.modulo = v.mod = function (u) {
	var D,
		e = this,
		F = e.constructor;
	return (
		(u = new F(u)),
		!e.d || !u.s || (u.d && !u.d[0])
			? new F(NaN)
			: !u.d || (e.d && !e.d[0])
			? b(new F(e), F.precision, F.rounding)
			: ((R = !1),
			  F.modulo == 9
					? ((D = X(e, u.abs(), 0, 3, 1)), (D.s *= u.s))
					: (D = X(e, u, 0, F.modulo, 1)),
			  (D = D.times(u)),
			  (R = !0),
			  e.minus(D))
	);
};
v.naturalExponential = v.exp = function () {
	return X0(this);
};
v.naturalLogarithm = v.ln = function () {
	return eD(this);
};
v.negated = v.neg = function () {
	var u = new this.constructor(this);
	return (u.s = -u.s), b(u);
};
v.plus = v.add = function (u) {
	var D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n,
		i,
		B = this,
		a = B.constructor;
	if (((u = new a(u)), !B.d || !u.d))
		return (
			!B.s || !u.s
				? (u = new a(NaN))
				: B.d || (u = new a(u.d || B.s === u.s ? B : NaN)),
			u
		);
	if (B.s != u.s) return (u.s = -u.s), B.minus(u);
	if (
		((n = B.d),
		(i = u.d),
		(r = a.precision),
		(t = a.rounding),
		!n[0] || !i[0])
	)
		return i[0] || (u = new a(B)), R ? b(u, r, t) : u;
	if (
		((C = lu(B.e / T)), (F = lu(u.e / T)), (n = n.slice()), (A = C - F), A)
	) {
		for (
			A < 0
				? ((e = n), (A = -A), (E = i.length))
				: ((e = i), (F = C), (E = n.length)),
				C = Math.ceil(r / T),
				E = C > E ? C + 1 : E + 1,
				A > E && ((A = E), (e.length = 1)),
				e.reverse();
			A--;

		)
			e.push(0);
		e.reverse();
	}
	for (
		E = n.length,
			A = i.length,
			E - A < 0 && ((A = E), (e = i), (i = n), (n = e)),
			D = 0;
		A;

	)
		(D = ((n[--A] = n[A] + i[A] + D) / Lu) | 0), (n[A] %= Lu);
	for (D && (n.unshift(D), ++F), E = n.length; n[--E] == 0; ) n.pop();
	return (u.d = n), (u.e = L0(n, F)), R ? b(u, r, t) : u;
};
v.precision = v.sd = function (u) {
	var D,
		e = this;
	if (u !== void 0 && u !== !!u && u !== 1 && u !== 0) throw Error(CD + u);
	return (
		e.d ? ((D = gC(e.d)), u && e.e + 1 > D && (D = e.e + 1)) : (D = NaN), D
	);
};
v.round = function () {
	var u = this,
		D = u.constructor;
	return b(new D(u), u.e + 1, D.rounding);
};
v.sine = v.sin = function () {
	var u,
		D,
		e = this,
		F = e.constructor;
	return e.isFinite()
		? e.isZero()
			? new F(e)
			: ((u = F.precision),
			  (D = F.rounding),
			  (F.precision = u + Math.max(e.e, e.sd()) + T),
			  (F.rounding = 1),
			  (e = rE(F, bC(F, e))),
			  (F.precision = u),
			  (F.rounding = D),
			  b(zu > 2 ? e.neg() : e, u, D, !0))
		: new F(NaN);
};
v.squareRoot = v.sqrt = function () {
	var u,
		D,
		e,
		F,
		A,
		C,
		E = this,
		r = E.d,
		t = E.e,
		n = E.s,
		i = E.constructor;
	if (n !== 1 || !r || !r[0])
		return new i(!n || (n < 0 && (!r || r[0])) ? NaN : r ? E : 1 / 0);
	for (
		R = !1,
			n = Math.sqrt(+E),
			n == 0 || n == 1 / 0
				? ((D = su(r)),
				  (D.length + t) % 2 == 0 && (D += "0"),
				  (n = Math.sqrt(D)),
				  (t = lu((t + 1) / 2) - (t < 0 || t % 2)),
				  n == 1 / 0
						? (D = "5e" + t)
						: ((D = n.toExponential()),
						  (D = D.slice(0, D.indexOf("e") + 1) + t)),
				  (F = new i(D)))
				: (F = new i(n.toString())),
			e = (t = i.precision) + 3;
		;

	)
		if (
			((C = F),
			(F = C.plus(X(E, C, e + 2, 1)).times(0.5)),
			su(C.d).slice(0, e) === (D = su(F.d)).slice(0, e))
		)
			if (
				((D = D.slice(e - 3, e + 1)),
				D == "9999" || (!A && D == "4999"))
			) {
				if (!A && (b(C, t + 1, 0), C.times(C).eq(E))) {
					F = C;
					break;
				}
				(e += 4), (A = 1);
			} else {
				(!+D || (!+D.slice(1) && D.charAt(0) == "5")) &&
					(b(F, t + 1, 1), (u = !F.times(F).eq(E)));
				break;
			}
	return (R = !0), b(F, t, i.rounding, u);
};
v.tangent = v.tan = function () {
	var u,
		D,
		e = this,
		F = e.constructor;
	return e.isFinite()
		? e.isZero()
			? new F(e)
			: ((u = F.precision),
			  (D = F.rounding),
			  (F.precision = u + 10),
			  (F.rounding = 1),
			  (e = e.sin()),
			  (e.s = 1),
			  (e = X(e, new F(1).minus(e.times(e)).sqrt(), u + 10, 0)),
			  (F.precision = u),
			  (F.rounding = D),
			  b(zu == 2 || zu == 4 ? e.neg() : e, u, D, !0))
		: new F(NaN);
};
v.times = v.mul = function (u) {
	var D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n,
		i = this,
		B = i.constructor,
		a = i.d,
		s = (u = new B(u)).d;
	if (((u.s *= i.s), !a || !a[0] || !s || !s[0]))
		return new B(
			!u.s || (a && !a[0] && !s) || (s && !s[0] && !a)
				? NaN
				: !a || !s
				? u.s / 0
				: u.s * 0
		);
	for (
		e = lu(i.e / T) + lu(u.e / T),
			t = a.length,
			n = s.length,
			t < n && ((C = a), (a = s), (s = C), (E = t), (t = n), (n = E)),
			C = [],
			E = t + n,
			F = E;
		F--;

	)
		C.push(0);
	for (F = n; --F >= 0; ) {
		for (D = 0, A = t + F; A > F; )
			(r = C[A] + s[F] * a[A - F - 1] + D),
				(C[A--] = r % Lu | 0),
				(D = (r / Lu) | 0);
		C[A] = (C[A] + D) % Lu | 0;
	}
	for (; !C[--E]; ) C.pop();
	return (
		D ? ++e : C.shift(),
		(u.d = C),
		(u.e = L0(C, e)),
		R ? b(u, B.precision, B.rounding) : u
	);
};
v.toBinary = function (u, D) {
	return _e(this, 2, u, D);
};
v.toDecimalPlaces = v.toDP = function (u, D) {
	var e = this,
		F = e.constructor;
	return (
		(e = new F(e)),
		u === void 0
			? e
			: (gu(u, 0, ED),
			  D === void 0 ? (D = F.rounding) : gu(D, 0, 8),
			  b(e, u + e.e + 1, D))
	);
};
v.toExponential = function (u, D) {
	var e,
		F = this,
		A = F.constructor;
	return (
		u === void 0
			? (e = qu(F, !0))
			: (gu(u, 0, ED),
			  D === void 0 ? (D = A.rounding) : gu(D, 0, 8),
			  (F = b(new A(F), u + 1, D)),
			  (e = qu(F, !0, u + 1))),
		F.isNeg() && !F.isZero() ? "-" + e : e
	);
};
v.toFixed = function (u, D) {
	var e,
		F,
		A = this,
		C = A.constructor;
	return (
		u === void 0
			? (e = qu(A))
			: (gu(u, 0, ED),
			  D === void 0 ? (D = C.rounding) : gu(D, 0, 8),
			  (F = b(new C(A), u + A.e + 1, D)),
			  (e = qu(F, !1, u + F.e + 1))),
		A.isNeg() && !A.isZero() ? "-" + e : e
	);
};
v.toFraction = function (u) {
	var D,
		e,
		F,
		A,
		C,
		E,
		r,
		t,
		n,
		i,
		B,
		a,
		s = this,
		d = s.d,
		o = s.constructor;
	if (!d) return new o(s);
	if (
		((n = e = new o(1)),
		(F = t = new o(0)),
		(D = new o(F)),
		(C = D.e = gC(d) - s.e - 1),
		(E = C % T),
		(D.d[0] = nu(10, E < 0 ? T + E : E)),
		u == null)
	)
		u = C > 0 ? D : n;
	else {
		if (((r = new o(u)), !r.isInt() || r.lt(n))) throw Error(CD + r);
		u = r.gt(D) ? (C > 0 ? D : n) : r;
	}
	for (
		R = !1,
			r = new o(su(d)),
			i = o.precision,
			o.precision = C = d.length * T * 2;
		(B = X(r, D, 0, 1, 1)), (A = e.plus(B.times(F))), A.cmp(u) != 1;

	)
		(e = F),
			(F = A),
			(A = n),
			(n = t.plus(B.times(A))),
			(t = A),
			(A = D),
			(D = r.minus(B.times(A))),
			(r = A);
	return (
		(A = X(u.minus(e), F, 0, 1, 1)),
		(t = t.plus(A.times(n))),
		(e = e.plus(A.times(F))),
		(t.s = n.s = s.s),
		(a =
			X(n, F, C, 1).minus(s).abs().cmp(X(t, e, C, 1).minus(s).abs()) < 1
				? [n, F]
				: [t, e]),
		(o.precision = i),
		(R = !0),
		a
	);
};
v.toHexadecimal = v.toHex = function (u, D) {
	return _e(this, 16, u, D);
};
v.toNearest = function (u, D) {
	var e = this,
		F = e.constructor;
	if (((e = new F(e)), u == null)) {
		if (!e.d) return e;
		(u = new F(1)), (D = F.rounding);
	} else {
		if (
			((u = new F(u)),
			D === void 0 ? (D = F.rounding) : gu(D, 0, 8),
			!e.d)
		)
			return u.s ? e : u;
		if (!u.d) return u.s && (u.s = e.s), u;
	}
	return (
		u.d[0]
			? ((R = !1), (e = X(e, u, 0, D, 1).times(u)), (R = !0), b(e))
			: ((u.s = e.s), (e = u)),
		e
	);
};
v.toNumber = function () {
	return +this;
};
v.toOctal = function (u, D) {
	return _e(this, 8, u, D);
};
v.toPower = v.pow = function (u) {
	var D,
		e,
		F,
		A,
		C,
		E,
		r = this,
		t = r.constructor,
		n = +(u = new t(u));
	if (!r.d || !u.d || !r.d[0] || !u.d[0]) return new t(nu(+r, n));
	if (((r = new t(r)), r.eq(1))) return r;
	if (((F = t.precision), (C = t.rounding), u.eq(1))) return b(r, F, C);
	if (((D = lu(u.e / T)), D >= u.d.length - 1 && (e = n < 0 ? -n : n) <= FE))
		return (A = pC(t, r, e, F)), u.s < 0 ? new t(1).div(A) : b(A, F, C);
	if (((E = r.s), E < 0)) {
		if (D < u.d.length - 1) return new t(NaN);
		if (
			((u.d[D] & 1) == 0 && (E = 1),
			r.e == 0 && r.d[0] == 1 && r.d.length == 1)
		)
			return (r.s = E), r;
	}
	return (
		(e = nu(+r, n)),
		(D =
			e == 0 || !isFinite(e)
				? lu(n * (Math.log("0." + su(r.d)) / Math.LN10 + r.e + 1))
				: new t(e + "").e),
		D > t.maxE + 1 || D < t.minE - 1
			? new t(D > 0 ? E / 0 : 0)
			: ((R = !1),
			  (t.rounding = r.s = 1),
			  (e = Math.min(12, (D + "").length)),
			  (A = X0(u.times(eD(r, F + e)), F)),
			  A.d &&
					((A = b(A, F + 5, 1)),
					kD(A.d, F, C) &&
						((D = F + 10),
						(A = b(X0(u.times(eD(r, D + e)), D), D + 5, 1)),
						+su(A.d).slice(F + 1, F + 15) + 1 == 1e14 &&
							(A = b(A, F + 1, 0)))),
			  (A.s = E),
			  (R = !0),
			  (t.rounding = C),
			  b(A, F, C))
	);
};
v.toPrecision = function (u, D) {
	var e,
		F = this,
		A = F.constructor;
	return (
		u === void 0
			? (e = qu(F, F.e <= A.toExpNeg || F.e >= A.toExpPos))
			: (gu(u, 1, ED),
			  D === void 0 ? (D = A.rounding) : gu(D, 0, 8),
			  (F = b(new A(F), u, D)),
			  (e = qu(F, u <= F.e || F.e <= A.toExpNeg, u))),
		F.isNeg() && !F.isZero() ? "-" + e : e
	);
};
v.toSignificantDigits = v.toSD = function (u, D) {
	var e = this,
		F = e.constructor;
	return (
		u === void 0
			? ((u = F.precision), (D = F.rounding))
			: (gu(u, 1, ED), D === void 0 ? (D = F.rounding) : gu(D, 0, 8)),
		b(new F(e), u, D)
	);
};
v.toString = function () {
	var u = this,
		D = u.constructor,
		e = qu(u, u.e <= D.toExpNeg || u.e >= D.toExpPos);
	return u.isNeg() && !u.isZero() ? "-" + e : e;
};
v.truncated = v.trunc = function () {
	return b(new this.constructor(this), this.e + 1, 1);
};
v.valueOf = v.toJSON = function () {
	var u = this,
		D = u.constructor,
		e = qu(u, u.e <= D.toExpNeg || u.e >= D.toExpPos);
	return u.isNeg() ? "-" + e : e;
};
function su(u) {
	var D,
		e,
		F,
		A = u.length - 1,
		C = "",
		E = u[0];
	if (A > 0) {
		for (C += E, D = 1; D < A; D++)
			(F = u[D] + ""), (e = T - F.length), e && (C += uD(e)), (C += F);
		(E = u[D]), (F = E + ""), (e = T - F.length), e && (C += uD(e));
	} else if (E === 0) return "0";
	for (; E % 10 === 0; ) E /= 10;
	return C + E;
}
function gu(u, D, e) {
	if (u !== ~~u || u < D || u > e) throw Error(CD + u);
}
function kD(u, D, e, F) {
	var A, C, E, r;
	for (C = u[0]; C >= 10; C /= 10) --D;
	return (
		--D < 0
			? ((D += T), (A = 0))
			: ((A = Math.ceil((D + 1) / T)), (D %= T)),
		(C = nu(10, T - D)),
		(r = u[A] % C | 0),
		F == null
			? D < 3
				? (D == 0 ? (r = (r / 100) | 0) : D == 1 && (r = (r / 10) | 0),
				  (E =
						(e < 4 && r == 99999) ||
						(e > 3 && r == 49999) ||
						r == 5e4 ||
						r == 0))
				: (E =
						(((e < 4 && r + 1 == C) || (e > 3 && r + 1 == C / 2)) &&
							((u[A + 1] / C / 100) | 0) == nu(10, D - 2) - 1) ||
						((r == C / 2 || r == 0) &&
							((u[A + 1] / C / 100) | 0) == 0))
			: D < 4
			? (D == 0
					? (r = (r / 1e3) | 0)
					: D == 1
					? (r = (r / 100) | 0)
					: D == 2 && (r = (r / 10) | 0),
			  (E = ((F || e < 4) && r == 9999) || (!F && e > 3 && r == 4999)))
			: (E =
					(((F || e < 4) && r + 1 == C) ||
						(!F && e > 3 && r + 1 == C / 2)) &&
					((u[A + 1] / C / 1e3) | 0) == nu(10, D - 3) - 1),
		E
	);
}
function XD(u, D, e) {
	for (var F, A = [0], C, E = 0, r = u.length; E < r; ) {
		for (C = A.length; C--; ) A[C] *= D;
		for (A[0] += J0.indexOf(u.charAt(E++)), F = 0; F < A.length; F++)
			A[F] > e - 1 &&
				(A[F + 1] === void 0 && (A[F + 1] = 0),
				(A[F + 1] += (A[F] / e) | 0),
				(A[F] %= e));
	}
	return A.reverse();
}
function AE(u, D) {
	var e, F, A;
	if (D.isZero()) return D;
	(F = D.d.length),
		F < 32
			? ((e = Math.ceil(F / 3)), (A = (1 / I0(4, e)).toString()))
			: ((e = 16), (A = "2.3283064365386962890625e-10")),
		(u.precision += e),
		(D = vD(u, 1, D.times(A), new u(1)));
	for (var C = e; C--; ) {
		var E = D.times(D);
		D = E.times(E).minus(E).times(8).plus(1);
	}
	return (u.precision -= e), D;
}
var X = (function () {
	function u(F, A, C) {
		var E,
			r = 0,
			t = F.length;
		for (F = F.slice(); t--; )
			(E = F[t] * A + r), (F[t] = E % C | 0), (r = (E / C) | 0);
		return r && F.unshift(r), F;
	}
	function D(F, A, C, E) {
		var r, t;
		if (C != E) t = C > E ? 1 : -1;
		else
			for (r = t = 0; r < C; r++)
				if (F[r] != A[r]) {
					t = F[r] > A[r] ? 1 : -1;
					break;
				}
		return t;
	}
	function e(F, A, C, E) {
		for (var r = 0; C--; )
			(F[C] -= r),
				(r = F[C] < A[C] ? 1 : 0),
				(F[C] = r * E + F[C] - A[C]);
		for (; !F[0] && F.length > 1; ) F.shift();
	}
	return function (F, A, C, E, r, t) {
		var n,
			i,
			B,
			a,
			s,
			d,
			o,
			_,
			c,
			g,
			m,
			h,
			y,
			N,
			p,
			P,
			U,
			H,
			k,
			Du,
			tu = F.constructor,
			vu = F.s == A.s ? 1 : -1,
			Y = F.d,
			O = A.d;
		if (!Y || !Y[0] || !O || !O[0])
			return new tu(
				!F.s || !A.s || (Y ? O && Y[0] == O[0] : !O)
					? NaN
					: (Y && Y[0] == 0) || !O
					? vu * 0
					: vu / 0
			);
		for (
			t
				? ((s = 1), (i = F.e - A.e))
				: ((t = Lu), (s = T), (i = lu(F.e / s) - lu(A.e / s))),
				k = O.length,
				U = Y.length,
				c = new tu(vu),
				g = c.d = [],
				B = 0;
			O[B] == (Y[B] || 0);
			B++
		);
		if (
			(O[B] > (Y[B] || 0) && i--,
			C == null
				? ((N = C = tu.precision), (E = tu.rounding))
				: r
				? (N = C + (F.e - A.e) + 1)
				: (N = C),
			N < 0)
		)
			g.push(1), (d = !0);
		else {
			if (((N = (N / s + 2) | 0), (B = 0), k == 1)) {
				for (a = 0, O = O[0], N++; (B < U || a) && N--; B++)
					(p = a * t + (Y[B] || 0)),
						(g[B] = (p / O) | 0),
						(a = p % O | 0);
				d = a || B < U;
			} else {
				for (
					a = (t / (O[0] + 1)) | 0,
						a > 1 &&
							((O = u(O, a, t)),
							(Y = u(Y, a, t)),
							(k = O.length),
							(U = Y.length)),
						P = k,
						m = Y.slice(0, k),
						h = m.length;
					h < k;

				)
					m[h++] = 0;
				(Du = O.slice()),
					Du.unshift(0),
					(H = O[0]),
					O[1] >= t / 2 && ++H;
				do
					(a = 0),
						(n = D(O, m, k, h)),
						n < 0
							? ((y = m[0]),
							  k != h && (y = y * t + (m[1] || 0)),
							  (a = (y / H) | 0),
							  a > 1
									? (a >= t && (a = t - 1),
									  (o = u(O, a, t)),
									  (_ = o.length),
									  (h = m.length),
									  (n = D(o, m, _, h)),
									  n == 1 &&
											(a--, e(o, k < _ ? Du : O, _, t)))
									: (a == 0 && (n = a = 1), (o = O.slice())),
							  (_ = o.length),
							  _ < h && o.unshift(0),
							  e(m, o, h, t),
							  n == -1 &&
									((h = m.length),
									(n = D(O, m, k, h)),
									n < 1 && (a++, e(m, k < h ? Du : O, h, t))),
							  (h = m.length))
							: n === 0 && (a++, (m = [0])),
						(g[B++] = a),
						n && m[0]
							? (m[h++] = Y[P] || 0)
							: ((m = [Y[P]]), (h = 1));
				while ((P++ < U || m[0] !== void 0) && N--);
				d = m[0] !== void 0;
			}
			g[0] || g.shift();
		}
		if (s == 1) (c.e = i), (dC = d);
		else {
			for (B = 1, a = g[0]; a >= 10; a /= 10) B++;
			(c.e = B + i * s - 1), b(c, r ? C + c.e + 1 : C, E, d);
		}
		return c;
	};
})();
function b(u, D, e, F) {
	var A,
		C,
		E,
		r,
		t,
		n,
		i,
		B,
		a,
		s = u.constructor;
	u: if (D != null) {
		if (((B = u.d), !B)) return u;
		for (A = 1, r = B[0]; r >= 10; r /= 10) A++;
		if (((C = D - A), C < 0))
			(C += T),
				(E = D),
				(i = B[(a = 0)]),
				(t = (i / nu(10, A - E - 1)) % 10 | 0);
		else if (((a = Math.ceil((C + 1) / T)), (r = B.length), a >= r))
			if (F) {
				for (; r++ <= a; ) B.push(0);
				(i = t = 0), (A = 1), (C %= T), (E = C - T + 1);
			} else break u;
		else {
			for (i = r = B[a], A = 1; r >= 10; r /= 10) A++;
			(C %= T),
				(E = C - T + A),
				(t = E < 0 ? 0 : (i / nu(10, A - E - 1)) % 10 | 0);
		}
		if (
			((F =
				F ||
				D < 0 ||
				B[a + 1] !== void 0 ||
				(E < 0 ? i : i % nu(10, A - E - 1))),
			(n =
				e < 4
					? (t || F) && (e == 0 || e == (u.s < 0 ? 3 : 2))
					: t > 5 ||
					  (t == 5 &&
							(e == 4 ||
								F ||
								(e == 6 &&
									(C > 0
										? E > 0
											? i / nu(10, A - E)
											: 0
										: B[a - 1]) %
										10 &
										1) ||
								e == (u.s < 0 ? 8 : 7)))),
			D < 1 || !B[0])
		)
			return (
				(B.length = 0),
				n
					? ((D -= u.e + 1),
					  (B[0] = nu(10, (T - (D % T)) % T)),
					  (u.e = -D || 0))
					: (B[0] = u.e = 0),
				u
			);
		if (
			(C == 0
				? ((B.length = a), (r = 1), a--)
				: ((B.length = a + 1),
				  (r = nu(10, T - C)),
				  (B[a] =
						E > 0 ? ((i / nu(10, A - E)) % nu(10, E) | 0) * r : 0)),
			n)
		)
			for (;;)
				if (a == 0) {
					for (C = 1, E = B[0]; E >= 10; E /= 10) C++;
					for (E = B[0] += r, r = 1; E >= 10; E /= 10) r++;
					C != r && (u.e++, B[0] == Lu && (B[0] = 1));
					break;
				} else {
					if (((B[a] += r), B[a] != Lu)) break;
					(B[a--] = 0), (r = 1);
				}
		for (C = B.length; B[--C] === 0; ) B.pop();
	}
	return (
		R &&
			(u.e > s.maxE
				? ((u.d = null), (u.e = NaN))
				: u.e < s.minE && ((u.e = 0), (u.d = [0]))),
		u
	);
}
function qu(u, D, e) {
	if (!u.isFinite()) return wC(u);
	var F,
		A = u.e,
		C = su(u.d),
		E = C.length;
	return (
		D
			? (e && (F = e - E) > 0
					? (C = C.charAt(0) + "." + C.slice(1) + uD(F))
					: E > 1 && (C = C.charAt(0) + "." + C.slice(1)),
			  (C = C + (u.e < 0 ? "e" : "e+") + u.e))
			: A < 0
			? ((C = "0." + uD(-A - 1) + C),
			  e && (F = e - E) > 0 && (C += uD(F)))
			: A >= E
			? ((C += uD(A + 1 - E)),
			  e && (F = e - A - 1) > 0 && (C = C + "." + uD(F)))
			: ((F = A + 1) < E && (C = C.slice(0, F) + "." + C.slice(F)),
			  e &&
					(F = e - E) > 0 &&
					(A + 1 === E && (C += "."), (C += uD(F)))),
		C
	);
}
function L0(u, D) {
	var e = u[0];
	for (D *= T; e >= 10; e /= 10) D++;
	return D;
}
function f0(u, D, e) {
	if (D > CE) throw ((R = !0), e && (u.precision = e), Error(_C));
	return b(new u(l0), D, 1, !0);
}
function ku(u, D, e) {
	if (D > Q0) throw Error(_C);
	return b(new u(c0), D, e, !0);
}
function gC(u) {
	var D = u.length - 1,
		e = D * T + 1;
	if (((D = u[D]), D)) {
		for (; D % 10 == 0; D /= 10) e--;
		for (D = u[0]; D >= 10; D /= 10) e++;
	}
	return e;
}
function uD(u) {
	for (var D = ""; u--; ) D += "0";
	return D;
}
function pC(u, D, e, F) {
	var A,
		C = new u(1),
		E = Math.ceil(F / T + 4);
	for (R = !1; ; ) {
		if (
			(e % 2 && ((C = C.times(D)), eF(C.d, E) && (A = !0)),
			(e = lu(e / 2)),
			e === 0)
		) {
			(e = C.d.length - 1), A && C.d[e] === 0 && ++C.d[e];
			break;
		}
		(D = D.times(D)), eF(D.d, E);
	}
	return (R = !0), C;
}
function DF(u) {
	return u.d[u.d.length - 1] & 1;
}
function yC(u, D, e) {
	for (var F, A, C = new u(D[0]), E = 0; ++E < D.length; ) {
		if (((A = new u(D[E])), !A.s)) {
			C = A;
			break;
		}
		(F = C.cmp(A)), (F === e || (F === 0 && C.s === e)) && (C = A);
	}
	return C;
}
function X0(u, D) {
	var e,
		F,
		A,
		C,
		E,
		r,
		t,
		n = 0,
		i = 0,
		B = 0,
		a = u.constructor,
		s = a.rounding,
		d = a.precision;
	if (!u.d || !u.d[0] || u.e > 17)
		return new a(
			u.d
				? u.d[0]
					? u.s < 0
						? 0
						: 1 / 0
					: 1
				: u.s
				? u.s < 0
					? 0
					: u
				: NaN
		);
	for (
		D == null ? ((R = !1), (t = d)) : (t = D), r = new a(0.03125);
		u.e > -2;

	)
		(u = u.times(r)), (B += 5);
	for (
		F = ((Math.log(nu(2, B)) / Math.LN10) * 2 + 5) | 0,
			t += F,
			e = C = E = new a(1),
			a.precision = t;
		;

	) {
		if (
			((C = b(C.times(u), t, 1)),
			(e = e.times(++i)),
			(r = E.plus(X(C, e, t, 1))),
			su(r.d).slice(0, t) === su(E.d).slice(0, t))
		) {
			for (A = B; A--; ) E = b(E.times(E), t, 1);
			if (D == null)
				if (n < 3 && kD(E.d, t - F, s, n))
					(a.precision = t += 10),
						(e = C = r = new a(1)),
						(i = 0),
						n++;
				else return b(E, (a.precision = d), s, (R = !0));
			else return (a.precision = d), E;
		}
		E = r;
	}
}
function eD(u, D) {
	var e,
		F,
		A,
		C,
		E,
		r,
		t,
		n,
		i,
		B,
		a,
		s = 1,
		d = 10,
		o = u,
		_ = o.d,
		c = o.constructor,
		g = c.rounding,
		m = c.precision;
	if (o.s < 0 || !_ || !_[0] || (!o.e && _[0] == 1 && _.length == 1))
		return new c(_ && !_[0] ? -1 / 0 : o.s != 1 ? NaN : _ ? 0 : o);
	if (
		(D == null ? ((R = !1), (i = m)) : (i = D),
		(c.precision = i += d),
		(e = su(_)),
		(F = e.charAt(0)),
		Math.abs((C = o.e)) < 15e14)
	) {
		for (; (F < 7 && F != 1) || (F == 1 && e.charAt(1) > 3); )
			(o = o.times(u)), (e = su(o.d)), (F = e.charAt(0)), s++;
		(C = o.e),
			F > 1
				? ((o = new c("0." + e)), C++)
				: (o = new c(F + "." + e.slice(1)));
	} else
		return (
			(n = f0(c, i + 2, m).times(C + "")),
			(o = eD(new c(F + "." + e.slice(1)), i - d).plus(n)),
			(c.precision = m),
			D == null ? b(o, m, g, (R = !0)) : o
		);
	for (
		B = o,
			t = E = o = X(o.minus(1), o.plus(1), i, 1),
			a = b(o.times(o), i, 1),
			A = 3;
		;

	) {
		if (
			((E = b(E.times(a), i, 1)),
			(n = t.plus(X(E, new c(A), i, 1))),
			su(n.d).slice(0, i) === su(t.d).slice(0, i))
		)
			if (
				((t = t.times(2)),
				C !== 0 && (t = t.plus(f0(c, i + 2, m).times(C + ""))),
				(t = X(t, new c(s), i, 1)),
				D == null)
			)
				if (kD(t.d, i - d, g, r))
					(c.precision = i += d),
						(n = E = o = X(B.minus(1), B.plus(1), i, 1)),
						(a = b(o.times(o), i, 1)),
						(A = r = 1);
				else return b(t, (c.precision = m), g, (R = !0));
			else return (c.precision = m), t;
		(t = n), (A += 2);
	}
}
function wC(u) {
	return String((u.s * u.s) / 0);
}
function u0(u, D) {
	var e, F, A;
	for (
		(e = D.indexOf(".")) > -1 && (D = D.replace(".", "")),
			(F = D.search(/e/i)) > 0
				? (e < 0 && (e = F),
				  (e += +D.slice(F + 1)),
				  (D = D.substring(0, F)))
				: e < 0 && (e = D.length),
			F = 0;
		D.charCodeAt(F) === 48;
		F++
	);
	for (A = D.length; D.charCodeAt(A - 1) === 48; --A);
	if (((D = D.slice(F, A)), D)) {
		if (
			((A -= F),
			(u.e = e = e - F - 1),
			(u.d = []),
			(F = (e + 1) % T),
			e < 0 && (F += T),
			F < A)
		) {
			for (F && u.d.push(+D.slice(0, F)), A -= T; F < A; )
				u.d.push(+D.slice(F, (F += T)));
			(D = D.slice(F)), (F = T - D.length);
		} else F -= A;
		for (; F--; ) D += "0";
		u.d.push(+D),
			R &&
				(u.e > u.constructor.maxE
					? ((u.d = null), (u.e = NaN))
					: u.e < u.constructor.minE && ((u.e = 0), (u.d = [0])));
	} else (u.e = 0), (u.d = [0]);
	return u;
}
function EE(u, D) {
	var e, F, A, C, E, r, t, n, i;
	if (D.indexOf("_") > -1) {
		if (((D = D.replace(/(\d)_(?=\d)/g, "$1")), hC.test(D)))
			return u0(u, D);
	} else if (D === "Infinity" || D === "NaN")
		return +D || (u.s = NaN), (u.e = NaN), (u.d = null), u;
	if (DE.test(D)) (e = 16), (D = D.toLowerCase());
	else if (uE.test(D)) e = 2;
	else if (eE.test(D)) e = 8;
	else throw Error(CD + D);
	for (
		C = D.search(/p/i),
			C > 0
				? ((t = +D.slice(C + 1)), (D = D.substring(2, C)))
				: (D = D.slice(2)),
			C = D.indexOf("."),
			E = C >= 0,
			F = u.constructor,
			E &&
				((D = D.replace(".", "")),
				(r = D.length),
				(C = r - C),
				(A = pC(F, new F(e), C, C * 2))),
			n = XD(D, e, Lu),
			i = n.length - 1,
			C = i;
		n[C] === 0;
		--C
	)
		n.pop();
	return C < 0
		? new F(u.s * 0)
		: ((u.e = L0(n, i)),
		  (u.d = n),
		  (R = !1),
		  E && (u = X(u, A, r * 4)),
		  t && (u = u.times(Math.abs(t) < 54 ? nu(2, t) : j.pow(2, t))),
		  (R = !0),
		  u);
}
function rE(u, D) {
	var e,
		F = D.d.length;
	if (F < 3) return D.isZero() ? D : vD(u, 2, D, D);
	(e = 1.4 * Math.sqrt(F)),
		(e = e > 16 ? 16 : e | 0),
		(D = D.times(1 / I0(5, e))),
		(D = vD(u, 2, D, D));
	for (var A, C = new u(5), E = new u(16), r = new u(20); e--; )
		(A = D.times(D)), (D = D.times(C.plus(A.times(E.times(A).minus(r)))));
	return D;
}
function vD(u, D, e, F, A) {
	var C,
		E,
		r,
		t,
		n = u.precision,
		i = Math.ceil(n / T);
	for (R = !1, t = e.times(e), r = new u(F); ; ) {
		if (
			((E = X(r.times(t), new u(D++ * D++), n, 1)),
			(r = A ? F.plus(E) : F.minus(E)),
			(F = X(E.times(t), new u(D++ * D++), n, 1)),
			(E = r.plus(F)),
			E.d[i] !== void 0)
		) {
			for (C = i; E.d[C] === r.d[C] && C--; );
			if (C == -1) break;
		}
		(C = r), (r = F), (F = E), (E = C);
	}
	return (R = !0), (E.d.length = i + 1), E;
}
function I0(u, D) {
	for (var e = u; --D; ) e *= u;
	return e;
}
function bC(u, D) {
	var e,
		F = D.s < 0,
		A = ku(u, u.precision, 1),
		C = A.times(0.5);
	if (((D = D.abs()), D.lte(C))) return (zu = F ? 4 : 1), D;
	if (((e = D.divToInt(A)), e.isZero())) zu = F ? 3 : 2;
	else {
		if (((D = D.minus(e.times(A))), D.lte(C)))
			return (zu = DF(e) ? (F ? 2 : 3) : F ? 4 : 1), D;
		zu = DF(e) ? (F ? 1 : 4) : F ? 3 : 2;
	}
	return D.minus(A).abs();
}
function _e(u, D, e, F) {
	var A,
		C,
		E,
		r,
		t,
		n,
		i,
		B,
		a,
		s = u.constructor,
		d = e !== void 0;
	if (
		(d
			? (gu(e, 1, ED), F === void 0 ? (F = s.rounding) : gu(F, 0, 8))
			: ((e = s.precision), (F = s.rounding)),
		!u.isFinite())
	)
		i = wC(u);
	else {
		for (
			i = qu(u),
				E = i.indexOf("."),
				d
					? ((A = 2),
					  D == 16 ? (e = e * 4 - 3) : D == 8 && (e = e * 3 - 2))
					: (A = D),
				E >= 0 &&
					((i = i.replace(".", "")),
					(a = new s(1)),
					(a.e = i.length - E),
					(a.d = XD(qu(a), 10, A)),
					(a.e = a.d.length)),
				B = XD(i, 10, A),
				C = t = B.length;
			B[--t] == 0;

		)
			B.pop();
		if (!B[0]) i = d ? "0p+0" : "0";
		else {
			if (
				(E < 0
					? C--
					: ((u = new s(u)),
					  (u.d = B),
					  (u.e = C),
					  (u = X(u, a, e, F, 0, A)),
					  (B = u.d),
					  (C = u.e),
					  (n = dC)),
				(E = B[e]),
				(r = A / 2),
				(n = n || B[e + 1] !== void 0),
				(n =
					F < 4
						? (E !== void 0 || n) &&
						  (F === 0 || F === (u.s < 0 ? 3 : 2))
						: E > r ||
						  (E === r &&
								(F === 4 ||
									n ||
									(F === 6 && B[e - 1] & 1) ||
									F === (u.s < 0 ? 8 : 7)))),
				(B.length = e),
				n)
			)
				for (; ++B[--e] > A - 1; ) (B[e] = 0), e || (++C, B.unshift(1));
			for (t = B.length; !B[t - 1]; --t);
			for (E = 0, i = ""; E < t; E++) i += J0.charAt(B[E]);
			if (d) {
				if (t > 1)
					if (D == 16 || D == 8) {
						for (E = D == 16 ? 4 : 3, --t; t % E; t++) i += "0";
						for (B = XD(i, A, D), t = B.length; !B[t - 1]; --t);
						for (E = 1, i = "1."; E < t; E++) i += J0.charAt(B[E]);
					} else i = i.charAt(0) + "." + i.slice(1);
				i = i + (C < 0 ? "p" : "p+") + C;
			} else if (C < 0) {
				for (; ++C; ) i = "0" + i;
				i = "0." + i;
			} else if (++C > t) for (C -= t; C--; ) i += "0";
			else C < t && (i = i.slice(0, C) + "." + i.slice(C));
		}
		i = (D == 16 ? "0x" : D == 2 ? "0b" : D == 8 ? "0o" : "") + i;
	}
	return u.s < 0 ? "-" + i : i;
}
function eF(u, D) {
	if (u.length > D) return (u.length = D), !0;
}
function nE(u) {
	return new this(u).abs();
}
function tE(u) {
	return new this(u).acos();
}
function iE(u) {
	return new this(u).acosh();
}
function BE(u, D) {
	return new this(u).plus(D);
}
function aE(u) {
	return new this(u).asin();
}
function sE(u) {
	return new this(u).asinh();
}
function oE(u) {
	return new this(u).atan();
}
function lE(u) {
	return new this(u).atanh();
}
function cE(u, D) {
	(u = new this(u)), (D = new this(D));
	var e,
		F = this.precision,
		A = this.rounding,
		C = F + 4;
	return (
		!u.s || !D.s
			? (e = new this(NaN))
			: !u.d && !D.d
			? ((e = ku(this, C, 1).times(D.s > 0 ? 0.25 : 0.75)), (e.s = u.s))
			: !D.d || u.isZero()
			? ((e = D.s < 0 ? ku(this, F, A) : new this(0)), (e.s = u.s))
			: !u.d || D.isZero()
			? ((e = ku(this, C, 1).times(0.5)), (e.s = u.s))
			: D.s < 0
			? ((this.precision = C),
			  (this.rounding = 1),
			  (e = this.atan(X(u, D, C, 1))),
			  (D = ku(this, C, 1)),
			  (this.precision = F),
			  (this.rounding = A),
			  (e = u.s < 0 ? e.minus(D) : e.plus(D)))
			: (e = this.atan(X(u, D, C, 1))),
		e
	);
}
function fE(u) {
	return new this(u).cbrt();
}
function dE(u) {
	return b((u = new this(u)), u.e + 1, 2);
}
function _E(u, D, e) {
	return new this(u).clamp(D, e);
}
function vE(u) {
	if (!u || typeof u != "object") throw Error(T0 + "Object expected");
	var D,
		e,
		F,
		A = u.defaults === !0,
		C = [
			"precision",
			1,
			ED,
			"rounding",
			0,
			8,
			"toExpNeg",
			-9e15,
			0,
			"toExpPos",
			0,
			W0,
			"maxE",
			0,
			W0,
			"minE",
			-9e15,
			0,
			"modulo",
			0,
			9,
		];
	for (D = 0; D < C.length; D += 3)
		if (((e = C[D]), A && (this[e] = Y0[e]), (F = u[e]) !== void 0))
			if (lu(F) === F && F >= C[D + 1] && F <= C[D + 2]) this[e] = F;
			else throw Error(CD + e + ": " + F);
	if (((e = "crypto"), A && (this[e] = Y0[e]), (F = u[e]) !== void 0))
		if (F === !0 || F === !1 || F === 0 || F === 1)
			if (F)
				if (
					typeof crypto < "u" &&
					crypto &&
					(crypto.getRandomValues || crypto.randomBytes)
				)
					this[e] = !0;
				else throw Error(vC);
			else this[e] = !1;
		else throw Error(CD + e + ": " + F);
	return this;
}
function mE(u) {
	return new this(u).cos();
}
function hE(u) {
	return new this(u).cosh();
}
function SC(u) {
	var D, e, F;
	function A(C) {
		var E,
			r,
			t,
			n = this;
		if (!(n instanceof A)) return new A(C);
		if (((n.constructor = A), FF(C))) {
			(n.s = C.s),
				R
					? !C.d || C.e > A.maxE
						? ((n.e = NaN), (n.d = null))
						: C.e < A.minE
						? ((n.e = 0), (n.d = [0]))
						: ((n.e = C.e), (n.d = C.d.slice()))
					: ((n.e = C.e), (n.d = C.d ? C.d.slice() : C.d));
			return;
		}
		if (((t = typeof C), t === "number")) {
			if (C === 0) {
				(n.s = 1 / C < 0 ? -1 : 1), (n.e = 0), (n.d = [0]);
				return;
			}
			if (
				(C < 0 ? ((C = -C), (n.s = -1)) : (n.s = 1),
				C === ~~C && C < 1e7)
			) {
				for (E = 0, r = C; r >= 10; r /= 10) E++;
				R
					? E > A.maxE
						? ((n.e = NaN), (n.d = null))
						: E < A.minE
						? ((n.e = 0), (n.d = [0]))
						: ((n.e = E), (n.d = [C]))
					: ((n.e = E), (n.d = [C]));
				return;
			}
			if (C * 0 !== 0) {
				C || (n.s = NaN), (n.e = NaN), (n.d = null);
				return;
			}
			return u0(n, C.toString());
		}
		if (t === "string")
			return (
				(r = C.charCodeAt(0)) === 45
					? ((C = C.slice(1)), (n.s = -1))
					: (r === 43 && (C = C.slice(1)), (n.s = 1)),
				hC.test(C) ? u0(n, C) : EE(n, C)
			);
		if (t === "bigint")
			return (
				C < 0 ? ((C = -C), (n.s = -1)) : (n.s = 1), u0(n, C.toString())
			);
		throw Error(CD + C);
	}
	if (
		((A.prototype = v),
		(A.ROUND_UP = 0),
		(A.ROUND_DOWN = 1),
		(A.ROUND_CEIL = 2),
		(A.ROUND_FLOOR = 3),
		(A.ROUND_HALF_UP = 4),
		(A.ROUND_HALF_DOWN = 5),
		(A.ROUND_HALF_EVEN = 6),
		(A.ROUND_HALF_CEIL = 7),
		(A.ROUND_HALF_FLOOR = 8),
		(A.EUCLID = 9),
		(A.config = A.set = vE),
		(A.clone = SC),
		(A.isDecimal = FF),
		(A.abs = nE),
		(A.acos = tE),
		(A.acosh = iE),
		(A.add = BE),
		(A.asin = aE),
		(A.asinh = sE),
		(A.atan = oE),
		(A.atanh = lE),
		(A.atan2 = cE),
		(A.cbrt = fE),
		(A.ceil = dE),
		(A.clamp = _E),
		(A.cos = mE),
		(A.cosh = hE),
		(A.div = gE),
		(A.exp = pE),
		(A.floor = yE),
		(A.hypot = wE),
		(A.ln = bE),
		(A.log = SE),
		(A.log10 = NE),
		(A.log2 = ME),
		(A.max = TE),
		(A.min = LE),
		(A.mod = IE),
		(A.mul = PE),
		(A.pow = OE),
		(A.random = xE),
		(A.round = RE),
		(A.sign = kE),
		(A.sin = $E),
		(A.sinh = jE),
		(A.sqrt = qE),
		(A.sub = UE),
		(A.sum = GE),
		(A.tan = HE),
		(A.tanh = zE),
		(A.trunc = VE),
		u === void 0 && (u = {}),
		u && u.defaults !== !0)
	)
		for (
			F = [
				"precision",
				"rounding",
				"toExpNeg",
				"toExpPos",
				"maxE",
				"minE",
				"modulo",
				"crypto",
			],
				D = 0;
			D < F.length;

		)
			u.hasOwnProperty((e = F[D++])) || (u[e] = this[e]);
	return A.config(u), A;
}
function gE(u, D) {
	return new this(u).div(D);
}
function pE(u) {
	return new this(u).exp();
}
function yE(u) {
	return b((u = new this(u)), u.e + 1, 3);
}
function wE() {
	var u,
		D,
		e = new this(0);
	for (R = !1, u = 0; u < arguments.length; )
		if (((D = new this(arguments[u++])), D.d))
			e.d && (e = e.plus(D.times(D)));
		else {
			if (D.s) return (R = !0), new this(1 / 0);
			e = D;
		}
	return (R = !0), e.sqrt();
}
function FF(u) {
	return u instanceof j || (u && u.toStringTag === mC) || !1;
}
function bE(u) {
	return new this(u).ln();
}
function SE(u, D) {
	return new this(u).log(D);
}
function ME(u) {
	return new this(u).log(2);
}
function NE(u) {
	return new this(u).log(10);
}
function TE() {
	return yC(this, arguments, -1);
}
function LE() {
	return yC(this, arguments, 1);
}
function IE(u, D) {
	return new this(u).mod(D);
}
function PE(u, D) {
	return new this(u).mul(D);
}
function OE(u, D) {
	return new this(u).pow(D);
}
function xE(u) {
	var D,
		e,
		F,
		A,
		C = 0,
		E = new this(1),
		r = [];
	if (
		(u === void 0 ? (u = this.precision) : gu(u, 1, ED),
		(F = Math.ceil(u / T)),
		this.crypto)
	)
		if (crypto.getRandomValues)
			for (D = crypto.getRandomValues(new Uint32Array(F)); C < F; )
				(A = D[C]),
					A >= 429e7
						? (D[C] = crypto.getRandomValues(new Uint32Array(1))[0])
						: (r[C++] = A % 1e7);
		else if (crypto.randomBytes) {
			for (D = crypto.randomBytes((F *= 4)); C < F; )
				(A =
					D[C] +
					(D[C + 1] << 8) +
					(D[C + 2] << 16) +
					((D[C + 3] & 127) << 24)),
					A >= 214e7
						? crypto.randomBytes(4).copy(D, C)
						: (r.push(A % 1e7), (C += 4));
			C = F / 4;
		} else throw Error(vC);
	else for (; C < F; ) r[C++] = (Math.random() * 1e7) | 0;
	for (
		F = r[--C],
			u %= T,
			F && u && ((A = nu(10, T - u)), (r[C] = ((F / A) | 0) * A));
		r[C] === 0;
		C--
	)
		r.pop();
	if (C < 0) (e = 0), (r = [0]);
	else {
		for (e = -1; r[0] === 0; e -= T) r.shift();
		for (F = 1, A = r[0]; A >= 10; A /= 10) F++;
		F < T && (e -= T - F);
	}
	return (E.e = e), (E.d = r), E;
}
function RE(u) {
	return b((u = new this(u)), u.e + 1, this.rounding);
}
function kE(u) {
	return (u = new this(u)), u.d ? (u.d[0] ? u.s : 0 * u.s) : u.s || NaN;
}
function $E(u) {
	return new this(u).sin();
}
function jE(u) {
	return new this(u).sinh();
}
function qE(u) {
	return new this(u).sqrt();
}
function UE(u, D) {
	return new this(u).sub(D);
}
function GE() {
	var u = 0,
		D = arguments,
		e = new this(D[u]);
	for (R = !1; e.s && ++u < D.length; ) e = e.plus(D[u]);
	return (R = !0), b(e, this.precision, this.rounding);
}
function HE(u) {
	return new this(u).tan();
}
function zE(u) {
	return new this(u).tanh();
}
function VE(u) {
	return b((u = new this(u)), u.e + 1, 1);
}
v[Symbol.for("nodejs.util.inspect.custom")] = v.toString;
v[Symbol.toStringTag] = "Decimal";
var j = (v.constructor = SC(Y0));
l0 = new j(l0);
c0 = new j(c0);
new j(10);
var GD = new j(0),
	ZE = new j(-0);
function HD(u, D) {
	var e = D && D.cache ? D.cache : ur,
		F = D && D.serializer ? D.serializer : QE,
		A = D && D.strategy ? D.strategy : JE;
	return A(u, { cache: e, serializer: F });
}
function KE(u) {
	return u == null || typeof u == "number" || typeof u == "boolean";
}
function WE(u, D, e, F) {
	var A = KE(F) ? F : e(F),
		C = D.get(A);
	return typeof C > "u" && ((C = u.call(this, F)), D.set(A, C)), C;
}
function MC(u, D, e) {
	var F = Array.prototype.slice.call(arguments, 3),
		A = e(F),
		C = D.get(A);
	return typeof C > "u" && ((C = u.apply(this, F)), D.set(A, C)), C;
}
function NC(u, D, e, F, A) {
	return e.bind(D, u, F, A);
}
function JE(u, D) {
	var e = u.length === 1 ? WE : MC;
	return NC(u, this, e, D.cache.create(), D.serializer);
}
function YE(u, D) {
	return NC(u, this, MC, D.cache.create(), D.serializer);
}
var QE = function () {
		return JSON.stringify(arguments);
	},
	XE = (function () {
		function u() {
			this.cache = Object.create(null);
		}
		return (
			(u.prototype.get = function (D) {
				return this.cache[D];
			}),
			(u.prototype.set = function (D, e) {
				this.cache[D] = e;
			}),
			u
		);
	})(),
	ur = {
		create: function () {
			return new XE();
		},
	},
	zD = { variadic: YE };
function ID(u, D) {
	if (typeof u.repeat == "function") return u.repeat(D);
	for (var e = new Array(D), F = 0; F < e.length; F++) e[F] = u;
	return e.join("");
}
function TC(u, D, e, F) {
	u.get(D) || u.set(D, Object.create(null));
	var A = u.get(D);
	A[e] = F;
}
function Dr(u, D, e) {
	for (var F = 0, A = Object.keys(e); F < A.length; F++) {
		var C = A[F];
		TC(u, D, C, e[C]);
	}
}
function er(u, D, e) {
	return LC(u, D, e)[e];
}
function LC(u, D) {
	for (var e = [], F = 2; F < arguments.length; F++) e[F - 2] = arguments[F];
	var A = u.get(D);
	if (!A)
		throw new TypeError(
			"".concat(D, " InternalSlot has not been initialized")
		);
	return e.reduce(function (C, E) {
		return (C[E] = A[E]), C;
	}, Object.create(null));
}
function Fr(u) {
	return u.type === "literal";
}
function Cr(u, D, e) {
	var F = e.value;
	Object.defineProperty(u, D, {
		configurable: !0,
		enumerable: !1,
		writable: !0,
		value: F,
	});
}
function Ar(u, D, e) {
	Object.defineProperty(u, D, {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: e,
	});
}
function Fu(u, D, e) {
	if ((e === void 0 && (e = Error), !u)) throw new e(D);
}
var Er = HD(
		function () {
			for (var u, D = [], e = 0; e < arguments.length; e++)
				D[e] = arguments[e];
			return new ((u = Intl.NumberFormat).bind.apply(
				u,
				Pu([void 0], D, !1)
			))();
		},
		{ strategy: zD.variadic }
	),
	rr = HD(
		function () {
			for (var u, D = [], e = 0; e < arguments.length; e++)
				D[e] = arguments[e];
			return new ((u = Intl.DateTimeFormat).bind.apply(
				u,
				Pu([void 0], D, !1)
			))();
		},
		{ strategy: zD.variadic }
	),
	nr = HD(
		function () {
			for (var u, D = [], e = 0; e < arguments.length; e++)
				D[e] = arguments[e];
			return new ((u = Intl.PluralRules).bind.apply(
				u,
				Pu([void 0], D, !1)
			))();
		},
		{ strategy: zD.variadic }
	),
	tr = HD(
		function () {
			for (var u, D = [], e = 0; e < arguments.length; e++)
				D[e] = arguments[e];
			return new ((u = Intl.Locale).bind.apply(u, Pu([void 0], D, !1)))();
		},
		{ strategy: zD.variadic }
	),
	ir = HD(
		function () {
			for (var u, D = [], e = 0; e < arguments.length; e++)
				D[e] = arguments[e];
			return new ((u = Intl.ListFormat).bind.apply(
				u,
				Pu([void 0], D, !1)
			))();
		},
		{ strategy: zD.variadic }
	);
function ve(u) {
	if (typeof u == "symbol")
		throw TypeError("Cannot convert a Symbol value to a string");
	return String(u);
}
function me(u) {
	if (typeof u == "number") return new j(u);
	if (
		(Fu(
			typeof u != "bigint" && typeof u != "symbol",
			"BigInt and Symbol are not supported",
			TypeError
		),
		u === void 0)
	)
		return new j(NaN);
	if (u === null || u === 0) return GD;
	if (u === !0) return new j(1);
	if (typeof u == "string")
		try {
			return new j(u);
		} catch {
			return new j(NaN);
		}
	Fu(typeof u == "object", "object expected", TypeError);
	var D = Se(u, "number");
	return Fu(typeof D != "object", "object expected", TypeError), me(D);
}
function Br(u) {
	var D = me(u);
	if (D.isNaN() || D.isZero()) return GD;
	if (D.isFinite()) return D;
	var e = D.abs().floor();
	return D.isNegative() && (e = e.negated()), e;
}
function ar(u) {
	return u.isFinite()
		? u.abs().greaterThan(8.64 * 1e15)
			? new j(NaN)
			: Br(u)
		: new j(NaN);
}
function he(u) {
	if (u == null)
		throw new TypeError("undefined/null cannot be converted to object");
	return Object(u);
}
function sr(u, D) {
	return Object.is
		? Object.is(u, D)
		: u === D
		? u !== 0 || 1 / u === 1 / D
		: u !== u && D !== D;
}
function IC(u) {
	return new Array(u);
}
function PC(u, D) {
	return Object.prototype.hasOwnProperty.call(u, D);
}
function or(u) {
	if (u === null) return "Null";
	if (typeof u > "u") return "Undefined";
	if (typeof u == "function" || typeof u == "object") return "Object";
	if (typeof u == "number") return "Number";
	if (typeof u == "boolean") return "Boolean";
	if (typeof u == "string") return "String";
	if (typeof u == "symbol") return "Symbol";
	if (typeof u == "bigint") return "BigInt";
}
var OC = 864e5;
function VD(u, D) {
	return u - Math.floor(u / D) * D;
}
function ge(u) {
	return Math.floor(u / OC);
}
function lr(u) {
	return VD(ge(u) + 4, 7);
}
function xC(u) {
	return Date.UTC(u, 0) / OC;
}
function cr(u) {
	return Date.UTC(u, 0);
}
function pe(u) {
	return new Date(u).getUTCFullYear();
}
function RC(u) {
	return u % 4 !== 0 ? 365 : u % 100 !== 0 ? 366 : u % 400 !== 0 ? 365 : 366;
}
function ye(u) {
	return ge(u) - xC(pe(u));
}
function we(u) {
	return RC(pe(u)) === 365 ? 0 : 1;
}
function kC(u) {
	var D = ye(u),
		e = we(u);
	if (D >= 0 && D < 31) return 0;
	if (D < 59 + e) return 1;
	if (D < 90 + e) return 2;
	if (D < 120 + e) return 3;
	if (D < 151 + e) return 4;
	if (D < 181 + e) return 5;
	if (D < 212 + e) return 6;
	if (D < 243 + e) return 7;
	if (D < 273 + e) return 8;
	if (D < 304 + e) return 9;
	if (D < 334 + e) return 10;
	if (D < 365 + e) return 11;
	throw new Error("Invalid time");
}
function fr(u) {
	var D = ye(u),
		e = kC(u),
		F = we(u);
	if (e === 0) return D + 1;
	if (e === 1) return D - 30;
	if (e === 2) return D - 58 - F;
	if (e === 3) return D - 89 - F;
	if (e === 4) return D - 119 - F;
	if (e === 5) return D - 150 - F;
	if (e === 6) return D - 180 - F;
	if (e === 7) return D - 211 - F;
	if (e === 8) return D - 242 - F;
	if (e === 9) return D - 272 - F;
	if (e === 10) return D - 303 - F;
	if (e === 11) return D - 333 - F;
	throw new Error("Invalid time");
}
var dr = 24,
	$C = 60,
	jC = 60,
	be = 1e3,
	qC = be * jC,
	_r = qC * $C;
function vr(u) {
	return VD(Math.floor(u / _r), dr);
}
function mr(u) {
	return VD(Math.floor(u / qC), $C);
}
function hr(u) {
	return VD(Math.floor(u / be), jC);
}
function UC(u) {
	return typeof u == "function";
}
function gr(u, D, e) {
	if (!UC(u)) return !1;
	if (e != null && e.boundTargetFunction) {
		var F = e == null ? void 0 : e.boundTargetFunction;
		return D instanceof F;
	}
	if (typeof D != "object") return !1;
	var A = u.prototype;
	if (typeof A != "object")
		throw new TypeError(
			"OrdinaryHasInstance called on an object with an invalid prototype property."
		);
	return Object.prototype.isPrototypeOf.call(A, D);
}
function pr(u) {
	return VD(u, be);
}
function yr(u, D) {
	var e;
	D === "string"
		? (e = ["toString", "valueOf"])
		: (e = ["valueOf", "toString"]);
	for (var F = 0, A = e; F < A.length; F++) {
		var C = A[F],
			E = u[C];
		if (UC(E)) {
			var r = E.call(u);
			if (typeof r != "object") return r;
		}
	}
	throw new TypeError("Cannot convert object to primitive value");
}
function Se(u, D) {
	if (typeof u == "object" && u != null) {
		var e = Symbol.toPrimitive in u ? u[Symbol.toPrimitive] : void 0,
			F = void 0;
		if (e !== void 0) {
			D === void 0
				? (F = "default")
				: D === "string"
				? (F = "string")
				: (Fu(
						D === "number",
						'preferredType must be "string" or "number"'
				  ),
				  (F = "number"));
			var A = e.call(u, F);
			if (typeof A != "object") return A;
			throw new TypeError("Cannot convert exotic object to primitive.");
		}
		return D === void 0 && (D = "number"), yr(u, D);
	}
	return u;
}
function GC(u) {
	return typeof u > "u" ? Object.create(null) : he(u);
}
function ND(u, D, e, F) {
	if (u === void 0) return F;
	var A = Number(u);
	if (isNaN(A) || A < D || A > e)
		throw new RangeError(
			""
				.concat(A, " is outside of range [")
				.concat(D, ", ")
				.concat(e, "]")
		);
	return Math.floor(A);
}
function ue(u, D, e, F, A) {
	var C = u[D];
	return ND(C, e, F, A);
}
function ou(u, D, e, F, A) {
	if (typeof u != "object") throw new TypeError("Options must be an object");
	var C = u[D];
	if (C !== void 0) {
		if (e !== "boolean" && e !== "string")
			throw new TypeError("invalid type");
		if (
			(e === "boolean" && (C = !!C),
			e === "string" && (C = ve(C)),
			F !== void 0 &&
				!F.filter(function (E) {
					return E == C;
				}).length)
		)
			throw new RangeError(
				"".concat(C, " is not within ").concat(F.join(", "))
			);
		return C;
	}
	return A;
}
function wr(u) {
	if (typeof u > "u") return Object.create(null);
	if (typeof u == "object") return u;
	throw new TypeError("Options must be an object");
}
function HC(u, D, e, F, A, C) {
	var E = u[D];
	if (E === void 0) return C;
	if (E === !0) return F;
	var r = !!E;
	if (r === !1) return A;
	if (((E = ve(E)), E === "true" || E === "false")) return C;
	if ((e || []).indexOf(E) === -1)
		throw new RangeError("Invalid value ".concat(E));
	return E;
}
var zC = [
	"angle-degree",
	"area-acre",
	"area-hectare",
	"concentr-percent",
	"digital-bit",
	"digital-byte",
	"digital-gigabit",
	"digital-gigabyte",
	"digital-kilobit",
	"digital-kilobyte",
	"digital-megabit",
	"digital-megabyte",
	"digital-petabyte",
	"digital-terabit",
	"digital-terabyte",
	"duration-day",
	"duration-hour",
	"duration-millisecond",
	"duration-minute",
	"duration-month",
	"duration-second",
	"duration-week",
	"duration-year",
	"length-centimeter",
	"length-foot",
	"length-inch",
	"length-kilometer",
	"length-meter",
	"length-mile-scandinavian",
	"length-mile",
	"length-millimeter",
	"length-yard",
	"mass-gram",
	"mass-kilogram",
	"mass-ounce",
	"mass-pound",
	"mass-stone",
	"temperature-celsius",
	"temperature-fahrenheit",
	"volume-fluid-ounce",
	"volume-gallon",
	"volume-liter",
	"volume-milliliter",
];
function VC(u) {
	return u.slice(u.indexOf("-") + 1);
}
var ZC = zC.map(VC);
function D0(u) {
	return ZC.indexOf(u) > -1;
}
function br(u, D) {
	var e = D.zoneNamesFromData,
		F = D.uppercaseLinks,
		A = u.toUpperCase(),
		C = new Set(),
		E = new Set();
	return (
		e
			.map(function (r) {
				return r.toUpperCase();
			})
			.forEach(function (r) {
				return C.add(r);
			}),
		Object.keys(F).forEach(function (r) {
			E.add(r.toUpperCase()), C.add(F[r].toUpperCase());
		}),
		C.has(A) || E.has(A)
	);
}
function Sr(u) {
	return u.replace(/([a-z])/g, function (D, e) {
		return e.toUpperCase();
	});
}
var Mr = /[^A-Z]/;
function KC(u) {
	return (u = Sr(u)), !(u.length !== 3 || Mr.test(u));
}
function Nr(u) {
	return u.replace(/([A-Z])/g, function (D, e) {
		return e.toLowerCase();
	});
}
function WC(u) {
	if (((u = Nr(u)), D0(u))) return !0;
	var D = u.split("-per-");
	if (D.length !== 2) return !1;
	var e = D[0],
		F = D[1];
	return !(!D0(e) || !D0(F));
}
function Me(u, D, e, F) {
	if (
		u.eq(D) ||
		(Fu(
			D.lessThan(u) && u.lessThan(e),
			"x should be between r1 and r2 but x="
				.concat(u, ", r1=")
				.concat(D, ", r2=")
				.concat(e)
		),
		F === "zero")
	)
		return D;
	if (F === "infinity") return e;
	var A = u.minus(D),
		C = e.minus(u);
	if (A.lessThan(C)) return D;
	if (C.lessThan(A)) return e;
	if ((Fu(A.eq(C), "d1 should be equal to d2"), F === "half-zero")) return D;
	if (F === "half-infinity") return e;
	Fu(F === "half-even", "unsignedRoundingMode should be half-even");
	var E = D.div(e.minus(D)).mod(2);
	return E.isZero() ? D : e;
}
var CF = new Set([
	"unit",
	"exponentMinusSign",
	"minusSign",
	"plusSign",
	"percentSign",
	"exponentSeparator",
	"percent",
	"percentSign",
	"currency",
	"literal",
]);
function JC(u, D, e) {
	for (
		var F = e.getInternalSlots,
			A = F(u),
			C = A.dataLocaleData.numbers.symbols[A.numberingSystem],
			E = new RegExp("s?[".concat(C.rangeSign, "]s?")),
			r = D.findIndex(function (a) {
				return a.type === "literal" && E.test(a.value);
			}),
			t = [],
			n = r - 1;
		n >= 0 && CF.has(D[n].type);
		n--
	)
		t.unshift(D[n]);
	if (
		Array.from(
			t
				.map(function (a) {
					return a.value;
				})
				.join("")
		).length > 1
	) {
		var i = Array.from(D);
		return i.splice(r - t.length, t.length), i;
	}
	for (var B = [], n = r + 1; n < D.length && CF.has(D[n].type); n++)
		B.push(D[n]);
	if (
		Array.from(
			B.map(function (a) {
				return a.value;
			}).join("")
		).length > 1
	) {
		var i = Array.from(D);
		return i.splice(r + 1, B.length), i;
	}
	return D;
}
j.set({ toExpPos: 100 });
function De(u, D) {
	var e = u.notation,
		F = u.dataLocaleData,
		A = u.numberingSystem;
	switch (e) {
		case "standard":
			return 0;
		case "scientific":
			return D.toNumber();
		case "engineering":
			var C = D.div(3).floor();
			return C.times(3).toNumber();
		default: {
			Fu(e === "compact", "Invalid notation");
			var E = u.compactDisplay,
				r = u.style,
				t = u.currencyDisplay,
				n = void 0;
			if (r === "currency" && t !== "name") {
				var i =
					F.numbers.currency[A] ||
					F.numbers.currency[F.numbers.nu[0]];
				n = i.short;
			} else {
				var B =
					F.numbers.decimal[A] || F.numbers.decimal[F.numbers.nu[0]];
				n = E === "long" ? B.long : B.short;
			}
			if (!n) return 0;
			var a = j.pow(10, D).toString(),
				s = Object.keys(n);
			if (a < s[0]) return 0;
			if (a > s[s.length - 1]) return s[s.length - 1].length - 1;
			var d = s.indexOf(a);
			if (d === -1) return 0;
			var o = s[d],
				_ = n[o].other;
			return _ === "0" ? 0 : o.length - n[o].other.match(/0+/)[0].length;
		}
	}
}
var Tr = {
		ceil: "zero",
		floor: "infinity",
		expand: "infinity",
		trunc: "zero",
		halfCeil: "half-zero",
		halfFloor: "half-infinity",
		halfExpand: "half-infinity",
		halfTrunc: "half-zero",
		halfEven: "half-even",
	},
	Lr = {
		ceil: "infinity",
		floor: "zero",
		expand: "infinity",
		trunc: "zero",
		halfCeil: "half-infinity",
		halfFloor: "half-zero",
		halfExpand: "half-infinity",
		halfTrunc: "half-zero",
		halfEven: "half-even",
	};
function Ne(u, D) {
	return D ? Tr[u] : Lr[u];
}
j.set({ toExpPos: 100 });
function YC(u, D) {
	return u.times(j.pow(10, -D));
}
function Ir(u, D, e) {
	var F = u.times(j.pow(10, D)).floor(),
		A = F.div(e).floor().times(e),
		C = YC(A, D);
	return { n1: A, r1: C };
}
function Pr(u, D, e) {
	var F = u.times(j.pow(10, D)).ceil(),
		A = F.div(e).ceil().times(e),
		C = YC(A, D);
	return { n2: A, r2: C };
}
function d0(u, D, e, F, A) {
	var C = e,
		E = Ir(u, C, F),
		r = E.n1,
		t = E.r1,
		n = Pr(u, C, F),
		i = n.n2,
		B = n.r2,
		a = Me(u, t, B, A),
		s,
		d,
		o;
	a.eq(t) ? ((s = r), (d = t)) : ((s = i), (d = B)),
		s.isZero() ? (o = "0") : (o = s.toString());
	var _;
	if (C !== 0) {
		var c = o.length;
		if (c <= C) {
			var g = ID("0", C - c + 1);
			(o = g + o), (c = C + 1);
		}
		var m = o.slice(0, c - C),
			h = o.slice(o.length - C);
		(o = m + "." + h), (_ = m.length);
	} else _ = o.length;
	for (var y = e - D; y > 0 && o[o.length - 1] === "0"; )
		(o = o.slice(0, o.length - 1)), y--;
	return (
		o[o.length - 1] === "." && (o = o.slice(0, o.length - 1)),
		{
			formattedString: o,
			roundedNumber: d,
			integerDigitsCount: _,
			roundingMagnitude: -C,
		}
	);
}
function Or(u, D) {
	for (
		var e = j.pow(10, D),
			F = j.pow(10, D - 1),
			A = u.div(F).log(10).plus(D).minus(1).ceil(),
			C = A;
		;

	) {
		var E = u.div(j.pow(10, C.minus(D).plus(1))).floor();
		if (E.lessThan(e) && E.greaterThanOrEqualTo(F)) {
			var r = E.times(j.pow(10, C.minus(D).plus(1)));
			if (r.lessThanOrEqualTo(u)) return { n1: E, e1: C, r1: r };
		}
		C = C.minus(1);
	}
}
function xr(u, D) {
	for (
		var e = j.pow(10, D),
			F = j.pow(10, D - 1),
			A = u.div(e).log(10).plus(D).minus(1).floor(),
			C = A;
		;

	) {
		var E = u.div(j.pow(10, C.minus(D).plus(1))).ceil();
		if (E.lessThan(e) && E.greaterThanOrEqualTo(F)) {
			var r = E.times(j.pow(10, C.minus(D).plus(1)));
			if (r.greaterThanOrEqualTo(u)) return { n2: E, e2: C, r2: r };
		}
		C = C.plus(1);
	}
}
function ee(u, D, e, F) {
	var A = e,
		C,
		E,
		r;
	if (u.isZero()) (C = ID("0", A)), (E = 0), (r = GD);
	else {
		var t = Or(u, A),
			n = t.n1,
			i = t.e1,
			B = t.r1,
			a = xr(u, A),
			s = a.n2,
			d = a.e2,
			o = a.r2,
			_ = Me(u, B, o, F),
			c = void 0;
		_.eq(B)
			? ((c = n), (E = i.toNumber()), (r = B))
			: ((c = s), (E = d.toNumber()), (r = o)),
			(C = c.toString());
	}
	var g;
	if (
		(E >= A - 1
			? ((C = C + ID("0", E - A + 1)), (g = E + 1))
			: E >= 0
			? ((C =
					C.slice(0, E + 1) +
					"." +
					C.slice(C.length - (A - (E + 1)))),
			  (g = E + 1))
			: (Fu(E < 0, "e should be less than 0"),
			  (C = "0." + ID("0", -E - 1) + C),
			  (g = 1)),
		C.includes(".") && e > D)
	) {
		for (var m = e - D; m > 0 && C[C.length - 1] === "0"; )
			(C = C.slice(0, C.length - 1)), m--;
		C[C.length - 1] === "." && (C = C.slice(0, C.length - 1));
	}
	return {
		formattedString: C,
		roundedNumber: r,
		integerDigitsCount: g,
		roundingMagnitude: E,
	};
}
function Te(u, D) {
	var e = D,
		F;
	e.isZero() && e.isNegative()
		? ((F = "negative"), (e = GD))
		: (Fu(
				e.isFinite(),
				"NumberFormatDigitInternalSlots value is not finite"
		  ),
		  e.lessThan(0) ? (F = "negative") : (F = "positive"),
		  F === "negative" && (e = e.negated()));
	var A,
		C = u.roundingType,
		E = Ne(u.roundingMode, F === "negative");
	switch (C) {
		case "significantDigits":
			A = ee(
				e,
				u.minimumSignificantDigits,
				u.maximumSignificantDigits,
				E
			);
			break;
		case "fractionDigits":
			A = d0(
				e,
				u.minimumFractionDigits,
				u.maximumFractionDigits,
				u.roundingIncrement,
				E
			);
			break;
		default:
			var r = ee(
					e,
					u.minimumSignificantDigits,
					u.maximumSignificantDigits,
					E
				),
				t = d0(
					e,
					u.minimumFractionDigits,
					u.maximumFractionDigits,
					u.roundingIncrement,
					E
				);
			u.roundingType === "morePrecision"
				? r.roundingMagnitude <= t.roundingMagnitude
					? (A = r)
					: (A = t)
				: (Fu(
						u.roundingType === "lessPrecision",
						"Invalid roundingType"
				  ),
				  r.roundingMagnitude <= t.roundingMagnitude
						? (A = t)
						: (A = r));
			break;
	}
	e = A.roundedNumber;
	var n = A.formattedString;
	if (u.trailingZeroDisplay === "stripIfInteger" && e.isInteger()) {
		var i = n.indexOf(".");
		i > -1 && (n = n.slice(0, i));
	}
	var B = A.integerDigitsCount,
		a = u.minimumIntegerDigits;
	if (B < a) {
		var s = ID("0", a - B);
		n = s + n;
	}
	return (
		F === "negative" && (e.isZero() ? (e = ZE) : (e = e.negated())),
		{ roundedNumber: e, formattedString: n }
	);
}
function QC(u, D) {
	if (D.isZero()) return [0, 0];
	D.isNegative() && (D = D.negated());
	var e = D.log(10).floor(),
		F = De(u, e);
	D = D.times(j.pow(10, -F));
	var A = Te(u, D);
	if (A.roundedNumber.isZero()) return [F, e.toNumber()];
	var C = A.roundedNumber.log(10).floor();
	return C.eq(e.minus(F))
		? [F, e.toNumber()]
		: [De(u, e.plus(1)), e.plus(1).toNumber()];
}
function XC(u, D) {
	var e = D.currencyDigitsData;
	return PC(e, u) ? e[u] : 2;
}
var u1 =
		/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
	Rr = {
		adlm: ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
		ahom: ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
		arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
		arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
		bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
		beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
		bhks: ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
		brah: ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
		cakm: ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
		cham: ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
		deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
		diak: ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
		fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
		gong: ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
		gonm: ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
		gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
		guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
		hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
		hmng: ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
		hmnp: ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
		java: ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
		kali: ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
		khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
		knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
		lana: ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
		lanatham: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
		laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
		lepc: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
		limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
		mathbold: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
		mathdbl: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
		mathmono: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
		mathsanb: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
		mathsans: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
		mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
		modi: ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
		mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
		mroo: ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
		mtei: ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
		mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
		mymrshan: ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
		mymrtlng: ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
		newa: ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
		nkoo: ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
		olck: ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
		orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
		osma: ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
		rohg: ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
		saur: ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
		segment: ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
		shrd: ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
		sind: ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
		sinh: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
		sora: ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
		sund: ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
		takr: ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
		talu: ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
		tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
		telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
		thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
		tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
		tirh: ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
		vaii: ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
		wara: ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
		wcho: ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"],
	},
	kr = new RegExp("^".concat(u1.source)),
	$r = new RegExp("".concat(u1.source, "$")),
	AF = /[#0](?:[\.,][#0]+)*/g;
function D1(u, D, e, F) {
	var A,
		C = u.sign,
		E = u.exponent,
		r = u.magnitude,
		t = F.notation,
		n = F.style,
		i = F.numberingSystem,
		B = D.numbers.nu[0],
		a = null;
	t === "compact" &&
		r &&
		(a = qr(u, e, D, n, F.compactDisplay, F.currencyDisplay, i));
	var s;
	if (n === "currency" && F.currencyDisplay !== "name") {
		var d = D.currencies[F.currency];
		if (d)
			switch (F.currencyDisplay) {
				case "code":
					s = F.currency;
					break;
				case "symbol":
					s = d.symbol;
					break;
				default:
					s = d.narrow;
					break;
			}
		else s = F.currency;
	}
	var o;
	if (a) o = a;
	else if (
		n === "decimal" ||
		n === "unit" ||
		(n === "currency" && F.currencyDisplay === "name")
	) {
		var _ = D.numbers.decimal[i] || D.numbers.decimal[B];
		o = e0(_.standard, C);
	} else if (n === "currency") {
		var c = D.numbers.currency[i] || D.numbers.currency[B];
		o = e0(c[F.currencySign], C);
	} else {
		var g = D.numbers.percent[i] || D.numbers.percent[B];
		o = e0(g, C);
	}
	var m = AF.exec(o)[0];
	if (
		((o = o.replace(AF, "{0}").replace(/'(.)'/g, "$1")),
		n === "currency" && F.currencyDisplay !== "name")
	) {
		var c = D.numbers.currency[i] || D.numbers.currency[B],
			h = c.currencySpacing.afterInsertBetween;
		h && !$r.test(s) && (o = o.replace("¤{0}", "¤".concat(h, "{0}")));
		var y = c.currencySpacing.beforeInsertBetween;
		y && !kr.test(s) && (o = o.replace("{0}¤", "{0}".concat(y, "¤")));
	}
	for (
		var N = o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g),
			p = [],
			P = D.numbers.symbols[i] || D.numbers.symbols[B],
			U = 0,
			H = N;
		U < H.length;
		U++
	) {
		var k = H[U];
		if (k)
			switch (k) {
				case "{0}": {
					p.push.apply(
						p,
						jr(
							P,
							u,
							t,
							E,
							i,
							!a &&
								((A = F.useGrouping) !== null && A !== void 0
									? A
									: !0),
							m,
							n,
							F.roundingIncrement,
							Ne(F.roundingMode, C === -1)
						)
					);
					break;
				}
				case "-":
					p.push({ type: "minusSign", value: P.minusSign });
					break;
				case "+":
					p.push({ type: "plusSign", value: P.plusSign });
					break;
				case "%":
					p.push({ type: "percentSign", value: P.percentSign });
					break;
				case "¤":
					p.push({ type: "currency", value: s });
					break;
				default:
					/^\{c:/.test(k)
						? p.push({
								type: "compact",
								value: k.substring(3, k.length - 1),
						  })
						: p.push({ type: "literal", value: k });
					break;
			}
	}
	switch (n) {
		case "currency":
			if (F.currencyDisplay === "name") {
				var Du = (D.numbers.currency[i] || D.numbers.currency[B])
						.unitPattern,
					tu = void 0,
					vu = D.currencies[F.currency];
				vu
					? (tu = lD(
							e,
							u.roundedNumber.times(j.pow(10, E)).toNumber(),
							vu.displayName
					  ))
					: (tu = F.currency);
				for (
					var Y = Du.split(/(\{[01]\})/g), O = [], wu = 0, Ou = Y;
					wu < Ou.length;
					wu++
				) {
					var k = Ou[wu];
					switch (k) {
						case "{0}":
							O.push.apply(O, p);
							break;
						case "{1}":
							O.push({ type: "currency", value: tu });
							break;
						default:
							k && O.push({ type: "literal", value: k });
							break;
					}
				}
				return O;
			} else return p;
		case "unit": {
			var Uu = F.unit,
				f = F.unitDisplay,
				l = D.units.simple[Uu],
				Du = void 0;
			if (l)
				Du = lD(
					e,
					u.roundedNumber.times(j.pow(10, E)).toNumber(),
					D.units.simple[Uu][f]
				);
			else {
				var w = Uu.split("-per-"),
					S = w[0],
					L = w[1];
				l = D.units.simple[S];
				var x = lD(
						e,
						u.roundedNumber.times(j.pow(10, E)).toNumber(),
						D.units.simple[S][f]
					),
					$ = D.units.simple[L].perUnit[f];
				if ($) Du = $.replace("{0}", x);
				else {
					var M = D.units.compound.per[f],
						q = lD(e, 1, D.units.simple[L][f]);
					Du = Du = M.replace("{0}", x).replace(
						"{1}",
						q.replace("{0}", "")
					);
				}
			}
			for (
				var O = [], z = 0, K = Du.split(/(\s*\{0\}\s*)/);
				z < K.length;
				z++
			) {
				var k = K[z],
					V = /^(\s*)\{0\}(\s*)$/.exec(k);
				V
					? (V[1] && O.push({ type: "literal", value: V[1] }),
					  O.push.apply(O, p),
					  V[2] && O.push({ type: "literal", value: V[2] }))
					: k && O.push({ type: "unit", value: k });
			}
			return O;
		}
		default:
			return p;
	}
}
function jr(u, D, e, F, A, C, E, r, t, n) {
	var i = [],
		B = D.formattedString,
		a = D.roundedNumber;
	if (a.isNaN()) return [{ type: "nan", value: B }];
	if (!a.isFinite()) return [{ type: "infinity", value: B }];
	var s = Rr[A];
	s &&
		(B = B.replace(/\d/g, function (Du) {
			return s[+Du] || Du;
		}));
	var d = B.indexOf("."),
		o,
		_;
	d > 0 ? ((o = B.slice(0, d)), (_ = B.slice(d + 1))) : (o = B);
	var c = !1;
	if (
		(C === "always"
			? (c = !0)
			: C === "min2"
			? (c = a.greaterThanOrEqualTo(1e4))
			: (C === "auto" || C) &&
			  (c = e !== "compact" || a.greaterThanOrEqualTo(1e4)),
		c)
	) {
		var g =
				r === "currency" && u.currencyGroup != null
					? u.currencyGroup
					: u.group,
			m = [],
			h = E.split(".")[0],
			y = h.split(","),
			N = 3,
			p = 3;
		y.length > 1 && (N = y[y.length - 1].length),
			y.length > 2 && (p = y[y.length - 2].length);
		var P = o.length - N;
		if (P > 0) {
			for (m.push(o.slice(P, P + N)), P -= p; P > 0; P -= p)
				m.push(o.slice(P, P + p));
			m.push(o.slice(0, P + p));
		} else m.push(o);
		for (; m.length > 0; ) {
			var U = m.pop();
			i.push({ type: "integer", value: U }),
				m.length > 0 && i.push({ type: "group", value: g });
		}
	} else i.push({ type: "integer", value: o });
	if (_ !== void 0) {
		var H =
			r === "currency" && u.currencyDecimal != null
				? u.currencyDecimal
				: u.decimal;
		i.push({ type: "decimal", value: H }, { type: "fraction", value: _ });
	}
	if ((e === "scientific" || e === "engineering") && a.isFinite()) {
		i.push({ type: "exponentSeparator", value: u.exponential }),
			F < 0 &&
				(i.push({ type: "exponentMinusSign", value: u.minusSign }),
				(F = -F));
		var k = d0(new j(F), 0, 0, t, n);
		i.push({ type: "exponentInteger", value: k.formattedString });
	}
	return i;
}
function e0(u, D) {
	u.indexOf(";") < 0 && (u = "".concat(u, ";-").concat(u));
	var e = u.split(";"),
		F = e[0],
		A = e[1];
	switch (D) {
		case 0:
			return F;
		case -1:
			return A;
		default:
			return A.indexOf("-") >= 0 ? A.replace(/-/g, "+") : "+".concat(F);
	}
}
function qr(u, D, e, F, A, C, E) {
	var r,
		t = u.roundedNumber,
		n = u.sign,
		i = u.magnitude,
		B = String(Math.pow(10, i)),
		a = e.numbers.nu[0],
		s;
	if (F === "currency" && C !== "name") {
		var d = e.numbers.currency,
			o = d[E] || d[a],
			_ = (r = o.short) === null || r === void 0 ? void 0 : r[B];
		if (!_) return null;
		s = lD(D, t.toNumber(), _);
	} else {
		var d = e.numbers.decimal,
			c = d[E] || d[a],
			g = c[A][B];
		if (!g) return null;
		s = lD(D, t.toNumber(), g);
	}
	return s === "0"
		? null
		: ((s = e0(s, n)
				.replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}")
				.replace(/0+/, "0")),
		  s);
}
function lD(u, D, e) {
	return e[u.select(D)] || e.other;
}
function e1(u, D) {
	var e = u.dataLocaleData.numbers.symbols[u.numberingSystem],
		F = e.approximatelySign;
	return D.push({ type: "approximatelySign", value: F }), D;
}
function $D(u, D) {
	var e,
		F = D,
		A = 0,
		C = u.pl,
		E = u.dataLocaleData,
		r = u.numberingSystem,
		t = E.numbers.symbols[r] || E.numbers.symbols[E.numbers.nu[0]],
		n = 0,
		i;
	if (F.isNaN()) i = t.nan;
	else if (!F.isFinite()) i = t.infinity;
	else {
		F.isZero() ||
			(Fu(F.isFinite(), "Input must be a mathematical value"),
			u.style == "percent" && (F = F.times(100)),
			(e = QC(u, F)),
			(n = e[0]),
			(A = e[1]),
			(F = F.times(j.pow(10, -n))));
		var B = Te(u, F);
		(i = B.formattedString), (F = B.roundedNumber);
	}
	var a,
		s = u.signDisplay;
	switch (s) {
		case "never":
			a = 0;
			break;
		case "auto":
			F.isPositive() || F.isNaN() ? (a = 0) : (a = -1);
			break;
		case "always":
			F.isPositive() || F.isNaN() ? (a = 1) : (a = -1);
			break;
		case "exceptZero":
			F.isZero() ? (a = 0) : F.isNegative() ? (a = -1) : (a = 1);
			break;
		default:
			Fu(s === "negative", 'signDisplay must be "negative"'),
				F.isNegative() && !F.isZero() ? (a = -1) : (a = 0);
			break;
	}
	return D1(
		{
			roundedNumber: F,
			formattedString: i,
			exponent: n,
			magnitude: A,
			sign: a,
		},
		u.dataLocaleData,
		C,
		u
	);
}
function Fe(u, D) {
	var e = $D(u, D);
	return e
		.map(function (F) {
			return F.value;
		})
		.join("");
}
function Le(u, D, e, F) {
	var A = F.getInternalSlots;
	Fu(!D.isNaN() && !e.isNaN(), "Input must be a number", RangeError);
	var C = A(u),
		E = $D(C, D),
		r = $D(C, e);
	if (Fe(C, D) === Fe(C, e)) {
		var t = e1(C, E);
		return (
			t.forEach(function (B) {
				B.source = "shared";
			}),
			t
		);
	}
	var n = [];
	E.forEach(function (B) {
		(B.source = "startRange"), n.push(B);
	});
	var i = C.dataLocaleData.numbers.symbols[C.numberingSystem].rangeSign;
	return (
		n.push({ type: "literal", value: i, source: "shared" }),
		r.forEach(function (B) {
			(B.source = "endRange"), n.push(B);
		}),
		JC(u, n, { getInternalSlots: A })
	);
}
function Ur(u, D, e, F) {
	var A = F.getInternalSlots,
		C = Le(u, D, e, { getInternalSlots: A });
	return C.map(function (E) {
		return E.value;
	}).join("");
}
function Gr(u, D, e, F) {
	var A = F.getInternalSlots,
		C = Le(u, D, e, { getInternalSlots: A });
	return C.map(function (E, r) {
		return {
			type: E.type,
			value: E.value,
			source: E.source,
			result: r.toString(),
		};
	});
}
function Hr(u, D, e) {
	for (
		var F = $D(e.getInternalSlots(u), D), A = IC(0), C = 0, E = F;
		C < E.length;
		C++
	) {
		var r = E[C];
		A.push({ type: r.type, value: r.value });
	}
	return A;
}
function zr(u) {
	return Intl.getCanonicalLocales(u);
}
var k0 = {
		supplemental: {
			languageMatching: {
				"written-new": [
					{
						paradigmLocales: {
							_locales: "en en_GB es es_419 pt_BR pt_PT",
						},
					},
					{ $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
					{ $cnsar: { _value: "HK+MO" } },
					{ $americas: { _value: "019" } },
					{ $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
					{ no: { _desired: "nb", _distance: "1" } },
					{ bs: { _desired: "hr", _distance: "4" } },
					{ bs: { _desired: "sh", _distance: "4" } },
					{ hr: { _desired: "sh", _distance: "4" } },
					{ sr: { _desired: "sh", _distance: "4" } },
					{ aa: { _desired: "ssy", _distance: "4" } },
					{
						de: {
							_desired: "gsw",
							_distance: "4",
							_oneway: "true",
						},
					},
					{ de: { _desired: "lb", _distance: "4", _oneway: "true" } },
					{ no: { _desired: "da", _distance: "8" } },
					{ nb: { _desired: "da", _distance: "8" } },
					{
						ru: {
							_desired: "ab",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ach",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						nl: {
							_desired: "af",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ak",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "am",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						es: {
							_desired: "ay",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "az",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ur: {
							_desired: "bal",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "be",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "bem",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						hi: {
							_desired: "bh",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "bn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "bo",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "br",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						es: {
							_desired: "ca",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						fil: {
							_desired: "ceb",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "chr",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ckb",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "co",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "crs",
							_distance: "20",
							_oneway: "true",
						},
					},
					{ sk: { _desired: "cs", _distance: "20" } },
					{
						en: {
							_desired: "cy",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ee",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "eo",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						es: {
							_desired: "eu",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						da: {
							_desired: "fo",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						nl: {
							_desired: "fy",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ga",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "gaa",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "gd",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						es: {
							_desired: "gl",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						es: {
							_desired: "gn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						hi: {
							_desired: "gu",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ha",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "haw",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "ht",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "hy",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ia",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ig",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "is",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						id: {
							_desired: "jv",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ka",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "kg",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "kk",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "km",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "kn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "kri",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						tr: {
							_desired: "ku",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "ky",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						it: {
							_desired: "la",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "lg",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "ln",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "lo",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "loz",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "lua",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						hi: {
							_desired: "mai",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "mfe",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "mg",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "mi",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ml",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "mn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						hi: {
							_desired: "mr",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						id: {
							_desired: "ms",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "mt",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "my",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ne",
							_distance: "30",
							_oneway: "true",
						},
					},
					{ nb: { _desired: "nn", _distance: "20" } },
					{ no: { _desired: "nn", _distance: "20" } },
					{
						en: {
							_desired: "nso",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ny",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "nyn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "oc",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "om",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "or",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "pa",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "pcm",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ps",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						es: {
							_desired: "qu",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						de: {
							_desired: "rm",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "rn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "rw",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						hi: {
							_desired: "sa",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "sd",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "si",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "sn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "so",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "sq",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "st",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						id: {
							_desired: "su",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "sw",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ta",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "te",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "tg",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ti",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "tk",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "tlh",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "tn",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "to",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "tt",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "tum",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "ug",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "uk",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "ur",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ru: {
							_desired: "uz",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						fr: {
							_desired: "wo",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "xh",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "yi",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "yo",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "za",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						en: {
							_desired: "zu",
							_distance: "30",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "aao",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "abh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "abv",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "acm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "acq",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "acw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "acx",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "acy",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "adf",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "aeb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "aec",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "afb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ajp",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "apc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "apd",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "arq",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ars",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ary",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "arz",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "auz",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "avl",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ayh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ayl",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ayn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ayp",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "bbz",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "pga",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "shu",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ar: {
							_desired: "ssh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						az: {
							_desired: "azb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						et: {
							_desired: "vro",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "ffm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fub",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fue",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fuf",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fuh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fui",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fuq",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ff: {
							_desired: "fuv",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						gn: {
							_desired: "gnw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						gn: {
							_desired: "gui",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						gn: {
							_desired: "gun",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						gn: {
							_desired: "nhd",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						iu: {
							_desired: "ikt",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "enb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "eyo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "niq",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "oki",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "pko",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "sgc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "tec",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kln: {
							_desired: "tuy",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kok: {
							_desired: "gom",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						kpe: {
							_desired: "gkp",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "ida",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lkb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lko",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lks",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lri",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lrm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lsm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lto",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lts",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "lwg",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "nle",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "nyd",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						luy: {
							_desired: "rag",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						lv: {
							_desired: "ltg",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "bhr",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "bjq",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "bmm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "bzc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "msh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "skg",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "tdx",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "tkg",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "txy",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "xmv",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mg: {
							_desired: "xmw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						mn: {
							_desired: "mvf",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "bjn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "btj",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "bve",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "bvu",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "coa",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "dup",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "hji",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "id",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "jak",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "jax",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "kvb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "kvr",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "kxd",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "lce",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "lcf",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "liw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "max",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "meo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "mfa",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "mfb",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "min",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "mqg",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "msi",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "mui",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "orn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "ors",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "pel",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "pse",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "tmw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "urk",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "vkk",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "vkt",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "xmm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "zlm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ms: {
							_desired: "zmi",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ne: {
							_desired: "dty",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						om: {
							_desired: "gax",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						om: {
							_desired: "hae",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						om: {
							_desired: "orc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						or: {
							_desired: "spv",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ps: {
							_desired: "pbt",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						ps: {
							_desired: "pst",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qub",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qud",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "quf",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qug",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "quh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "quk",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qul",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qup",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qur",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qus",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "quw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qux",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "quy",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qva",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qve",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvi",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvj",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvl",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvm",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvp",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvs",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qvz",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qwa",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qwc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qwh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qws",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxa",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxl",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxp",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxr",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxt",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxu",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						qu: {
							_desired: "qxw",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						sc: {
							_desired: "sdc",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						sc: {
							_desired: "sdn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						sc: {
							_desired: "sro",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						sq: {
							_desired: "aae",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						sq: {
							_desired: "aat",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						sq: {
							_desired: "aln",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						syr: {
							_desired: "aii",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						uz: {
							_desired: "uzs",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						yi: {
							_desired: "yih",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "cdo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "cjy",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "cpx",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "czh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "czo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "gan",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "hak",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "hsn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "lzh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "mnp",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "nan",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "wuu",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						zh: {
							_desired: "yue",
							_distance: "10",
							_oneway: "true",
						},
					},
					{ "*": { _desired: "*", _distance: "80" } },
					{
						"en-Latn": {
							_desired: "am-Ethi",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"ru-Cyrl": {
							_desired: "az-Latn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "bn-Beng",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"zh-Hans": {
							_desired: "bo-Tibt",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"ru-Cyrl": {
							_desired: "hy-Armn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ka-Geor",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "km-Khmr",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "kn-Knda",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "lo-Laoo",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ml-Mlym",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "my-Mymr",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ne-Deva",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "or-Orya",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "pa-Guru",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ps-Arab",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "sd-Arab",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "si-Sinh",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ta-Taml",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "te-Telu",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ti-Ethi",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"ru-Cyrl": {
							_desired: "tk-Latn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "ur-Arab",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"ru-Cyrl": {
							_desired: "uz-Latn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"en-Latn": {
							_desired: "yi-Hebr",
							_distance: "10",
							_oneway: "true",
						},
					},
					{ "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
					{
						"zh-Hans": {
							_desired: "za-Latn",
							_distance: "10",
							_oneway: "true",
						},
					},
					{
						"zh-Hans": {
							_desired: "zh-Hani",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"zh-Hant": {
							_desired: "zh-Hani",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"ar-Arab": {
							_desired: "ar-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"bn-Beng": {
							_desired: "bn-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"gu-Gujr": {
							_desired: "gu-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"hi-Deva": {
							_desired: "hi-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"kn-Knda": {
							_desired: "kn-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"ml-Mlym": {
							_desired: "ml-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"mr-Deva": {
							_desired: "mr-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"ta-Taml": {
							_desired: "ta-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"te-Telu": {
							_desired: "te-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"zh-Hans": {
							_desired: "zh-Latn",
							_distance: "20",
							_oneway: "true",
						},
					},
					{
						"ja-Jpan": {
							_desired: "ja-Latn",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ja-Jpan": {
							_desired: "ja-Hani",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ja-Jpan": {
							_desired: "ja-Hira",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ja-Jpan": {
							_desired: "ja-Kana",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ja-Jpan": {
							_desired: "ja-Hrkt",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ja-Hrkt": {
							_desired: "ja-Hira",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ja-Hrkt": {
							_desired: "ja-Kana",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ko-Kore": {
							_desired: "ko-Hani",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ko-Kore": {
							_desired: "ko-Hang",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ko-Kore": {
							_desired: "ko-Jamo",
							_distance: "5",
							_oneway: "true",
						},
					},
					{
						"ko-Hang": {
							_desired: "ko-Jamo",
							_distance: "5",
							_oneway: "true",
						},
					},
					{ "*-*": { _desired: "*-*", _distance: "50" } },
					{
						"ar-*-$maghreb": {
							_desired: "ar-*-$maghreb",
							_distance: "4",
						},
					},
					{
						"ar-*-$!maghreb": {
							_desired: "ar-*-$!maghreb",
							_distance: "4",
						},
					},
					{ "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
					{
						"en-*-$enUS": {
							_desired: "en-*-$enUS",
							_distance: "4",
						},
					},
					{ "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } },
					{
						"en-*-$!enUS": {
							_desired: "en-*-$!enUS",
							_distance: "4",
						},
					},
					{ "en-*-*": { _desired: "en-*-*", _distance: "5" } },
					{
						"es-*-$americas": {
							_desired: "es-*-$americas",
							_distance: "4",
						},
					},
					{
						"es-*-$!americas": {
							_desired: "es-*-$!americas",
							_distance: "4",
						},
					},
					{ "es-*-*": { _desired: "es-*-*", _distance: "5" } },
					{
						"pt-*-$americas": {
							_desired: "pt-*-$americas",
							_distance: "4",
						},
					},
					{
						"pt-*-$!americas": {
							_desired: "pt-*-$!americas",
							_distance: "4",
						},
					},
					{ "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
					{
						"zh-Hant-$cnsar": {
							_desired: "zh-Hant-$cnsar",
							_distance: "4",
						},
					},
					{
						"zh-Hant-$!cnsar": {
							_desired: "zh-Hant-$!cnsar",
							_distance: "4",
						},
					},
					{ "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } },
					{ "*-*-*": { _desired: "*-*-*", _distance: "4" } },
				],
			},
		},
	},
	Vr = {
		"001": [
			"001",
			"001-status-grouping",
			"002",
			"005",
			"009",
			"011",
			"013",
			"014",
			"015",
			"017",
			"018",
			"019",
			"021",
			"029",
			"030",
			"034",
			"035",
			"039",
			"053",
			"054",
			"057",
			"061",
			"142",
			"143",
			"145",
			"150",
			"151",
			"154",
			"155",
			"AC",
			"AD",
			"AE",
			"AF",
			"AG",
			"AI",
			"AL",
			"AM",
			"AO",
			"AQ",
			"AR",
			"AS",
			"AT",
			"AU",
			"AW",
			"AX",
			"AZ",
			"BA",
			"BB",
			"BD",
			"BE",
			"BF",
			"BG",
			"BH",
			"BI",
			"BJ",
			"BL",
			"BM",
			"BN",
			"BO",
			"BQ",
			"BR",
			"BS",
			"BT",
			"BV",
			"BW",
			"BY",
			"BZ",
			"CA",
			"CC",
			"CD",
			"CF",
			"CG",
			"CH",
			"CI",
			"CK",
			"CL",
			"CM",
			"CN",
			"CO",
			"CP",
			"CQ",
			"CR",
			"CU",
			"CV",
			"CW",
			"CX",
			"CY",
			"CZ",
			"DE",
			"DG",
			"DJ",
			"DK",
			"DM",
			"DO",
			"DZ",
			"EA",
			"EC",
			"EE",
			"EG",
			"EH",
			"ER",
			"ES",
			"ET",
			"EU",
			"EZ",
			"FI",
			"FJ",
			"FK",
			"FM",
			"FO",
			"FR",
			"GA",
			"GB",
			"GD",
			"GE",
			"GF",
			"GG",
			"GH",
			"GI",
			"GL",
			"GM",
			"GN",
			"GP",
			"GQ",
			"GR",
			"GS",
			"GT",
			"GU",
			"GW",
			"GY",
			"HK",
			"HM",
			"HN",
			"HR",
			"HT",
			"HU",
			"IC",
			"ID",
			"IE",
			"IL",
			"IM",
			"IN",
			"IO",
			"IQ",
			"IR",
			"IS",
			"IT",
			"JE",
			"JM",
			"JO",
			"JP",
			"KE",
			"KG",
			"KH",
			"KI",
			"KM",
			"KN",
			"KP",
			"KR",
			"KW",
			"KY",
			"KZ",
			"LA",
			"LB",
			"LC",
			"LI",
			"LK",
			"LR",
			"LS",
			"LT",
			"LU",
			"LV",
			"LY",
			"MA",
			"MC",
			"MD",
			"ME",
			"MF",
			"MG",
			"MH",
			"MK",
			"ML",
			"MM",
			"MN",
			"MO",
			"MP",
			"MQ",
			"MR",
			"MS",
			"MT",
			"MU",
			"MV",
			"MW",
			"MX",
			"MY",
			"MZ",
			"NA",
			"NC",
			"NE",
			"NF",
			"NG",
			"NI",
			"NL",
			"NO",
			"NP",
			"NR",
			"NU",
			"NZ",
			"OM",
			"PA",
			"PE",
			"PF",
			"PG",
			"PH",
			"PK",
			"PL",
			"PM",
			"PN",
			"PR",
			"PS",
			"PT",
			"PW",
			"PY",
			"QA",
			"QO",
			"RE",
			"RO",
			"RS",
			"RU",
			"RW",
			"SA",
			"SB",
			"SC",
			"SD",
			"SE",
			"SG",
			"SH",
			"SI",
			"SJ",
			"SK",
			"SL",
			"SM",
			"SN",
			"SO",
			"SR",
			"SS",
			"ST",
			"SV",
			"SX",
			"SY",
			"SZ",
			"TA",
			"TC",
			"TD",
			"TF",
			"TG",
			"TH",
			"TJ",
			"TK",
			"TL",
			"TM",
			"TN",
			"TO",
			"TR",
			"TT",
			"TV",
			"TW",
			"TZ",
			"UA",
			"UG",
			"UM",
			"UN",
			"US",
			"UY",
			"UZ",
			"VA",
			"VC",
			"VE",
			"VG",
			"VI",
			"VN",
			"VU",
			"WF",
			"WS",
			"XK",
			"YE",
			"YT",
			"ZA",
			"ZM",
			"ZW",
		],
		"002": [
			"002",
			"002-status-grouping",
			"011",
			"014",
			"015",
			"017",
			"018",
			"202",
			"AO",
			"BF",
			"BI",
			"BJ",
			"BW",
			"CD",
			"CF",
			"CG",
			"CI",
			"CM",
			"CV",
			"DJ",
			"DZ",
			"EA",
			"EG",
			"EH",
			"ER",
			"ET",
			"GA",
			"GH",
			"GM",
			"GN",
			"GQ",
			"GW",
			"IC",
			"IO",
			"KE",
			"KM",
			"LR",
			"LS",
			"LY",
			"MA",
			"MG",
			"ML",
			"MR",
			"MU",
			"MW",
			"MZ",
			"NA",
			"NE",
			"NG",
			"RE",
			"RW",
			"SC",
			"SD",
			"SH",
			"SL",
			"SN",
			"SO",
			"SS",
			"ST",
			"SZ",
			"TD",
			"TF",
			"TG",
			"TN",
			"TZ",
			"UG",
			"YT",
			"ZA",
			"ZM",
			"ZW",
		],
		"003": [
			"003",
			"013",
			"021",
			"029",
			"AG",
			"AI",
			"AW",
			"BB",
			"BL",
			"BM",
			"BQ",
			"BS",
			"BZ",
			"CA",
			"CR",
			"CU",
			"CW",
			"DM",
			"DO",
			"GD",
			"GL",
			"GP",
			"GT",
			"HN",
			"HT",
			"JM",
			"KN",
			"KY",
			"LC",
			"MF",
			"MQ",
			"MS",
			"MX",
			"NI",
			"PA",
			"PM",
			"PR",
			"SV",
			"SX",
			"TC",
			"TT",
			"US",
			"VC",
			"VG",
			"VI",
		],
		"005": [
			"005",
			"AR",
			"BO",
			"BR",
			"BV",
			"CL",
			"CO",
			"EC",
			"FK",
			"GF",
			"GS",
			"GY",
			"PE",
			"PY",
			"SR",
			"UY",
			"VE",
		],
		"009": [
			"009",
			"053",
			"054",
			"057",
			"061",
			"AC",
			"AQ",
			"AS",
			"AU",
			"CC",
			"CK",
			"CP",
			"CX",
			"DG",
			"FJ",
			"FM",
			"GU",
			"HM",
			"KI",
			"MH",
			"MP",
			"NC",
			"NF",
			"NR",
			"NU",
			"NZ",
			"PF",
			"PG",
			"PN",
			"PW",
			"QO",
			"SB",
			"TA",
			"TK",
			"TO",
			"TV",
			"UM",
			"VU",
			"WF",
			"WS",
		],
		"011": [
			"011",
			"BF",
			"BJ",
			"CI",
			"CV",
			"GH",
			"GM",
			"GN",
			"GW",
			"LR",
			"ML",
			"MR",
			"NE",
			"NG",
			"SH",
			"SL",
			"SN",
			"TG",
		],
		"013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
		"014": [
			"014",
			"BI",
			"DJ",
			"ER",
			"ET",
			"IO",
			"KE",
			"KM",
			"MG",
			"MU",
			"MW",
			"MZ",
			"RE",
			"RW",
			"SC",
			"SO",
			"SS",
			"TF",
			"TZ",
			"UG",
			"YT",
			"ZM",
			"ZW",
		],
		"015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
		"017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
		"018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
		"019": [
			"003",
			"005",
			"013",
			"019",
			"019-status-grouping",
			"021",
			"029",
			"419",
			"AG",
			"AI",
			"AR",
			"AW",
			"BB",
			"BL",
			"BM",
			"BO",
			"BQ",
			"BR",
			"BS",
			"BV",
			"BZ",
			"CA",
			"CL",
			"CO",
			"CR",
			"CU",
			"CW",
			"DM",
			"DO",
			"EC",
			"FK",
			"GD",
			"GF",
			"GL",
			"GP",
			"GS",
			"GT",
			"GY",
			"HN",
			"HT",
			"JM",
			"KN",
			"KY",
			"LC",
			"MF",
			"MQ",
			"MS",
			"MX",
			"NI",
			"PA",
			"PE",
			"PM",
			"PR",
			"PY",
			"SR",
			"SV",
			"SX",
			"TC",
			"TT",
			"US",
			"UY",
			"VC",
			"VE",
			"VG",
			"VI",
		],
		"021": ["021", "BM", "CA", "GL", "PM", "US"],
		"029": [
			"029",
			"AG",
			"AI",
			"AW",
			"BB",
			"BL",
			"BQ",
			"BS",
			"CU",
			"CW",
			"DM",
			"DO",
			"GD",
			"GP",
			"HT",
			"JM",
			"KN",
			"KY",
			"LC",
			"MF",
			"MQ",
			"MS",
			"PR",
			"SX",
			"TC",
			"TT",
			"VC",
			"VG",
			"VI",
		],
		"030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
		"034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
		"035": [
			"035",
			"BN",
			"ID",
			"KH",
			"LA",
			"MM",
			"MY",
			"PH",
			"SG",
			"TH",
			"TL",
			"VN",
		],
		"039": [
			"039",
			"AD",
			"AL",
			"BA",
			"ES",
			"GI",
			"GR",
			"HR",
			"IT",
			"ME",
			"MK",
			"MT",
			"PT",
			"RS",
			"SI",
			"SM",
			"VA",
			"XK",
		],
		"053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
		"054": ["054", "FJ", "NC", "PG", "SB", "VU"],
		"057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
		"061": [
			"061",
			"AS",
			"CK",
			"NU",
			"PF",
			"PN",
			"TK",
			"TO",
			"TV",
			"WF",
			"WS",
		],
		142: [
			"030",
			"034",
			"035",
			"142",
			"143",
			"145",
			"AE",
			"AF",
			"AM",
			"AZ",
			"BD",
			"BH",
			"BN",
			"BT",
			"CN",
			"CY",
			"GE",
			"HK",
			"ID",
			"IL",
			"IN",
			"IQ",
			"IR",
			"JO",
			"JP",
			"KG",
			"KH",
			"KP",
			"KR",
			"KW",
			"KZ",
			"LA",
			"LB",
			"LK",
			"MM",
			"MN",
			"MO",
			"MV",
			"MY",
			"NP",
			"OM",
			"PH",
			"PK",
			"PS",
			"QA",
			"SA",
			"SG",
			"SY",
			"TH",
			"TJ",
			"TL",
			"TM",
			"TR",
			"TW",
			"UZ",
			"VN",
			"YE",
		],
		143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
		145: [
			"145",
			"AE",
			"AM",
			"AZ",
			"BH",
			"CY",
			"GE",
			"IL",
			"IQ",
			"JO",
			"KW",
			"LB",
			"OM",
			"PS",
			"QA",
			"SA",
			"SY",
			"TR",
			"YE",
		],
		150: [
			"039",
			"150",
			"151",
			"154",
			"155",
			"AD",
			"AL",
			"AT",
			"AX",
			"BA",
			"BE",
			"BG",
			"BY",
			"CH",
			"CQ",
			"CZ",
			"DE",
			"DK",
			"EE",
			"ES",
			"FI",
			"FO",
			"FR",
			"GB",
			"GG",
			"GI",
			"GR",
			"HR",
			"HU",
			"IE",
			"IM",
			"IS",
			"IT",
			"JE",
			"LI",
			"LT",
			"LU",
			"LV",
			"MC",
			"MD",
			"ME",
			"MK",
			"MT",
			"NL",
			"NO",
			"PL",
			"PT",
			"RO",
			"RS",
			"RU",
			"SE",
			"SI",
			"SJ",
			"SK",
			"SM",
			"UA",
			"VA",
			"XK",
		],
		151: [
			"151",
			"BG",
			"BY",
			"CZ",
			"HU",
			"MD",
			"PL",
			"RO",
			"RU",
			"SK",
			"UA",
		],
		154: [
			"154",
			"AX",
			"CQ",
			"DK",
			"EE",
			"FI",
			"FO",
			"GB",
			"GG",
			"IE",
			"IM",
			"IS",
			"JE",
			"LT",
			"LV",
			"NO",
			"SE",
			"SJ",
		],
		155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
		202: [
			"011",
			"014",
			"017",
			"018",
			"202",
			"AO",
			"BF",
			"BI",
			"BJ",
			"BW",
			"CD",
			"CF",
			"CG",
			"CI",
			"CM",
			"CV",
			"DJ",
			"ER",
			"ET",
			"GA",
			"GH",
			"GM",
			"GN",
			"GQ",
			"GW",
			"IO",
			"KE",
			"KM",
			"LR",
			"LS",
			"MG",
			"ML",
			"MR",
			"MU",
			"MW",
			"MZ",
			"NA",
			"NE",
			"NG",
			"RE",
			"RW",
			"SC",
			"SH",
			"SL",
			"SN",
			"SO",
			"SS",
			"ST",
			"SZ",
			"TD",
			"TF",
			"TG",
			"TZ",
			"UG",
			"YT",
			"ZA",
			"ZM",
			"ZW",
		],
		419: [
			"005",
			"013",
			"029",
			"419",
			"AG",
			"AI",
			"AR",
			"AW",
			"BB",
			"BL",
			"BO",
			"BQ",
			"BR",
			"BS",
			"BV",
			"BZ",
			"CL",
			"CO",
			"CR",
			"CU",
			"CW",
			"DM",
			"DO",
			"EC",
			"FK",
			"GD",
			"GF",
			"GP",
			"GS",
			"GT",
			"GY",
			"HN",
			"HT",
			"JM",
			"KN",
			"KY",
			"LC",
			"MF",
			"MQ",
			"MS",
			"MX",
			"NI",
			"PA",
			"PE",
			"PR",
			"PY",
			"SR",
			"SV",
			"SX",
			"TC",
			"TT",
			"UY",
			"VC",
			"VE",
			"VG",
			"VI",
		],
		EU: [
			"AT",
			"BE",
			"BG",
			"CY",
			"CZ",
			"DE",
			"DK",
			"EE",
			"ES",
			"EU",
			"FI",
			"FR",
			"GR",
			"HR",
			"HU",
			"IE",
			"IT",
			"LT",
			"LU",
			"LV",
			"MT",
			"NL",
			"PL",
			"PT",
			"RO",
			"SE",
			"SI",
			"SK",
		],
		EZ: [
			"AT",
			"BE",
			"CY",
			"DE",
			"EE",
			"ES",
			"EZ",
			"FI",
			"FR",
			"GR",
			"IE",
			"IT",
			"LT",
			"LU",
			"LV",
			"MT",
			"NL",
			"PT",
			"SI",
			"SK",
		],
		QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
		UN: [
			"AD",
			"AE",
			"AF",
			"AG",
			"AL",
			"AM",
			"AO",
			"AR",
			"AT",
			"AU",
			"AZ",
			"BA",
			"BB",
			"BD",
			"BE",
			"BF",
			"BG",
			"BH",
			"BI",
			"BJ",
			"BN",
			"BO",
			"BR",
			"BS",
			"BT",
			"BW",
			"BY",
			"BZ",
			"CA",
			"CD",
			"CF",
			"CG",
			"CH",
			"CI",
			"CL",
			"CM",
			"CN",
			"CO",
			"CR",
			"CU",
			"CV",
			"CY",
			"CZ",
			"DE",
			"DJ",
			"DK",
			"DM",
			"DO",
			"DZ",
			"EC",
			"EE",
			"EG",
			"ER",
			"ES",
			"ET",
			"FI",
			"FJ",
			"FM",
			"FR",
			"GA",
			"GB",
			"GD",
			"GE",
			"GH",
			"GM",
			"GN",
			"GQ",
			"GR",
			"GT",
			"GW",
			"GY",
			"HN",
			"HR",
			"HT",
			"HU",
			"ID",
			"IE",
			"IL",
			"IN",
			"IQ",
			"IR",
			"IS",
			"IT",
			"JM",
			"JO",
			"JP",
			"KE",
			"KG",
			"KH",
			"KI",
			"KM",
			"KN",
			"KP",
			"KR",
			"KW",
			"KZ",
			"LA",
			"LB",
			"LC",
			"LI",
			"LK",
			"LR",
			"LS",
			"LT",
			"LU",
			"LV",
			"LY",
			"MA",
			"MC",
			"MD",
			"ME",
			"MG",
			"MH",
			"MK",
			"ML",
			"MM",
			"MN",
			"MR",
			"MT",
			"MU",
			"MV",
			"MW",
			"MX",
			"MY",
			"MZ",
			"NA",
			"NE",
			"NG",
			"NI",
			"NL",
			"NO",
			"NP",
			"NR",
			"NZ",
			"OM",
			"PA",
			"PE",
			"PG",
			"PH",
			"PK",
			"PL",
			"PT",
			"PW",
			"PY",
			"QA",
			"RO",
			"RS",
			"RU",
			"RW",
			"SA",
			"SB",
			"SC",
			"SD",
			"SE",
			"SG",
			"SI",
			"SK",
			"SL",
			"SM",
			"SN",
			"SO",
			"SR",
			"SS",
			"ST",
			"SV",
			"SY",
			"SZ",
			"TD",
			"TG",
			"TH",
			"TJ",
			"TL",
			"TM",
			"TN",
			"TO",
			"TR",
			"TT",
			"TV",
			"TZ",
			"UA",
			"UG",
			"UN",
			"US",
			"UY",
			"UZ",
			"VC",
			"VE",
			"VN",
			"VU",
			"WS",
			"YE",
			"ZA",
			"ZM",
			"ZW",
		],
	},
	Ie = /-u(?:-[0-9a-z]{2,8})+/gi;
function Vu(u, D, e) {
	if ((e === void 0 && (e = Error), !u)) throw new e(D);
}
var Zr = 838,
	$0;
function Kr() {
	var u, D;
	if (!$0) {
		var e =
				(D =
					(u = k0.supplemental.languageMatching["written-new"][0]) ===
						null || u === void 0
						? void 0
						: u.paradigmLocales) === null || D === void 0
					? void 0
					: D._locales.split(" "),
			F = k0.supplemental.languageMatching["written-new"].slice(1, 5),
			A = k0.supplemental.languageMatching["written-new"].slice(5),
			C = A.map(function (E) {
				var r = Object.keys(E)[0],
					t = E[r];
				return {
					supported: r,
					desired: t._desired,
					distance: +t._distance,
					oneway: t.oneway === "true",
				};
			}, {});
		$0 = {
			matches: C,
			matchVariables: F.reduce(function (E, r) {
				var t = Object.keys(r)[0],
					n = r[t];
				return (E[t.slice(1)] = n._value.split("+")), E;
			}, {}),
			paradigmLocales: Pu(
				Pu([], e, !0),
				e.map(function (E) {
					return new Intl.Locale(E.replace(/_/g, "-"))
						.maximize()
						.toString();
				}),
				!0
			),
		};
	}
	return $0;
}
function WD(u, D, e) {
	var F = D.split("-"),
		A = F[0],
		C = F[1],
		E = F[2],
		r = !0;
	if (E && E[0] === "$") {
		var t = E[1] !== "!",
			n = t ? e[E.slice(1)] : e[E.slice(2)],
			i = n
				.map(function (B) {
					return Vr[B] || [B];
				})
				.reduce(function (B, a) {
					return Pu(Pu([], B, !0), a, !0);
				}, []);
		r && (r = i.indexOf(u.region || "") > -1 == t);
	} else r && (r = u.region ? E === "*" || E === u.region : !0);
	return (
		r && (r = u.script ? C === "*" || C === u.script : !0),
		r && (r = u.language ? A === "*" || A === u.language : !0),
		r
	);
}
function EF(u) {
	return [u.language, u.script, u.region].filter(Boolean).join("-");
}
function j0(u, D, e) {
	for (var F = 0, A = e.matches; F < A.length; F++) {
		var C = A[F],
			E =
				WD(u, C.desired, e.matchVariables) &&
				WD(D, C.supported, e.matchVariables);
		if (
			(!C.oneway &&
				!E &&
				(E =
					WD(u, C.supported, e.matchVariables) &&
					WD(D, C.desired, e.matchVariables)),
			E)
		) {
			var r = C.distance * 10;
			return e.paradigmLocales.indexOf(EF(u)) > -1 !=
				e.paradigmLocales.indexOf(EF(D)) > -1
				? r - 1
				: r;
		}
	}
	throw new Error("No matching distance found");
}
function Wr(u, D) {
	var e = new Intl.Locale(u).maximize(),
		F = new Intl.Locale(D).maximize(),
		A = {
			language: e.language,
			script: e.script || "",
			region: e.region || "",
		},
		C = {
			language: F.language,
			script: F.script || "",
			region: F.region || "",
		},
		E = 0,
		r = Kr();
	return (
		A.language !== C.language &&
			(E += j0(
				{ language: e.language, script: "", region: "" },
				{ language: F.language, script: "", region: "" },
				r
			)),
		A.script !== C.script &&
			(E += j0(
				{ language: e.language, script: A.script, region: "" },
				{ language: F.language, script: C.script, region: "" },
				r
			)),
		A.region !== C.region && (E += j0(A, C, r)),
		E
	);
}
function Jr(u, D, e) {
	e === void 0 && (e = Zr);
	var F = 1 / 0,
		A = { matchedDesiredLocale: "", distances: {} };
	return (
		u.forEach(function (C, E) {
			A.distances[C] || (A.distances[C] = {}),
				D.forEach(function (r) {
					var t = Wr(C, r) + 0 + E * 40;
					(A.distances[C][r] = t),
						t < F &&
							((F = t),
							(A.matchedDesiredLocale = C),
							(A.matchedSupportedLocale = r));
				});
		}),
		F >= e &&
			((A.matchedDesiredLocale = void 0),
			(A.matchedSupportedLocale = void 0)),
		A
	);
}
function Yr(u, D, e) {
	var F,
		A,
		C = [],
		E = D.reduce(function (t, n) {
			var i = n.replace(Ie, "");
			return C.push(i), (t[i] = n), t;
		}, {}),
		r = Jr(C, u);
	return (
		r.matchedSupportedLocale &&
			r.matchedDesiredLocale &&
			((F = r.matchedSupportedLocale),
			(A =
				E[r.matchedDesiredLocale].slice(
					r.matchedDesiredLocale.length
				) || void 0)),
		F ? { locale: F, extension: A } : { locale: e() }
	);
}
function Qr(u, D) {
	var e = D.toLowerCase();
	Vu(u !== void 0, "ukey must be defined");
	var F = e;
	return F;
}
function rF(u) {
	return Intl.getCanonicalLocales(u)[0];
}
function Xr(u, D, e) {
	Vu(
		u.indexOf("-u-") === -1,
		"Expected locale to not have a Unicode locale extension"
	);
	for (var F = "-u", A = 0, C = D; A < C.length; A++) {
		var E = C[A];
		F += "-".concat(E);
	}
	for (var r = 0, t = e; r < t.length; r++) {
		var n = t[r],
			i = n.key,
			B = n.value;
		(F += "-".concat(i)), B !== "" && (F += "-".concat(B));
	}
	if (F === "-u") return rF(u);
	var a = u.indexOf("-x-"),
		s;
	if (a === -1) s = u + F;
	else {
		var d = u.slice(0, a),
			o = u.slice(a);
		s = d + F + o;
	}
	return rF(s);
}
function F1(u, D) {
	for (var e = D; ; ) {
		if (u.indexOf(e) > -1) return e;
		var F = e.lastIndexOf("-");
		if (!~F) return;
		F >= 2 && e[F - 2] === "-" && (F -= 2), (e = e.slice(0, F));
	}
}
function un(u, D, e) {
	for (var F = { locale: "" }, A = 0, C = D; A < C.length; A++) {
		var E = C[A],
			r = E.replace(Ie, ""),
			t = F1(u, r);
		if (t)
			return (
				(F.locale = t),
				E !== r && (F.extension = E.slice(r.length, E.length)),
				F
			);
	}
	return (F.locale = e()), F;
}
function Dn(u) {
	Vu(u === u.toLowerCase(), "Expected extension to be lowercase"),
		Vu(
			u.slice(0, 3) === "-u-",
			"Expected extension to be a Unicode locale extension"
		);
	for (var D = [], e = [], F, A = u.length, C = 3; C < A; ) {
		var E = u.indexOf("-", C),
			r = void 0;
		E === -1 ? (r = A - C) : (r = E - C);
		var t = u.slice(C, C + r);
		Vu(r >= 2, "Expected a subtag to have at least 2 characters"),
			F === void 0 && r != 2
				? D.indexOf(t) === -1 && D.push(t)
				: r === 2
				? ((F = { key: t, value: "" }),
				  e.find(function (n) {
						return n.key === (F == null ? void 0 : F.key);
				  }) === void 0 && e.push(F))
				: (F == null ? void 0 : F.value) === ""
				? (F.value = t)
				: (Vu(F !== void 0, "Expected keyword to be defined"),
				  (F.value += "-" + t)),
			(C += r + 1);
	}
	return { attributes: D, keywords: e };
}
function Pe(u, D, e, F, A, C) {
	var E,
		r = e.localeMatcher,
		t;
	r === "lookup"
		? (t = un(Array.from(u), D, C))
		: (t = Yr(Array.from(u), D, C)),
		t == null && (t = { locale: C(), extension: "" });
	var n = t.locale,
		i = A[n],
		B = { locale: "en", dataLocale: n },
		a,
		s;
	t.extension ? ((a = Dn(t.extension)), (s = a.keywords)) : (s = []);
	for (
		var d = [],
			o = function (h) {
				var y =
					(E = i == null ? void 0 : i[h]) !== null && E !== void 0
						? E
						: [];
				Vu(
					Array.isArray(y),
					"keyLocaleData for ".concat(h, " must be an array")
				);
				var N = y[0];
				Vu(
					N === void 0 || typeof N == "string",
					"value must be a string or undefined"
				);
				var p = void 0,
					P = s.find(function (Du) {
						return Du.key === h;
					});
				if (P) {
					var U = P.value;
					U !== ""
						? y.indexOf(U) > -1 &&
						  ((N = U), (p = { key: h, value: N }))
						: y.indexOf("true") > -1 &&
						  ((N = "true"), (p = { key: h, value: N }));
				}
				var H = e[h];
				if (
					(Vu(
						H == null || typeof H == "string",
						"optionsValue must be a string or undefined"
					),
					typeof H == "string")
				) {
					var k = h.toLowerCase();
					(H = Qr(k, H)), H === "" && (H = "true");
				}
				H !== N && y.indexOf(H) > -1 && ((N = H), (p = void 0)),
					p && d.push(p),
					(B[h] = N);
			},
			_ = 0,
			c = F;
		_ < c.length;
		_++
	) {
		var g = c[_];
		o(g);
	}
	var m = [];
	return d.length > 0 && ((m = []), (n = Xr(n, m, d))), (B.locale = n), B;
}
function Ce(u, D) {
	for (var e = [], F = 0, A = D; F < A.length; F++) {
		var C = A[F],
			E = C.replace(Ie, ""),
			r = F1(u, E);
		r && e.push(r);
	}
	return e;
}
function en(u, D, e, F) {
	return Pe(
		D,
		zr(u),
		{ localeMatcher: (F == null ? void 0 : F.algorithm) || "best fit" },
		[],
		{},
		function () {
			return e;
		}
	).locale;
}
const Fn = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			LookupSupportedLocales: Ce,
			ResolveLocale: Pe,
			match: en,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
var nF = new Set([
	1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3,
]);
function C1(u, D, e, F, A) {
	var C = ue(D, "minimumIntegerDigits", 1, 21, 1),
		E = D.minimumFractionDigits,
		r = D.maximumFractionDigits,
		t = D.minimumSignificantDigits,
		n = D.maximumSignificantDigits;
	u.minimumIntegerDigits = C;
	var i = ue(D, "roundingIncrement", 1, 5e3, 1);
	Fu(
		nF.has(i),
		"Invalid rounding increment value: "
			.concat(
				i,
				`.
Valid values are `
			)
			.concat(Array.from(nF).join(", "), ".")
	);
	var B = ou(
			D,
			"roundingMode",
			"string",
			[
				"ceil",
				"floor",
				"expand",
				"trunc",
				"halfCeil",
				"halfFloor",
				"halfExpand",
				"halfTrunc",
				"halfEven",
			],
			"halfExpand"
		),
		a = ou(
			D,
			"roundingPriority",
			"string",
			["auto", "morePrecision", "lessPrecision"],
			"auto"
		),
		s = ou(
			D,
			"trailingZeroDisplay",
			"string",
			["auto", "stripIfInteger"],
			"auto"
		);
	i !== 1 && (F = e),
		(u.roundingIncrement = i),
		(u.roundingMode = B),
		(u.trailingZeroDisplay = s);
	var d = t !== void 0 || n !== void 0,
		o = E !== void 0 || r !== void 0,
		_ = !0,
		c = !0;
	if (
		(a === "auto" && ((_ = d), (d || (!o && A === "compact")) && (c = !1)),
		_ &&
			(d
				? ((u.minimumSignificantDigits = ND(t, 1, 21, 1)),
				  (u.maximumSignificantDigits = ND(
						n,
						u.minimumSignificantDigits,
						21,
						21
				  )))
				: ((u.minimumSignificantDigits = 1),
				  (u.maximumSignificantDigits = 21))),
		c)
	)
		if (o) {
			if (
				((E = ND(E, 0, 100, void 0)),
				(r = ND(r, 0, 100, void 0)),
				E === void 0)
			)
				Fu(r !== void 0, "maximumFractionDigits must be defined"),
					(E = Math.min(e, r));
			else if (r === void 0) r = Math.max(F, E);
			else if (E > r)
				throw new RangeError(
					"Invalid range, ".concat(E, " > ").concat(r)
				);
			(u.minimumFractionDigits = E), (u.maximumFractionDigits = r);
		} else (u.minimumFractionDigits = e), (u.maximumFractionDigits = F);
	!_ && !c
		? ((u.minimumFractionDigits = 0),
		  (u.maximumFractionDigits = 0),
		  (u.minimumSignificantDigits = 1),
		  (u.maximumSignificantDigits = 2),
		  (u.roundingType = "morePrecision"),
		  (u.roundingPriority = "morePrecision"))
		: a === "morePrecision"
		? ((u.roundingType = "morePrecision"),
		  (u.roundingPriority = "morePrecision"))
		: a === "lessPrecision"
		? ((u.roundingType = "lessPrecision"),
		  (u.roundingPriority = "lessPrecision"))
		: d
		? ((u.roundingType = "significantDigits"),
		  (u.roundingPriority = "auto"))
		: ((u.roundingType = "fractionDigits"), (u.roundingPriority = "auto")),
		i !== 1 &&
			(Fu(
				u.roundingType === "fractionDigits",
				"Invalid roundingType",
				TypeError
			),
			Fu(
				u.maximumFractionDigits === u.minimumFractionDigits,
				"With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.",
				RangeError
			));
}
function A1(u, D) {
	D === void 0 && (D = Object.create(null));
	var e = ou(
		D,
		"style",
		"string",
		["decimal", "percent", "currency", "unit"],
		"decimal"
	);
	u.style = e;
	var F = ou(D, "currency", "string", void 0, void 0);
	Fu(F === void 0 || KC(F), "Malformed currency code", RangeError),
		Fu(
			e !== "currency" || F !== void 0,
			"currency cannot be undefined",
			TypeError
		);
	var A = ou(
			D,
			"currencyDisplay",
			"string",
			["code", "symbol", "narrowSymbol", "name"],
			"symbol"
		),
		C = ou(
			D,
			"currencySign",
			"string",
			["standard", "accounting"],
			"standard"
		),
		E = ou(D, "unit", "string", void 0, void 0);
	Fu(
		E === void 0 || WC(E),
		"Invalid unit argument for Intl.NumberFormat()",
		RangeError
	),
		Fu(e !== "unit" || E !== void 0, "unit cannot be undefined", TypeError);
	var r = ou(
		D,
		"unitDisplay",
		"string",
		["short", "narrow", "long"],
		"short"
	);
	e === "currency" &&
		((u.currency = F.toUpperCase()),
		(u.currencyDisplay = A),
		(u.currencySign = C)),
		e === "unit" && ((u.unit = E), (u.unitDisplay = r));
}
function Cn(u, D, e, F) {
	var A = F.getInternalSlots,
		C = F.localeData,
		E = F.availableLocales,
		r = F.numberingSystemNames,
		t = F.getDefaultLocale,
		n = F.currencyDigitsData,
		i = fC(D),
		B = GC(e),
		a = Object.create(null),
		s = ou(
			B,
			"localeMatcher",
			"string",
			["lookup", "best fit"],
			"best fit"
		);
	a.localeMatcher = s;
	var d = ou(B, "numberingSystem", "string", void 0, void 0);
	if (d !== void 0 && r.indexOf(d) < 0)
		throw RangeError("Invalid numberingSystems: ".concat(d));
	a.nu = d;
	var o = Pe(Array.from(E), i, a, ["nu"], C, t),
		_ = C[o.dataLocale];
	Fu(!!_, "Missing locale data for ".concat(o.dataLocale));
	var c = A(u);
	(c.locale = o.locale),
		(c.dataLocale = o.dataLocale),
		(c.numberingSystem = o.nu),
		(c.dataLocaleData = _),
		A1(c, B);
	var g = c.style,
		m = ou(
			B,
			"notation",
			"string",
			["standard", "scientific", "engineering", "compact"],
			"standard"
		);
	c.notation = m;
	var h, y;
	if (g === "currency" && m === "standard") {
		var N = c.currency,
			p = XC(N, { currencyDigitsData: n });
		(h = p), (y = p);
	} else (h = 0), (y = g === "percent" ? 0 : 3);
	C1(c, B, h, y, m);
	var P = ou(B, "compactDisplay", "string", ["short", "long"], "short"),
		U = "auto";
	m === "compact" && ((c.compactDisplay = P), (U = "min2"));
	var H = HC(B, "useGrouping", ["min2", "auto", "always"], "always", !1, U);
	c.useGrouping = H;
	var k = ou(
		B,
		"signDisplay",
		"string",
		["auto", "never", "always", "exceptZero", "negative"],
		"auto"
	);
	return (c.signDisplay = k), u;
}
function An(u) {
	for (
		var D = [], e = u.indexOf("{"), F = 0, A = 0, C = u.length;
		e < u.length && e > -1;

	)
		(F = u.indexOf("}", e)),
			Fu(F > e, "Invalid pattern ".concat(u)),
			e > A && D.push({ type: "literal", value: u.substring(A, e) }),
			D.push({ type: u.substring(e + 1, F), value: void 0 }),
			(A = F + 1),
			(e = u.indexOf("{", A));
	return A < C && D.push({ type: "literal", value: u.substring(A, C) }), D;
}
function En(u, D, e) {
	var F = "best fit";
	return (
		e !== void 0 &&
			((e = he(e)),
			(F = ou(
				e,
				"localeMatcher",
				"string",
				["lookup", "best fit"],
				"best fit"
			))),
		Ce(Array.from(u), D)
	);
}
(function (u) {
	fe(D, u);
	function D() {
		var e = (u !== null && u.apply(this, arguments)) || this;
		return (e.type = "MISSING_LOCALE_DATA"), e;
	}
	return D;
})(Error);
function rn(u) {
	return u.type === "MISSING_LOCALE_DATA";
}
var Ae;
(function (u) {
	(u.startRange = "startRange"),
		(u.shared = "shared"),
		(u.endRange = "endRange");
})(Ae || (Ae = {}));
function nn(u) {
	var D = Se(u, "number");
	if (typeof D == "bigint") return new j(D);
	if (D === void 0) return new j(NaN);
	if (D === !0) return new j(1);
	if (D === !1) return new j(0);
	if (D === null) return new j(0);
	try {
		return new j(D);
	} catch {
		return new j(NaN);
	}
}
const tn = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				ApplyUnsignedRoundingMode: Me,
				ArrayCreate: IC,
				CanonicalizeLocaleList: fC,
				CanonicalizeTimeZoneName: XA,
				CoerceOptionsToObject: GC,
				CollapseNumberRange: JC,
				ComputeExponent: QC,
				ComputeExponentForMagnitude: De,
				CurrencyDigits: XC,
				DateFromTime: fr,
				Day: ge,
				DayFromYear: xC,
				DayWithinYear: ye,
				DaysInYear: RC,
				FormatApproximately: e1,
				FormatNumeric: Fe,
				FormatNumericRange: Ur,
				FormatNumericRangeToParts: Gr,
				FormatNumericToParts: Hr,
				FormatNumericToString: Te,
				GetNumberOption: ue,
				GetOption: ou,
				GetOptionsObject: wr,
				GetStringOrBooleanOption: HC,
				GetUnsignedRoundingMode: Ne,
				HasOwnProperty: PC,
				HourFromTime: vr,
				InLeapYear: we,
				InitializeNumberFormat: Cn,
				IsSanctionedSimpleUnitIdentifier: D0,
				IsValidTimeZoneName: br,
				IsWellFormedCurrencyCode: KC,
				IsWellFormedUnitIdentifier: WC,
				MinFromTime: mr,
				MonthFromTime: kC,
				OrdinaryHasInstance: gr,
				PartitionNumberPattern: $D,
				PartitionNumberRangePattern: Le,
				PartitionPattern: An,
				get RangePatternType() {
					return Ae;
				},
				SANCTIONED_UNITS: zC,
				SIMPLE_UNITS: ZC,
				SameValue: sr,
				SecFromTime: hr,
				SetNumberFormatDigitOptions: C1,
				SetNumberFormatUnitOptions: A1,
				SupportedLocales: En,
				TimeClip: ar,
				TimeFromYear: cr,
				ToIntlMathematicalValue: nn,
				ToNumber: me,
				ToObject: he,
				ToPrimitive: Se,
				ToRawFixed: d0,
				ToRawPrecision: ee,
				ToString: ve,
				Type: or,
				WeekDay: lr,
				YearFromTime: pe,
				ZERO: GD,
				_formatToParts: D1,
				createDataProperty: Ar,
				createMemoizedDateTimeFormat: rr,
				createMemoizedListFormat: ir,
				createMemoizedLocale: tr,
				createMemoizedNumberFormat: Er,
				createMemoizedPluralRules: nr,
				defineProperty: Cr,
				getInternalSlot: er,
				getMultiInternalSlots: LC,
				invariant: Fu,
				isLiteralPart: Fr,
				isMissingLocaleDataError: rn,
				msFromTime: pr,
				removeUnitNamespace: VC,
				setInternalSlot: TC,
				setMultiInternalSlots: Dr,
			},
			Symbol.toStringTag,
			{ value: "Module" }
		)
	),
	Bn = ce(tn),
	an = ce(Fn);
var SD = {},
	tF;
function sn() {
	return (
		tF ||
			((tF = 1),
			Object.defineProperty(SD, "__esModule", { value: !0 }),
			(SD.SegmentationRules = void 0),
			(SD.SegmentationRules = {
				de: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"Port.",
							"Alt.",
							"Di.",
							"Ges.",
							"frz.",
							"entspr.",
							"Gebr.",
							"erw.",
							"Frl.",
							"Inh.",
							"k.u.k.",
							"Ca.",
							"J.D.",
							"Ausg.",
							"evtl.",
							"So.",
							"i.B.",
							"s.a.",
							"kgl.",
							"Sept.",
							"o.B.",
							"Sa.",
							"ev.",
							"Dez.",
							"am.",
							"i.R.",
							"eigtl.",
							"i.J.",
							"u.U.",
							"G.",
							"z.Hd.",
							"u.A.w.g.",
							"Kl.",
							"Spezif.",
							"Obj.",
							"Ing.",
							"D. h.",
							"Folg.",
							"Akt.",
							"i.A.",
							"Msp.",
							"U.U.",
							"Chr.",
							"R.",
							"Einh.",
							"schwäb.",
							"Vgl.",
							"Aug.",
							"Dipl.-Ing.",
							"W.",
							"B.",
							"U. U.",
							"J.",
							"Fa.",
							"Mo.",
							"n.u.Z.",
							"Op.",
							"Mrd.",
							"e.h.",
							"Hr.",
							"Hrn.",
							"Ztr.",
							"k. u. k.",
							"Bibl.",
							"d.Ä.",
							"b.",
							"M.",
							"i.H.",
							"v.R.w.",
							"o.A.",
							"St.",
							"Dr.",
							"Fn.",
							"Abs.",
							"Rd.",
							"Dtzd.",
							"Jahrh.",
							"Z.",
							"Std.",
							"n. Chr.",
							"möbl.",
							"tägl.",
							"gest.",
							"gesch.",
							"z.B.",
							"Hbf.",
							"Abt.",
							"A.M.",
							"e.Wz.",
							"v.T.",
							"Nov.",
							"z.",
							"Prot.",
							"U.S.",
							"Wg.",
							"u.v.a.",
							"Adr.",
							"App.",
							"ggf.",
							"ggfs.",
							"Jan.",
							"O.",
							"Rel.",
							"od.",
							"Pfd.",
							"a.a.O.",
							"p.Adr.",
							"P.",
							"Gem.",
							"v. Chr.",
							"Art.",
							"z.Z.",
							"S.A.",
							"i.V.",
							"verh.",
							"Ausschl.",
							"m.W.",
							"Dir.",
							"Verf.",
							"Sek.",
							"r.",
							"Chin.",
							"Feb.",
							"Int.",
							"Sep.",
							"Gesch.",
							"schweiz.",
							"Bed.",
							"a.Rh.",
							"jew.",
							"vgl.",
							"a.M.",
							"Str.",
							"exkl.",
							"gek.",
							"Erf.",
							"u.Ä.",
							"ehem.",
							"näml.",
							"u. Z.",
							"v. u. Z.",
							"sog.",
							"C.",
							"Dipl.-Kfm.",
							"mtl.",
							"Hrsg.",
							"Qu.",
							"röm.",
							"u.",
							"U.",
							"Adj.",
							"Kap.",
							"hpts.",
							"a.D.",
							"gedr.",
							"Best.",
							"N.",
							"v.u.Z.",
							"Phys.",
							"Fr.",
							"d.J.",
							"Reg.-Bez.",
							"m.E.",
							"schles.",
							"Max.",
							"Ltd.",
							"südd.",
							"inkl.",
							"geb.",
							"Ggf.",
							"Inc.",
							"kath.",
							"kfm.",
							"Nr.",
							"Proz.",
							"Dim.",
							"verw.",
							"Reg.",
							"Dat.",
							"Evtl.",
							"led.",
							"F.",
							"Test.",
							"Schr.",
							"Do.",
							"PIN.",
							"Z. Zt.",
							"v.Chr.",
							"Tägl.",
							"s.",
							"amtl.",
							"Temp.",
							"Mind.",
							"e.V.",
							"Abw.",
							"P.M.",
							"F.f.",
							"a.a.S.",
							"Mod.",
							"Co.",
							"Min.",
							"Allg.",
							"Geograph.",
							"Jr.",
							"Urspr.",
							"Apr.",
							"Z. B.",
							"v.H.",
							"A.",
							"einschl.",
							"Trans.",
							"zzgl.",
							"StR.",
							"Fam.",
							"I.",
							"jhrl.",
							"u.a.",
							"Ben.",
							"o.g.",
							"Kfm.",
							"Konv.",
							"Mi.",
							"L.",
							"beil.",
							"T.",
							"Ursprüngl.",
							"röm.-kath.",
							"Okt.",
							"u.ä.",
							"Tel.",
							"D.",
							"Ber.",
							"Kop.",
							"Mio.",
							"Y.",
							"U.S.A.",
							"v. H.",
							"Forts. f.",
							"Rep.",
							"Hptst.",
							"österr.",
						],
						variables: {},
					},
				},
				el: {
					sentence: {
						segmentRules: {},
						suppressions: [],
						variables: {
							$STerm: "((?:[!;\\?\\u037E\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
						},
					},
				},
				en: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"L.P.",
							"Alt.",
							"Approx.",
							"E.G.",
							"O.",
							"Maj.",
							"Misc.",
							"P.O.",
							"J.D.",
							"Jam.",
							"Card.",
							"Dec.",
							"Sept.",
							"MR.",
							"Long.",
							"Hat.",
							"G.",
							"Link.",
							"DC.",
							"D.C.",
							"M.T.",
							"Hz.",
							"Mrs.",
							"By.",
							"Act.",
							"Var.",
							"N.V.",
							"Aug.",
							"B.",
							"S.A.",
							"Up.",
							"Job.",
							"Num.",
							"M.I.T.",
							"Ok.",
							"Org.",
							"Ex.",
							"Cont.",
							"U.",
							"Mart.",
							"Fn.",
							"Abs.",
							"Lt.",
							"OK.",
							"Z.",
							"E.",
							"Kb.",
							"Est.",
							"A.M.",
							"L.A.",
							"Prof.",
							"U.S.",
							"Nov.",
							"Ph.D.",
							"Mar.",
							"I.T.",
							"exec.",
							"Jan.",
							"N.Y.",
							"X.",
							"Md.",
							"Op.",
							"vs.",
							"D.A.",
							"A.D.",
							"R.L.",
							"P.M.",
							"Or.",
							"M.R.",
							"Cap.",
							"PC.",
							"Feb.",
							"Exec.",
							"I.e.",
							"Sep.",
							"Gb.",
							"K.",
							"U.S.C.",
							"Mt.",
							"S.",
							"A.S.",
							"C.O.D.",
							"Capt.",
							"Col.",
							"In.",
							"C.F.",
							"Adj.",
							"AD.",
							"I.D.",
							"Mgr.",
							"R.T.",
							"B.V.",
							"M.",
							"Conn.",
							"Yr.",
							"Rev.",
							"Phys.",
							"pp.",
							"Ms.",
							"To.",
							"Sgt.",
							"J.K.",
							"Nr.",
							"Jun.",
							"Fri.",
							"S.A.R.",
							"Lev.",
							"Lt.Cdr.",
							"Def.",
							"F.",
							"Do.",
							"Joe.",
							"Id.",
							"Mr.",
							"Dept.",
							"Is.",
							"Pvt.",
							"Diff.",
							"Hon.B.A.",
							"Q.",
							"Mb.",
							"On.",
							"Min.",
							"J.B.",
							"Ed.",
							"AB.",
							"A.",
							"S.p.A.",
							"I.",
							"a.m.",
							"Comm.",
							"Go.",
							"VS.",
							"L.",
							"All.",
							"PP.",
							"P.V.",
							"T.",
							"K.R.",
							"Etc.",
							"D.",
							"Adv.",
							"Lib.",
							"E.g.",
							"Pro.",
							"U.S.A.",
							"S.E.",
							"AA.",
							"Rep.",
							"Sq.",
							"As.",
						],
						variables: {},
					},
				},
				es: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"Rdos.",
							"JJ.OO.",
							"Sres.",
							"fig.",
							"may.",
							"RR.HH.",
							"oct.",
							"cap.",
							"mié.",
							"doc.",
							"Excmo.",
							"Trab.",
							"Excmos.",
							"Kit.",
							"Inc.",
							"FF.CC.",
							"DC.",
							"ago.",
							"trad.",
							"SA.",
							"Rvdos.",
							"ed.",
							"Exmo.",
							"jul.",
							"col.",
							"RAM.",
							"Srtas.",
							"ene.",
							"Rol.",
							"Fabric.",
							"Comm.",
							"vid.",
							"Da.",
							"dic.",
							"ss.",
							"abr.",
							"ntra.",
							"Sra.",
							"dtor.",
							"cf.",
							"dom.",
							"prov.",
							"Emm.",
							"Sr.",
							"licdo.",
							"p.ej.",
							"bol.",
							"figs.",
							"Vda.",
							"Dr.",
							"ntro.",
							"Desv.",
							"O.M.",
							"Ldo.",
							"Drs.",
							"sáb.",
							"feb.",
							"Ltda.",
							"Lcda.",
							"Exma.",
							"C.V.",
							"SS.MM.",
							"Lda.",
							"U.S.",
							"hnos.",
							"R.D.",
							"Korn.",
							"v.gr.",
							"vs.",
							"Ilmas.",
							"Rdo.",
							"ej.",
							"vie.",
							"jue.",
							"a. C.",
							"Ilmos.",
							"e. c.",
							"Excma.",
							"afma.",
							"licda.",
							"Em.",
							"K.",
							"sras.",
							"MM.",
							"fund.",
							"Mons.",
							"Lcdo.",
							"afmo.",
							"C.",
							"A.C.",
							"dptos.",
							"Col.",
							"Srta.",
							"Av.",
							"Ant.",
							"depto.",
							"Var.",
							"H.P.",
							"D.",
							"M.",
							"C.P.",
							"Rev.",
							"Rvdmos.",
							"Fr.",
							"Ilmo.",
							"afmos.",
							"Ltd.",
							"afmas.",
							"prof.",
							"lun.",
							"SS.AA.",
							"Sol.",
							"nov.",
							"mss.",
							"Dña.",
							"Seg.",
							"mar.",
							"Rvdmo.",
							"Reg.",
							"ms.",
							"Sras.",
							"sres.",
							"U.S.A.",
							"Sta.",
							"Sdad.",
							"Dra.",
							"srs.",
							"R.U.",
							"deptos.",
							"dpto.",
							"jun.",
							"bco.",
							"Cía.",
							"Id.",
							"Mr.",
							"e.g.",
							"C.S.",
							"Excmas.",
							"Dª.",
							"Rvdo.",
							"Lic.",
							"cfr.",
							"Corp.",
							"Dto.",
							"Ilma.",
							"L.",
							"All.",
							"PP.",
							"d. C.",
							"Ltdo.",
							"mtro.",
							"Mrs.",
							"Desc.",
							"Avda.",
							"Exmas.",
							"a. e. c.",
							"Bien.",
							"Exmos.",
							"AA.",
							"Sto.",
							"CA.",
							"sept.",
							"Exc.",
							"c/c.",
						],
						variables: {},
					},
				},
				fr: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"aux.",
							"config.",
							"collab.",
							"M.",
							"dim.",
							"imprim.",
							"oct.",
							"syst.",
							"bull.",
							"MM.",
							"doc.",
							"P.O.",
							"hôp.",
							"Mart.",
							"juil.",
							"broch.",
							"adr.",
							"symb.",
							"C.",
							"anc.",
							"voit.",
							"Jr.",
							"graph.",
							"dir.",
							"éd.",
							"fig.",
							"édit.",
							"niv.",
							"quart.",
							"cam.",
							"éval.",
							"anon.",
							"réf.",
							"Comm.",
							"Prof.",
							"févr.",
							"indus.",
							"DC.",
							"équiv.",
							"illustr.",
							"acoust.",
							"nov.",
							"L.",
							"All.",
							"U.S.",
							"S.M.A.R.T.",
							"sept.",
							"avr.",
							"jeu.",
							"dest.",
							"P.-D. G.",
							"ill.",
							"coll.",
							"encycl.",
							"mer.",
							"Desc.",
							"ven.",
							"P.",
							"lun.",
							"Inc.",
							"sam.",
							"D.",
							"append.",
							"Var.",
							"categ.",
							"janv.",
							"S.A.",
							"imm.",
							"U.S.A.",
							"mar.",
							"exempl.",
							"déc.",
							"ann.",
							"U.",
							"synth.",
							"dict.",
							"av. J.-C.",
							"W.",
							"Op.",
							"ap. J.-C.",
							"gouv.",
							"trav. publ.",
						],
						variables: {},
					},
				},
				it: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"N.B.",
							"div.",
							"a.C.",
							"fig.",
							"d.p.R.",
							"c.c.p.",
							"Cfr.",
							"vol.",
							"Geom.",
							"O.d.G.",
							"S.p.A.",
							"ver.",
							"N.d.A.",
							"dott.",
							"arch.",
							"d.C.",
							"N.d.T.",
							"rag.",
							"Sig.",
							"Mod.",
							"pag.",
							"dr.",
							"tav.",
							"N.d.E.",
							"DC.",
							"mitt.",
							"Ing.",
							"int.",
							"on.",
							"C.P.",
							"ag.",
							"L.",
							"U.S.",
							"S.M.A.R.T.",
							"p.i.",
							"tab.",
							"Ltd.",
							"Liv.",
							"D.",
							"U.S.A.",
							"sez.",
							"avv.",
							"S.A.R.",
							"all.",
							"p.",
						],
						variables: {},
					},
				},
				ja: {
					word: {
						segmentRules: {
							13.3: {
								after: "$Hiragana",
								before: "$Hiragana",
								breaks: !1,
							},
							13.4: {
								after: "$Ideographic",
								before: "$Ideographic",
								breaks: !1,
							},
						},
						suppressions: [],
						variables: {
							$Hiragana:
								"((?:[\\u3041-\\u3096\\u309D-\\u309F]|\\uD82C[\\uDC01-\\uDD1F\\uDD32\\uDD50-\\uDD52]|\\uD83C\\uDE00)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Ideographic:
								"((?:[\\u3005-\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B\\uDFE4|[\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82C[\\uDD70-\\uDEFB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
						},
					},
				},
				pt: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"psicol.",
							"fig.",
							"compl.",
							"rep.",
							"cap.",
							"doc.",
							"fisiol.",
							"dipl.",
							"astron.",
							"port.",
							"eletrôn.",
							"geom.",
							"mov.",
							"ago.",
							"trad.",
							"arquit.",
							"dez.",
							"ed.",
							"apt.",
							"Exmo.",
							"col.",
							"ff.",
							"univ.",
							"res.",
							"R.",
							"transp.",
							"D.C",
							"l.",
							"des.",
							"fev.",
							"abr.",
							"liter.",
							"lat.",
							"Dir.",
							"cf.",
							"adm.",
							"fot.",
							"p.m.",
							"P.M.",
							"créd.",
							"jur.",
							"com.",
							"anat.",
							"dir.",
							"end.",
							"fís.",
							"E.",
							"Est.",
							"cont.",
							"matem.",
							"Drs.",
							"gên.",
							"neol.",
							"pág.",
							"índ.",
							"Ltda.",
							"Exma.",
							"esp.",
							"ingl.",
							"tecnol.",
							"Mar.",
							"símb.",
							"Pe.",
							"pal.",
							"filos.",
							"V.T.",
							"fasc.",
							"vs.",
							"mai.",
							"S.A.",
							"profa.",
							"N.Sra.",
							"r.s.v.p.",
							"cel.",
							"mat.",
							"abrev.",
							"out.",
							"long.",
							"aux.",
							"arit.",
							"aer.",
							"jul.",
							"lin.",
							"S.",
							"méd.",
							"odontol.",
							"org.",
							"A.C.",
							"jun.",
							"déb.",
							"Av.",
							"álg.",
							"sup.",
							"fl.",
							"odont.",
							"caps.",
							"relat.",
							"organiz.",
							"hist.",
							"Fr.",
							"Ilmo.",
							"fem.",
							"ap.",
							"Ltd.",
							"pol.",
							"séc.",
							"prof.",
							"cx.",
							"nov.",
							"quím.",
							"mús.",
							"agric.",
							"mar.",
							"W.C.",
							"fr.",
							"cat.",
							"jan.",
							"pron.",
							"rel.",
							"autom.",
							"Sta.",
							"Dra.",
							"p.",
							"tel.",
							"div.",
							"p. ex.",
							"a.C.",
							"bras.",
							"Alm.",
							"Dr.",
							"comp.",
							"pq.",
							"arqueol.",
							"náut.",
							"biogr.",
							"f.",
							"círc.",
							"fac.",
							"d.C.",
							"apart.",
							"ex.",
							"Jr.",
							"set.",
							"tec.",
							"sociol.",
							"gram.",
							"ind.",
							"Ilma.",
							"vol.",
							"eng.",
							"rod.",
							"Ph.D.",
							"Dras.",
							"pp.",
							"elem.",
							"máq.",
							"cód.",
							"eletr.",
							"prod.",
							"ref.",
							"fil.",
							"a.m.",
							"A.M",
							"obs.",
							"N.T.",
							"contab.",
							"Sto.",
							"lit.",
							"educ.",
							"rementente",
							"desc.",
							"próx.",
						],
						variables: {},
					},
				},
				root: {
					grapheme: {
						segmentRules: {
							11: {
								after: "$ExtPict",
								before: "$ExtPict$Extend*$ZWJ",
								breaks: !1,
							},
							12: {
								after: "$RI",
								before: "^($RI$RI)*$RI",
								breaks: !1,
							},
							13: {
								after: "$RI",
								before: "[^\\uDDE6-\\uDDFF]($RI$RI)*$RI",
								breaks: !1,
							},
							3: { after: "$LF", before: "$CR", breaks: !1 },
							4: { before: "($Control|$CR|$LF)", breaks: !0 },
							5: { after: "($Control|$CR|$LF)", breaks: !0 },
							6: {
								after: "($L|$V|$LV|$LVT)",
								before: "$L",
								breaks: !1,
							},
							7: {
								after: "($V|$T)",
								before: "($LV|$V)",
								breaks: !1,
							},
							8: { after: "$T", before: "($LVT|$T)", breaks: !1 },
							9: { after: "($Extend|$ZWJ)", breaks: !1 },
							9.1: { after: "$SpacingMark", breaks: !1 },
							9.2: { before: "$Prepend", breaks: !1 },
							9.3: {
								after: "$LinkingConsonant",
								before: "$LinkingConsonant$ExtCccZwj*$ConjunctLinker$ExtCccZwj*",
								breaks: !1,
							},
						},
						suppressions: [],
						variables: {
							$CR: "\\r",
							$ConjunctLinker:
								"[\\u094D\\u09CD\\u0ACD\\u0B4D\\u0C4D\\u0D4D]",
							$ConjunctLinkingScripts:
								"(?:[\\u0900-\\u0950\\u0955-\\u0963\\u0966-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09FE\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AF1\\u0AF9-\\u0AFF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B77\\u0C00-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3C-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58-\\u0C5A\\u0C5D\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C77-\\u0C7F\\u0D00-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4F\\u0D54-\\u0D63\\u0D66-\\u0D7F\\uA8E0-\\uA8FF]|\\uD806[\\uDF00-\\uDF09])",
							$Control:
								"(?:[\\0-\\t\\x0B\\f\\x0E-\\x1F\\x7F-\\x9F\\xAD\\u061C\\u180E\\u200B\\u200E\\u200F\\u2028-\\u202E\\u2060-\\u206F\\uFEFF\\uFFF0-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40[\\uDC00-\\uDC1F\\uDC80-\\uDCFF\\uDDF0-\\uDFFF]|[\\uDB41-\\uDB43][\\uDC00-\\uDFFF])",
							$ExtCccZwj:
								"(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09BE\\u09C1-\\u09C4\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01\\u0B3C\\u0B3E\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE\\u0BC0\\u0BCD\\u0BD7\\u0C00\\u0C04\\u0C3C\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC0\\u0CC2\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D00\\u0D01\\u0D3B\\u0D3C\\u0D3E\\u0D41-\\u0D44\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81\\u0DCA\\u0DCF\\u0DD2-\\u0DD4\\u0DD6\\u0DDF\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B03\\u1B34-\\u1B3D\\u1B42-\\u1B44\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BAD\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF3\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8\\u1CF9\\u1DC0-\\u1DFF\\u200D\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA82C\\uA8C4\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA951\\uA953\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9BD\\uA9C0\\uA9E5\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEC\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC01\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD2B\\uDD2D-\\uDD34\\uDD73\\uDD80\\uDD81\\uDDB6-\\uDDBE\\uDDC0\\uDDC9-\\uDDCC\\uDDCF\\uDE2F-\\uDE31\\uDE34-\\uDE37\\uDE3E\\uDE41\\uDEDF\\uDEE3-\\uDEEA\\uDF00\\uDF01\\uDF3B\\uDF3C\\uDF3E\\uDF40\\uDF4D\\uDF57\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8\\uDFBB-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFC9\\uDFCE-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC38-\\uDC3F\\uDC42-\\uDC44\\uDC46\\uDC5E\\uDCB0\\uDCB3-\\uDCB8\\uDCBA\\uDCBD\\uDCBF\\uDCC0\\uDCC2\\uDCC3\\uDDAF\\uDDB2-\\uDDB5\\uDDBC\\uDDBD\\uDDBF\\uDDC0\\uDDDC\\uDDDD\\uDE33-\\uDE3A\\uDE3D\\uDE3F\\uDE40\\uDEAB\\uDEAD\\uDEB0-\\uDEB7\\uDF1D\\uDF1F\\uDF22-\\uDF25\\uDF27-\\uDF2B]|\\uD806[\\uDC2F-\\uDC37\\uDC39\\uDC3A\\uDD30\\uDD3B-\\uDD3E\\uDD43\\uDDD4-\\uDDD7\\uDDDA\\uDDDB\\uDDE0\\uDE01-\\uDE0A\\uDE33-\\uDE38\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE56\\uDE59-\\uDE5B\\uDE8A-\\uDE96\\uDE98\\uDE99]|\\uD807[\\uDC30-\\uDC36\\uDC38-\\uDC3D\\uDC3F\\uDC92-\\uDCA7\\uDCAA-\\uDCB0\\uDCB2\\uDCB3\\uDCB5\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD90\\uDD91\\uDD95\\uDD97\\uDEF3\\uDEF4\\uDF00\\uDF01\\uDF36-\\uDF3A\\uDF40-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD29\\uDD2D-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
							$ExtPict:
								"(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2605\\u2607-\\u2612\\u2614-\\u2685\\u2690-\\u2705\\u2708-\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2767\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDCFF\\uDD0D-\\uDD0F\\uDD2F\\uDD6C-\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAD-\\uDDE5\\uDE01-\\uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDFFA]|\\uD83D[\\uDC00-\\uDD3D\\uDD46-\\uDE4F\\uDE80-\\uDEFF\\uDF74-\\uDF7F\\uDFD5-\\uDFFF]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDEFF]|\\uD83F[\\uDC00-\\uDFFD])",
							$Extend:
								"(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09BE\\u09C1-\\u09C4\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01\\u0B3C\\u0B3E\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE\\u0BC0\\u0BCD\\u0BD7\\u0C00\\u0C04\\u0C3C\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC0\\u0CC2\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D00\\u0D01\\u0D3B\\u0D3C\\u0D3E\\u0D41-\\u0D44\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81\\u0DCA\\u0DCF\\u0DD2-\\u0DD4\\u0DD6\\u0DDF\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B03\\u1B34-\\u1B3D\\u1B42-\\u1B44\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BAD\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF3\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA82C\\uA8C4\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA951\\uA953\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9BD\\uA9C0\\uA9E5\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEC\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC01\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD2B\\uDD2D-\\uDD34\\uDD73\\uDD80\\uDD81\\uDDB6-\\uDDBE\\uDDC0\\uDDC9-\\uDDCC\\uDDCF\\uDE2F-\\uDE31\\uDE34-\\uDE37\\uDE3E\\uDE41\\uDEDF\\uDEE3-\\uDEEA\\uDF00\\uDF01\\uDF3B\\uDF3C\\uDF3E\\uDF40\\uDF4D\\uDF57\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8\\uDFBB-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFC9\\uDFCE-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC38-\\uDC3F\\uDC42-\\uDC44\\uDC46\\uDC5E\\uDCB0\\uDCB3-\\uDCB8\\uDCBA\\uDCBD\\uDCBF\\uDCC0\\uDCC2\\uDCC3\\uDDAF\\uDDB2-\\uDDB5\\uDDBC\\uDDBD\\uDDBF\\uDDC0\\uDDDC\\uDDDD\\uDE33-\\uDE3A\\uDE3D\\uDE3F\\uDE40\\uDEAB\\uDEAD\\uDEB0-\\uDEB7\\uDF1D\\uDF1F\\uDF22-\\uDF25\\uDF27-\\uDF2B]|\\uD806[\\uDC2F-\\uDC37\\uDC39\\uDC3A\\uDD30\\uDD3B-\\uDD3E\\uDD43\\uDDD4-\\uDDD7\\uDDDA\\uDDDB\\uDDE0\\uDE01-\\uDE0A\\uDE33-\\uDE38\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE56\\uDE59-\\uDE5B\\uDE8A-\\uDE96\\uDE98\\uDE99]|\\uD807[\\uDC30-\\uDC36\\uDC38-\\uDC3D\\uDC3F\\uDC92-\\uDCA7\\uDCAA-\\uDCB0\\uDCB2\\uDCB3\\uDCB5\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD90\\uDD91\\uDD95\\uDD97\\uDEF3\\uDEF4\\uDF00\\uDF01\\uDF36-\\uDF3A\\uDF40-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD29\\uDD2D-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
							$L: "[\\u1100-\\u115F\\uA960-\\uA97C]",
							$LF: "\\n",
							$LV: "[\\uAC00\\uAC1C\\uAC38\\uAC54\\uAC70\\uAC8C\\uACA8\\uACC4\\uACE0\\uACFC\\uAD18\\uAD34\\uAD50\\uAD6C\\uAD88\\uADA4\\uADC0\\uADDC\\uADF8\\uAE14\\uAE30\\uAE4C\\uAE68\\uAE84\\uAEA0\\uAEBC\\uAED8\\uAEF4\\uAF10\\uAF2C\\uAF48\\uAF64\\uAF80\\uAF9C\\uAFB8\\uAFD4\\uAFF0\\uB00C\\uB028\\uB044\\uB060\\uB07C\\uB098\\uB0B4\\uB0D0\\uB0EC\\uB108\\uB124\\uB140\\uB15C\\uB178\\uB194\\uB1B0\\uB1CC\\uB1E8\\uB204\\uB220\\uB23C\\uB258\\uB274\\uB290\\uB2AC\\uB2C8\\uB2E4\\uB300\\uB31C\\uB338\\uB354\\uB370\\uB38C\\uB3A8\\uB3C4\\uB3E0\\uB3FC\\uB418\\uB434\\uB450\\uB46C\\uB488\\uB4A4\\uB4C0\\uB4DC\\uB4F8\\uB514\\uB530\\uB54C\\uB568\\uB584\\uB5A0\\uB5BC\\uB5D8\\uB5F4\\uB610\\uB62C\\uB648\\uB664\\uB680\\uB69C\\uB6B8\\uB6D4\\uB6F0\\uB70C\\uB728\\uB744\\uB760\\uB77C\\uB798\\uB7B4\\uB7D0\\uB7EC\\uB808\\uB824\\uB840\\uB85C\\uB878\\uB894\\uB8B0\\uB8CC\\uB8E8\\uB904\\uB920\\uB93C\\uB958\\uB974\\uB990\\uB9AC\\uB9C8\\uB9E4\\uBA00\\uBA1C\\uBA38\\uBA54\\uBA70\\uBA8C\\uBAA8\\uBAC4\\uBAE0\\uBAFC\\uBB18\\uBB34\\uBB50\\uBB6C\\uBB88\\uBBA4\\uBBC0\\uBBDC\\uBBF8\\uBC14\\uBC30\\uBC4C\\uBC68\\uBC84\\uBCA0\\uBCBC\\uBCD8\\uBCF4\\uBD10\\uBD2C\\uBD48\\uBD64\\uBD80\\uBD9C\\uBDB8\\uBDD4\\uBDF0\\uBE0C\\uBE28\\uBE44\\uBE60\\uBE7C\\uBE98\\uBEB4\\uBED0\\uBEEC\\uBF08\\uBF24\\uBF40\\uBF5C\\uBF78\\uBF94\\uBFB0\\uBFCC\\uBFE8\\uC004\\uC020\\uC03C\\uC058\\uC074\\uC090\\uC0AC\\uC0C8\\uC0E4\\uC100\\uC11C\\uC138\\uC154\\uC170\\uC18C\\uC1A8\\uC1C4\\uC1E0\\uC1FC\\uC218\\uC234\\uC250\\uC26C\\uC288\\uC2A4\\uC2C0\\uC2DC\\uC2F8\\uC314\\uC330\\uC34C\\uC368\\uC384\\uC3A0\\uC3BC\\uC3D8\\uC3F4\\uC410\\uC42C\\uC448\\uC464\\uC480\\uC49C\\uC4B8\\uC4D4\\uC4F0\\uC50C\\uC528\\uC544\\uC560\\uC57C\\uC598\\uC5B4\\uC5D0\\uC5EC\\uC608\\uC624\\uC640\\uC65C\\uC678\\uC694\\uC6B0\\uC6CC\\uC6E8\\uC704\\uC720\\uC73C\\uC758\\uC774\\uC790\\uC7AC\\uC7C8\\uC7E4\\uC800\\uC81C\\uC838\\uC854\\uC870\\uC88C\\uC8A8\\uC8C4\\uC8E0\\uC8FC\\uC918\\uC934\\uC950\\uC96C\\uC988\\uC9A4\\uC9C0\\uC9DC\\uC9F8\\uCA14\\uCA30\\uCA4C\\uCA68\\uCA84\\uCAA0\\uCABC\\uCAD8\\uCAF4\\uCB10\\uCB2C\\uCB48\\uCB64\\uCB80\\uCB9C\\uCBB8\\uCBD4\\uCBF0\\uCC0C\\uCC28\\uCC44\\uCC60\\uCC7C\\uCC98\\uCCB4\\uCCD0\\uCCEC\\uCD08\\uCD24\\uCD40\\uCD5C\\uCD78\\uCD94\\uCDB0\\uCDCC\\uCDE8\\uCE04\\uCE20\\uCE3C\\uCE58\\uCE74\\uCE90\\uCEAC\\uCEC8\\uCEE4\\uCF00\\uCF1C\\uCF38\\uCF54\\uCF70\\uCF8C\\uCFA8\\uCFC4\\uCFE0\\uCFFC\\uD018\\uD034\\uD050\\uD06C\\uD088\\uD0A4\\uD0C0\\uD0DC\\uD0F8\\uD114\\uD130\\uD14C\\uD168\\uD184\\uD1A0\\uD1BC\\uD1D8\\uD1F4\\uD210\\uD22C\\uD248\\uD264\\uD280\\uD29C\\uD2B8\\uD2D4\\uD2F0\\uD30C\\uD328\\uD344\\uD360\\uD37C\\uD398\\uD3B4\\uD3D0\\uD3EC\\uD408\\uD424\\uD440\\uD45C\\uD478\\uD494\\uD4B0\\uD4CC\\uD4E8\\uD504\\uD520\\uD53C\\uD558\\uD574\\uD590\\uD5AC\\uD5C8\\uD5E4\\uD600\\uD61C\\uD638\\uD654\\uD670\\uD68C\\uD6A8\\uD6C4\\uD6E0\\uD6FC\\uD718\\uD734\\uD750\\uD76C\\uD788]",
							$LVT: "[\\uAC01-\\uAC1B\\uAC1D-\\uAC37\\uAC39-\\uAC53\\uAC55-\\uAC6F\\uAC71-\\uAC8B\\uAC8D-\\uACA7\\uACA9-\\uACC3\\uACC5-\\uACDF\\uACE1-\\uACFB\\uACFD-\\uAD17\\uAD19-\\uAD33\\uAD35-\\uAD4F\\uAD51-\\uAD6B\\uAD6D-\\uAD87\\uAD89-\\uADA3\\uADA5-\\uADBF\\uADC1-\\uADDB\\uADDD-\\uADF7\\uADF9-\\uAE13\\uAE15-\\uAE2F\\uAE31-\\uAE4B\\uAE4D-\\uAE67\\uAE69-\\uAE83\\uAE85-\\uAE9F\\uAEA1-\\uAEBB\\uAEBD-\\uAED7\\uAED9-\\uAEF3\\uAEF5-\\uAF0F\\uAF11-\\uAF2B\\uAF2D-\\uAF47\\uAF49-\\uAF63\\uAF65-\\uAF7F\\uAF81-\\uAF9B\\uAF9D-\\uAFB7\\uAFB9-\\uAFD3\\uAFD5-\\uAFEF\\uAFF1-\\uB00B\\uB00D-\\uB027\\uB029-\\uB043\\uB045-\\uB05F\\uB061-\\uB07B\\uB07D-\\uB097\\uB099-\\uB0B3\\uB0B5-\\uB0CF\\uB0D1-\\uB0EB\\uB0ED-\\uB107\\uB109-\\uB123\\uB125-\\uB13F\\uB141-\\uB15B\\uB15D-\\uB177\\uB179-\\uB193\\uB195-\\uB1AF\\uB1B1-\\uB1CB\\uB1CD-\\uB1E7\\uB1E9-\\uB203\\uB205-\\uB21F\\uB221-\\uB23B\\uB23D-\\uB257\\uB259-\\uB273\\uB275-\\uB28F\\uB291-\\uB2AB\\uB2AD-\\uB2C7\\uB2C9-\\uB2E3\\uB2E5-\\uB2FF\\uB301-\\uB31B\\uB31D-\\uB337\\uB339-\\uB353\\uB355-\\uB36F\\uB371-\\uB38B\\uB38D-\\uB3A7\\uB3A9-\\uB3C3\\uB3C5-\\uB3DF\\uB3E1-\\uB3FB\\uB3FD-\\uB417\\uB419-\\uB433\\uB435-\\uB44F\\uB451-\\uB46B\\uB46D-\\uB487\\uB489-\\uB4A3\\uB4A5-\\uB4BF\\uB4C1-\\uB4DB\\uB4DD-\\uB4F7\\uB4F9-\\uB513\\uB515-\\uB52F\\uB531-\\uB54B\\uB54D-\\uB567\\uB569-\\uB583\\uB585-\\uB59F\\uB5A1-\\uB5BB\\uB5BD-\\uB5D7\\uB5D9-\\uB5F3\\uB5F5-\\uB60F\\uB611-\\uB62B\\uB62D-\\uB647\\uB649-\\uB663\\uB665-\\uB67F\\uB681-\\uB69B\\uB69D-\\uB6B7\\uB6B9-\\uB6D3\\uB6D5-\\uB6EF\\uB6F1-\\uB70B\\uB70D-\\uB727\\uB729-\\uB743\\uB745-\\uB75F\\uB761-\\uB77B\\uB77D-\\uB797\\uB799-\\uB7B3\\uB7B5-\\uB7CF\\uB7D1-\\uB7EB\\uB7ED-\\uB807\\uB809-\\uB823\\uB825-\\uB83F\\uB841-\\uB85B\\uB85D-\\uB877\\uB879-\\uB893\\uB895-\\uB8AF\\uB8B1-\\uB8CB\\uB8CD-\\uB8E7\\uB8E9-\\uB903\\uB905-\\uB91F\\uB921-\\uB93B\\uB93D-\\uB957\\uB959-\\uB973\\uB975-\\uB98F\\uB991-\\uB9AB\\uB9AD-\\uB9C7\\uB9C9-\\uB9E3\\uB9E5-\\uB9FF\\uBA01-\\uBA1B\\uBA1D-\\uBA37\\uBA39-\\uBA53\\uBA55-\\uBA6F\\uBA71-\\uBA8B\\uBA8D-\\uBAA7\\uBAA9-\\uBAC3\\uBAC5-\\uBADF\\uBAE1-\\uBAFB\\uBAFD-\\uBB17\\uBB19-\\uBB33\\uBB35-\\uBB4F\\uBB51-\\uBB6B\\uBB6D-\\uBB87\\uBB89-\\uBBA3\\uBBA5-\\uBBBF\\uBBC1-\\uBBDB\\uBBDD-\\uBBF7\\uBBF9-\\uBC13\\uBC15-\\uBC2F\\uBC31-\\uBC4B\\uBC4D-\\uBC67\\uBC69-\\uBC83\\uBC85-\\uBC9F\\uBCA1-\\uBCBB\\uBCBD-\\uBCD7\\uBCD9-\\uBCF3\\uBCF5-\\uBD0F\\uBD11-\\uBD2B\\uBD2D-\\uBD47\\uBD49-\\uBD63\\uBD65-\\uBD7F\\uBD81-\\uBD9B\\uBD9D-\\uBDB7\\uBDB9-\\uBDD3\\uBDD5-\\uBDEF\\uBDF1-\\uBE0B\\uBE0D-\\uBE27\\uBE29-\\uBE43\\uBE45-\\uBE5F\\uBE61-\\uBE7B\\uBE7D-\\uBE97\\uBE99-\\uBEB3\\uBEB5-\\uBECF\\uBED1-\\uBEEB\\uBEED-\\uBF07\\uBF09-\\uBF23\\uBF25-\\uBF3F\\uBF41-\\uBF5B\\uBF5D-\\uBF77\\uBF79-\\uBF93\\uBF95-\\uBFAF\\uBFB1-\\uBFCB\\uBFCD-\\uBFE7\\uBFE9-\\uC003\\uC005-\\uC01F\\uC021-\\uC03B\\uC03D-\\uC057\\uC059-\\uC073\\uC075-\\uC08F\\uC091-\\uC0AB\\uC0AD-\\uC0C7\\uC0C9-\\uC0E3\\uC0E5-\\uC0FF\\uC101-\\uC11B\\uC11D-\\uC137\\uC139-\\uC153\\uC155-\\uC16F\\uC171-\\uC18B\\uC18D-\\uC1A7\\uC1A9-\\uC1C3\\uC1C5-\\uC1DF\\uC1E1-\\uC1FB\\uC1FD-\\uC217\\uC219-\\uC233\\uC235-\\uC24F\\uC251-\\uC26B\\uC26D-\\uC287\\uC289-\\uC2A3\\uC2A5-\\uC2BF\\uC2C1-\\uC2DB\\uC2DD-\\uC2F7\\uC2F9-\\uC313\\uC315-\\uC32F\\uC331-\\uC34B\\uC34D-\\uC367\\uC369-\\uC383\\uC385-\\uC39F\\uC3A1-\\uC3BB\\uC3BD-\\uC3D7\\uC3D9-\\uC3F3\\uC3F5-\\uC40F\\uC411-\\uC42B\\uC42D-\\uC447\\uC449-\\uC463\\uC465-\\uC47F\\uC481-\\uC49B\\uC49D-\\uC4B7\\uC4B9-\\uC4D3\\uC4D5-\\uC4EF\\uC4F1-\\uC50B\\uC50D-\\uC527\\uC529-\\uC543\\uC545-\\uC55F\\uC561-\\uC57B\\uC57D-\\uC597\\uC599-\\uC5B3\\uC5B5-\\uC5CF\\uC5D1-\\uC5EB\\uC5ED-\\uC607\\uC609-\\uC623\\uC625-\\uC63F\\uC641-\\uC65B\\uC65D-\\uC677\\uC679-\\uC693\\uC695-\\uC6AF\\uC6B1-\\uC6CB\\uC6CD-\\uC6E7\\uC6E9-\\uC703\\uC705-\\uC71F\\uC721-\\uC73B\\uC73D-\\uC757\\uC759-\\uC773\\uC775-\\uC78F\\uC791-\\uC7AB\\uC7AD-\\uC7C7\\uC7C9-\\uC7E3\\uC7E5-\\uC7FF\\uC801-\\uC81B\\uC81D-\\uC837\\uC839-\\uC853\\uC855-\\uC86F\\uC871-\\uC88B\\uC88D-\\uC8A7\\uC8A9-\\uC8C3\\uC8C5-\\uC8DF\\uC8E1-\\uC8FB\\uC8FD-\\uC917\\uC919-\\uC933\\uC935-\\uC94F\\uC951-\\uC96B\\uC96D-\\uC987\\uC989-\\uC9A3\\uC9A5-\\uC9BF\\uC9C1-\\uC9DB\\uC9DD-\\uC9F7\\uC9F9-\\uCA13\\uCA15-\\uCA2F\\uCA31-\\uCA4B\\uCA4D-\\uCA67\\uCA69-\\uCA83\\uCA85-\\uCA9F\\uCAA1-\\uCABB\\uCABD-\\uCAD7\\uCAD9-\\uCAF3\\uCAF5-\\uCB0F\\uCB11-\\uCB2B\\uCB2D-\\uCB47\\uCB49-\\uCB63\\uCB65-\\uCB7F\\uCB81-\\uCB9B\\uCB9D-\\uCBB7\\uCBB9-\\uCBD3\\uCBD5-\\uCBEF\\uCBF1-\\uCC0B\\uCC0D-\\uCC27\\uCC29-\\uCC43\\uCC45-\\uCC5F\\uCC61-\\uCC7B\\uCC7D-\\uCC97\\uCC99-\\uCCB3\\uCCB5-\\uCCCF\\uCCD1-\\uCCEB\\uCCED-\\uCD07\\uCD09-\\uCD23\\uCD25-\\uCD3F\\uCD41-\\uCD5B\\uCD5D-\\uCD77\\uCD79-\\uCD93\\uCD95-\\uCDAF\\uCDB1-\\uCDCB\\uCDCD-\\uCDE7\\uCDE9-\\uCE03\\uCE05-\\uCE1F\\uCE21-\\uCE3B\\uCE3D-\\uCE57\\uCE59-\\uCE73\\uCE75-\\uCE8F\\uCE91-\\uCEAB\\uCEAD-\\uCEC7\\uCEC9-\\uCEE3\\uCEE5-\\uCEFF\\uCF01-\\uCF1B\\uCF1D-\\uCF37\\uCF39-\\uCF53\\uCF55-\\uCF6F\\uCF71-\\uCF8B\\uCF8D-\\uCFA7\\uCFA9-\\uCFC3\\uCFC5-\\uCFDF\\uCFE1-\\uCFFB\\uCFFD-\\uD017\\uD019-\\uD033\\uD035-\\uD04F\\uD051-\\uD06B\\uD06D-\\uD087\\uD089-\\uD0A3\\uD0A5-\\uD0BF\\uD0C1-\\uD0DB\\uD0DD-\\uD0F7\\uD0F9-\\uD113\\uD115-\\uD12F\\uD131-\\uD14B\\uD14D-\\uD167\\uD169-\\uD183\\uD185-\\uD19F\\uD1A1-\\uD1BB\\uD1BD-\\uD1D7\\uD1D9-\\uD1F3\\uD1F5-\\uD20F\\uD211-\\uD22B\\uD22D-\\uD247\\uD249-\\uD263\\uD265-\\uD27F\\uD281-\\uD29B\\uD29D-\\uD2B7\\uD2B9-\\uD2D3\\uD2D5-\\uD2EF\\uD2F1-\\uD30B\\uD30D-\\uD327\\uD329-\\uD343\\uD345-\\uD35F\\uD361-\\uD37B\\uD37D-\\uD397\\uD399-\\uD3B3\\uD3B5-\\uD3CF\\uD3D1-\\uD3EB\\uD3ED-\\uD407\\uD409-\\uD423\\uD425-\\uD43F\\uD441-\\uD45B\\uD45D-\\uD477\\uD479-\\uD493\\uD495-\\uD4AF\\uD4B1-\\uD4CB\\uD4CD-\\uD4E7\\uD4E9-\\uD503\\uD505-\\uD51F\\uD521-\\uD53B\\uD53D-\\uD557\\uD559-\\uD573\\uD575-\\uD58F\\uD591-\\uD5AB\\uD5AD-\\uD5C7\\uD5C9-\\uD5E3\\uD5E5-\\uD5FF\\uD601-\\uD61B\\uD61D-\\uD637\\uD639-\\uD653\\uD655-\\uD66F\\uD671-\\uD68B\\uD68D-\\uD6A7\\uD6A9-\\uD6C3\\uD6C5-\\uD6DF\\uD6E1-\\uD6FB\\uD6FD-\\uD717\\uD719-\\uD733\\uD735-\\uD74F\\uD751-\\uD76B\\uD76D-\\uD787\\uD789-\\uD7A3]",
							$LinkingConsonant:
								"[\\u0915-\\u0939\\u0958-\\u095F\\u0978-\\u097F\\u0995-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09DC\\u09DD\\u09DF\\u09F0\\u09F1\\u0A95-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0AF9\\u0B15-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B5C\\u0B5D\\u0B5F\\u0B71\\u0C15-\\u0C28\\u0C2A-\\u0C39\\u0C58-\\u0C5A\\u0D15-\\u0D3A]",
							$Prepend:
								"(?:[\\u0600-\\u0605\\u06DD\\u070F\\u0890\\u0891\\u08E2\\u0D4E]|\\uD804[\\uDCBD\\uDCCD\\uDDC2\\uDDC3\\uDFD1]|\\uD806[\\uDD3F\\uDD41\\uDE3A\\uDE84-\\uDE89]|\\uD807[\\uDD46\\uDF02])",
							$RI: "(?:\\uD83C[\\uDDE6-\\uDDFF])",
							$SpacingMark:
								"(?:[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u094F\\u0982\\u0983\\u09BF\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC1\\u0CC3\\u0CC4\\u0CF3\\u0D02\\u0D03\\u0D3F\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D82\\u0D83\\u0DD0\\u0DD1\\u0DD8-\\u0DDE\\u0DF2\\u0DF3\\u0E33\\u0EB3\\u0F3E\\u0F3F\\u0F7F\\u1031\\u103B\\u103C\\u1056\\u1057\\u1084\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u1A19\\u1A1A\\u1A55\\u1A57\\u1A6D-\\u1A72\\u1B04\\u1B3E-\\u1B41\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF7\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BE\\uA9BF\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAAEB\\uAAEE\\uAAEF\\uAAF5\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]|\\uD804[\\uDC00\\uDC02\\uDC82\\uDCB0-\\uDCB2\\uDCB7\\uDCB8\\uDD2C\\uDD45\\uDD46\\uDD82\\uDDB3-\\uDDB5\\uDDBF\\uDDCE\\uDE2C-\\uDE2E\\uDE32\\uDE33\\uDEE0-\\uDEE2\\uDF02\\uDF03\\uDF3F\\uDF41-\\uDF44\\uDF47\\uDF48\\uDF4B\\uDF4C\\uDF62\\uDF63\\uDFB9\\uDFBA\\uDFCA\\uDFCC\\uDFCD]|\\uD805[\\uDC35-\\uDC37\\uDC40\\uDC41\\uDC45\\uDCB1\\uDCB2\\uDCB9\\uDCBB\\uDCBC\\uDCBE\\uDCC1\\uDDB0\\uDDB1\\uDDB8-\\uDDBB\\uDDBE\\uDE30-\\uDE32\\uDE3B\\uDE3C\\uDE3E\\uDEAC\\uDEAE\\uDEAF\\uDF1E\\uDF26]|\\uD806[\\uDC2C-\\uDC2E\\uDC38\\uDD31-\\uDD35\\uDD37\\uDD38\\uDD40\\uDD42\\uDDD1-\\uDDD3\\uDDDC-\\uDDDF\\uDDE4\\uDE39\\uDE57\\uDE58\\uDE97]|\\uD807[\\uDC2F\\uDC3E\\uDCA9\\uDCB1\\uDCB4\\uDD8A-\\uDD8E\\uDD93\\uDD94\\uDD96\\uDEF5\\uDEF6\\uDF03\\uDF34\\uDF35\\uDF3E\\uDF3F]|\\uD818[\\uDD2A-\\uDD2C]|\\uD81B[\\uDF51-\\uDF87])",
							$T: "[\\u11A8-\\u11FF\\uD7CB-\\uD7FB]",
							$V: "(?:[\\u1160-\\u11A7\\uD7B0-\\uD7C6]|\\uD81B[\\uDD63\\uDD67-\\uDD6A])",
							$ZWJ: "\\u200D",
						},
					},
					sentence: {
						segmentRules: {
							10: {
								after: "($Sp|$ParaSep)",
								before: "$SATerm$Close*$Sp*",
								breaks: !1,
							},
							11: {
								before: "$SATerm$Close*$Sp*$ParaSep?",
								breaks: !0,
							},
							3: { after: "$LF", before: "$CR", breaks: !1 },
							4: { before: "$ParaSep", breaks: !0 },
							5: { after: "(?:$Format|$Extend)", breaks: !1 },
							6: {
								after: "$Numeric",
								before: "$ATerm",
								breaks: !1,
							},
							7: {
								after: "$Upper",
								before: "($Upper|$Lower)$ATerm",
								breaks: !1,
							},
							8: {
								after: "$NotPreLower_*$Lower",
								before: "$ATerm$Close*$Sp*",
								breaks: !1,
							},
							8.1: {
								after: "($SContinue|$SATerm)",
								before: "$SATerm$Close*$Sp*",
								breaks: !1,
							},
							9: {
								after: "($Close|$Sp|$ParaSep)",
								before: "$SATerm$Close*",
								breaks: !1,
							},
							998: { after: "$Any", breaks: !1 },
						},
						suppressions: [],
						variables: {
							$ATerm: "([\\.\\u2024\\uFE52\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Any: "(?:[\\0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
							$CR: "\\r",
							$Close: `((?:["'-\\)\\[\\]\\{\\}\\xAB\\xBB\\u0F3A-\\u0F3D\\u169B\\u169C\\u2018-\\u201F\\u2039\\u203A\\u2045\\u2046\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u275B-\\u2760\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2E00-\\u2E0D\\u2E1C\\u2E1D\\u2E20-\\u2E29\\u2E42\\u2E55-\\u2E5C\\u3008-\\u3011\\u3014-\\u301B\\u301D-\\u301F\\uFD3E\\uFD3F\\uFE17\\uFE18\\uFE35-\\uFE44\\uFE47\\uFE48\\uFE59-\\uFE5E\\uFF08\\uFF09\\uFF3B\\uFF3D\\uFF5B\\uFF5D\\uFF5F\\uFF60\\uFF62\\uFF63]|\\uD83D[\\uDE76-\\uDE78])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)`,
							$Extend:
								"(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u200D\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
							$FE: "(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
							$Format:
								"(?:[\\xAD\\u061C\\u070F\\u180E\\u200B\\u200E\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40\\uDC01)",
							$LF: "\\n",
							$Lower: "((?:[a-z\\xAA\\xB5\\xBA\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02B8\\u02C0\\u02C1\\u02E0-\\u02E4\\u0371\\u0373\\u0377\\u037A-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10FC\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1C8A\\u1D00-\\u1DBF\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u2071\\u207F\\u2090-\\u209C\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2170-\\u217F\\u2184\\u24D0-\\u24E9\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7D\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B-\\uA69D\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7CD\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7DB\\uA7F2-\\uA7F4\\uA7F6\\uA7F8-\\uA7FA\\uAB30-\\uAB5A\\uAB5C-\\uAB69\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A]|\\uD801[\\uDC28-\\uDC4F\\uDCD8-\\uDCFB\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDF80\\uDF83-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD803[\\uDCC0-\\uDCF2\\uDD70-\\uDD85]|\\uD806[\\uDCC0-\\uDCDF]|\\uD81B[\\uDE60-\\uDE7F]|\\uD835[\\uDC1A-\\uDC33\\uDC4E-\\uDC54\\uDC56-\\uDC67\\uDC82-\\uDC9B\\uDCB6-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDCCF\\uDCEA-\\uDD03\\uDD1E-\\uDD37\\uDD52-\\uDD6B\\uDD86-\\uDD9F\\uDDBA-\\uDDD3\\uDDEE-\\uDE07\\uDE22-\\uDE3B\\uDE56-\\uDE6F\\uDE8A-\\uDEA5\\uDEC2-\\uDEDA\\uDEDC-\\uDEE1\\uDEFC-\\uDF14\\uDF16-\\uDF1B\\uDF36-\\uDF4E\\uDF50-\\uDF55\\uDF70-\\uDF88\\uDF8A-\\uDF8F\\uDFAA-\\uDFC2\\uDFC4-\\uDFC9\\uDFCB]|\\uD837[\\uDF00-\\uDF09\\uDF0B-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D]|\\uD83A[\\uDD22-\\uDD43])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$NotPreLower_:
								'(?:[\\0-\\t\\x0B\\f\\x0E- "-\\x2D\\/->@\\[-`\\{-\\x84\\x86-\\xA9\\xAB-\\xB4\\xB6-\\xB9\\xBB-\\xBF\\xD7\\xF7\\u02C2-\\u02C5\\u02D2-\\u02DF\\u02E5-\\u02EB\\u02ED\\u02EF-\\u036F\\u0375\\u0378\\u0379\\u037E\\u0380-\\u0385\\u0387\\u038B\\u038D\\u03A2\\u03F6\\u0482-\\u0489\\u0530\\u0557\\u0558\\u055A-\\u055F\\u058A-\\u05CF\\u05EB-\\u05EE\\u05F4-\\u061C\\u064B-\\u066D\\u0670\\u06D6-\\u06E4\\u06E7-\\u06ED\\u06F0-\\u06F9\\u06FD\\u06FE\\u0703-\\u070F\\u0711\\u0730-\\u074C\\u07A6-\\u07B0\\u07B2-\\u07C9\\u07EB-\\u07F3\\u07F6-\\u07F8\\u07FB-\\u07FF\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u0836\\u0838\\u083A-\\u083C\\u083F\\u0859-\\u085F\\u086B-\\u086F\\u0888\\u088F-\\u089F\\u08CA-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0966-\\u0970\\u0981-\\u0984\\u098D\\u098E\\u0991\\u0992\\u09A9\\u09B1\\u09B3-\\u09B5\\u09BA-\\u09BC\\u09BE-\\u09CD\\u09CF-\\u09DB\\u09DE\\u09E2-\\u09EF\\u09F2-\\u09FB\\u09FD-\\u0A04\\u0A0B-\\u0A0E\\u0A11\\u0A12\\u0A29\\u0A31\\u0A34\\u0A37\\u0A3A-\\u0A58\\u0A5D\\u0A5F-\\u0A71\\u0A75-\\u0A84\\u0A8E\\u0A92\\u0AA9\\u0AB1\\u0AB4\\u0ABA-\\u0ABC\\u0ABE-\\u0ACF\\u0AD1-\\u0ADF\\u0AE2-\\u0AF8\\u0AFA-\\u0B04\\u0B0D\\u0B0E\\u0B11\\u0B12\\u0B29\\u0B31\\u0B34\\u0B3A-\\u0B3C\\u0B3E-\\u0B5B\\u0B5E\\u0B62-\\u0B70\\u0B72-\\u0B82\\u0B84\\u0B8B-\\u0B8D\\u0B91\\u0B96-\\u0B98\\u0B9B\\u0B9D\\u0BA0-\\u0BA2\\u0BA5-\\u0BA7\\u0BAB-\\u0BAD\\u0BBA-\\u0BCF\\u0BD1-\\u0C04\\u0C0D\\u0C11\\u0C29\\u0C3A-\\u0C3C\\u0C3E-\\u0C57\\u0C5B\\u0C5C\\u0C5E\\u0C5F\\u0C62-\\u0C7F\\u0C81-\\u0C84\\u0C8D\\u0C91\\u0CA9\\u0CB4\\u0CBA-\\u0CBC\\u0CBE-\\u0CDC\\u0CDF\\u0CE2-\\u0CF0\\u0CF3-\\u0D03\\u0D0D\\u0D11\\u0D3B\\u0D3C\\u0D3E-\\u0D4D\\u0D4F-\\u0D53\\u0D57-\\u0D5E\\u0D62-\\u0D79\\u0D80-\\u0D84\\u0D97-\\u0D99\\u0DB2\\u0DBC\\u0DBE\\u0DBF\\u0DC7-\\u0E00\\u0E31\\u0E34-\\u0E3F\\u0E47-\\u0E80\\u0E83\\u0E85\\u0E8B\\u0EA4\\u0EA6\\u0EB1\\u0EB4-\\u0EBC\\u0EBE\\u0EBF\\u0EC5\\u0EC7-\\u0EDB\\u0EE0-\\u0EFF\\u0F01-\\u0F3F\\u0F48\\u0F6D-\\u0F87\\u0F8D-\\u0FFF\\u102B-\\u103E\\u1040-\\u1049\\u104C-\\u104F\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F-\\u109F\\u10C6\\u10C8-\\u10CC\\u10CE\\u10CF\\u10FB\\u1249\\u124E\\u124F\\u1257\\u1259\\u125E\\u125F\\u1289\\u128E\\u128F\\u12B1\\u12B6\\u12B7\\u12BF\\u12C1\\u12C6\\u12C7\\u12D7\\u1311\\u1316\\u1317\\u135B-\\u1361\\u1363-\\u1366\\u1369-\\u137F\\u1390-\\u139F\\u13F6\\u13F7\\u13FE-\\u1400\\u166D\\u1680\\u169B-\\u169F\\u16EB-\\u16ED\\u16F9-\\u16FF\\u1712-\\u171E\\u1732-\\u1734\\u1737-\\u173F\\u1752-\\u175F\\u176D\\u1771-\\u177F\\u17B4-\\u17D3\\u17D6\\u17D8-\\u17DB\\u17DD-\\u1802\\u1804-\\u1808\\u180A-\\u181F\\u1879-\\u187F\\u1885\\u1886\\u18A9\\u18AB-\\u18AF\\u18F6-\\u18FF\\u191F-\\u1943\\u1946-\\u194F\\u196E\\u196F\\u1975-\\u197F\\u19AC-\\u19AF\\u19CA-\\u19FF\\u1A17-\\u1A1F\\u1A55-\\u1AA6\\u1AAC-\\u1B04\\u1B34-\\u1B44\\u1B4D\\u1B50-\\u1B59\\u1B5C\\u1B5D\\u1B60-\\u1B7C\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BB0-\\u1BB9\\u1BE6-\\u1BFF\\u1C24-\\u1C3A\\u1C3D-\\u1C4C\\u1C50-\\u1C59\\u1C8B-\\u1C8F\\u1CBB\\u1CBC\\u1CC0-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1CFB-\\u1CFF\\u1DC0-\\u1DFF\\u1F16\\u1F17\\u1F1E\\u1F1F\\u1F46\\u1F47\\u1F4E\\u1F4F\\u1F58\\u1F5A\\u1F5C\\u1F5E\\u1F7E\\u1F7F\\u1FB5\\u1FBD\\u1FBF-\\u1FC1\\u1FC5\\u1FCD-\\u1FCF\\u1FD4\\u1FD5\\u1FDC-\\u1FDF\\u1FED-\\u1FF1\\u1FF5\\u1FFD-\\u2023\\u2025-\\u2027\\u202A-\\u203B\\u203E-\\u2046\\u204A-\\u2070\\u2072-\\u207E\\u2080-\\u208F\\u209D-\\u2101\\u2103-\\u2106\\u2108\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u212E\\u213A\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u214F-\\u215F\\u2189-\\u24B5\\u24EA-\\u2BFF\\u2CE5-\\u2CEA\\u2CEF-\\u2CF1\\u2CF4-\\u2CF8\\u2CFC-\\u2CFF\\u2D26\\u2D28-\\u2D2C\\u2D2E\\u2D2F\\u2D68-\\u2D6E\\u2D70-\\u2D7F\\u2D97-\\u2D9F\\u2DA7\\u2DAF\\u2DB7\\u2DBF\\u2DC7\\u2DCF\\u2DD7\\u2DDF-\\u2E2D\\u2E30-\\u2E3B\\u2E3D-\\u2E52\\u2E55-\\u3001\\u3003\\u3004\\u3008-\\u3020\\u302A-\\u3030\\u3036\\u3037\\u303D-\\u3040\\u3097-\\u309C\\u30A0\\u30FB\\u3100-\\u3104\\u3130\\u318F-\\u319F\\u31C0-\\u31EF\\u3200-\\u33FF\\u4DC0-\\u4DFF\\uA48D-\\uA4CF\\uA4FE\\uA60D\\uA620-\\uA629\\uA62C-\\uA63F\\uA66F-\\uA67E\\uA69E\\uA69F\\uA6F0-\\uA6F2\\uA6F4-\\uA6F6\\uA6F8-\\uA716\\uA720\\uA721\\uA789\\uA78A\\uA7CE\\uA7CF\\uA7D2\\uA7D4\\uA7DD-\\uA7F1\\uA802\\uA806\\uA80B\\uA823-\\uA83F\\uA874\\uA875\\uA878-\\uA881\\uA8B4-\\uA8CD\\uA8D0-\\uA8F1\\uA8F8-\\uA8FA\\uA8FC\\uA8FF-\\uA909\\uA926-\\uA92E\\uA947-\\uA95F\\uA97D-\\uA983\\uA9B3-\\uA9C7\\uA9CA-\\uA9CE\\uA9D0-\\uA9DF\\uA9E5\\uA9F0-\\uA9F9\\uA9FF\\uAA29-\\uAA3F\\uAA43\\uAA4C-\\uAA5C\\uAA77-\\uAA79\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAC3-\\uAADA\\uAADE\\uAADF\\uAAEB-\\uAAEF\\uAAF5-\\uAB00\\uAB07\\uAB08\\uAB0F\\uAB10\\uAB17-\\uAB1F\\uAB27\\uAB2F\\uAB5B\\uAB6A-\\uAB6F\\uABE3-\\uABEA\\uABEC-\\uABFF\\uD7A4-\\uD7AF\\uD7C7-\\uD7CA\\uD7FC-\\uD7FF\\uE000-\\uF8FF\\uFA6E\\uFA6F\\uFADA-\\uFAFF\\uFB07-\\uFB12\\uFB18-\\uFB1C\\uFB1E\\uFB29\\uFB37\\uFB3D\\uFB3F\\uFB42\\uFB45\\uFBB2-\\uFBD2\\uFD3E-\\uFD4F\\uFD90\\uFD91\\uFDC8-\\uFDEF\\uFDFC-\\uFE11\\uFE13\\uFE14\\uFE17-\\uFE51\\uFE53-\\uFE55\\uFE58-\\uFE6F\\uFE75\\uFEFD-\\uFF00\\uFF02-\\uFF0D\\uFF0F-\\uFF1E\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF60\\uFF62-\\uFF65\\uFF9E\\uFF9F\\uFFBF-\\uFFC1\\uFFC8\\uFFC9\\uFFD0\\uFFD1\\uFFD8\\uFFD9\\uFFDD-\\uFFFF]|\\uD800[\\uDC0C\\uDC27\\uDC3B\\uDC3E\\uDC4E\\uDC4F\\uDC5E-\\uDC7F\\uDCFB-\\uDD3F\\uDD75-\\uDE7F\\uDE9D-\\uDE9F\\uDED1-\\uDEFF\\uDF20-\\uDF2C\\uDF4B-\\uDF4F\\uDF76-\\uDF7F\\uDF9E\\uDF9F\\uDFC4-\\uDFC7\\uDFD0\\uDFD6-\\uDFFF]|\\uD801[\\uDC9E-\\uDCAF\\uDCD4-\\uDCD7\\uDCFC-\\uDCFF\\uDD28-\\uDD2F\\uDD64-\\uDD6F\\uDD7B\\uDD8B\\uDD93\\uDD96\\uDDA2\\uDDB2\\uDDBA\\uDDBD-\\uDDBF\\uDDF4-\\uDDFF\\uDF37-\\uDF3F\\uDF56-\\uDF5F\\uDF68-\\uDF7F\\uDF86\\uDFB1\\uDFBB-\\uDFFF]|\\uD802[\\uDC06\\uDC07\\uDC09\\uDC36\\uDC39-\\uDC3B\\uDC3D\\uDC3E\\uDC56-\\uDC5F\\uDC77-\\uDC7F\\uDC9F-\\uDCDF\\uDCF3\\uDCF6-\\uDCFF\\uDD16-\\uDD1F\\uDD3A-\\uDD7F\\uDDB8-\\uDDBD\\uDDC0-\\uDDFF\\uDE01-\\uDE0F\\uDE14\\uDE18\\uDE36-\\uDE55\\uDE58-\\uDE5F\\uDE7D-\\uDE7F\\uDE9D-\\uDEBF\\uDEC8\\uDEE5-\\uDEFF\\uDF36-\\uDF3F\\uDF56-\\uDF5F\\uDF73-\\uDF7F\\uDF92-\\uDFFF]|\\uD803[\\uDC49-\\uDC7F\\uDCB3-\\uDCBF\\uDCF3-\\uDCFF\\uDD24-\\uDD49\\uDD66-\\uDD6E\\uDD86-\\uDE7F\\uDEAA-\\uDEAF\\uDEB2-\\uDEC1\\uDEC5-\\uDEFF\\uDF1D-\\uDF26\\uDF28-\\uDF2F\\uDF46-\\uDF54\\uDF5A-\\uDF6F\\uDF82-\\uDF85\\uDF8A-\\uDFAF\\uDFC5-\\uDFDF\\uDFF7-\\uDFFF]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC49-\\uDC70\\uDC73\\uDC74\\uDC76-\\uDC82\\uDCB0-\\uDCBD\\uDCC2-\\uDCCF\\uDCE9-\\uDD02\\uDD27-\\uDD40\\uDD45\\uDD46\\uDD48-\\uDD4F\\uDD73-\\uDD75\\uDD77-\\uDD82\\uDDB3-\\uDDC0\\uDDC7-\\uDDCC\\uDDCE-\\uDDD9\\uDDDB\\uDDDD\\uDDE0-\\uDDFF\\uDE12\\uDE2C-\\uDE37\\uDE3A\\uDE3D\\uDE3E\\uDE41-\\uDE7F\\uDE87\\uDE89\\uDE8E\\uDE9E\\uDEAA-\\uDEAF\\uDEDF-\\uDF04\\uDF0D\\uDF0E\\uDF11\\uDF12\\uDF29\\uDF31\\uDF34\\uDF3A-\\uDF3C\\uDF3E-\\uDF4F\\uDF51-\\uDF5C\\uDF62-\\uDF7F\\uDF8A\\uDF8C\\uDF8D\\uDF8F\\uDFB6\\uDFB8-\\uDFD0\\uDFD2\\uDFD6-\\uDFFF]|\\uD805[\\uDC35-\\uDC46\\uDC4D-\\uDC5E\\uDC62-\\uDC7F\\uDCB0-\\uDCC3\\uDCC6\\uDCC8-\\uDD7F\\uDDAF-\\uDDC1\\uDDC4-\\uDDC8\\uDDDC-\\uDDFF\\uDE30-\\uDE40\\uDE43\\uDE45-\\uDE7F\\uDEAB-\\uDEB7\\uDEB9-\\uDEFF\\uDF1B-\\uDF3B\\uDF3F\\uDF47-\\uDFFF]|\\uD806[\\uDC2C-\\uDC9F\\uDCE0-\\uDCFE\\uDD07\\uDD08\\uDD0A\\uDD0B\\uDD14\\uDD17\\uDD30-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDD45\\uDD47-\\uDD9F\\uDDA8\\uDDA9\\uDDD1-\\uDDE0\\uDDE2\\uDDE4-\\uDDFF\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE41\\uDE44-\\uDE4F\\uDE51-\\uDE5B\\uDE8A-\\uDE9A\\uDE9E-\\uDEAF\\uDEF9-\\uDFBF\\uDFE1-\\uDFFF]|\\uD807[\\uDC09\\uDC2F-\\uDC3F\\uDC43-\\uDC71\\uDC90-\\uDCFF\\uDD07\\uDD0A\\uDD31-\\uDD45\\uDD47-\\uDD5F\\uDD66\\uDD69\\uDD8A-\\uDD97\\uDD99-\\uDEDF\\uDEF3-\\uDEF6\\uDEF9-\\uDF01\\uDF03\\uDF11\\uDF34-\\uDF42\\uDF45-\\uDFAF\\uDFB1-\\uDFFF]|\\uD808[\\uDF9A-\\uDFFF]|\\uD809[\\uDC6F-\\uDC7F\\uDD44-\\uDFFF]|[\\uD80A\\uD812-\\uD817\\uD819\\uD824-\\uD82A\\uD82D\\uD82E\\uD830-\\uD834\\uD83D-\\uD83F\\uD87C\\uD87D\\uD87F\\uD889-\\uDBFF][\\uDC00-\\uDFFF]|\\uD80B[\\uDC00-\\uDF8F\\uDFF1-\\uDFFF]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC5F]|\\uD810[\\uDFFB-\\uDFFF]|\\uD811[\\uDE47-\\uDFFF]|\\uD818[\\uDC00-\\uDCFF\\uDD1E-\\uDFFF]|\\uD81A[\\uDE39-\\uDE3F\\uDE5F-\\uDE6D\\uDEBF-\\uDECF\\uDEEE-\\uDEF4\\uDEF6-\\uDEFF\\uDF30-\\uDF36\\uDF39-\\uDF3F\\uDF45-\\uDF62\\uDF78-\\uDF7C\\uDF90-\\uDFFF]|\\uD81B[\\uDC00-\\uDD3F\\uDD6D\\uDD70-\\uDE3F\\uDE80-\\uDE97\\uDE99-\\uDEFF\\uDF4B-\\uDF4F\\uDF51-\\uDF92\\uDFA0-\\uDFDF\\uDFE2\\uDFE4-\\uDFFF]|\\uD821[\\uDFF8-\\uDFFF]|\\uD823[\\uDCD6-\\uDCFE\\uDD09-\\uDFFF]|\\uD82B[\\uDC00-\\uDFEF\\uDFF4\\uDFFC\\uDFFF]|\\uD82C[\\uDD23-\\uDD31\\uDD33-\\uDD4F\\uDD53\\uDD54\\uDD56-\\uDD63\\uDD68-\\uDD6F\\uDEFC-\\uDFFF]|\\uD82F[\\uDC6B-\\uDC6F\\uDC7D-\\uDC7F\\uDC89-\\uDC8F\\uDC9A-\\uDC9E\\uDCA0-\\uDFFF]|\\uD835[\\uDC55\\uDC9D\\uDCA0\\uDCA1\\uDCA3\\uDCA4\\uDCA7\\uDCA8\\uDCAD\\uDCBA\\uDCBC\\uDCC4\\uDD06\\uDD0B\\uDD0C\\uDD15\\uDD1D\\uDD3A\\uDD3F\\uDD45\\uDD47-\\uDD49\\uDD51\\uDEA6\\uDEA7\\uDEC1\\uDEDB\\uDEFB\\uDF15\\uDF35\\uDF4F\\uDF6F\\uDF89\\uDFA9\\uDFC3\\uDFCC-\\uDFFF]|\\uD836[\\uDC00-\\uDE87\\uDE89-\\uDFFF]|\\uD837[\\uDC00-\\uDEFF\\uDF1F-\\uDF24\\uDF2B-\\uDFFF]|\\uD838[\\uDC00-\\uDC2F\\uDC6E-\\uDCFF\\uDD2D-\\uDD36\\uDD3E-\\uDD4D\\uDD4F-\\uDE8F\\uDEAE-\\uDEBF\\uDEEC-\\uDFFF]|\\uD839[\\uDC00-\\uDCCF\\uDCEC-\\uDDCF\\uDDEE\\uDDEF\\uDDF1-\\uDFDF\\uDFE7\\uDFEC\\uDFEF\\uDFFF]|\\uD83A[\\uDCC5-\\uDCFF\\uDD44-\\uDD4A\\uDD4C-\\uDFFF]|\\uD83B[\\uDC00-\\uDDFF\\uDE04\\uDE20\\uDE23\\uDE25\\uDE26\\uDE28\\uDE33\\uDE38\\uDE3A\\uDE3C-\\uDE41\\uDE43-\\uDE46\\uDE48\\uDE4A\\uDE4C\\uDE50\\uDE53\\uDE55\\uDE56\\uDE58\\uDE5A\\uDE5C\\uDE5E\\uDE60\\uDE63\\uDE65\\uDE66\\uDE6B\\uDE73\\uDE78\\uDE7D\\uDE7F\\uDE8A\\uDE9C-\\uDEA0\\uDEA4\\uDEAA\\uDEBC-\\uDFFF]|\\uD83C[\\uDC00-\\uDD2F\\uDD4A-\\uDD4F\\uDD6A-\\uDD6F\\uDD8A-\\uDFFF]|\\uD869[\\uDEE0-\\uDEFF]|\\uD86D[\\uDF3A-\\uDF3F]|\\uD86E[\\uDC1E\\uDC1F]|\\uD873[\\uDEA2-\\uDEAF]|\\uD87A[\\uDFE1-\\uDFEF]|\\uD87B[\\uDE5E-\\uDFFF]|\\uD87E[\\uDE1E-\\uDFFF]|\\uD884[\\uDF4B-\\uDF4F]|\\uD888[\\uDFB0-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])',
							$Numeric:
								"((?:[0-9\\u0600-\\u0605\\u0660-\\u0669\\u066B\\u066C\\u06DD\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0890\\u0891\\u08E2\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]|\\uD801[\\uDCA0-\\uDCA9]|[\\uD803\\uD818][\\uDD30-\\uDD39\\uDD40-\\uDD49]|\\uD804[\\uDC66-\\uDC6F\\uDCBD\\uDCCD\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9\\uDEF0-\\uDEF9]|\\uD805[\\uDC50-\\uDC59\\uDCD0-\\uDCD9\\uDE50-\\uDE59\\uDEC0-\\uDEC9\\uDED0-\\uDEE3\\uDF30-\\uDF39]|\\uD806[\\uDCE0-\\uDCE9\\uDD50-\\uDD59\\uDFF0-\\uDFF9]|\\uD807[\\uDC50-\\uDC59\\uDD50-\\uDD59\\uDDA0-\\uDDA9\\uDF50-\\uDF59]|\\uD81A[\\uDE60-\\uDE69\\uDEC0-\\uDEC9\\uDF50-\\uDF59]|\\uD81B[\\uDD70-\\uDD79]|\\uD833[\\uDCF0-\\uDCF9]|\\uD835[\\uDFCE-\\uDFFF]|\\uD838[\\uDD40-\\uDD49\\uDEF0-\\uDEF9]|\\uD839[\\uDCF0-\\uDCF9\\uDDF1-\\uDDFA]|\\uD83A[\\uDD50-\\uDD59]|\\uD83E[\\uDFF0-\\uDFF9])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$OLetter:
								"((?:[\\u01BB\\u01C0-\\u01C3\\u0294\\u02B9-\\u02BF\\u02C6-\\u02D1\\u02EC\\u02EE\\u0374\\u0559\\u05D0-\\u05EA\\u05EF-\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E86-\\u0E8A\\u0E8C-\\u0EA3\\u0EA5\\u0EA7-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u10FD-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u2135-\\u2138\\u2180-\\u2182\\u2185-\\u2188\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA66E\\uA67F\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA788\\uA78F\\uA7F7\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC50-\\uDC9D\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF81\\uDF82]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDD00-\\uDD23\\uDD4A-\\uDD4F\\uDD6F\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8\\uDF00-\\uDF1A\\uDF40-\\uDF46]|\\uD806[\\uDC00-\\uDC2B\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00-\\uDD22\\uDD32\\uDD50-\\uDD52\\uDD55\\uDD64-\\uDD67\\uDD70-\\uDEFB]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD837\\uDF0A|\\uD838[\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$ParaSep: "([\\x85\\u2028\\u2029]|\\r|\\n)",
							$SATerm:
								"(((?:[!\\?\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)|([\\.\\u2024\\uFE52\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*))",
							$SContinue:
								"([,\\x2D:;\\u037E\\u055D\\u060C\\u060D\\u07F8\\u1802\\u1808\\u2013\\u2014\\u3001\\uFE10\\uFE11\\uFE13\\uFE14\\uFE31\\uFE32\\uFE50\\uFE51\\uFE54\\uFE55\\uFE58\\uFE63\\uFF0C\\uFF0D\\uFF1A\\uFF1B\\uFF64](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$STerm: "((?:[!\\?\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Sep: "[\\x85\\u2028\\u2029]",
							$Sp: "([\\t\\x0B\\f \\xA0\\u1680\\u2000-\\u200A\\u202F\\u205F\\u3000](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Upper: "((?:[A-Z\\xC0-\\xD6\\xD8-\\xDE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017B\\u017D\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019C\\u019D\\u019F\\u01A0\\u01A2\\u01A4\\u01A6\\u01A7\\u01A9\\u01AC\\u01AE\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7\\u01B8\\u01BC\\u01C4\\u01C5\\u01C7\\u01C8\\u01CA\\u01CB\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F2\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A\\u023B\\u023D\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0528\\u052A\\u052C\\u052E\\u0531-\\u0556\\u10A0-\\u10C5\\u10C7\\u10CD\\u13A0-\\u13F5\\u1C89\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FB8-\\u1FBC\\u1FC8-\\u1FCC\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFC\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E\\u213F\\u2145\\u2160-\\u216F\\u2183\\u24B6-\\u24CF\\u2C00-\\u2C2F\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\u2CF2\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA698\\uA69A\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA792\\uA796\\uA798\\uA79A\\uA79C\\uA79E\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uA7AA-\\uA7AE\\uA7B0-\\uA7B4\\uA7B6\\uA7B8\\uA7BA\\uA7BC\\uA7BE\\uA7C0\\uA7C2\\uA7C4-\\uA7C7\\uA7C9\\uA7CB\\uA7CC\\uA7D0\\uA7D6\\uA7D8\\uA7DA\\uA7DC\\uA7F5\\uFF21-\\uFF3A]|\\uD801[\\uDC00-\\uDC27\\uDCB0-\\uDCD3\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95]|\\uD803[\\uDC80-\\uDCB2\\uDD50-\\uDD65]|\\uD806[\\uDCA0-\\uDCBF]|\\uD81B[\\uDE40-\\uDE5F]|\\uD835[\\uDC00-\\uDC19\\uDC34-\\uDC4D\\uDC68-\\uDC81\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB5\\uDCD0-\\uDCE9\\uDD04\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD38\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD6C-\\uDD85\\uDDA0-\\uDDB9\\uDDD4-\\uDDED\\uDE08-\\uDE21\\uDE3C-\\uDE55\\uDE70-\\uDE89\\uDEA8-\\uDEC0\\uDEE2-\\uDEFA\\uDF1C-\\uDF34\\uDF56-\\uDF6E\\uDF90-\\uDFA8\\uDFCA]|\\uD83A[\\uDD00-\\uDD21]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
						},
					},
					word: {
						segmentRules: {
							10: {
								after: "$AHLetter",
								before: "$Numeric",
								breaks: !1,
							},
							11: {
								after: "$Numeric",
								before: "$Numeric($MidNum|$MidNumLetQ)",
								breaks: !1,
							},
							12: {
								after: "($MidNum|$MidNumLetQ)$Numeric",
								before: "$Numeric",
								breaks: !1,
							},
							13: {
								after: "$Katakana",
								before: "$Katakana",
								breaks: !1,
							},
							13.1: {
								after: "$ExtendNumLet",
								before: "($AHLetter|$Numeric|$Katakana|$ExtendNumLet)",
								breaks: !1,
							},
							13.2: {
								after: "($AHLetter|$Numeric|$Katakana)",
								before: "$ExtendNumLet",
								breaks: !1,
							},
							15: {
								after: "$RI",
								before: "^($RI$RI)*$RI",
								breaks: !1,
							},
							16: {
								after: "$RI",
								before: "[^\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0600-\\u0605\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DD\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0890\\u0891\\u0898-\\u089F\\u08CA-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB\\uDDFD\\uDEE0\\uDF76-\\uDF7A\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6\\uDD24-\\uDD27\\uDEAB\\uDEAC\\uDEFD-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCBD\\uDCC2\\uDCCD\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDC30-\\uDC40\\uDC47-\\uDC55\\uDEF0-\\uDEF4\\uDF30-\\uDF36\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1\\uDC9D\\uDC9E\\uDCA0-\\uDCA3\\uDF00-\\uDF2D\\uDF30-\\uDF46\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF\\uDCEC-\\uDCEF\\uDCD0-\\uDCD6\\uDD44-\\uDD4A\\uDDE6-\\uDDFF\\uDFFB-\\uDFFF\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF]($RI$RI)*$RI",
								breaks: !1,
							},
							3: { after: "$LF", before: "$CR", breaks: !1 },
							3.1: { before: "($Newline|$CR|$LF)", breaks: !0 },
							3.2: { after: "($Newline|$CR|$LF)", breaks: !0 },
							3.3: {
								after: "$ExtPict",
								before: "$ZWJ",
								breaks: !1,
							},
							3.4: {
								after: "$WSegSpace",
								before: "$WSegSpace",
								breaks: !1,
							},
							4: {
								after: "(?:$Format|$Extend|$ZWJ)",
								before: "$NotBreak_",
								breaks: !1,
							},
							5: {
								after: "$AHLetter",
								before: "$AHLetter",
								breaks: !1,
							},
							6: {
								after: "($MidLetter|$MidNumLetQ)$AHLetter",
								before: "$AHLetter",
								breaks: !1,
							},
							7: {
								after: "$AHLetter",
								before: "$AHLetter($MidLetter|$MidNumLetQ)",
								breaks: !1,
							},
							7.1: {
								after: "$Single_Quote",
								before: "$Hebrew_Letter",
								breaks: !1,
							},
							7.2: {
								after: "$Double_Quote$Hebrew_Letter",
								before: "$Hebrew_Letter",
								breaks: !1,
							},
							7.3: {
								after: "$Hebrew_Letter",
								before: "$Hebrew_Letter$Double_Quote",
								breaks: !1,
							},
							8: {
								after: "$Numeric",
								before: "$Numeric",
								breaks: !1,
							},
							9: {
								after: "$Numeric",
								before: "$AHLetter",
								breaks: !1,
							},
						},
						suppressions: [],
						variables: {
							$AHLetter:
								"(((?:[A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02D7\\u02DE-\\u02FF\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559-\\u055C\\u055E\\u0560-\\u0588\\u058A\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u24B6-\\u24E9\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u303B\\u303C\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA708-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])|[\\u05D0-\\u05EA\\u05EF-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$ALetter:
								"((?:[A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02D7\\u02DE-\\u02FF\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559-\\u055C\\u055E\\u0560-\\u0588\\u058A\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u24B6-\\u24E9\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u303B\\u303C\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA708-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$CR: "\\r",
							$Double_Quote:
								'("(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)',
							$ExtPict:
								"(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2605\\u2607-\\u2612\\u2614-\\u2685\\u2690-\\u2705\\u2708-\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2767\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDCFF\\uDD0D-\\uDD0F\\uDD2F\\uDD6C-\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAD-\\uDDE5\\uDE01-\\uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDFFA]|\\uD83D[\\uDC00-\\uDD3D\\uDD46-\\uDE4F\\uDE80-\\uDEFF\\uDF74-\\uDF7F\\uDFD5-\\uDFFF]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDEFF]|\\uD83F[\\uDC00-\\uDFFD])",
							$Extend:
								"(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
							$ExtendNumLet:
								"([_\\u202F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$FE: "(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
							$Format:
								"(?:[\\xAD\\u061C\\u180E\\u200E\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40\\uDC01)",
							$Hebrew_Letter:
								"([\\u05D0-\\u05EA\\u05EF-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Katakana:
								"((?:[\\u3031-\\u3035\\u309B\\u309C\\u30A0-\\u30FA\\u30FC-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF9D]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00\\uDD20-\\uDD22\\uDD55\\uDD64-\\uDD67])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$LF: "\\n",
							$MidLetter:
								"([:\\xB7\\u0387\\u055F\\u05F4\\u2027\\uFE13\\uFE55\\uFF1A](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$MidNum:
								"([,;\\u037E\\u0589\\u060C\\u060D\\u066C\\u07F8\\u2044\\uFE50\\uFE54\\uFF0C\\uFF1B](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$MidNumLet:
								"([\\.\\u2018\\u2019\\u2024\\uFE52\\uFF07\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$MidNumLetQ:
								"(([\\.\\u2018\\u2019\\u2024\\uFE52\\uFF07\\uFF0E]|')(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Newline: "[\\x0B\\f\\x85\\u2028\\u2029]",
							$NotBreak_:
								"(?:[\\0-\\t\\x0E-\\x84\\x86-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
							$Numeric:
								"((?:[0-9\\u0600-\\u0605\\u0660-\\u0669\\u066B\\u06DD\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0890\\u0891\\u08E2\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]|\\uD801[\\uDCA0-\\uDCA9]|[\\uD803\\uD818][\\uDD30-\\uDD39\\uDD40-\\uDD49]|\\uD804[\\uDC66-\\uDC6F\\uDCBD\\uDCCD\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9\\uDEF0-\\uDEF9]|\\uD805[\\uDC50-\\uDC59\\uDCD0-\\uDCD9\\uDE50-\\uDE59\\uDEC0-\\uDEC9\\uDED0-\\uDEE3\\uDF30-\\uDF39]|\\uD806[\\uDCE0-\\uDCE9\\uDD50-\\uDD59\\uDFF0-\\uDFF9]|\\uD807[\\uDC50-\\uDC59\\uDD50-\\uDD59\\uDDA0-\\uDDA9\\uDF50-\\uDF59]|\\uD81A[\\uDE60-\\uDE69\\uDEC0-\\uDEC9\\uDF50-\\uDF59]|\\uD81B[\\uDD70-\\uDD79]|\\uD833[\\uDCF0-\\uDCF9]|\\uD835[\\uDFCE-\\uDFFF]|\\uD838[\\uDD40-\\uDD49\\uDEF0-\\uDEF9]|\\uD839[\\uDCF0-\\uDCF9\\uDDF1-\\uDDFA]|\\uD83A[\\uDD50-\\uDD59]|\\uD83E[\\uDFF0-\\uDFF9])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$RI: "((?:\\uD83C[\\uDDE6-\\uDDFF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$Single_Quote:
								"('(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
							$WSegSpace:
								"[ \\u1680\\u2000-\\u2006\\u2008-\\u200A\\u205F\\u3000]",
							$ZWJ: "\\u200D",
						},
					},
				},
				ru: {
					sentence: {
						segmentRules: {},
						suppressions: [
							"руб.",
							"янв.",
							"до н. э.",
							"сент.",
							"тел.",
							"дек.",
							"февр.",
							"нояб.",
							"апр.",
							"н. э.",
							"окт.",
							"тыс.",
							"авг.",
							"проф.",
							"н.э.",
							"кв.",
							"ул.",
							"отд.",
						],
						variables: {},
					},
				},
				zh: {},
			})),
		SD
	);
}
var nD = {},
	iF;
function on() {
	if (iF) return nD;
	(iF = 1),
		Object.defineProperty(nD, "__esModule", { value: !0 }),
		(nD.isSurrogate = nD.replaceVariables = void 0);
	var u = function (e, F) {
		var A = /\$[A-Za-z0-9_]+/gm;
		return F.replaceAll(A, function (C) {
			if (!(C in e)) throw new Error("No such variable ".concat(C));
			return e[C];
		});
	};
	nD.replaceVariables = u;
	var D = function (e, F) {
		return (
			55296 <= e.charCodeAt(F - 1) &&
			e.charCodeAt(F - 1) <= 56319 &&
			56320 <= e.charCodeAt(F) &&
			e.charCodeAt(F) <= 57343
		);
	};
	return (nD.isSurrogate = D), nD;
}
var BF;
function ln() {
	if (BF) return bD;
	(BF = 1),
		Object.defineProperty(bD, "__esModule", { value: !0 }),
		(bD.Segmenter = void 0);
	var u = QA,
		D = Bn,
		e = an,
		F = sn(),
		A = on(),
		C = function (o, _, c) {
			return new RegExp(
				""
					.concat(c ? "^" : "")
					.concat((0, A.replaceVariables)(_, o))
					.concat(c ? "" : "$")
			);
		},
		E = function (o) {
			for (
				var _ = {}, c = 0, g = Object.keys(o.segmentRules);
				c < g.length;
				c++
			) {
				var m = g[c],
					h = o.segmentRules[m],
					y = { breaks: h.breaks };
				"before" in h &&
					h.before &&
					(y.before = C(h.before, o.variables, !1)),
					"after" in h &&
						h.after &&
						(y.after = C(h.after, o.variables, !0)),
					(_[m] = y);
			}
			return _;
		},
		r = function (o, _) {
			return { breaks: o, matchingRule: _ };
		},
		t = (function () {
			function o(_, c) {
				var g = this.constructor;
				if (g === void 0)
					throw TypeError(
						"Constructor Intl.Segmenter requires 'new'"
					);
				var m = (0, D.CanonicalizeLocaleList)(_);
				c = (0, D.GetOptionsObject)(c);
				var h = Object.create(null),
					y = (0, D.GetOption)(
						c,
						"localeMatcher",
						"string",
						["lookup", "best fit"],
						"best fit"
					);
				h.localeMatcher = y;
				var N = (0, D.GetOption)(
					c,
					"granularity",
					"string",
					["word", "sentence", "grapheme"],
					"grapheme"
				);
				s(this, "granularity", N);
				var p = (0, e.ResolveLocale)(
					o.availableLocales,
					m,
					h,
					[],
					{},
					function () {
						return "";
					}
				);
				if (
					(s(this, "locale", p.locale),
					(this.mergedSegmentationTypeValue =
						F.SegmentationRules.root[N]),
					p.locale.length)
				) {
					var P = F.SegmentationRules[p.locale];
					if (N in P) {
						var U = P[N];
						(this.mergedSegmentationTypeValue.variables =
							u.__assign(
								u.__assign(
									{},
									this.mergedSegmentationTypeValue.variables
								),
								U.variables
							)),
							(this.mergedSegmentationTypeValue.segmentRules =
								u.__assign(
									u.__assign(
										{},
										this.mergedSegmentationTypeValue
											.segmentRules
									),
									U.segmentRules
								)),
							(this.mergedSegmentationTypeValue.suppressions =
								u.__spreadArray(
									u.__spreadArray(
										[],
										this.mergedSegmentationTypeValue
											.suppressions,
										!0
									),
									U.suppressions,
									!0
								));
					}
				}
				(this.rules = E(this.mergedSegmentationTypeValue)),
					(this.ruleSortedKeys = Object.keys(this.rules).sort(
						function (H, k) {
							return Number(H) - Number(k);
						}
					));
			}
			return (
				(o.prototype.breaksAt = function (_, c) {
					var g = this.ruleSortedKeys,
						m = this.rules,
						h = this.mergedSegmentationTypeValue;
					if (_ === 0) return r(!0, "0.2");
					if (_ === c.length) return r(!0, "0.3");
					if ((0, A.isSurrogate)(c, _)) return r(!1, "0.1");
					var y = c.substring(0, _),
						N = c.substring(_);
					if ("suppressions" in h)
						for (var p = 0, P = h.suppressions; p < P.length; p++) {
							var U = P[p];
							if (y.trim().endsWith(U)) return r(!1, "0.4");
						}
					for (var H = 0, k = g; H < k.length; H++) {
						var Du = k[H],
							tu = m[Du],
							vu = tu.before,
							Y = tu.after,
							O = tu.breaks;
						if (!(vu && !vu.test(y)) && !(Y && !Y.test(N)))
							return r(O, Du);
					}
					return r(!0, "999");
				}),
				(o.prototype.segment = function (_) {
					return d(this, "segment"), new i(this, _);
				}),
				(o.prototype.resolvedOptions = function () {
					return (
						d(this, "resolvedOptions"),
						u.__assign(
							{},
							(0, D.getMultiInternalSlots)(
								B,
								this,
								"locale",
								"granularity"
							)
						)
					);
				}),
				(o.supportedLocalesOf = function (_, c) {
					return (0, D.SupportedLocales)(
						o.availableLocales,
						(0, D.CanonicalizeLocaleList)(_),
						c
					);
				}),
				(o.availableLocales = new Set(
					Object.keys(F.SegmentationRules).filter(function (_) {
						return _ !== "root";
					})
				)),
				(o.polyfilled = !0),
				o
			);
		})();
	bD.Segmenter = t;
	var n = function (o, _, c, g, m) {
			var h = { segment: _, index: c, input: g };
			return (
				a(o, "granularity") === "word" &&
					(h.isWordLike = m !== "3.1" && m !== "3.2"),
				h
			);
		},
		i = (function () {
			function o(_, c) {
				if (
					((this.segmenter = _),
					(this.lastSegmentIndex = 0),
					typeof c == "symbol")
				)
					throw TypeError("Input must not be a symbol");
				this.input = String(c);
			}
			return (
				(o.prototype[Symbol.iterator] = function () {
					return new o(this.segmenter, this.input);
				}),
				(o.prototype.next = function () {
					for (
						var _ = this.input.substring(this.lastSegmentIndex),
							c = 1;
						c <= _.length;
						c++
					) {
						var g = this.segmenter.breaksAt(c, _),
							m = g.breaks,
							h = g.matchingRule;
						if (m) {
							var y = _.substring(0, c),
								N = this.lastSegmentIndex;
							return (
								(this.lastSegmentIndex += c),
								{
									done: !1,
									value: n(
										this.segmenter,
										y,
										N,
										this.input,
										h
									),
								}
							);
						}
					}
					return { done: !0, value: void 0 };
				}),
				(o.prototype.containing = function (_) {
					if (typeof _ == "bigint")
						throw TypeError("Index must not be a BigInt");
					var c = Number(_);
					if (
						((isNaN(c) || !c) && (c = 0),
						(c = Math.floor(Math.abs(c)) * (c < 0 ? -1 : 1)),
						!(c < 0 || c >= this.input.length))
					) {
						var g = 0;
						if (c === 0) g = 0;
						else
							for (var m = this.input, h = c; h >= 0; h--) {
								var y = this.segmenter.breaksAt(h, m).breaks;
								if (y) {
									g = h;
									break;
								}
							}
						for (
							var N = this.input.substring(g), h = 1;
							h <= N.length;
							h++
						) {
							var p = this.segmenter.breaksAt(h, N),
								y = p.breaks,
								P = p.matchingRule;
							if (y) {
								var U = N.substring(0, h);
								return n(this.segmenter, U, g, this.input, P);
							}
						}
					}
				}),
				o
			);
		})(),
		B = new WeakMap();
	function a(o, _) {
		return (0, D.getInternalSlot)(B, o, _);
	}
	function s(o, _, c) {
		(0, D.setInternalSlot)(B, o, _, c);
	}
	function d(o, _) {
		if (!(o instanceof t))
			throw TypeError(
				"Method Intl.Segmenter.prototype.".concat(
					_,
					" called on incompatible receiver"
				)
			);
	}
	try {
		typeof Symbol < "u" &&
			Object.defineProperty(t.prototype, Symbol.toStringTag, {
				value: "Intl.Segmenter",
				writable: !1,
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype.constructor, "length", {
				value: 0,
				writable: !1,
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.supportedLocalesOf, "length", {
				value: 1,
				writable: !1,
				enumerable: !1,
				configurable: !0,
			});
	} catch {}
	return bD;
}
var JD = {},
	aF;
function cn() {
	if (aF) return JD;
	(aF = 1),
		Object.defineProperty(JD, "__esModule", { value: !0 }),
		(JD.shouldPolyfill = u);
	function u() {
		return !Intl.Segmenter;
	}
	return JD;
}
var sF;
function fn() {
	if (sF) return R0;
	(sF = 1), Object.defineProperty(R0, "__esModule", { value: !0 });
	var u = ln(),
		D = cn();
	return (
		(0, D.shouldPolyfill)() &&
			Object.defineProperty(Intl, "Segmenter", {
				value: u.Segmenter,
				enumerable: !1,
				writable: !0,
				configurable: !0,
			}),
		R0
	);
}
fn();
var dn = Eu('<div class="typewriter-container svelte-1gv2i7t"><!></div>'),
	_n = Eu(
		'<div class="typewriter-container cursor svelte-1gv2i7t"><p class="typing svelte-1gv2i7t"></p></div>'
	),
	vn = Eu("<noscript></noscript> <!>", 1);
function YD(u, D) {
	const e = $A(D, ["children", "$$slots", "$$events", "$$legacy"]);
	jD(D, !1);
	const F = au(),
		A = au(),
		C = au(),
		E = au(),
		r = au(),
		t = au(),
		n = au(),
		i = au(),
		B = au();
	let a = hu(D, "mode", 8, "concurrent"),
		s = hu(D, "interval", 8, 30),
		d = hu(D, "cursor", 8, !0),
		o = hu(D, "keepCursorOnFinish", 8, !1),
		_ = hu(D, "delay", 8, 0),
		c = hu(D, "showCursorOnDelay", 8, !1),
		g = hu(D, "disabled", 8, !1),
		m = hu(D, "element", 8, "div"),
		h = hu(D, "scrambleDuration", 8, 3e3),
		y = hu(D, "scrambleSlowdown", 8, !0),
		N = hu(D, "unwriteInterval", 8, 30),
		p = hu(D, "wordInterval", 8, 1500);
	const P = {
		concurrent: () =>
			oD(
				() => import("./concurrent-BpJAzku4.js"),
				__vite__mapDeps([0, 1, 2])
			),
		cascade: () =>
			oD(
				() => import("./cascade-BAMwmGLg.js"),
				__vite__mapDeps([3, 1, 2])
			),
		loop: () =>
			oD(
				() => import("./loop-Gne9yU5X.js"),
				__vite__mapDeps([4, 5, 1, 2, 6])
			),
		loopOnce: () =>
			oD(
				() => import("./loopOnce-D-JZyTtz.js"),
				__vite__mapDeps([7, 2, 1, 6])
			),
		loopRandom: () =>
			oD(
				() => import("./loopRandom-CIs9f61N.js"),
				__vite__mapDeps([8, 5, 1, 2, 6])
			),
		scramble: () =>
			oD(() => import("./scramble-CgGs5LG2.js"), __vite__mapDeps([9, 2])),
	};
	mu(
		() => Cu(a()),
		() => {
			W(F, /^loop(Once|Random)?$/.test(a()));
		}
	),
		mu(
			() => Cu(a()),
			() => {
				W(A, ["concurrent", "cascade", "loopOnce"].includes(a()));
			}
		),
		mu(
			() => (I(A), Cu(o())),
			() => {
				W(C, !I(A) && o());
			}
		),
		mu(
			() => (Cu(_()), Cu(c())),
			() => {
				W(E, _() < 1 && c());
			}
		),
		mu(
			() => (I(F), Cu(e)),
			() => {
				W(r, !I(F) && (e.unwriteInterval || e.wordInterval));
			}
		),
		mu(
			() => (Cu(a()), Cu(e)),
			() => {
				W(
					t,
					a() !== "scramble" &&
						(e.scrambleDuration || e.scrambleSlowdown)
				);
			}
		),
		mu(
			() => Cu(o()),
			() => {
				W(n, typeof o() == "number" && o() < 1);
			}
		),
		mu(
			() => I(C),
			() => {
				I(C) &&
					console.warn(
						"[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"
					);
			}
		),
		mu(
			() => I(E),
			() => {
				I(E) &&
					console.warn(
						"[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"
					);
			}
		),
		mu(
			() => I(r),
			() => {
				I(r) &&
					console.warn(
						"[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"
					);
			}
		),
		mu(
			() => I(t),
			() => {
				I(t) &&
					console.warn(
						"[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"
					);
			}
		),
		mu(
			() => I(n),
			() => {
				I(n) &&
					console.warn(
						"[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"
					);
			}
		),
		mu(
			() => Cu(_()),
			() => {
				W(i, () => new Promise((Du) => setTimeout(() => Du(_()), _())));
			}
		),
		mu(
			() => (
				Cu(s()),
				Cu(d()),
				Cu(o()),
				Cu(_()),
				Cu(c()),
				Cu(g()),
				Cu(m()),
				Cu(h()),
				Cu(y()),
				Cu(N()),
				Cu(p())
			),
			() => {
				W(B, {
					interval: s(),
					cursor: d(),
					keepCursorOnFinish: o(),
					delay: _(),
					showCursorOnDelay: c(),
					disabled: g(),
					element: m(),
					scrambleDuration: h(),
					scrambleSlowdown: y(),
					unwriteInterval: N(),
					wordInterval: p(),
				});
			}
		),
		X1(),
		M0();
	var U = vn(),
		H = Hu(U),
		k = fu(H, 2);
	mA(
		k,
		() => e,
		(Du) => {
			var tu = aD(),
				vu = Hu(tu);
			{
				var Y = (wu) => {
						var Ou = dn(),
							Uu = Au(Ou);
						We(Uu, D, "default", {}), Q(wu, Ou);
					},
					O = (wu) => {
						var Ou = aD(),
							Uu = Hu(Ou);
						Ze(
							Uu,
							() => I(i)(),
							(f) => {
								var l = aD(),
									w = Hu(l);
								{
									var S = (L) => {
										var x = _n();
										Q(L, x);
									};
									RD(w, (L) => {
										c() && L(S);
									});
								}
								Q(f, l);
							},
							(f) => {
								var l = aD(),
									w = Hu(l);
								Ze(
									w,
									() => P[a()](),
									null,
									(S, L) => {
										var x = aD(),
											$ = Hu(x);
										bA($, m, !1, (M, q) => {
											SA(
												M,
												(eu, ru) => {
													var G, iu;
													return (iu = (G = I(L))
														.default) == null
														? void 0
														: iu.call(G, eu, ru);
												},
												() => I(B)
											);
											let z;
											se(
												(eu) =>
													(z = TA(
														M,
														0,
														"typewriter-container svelte-1gv2i7t",
														null,
														z,
														eu
													)),
												[() => ({ cursor: d() })],
												Be
											);
											var K = aD(),
												V = Hu(K);
											We(V, D, "default", {}), Q(q, K);
										}),
											Q(S, x);
									}
								),
									Q(f, l);
							}
						),
							Q(wu, Ou);
					};
				RD(vu, (wu) => {
					g() ? wu(Y) : wu(O, !1);
				});
			}
			Q(Du, tu);
		}
	),
		Q(u, U),
		qD();
}
var Oe = {};
(function u(D, e, F, A) {
	var C = !!(
			D.Worker &&
			D.Blob &&
			D.Promise &&
			D.OffscreenCanvas &&
			D.OffscreenCanvasRenderingContext2D &&
			D.HTMLCanvasElement &&
			D.HTMLCanvasElement.prototype.transferControlToOffscreen &&
			D.URL &&
			D.URL.createObjectURL
		),
		E = typeof Path2D == "function" && typeof DOMMatrix == "function",
		r = (function () {
			if (!D.OffscreenCanvas) return !1;
			var f = new OffscreenCanvas(1, 1),
				l = f.getContext("2d");
			l.fillRect(0, 0, 1, 1);
			var w = f.transferToImageBitmap();
			try {
				l.createPattern(w, "no-repeat");
			} catch {
				return !1;
			}
			return !0;
		})();
	function t() {}
	function n(f) {
		var l = e.exports.Promise,
			w = l !== void 0 ? l : D.Promise;
		return typeof w == "function" ? new w(f) : (f(t, t), null);
	}
	var i = (function (f, l) {
			return {
				transform: function (w) {
					if (f) return w;
					if (l.has(w)) return l.get(w);
					var S = new OffscreenCanvas(w.width, w.height),
						L = S.getContext("2d");
					return L.drawImage(w, 0, 0), l.set(w, S), S;
				},
				clear: function () {
					l.clear();
				},
			};
		})(r, new Map()),
		B = (function () {
			var f = Math.floor(16.666666666666668),
				l,
				w,
				S = {},
				L = 0;
			return (
				typeof requestAnimationFrame == "function" &&
				typeof cancelAnimationFrame == "function"
					? ((l = function (x) {
							var $ = Math.random();
							return (
								(S[$] = requestAnimationFrame(function M(q) {
									L === q || L + f - 1 < q
										? ((L = q), delete S[$], x())
										: (S[$] = requestAnimationFrame(M));
								})),
								$
							);
					  }),
					  (w = function (x) {
							S[x] && cancelAnimationFrame(S[x]);
					  }))
					: ((l = function (x) {
							return setTimeout(x, f);
					  }),
					  (w = function (x) {
							return clearTimeout(x);
					  })),
				{ frame: l, cancel: w }
			);
		})(),
		a = (function () {
			var f,
				l,
				w = {};
			function S(L) {
				function x($, M) {
					L.postMessage({ options: $ || {}, callback: M });
				}
				(L.init = function (M) {
					var q = M.transferControlToOffscreen();
					L.postMessage({ canvas: q }, [q]);
				}),
					(L.fire = function (M, q, z) {
						if (l) return x(M, null), l;
						var K = Math.random().toString(36).slice(2);
						return (
							(l = n(function (V) {
								function eu(ru) {
									ru.data.callback === K &&
										(delete w[K],
										L.removeEventListener("message", eu),
										(l = null),
										i.clear(),
										z(),
										V());
								}
								L.addEventListener("message", eu),
									x(M, K),
									(w[K] = eu.bind(null, {
										data: { callback: K },
									}));
							})),
							l
						);
					}),
					(L.reset = function () {
						L.postMessage({ reset: !0 });
						for (var M in w) w[M](), delete w[M];
					});
			}
			return function () {
				if (f) return f;
				if (!F && C) {
					var L = [
						"var CONFETTI, SIZE = {}, module = {};",
						"(" + u.toString() + ")(this, module, true, SIZE);",
						"onmessage = function(msg) {",
						"  if (msg.data.options) {",
						"    CONFETTI(msg.data.options).then(function () {",
						"      if (msg.data.callback) {",
						"        postMessage({ callback: msg.data.callback });",
						"      }",
						"    });",
						"  } else if (msg.data.reset) {",
						"    CONFETTI && CONFETTI.reset();",
						"  } else if (msg.data.resize) {",
						"    SIZE.width = msg.data.resize.width;",
						"    SIZE.height = msg.data.resize.height;",
						"  } else if (msg.data.canvas) {",
						"    SIZE.width = msg.data.canvas.width;",
						"    SIZE.height = msg.data.canvas.height;",
						"    CONFETTI = module.exports.create(msg.data.canvas);",
						"  }",
						"}",
					].join(`
`);
					try {
						f = new Worker(URL.createObjectURL(new Blob([L])));
					} catch (x) {
						return (
							typeof console !== void 0 &&
								typeof console.warn == "function" &&
								console.warn("🎊 Could not load worker", x),
							null
						);
					}
					S(f);
				}
				return f;
			};
		})(),
		s = {
			particleCount: 50,
			angle: 90,
			spread: 45,
			startVelocity: 45,
			decay: 0.9,
			gravity: 1,
			drift: 0,
			ticks: 200,
			x: 0.5,
			y: 0.5,
			shapes: ["square", "circle"],
			zIndex: 100,
			colors: [
				"#26ccff",
				"#a25afd",
				"#ff5e7e",
				"#88ff5a",
				"#fcff42",
				"#ffa62d",
				"#ff36ff",
			],
			disableForReducedMotion: !1,
			scalar: 1,
		};
	function d(f, l) {
		return l ? l(f) : f;
	}
	function o(f) {
		return f != null;
	}
	function _(f, l, w) {
		return d(f && o(f[l]) ? f[l] : s[l], w);
	}
	function c(f) {
		return f < 0 ? 0 : Math.floor(f);
	}
	function g(f, l) {
		return Math.floor(Math.random() * (l - f)) + f;
	}
	function m(f) {
		return parseInt(f, 16);
	}
	function h(f) {
		return f.map(y);
	}
	function y(f) {
		var l = String(f).replace(/[^0-9a-f]/gi, "");
		return (
			l.length < 6 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]),
			{
				r: m(l.substring(0, 2)),
				g: m(l.substring(2, 4)),
				b: m(l.substring(4, 6)),
			}
		);
	}
	function N(f) {
		var l = _(f, "origin", Object);
		return (l.x = _(l, "x", Number)), (l.y = _(l, "y", Number)), l;
	}
	function p(f) {
		(f.width = document.documentElement.clientWidth),
			(f.height = document.documentElement.clientHeight);
	}
	function P(f) {
		var l = f.getBoundingClientRect();
		(f.width = l.width), (f.height = l.height);
	}
	function U(f) {
		var l = document.createElement("canvas");
		return (
			(l.style.position = "fixed"),
			(l.style.top = "0px"),
			(l.style.left = "0px"),
			(l.style.pointerEvents = "none"),
			(l.style.zIndex = f),
			l
		);
	}
	function H(f, l, w, S, L, x, $, M, q) {
		f.save(),
			f.translate(l, w),
			f.rotate(x),
			f.scale(S, L),
			f.arc(0, 0, 1, $, M, q),
			f.restore();
	}
	function k(f) {
		var l = f.angle * (Math.PI / 180),
			w = f.spread * (Math.PI / 180);
		return {
			x: f.x,
			y: f.y,
			wobble: Math.random() * 10,
			wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
			velocity: f.startVelocity * 0.5 + Math.random() * f.startVelocity,
			angle2D: -l + (0.5 * w - Math.random() * w),
			tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
			color: f.color,
			shape: f.shape,
			tick: 0,
			totalTicks: f.ticks,
			decay: f.decay,
			drift: f.drift,
			random: Math.random() + 2,
			tiltSin: 0,
			tiltCos: 0,
			wobbleX: 0,
			wobbleY: 0,
			gravity: f.gravity * 3,
			ovalScalar: 0.6,
			scalar: f.scalar,
			flat: f.flat,
		};
	}
	function Du(f, l) {
		(l.x += Math.cos(l.angle2D) * l.velocity + l.drift),
			(l.y += Math.sin(l.angle2D) * l.velocity + l.gravity),
			(l.velocity *= l.decay),
			l.flat
				? ((l.wobble = 0),
				  (l.wobbleX = l.x + 10 * l.scalar),
				  (l.wobbleY = l.y + 10 * l.scalar),
				  (l.tiltSin = 0),
				  (l.tiltCos = 0),
				  (l.random = 1))
				: ((l.wobble += l.wobbleSpeed),
				  (l.wobbleX = l.x + 10 * l.scalar * Math.cos(l.wobble)),
				  (l.wobbleY = l.y + 10 * l.scalar * Math.sin(l.wobble)),
				  (l.tiltAngle += 0.1),
				  (l.tiltSin = Math.sin(l.tiltAngle)),
				  (l.tiltCos = Math.cos(l.tiltAngle)),
				  (l.random = Math.random() + 2));
		var w = l.tick++ / l.totalTicks,
			S = l.x + l.random * l.tiltCos,
			L = l.y + l.random * l.tiltSin,
			x = l.wobbleX + l.random * l.tiltCos,
			$ = l.wobbleY + l.random * l.tiltSin;
		if (
			((f.fillStyle =
				"rgba(" +
				l.color.r +
				", " +
				l.color.g +
				", " +
				l.color.b +
				", " +
				(1 - w) +
				")"),
			f.beginPath(),
			E &&
				l.shape.type === "path" &&
				typeof l.shape.path == "string" &&
				Array.isArray(l.shape.matrix))
		)
			f.fill(
				wu(
					l.shape.path,
					l.shape.matrix,
					l.x,
					l.y,
					Math.abs(x - S) * 0.1,
					Math.abs($ - L) * 0.1,
					(Math.PI / 10) * l.wobble
				)
			);
		else if (l.shape.type === "bitmap") {
			var M = (Math.PI / 10) * l.wobble,
				q = Math.abs(x - S) * 0.1,
				z = Math.abs($ - L) * 0.1,
				K = l.shape.bitmap.width * l.scalar,
				V = l.shape.bitmap.height * l.scalar,
				eu = new DOMMatrix([
					Math.cos(M) * q,
					Math.sin(M) * q,
					-Math.sin(M) * z,
					Math.cos(M) * z,
					l.x,
					l.y,
				]);
			eu.multiplySelf(new DOMMatrix(l.shape.matrix));
			var ru = f.createPattern(i.transform(l.shape.bitmap), "no-repeat");
			ru.setTransform(eu),
				(f.globalAlpha = 1 - w),
				(f.fillStyle = ru),
				f.fillRect(l.x - K / 2, l.y - V / 2, K, V),
				(f.globalAlpha = 1);
		} else if (l.shape === "circle")
			f.ellipse
				? f.ellipse(
						l.x,
						l.y,
						Math.abs(x - S) * l.ovalScalar,
						Math.abs($ - L) * l.ovalScalar,
						(Math.PI / 10) * l.wobble,
						0,
						2 * Math.PI
				  )
				: H(
						f,
						l.x,
						l.y,
						Math.abs(x - S) * l.ovalScalar,
						Math.abs($ - L) * l.ovalScalar,
						(Math.PI / 10) * l.wobble,
						0,
						2 * Math.PI
				  );
		else if (l.shape === "star")
			for (
				var G = (Math.PI / 2) * 3,
					iu = 4 * l.scalar,
					Nu = 8 * l.scalar,
					Tu = l.x,
					Gu = l.y,
					rD = 5,
					xu = Math.PI / rD;
				rD--;

			)
				(Tu = l.x + Math.cos(G) * Nu),
					(Gu = l.y + Math.sin(G) * Nu),
					f.lineTo(Tu, Gu),
					(G += xu),
					(Tu = l.x + Math.cos(G) * iu),
					(Gu = l.y + Math.sin(G) * iu),
					f.lineTo(Tu, Gu),
					(G += xu);
		else
			f.moveTo(Math.floor(l.x), Math.floor(l.y)),
				f.lineTo(Math.floor(l.wobbleX), Math.floor(L)),
				f.lineTo(Math.floor(x), Math.floor($)),
				f.lineTo(Math.floor(S), Math.floor(l.wobbleY));
		return f.closePath(), f.fill(), l.tick < l.totalTicks;
	}
	function tu(f, l, w, S, L) {
		var x = l.slice(),
			$ = f.getContext("2d"),
			M,
			q,
			z = n(function (K) {
				function V() {
					(M = q = null),
						$.clearRect(0, 0, S.width, S.height),
						i.clear(),
						L(),
						K();
				}
				function eu() {
					F &&
						!(S.width === A.width && S.height === A.height) &&
						((S.width = f.width = A.width),
						(S.height = f.height = A.height)),
						!S.width &&
							!S.height &&
							(w(f), (S.width = f.width), (S.height = f.height)),
						$.clearRect(0, 0, S.width, S.height),
						(x = x.filter(function (ru) {
							return Du($, ru);
						})),
						x.length ? (M = B.frame(eu)) : V();
				}
				(M = B.frame(eu)), (q = V);
			});
		return {
			addFettis: function (K) {
				return (x = x.concat(K)), z;
			},
			canvas: f,
			promise: z,
			reset: function () {
				M && B.cancel(M), q && q();
			},
		};
	}
	function vu(f, l) {
		var w = !f,
			S = !!_(l || {}, "resize"),
			L = !1,
			x = _(l, "disableForReducedMotion", Boolean),
			$ = C && !!_(l || {}, "useWorker"),
			M = $ ? a() : null,
			q = w ? p : P,
			z = f && M ? !!f.__confetti_initialized : !1,
			K =
				typeof matchMedia == "function" &&
				matchMedia("(prefers-reduced-motion)").matches,
			V;
		function eu(G, iu, Nu) {
			for (
				var Tu = _(G, "particleCount", c),
					Gu = _(G, "angle", Number),
					rD = _(G, "spread", Number),
					xu = _(G, "startVelocity", Number),
					E1 = _(G, "decay", Number),
					r1 = _(G, "gravity", Number),
					n1 = _(G, "drift", Number),
					xe = _(G, "colors", h),
					t1 = _(G, "ticks", Number),
					Re = _(G, "shapes"),
					i1 = _(G, "scalar"),
					B1 = !!_(G, "flat"),
					ke = N(G),
					$e = Tu,
					P0 = [],
					a1 = f.width * ke.x,
					s1 = f.height * ke.y;
				$e--;

			)
				P0.push(
					k({
						x: a1,
						y: s1,
						angle: Gu,
						spread: rD,
						startVelocity: xu,
						color: xe[$e % xe.length],
						shape: Re[g(0, Re.length)],
						ticks: t1,
						decay: E1,
						gravity: r1,
						drift: n1,
						scalar: i1,
						flat: B1,
					})
				);
			return V
				? V.addFettis(P0)
				: ((V = tu(f, P0, q, iu, Nu)), V.promise);
		}
		function ru(G) {
			var iu = x || _(G, "disableForReducedMotion", Boolean),
				Nu = _(G, "zIndex", Number);
			if (iu && K)
				return n(function (xu) {
					xu();
				});
			w && V
				? (f = V.canvas)
				: w && !f && ((f = U(Nu)), document.body.appendChild(f)),
				S && !z && q(f);
			var Tu = { width: f.width, height: f.height };
			M && !z && M.init(f),
				(z = !0),
				M && (f.__confetti_initialized = !0);
			function Gu() {
				if (M) {
					var xu = {
						getBoundingClientRect: function () {
							if (!w) return f.getBoundingClientRect();
						},
					};
					q(xu),
						M.postMessage({
							resize: { width: xu.width, height: xu.height },
						});
					return;
				}
				Tu.width = Tu.height = null;
			}
			function rD() {
				(V = null),
					S && ((L = !1), D.removeEventListener("resize", Gu)),
					w &&
						f &&
						(document.body.contains(f) &&
							document.body.removeChild(f),
						(f = null),
						(z = !1));
			}
			return (
				S && !L && ((L = !0), D.addEventListener("resize", Gu, !1)),
				M ? M.fire(G, Tu, rD) : eu(G, Tu, rD)
			);
		}
		return (
			(ru.reset = function () {
				M && M.reset(), V && V.reset();
			}),
			ru
		);
	}
	var Y;
	function O() {
		return Y || (Y = vu(null, { useWorker: !0, resize: !0 })), Y;
	}
	function wu(f, l, w, S, L, x, $) {
		var M = new Path2D(f),
			q = new Path2D();
		q.addPath(M, new DOMMatrix(l));
		var z = new Path2D();
		return (
			z.addPath(
				q,
				new DOMMatrix([
					Math.cos($) * L,
					Math.sin($) * L,
					-Math.sin($) * x,
					Math.cos($) * x,
					w,
					S,
				])
			),
			z
		);
	}
	function Ou(f) {
		if (!E)
			throw new Error("path confetti are not supported in this browser");
		var l, w;
		typeof f == "string" ? (l = f) : ((l = f.path), (w = f.matrix));
		var S = new Path2D(l),
			L = document.createElement("canvas"),
			x = L.getContext("2d");
		if (!w) {
			for (
				var $ = 1e3, M = $, q = $, z = 0, K = 0, V, eu, ru = 0;
				ru < $;
				ru += 2
			)
				for (var G = 0; G < $; G += 2)
					x.isPointInPath(S, ru, G, "nonzero") &&
						((M = Math.min(M, ru)),
						(q = Math.min(q, G)),
						(z = Math.max(z, ru)),
						(K = Math.max(K, G)));
			(V = z - M), (eu = K - q);
			var iu = 10,
				Nu = Math.min(iu / V, iu / eu);
			w = [
				Nu,
				0,
				0,
				Nu,
				-Math.round(V / 2 + M) * Nu,
				-Math.round(eu / 2 + q) * Nu,
			];
		}
		return { type: "path", path: l, matrix: w };
	}
	function Uu(f) {
		var l,
			w = 1,
			S = "#000000",
			L =
				'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
		typeof f == "string"
			? (l = f)
			: ((l = f.text),
			  (w = "scalar" in f ? f.scalar : w),
			  (L = "fontFamily" in f ? f.fontFamily : L),
			  (S = "color" in f ? f.color : S));
		var x = 10 * w,
			$ = "" + x + "px " + L,
			M = new OffscreenCanvas(x, x),
			q = M.getContext("2d");
		q.font = $;
		var z = q.measureText(l),
			K = Math.ceil(z.actualBoundingBoxRight + z.actualBoundingBoxLeft),
			V = Math.ceil(
				z.actualBoundingBoxAscent + z.actualBoundingBoxDescent
			),
			eu = 2,
			ru = z.actualBoundingBoxLeft + eu,
			G = z.actualBoundingBoxAscent + eu;
		(K += eu + eu),
			(V += eu + eu),
			(M = new OffscreenCanvas(K, V)),
			(q = M.getContext("2d")),
			(q.font = $),
			(q.fillStyle = S),
			q.fillText(l, ru, G);
		var iu = 1 / w;
		return {
			type: "bitmap",
			bitmap: M.transferToImageBitmap(),
			matrix: [iu, 0, 0, iu, (-K * iu) / 2, (-V * iu) / 2],
		};
	}
	(e.exports = function () {
		return O().apply(this, arguments);
	}),
		(e.exports.reset = function () {
			O().reset();
		}),
		(e.exports.create = vu),
		(e.exports.shapeFromPath = Ou),
		(e.exports.shapeFromText = Uu);
})(
	(function () {
		return typeof window < "u"
			? window
			: typeof self < "u"
			? self
			: this || {};
	})(),
	Oe,
	!1
);
const oF = Oe.exports;
Oe.exports.create;
var mn = Eu(
	'<div class="birthday-calendar svelte-11rskz7"><div class="calendar-header svelte-11rskz7">April</div> <div class="calendar-body svelte-11rskz7"><div class="calendar-date svelte-11rskz7">16</div> <div class="calendar-year svelte-11rskz7">2004</div></div></div>'
);
function hn(u) {
	var D = mn();
	Q(u, D);
}
var gn = Eu(
		'<div class="pop-up svelte-156yx5j"><div class="letter svelte-156yx5j"><div class="flap-top svelte-156yx5j"></div> <div class="content svelte-156yx5j"><p class="greeting svelte-156yx5j">Gửi Ngọc Diệp,</p> <p class="typewriter svelte-156yx5j"> </p> <p class="signature svelte-156yx5j">— From Vĩnh Long with love! 🌟</p></div> <button class="close svelte-156yx5j">Đóng</button></div></div>'
	),
	pn = Eu(
		'<button style="margin: 30px 0 20px 0; z-index: 1000" class="open-btn svelte-156yx5j">👉 Tôi có điều muốn nói 👈</button> <!>',
		1
	);
function yn(u) {
	let D = au(!1),
		e =
			"Trong tất cả các loại chúc như: chúc Tết, chúc phúc, chúc mừng năm mới thì tôi thích nhất là chúc mừng sinh nhật bà. Chúc bà tuổi mới thành công, nhiều may mắn, ít cực nhọc, luôn xinh đẹp. Mong những ước mơ của bà thành hiện thực, mong bà mạnh mẽ vượt qua những khó khăn,.... 🎂💖",
		F = au(""),
		A = 0;
	async function C() {
		A < e.length && (W(F, I(F) + e.charAt(A)), A++, setTimeout(C, 40));
	}
	function E() {
		I(D)
			? (W(D, !1), W(F, ""), (A = 0))
			: (W(D, !0), W(F, ""), (A = 0), C());
	}
	var r = pn(),
		t = Hu(r),
		n = fu(t, 2);
	{
		var i = (B) => {
			var a = gn(),
				s = Au(a),
				d = fu(Au(s), 2),
				o = fu(Au(d), 2),
				_ = Au(o),
				c = fu(d, 2);
			se(() => HF(_, I(F))), V0("click", c, E), Q(B, a);
		};
		RD(n, (B) => {
			I(D) && B(i);
		});
	}
	V0("click", t, E), Q(u, r);
}
var wn = Eu(
	'<div class="photo-frame svelte-9fa7nr"><img alt="Ảnh" class="photo-img svelte-9fa7nr"> <div class="caption svelte-9fa7nr"></div></div>'
);
function bn(u) {
	let D =
			"https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/483062540_666340325930634_5888831795371956308_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEwFfndHk7Kjul45-eTwuLH_jjVJUSf5T_-ONUlRJ_lPz0lEW91u5PU_g-marf286fsqIYMVVAnL1QyG8oM0CzI&_nc_ohc=WEgclLOh2XQQ7kNvwFE2ca6&_nc_oc=AdmqrAS9kYCgGok3XzXVDRlJG-tQHnrZWkW2CF28C3U3OufAmLrlOX90glYaO7Oz3q0iWswVOfsTcSBz7Lnl_rSI&_nc_zt=24&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=Ju87jOGIvE1lAJRv7AnTTQ&oh=00_AfFdi3ki7fIRH57ce7PH0uFTDlhsrxGmzzF2HpTW7rjmtg&oe=6802FEDF",
		e = "Ngọc Diệp xinh đẹp";
	var F = wn(),
		A = Au(F);
	zF(A, "src", D);
	var C = fu(A, 2);
	(C.textContent = e), Q(u, F);
}
var Sn = Eu(
	'<section class="letter svelte-1cze7eq"><div class="flag svelte-1cze7eq"><img src="./assets/flag.png" alt="flag" class="svelte-1cze7eq"></div> <div class="content svelte-1cze7eq"><div class="content-text svelte-1cze7eq"><h1 class="custom-text svelte-1cze7eq">Happy Birthday</h1> <div class="group-birthday svelte-1cze7eq"><!></div> <!></div> <div class="content-image svelte-1cze7eq"><div class="circle svelte-1cze7eq"><!></div></div></div></section>'
);
function Mn(u) {
	var D = Sn(),
		e = fu(Au(D), 2),
		F = Au(e),
		A = fu(Au(F), 2),
		C = Au(A);
	hn(C);
	var E = fu(A, 2);
	yn(E);
	var r = fu(F, 2),
		t = Au(r),
		n = Au(t);
	bn(n), Q(u, D);
}
var Nn = Eu('<div class="emoji svelte-mo2fzs"> </div>'),
	Tn = Eu('<div class="overlay svelte-mo2fzs"></div>');
function Ln(u, D) {
	jD(D, !1);
	let e = au([]);
	le(() => {
		const A = setInterval(() => {
			const C = ["🎁", "❤️"][Math.floor(Math.random() * 2)],
				E = Math.random() * 24 + 24,
				r = Math.random() * 100,
				t = Math.random() * 3 + 2;
			W(e, [
				...I(e),
				{
					id: crypto.randomUUID(),
					emoji: C,
					left: r,
					size: E,
					duration: t,
				},
			]),
				setTimeout(() => {
					W(
						e,
						I(e).filter((n) => {
							var i;
							return (
								n.id !== ((i = I(e)[0]) == null ? void 0 : i.id)
							);
						})
					);
				}, t * 2e3);
		}, 400);
		return () => clearInterval(A);
	}),
		M0();
	var F = Tn();
	gA(
		F,
		5,
		() => I(e),
		(A) => A.id,
		(A, C) => {
			var E = Nn(),
				r = Au(E);
			se(() => {
				LA(
					E,
					`
          left: ${I(C).left ?? ""}%;
          font-size: ${I(C).size ?? ""}px;
          animation-duration: ${I(C).duration ?? ""}s;
        `
				),
					HF(r, I(C).emoji);
			}),
				Q(A, E);
		}
	),
		Q(u, F),
		qD();
}
var In = Eu("<!> <!>", 1);
function Pn(u, D) {
	jD(D, !1);
	let e = !1,
		F;
	function A() {
		(F = new Audio("./assets/hpbdty.mp3")), (F.volume = 0.7);
	}
	function C() {
		if ((A(), e)) return;
		e = !0;
		const n = 7 * 1e3,
			i = Date.now() + n;
		F.play().catch((s) => {
			console.error("Error playing audio:", s);
		});
		const B = [
				"#bb0000",
				"#ffffff",
				"#00bb00",
				"#0000bb",
				"#ff00ff",
				"#ffff00",
				"#00ffff",
			],
			a = setInterval(() => {
				oF({
					particleCount: 30,
					angle: 60,
					spread: 100,
					colors: B,
					origin: { x: 0, y: Math.random() * 0.8 + 0.1 },
				}),
					oF({
						particleCount: 30,
						angle: 120,
						spread: 100,
						colors: B,
						origin: { x: 1, y: Math.random() * 0.8 + 0.1 },
					}),
					Date.now() > i && (clearInterval(a), (e = !1));
			}, 300);
	}
	le(() => {
		A(), C();
	}),
		M0();
	var E = In(),
		r = Hu(E);
	Mn(r);
	var t = fu(r, 2);
	Ln(t, {}), Q(u, E), qD();
}
function On(u, D) {
	W(D, !0);
}
var xn = Eu('<h1 class="typing">Hey,</h1>'),
	Rn = Eu('<h1 class="typing"></h1>'),
	kn = Eu('<h1 class="typing">Ready?</h1>'),
	$n = Eu('<button style="background-color: #ffb6c1;">Go &#8594</button>'),
	jn = Eu("<section><!> <!> <!> <!></section>"),
	qn = Eu('<section class="animate-section svelte-748n6z"><!></section>'),
	Un = Eu("<main><!></main>");
function Gn(u) {
	let D = "I have something for you!",
		e = au(!1);
	var F = Un(),
		A = Au(F);
	{
		var C = (r) => {
				var t = jn(),
					n = Au(t);
				YD(n, {
					mode: "concurrent",
					interval: 100,
					delay: 0,
					children: (s, d) => {
						var o = xn();
						Q(s, o);
					},
					$$slots: { default: !0 },
				});
				var i = fu(n, 2);
				YD(i, {
					mode: "concurrent",
					interval: 50,
					delay: 2e3,
					children: (s, d) => {
						var o = Rn();
						(o.textContent = D), Q(s, o);
					},
					$$slots: { default: !0 },
				});
				var B = fu(i, 2);
				YD(B, {
					mode: "concurrent",
					interval: 50,
					delay: 4e3,
					children: (s, d) => {
						var o = kn();
						Q(s, o);
					},
					$$slots: { default: !0 },
				});
				var a = fu(B, 2);
				YD(a, {
					mode: "concurrent",
					interval: 50,
					delay: 6e3,
					children: (s, d) => {
						var o = $n();
						(o.__click = [On, e]), Q(s, o);
					},
					$$slots: { default: !0 },
				}),
					Q(r, t);
			},
			E = (r) => {
				var t = qn(),
					n = Au(t);
				Pn(n, {}), Q(r, t);
			};
		RD(A, (r) => {
			I(e) ? r(E, !1) : r(C);
		});
	}
	Q(u, F);
}
cA(["click"]);
var Hn = Eu("<main><!></main>");
function zn(u) {
	var D = Hn(),
		e = Au(D);
	Gn(e), Q(u, D);
}
var Vn = Eu("<main><!></main>");
function Zn(u, D) {
	jD(D, !1);
	function e() {
		const t = navigator.userAgent;
		return !/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			t
		);
	}
	function F() {}
	le(() => {}), M0();
	var A = Vn(),
		C = Au(A);
	{
		var E = (t) => {
				zn(t);
			},
			r = (t) => {
				zA(t, { closePopup: F });
			};
		RD(C, (t) => {
			e() ? t(E) : t(r, !1);
		});
	}
	Q(u, A), qD();
}
dA(Zn, { target: document.getElementById("app") });
export { Kn as c };
