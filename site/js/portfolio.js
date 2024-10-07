document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.getElementById("avatar");

  const images = ["image/avatar-bis.png", "image/avatar.svg"];

  let currentIndex = 0;

  function toggleAvatar() {
    currentIndex = currentIndex === 0 ? 1 : 0;

    avatar.src = images[currentIndex];
  }

  avatar.addEventListener("click", toggleAvatar);
});

function changeName() {
  const newName = prompt("Entrez votre nom :");

  if (newName) {
    const nameElement = document.getElementById("firstname");
    nameElement.textContent = newName;

    nameElement.style.color = getRandomColor();
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.onload = changeName;
