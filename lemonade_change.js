//For bills 5,10,20
var lemonadeChange = function(bills) {
    let fives = 0
    let tens = 0
    for(let i = 0; i < bills.length; i ++){
        let returnAmt = bills[i] - 5
        if(bills[i] === 5) fives ++
        if(bills[i] === 10) tens ++
          while(returnAmt >= 10 && returnAmt > 0 ){
            if(!tens) break
            returnAmt  -= 10
            tens -- 

        }
        while ( returnAmt > 0){
            if(!fives) break
            returnAmt  -=  5
            fives --
        }
        if(returnAmt > 0) return false
      
}
return true
}