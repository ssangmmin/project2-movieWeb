const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

//장르 버튼
const genresLeftButton = document.querySelector(".genres-left-arrow");
const genresRightButton = document.querySelector(".genres-right-arrow");
const genresScrollBar = document.querySelector(".genre-box-container");
let currentScrollPosition = 0;

const hideGenresButton = () => {
  setTimeout(() => {
    currentScrollPosition = genresScrollBar.scrollLeft;
    if (
      genresScrollBar.offsetWidth + currentScrollPosition >=
      genresScrollBar.scrollWidth
    ) {
      genresRightButton.style.display = "none";
    }
    if (
      genresScrollBar.offsetWidth + currentScrollPosition <=
      genresScrollBar.offsetWidth
    ) {
      genresLeftButton.style.display = "none";
    }
  }, 400);
};

genresLeftButton.addEventListener("click", () => {
  genresScrollBar.scrollLeft -= 400;
  genresRightButton.style.display = "flex";
  hideGenresButton();
});

genresRightButton.addEventListener("click", () => {
  genresScrollBar.scrollLeft += 400;
  genresLeftButton.style.display = "flex";
  hideGenresButton();
});

hideGenresButton();

if (isTouchDevice()) {
  genresLeftButton.style.display = "none";
  genresRightButton.style.display = "none";
}

genresScrollBar.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    genresScrollBar.scrollLeft += 200;
    genresLeftButton.style.display = "flex";
  } else {
    genresScrollBar.scrollLeft -= 200;
    genresRightButton.style.display = "flex";
  }

  hideGenresButton();
});

//이미지 클릭시 디테일화면
const listItemImage = document.querySelectorAll(".list-item-image");
listItemImage.forEach((e) => {
  e.style.cursor = "pointer";
  e.addEventListener("click", () => {
    location.href = "./details.html";
  });
});
