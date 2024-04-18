/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        result = String.fromCharCode(65 + remainder) + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return result;
};
