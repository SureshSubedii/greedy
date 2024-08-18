// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
// Return the maximum total number of units that can be put on the truck.

var maximumUnits = function(boxTypes, truckSize) {
    let maxUnits = 0
    boxTypes.sort((a,b) => b[1] - a[1])
   
    for(let i = 0; i < boxTypes.length;  i ++ ){
        let count = Math.min(boxTypes[i][0], truckSize)
            maxUnits += count *  boxTypes[i][1] 
            truckSize -= count 
            if(  truckSize === 0) return maxUnits

    }
    return maxUnits
    
};