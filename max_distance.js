var maxDistance = function(arrays) {
    let maxDist = 0
    let min = arrays[0][0]
    let max = arrays[0][arrays[0].length -1]
    for(let i = 1; i < arrays.length; i ++){
        let first = arrays[i][0]
        let last  = arrays[i][arrays[i].length - 1]
        maxDist = Math.max(maxDist, Math.max(last - min, max - first))
        min = Math.min(min, first)
        max = Math.max(max, last)
    }
    return maxDist
};