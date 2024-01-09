let x;

// Ép kiểu thành chuỗi
x = 5 + '5';

// Ép kiểu thành số
x = 5 + Number('5');

// Ép kiểu thành số
x = 5 * '5';

// Giá trị null được ép kiểu thành 0 vì là giá trị `falsy`
x = 5 + null;

// Ép kiểu null thành số, kết quả là 0
x = Number(null);

// Ép kiểu boolean thành số, true là 1, false là 0
x = Number(true);
x = Number(false);

// true được ép kiểu thành 1
x = 5 + true;

// false được ép kiểu thành 0 (falsy)
x = 5 + false;

// Undefined được ép kiểu thành 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);
