// Khởi tạo mảng số nguyên
const integersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// Nhập giá trị số nguyên V
const V = parseInt(prompt("Nhập giá trị số nguyên V:"));

// Kiểm tra xem V có nằm trong mảng không
let isVInArray = false;
for (let i = 0; i < integersArray.length; i++) {
    if (integersArray[i] === V) {
        isVInArray = true;
        break;
    }
}

// Hiển thị kết quả
if (isVInArray) {
    console.log(`${V} nằm trong mảng số nguyên.`);
} else {
    console.log(`${V} không nằm trong mảng số nguyên.`);
}
