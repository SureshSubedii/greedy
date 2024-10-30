// You are given a very large integer n, represented as a string,​​​​​​ and an integer digit x. The digits in n and the digit x are in the inclusive range [1, 9], and n may represent a negative number.

// You want to maximize n's numerical value by inserting x anywhere in the decimal representation of n​​​​​​. You cannot insert x to the left of the negative sign.

// For example, if n = 73 and x = 6, it would be best to insert it between 7 and 3, making n = 763.
// If n = -55 and x = 2, it would be best to insert it before the first 5, making n = -255.
// Return a string representing the maximum value of n​​​​​​ after the insertion.


var maxValue = function (n, x) {
    let isNegative = n[0] === "-" ? true : false
    let str = n
    for (let i = 0; i < str.length; i++) {
        if ((x < Number(str[i]) && isNegative) || (x > Number(str[i])) && !isNegative) {
            let result = `${str.slice(0, i)}${x}${str.slice(i, n.length)}`
            return result

        }
        else if ((i === str.length - 1)) {
            return `${str.slice(0, n.length)}${x}`

        }

    }


};