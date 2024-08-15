
var lemonadeChange = function(bills) {
    let fives = []
    let tens = []

    for(let i = 0; i < bills.length; i ++){
        let returnAmt = bills[i] - 5
        if(bills[i] === 5) fives.push(5)
        if(bills[i] === 10) tens.push(10)
          while(returnAmt >= 10 && returnAmt > 0 ){
            let deduct = tens.pop()
            if(!deduct) break
            returnAmt  -= deduct

        }
        while ( returnAmt > 0){
            let deduct = fives.pop()
            if(!deduct) break
            returnAmt  -=  deduct
        }
        if(returnAmt > 0) return false
      
}
return true
}
