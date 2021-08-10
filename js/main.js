const navLinks = document.querySelectorAll(".nav__link");
const pages = document.querySelectorAll(".page");
const loader = document.querySelector(".loader__container");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const year = document.querySelector(".year");
let slideIndex = 1;
let images = [
  "img/express.png",
  "img/react.png",
  "img/gql.svg",
  "img/php.png",
  "img/nodejs.png",
  "img/mysql.png",
  "img/mongodb.png",
  "img/mongose.png",
  "img/sequelize.png",
  "img/redis.png",
  "img/postgresql.png",
  "img/sass.png",
  "img/html5.png",
  "img/css.png",
  "img/netlify.png",
  "img/github.png",
  "img/apollo.png",
  "img/firebase.png",
];

function showSkill(index) {
  // let skills = document.querySelector(".skills__container");
  let skills = pages[2];
  skills.style.overflow = "hidden";
  let skill = document.createElement("div");
  let img = document.createElement("img");
  skill.classList.add("skill");
  skill.style.left = `calc(${Math.floor(Math.random() * 100)}% - 10rem)`;
  let src = images[index];
  img.setAttribute("src", src);
  img.setAttribute("alt", `${src}img`);
  skill.appendChild(img);
  skill.style.animationDelay = `${index * 0.4}s`;
  skill.style.animationDuration = `${images.length * 0.4}s`;
  skills.appendChild(skill);
}

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = (n) => {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("openSlide");
  }

  slides[slideIndex - 1].classList.add("openSlide");
};

year.textContent = new Date().getFullYear();
navLinks[0].classList.add("active");
pages[0].classList.add("open");
showSlides(slideIndex);
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    navLinks[index].classList.add("active");
    pages.forEach((page) => {
      page.classList.remove("open");
    });
    pages[index].classList.add("open");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let previous = Array.from(btn.classList).indexOf("previousSlide");
    let next = Array.from(btn.classList).indexOf("nextSlide");

    if (next !== -1) {
      plusSlides(1);
    }
    if (previous !== -1) {
      plusSlides(-1);
    }
    btn.classList.add("active");
    setTimeout(function () {
      btn.classList.remove("active");
    }, 500);
  });
});
images.forEach((image, index) => {
  showSkill(index);
});

window.onload = () => {
  loader.classList.add("hide");
};
