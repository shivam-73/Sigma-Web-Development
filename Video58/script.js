let button = document.getElementById("btn");

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = " Yayy, You are clicked,Enjoy your click";
})
button.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right click please");
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
})
