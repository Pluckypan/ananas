! function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(
		require("jquery")) : e(jQuery)
}(function(e) {
	function t() {
		var t, n, i = {
			height: d.innerHeight,
			width: d.innerWidth
		};
		return i.height || !(t = a.compatMode) && e.support.boxModel || (i = {
			height: (n = "CSS1Compat" === t ? h : a.body).clientHeight,
			width: n.clientWidth
		}), i
	}

	function n() {
		return {
			top: d.pageYOffset || h.scrollTop || a.body.scrollTop,
			left: d.pageXOffset || h.scrollLeft || a.body.scrollLeft
		}
	}

	function i() {
		if (f.length) {
			var i = 0,
				l = e.map(f, function(e) {
					var t = e.data.selector,
						n = e.$element;
					return t ? n.find(t) : n
				});
			for (o = o || t(), r = r || n(); i < f.length; i++)
				if (e.contains(h, l[i][0])) {
					var a = e(l[i]),
						d = {
							height: a[0].offsetHeight,
							width: a[0].offsetWidth
						},
						c = a.offset(),
						u = a.data("inview");
					if (!r || !o) return;
					c.top + d.height > r.top && c.top < r.top + o.height && c.left + d.width > r.left && c.left < r.left + o.width ?
						u || a.data("inview", !0).trigger("inview", [!0]) : u && a.data("inview", !1).trigger("inview", [!1])
				}
		}
	}
	var o, r, l, f = [],
		a = document,
		d = window,
		h = a.documentElement;
	e.event.special.inview = {
		add: function(t) {
			f.push({
				data: t,
				$element: e(this),
				element: this
			}), !l && f.length && (l = setInterval(i, 250))
		},
		remove: function(e) {
			for (var t = 0; t < f.length; t++) {
				var n = f[t];
				if (n.element === this && n.data.guid === e.guid) {
					f.splice(t, 1);
					break
				}
			}
			f.length || (clearInterval(l), l = null)
		}
	}, e(d).on("scroll resize scrollstop", function() {
		o = r = null
	}), !h.addEventListener && h.attachEvent && h.attachEvent("onfocusin", function() {
		r = null
	})
});
! function(t, e) {
	"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Mlazy =
		e()
}(this, function() {
	"use strict";

	function t(t) {
		var o = t._util;
		o.elements = v(t.options), o.count = o.elements.length, o.destroyed && (o.destroyed = !1, t.options.container && w(t
				.options.container,
				function(t) {
					h(t, "scroll", o.validateT)
				}), h(window, "resize", o.saveViewportOffsetT), h(window, "resize", o.validateT), h(window, "scroll", o.validateT)),
			e(t)
	}

	function e(t) {
		for (var e = t._util, n = 0; n < e.count; n++) {
			var s = e.elements[n];
			(o(s, t.options) || p(s, t.options.successClass)) && (t.load(s), e.elements.splice(n, 1), e.count--, n--)
		}
		0 === e.count && t.destroy()
	}

	function o(t, e) {
		var o = t.getBoundingClientRect();
		if (e.container && T) {
			var s = t.closest(e.containerClass);
			if (s) {
				var i = s.getBoundingClientRect();
				if (n(i, C)) {
					var r = i.top - e.offset,
						c = i.right + e.offset,
						a = i.bottom + e.offset,
						l = i.left - e.offset;
					return n(o, {
						top: r > C.top ? r : C.top,
						right: c < C.right ? c : C.right,
						bottom: a < C.bottom ? a : C.bottom,
						left: l > C.left ? l : C.left
					})
				}
				return !1
			}
		}
		return n(o, C)
	}

	function n(t, e) {
		return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom
	}

	function s(t, e, o) {
		if (!p(t, o.successClass) && (e || o.loadInvisible || t.offsetWidth > 0 && t.offsetHeight > 0)) {
			var n = l(t, b) || l(t, o.src);
			if (n) {
				var s = n.split(o.separator),
					a = s[E && s.length > 1 ? 1 : 0],
					f = l(t, o.srcset),
					v = u(t, "img"),
					m = t.parentNode,
					y = m && u(m, "picture");
				if (v || void 0 === t.src) {
					var C = new Image,
						T = function() {
							o.error && o.error(t, "invalid"), d(t, o.errorClass), g(C, "error", T), g(C, "load", D)
						},
						D = function() {
							v ? y || c(t, a, f) : t.style.backgroundImage = 'url("' + a + '")', i(t, o), g(C, "load", D), g(C, "error", T)
						};
					y && (C = t, w(m.getElementsByTagName("source"), function(t) {
						r(t, A, o.srcset)
					})), h(C, "error", T), h(C, "load", D), c(C, a, f)
				} else t.src = a, i(t, o)
			} else u(t, "video") ? (w(t.getElementsByTagName("source"), function(t) {
				r(t, k, o.src)
			}), t.load(), i(t, o)) : (o.error && o.error(t, "missing"), d(t, o.errorClass))
		}
	}

	function i(t, e) {
		d(t, e.successClass), e.success && e.success(t), f(t, e.src), f(t, e.srcset), w(e.breakpoints, function(e) {
			f(t, e.src)
		})
	}

	function r(t, e, o) {
		var n = l(t, o);
		n && (a(t, e, n), f(t, o))
	}

	function c(t, e, o) {
		o && a(t, A, o), t.src = e
	}

	function a(t, e, o) {
		t.setAttribute(e, o)
	}

	function l(t, e) {
		return t.getAttribute(e)
	}

	function f(t, e) {
		t.removeAttribute(e)
	}

	function u(t, e) {
		return t.nodeName.toLowerCase() === e
	}

	function p(t, e) {
		return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
	}

	function d(t, e) {
		p(t, e) || (t.className += " " + e)
	}

	function v(t) {
		for (var e = [], o = t.root.querySelectorAll(t.selector), n = o.length; n--; e.unshift(o[n]));
		return e
	}

	function m(t) {
		C.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, C.right = (window.innerWidth ||
			document.documentElement.clientWidth) + t
	}

	function h(t, e, o) {
		t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, o) : t.addEventListener(e, o, {
			capture: !1,
			passive: !0
		})
	}

	function g(t, e, o) {
		t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, o) : t.removeEventListener(e, o, {
			capture: !1,
			passive: !0
		})
	}

	function w(t, e) {
		if (t && e)
			for (var o = t.length, n = 0; n < o && !1 !== e(t[n], n); n++);
	}

	function y(t, e, o) {
		var n = 0;
		return function() {
			var s = +new Date;
			s - n < e || (n = s, t.apply(o, arguments))
		}
	}
	var b, C, E, T, k = "src",
		A = "srcset";
	return function(o) {
		if (!document.querySelectorAll) {
			var n = document.createStyleSheet();
			document.querySelectorAll = function(t, e, o, s, i) {
				for (i = document.all, e = [], o = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; o--;) {
					for (n.addRule(t[o], "k:v"), s = i.length; s--;) i[s].currentStyle.k && e.push(i[s]);
					n.removeRule(0)
				}
				return e
			}
		}
		var i = this,
			r = i._util = {};
		r.elements = [], r.destroyed = !0, i.options = o || {}, i.options.error = i.options.error || !1, i.options.offset =
			i.options.offset || 100, i.options.root = i.options.root || document, i.options.success = i.options.success || !1,
			i.options.selector = i.options.selector || ".mlazy", i.options.separator = i.options.separator || "|", i.options.containerClass =
			i.options.container, i.options.container = !!i.options.containerClass && document.querySelectorAll(i.options.containerClass),
			i.options.errorClass = i.options.errorClass || "merror", i.options.breakpoints = i.options.breakpoints || !1, i.options
			.loadInvisible = i.options.loadInvisible || !1, i.options.successClass = i.options.successClass || "mloaded", i.options
			.validateDelay = i.options.validateDelay || 25, i.options.saveViewportOffsetDelay = i.options.saveViewportOffsetDelay ||
			50, i.options.srcset = i.options.srcset || "data-srcset", i.options.src = b = i.options.src || "data-src", T =
			Element.prototype.closest, E = window.devicePixelRatio > 1, (C = {}).top = 0 - i.options.offset, C.left = 0 - i.options
			.offset, i.revalidate = function() {
				t(i)
			}, i.load = function(t, e) {
				var o = this.options;
				t && void 0 === t.length ? s(t, e, o) : w(t, function(t) {
					s(t, e, o)
				})
			}, i.destroy = function() {
				var t = i._util;
				i.options.container && w(i.options.container, function(e) {
						g(e, "scroll", t.validateT)
					}), g(window, "scroll", t.validateT), g(window, "resize", t.validateT), g(window, "resize", t.saveViewportOffsetT),
					t.count = 0, t.elements.length = 0, t.destroyed = !0
			}, r.validateT = y(function() {
				e(i)
			}, i.options.validateDelay, i), r.saveViewportOffsetT = y(function() {
				m(i.options.offset)
			}, i.options.saveViewportOffsetDelay, i), m(i.options.offset), w(i.options.breakpoints, function(t) {
				if (t.width >= window.screen.width) return b = t.src, !1
			}), setTimeout(function() {
				t(i)
			})
	}
});
var mLazy;
$(document).ready(function() {
	function e() {
		a || (a = window.setInterval(function() {
			if (s.length) {
				var t = $(s.shift()),
					i = JSON.parse(t.attr("data-animation").replace(/'/g, '"').replace(/\s/g, "")),
					o = i.oDuration + "s",
					c = i.tDuration + "s",
					n = i.distance,
					r = i.delay + "s",
					d = "x" === i.dir ? n + "px, 0" : "0, " + n + "px";
				t.css({
					transform: "translate(" + d + ")"
				}), setTimeout(function() {
					t.css({
						opacity: "1",
						transform: "none",
						transition: "transform " + c + " cubic-bezier(0.165, 0.84, 0.44, 1) " + r + ", opacity " + o +
							" cubic-bezier(0.42, 0, 0.58, 1) " + r
					})
				}, 20), e()
			} else window.clearInterval(a), a = null
		}, i))
	}

	function t(e) {
		$("html").addClass("no-scroll"), $("." + e).show()
	}
	var a, s = [],
		i = 100;
	$("[data-animation]").one("inview", function() {
		s.push($(this)), e()
	}), $("body").on("click", "[bl-modal]", function() {
		t($(this).attr("bl-modal"))
	}), $("body").on("click", ".close-box", function() {
		$("html").removeClass("no-scroll"), $(this).parent().parent(".mask-container").hide()
	}), $(window).keydown(function(e) {
		27 === e.keyCode && ($("html").removeClass("no-scroll"), $(".mask-container").hide())
	});
	var o = new Mlazy({
		selector: "img,.mlazy"
	});
	if (mLazy = o, $(".counter").each(function() {
			var e = $(this),
				t = e.attr("data-count");
			$({
				countNum: e.text()
			}).animate({
				countNum: t
			}, {
				duration: 1e3,
				easing: "swing",
				step: function() {
					e.text(Math.floor(this.countNum))
				},
				complete: function() {
					e.text(parseInt(this.countNum).toLocaleString())
				}
			})
		}), $("body").on("click", ".btn-check", function() {
			$("html,body").animate({
				scrollTop: $(".app-history").offset().top
			}, 1e3)
		}), $(document).click(function(e) {
			(e = $(e.target)).is(".more") || e.is(".point") ? $(".more .more-list").show() : $(".more .more-list").hide()
		}), $(".top50-cate").click(function() {
			$(".top50-cate-drop").show()
		}), $(document).click(function(e) {
			$(e.target).closest(".top50-cate").length > 0 ? $(".top50-cate-drop").fadeIn("fast") : $(".top50-cate-drop").fadeOut(
				"fast")
		}), $(document).keydown(function(e) {
			(e = event || window.event || arguments.callee.caller.arguments[0]) && 27 == e.keyCode && ($("html").removeClass(
				"quick-search-touch").removeClass("quick-search-opened").addClass("quick-search-hide"), setTimeout(function() {
				$("html").removeClass("quick-search-hide")
			}, 200), $(".gb-search input").val(""))
		}), $(".quick-search").click(function() {
			$("html").addClass("quick-search-touch"), $(".gb-search input").focus(), setTimeout(function() {
				$("html").addClass("quick-search-opened")
			}, 1e3)
		}), $(".search-close").click(function(e) {
			$("html").removeClass("quick-search-touch").removeClass("quick-search-opened").addClass("quick-search-hide"),
				setTimeout(function() {
					$("html").removeClass("quick-search-hide")
				}, 200), $(".gb-search input").val("")
		}), $("header, header .inner, .search-mask").click(function(e) {
			e.target == e.currentTarget & $("html").hasClass("quick-search-touch") && ($("html").removeClass(
				"quick-search-touch").removeClass("quick-search-opened").addClass("quick-search-hide"), setTimeout(function() {
				$("html").removeClass("quick-search-hide")
			}, 200), $(".gb-search input").val(""))
		}), $(".history-table tr").length > 4) {

	}
	$(".video-data .desc").outerHeight() > 65 && $(".video-data").addClass("video-data-hide"), $(
		".video-data .btn-desc-open").click(function() {
		$(".video-data .desc").css({
			height: "auto"
		}), $(".desc-mask").addClass("mask-hide"), $(".video-data .btn-desc-open").hide(), $(
			".video-data .btn-desc-close").css({
			display: "inline-block"
		})
	}), $(".video-data .btn-desc-close").click(function() {
		$(".video-data .desc").css({
			height: "65px"
		}), $(".desc-mask").removeClass("mask-hide"), $(".video-data .btn-desc-open").css({
			display: "inline-block"
		}), $(".video-data .btn-desc-close").hide()
	}), $("[data-type=admodel]").click(function() {
		var e = $(this).attr("data-resource");
		void 0 != e && "" != e && $.ajax({
			url: "/ad-visit",
			type: "post",
			data: {
				ad_id: e,
				page_url: window.location.href
			},
			datatype: "json",
			success: function(e) {}
		})
	})
});
