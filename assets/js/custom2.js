var proSliderData = [
  {
    name: "Rauvisio Crystal",
    subTitle: "The most flexible glass of all time",
    img: "assets/img/slider/productsSlider/RAUVISIO-CRYSTAL.jpg",
    desc: "The polymer glass laminate RAUVISIO crystal is revolutionising the glass applications market. The innovation fully compensates for the disadvantages of real glass while combining it own advantages with positive properties of thermoplastic laminates",
  },
  {
    name: "Rauvisio Crystal Slim",
    subTitle: "The extra thin glass panel",
    img: "assets/img/slider/productsSlider/rauvisio_crystal-slim.jpg",
    desc: "RAUVISIO crystal slim is a 4mm-thin panel of glass laminate directly pressed with colour-coordinated balancing sheet. This panel is suitable for renovating tiled sections, even in wet areas. Custom-made on-site cuts, for example for sockets in splash backs, can be carried out at any time.",
  },
  {
    name: "Rauvisio Brilliant",
    subTitle: "The high gloss laminate with a lacquered appearance",
    img: "assets/img/slider/productsSlider/rauvisio-brilliant.jpg",
    desc: "This high-gloss laminate has enhanced scratch resistance, making it the best choice for interior applications. The balancing sheet developed in-house is perfectly colour coordinated and is scratch resistant and has sufficient freedom from distortion for the pressed board",
  },
  {
    name: "Rauvolet Vetro Line",
    subTitle: "Premium Glass Roller Shutter System",
    img: "assets/img/slider/productsSlider/Rauvolet Vetro Line.jpg",
    desc: "It is world's first 'PLUG AND PLAY' glass roller shutter system. It offers a unique way of bringing together two previosly incompatible solutions. The ready-to-install cassete module just needs to be screwed into the cabinet.",
  },
  {
    name: "Rauvolet Crystal Line",
    subTitle: "Glass look alike roller shutter system",
    img: "assets/img/slider/productsSlider/rehau-rauvolet-crystal-line-2.jpg",
    desc: "It offers glass look to your premium cabinet shutters. This ready-to-install cassette module just needs to be screwed into the cabinet. It has tried & tested by RAUVOLET cassete system which gives ease of installation.",
  },
  {
    name: "Plinth Cover",
    subTitle: "The foundation for modern kitchen design",
    img: "assets/img/slider/productsSlider/Plinth Cover.jpg",
    desc: "Hollow chambered profiles with soft transparent sealing lip that creates a reliable barrier against dirt and moisture.",
  },
  {
    name: "Plinth legs",
    subTitle: "Where modern furniture rests",
    img: "assets/img/slider/productsSlider/Plinth legs.jpg",
    desc: "plinth legs are designed to offer stability and durability. It is connected directly to the bottom of the furniture piece. Plinth legs can be used on furniture pieces such as sofas, cabinets, sideboards, TV stands, and coffee tables. By elevating the furniture slightly above the ground,  making the piece visually appealing while also facilitating easy cleaning and maintenance underneath.",
  },
  {
    name: "uPVC Edgeband",
    subTitle: "Elevate your furniture's aesthetics and durability",
    img: "assets/img/slider/productsSlider/pvc-edge-band.webp",
    desc: "This edge bands protect the vulnerable edges of the boards from moisture, impact, and wear, thereby extending the lifespan of the furniture or cabinetry. Edge bands are versatile components that play a crucial role in the furniture manufacturing and cabinetry industries. By concealing and protecting exposed edges, they enhance the durability and lifespan of the products while also providing a visually appealing finish.",
  },

  {
    name: "Raukantex Visions",
    subTitle: "Glass On A Roll",
    img: "assets/img/slider/productsSlider/vison-glass.jpg",
    desc: "Glass is synonymous with clarity, light and openness. The application areas for this material are as varied as its many colour options. It combines with unique appearance of real glass with the beneficial characteristics of polymer materials, such as its robustness and light weight. Through the transfer of printed decor to the underside of the carrier material PMMA, the illusion of depth is created",
  },
  {
    name: "Raukantex Visions V-Groove",
    subTitle: "Glass And Metal Unite",
    img: "assets/img/slider/productsSlider/raukantex_visions.jpg",
    desc: "The particular highlight with the RAUKANTEX visions range is the stepped edgeband with v groove. Whilst the upper section of the edge band is available in typical glass colours. When combined with a surface of the same shade, this gives the appearance of a real glass top surface.",
  },
  {
    name: "Raukantex Super High Gloss",
    subTitle: "The impressive Gloss",
    img: "assets/img/slider/productsSlider/super-high-gloss.jpg",
    desc: "This offers reflective, smooth surfaces, attracive uni and decorative edgebands with the impressive super high gloss surface. This is perfectly matched to the high gloss surface of the boards and laminates ",
  },
  {
    name: "Raukantex-Wood Veneer",
    subTitle: "Mesmerizing Wooden Patterns",
    img: "assets/img/slider/productsSlider/wood-veneer.jpg",
    desc: "Walnut, Maple, Beech, Ash - when it comes to wood, there are as many different types as there are colours and decors. This natural variety is reflected in RAUKANTEX wood veneer edgebands. The standard thickness available are 0.6mm & 1.00mm with 4 different widths 24mm, 35mm, 45mm & 55mm.",
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

  $(".nav-hambgr").on("click", function () {
    $("body").toggleClass("fix");
    $("#scroll-to-top").toggle("show");
  });

  $(".about-nav-link").on("click", function () {
    menu_btn.classList.toggle("is-active");
    $(".mobile-nav").toggleClass("is-active");
    $("body").toggleClass("fix");
    $("#scroll-to-top").toggleClass("show");
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
      let ProdDesc = document.querySelector(".prod-desc");
      let foundItem = proSliderData.find(function (item) {
        return item.name === divTitle;
      });
      image.src = foundItem.img;
      titleElement.textContent = foundItem.name;
      subTitle.textContent = foundItem.subTitle;
      ProdDesc.textContent = foundItem.desc;
    });
  });
  //end quick view button
};
