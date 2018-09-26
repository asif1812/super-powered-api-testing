/*!
 * Karma Host Environment
 * v1.1.1 (June 12th 2017)
 * https://github.com/bigstickcarpet/karma-host-environment
 * https://cdn.rawgit.com/BigstickCarpet/karma-host-environment/83d42517/dist/karma-host-environment.min.js
 *
 * @author  James Messinger (http://bigstickcarpet.com)
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.host=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var Host=require("./host"),userAgent=require("./user-agent");module.exports=window.host=new Host({global:window,node:!1,karma:!1,os:userAgent.getOS(),browser:userAgent.getBrowser(),env:{}})},{"./host":2,"./user-agent":3}],2:[function(require,module,exports){"use strict";function Host(t){clone(this,t)}function clone(t,o){for(var e=Object.keys(o),n=0;n<e.length;n++){var r=e[n];t[r]=o[r]}return t}module.exports=Host,Host.prototype.toJSON=function(){var t=clone({},this);return t.global=Object.prototype.toString.call(t.global),t}},{}],3:[function(require,module,exports){"use strict";module.exports={getBrowser:function(){for(var e=navigator.userAgent,n={IE:!1,chrome:!1,firefox:!1,safari:!1,mobile:/(Mobile|Android|iPhone|iPad)/.test(e)},r=[{name:"IE",pattern:/(?:MSIE|Edge)(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{name:"IE",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{name:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{name:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{name:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}],a=0;a<r.length;a++){var t=r[a].pattern.exec(e);if(t){var i=parseInt(t[1])||0,o=parseInt(t[2])||0,d=parseInt(t[3])||0;(n[r[a].name]={version:parseFloat(i+"."+o),majorVersion:i,minorVersion:o,patchVersion:d})["v"+i]=!0;break}}return n},getOS:function(){for(var e=navigator.userAgent,n={windows:!1,mac:!1,linux:!1},r=[{name:"mac",pattern:/(Mac OS|Macintosh|iPhone|iPad)/},{name:"windows",pattern:/(Windows NT|Windows Phone)/},{name:"linux",pattern:/(Linux|Android)/}],a=0;a<r.length;a++){if(r[a].pattern.exec(e)){n[r[a].name]=!0;break}}return n}}},{}]},{},[1])(1)});
//# sourceMappingURL=karma-host-environment.min.js.map