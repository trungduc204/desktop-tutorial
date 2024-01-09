//log number
console.log(100);

//log string
console.log('Xin chao');

// log mutiple values
console.log(20, 'Hello',true);

//log a variable
const x = 100;
console.log(x);

//log a enrror & warning
console.error('Alert');
console.warn('Warning');

// log objects as table
console.table({name: 'Brad', email: 'trungduc@gmail.com'});

// Group console comands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add css to logs
const styles = 'padding: 10px; background-color:white; color: green';
console.log('%cHello World', styles);