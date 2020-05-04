//querySelector

const hamburger = document.getElementById("hamburger");
console.log(hamburger);

console.log("hi");

document.getElementById("hamburger").addEventListener("click", ()=>{
    console.log("clicked");
    const toggle = document.getElementsByClassName("toggle");
    console.log(toggle[0]);
    if(toggle[0].style.display==="block"){
        for(let i = 0; i < toggle.length; i++){
            toggle[i].style.display = "none";
        }
    }
    else{
        for(let i = 0; i < toggle.length; i++){
            toggle[i].style.display = "block";
        }
    }
});