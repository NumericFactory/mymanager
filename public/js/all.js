/*!
 * jquery.niftymodals v1.3.1 (https://github.com/foxythemes/jquery-niftymodals)
 * Copyright 2016 Codrops <www.codrops.com> and Foxy Themes 
 * Licensed under Codrops license http://tympanus.net/codrops/licensing/ 
 */

!function(a){"use strict";var b={closeSelector:".md-close",contentSelector:".md-content",classAddAfterOpen:"md-show",classScrollbarMeasure:"md-scrollbar-measure",classModalOpen:"md-open",data:!1,buttons:!1,beforeOpen:!1,afterOpen:!1,beforeClose:!1,afterClose:!1};a.fn.niftyModal=function(c){var d,e,f,g={},h={},i=a("body"),j={removeModal:function(b){var c=a(b);c.removeClass(g.classAddAfterOpen),c.css({perspective:"1300px"}),i.removeClass(g.classModalOpen),j.resetScrollbar(),c.trigger("hide")},showModal:function(b){var c=a(b),d=a(g.closeSelector,b);return("function"!=typeof g.beforeOpen||g.beforeOpen(h)!==!1)&&(j.checkScrollbar(),j.setScrollbar(),c.addClass(g.classAddAfterOpen),i.addClass(g.classModalOpen),a(c).on("click",function(b){var d=a(g.contentSelector,c),e=a(g.closeSelector,c);if(!a(b.target).closest(d).length&&i.hasClass(g.classModalOpen)){if("function"==typeof g.beforeClose&&g.beforeClose(h,b)===!1)return!1;j.removeModal(c),e.off("click"),"function"==typeof g.afterClose&&g.afterClose(h,b)}}),"function"==typeof g.afterOpen&&g.afterOpen(h),setTimeout(function(){c.css({perspective:"none"})},500),d.on("click",function(c){var e=a(this);if(h.closeEl=d.get(0),"function"==typeof g.beforeClose&&g.beforeClose(h,c)===!1)return!1;if(g.buttons&&a.isArray(g.buttons)){var f=!0;if(a.each(g.buttons,function(a,b){e.hasClass(b.class)&&"function"==typeof b.callback&&(f=b.callback(e.get(0),h,c))}),f===!1&&void 0!==typeof f)return!1}j.removeModal(b),d.off("click"),"function"==typeof g.afterClose&&g.afterClose(h,c),c.stopPropagation()}),void c.trigger("show"))},measureScrollbar:function(){var a=document.createElement("div");a.className=g.classScrollbarMeasure,i.append(a);var b=a.offsetWidth-a.clientWidth;return i[0].removeChild(a),b},checkScrollbar:function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}d=document.body.clientWidth<a,e=j.measureScrollbar()},setScrollbar:function(){var a=parseInt(i.css("padding-right")||0,10);f=document.body.style.paddingRight||"",d&&i.css("padding-right",a+e)},resetScrollbar:function(){i.css("padding-right",f)}},k={init:function(c){return this.each(function(){g=a.extend({},b,c),h.modalEl=this,g.data!==!1&&(h.data=c.data),j.showModal(this)})},toggle:function(c){return this.each(function(){g=a.extend({},b,c);var d=a(this);d.hasClass(g.classAddAfterOpen)?j.removeModal(d):j.showModal(d)})},show:function(c){return g=a.extend({},b,c),this.each(function(){var b=a(this);j.showModal(b)})},hide:function(c){return g=a.extend({},b,c),this.each(function(){j.removeModal(a(this))})},setDefaults:function(c){b=a.extend({},b,c)},getDefaults:function(){return b}};return k[c]?k[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error('Method "'+c+'" does not exist in niftyModal plugin!'):k.init.apply(this,arguments)}}(jQuery),$(".md-trigger").on("click",function(){var a=$(this).data("modal");$("#"+a).niftyModal()});
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*!
 * amaretti v1.2.0 (http://foxythemes.net/themes/amaretti)
 * Copyright 2014-2016 Foxy Themes all rights reserved 
 */
var App = (function () {
  'use strict';

  var totalPriceline;
  var unitPriceline;
  var qty;
  var grandTotalHt;


  function calculateTotalPriceline(e) {
    //e.preventDefault();
    var thisinput = e.target.getAttribute('class');
    var inputlinenumber = thisinput.split(' ')[1].split('-')[1];
    // console.log(inputlinenumber); 

    // renvoie l1 pour la ligne1, l2 pour la ligne2, etc...
   
    totalPriceline = document.querySelector('.totalrow-'+inputlinenumber);
    //console.log(totalPriceline);
    grandTotalHt = document.getElementById('grandtotalht');
    //console.log(grandTotalHt);

    // Si on est sur l'input "quantité"
    if(e.target.getAttribute('class').split(' ')[0] =='qty') {
      if(isNaN(e.target.value)) {
        e.target.value='';
      }
      else {

        if(document.querySelector(".currency-"+inputlinenumber).value.trim() != '') {
          // var inputcurrvalue = e.target.value * (document.querySelector(".currency-"+inputlinenumber).value)
          console.log(document.querySelector(".currency-"+inputlinenumber));
          totalPriceline.innerHTML = (e.target.value * document.querySelector(".currency-"+inputlinenumber).value).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
        }
      }
    }

    // Si on est sur l'input "prix unitaire"
    else if(e.target.getAttribute('class').split(' ')[0] == 'currency') {
      if(isNaN(e.target.value)) {
        e.target.value='';
      }
      else {
        if(document.querySelector(".qty-"+inputlinenumber).value.trim() != '') {
          totalPriceline.innerHTML = (e.target.value * document.querySelector(".qty-"+inputlinenumber).value).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
        }
      }     
    }

    else {
      // 
    }

    var totalLines = document.getElementsByClassName('totalrow');
    console.log(totalLines);
    var grandTotalPrice=0;

    for(var t=0; t<totalLines.length; t++) {
      console.log(totalLines[t].innerHTML);
        if (!isNaN(totalLines[t].innerHTML.replace(/ /g,''))) 
          grandTotalPrice += parseFloat(totalLines[t].innerHTML.replace(/ /g,'')); 
    }
    console.log(grandTotalPrice);
    grandTotalHt.innerHTML = grandTotalPrice.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
  }




function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function injectTemplate(template, targetParent, dict) {
        var count = document.getElementsByClassName('mission-line').length;

        var t = document.querySelector('#' + template);
        var clone = t.cloneNode(true)
        for (var key in dict) {
            clone.innerHTML = clone.innerHTML.replace(key, dict[key])
        }
        var fragment = document.importNode(clone.content, true)
        var canvas = document.querySelector('#' + targetParent);

        fragment.querySelector('input.qty').classList.add('qty-l'+(count+1));
        fragment.querySelector('input.currency').classList.add('currency-l'+(count+1));
        fragment.querySelector('.totalrow').classList.add('totalrow-l'+(count+1));
        canvas.appendChild(fragment);

        for(var i=0; i<document.getElementsByClassName('qty').length; i++) {
          document.getElementsByClassName('qty')[i].removeEventListener("keyup", calculateTotalPriceline);
          document.getElementsByClassName('qty')[i].addEventListener("keyup", calculateTotalPriceline);
        }
        for(var i=0; i<document.getElementsByClassName('currency').length; i++) {
          document.getElementsByClassName('currency')[i].removeEventListener("keyup", calculateTotalPriceline);
          document.getElementsByClassName('currency')[i].addEventListener("keyup", calculateTotalPriceline);
        }
        //alert(canvas.innerHTML)
    }

function injectNewLine() {
  injectTemplate("template1", "linesInTbody", {var1:"1+1", var2:2, "#ref":"abc.net"});
}

document.addEventListener("DOMContentLoaded", function(event) {
  var inputQty = document.querySelector('input.qty');
  var inputUnitPriceline = document.querySelector('input.currency');

  inputQty.addEventListener("change", calculateTotalPriceline);
  inputUnitPriceline.addEventListener("change", calculateTotalPriceline);
  inputQty.addEventListener("keyup", calculateTotalPriceline);
  inputUnitPriceline.addEventListener("keyup", calculateTotalPriceline);
  document.querySelector('textarea').addEventListener('keydown', autosize);
  document.querySelector('#addable-row').addEventListener('click', injectNewLine);
});







  //Basic Config
  var config = {
    assetsPath: 'assets',
    imgPath: 'img',
    jsPath: 'js',
    libsPath: 'lib',
    leftSidebarSlideSpeed: 200,
    enableSwipe: true,
    swipeTreshold: 100,
    scrollTop: true,
    openLeftSidebarClass: 'open-left-sidebar',
    openRightSidebarClass: 'open-right-sidebar',
    removeLeftSidebarClass: 'am-nosidebar-left',
    openLeftSidebarOnClick: false,
    openLeftSidebarOnClickClass: 'am-left-sidebar--click',
    transitionClass: 'am-animate',
    openSidebarDelay: 400,
    syncSubMenuOnHover: false
  };

  var colors = {};
  var body, wrapper, leftSidebar, rightSidebar;
  var openSidebar = false;

  //Get the template css colors into js vars
  function getColor( c ){
    var tmp = $("<div>", { class: c }).appendTo("body");
    var color = tmp.css("background-color");
    tmp.remove();

    return color;
  }

  //Core private functions
  function leftSidebarInit(){

    var firstAnchor = $(".sidebar-elements > li > a", leftSidebar);
    var openLeftSidebarOnClick = leftSidebar.hasClass( config.openLeftSidebarOnClickClass ) || config.openLeftSidebarOnClick ? true : false;

    function syncSubMenu( item ){
      var elements = $(".sidebar-elements > li", leftSidebar);

      if( typeof item !== "undefined" ) {
        elements = item;
      }

      $.each( elements, function(i, v){

        var title = $(this).find("> a span").html();
        var ul = $(this).find("> ul");
        var subEls = $("> li", ul);
        var title = $('<li class="title">' + title + '</li>');
        var subContainer = $('<li class="nav-items"><div class="am-scroller nano"><div class="content nano-content"><ul></ul></div></div></li>');

        if( !ul.find("> li.title").length > 0 ){
         ul.prepend( title );
          subEls.appendTo( subContainer.find(".content ul") );
          subContainer.appendTo( ul );
        }
      });
    }

    /*Create sub menu elements*/
      syncSubMenu();

    function oSidebar(){
      body.addClass( config.openLeftSidebarClass + " " + config.transitionClass );
      openSidebar = true;
    }

    function cSidebar(){
      body.removeClass( config.openLeftSidebarClass ).addClass( config.transitionClass );
      sidebarDelay();
    }

    function openSubMenu( el, event, click ){
      var li = $(el).parent();
      var amScroller = li.find(".am-scroller");
      var subMenu = li.find("> ul");
      var isOpen = li.hasClass('open');

      //Show sub menu element
      if( !$.isXs() ){
        $("ul.visible", leftSidebar).removeClass("visible").parent().removeClass('open');

        //Add classes to create a delay on sub menu close action after mouse leave
        if( !click || ( click && !isOpen ) ){
          li.addClass('open');
          subMenu.addClass("visible");
        }
        subMenu.removeClass("hide");
      }

      //Renew nanoscroller
      amScroller.nanoScroller({ destroy: true });
      amScroller.nanoScroller();

      //Check if event is click or hover
      if( click ){
        //Stop click event when li has sub-menu
        if( li.hasClass('parent') ){
          event.preventDefault();
        }
      }else{
        //Create sub-menu elements
        if( config.syncSubMenuOnHover ){
          syncSubMenu( li );
        }
      }
    }

    /*Open-Sidebar when click on topbar button*/
      $('.am-toggle-left-sidebar').on("click", function(e){
        if( openSidebar && body.hasClass( config.openLeftSidebarClass ) ){
          cSidebar();
        }else if( !openSidebar ){
          oSidebar();
        }
        e.stopPropagation();
        e.preventDefault();
      });

    /*Close sidebar on click outside*/
      $(document).on("touchstart mousedown",function(e){
        if ( !$(e.target).closest(leftSidebar).length && body.hasClass( config.openLeftSidebarClass ) ) {
          cSidebar();
        }else if( !$(e.target).closest(leftSidebar).length && !$.isXs() ){
          $("ul.visible", leftSidebar).removeClass("visible").parent().removeClass('open');
        }
      });

    /*Open sub-menu functionality*/
      if( openLeftSidebarOnClick ){

        /*Open sub-menu on click*/
        firstAnchor.on('click',function( e ){
          if( !$.isXs() ){
            openSubMenu(this, e, true); 
          }
        });

      }else{

        /*Open sub-menu on hover*/
        firstAnchor.on('mouseover',function( e ){
          openSubMenu(this, e, false); 
        });

        /*Open sub-menu on click (fix for touch devices)*/
        firstAnchor.on('touchstart',function( e ){
          if( !$.isXs() ){
            openSubMenu(this, e, true);
          }
        });

        /*Sub-menu delay on mouse leave*/
        firstAnchor.on('mouseleave',function(){
          var _self = $(this);
          var _li = _self.parent();
          var subMenu = _li.find("> ul");
          if( !$.isXs() ){
            //If mouse is over sub menu attach an additional mouseleave event to submenu
            if ( subMenu.length > 0 ){
              setTimeout(function(){
                if( subMenu.is(':hover') ){
                  subMenu.on('mouseleave',function(){
                    setTimeout(function(){
                      if( !_self.is(':hover') ){
                        subMenu.removeClass('visible');
                        _li.removeClass('open');
                      }
                    }, 300);
                  });
                }else{
                  subMenu.removeClass('visible');
                  _li.removeClass('open');
                }
              }, 300);
            }else{
              _li.removeClass('open');
            }
          }
        });
      }

    /*Open sub-menu on small devices*/
      $(".sidebar-elements li a", leftSidebar).on("click",function( e ){
        if( $.isXs() ){
          var $el = $(this), $open, $speed = config.leftSidebarSlideSpeed;
          var $li = $el.parent();
          var $subMenu = $el.next();

          $open = $li.siblings(".open");

          if( $open ){
            $open.find('> ul:visible').slideUp({ duration: $speed, complete: function(){
              $open.toggleClass('open');
              $(this).removeAttr('style').removeClass('visible');
            }});
          }

          if( $li.hasClass('open') ){
            $subMenu.slideUp({ duration: $speed, complete: function(){
              $li.toggleClass('open');
              $(this).removeAttr('style').removeClass('visible');
            }});
          }else{
            $subMenu.slideDown({ duration: $speed, complete: function(){
              $li.toggleClass('open');
              $(this).removeAttr('style').addClass('visible');
            }});
          }

          if( $el.next().is('ul') ){
            e.preventDefault();
          }
        }else{
          //Close sub-menu on anchor click
          if( !openLeftSidebarOnClick ){
            var subMenu = $(".sidebar-elements > li > ul:visible", leftSidebar);
            subMenu.addClass('hide');
          }
        }
      });

    /*Calculate sidebar tree active & open classes*/
      $("li.active", leftSidebar).parents(".parent").addClass("active");

    /*Nanoscroller when left sidebar is fixed*/
      if( wrapper.hasClass("am-fixed-sidebar") ){
        var lsc = $(".am-left-sidebar > .content");
        lsc.wrap('<div class="am-scroller nano"></div>');
        lsc.addClass("nano-content");
        lsc.parent().nanoScroller();
      }

    /*On window resize check for small resolution classes to remove them*/
      $(window).resize(function () {
        waitForFinalEvent(function(){
          if( !$.isXs() ){
            var scroller = $(".am-scroller");
            $('.nano-content', scroller).css({'margin-right':0});
            scroller.nanoScroller({ destroy: true });
            scroller.nanoScroller();
          }
        }, 500, "am_check_phone_classes");
      });
  }

  function rightSidebarInit(){

    function oSidebar(){
      body.addClass( config.openRightSidebarClass  + " " + config.transitionClass );
      openSidebar = true;
    }

    function cSidebar(){
      body.removeClass( config.openRightSidebarClass ).addClass( config.transitionClass );
      sidebarDelay();
    }

    if( rightSidebar.length > 0 ){
      /*Open-Sidebar when click on topbar button*/
      $('.am-toggle-right-sidebar').on("click", function(e){
        if( openSidebar && body.hasClass( config.openRightSidebarClass ) ){
          cSidebar();
        }else if( !openSidebar ){
          oSidebar();
        }
        
        e.stopPropagation();
        e.preventDefault();
      });

      /*Close sidebar on click outside*/
      $( document ).on("mousedown touchstart",function( e ){
        if ( !$( e.target ).closest( rightSidebar ).length && body.hasClass( config.openRightSidebarClass ) ) {
          cSidebar();
        }
      });
    }
  }

  function sidebarDelay(){
    openSidebar = true;
    setTimeout(function(){
      openSidebar = false;
    }, config.openSidebarDelay );
  }

  function sidebarSwipe(){
    /*Open sidedar on swipe*/
    var cancelEvent = false;

    wrapper.swipe( {
      allowPageScroll: "vertical",
      preventDefaultEvents: false,
      fallbackToMouseEvents: false,
      swipeRight: function(e) {
        if( !openSidebar && !wrapper.hasClass( config.removeLeftSidebarClass ) ){
          body.addClass( config.openLeftSidebarClass + " " + config.transitionClass );
          openSidebar = true;
        }
      },
      swipeLeft: function(e){
        if( !openSidebar && rightSidebar.length > 0 ){
          body.addClass( config.openRightSidebarClass + " " + config.transitionClass );
          openSidebar = true;
        }
      },
      swipeStatus: function(e, p){
        switch( p ){
          case 'start':
            if( openSidebar ){
              cancelEvent = true;
            }
          break;
          case 'end':
            if( cancelEvent ){
              cancelEvent = false;
              return false;
            }
          break;
          case 'cancel':
            cancelEvent = false;
          break;
        }
      },
      threshold: config.swipeTreshold
    });
  }

  function chatWidget(){
    var chat = $(".am-right-sidebar .tab-pane.chat");
    var contactsEl = $(".chat-contacts", chat);
    var conversationEl = $(".chat-window", chat);
    var messagesContainer = $(".chat-messages", conversationEl);
    var messagesList = $(".content > ul", messagesContainer);
    var messagesScrollContent = $(".nano-content", messagesContainer);
    var chatInputContainer = $(".chat-input", conversationEl);
    var chatInput = $("input", chatInputContainer);
    var chatInputSendButton = $(".send-msg", chatInputContainer);

    function openChatWindow(){
      if( !chat.hasClass("chat-opened") ){
        chat.addClass("chat-opened");
        $(".am-scroller", messagesContainer).nanoScroller();
      }
    }

    function closeChatWindow(){
      if( chat.hasClass("chat-opened") ){
        chat.removeClass("chat-opened");
      }
    }

    /*Open Conversation Window when click on chat user*/
    $(".user a", contactsEl).on('click',function( e ){
      $(".am-scroller", contactsEl).nanoScroller({ stop: true });
      openChatWindow();
      e.preventDefault();
    });

    /*Close chat conv window*/
    $(".title .return", conversationEl).on('click',function( e ){
      closeChatWindow();
      scrollerInit();
    });

    /*Send message*/
    function sendMsg(msg, self){
      var $message = $('<li class="' + ((self)?'self':'friend') + '"></li>');

      if( msg != '' ){
        $('<div class="msg">' + msg + '</div>').appendTo($message);
        $message.appendTo(messagesList);

        messagesScrollContent.stop().animate({
          'scrollTop': messagesScrollContent.prop("scrollHeight")
        }, 900, 'swing');

        scrollerInit();
      }
    }

    /*Send msg when click on 'send' button or press 'Enter'*/
      chatInput.keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var msg = $(this).val();

        if(keycode == '13'){
          sendMsg(msg, true);
          $(this).val("");
        }
        event.stopPropagation();
      });

      chatInputSendButton.on('click',function(){
        var msg = chatInput.val();
        sendMsg(msg, true);
        chatInput.val("");
      });
  }

  function scrollerInit(){
    $(".am-scroller").nanoScroller();
  }

  function scrollTopButton(){
    var offset = 220;
    var duration = 500;
    var button = $('<div class="am-scroll-top"></div>');
    button.appendTo("body");
    
    $(window).on('scroll',function() {
      if ( $(this).scrollTop() > offset ) {
        button.fadeIn(duration);
      } else {
        button.fadeOut(duration);
      }
    });
  
    button.on('touchstart mouseup',function( e ) {
      $( 'html, body' ).animate({ scrollTop: 0 }, duration);
      e.preventDefault();
    });
  }

  //Wait for final event on window resize
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "x1x2x3x4";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

  return {
    //General data
    conf: config,
    color: colors,

    //Init function
    init: function (options) {
      
      // Get the main elements when document is ready
      wrapper = $(".am-wrapper");
      leftSidebar = $(".am-left-sidebar");
      rightSidebar = $(".am-right-sidebar");
      body = $("body");

      //Extends basic config with options
        $.extend( config, options );

      /*Left Sidebar*/
        leftSidebarInit();

      /*FastClick on mobile*/
        FastClick.attach(document.body);
      
      /*Right Sidebar*/
        rightSidebarInit();
        chatWidget();

      /*Sidebars Swipe*/
        if( config.enableSwipe ){
          sidebarSwipe();
        }

      /*Body transition effect*/
        leftSidebar.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
          body.removeClass( config.transitionClass );
        });

      /*Scroll Top button*/
        if( config.scrollTop ){
          scrollTopButton();
        }

      /*Get colors*/
        colors.primary = getColor('clr-primary');
        colors.success = getColor('clr-success');
        colors.info    = getColor('clr-info');
        colors.warning = getColor('clr-warning');
        colors.danger  = getColor('clr-danger');
        colors.alt1    = getColor('clr-alt1');
        colors.alt2    = getColor('clr-alt2');
        colors.alt3    = getColor('clr-alt3');
        colors.alt4    = getColor('clr-alt4');

      //Prevent Connections Dropdown closes on click
        $(".am-connections").on("click",function( e ){
          e.stopPropagation();
        });

      //Nanoscroller init function
        scrollerInit();

      /*Bind plugins on hidden elements*/
      /*Dropdown shown event*/
        $('.dropdown').on('shown.bs.dropdown', function () {
          $(".am-scroller").nanoScroller();
        });
        
      /*Tabs refresh hidden elements*/
        $('.nav-tabs').on('shown.bs.tab', function (e) {
          $(".am-scroller").nanoScroller();
        });


      /*Tooltips*/
        $('[data-toggle="tooltip"]').tooltip();
      
      /*Popover*/
        $('[data-toggle="popover"]').popover();

      /*Bootstrap modal scroll top fix*/
        $('.modal').on('show.bs.modal', function(){
          $("html").addClass('am-modal-open');
        });

        $('.modal').on('hidden.bs.modal', function(){
          $("html").removeClass('am-modal-open');
        });
    },

    //Methods
    closeSubMenu: function(){
      var subMenu = $(".sidebar-elements > li > ul:visible", leftSidebar);
      subMenu.addClass('hide');
      setTimeout(function(){
        subMenu.removeClass('hide');
      }, 50);
    }
  };
 
})();
//FastClick
function FastClick(a,b){"use strict";function c(a,b){return function(){return a.apply(b,arguments)}}var d;if(b=b||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=b.touchBoundary||10,this.layer=a,this.tapDelay=b.tapDelay||200,!FastClick.notNeeded(a)){for(var e=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],f=this,g=0,h=e.length;g<h;g++)f[e[g]]=c(f[e[g]],f);deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d,e,f;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),f=b.changedTouches[0],e=document.createEvent("MouseEvents"),e.initMouseEvent("mousedown",!0,!0,window,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),e.forwardedTouchEvent=!0,a.dispatchEvent(e),d=document.createEvent("MouseEvents"),d.initMouseEvent("mouseup",!0,!0,window,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),d.forwardedTouchEvent=!0,a.dispatchEvent(d),c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!deviceIsIOS4){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c},FastClick.prototype.onTouchMove=function(a){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),deviceIsIOS&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||(e=g.fastClickScrollParent,!e||e.fastClickLastScrollTop===e.scrollTop))||(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return!this.targetElement||(!!a.forwardedTouchEvent||(!a.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1))))},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail||(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c,d;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(b.content.indexOf("user-scalable=no")!==-1)return!0;if(c>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(d=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),d[1]>=10&&d[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(b.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction},FastClick.attach=function(a,b){"use strict";return new FastClick(a,b)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
// TinyColor v1.2.1
// https://github.com/bgrins/TinyColor
// 2015-08-13, Brian Grinstead, MIT License
!function(){function tinycolor(color,opts){if(color=color?color:"",opts=opts||{},color instanceof tinycolor)return color;if(!(this instanceof tinycolor))return new tinycolor(color,opts);var rgb=inputToRGB(color);this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format,this._gradientType=opts.gradientType,this._r<1&&(this._r=mathRound(this._r)),this._g<1&&(this._g=mathRound(this._g)),this._b<1&&(this._b=mathRound(this._b)),this._ok=rgb.ok,this._tc_id=tinyCounter++}function inputToRGB(color){var rgb={r:0,g:0,b:0},a=1,ok=!1,format=!1;return"string"==typeof color&&(color=stringInputToObject(color)),"object"==typeof color&&(color.hasOwnProperty("r")&&color.hasOwnProperty("g")&&color.hasOwnProperty("b")?(rgb=rgbToRgb(color.r,color.g,color.b),ok=!0,format="%"===String(color.r).substr(-1)?"prgb":"rgb"):color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("v")?(color.s=convertToPercentage(color.s),color.v=convertToPercentage(color.v),rgb=hsvToRgb(color.h,color.s,color.v),ok=!0,format="hsv"):color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("l")&&(color.s=convertToPercentage(color.s),color.l=convertToPercentage(color.l),rgb=hslToRgb(color.h,color.s,color.l),ok=!0,format="hsl"),color.hasOwnProperty("a")&&(a=color.a)),a=boundAlpha(a),{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a}}function rgbToRgb(r,g,b){return{r:255*bound01(r,255),g:255*bound01(g,255),b:255*bound01(b,255)}}function rgbToHsl(r,g,b){r=bound01(r,255),g=bound01(g,255),b=bound01(b,255);var h,s,max=mathMax(r,g,b),min=mathMin(r,g,b),l=(max+min)/2;if(max==min)h=s=0;else{var d=max-min;switch(s=l>.5?d/(2-max-min):d/(max+min),max){case r:h=(g-b)/d+(b>g?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4}h/=6}return{h:h,s:s,l:l}}function hslToRgb(h,s,l){function hue2rgb(p,q,t){return 0>t&&(t+=1),t>1&&(t-=1),1/6>t?p+6*(q-p)*t:.5>t?q:2/3>t?p+6*(q-p)*(2/3-t):p}var r,g,b;if(h=bound01(h,360),s=bound01(s,100),l=bound01(l,100),0===s)r=g=b=l;else{var q=.5>l?l*(1+s):l+s-l*s,p=2*l-q;r=hue2rgb(p,q,h+1/3),g=hue2rgb(p,q,h),b=hue2rgb(p,q,h-1/3)}return{r:255*r,g:255*g,b:255*b}}function rgbToHsv(r,g,b){r=bound01(r,255),g=bound01(g,255),b=bound01(b,255);var h,s,max=mathMax(r,g,b),min=mathMin(r,g,b),v=max,d=max-min;if(s=0===max?0:d/max,max==min)h=0;else{switch(max){case r:h=(g-b)/d+(b>g?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4}h/=6}return{h:h,s:s,v:v}}function hsvToRgb(h,s,v){h=6*bound01(h,360),s=bound01(s,100),v=bound01(v,100);var i=math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:255*r,g:255*g,b:255*b}}function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)?hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0):hex.join("")}function rgbaToHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return hex.join("")}function desaturate(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.s-=amount/100,hsl.s=clamp01(hsl.s),tinycolor(hsl)}function saturate(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.s+=amount/100,hsl.s=clamp01(hsl.s),tinycolor(hsl)}function greyscale(color){return tinycolor(color).desaturate(100)}function lighten(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.l+=amount/100,hsl.l=clamp01(hsl.l),tinycolor(hsl)}function brighten(color,amount){amount=0===amount?0:amount||10;var rgb=tinycolor(color).toRgb();return rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255*-(amount/100)))),rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255*-(amount/100)))),rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255*-(amount/100)))),tinycolor(rgb)}function darken(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.l-=amount/100,hsl.l=clamp01(hsl.l),tinycolor(hsl)}function spin(color,amount){var hsl=tinycolor(color).toHsl(),hue=(mathRound(hsl.h)+amount)%360;return hsl.h=0>hue?360+hue:hue,tinycolor(hsl)}function complement(color){var hsl=tinycolor(color).toHsl();return hsl.h=(hsl.h+180)%360,tinycolor(hsl)}function triad(color){var hsl=tinycolor(color).toHsl(),h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})]}function tetrad(color){var hsl=tinycolor(color).toHsl(),h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})]}function splitcomplement(color){var hsl=tinycolor(color).toHsl(),h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})]}function analogous(color,results,slices){results=results||6,slices=slices||30;var hsl=tinycolor(color).toHsl(),part=360/slices,ret=[tinycolor(color)];for(hsl.h=(hsl.h-(part*results>>1)+720)%360;--results;)hsl.h=(hsl.h+part)%360,ret.push(tinycolor(hsl));return ret}function monochromatic(color,results){results=results||6;for(var hsv=tinycolor(color).toHsv(),h=hsv.h,s=hsv.s,v=hsv.v,ret=[],modification=1/results;results--;)ret.push(tinycolor({h:h,s:s,v:v})),v=(v+modification)%1;return ret}function flip(o){var flipped={};for(var i in o)o.hasOwnProperty(i)&&(flipped[o[i]]=i);return flipped}function boundAlpha(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function bound01(n,max){isOnePointZero(n)&&(n="100%");var processPercent=isPercentage(n);return n=mathMin(max,mathMax(0,parseFloat(n))),processPercent&&(n=parseInt(n*max,10)/100),math.abs(n-max)<1e-6?1:n%max/parseFloat(max)}function clamp01(val){return mathMin(1,mathMax(0,val))}function parseIntFromHex(val){return parseInt(val,16)}function isOnePointZero(n){return"string"==typeof n&&-1!=n.indexOf(".")&&1===parseFloat(n)}function isPercentage(n){return"string"==typeof n&&-1!=n.indexOf("%")}function pad2(c){return 1==c.length?"0"+c:""+c}function convertToPercentage(n){return 1>=n&&(n=100*n+"%"),n}function convertDecimalToHex(d){return Math.round(255*parseFloat(d)).toString(16)}function convertHexToDecimal(h){return parseIntFromHex(h)/255}function stringInputToObject(color){color=color.replace(trimLeft,"").replace(trimRight,"").toLowerCase();var named=!1;if(names[color])color=names[color],named=!0;else if("transparent"==color)return{r:0,g:0,b:0,a:0,format:"name"};var match;return(match=matchers.rgb.exec(color))?{r:match[1],g:match[2],b:match[3]}:(match=matchers.rgba.exec(color))?{r:match[1],g:match[2],b:match[3],a:match[4]}:(match=matchers.hsl.exec(color))?{h:match[1],s:match[2],l:match[3]}:(match=matchers.hsla.exec(color))?{h:match[1],s:match[2],l:match[3],a:match[4]}:(match=matchers.hsv.exec(color))?{h:match[1],s:match[2],v:match[3]}:(match=matchers.hsva.exec(color))?{h:match[1],s:match[2],v:match[3],a:match[4]}:(match=matchers.hex8.exec(color))?{a:convertHexToDecimal(match[1]),r:parseIntFromHex(match[2]),g:parseIntFromHex(match[3]),b:parseIntFromHex(match[4]),format:named?"name":"hex8"}:(match=matchers.hex6.exec(color))?{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?"name":"hex"}:(match=matchers.hex3.exec(color))?{r:parseIntFromHex(match[1]+""+match[1]),g:parseIntFromHex(match[2]+""+match[2]),b:parseIntFromHex(match[3]+""+match[3]),format:named?"name":"hex"}:!1}function validateWCAG2Parms(parms){var level,size;return parms=parms||{level:"AA",size:"small"},level=(parms.level||"AA").toUpperCase(),size=(parms.size||"small").toLowerCase(),"AA"!==level&&"AAA"!==level&&(level="AA"),"small"!==size&&"large"!==size&&(size="small"),{level:level,size:size}}var trimLeft=/^[\s,#]+/,trimRight=/\s+$/,tinyCounter=0,math=Math,mathRound=math.round,mathMin=math.min,mathMax=math.max,mathRandom=math.random;tinycolor.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var rgb=this.toRgb();return(299*rgb.r+587*rgb.g+114*rgb.b)/1e3},getLuminance:function(){var RsRGB,GsRGB,BsRGB,R,G,B,rgb=this.toRgb();return RsRGB=rgb.r/255,GsRGB=rgb.g/255,BsRGB=rgb.b/255,R=.03928>=RsRGB?RsRGB/12.92:Math.pow((RsRGB+.055)/1.055,2.4),G=.03928>=GsRGB?GsRGB/12.92:Math.pow((GsRGB+.055)/1.055,2.4),B=.03928>=BsRGB?BsRGB/12.92:Math.pow((BsRGB+.055)/1.055,2.4),.2126*R+.7152*G+.0722*B},setAlpha:function(value){return this._a=boundAlpha(value),this._roundA=mathRound(100*this._a)/100,this},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b);return{h:360*hsv.h,s:hsv.s,v:hsv.v,a:this._a}},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b),h=mathRound(360*hsv.h),s=mathRound(100*hsv.s),v=mathRound(100*hsv.v);return 1==this._a?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this._roundA+")"},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b);return{h:360*hsl.h,s:hsl.s,l:hsl.l,a:this._a}},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b),h=mathRound(360*hsl.h),s=mathRound(100*hsl.s),l=mathRound(100*hsl.l);return 1==this._a?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this._roundA+")"},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char)},toHexString:function(allow3Char){return"#"+this.toHex(allow3Char)},toHex8:function(){return rgbaToHex(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+")":"rgba("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:mathRound(100*bound01(this._r,255))+"%",g:mathRound(100*bound01(this._g,255))+"%",b:mathRound(100*bound01(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+mathRound(100*bound01(this._r,255))+"%, "+mathRound(100*bound01(this._g,255))+"%, "+mathRound(100*bound01(this._b,255))+"%)":"rgba("+mathRound(100*bound01(this._r,255))+"%, "+mathRound(100*bound01(this._g,255))+"%, "+mathRound(100*bound01(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:hexNames[rgbToHex(this._r,this._g,this._b,!0)]||!1},toFilter:function(secondColor){var hex8String="#"+rgbaToHex(this._r,this._g,this._b,this._a),secondHex8String=hex8String,gradientType=this._gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex8String=s.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")"},toString:function(format){var formatSet=!!format;format=format||this._format;var formattedString=!1,hasAlpha=this._a<1&&this._a>=0,needsAlphaFormat=!formatSet&&hasAlpha&&("hex"===format||"hex6"===format||"hex3"===format||"name"===format);return needsAlphaFormat?"name"===format&&0===this._a?this.toName():this.toRgbString():("rgb"===format&&(formattedString=this.toRgbString()),"prgb"===format&&(formattedString=this.toPercentageRgbString()),("hex"===format||"hex6"===format)&&(formattedString=this.toHexString()),"hex3"===format&&(formattedString=this.toHexString(!0)),"hex8"===format&&(formattedString=this.toHex8String()),"name"===format&&(formattedString=this.toName()),"hsl"===format&&(formattedString=this.toHslString()),"hsv"===format&&(formattedString=this.toHsvString()),formattedString||this.toHexString())},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)));return this._r=color._r,this._g=color._g,this._b=color._b,this.setAlpha(color._a),this},lighten:function(){return this._applyModification(lighten,arguments)},brighten:function(){return this._applyModification(brighten,arguments)},darken:function(){return this._applyModification(darken,arguments)},desaturate:function(){return this._applyModification(desaturate,arguments)},saturate:function(){return this._applyModification(saturate,arguments)},greyscale:function(){return this._applyModification(greyscale,arguments)},spin:function(){return this._applyModification(spin,arguments)},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)))},analogous:function(){return this._applyCombination(analogous,arguments)},complement:function(){return this._applyCombination(complement,arguments)},monochromatic:function(){return this._applyCombination(monochromatic,arguments)},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments)},triad:function(){return this._applyCombination(triad,arguments)},tetrad:function(){return this._applyCombination(tetrad,arguments)}},tinycolor.fromRatio=function(color,opts){if("object"==typeof color){var newColor={};for(var i in color)color.hasOwnProperty(i)&&(newColor[i]="a"===i?color[i]:convertToPercentage(color[i]));color=newColor}return tinycolor(color,opts)},tinycolor.equals=function(color1,color2){return color1&&color2?tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString():!1},tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()})},tinycolor.mix=function(color1,color2,amount){amount=0===amount?0:amount||50;var w1,rgb1=tinycolor(color1).toRgb(),rgb2=tinycolor(color2).toRgb(),p=amount/100,w=2*p-1,a=rgb2.a-rgb1.a;w1=-1==w*a?w:(w+a)/(1+w*a),w1=(w1+1)/2;var w2=1-w1,rgba={r:rgb2.r*w1+rgb1.r*w2,g:rgb2.g*w1+rgb1.g*w2,b:rgb2.b*w1+rgb1.b*w2,a:rgb2.a*p+rgb1.a*(1-p)};return tinycolor(rgba)},tinycolor.readability=function(color1,color2){var c1=tinycolor(color1),c2=tinycolor(color2);return(Math.max(c1.getLuminance(),c2.getLuminance())+.05)/(Math.min(c1.getLuminance(),c2.getLuminance())+.05)},tinycolor.isReadable=function(color1,color2,wcag2){var wcag2Parms,out,readability=tinycolor.readability(color1,color2);switch(out=!1,wcag2Parms=validateWCAG2Parms(wcag2),wcag2Parms.level+wcag2Parms.size){case"AAsmall":case"AAAlarge":out=readability>=4.5;break;case"AAlarge":out=readability>=3;break;case"AAAsmall":out=readability>=7}return out},tinycolor.mostReadable=function(baseColor,colorList,args){var readability,includeFallbackColors,level,size,bestColor=null,bestScore=0;args=args||{},includeFallbackColors=args.includeFallbackColors,level=args.level,size=args.size;for(var i=0;i<colorList.length;i++)readability=tinycolor.readability(baseColor,colorList[i]),readability>bestScore&&(bestScore=readability,bestColor=tinycolor(colorList[i]));return tinycolor.isReadable(baseColor,bestColor,{level:level,size:size})||!includeFallbackColors?bestColor:(args.includeFallbackColors=!1,tinycolor.mostReadable(baseColor,["#fff","#000"],args))};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},hexNames=tinycolor.hexNames=flip(names),matchers=function(){var CSS_INTEGER="[-\\+]?\\d+%?",CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?",CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")",PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?",PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hsva:new RegExp("hsva"+PERMISSIVE_MATCH4),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=tinycolor:"function"==typeof define&&define.amd?define(function(){return tinycolor}):window.tinycolor=tinycolor}();
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
/*!
 * jQuery bootstrap 3 breakpoint check
 * Check the current visibility of bootstrap 3 breakpoints
 *
 * @example `$.isXs()` function alias for `$.isBreakpoint("xs")`
 * @example `$.isSm()` function alias for `$.isBreakpoint("sm")`
 * @example `$.isMd()` function alias for `$.isBreakpoint("md")`
 * @example `$.isLg()` function alias for `$.isBreakpoint("lg")`
 * @version 1.0.0
 * @copyright Jens A. (cakebake) and other contributors
 * @license Released under the MIT license
 */
!function(a){a.isBreakpoint=function(b){var c,d;return c=a("<div/>",{"class":"visible-"+b}).appendTo("body"),d=c.is(":visible"),c.remove(),d},a.extend(a,{isXs:function(){return a.isBreakpoint("xs")},isSm:function(){return a.isBreakpoint("sm")},isMd:function(){return a.isBreakpoint("md")},isLg:function(){return a.isBreakpoint("lg")}})}(jQuery);
/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Improvements by Andrew Rowls
 * Improvements by Sébastien Malot
 * Improvements by Yun Lai
 * Improvements by Kenneth Henderick
 * Improvements by CuGBabyBeaR
 * Improvements by Christian Vaas
 *
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function ($) {

  // Add ECMA262-5 Array methods if not supported natively (IE8)
  if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf = function (find, i) {
      if (i === undefined) i = 0;
      if (i < 0) i += this.length;
      if (i < 0) i = 0;
      for (var n = this.length; i < n; i++) {
        if (i in this && this[i] === find) {
          return i;
        }
      }
      return -1;
    }
  }

  function elementOrParentIsFixed (element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
      if ($(this).css('position') === 'fixed') {
        isFixed = true;
        return false;
      }
    });
    return isFixed;
  }

  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0);
  }

  // Picker object
  var Datetimepicker = function (element, options) {
    var that = this;

    this.element = $(element);

    // add container for single page application
    // when page switch the datetimepicker div will be removed also.
    this.container = options.container || 'body';

    this.language = options.language || this.element.data('date-language') || 'en';
    this.language = this.language in dates ? this.language : this.language.split('-')[0]; // fr-CA fallback to fr
    this.language = this.language in dates ? this.language : 'en';
    this.isRTL = dates[this.language].rtl || false;
    this.formatType = options.formatType || this.element.data('format-type') || 'standard';
    this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
    this.isInline = false;
    this.isVisible = false;
    this.isInput = this.element.is('input');
    this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;

    this.bootcssVer = options.bootcssVer || (this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 ));

    this.component = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o').parent()) : false;
    this.componentReset = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-remove, .input-group-addon .fa-times').parent():this.element.find('.add-on .icon-remove, .add-on .fa-times').parent()) : false;
    
    //Support for different component icon
    if ('componentIcon' in options) {
      this.component = this.element.find('.input-group-addon ' + options.componentIcon).parent();
    }

    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0) {
      this.component = false;
    }

    this.linkField = options.linkField || this.element.data('link-field') || false;
    this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
    this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
    this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
    this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
    this.initialDate = options.initialDate || new Date();
    this.zIndex = options.zIndex || this.element.data('z-index') || undefined;

    this.icons = {
      leftArrow: this.fontAwesome ? 'fa-arrow-left' : (this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left'),
      rightArrow: this.fontAwesome ? 'fa-arrow-right' : (this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right')
    }
    this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';

    //Custom nav icons
    if ('navIcons' in options) {
      if( options.navIcons.rightIcon && options.navIcons.rightIcon ){
        this.icons = {
          leftArrow: options.navIcons.leftIcon,
          rightArrow: options.navIcons.rightIcon
        }

        if( options.navIcons.iconType ){
          this.icontype = options.navIcons.iconType;
        }else{
          this.icontype = 'icon';
        }
      }
    }

    this._attachEvents();

    this.formatViewType = 'datetime';
    if ('formatViewType' in options) {
      this.formatViewType = options.formatViewType;
    } else if ('formatViewType' in this.element.data()) {
      this.formatViewType = this.element.data('formatViewType');
    }

    this.minView = 0;
    if ('minView' in options) {
      this.minView = options.minView;
    } else if ('minView' in this.element.data()) {
      this.minView = this.element.data('min-view');
    }
    this.minView = DPGlobal.convertViewMode(this.minView);

    this.maxView = DPGlobal.modes.length - 1;
    if ('maxView' in options) {
      this.maxView = options.maxView;
    } else if ('maxView' in this.element.data()) {
      this.maxView = this.element.data('max-view');
    }
    this.maxView = DPGlobal.convertViewMode(this.maxView);

    this.wheelViewModeNavigation = false;
    if ('wheelViewModeNavigation' in options) {
      this.wheelViewModeNavigation = options.wheelViewModeNavigation;
    } else if ('wheelViewModeNavigation' in this.element.data()) {
      this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
    }

    this.wheelViewModeNavigationInverseDirection = false;

    if ('wheelViewModeNavigationInverseDirection' in options) {
      this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
    } else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
      this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
    }

    this.wheelViewModeNavigationDelay = 100;
    if ('wheelViewModeNavigationDelay' in options) {
      this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
    } else if ('wheelViewModeNavigationDelay' in this.element.data()) {
      this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
    }

    this.startViewMode = 2;
    if ('startView' in options) {
      this.startViewMode = options.startView;
    } else if ('startView' in this.element.data()) {
      this.startViewMode = this.element.data('start-view');
    }
    this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
    this.viewMode = this.startViewMode;

    this.viewSelect = this.minView;
    if ('viewSelect' in options) {
      this.viewSelect = options.viewSelect;
    } else if ('viewSelect' in this.element.data()) {
      this.viewSelect = this.element.data('view-select');
    }
    this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

    this.forceParse = true;
    if ('forceParse' in options) {
      this.forceParse = options.forceParse;
    } else if ('dateForceParse' in this.element.data()) {
      this.forceParse = this.element.data('date-force-parse');
    }
    var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
    while (template.indexOf('{iconType}') !== -1) {
      template = template.replace('{iconType}', this.icontype);
    }
    while (template.indexOf('{leftArrow}') !== -1) {
      template = template.replace('{leftArrow}', this.icons.leftArrow);
    }
    while (template.indexOf('{rightArrow}') !== -1) {
      template = template.replace('{rightArrow}', this.icons.rightArrow);
    }
    this.picker = $(template)
      .appendTo(this.isInline ? this.element : this.container) // 'body')
      .on({
        click:     $.proxy(this.click, this),
        mousedown: $.proxy(this.mousedown, this)
      });

    if (this.wheelViewModeNavigation) {
      if ($.fn.mousewheel) {
        this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
      } else {
        console.log('Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option');
      }
    }

    if (this.isInline) {
      this.picker.addClass('datetimepicker-inline');
    } else {
      this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
    }
    if (this.isRTL) {
      this.picker.addClass('datetimepicker-rtl');
      var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
      this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
    }
    $(document).on('mousedown', function (e) {
      // Clicked outside the datetimepicker, hide it
      if ($(e.target).closest('.datetimepicker').length === 0) {
        that.hide();
      }
    });

    this.autoclose = false;
    if ('autoclose' in options) {
      this.autoclose = options.autoclose;
    } else if ('dateAutoclose' in this.element.data()) {
      this.autoclose = this.element.data('date-autoclose');
    }

    this.keyboardNavigation = true;
    if ('keyboardNavigation' in options) {
      this.keyboardNavigation = options.keyboardNavigation;
    } else if ('dateKeyboardNavigation' in this.element.data()) {
      this.keyboardNavigation = this.element.data('date-keyboard-navigation');
    }

    this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
    this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

    this.weekStart = ((options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7);
    this.weekEnd = ((this.weekStart + 6) % 7);
    this.startDate = -Infinity;
    this.endDate = Infinity;
    this.daysOfWeekDisabled = [];
    this.setStartDate(options.startDate || this.element.data('date-startdate'));
    this.setEndDate(options.endDate || this.element.data('date-enddate'));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
    this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
    this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();

    if (this.isInline) {
      this.show();
    }
  };

  Datetimepicker.prototype = {
    constructor: Datetimepicker,

    _events:       [],
    _attachEvents: function () {
      this._detachEvents();
      if (this.isInput) { // single input
        this._events = [
          [this.element, {
            focus:   $.proxy(this.show, this),
            keyup:   $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }]
        ];
      }
      else if (this.component && this.hasInput) { // component: input + button
        this._events = [
          // For components that are not readonly, allow keyboard nav
          [this.element.find('input'), {
            focus:   $.proxy(this.show, this),
            keyup:   $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }],
          [this.component, {
            click: $.proxy(this.show, this)
          }]
        ];
        if (this.componentReset) {
          this._events.push([
            this.componentReset,
            {click: $.proxy(this.reset, this)}
          ]);
        }
      }
      else if (this.element.is('div')) {  // inline datetimepicker
        this.isInline = true;
      }
      else {
        this._events = [
          [this.element, {
            click: $.proxy(this.show, this)
          }]
        ];
      }
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.on(ev);
      }
    },

    _detachEvents: function () {
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.off(ev);
      }
      this._events = [];
    },

    show: function (e) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      if (this.forceParse) {
        this.update();
      }
      this.place();
      $(window).on('resize', $.proxy(this.place, this));
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.isVisible = true;
      this.element.trigger({
        type: 'show',
        date: this.date
      });
    },

    hide: function (e) {
      if (!this.isVisible) return;
      if (this.isInline) return;
      this.picker.hide();
      $(window).off('resize', this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      if (!this.isInput) {
        $(document).off('mousedown', this.hide);
      }

      if (
        this.forceParse &&
          (
            this.isInput && this.element.val() ||
              this.hasInput && this.element.find('input').val()
            )
        )
        this.setValue();
      this.isVisible = false;
      this.element.trigger({
        type: 'hide',
        date: this.date
      });
    },

    remove: function () {
      this._detachEvents();
      this.picker.remove();
      delete this.picker;
      delete this.element.data().datetimepicker;
    },

    getDate: function () {
      var d = this.getUTCDate();
      return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
    },

    getUTCDate: function () {
      return this.date;
    },

    setDate: function (d) {
      this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
    },

    setUTCDate: function (d) {
      if (d >= this.startDate && d <= this.endDate) {
        this.date = d;
        this.setValue();
        this.viewDate = this.date;
        this.fill();
      } else {
        this.element.trigger({
          type:      'outOfRange',
          date:      d,
          startDate: this.startDate,
          endDate:   this.endDate
        });
      }
    },

    setFormat: function (format) {
      this.format = DPGlobal.parseFormat(format, this.formatType);
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element && element.val()) {
        this.setValue();
      }
    },

    setValue: function () {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component) {
          this.element.find('input').val(formatted);
        }
        this.element.data('date', formatted);
      } else {
        this.element.val(formatted);
      }
      if (this.linkField) {
        $('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
      }
    },

    getFormattedDate: function (format) {
      if (format == undefined) format = this.format;
      return DPGlobal.formatDate(this.date, format, this.language, this.formatType);
    },

    setStartDate: function (startDate) {
      this.startDate = startDate || -Infinity;
      if (this.startDate !== -Infinity) {
        this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType);
      }
      this.update();
      this.updateNavArrows();
    },

    setEndDate: function (endDate) {
      this.endDate = endDate || Infinity;
      if (this.endDate !== Infinity) {
        this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType);
      }
      this.update();
      this.updateNavArrows();
    },

    setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
      this.daysOfWeekDisabled = daysOfWeekDisabled || [];
      if (!$.isArray(this.daysOfWeekDisabled)) {
        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
      }
      this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setMinutesDisabled: function (minutesDisabled) {
      this.minutesDisabled = minutesDisabled || [];
      if (!$.isArray(this.minutesDisabled)) {
        this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
      }
      this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setHoursDisabled: function (hoursDisabled) {
      this.hoursDisabled = hoursDisabled || [];
      if (!$.isArray(this.hoursDisabled)) {
        this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
      }
      this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    place: function () {
      if (this.isInline) return;

      if (!this.zIndex) {
        var index_highest = 0;
        $('div').each(function () {
          var index_current = parseInt($(this).css('zIndex'), 10);
          if (index_current > index_highest) {
            index_highest = index_current;
          }
        });
        this.zIndex = index_highest + 10;
      }

      var offset, top, left, containerOffset;
      if (this.container instanceof $) {
        containerOffset = this.container.offset();
      } else {
        containerOffset = $(this.container).offset();
      }

      if (this.component) {
        offset = this.component.offset();
        left = offset.left;
        if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
          left += this.component.outerWidth() - this.picker.outerWidth();
        }
      } else {
        offset = this.element.offset();
        left = offset.left;
      }

      if(left+220 > document.body.clientWidth){
                  left = document.body.clientWidth-220;
              }

      if (this.pickerPosition == 'top-left' || this.pickerPosition == 'top-right') {
        top = offset.top - this.picker.outerHeight();
      } else {
        top = offset.top + this.height;
      }

      top = top - containerOffset.top;
      left = left - containerOffset.left;

      if(this.container != 'body') top = top + document.body.scrollTop

      this.picker.css({
        top:    top,
        left:   left,
        zIndex: this.zIndex
      });
    },

    update: function () {
      var date, fromArgs = false;
      if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
        date = arguments[0];
        fromArgs = true;
      } else {
        date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
        if (typeof date == 'string' || date instanceof String) {
          date = date.replace(/^\s+|\s+$/g,'');
        }
      }

      if (!date) {
        date = new Date();
        fromArgs = false;
      }

      this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType);

      if (fromArgs) this.setValue();

      if (this.date < this.startDate) {
        this.viewDate = new Date(this.startDate);
      } else if (this.date > this.endDate) {
        this.viewDate = new Date(this.endDate);
      } else {
        this.viewDate = new Date(this.date);
      }
      this.fill();
    },

    fillDow: function () {
      var dowCnt = this.weekStart,
        html = '<tr>';
      while (dowCnt < this.weekStart + 7) {
        html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
      }
      html += '</tr>';
      this.picker.find('.datetimepicker-days thead').append(html);
    },

    fillMonths: function () {
      var html = '',
        i = 0;
      while (i < 12) {
        html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
      }
      this.picker.find('.datetimepicker-months td').html(html);
    },

    fill: function () {
      if (this.date == null || this.viewDate == null) {
        return;
      }
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        dayMonth = d.getUTCDate(),
        hours = d.getUTCHours(),
        minutes = d.getUTCMinutes(),
        startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
        startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() + 1 : -Infinity,
        endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
        endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() + 1 : Infinity,
        currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
        today = new Date();
      this.picker.find('.datetimepicker-days thead th:eq(1)')
        .text(dates[this.language].months[month] + ' ' + year);
      if (this.formatViewType == 'time') {
        var formatted = this.getFormattedDate();
        this.picker.find('.datetimepicker-hours thead th:eq(1)').text(formatted);
        this.picker.find('.datetimepicker-minutes thead th:eq(1)').text(formatted);
      } else {
        this.picker.find('.datetimepicker-hours thead th:eq(1)')
          .text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
        this.picker.find('.datetimepicker-minutes thead th:eq(1)')
          .text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
      }
      this.picker.find('tfoot th.today')
        .text(dates[this.language].today)
        .toggle(this.todayBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      /*var prevMonth = UTCDate(year, month, 0,0,0,0,0);
       prevMonth.setUTCDate(prevMonth.getDate() - (prevMonth.getUTCDay() - this.weekStart + 7)%7);*/
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
        day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() == this.weekStart) {
          html.push('<tr>');
        }
        clsName = '';
        if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
          clsName += ' old';
        } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
          clsName += ' new';
        }
        // Compare internal UTC date with local today, not UTC today
        if (this.todayHighlight &&
          prevMonth.getUTCFullYear() == today.getFullYear() &&
          prevMonth.getUTCMonth() == today.getMonth() &&
          prevMonth.getUTCDate() == today.getDate()) {
          clsName += ' today';
        }
        if (prevMonth.valueOf() == currentDate) {
          clsName += ' active';
        }
        if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
          $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
          clsName += ' disabled';
        }
        html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
        if (prevMonth.getUTCDay() == this.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

      html = [];
      var txt = '', meridian = '', meridianOld = '';
      var hoursDisabled = this.hoursDisabled || [];
      for (var i = 0; i < 24; i++) {
        if (hoursDisabled.indexOf(i) !== -1) continue;
        var actual = UTCDate(year, month, dayMonth, i);
        clsName = '';
        // We want the previous hour for the startDate
        if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
          clsName += ' disabled';
        } else if (hours == i) {
          clsName += ' active';
        }
        if (this.showMeridian && dates[this.language].meridiem.length == 2) {
          meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
          if (meridian != meridianOld) {
            if (meridianOld != '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = (i % 12 ? i % 12 : 12);
          html.push('<span class="hour' + clsName + ' hour_' + (i < 12 ? 'am' : 'pm') + '">' + txt + '</span>');
          if (i == 23) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          html.push('<span class="hour' + clsName + '">' + txt + '</span>');
        }
      }
      this.picker.find('.datetimepicker-hours td').html(html.join(''));

      html = [];
      txt = '', meridian = '', meridianOld = '';
      var minutesDisabled = this.minutesDisabled || [];
      for (var i = 0; i < 60; i += this.minuteStep) {
        if (minutesDisabled.indexOf(i) !== -1) continue;
        var actual = UTCDate(year, month, dayMonth, hours, i, 0);
        clsName = '';
        if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
          clsName += ' disabled';
        } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
          clsName += ' active';
        }
        if (this.showMeridian && dates[this.language].meridiem.length == 2) {
          meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
          if (meridian != meridianOld) {
            if (meridianOld != '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = (hours % 12 ? hours % 12 : 12);
          //html.push('<span class="minute'+clsName+' minute_'+(hours<12?'am':'pm')+'">'+txt+'</span>');
          html.push('<span class="minute' + clsName + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
          if (i == 59) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          //html.push('<span class="hour'+clsName+'">'+txt+'</span>');
          html.push('<span class="minute' + clsName + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
        }
      }
      this.picker.find('.datetimepicker-minutes td').html(html.join(''));

      var currentYear = this.date.getUTCFullYear();
      var months = this.picker.find('.datetimepicker-months')
        .find('th:eq(1)')
        .text(year)
        .end()
        .find('span').removeClass('active');
      if (currentYear == year) {
        // getUTCMonths() returns 0 based, and we need to select the next one
                // To cater bootstrap 2 we don't need to select the next one
                var offset = months.length - 12;
        months.eq(this.date.getUTCMonth() + offset).addClass('active');
      }
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year == startYear) {
        months.slice(0, startMonth + 1).addClass('disabled');
      }
      if (year == endYear) {
        months.slice(endMonth).addClass('disabled');
      }

      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.picker.find('.datetimepicker-years')
        .find('th:eq(1)')
        .text(year + '-' + (year + 9))
        .end()
        .find('td');
      year -= 1;
      for (var i = -1; i < 11; i++) {
        html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
        year += 1;
      }
      yearCont.html(html);
      this.place();
    },

    updateNavArrows: function () {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        day = d.getUTCDate(),
        hour = d.getUTCHours();
      switch (this.viewMode) {
        case 0:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()
            && day <= this.startDate.getUTCDate()
            && hour <= this.startDate.getUTCHours()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()
            && day >= this.endDate.getUTCDate()
            && hour >= this.endDate.getUTCHours()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 1:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()
            && day <= this.startDate.getUTCDate()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()
            && day >= this.endDate.getUTCDate()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 2:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 3:
        case 4:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
      }
    },

    mousewheel: function (e) {

      e.preventDefault();
      e.stopPropagation();

      if (this.wheelPause) {
        return;
      }

      this.wheelPause = true;

      var originalEvent = e.originalEvent;

      var delta = originalEvent.wheelDelta;

      var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;

      if (this.wheelViewModeNavigationInverseDirection) {
        mode = -mode;
      }

      this.showMode(mode);

      setTimeout($.proxy(function () {

        this.wheelPause = false

      }, this), this.wheelViewModeNavigationDelay);

    },

    click: function (e) {
      e.stopPropagation();
      e.preventDefault();
      var target = $(e.target).closest('span, td, th, legend');
      if (target.is('.' + this.icontype)) {
        target = $(target).parent().closest('span, td, th, legend');
      }
      if (target.length == 1) {
        if (target.is('.disabled')) {
          this.element.trigger({
            type:      'outOfRange',
            date:      this.viewDate,
            startDate: this.startDate,
            endDate:   this.endDate
          });
          return;
        }
        switch (target[0].nodeName.toLowerCase()) {
          case 'th':
            switch (target[0].className) {
              case 'switch':
                this.showMode(1);
                break;
              case 'prev':
              case 'next':
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveHour(this.viewDate, dir);
                    break;
                  case 1:
                    this.viewDate = this.moveDate(this.viewDate, dir);
                    break;
                  case 2:
                    this.viewDate = this.moveMonth(this.viewDate, dir);
                    break;
                  case 3:
                  case 4:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    break;
                }
                this.fill();
                this.element.trigger({
                  type:      target[0].className + ':' + this.convertViewModeText(this.viewMode),
                  date:      this.viewDate,
                  startDate: this.startDate,
                  endDate:   this.endDate
                });
                break;
              case 'today':
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

                // Respect startDate and endDate.
                if (date < this.startDate) date = this.startDate;
                else if (date > this.endDate) date = this.endDate;

                this.viewMode = this.startViewMode;
                this.showMode(0);
                this._setDate(date);
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
                break;
            }
            break;
          case 'span':
            if (!target.is('.disabled')) {
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                day = this.viewDate.getUTCDate(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();

              if (target.is('.month')) {
                this.viewDate.setUTCDate(1);
                month = target.parent().find('span').index(target);
                day = this.viewDate.getUTCDate();
                this.viewDate.setUTCMonth(month);
                this.element.trigger({
                  type: 'changeMonth',
                  date: this.viewDate
                });
                if (this.viewSelect >= 3) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.year')) {
                this.viewDate.setUTCDate(1);
                year = parseInt(target.text(), 10) || 0;
                this.viewDate.setUTCFullYear(year);
                this.element.trigger({
                  type: 'changeYear',
                  date: this.viewDate
                });
                if (this.viewSelect >= 4) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.hour')) {
                hours = parseInt(target.text(), 10) || 0;
                if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
                  if (hours == 12 && target.hasClass('hour_am')) {
                    hours = 0;
                  } else if (hours != 12 && target.hasClass('hour_pm')) {
                    hours += 12;
                  }
                }
                this.viewDate.setUTCHours(hours);
                this.element.trigger({
                  type: 'changeHour',
                  date: this.viewDate
                });
                if (this.viewSelect >= 1) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.minute')) {
                minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                this.viewDate.setUTCMinutes(minutes);
                this.element.trigger({
                  type: 'changeMinute',
                  date: this.viewDate
                });
                if (this.viewSelect >= 0) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              }
              if (this.viewMode != 0) {
                var oldViewMode = this.viewMode;
                this.showMode(-1);
                this.fill();
                if (oldViewMode == this.viewMode && this.autoclose) {
                  this.hide();
                }
              } else {
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
              }
            }
            break;
          case 'td':
            if (target.is('.day') && !target.is('.disabled')) {
              var day = parseInt(target.text(), 10) || 1;
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();
              if (target.is('.old')) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is('.new')) {
                if (month == 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }
              this.viewDate.setUTCFullYear(year);
              this.viewDate.setUTCMonth(month, day);
              this.element.trigger({
                type: 'changeDay',
                date: this.viewDate
              });
              if (this.viewSelect >= 2) {
                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
              }
            }
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
            break;
        }
      }
    },

    _setDate: function (date, which) {
      if (!which || which == 'date')
        this.date = date;
      if (!which || which == 'view')
        this.viewDate = date;
      this.fill();
      this.setValue();
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element) {
        element.change();
        if (this.autoclose && (!which || which == 'date')) {
          //this.hide();
        }
      }
      this.element.trigger({
        type: 'changeDate',
        date: this.date
      });
      if(date == null)
        this.date = this.viewDate;
    },

    moveMinute: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
      return new_date;
    },

    moveHour: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCHours(new_date.getUTCHours() + dir);
      return new_date;
    },

    moveDate: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCDate(new_date.getUTCDate() + dir);
      return new_date;
    },

    moveMonth: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
        day = new_date.getUTCDate(),
        month = new_date.getUTCMonth(),
        mag = Math.abs(dir),
        new_month, test;
      dir = dir > 0 ? 1 : -1;
      if (mag == 1) {
        test = dir == -1
          // If going back one month, make sure month is not current month
          // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
          ? function () {
          return new_date.getUTCMonth() == month;
        }
          // If going forward one month, make sure month is as expected
          // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
          : function () {
          return new_date.getUTCMonth() != new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
        if (new_month < 0 || new_month > 11)
          new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++)
          // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
          new_date = this.moveMonth(new_date, dir);
        // ...then reset the day, keeping it in the new month
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function () {
          return new_month != new_date.getUTCMonth();
        };
      }
      // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month
      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },

    moveYear: function (date, dir) {
      return this.moveMonth(date, dir * 12);
    },

    dateWithinRange: function (date) {
      return date >= this.startDate && date <= this.endDate;
    },

    keydown: function (e) {
      if (this.picker.is(':not(:visible)')) {
        if (e.keyCode == 27) // allow escape to hide and re-show picker
          this.show();
        return;
      }
      var dateChanged = false,
        dir, day, month,
        newDate, newViewDate;
      switch (e.keyCode) {
        case 27: // escape
          this.hide();
          e.preventDefault();
          break;
        case 37: // left
        case 39: // right
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 37 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode == 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode == 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode == 2) {
            newDate = this.moveDate(this.date, dir);
            newViewDate = this.moveDate(this.viewDate, dir);
          } else if (viewMode == 1) {
            newDate = this.moveHour(this.date, dir);
            newViewDate = this.moveHour(this.viewDate, dir);
          } else if (viewMode == 0) {
            newDate = this.moveMinute(this.date, dir);
            newViewDate = this.moveMinute(this.viewDate, dir);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 38: // up
        case 40: // down
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 38 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode == 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode == 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode == 2) {
            newDate = this.moveDate(this.date, dir * 7);
            newViewDate = this.moveDate(this.viewDate, dir * 7);
          } else if (viewMode == 1) {
            if (this.showMeridian) {
              newDate = this.moveHour(this.date, dir * 6);
              newViewDate = this.moveHour(this.viewDate, dir * 6);
            } else {
              newDate = this.moveHour(this.date, dir * 4);
              newViewDate = this.moveHour(this.viewDate, dir * 4);
            }
          } else if (viewMode == 0) {
            newDate = this.moveMinute(this.date, dir * 4);
            newViewDate = this.moveMinute(this.viewDate, dir * 4);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 13: // enter
          if (this.viewMode != 0) {
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
          } else {
            this.fill();
            if (this.autoclose) {
              this.hide();
            }
          }
          e.preventDefault();
          break;
        case 9: // tab
          this.hide();
          break;
      }
      if (dateChanged) {
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find('input');
        }
        if (element) {
          element.change();
        }
        this.element.trigger({
          type: 'changeDate',
          date: this.date
        });
      }
    },

    showMode: function (dir) {
      if (dir) {
        var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
        if (newViewMode >= this.minView && newViewMode <= this.maxView) {
          this.element.trigger({
            type:        'changeMode',
            date:        this.viewDate,
            oldViewMode: this.viewMode,
            newViewMode: newViewMode
          });

          this.viewMode = newViewMode;
        }
      }
      /*
       vitalets: fixing bug of very special conditions:
       jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
       Method show() does not set display css correctly and datetimepicker is not shown.
       Changed to .css('display', 'block') solve the problem.
       See https://github.com/vitalets/x-editable/issues/37

       In jquery 1.7.2+ everything works fine.
       */
      //this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
      this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    },

    reset: function (e) {
      this._setDate(null, 'date');
    },

    convertViewModeText:  function (viewMode) {
      switch (viewMode) {
        case 4:
          return 'decade';
        case 3:
          return 'year';
        case 2:
          return 'month';
        case 1:
          return 'day';
        case 0:
          return 'hour';
      }
    }
  };

  var old = $.fn.datetimepicker;
  $.fn.datetimepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
        data = $this.data('datetimepicker'),
        options = typeof option == 'object' && option;
      if (!data) {
        $this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
      }
      if (typeof option == 'string' && typeof data[option] == 'function') {
        internal_return = data[option].apply(data, args);
        if (internal_return !== undefined) {
          return false;
        }
      }
    });
    if (internal_return !== undefined)
      return internal_return;
    else
      return this;
  };

  $.fn.datetimepicker.defaults = {
  };
  $.fn.datetimepicker.Constructor = Datetimepicker;
  var dates = $.fn.datetimepicker.dates = {
    en: {
      days:        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      daysShort:   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      daysMin:     ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      months:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      meridiem:    ['am', 'pm'],
      suffix:      ['st', 'nd', 'rd', 'th'],
      today:       'Today'
    }
  };

  var DPGlobal = {
    modes:            [
      {
        clsName: 'minutes',
        navFnc:  'Hours',
        navStep: 1
      },
      {
        clsName: 'hours',
        navFnc:  'Date',
        navStep: 1
      },
      {
        clsName: 'days',
        navFnc:  'Month',
        navStep: 1
      },
      {
        clsName: 'months',
        navFnc:  'FullYear',
        navStep: 1
      },
      {
        clsName: 'years',
        navFnc:  'FullYear',
        navStep: 10
      }
    ],
    isLeapYear:       function (year) {
      return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
    },
    getDaysInMonth:   function (year, month) {
      return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    },
    getDefaultFormat: function (type, field) {
      if (type == 'standard') {
        if (field == 'input')
          return 'yyyy-mm-dd hh:ii';
        else
          return 'yyyy-mm-dd hh:ii:ss';
      } else if (type == 'php') {
        if (field == 'input')
          return 'Y-m-d H:i';
        else
          return 'Y-m-d H:i:s';
      } else {
        throw new Error('Invalid format type.');
      }
    },
    validParts: function (type) {
      if (type == 'standard') {
        return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
      } else if (type == 'php') {
        return /[dDjlNwzFmMnStyYaABgGhHis]/g;
      } else {
        throw new Error('Invalid format type.');
      }
    },
    nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
    parseFormat: function (format, type) {
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts(type), '\0').split('\0'),
        parts = format.match(this.validParts(type));
      if (!separators || !separators.length || !parts || parts.length == 0) {
        throw new Error('Invalid date format.');
      }
      return {separators: separators, parts: parts};
    },
    parseDate:        function (date, format, language, type) {
      if (date instanceof Date) {
        var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
        dateUTC.setMilliseconds(0);
        return dateUTC;
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
      }
      if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
        var part_re = /([-+]\d+)([dmwy])/,
          parts = date.match(/([-+]\d+)([dmwy])/g),
          part, dir;
        date = new Date();
        for (var i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          switch (part[2]) {
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case 'm':
              date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
              break;
            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case 'y':
              date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
              break;
          }
        }
        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
      }
      var parts = date && date.toString().match(this.nonpunctuation) || [],
        date = new Date(0, 0, 0, 0, 0, 0, 0),
        parsed = {},
        setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P'],
        setters_map = {
          hh:   function (d, v) {
            return d.setUTCHours(v);
          },
          h:    function (d, v) {
            return d.setUTCHours(v);
          },
          HH:   function (d, v) {
            return d.setUTCHours(v == 12 ? 0 : v);
          },
          H:    function (d, v) {
            return d.setUTCHours(v == 12 ? 0 : v);
          },
          ii:   function (d, v) {
            return d.setUTCMinutes(v);
          },
          i:    function (d, v) {
            return d.setUTCMinutes(v);
          },
          ss:   function (d, v) {
            return d.setUTCSeconds(v);
          },
          s:    function (d, v) {
            return d.setUTCSeconds(v);
          },
          yyyy: function (d, v) {
            return d.setUTCFullYear(v);
          },
          yy:   function (d, v) {
            return d.setUTCFullYear(2000 + v);
          },
          m:    function (d, v) {
            v -= 1;
            while (v < 0) v += 12;
            v %= 12;
            d.setUTCMonth(v);
            while (d.getUTCMonth() != v)
              if (isNaN(d.getUTCMonth()))
                return d;
              else
                d.setUTCDate(d.getUTCDate() - 1);
            return d;
          },
          d:    function (d, v) {
            return d.setUTCDate(v);
          },
          p:    function (d, v) {
            return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours());
          }
        },
        val, filtered, part;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      setters_map['P'] = setters_map['p'];
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      if (parts.length == format.parts.length) {
        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = format.parts[i];
          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m.toLowerCase() == p.toLowerCase();
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
              case 'p':
              case 'P':
                val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
                break;
            }
          }
          parsed[part] = val;
        }
        for (var i = 0, s; i < setters_order.length; i++) {
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s]))
            setters_map[s](date, parsed[s])
        }
      }
      return date;
    },
    formatDate:       function (date, format, language, type) {
      if (date == null) {
        return '';
      }
      var val;
      if (type == 'standard') {
        val = {
          // year
          yy:   date.getUTCFullYear().toString().substring(2),
          yyyy: date.getUTCFullYear(),
          // month
          m:    date.getUTCMonth() + 1,
          M:    dates[language].monthsShort[date.getUTCMonth()],
          MM:   dates[language].months[date.getUTCMonth()],
          // day
          d:    date.getUTCDate(),
          D:    dates[language].daysShort[date.getUTCDay()],
          DD:   dates[language].days[date.getUTCDay()],
          p:    (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
          // hour
          h:    date.getUTCHours(),
          // minute
          i:    date.getUTCMinutes(),
          // second
          s:    date.getUTCSeconds()
        };

        if (dates[language].meridiem.length == 2) {
          val.H = (val.h % 12 == 0 ? 12 : val.h % 12);
        }
        else {
          val.H = val.h;
        }
        val.HH = (val.H < 10 ? '0' : '') + val.H;
        val.P = val.p.toUpperCase();
        val.hh = (val.h < 10 ? '0' : '') + val.h;
        val.ii = (val.i < 10 ? '0' : '') + val.i;
        val.ss = (val.s < 10 ? '0' : '') + val.s;
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
      } else if (type == 'php') {
        // php format
        val = {
          // year
          y: date.getUTCFullYear().toString().substring(2),
          Y: date.getUTCFullYear(),
          // month
          F: dates[language].months[date.getUTCMonth()],
          M: dates[language].monthsShort[date.getUTCMonth()],
          n: date.getUTCMonth() + 1,
          t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
          // day
          j: date.getUTCDate(),
          l: dates[language].days[date.getUTCDay()],
          D: dates[language].daysShort[date.getUTCDay()],
          w: date.getUTCDay(), // 0 -> 6
          N: (date.getUTCDay() == 0 ? 7 : date.getUTCDay()),       // 1 -> 7
          S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
          // hour
          a: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
          g: (date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12),
          G: date.getUTCHours(),
          // minute
          i: date.getUTCMinutes(),
          // second
          s: date.getUTCSeconds()
        };
        val.m = (val.n < 10 ? '0' : '') + val.n;
        val.d = (val.j < 10 ? '0' : '') + val.j;
        val.A = val.a.toString().toUpperCase();
        val.h = (val.g < 10 ? '0' : '') + val.g;
        val.H = (val.G < 10 ? '0' : '') + val.G;
        val.i = (val.i < 10 ? '0' : '') + val.i;
        val.s = (val.s < 10 ? '0' : '') + val.s;
      } else {
        throw new Error('Invalid format type.');
      }
      var date = [],
        seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
        if (seps.length) {
          date.push(seps.shift());
        }
        date.push(val[format.parts[i]]);
      }
      if (seps.length) {
        date.push(seps.shift());
      }
      return date.join('');
    },
    convertViewMode:  function (viewMode) {
      switch (viewMode) {
        case 4:
        case 'decade':
          viewMode = 4;
          break;
        case 3:
        case 'year':
          viewMode = 3;
          break;
        case 2:
        case 'month':
          viewMode = 2;
          break;
        case 1:
        case 'day':
          viewMode = 1;
          break;
        case 0:
        case 'hour':
          viewMode = 0;
          break;
      }

      return viewMode;
    },
    headTemplate: '<thead>' +
                '<tr>' +
                '<th class="prev"><i class="{iconType} {leftArrow}"/></th>' +
                '<th colspan="5" class="switch"></th>' +
                '<th class="next"><i class="{iconType} {rightArrow}"/></th>' +
                '</tr>' +
      '</thead>',
    headTemplateV3: '<thead>' +
                '<tr>' +
                '<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>' +
                '<th colspan="5" class="switch"></th>' +
                '<th class="next"><span class="{iconType} {rightArrow}"></span> </th>' +
                '</tr>' +
      '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
  };
  DPGlobal.template = '<div class="datetimepicker">' +
    '<div class="datetimepicker-minutes">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-hours">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-days">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    '<tbody></tbody>' +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-months">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-years">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '</div>';
  DPGlobal.templateV3 = '<div class="datetimepicker">' +
    '<div class="datetimepicker-minutes">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-hours">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-days">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    '<tbody></tbody>' +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-months">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-years">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '</div>';
  $.fn.datetimepicker.DPGlobal = DPGlobal;

  /* DATETIMEPICKER NO CONFLICT
   * =================== */

  $.fn.datetimepicker.noConflict = function () {
    $.fn.datetimepicker = old;
    return this;
  };

  /* DATETIMEPICKER DATA-API
   * ================== */

  $(document).on(
    'focus.datetimepicker.data-api click.datetimepicker.data-api',
    '[data-provide="datetimepicker"]',
    function (e) {
      var $this = $(this);
      if ($this.data('datetimepicker')) return;
      e.preventDefault();
      // component click requires us to explicitly show it
      $this.datetimepicker('show');
    }
  );
  $(function () {
    $('[data-provide="datetimepicker-inline"]').datetimepicker();
  });

}(window.jQuery);

var App = (function () {
  'use strict';

  App.formElements = function( ){

    //Js Code
    $(".datetimepicker").datetimepicker({
    	autoclose: true,
    	componentIcon: '.s7-date',
    	navIcons:{
    		rightIcon: 's7-angle-right',
    		leftIcon: 's7-angle-left'
    	}
    });
    
    //Select2
    $(".select2").select2({
      width: '100%'
    });
    
    //Select2 tags
    $(".tags").select2({tags: true, width: '100%'});

    //Bootstrap Slider
    $('.bslider').bootstrapSlider();
    
  };

  return App;
})(App || {});

//# sourceMappingURL=all.js.map
