const fib = (n) => {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
    
};

console.log(fib(3));  // 2
console.log(fib(5));  // 5
console.log(fib(10)); // 55