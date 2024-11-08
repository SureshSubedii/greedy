// 781. Rabbits in Forest

var numRabbits = function (answers) {
    let count = {}
    let min = 0
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === 0) min++
        else {
            count[answers[i]] = (count[answers[i]] || 0) + 1
        }
    }
    for (const key in count) {
        let val = count[key]
        let divident = Number(key) + 1
        let mod = val % divident
        if (!mod) min += val
        else {
            min += val - mod + divident
        }
    }
    return min
};