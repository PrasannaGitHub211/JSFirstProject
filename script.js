var counter = document.querySelector(".counter");
var  followers = document.querySelector(".followers");


let count = 1;
setInterval(()=>{
    if(count<=1000){
    counter.innerText = count;    
    count++;
    
    }
    
},10);


setTimeout(()=>{
    followers.innerText = "Followes on Instagram!";
},11500);