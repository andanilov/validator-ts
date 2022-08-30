"use strict";
exports.__esModule = true;
exports.rules = void 0;
exports.rules = {
    isRequired: function (error) {
        if (error === void 0) { error = 'Обязательное поле!'; }
        return function (data) {
            if (Array.isArray(data)) {
                return data.length ? false : error;
            }
            if (typeof data === 'object') {
                return Object.keys(data).length ? false : error;
            }
            return data ? false : error;
        };
    },
    isEmail: function (error) {
        if (error === void 0) { error = 'Неверный формат Email'; }
        return function (data) { return (data.toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ? false
            : error); };
    },
    isYearBorn: function (error) {
        if (error === void 0) { error = 'Год рождения некорректен'; }
        return function (data) { return (+data < (new Date().getFullYear() - 110) || +data >= new Date().getFullYear()
            ? error
            : false); };
    },
    isLink: function (error) {
        if (error === void 0) { error = 'Неверный формат ссылки'; }
        return function (data) { return (data.toLowerCase()
            .match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
            ? false
            : error); };
    }
};
exports["default"] = (function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) {
        try {
            fns.reduce(function (a, f) {
                var currentError = f(a);
                if (currentError) {
                    throw new Error(currentError);
                }
                return a;
            }, x);
        }
        catch (e) {
            if (typeof e === "string") {
                return e;
            }
            else if (e instanceof Error) {
                return e.message;
            }
        }
        return '';
    };
});
