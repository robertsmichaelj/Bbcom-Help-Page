/**
 * version: 99.2.1
 * release date: Thu Nov 16 2017 14:10:40
 */
function setupPlugins(a) {
    a.plugins = "";
    var b = s_getHostFromURL(1).toLowerCase(),
        c = a.Util.getQueryParam("CJAID") ? a.Util.getQueryParam("CJAID") : a.Util.getQueryParam("clickid"),
        d = a.Util.getQueryParam("MCID") ? a.Util.getQueryParam("MCID") : a.Util.getQueryParam("mcid");
    if (a.blnHasRan) document.location.href.toString().indexOf(".bodybuilding.com/bbsearch/") > 0 || document.location.href.toString().indexOf("search-results.jsp") > 0 ? (a.eVar62 = a.c_r("v62"), a.eVar63 = a.c_r("v63"), a.eVar66 = a.c_r("v66"), a.eVar13 = a.c_r("v13")) : (a.eVar62 = "", a.eVar63 = "", a.eVar66 = "");
    else {
        a.blnHasRan = !0, a.eVar19 = a.prop19 = "", a.eVar29 = a.prop29 = "", a.eVar30 = a.prop30 = "";
        var e = a.c_r("gpv_link").split("|");
        e && e.length && e.length > 0 && (a.eVar29 = e[0], a.eVar30 = e[1] ? e[1] : "", a.c_w("gpv_link", "1", new Date(0))), a.eVar62 = a.c_r("v62"), a.c_w("v62", "", 0), a.eVar63 = a.c_r("v63"), a.c_w("v63", "", 0), a.eVar66 = a.c_r("v66"), a.c_w("v66", "", 0), a.eVar13 = a.c_r("v13"), a.c_w("v13", "", 0)
    }
    void 0 !== s_omni && a.bbSetOmniVars(), document.location.href.toString().indexOf(".bodybuilding.com/store/") < 0 && document.location.href.toString().indexOf(".body.local/store/") < 0 && ("my" !== b && "bodyspace" !== b || !document.getElementById("crumb-source") || "" === document.getElementById("crumb-source").textContent || a.bbSetOmniPN(a.getBreadCrumb()), a.pageType || a.pageName || "my" !== b && "bodyspace" !== b && "blog" !== b || (a.pageName = b), a.prop5 || "search2" !== b && "search" !== b || (a.prop5 = a.Util.getQueryParam("q").toLowerCase()), a.prop6 || "search2" !== b ? a.prop6 || "search" !== b ? a.prop6 || "search3" !== b || (a.prop6 = a.Util.getQueryParam("restrict").toLowerCase()) : a.prop6 = a.Util.getQueryParam("restrict").toLowerCase() : a.prop6 = a.Util.getQueryParam("site").toLowerCase()), c && !d ? a.campaign = "Affiliate" : d && (a.campaign = d), a.pageType || a.pageName || (a.pageName = document.title), a.channel || (a.channel = "www" !== b ? b : s_getPathFromURL(1).toLowerCase(), "search3" == a.channel && (a.channel = "search")), a.eVar3 = a.getNewRepeat(), a.eVar4 = a.getDaysSinceLastVisit("s_lv"), a.eVar6 = a.prop6 = s_getLoadTime(), s_omni.orderid ? a.eVar12 = s_omni.orderid : "undefined" != typeof order && order.OrderId && (a.eVar12 = order.OrderId), a.prop14 = a.getValOnce("Visit", "s_prop_14", 0), document.referrer.indexOf(".google.") > -1 && (a.prop19 = a.eVar19 = a.Util.getQueryParam("cd", "|", document.referrer)), a.prop20 = String(a.getPreviousValue(a.pageName, "gpv_pn")), a.prop20 && (window.strPctPgVd = String(a.getPercentPageViewed())), a.prop20 && "0" !== strPctPgVd && (a.prop18 = strPctPgVd), a.eVar21 = a.Util.getQueryParam("CJAID") ? a.Util.getQueryParam("CJAID") : a.Util.getQueryParam("clickid") ? a.Util.getQueryParam("clickid") : a.Util.getQueryParam("bbkwid"), a.eVar21 && (a.prop21 = "D=v21"), a.eVar22 = a.Util.getQueryParam("CJPID") ? a.Util.getQueryParam("CJPID") : "" == a.Util.getQueryParam("irpid") ? "" : "ir" + a.Util.getQueryParam("irpid"), a.eVar22 && (a.prop22 = "D=v22"), a.eVar26 = a.Util.getQueryParam("icid").toLowerCase(), a.eVar27 = s_omni.testVersion ? s_omni.testVersion : a.Util.getQueryParam("ev27"), a.eVar28 = s_omni.versionID ? s_omni.versionID : s_omni.versionId ? s_omni.versionId : "", s_omni.memberName || (a.Util.getQueryParam("username") && (a.eVar41 = s_omni.memberStatus = "Bodyspace Member", a.eVar42 = s_omni.memberName = a.Util.getQueryParam("username"), a.referrer = s_omni.referrer = a.Util.getQueryParam("mcid") + ":" + a.Util.getQueryParam("fromPage")), a.Util.getQueryParam("userslug") && (a.eVar41 = s_omni.memberStatus = "Bodyspace Member", a.eVar42 = s_omni.memberName = a.Util.getQueryParam("userslug"), a.referrer = s_omni.referrer = a.Util.getQueryParam("mcid") + ":" + a.Util.getQueryParam("fromPage"))), a.eVar51 = "D=s_vi", a.eVar55 = a.getBreadCrumb(), a.eVar56 = a.getLocalTimePart(), a.eVar57 = a.getTimeParting("d", "-7").toLowerCase() + "|" + a.getTimeParting("h", "-7").toLowerCase(), a.eVar58 = a.getVisitNum(), a.eVar59 = a.getUUID(), s_omni.isMobileView && (s_omni.eVar64 = s_omni.isMobileView), s_omni.eVar64 && (a.eVar64 = s_omni.eVar64);
    try {
        BB && BB.Omniture && BB.Omniture.zoneLoads && a.ObjSize(BB.Omniture.zoneLoads) > 0 && (a.eVar66 = a.objectToString(BB.Omniture.zoneLoads))
    } catch (b) {
        a.eVar66 = "ZoneLoadError"
    }
    a.eVar75 = a.Util.getQueryParam("esvcid"), window.optimizely = window.optimizely || [], window.optimizely.push("activateSiteCatalyst")
}

function s_getHostFromURL(a) {
    for (var b = location.href.toLowerCase(), c = /^https?:\/\/([a-z0-9\.\-]+)(\/.*)?$/, d = b.replace(c, "$1"), e = [], f = 0; d.indexOf(".") > -1;) "." == d.charAt(0) ? d = d.substr(1) : (e[f] = d.substr(0, d.indexOf(".")), d = d.substr(d.indexOf(".") + 1, d.length - d.indexOf(".") + 1), f++);
    return null != e[a - 1] ? e[a - 1] : ""
}

function s_getFirstIDMatch(a) {
    var b;
    if (a) {
        var c = "newProducts" === a.id ? "" : a.id;
        if (c) b = c;
        else if (s_getTagName(a).toLowerCase().match(/^(html|body|head)$/)) b = "";
        else {
            a = a.parentElement ? a.parentElement : a.parentNode;
            var d = a;
            b = d ? s_getFirstIDMatch(d) : ""
        }
    } else b = "";
    return b
}

function s_getTopID(a) {
    var b = a.id;
    if (b) {
        if (jQuery.inArray(b, topDivIDArray) >= 0 && ("DIV" === s_getTagName(a) || "ASIDE" === s_getTagName(a) || "MAIN" === s_getTagName(a) || "HEADER" === s_getTagName(a))) return b;
        if ("BODY" != s_getTagName(a)) {
            a = a.parentElement ? a.parentElement : a.parentNode;
            var c = a;
            return c ? s_getTopID(c) : ""
        }
        return ""
    }
    if ("BODY" != s_getTagName(a)) {
        a = a.parentElement ? a.parentElement : a.parentNode;
        var c = a;
        return c ? s_getTopID(c) : ""
    }
    return ""
}

function s_getTagName(a) {
    var b = a.tagName;
    return a.tagUrn || a.scopeName && "HTML" != a.scopeName.toUpperCase() ? "" : (b = b && b.toUpperCase ? b.toUpperCase() : "", "SHAPE" == b && (b = ""), b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A")), b)
}

function OmniturePageSpoof(a) {
    try {
        window.myValueArray = [["inValue", "Channel", "PageName", "Breadcrumb", "URL", "ModalName"], ["pageReviewModal", "help", "help:feedback:", "Help:Feedback:", "http://www.bodybuilding.com/help/", "pageReviewModal"], ["cartPromoModal", "atg", "atg:cart:", "Store:Cart:", "http://www.bodybuilding.com/store/", "cartPromoModal"], ["ClothingSizeModal-", "atg", "atg:categories and goals:clothingsizemodal:", "Store:Shop By Brand:ClothingSizeModal:", "http://www.bodybuilding.com/store/ClothingSizeModal/", "clothingSizeModal"], ["signup", s.channel, s.channel + ":other:", s.channel + ":Other:", "http://bodyspace.bodybuilding.com/community/", "signupModal"], ["wtbfgoalwizard", "bodyspace", "bodyspace:dashboard:", "Bodyspace:My Dashaboard:", "http://bodyspace.bodybuilding.com/dashboard/", "wtbfgoalModal"], ["fbinvite", "bodyspace", "bodyspace:member overview:", "Bodyspace:Profile:", "http://www.bodybuilding.com/", "fbinviteModal"], ["googlead", "atg", "atg:campaign:", "Store:Campaign:", "http://www.bodybuilding.com/store/campaign/", "googleadModal"], ["size", "atg", "atg:product:", "Store:Product:", "http://www.bodybuilding.com/store/product/", "sizeModal"], ["flavor", "atg", "atg:product:", "Store:Product:", "http://www.bodybuilding.com/store/product/", "flavorModal"], ["color", "atg", "atg:product:", "Store:Product:", "http://www.bodybuilding.com/store/product/", "colorModal"], ["product-", "atg", "atg:product:addToCart:", "Store:Product:", "http://www.bodybuilding.com/store/product/", "quickAddToCartModal"], ["wishlistadd", "atg", "atg:product:", "Store:Product:", "http://www.bodybuilding.com/store/product/", "wishlistaddModal"], ["reviewadd", "atg", "atg:product:", "Store:Product:", "http://www.bodybuilding.com/store/product/", "reviewaddModal"], ["search-", "search", "search:results:", "Search:Results:", "http://www.bodybuilding.com/search/", "searchModal"], ["video-", "video", "video:player:", "Video:Player:", "http://videos.bodybuilding.com/video/", "videoModal"], ["OPT_", "Store", "atg:optimizely:experiment:", "Store:Experiment:", "http://www.bodybuilding.com/store/experiment/", "experimentModal"], ["video-", "Videos", "videos:jw_player:", "Videos:JW_Player:", "http://www.bodybuilding.com/videos/jw_player/", "videosModal"]];
        for (var b = 0; b < myValueArray.length; b++)
            if (window.myVal = window.myValueArray[b][0], window.j = a.indexOf(window.myVal), -1 != window.j) {
                s.channel = myValueArray[b][1], s.pageName = s_omni.pageName = myValueArray[b][2] + a, s.eVar55 = myValueArray[b][3] + a, s.pageURL = myValueArray[b][4] + a, s.eVar10 = myValueArray[b][5], "quickAddToCartModa" === s.eVar10 && (s.events = s.events + ",scAdd"), window.s_code = s.t(), window.s_code && document.write(window.s_code);
                break
            }
    } catch (a) {
        console && "function" == typeof console.error && console.error(a)
    }
}

function AppMeasurement() {
    var a = this;
    a.wd = window, a.epa = function (a) {
        var b = this;
        return a ? (a = b.rep("" + a, "+", " "), 3 == b.em ? decodeURIComponent(a) : unescape(a)) : a
    }, a.version = "1.2.4";
    var b = window;
    b.s_c_in || (b.s_c_il = [], b.s_c_in = 0), a._il = b.s_c_il, a._in = b.s_c_in, a._il[a._in] = a, b.s_c_in++, a._c = "s_c";
    var c = b.hb;
    c || (c = null);
    var d, e, f = b;
    try {
        for (d = f.parent, e = f.location; d && d.location && e && "" + d.location != "" + e && f.location && "" + d.location != "" + f.location && d.location.host == e.host;) f = d, d = f.parent
    } catch (a) {}
    for (a.Sa = function (a) {
            try {
                console.log(a)
            } catch (a) {}
        }, a.ka = function (a) {
            return "" + parseInt(a) == "" + a
        }, a.replace = function (a, b, c) {
            return !a || a.indexOf(b) < 0 ? a : a.split(b).join(c)
        }, a.escape = function (b) {
            var c, d;
            if (!b) return b;
            for (b = encodeURIComponent(b), c = 0; c < 7; c++) d = "+~!*()'".substring(c, c + 1), b.indexOf(d) >= 0 && (b = a.replace(b, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
            return b
        }, a.unescape = function (b) {
            if (!b) return b;
            b = b.indexOf("+") >= 0 ? a.replace(b, "+", " ") : b;
            try {
                return decodeURIComponent(b)
            } catch (a) {}
            return unescape(b)
        }, a.Ja = function () {
            var c, d = b.location.hostname,
                e = a.fpCookieDomainPeriods;
            if (e || (e = a.cookieDomainPeriods), d && !a.da && !/^[0-9.]+$/.test(d) && (e = e ? parseInt(e) : 2, e = e > 2 ? e : 2, (c = d.lastIndexOf(".")) >= 0)) {
                for (; c >= 0 && e > 1;) c = d.lastIndexOf(".", c - 1), e--;
                a.da = c > 0 ? d.substring(c) : d
            }
            return a.da
        }, a.c_r = a.cookieRead = function (b) {
            b = a.escape(b);
            var c = " " + a.d.cookie,
                d = c.indexOf(" " + b + "="),
                e = d < 0 ? d : c.indexOf(";", d);
            return b = d < 0 ? "" : a.unescape(c.substring(d + 2 + b.length, e < 0 ? c.length : e)), "[[B]]" != b ? b : ""
        }, a.c_w = a.cookieWrite = function (b, c, d) {
            var e, f = a.Ja(),
                g = a.cookieLifetime;
            return c = "" + c, g = g ? ("" + g).toUpperCase() : "", d && "SESSION" != g && "NONE" != g && ((e = "" != c ? parseInt(g || 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1e3 * e)) : 1 == d && (d = new Date, e = d.getYear(), d.setYear(e + 5 + (e < 1900 ? 1900 : 0)))), b && "NONE" != g ? (a.d.cookie = b + "=" + a.escape("" != c ? c : "[[B]]") + "; path=/;" + (d && "SESSION" != g ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(b) == c) : 0
        }, a.D = [], a.C = function (b, c, d) {
            if (a.ea) return 0;
            a.maxDelay || (a.maxDelay = 250);
            var e = 0,
                f = (new Date).getTime() + a.maxDelay,
                g = a.d.fb,
                h = ["webkitvisibilitychange", "visibilitychange"];
            if (g || (g = a.d.gb), g && "prerender" == g) {
                if (!a.N)
                    for (a.N = 1, d = 0; d < h.length; d++) a.d.addEventListener(h[d], function () {
                        var b = a.d.fb;
                        b || (b = a.d.gb), "visible" == b && (a.N = 0, a.delayReady())
                    });
                e = 1, f = 0
            } else d || a.q("_d") && (e = 1);
            return e && (a.D.push({
                m: b,
                a: c,
                t: f
            }), a.N || setTimeout(a.delayReady, a.maxDelay)), e
        }, a.delayReady = function () {
            var b, c = (new Date).getTime(),
                d = 0;
            for (a.q("_d") && (d = 1); a.D.length > 0;) {
                if (b = a.D.shift(), d && !b.t && b.t > c) {
                    a.D.unshift(b), setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                    break
                }
                a.ea = 1, a[b.m].apply(a, b.a), a.ea = 0
            }
        }, a.setAccount = a.sa = function (b) {
            var c, d;
            if (!a.C("setAccount", arguments))
                if (a.account = b, a.allAccounts)
                    for (c = a.allAccounts.concat(b.split(",")), a.allAccounts = [], c.sort(), d = 0; d < c.length; d++)(0 == d || c[d - 1] != c[d]) && a.allAccounts.push(c[d]);
                else a.allAccounts = b.split(",")
        }, a.foreachVar = function (b, c) {
            var d, e, f, g, h = "";
            for (f = e = "", a.lightProfileID ? (d = a.H, (h = a.lightTrackVars) && (h = "," + h + "," + a.Q.join(",") + ",")) : (d = a.c, (a.pe || a.linkType) && (h = a.linkTrackVars, e = a.linkTrackEvents, a.pe && (f = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[f]) && (h = a[f].eb, e = a[f].cb)), h && (h = "," + h + "," + a.z.join(",") + ","), e && h && (h += ",events,")), c && (c = "," + c + ","), e = 0; e < d.length; e++) f = d[e], (g = a[f]) && (!h || h.indexOf("," + f + ",") >= 0) && (!c || c.indexOf("," + f + ",") >= 0) && b(f, g)
        }, a.X = function (b, c, d, e, f) {
            var g, h, i, j, k = "",
                l = 0;
            if ("contextData" == b && (b = "c"), c) {
                for (g in c)
                    if (!Object.prototype[g] && (!f || g.substring(0, f.length) == f) && c[g] && (!d || d.indexOf("," + (e ? e + "." : "") + g + ",") >= 0)) {
                        if (i = !1, l)
                            for (h = 0; h < l.length; h++) g.substring(0, l[h].length) == l[h] && (i = !0);
                        if (!i && ("" == k && (k += "&" + b + "."), h = c[g], f && (g = g.substring(f.length)), g.length > 0))
                            if ((i = g.indexOf(".")) > 0) h = g.substring(0, i), i = (f || "") + h + ".", l || (l = []), l.push(i), k += a.X(h, c, d, e, i);
                            else if ("boolean" == typeof h && (h = h ? "true" : "false"), h) {
                            if ("retrieveLightData" == e && f.indexOf(".contextData.") < 0) switch (i = g.substring(0, 4), j = g.substring(4), g) {
                                case "transactionID":
                                    g = "xact";
                                    break;
                                case "channel":
                                    g = "ch";
                                    break;
                                case "campaign":
                                    g = "v0";
                                    break;
                                default:
                                    a.ka(j) && ("prop" == i ? g = "c" + j : "eVar" == i ? g = "v" + j : "list" == i ? g = "l" + j : "hier" == i && (g = "h" + j, h = h.substring(0, 255)))
                            }
                            k += "&" + a.escape(g) + "=" + a.escape(h)
                        }
                    }
                "" != k && (k += "&." + b)
            }
            return k
        }, a.La = function () {
            var b, c, d, e, f, g, h, i, j = "",
                k = "",
                l = "",
                m = c = "";
            for (a.lightProfileID ? (b = a.H, (k = a.lightTrackVars) && (k = "," + k + "," + a.Q.join(",") + ",")) : (b = a.c, (a.pe || a.linkType) && (k = a.linkTrackVars, l = a.linkTrackEvents, a.pe && (c = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[c]) && (k = a[c].eb, l = a[c].cb)), k && (k = "," + k + "," + a.z.join(",") + ","), l && (l = "," + l + ",", k && (k += ",events,")), a.events2 && (m += ("" != m ? "," : "") + a.events2)), c = 0; c < b.length; c++) {
                if (e = b[c], f = a[e], d = e.substring(0, 4), g = e.substring(4), !f && "events" == e && m && (f = m, m = ""), f && (!k || k.indexOf("," + e + ",") >= 0)) {
                    switch (e) {
                        case "timestamp":
                            e = "ts";
                            break;
                        case "dynamicVariablePrefix":
                            e = "D";
                            break;
                        case "visitorID":
                            e = "vid";
                            break;
                        case "marketingCloudVisitorID":
                            e = "mid";
                            break;
                        case "analyticsVisitorID":
                            e = "aid";
                            break;
                        case "audienceManagerVisitorID":
                            e = "aamid";
                            break;
                        case "audienceManagerLocationHint":
                            e = "aamlh";
                            break;
                        case "pageURL":
                            e = "g", f.length > 255 && (a.pageURLRest = f.substring(255), f = f.substring(0, 255));
                            break;
                        case "pageURLRest":
                            e = "-g";
                            break;
                        case "referrer":
                            e = "r";
                            break;
                        case "vmk":
                        case "visitorMigrationKey":
                            e = "vmt";
                            break;
                        case "visitorMigrationServer":
                            e = "vmf", a.ssl && a.visitorMigrationServerSecure && (f = "");
                            break;
                        case "visitorMigrationServerSecure":
                            e = "vmf", !a.ssl && a.visitorMigrationServer && (f = "");
                            break;
                        case "charSet":
                            e = "ce";
                            break;
                        case "visitorNamespace":
                            e = "ns";
                            break;
                        case "cookieDomainPeriods":
                            e = "cdp";
                            break;
                        case "cookieLifetime":
                            e = "cl";
                            break;
                        case "variableProvider":
                            e = "vvp";
                            break;
                        case "currencyCode":
                            e = "cc";
                            break;
                        case "channel":
                            e = "ch";
                            break;
                        case "transactionID":
                            e = "xact";
                            break;
                        case "campaign":
                            e = "v0";
                            break;
                        case "resolution":
                            e = "s";
                            break;
                        case "colorDepth":
                            e = "c";
                            break;
                        case "javascriptVersion":
                            e = "j";
                            break;
                        case "javaEnabled":
                            e = "v";
                            break;
                        case "cookiesEnabled":
                            e = "k";
                            break;
                        case "browserWidth":
                            e = "bw";
                            break;
                        case "browserHeight":
                            e = "bh";
                            break;
                        case "connectionType":
                            e = "ct";
                            break;
                        case "homepage":
                            e = "hp";
                            break;
                        case "plugins":
                            e = "p";
                            break;
                        case "events":
                            if (m && (f += ("" != f ? "," : "") + m), l)
                                for (g = f.split(","), f = "", d = 0; d < g.length; d++) h = g[d], i = h.indexOf("="), i >= 0 && (h = h.substring(0, i)), i = h.indexOf(":"), i >= 0 && (h = h.substring(0, i)), l.indexOf("," + h + ",") >= 0 && (f += (f ? "," : "") + g[d]);
                            break;
                        case "events2":
                            f = "";
                            break;
                        case "contextData":
                            j += a.X("c", a[e], k, e), f = "";
                            break;
                        case "lightProfileID":
                            e = "mtp";
                            break;
                        case "lightStoreForSeconds":
                            e = "mtss", a.lightProfileID || (f = "");
                            break;
                        case "lightIncrementBy":
                            e = "mti", a.lightProfileID || (f = "");
                            break;
                        case "retrieveLightProfiles":
                            e = "mtsr";
                            break;
                        case "deleteLightProfiles":
                            e = "mtsd";
                            break;
                        case "retrieveLightData":
                            a.retrieveLightProfiles && (j += a.X("mts", a[e], k, e)), f = "";
                            break;
                        default:
                            a.ka(g) && ("prop" == d ? e = "c" + g : "eVar" == d ? e = "v" + g : "list" == d ? e = "l" + g : "hier" == d && (e = "h" + g, f = f.substring(0, 255)))
                    }
                    f && (j += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(f) : f))
                }
                "pev3" == e && a.g && (j += a.g)
            }
            return j
        }, a.u = function (a) {
            var b = a.tagName;
            return "" + a.pb != "undefined" || "" + a.Xa != "undefined" && "HTML" != ("" + a.Xa).toUpperCase() ? "" : (b = b && b.toUpperCase ? b.toUpperCase() : "", "SHAPE" == b && (b = ""), b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A")), b)
        }, a.ga = function (a) {
            var b, c, d, e = a.href ? a.href : "";
            return b = e.indexOf(":"), c = e.indexOf("?"), d = e.indexOf("/"), e && (b < 0 || c >= 0 && b > c || d >= 0 && b > d) && (c = a.protocol && a.protocol.length > 1 ? a.protocol : l.protocol ? l.protocol : "", b = l.pathname.lastIndexOf("/"), e = (c ? c + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, b < 0 ? 0 : b) + "/" : "") + e), e
        }, a.F = function (b) {
            var c, d, e = a.u(b),
                f = "",
                g = 0;
            return e && (c = b.protocol, d = b.onclick, !b.href || "A" != e && "AREA" != e || d && c && !(c.toLowerCase().indexOf("javascript") < 0) ? d ? (f = a.replace(a.replace(a.replace(a.replace("" + d, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == e || "SUBMIT" == e ? (b.value ? f = b.value : b.innerText ? f = b.innerText : b.textContent && (f = b.textContent), g = 3) : b.src && "IMAGE" == e && (f = b.src) : f = a.ga(b), f) ? {
                id: f.substring(0, 100),
                type: g
            } : 0
        }, a.mb = function (b) {
            for (var c = a.u(b), d = a.F(b); b && !d && "BODY" != c;)(b = b.parentElement ? b.parentElement : b.parentNode) && (c = a.u(b), d = a.F(b));
            return d && "BODY" != c || (b = 0), b && (c = b.onclick ? "" + b.onclick : "", c.indexOf(".tl(") >= 0 || c.indexOf(".trackLink(") >= 0) && (b = 0), b
        }, a.Va = function () {
            var c, d, e, f, g = a.linkObject,
                h = a.linkType,
                i = a.linkURL;
            if (a.R = 1, g || (a.R = 0, g = a.j), g) {
                for (c = a.u(g), d = a.F(g); g && !d && "BODY" != c;)(g = g.parentElement ? g.parentElement : g.parentNode) && (c = a.u(g), d = a.F(g));
                if (d && "BODY" != c || (g = 0), g) {
                    var j = g.onclick ? "" + g.onclick : "";
                    (j.indexOf(".tl(") >= 0 || j.indexOf(".trackLink(") >= 0) && (g = 0)
                }
            } else a.R = 1;
            if (!i && g && (i = a.ga(g)), i && !a.linkLeaveQueryString && (e = i.indexOf("?")) >= 0 && (i = i.substring(0, e)), !h && i) {
                var k, l = 0,
                    m = 0;
                if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                    for (j = i.toLowerCase(), e = j.indexOf("?"), f = j.indexOf("#"), e >= 0 ? f >= 0 && f < e && (e = f) : e = f, e >= 0 && (j = j.substring(0, e)), e = a.linkDownloadFileTypes.toLowerCase().split(","), f = 0; f < e.length; f++)(k = e[f]) && j.substring(j.length - (k.length + 1)) == "." + k && (h = "d");
                if (a.trackExternalLinks && !h && (j = i.toLowerCase(), a.ja(j)) && (a.linkInternalFilters || (a.linkInternalFilters = b.location.hostname), e = 0, a.linkExternalFilters ? (e = a.linkExternalFilters.toLowerCase().split(","), l = 1) : a.linkInternalFilters && (e = a.linkInternalFilters.toLowerCase().split(",")), e)) {
                    for (f = 0; f < e.length; f++) k = e[f], j.indexOf(k) >= 0 && (m = 1);
                    m ? l && (h = "e") : l || (h = "e")
                }
            }
            a.linkObject = g, a.linkURL = i, a.linkType = h, (a.trackClickMap || a.trackInlineStats) && (a.g = "", g && (h = a.pageName, i = 1, g = g.sourceIndex, h || (h = a.pageURL, i = 0), b.s_objectID && (d.id = b.s_objectID, g = d.type = 1), h && d && d.id && c && (a.g = "&pid=" + a.escape(h.substring(0, 255)) + (i ? "&pidt=" + i : "") + "&oid=" + a.escape(d.id.substring(0, 100)) + (d.type ? "&oidt=" + d.type : "") + "&ot=" + c + (g ? "&oi=" + g : ""))))
        }, a.Ma = function () {
            var b = a.R,
                c = a.linkType,
                d = a.linkURL,
                e = a.linkName;
            if (c && (d || e) && (c = c.toLowerCase(), "d" != c && "e" != c && (c = "o"), a.pe = "lnk_" + c, a.pev1 = d ? a.escape(d) : "", a.pev2 = e ? a.escape(e) : "", b = 1), a.abort && (b = 0), a.trackClickMap || a.trackInlineStats) {
                c = {}, d = 0;
                var f, g, h, i = a.cookieRead("s_sq"),
                    j = i ? i.split("&") : 0;
                if (i = 0, j)
                    for (f = 0; f < j.length; f++) g = j[f].split("="), e = a.unescape(g[0]).split(","), g = a.unescape(g[1]), c[g] = e;
                if (e = a.account.split(","), b || a.g) {
                    b && !a.g && (i = 1);
                    for (g in c)
                        if (!Object.prototype[g])
                            for (f = 0; f < e.length; f++)
                                for (i && (h = c[g].join(",")) == a.account && (a.g += ("&" != g.charAt(0) ? "&" : "") + g, c[g] = [], d = 1), j = 0; j < c[g].length; j++)(h = c[g][j]) == e[f] && (i && (a.g += "&u=" + a.escape(h) + ("&" != g.charAt(0) ? "&" : "") + g + "&u=0"), c[g].splice(j, 1), d = 1);
                    if (b || (d = 1), d) {
                        i = "", f = 2, !b && a.g && (i = a.escape(e.join(",")) + "=" + a.escape(a.g), f = 1);
                        for (g in c) !Object.prototype[g] && f > 0 && c[g].length > 0 && (i += (i ? "&" : "") + a.escape(c[g].join(",")) + "=" + a.escape(g), f--);
                        a.cookieWrite("s_sq", i);
                        try {
                            var k = a.j,
                                l = s_getFirstIDMatch(k),
                                m = s_getTopID(k);
                            l && m && (a.eVar62 = l, a.c_w("v62", l, 0), a.eVar63 = m, a.c_w("v63", m, 0), a.c_w("v66", a.eVar66, 0), a.c_w("v13", a.eVar13, 0))
                        } catch (e) {}
                    }
                }
            }
            return b
        }, a.Na = function () {
            if (!a.bb) {
                var b, c, d, e = new Date,
                    g = f.location,
                    h = d = c = b = "",
                    i = "",
                    j = "",
                    k = "1.2",
                    l = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                    m = "",
                    n = "",
                    o = 0;
                if (e.setUTCDate && (k = "1.3", o.toPrecision && (k = "1.5", b = [], b.forEach))) {
                    k = "1.6", d = 0, c = {};
                    try {
                        d = new Iterator(c), d.next && (k = "1.7", b.reduce && (k = "1.8", k.trim && (k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k = "1.8.5")))))
                    } catch (a) {}
                }
                b = screen.width + "x" + screen.height, d = navigator.javaEnabled() ? "Y" : "N", c = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, i = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth, j = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight, e = navigator.plugins;
                try {
                    a.b.addBehavior("#default#homePage"), m = a.b.nb(g) ? "Y" : "N"
                } catch (a) {}
                try {
                    a.b.addBehavior("#default#clientCaps"), n = a.b.connectionType
                } catch (a) {}
                if (e)
                    for (; o < e.length && o < 30;)(g = e[o].name) && (g = g.substring(0, 100) + ";", h.indexOf(g) < 0 && (h += g)), o++;
                a.resolution = b, a.colorDepth = c, a.javascriptVersion = k, a.javaEnabled = d, a.cookiesEnabled = l, a.browserWidth = i, a.browserHeight = j, a.connectionType = n, a.homepage = m, a.plugins = h, a.bb = 1
            }
        }, a.I = {}, a.loadModule = function (c, d) {
            var e = a.I[c];
            if (!e) {
                e = b["AppMeasurement_Module_" + c] ? new b["AppMeasurement_Module_" + c](a) : {}, a.I[c] = a[c] = e, e.ua = function () {
                    return e.wa
                }, e.xa = function (b) {
                    (e.wa = b) && (a[c + "_onLoad"] = b, a.C(c + "_onLoad", [a, e], 1) || b(a, e))
                };
                try {
                    Object.defineProperty ? Object.defineProperty(e, "onLoad", {
                        get: e.ua,
                        set: e.xa
                    }) : e._olc = 1
                } catch (a) {
                    e._olc = 1
                }
            }
            d && (a[c + "_onLoad"] = d, a.C(c + "_onLoad", [a, e], 1) || d(a, e))
        }, a.q = function (b) {
            var c, d;
            for (c in a.I)
                if (!Object.prototype[c] && (d = a.I[c]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[b] && d[b]())) return 1;
            return 0
        }, a.Qa = function () {
            var b = Math.floor(1e13 * Math.random()),
                c = a.visitorSampling,
                d = a.visitorSamplingGroup;
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : "");
            var e = a.cookieRead(d);
            if (c) {
                if (e && (e = parseInt(e)), !e) {
                    if (!a.cookieWrite(d, b)) return 0;
                    e = b
                }
                if (e % 1e4 > v) return 0
            }
            return 1
        }, a.J = function (b, c) {
            var d, e, f, g, h, i;
            for (d = 0; d < 2; d++)
                for (e = d > 0 ? a.aa : a.c, f = 0; f < e.length; f++)
                    if (g = e[f], (h = b[g]) || b["!" + g]) {
                        if (!c && ("contextData" == g || "retrieveLightData" == g) && a[g])
                            for (i in a[g]) h[i] || (h[i] = a[g][i]);
                        a[g] = h
                    }
        }, a.qa = function (b, c) {
            var d, e, f, g;
            for (d = 0; d < 2; d++)
                for (e = d > 0 ? a.aa : a.c, f = 0; f < e.length; f++) g = e[f], b[g] = a[g], !c && !b[g] && (b["!" + g] = 1)
        }, a.Ia = function (a) {
            var b, c, d, e, f, g, h = 0,
                i = "",
                j = "";
            if (a && a.length > 255 && (b = "" + a, (c = b.indexOf("?")) > 0 && (g = b.substring(c + 1), b = b.substring(0, c), e = b.toLowerCase(), d = 0, "http://" == e.substring(0, 7) ? d += 7 : "https://" == e.substring(0, 8) && (d += 8), (c = e.indexOf("/", d)) > 0 && (e = e.substring(d, c), f = b.substring(c), b = b.substring(0, c), e.indexOf("google") >= 0 ? h = ",q,ie,start,search_key,word,kw,cd," : e.indexOf("yahoo.co") >= 0 && (h = ",p,ei,"), h && g)))) {
                if ((a = g.split("&")) && a.length > 1) {
                    for (d = 0; d < a.length; d++) e = a[d], c = e.indexOf("="), c > 0 && h.indexOf("," + e.substring(0, c) + ",") >= 0 ? i += (i ? "&" : "") + e : j += (j ? "&" : "") + e;
                    i && j ? g = i + "&" + j : j = ""
                }
                c = 253 - (g.length - j.length) - b.length, a = b + (c > 0 ? f.substring(0, c) : "") + "?" + g
            }
            return a
        }, a.za = !1, a.$ = !1, a.kb = function (b) {
            a.marketingCloudVisitorID = b, a.$ = !0, a.A()
        }, a.K = !1, a.Y = !1, a.ta = function (b) {
            a.analyticsVisitorID = b, a.Y = !0, a.A()
        }, a.ya = !1, a.Z = !1, a.jb = function (b) {
            a.audienceManagerVisitorID = b, a.audienceManagerVisitorID && a.visitor.getAudienceManagerLocationHint && (a.audienceManagerLocationHint = a.visitor.getAudienceManagerLocationHint()), a.Z = !0, a.A()
        }, a.isReadyToTrack = function () {
            var b = !0,
                c = a.visitor;
            return c && c.isAllowed() && (a.K || a.analyticsVisitorID || !c.getAnalyticsVisitorID || (a.analyticsVisitorID = c.getAnalyticsVisitorID([a, a.ta]), a.analyticsVisitorID) || (a.K = !0), (a.za && !a.$ && !a.marketingCloudVisitorID || a.K && !a.Y && !a.analyticsVisitorID || a.ya && !a.Z && !a.audienceManagerVisitorID) && (b = !1)), b
        }, a.k = c, a.l = 0, a.callbackWhenReadyToTrack = function (b, d, e) {
            var f;
            f = {}, f.Da = b, f.Ca = d, f.Aa = e, a.k == c && (a.k = []), a.k.push(f), 0 == a.l && (a.l = setInterval(a.A, 100))
        }, a.A = function () {
            var b;
            if (a.isReadyToTrack() && (a.l && (clearInterval(a.l), a.l = 0), a.k != c))
                for (; a.k.length > 0;) b = a.k.shift(), b.Ca.apply(b.Da, b.Aa)
        }, a.va = function (b) {
            var d, e, f = c,
                g = c;
            if (!a.isReadyToTrack()) {
                if (d = [], b != c)
                    for (e in f = {}, b) f[e] = b[e];
                return g = {}, a.qa(g, !0), d.push(f), d.push(g), a.callbackWhenReadyToTrack(a, a.track, d), !0
            }
            return !1
        }, a.Ka = function () {
            var b, c = a.cookieRead("s_fid"),
                d = "",
                e = "";
            b = 8;
            var f = 4;
            if (!c || c.indexOf("-") < 0) {
                for (c = 0; c < 16; c++) b = Math.floor(Math.random() * b), d += "0123456789ABCDEF".substring(b, b + 1), b = Math.floor(Math.random() * f), e += "0123456789ABCDEF".substring(b, b + 1), b = f = 16;
                c = d + "-" + e
            }
            return a.cookieWrite("s_fid", c, 1) || (c = 0), c
        }, a.t = a.track = function (c, d) {
            var e, g = new Date,
                h = "s" + Math.floor(g.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
                i = g.getYear();
            i = "t=" + a.escape(g.getDate() + "/" + g.getMonth() + "/" + (i < 1900 ? i + 1900 : i) + " " + g.getHours() + ":" + g.getMinutes() + ":" + g.getSeconds() + " " + g.getDay() + " " + g.getTimezoneOffset()), a.q("_s"), a.C("track", arguments) || (a.va(c) || (d && a.J(d), c && (e = {}, a.qa(e, 0), a.J(c)), a.Qa() && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.Ka()), a.Va(), a.usePlugins && a.setupPlugins && a.setupPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(g.getTime() / 1e3)), g = b.location, a.pageURL || (a.pageURL = g.href ? g.href : g), a.referrer || a.ra || (a.referrer = f.document.referrer, a.ra = 1), a.referrer = a.Ia(a.referrer), a.q("_g")), a.Ma() && !a.abort && (a.Na(), i += a.La(), a.Ua(h, i)), a.abort || a.q("_t"))), c && a.J(e, 1)), a.timestamp = a.linkObject = a.j = a.linkURL = a.linkName = a.linkType = b.ob = a.pe = a.pev1 = a.pev2 = a.pev3 = a.g = 0)
        }, a.tl = a.trackLink = function (b, c, d, e, f) {
            return a.linkObject = b, a.linkType = c, a.linkName = d, f && (a.i = b, a.p = f), a.track(e)
        }, a.trackLight = function (b, c, d, e) {
            return a.lightProfileID = b, a.lightStoreForSeconds = c, a.lightIncrementBy = d, a.track(e)
        }, a.clearVars = function () {
            var b, c;
            for (b = 0; b < a.c.length; b++) c = a.c[b], ("prop" == c.substring(0, 4) || "eVar" == c.substring(0, 4) || "hier" == c.substring(0, 4) || "list" == c.substring(0, 4) || "channel" == c || "events" == c || "eventList" == c || "products" == c || "productList" == c || "purchaseID" == c || "transactionID" == c || "state" == c || "zip" == c || "campaign" == c) && (a[c] = void 0)
        }, a.Ua = function (b, c) {
            var d, e = a.trackingServerSecure;
            d = "";
            a.dc, a.visitorNamespace;
            d = "https://" + e + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + "1/JS-" + a.version + (a.ab ? "T" : "") + "/" + b + "?AQB=1&ndh=1&" + c + "&AQE=1", a.Pa && (d = d.substring(0, 2047)), a.Ga(d), a.O()
        }, a.Ga = function (b) {
            a.e || a.Oa(), a.e.push(b), a.P = a.r(), a.pa()
        }, a.Oa = function () {
            a.e = a.Ra(), a.e || (a.e = [])
        }, a.Ra = function () {
            var c, d;
            if (a.U()) {
                try {
                    (d = b.localStorage.getItem(a.S())) && (c = b.JSON.parse(d))
                } catch (a) {}
                return c
            }
        }, a.U = function () {
            var c = !0;
            return a.trackOffline && a.offlineFilename && b.localStorage && b.JSON || (c = !1), c
        }, a.ha = function () {
            var b = 0;
            return a.e && (b = a.e.length), a.v && b++, b
        }, a.O = function () {
            if (!a.v)
                if (a.ia = c, a.T) a.P > a.G && a.na(a.e), a.W(500);
                else {
                    var b = a.Ba();
                    b > 0 ? a.W(b) : (b = a.fa()) && (a.v = 1, a.Ta(b), a.Ya(b))
                }
        }, a.W = function (b) {
            a.ia || (b || (b = 0), a.ia = setTimeout(a.O, b))
        }, a.Ba = function () {
            var b;
            return !a.trackOffline || a.offlineThrottleDelay <= 0 ? 0 : (b = a.r() - a.ma, a.offlineThrottleDelay < b ? 0 : a.offlineThrottleDelay - b)
        }, a.fa = function () {
            if (a.e.length > 0) return a.e.shift()
        }, a.Ta = function (b) {
            if (a.debugTracking) {
                var c = "AppMeasurement Debug: " + b;
                b = b.split("&");
                var d;
                for (d = 0; d < b.length; d++) c += "\n\t" + a.unescape(b[d]);
                a.Sa(c)
            }
        }, a.Ya = function (c) {
            var d;
            d || (d = new Image, d.alt = ""), d.ca = function () {
                try {
                    a.V && (clearTimeout(a.V), a.V = 0), d.timeout && (clearTimeout(d.timeout), d.timeout = 0)
                } catch (a) {}
            }, d.onload = d.$a = function () {
                d.ca(), a.Fa(), a.L(), a.v = 0, a.O()
            }, d.onabort = d.onerror = d.Ha = function () {
                d.ca(), (a.trackOffline || a.T) && a.v && a.e.unshift(a.Ea), a.v = 0, a.P > a.G && a.na(a.e), a.L(), a.W(500)
            }, d.onreadystatechange = function () {
                4 == d.readyState && (200 == d.status ? d.$a() : d.Ha())
            }, a.ma = a.r(), d.src = c, d.abort && (a.V = setTimeout(d.abort, 5e3)), a.Ea = c, a.lb = b["s_i_" + a.replace(a.account, ",", "_")] = d, (a.useForcedLinkTracking && a.B || a.p) && (a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.M = setTimeout(a.L, a.forcedLinkTrackingTimeout))
        }, a.Fa = function () {
            if (a.U() && !(a.la > a.G)) try {
                b.localStorage.removeItem(a.S()), a.la = a.r()
            } catch (a) {}
        }, a.na = function (c) {
            if (a.U()) {
                a.pa();
                try {
                    b.localStorage.setItem(a.S(), b.JSON.stringify(c)), a.G = a.r()
                } catch (a) {}
            }
        }, a.pa = function () {
            if (a.trackOffline)
                for ((!a.offlineLimit || a.offlineLimit <= 0) && (a.offlineLimit = 10); a.e.length > a.offlineLimit;) a.fa()
        }, a.forceOffline = function () {
            a.T = !0
        }, a.forceOnline = function () {
            a.T = !1
        }, a.S = function () {
            return a.offlineFilename + "-" + a.visitorNamespace + a.account
        }, a.r = function () {
            return (new Date).getTime()
        }, a.ja = function (a) {
            return a = a.toLowerCase(), 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:")
        }, a.setTagContainer = function (b) {
            var c, d, e;
            for (a.ab = b, c = 0; c < a._il.length; c++)
                if ((d = a._il[c]) && "s_l" == d._c && d.tagContainerName == b) {
                    if (a.J(d), d.lmq)
                        for (c = 0; c < d.lmq.length; c++) e = d.lmq[c], a.loadModule(e.n);
                    if (d.ml)
                        for (e in d.ml)
                            if (a[e])
                                for (c in b = a[e], e = d.ml[e]) !Object.prototype[c] && ("function" != typeof e[c] || ("" + e[c]).indexOf("s_c_il") < 0) && (b[c] = e[c]);
                    if (d.mmq)
                        for (c = 0; c < d.mmq.length; c++) e = d.mmq[c], a[e.m] && (b = a[e.m], b[e.f] && "function" == typeof b[e.f] && (e.a ? b[e.f].apply(b, e.a) : b[e.f].apply(b)));
                    if (d.tq)
                        for (c = 0; c < d.tq.length; c++) a.track(d.tq[c]);
                    d.s = a;
                    break
                }
        }, a.Util = {
            urlEncode: a.escape,
            urlDecode: a.unescape,
            cookieRead: a.cookieRead,
            cookieWrite: a.cookieWrite,
            getQueryParam: function (c, d, e) {
                var f;
                return d || (d = a.pageURL ? a.pageURL : b.location), e || (e = "&"), c && d && (d = "" + d, (f = d.indexOf("?")) >= 0 && (d = e + d.substring(f + 1) + e, (f = d.indexOf(e + c + "=")) >= 0 && (d = d.substring(f + e.length + c.length + 1), f = d.indexOf(e), f >= 0 && (d = d.substring(0, f)), d.length > 0))) ? a.unescape(d) : ""
            }
        }, a.z = ["timestamp", "dynamicVariablePrefix", "visitorID", "marketingCloudVisitorID", "analyticsVisitorID", "audienceManagerVisitorID", "audienceManagerLocationHint", "fid", "vmk", "visitorMigrationKey", "visitorMigrationServer", "visitorMigrationServerSecure", "charSet", "visitorNamespace", "cookieDomainPeriods", "fpCookieDomainPeriods", "cookieLifetime", "pageName", "pageURL", "referrer", "contextData", "currencyCode", "lightProfileID", "lightStoreForSeconds", "lightIncrementBy", "retrieveLightProfiles", "deleteLightProfiles", "retrieveLightData", "pe", "pev1", "pev2", "pev3", "pageURLRest"], a.c = a.z.concat(["purchaseID", "variableProvider", "channel", "server", "pageType", "transactionID", "campaign", "state", "zip", "events", "events2", "products", "tnt"]), a.Q = ["timestamp", "charSet", "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "contextData", "lightProfileID", "lightStoreForSeconds", "lightIncrementBy"], a.H = a.Q.slice(0), a.aa = ["account", "allAccounts", "debugTracking", "visitor", "trackOffline", "offlineLimit", "offlineThrottleDelay", "offlineFilename", "usePlugins", "doPlugins", "configURL", "visitorSampling", "s.visitorSamplingGroup", "linkObject", "linkURL", "linkName", "linkType", "trackDownloadLinks", "trackExternalLinks", "trackClickMap", "trackInlineStats", "linkLeaveQueryString", "linkTrackVars", "linkTrackEvents", "linkDownloadFileTypes", "linkExternalFilters", "linkInternalFilters", "useForcedLinkTracking", "forcedLinkTrackingTimeout", "trackingServerSecure", "ssl", "abort", "mobile", "dc", "lightTrackVars", "maxDelay"], d = 0; d <= 75; d++) a.c.push("prop" + d), a.H.push("prop" + d), a.c.push("eVar" + d), a.H.push("eVar" + d), d < 6 && a.c.push("hier" + d), d < 4 && a.c.push("list" + d);
    d = ["resolution", "colorDepth", "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth", "browserHeight", "connectionType", "homepage", "plugins"], a.c = a.c.concat(d), a.z = a.z.concat(d), a.ssl = b.location.protocol.toLowerCase().indexOf("https") >= 0, a.charSet = "UTF-8", a.contextData = {}, a.offlineThrottleDelay = 0, a.offlineFilename = "AppMeasurement.offline", a.ma = 0, a.P = 0, a.G = 0, a.la = 0, a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", a.w = b, a.d = b.document;
    try {
        a.Pa = "Microsoft Internet Explorer" == navigator.appName
    } catch (a) {}
    a.L = function () {
        a.M && (b.clearTimeout(a.M), a.M = c), a.i && a.B && a.i.dispatchEvent(a.B), a.p && ("function" == typeof a.p ? a.p() : a.i && a.i.href && (a.d.location = a.i.href)), a.i = a.B = a.p = 0
    }, a.oa = function () {
        a.b = a.d.body, a.b ? (a.o = function (c) {
            var d, e, f, g, h;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c.Wa)) {
                if (a.ba) {
                    if (!a.useForcedLinkTracking) return a.b.removeEventListener("click", a.o, !0), void(a.ba = a.useForcedLinkTracking = 0);
                    a.b.removeEventListener("click", a.o, !1)
                } else a.useForcedLinkTracking = 0;
                a.j = c.srcElement ? c.srcElement : c.target;
                try {
                    if (a.j && (a.j.tagName || a.j.parentElement || a.j.parentNode) && (f = a.ha(), a.track(), f < a.ha() && a.useForcedLinkTracking && c.target)) {
                        for (g = c.target; g && g != a.b && "A" != g.tagName.toUpperCase() && "AREA" != g.tagName.toUpperCase();) g = g.parentNode;
                        if (g && (h = g.href, a.ja(h) || (h = 0), e = g.target, c.target.dispatchEvent && h && (!e || "_self" == e || "_top" == e || "_parent" == e || b.name && e == b.name))) {
                            try {
                                d = a.d.createEvent("MouseEvents")
                            } catch (a) {
                                d = new b.MouseEvent
                            }
                            if (d) {
                                try {
                                    d.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                } catch (a) {
                                    d = 0
                                }
                                d && (d.Wa = 1, c.stopPropagation(), c.Za && c.Za(), c.preventDefault(), a.i = c.target, a.B = d)
                            }
                        }
                    }
                } catch (a) {}
                a.j = 0
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.o) : a.b && a.b.addEventListener && (navigator && (navigator.userAgent.indexOf("WebKit") >= 0 && a.d.createEvent || navigator.userAgent.indexOf("Firefox/2") >= 0 && b.MouseEvent) && (a.ba = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.o, !0)), a.b.addEventListener("click", a.o, !1))) : setTimeout(a.oa, 30)
    }, a.oa()
}

function s_gi(a) {
    var b, c, d, e, f = window.s_c_il,
        g = a.split(","),
        h = 0;
    if (f)
        for (c = 0; !h && c < f.length;) {
            if (b = f[c], "s_c" == b._c && b.account)
                if (b.account == a) h = 1;
                else
                    for (b.allAccounts || (b.allAccounts = b.account.split(",")), d = 0; d < g.length; d++)
                        for (e = 0; e < b.allAccounts.length; e++) g[d] == b.allAccounts[e] && (h = 1);
            c++
        }
    return h || (b = new AppMeasurement), b.setAccount(a), b
}

function s_pgicq() {
    var a, b, c, d = window,
        e = d.s_giq;
    if (e)
        for (a = 0; a < e.length; a++) b = e[a], c = s_gi(b.oun), c.setAccount(b.un), c.setTagContainer(b.tagContainerName);
    d.s_giq = 0
}
var s_omni = s_omni || {},
    inHeadTS = (new Date).getTime();
try {
    var arrHostTest = location.host.match(/(bodybuilding.com|bodybuilders.com|teenbodybuilding.com|wheycheap.com)$/i);
    if (void 0 === window.s_account) var s_account = "bbprod";
    window.s_acct = "bbprod" === s_account && arrHostTest ? s_account : "bbprod" !== s_account ? s_account : arrHostTest ? "bbprod" : "bbexttrfc"
} catch (a) {
    window.s_acct = "bbprod"
}
var s = s_gi(s_acct);
if (!window.topDivIDArray) var topDivIDArray = ["bbrotator1View", "bgConMobile", "MobileStorePromotionalBanner", "mobile-overlay-frame", "mobile-viewport", "mobile-left-frame", "mobile-central-frame", "mobile-right-frame", "mobile-main-header", "mobile-content", "fb-root", "footer", "mobile-content", "new-feature-bar", "header__promo-bar", "banner", "top-bar", "Wr__app", "header__search", ".Wr__body", "breadcrumbs", "content-area", "left-sidebar", "main", "bgCon", "mainCon", "CartRecommendedProducts", "right-sidebar", "header__fullspan--top", "header__site-nav--desktop"];
Object.keys(s_omni).forEach(function (a) {
    a.toLowerCase().match(/^evar.+/) && (s[a] = s_omni[a])
}), s.charSet = "UTF-8", s.currencyCode = "USD", s.trackDownloadLinks = !0, s.trackExternalLinks = !0, s.trackInlineStats = !0, s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,jpg", s.linkInternalFilters = "javascript:,bodybuilding,bodybuilding.com,teenbodybuilding.com,bodybuilders.com,prod-store,wheycheap.com", s.linkLeaveQueryString = !1, s.linkTrackVars = "None", s.linkTrackEvents = "None", s.eVar14 = s_omni.VerTime = "11-09-2016 13:45", s.visitorNamespace = "bodybuildingcom", s.trackingServerSecure = "s.bodybuilding.com", s.usePlugins = !0, s.setupPlugins = setupPlugins, s.getLocalTimePart = function () {
    var a, b, c, d, e, f;
    return a = new Date, b = a.getDate(), c = a.getDay() + 1, d = a.getHours(), e = a.getMinutes(), f = e > 29 ? "30" : "00", b + "|" + c + "|" + d + "|" + f
};
var s_getPathFromURL = function (a) {
    var b = [];
    for (window.u = location.href.toLowerCase(); - 1 != window.u.indexOf("\\");) window.u = window.u.replace("\\", "/");
    window.u.indexOf("://") > -1 && (window.u = window.u.substring(u.indexOf("://") + 3)), window.u.indexOf("www.") > -1 && (window.u = window.u.substring(u.indexOf("www.") + 4, u.length));
    for (var c = 0; window.u.indexOf("/") > -1;) "/" == window.u.charAt(0) ? window.u = window.u.substr(1) : (b[c] = window.u.substr(0, window.u.indexOf("/")), window.u = window.u.substr(window.u.indexOf("/") + 1, window.u.length - window.u.indexOf("/") + 1), c++);
    return null != b[a] ? b[a].toLowerCase() : ""
};
s.eliminateDuplicates = function (a, b) {
        var c, d, e = "",
            f = [],
            g = [],
            h = {};
        for (f = a.split(b), d = f.length, c = 0; c < d; c++) h[f[c]] = 0;
        for (c in h) g.push(c);
        return e = g.toString(), e = e.replace(/\,/g, b)
    }, s.getBreadCrumb = function () {
        var a, b;
        try {
            if ("undefined" == typeof jQuery) b = document.getElementById("crumb-source"), b || (b = document.getElementById("bread-crumbs")), b || (b = document.getElementById("breadcrumb")), b || (b = document.getElementById("pagetitle")), b || (b = document.getElementById("breadcrumbs"));
            else {
                if (b = jQuery(".crumb-source")[0], b || (b = jQuery(".bread-crumbs")[0]), b || (b = jQuery(".breadcrumb")[0]), !b) {
                    var c = jQuery("#breadcrumbs a");
                    if (c.length > 0 && c[0].nodeName && "A" === c[0].nodeName) {
                        var d = document.createElement("ul");
                        for (i = 0; i < c.length; i++) {
                            var e = document.createElement("li");
                            e.innerHTML += c[i].innerHTML ? c[i].innerHTML + "<p> � </p>" : "", d.appendChild(e)
                        }
                        var e = document.createElement("li");
                        if ("atg:cart:view" === s_omni.pageName || "atg:cart:new cart" === s_omni.pageName || "atg:cart:add item" === s_omni.pageName || "atg:checkout:login" === s_omni.pageName || "atg:checkout:payment" === s_omni.pageName || "atg:checkout:confirmation" === s_omni.pageName) e.innerHTML += "Cart <p> </p>";
                        else {
                            var f = jQuery(".bb-crumb__self");
                            f.length > 0 && (e.innerHTML += f[0].innerHTML ? f[0].innerHTML + "<p> � </p>" : "")
                        }
                        d.appendChild(e), b = d
                    }
                }
                if (!b && "forum" == s.channel) {
                    var d = document.createElement("ul");
                    if (document.location.href.toString().indexOf("forum.bodybuilding.com/search.php") < 0) {
                        if (s.channel) {
                            var e = document.createElement("li");
                            e.innerText = s.channel, d.appendChild(e)
                        }
                        if (s.eVar36) {
                            var e = document.createElement("li");
                            e.innerText = " � " + s.eVar36, d.appendChild(e)
                        }
                        if (s.eVar37) {
                            var e = document.createElement("li");
                            e.innerText = " � " + s.eVar37, d.appendChild(e)
                        }
                        if (s.eVar38) {
                            var e = document.createElement("li");
                            e.innerText = " � " + s.eVar38, d.appendChild(e)
                        }
                        if (s.eVar39) {
                            var e = document.createElement("li");
                            e.innerText = " � " + s.eVar39, d.appendChild(e)
                        }
                    } else {
                        var e = document.createElement("li");
                        e.innerText = "Search � Search Results", d.appendChild(e)
                    }
                    b = d
                }
            }
            if (b && (b.innerText || b.textContent)) s && s.eVar55 && s.eVar55.indexOf("Ask:ask") > 0 ? (a = s_omni.pageName = s.eVar55, s.channel = "help") : (b = document.all ? b.innerText : b.textContent, a = b, a = a.replace(/:/gi, "-"), a = a.replace(/\f|\n|\r|\t|\v|\u2028|\u2029/gi, ""), a = a.replace(/^\s+|\s+$/gi, ""), a = a.replace(/�/gi, ":"), a = a.replace(/\u00bb/gi, ":"), a = a.replace(/  /gi, ""), a = a.replace(/ :/gi, ":"), a = a.replace(/: /gi, ":"), a = a.replace(/main:/gi, ""), a = a.replace(/home:/gi, ""), ":" === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), "Main" == a && "http://my.bodybuilding.com/" == document.location.href.toString() ? a = "Bodyspace:Main" : "Home" == a && document.location.href.toString().indexOf("/my.bodybuilding.com/login.php") > 0 && (a = "Bodyspace:Main"));
            else if ("http://www.bodybuilding.com/store/" == document.location.href.toString() || "http://preview-store.body.local/store/" == document.location.href.toString()) a = "Store:home";
            else if (document.location.href.toString().indexOf("search3.bodybuilding.com") > 0) {
                var g = s.Util.getQueryParam("site");
                a = "" == g ? "Search:site" : "Search:" + s.Util.getQueryParam("site")
            } else s_omni.breadcrumb ? a = s_omni.breadcrumb : s_omni.eVar55 ? (a = s_omni.eVar55, "atg:search results" == a && (a = "search:store"), a = a.replace(/atg:/gi, "store:")) : s.eVar55 ? a = s.eVar55 : s_omni.pageName ? (a = s_omni.pageName, a = a.replace(/atg:/gi, "Store:")) : a = ""
        } catch (b) {
            a = "BreadcrumbError:" + b.message
        }
        return a
    }, window.BB = window.BB || {}, window.BB.Util = BB.Util || {}, s.instantiateCookieAndUUID = function () {
        BB.Util.cookie = function () {
                var a = function (a) {
                        try {
                            if (void 0 === a || "string" != typeof a) throw "You must define a name as a string when searching for a cookie"
                        } catch (a) {
                            return BB.Core.Log.debug(a), null
                        }
                        var b, c, d, e = document.cookie.split(";"),
                            f = e.length,
                            g = {};
                        for (b = 0; f > b; b++) c = e[b].split("="), (d = c[0].trim()) === a && (g.name = d, g.value = c[1].trim());
                        return g
                    },
                    b = function (b) {
                        b = b || {};
                        try {
                            if (void 0 === b.name || void 0 === b.value) throw "You must define an object when setting a cookie with at least a name and value parameter"
                        } catch (a) {
                            return BB.Core.Log.debug(a), null
                        }
                        var c = new Date,
                            d = void 0 !== b.expires ? c.setTime(c.getTime()) + 24 * parseFloat(b.expires) * 60 * 60 * 1e3 : "",
                            e = void 0 !== b.expires ? "; expires=" + new Date(d).toGMTString() : "",
                            f = void 0 !== b.path ? "; path=" + b.path : "",
                            g = void 0 !== b.domain ? "; domain=" + b.domain : "",
                            h = void 0 !== b.secure ? "; secure=" + b.secure : "",
                            i = b.name + "=" + b.value,
                            j = e + f + g + h + ";",
                            k = !1 !== b.overwrite,
                            l = a(b.name);
                        return null === l ? (document.cookie = i + j, i + j) : !0 === k ? (document.cookie = i + j, i + j) : l
                    },
                    c = function (a) {
                        try {
                            if (void 0 === a || "string" != typeof a) throw "You must define a name as a string when removing a cookie"
                        } catch (a) {
                            return BB.Core.Log.debug(a), null
                        }
                        return b({
                            name: a,
                            value: "",
                            expires: -1
                        })
                    };
                return {
                    set: function (a) {
                        return b(a)
                    },
                    get: function (b) {
                        return a(b)
                    },
                    remove: function (a) {
                        return c(a)
                    }
                }
            }(),
            function () {
                var a, b, c = BB.Util.cookie;
                try {
                    a = function () {
                        var a, b, c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                            d = c.split(""),
                            e = [],
                            f = 0;
                        for (b = 0; 36 > b; b++) 8 === b || 13 === b || 18 === b || 23 === b ? e[b] = "-" : 14 === b ? e[b] = "4" : (2 >= f && (f = 33554432 + 16777216 * Math.random() | 0), a = 15 & f, f >>= 4, e[b] = d[19 === b ? 3 & a | 8 : a]);
                        return e.join("")
                    }, b = void 0 === c.get("m").value || "" === c.get("m").value ? a() : c.get("m").value, (void 0 === c.get("m").value || "" === c.get("m").value) && c.set({
                        name: "m",
                        value: b,
                        expires: "1825",
                        domain: "bodybuilding.com",
                        path: "/"
                    }), BB.Util.uuid = BB.Util.cookieMonster = function () {
                        return b
                    }
                } catch (a) {
                    BB.Log.debug(a.message)
                }
            }()
    }, s.getUUID = function () {
        var a;
        try {
            s.eVar59 ? s.eVar59.indexOf("BB.Util.uuid() failed:") < 0 && (window.BB = window.BB || {}, window.BB.Util = window.BB.Util || {}, window.BB.Util.cookie || s.instantiateCookieAndUUID(), a = window.BB.Util.uuid()) : (window.BB.Util.cookie || s.instantiateCookieAndUUID(), a = window.BB.Util.uuid())
        } catch (a) {
            s.eVar59 = "BB.Util.uuid() failed:" + a.message
        }
        return a
    }, s.internalTextH1 = function (a) {
        var b, c;
        try {
            c || (c = jQuery(a)[0]), c && c.id && "header__logo" === c.id && (c = jQuery(a)[1]), c && (c.innerText || c.textContent) && (b = document.all ? c.innerText : c.textContent, b = b.replace(/\f|\n|\r|\t/gi, ""), b = b.replace(/  /gi, " "))
        } catch (a) {
            b = "H1error:" + a.message
        }
        return b
    }, s.ObjSize = function (a) {
        var b, c = 0;
        for (b in a) a.hasOwnProperty(b) && c++;
        return c
    }, s.objectToString = function (a) {
        return function (a) {
            var b, c = [];
            for (var d in a) a.hasOwnProperty(d) && (b = a[d], c[c.length] = b && "object" == typeof b ? d + ",{" + arguments.callee(b).join(":") + "}" : "string" == typeof b ? [d + ',"' + b.toString() + '"'] : [d + "," + b.toString()]);
            return c
        }(a).join(":")
    }, s.bbSetOmniPN = function (a) {
        if (void 0 === s_omni || !s_omni.pageName) {
            var b = [];
            if (a = a.toLowerCase(), a = a.replace(/^:+|:+$/i, ""), a = a.replace(/\//, "-"), b = a.split(":"), s.channel = b[0], "bodyspace" === b[0]) b[1] || (b[1] = "landing"), s.pageName = b.join(":"), s.pageName = s.pageName.replace(/:friends &amp; groups/gi, ":friends & groups"), s.hier1 = b.join("/"), s.eVar1 = b[0] + ":" + b[1];
            else {
                var c = s_getHostFromURL(1).toLowerCase();
                s.pageName = "bodyspace:other:" + c, s.channel = "bodyspace", s.eVar1 = "bodyspace:other", s.hier1 = "bodyspace/other"
            }
        }
    }, s.bbSetOmniVars = function () {
        if (document.location.href.toString().indexOf(".bodybuilding.com/store/") < 0 && document.location.href.toString().indexOf(".body.local/store/") < 0) {
            var a = document.location.href.toString();
            if (a.indexOf("bodyspace.bodybuilding.com/community/current-supplements/") > 0 && (s_omni.pageName = "bodyspace:member profile:current-supplements"), s_omni.pageName && !s_omni.inTagPn) {
                var b = [];
                if (s_omni.hier1 = "", s_omni.pageName = s_omni.pageName.toLowerCase(), s_omni.pageName = s_omni.pageName.replace(/^:+|:+$/i, ""), b = s_omni.pageName.split(":"), "blog" === b[0] ? (b[2] || (b[2] = "root"), s_omni.hier1 = b[0] + ":" + b[1] + ":" + b[2]) : s_omni.hier1 = s_omni.pageName, s_omni.hier1 = s_omni.hier1.replace(/\//, "-"), b[0].indexOf("s bodyspace") > 0) {
                    if (a.indexOf("reviews.bodybuilding.com/supplement-reviews/") > 0) s.channel = "reviews", s_omni.pageName = "bodyspace:member profile:reviews";
                    else if (a.indexOf("reviews.bodybuilding.com/my-reviews") > 0) s.channel = "reviews", s_omni.pageName = "bodyspace:dashboard:manage profile:reviews";
                    else if (a.indexOf("/more.php?section") > 0) {
                        var c = s.Util.getQueryParam("section");
                        if (s.channel = "bodyspace", "progress" === c) {
                            var d = s.Util.getQueryParam("m") ? s.Util.getQueryParam("m") : "";
                            s_omni.pageName = "wbfh" === d || "wbfh#wbfh" === d ? "bodyspace:member profile:track:weight and body fat history" : "mh" === d || "mh#mh" === d ? "bodyspace:member profile:track:measurement history" : "seh" === d || "seh#seh" === d ? "bodyspace:member profile:track:strength exercise history" : "bodyspace:member profile:track:progress"
                        } else "videos" === c ? s_omni.pageName = "bodyspace:member profile:photos and videos:videos" : "commentsreceived" === c ? (s_omni.pageName = "bodyspace:member profile:comments:comments received", s_omni.breadcrumb = "Member Profile:Comments: Comments Received") : "favorites" === c ? (s_omni.pageName = "bodyspace:member profile:favorites", s_omni.breadcrumb = "Member Profile:Favorites") : "commentsleft" === c ? (s_omni.pageName = "bodyspace:member profile:comments:comments left", s_omni.breadcrumb = "Member Profile:Comments:Comments Left") : "friends" === c ? (s_omni.pageName = "bodyspace:member profile:friends", s_omni.breadcrumb = "Member Profile:Friends") : "bodyanswers" === c ? (s_omni.pageName = "bodyspace:member profile:bodyanswers", s_omni.breadcrumb = "Member Profile:Bodyanswers") : s_omni.pageName = "supplement_review" === c ? "bodyspace:member profile:reviews:supplement reviews" : "bodyspace:member overview:unknown:" & s_omni.selector ? s_omni.selector : "unknown"
                    }
                } else if (a.indexOf("reviews.bodybuilding.com/create-review") > 0) s_omni.channel = "reviews", s_omni.pageName = "bodyspace:member profile:reviews:create";
                else if (b[0].indexOf("s dashboard") > 0) s_omni.channel = "my", a.indexOf("my.bodybuilding.com/photos/view/type/gallery") > 0 ? s_omni.pageName = "bodyspace:dashboard:manage profile:photos:gallery photos:my photo gallery" : a.indexOf("my.bodybuilding.com/photos/view/type/profile") > 0 ? s_omni.pageName = "bodyspace:dashboard:manage profile:photos:profile photos:my profile pictures" : a.indexOf("my.bodybuilding.com/gyms") > 0 ? s_omni.pageName = "bodyspace:dashboard:manage profile:about me:gyms" : a.indexOf("my.bodybuilding.com") > 0 ? s_omni.pageName = "bodyspace:dashboard:manage profile:unknown" : (s_omni.channel = "bodyspace", s_omni.pageName = "bodyspace:member profile:photos:dashboard");
                else if (b[0].indexOf("bodyspace -") > -1) s.channel = "bodyspace", a.indexOf("bodyspace.bodybuilding.com/photos/view-category/") > 0 ? s_omni.pageName = "bodyspace:community:photos:view category" : a.indexOf("bodyspace.bodybuilding.com/photos/?page=category") > 0 ? (s_omni.pageName = "bodyspace:community:photos:view category", s_omni.breadcrumb = "bodyspace:community:photos:view category") : a.indexOf("bodyspace.bodybuilding.com/photos/view-user-photos/") > 0 ? b[0].indexOf(" photo gallery") > 0 ? s_omni.pageName = "bodyspace:member profile:photos:gallery photos" : s_omni.pageName = "bodyspace:member profile:photos:user photos" : a.indexOf("bodyspace.bodybuilding.com/photos/photo-comment-permalink/") > 0 ? s_omni.pageName = "bodyspace:dashboard:manage profile:photos:gallery photos" : a.indexOf("bodyspace.bodybuilding.com/photos/view-latest/") > 0 ? s_omni.pageName = "bodyspace:community:photos:latest pictures" : a.indexOf("bodyspace.bodybuilding.com/photos/") > 0 ? s_omni.pageName = "bodyspace:community:photos" : s_omni.pageName = "bodyspace:unknown";
                else if (b[0].indexOf("bodybuilding.com -") > -1) {
                    if (a.indexOf("/profilecp.php") > 0) {
                        s.channel = "bodyspace";
                        var e = s.Util.getQueryParam("module");
                        s_omni.pageName = "bodyspace:member profile:profilecp:" + e, s_omni.breadcrumb = "Dashboard:Manage Profile:" + e
                    }
                } else b[0].indexOf("todo") > -1 && a.indexOf("contest.bodybuilding.com/gallery/") > 0 ? (s.channel = "contest", s_omni.pageName = "contest:photos:gallery photos") : b[0].indexOf("forum") > -1 && b[1].indexOf("thread") > -1 && a.indexOf("forum.bodybuilding.com/showthread.php") > 0 ? (s.channel = "forum", s_omni.pageName = "forum: thread") : !s_omni.channel && !s_omni.pageName && a.indexOf("forum.bodybuilding.com/") > 0 ? (s_omni.channel = "forum", s_omni.pageName = "forum: thread: unknown", s_omni.breadcrumb = "Forum:More General Categories:Misc.:Unknown", s.pageURL || (s.pageURL = a)) : b[0].indexOf("todo") > -1 && a.indexOf("newsletter.bodybuilding.com/newsletter/signup") > 0 ? (s.channel = "newsletter", s_omni.pageName = "newsletter:signup") : a.indexOf("bodyspace.bodybuilding.com/photos/view-user-photo/") > 0 ? (s_omni.channel = "bodyspace", s_omni.pageName = "bodyspace:member profile:photos and videos:gallery photos") : a.indexOf(".bodybuilding.com/bbsearch/") > 0 ? (s_omni.channel = "search", s_omni.pageName = "search:results") : "home" === s_omni.channel ? s.channel = s_omni.channel : s.channel = b[0];
                s.pageName = s_omni.pageName, s_omni.channel = s.channel
            } else s_omni.pageName && s_omni.inTagPn && (a.indexOf("bodybuilding.com/fun/bbmaintrain.htm") > 0 && (s.channel = "fun", s_omni.pageName = "training: home", s_omni.breadcrumb = "Training:Home"), s_omni.pageName = s_omni.pageName.toLowerCase(), s.pageName = s_omni.pageName, s.channel = s_omni.channel, s_omni.pageCat && (s.eVar1 = s_omni.pageCat));
            s_omni.channel && (s.channel = s_omni.channel.toLowerCase()), s_omni.events && (s.events = s_omni.events), s_omni.server && (s.server = s_omni.server.toLowerCase()), s_omni.hier1 && !s.hier1 && (s.hier1 = s_omni.hier1.toLowerCase()), s_omni.hier2 && !s.hier2 && (s.hier2 = s_omni.hier2.toLowerCase()), s_omni.pageType && "errorPage" === s_omni.pageType && (s.pageType = s_omni.pageType), s_omni.pageGroup && (s.eVar2 = s_omni.pageGroup.toLowerCase()), s_omni.products && (s.products = s_omni.products), (s_omni.versionID || s_omni.versionId) && (s.eVar28 = s_omni.versionID ? s_omni.versionID : s_omni.versionId), s_omni.webcastName && (s.eVar31 = s_omni.webcastName.toLowerCase()), s_omni.videoName && (s.eVar32 = s_omni.videoName.toLowerCase()), s_omni.articleTitle && (s.eVar33 = s_omni.inTagPn ? s_omni.articleTitle : s_omni.articleTitle.toLowerCase()), s_omni.contentTopCat && (s.eVar35 = s_omni.inTagPn ? s_omni.contentTopCat : s_omni.contentTopCat.toLowerCase()), s_omni.forumTitle && (s.eVar36 = s_omni.forumTitle), s_omni.forumCat && (s.eVar37 = s_omni.forumCat), s_omni.forumSubCat && (s.eVar38 = s_omni.forumSubCat), s_omni.forumThread && (s.eVar39 = s_omni.forumThread), s_omni.forumSkin && (s.eVar40 = s_omni.forumSkin), s_omni.memberStatus && (s.eVar41 = s_omni.memberStatus), s_omni.memberName && (s.eVar42 = s_omni.memberName), s_omni.memberGoal && (s.eVar43 = s_omni.memberGoal), s_omni.thirdPartyName && (s.eVar44 = s_omni.thirdPartyName), s_omni.thirdPartyGoal && (s.eVar45 = s_omni.thirdPartyGoal), s_omni.profileUpdateAction && (s.eVar46 = s_omni.profileUpdateAction), s_omni.profileUpdateSection && (s.eVar47 = s_omni.profileUpdateSection), s_omni.bodyGroupName && (s.eVar48 = s_omni.bodyGroupName), s_omni.blogPostCategory && (s.eVar49 = s_omni.blogPostCategory), s_omni.blogPostTitle && (s.eVar50 = s_omni.blogPostTitle), s_omni.isMobileView && (s_omni.eVar64 = s_omni.isMobileView), s_omni.eVar64 && (s.eVar64 = s_omni.eVar64), s_omni.selector && (s.eVar65 = s_omni.selector)
        } else {
            var f = {
                shopPathCat: "",
                fileName: "",
                redURL: "",
                path: "",
                query: "",
                searchTerm: "",
                helpPage: "",
                currEvar14: "",
                hier1: "",
                arrTmpPageName: [],
                boolFileNameSwitch: !1
            };
            if (s_omni.pageName = s_omni.pageName ? s_omni.pageName : "atg:default:page name", s_omni.pageName = s_omni.pageName.replace(/:constructor:toString.*/gi, ""), s_omni.pageName = s_omni.pageName.replace(/&#.*;/, ""), s_omni.pageName = s_omni.pageName.replace(/:\/:/, ":"), s_omni.pageName = s_omni.pageName.toLowerCase(), s_omni.pageGroup = s_omni.pageGroup.toLowerCase(), s_omni.lcb && (s_omni.lcb = s_omni.lcb.toLowerCase()), s_omni.spc && (s_omni.spc = s_omni.spc.toLowerCase()), f.path = location.pathname.toLowerCase(), f.query = location.search.toLowerCase(), f.fileName = f.path.substring(f.path.lastIndexOf("/") + 1, f.path.lastIndexOf(".")), f.redURL = f.query.substring(f.query.lastIndexOf("/") + 1, f.query.lastIndexOf(".")), f.shopPathCat = s_omni.spc ? s_omni.spc.replace(/category:/, "") : "", (f.fileName === f.path || "index" === s_omni.pageGroup && "index" === f.fileName) && (f.fileName = "index:home"), f.redURL && f.redURL.indexOf("?mcid=") < 0 && (f.fileName = f.fileName + ":" + f.redURL), f.fileName = f.fileName.replace(/seourl:/, ""), !s_omni.hasRun) {
                switch (s_omni.pageGroup) {
                    case "aboutuspage":
                        -1 === f.fileName.indexOf("404") ? (s_omni.pageName = s_omni.pageName.replace(/content:cont_/gi, "about us:"), s_omni.pageGroup = "about us") : f.boolFileNameSwitch = !0;
                        break;
                    case "accountpage":
                    case "accountPage":
                        "index:home" === f.fileName && "/store/account/" === f.path && (f.path = "atg:account:root"), s_omni.pageName = f.path.replace(/\/store\/account\//gi, "atg:account:"), s_omni.pageGroup = "account page", f.fileName.indexOf("order") > -1 && (f.boolFileNameSwitch = !0);
                        break;
                    case "cart page":
                        f.prevEvar14 = s.c_r("gpv_v14");
                        break;
                    case "categorypage":
                    case "category page":
                    case "top level page":
                        f.shopPathCat === s_omni.lcb ? (s_omni.pageName = "atg:" + f.shopPathCat, s_omni.pageGroup = "category page") : s_omni.lcb.indexOf("brand_") > -1 || s_omni.lcb.indexOf("ingredient_") > -1 ? (s_omni.pageName = "atg:" + s_omni.lcb, s_omni.pageName = s_omni.pageName.replace(/brand_/gi, "brand:"), s_omni.pageName = s_omni.pageName.replace(/ingredient_/gi, "ingredient:")) : "rootcategory" === s_omni.lcb ? s_omni.pageName = "atg:index" : s_omni.pageName = "atg:categories and goals:" + (s_omni.lcb.match(/(cat)([0-9]{3,7})/) ? s.internalTextH1("H1") : s_omni.lcb);
                        break;
                    case "checkout page":
                    case "checkout":
                        "atg:content:cont_free_gifts" === s_omni.pageName ? (s_omni.pageName = "atg:sales and specials:free gifts", s_omni.pageGroup = "sales and specials") : "billing" === f.fileName && (s_omni.events = "event3,scCheckout");
                        break;
                    case "commercepage page":
                    case "default":
                        f.boolFileNameSwitch = !0;
                        break;
                    case "fasp":
                        s_omni.pageName = "find-supplement-plan" === f.fileName ? "atg:find a supplement plan:root" : "atg:find a supplement plan:" + f.fileName.replace(/\/store\/guides\//gi, ""), s_omni.pageName = s_omni.pageName.replace(/\//, ""), s_omni.pageGroup = "find a supplement plan";
                        break;
                    case "help page":
                    case "helppage":
                        "atg:content:help_main" === s_omni.pageName ? s_omni.pageName = "atg:help:main" : f.path.indexOf("/help") > -1 ? s_omni.pageName = "atg:help:" + f.fileName : "content" === f.fileName ? s_omni.pageName = "atg:help:content id-" + s.Util.getQueryParam("contentid") : s_omni.pageName = "atg:help:default", s_omni.pageGroup = "help page";
                        break;
                    case "index":
                        f.boolFileNameSwitch = !0;
                        break;
                    case "login page":
                        s_omni.products = "";
                        break;
                    case "product page":
                        break;
                    case "recommendedproducts":
                        s_omni.pageName = "atg:recommended products";
                        break;
                    case "salespecials":
                        s_omni.pageName = "atg:sales and specials:" + f.fileName, s_omni.pageGroup = "sales and specials";
                        break;
                    case "searchresults":
                        f.boolFileNameSwitch = !0;
                        break;
                    case "wheycheap":
                        s_omni.pageName = "wheycheap:wheycheap";
                        break;
                    default:
                        f.boolFileNameSwitch = !0
                }
                if (f.boolFileNameSwitch) switch (f.fileName) {
                    case "skip_pagename_switch":
                        break;
                    case "billing":
                        s_omni.pageName = "atg:checkout:billing", s_omni.pageGroup = "checkout page";
                        break;
                    case "type":
                        s_omni.pageName = "atg:category:index";
                        break;
                    case "giftcard":
                    case "gift-certificate":
                        s_omni.pageName = "atg:gift-certificate", s_omni.pageGroup = "commerce page", s_omni.products = "";
                        break;
                    case "cart":
                    case "cart-container":
                    case "cart-items":
                        break;
                    case "freesamples":
                        s_omni.pageName = "atg:sales and specials:free samples", s_omni.pageGroup = "sales and specials";
                        break;
                    case "index:home":
                        s_omni.pageName = "atg:index", s_omni.pageGroup = "index page";
                        break;
                    case "top50":
                        s_omni.pageName = "atg:top 50", s_omni.pageGroup = "top 50";
                        break;
                    case "receipt":
                        s_omni.pageName = "atg:checkout:confirmation", s_omni.pageGroup = "checkout page";
                        break;
                    case "orderstatus":
                        s_omni.pageName = "atg:account:order-entry", s_omni.products = "";
                        break;
                    case "order-status-legacy":
                        s_omni.pageName = "atg:account:order-status-legacy", s_omni.products = "";
                        break;
                    case "order-status":
                    case "order-detail":
                        s_omni.pageName = "atg:account:order-detail", s_omni.products = "";
                        break;
                    case "order-history":
                        s_omni.pageName = "atg:account:order-history", s_omni.products = "";
                        break;
                    case "product":
                        s_omni.pageName = "atg:default tag:product:" + s.Util.getQueryParam("productid"), s_omni.pageGroup = "commerce page", s_omni.product = "";
                        break;
                    case "404":
                    case "error-404":
                        s_omni.pageName = "atg:404 page", s_omni.pageGroup = "error page", s_omni.pageType = "errorPage";
                        break;
                    case "search-disc-results":
                        s_omni.pageName = "atg:discontinued product";
                        break;
                    case "search-results":
                        s_omni.pageName = "search:results", s_omni.channel = s.channel = "search";
                        break;
                    case "clearance":
                    case "specials":
                        s_omni.pageName = "atg:sales and specials:" + f.fileName, s_omni.pageGroup = "sales and specials";
                        break;
                    case "campaign":
                        s_omni.pageName = "atg:campaign:" + (s.Util.getQueryParam("CID") ? s.Util.getQueryParam("CID") : s.Util.getQueryParam("MCID") ? s.Util.getQueryParam("MCID") : "NoCIDorMCID");
                        break;
                    default:
                        (s_omni.pageName.indexOf(":default") > 0 || s_omni.pageName.indexOf(":results") < 0) && (s_omni.pageName = "atg:default tag:" + f.fileName, s_omni.pageName = "/" === f.fileName ? "atg:default tag:" + (f.path.match(/search-results\:\?/) ? "search-results:" : f.path.replace(/\//, "")) : "atg:default tag:" + f.fileName)
                }
            }
            s_omni.pageName && !s_omni.hasRun && (s_omni.pageName = s_omni.pageName.replace(/_/gi, " "), s_omni.pageName = s_omni.pageName.replace(/^:+|:+$/i, ""), s_omni.pageName = s_omni.pageName.replace(/:\s|\s:/g, ":"), s_omni.pageName = s_omni.pageName.replace(/.jsp/gi, ""), s_omni.pageName = s_omni.pageName.toLowerCase(), s_omni.pageName = s.eliminateDuplicates(s_omni.pageName, ":"), s.pageName = s_omni.pageName, f.hier1 = s_omni.pageName.replace(/\//g, "-"), s.hier1 = f.hier1.replace(/:/g, "/"), f.arrTmpPageName = s.pageName.split(":"), s.eVar1 = f.arrTmpPageName[0] + ":" + f.arrTmpPageName[1], s.channel = f.arrTmpPageName[0]), s_omni.products && ";;;;;" !== s_omni.products && (s.products = s_omni.products), s_omni.events || s_omni.hasRun || (s_omni.events = "event3"), s_omni.events && !s_omni.hasRun && ("billing" !== f.fileName && (s_omni.events = s_omni.events.replace(/,scCheckout/, "")), s_omni.events = s.apl(s_omni.events, "event3", ",", 1), s_omni.events = s_omni.events.replace("scClear", "scRemove"), s_omni.events = s.eliminateDuplicates(s_omni.events, ","), s_omni.events = s_omni.events.replace(/,$/g, ""), "atg:search results" === s_omni.pageName && document.location.href.toString().indexOf("mcid") > 0 && (s_omni.events = s.rli(s_omni.events, "event7")), s.events = s_omni.events), s_omni.hasRun || (s_omni.channel && (s.channel = s_omni.channel.toLowerCase()), s_omni.server && (s.server = s_omni.server.toLowerCase()), "errorPage" === s_omni.pageType && (s.pageType = s_omni.pageType), s_omni.memberStatus && !s_omni.hasRun && (s.eVar41 = s_omni.memberStatus.toLowerCase()), s_omni.memberName && !s_omni.hasRun && (s.eVar42 = s_omni.memberName.toLowerCase()), s_omni.memberGoal && !s_omni.hasRun && (s.eVar43 = s_omni.memberGoal.toLowerCase()), s_omni.machineID && (s.eVar59 = s_omni.machineID), s_omni.uVID && (s.eVar60 = s_omni.uVID), s_omni.segment && (s.eVar61 = s_omni.segment.toLowerCase()), s_omni.target && (s.eVar62 = s_omni.target.toLowerCase()), s_omni.scenario && (s.eVar63 = s_omni.scenario.toLowerCase()), s_omni.marker && (s.eVar64 = s_omni.marker.toLowerCase()), s_omni.pageID && (s.eVar67 = s_omni.pageID), s_omni.viewType && (s.contextData.viewtype = s_omni.viewType)), s_omni.hasRun = !0
        }
    }, s.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), s.getPercentPageViewed = new Function("", "var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}"), s.getPPVCalc = function (a) {
        function b() {
            var b = s_c_il[a],
                c = Math.max(Math.max(b.d.body.scrollHeight, b.d.documentElement.scrollHeight), Math.max(b.d.body.offsetHeight, b.d.documentElement.offsetHeight), Math.max(b.d.body.clientHeight, b.d.documentElement.clientHeight)),
                d = b.wd.innerHeight || b.d.documentElement.clientHeight || b.d.body.clientHeight,
                e = b.wd.pageYOffset || b.wd.document.documentElement.scrollTop || b.wd.document.body.scrollTop,
                f = e + d,
                g = Math.round(f / c * 100);
            g > 100 ? b.c_w("s_ppv", "") : g > b.c_r("s_ppv") && b.c_w("s_ppv", g)
        }

        function c() {
            clearTimeout(d), d = setTimeout(b, e)
        }
        var d, e = 800;
        return c.immediate = b, c
    }(s._in),
    function (a) {
        a.wd.addEventListener ? (a.wd.addEventListener("load", a.getPPVCalc.immediate, !1), a.wd.addEventListener("scroll", a.getPPVCalc, !1), a.wd.addEventListener("resize", a.getPPVCalc, !1)) : a.wd.attachEvent && (a.wd.attachEvent("onload", a.getPPVCalc.immediate), a.wd.attachEvent("onscroll", a.getPPVCalc), a.wd.attachEvent("onresize", a.getPPVCalc))
    }(s), s.getVisitNum = new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}"), s.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"), s.appendList = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i in a){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"), s.apl = new Function("l", "v", "d", "u", "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"), s.rli = function (a, b, c) {
        c = c || ",";
        for (var d = a.split(c), e = 0; e < d.length; e++)
            if (d[e] == b) return d.splice(e, 1), d.join(c);
        return a
    }, s.getValOnce = new Function("v", "c", "e", "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), s.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), s.getNewRepeat = new Function("var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w('s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s.c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cval+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else return 'Repeat';"), s.getTimeParting = new Function("t", "z", "var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A=='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=parseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=new Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J.getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12){P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}"), window.s_getLoadTime = new Function("if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT");
var myt = s_getLoadTime();
AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq();
//# sourceMappingURL=s_code.min.js.map
