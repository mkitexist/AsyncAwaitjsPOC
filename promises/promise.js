// console.log("hi im in promise");
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve(1);//pending=>resolved 
        reject(new Error("message")); //pending =>rejected
    },2000);
});

p.then(result=>{console.log("result",result);})
 .catch(err=>{console.log("err",err.message)})

 //Asyncronous using promises,and one good example for promises
console.log ("before");
// getUser(1,(user)=>{
//     getRepositories(user.githubUsername,(gitrepo)=>{
//         getcommits(gitrepo[0],(commit)=>{
//             console.log(`for the user ${user.githubUsername},looking for repo ${gitrepo[0]},the commit is ${commit}`);
//         })
//     })

// });
console.log ("after ");
let user= getUser(1);
user.then((user)=>getRepositories(user.githubUsername))
    .then((repos)=>getcommits(repos[0]))
    .then((commits)=>{console.log("commits are",commits)})
    .catch(err=>{
    console.log("error",err.message);
    });



function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("inside setime out for id",id);
            resolve({id:id,githubUsername:"dinga"})
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