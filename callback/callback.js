//Asyncronous using callback,and one good example for callbackHell
console.log ("before");
getUser(1,(user)=>{
    getRepositories(user.githubUsername,(gitrepo)=>{
        getcommits(gitrepo[0],(commit)=>{
            console.log(`for the user ${user.githubUsername},looking for repo ${gitrepo[0]},the commit is ${commit}`);
        })
    })

});
console.log ("after ");

function getUser(id,callback){
    setTimeout(()=>{
        // console.log("inside setime out for id",id);
        callback({id:id,
            githubUsername:"dinga"});
        },2000)
}
function getRepositories(username,callback){
    setTimeout(()=>{
        // console.log("fetching repositories",username);
        let repo=["repo1","repo2","repo3","repo4"]
        callback(repo);
        },3000)
}
getcommits=(repo,callback)=>{
    setTimeout(()=>{
        // console.log("lokking for commits",repo);
        callback(`commit for the repo -${repo}`);
    },6000)

}

// bellow is the code to flatten the callback hell problem with removing out anonimous fuction to named function

console.log ("before");
getUser(1,displayUser);
console.log ("after ");

// flattening the hell---------------------------------
function displayUser(user){
    getRepositories(user.githubUsername,displayRepo);
}
displayRepo=(gitrepo)=>{
    getcommits(gitrepo[0],displaycommits)
}
displaycommits=(commit)=>{
    console.log(`for the user ,looking for repo ,the commit is ${commit}`);
}
// ------------------------------------------------

function getUser(id,callback){
    setTimeout(()=>{
        // console.log("inside setime out for id",id);
        callback({id:id,
            githubUsername:"dinga"});
        },2000)
}
function getRepositories(username,callback){
    setTimeout(()=>{
        // console.log("fetching repositories",username);
        let repo=["repo1","repo2","repo3","repo4"]
        callback(repo);
        },3000)
}
getcommits=(repo,callback)=>{
    setTimeout(()=>{
        // console.log("lokking for commits",repo);
        callback(`commit for the repo -${repo}`);
    },6000)

}

// Syncronous no call backhell good to read the code , bellow mentioned code is just for illustarion it wont work
// console.log("before");
// let user=getUser(1);
// let repo= getRepositories(user.githubUsername);
// let commit= getcommits(repo[0]);
// console.log("after");
