//should use for each
let arrayFor = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
arrayFor.forEach(function(num) {
    console.log(num);
});

//different example
const mathResult = ()=>{
    let i;
    let fib = []; // Initialize array!
    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=9; i++)
    {
        fib[i] = fib[i-2] + fib[i-1];
        console.log(fib[i]);
    }
};
mathResult();
//should use for in
function primeNumbers(num) {
    let array = [];
    let isPrime;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; (isPrime = i === j || i % j !== 0) && j <= i / 2; j++) {
        }
            isPrime && array.push(i);
        }
        return array;
}
console.log(primeNumbers(40));

 function address() {

     let address = {
         firstName: 'Patty',
         lastName: 'Murray',
         address: 'Address',
         city: 'city',
         state: 'WA',
         zip: '98008'
     }
     for (const prop in address) {
         console.log(address.firstName, address.lastName, address.city, address.state, address.zip);
     }
 };
 address();
 // creating class calculator
class calculator{
    //constructor();
    add(a, b){
        return a +b;
        console.log(this.add(2,3));
    }
    subtract(a , b){
        return a - b;
    }
    multiply(a, b){
        return a*b;
    }
    divide(a, b){
        return a/b;

    }
}

let calc = new calculator();

console.log("from calculator class add(2, 3)" + calc.add(2, 3),"subtracting(5, 2) =="+ calc.subtract(5, 2) ,"multiplying(3, 5)==" + calc.multiply(3, 5),
  "dividing(15, 3)==" +calc.divide(15, 3));




