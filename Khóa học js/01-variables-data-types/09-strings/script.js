let x;

const name = 'John';
const age = 31;

// Nối chuỗi
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// Tạo một "đối tượng chuỗi" (JS thực hiện điều này tự động khi sử dụng thuộc tính hoặc phương thức trên một chuỗi nguyên thủy)
const s = new String('Hello World');

x = typeof s; // Kiểu dữ liệu của s

x = s.length; // Độ dài của chuỗi

// Truy cập giá trị theo chỉ số
x = s[0];

// Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
x = s.__proto__;

// Thay đổi kiểu chữ
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - trả về ký tự tại chỉ mục được chỉ định
x = s.charAt(0);

// indexOf - trả về chỉ mục của lần xuất hiện đầu tiên của một giá trị cụ thể trong chuỗi
x = s.indexOf('d');

// substring() - tìm kiếm một chuỗi cho giá trị được chỉ định
x = s.substring(2, 5);
x = s.substring(7);

// slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
x = s.slice(-11, -6);

// trim() - loại bỏ khoảng trắng từ đầu và cuối chuỗi
x = '         Hello World';
x = x.trim();

// replace() - thay thế tất cả các trường hợp của một chuỗi
x = s.replace('World', 'John');

// includes() - trả về true nếu chuỗi được tìm thấy
x = s.includes('Hell');

// valueOf() - trả về giá trị nguyên thủy của một biến
x = s.valueOf();

// split() - trả về một mảng các chuỗi
x = s.split('');

console.log(x);
