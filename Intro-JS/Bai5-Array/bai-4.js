// Khởi tạo mảng số nguyên
const integersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Hiển thị mảng trước khi đảo ngược
console.log("Mảng trước khi đảo ngược:", integersArray);

// Đảo ngược các phần tử trong mảng
const reversedArray = [];
for (let i = integersArray.length - 1; i >= 0; i--) {
    reversedArray.push(integersArray[i]);
}

// Hiển thị mảng sau khi đảo ngược
console.log("Mảng sau khi đảo ngược:", reversedArray);
