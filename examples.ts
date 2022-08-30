import validator, { rules } from './validator';

console.log(validator(
  rules.isRequired()
)(''));

console.log(validator(
  rules.isRequired('Обязательное поле для ввода!'),
  rules.isEmail('Неверный формат записи Email!'),
)('32rf@ererer'));

console.log(validator(
  rules.isRequired('Обязательное поле для ввода!'),
  rules.isLink('Неверный формат записи Ссылки!'),
)('http://qwqwqwqw.ru'));

