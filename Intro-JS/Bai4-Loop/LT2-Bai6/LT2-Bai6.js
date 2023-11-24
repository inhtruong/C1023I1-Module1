
// Nhập chiều cao của trái tim
const height = 6;

// In phần trên của trái tim
for (let i = 1; i <= height / 2; i++) {
    let row = '';
    for (let j = 1; j <= height - i; j++) {
        row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
    }
    document.write(row + "<br />");
}

// In phần dưới của trái tim
for (let i = height / 2; i >= 1; i--) {
    let row = '';
    for (let j = height - i; j >= 1; j--) {
        row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
    }
    document.write(row + "<br />");
}
