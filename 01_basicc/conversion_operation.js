let score="33"

console.log(typeof score);

let value=Number(score)
console.log(typeof value)

let score1="33abc"
let value1=Number(score1)

console.log(typeof value1);
console.log(value1)

let isLoggedIn=""
let log_in=Boolean(isLoggedIn)
console.log(log_in);

//empty string are always false 
console.log("1"+2);     //12
console.log("1"+2+2);  //122
console.log(1+2+"3"); //33

console.log(true);
console.log(+true); //console.log(true+) error dey dega 