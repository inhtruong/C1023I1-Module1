// Cú pháp
// for (khai_bao_bien; điều_kiện; tăng/giảm_biến) {
//      Khối lệnh ở trong
// }

// Bài tập: In ra màn hình từ 1 đến 10
// for (let i = 0; i <= 10; i++) {
//     document.write(`${i} <br />`);
// }

// Bài tập: In ra màn hình tổng từ 1 đến 10 (1+ 2 +3 + ... + 10 = 55)
// let total = 0;

// for (let i = 0; i <= 10; i++) {
//     total = total + i; // total += i;
// }

// document.write(`Tổng từ 1 tới 10: ${total}`);

// Bài tập: In ra màn hình từ 10 về 1
// for (let i = 10; i > 0; i--) {
//     document.write(`${i} <br />`);
// }

// Kiểm tra xem một số có phải là số nguyên tố hay không?
let number = parseInt(prompt("Nhập số: "));

// Sử dụng vòng lặp, ví dụ: N
// vòng lặp chạy từ 2 tới N - 1
// 2 3 4 5 6 7 8 9 ... N - 1
// TH: N không chia hết cho các số từ 2 tới N - 1 => N là số nguyên tố và
// TH: N chia hết cho các số từ 2 tới N - 1 => N là không phải số nguyên tố

