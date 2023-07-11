var proSliderData = [
  {
    name: "Rauvisio Crystal",
    subTitle: "The most flexible glass of all time",
    img: "assets/img/slider/productsSlider/RAUVISIO-CRYSTAL.jpg",
  },
  {
    name: "Rauvisio Crystal Slim",
    subTitle: "The extra thin glass panel",
    img: "assets/img/slider/productsSlider/rauvisio_crystal-slim.jpg",
  },
  {
    name: "Rauvisio Brilliant",
    subTitle: "The high gloss laminate with a lacquered appearance",
    img: "assets/img/slider/productsSlider/rauvisio-brilliant.jpg",
  },
  {
    name: "Rauvolet Vetro Line",
    subTitle: "Premium Glass Roller Shutter System",
    img: "assets/img/slider/productsSlider/Rauvolet Vetro Line.jpg",
  },
  {
    name: "Rauvolet Crystal Line",
    subTitle: "Glass look alike roller shutter system",
    img: "assets/img/slider/productsSlider/rehau-rauvolet-crystal-line-2.jpg",
  },
  {
    name: "Plinth Cover",
    subTitle: "The foundation for modern kitchen design",
    img: "assets/img/slider/productsSlider/Plinth Cover.jpg",
  },
  {
    name: "Plinth legs",
    subTitle: "Where modern kitchen rests",
    img: "assets/img/slider/productsSlider/Plinth legs.jpg",
  },
  {
    name: "uPVC Edgeband",
    subTitle: "Elevate your furniture's aesthetics and durability",
    img: "assets/img/slider/productsSlider/pvc-edge-band.webp",
  },
  {
    name: "uPVC Edgeband",
    subTitle: "Elevate your furniture's aesthetics and durability",
    img: "assets/img/slider/productsSlider/pvc-edge-band.webp",
  },
  {
    name: "Raukantex Visions",
    subTitle: "Glass On A Roll",
    img: "assets/img/slider/productsSlider/vison-glass.jpg",
  },
  {
    name: "Raukantex Visions V-Groove",
    subTitle: "Glass And Metal Unite",
    img: "assets/img/slider/productsSlider/raukantex_visions.jpg",
  },
  {
    name: "Raukantex Super High Gloss",
    subTitle: "The impressive Gloss",
    img: "assets/img/slider/productsSlider/super-high-gloss.jpg",
  },
  {
    name: "Raukantex-Wood Veneer",
    subTitle: "Mesmerizing Wooden Patterns",
    img: "assets/img/slider/productsSlider/wood-veneer.jpg",
  },
];

window.onload = function () {
  // hamburger
  const menu_btn = document.querySelector(".nav-hambgr");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
  // end of ham

  // quick view button
  let quickViewButtons = document.querySelectorAll(".add-quick-view");
  var quickViewModal = document.querySelector(".product-quick-view-modal");
  quickViewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let divTitle = this.getAttribute("data-title");
      let image = document.querySelector(".prod-image");
      let subTitle = document.querySelector(".title-2");
      let titleElement = document.querySelector(".quick-title");
      console.log(divTitle);
      let foundItem = proSliderData.find(function (item) {
        return item.name === divTitle;
      });
      console.log(foundItem);
      image.src = foundItem.img;
      titleElement.textContent = foundItem.name;
      subTitle.textContent = foundItem.subTitle;
    });
  });
  //end quick view button
};
