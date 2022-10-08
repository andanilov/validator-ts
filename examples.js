"use strict";
exports.__esModule = true;
var validator_1 = require("./validator");
console.log('', (0, validator_1["default"])(validator_1.rules.isRequired({ msg: 'Запись обязательна!' }))(''));
console.log('32rf@ererer', (0, validator_1["default"])(validator_1.rules.min({ len: 10, msg: 'Запись слишком короткая!' }), validator_1.rules.isEmail({ msg: 'Это не почта!' }))('32rf@ererer'));
console.log('http://qwqwqwqw.ru', (0, validator_1["default"])(validator_1.rules.isLink({ msg: 'Неверный формат записи Ссылки!' }))('http://qwqwqwqw.ru'));
