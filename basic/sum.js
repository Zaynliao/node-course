function sum(n) {
    let i = 0;
    let sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum2(n) {
    return (n + 1) * n / 2;
}

let sum3 = (n) => (n + 1) * n / 2;



function sum4(n) {
    let Arr = [];
    let k = 0;
    for (k; k <= n; k++) {
        Arr.push(k);
    }

    let sum = Arr.reduce((total, n) => total + n,
        0);
    return sum;
}




console.log("-------------------");
console.log("sum(1) -> " + sum(1));
console.log("sum(10) -> " + sum(10));
console.log("sum(50) -> " + sum(50));
console.log("sum(100) -> " + sum(100));
console.log("-------------------");
console.log("sum2(1) -> " + sum2(1));
console.log("sum2(10) -> " + sum2(10));
console.log("sum2(50) -> " + sum2(50));
console.log("sum2(100) -> " + sum2(100));
console.log("-------------------");
console.log("sum3(1) -> " + sum3(1));
console.log("sum3(10) -> " + sum3(10));
console.log("sum3(50) -> " + sum3(50));
console.log("sum3(100) -> " + sum3(100));
console.log("-------------------");
console.log("sum4(1) -> " + sum4(1));
console.log("sum4(10) -> " + sum4(10));
console.log("sum4(50) -> " + sum4(50));
console.log("sum4(100) -> " + sum4(100));
console.log("-------------------");