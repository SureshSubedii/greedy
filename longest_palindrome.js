// Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
// palindrome
//  that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

var longestPalindrome = function(s) {
    let map = {}
    let totalLength = 0
    for(let i = 0; i < s.length; i++){
        map[s[i]] = (map[s[i]] || 0) + 1
                if((map[s[i]] & 1) === 0 ) totalLength += 2
    }
    totalLength = totalLength < s.length? totalLength + 1 : totalLength
    return totalLength
};