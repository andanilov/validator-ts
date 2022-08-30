type Rule = (error: string | undefined) => string | false;

export const rules = {
  isRequired: (error = 'Обязательное поле!') : Rule =>
    (data: string | object | Array<Object>) => {
      if (Array.isArray(data)) {
        return data.length ? false : error;
      }
      if (typeof data === 'object') {
        return Object.keys(data).length ? false : error;
      }
      return data ? false : error;
    },

  isEmail: (error = 'Неверный формат Email') : Rule =>
    (data: string) => (data.toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ? false
      : error),

  isYearBorn: (error = 'Год рождения некорректен') : Rule =>
    (data: string | number) => (+data < (new Date().getFullYear() - 110) || +data >= new Date().getFullYear()
      ? error 
      : false),

  isLink: (error = 'Неверный формат ссылки') : Rule =>
    (data: string) => (data.toLowerCase()
      .match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
      ? false
      : error),
};
  
export default (...fns : Function[] ) => (x : number | string | object | Array<object>) : string | false  => {
  let error : string = '';

  try {
    fns.reduce((a, f) => {
      const currentError : string | false = f(a);
      if (currentError) {
        throw new Error(currentError);
      }
      return a;
    }, x);
  } catch (e) {
    error = e.message;
  }

  return error;
};
  