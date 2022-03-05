const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("in first promise p1");
        resolve(1);
    },5000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("in second promise p2");
         resolve(2);
    },2000)
})
// Promise.all runs after all them are resolved
Promise.all([p1,p2]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.message)})
// Promise.race executes if any one which executes at very first it prints it
Promise.race([p1,p2]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.message)})
//Promise.any executes if any one gets resolved
// Promise.any([p1,p2]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.message)})