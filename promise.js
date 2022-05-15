// new Promise(executor);

// let dt = new Date();
// console.log(`起床了 at ${dt.toISOString()}`);

// let doWork = function(job, timer, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dt = new Date();
//             let result = `完成工作: ${job} at ${dt.toISOString()}`;
//             let result_error = `睡死`;
//             // resolve(result);
//             reject(result_error);
//         }, timer);
//         // // return cb(result);
//         // // cb(result);
//         // console.log(`在 setTomeout 之後 ${job}`);
//     })
// };

// --------------------------------------------------------------

// let doEvent = doWork("刷牙", 0);

// doEvent.then(("function => success"), ("function => error")).catch("catch error").finally("finally");

// doEvent
//     .then(
//         result => {
//             console.log(result);
//             let doEvent = doWork("吃早餐", 0);
//             console.log(doEvent);
//             return doEvent;
//         }, (error => console.log('then error' + error)))
//     .then(
//         result => {
//             console.log(result);
//         }, (error => console.log('second then error' + error)))
//     .catch(
//         i_error => console.log(i_error)
//     )
//     .finally(
//         () => console.log("最後結果")
//     );

let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWorks = function(job, timer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dt = new Date();
            let result = `完成工作: ${job} at ${dt.toISOString()}`;
            resolve(result);
            // console.log(job, timer);
        })
    });
};

let dowork = doWorks("清潔工", 3000)
dowork.then(result => console.log("" + result));

// --------------------------------------------------------------

// let doBrushPromise = doWork("刷牙", 0);

// console.log(doBrushPromise);

// doBrushPromise.then(result => {

//         console.log(result);
//         let doEatPromise = doWork("吃早餐", 0);
//         console.log(doEatPromise);
//         return doEatPromise;

//     }).then(result => {
//         console.log(result);

//         let doWorkPromise = doWork("寫功課", 0);
//         console.log(doWorkPromise);
//         return doWorkPromise;
//     })
// function promise(resolve, reject) {

//     //非同步工作
//     //做成功的時候，你就呼叫 resolve
//     //做失敗的時候，你就呼叫 reject

// }



// ----------------------------------------------------

// let doEvent_test = doWork("刷牙", 0);

// console.log(doEvent);

// doEvent.then(result => {

//     console.log(result);
//     let doEvent = doWork("吃早餐", 1);
//     console.log(doEvent);
//     return doEvent;

// }, (error) => {
//     console.error("error：" + error);
// })

// // ----------------------------------------------------


// let doFuntion = doWork("EVENT", TIME);

// console.log(doFuntion);

// doFuntion.then((result) => { console.log(result); },
//     (error) => { console.log(error) })