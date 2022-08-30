"use strict";
exports.__esModule = true;
var validator_1 = require("./validator");
console.log((0, validator_1["default"])(validator_1.rules.isRequired())(''));
console.log((0, validator_1["default"])(validator_1.rules.isRequired('Обязательное поле для ввода!'), validator_1.rules.isEmail('Неверный формат записи Email!'))('32rf@ererer'));
console.log((0, validator_1["default"])(validator_1.rules.isRequired('Обязательное поле для ввода!'), validator_1.rules.isLink('Неверный формат записи Ссылки!'))('http://qwqwqwqw.ru'));
