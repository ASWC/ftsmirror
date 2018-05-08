define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Tracer {
        static revealMethods(value) {
            var result = 'reveal';
            try {
                if (!value) {
                    var result = "reveal methods: null";
                }
                else {
                    var result = "reveal methods: ";
                }
                for (var key in value) {
                    var instanceItem = value[key];
                    if (instanceItem instanceof Function) {
                        result += 'method: ' + key + ' : ' + value[key] + "\n";
                    }
                }
                Tracer.DUMP.push(result);
                console.log(result);
            }
            catch (e) {
            }
            return result;
        }
        static reveal(value) {
            var result = 'reveal';
            if (!value) {
                var result = "reveal: null";
                console.log(result);
                return;
            }
            if (value === undefined) {
                var result = "reveal: undefined";
                console.log(result);
                return;
            }
            var result = "reveal: ";
            for (var key in value) {
                //console.log(key)
                var instanceItem = Tracer.getValue(key, value);
                if (instanceItem) {
                    if (instanceItem instanceof Function) {
                        result += 'method: ' + key + "\n";
                    }
                    else {
                        try {
                            result += key + ' : ' + instanceItem + "\n";
                        }
                        catch (e) {
                        }
                    }
                }
            }
            Tracer.DUMP.push(result);
            console.log(result);
            return result;
        }
        static getValue(key, value) {
            var valueResult = null;
            try {
                valueResult = value[key];
            }
            catch (e) {
            }
            return valueResult;
        }
        static show(value) {
            var result = 'show';
            try {
                if (!value) {
                    var result = "show: null";
                }
                else {
                    var result = "show: " + value.toString();
                }
                Tracer.DUMP.push(result);
                console.log(result);
            }
            catch (e) {
            }
            return result;
        }
        static clear() {
            Tracer.DUMP = [];
        }
    }
    Tracer.DUMP = [];
    exports.Tracer = Tracer;
});
//# sourceMappingURL=Tracer.js.map