var isPowerOfTwo = function(n) {
    let binary = n.toString(2)
    if(binary[0] === "-") return false

    return (binary.match(/1/g)?.length  || 0) === 1 
    
};
