const avatar = document.getElementsByClassName("desktop")[0].firstElementChild;

function changeAvatar() {
  avatar.src = "image/avatar.svg";
}

avatar.addEventListener("click", changeAvatar);


function replaceName() {
  const firstName = prompt("Enter your name :");
  const name = document.getElementById("firstname");
  name.setAttribute("style", "color: white");
  name.textContent = firstName;
}

const description = document.getElementsByClassName("description")[0];

const button = document.createElement("button");
button.textContent = "Modify text and color";
button.addEventListener("click", replaceName);

description.appendChild(button);