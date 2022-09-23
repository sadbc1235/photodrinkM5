const neonFilter = [
  "linear-gradient(90deg, rgba(240,109,178,.3) 40%, rgba(255,141,131,.3) 60%)", // sweet peach
  "linear-gradient(90deg, rgba(224,104,76,.3) 40%, rgba(118,159,57,.3) 60%)", // mango green
  "linear-gradient(90deg, rgba(172,139,162,.3) 40%, rgba(21,177,227,.3) 60%)", // mixed blue
  "linear-gradient(90deg, rgba(206,96,160,.3) 40%, rgba(204,175,179,.3) 60%)" // shadow pink
]

const profileFilter = [
  "linear-gradient(90deg, rgba(170,170,170,.3) 45%, rgba(238,238,238,.3) 55%)", // soft-right
  "linear-gradient(90deg, rgba(238,238,238,.3) 45%, rgba(170,170,170,.3) 55%)", // soft-left
  "linear-gradient(90deg, rgba(170,170,170,.3) 45%, rgba(255,255,255,.3) 55%)", // contrast-right
  "linear-gradient(90deg, rgba(255,255,255,.3) 45%, rgba(170,170,170,.3) 55%)" // contrast-left
]

const modernFilter = [
  "rgba(136, 136, 136, .3)", // soft
  "rgba(85, 85, 85,.3)", // contrast
  "rgba(255,201,90,.1)", // sepia
  "rgba(75,158,219,.1)" // blue
]

const artFilter = [
  "background: url('/images/full/concepts/art/heart.png') no-repeat center; background-size: cover;",
  "background: url('/images/full/concepts/art/nightsky.png') no-repeat center; background-size: cover;",
  "background: url('/images/full/concepts/art/butterfly.png') no-repeat center; background-size: cover;",
  "background: url('/images/full/concepts/art/fullmoon.png') no-repeat center; background-size: cover;",
]
const dynamicFilter = [
  "background: url('/images/dynamic/concept/dynamic1.jpg') no-repeat center; background-size: cover;",
  "background: url('/images/dynamic/concept/dynamic2.png') no-repeat center; background-size: cover;",
  "background: url('/images/dynamic/concept/dynamic3.png') no-repeat center; background-size: cover;",
  "background: url('/images/dynamic/concept/dynamic4.png') no-repeat center; background-size: cover;",
]

const neonBtnFilter = [
  "linear-gradient(90deg, rgb(240,109,178) 40%, rgb(255,141,131) 60%)", // sweet peach
  "linear-gradient(90deg, rgb(224,104,76) 40%, rgb(118,159,57) 60%)", // mango green
  "linear-gradient(90deg, rgb(172,139,162) 40%, rgb(21,177,227) 60%)", // mixed blue
  "linear-gradient(90deg, rgb(206,96,160) 40%, rgb(204,175,179) 60%)" // shadow pink
]

const profileBtnFilter = [
  "linear-gradient(90deg, rgb(170,170,170) 45%, rgb(238,238,238) 55%)", // soft-right
  "linear-gradient(90deg, rgb(238,238,238) 45%, rgb(170,170,170) 55%)", // soft-left
  "linear-gradient(90deg, rgb(170,170,170) 45%, rgb(255,255,255) 55%)", // contrast-right
  "linear-gradient(90deg, rgb(255,255,255) 45%, rgb(170,170,170) 55%)" // contrast-left
]

const modernBtnFilter = [
  "rgb(136, 136, 136)", // soft
  "rgb(85, 85, 85)", // contrast
  "rgb(255,201,90)", // sepia
  "rgb(75,158,219)" // blue
]

const artBtnImg = [
  "background: url('/images/full/heart.png'); background-size: cover;", // heart
  "background: url('/images/full/cloud.png'); background-size: cover;", // night sky
  "background: url('/images/full/butterfly.png'); background-size: cover;", // butterfly
  "background: url('/images/full/fullmoon.png'); background-size: cover;", // moon
]

const dynamicBtnImg = [
  "background: url('/images/dynamic/dynamicbtn.jpg'); background-size: cover;", // photo
  "background: url('/images/dynamic/dynamicbtn2.png'); background-size: cover;", // video
  "background: url('/images/dynamic/dynamicbtn3.png'); background-size: cover;", // video
  "background: url('/images/dynamic/dynamicbtn4.png'); background-size: cover;" // video
]

const conceptName = {
  neon: ["Sweet<br> Peach", "Mango<br> Green", "Mixed<br> Blue", "Shadow<br> Pink"],
  profile: ["Soft<br>Right", "Soft<br>Left", "Contrast<br> Right", "Contrast<br> Left"],
  modern: ["Soft", "Contrast", "Sepia", "Blue"],
  art: ["Heart<br>.", "Night Sky", "Butterfly<br>.", "Full Moon"],
  dynamic: ["Photo", "Video"]
};

const bustConceptImgSrc = {
  neon: "/images/bust/concepts/neon/neon.png",
  profile: "/images/bust/concepts/profile/profile.png",
  modern: "/images/bust/concepts/modern/modern.png",
};

const metalConceptImgSrc = {
  neon: "/images/metal/concepts/neon/neon.jpg",
  profile: "/images/metal/concepts/profile/profile.png",
  modern: "/images/metal/concepts/modern/modern.png",
};

const fullConceptImgSrc = {
  neon: "/images/full/concepts/neon/neon.png",
  profile: "/images/full/concepts/profile/profile.png",
  modern: "/images/full/concepts/modern/modern.png",
  art: "/images/full/concepts/modern/modern.png",
};

const dynamicConceptImgSrc = "/images/dynamic/dynamic.jpg"

const mainImgSrc = {
  bust: "/images/bust/bustmain1.png",
  metal: "/images/metal/metal4.png",
  full: "/images/full/fullshot5.jpg",
  dynamic: "/images/dynamic/dynamic2.png"
}

export {
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
  conceptName,
  bustConceptImgSrc,
  metalConceptImgSrc,
  fullConceptImgSrc,
  dynamicConceptImgSrc,
  mainImgSrc
}