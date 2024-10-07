const avatar = document.getElementsByClassName("desktop")[0].firstElementChild;

function changeAvatar() {
  avatar.src = "image/avatar.svg";
}

avatar.addEventListener("click", changeAvatar);