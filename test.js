//SETS PAGE ATTRIBUTES FOR SEO
function navigateToPage() {
	var hash = window.location.hash,
		pageName = "";
	if (hash !== "") {
		// change '#!/page1.html' to 'page1.html'
		pageName = hash.substring(3, hash.length);
		$.get(pageName, function (response) {
			var
			   // Wrap the resulting HTML string with a
			   // parent node jQuery can properly
			   // select against it.
				markup = $("<div>" + response + "</div>"),
			   // Extract the fragment out of the markup.
				fragment = markup.find(".fragment").html();
			$("#content-host").html(fragment);
		});
	}
}

$(".helpSectionNormalBox").click(function (e) {
	e.preventDefault();
	window.location.hash = "!/" + $(this).attr("href");
});

$(window).on("hashchange", function () {
	navigateToPage();
}); 


//
//function getPageName() {
//	var	pathName = window.location.pathname,
//		pageName = "";
//	if (pathName.indexOf("/") !== -1) {
//		pageName = pathName.split("/").pop();
//	} else {
//		pageName = pathName;
//	}
//	return pageName;
//}
//
//function navigateToPage() {
//	var pageName = getPageName();
//	$.get(pageName, function (response) {
//		var
//			// Wrap the resulting HTML string with a parent node
//			// so jQuery can properly select against it.
//			markup = $("<div>" + response + "</div>"),
//
//			// Extract the fragment out of the markup.
//			fragment = markup.find(".fragment").html();
//		$("#content-host").html(fragment);
//	});
//}
//
//
//
//
//
//$("a[data-role='ajax']").click(function (e) {
//	if (Modernizr.history) {
//		e.preventDefault();
//		var pageName = $(this).attr("href");
//		window.history.pushState(null, "", pageName);
//		navigateToPage();
//	}
//});
//
//var _popStateEventCount = 0;
//$(window).on('popstate', function (e) {
//	this._popStateEventCount++;
//	if ($.browser.webkit && this._popStateEventCount == 1) {
//		return;
//	}
//	navigateToPage();
//});