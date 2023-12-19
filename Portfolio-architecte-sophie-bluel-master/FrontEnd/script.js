let works = [];
async function loadWorks() {
  const response = await fetch("http://localhost:5678/api/works");
  works = await response.json();
  displayWorks();
}
loadWorks();

function displayWorks() {
  works.forEach((work) => {
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = work.title;
    const worksImage = document.createElement("img");
    worksImage.src = work.imageUrl;
    worksImage.alt = work.title;
    figure.appendChild(worksImage);
    figure.appendChild(figcaption);
    const gallery = document.querySelector(".gallery");
    gallery.appendChild(figure);
  });
}

let categories = [];
async function loadCategories() {
  const response = await fetch("http://localhost:5678/api/categories");
  categories = await response.json();
  displaycategories();
}
loadCategories();

function displaycategories() {
  categories.forEach((category) => {
    const categories = document.createElement("button-all");
    categories.innerHTML= category.name;
    const objets = document.createElement("button");
    objets.textContent= 'Objets';
    const appartements = document.createElement("button");
    appartements.textContent= 'Appartements';
    const hotelsRestaurants = document.createElement("button");
    hotelsRestaurants.textContent= 'Hotels & Restaurants';
    appartements.appendChild(hotelsRestaurants);
    objets.appendChild(appartements);
    categories.appendChild(objets);
    const portfolio = document.querySelector("#portfolio h2");
    portfolio.appendChild(categories);
  })
};

const filterObjets= document.querySelector("button");
filterObjets.addEventListener("click", function(){
if (works===objets)
works=objets
});

let objetsWork= works.filter((work)=> work.category.name ==='objets');