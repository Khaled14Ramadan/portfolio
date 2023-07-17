let menu_khaled = document.getElementById("khaled");

let seeAll = document.getElementById("seeAll");
let portfolioItem = document.getElementsByClassName("portfolio-list");
portfolioItem = Array.from(portfolioItem);

let navLinke = document.getElementsByClassName("nav-linke");
navLinke = Array.from(navLinke);

// to show the nav bar in mobile
let menu = function () {
  menu_khaled.classList.toggle("toggle");
  console.log(menu_khaled);
};

// to effect the text color in nav bar
navLinke.map((link) => {
  link.addEventListener("click", () => activeNav(link));
});

const activeNav = (link) => {
  console.log("link", link);
  navLinke.map((x) => x.classList.remove("active"));
  link.classList.add("active");
};

// action on seeAll button

seeAll.addEventListener("click", () => {
  console.log("portfolioItem : ", portfolioItem);
  portfolioItem.map((item, i) => {
    if (i > 5) {
      item.classList.toggle("d-none");
      console.log(scrollY);
      window.scroll({ left: 0, top: 2500 });
    }
  });

  if (seeAll.innerText == "See All") {
    seeAll.innerText = "See Less";
  } else {
    seeAll.innerText = "See All";
  }
});

onscroll = function () {
  if (screen.width > 500) {
    if (scrollY < 225) {
      activeNav(navLinke[0]);
    } else if (scrollY < 900) {
      activeNav(navLinke[1]);
    } else if (scrollY < 1400) {
      activeNav(navLinke[2]);
    } else if (scrollY < 2800) {
      activeNav(navLinke[3]);
    } else if (scrollY < 3100) {
      activeNav(navLinke[4]);
    } else if (scrollY < 3500) {
      activeNav(navLinke[5]);
    }
  } else {
    if (scrollY < 800) {
      activeNav(navLinke[0]);
    } else if (scrollY < 1650) {
      activeNav(navLinke[1]);
    } else if (scrollY < 2450) {
      activeNav(navLinke[2]);
    } else if (scrollY < 6000) {
      activeNav(navLinke[3]);
    } else if (scrollY < 6800) {
      activeNav(navLinke[4]);
    } else if (scrollY < 7600) {
      activeNav(navLinke[5]);
    }
  }
};
