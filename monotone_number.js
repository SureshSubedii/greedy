const monotone = (n) => {
    let str = String(n);
    let digits = Array.from(str).map(Number);
    let mark
    for(let i = str.length; i  > 0; i --){
    if(digits[i] < digits[i - 1]){
    mark = i
    digits[i - 1] --
    }
}
for(let i = mark; i < str.length; i ++){
   digits[i] = 9	
}
return digits.join("")
}

