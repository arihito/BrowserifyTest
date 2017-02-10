// BrowserifyはCommonJSモジュール形式をサポート
const load = require("lodash");
// 外部モジュールの読み込み
const list = require("./list");

console.log(load.map(list, (i) => i + 1));
console.log(load.map([1, 2], (i) => i + 1));

