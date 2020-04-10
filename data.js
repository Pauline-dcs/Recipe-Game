
export {recipes}




//recipes
let recipes = {
    cookies: {
        name: "cookies",
        instructions: [
            {
            text: "1. Start by adding the butter to the bowl",
            nameId: "butter"
        }, {
            text: "2.Add the flour",
            nameId: "flour"
        }, {
            text: "3.Add the egg",
            nameId: "eggs"
        },{
            text: "4.Let's add some sugar",
            nameId: "sugar"
        }, {
            text: "5. Add the Vanilla Bean and then mix everything" ,
            nameId: "vanilla"
        },
    { 
        text: "6.Don't forget to add the chocolate in little pieces",
        nameId: "chocolate"
    },
      {
          text: "7.Finally add the baking powder :)",
          nameId: "bakingPowder"
      }, 
   
{
    text: "9. And click on the Oven now and let's see the result :) "
}],
        neededIngredients: {
                    eggs: true,
                   chocolate: true,
                   flour: true,
                   butter: true,
                   vanilla: true,
                    sugar: true,
                    bakingPowder: true
        }
    },
    cupcakes: {
        name: "cupcakes",
        instructions: [{
                    text: "1. Add the butter to the bowl",
                     nameId: "butter"
                     },
                   {
                       text: "2.Add sugar and mix ",
                        nameId: "sugar"
                        },
{
    text: "3.Add the eggs",
    nameId: "eggs"
},
            {
                text: "4.Add the flour ",
                 nameId: "flour"
                 },
               {
                   text: "5.And the baking powder",
                    nameId: "bakingPowder"
                    },
            {
                text: "6. Add the milk and mix again",
                 nameId: "milk"
                 },
                {
                    text: "7.Add the chocolate in little pieces !  ",
                    nameId: "chocolate"
                }, 
               {
                    text: "9. And click on the Oven now and let's see the result :) "
                }
        ],
         neededIngredients: {
             eggs: true,
             chocolate: true,
             flour: true,
             milk: true,
             butter: true,
             vanilla: true,
             bakingPowder: true,
             sugar: true,
         }
    },
brownie: {
        name: "brownie",
        instructions: [{
            text: "1. Add the butter to the bowl",
            nameId: "butter"
            },
            {
                text: "2. Add the melted chocolate and mix ",
                nameId: "chocolate"
            },
            {
                text: "3. Add the sugar",
                nameId: "sugar"
            },
            {
                text: "4. And then the eggs",
                nameId: "eggs"
            },
            {
                text: "5. Drop the flour",
                nameId: "flour"
            },
            {
                text: "6. Add the vanilla for more flavors",
                nameId: "vanilla"
            },
            {
                text: "7. Don't forget the nuts!",
                nameId: "nut"
            },
            {
                text: "8. Our preparation is ready to go in the oven! Press the oven button",
            },
        ],
         neededIngredients: {
             eggs: true,
             chocolate: true,
             flour: true,
             nut: true,
             butter: true,
             vanilla: true,
             sugar: true,
         }
}
}


