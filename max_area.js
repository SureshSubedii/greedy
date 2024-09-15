// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container


var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let area = 0
    for(let i = 0; i < height.length; i ++){
        if(left === right) break
        let leftHeight = height[left]
        let rightHeight = height[right]
        let recHeight = Math.min(leftHeight, rightHeight)
        let width = Math.abs(right - left)
        area = Math.max(area, recHeight * width)
        if(leftHeight > rightHeight){
            right --
        }else{
            left ++
        }
    }
    return area
};