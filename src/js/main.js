const button = document.getElementById("button");
const count = document.getElementById("count");
const heartIcon = document.querySelector(".heart i");

let likes = 147;

button.addEventListener("click", () => {
  // ajouter un like (bonus)
  likes++;
  count.textContent = likes;

  // changer la couleur du bouton
  button.classList.add("active");

  // changer l’icône en cœur plein (essai)
  heartIcon.classList.remove("fa-regular");
  heartIcon.classList.add("fa-solid");

  // revenir à l’état normal après 2 secondes (bonus)
  setTimeout(() => {
    button.classList.remove("active");

    // revenir au cœur outline (essai)
    heartIcon.classList.remove("fa-solid");
    heartIcon.classList.add("fa-regular");
  }, 2000);
});
