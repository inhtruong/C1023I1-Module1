let n = 5;
let m = 10;

// In hình chữ nhật ra màn hình
for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= m; k++) {
        if (i === 1 || k === 1 || i === n || k === m) {
            document.write('*');
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }
    document.write('<br />');
}
