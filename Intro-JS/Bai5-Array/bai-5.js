// Khởi tạo mảng số nguyên
const integersArray = [1, -2, 3, -4, 5, -6, 7, -8, 9];

// Đếm số nguyên âm trong mảng
let countNegativeIntegers = 0;
for (let i = 0; i < integersArray.length; i++) {
    if (integersArray[i] < 0) {
        countNegativeIntegers++;
    }
}

// Hiển thị kết quả
console.log(`Số lượng số nguyên âm trong mảng là: ${countNegativeIntegers}`);
