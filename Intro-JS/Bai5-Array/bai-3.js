// Khởi tạo mảng số nguyên
const arr = [10, 5, 8, 12, 3, 20, 15, 7, 25];

// Hiển thị giá trị lớn nhất trong mảng
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(`Giá trị lớn nhất trong mảng là: ${max}`);

// Tính và hiển thị giá trị trung bình của các phần tử trong mảng
if (arr.length === 0) {
    console.log("Mảng rỗng, không có giá trị trung bình.");
} else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(`Giá trị trung bình của các phần tử trong mảng là: ${average}`);
}
