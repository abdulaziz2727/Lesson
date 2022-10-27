let list =document.querySelector("#list");
let button =document.querySelector("#btn");
let left_button =document.querySelector("left_button");
let right_button =document.querySelector("right_button");
let img = document.querySelector("corusel_item");


button.addEventListener("click" , ()=>{
    if(list.classList[1]=="toggle_list"){
        list.classList.remove("toggle_list")
    }else{
        list.classList.add("toggle_list")
    }
    console.log(list.classList);
})



