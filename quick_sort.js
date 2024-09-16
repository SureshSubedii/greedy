const swap = (arr,first,second) => {
    const temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}
const partition = (arr, low, high, comparisonFunc) => {
    let pivot = arr[high]
    let i = low - 1
    for(let j = low; j < high; j ++){
        if(comparisonFunc(arr[j], pivot) < 0){
            i ++
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, high)
    return i + 1
} 

const quickSort = (arr, low, high , comparisonFunc) => {
    if(low < high){
        let part = partition(arr,low, high, comparisonFunc)
        quickSort(arr, low, part - 1, comparisonFunc)
        quickSort(arr,  part + 1, high, comparisonFunc)
    }
}

const comparisonFunc = (a, b) =>  b - a // a - b for ascending order
let numbers = [9,1,5,7,3,6]
quickSort(numbers, 0, numbers.length - 1, comparisonFunc)
console.log(numbers)