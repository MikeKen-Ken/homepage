"use strict";
(() => {
var exports = {};
exports.id = 452;
exports.ids = [452];
exports.modules = {

/***/ 4520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _components_chakra__WEBPACK_IMPORTED_MODULE_6__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(951);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8808);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5930);
/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_article__WEBPACK_IMPORTED_MODULE_2__]);
_components_layouts_article__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Work = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_article__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "freeDBTagger",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_work__WEBPACK_IMPORTED_MODULE_4__/* .Title */ .Dx, {
                    children: [
                        "freeDBTagger ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                            children: "2004-2009"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                    my: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        src: "/images/works/freedbtagger_icon.gif",
                        alt: "icon"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: "Automatic audio file tagging tool using FreeDB for Windows"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: "\u697D\u66F2\u9577\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3057\u3066\u697D\u66F2\u60C5\u5831\u3092\u81EA\u52D5\u5165\u529B"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: "\u30A2\u30EB\u30D0\u30E0\u5185\u697D\u66F2\u306E\u518D\u751F\u6642\u9593\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u3001CDDB\u30B5\u30FC\u30D0\u30FC\u201CfreeDB.org\u201D\u3092\u691C\u7D22\u3057\u3066\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3001\u697D\u66F2\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u308BID3\u30BF\u30B0\u4E00\u62EC\u7DE8\u96C6\u30BD\u30D5\u30C8\u3002\u672C\u30BD\u30D5\u30C8\u3092\u8D77\u52D5\u3057\u3001\u8AAD\u307F\u8FBC\u3093\u3060\u30A2\u30EB\u30D0\u30E01\u679A\u5206\u306E\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u306E\u66F2\u9806\u3092\u6574\u3048\u3066\uFF3B\u30A2\u30EB\u30D0\u30E0\u691C\u7D22\uFF3D\u3092\u5B9F\u884C\u3059\u308C\u3070\u3001\u3042\u3068\u306F\u672C\u30BD\u30D5\u30C8\u304C\u3001\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u3067\u904B\u55B6\u3055\u308C\u3066\u3044\u308BCDDB\u30B5\u30FC\u30D0\u30FC\u201CfreeDB.org\u201D\u3067\u518D\u751F\u6642\u9593\u306E\u7D44\u307F\u5408\u308F\u305B\u304B\u3089\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3057\u3066\u3001\u30A2\u30EB\u30D0\u30E0\u540D\u3084\u66F2\u540D\u3001\u30A2\u30FC\u30C1\u30B9\u30C8\u540D\u306A\u3069\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u3066\u304F\u308C\u308B\u3002MP3/WMA/Ogg Vorbis/AAC/Monkey's Audio/MPEGplus/FLAC/Twin VQ/WavPack\u30D5\u30A1\u30A4\u30EB\u306E\u697D\u66F2\u60C5\u5831\u3092\u53D6\u5F97\u30FB\u7DE8\u96C6\u3067\u304D\u308B\u307B\u304B\u3001CDA\u30D5\u30A1\u30A4\u30EB\u306E\u697D\u66F2\u60C5\u5831\u3092\u8868\u793A\u53EF\u80FD\u3002MP3\u30D5\u30A1\u30A4\u30EB\u306E\u30BF\u30B0\u306B\u767B\u9332\u3059\u308B\u5834\u5408\u306E\u30BF\u30B0\u5F62\u5F0F\u306F\u3001ID3v1\u30FBID3v2\u306B\u5BFE\u5FDC\u3057\u3066\u304A\u308A\u3001\u8A2D\u5B9A\u753B\u9762\u3067\u9078\u629E\u53EF\u80FD\u3002\u30BF\u30B0\u9805\u76EE\u5185\u306E\u6587\u5B57\u6570\u304C30\u6587\u5B57\u4EE5\u4E0A\u306E\u5834\u5408\u306E\u307F\u3001ID3v2\u306B\u767B\u9332\u3059\u308B\u6A5F\u80FD\u3082\u5099\u3048\u3066\u3044\u308B\u3002"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
                    ml: 4,
                    my: 4,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_4__/* .Meta */ .h_, {
                                    children: "Platform"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Windows 2000/XP"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_4__/* .Meta */ .h_, {
                                    children: "Stack"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Delphi"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_4__/* .Meta */ .h_, {
                                    children: "Download"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "http://odoruinu.net.s3.amazonaws.com/software/freedbtagger/fdbt105.zip",
                                    children: "v1.0.5"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_4__/* .Meta */ .h_, {
                                    children: "Last update"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "2009/02/16"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                    as: "h4",
                    fontSize: 16,
                    my: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                        children: "Media coverage"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.UnorderedList, {
                    my: 4,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            href: "https://forest.watch.impress.co.jp/article/2005/02/01/freedbtagger.html",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    mr: 2,
                                    children: "\u7A93\u306E\u675C"
                                }),
                                "\u518D\u751F\u6642\u9593\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3057\u3066\u697D\u66F2\u60C5\u5831\u3092\u53D6\u5F97\u300CfreeDBTagger\u300D",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ExternalLinkIcon, {
                                    mx: "2px"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                    as: "h4",
                    fontSize: 16,
                    my: 6,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                        children: [
                            "User reviews\xa0",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                target: "_blank",
                                href: "http://www.vector.co.jp/soft/cmt/win95/art/se350576.html",
                                children: "from Vector"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.UnorderedList, {
                    my: 4,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    mr: 2,
                                    children: "FLAC\u306B\u3082\u5BFE\u5FDC - \u3088\u30FC\u3059\u3051\u3055\u3093"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u97F3\u8CEA\u306B\u3053\u3060\u308F\u3063\u3066FLAC\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001 \u306A\u304B\u306A\u304B\u30BF\u30B0\u3092\u81EA\u52D5\u3067\u4ED8\u3051\u3089\u308C\u308B\u30BD\u30D5\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001 \u3053\u308C\u306FCDDB\u304B\u3089\u66F2\u60C5\u5831\u3092DL\u307E\u3067\u3057\u3066\u304F\u308C\u308B\u306E\u3067\u3001 \u3068\u3066\u3082\u304A\u624B\u8EFD\u7C21\u5358\u3067\u3059\u3002"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    mr: 2,
                                    children: "CDDB\u5BFE\u5FDC\u306E\u30BF\u30B0\u30A8\u30C7\u30A3\u30BF - noname_24\u3055\u3093"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u7D14\u7C8B\u306A\u30BF\u30B0\u6253\u3061\u30BD\u30D5\u30C8\u3068\u3057\u3066\u306E\u80FD\u529B\u306FSuperTagEditor\u306E\u65B9\u304C\u512A\u79C0\u3067\u3059\u304C\u3053\u306E\u30BD\u30D5\u30C8\u306FCDDB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u306E\u304C\u6700\u5927\u306E\u5229\u70B9\u3067\u3059 CD\u304B\u3089\u3060\u3051\u3067\u306F\u306A\u304Fmp3\u306A\u3069\u5727\u7E2E\u5F8C\u306E\u72B6\u614B\u304B\u3089\u3067\u3082\u53D6\u5F97\u3067\u304D\u308B\u306E\u3067\u3059\u3067\u306B\u4F5C\u6210\u6E08\u307F\u306E\u66F2\u6574\u7406\u304C\u697D\u306B\u306A\u308A\u307E\u3057\u305F"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    mr: 2,
                                    children: "\u6614\u306E\u66F2\u306B\u30BF\u30B0\u3092\u5165\u308C\u308B\u306B\u6700\u9069 - \u308B\u308B\u3055\u3093"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u6700\u8FD1\u306E\u30EA\u30C3\u30D4\u30F3\u30B0\u30BD\u30D5\u30C8\u3067\u3042\u308C\u3070\u81EA\u52D5\u3067\u66F2\u540D\u3092\u6301\u3063\u3066\u304D\u3066\u304F\u308C\u307E\u3059\u304C\u4EE5\u524D\u30EA\u30C3\u30D4\u30F3\u30B0\u3057\u305F\u307E\u307E\u3067\u30BF\u30B0\u304C\u4ED8\u3044\u3066\u306A\u3044\u66F2\u306B\u30BF\u30B0\u3092\u4ED8\u3051\u308B\u306E\u306B\u306F\u6700\u9069\u3067\u3059\u3002 \u53C2\u7167\u3057\u3066\u3044\u308BCDDB\u306B\u3064\u3044\u3066\u3082\u304B\u306A\u308A\u30DE\u30A4\u30CA\u30FC\u306A\u3082\u306E\u307E\u3067\u66F2\u540D\u3092\u62FE\u3063\u3066\u304F\u308C\u308B\u306E\u3067\u3073\u3063\u304F\u308A\u3057\u307E\u3059\u3002"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    mr: 2,
                                    children: "2 in 1 - \u30DE\u30EB\u3061\u3083\u3093\u3055\u3093"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u30BF\u30B0\u7DE8\u96C6\u306F\u3044\u308D\u3044\u308D\u306A\u30BD\u30D5\u30C8\u304C\u51FA\u3066\u3044\u307E\u3059\u304C\u3001DB\u304B\u3089\u60C5\u5831\u3092\u62FE\u3063\u3066\u304F\u308C\u308B\u6A5F\u80FD\u4ED8\u3067\u306F\u3001\u3053\u306E\u30BD\u30D5\u30C8\u304C\u6700\u9AD8\u3067\u3059\u3002 \u64CD\u4F5C\u3082\u7C21\u5358\u3067\u3001\u624B\u653E\u305B\u307E\u305B\u3093\u3002"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    mr: 2,
                                    children: "\u4FBF\u5229 - Masaki4\u3055\u3093"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u666E\u901ACDDB\u3068\u3044\u3046\u3068CD\u3092\u5165\u308C\u305F\u72B6\u614B\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u304D\u307E\u3059\u304C\u3001\u3053\u306E\u30BD\u30D5\u30C8\u306FMP3\u306A\u3069\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u306A\u3063\u3066\u3044\u3066\u3082\u4F7F\u3048\u307E\u3059\u3002\uFF08\u3082\u3061\u308D\u3093\u3001CD\u306E\u901A\u308A\u306B\u66F2\u3092\u4E26\u3079\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093\u304C\u30FB\u30FB\u30FB\uFF09 \u305F\u3060\u3001\u307B\u3093\u306E\u3061\u3087\u3063\u3068\u4E0D\u5B89\u5B9A\u3055\u3092\u611F\u3058\u305F\u306E\u3067\uFF14\u3064..."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_work__WEBPACK_IMPORTED_MODULE_4__/* .WorkImage */ .WZ, {
                    src: "/images/works/freedbtagger_01.jpg",
                    alt: "freeDBTagger"
                })
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Work);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,655,20,951,681], () => (__webpack_exec__(4520)));
module.exports = __webpack_exports__;

})();