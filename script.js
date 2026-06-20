let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(){
cart.push({id:Date.now()});
localStorage.setItem("cart",JSON.stringify(cart));
alert("কার্টে যোগ করা হয়েছে");
}

function placeOrder(){
let code="DHR"+Math.floor(Math.random()*999999);
localStorage.setItem("lastOrder",code);
alert("অর্ডার সফল: "+code);
}

function trackOrder(){
let code=document.getElementById("trackCode").value;
let saved=localStorage.getItem("lastOrder");
if(code===saved){
document.getElementById("result").innerText="Processing";
}else{
document.getElementById("result").innerText="Not Found";
}
}
