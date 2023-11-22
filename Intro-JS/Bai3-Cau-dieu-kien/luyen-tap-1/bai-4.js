// Sử dụng if else bậc thang
let a = parseInt(prompt("Nhập a: "));
let b = parseInt(prompt("Nhập b: "));
let c = parseInt(prompt("Nhập c: "));

let maxNum;

if (a >= b && a >= c) {
    maxNum = a;
} else if ( b >= a && b >= c) {
    maxNum = b;
} else {
    maxNum = c;
}

// template string
console.log(`${maxNum} là giá trị lớn nhất`);
