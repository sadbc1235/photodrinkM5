import {
  neonFilter,
  neonBtnFilter,
  profileFilter,
  artFilter,
  dynamicFilter,
  profileBtnFilter,
  modernFilter,
  modernBtnFilter,
  artBtnImg,
  dynamicBtnImg,
  conceptName
} from "./filter.js"

const cards = document.querySelectorAll(".card");
const galleryBox = document.querySelector(".galleryBox");
const gallery = galleryBox.querySelector(".gallery");
const closeBtn = document.querySelector(".closeBtn");

export const clickMore = (e) => {
  const card = e.path[3];
  const cardName = card.querySelector(".cardName");
  const cardImg = card.querySelector(".cardImg");
  const more = card.querySelector(".more");
  const moreName = more.querySelector(".name");
  const explain = more.querySelector(".explain");
  const concept = more.querySelector(".concept");
  const conItems = more.querySelectorAll(".conItem");
  const back = card.querySelector(".back");
  const gallery = card.querySelector(".gallery");

  cards.forEach(card => {
    card.style.opacity = 0;
  })
  card.style.opacity = 1;
  moreName.classList.remove("show");

  setTimeout(() => {
    moreName.classList.add("displayNone");
    explain.classList.remove("displayNone");
    back.classList.remove("displayNone");
    gallery.classList.remove("displayNone");
    concept.classList.remove("displayNone");
    card.classList.add("active");
    cardName.classList.add("active");
    more.classList.add("active");
    cardImg.classList.add("active");

    cards.forEach(card => {
      card.classList.add("displayNone");
    })
    card.classList.remove("displayNone");

    setTimeout(() => {
      back.classList.add("show");
      gallery.classList.add("show");
      explain.classList.add("show");
      
      let index = 0;
      const interval = setInterval(() => {
        if(index == conItems.length-1) {
          clearInterval(interval)
        }
        conItems[index].classList.add("show");
        index++
      }, 200)
      
    }, 400)
  }, 400)
}

export const clickBack = (e, boothMainSrc) => {
  const card = e.path[2];
  const cardName = card.querySelector(".cardName");
  const cardImg = card.querySelector(".cardImg");
  const more = card.querySelector(".more");
  const moreName = more.querySelector(".name");
  const explain = more.querySelector(".explain");
  const filter = card.querySelector(".filter");
  const concept = more.querySelector(".concept");
  const conItems = more.querySelectorAll(".conItem");
  const back = card.querySelector(".back");
  const gallery = card.querySelector(".gallery");
  const imgFilter = cardImg.querySelectorAll(".imgFilter");
  const circle = filter.querySelectorAll(".circle");
  const fname = filter.querySelectorAll(".fname");
  const imgEl = cardImg.querySelector("img");

  back.classList.remove("show");
  gallery.classList.remove("show");
  explain.classList.remove("show");
  filter.classList.remove("show");
  moreName.classList.remove("displayNone");

  conItems.forEach(con => {
    con.classList.remove("show");
    con.classList.remove("clicked");
  })

  for(let i=0; i<imgFilter.length; i++) {
    imgFilter[i].classList.remove("show");
    fname[i].classList.remove("clicked");
    circle[i].classList.remove("clicked");
  }

  cards.forEach(card => {
    card.classList.remove("displayNone");
  })

  imgEl.style.opacity = 0;

  setTimeout(() => {
    back.classList.add("displayNone");
    gallery.classList.add("displayNone");
    explain.classList.add("displayNone");
    filter.classList.add("displayNone");
    moreName.classList.add("show");
    concept.classList.add("displayNone");
    imgEl.setAttribute("src", boothMainSrc);
    imgEl.addEventListener("load", () => {
      imgEl.style.opacity = 1;
      setTimeout(() => {
        for(let i=0; i<imgFilter.length; i++) {
          imgFilter[i].classList.remove("show");
        }
      }, 300)
    })

    card.classList.remove("active");
    cardName.classList.remove("active");
    more.classList.remove("active");
    cardImg.classList.remove("active");

    setTimeout(() => {
      cards.forEach(card => {
        card.style.opacity = 1;
      })
    }, 400)
  }, 400)
}

export const clickConcept = (e, con, boothImgSrc) => {
  const card = e.path[4];
  const curBtn = e.path[0];
  const conItem = card.querySelectorAll(".conItem");
  const explain = card.querySelector(".explain");
  const filter = card.querySelector(".filter");
  const circle = filter.querySelectorAll(".circle");
  const fname = filter.querySelectorAll(".fname");
  const cardImg = card.querySelector(".cardImg");
  const loading = cardImg.querySelector(".loading");
  const imgFilter = cardImg.querySelectorAll(".imgFilter");
  const imgEl = cardImg.querySelector("img");

  conItem.forEach(con => {
    con.classList.remove("clicked");
  })

  for(let i=0; i<imgFilter.length; i++) {
    imgFilter[i].classList.remove("show");
    fname[i].classList.remove("clicked");
    circle[i].classList.remove("clicked");
  }

  filter.classList.remove("show");
  curBtn.classList.add("clicked");
  explain.classList.remove("show");

  imgEl.style.opacity = 0;
  loading.classList.add("active");
  setTimeout(() => {
    if(con == "neon") {
      imgEl.setAttribute("src", boothImgSrc.neon);
    } else if(con == "profile") {
      imgEl.setAttribute("src", boothImgSrc.profile);
    } else if(con == "modern") {
      imgEl.setAttribute("src", boothImgSrc.modern);
    } else if(con == "art") {
      imgEl.setAttribute("src", boothImgSrc.art);
    } else if(con == "dynamic") {
      imgEl.setAttribute("src", boothImgSrc);
    }
    imgEl.addEventListener("load", () => {
      imgEl.style.opacity = 1;
      loading.classList.remove("active");
      setTimeout(() => {
        imgFilter[0].classList.add("show");
      }, 300)
    })
  }, 300)

  setTimeout(() => {
    explain.classList.add("displayNone");
    filter.classList.remove("displayNone");

    for(let i=0; i<circle.length; i++) {
      if(con == "neon"){
        circle[i].style.background = neonBtnFilter[i];
        imgFilter[i].style.background = neonFilter[i];
        fname[i].innerHTML = conceptName.neon[i];
      } else if(con == "profile") {
        circle[i].style.background = profileBtnFilter[i];
        imgFilter[i].style.background = profileFilter[i];
        fname[i].innerHTML = conceptName.profile[i];
      } else if(con == "modern") {
        circle[i].style.background = modernBtnFilter[i];
        imgFilter[i].style.background = modernFilter[i];
        fname[i].innerHTML = conceptName.modern[i];
      } else if(con == "art") {
        circle[i].style = artBtnImg[i];
        imgFilter[i].style = artFilter[i];
        fname[i].innerHTML = conceptName.art[i];
      } else if(con == "dynamic") {
        circle[i].style = dynamicBtnImg[i];
        imgFilter[i].style = dynamicFilter[i];
        fname[i].innerHTML = conceptName.art[i];
      }
    }
    setTimeout(() => {
      circle[0].classList.add("clicked");
      fname[0].classList.add("clicked");
      filter.classList.add("show");
    }, 50)
  }, 250)
}

export const clickGallery = (e) => {
  galleryBox.classList.add("show");
}

export const clickCloseGallery = () => {
  galleryBox.classList.remove("show");
  setTimeout(() => {
    gallery.scrollTo(0, 0)
  }, 400)
}

export const loadGallery = (imgLength, boothName) => {
  for (let i = 1; i <= imgLength; i++) {
    const imgBox = document.createElement("div");
    const img = document.createElement("img");
    imgBox.classList.add("imgBox");
    img.setAttribute("src", `./images/gallery/${boothName}/${boothName}${i}.png`);
    imgBox.append(img);
    gallery.append(imgBox);
  }
}

export const cleanGallery = () => {
  gallery.innerText = "";
}