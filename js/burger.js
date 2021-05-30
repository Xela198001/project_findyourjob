const burgerIconElem = document.querySelector('#burger-icon');
const navbar = document.querySelector(".navbar");
const menuMobileElem = burgerIconElem.closest(".menu-mobile");
console.log("menuMobileElem: ", menuMobileElem);

function handleMenuShow() {
  navbar.classList.add('navbar-show');
  burgerIconElem.classList.add('close');
  menuMobileElem.classList.add('close');
}

function handleMenuHide() {
  navbar.classList.remove("navbar-show");
  burgerIconElem.classList.remove("close");
  setTimeout(() => {
    menuMobileElem.classList.remove("close");
  }, 600);
}

burgerIconElem.addEventListener('click', function () {
  burgerIconElem.matches('.close') ? handleMenuHide() : handleMenuShow();
});
navbar.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.matches(".menu-link") ||
    target.matches(".button")
  ) {
    handleMenuHide();
  }
})