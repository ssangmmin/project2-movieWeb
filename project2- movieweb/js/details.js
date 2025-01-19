const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

//서치 컨테이너
const detailsSearchContainer = document.querySelector(
  ".search-container-details"
);
const detailsSearchButton = document.querySelector(
  ".search-container-details i"
);
detailsSearchButton.addEventListener("click", () => {
  detailsSearchContainer.classList.toggle("search-container-details-active");
});



//장르 버튼
const genresLeftButton = document.querySelector(".genres-side-left");
const genresRightButton = document.querySelector(".genres-side-right");
const detailsScrollbar = document.querySelector(".details-genres");

genresLeftButton.addEventListener("click", () => {
  detailsScrollbar.scrollLeft -= 300;
});

genresRightButton.addEventListener("click", () => {
  detailsScrollbar.scrollLeft += 300;
});

const genres = document.querySelector(".details-genres");

const isOverflown = ({
  clientWidth,
  clientHeight,
  scrollWidth,
  scrollHeight,
}) => {
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};

if (!isOverflown(detailsScrollbar)) {
  genresLeftButton.style.display = "none";
  genresRightButton.style.display = "none";
}
if (isTouchDevice()) {
  genresLeftButton.style.display = "none";
  genresRightButton.style.display = "none";
}


//---배우들
const actorsLeftButton = document.querySelector(".actors-controls-left");
const actorsRightButton = document.querySelector(".actors-controls-right");
const actorsScrollbar = document.querySelector(".actors-scroll");
let currentScrollPosition = 0;

const hideActorsButton = () => {
  setTimeout(() => {
    currentScrollPosition = actorsScrollbar.scrollLeft;
    if (
      actorsScrollbar.offsetWidth + currentScrollPosition >=
      actorsScrollbar.scrollWidth
    ) {
      actorsRightButton.style.opacity = 0.2;
      actorsRightButton.style.pointerEvents = "none";
    }
    if (
      actorsScrollbar.offsetWidth + currentScrollPosition <=
      actorsScrollbar.offsetWidth
    ) {
      actorsLeftButton.style.opacity = 0.2;
      actorsLeftButton.style.pointerEvents = "none";
    }
  }, 400);
};

actorsLeftButton.addEventListener("click", () => {
  actorsScrollbar.scrollLeft -= 300;
  actorsRightButton.style.pointerEvents = "auto";
  actorsRightButton.style.opacity = 1;
  hideActorsButton();
});

actorsRightButton.addEventListener("click", () => {
  actorsScrollbar.scrollLeft += 300;
  actorsLeftButton.style.pointerEvents = "auto";
  actorsLeftButton.style.opacity = 1;
  hideActorsButton();
});

hideActorsButton();

if (isTouchDevice()) {
  actorsLeftButton.style.display = "none";
  actorsRightButton.style.display = "none";
}


