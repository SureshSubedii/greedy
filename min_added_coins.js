// You are given a 0-indexed integer array coins, representing the values of the coins available, and an integer target.
// An integer x is obtainable if there exists a subsequence of coins that sums to x.
// Return the minimum number of coins of any value that need to be added to the array so that every integer in the range [1, target] is obtainable.
// A subsequence of an array is a new non-empty array that is formed from the original array by deleting some (possibly none) of the elements without disturbing the relative positions of the remaining elements.


function minimumAddedCoins(coins, target) {
    coins.sort((a, b) => a - b);

    let currentMax = 0; 
    let additions = 0;
    let index = 0;

    while (currentMax < target) {
        if (index < coins.length && coins[index] <= currentMax + 1) {
            currentMax += coins[index]; 
            index++; 
        } else {
            currentMax += (currentMax + 1); 
            additions++; 
        }
    }

    return additions; 
}
