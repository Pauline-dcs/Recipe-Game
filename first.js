import {
    recipes
} from "./data.js"

export {
    chosenRecipe,
    selectRecipes
}


let chosenRecipe = {};
// Choose which recipes according to the button 
const selectRecipes = (e) => {

    if (e.target.id === "cookie-btn") {
        return recipes.cookies
    } else if (e.target.id === "cupcake-btn") {
        return recipes.cupcakes
    } else if (e.target.id === "brownie-btn"){
          return recipes.brownie
    }
}


//AJAX METHODS TO CHANGE PAGES + select the recipes according to buttons 

const myButtons = document.querySelectorAll('.button');

myButtons.forEach((btn) => {
    btn.onclick = (e) => {
        chosenRecipe = selectRecipes(e);
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







// 