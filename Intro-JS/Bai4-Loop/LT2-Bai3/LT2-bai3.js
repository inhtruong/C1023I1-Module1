// Nhập chiều cao của tam giác
const height = 5;

// In tam giác vuông với góc vuông ở góc trên bên trái
document.write('Tam giac vuong, goc vuong o tren ben trai: <br />');
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br />');
}

// In tam giác vuông với góc vuông ở góc dưới bên trái
document.write('\nTam giac vuong, goc vuong o duoi ben trai: <br />');
for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 0; j <= height - i; j++) {
        row += '*';
    }
    for (let k = 1; k <= i; k++) {
        row += '&nbsp;&nbsp;';
    }
    document.write(row + '<br />');
}

// In tam giác vuông với góc vuông ở góc trên bên phải
document.write('\nTam giac vuong, goc vuong o tren ben phai: <br />');
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= height - i; j++) {
        document.write('&nbsp;&nbsp;');
    }
    for (let k = 1; k <= i; k++) {
        document.write('*');
    }
    document.write('<br />');
}



// In tam giác vuông với góc vuông ở góc dưới bên phải
document.write('\nTam giac vuong, goc vuong o duoi ben phai: <br />');
for (let i = 1; i <= height; i++) {
    for (let j = 1; j < i; j++) {
        document.write('&nbsp;&nbsp;');
    }
    for (let k = 1; k <= height - i + 1; k++) {
        document.write('*');
    }
    document.write('<br />');
}