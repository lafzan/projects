const accerdion = document.getElementsByClassName("container");

for (i = 0; i < accerdion.length; i++) {
  accerdion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
