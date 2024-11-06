// 330. Patching Array


var minPatches = function(nums, n) {
    let max = 0
    let index = 0
    let patches = 0

    while(max < n){
        if(index < nums.length && nums[index] <= max + 1){
            max += nums[index]
            index ++
        }else{
            max += max + 1
            patches ++
        }
    }
    return patches

    
};