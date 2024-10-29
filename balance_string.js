// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.


var balancedStringSplit = function(s) {
    let total = 0
    let balanced = 0
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "L") balanced ++
        else balanced --

        if(balanced === 0) total ++
    }
    return total
    
};