// 1975. Maximum Matrix Sum
var maxMatrixSum = function (matrix) {
    let negatives = 0
    let sum = 0
    let minAbs = Infinity
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let abs = Math.abs(matrix[i][j])
            minAbs = Math.min(minAbs, abs)

            if (matrix[i][j] < 0) {
                negatives++
            }
            sum += abs
        }
    }
    if (negatives % 2 === 1) sum -= 2 * minAbs
    return sum
}