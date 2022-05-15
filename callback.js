let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function(job, timer, cb) {
    setTimeout(() => {
        let dt = new Date();
        let result = `完成工作: ${job} at ${dt.toISOString()}`;
        cb(result);
    }, timer);
    // return cb(result);
    // cb(result);
    console.log(`在 setTomeout 之後 ${job}`);
};


doWork("刷牙", 3000, function(result) {
    // let dt = new Date();
    console.log(result);
    doWork("吃早餐", 5000, function(result) {
        // let dt = new Date();
        console.log(result);
        doWork("寫功課", 3000, function(result) {
            // let dt = new Date();
            console.log(result);
        })
    })
})