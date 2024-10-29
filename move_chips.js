var minCostToMoveChips = function(position) {
    let odd = 0
    let even  = 0
    for(let i = 0; i < position.length; i ++){
        if((position[i] & 1) === 1) odd ++
        else even ++
    }
    return Math.min(odd, even)
    
};