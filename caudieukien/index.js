// Tính giá điện
// Bậc 1: Cho kWh từ 0 - 50 : 1805 đồng
// Bậc 2: Cho kWh tu 51 - 100 : 1866 đồng
// Bậc 3: Cho kWh tu 101 - 200 : 2167 đồng
// Bậc 4: Cho kWh tu 201 - 300 : 2729 đồng
// Bậc 5: Cho kWh tu 301 - 400 : 3050 đồng
// Bậc 6: Cho kWh tu 401 trở lên : 3.050 đồng

// Cách giải:
// Ví dụ: Nhà mình sài 120 chữ, tính tiền điện như sau:
// 50 chữ đầu: tính giá theo bậc 1: 50 * 1.805
// 50 chữ tiếp theo: tính giá theo bậc 2: 50 * 1.866
// 20 chữ cuối: tính giá theo bậc 3: 20 * 2.167

// Giải pháp:
// khai báo biến: biến tiền điện từ bậc, biến số KWh, biến số tiền
// sử dụng if-else bậc thang
// Nếu số kWh <= 50 => số kWh * bậc 1
// Nếu số kWh <= 100 => 50 * bậc 1 + (số kWh - 50) * bậc 2
// Nếu số kWh <= 200 => 50 * bậc 1 + 50 * bậc 2 + (số kWh - 50 - 50) * bậc 3
// Nếu số kWh <= 300 => 50 * bậc 1 + 50 * bậc 2 + 100 * bậc 3 + (số kWh - 50 - 50 - 100) * bậc 4
// Nếu số kWh <= 400 => 50 * bậc 1 + 50 * bậc 2 + 100 * bậc 3 + 100 * bậc 4 + (số kWh - 50 - 50 - 100 - 100) * bậc 5
// Nếu số kWh > 400 =>  50 * bậc 1 + 50 * bậc 2 + 100 * bậc 3 + 100 * bậc 4 + 100 * bậc 5 + (số kWh - 50 - 50 - 100 - 100 - 100) * bậc 6


// Tính thuế TNCN
// bậc 1	TN <= 5tr	        TN x 5%
// bậc 2	5tr < TN <= 10tr	TN x 10% - 0.25tr
// bậc 3	10tr < TN <= 18tr	TN x 15% - 0.75tr
// bậc 4	18tr < TN <= 32tr	TN x 20% - 1.65tr
// bậc 5	32tr < TN <= 52tr	TN x 25% - 3.25tr
// bậc 6	52tr < TN <= 80tr	TN x 30% - 5.85tr
// bậc 7	TN > 80tr	        TN x 35% - 9.85tr