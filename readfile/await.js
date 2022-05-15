let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWorks = function(job, timer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dt = new Date();
            let result = `完成工作: ${job} at ${dt.toISOString()}`;
            resolve(result);
            // reject("執行失敗");
            // console.log(job, timer);
        }, timer)
    });
};

async function main() {
    try {
        let doBrush = await doWorks("刷牙", 1000);
        console.log(doBrush);
        let doEat = await doWorks("吃飯", 3000);
        console.log(doEat);
        let doWork = await doWorks("工作", 1000);
        console.log(doWork);
    } catch (e) {
        console.log(e);
    }

}
main();