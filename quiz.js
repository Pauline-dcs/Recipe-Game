import {
    recipes
 } from "./data.js"

 import {chosenRecipe, selectRecipes} from "./first.js"

const myButtons = document.querySelectorAll('.button');

myButtons.forEach((btn) => {
    btn.onclick = (e) => {
        chosenRecipe.ingredients = selectRecipes(e);
        const myPage = btn.getAttribute("data-page");
        axios
            .get(`${myPage}.html`)
            .then(response => {
                document.querySelector("#global-content").innerHTML = response.data;
                const script = document.createElement("script");
                script.src = `./${myPage}.js`;
                script.setAttribute("type", "module");
                document.head.appendChild(script);
            })
            .catch((err) => {
                console.log(err)
            });
    }

});




let icons = document.querySelectorAll('img');
console.log(icons)


const selectRightIcons = (e)=>{
const name = e.target.alt;
if (chosenRecipe.neededIngredients[name]){
    e.target.classList.add('selected-icons');
} else {
    e.target.classList.toggle('wrong-selection');
}

}

icons.forEach((icon)=>{
    icon.onclick = selectRightIcons; 
});


// Hint button

const giveAnHint = () =>{
    let hintText = document.querySelector("#hintText"); 
    if (hintText.style.display === "none") {
        hintText.style.display = "block";
    } else {
        hintText.style.display = "none";
    }
}

let hintBtn = document.querySelector("#hintBtn");
hintBtn.onclick = giveAnHint;

