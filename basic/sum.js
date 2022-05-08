function sum(n){
    let i=0;
    let sum=0;
    for(i=0;i<=n;i++){
    sum+=i;
    }
return sum;
}

function sum2(n){
    return (n+1)*n/2;
}

let sum3 = (n)=>(n+1)*n/2;


console.log(sum(1));
console.log(sum(10));
console.log(sum(50));
console.log(sum(100));
console.log(sum2(1));
console.log(sum2(10));
console.log(sum2(50));
console.log(sum2(100));
console.log(sum3(1));
console.log(sum3(10));
console.log(sum3(50));
console.log(sum3(100));