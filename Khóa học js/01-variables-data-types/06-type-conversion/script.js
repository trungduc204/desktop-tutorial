let amount = 'hello';
// Chuyển đổi chuỗi thành số nguyên
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Chuyển đổi số thành chuỗi
amount = amount.toString();
amount = String(amount);

// Chuyển đổi chuỗi thành số thập phân
amount = parseFloat(amount);

// Chuyển đổi số thành boolean
amount = Boolean(amount);
// Cách để nhận giá trị NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
