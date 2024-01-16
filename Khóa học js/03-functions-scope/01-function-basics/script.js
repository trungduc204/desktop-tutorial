function sayHello() {
  console.log('Chào bạn');
}

// Gọi, thực hiện hoặc kích hoạt một hàm
sayHello();

// Định nghĩa một hàm với tham số
function add(num1, num2) {
  console.log(num1 + num2);
}

// Gọi hàm với đối số
add(5, 10);

// Tham số vs Đối số
// Tham số là tên của các biến được sử dụng để truyền dữ liệu vào hàm.
// Đối số là các giá trị được truyền vào hàm

// Trả về một giá trị
function subtract(num1, num2) {
  return num1 - num2;

  console.log('Sau câu lệnh return');
}

// Gán giá trị trả về cho một biến
const result = subtract(10, 2);

console.log(result, subtract(20, 5));
