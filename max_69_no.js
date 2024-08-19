var maximum69Number  = function(num) {
    let nums = Array.from(String(num))
    for(let i in nums){
        if( nums[i] == 6){
             nums[i] = 9
             break
             }
        else continue
    }
    return nums.join("")
    
};