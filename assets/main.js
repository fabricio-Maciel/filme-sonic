const imageRemove = document.querySelector(".hero__conteudo__img");

function checkViewportWidth() {
  if (window.innerWidth < 950 && imageRemove) {
    imageRemove.remove(); // Remove o elemento do DOM
  }
}

checkViewportWidth();

window.addEventListener("resize", checkViewportWidth);
