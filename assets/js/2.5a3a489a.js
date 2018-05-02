(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{77:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"python-tornado服务器后台跨域设置示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-tornado服务器后台跨域设置示例","aria-hidden":"true"}},[t._v("#")]),t._v(" Python-Tornado服务器后台跨域设置示例")]),n("p",[t._v("在BaseWebsiteHandler中重写tornado.web.RequestHandler时候，在initialize方法中添加如下代码：")]),n("ul",[n("li",[t._v("允许所有域的请求")])]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# TODO 上线前的测试用，上线时移除或修改")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'POST, DELETE, PUT, GET, OPTIONS'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  设置允许请求的方法\norigin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Origin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  Tornado获取请求"),n("span",{attrs:{class:"token string"}},[t._v("'origin'")]),t._v("的方法\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" origin "),n("span",{attrs:{class:"token operator"}},[t._v("or")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'*'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  设置允许的"),n("span",{attrs:{class:"token string"}},[t._v("'origin'")]),t._v("，只设置"),n("span",{attrs:{class:"token string"}},[t._v("'*'")]),t._v("时某些特定情况下会失败故最好优先获取请求的域加入允许组中\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Credentials'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'true'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  设置是否允许客户端携带证书式访问。通过对 Credentials 参数的设置，就可以保持跨域 Ajax 时的 Cookie\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'Origin, X-Requested-With, Content-Type, Accept, client_id, uuid, Authorization'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("ul",[n("li",[t._v("允许指定域的请求")])]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# TODO 上线前的测试用，上线时移除或修改")]),t._v("\nallow_origin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v("'http://127.0.0.1:3000'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# me")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v("'http://192.168.2.97:3000'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# test")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v("'http://192.168.2.97'")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# nginx")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'POST, DELETE, PUT, GET, OPTIONS'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  设置允许请求的方法\norigin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Origin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  Tornado获取请求"),n("span",{attrs:{class:"token string"}},[t._v("'origin'")]),t._v("的方法\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" origin "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" allow_origin"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" origin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  设置允许的"),n("span",{attrs:{class:"token string"}},[t._v("'origin'")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Credentials'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'true'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  设置是否允许客户端携带证书式访问。通过对 Credentials 参数的设置，就可以保持跨域 Ajax 时的 Cookie\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_header"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'Origin, X-Requested-With, Content-Type, Accept, client_id, uuid, Authorization'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);