// 10 phút đầu, giá cước 3000đ/phút
// 15 phút tiếp theo, giá cước 2500đ/phút
// 15 phút tiếp theo, giá cước 2000đ/phút
// 40 phút trở lên, giá trước 1000đ/phút

// Ví dụ: 60 phút
// Triển khai:
// 10p đầu: 10 * 3000
// 15p tiếp theo: 15 * 2500
// 15p tiếp theo: 15 * 2000
// 20p còn lại: 20 * 1000

// chuyển string sang number
let a = parseInt(prompt("Nhập số phút: "));

if (a <= 10 && a > 0) {
    console.log(a * 3000);
} else if (a > 10 && a <= 25) {
    console.log(10 * 3000 + (a - 10) * 2500);
} else if (a > 25 && a <= 40) {
    console.log(10 * 3000 + 15 * 2500 + (a - 25) * 2000);
} else {
    console.log(10 * 3000 + 15 * 2500 + 15 * 2000 + (a - 40) * 1000);
}

