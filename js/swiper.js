! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define &&
		define.amd ? define(t) : e.Swiper = t()
}(this, function() {
	"use strict";
	var e = "undefined" == typeof window ? {
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			addEventListener: function() {},
			removeEventListener: function() {},
			getComputedStyle: function() {
				return {}
			},
			Image: function() {},
			Date: function() {},
			screen: {}
		} : window,
		t = function(e) {
			for (var t = 0; t < e.length; t += 1) this[t] = e[t];
			return this.length = e.length, this
		};

	function a(e, a) {
		var i = [],
			s = 0;
		if (e && !a && e instanceof t) return e;
		if (e)
			if ("string" == typeof e) {
				var r, n, o = e.trim();
				if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
					var l = "div";
					for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !==
						o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l =
							"select"), (n = document.createElement(l)).innerHTML = o, s = 0; s < n.childNodes.length; s += 1) i.push(n.childNodes[
						s])
				} else
					for (r = a || "#" !== e[0] || e.match(/[ .<>:~]/) ? (a || document).querySelectorAll(e.trim()) : [document.getElementById(
							e.trim().split("#")[1])], s = 0; s < r.length; s += 1) r[s] && i.push(r[s])
			} else if (e.nodeType || e === window || e === document) i.push(e);
		else if (e.length > 0 && e[0].nodeType)
			for (s = 0; s < e.length; s += 1) i.push(e[s]);
		return new t(i)
	}

	function i(e) {
		for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}
	a.fn = t.prototype, a.Class = t, a.Dom7 = t;
	"resize scroll".split(" ");
	var s = {
		addClass: function(e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.add(t[a]);
			return this
		},
		removeClass: function(e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.remove(t[a]);
			return this
		},
		hasClass: function(e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function(e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
			return this
		},
		attr: function(e, t) {
			var a = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var i = 0; i < this.length; i += 1)
				if (2 === a.length) this[i].setAttribute(e, t);
				else
					for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
			return this
		},
		removeAttr: function(e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function(e, t) {
			var a;
			if (void 0 !== t) {
				for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
					a.dom7ElementDataStorage[e] = t;
				return this
			}
			if (a = this[0]) {
				if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
				var s = a.getAttribute("data-" + e);
				return s || void 0
			}
		},
		transform: function(e) {
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransform = e, a.transform = e
			}
			return this
		},
		transition: function(e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransitionDuration = e, a.transitionDuration = e
			}
			return this
		},
		on: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, s = e[0],
				r = e[1],
				n = e[2],
				o = e[3];

			function l(e) {
				var t = e.target;
				if (t) {
					var i = e.target.dom7EventData || [];
					if (i.unshift(e), a(t).is(r)) n.apply(t, i);
					else
						for (var s = a(t).parents(), o = 0; o < s.length; o += 1) a(s[o]).is(r) && n.apply(s[o], i)
				}
			}

			function d(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.unshift(e), n.apply(this, t)
			}
			"function" == typeof e[1] && (s = (i = e)[0], n = i[1], o = i[2], r = void 0), o || (o = !1);
			for (var p, c = s.split(" "), u = 0; u < this.length; u += 1) {
				var h = this[u];
				if (r)
					for (p = 0; p < c.length; p += 1) h.dom7LiveListeners || (h.dom7LiveListeners = []), h.dom7LiveListeners.push({
						type: s,
						listener: n,
						proxyListener: l
					}), h.addEventListener(c[p], l, o);
				else
					for (p = 0; p < c.length; p += 1) h.dom7Listeners || (h.dom7Listeners = []), h.dom7Listeners.push({
						type: s,
						listener: n,
						proxyListener: d
					}), h.addEventListener(c[p], d, o)
			}
			return this
		},
		off: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var a, i = e[0],
				s = e[1],
				r = e[2],
				n = e[3];
			"function" == typeof e[1] && (i = (a = e)[0], r = a[1], n = a[2], s = void 0), n || (n = !1);
			for (var o = i.split(" "), l = 0; l < o.length; l += 1)
				for (var d = 0; d < this.length; d += 1) {
					var p = this[d];
					if (s) {
						if (p.dom7LiveListeners)
							for (var c = 0; c < p.dom7LiveListeners.length; c += 1) r ? p.dom7LiveListeners[c].listener === r && p.removeEventListener(
								o[l], p.dom7LiveListeners[c].proxyListener, n) : p.dom7LiveListeners[c].type === o[l] && p.removeEventListener(
								o[l], p.dom7LiveListeners[c].proxyListener, n)
					} else if (p.dom7Listeners)
						for (var u = 0; u < p.dom7Listeners.length; u += 1) r ? p.dom7Listeners[u].listener === r && p.removeEventListener(
							o[l], p.dom7Listeners[u].proxyListener, n) : p.dom7Listeners[u].type === o[l] && p.removeEventListener(o[l],
							p.dom7Listeners[u].proxyListener, n)
				}
			return this
		},
		trigger: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
				for (var r = 0; r < this.length; r += 1) {
					var n = void 0;
					try {
						n = new window.CustomEvent(a[s], {
							detail: i,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(n = document.createEvent("Event")).initEvent(a[s], !0, !0), n.detail = i
					}
					this[r].dom7EventData = e.filter(function(e, t) {
						return t > 0
					}), this[r].dispatchEvent(n), this[r].dom7EventData = [], delete this[r].dom7EventData
				}
			return this
		},
		transitionEnd: function(e) {
			var t, a = ["webkitTransitionEnd", "transitionend"],
				i = this;

			function s(r) {
				if (r.target === this)
					for (e.call(this, r), t = 0; t < a.length; t += 1) i.off(a[t], s)
			}
			if (e)
				for (t = 0; t < a.length; t += 1) i.on(a[t], s);
			return this
		},
		outerWidth: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue(
						"margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function(e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue(
						"margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function() {
			if (this.length > 0) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					a = document.body,
					i = e.clientTop || a.clientTop || 0,
					s = e.clientLeft || a.clientLeft || 0,
					r = e === window ? window.scrollY : e.scrollTop,
					n = e === window ? window.scrollX : e.scrollLeft;
				return {
					top: t.top + r - i,
					left: t.left + n - s
				}
			}
			return null
		},
		css: function(e, t) {
			var a;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (var i in e) this[a].style[i] = e[i];
					return this
				}
				if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this
			}
			return this
		},
		each: function(e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function(e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function(e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function(e) {
			var i, s, r = this[0];
			if (!r || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (r.matches) return r.matches(e);
				if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
				if (r.msMatchesSelector) return r.msMatchesSelector(e);
				for (i = a(e), s = 0; s < i.length; s += 1)
					if (i[s] === r) return !0;
				return !1
			}
			if (e === document) return r === document;
			if (e === window) return r === window;
			if (e.nodeType || e instanceof t) {
				for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
					if (i[s] === r) return !0;
				return !1
			}
			return !1
		},
		index: function() {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function(e) {
			if (void 0 === e) return this;
			var a, i = this.length;
			return new t(e > i - 1 ? [] : e < 0 ? (a = i + e) < 0 ? [] : [this[a]] : [this[e]])
		},
		append: function() {
			for (var e, a = [], i = arguments.length; i--;) a[i] = arguments[i];
			for (var s = 0; s < a.length; s += 1) {
				e = a[s];
				for (var r = 0; r < this.length; r += 1)
					if ("string" == typeof e) {
						var n = document.createElement("div");
						for (n.innerHTML = e; n.firstChild;) this[r].appendChild(n.firstChild)
					} else if (e instanceof t)
					for (var o = 0; o < e.length; o += 1) this[r].appendChild(e[o]);
				else this[r].appendChild(e)
			}
			return this
		},
		prepend: function(e) {
			var a, i, s = this;
			for (a = 0; a < this.length; a += 1)
				if ("string" == typeof e) {
					var r = document.createElement("div");
					for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) s[a].insertBefore(r.childNodes[i], s[a].childNodes[
						0])
				} else if (e instanceof t)
				for (i = 0; i < e.length; i += 1) s[a].insertBefore(e[i], s[a].childNodes[0]);
			else s[a].insertBefore(e, s[a].childNodes[0]);
			return this
		},
		next: function(e) {
			return this.length > 0 ? e ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? new t([this[0].nextElementSibling]) :
				new t([]) : this[0].nextElementSibling ? new t([this[0].nextElementSibling]) : new t([]) : new t([])
		},
		nextAll: function(e) {
			var i = [],
				s = this[0];
			if (!s) return new t([]);
			for (; s.nextElementSibling;) {
				var r = s.nextElementSibling;
				e ? a(r).is(e) && i.push(r) : i.push(r), s = r
			}
			return new t(i)
		},
		prev: function(e) {
			if (this.length > 0) {
				var i = this[0];
				return e ? i.previousElementSibling && a(i.previousElementSibling).is(e) ? new t([i.previousElementSibling]) :
					new t([]) : i.previousElementSibling ? new t([i.previousElementSibling]) : new t([])
			}
			return new t([])
		},
		prevAll: function(e) {
			var i = [],
				s = this[0];
			if (!s) return new t([]);
			for (; s.previousElementSibling;) {
				var r = s.previousElementSibling;
				e ? a(r).is(e) && i.push(r) : i.push(r), s = r
			}
			return new t(i)
		},
		parent: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? a(this[s].parentNode).is(e) &&
				t.push(this[s].parentNode) : t.push(this[s].parentNode));
			return a(i(t))
		},
		parents: function(e) {
			for (var t = [], s = 0; s < this.length; s += 1)
				for (var r = this[s].parentNode; r;) e ? a(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
			return a(i(t))
		},
		closest: function(e) {
			var a = this;
			return void 0 === e ? new t([]) : (a.is(e) || (a = a.parents(e).eq(0)), a)
		},
		find: function(e) {
			for (var a = [], i = 0; i < this.length; i += 1)
				for (var s = this[i].querySelectorAll(e), r = 0; r < s.length; r += 1) a.push(s[r]);
			return new t(a)
		},
		children: function(e) {
			for (var s = [], r = 0; r < this.length; r += 1)
				for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && a(n[o]).is(e) && s.push(
					n[o]) : 1 === n[o].nodeType && s.push(n[o]);
			return new t(i(s))
		},
		remove: function() {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, s;
			for (i = 0; i < e.length; i += 1) {
				var r = a(e[i]);
				for (s = 0; s < r.length; s += 1) this[this.length] = r[s], this.length += 1
			}
			return this
		},
		styles: function() {
			return this[0] ? window.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(s).forEach(function(e) {
		a.fn[e] = s[e]
	});
	var r, n = {
			deleteProps: function(e) {
				var t = e;
				Object.keys(t).forEach(function(e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				})
			},
			nextTick: function(e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function() {
				return Date.now()
			},
			getTranslate: function(t, a) {
				var i, s, r;
				void 0 === a && (a = "x");
				var n = e.getComputedStyle(t, null);
				return e.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(
					function(e) {
						return e.replace(",", ".")
					}).join(", ")), r = new e.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform ||
					n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(",
						"matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (s = e.WebKitCSSMatrix ? r.m41 : 16 === i.length ?
					parseFloat(i[12]) : parseFloat(i[4])), "y" === a && (s = e.WebKitCSSMatrix ? r.m42 : 16 === i.length ?
					parseFloat(i[13]) : parseFloat(i[5])), s || 0
			},
			parseUrlQuery: function(t) {
				var a, i, s, r, n = {},
					o = t || e.location.href;
				if ("string" == typeof o && o.length)
					for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
							return "" !== e
						})).length, a = 0; a < r; a += 1) s = i[a].replace(/#\S+/g, "").split("="), n[decodeURIComponent(s[0])] = void 0 ===
						s[1] ? void 0 : decodeURIComponent(s[1]) || "";
				return n
			},
			isObject: function(e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
					var s = e[i];
					if (void 0 !== s && null !== s)
						for (var r = Object.keys(Object(s)), o = 0, l = r.length; o < l; o += 1) {
							var d = r[o],
								p = Object.getOwnPropertyDescriptor(s, d);
							void 0 !== p && p.enumerable && (n.isObject(a[d]) && n.isObject(s[d]) ? n.extend(a[d], s[d]) : !n.isObject(a[d]) &&
								n.isObject(s[d]) ? (a[d] = {}, n.extend(a[d], s[d])) : a[d] = s[d])
						}
				}
				return a
			}
		},
		o = "undefined" == typeof document ? {
			addEventListener: function() {},
			removeEventListener: function() {},
			activeElement: {
				blur: function() {},
				nodeName: ""
			},
			querySelector: function() {
				return {}
			},
			querySelectorAll: function() {
				return []
			},
			createElement: function() {
				return {
					style: {},
					setAttribute: function() {},
					getElementsByTagName: function() {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		l = {
			touch: e.Modernizr && !0 === e.Modernizr.touch || !!("ontouchstart" in e || e.DocumentTouch && o instanceof e.DocumentTouch),
			transforms3d: e.Modernizr && !0 === e.Modernizr.csstransforms3d || (r = o.createElement("div").style,
				"webkitPerspective" in r || "MozPerspective" in r || "OPerspective" in r || "MsPerspective" in r || "perspective" in
				r),
			flexbox: function() {
				for (var e = o.createElement("div").style, t =
						"alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient"
						.split(" "), a = 0; a < t.length; a += 1)
					if (t[a] in e) return !0;
				return !1
			}(),
			observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
			passiveListener: function() {
				var t = !1;
				try {
					var a = Object.defineProperty({}, "passive", {
						get: function() {
							t = !0
						}
					});
					e.addEventListener("testPassiveListener", null, a)
				} catch (e) {}
				return t
			}(),
			gestures: "ongesturestart" in e
		},
		d = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
				t.on(e, t.params.on[e])
			})
		},
		p = {
			components: {}
		};
	d.prototype.on = function(e, t) {
		var a = this;
		return "function" != typeof t ? a : (e.split(" ").forEach(function(e) {
			a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t)
		}), a)
	}, d.prototype.once = function(e, t) {
		var a = this;
		if ("function" != typeof t) return a;
		return a.on(e, function i() {
			for (var s = [], r = arguments.length; r--;) s[r] = arguments[r];
			t.apply(a, s), a.off(e, i)
		})
	}, d.prototype.off = function(e, t) {
		var a = this;
		return e.split(" ").forEach(function(e) {
			void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function(i, s) {
				i === t && a.eventsListeners[e].splice(s, 1)
			})
		}), a
	}, d.prototype.emit = function() {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var a, i, s, r = this;
		return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s =
			r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(
			function(e) {
				if (r.eventsListeners[e]) {
					var t = [];
					r.eventsListeners[e].forEach(function(e) {
						t.push(e)
					}), t.forEach(function(e) {
						e.apply(s, i)
					})
				}
			}), r) : r
	}, d.prototype.useModulesParams = function(e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function(a) {
			var i = t.modules[a];
			i.params && n.extend(e, i.params)
		})
	}, d.prototype.useModules = function(e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function(a) {
			var i = t.modules[a],
				s = e[a] || {};
			i.instance && Object.keys(i.instance).forEach(function(e) {
				var a = i.instance[e];
				t[e] = "function" == typeof a ? a.bind(t) : a
			}), i.on && t.on && Object.keys(i.on).forEach(function(e) {
				t.on(e, i.on[e])
			}), i.create && i.create.bind(t)(s)
		})
	}, p.components.set = function(e) {
		this.use && this.use(e)
	}, d.installModule = function(e) {
		for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var s = e.name || Object.keys(i.prototype.modules).length + "_" + n.now();
		return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
			i.prototype[t] = e.proto[t]
		}), e.static && Object.keys(e.static).forEach(function(t) {
			i[t] = e.static[t]
		}), e.install && e.install.apply(i, t), i
	}, d.use = function(e) {
		for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach(function(e) {
			return i.installModule(e)
		}), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(d, p);
	var c = {
			updateSize: function() {
				var e, t, a = this,
					i = a.$el;
				e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height :
					i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css(
							"padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) -
						parseInt(i.css("padding-bottom"), 10), n.extend(a, {
							width: e,
							height: t,
							size: a.isHorizontal() ? e : t
						}))
			},
			updateSlides: function() {
				var e = this,
					t = e.params,
					a = e.$wrapperEl,
					i = e.size,
					s = e.rtl,
					r = e.wrongRTL,
					o = a.children("." + e.params.slideClass),
					d = e.virtual && t.virtual.enabled ? e.virtual.slides.length : o.length,
					p = [],
					c = [],
					u = [],
					h = t.slidesOffsetBefore;
				"function" == typeof h && (h = t.slidesOffsetBefore.call(e));
				var f = t.slidesOffsetAfter;
				"function" == typeof f && (f = t.slidesOffsetAfter.call(e));
				var v = d,
					m = e.snapGrid.length,
					g = e.snapGrid.length,
					b = t.spaceBetween,
					w = -h,
					y = 0,
					x = 0;
				if (void 0 !== i) {
					var T, E;
					"string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -
						b, s ? o.css({
							marginLeft: "",
							marginTop: ""
						}) : o.css({
							marginRight: "",
							marginBottom: ""
						}), t.slidesPerColumn > 1 && (T = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math
							.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill &&
							(T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
					for (var S, C = t.slidesPerColumn, M = T / C, z = M - (t.slidesPerColumn * M - d), P = 0; P < d; P += 1) {
						E = 0;
						var k = o.eq(P);
						if (t.slidesPerColumn > 1) {
							var $ = void 0,
								I = void 0,
								L = void 0;
							"column" === t.slidesPerColumnFill ? (L = P - (I = Math.floor(P / C)) * C, (I > z || I === z && L === C - 1) &&
								(L += 1) >= C && (L = 0, I += 1), $ = I + L * T / C, k.css({
									"-webkit-box-ordinal-group": $,
									"-moz-box-ordinal-group": $,
									"-ms-flex-order": $,
									"-webkit-order": $,
									order: $
								})) : I = P - (L = Math.floor(P / M)) * M, k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L &&
								t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", L)
						}
						"none" !== k.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(
								!0), t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths &&
								(E = Math.floor(E)), o[P] && (e.isHorizontal() ? o[P].style.width = E + "px" : o[P].style.height = E + "px")
							), o[P] && (o[P].swiperSlideSize = E), u.push(E), t.centeredSlides ? (w = w + E / 2 + y / 2 + b, 0 === y && 0 !==
								P && (w = w - i / 2 - b), 0 === P && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), x % t.slidesPerGroup ==
								0 && p.push(w), c.push(w)) : (x % t.slidesPerGroup == 0 && p.push(w), c.push(w), w = w + E + b), e.virtualSize +=
							E + b, y = E, x += 1)
					}
					if (e.virtualSize = Math.max(e.virtualSize, i) + f, s && r && ("slide" === t.effect || "coverflow" === t.effect) &&
						a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}), l.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : a.css({
							height: e.virtualSize + t.spaceBetween + "px"
						})), t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize /
							t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : a.css({
							height: e.virtualSize + t.spaceBetween + "px"
						}), t.centeredSlides)) {
						S = [];
						for (var D = 0; D < p.length; D += 1) p[D] < e.virtualSize + p[0] && S.push(p[D]);
						p = S
					}
					if (!t.centeredSlides) {
						S = [];
						for (var O = 0; O < p.length; O += 1) p[O] <= e.virtualSize - i && S.push(p[O]);
						p = S, Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i)
					}
					0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? o.css({
							marginLeft: b + "px"
						}) : o.css({
							marginRight: b + "px"
						}) : o.css({
							marginBottom: b + "px"
						})), n.extend(e, {
							slides: o,
							snapGrid: p,
							slidesGrid: c,
							slidesSizesGrid: u
						}), d !== v && e.emit("slidesLengthChange"), p.length !== m && e.emit("snapGridLengthChange"), c.length !== g &&
						e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
				}
			},
			updateAutoHeight: function() {
				var e, t = this,
					a = [],
					i = 0;
				if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
					for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
						var s = t.activeIndex + e;
						if (s > t.slides.length) break;
						a.push(t.slides.eq(s)[0])
					} else a.push(t.slides.eq(t.activeIndex)[0]);
				for (e = 0; e < a.length; e += 1)
					if (void 0 !== a[e]) {
						var r = a[e].offsetHeight;
						i = r > i ? r : i
					} i && t.$wrapperEl.css("height", i + "px")
			},
			updateSlidesOffset: function() {
				for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft :
					e[t].offsetTop
			},
			updateSlidesProgress: function(e) {
				void 0 === e && (e = this.translate || 0);
				var t = this,
					a = t.params,
					i = t.slides,
					s = t.rtl;
				if (0 !== i.length) {
					void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
					var r = -e;
					s && (r = e), i.removeClass(a.slideVisibleClass);
					for (var n = 0; n < i.length; n += 1) {
						var o = i[n],
							l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
						if (a.watchSlidesVisibility) {
							var d = -(r - o.swiperSlideOffset),
								p = d + t.slidesSizesGrid[n];
							(d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
						}
						o.progress = s ? -l : l
					}
				}
			},
			updateProgress: function(e) {
				void 0 === e && (e = this.translate || 0);
				var t = this,
					a = t.params,
					i = t.maxTranslate() - t.minTranslate(),
					s = t.progress,
					r = t.isBeginning,
					o = t.isEnd,
					l = r,
					d = o;
				0 === i ? (s = 0, r = !0, o = !0) : (r = (s = (e - t.minTranslate()) / i) <= 0, o = s >= 1), n.extend(t, {
					progress: s,
					isBeginning: r,
					isEnd: o
				}), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !l && t.emit(
					"reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !r || d && !o) && t.emit("fromEdge"), t.emit(
					"progress", s)
			},
			updateSlidesClasses: function() {
				var e, t = this,
					a = t.slides,
					i = t.params,
					s = t.$wrapperEl,
					r = t.activeIndex,
					n = t.realIndex,
					o = t.virtual && i.virtual.enabled;
				a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass +
					" " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass +
					'[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ?
					s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(
						i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass +
						'[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
				var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
				i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
				var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
				i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ?
					s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr(
						"data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." +
						i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
					d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass +
						')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) :
					s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr(
						"data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
			},
			updateActiveIndex: function(e) {
				var t, a = this,
					i = a.rtl ? a.translate : -a.translate,
					s = a.slidesGrid,
					r = a.snapGrid,
					o = a.params,
					l = a.activeIndex,
					d = a.realIndex,
					p = a.snapIndex,
					c = e;
				if (void 0 === c) {
					for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ?
						c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
					o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
				}
				if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / o.slidesPerGroup)) >= r.length && (t = r.length - 1),
					c !== l) {
					var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
					n.extend(a, {
						snapIndex: t,
						realIndex: h,
						previousIndex: l,
						activeIndex: c
					}), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit(
						"slideChange")
				} else t !== p && (a.snapIndex = t, a.emit("snapIndexChange"))
			},
			updateClickedSlide: function(e) {
				var t = this,
					i = t.params,
					s = a(e.target).closest("." + i.slideClass)[0],
					r = !1;
				if (s)
					for (var n = 0; n < t.slides.length; n += 1) t.slides[n] === s && (r = !0);
				if (!s || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
				t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a(s).attr(
						"data-swiper-slide-index"), 10) : t.clickedIndex = a(s).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex &&
					t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
			}
		},
		u = {
			getTranslate: function(e) {
				void 0 === e && (e = this.isHorizontal() ? "x" : "y");
				var t = this.params,
					a = this.rtl,
					i = this.translate,
					s = this.$wrapperEl;
				if (t.virtualTranslate) return a ? -i : i;
				var r = n.getTranslate(s[0], e);
				return a && (r = -r), r || 0
			},
			setTranslate: function(e, t) {
				var a = this,
					i = a.rtl,
					s = a.params,
					r = a.$wrapperEl,
					n = a.progress,
					o = 0,
					d = 0;
				a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.virtualTranslate ||
					(l.transforms3d ? r.transform("translate3d(" + o + "px, " + d + "px, 0px)") : r.transform("translate(" + o +
						"px, " + d + "px)")), a.translate = a.isHorizontal() ? o : d;
				var p = a.maxTranslate() - a.minTranslate();
				(0 === p ? 0 : (e - a.minTranslate()) / p) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
			},
			minTranslate: function() {
				return -this.snapGrid[0]
			},
			maxTranslate: function() {
				return -this.snapGrid[this.snapGrid.length - 1]
			}
		},
		h = {
			setTransition: function(e, t) {
				this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
			},
			transitionStart: function(e) {
				void 0 === e && (e = !0);
				var t = this,
					a = t.activeIndex,
					i = t.params,
					s = t.previousIndex;
				i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit(
					"slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
			},
			transitionEnd: function(e) {
				void 0 === e && (e = !0);
				var t = this,
					a = t.activeIndex,
					i = t.previousIndex;
				t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"),
					a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
			}
		},
		f = function() {
			return {
				isSafari: (a = e.navigator.userAgent.toLowerCase(), a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf(
					"android") < 0),
				isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
				ie: e.navigator.pointerEnabled || e.navigator.msPointerEnabled,
				ieTouch: e.navigator.msPointerEnabled && e.navigator.msMaxTouchPoints > 1 || e.navigator.pointerEnabled && e.navigator
					.maxTouchPoints > 1,
				lteIE9: (t = o.createElement("div"), t.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === t.getElementsByTagName(
					"i").length)
			};
			var t, a
		}(),
		v = {
			slideTo: function(e, t, a, i) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
				var s = this,
					r = e;
				r < 0 && (r = 0);
				var n = s.params,
					o = s.snapGrid,
					l = s.slidesGrid,
					d = s.previousIndex,
					p = s.activeIndex,
					c = s.rtl,
					u = s.$wrapperEl,
					h = Math.floor(r / n.slidesPerGroup);
				h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit(
					"beforeSlideChangeStart");
				var v = -o[h];
				if (s.updateProgress(v), n.normalizeSlideIndex)
					for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (r = m);
				return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate &&
					v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(
							r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v),
						1) : (0 === t || f.lteIE9 ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(),
						s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a)) : (s.setTransition(t), s.setTranslate(
						v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(
						a), s.animating || (s.animating = !0, u.transitionEnd(function() {
						s && !s.destroyed && s.transitionEnd(a)
					}))), 0)))
			},
			slideNext: function(e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					r = i.animating;
				return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup,
					e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
			},
			slidePrev: function(e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					r = i.animating;
				return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t,
					a)) : i.slideTo(i.activeIndex - 1, e, t, a)
			},
			slideReset: function(e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				return this.slideTo(this.activeIndex, e, t, a)
			},
			slideToClickedSlide: function() {
				var e, t = this,
					i = t.params,
					s = t.$wrapperEl,
					r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
					o = t.clickedIndex;
				if (i.loop) {
					if (t.animating) return;
					e = parseInt(a(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r /
						2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = s.children("." + i.slideClass +
							'[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(
							function() {
								t.slideTo(o)
							})) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = s.children("." + i.slideClass +
							'[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(
							function() {
								t.slideTo(o)
							})) : t.slideTo(o)
				} else t.slideTo(o)
			}
		},
		m = {
			loopCreate: function() {
				var e = this,
					t = e.params,
					i = e.$wrapperEl;
				i.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
				var s = i.children("." + t.slideClass);
				if (t.loopFillGroupWithBlank) {
					var r = t.slidesPerGroup - s.length % t.slidesPerGroup;
					if (r !== t.slidesPerGroup) {
						for (var n = 0; n < r; n += 1) {
							var l = a(o.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
							i.append(l)
						}
						s = i.children("." + t.slideClass)
					}
				}
				"auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), e.loopedSlides = parseInt(t.loopedSlides ||
					t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides =
					s.length);
				var d = [],
					p = [];
				s.each(function(t, i) {
					var r = a(i);
					t < e.loopedSlides && p.push(i), t < s.length && t >= s.length - e.loopedSlides && d.push(i), r.attr(
						"data-swiper-slide-index", t)
				});
				for (var c = 0; c < p.length; c += 1) i.append(a(p[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
				for (var u = d.length - 1; u >= 0; u -= 1) i.prepend(a(d[u].cloneNode(!0)).addClass(t.slideDuplicateClass))
			},
			loopFix: function() {
				var e, t = this,
					a = t.params,
					i = t.activeIndex,
					s = t.slides,
					r = t.loopedSlides,
					n = t.allowSlidePrev,
					o = t.allowSlideNext;
				t.allowSlidePrev = !0, t.allowSlideNext = !0, i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0)) :
					("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r, e +=
						r, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = n, t.allowSlideNext = o
			},
			loopDestroy: function() {
				var e = this.$wrapperEl,
					t = this.params,
					a = this.slides;
				e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index")
			}
		},
		g = {
			setGrabCursor: function(e) {
				if (!l.touch && this.params.simulateTouch) {
					var t = this.el;
					t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ?
						"-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function() {
				l.touch || (this.el.style.cursor = "")
			}
		},
		b = {
			appendSlide: function(e) {
				var t = this,
					a = t.$wrapperEl,
					i = t.params;
				if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
				else a.append(e);
				i.loop && t.loopCreate(), i.observer && l.observer || t.update()
			},
			prependSlide: function(e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && t.loopDestroy();
				var r = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
					r = s + e.length
				} else i.prepend(e);
				a.loop && t.loopCreate(), a.observer && l.observer || t.update(), t.slideTo(r, 0, !1)
			},
			removeSlide: function(e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));
				var r, n = s;
				if ("object" == typeof e && "length" in e) {
					for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
					n = Math.max(n, 0)
				} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
				a.loop && t.loopCreate(), a.observer && l.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) :
					t.slideTo(n, 0, !1)
			},
			removeAllSlides: function() {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		w = function() {
			var t = e.navigator.userAgent,
				a = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: e.cordova || e.phonegap,
					phonegap: e.cordova || e.phonegap
				},
				i = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				s = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				r = t.match(/(iPad).*OS\s([\d_]+)/),
				n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				l = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (i && (a.os = "windows", a.osVersion = i[2], a.windows = !0), s && !i && (a.os = "android", a.osVersion = s[2],
					a.android = !0, a.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (r || l || n) && (a.os = "ios", a.ios = !
					0), l && !n && (a.osVersion = l[2].replace(/_/g, "."), a.iphone = !0), r && (a.osVersion = r[2].replace(/_/g, "."),
					a.ipad = !0), n && (a.osVersion = n[3] ? n[3].replace(/_/g, ".") : null, a.iphone = !0), a.ios && a.osVersion &&
				t.indexOf("Version/") >= 0 && "10" === a.osVersion.split(".")[0] && (a.osVersion = t.toLowerCase().split(
					"version/")[1].split(" ")[0]), a.desktop = !(a.os || a.android || a.webView), a.webView = (l || r || n) && t.match(
					/.*AppleWebKit(?!.*Safari)/i), a.os && "ios" === a.os) {
				var d = a.osVersion.split("."),
					p = o.querySelector('meta[name="viewport"]');
				a.minimalUi = !a.webView && (n || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && p && p.getAttribute(
					"content").indexOf("minimal-ui") >= 0
			}
			return a.pixelRatio = e.devicePixelRatio || 1, a
		}(),
		y = function(e) {
			var t = this,
				i = t.touchEventsData,
				s = t.params,
				r = t.touches,
				l = e;
			if (l.originalEvent && (l = l.originalEvent), i.isTouchEvent = "touchstart" === l.type, (i.isTouchEvent || !(
					"which" in l) || 3 !== l.which) && (!i.isTouched || !i.isMoved))
				if (s.noSwiping && a(l.target).closest("." + s.noSwipingClass)[0]) t.allowClick = !0;
				else if (!s.swipeHandler || a(l).closest(s.swipeHandler)[0]) {
				r.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, r.currentY = "touchstart" === l.type ?
					l.targetTouches[0].pageY : l.pageY;
				var d = r.currentX,
					p = r.currentY;
				if (!(w.ios && !w.cordova && s.iOSEdgeSwipeDetection && d <= s.iOSEdgeSwipeThreshold && d >= window.screen.width -
						s.iOSEdgeSwipeThreshold)) {
					if (n.extend(i, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), r.startX = d, r.startY = p, i.touchStartTime = n.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection =
						void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== l.type) {
						var c = !0;
						a(l.target).is(i.formElements) && (c = !1), o.activeElement && a(o.activeElement).is(i.formElements) && o.activeElement
							.blur(), c && t.allowTouchMove && l.preventDefault()
					}
					t.emit("touchStart", l)
				}
			}
		},
		x = function(e) {
			var t = this,
				i = t.touchEventsData,
				s = t.params,
				r = t.touches,
				l = t.rtl,
				d = e;
			if (d.originalEvent && (d = d.originalEvent), !i.isTouchEvent || "mousemove" !== d.type) {
				var p = "touchmove" === d.type ? d.targetTouches[0].pageX : d.pageX,
					c = "touchmove" === d.type ? d.targetTouches[0].pageY : d.pageY;
				if (d.preventedByNestedSwiper) return r.startX = p, void(r.startY = c);
				if (!t.allowTouchMove) return t.allowClick = !1, void(i.isTouched && (n.extend(r, {
					startX: p,
					startY: c,
					currentX: p,
					currentY: c
				}), i.touchStartTime = n.now()));
				if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
					if (t.isVertical()) {
						if (r.currentY < r.startY && t.translate <= t.maxTranslate() || r.currentY > r.startY && t.translate >= t.minTranslate())
							return
					} else if (r.currentX < r.startX && t.translate <= t.maxTranslate() || r.currentX > r.startX && t.translate >= t.minTranslate())
					return;
				if (i.isTouchEvent && o.activeElement && d.target === o.activeElement && a(d.target).is(i.formElements)) return i.isMoved = !
					0, void(t.allowClick = !1);
				if (i.allowTouchCallbacks && t.emit("touchMove", d), !(d.targetTouches && d.targetTouches.length > 1)) {
					r.currentX = "touchmove" === d.type ? d.targetTouches[0].pageX : d.pageX, r.currentY = "touchmove" === d.type ? d
						.targetTouches[0].pageY : d.pageY;
					var u, h = r.currentX - r.startX,
						f = r.currentY - r.startY;
					if (void 0 === i.isScrolling) t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ?
						i.isScrolling = !1 : h * h + f * f >= 25 && (u = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling =
							t.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle);
					if (i.isScrolling && t.emit("touchMoveOpposite", d), "undefined" == typeof startMoving && (r.currentX === r.startX &&
							r.currentY === r.startY || (i.startMoving = !0)), i.isTouched)
						if (i.isScrolling) i.isTouched = !1;
						else if (i.startMoving) {
						t.allowClick = !1, d.preventDefault(), s.touchMoveStopPropagation && !s.nested && d.stopPropagation(), i.isMoved ||
							(s.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger(
									"webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== t.allowSlideNext &&
								!0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", d)), t.emit("sliderMove", d), i.isMoved = !
							0;
						var v = t.isHorizontal() ? h : f;
						r.diff = v, v *= s.touchRatio, l && (v = -v), t.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v +
							i.startTranslate;
						var m = !0,
							g = s.resistanceRatio;
						if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > t.minTranslate() ? (m = !1, s.resistance &&
								(i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + v, g))) : v < 0 &&
							i.currentTranslate < t.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 -
								Math.pow(t.maxTranslate() - i.startTranslate - v, g))), m && (d.preventedByNestedSwiper = !0), !t.allowSlideNext &&
							"next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
							!t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate =
								i.startTranslate), s.threshold > 0) {
							if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
							if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate =
								i.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
						}
						s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (t.updateActiveIndex(), t
							.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
							position: r[t.isHorizontal() ? "startX" : "startY"],
							time: i.touchStartTime
						}), i.velocities.push({
							position: r[t.isHorizontal() ? "currentX" : "currentY"],
							time: n.now()
						})), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
					}
				}
			}
		},
		T = function(e) {
			var t = this,
				a = t.touchEventsData,
				i = t.params,
				s = t.touches,
				r = t.rtl,
				o = t.$wrapperEl,
				l = t.slidesGrid,
				d = t.snapGrid,
				p = e;
			if (p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), a.allowTouchCallbacks = !
				1, a.isTouched) {
				i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(
					!1);
				var c, u = n.now(),
					h = u - a.touchStartTime;
				if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), h < 300 && u - a.lastClickTime > 300 && (a.clickTimeout &&
						clearTimeout(a.clickTimeout), a.clickTimeout = n.nextTick(function() {
							t && !t.destroyed && t.emit("click", p)
						}, 300)), h < 300 && u - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit(
						"doubleTap", p))), a.lastClickTime = n.now(), n.nextTick(function() {
						t.destroyed || (t.allowClick = !0)
					}), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
					return a.isTouched = !1, void(a.isMoved = !1);
				if (a.isTouched = !1, a.isMoved = !1, c = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i
					.freeMode) {
					if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
					if (c > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length -
						1));
					if (i.freeModeMomentum) {
						if (a.velocities.length > 1) {
							var f = a.velocities.pop(),
								v = a.velocities.pop(),
								m = f.position - v.position,
								g = f.time - v.time;
							t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g >
								150 || n.now() - f.time > 300) && (t.velocity = 0)
						} else t.velocity = 0;
						t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
						var b = 1e3 * i.freeModeMomentumRatio,
							w = t.velocity * b,
							y = t.translate + w;
						r && (y = -y);
						var x, T = !1,
							E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
						if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x =
							t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();
						else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E),
							x = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();
						else if (i.freeModeSticky) {
							for (var S, C = 0; C < d.length; C += 1)
								if (d[C] > -y) {
									S = C;
									break
								} y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
						}
						if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
						else if (i.freeModeSticky) return void t.slideReset();
						i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(),
							t.animating = !0, o.transitionEnd(function() {
								t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(
									x), o.transitionEnd(function() {
									t && !t.destroyed && t.transitionEnd()
								}))
							})) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating ||
							(t.animating = !0, o.transitionEnd(function() {
								t && !t.destroyed && t.transitionEnd()
							}))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
					}(!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
				} else {
					for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < l.length; P += i.slidesPerGroup) void 0 !== l[P + i.slidesPerGroup] ?
						c >= l[P] && c < l[P + i.slidesPerGroup] && (M = P, z = l[P + i.slidesPerGroup] - l[P]) : c >= l[P] && (M = P, z =
							l[l.length - 1] - l[l.length - 2]);
					var k = (c - l[M]) / z;
					if (h > i.longSwipesMs) {
						if (!i.longSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" ===
							t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
					} else {
						if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
					}
				}
			}
		},
		E = function() {
			var e = this,
				t = e.params,
				a = e.el,
				i = e.allowSlideNext,
				s = e.allowSlidePrev;
			if (!a || 0 !== a.offsetWidth) {
				if (t.breakpoints && e.setBreakpoint(), e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(),
					t.freeMode) {
					var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
					e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
				} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ?
					e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
				e.allowSlidePrev = s, e.allowSlideNext = i
			}
		},
		S = function(e) {
			this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating &&
				(e.stopPropagation(), e.stopImmediatePropagation()))
		};
	var C = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			iOSEdgeSwipeDetection: !1,
			iOSEdgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !0,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		M = {
			update: c,
			translate: u,
			transition: h,
			slide: v,
			loop: m,
			grabCursor: g,
			manipulation: b,
			events: {
				attachEvents: function() {
					var e = this,
						t = e.params,
						a = e.touchEvents,
						i = e.el,
						s = e.wrapperEl;
					e.onTouchStart = y.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = T.bind(e), e.onClick = S.bind(e);
					var r = "container" === t.touchEventsTarget ? i : s,
						n = !!t.nested;
					if (f.ie) r.addEventListener(a.start, e.onTouchStart, !1), (l.touch ? r : o).addEventListener(a.move, e.onTouchMove,
						n), (l.touch ? r : o).addEventListener(a.end, e.onTouchEnd, !1);
					else {
						if (l.touch) {
							var d = !("touchstart" !== a.start || !l.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							r.addEventListener(a.start, e.onTouchStart, d), r.addEventListener(a.move, e.onTouchMove, l.passiveListener ? {
								passive: !1,
								capture: n
							} : n), r.addEventListener(a.end, e.onTouchEnd, d)
						}(t.simulateTouch && !w.ios && !w.android || t.simulateTouch && !l.touch && w.ios) && (r.addEventListener(
							"mousedown", e.onTouchStart, !1), o.addEventListener("mousemove", e.onTouchMove, n), o.addEventListener(
							"mouseup", e.onTouchEnd, !1))
					}(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(
						"resize observerUpdate", E)
				},
				detachEvents: function() {
					var e = this,
						t = e.params,
						a = e.touchEvents,
						i = e.el,
						s = e.wrapperEl,
						r = "container" === t.touchEventsTarget ? i : s,
						n = !!t.nested;
					if (f.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (l.touch ? r : o).removeEventListener(a.move, e.onTouchMove,
						n), (l.touch ? r : o).removeEventListener(a.end, e.onTouchEnd, !1);
					else {
						if (l.touch) {
							var d = !("onTouchStart" !== a.start || !l.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							r.removeEventListener(a.start, e.onTouchStart, d), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(
								a.end, e.onTouchEnd, d)
						}(t.simulateTouch && !w.ios && !w.android || t.simulateTouch && !l.touch && w.ios) && (r.removeEventListener(
							"mousedown", e.onTouchStart, !1), o.removeEventListener("mousemove", e.onTouchMove, n), o.removeEventListener(
							"mouseup", e.onTouchEnd, !1))
					}(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(
						"resize observerUpdate", E)
				}
			},
			breakpoints: {
				setBreakpoint: function() {
					var e = this,
						t = e.activeIndex,
						a = e.loopedSlides;
					void 0 === a && (a = 0);
					var i = e.params,
						s = i.breakpoints;
					if (s && (!s || 0 !== Object.keys(s).length)) {
						var r = e.getBreakpoint(s);
						if (r && e.currentBreakpoint !== r) {
							var o = r in s ? s[r] : e.originalParams,
								l = i.loop && o.slidesPerView !== i.slidesPerView;
							if (n.extend(e.params, o), n.extend(e, {
									allowTouchMove: e.params.allowTouchMove,
									allowSlideNext: e.params.allowSlideNext,
									allowSlidePrev: e.params.allowSlidePrev
								}), e.currentBreakpoint = r, l) {
								var d = t - a;
								e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(d + a, 0, !1)
							}
							e.emit("breakpoint", o)
						}
					}
				},
				getBreakpoint: function(t) {
					if (t) {
						var a = !1,
							i = [];
						Object.keys(t).forEach(function(e) {
							i.push(e)
						}), i.sort(function(e, t) {
							return parseInt(e, 10) > parseInt(t, 10)
						});
						for (var s = 0; s < i.length; s += 1) {
							var r = i[s];
							r >= e.innerWidth && !a && (a = r)
						}
						return a || "max"
					}
				}
			},
			classes: {
				addClasses: function() {
					var t = this.classNames,
						a = this.params,
						i = this.rtl,
						s = this.$el,
						r = [];
					r.push(a.direction), a.freeMode && r.push("free-mode"), l.flexbox || r.push("no-flexbox"), a.autoHeight && r.push(
							"autoheight"), i && r.push("rtl"), a.slidesPerColumn > 1 && r.push("multirow"), w.android && r.push("android"),
						w.ios && r.push("ios"), (e.navigator.pointerEnabled || e.navigator.msPointerEnabled) && r.push("wp8-" + a.direction),
						r.forEach(function(e) {
							t.push(a.containerModifierClass + e)
						}), s.addClass(t.join(" "))
				},
				removeClasses: function() {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function(t, a, i, s, r, n) {
					var o;

					function l() {
						n && n()
					}
					t.complete && r ? l() : a ? ((o = new e.Image).onload = l, o.onerror = l, s && (o.sizes = s), i && (o.srcset = i),
						a && (o.src = a)) : l()
				},
				preloadImages: function() {
					var e = this;

					function t() {
						void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded ===
							e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var a = 0; a < e.imagesToLoad.length; a += 1) {
						var i = e.imagesToLoad[a];
						e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute(
							"sizes"), !0, t)
					}
				}
			}
		},
		z = {},
		P = function(t) {
			function i() {
				for (var s, r, o, d = [], p = arguments.length; p--;) d[p] = arguments[p];
				1 === d.length && d[0].constructor && d[0].constructor === Object ? r = d[0] : (s = (o = d)[0], r = o[1]);
				r || (r = {}), r = n.extend({}, r), s && !r.el && (r.el = s), t.call(this, r), Object.keys(M).forEach(function(e) {
					Object.keys(M[e]).forEach(function(t) {
						i.prototype[t] || (i.prototype[t] = M[e][t])
					})
				});
				var c = this;
				Object.keys(c.modules).forEach(function(e) {
					var t = c.modules[e];
					if (t.params) {
						var a = Object.keys(t.params)[0],
							i = t.params[a];
						if ("object" != typeof i) return;
						if (!(a in r && "enabled" in i)) return;
						!0 === r[a] && (r[a] = {
							enabled: !0
						}), "object" != typeof r[a] || "enabled" in r[a] || (r[a].enabled = !0), r[a] || (r[a] = {
							enabled: !1
						})
					}
				});
				var u = n.extend({}, C);
				c.useModulesParams(u), c.params = n.extend({}, u, z, r), c.originalParams = n.extend({}, c.params), c.passedParams =
					n.extend({}, r);
				var h = a(c.params.el);
				if (s = h[0]) {
					if (h.length > 1) {
						var f = [];
						return h.each(function(e, t) {
							var a = n.extend({}, r, {
								el: t
							});
							f.push(new i(a))
						}), f
					}
					s.swiper = c, h.data("swiper", c);
					var v, m, g = h.children("." + c.params.wrapperClass);
					return n.extend(c, {
						$el: h,
						el: s,
						$wrapperEl: g,
						wrapperEl: g[0],
						classNames: [],
						slides: a(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function() {
							return "horizontal" === c.params.direction
						},
						isVertical: function() {
							return "vertical" === c.params.direction
						},
						rtl: "horizontal" === c.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === h.css("direction")),
						wrongRTL: "-webkit-box" === g.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: c.params.allowSlideNext,
						allowSlidePrev: c.params.allowSlidePrev,
						touchEvents: (v = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], e.navigator
							.pointerEnabled ? m = ["pointerdown", "pointermove", "pointerup"] : e.navigator.msPointerEnabled && (m = [
								"MSPointerDown", "MsPointerMove", "MsPointerUp"
							]), {
								start: l.touch || !c.params.simulateTouch ? v[0] : m[0],
								move: l.touch || !c.params.simulateTouch ? v[1] : m[1],
								end: l.touch || !c.params.simulateTouch ? v[2] : m[2]
							}),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: n.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: c.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), c.useModules(), c.params.init && c.init(), c
				}
			}
			t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
			var s = {
				extendedDefaults: {},
				defaults: {},
				Class: {},
				$: {}
			};
			return i.prototype.slidesPerViewDynamic = function() {
				var e = this,
					t = e.params,
					a = e.slides,
					i = e.slidesGrid,
					s = e.size,
					r = e.activeIndex,
					n = 1;
				if (t.centeredSlides) {
					for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, (l += a[d].swiperSlideSize) >
						s && (o = !0));
					for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && (n += 1, (l += a[p].swiperSlideSize) > s && (o = !0))
				} else
					for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
				return n
			}, i.prototype.update = function() {
				var e, t = this;
				t && !t.destroyed && (t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ?
					(a(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView >
						1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex,
						0, !1, !0)) || a(), t.emit("update"));

				function a() {
					e = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setTranslate(e), t.updateActiveIndex(),
						t.updateSlidesClasses()
				}
			}, i.prototype.init = function() {
				var e = this;
				e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop &&
					e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages &&
					e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) :
					e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit(
						"init"))
			}, i.prototype.destroy = function(e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var a = this,
					i = a.params,
					s = a.$el,
					r = a.$wrapperEl,
					o = a.slides;
				a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(),
					s.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass,
						i.slideNextClass, i.slidePrevClass
					].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr(
						"data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
					a.off(e)
				}), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), n.deleteProps(a)), a.destroyed = !0
			}, i.extendDefaults = function(e) {
				n.extend(z, e)
			}, s.extendedDefaults.get = function() {
				return z
			}, s.defaults.get = function() {
				return C
			}, s.Class.get = function() {
				return t
			}, s.$.get = function() {
				return a
			}, Object.defineProperties(i, s), i
		}(d),
		k = {
			name: "device",
			proto: {
				device: w
			},
			static: {
				device: w
			}
		},
		$ = {
			name: "support",
			proto: {
				support: l
			},
			static: {
				support: l
			}
		},
		I = {
			name: "browser",
			proto: {
				browser: f
			},
			static: {
				browser: f
			}
		},
		L = {
			name: "resize",
			create: function() {
				var e = this;
				n.extend(e, {
					resize: {
						resizeHandler: function() {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function() {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function() {
					e.addEventListener("resize", this.resize.resizeHandler), e.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function() {
					e.removeEventListener("resize", this.resize.resizeHandler), e.removeEventListener("orientationchange", this.resize
						.orientationChangeHandler)
				}
			}
		},
		D = {
			func: e.MutationObserver || e.WebkitMutationObserver,
			attach: function(e, t) {
				void 0 === t && (t = {});
				var a = this,
					i = new(0, D.func)(function(e) {
						e.forEach(function(e) {
							a.emit("observerUpdate", e)
						})
					});
				i.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), a.observer.observers.push(i)
			},
			init: function() {
				var e = this;
				if (l.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
					e.observer.attach(e.$el[0], {
						childList: !1
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function() {
				this.observer.observers.forEach(function(e) {
					e.disconnect()
				}), this.observer.observers = []
			}
		},
		O = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1
			},
			create: function() {
				n.extend(this, {
					observer: {
						init: D.init.bind(this),
						attach: D.attach.bind(this),
						destroy: D.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function() {
					this.observer.init()
				},
				destroy: function() {
					this.observer.destroy()
				}
			}
		},
		A = {
			update: function(e) {
				var t = this,
					a = t.params,
					i = a.slidesPerView,
					s = a.slidesPerGroup,
					r = a.centeredSlides,
					o = t.virtual,
					l = o.from,
					d = o.to,
					p = o.slides,
					c = o.slidesGrid,
					u = o.renderSlide,
					h = o.offset;
				t.updateActiveIndex();
				var f, v, m, g = t.activeIndex || 0;
				f = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top", r ? (v = Math.floor(i / 2) + s, m =
					Math.floor(i / 2) + s) : (v = i + (s - 1), m = s);
				var b = Math.max((g || 0) - m, 0),
					w = Math.min((g || 0) + v, p.length - 1),
					y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

				function x() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (n.extend(t.virtual, {
						from: b,
						to: w,
						offset: y,
						slidesGrid: t.slidesGrid
					}), l === b && d === w && !e) return t.slidesGrid !== c && y !== h && t.slides.css(f, y + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: y,
					from: b,
					to: w,
					slides: function() {
						for (var e = [], t = b; t <= w; t += 1) e.push(p[t]);
						return e
					}()
				}), void x();
				var T = [],
					E = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var S = l; S <= d; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass +
						'[data-swiper-slide-index="' + S + '"]').remove();
				for (var C = 0; C < p.length; C += 1) C >= b && C <= w && (void 0 === d || e ? E.push(C) : (C > d && E.push(C), C <
					l && T.push(C)));
				E.forEach(function(e) {
					t.$wrapperEl.append(u(p[e], e))
				}), T.sort(function(e, t) {
					return e < t
				}).forEach(function(e) {
					t.$wrapperEl.prepend(u(p[e], e))
				}), t.$wrapperEl.children(".swiper-slide").css(f, y + "px"), x()
			},
			renderSlide: function(e, t) {
				var i = this,
					s = i.params.virtual;
				if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
				var r = s.renderSlide ? a(s.renderSlide.call(i, e, t)) : a('<div class="' + i.params.slideClass +
					'" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), s.cache && (i.virtual.cache[t] =
					r), r
			},
			appendSlide: function(e) {
				this.virtual.slides.push(e), this.virtual.update(!0)
			},
			prependSlide: function(e) {
				var t = this;
				if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
					var a = t.virtual.cache,
						i = {};
					Object.keys(a).forEach(function(e) {
						i[e + 1] = a[e]
					}), t.virtual.cache = i
				}
				t.virtual.update(!0), t.slideNext(0)
			}
		},
		H = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					virtual: {
						update: A.update.bind(e),
						appendSlide: A.appendSlide.bind(e),
						prependSlide: A.prependSlide.bind(e),
						renderSlide: A.renderSlide.bind(e),
						slides: e.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						n.extend(e.params, t), n.extend(e.originalParams, t), e.virtual.update()
					}
				},
				setTranslate: function() {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		X = {
			handle: function(t) {
				var a = this,
					i = t;
				i.originalEvent && (i = i.originalEvent);
				var s = i.keyCode || i.charCode;
				if (!a.allowSlideNext && (a.isHorizontal() && 39 === s || a.isVertical() && 40 === s)) return !1;
				if (!a.allowSlidePrev && (a.isHorizontal() && 37 === s || a.isVertical() && 38 === s)) return !1;
				if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || o.activeElement && o.activeElement.nodeName && ("input" ===
						o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
					if (37 === s || 39 === s || 38 === s || 40 === s) {
						var r = !1;
						if (a.$el.parents("." + a.params.slideClass).length > 0 && 0 === a.$el.parents("." + a.params.slideActiveClass)
							.length) return;
						var n = e.pageXOffset,
							l = e.pageYOffset,
							d = e.innerWidth,
							p = e.innerHeight,
							c = a.$el.offset();
						a.rtl && (c.left -= a.$el[0].scrollLeft);
						for (var u = [
								[c.left, c.top],
								[c.left + a.width, c.top],
								[c.left, c.top + a.height],
								[c.left + a.width, c.top + a.height]
							], h = 0; h < u.length; h += 1) {
							var f = u[h];
							f[0] >= n && f[0] <= n + d && f[1] >= l && f[1] <= l + p && (r = !0)
						}
						if (!r) return
					}
					a.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 ===
							s && !a.rtl || 37 === s && a.rtl) && a.slideNext(), (37 === s && !a.rtl || 39 === s && a.rtl) && a.slidePrev()) :
						(38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && a.slideNext(),
							38 === s && a.slidePrev()), a.emit("keyPress", s)
				}
			},
			enable: function() {
				this.keyboard.enabled || (a(o).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function() {
				this.keyboard.enabled && (a(o).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		N = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1
				}
			},
			create: function() {
				n.extend(this, {
					keyboard: {
						enabled: !1,
						enable: X.enable.bind(this),
						disable: X.disable.bind(this),
						handle: X.handle.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function() {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		};
	var Y = {
			lastScrollTime: n.now(),
			event: e.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
				var e = "onwheel",
					t = e in o;
				if (!t) {
					var a = o.createElement("div");
					a.setAttribute(e, "return;"), t = "function" == typeof a[e]
				}
				return !t && o.implementation && o.implementation.hasFeature && !0 !== o.implementation.hasFeature("", "") && (t =
					o.implementation.hasFeature("Events.wheel", "3.0")), t
			}() ? "wheel" : "mousewheel",
			normalize: function(e) {
				var t = 0,
					a = 0,
					i = 0,
					s = 0;
				return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -
						e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS &&
					(t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i ||
						s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -
						1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
						spinX: t,
						spinY: a,
						pixelX: i,
						pixelY: s
					}
			},
			handle: function(t) {
				var a = t,
					i = this,
					s = i.params.mousewheel;
				a.originalEvent && (a = a.originalEvent);
				var r = 0,
					o = i.rtl ? -1 : 1,
					l = Y.normalize(a);
				if (s.forceToAxis)
					if (i.isHorizontal()) {
						if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
						r = l.pixelX * o
					} else {
						if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
						r = l.pixelY
					}
				else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
				if (0 === r) return !0;
				if (s.invert && (r = -r), i.params.freeMode) {
					var d = i.getTranslate() + r * s.sensitivity,
						p = i.isBeginning,
						c = i.isEnd;
					if (d >= i.minTranslate() && (d = i.minTranslate()), d <= i.maxTranslate() && (d = i.maxTranslate()), i.setTransition(
							0), i.setTranslate(d), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!p && i.isBeginning ||
							!c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel
							.timeout = n.nextTick(function() {
								i.slideReset()
							}, 300)), i.emit("scroll", a), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(),
						0 === d || d === i.maxTranslate()) return !0
				} else {
					if (n.now() - i.mousewheel.lastScrollTime > 60)
						if (r < 0)
							if (i.isEnd && !i.params.loop || i.animating) {
								if (s.releaseOnEdges) return !0
							} else i.slideNext(), i.emit("scroll", a);
					else if (i.isBeginning && !i.params.loop || i.animating) {
						if (s.releaseOnEdges) return !0
					} else i.slidePrev(), i.emit("scroll", a);
					i.mousewheel.lastScrollTime = (new e.Date).getTime()
				}
				return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
			},
			enable: function() {
				var e = this;
				if (!Y.event) return !1;
				if (e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)), t.on(Y.event,
					e.mousewheel.handle), e.mousewheel.enabled = !0, !0
			},
			disable: function() {
				var e = this;
				if (!Y.event) return !1;
				if (!e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = a(e.params.mousewheel.eventsTarged)), t.off(Y.event,
					e.mousewheel.handle), e.mousewheel.enabled = !1, !0
			}
		},
		G = {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function() {
				n.extend(this, {
					mousewheel: {
						enabled: !1,
						enable: Y.enable.bind(this),
						disable: Y.disable.bind(this),
						handle: Y.handle.bind(this),
						lastScrollTime: n.now()
					}
				})
			},
			on: {
				init: function() {
					this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function() {
					this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		},
		B = {
			update: function() {
				var e = this,
					t = e.params.navigation;
				if (!e.params.loop) {
					var a = e.navigation,
						i = a.$nextEl,
						s = a.$prevEl;
					s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length >
						0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
				}
			},
			init: function() {
				var e, t, i = this,
					s = i.params.navigation;
				(s.nextEl || s.prevEl) && (s.nextEl && (e = a(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl &&
					e.length > 1 && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = a(s.prevEl),
					i.params.uniqueNavElements && "string" == typeof s.prevEl && t.length > 1 && 1 === i.$el.find(s.prevEl).length &&
					(t = i.$el.find(s.prevEl))), e && e.length > 0 && e.on("click", function(e) {
					e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
				}), t && t.length > 0 && t.on("click", function(e) {
					e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
				}), n.extend(i.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function() {
				var e = this.navigation,
					t = e.$nextEl,
					a = e.$prevEl;
				t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off(
					"click"), a.removeClass(this.params.navigation.disabledClass))
			}
		},
		V = {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden"
				}
			},
			create: function() {
				n.extend(this, {
					navigation: {
						init: B.init.bind(this),
						update: B.update.bind(this),
						destroy: B.destroy.bind(this)
					}
				})
			},
			on: {
				init: function() {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function() {
					this.navigation.update()
				},
				fromEdge: function() {
					this.navigation.update()
				},
				destroy: function() {
					this.navigation.destroy()
				},
				click: function(e) {
					var t = this.navigation,
						i = t.$nextEl,
						s = t.$prevEl;
					!this.params.navigation.hideOnClick || a(e.target).is(s) || a(e.target).is(i) || (i && i.toggleClass(this.params
						.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		},
		R = {
			update: function() {
				var e = this,
					t = e.rtl,
					i = e.params.pagination;
				if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var s, r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						n = e.pagination.$el,
						o = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e
							.loopedSlides && (s -= r - 2 * e.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== e.params.paginationType &&
							(s = o + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination
						.bullets && e.pagination.bullets.length > 0) {
						var l = e.pagination.bullets;
						if (i.dynamicBullets && (e.pagination.bulletSize = l.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
								n.css(e.isHorizontal() ? "width" : "height", 5 * e.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass +
								" " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " +
								i.bulletActiveClass + "-prev-prev"), n.length > 1) l.each(function(e, t) {
							var r = a(t);
							r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass +
								"-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass +
								"-next").next().addClass(i.bulletActiveClass + "-next-next")))
						});
						else {
							var d = l.eq(s);
							d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(
								i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass +
								"-next-next"))
						}
						if (i.dynamicBullets) {
							var p = Math.min(l.length, 5),
								c = (e.pagination.bulletSize * p - e.pagination.bulletSize) / 2 - s * e.pagination.bulletSize,
								u = t ? "right" : "left";
							l.css(e.isHorizontal() ? u : "top", c + "px")
						}
					}
					if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)),
						"progressbar" === i.type) {
						var h = (s + 1) / o,
							f = h,
							v = 1;
						e.isHorizontal() || (v = h, f = 1), n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" +
							f + ") scaleY(" + v + ")").transition(e.params.speed)
					}
					"custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(e, s + 1, o)), e.emit("paginationRender", e, n[0])) :
						e.emit("paginationUpdate", e, n[0])
				}
			},
			render: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						s = "";
					if ("bullets" === t.type) {
						for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length,
								n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement +
							' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
					}
					"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) :
							'<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)),
						"progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) :
							'<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit(
							"paginationRender", e.pagination.$el[0])
				}
			},
			init: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el) {
					var i = a(t.el);
					0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el)
						.length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(
							t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && i.addClass("" + t.modifierClass + t.type +
							"-dynamic"), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
							t.preventDefault();
							var i = a(this).index() * e.params.slidesPerGroup;
							e.params.loop && (i += e.loopedSlides), e.slideTo(i)
						}), n.extend(e.pagination, {
							$el: i,
							el: i[0]
						}))
				}
			},
			destroy: function() {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.pagination.$el;
					a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets
						.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
				}
			}
		},
		W = {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					type: "bullets",
					dynamicBullets: !1,
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					clickableClass: "swiper-pagination-clickable"
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					pagination: {
						init: R.init.bind(e),
						render: R.render.bind(e),
						update: R.update.bind(e),
						destroy: R.destroy.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function() {
					this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
				},
				snapIndexChange: function() {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function() {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function() {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function() {
					this.pagination.destroy()
				},
				click: function(e) {
					var t = this;
					t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !a(e.target).hasClass(
						t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
				}
			}
		},
		F = {
			setTranslate: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = e.rtl,
						i = e.progress,
						s = t.dragSize,
						r = t.trackSize,
						n = t.$dragEl,
						o = t.$el,
						d = e.params.scrollbar,
						p = s,
						c = (r - s) * i;
					a && e.isHorizontal() ? (c = -c) > 0 ? (p = s - c, c = 0) : -c + s > r && (p = r + c) : c < 0 ? (p = s + c, c =
							0) : c + s > r && (p = r - c), e.isHorizontal() ? (l.transforms3d ? n.transform("translate3d(" + c +
							"px, 0, 0)") : n.transform("translateX(" + c + "px)"), n[0].style.width = p + "px") : (l.transforms3d ? n.transform(
							"translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), n[0].style.height = p + "px"), d
						.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
							o[0].style.opacity = 0, o.transition(400)
						}, 1e3))
				}
			},
			setTransition: function(e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function() {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = t.$dragEl,
						i = t.$el;
					a[0].style.width = "", a[0].style.height = "";
					var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						o = e.size / e.virtualSize,
						l = o * (r / e.size);
					s = "auto" === e.params.scrollbar.dragSize ? r * o : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ?
						a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = o >= 1 ? "none" : "", e.params
						.scrollbarHide && (i[0].style.opacity = 0), n.extend(t, {
							trackSize: r,
							divider: o,
							moveDivider: l,
							dragSize: s
						})
				}
			},
			setDragPosition: function(e) {
				var t = this,
					a = t.scrollbar,
					i = a.$el,
					s = a.dragSize,
					r = a.moveDivider,
					n = (t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX ||
						e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
					) - i.offset()[t.isHorizontal() ? "left" : "top"] - s / 2,
					o = -t.minTranslate() * r,
					l = -t.maxTranslate() * r;
				n < o ? n = o : n > l && (n = l), t.rtl && (n = l - n), n = -n / r, t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(),
					t.updateSlidesClasses()
			},
			onDragStart: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el,
					n = i.$dragEl;
				t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(
					e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit(
					"scrollbarDragStart", e)
			},
			onDragMove: function(e) {
				var t = this.scrollbar,
					a = this.$wrapperEl,
					i = t.$el,
					s = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(
					0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function(e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar
					.dragTimeout = n.nextTick(function() {
						i.css("opacity", 0), i.transition(400)
					}, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset())
			},
			enableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar.$el,
						i = l.touch ? t[0] : document;
					t.on(e.scrollbar.dragEvents.start, e.scrollbar.onDragStart), a(i).on(e.scrollbar.dragEvents.move, e.scrollbar.onDragMove),
						a(i).on(e.scrollbar.dragEvents.end, e.scrollbar.onDragEnd)
				}
			},
			disableDraggable: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar.$el,
						i = l.touch ? t[0] : document;
					t.off(e.scrollbar.dragEvents.start), a(i).off(e.scrollbar.dragEvents.move), a(i).off(e.scrollbar.dragEvents.end)
				}
			},
			init: function() {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						i = e.$el,
						s = e.touchEvents,
						r = e.params.scrollbar,
						o = a(r.el);
					e.params.uniqueNavElements && "string" == typeof r.el && o.length > 1 && 1 === i.find(r.el).length && (o = i.find(
						r.el));
					var d = o.find(".swiper-scrollbar-drag");
					0 === d.length && (d = a('<div class="swiper-scrollbar-drag"></div>'), o.append(d)), e.scrollbar.dragEvents = !1 !==
						e.params.simulateTouch || l.touch ? s : {
							start: "mousedown",
							move: "mousemove",
							end: "mouseup"
						}, n.extend(t, {
							$el: o,
							el: o[0],
							$dragEl: d,
							dragEl: d[0]
						}), r.draggable && t.enableDraggable()
				}
			},
			destroy: function() {
				this.scrollbar.disableDraggable()
			}
		},
		j = {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					scrollbar: {
						init: F.init.bind(e),
						destroy: F.destroy.bind(e),
						updateSize: F.updateSize.bind(e),
						setTranslate: F.setTranslate.bind(e),
						setTransition: F.setTransition.bind(e),
						enableDraggable: F.enableDraggable.bind(e),
						disableDraggable: F.disableDraggable.bind(e),
						setDragPosition: F.setDragPosition.bind(e),
						onDragStart: F.onDragStart.bind(e),
						onDragMove: F.onDragMove.bind(e),
						onDragEnd: F.onDragEnd.bind(e),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function() {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function() {
					this.scrollbar.updateSize()
				},
				resize: function() {
					this.scrollbar.updateSize()
				},
				observerUpdate: function() {
					this.scrollbar.updateSize()
				},
				setTranslate: function() {
					this.scrollbar.setTranslate()
				},
				setTransition: function(e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function() {
					this.scrollbar.destroy()
				}
			}
		},
		q = {
			setTransform: function(e, t) {
				var i = this.rtl,
					s = a(e),
					r = i ? -1 : 1,
					n = s.attr("data-swiper-parallax") || "0",
					o = s.attr("data-swiper-parallax-x"),
					l = s.attr("data-swiper-parallax-y"),
					d = s.attr("data-swiper-parallax-scale"),
					p = s.attr("data-swiper-parallax-opacity");
				if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf(
						"%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t +
					"%" : l * t + "px", void 0 !== p && null !== p) {
					var c = p - (p - 1) * (1 - Math.abs(t));
					s[0].style.opacity = c
				}
				if (void 0 === d || null === d) s.transform("translate3d(" + o + ", " + l + ", 0px)");
				else {
					var u = d - (d - 1) * (1 - Math.abs(t));
					s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
				}
			},
			setTranslate: function() {
				var e = this,
					t = e.$el,
					i = e.slides,
					s = e.progress,
					r = e.snapGrid;
				t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, a) {
					e.parallax.setTransform(a, s)
				}), i.each(function(t, i) {
					var n = i.progress;
					e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - s * (r.length - 1)),
						n = Math.min(Math.max(n, -1), 1), a(i).find(
							"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, a) {
							e.parallax.setTransform(a, n)
						})
				})
			},
			setTransition: function(e) {
				void 0 === e && (e = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
					var s = a(i),
						r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
					0 === e && (r = 0), s.transition(r)
				})
			}
		},
		K = {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function() {
				n.extend(this, {
					parallax: {
						setTransform: q.setTransform.bind(this),
						setTranslate: q.setTranslate.bind(this),
						setTransition: q.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.watchSlidesProgress = !0
				},
				init: function() {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTranslate: function() {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTransition: function(e) {
					this.params.parallax && this.parallax.setTransition(e)
				}
			}
		},
		U = {
			getDistanceBetweenTouches: function(e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					a = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					s = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
			},
			onGestureStart: function(e) {
				var t = this,
					i = t.params.zoom,
					s = t.zoom,
					r = s.gesture;
				if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !l.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					s.fakeGestureTouched = !0, r.scaleStart = U.getDistanceBetweenTouches(e)
				}
				r.$slideEl && r.$slideEl.length || (r.$slideEl = a(this), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
					r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r
					.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(
					0), t.zoom.isScaling = !0) : r.$imageEl = void 0
			},
			onGestureChange: function(e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!l.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					a.fakeGestureMoved = !0, i.scaleMove = U.getDistanceBetweenTouches(e)
				}
				i.$imageEl && 0 !== i.$imageEl.length && (l.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove /
					i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio +
						1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl
					.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
			},
			onGestureEnd: function(e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!l.gestures) {
					if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
					a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
				}
				i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl
					.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale,
					a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
			},
			onTouchStart: function(e) {
				var t = this.zoom,
					a = t.gesture,
					i = t.image;
				a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (w.android && e.preventDefault(), i.isTouched = !0, i.touchesStart
					.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ?
					e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function(e) {
				var t = this,
					a = t.zoom,
					i = a.gesture,
					s = a.image,
					r = a.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(
						i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[
						0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -
						s.startX), t.rtl && (s.startY = -s.startY));
					var o = s.width * a.scale,
						l = s.height * a.scale;
					if (!(o < i.slideWidth && l < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - o / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l /
								2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent
							.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
							if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x ||
									Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !
								1);
							if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y ||
									Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !
								1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s
							.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s
								.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(
								s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY +
								1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX ||
							(r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime ||
							(r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y =
							(s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) <
							2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent
							.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s
								.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function() {
				var e = this.zoom,
					t = e.gesture,
					a = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
					a.isTouched = !1, a.isMoved = !1;
					var s = 300,
						r = 300,
						n = i.x * s,
						o = a.currentX + n,
						l = i.y * r,
						d = a.currentY + l;
					0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
					var p = Math.max(s, r);
					a.currentX = o, a.currentY = d;
					var c = a.width * e.scale,
						u = a.height * e.scale;
					a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
						a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a
							.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY +
							"px,0)")
				}
			},
			onTransitionEnd: function() {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl
					.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale =
					1, e.currentScale = 1)
			},
			toggle: function(e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function(e) {
				var t, i, s, r, n, o, l, d, p, c, u, h, f, v, m, g, b = this,
					w = b.zoom,
					y = b.params.zoom,
					x = w.gesture,
					T = w.image;
				(x.$slideEl || (x.$slideEl = b.clickedSlide ? a(b.clickedSlide) : b.slides.eq(b.activeIndex), x.$imageEl = x.$slideEl
						.find("img, svg, canvas"), x.$imageWrapEl = x.$imageEl.parent("." + y.containerClass)), x.$imageEl && 0 !== x.$imageEl
					.length) && (x.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === T.touchesStart.x && e ? (t = "touchend" ===
						e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) :
					(t = T.touchesStart.x, i = T.touchesStart.y), w.scale = x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, w
					.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = x.$slideEl[0].offsetWidth, g = x
						.$slideEl[0].offsetHeight, s = x.$slideEl.offset().left + m / 2 - t, r = x.$slideEl.offset().top + g / 2 - i, l =
						x.$imageEl[0].offsetWidth, d = x.$imageEl[0].offsetHeight, p = l * w.scale, c = d * w.scale, f = -(u = Math.min(
							m / 2 - p / 2, 0)), v = -(h = Math.min(g / 2 - c / 2, 0)), n = s * w.scale, o = r * w.scale, n < u && (n = u),
						n > f && (n = f), o < h && (o = h), o > v && (o = v)) : (n = 0, o = 0), x.$imageWrapEl.transition(300).transform(
						"translate3d(" + n + "px, " + o + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" +
						w.scale + ")"))
			},
			out: function() {
				var e = this,
					t = e.zoom,
					i = e.params.zoom,
					s = t.gesture;
				s.$slideEl || (s.$slideEl = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), s.$imageEl = s.$slideEl
						.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl
					.length && (t.scale = 1, t.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl
						.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl =
						void 0)
			},
			enable: function() {
				var e = this,
					t = e.zoom;
				if (!t.enabled) {
					t.enabled = !0;
					var i = e.slides,
						s = !("touchstart" !== e.touchEvents.start || !l.passiveListener || !e.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					l.gestures ? (i.on("gesturestart", t.onGestureStart, s), i.on("gesturechange", t.onGestureChange, s), i.on(
						"gestureend", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (i.on(e.touchEvents.start, t.onGestureStart,
						s), i.on(e.touchEvents.move, t.onGestureChange, s), i.on(e.touchEvents.end, t.onGestureEnd, s)), e.slides.each(
						function(i, s) {
							var r = a(s);
							r.find("." + e.params.zoom.containerClass).length > 0 && r.on(e.touchEvents.move, t.onTouchMove)
						})
				}
			},
			disable: function() {
				var e = this,
					t = e.zoom;
				if (t.enabled) {
					e.zoom.enabled = !1;
					var i = e.slides,
						s = !("touchstart" !== e.touchEvents.start || !l.passiveListener || !e.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					l.gestures ? (i.off("gesturestart", t.onGestureStart, s), i.off("gesturechange", t.onGestureChange, s), i.off(
						"gestureend", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (i.off(e.touchEvents.start, t.onGestureStart,
						s), i.off(e.touchEvents.move, t.onGestureChange, s), i.off(e.touchEvents.end, t.onGestureEnd, s)), e.slides.each(
						function(i, s) {
							var r = a(s);
							r.find("." + e.params.zoom.containerClass).length > 0 && r.off(e.touchEvents.move, t.onTouchMove)
						})
				}
			}
		},
		_ = {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function() {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
				.split(" ").forEach(function(a) {
					t[a] = U[a].bind(e)
				}), n.extend(e, {
					zoom: t
				})
			},
			on: {
				init: function() {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function() {
					this.zoom.disable()
				},
				touchStart: function(e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function(e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function(e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function() {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				}
			}
		},
		Z = {
			loadInSlide: function(e, t) {
				void 0 === t && (t = !0);
				var i = this,
					s = i.params.lazy;
				if (void 0 !== e && 0 !== i.slides.length) {
					var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass +
							'[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
						n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
					!r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])), 0 !==
						n.length && n.each(function(e, n) {
							var o = a(n);
							o.addClass(s.loadingClass);
							var l = o.attr("data-background"),
								d = o.attr("data-src"),
								p = o.attr("data-srcset"),
								c = o.attr("data-sizes");
							i.loadImage(o[0], d || l, p, c, !1, function() {
								if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
									if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr(
												"srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d &&
											(o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r
										.find("." + s.preloaderClass).remove(), i.params.loop && t) {
										var e = r.attr("data-swiper-slide-index");
										if (r.hasClass(i.params.slideDuplicateClass)) {
											var a = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass +
												")");
											i.lazy.loadInSlide(a.index(), !1)
										} else {
											var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e +
												'"]');
											i.lazy.loadInSlide(n.index(), !1)
										}
									}
									i.emit("lazyImageReady", r[0], o[0])
								}
							}), i.emit("lazyImageLoad", r[0], o[0])
						})
				}
			},
			load: function() {
				var e = this,
					t = e.$wrapperEl,
					i = e.params,
					s = e.slides,
					r = e.activeIndex,
					n = e.virtual && i.virtual.enabled,
					o = i.lazy,
					l = i.slidesPerView;

				function d(e) {
					if (n) {
						if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (s[e]) return !0;
					return !1
				}

				function p(e) {
					return n ? a(e).attr("data-swiper-slide-index") : a(e).index()
				}
				if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility)
					t.children("." + i.slideVisibleClass).each(function(t, i) {
						var s = n ? a(i).attr("data-swiper-slide-index") : a(i).index();
						e.lazy.loadInSlide(s)
					});
				else if (l > 1)
					for (var c = r; c < r + l; c += 1) d(c) && e.lazy.loadInSlide(c);
				else e.lazy.loadInSlide(r);
				if (o.loadPrevNext)
					if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
						for (var u = o.loadPrevNextAmount, h = l, f = Math.min(r + h + Math.max(u, h), s.length), v = Math.max(r - Math
								.max(h, u), 0), m = r + l; m < f; m += 1) d(m) && e.lazy.loadInSlide(m);
						for (var g = v; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
					} else {
						var b = t.children("." + i.slideNextClass);
						b.length > 0 && e.lazy.loadInSlide(p(b));
						var w = t.children("." + i.slidePrevClass);
						w.length > 0 && e.lazy.loadInSlide(p(w))
					}
			}
		},
		Q = {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function() {
				n.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: Z.load.bind(this),
						loadInSlide: Z.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function() {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function() {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function() {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function() {
					var e = this;
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy
						.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function() {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				}
			}
		},
		J = {
			LinearSpline: function(e, t) {
				var a, i, s, r, n, o = function(e, t) {
					for (i = -1, a = e.length; a - i > 1;) e[s = a + i >> 1] <= t ? i = s : a = s;
					return a
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
					return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) +
						this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function(e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new J.LinearSpline(t.slidesGrid, e.slidesGrid) :
					new J.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function(e, t) {
				var a, i, s = this,
					r = s.controller.control;

				function n(e) {
					var t = e.rtl && "horizontal" === e.params.direction ? -s.translate : s.translate;
					"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(
						-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() -
						s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() -
						i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof P && n(r[o]);
				else r instanceof P && t !== r && n(r)
			},
			setTransition: function(e, t) {
				var a, i = this,
					s = i.controller.control;

				function r(t) {
					t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
						s && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
					}))
				}
				if (Array.isArray(s))
					for (a = 0; a < s.length; a += 1) s[a] !== t && s[a] instanceof P && r(s[a]);
				else s instanceof P && t !== s && r(s)
			}
		},
		ee = {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					controller: {
						control: e.params.controller.control,
						getInterpolateFunction: J.getInterpolateFunction.bind(e),
						setTranslate: J.setTranslate.bind(e),
						setTransition: J.setTransition.bind(e)
					}
				})
			},
			on: {
				update: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function() {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function(e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function(e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		},
		te = {
			makeElFocusable: function(e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function(e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function(e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function(e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function(e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function(e) {
				var t = this,
					i = t.params.a11y;
				if (13 === e.keyCode) {
					var s = a(e.target);
					t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
							t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation
						.$prevEl && s.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y
							.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && s.is("." + t.params.pagination
							.bulletClass) && s[0].click()
				}
			},
			notify: function(e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function() {
				var e = this;
				if (!e.params.loop) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ?
						e.a11y.disableEl(a) : e.a11y.enableEl(a))
				}
			},
			updatePagination: function() {
				var e = this,
					t = e.params.a11y;
				e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination
					.bullets.each(function(i, s) {
						var r = a(s);
						e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(
							/{{index}}/, r.index() + 1))
					})
			},
			init: function() {
				var e = this;
				e.$el.append(e.a11y.liveRegion);
				var t, a, i = e.params.a11y;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a =
						e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage),
						t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(
						a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e
					.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass,
						e.a11y.onEnterKey)
			},
			destroy: function() {
				var e, t, a = this;
				a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl &&
					(e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off(
						"keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable &&
					a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination
						.bulletClass, a.a11y.onEnterKey)
			}
		},
		ae = {
			name: "a11y",
			params: {
				a11y: {
					enabled: !1,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					a11y: {
						liveRegion: a('<span class="' + e.params.a11y.notificationClass +
							'" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(te).forEach(function(t) {
					e.a11y[t] = te[t].bind(e)
				})
			},
			on: {
				init: function() {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function() {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function() {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function() {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		},
		ie = {
			init: function() {
				var t = this;
				if (t.params.history) {
					if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !
						0);
					var a = t.history;
					a.initialized = !0, a.paths = ie.getPathValues(), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value,
						t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", t.history.setHistoryPopState))
				}
			},
			destroy: function() {
				this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function() {
				this.history.paths = ie.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value,
					!1)
			},
			getPathValues: function() {
				var t = e.location.pathname.slice(1).split("/").filter(function(e) {
						return "" !== e
					}),
					a = t.length;
				return {
					key: t[a - 2],
					value: t[a - 1]
				}
			},
			setHistory: function(t, a) {
				if (this.history.initialized && this.params.history.enabled) {
					var i = this.slides.eq(a),
						s = ie.slugify(i.attr("data-history"));
					e.location.pathname.includes(t) || (s = t + "/" + s);
					var r = e.history.state;
					r && r.value === s || (this.params.history.replaceState ? e.history.replaceState({
						value: s
					}, null, s) : e.history.pushState({
						value: s
					}, null, s))
				}
			},
			slugify: function(e) {
				return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/,
					"").replace(/-+$/, "")
			},
			scrollToSlide: function(e, t, a) {
				var i = this;
				if (t)
					for (var s = 0, r = i.slides.length; s < r; s += 1) {
						var n = i.slides.eq(s);
						if (ie.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
							var o = n.index();
							i.slideTo(o, e, a)
						}
					} else i.slideTo(0, e, a)
			}
		},
		se = {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					history: {
						init: ie.init.bind(e),
						setHistory: ie.setHistory.bind(e),
						setHistoryPopState: ie.setHistoryPopState.bind(e),
						scrollToSlide: ie.scrollToSlide.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.history.enabled && this.history.init()
				},
				destroy: function() {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function() {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		},
		re = {
			onHashCange: function() {
				var e = this,
					t = o.location.hash.replace("#", "");
				t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass +
					'[data-hash="' + t + '"]').index())
			},
			setHash: function() {
				var t = this;
				if (t.hashNavigation.initialized && t.params.hashNavigation.enabled)
					if (t.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null,
						null, "#" + t.slides.eq(t.activeIndex).attr("data-hash") || "");
					else {
						var a = t.slides.eq(t.activeIndex),
							i = a.attr("data-hash") || a.attr("data-history");
						o.location.hash = i || ""
					}
			},
			init: function() {
				var t = this;
				if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
					t.hashNavigation.initialized = !0;
					var i = o.location.hash.replace("#", "");
					if (i)
						for (var s = 0, r = t.slides.length; s < r; s += 1) {
							var n = t.slides.eq(s);
							if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(t.params.slideDuplicateClass)) {
								var l = n.index();
								t.slideTo(l, 0, t.params.runCallbacksOnInit, !0)
							}
						}
					t.params.hashNavigation.watchState && a(e).on("hashchange", t.hashNavigation.onHashCange)
				}
			},
			destroy: function() {
				this.params.hashNavigation.watchState && a(e).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		ne = {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					hashNavigation: {
						initialized: !1,
						init: re.init.bind(e),
						destroy: re.destroy.bind(e),
						setHash: re.setHash.bind(e),
						onHashCange: re.onHashCange.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function() {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function() {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				}
			}
		},
		oe = {
			run: function() {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					a = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout =
					n.nextTick(function() {
						e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay
							.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(
								e.params.speed, !0, !0), e.emit("autoplay"))
					}, a)
			},
			start: function() {
				var e = this;
				return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"),
					e.autoplay.run(), !0))
			},
			stop: function() {
				var e = this;
				return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
					e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
			},
			pause: function(e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !
					0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
						t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
					})))
			}
		},
		le = {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					disableOnInteraction: !0,
					stopOnLastSlide: !1
				}
			},
			create: function() {
				var e = this;
				n.extend(e, {
					autoplay: {
						running: !1,
						paused: !1,
						run: oe.run.bind(e),
						start: oe.start.bind(e),
						stop: oe.stop.bind(e),
						pause: oe.pause.bind(e)
					}
				})
			},
			on: {
				init: function() {
					this.params.autoplay.enabled && this.autoplay.start()
				},
				beforeTransitionStart: function(e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay
						.stop())
				},
				sliderFirstMove: function() {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				destroy: function() {
					this.autoplay.running && this.autoplay.stop()
				}
			}
		},
		de = {
			setTranslate: function() {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
					var i = e.slides.eq(a),
						s = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (s -= e.translate);
					var r = 0;
					e.isHorizontal() || (r = s, s = 0);
					var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress,
						-1), 0);
					i.css({
						opacity: n
					}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
				}
			},
			setTransition: function(e) {
				var t = this,
					a = t.slides,
					i = t.$wrapperEl;
				if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
					var s = !1;
					a.transitionEnd(function() {
						if (!s && t && !t.destroyed) {
							s = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
						}
					})
				}
			}
		},
		pe = {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function() {
				n.extend(this, {
					fadeEffect: {
						setTranslate: de.setTranslate.bind(this),
						setTransition: de.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						n.extend(e.params, t), n.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function(e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		},
		ce = {
			setTranslate: function() {
				var e, t = this,
					i = t.$el,
					s = t.$wrapperEl,
					r = t.slides,
					n = t.width,
					o = t.height,
					l = t.rtl,
					d = t.size,
					p = t.params.cubeEffect,
					c = t.isHorizontal(),
					u = t.virtual && t.params.virtual.enabled,
					h = 0;
				p.shadow && (c ? (0 === (e = s.find(".swiper-cube-shadow")).length && (e = a(
					'<div class="swiper-cube-shadow"></div>'), s.append(e)), e.css({
					height: n + "px"
				})) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = a('<div class="swiper-cube-shadow"></div>'), i.append(
					e)));
				for (var v = 0; v < r.length; v += 1) {
					var m = r.eq(v),
						g = v;
					u && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
					var b = 90 * g,
						w = Math.floor(b / 360);
					l && (b = -b, w = Math.floor(-b / 360));
					var y = Math.max(Math.min(m[0].progress, 1), -1),
						x = 0,
						T = 0,
						E = 0;
					g % 4 == 0 ? (x = 4 * -w * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d +
						4 * w * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * w), l && (x = -x), c || (T = x, x = 0);
					var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T +
						"px, " + E + "px)";
					if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), m.transform(S), p.slideShadows) {
						var C = c ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
							M = c ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
						0 === C.length && (C = a('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), m.append(C)),
							0 === M.length && (M = a('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), m.append(
								M)), C.length && (C[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0))
					}
				}
				if (s.css({
						"-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + d / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + d / 2 + "px",
						"transform-origin": "50% 50% -" + d / 2 + "px"
					}), p.shadow)
					if (c) e.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 +
						"px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
					else {
						var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
							k = p.shadowScale,
							$ = p.shadowScale / P,
							I = p.shadowOffset;
						e.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ +
							"px) rotateX(-90deg)")
					} var L = f.isSafari || f.isUiWebView ? -d / 2 : 0;
				s.transform("translate3d(0px,0," + L + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ?
					-h : 0) + "deg)")
			},
			setTransition: function(e) {
				var t = this.$el;
				this.slides.transition(e).find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
					.transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(
						e)
			}
		},
		ue = {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function() {
				n.extend(this, {
					cubeEffect: {
						setTranslate: ce.setTranslate.bind(this),
						setTransition: ce.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass +
							"3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						n.extend(e.params, t), n.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function(e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		},
		he = {
			setTranslate: function() {
				for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
					var s = t.eq(i),
						r = s[0].progress;
					e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
					var n = -180 * r,
						o = 0,
						l = -s[0].swiperSlideOffset,
						d = 0;
					if (e.isHorizontal() ? e.rtl && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(
							r)) + t.length, e.params.flipEffect.slideShadows) {
						var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === p.length && (p = a('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
							s.append(p)), 0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" :
							"bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style
							.opacity = Math.max(r, 0))
					}
					s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function(e) {
				var t = this,
					a = t.slides,
					i = t.activeIndex,
					s = t.$wrapperEl;
				if (a.transition(e).find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
					.transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					a.eq(i).transitionEnd(function() {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
						}
					})
				}
			}
		},
		fe = {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function() {
				n.extend(this, {
					flipEffect: {
						setTranslate: he.setTranslate.bind(this),
						setTransition: he.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass +
							"3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						n.extend(e.params, t), n.extend(e.originalParams, t)
					}
				},
				setTranslate: function() {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function(e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		},
		ve = {
			setTranslate: function() {
				for (var e = this, t = e.width, i = e.height, s = e.slides, r = e.$wrapperEl, n = e.slidesSizesGrid, o = e.params
						.coverflowEffect, l = e.isHorizontal(), d = e.translate, p = l ? t / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate,
						u = o.depth, h = 0, v = s.length; h < v; h += 1) {
					var m = s.eq(h),
						g = n[h],
						b = (p - m[0].swiperSlideOffset - g / 2) / g * o.modifier,
						w = l ? c * b : 0,
						y = l ? 0 : c * b,
						x = -u * Math.abs(b),
						T = l ? 0 : o.stretch * b,
						E = l ? o.stretch * b : 0;
					Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 &&
						(w = 0), Math.abs(y) < .001 && (y = 0);
					var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
					if (m.transform(S), m[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
						var C = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
							M = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
						0 === C.length && (C = a('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(C)),
							0 === M.length && (M = a('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(
								M)), C.length && (C[0].style.opacity = b > 0 ? b : 0), M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
					}
				}
				f.ie && (r[0].style.perspectiveOrigin = p + "px 50%")
			},
			setTransition: function(e) {
				this.slides.transition(e).find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
					.transition(e)
			}
		},
		me = {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function() {
				n.extend(this, {
					coverflowEffect: {
						setTranslate: ve.setTranslate.bind(this),
						setTransition: ve.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function() {
					var e = this;
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames
						.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !
						0)
				},
				setTranslate: function() {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function(e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		};
	return P.components = [k, $, I, L, O, H, N, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, fe, me], P
});
