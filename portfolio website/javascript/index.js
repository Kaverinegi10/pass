
  
/*function eventFunction(){
    console.log('hey me');
}*/

const { resolve, reject } = require("any-promise")

/*document.addEventListener('click',function () {
    console.log('hey me');
});
document.removeEventListener('click',function () {
    console.log('hey me');
});*/

//preventdefault
/*let links=document.querySelectorAll('a');
let thirdLink= links[1];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('yes not opening');
})*/

            /*let myDiv = document.createElement('div');

            function paraStatus(){ 
                console.log('printed'+ event.target.textContent);

            }
            myDiv.addEventListener('click', paraStatus);

            for(let i =0;i<=100;i++){
                let newElement =document.createElement('p');
                newElement.textContent="me"+i;

            
                myDiv.appendChild(newElement);

            }
            document.body.appendChild(myDiv);*/


//100para
/*let myDiv = document.createElement('div');
const t1= performance.now();

function para(){
    console.log('printed' + event.target.textContent);
}

myDiv.addEventListener('click', para);
for(let i =0;i<=100;i++){
    let newElement= document.createElement('p');
    newElement.textContent="me"+i;

    
    myDiv.appendChild(newElement);
}
const t2= performance.now();
document.body.appendChild(myDiv);
console.log('time taken' +t2-t1 +'ms');*/



//PROMISES
/*let myPromise= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('im under promise');
    }, 3000);
    console.log('me');
    rejected(2233);
})
console.log('pehla');
myPromise.then((value)=> {console.log(value)});
myPromise.catch((error)=> {console.log("error")});*/


/*let kaveri= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("first");
    },3000);
    resolve(true);
})

    kaveri.then(()=>{
    let kaveri2= new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("second");
        },3000);
        console.log("this is me");
    })
    return kaveri2;
}).then((value)=>console.log(value));*/


async function utility(){


    let delhiTemp =new Promise((resolve,reject)=>{
        setTimeout(() => {
       resolve("bahut grmi h");
       }, 3000);
     });
            


      let dhydTemp =new Promise((resolve,reject)=>{
        setTimeout(() => {
       resolve("bahut grmi h");
       }, 5000);
     });
            

      let dM= delhiTemp;
      let hM=dhydTemp;

      return(dM,hM);

}
