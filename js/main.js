import {
  clickMore,
  clickConcept,
  clickBack,
  clickGallery,
  clickCloseGallery,
  loadGallery,
  cleanGallery
} from "./btnFunc.js";

import {
  bustConceptImgSrc,
  metalConceptImgSrc,
  fullConceptImgSrc,
  dynamicConceptImgSrc,
  mainImgSrc
} from "./filter.js"

const clickEvent = (() => {
  if('ontouchstart' in document.documentElement === true) {
    return 'touchstart';
  } else {
    return 'click'
  }
})()

const cards = document.querySelectorAll(".card");
const moreBtn = document.querySelectorAll(".moreBtn");
const back = document.querySelectorAll(".back");
const gallery = document.querySelectorAll(".gallery");
const closeBtn = document.querySelector(".closeBtn");
const button = document.getElementById("button");

// bust shot
// moreBtn[0].addEventListener('touchstart', (e) => {
//   clickMore(e);
//   loadGallery(25, 'bust');
// })
button.addEventListener('touchstart', (e) => {
  clickMore(e);
  loadGallery(25, 'bust');
})
back[0].addEventListener("click", (e) => {
  clickBack(e, mainImgSrc.bust)
  cleanGallery()
})
gallery[0].addEventListener("click", (e) => {
  clickGallery(e)
})
closeBtn.addEventListener("click", (e) => {
  clickCloseGallery(e)
})

// metal
moreBtn[1].addEventListener('touchstart', (e) => {
  clickMore(e);
  loadGallery(26, 'metal');
})
back[1].addEventListener("click", (e) => {
  clickBack(e, mainImgSrc.metal)
  cleanGallery()
})
gallery[1].addEventListener("click", (e) => {
  clickGallery(e)
})
closeBtn.addEventListener("click", (e) => {
  clickCloseGallery(e)
})

// full shot
moreBtn[2].addEventListener('touchstart', (e) => {
  clickMore(e);
  loadGallery(26, 'full');
})
back[2].addEventListener("click", (e) => {
  clickBack(e, mainImgSrc.full)
  cleanGallery()
})
gallery[2].addEventListener("click", (e) => {
  clickGallery(e)
})
closeBtn.addEventListener("click", (e) => {
  clickCloseGallery(e)
})

// dynamic
moreBtn[3].addEventListener('touchstart', (e) => {
  clickMore(e);
  loadGallery(8, 'dyna');
})
back[3].addEventListener("click", (e) => {
  clickBack(e, mainImgSrc.dynamic)
  cleanGallery()
})
gallery[3].addEventListener("click", (e) => {
  clickGallery(e)
})
closeBtn.addEventListener("click", (e) => {
  clickCloseGallery(e)
})

cards.forEach(card => {
  const concept = card.querySelector(".concept");
  const conItems = concept.querySelectorAll(".conItem");
  const filter = card.querySelector(".filter");
  const filterItem = filter.querySelectorAll("li");
  const circle = filter.querySelectorAll(".circle");
  const fname = filter.querySelectorAll(".fname");
  const cardImg = card.querySelector(".cardImg");
  const imgFilter = cardImg.querySelectorAll(".imgFilter");

  for(let i=0; i<filterItem.length; i++) {
    filterItem[i].addEventListener("click", () => {
      for(let j=0; j<4; j++) {
        circle[j].classList.remove("clicked");
        fname[j].classList.remove("clicked");
        imgFilter[j].classList.remove("show");
      }

      circle[i].classList.add("clicked");
      fname[i].classList.add("clicked");
      imgFilter[i].classList.add("show");
    })
  }

  for(let i=0; i<conItems.length; i++) {
    conItems[i].addEventListener("click", (e) => {
      let conName;
      let boothImgSrc;

      if(e.path[4].classList.value.includes("bust")) {
        boothImgSrc = bustConceptImgSrc;
      } else if(e.path[4].classList.value.includes("metal")) {
        boothImgSrc = metalConceptImgSrc;
        console.log(boothImgSrc)
      } else if(e.path[4].classList.value.includes("full")) {
        boothImgSrc = fullConceptImgSrc;
      } else if(e.path[4].classList.value.includes("dynamic")) {
        boothImgSrc = dynamicConceptImgSrc;
      }

      if (e.target.classList.value.includes('neon')) {
        conName = 'neon';
      } else if (e.target.classList.value.includes('profile')) {
        conName = 'profile';
      } else if (e.target.classList.value.includes('modern')) {
        conName = 'modern';
      } else if (e.target.classList.value.includes('art')) {
        conName = 'art';
      } else if (e.target.classList.value.includes('dynamic')) {
        conName = 'dynamic';
      }

      clickConcept(e, conName, boothImgSrc)
    })
  }
    
})