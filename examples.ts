import validator, { rules } from './validator';

console.log('', validator(
  rules.isRequired({ msg: 'Запись обязательна!' })
)(''));

console.log('32rf@ererer', validator(
  rules.min({ len: 10, msg: 'Запись слишком короткая!' }),
  rules.isEmail({ msg: 'Это не почта!' })
)('32rf@ererer'));

console.log('http://qwqwqwqw.ru', validator(
  rules.isLink({ msg: 'Неверный формат записи Ссылки!' }),
)('http://qwqwqwqw.ru'));
