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
console.log("sum ->" + sum(1));
console.log("sum ->" + sum(10));
console.log("sum ->" + sum(50));
console.log("sum ->" + sum(100));
console.log("-------------------");
console.log("sum2 ->" + sum2(1));
console.log("sum2 ->" + sum2(10));
console.log("sum2 ->" + sum2(50));
console.log("sum2 ->" + sum2(100));
console.log("-------------------");
console.log("sum3 ->" + sum3(1));
console.log("sum3 ->" + sum3(10));
console.log("sum3 ->" + sum3(50));
console.log("sum3 ->" + sum3(100));
console.log("-------------------");
console.log("sum4 ->" + sum4(1));
console.log("sum4 ->" + sum4(10));
console.log("sum4 ->" + sum4(50));
console.log("sum4 ->" + sum4(100));
console.log("-------------------");