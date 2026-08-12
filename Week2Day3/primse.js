//promise - is an object
// is used when a task takes time to finish - wait time



let myPromise=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve('Task is completed successfully')
    } else {
        reject('Task is failed')
    }
})

myPromise.then((result)=> {
    console.log(result)
}).catch((error)=>{
    console.log(error)
})