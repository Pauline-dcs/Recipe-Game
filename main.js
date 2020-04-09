import {
   
    recipes
} from "./data.js"

import {
    selectRecipes,
    chosenRecipe
} from "./first.js"





const addIngredientsToList = () => {
    let list = document.querySelector('#list-ingredient');
    
    let listIngredientsNeeded = "";

    for(let key of Object.keys(chosenRecipe.neededIngredients)){
     listIngredientsNeeded += `<button id= ${key} type="text" class="btn-ingredients"> ${key}</button>`
    }

    list.innerHTML = listIngredientsNeeded;
}

addIngredientsToList();




let currentInstruction = 0;

const displayInstructions=()=>{
    let list = document.querySelector('#instructions ol');
   
    let listInstructions = "";
    for (let i = 0; i < currentInstruction + 1; i++) {
        listInstructions += `<li>${chosenRecipe.instructions[i].text}</li>`
    }
    list.innerHTML = listInstructions
    buttonHighlight()
}

displayInstructions()



 
const displayIcons= (id) =>{
let myImages = document.querySelectorAll(".img"); 
myImages.forEach((img)=>{
    let name = img.alt;
    if (name === id) {
        img.style.visibility = "visible"; 
    } else {
        img.style.visibility = "hidden"
    }
})
};



//error 

// const errMessage = () => {
//     let err = document.querySelector("#error-message");
//     if (err.style.display === "none") {
//         err.style.display = "block";
//     } else {
//         err.style.display = "none";
//     }
// }



//btn display

function buttonHighlight  (){
 let myButtons = document.querySelectorAll(".btn-ingredients");
 myButtons.forEach((button)=>{
     
          if (button.id === chosenRecipe.instructions[currentInstruction].nameId){
            
            button.disabled =false;
            button.onclick = ()=>{
                displayIcons(button.id);
                currentInstruction++;
                displayInstructions();
            }
          } else {
             button.disabled=true;
            
          }
})

}

buttonHighlight()



// Add event listener on my oven 

let oven = document.querySelector("#oven"); 
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

const showMessage=()=> {
    modal.style.display = "block";
}
oven.onclick = showMessage;

window.onclick =  (event) =>{
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


span.onclick = () =>{
    modal.style.display = "none";
}























