// Mảng (array)
// Cách khai báo mảng

// Cach 1: Dấu []
// let array1 = []; // array1 là 1 mảng rỗng.
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]]; // khai bảo mảng có giá trị
// console.log(array1);


// Cách 2: new Array();
// let array2 = new Array(); // array2 là mảng rỗng
// let array2 = new Array(1, "Dat", 18, "Hanoi"); // khai bảo mảng có giá trị
// console.log(array2);




// Truy cập các phần tử trong mảng
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];

// console.log(array1[1]); // "Dat"
// console.log(array1[3][1]) // "Ha Noi"
// console.log(array1[array1.length - 1]); // [29, "Ha Noi"]

// Sử dụng for...in
// for (let index in array1) {
//     console.log(array1[index]);
// }

// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];
// // duyệt mảng bằng for thường;
// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i]);
// }

// // duyệt mảng ngược
// for (let i = array1.length - 1; i >= 0; i--) {
//     console.log(array1[i]);
// }


// Chiều dài mảng sử dụng hàm length
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];

// console.log(array1.length); // chiều dài của mảng array1
// console.log(array1[array1.length - 1].length); // chiều dài của phần tử mảng trong mảng array1


// console.log("Truoc thay doi: " + array1);
// array1[1] = "Vu";
// console.log("Sau thay doi: " + array1);






// Hàm build-in
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// thêm mới 1 phần từ vào cuối mảng sử dụng push()
// seas.push("Hello");
// seas.unshift("Hai");

// console.log(seas);

// Sử dụng hàm map() để duyệt mảng tương đương sài forEach

// seas.map(function(item) {
//     console.log(item);
// })


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
// let seas = ['Black Sea', 'Caribbean Sea', 10, 2, 'North Sea', [29, 'Ha Noi'], 0.1, 'Baltic Sea', 1100];
// Sắp xếp mảng theo trình tự A-Z
// seas.sort();
// console.log(seas);

// Đảo ngược mảng
// seas.reverse();
// console.log(seas);


// let months = ['Jan', 'March', 'April', 'June'];
 
// // Thêm tại vị trí 1, không xóa phần tử nào.
// months.splice(2, 1, 'Feb');
// console.log(months);

// let months = ['Jan', 'March', 'April', 'June'];
// let months2 = ['June', 'July', 'Aus'];

// // Nối mảng
// months2.concat(months);

// console.log(months2.concat(months));

// Ý tưởng: Tạo ra 1 bản sao của mảng ban đầu, khi tạo bản sao sẽ không lấy giá trị đầu,sử dụng slice()