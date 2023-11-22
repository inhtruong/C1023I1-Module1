let a = 0, b = 1;
let countFibo = 20;

console.log("20 số Fibonacci đầu tiên là:");

for (let i = 0; i < countFibo; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}