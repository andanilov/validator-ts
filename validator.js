"use strict";
exports.__esModule = true;
exports.rules = void 0;
exports.rules = {
    isRequired: function (_a) {
        var _b = _a.msg, msg = _b === void 0 ? 'Обязательное поле!' : _b;
        return function (data) {
            if (Array.isArray(data)) {
                return data.length ? false : msg;
            }
            if (typeof data === 'object') {
                return Object.keys(data).length ? false : msg;
            }
            return data ? false : msg;
        };
    },
    isEmail: function (_a) {
        var _b = _a.msg, msg = _b === void 0 ? 'Неверный формат Email' : _b;
        return function (data) { return (String(data).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ? false
            : msg); };
    },
    isYearBorn: function (_a) {
        var _b = _a.msg, msg = _b === void 0 ? 'Год рождения некорректен' : _b;
        return function (data) { return (data && (+data < (new Date().getFullYear() - 110) || +data >= new Date().getFullYear())
            ? msg
            : false); };
    },
    isLink: function (_a) {
        var _b = _a.msg, msg = _b === void 0 ? 'Неверный формат ссылки' : _b;
        return function (data) { return (String(data).toLowerCase()
            .match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/)
            ? false
            : msg); };
    },
    min: function (_a) {
        var _b = _a.len, len = _b === void 0 ? 3 : _b, _c = _a.msg, msg = _c === void 0 ? 'Слишком короткая запись' : _c;
        return function (data) { return (String(data).trim().length >= len
            ? false
            : msg); };
    },
    max: function (_a) {
        var _b = _a.len, len = _b === void 0 ? 3 : _b, _c = _a.msg, msg = _c === void 0 ? 'Слишком длинная запись' : _c;
        return function (data) { return (String(data).trim().length <= len
            ? false
            : msg); };
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
            if (typeof e === 'string') {
                return e;
            }
            if (e instanceof Error) {
                return e.message;
            }
        }
        return '';
    };
});
