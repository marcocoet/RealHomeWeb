export default class Utils {
    static debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this,
            args = arguments;

            return new Promise(function (resolve) {
                const later = function () {
                    timeout = null;
                    if (!immediate) resolve(func.apply(context, args));
                };

                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);

                if (callNow) resolve(func.apply(context, args));
            });
        };
    }
}