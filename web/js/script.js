!function(e,t,n,s,i){"use strict";var a=s.Configurator=function(){};a.prototype.init=function(){this.enable()},a.prototype.enable=function(){var e=t.getElementById("configuratorNext"),i=t.getElementById("navBar"),a=t.getElementById("configuratorSteps");e.addEventListener("click",function(t){t.preventDefault(),n("> li",a).addClass("is-hidden"),n("> li",a).next("li").removeClass("is-hidden").addClass("is-active"),n("li",i).eq(n("> li.is-active",a).index()).addClass("is-active"),s.helper.goToTarget("#configurator"),n("> li.is-active",a).index()==n(a).length&&n(e).removeClass("bg-navy").addClass("bg-gray--darker")})},s.configurator=new a}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e,t,n,s,i){"use strict";function a(e){return n(e).length>0}function o(e,t){t=t||0,n("html, body").animate({scrollTop:n(e).offset().top+t},{duration:1e3})}var c=function(){return{exist:a,goToTarget:o}};s.helper=new c}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e,t,n,s,i){"use strict";function a(){n(".js-niceSelect").removeClass("is-hidden").niceSelect()}n(t).ready(function(){s.helper.exist(".js-niceSelect")&&a(),s.helper.exist("#configurator")&&s.configurator.init()})}(window,document,jQuery,window.waterdreamer=window.waterdreamer||{}),function(e){e.fn.niceSelect=function(t){function n(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var n=t.next(),s=t.find("option"),i=t.find("option:selected");n.find(".current").html(i.data("display")||i.text()),s.each(function(t){var s=e(this),i=s.data("display");n.find("ul").append(e("<li></li>").attr("data-value",s.val()).attr("data-display",i||null).addClass("option"+(s.is(":selected")?" selected":"")+(s.is(":disabled")?" disabled":"")).html(s.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),s=e(this).next(".nice-select"),i=s.hasClass("open");s.length&&(s.remove(),n(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),n=e(this).next(".nice-select");n.length&&(n.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||n(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var n=e(this);e(".nice-select").not(n).removeClass("open"),n.toggleClass("open"),n.hasClass("open")?(n.find(".option"),n.find(".focus").removeClass("focus"),n.find(".selected").addClass("focus")):n.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var n=e(this),s=n.closest(".nice-select");s.find(".selected").removeClass("selected"),n.addClass("selected");var i=n.data("display")||n.text();s.find(".current").text(i),s.prev("select").val(n.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var n=e(this),s=e(n.find(".focus")||n.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return n.hasClass("open")?s.trigger("click"):n.trigger("click"),!1;if(40==t.keyCode){if(n.hasClass("open")){var i=s.nextAll(".option:not(.disabled)").first();i.length>0&&(n.find(".focus").removeClass("focus"),i.addClass("focus"))}else n.trigger("click");return!1}if(38==t.keyCode){if(n.hasClass("open")){var a=s.prevAll(".option:not(.disabled)").first();a.length>0&&(n.find(".focus").removeClass("focus"),a.addClass("focus"))}else n.trigger("click");return!1}if(27==t.keyCode)n.hasClass("open")&&n.trigger("click");else if(9==t.keyCode&&n.hasClass("open"))return!1});var s=document.createElement("a").style;return s.cssText="pointer-events:auto","auto"!==s.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);