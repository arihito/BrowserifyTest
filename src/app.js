// BrowserifyはCommonJSモジュール形式をサポート
const load = require("lodash");

console.log(load.map([1, 2], (i) => i + 1));

