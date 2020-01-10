! function(e) {
    e.fn.menumaker = function(n) {
        var s = e(this),
            t = e.extend({
                title: "Menu",
                format: "dropdown",
                breakpoint: 768,
                sticky: !1
            }, n);
        return this.each(function() {
            if (s.find("li ul").parent().addClass("has-sub"), "select" != t.format) s.prepend('<div id="menu-button">' + t.title + "</div>"), e(this).find("#menu-button").on("click", function() {
                e(this).toggleClass("menu-opened");
                var n = e(this).next("ul");
                n.hasClass("open") ? n.hide().removeClass("open") : (n.show().addClass("open"), "dropdown" === t.format && n.find("ul").show())
            }), multiTg = function() {
                s.find(".has-sub").prepend('<span class="submenu-button"></span>'), s.find(".submenu-button").on("click", function() {
                    e(this).toggleClass("submenu-opened"), e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").hide() : e(this).siblings("ul").addClass("open").show()
                })
            }, "multitoggle" === t.format ? multiTg() : s.addClass("dropdown");
            else if ("select" === t.format) {
                s.append('<select style="width: 100%"/>').addClass("select-list");
                var n = s.find("select");
                n.append("<option>" + t.title + "</option>", {
                    selected: "selected",
                    value: ""
                }), s.find("a").each(function() {
                    console.log(e(this).parents("ul").length);
                    var s = e(this),
                        t = "";
                    for (i = 1; i < s.parents("ul").length; i++) t += "-";
                    n.append('<option value="' + e(this).attr("href") + '">' + t + s.text() + "</option")
                }), n.on("change", function() {
                    window.location = e(this).find("option:selected").val()
                })
            }
            return t.sticky === !0 && s.css("position", "fixed"), resizeFix = function() {
                e(window).width() > t.breakpoint && (s.find("ul").show(), s.removeClass("small-screen"), "select" === t.format && s.find("select").hide()), e(window).width() <= t.breakpoint && (s.find("ul").hide().removeClass("open"), s.addClass("small-screen"), "select" === t.format && s.find("select").show())
            }, resizeFix(), e(window).on("resize", resizeFix)
        })
    }
}(jQuery);

$("#cssmenu").menumaker({
    title: "Menu",
    breakpoint: 768,
    format: "multitoggle"
});