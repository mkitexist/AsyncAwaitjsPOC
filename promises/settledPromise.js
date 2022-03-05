// for creating settled promises

let  p= Promise.resolve("hii");

p.then(res=>{console.log(res)});
let  k= Promise.reject(new Error("its in reject mode now"));

k.then(err=>{console.log("err is",err)});