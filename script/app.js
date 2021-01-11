//HTML variables
const searchBtn = document.querySelector("button");
const refreshBtn = document.querySelector(".refresh");
const headerTag = document.querySelector("header");
const formTag = document.querySelector("form");
const resultSectionTag = document.querySelector("section");
const inputPhrase = document.querySelectorAll("input")[0];
const inputCalories = document.querySelectorAll("input")[1];

searchBtn.addEventListener("click", async () => {
  const apiKey = "cad0aa59931c88eff442cbbd91738927";
  const apiID = "5d0d6f85";

  if (inputPhrase.value && inputCalories.value) {
    const recipeResults = await getRecipeFromApi(apiKey, apiID);
    const HTMLstructure = createHTMLstructure(recipeResults.hits);
    recipeResults.hits.length
      ? showResultsSection()
      : alert("Sorry, nothing to show :(");
    displayStructure(HTMLstructure);
  } else {
    alert("First You must type a value!");
  }
});

const getRecipeFromApi = async (apiKey, apiID) => {
  const url = `https://api.edamam.com/search?q=${inputPhrase.value}&app_id=${apiID}&app_key=${apiKey}&calories=0-${inputCalories.value}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      alert("Sorry, nothing to show :(");
    }
  } catch {
    alert("We have an error !");
  }
};

const showResultsSection = () => {
  searchBtn.classList.toggle("top");
  headerTag.classList.toggle("top");
  formTag.classList.toggle("top");
  resultSectionTag.classList.toggle("show");
  refreshBtn.classList.toggle("show");
};

const createHTMLstructure = (recipeResults) => {
  let structure = "";
  recipeResults.map((item) => {
    structure += `
      <div class="card">
        <div class="image">
          <img src="${item.recipe.image}">
        </div>

        <div class="title">
          ${item.recipe.label}
        </div>

         <div class="calories">
          Calories : ${Math.round(item.recipe.calories)}
        </div>

        <button class="card_btn">
          <a href="${item.recipe.url}">Show recipe</a>
       </button>

      </div>
    `;
  });

  return structure;
};

const displayStructure = (HTMLstructure) => {
  resultSectionTag.innerHTML = HTMLstructure;
};

const refreshPage = () => {
  location.reload();
};

refreshBtn.addEventListener("click", refreshPage);
