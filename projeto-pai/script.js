//  Functions (header Close & Open)
closeHeader = () => {
  header.classList.add("closed");
};
openHeader = () => {
  header.classList.remove("closed");
};
/* Header & to Top Const */
const header = document.querySelector("header");
const headerLinks = document.querySelectorAll("header ul li a");
const headerClose = document.getElementById("headerClose");
const headerOpen = document.getElementById("headerOpen");
const toTop = document.getElementById("toTop");

/* Window Scroll Event to close/Open the Header & toTop */
window.addEventListener("scroll", () => {
  if (scrollY >= 10) {
    closeHeader();
  } else if (scrollY <= 10 && window.innerWidth >= 680) {
    openHeader();
  }
  console.log(scrollY);
  if (scrollY >= 1000) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
  }
});
if (window.innerWidth <= 680) {
  closeHeader();
}
headerOpen.addEventListener("click", () => {
  openHeader();
});
headerClose.addEventListener("click", () => {
  header.classList.add("closed");
  console.log("abcedfghijklmnopqrstuvwxyz");
});
headerLinks.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("active");
    headerLinks.forEach((elm) => {
      if (elm.href != e.href) {
        elm.classList.remove("active");
      }
    });
  });
});
// ProductCarousel
const productCarouselSelector = document.getElementById(
  "productCarouselSelector"
);
const productImage = document.querySelector("#productImage img");
const infoTitle = document.querySelector("#productInfo h3");
const infoContent = document.querySelector("#productInfo p");
/* Product Carousel Array */
const carouselInfos = [
  {
    source: "imagem-teste.webp",
    title: "Kit Prime de Reparos",
    content: [
      "1 Shampoo",
      "</br> 2 Kit de Reparos",
      "</br> 1 Condicionador - Prime",
    ],
  },
  {
    source: "imagem-teste2.webp",
    title: "Kit Olenka de Reparos",
    content: [
      "1 Shampoo",
      "</br> 2 Kit de Reparos",
      "</br> 1 Condicionador - Olenka",
    ],
  },
  {
    source: "imagem-teste3.webp",
    title: "Kit de Shampoo e Condicionar Prime",
    content: ["2 Shampoos", "</br> 2 Condicionadores - Prime"],
  },
  {
    source: "imagem-teste4.webp",
    title: "Kit de Shampoo e Condicionar Olenka",
    content: ["2 Shampoos", "</br> 2 Condicionadores - Olenka"],
  },
];
/* Selector Create Products */
for (let i = 0; i < carouselInfos.length; i++) {
  let image = document.createElement("img");
  image.id = `${"productCarousel" + [i]}`;
  image.src = carouselInfos[i].source;
  productCarouselSelector.appendChild(image);
  productCarouselSelector.firstElementChild.classList.add("selected");
}
/* Select all Product in Carousel List and give onClick Event */
const productCarouselSelectList = document.querySelectorAll(
  "#productCarouselSelector img"
);
productCarouselSelectList.forEach((e) => {
  e.addEventListener("click", () => {
    const productActual = carouselInfos[e.id[15]];
    infoTitle.innerText = productActual.title;
    for (let i = 0; i < productActual.content.length; i++) {
      infoContent.innerHTML = productActual.content;
    }
    e.classList.add("selected");
    productCarouselSelectList.forEach((elm) => {
      if (elm.id != e.id) {
        elm.classList.remove("selected");
      }
    });
    productImage.src = e.src;
  });
});
/* Product Lists */
const allProducts = [
  {
    source: "imagem-teste.webp",
    title: "Kit Prime de Reparos",
    content: ["1 Shampoo", "</br> 2 Kit de Reparos", "</br> 1 Condicionador"],
    brand: ["Olenka"],
  },
  {
    source: "imagem-teste2.webp",
    title: "Kit Olenka de Reparos",
    content: ["1 Shampoo", "</br> 2 Kit de Reparos", "</br> 1 Condicionador"],
    brand: ["Prime"],
  },
  {
    source: "imagem-teste3.webp",
    title: "Kit de Shampoo e Condicionar Prime",
    content: ["2 Shampoos", "</br> 2 Condicionadores"],
    brand: ["Olenka"],
  },
  {
    source: "imagem-teste4.webp",
    title: "Kit de Shampoo e Condicionar Olenka",
    content: ["2 Shampoos", "</br> 2 Condicionadores"],
    brand: ["Olenka"],
  },
];
const productList = document.querySelector("#productLists ul");
for (let i = 0; i < allProducts.length; i++) {
  let newProductLi = document.createElement("li");
  let newProductImg = document.createElement("img");
  let newProductTitle = document.createElement("span");
  productList.appendChild(newProductLi);
  newProductLi.appendChild(newProductImg);
  newProductLi.id = i;
  newProductLi.appendChild(newProductTitle);
  newProductImg.src = allProducts[i].source;
  newProductTitle.innerHTML =
    allProducts[i].title + "</br>" + allProducts[i].brand;
  console.log(newProductTitle.innerText + newProductLi.id);
}
