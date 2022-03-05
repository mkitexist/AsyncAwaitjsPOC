
// console.log("hi im in async await");
display=async()=>{
    try{
        let user=await getUser(2);
        let repository=await getRepositories(user.githubUsername);
        let commits=await getcommits(repository[1]);
        console.log("commits",commits);
        return 5;
    }catch(err){
        console.log("error mesage in async await",err);
    }
}
// you can see the differnce below how the execution work
async function promiseHandle(){
console.log("hi man im in promiseHandle",await display());

}
function notHandlingPromise(){
console.log(`hi man im in notHandlingPromise`, display());

}
promiseHandle();
notHandlingPromise();
console.log("hi man im not in side any method",display());



function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("inside setime out for id",id);
            resolve({id:id,githubUsername:"dinga"});
            // to check try catch error uncoment below code and comment the above code
            // reject(new Error("its a error from reject method"));
            },2000)
    })
}
function getRepositories(username){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("fetching repositories",username);
        let repo=["repo1","repo2","repo3","repo4"]
        resolve(repo);
        },3000)
    })
}
getcommits=(repo)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("lokking for commits",repo);
        resolve(`commit for the repo -${repo}`)
    },6000)
    })

}