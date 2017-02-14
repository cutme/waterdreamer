!function(e,t,i,n,s){"use strict";var a=n.Configurator=function(){};a.prototype.init=function(){this.enable()},a.prototype.enable=function(){var e=t.getElementById("configuratorNext"),s=t.getElementById("navBar"),a=t.getElementById("configuratorPrev"),o=t.getElementById("configuratorSteps"),l=(i("> li",o).length,0);e.addEventListener("click",function(t){t.preventDefault(),l<3&&(l++,i("li",s).eq(l-1).addClass("is-active--line").addClass("is-dot-inactive"),i("li",s).eq(l).addClass("is-active"),i("> li",o).addClass("is-hidden"),i("> li",o).eq(l).removeClass("is-hidden").addClass("is-active"),n.helper.goToTarget("#configurator")),l>0&&i(a).removeClass("is-inactive"),l===i("li",s).length-1&&i(e).addClass("is-inactive")}),a.addEventListener("click",function(t){t.preventDefault(),l>0&&(l--,i("li",s).eq(l).removeClass("is-active--line").removeClass("is-dot-inactive"),i("li",s).eq(l+1).removeClass("is-active"),i("> li",o).addClass("is-hidden"),i("> li",o).eq(l).removeClass("is-hidden").addClass("is-active"),i(e).removeClass("is-inactive"),n.helper.goToTarget("#configurator")),0===l&&i(a).addClass("is-inactive")})},n.configurator=new a}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e,t,i,n,s){"use strict";function a(e){return i(e).length>0}function o(e,t){t=t||0,i("html, body").animate({scrollTop:i(e).offset().top+t},{duration:1e3})}var l=function(){return{exist:a,goToTarget:o}};n.helper=new l}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e,t,i,n,s){"use strict";var a=n.Nav=function(){};a.prototype.init=function(){this.enable()},a.prototype.enable=function(){var n=t.getElementById("nav"),s=(i(".c-nav"),i("body")),a=i(".c-top");i(n).on("click",function(e){e.preventDefault(),i(this).toggleClass("is-active"),i(".c-nav").toggleClass("is-active"),i(s).toggleClass("no-scroll")}),i(e).on("scroll",function(t){var n=i(e).scrollTop();n>=25?a.addClass("is-fixed"):a.removeClass("is-fixed")})},n.nav=new a}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e,t,i,n,s){"use strict";function a(){i(".js-niceSelect").removeClass("is-hidden").niceSelect()}i(t).ready(function(){n.helper.exist(".js-niceSelect")&&a(),n.helper.exist("#configurator")&&n.configurator.init(),n.helper.exist("#nav")&&n.nav.init()})}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e){e.fn.niceSelect=function(t){function i(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var i=t.next(),n=t.find("option"),s=t.find("option:selected");i.find(".current").html(s.data("display")||s.text()),n.each(function(t){var n=e(this),s=n.data("display");i.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",s||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),s=n.hasClass("open");n.length&&(n.remove(),i(t),s&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),i=e(this).next(".nice-select");i.length&&(i.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||i(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var i=e(this);e(".nice-select").not(i).removeClass("open"),i.toggleClass("open"),i.hasClass("open")?(i.find(".option"),i.find(".focus").removeClass("focus"),i.find(".selected").addClass("focus")):i.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var i=e(this),n=i.closest(".nice-select");n.find(".selected").removeClass("selected"),i.addClass("selected");var s=i.data("display")||i.text();n.find(".current").text(s),n.prev("select").val(i.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var i=e(this),n=e(i.find(".focus")||i.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return i.hasClass("open")?n.trigger("click"):i.trigger("click"),!1;if(40==t.keyCode){if(i.hasClass("open")){var s=n.nextAll(".option:not(.disabled)").first();s.length>0&&(i.find(".focus").removeClass("focus"),s.addClass("focus"))}else i.trigger("click");return!1}if(38==t.keyCode){if(i.hasClass("open")){var a=n.prevAll(".option:not(.disabled)").first();a.length>0&&(i.find(".focus").removeClass("focus"),a.addClass("focus"))}else i.trigger("click");return!1}if(27==t.keyCode)i.hasClass("open")&&i.trigger("click");else if(9==t.keyCode&&i.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);