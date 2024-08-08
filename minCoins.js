

const minCoin = (amount, coins)=>{
    coins.sort((a,b) => b-a)
    let result=[]
    let totalCoins = 0
    for(let coin of coins){
        while( amount >= coin){
            amount -= coin
            result.push(coin)
            totalCoins++

        }
    }
    return {result, totalCoins}

}

console.log(minCoin(71, [20,50, 10,5,2,1]))