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
};

var modal = document.getElementById("modal");
var closeButton = document.getElementsByClassName("close")[0];

var links = document.getElementsByClassName("modal-link");
var modalImage = document.getElementById("modal-image");

function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  modal.style.display = "none";
}

Array.from(links).forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    openModal(this.href);
  });
});

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
