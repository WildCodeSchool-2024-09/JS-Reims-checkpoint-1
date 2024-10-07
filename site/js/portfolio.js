const image = document.getElementById("switchImage");

function switchImage() {
	if (image.src.includes("avatar.svg")) {
		image.src = "image/avatar-bis.png";
	} else {
		image.src = "image/avatar.svg";
	}
}

image.addEventListener("click", switchImage);

const firstnameElement = document.getElementById("firstname");
const button = document.getElementById("changeNameButton");

function changeName() {
	const newName = prompt("Entrez un nouveau prénom :");

	if (newName) {
		firstnameElement.textContent = newName;
		firstnameElement.style.color = "white";
	}
}
button.addEventListener("click", changeName);
