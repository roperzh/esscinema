function CustomEvent(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}window.Essential={rootElement:document,Core:{},start:function(e){this.loadBehaviors({application:e})},loadBehaviors:function(e){e.context=e.context||this.rootElement;var t=this.initializeBehaviors(e.application,e.context);this.launchBehaviors(t)},initializeBehaviors:function(e,t){for(var n=this.Core.crawl(t),r=Object.keys(n),o=[],i=-1;r[++i];){var a=r[i],s=this.Core.camelize(a),c=e[s];if("undefined"!=typeof c)for(var u=n[a],l=-1;u[++l];){var p=c.new(u[l],!0);o.push(p)}}return o},launchBehaviors:function(e){for(var t=e.sort(this.Core.SortMethods.byPriority),n=-1;t[++n];)t[n].start()}},Object.getOwnPropertyDescriptors||(Object.getOwnPropertyDescriptors=function(e){var t={};return Object.getOwnPropertyNames(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t});var Proto={"new":function(){var e=Object.create(this);return e.constructor&&e.constructor.apply(e,arguments),e},extend:function(e){var t=Object.create(this,Object.getOwnPropertyDescriptors(e));return t.super=this,t}};Function.prototype.extend=function(e){var t=this,n=Proto.extend.call(t.prototype,Proto);return n.extend(e)},CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent,Essential.Behavior=Proto.extend({constructor:function(e,t){this.el=e,t||this.start()},start:function(){this.delegateEvents(),this.listenChannels(),"function"==typeof this.init&&this.init()},delegateEvents:function(){Essential.Core.mapEvents.call(this,this.events,this.el)},listenChannels:function(){Essential.Core.mapEvents.call(this,this.channels,document)},emit:function(e){e.context=e.context||this.el,e.data=e.data||{},e.bubbles=e.bubbles||!0,e.cancelable=e.cancelable||!1;var t=new CustomEvent(e.channel,{bubbles:e.bubbles,cancelable:e.cancelable,detail:e.data});e.context.dispatchEvent(t)},priority:0}),Essential.Core.mapEvents=function(e,t){if("undefined"!=typeof e){var n=/^(\S+)\s*(.*)$/;for(var r in e){var o=e[r],i=r.match(n),a=i[1],s=i[2],c=s?t.querySelectorAll(s):[t];"undefined"!=typeof this[o]&&Essential.Core.bind(a,c,this[o].bind(this))}}},Essential.Core.bind=function(e,t,n){for(var r=-1;t[++r];){var o=t[r];o.addEventListener?t[r].addEventListener(e,n):o.attachEvent("on"+e,n)}},Essential.Core.SPECIAL_CHARS_REGEXP=/([\:\-\_]+(.))/g,Essential.Core.FIRST_LETTER_REGEXP=/^[a-z]/g,Essential.Core.camelize=function(e){return e.replace(Essential.Core.FIRST_LETTER_REGEXP,function(e){return e.toUpperCase()}).replace(Essential.Core.SPECIAL_CHARS_REGEXP,function(e,t,n){return n.toUpperCase()})},Essential.Core.crawl=function(e){for(var t=e.querySelectorAll("[data-behavior], [behavior]"),n=-1,r={};t[++n];)for(var o=t[n],i=o.getAttribute("data-behavior")||o.getAttribute("behavior"),a=i.split(" "),s=-1;a[++s];){var c=a[s];r[c]?r[c].push(o):r[c]=[o]}return r},Essential.Core.SortMethods={byPriority:function(e,t){return t.priority-e.priority}},function(){"use strict";function e(){var e={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=/&(?!#?\w+;)|<|>|"|'|\//g;return function(){return this?this.replace(t,function(t){return e[t]||t}):this}}function t(e,n,r){return("string"==typeof n?n:n.toString()).replace(e.define||a,function(t,n,o,i){return 0===n.indexOf("def.")&&(n=n.substring(4)),n in r||(":"===o?(e.defineParams&&i.replace(e.defineParams,function(e,t,o){r[n]={arg:t,text:o}}),n in r||(r[n]=i)):new Function("def","def['"+n+"']="+i)(r)),""}).replace(e.use||a,function(n,o){e.useParams&&(o=o.replace(e.useParams,function(e,t,n,o){if(r[n]&&r[n].arg&&o){var i=(n+":"+o).replace(/'|\\/g,"_");return r.__exp=r.__exp||{},r.__exp[i]=r[n].text.replace(new RegExp("(^|[^\\w$])"+r[n].arg+"([^\\w$])","g"),"$1"+o+"$2"),t+"def.__exp['"+i+"']"}}));var i=new Function("def","return "+o)(r);return i?t(e,i,r):i})}function n(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var r,o={version:"1.0.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1},template:void 0,compile:void 0};"undefined"!=typeof module&&module.exports?module.exports=o:"function"==typeof define&&define.amd?define(function(){return o}):(r=function(){return this||(0,eval)("this")}(),r.doT=o),String.prototype.encodeHTML=e();var i={append:{start:"'+(",end:")+'",endencode:"||'').toString().encodeHTML()+'"},split:{start:"';out+=(",end:");out+='",endencode:"||'').toString().encodeHTML();out+='"}},a=/$^/;o.template=function(r,s,c){s=s||o.templateSettings;var u,l,p=s.append?i.append:i.split,d=0,f=s.use||s.define?t(s,r,c||{}):r;f=("var out='"+(s.strip?f.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):f).replace(/'|\\/g,"\\$&").replace(s.interpolate||a,function(e,t){return p.start+n(t)+p.end}).replace(s.encode||a,function(e,t){return u=!0,p.start+n(t)+p.endencode}).replace(s.conditional||a,function(e,t,r){return t?r?"';}else if("+n(r)+"){out+='":"';}else{out+='":r?"';if("+n(r)+"){out+='":"';}out+='"}).replace(s.iterate||a,function(e,t,r,o){return t?(d+=1,l=o||"i"+d,t=n(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+r+","+l+"=-1,l"+d+"=arr"+d+".length-1;while("+l+"<l"+d+"){"+r+"=arr"+d+"["+l+"+=1];out+='"):"';} } out+='"}).replace(s.evaluate||a,function(e,t){return"';"+n(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|\}|^|\{)out\+=''\+/g,"$1out+="),u&&s.selfcontained&&(f="String.prototype.encodeHTML=("+e.toString()+"());"+f);try{return new Function(s.varname,f)}catch(v){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+f),v}},o.compile=function(e,t){return o.template(e,null,t)}}();