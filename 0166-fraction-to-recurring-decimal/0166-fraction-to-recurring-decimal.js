var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let result = "";
    if ((numerator < 0) ^ (denominator < 0)) {
        result += "-";
    }

    let num = Math.abs(numerator);
    const den = Math.abs(denominator);

    result += Math.floor(num / den);
    num %= den;

    if (num === 0) return result;

    result += ".";

    const map = new Map();
    map.set(num, result.length);

    while (num !== 0) {
        num *= 10;
        result += Math.floor(num / den);
        num %= den;

        if (map.has(num)) {
            const index = map.get(num);
            result = result.substring(0, index) + "(" + result.substring(index) + ")";
            break;
        } else {
            map.set(num, result.length);
        }
    }

    return result;
};
