//,,,,,,,,IMAGES SLUTION IN JAVASCRIPTS CODE ;;; //
 //           document.getElementById('owl').onclick = Function()  {
              //  alert("owl clicked")   // owl click mai click karenge to alert aa jayga 
//}// addeventlistener bhut sare event kko listen kar sakta hai mouse of key darngen drao 
           //false ya true likhe complet nahi hote 
    // attachEvent() like a addevenli
    //jQuery-on 
    // e mens event ke under hote kya hai 
   // ("owl clicked again") remove 
  // PointerEvent Object hai browserevent MouseEvent
 // /type mens keybord mouse ke bare mai event
//timestamp mens kab change kar rahe hkab clicked huwq 
//defaultprevented, mens behavibear cahnge kar sakte hao just like form na hoye sumbit 
//currentTarget, 
//clientx ,clienty, screenx, screeny  // interview purpose
// altkey, ctrlkey, shiftkey, keyCode, 
// google ko track kar sakte defaultbehavibear track karke defaultbehhibur
  

    
document.getElementById ('images').addEventListener('click',function (e) {
    console.log("clicked inside the ul");
  // e.stopPropagation()
},false)
document.getElementById ('owl').addEventListener('click',function (e) {
  console.log("clicked inside the ul");
},false)
// event propogetion hota hai use rok sakte hai 
// bubbel niche se uppar jata hai  bubbling niche se upar jata hai 
// 
              // ul first select hota  hai true mai false mai inside 
   // true mai click inside the ul then owl clicked for not bubbling 
   // false mai click owl clicked then clicked inside the ul 
   // google ko track kar sakte hai or oo google agar clicked ke bad google chorme mai khul jata hai to app rok sakte hai preventdefaultse 
    document.getElementById('google').addEventListener('click', function (e) {
        e.preventDefault();
       e.stopPropagation()                    // if stop the bubbling means inside the ul then you can applly try stopprgg..
        console.log('google clicked');
    },false)
    // jitna image mai ak clicked karne se gype ho gaye ..
    document.querySelector('#images').addEventListener('click',function(e){
        console.log(e.target.tagName); // log e karne se  har bar aa raha hai // target mens kiske image hai id hai // prentnode li remove karana hai 
        //let removeIt = e.target.parentNode
        if (e.target.tagName === 'IMG') {   //.. remove karke id imag id pata karna hai to cod ye likhe 
            console.log(e.target .id);
            let removeIt = e.target.parentNode

        removeIt.remove() 
        }
        // log e karne se  har bar aa raha hai // target mens kiske image hai id hai // prentnode li remove karana hai 
        //let removeIt = e.target.parentNode


       // removeIt.remove()         // ul mai click karne se sara images he gype ho jata hai 
     // removeIt.parentNode.removeChild(removeIt)  // ye vi code         // ye sab code se pura image remove ho jayga 
    })
            //SETTIMEOUT()
          // settimeout() mens kitna time mai output milega so 
          const sayVikash = function () {
            console.log("vikash");
           }
           const changeText = function () {
               document.querySelector('h2').
               innerHTML= "best of js"
           }
          const chnageMe = setTimeout(changeText, 2000)  // ye varible mai store ho gyekoi fayd anhi huwa hai 
          clearTimeout (chnageMe) // clear time out ko chaiye reffernce kisko hatna chate ho jo time diye 
          // document.querySelector('h1').innerHTML = "best of js"// nhai huwa aise yarr 
   /////// ye final hoga code 
           document.querySelector('#stop').addEventListener('click',function() {
               clearTimeout(chnageMe)
             console.log("STOPED");  
           })
        //  setTimeout(function() {
          //     console.log(vikash);
          // }, 2000)  // handler ak call back ho // reference ho  // 2 sec wait hoga phir kam hoga // interval mens karta he jauga 

                  // SETinterval//
                   //setInterval(function () {
          //  console.log("hitesh",Date.now());// lagatar print hota jayga pura fast ak sath setinterval mai 
     //   },1000)
     const sayDate = function(str){
      console.log(str, Date.now());
   }  // isme third parameter referrnce pass ho jata hai jaise hii ho raha hai 
 const intervalId= setInterval(sayDate,1000, "hi")  // agar isko chalu rakhenge to pass ho jayga 
   // rokna hai ab 
  // setInterval(sayDate, 1000 ,"hi")  ye extra hai isliye rukta nhai hai 
   clearInterval(intervalId)

   //###project solution
   //setInterval(function () {
          //  console.log("hitesh",Date.now());// lagatar print hota jayga pura fast ak sath setinterval mai 
     //   },1000)
    // const sayDate = function(str){
      console.log(str, Date.now());
   //}  // isme third parameter referrnce pass ho jata hai jaise hii ho raha hai 
 //const intervalId= setInterval(sayDate,1000, "hi")  // agar isko chalu rakhenge to pass ho jayga 
   // rokna hai ab 
  // setInterval(sayDate, 1000 ,"hi")  ye extra hai isliye rukta nhai hai 
   clearInterval(intervalId)
  
   //document.querySelector('#button').innerHTML= "love"
   //const startchangeinsDatenow = function(){
  const randomColor = function(){
    const hex ='0123456789ABCDEF';
  for (let i = 0;i< 6; i++) {
    color+= hex[Math.floor(Math.random()* 16)];
    
  }
    return color
};
const startChangeingcolor = function(){setInterval(chageBgColor,1000){
 // background chnage color karna hai ab isme

 function chageBgColor(){
 document.body.style.backgroundColor= randomColor();
 }


 };
}
const stopChangeingColor = function(){}
document.querySelector('#start').addEventListener('click',startChangeingColor)
document.querySelector('#stop').addEventListener('click',stopChangeingColor)
      
 // ***********API REQUEST*******//
  // api request kaise bhejte hai 
             // xml ke request bheje jate hai //
             // open apne app mai call nahi hota hai 
             const requestUrl =   'https://api.github.com/users/hiteshchoudhary'
        const xhr = new XMLHttpRequest();
       xhr.open ('GET', requestUrl) 
       xhr.onreadystatechange  = function() {// lagatar track karna hai 
        
        console.log(xhr.readyState); 
       // ab dekhna hai api change ho rahe hai na // ab ho arha hai lagatar track karna hai 
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText)  // convert in string
          // console.log(this.responseText);  // isse server mai responce milta hai kya change karana hai 
           console.log(typeof data); 
            console.log(data.followers);
              //  current context mai this. lagna padta hai//   
        } 
        }    // typeof string hota hai // data followers ko pata chalta hai // ye object hai phir vi string de raha hai 
        // whenever come in data for api only one string hai ata hai hartime 
        //ab string kko convert karte hai object mai 
        xhr.send() ; 
 
        // isi ke throwh data ko xml rquest bheja jata hai // ye class obj mai send karna 
    // ye ab open hoga ssend ke bad 

 // ******Promise****//
 const PromiseOne = new Promise(function(resolve , reject){ // add in varibale create ho gya promise usko vi consume vi karna hoga 
  //do an async task
  //db calls , crytography , network
  setTimeout(function (){
      console.log('async task is complete');
      resolve()
  },1000)
 })

 // consume promise 
// resolve of connect in .then
 PromiseOne.then(function(){
  console.log("promise consumed");  // ye to huwa he nahi i mens resolove or .then ko connnect he nahi kiya to kaise hoga
 })

 new Promise(function(resolve,reject){
  setTimeout (function(){
  console.log('async task 2');
  resolve()
 },1000)

 }) .then(function(){
console.log  ('async task resolved');
 })
 const PromiseThree = new Promise (function (resolove, reject){
  // network se data aya ho 
  setTimeout (function(){
      resolove({username:"chai",  email: "chai@chaiotrcshe.com"})
  },1000)
 
  
 })
         PromiseThree.then(function(user){
  console.log(user);   // resolve ke under koi vi data pass karte ho to reslove ke under pass ho jatya hai pata chal gya 
  })

const promiseFour = new Promise(function (reslove,reject){
  setTimeout(function(){
      let error = true
      if(!error){
          reslove({username: "vikash", password: "123"})
      }else{
          reject('ERROR: something went worng')
      }
  },2000)
})
// promiseFour.then(user).catch()  // if error ayagi to catch laga ke value le lunga .then() lGa ke value de dunga 
promiseFour
.then((user) =>{
console.log(user);  // jo uppper wala value se ayga return hoke wahi .then ke under chnaging hoga 
return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error){
console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected")

) 
// console.log(username); // agar waha se data nikalna hai to ye kam nahi kar sakte 
const promiseFive = new Promise (function(reslove, reject){
setTimeout(function(){
      let error = true
      if(!error){
          reslove({username: "javascript", password: "123"})
      }else{
          reject('ERROR: js went worng')
      }
  },2000)
}) 
async function consumePromiseFive(){

try {
  const response=   await promiseFive
console.log(response);
} catch (error) {     // then. catch. ya trycatch wala likhe tab kon si ayga dono same hoga 
  console.log(error);
}
}
consumePromiseFive();

//  async function getAllUsers(){
// try {
  //const response =   await fetch('https://api.github.com/users/hiteshchoudhary')
 //console.log(response);
  //const data = await response .jsonI()
  //console.log(data);
// } catch (error) {
//console.log("E: ", error);
//}
// }
// getAllUsers()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
return response .json() // first then comolete then start another then
}) 
.then((data)=>{
console.log(data);
})
.catch((error) => console.log(error))

       //**********new keyword ke sath*******

       