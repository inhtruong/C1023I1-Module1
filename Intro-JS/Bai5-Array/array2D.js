// var arr = [
//     ["Apple", "Orange", "Pear"],
//     ["Carrots", "Beans", "Peas"],
//     ["Cookies", "Cake", "Muffins", "Pie"]
// ];


// Truy cập tới từng phần tử
// console.log(arr[1]); // ["Carrots", "Beans", "Peas"]
// console.log(arr[1][2]); // Peas


// Thêm phần tử vào mảng
// console.log(arr[1]);
// arr[1][2] = "Dat";
// console.log(arr[1]);

// Duyệt mảng
//Vòng lặp đầu áp dụng cho mảng bên ngoài
// for (var i = 0; i < arr.length; i++) {
//     // Vòng lặp thứ hai áp dụng cho mảng bên trong
//     for (var j = 0; j < arr[i].length; j++) {
//         // Truy xuất các phần tử của từng mảng con
//         console.log(arr[i][j]); 
//     }
// }


let as2D = [ 
    ["a","b","c","d","e","f","g","h","i","j"], 
    ["A","B","C","D","E","F","G","H","I","J"], 
    ["!","@","#","$","%","^","&","*","(",")"] 
];

let sOut="<table border=2>";
for (let i = 0; i < as2D.length; i++ ) { // for each row 
    sOut += "<tr>";
    for (let j = 0; j < as2D[i].length; j++ ) { // for each clm
        sOut += `<td>${as2D[i][j]}</td>`;
        // sOut += "<td>" + as2D[i][j] + "</td>";
    }
    sOut += "</tr>";
}
sOut += "</table>"

document.getElementById('render').innerHTML = sOut;




// let sOut="<table border=2>";
// sOut += "<tr>";
// sOut += "<td>";
// sOut += "a";
// sOut += "</td>"
// sOut += "</tr>";
// sOut += "</table>"; // <table border=2></table>

// document.getElementById('render').innerHTML = sOut;
