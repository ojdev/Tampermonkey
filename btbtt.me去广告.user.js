// ==UserScript==
// @name         btbtt.me去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  btbtt去广告
// @author       ojdev
// @match        https://www.btbtt.me/*
// @match        *://*btbtt*
// @match        *://*btbtt*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function () {
        $("#wrapper_left_bg").remove();
        $("#wrapper_right_bg").remove();
        $(".width.imgs_1").remove();
    }, 100);
})();
