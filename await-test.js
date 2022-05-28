let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWorks = function(job, timer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dt = new Date();
            let result = `完成工作: ${job} at ${dt.toISOString()}`;
            resolve(result);
            // reject("執行失敗");
            console.log(job, timer);
        }, timer)
    });
};

async function main() {
    try {

    await doWorks("刷牙", 1000);
     
    await doWorks("吃飯", 3000);
        
    await doWorks("工作", 1000);
      
    } catch (e) {
        console.log(e);
    }

}


// function main() {
//     try {

//     doWorks("刷牙", 1000);
     
//     doWorks("吃飯", 3000);
        
//     doWorks("工作", 1000);
      
//     } catch (e) {
//         console.log(e);
//     }

// }

main();