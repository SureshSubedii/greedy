// Given two integers a and b, return any string s such that:
// s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
// The substring 'aaa' does not occur in s, and
// The substring 'bbb' does not occur in s.

var strWithout3a3b = function (a, b) {
    let result = '';
    let maxChar = a > b ? 'a' : 'b';
    let minChar = a > b ? 'b' : 'a';
    let maxCount = a > b ? a : b;
    let minCount = a > b ? b : a;

    while (maxCount > 0 || minCount > 0) {
        if (maxCount > minCount) {
            if (maxCount > 0) {
                result += maxChar;
                maxCount--;
            }
            if (maxCount > 0) {
                result += maxChar;
                maxCount--;
            }
        } else {
            if (maxCount > 0) {
                result += maxChar;
                maxCount--;
            }
        }
        if (minCount > 0) {
            result += minChar;
            minCount--;
        }
    }

    return result;
};
