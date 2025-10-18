const chef = (callbackFN) => {
  console.log("Started Cooking");
  callbackFN();
  console.log("Serve the dish");
};

const recipeBook = {
  maggie: () => {
    console.log("Cooking Maggi");
  },
  burger: () => {
    console.log("Cooking Burger");
  },
  biryani: () => {
    console.log("Cooking Biryani");
  },
};

const getOrder = (dish) => {
  let recipe = recipeBook[dish];
  if (recipe) {
    chef(recipe);
  } else {
    console.log("Sorry Not Available");
  }
};

getOrder("biryani");
