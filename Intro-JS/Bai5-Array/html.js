// let name = "Dat";
// let age = 18;
// let address = "Hanoi";


// Mảng (array)
// Cách khai báo mảng

// Cach 1: Dấu []
// let array1 = []; // array1 là 1 mảng rỗng.
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]]; // khai bảo mảng có giá trị


// Cách 2: new Array();
// let array2 = new Array(); // array2 là mảng rỗng
// let array2 = new Array(1, "Dat", 18, "Hanoi"); // khai bảo mảng có giá trị


// Truy cập các phần tử trong mảng
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];

// console.log(array1[1]); // "Dat"
// console.log(array1[3][1]) // "Ha Noi"
// console.log(array1[array1.length - 1]); // [29, "Ha Noi"]

// Chiều dài mảng sử dụng hàm length
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];

// console.log("Truoc thay doi: " + array1);
// array1[1] = "Vu";
// console.log("Sau thay doi: " + array1);

// Hàm build-in
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];
// // thêm mới 1 phần từ vào cuối mảng sử dụng push()
// array1.push("Hello");

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const lastElement = seas.pop();
// console.log(seas); 
// console.log(lastElement); 


// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// let index = seas.indexOf('North Sea');
// // nếu giá trị cần tìm không tồn tại trong mảng thì sẽ hàm indexOf() sẽ trả về -1
// console.log(index); // 2

// let name1 = "Dat";
// let seas = [];
// console.log(Array.isArray(name1));

// Duyệt mảng
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// Sử dụng vòng lặp for
// for (let i = 0; i < seas.length; i++) {
//     console.log(seas[i]);
// }

// Sử dụng vòng lặp forEach
// seas.forEach(function(sea) {
//     console.log(sea);
// })

// Sắp xếp mảng
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// Sắp xếp mảng theo trình tự A-Z
seas.sort();
console.log(seas);

// Đảo ngược mảng
// seas.reverse();
// console.log(seas);

seas.slice