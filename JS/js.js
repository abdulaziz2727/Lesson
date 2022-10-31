let list =document.querySelector("#list");
let button =document.querySelector("#btn");
let left_button =document.querySelector("left_button");
let right_button =document.querySelector("right_button");
let img = document.querySelector("corusel_item");
let corusel_item = document.querySelectorAll("corusel_item")
let loader = document.querySelector("#loader")
window.addEventListener("DOMContentLoaded" , async() =>{
    await setTimeout(() =>{
        loader.classList.add("loader");
    }, 2000);
    setTimeout(() => {
        loader.style.display = "none"
    }, 2500);
});

button.addEventListener("click" , ()=>{
    if(list.classList[1]=="toggle_list"){
        list.classList.remove("toggle_list")
    }else{
        list.classList.add("toggle_list")
    }
    console.log(list.classList);
})


let ul = document.querySelector("#ul");
let li = document.querySelectorAll("#ul li");
let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
let width = li[0].clientWidth;
let score=0;
console.dir(li[0]);

rightBtn.addEventListener("click" , () => {
    if ((li.length - 2) * width + score < 0){
        score = 0
        ul.style.marginLeft = `${score}px`;
    }
    else{
        ul.style.marginLeft = `${(score -=width)}px`;
    }
    console.log(score);
});
setInterval(() =>{
    if ((li.length - 2) * width + score < 0){
        score = 0
        ul.style.marginLeft = `${score}px`;
    }
    else{
        ul.style.marginLeft = `${(score -=width)}px`;
    }
    console.log(score);
},3000 )
leftBtn.addEventListener("click" , () => {
    if ((li.length - 2) * width + score > 0){
        score = 0
        ul.style.marginLeft = `${score}px`;
    }
    else{
        ul.style.marginLeft = `${(score -=width)}px`;
    }
    console.log(score);
});


