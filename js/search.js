var search_result = [],
	search_word = "";

var search_default =
	"<ul><li class=\"gray\">热门推荐</li><li><a href=\"/app/adobe-zii\">Adobe Zii</a></li><li><a href=\"/app/adobe-photoshop\">Adobe Photoshop</a></li><li><a href=\"/app/downie\">Downie</a></li><li><a href=\"/app/the-unarchiver\">The Unarchiver</a></li><li><a href=\"/app/dr.-unarchiver\">Dr. Unarchiver</a></li></ul>";

function searchInit() {
	$("input[name='search']").keydown(function(even) {
		if (even.keyCode == 13) {
			search();
		}
	});
	$(".search-btn, .icon-search").click(function() {
		search();
	});
	$('input[name="search"]').keydown(function(event) {
		var result_length = $("#search-menu .search-item").length;
		if (event.keyCode == 38) {
			var th = $("#search-menu .act");
			if ($("#search-menu .act").length == 0) {
				$("#search-menu li a").eq($("#search-menu li a").length - 1).addClass("act");
			} else {
				$(th).removeClass("act");
				var index = $("#search-menu li a").index($(th));
				if (index == 0) {
					$("#search-menu li a").eq(result_length - 1).addClass("act");
				} else {
					$("#search-menu li a").eq(index - 1).addClass("act");
				}
			}
			$('input[name="search"]').val($("#search-menu .act").html());
		} else if (event.keyCode == 40) {
			var th = $("#search-menu .act");
			if ($("#search-menu .act").length == 0) {
				$("#search-menu li a").eq(0).addClass("act");
			} else {
				$(th).removeClass("act");
				var index = $("#search-menu li a").index($(th));
				console.log(index);
				if (index == result_length - 1) {
					$("#search-menu li a").eq(0).addClass("act");
				} else {
					$("#search-menu li a").eq(index + 1).addClass("act");
				}
			}
			$('input[name="search"]').val($("#search-menu .act").html());
		}
	});
}

function search() {
	var search = $("input[name='search']").val().trim();
	if (search == '' || search == undefined) {
		return;
	}
	var relative_path = $("meta[name=relativePath]").attr("content");
	window.location.href = relative_path + 'search.html?wd=' + search;
}

function associate_search(a, s) {
	null != search_result[search_word = a] ? search_append(search_result[a], s) : $.ajax({
		url: "https://search.macbl.com/api/words",
		type: "post",
		data: {
			words: a
		},
		datatype: "json",
		crossDomain: !0,
		success: function(e) {
			search_result[a] = e, search_word == a && (0 < e.app.length || 0 < e.article.length ? search_append(e, s) :
				search_menu_hide(s))
		},
		error: function() {
			search_menu_hide(s)
		}
	})
}

function search_append(e, a) {
	var s = $('input[name="search"]').attr("data-type");
	if (null != s && "" != s || (s = "app"), 0 != e.app.length || 0 != e.article.length) {
		var n = "";
		if (0 != e.app.length && "app" == s) {
			n = n + "<ul><li class='gray'>软件</li>";
			for (var l = 0; l < e.app.length; l++) n += '<li><a class="search-item" href="' + e.app[l].link + '">' + e.app[l].name +
				"</a></li>";
			n += "</ul>"
		}
		if (0 != e.plugin.length) {
			for (n += "<ul><li class='gray'>插件</li>", l = 0; l < e.plugin.length; l++) n += '<li><a class="search-item" href="' +
				e.plugin[l].link + '">' + e.plugin[l].name + "</a></li>";
			n += "</ul>"
		}
		if (0 != e.article.length) {
			for (n += "<ul><li class='gray'>文章</li>", l = 0; l < e.article.length; l++) n += '<li><a class="search-item" href="' +
				e.article[l].link + '">' + e.article[l].name + "</a></li>";
			n += "</ul>"
		}
		if (0 != e.video.length) {
			for (n += "<ul><li class='gray'>视频</li>", l = 0; l < e.video.length; l++) n += '<li><a class="search-item" href="' +
				e.video[l].link + '">' + e.video[l].name + "</a></li>";
			n += "</ul>"
		}
		$(".search-menu").html(n), $(".menu").html(n), $(".search-menu").show(), $(".menu").show()
	}
}

function search_menu_hide() {
	$(".search-menu").hide(), $(".menu").hide(), $(".search-menu").html(""), $(".menu").html("")
}

function search_menu_empty() {
	search_default.length ? ($(".search-menu").html(search_default).show(), $(".menu").html(search_default).show()) : ($(
		".search-menu").html(""), $(".menu").html(""))
}
$(function() {
	$('input[name="search"]').focus(function() {
		var e = $(this).val();
		"" == $.trim(e) ? search_menu_empty($(this)) : associate_search(e, $(this))
	}), $(document).click(function(e) {
		(e = $(e.target)).is('[name="search"]') || e.is(".search-item") || $(".menu").hide()
	}), $('input[name="search"]').bind("input propertychange", function() {
		var e = $('input[name="search"]').val();
		"" == $.trim(e) ? search_menu_empty($(this)) : associate_search(e, $(this))
	})
	searchInit();
});
