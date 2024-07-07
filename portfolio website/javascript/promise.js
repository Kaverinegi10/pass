/*async function utility(){


    let delhiTemp =new Promise((resolve,reject) =>{
        setTimeout(() => {
       resolve("bahut grmi h");
       }, 1000);
     });
            


      let dhydTemp =new Promise((resolve,reject)=>{
        setTimeout(() => {
       resolve("bahut grmi h");
       }, 5000);
     });
            

      let dM= delhiTemp;
      let hM=dhydTemp;

      return[dM,hM];

}*/
async function helper(){
let options= {
    method: 'POST',
    body: JSON.stringify({
      title: 'kaveri',
      body: 'gym girl',
      userId: 2003,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
};
    


    let content= await fetch('https://jsonplaceholder.typicode.com/posts',options);

    let response= content.json();
    return response;
}
async function utility(){
    let ans= await helper();
    console.log(ans);

}
utility();


