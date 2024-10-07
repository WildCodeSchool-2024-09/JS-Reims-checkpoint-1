const avatar = document.getElementsByClassName("desktop")[0].firstElementChild;

function changeAvatar() {
  avatar.src = "image/avatar.svg";
}

avatar.addEventListener("click", changeAvatar);


function choiceColor() {
	return prompt("Enter a color :");
}

function update() {
	const color = prompt("Enter a color :");
	const firstName = prompt("Enter your name :");

	const name = document.getElementById("firstname");
	name.setAttribute("style", "color: white");
	name.textContent = firstName;

	description.setAttribute("style", `background: ${color}`);
	document.documentElement.style.cssText = `--lightWildColor: ${color};`;
}

const description = document.getElementsByClassName("description")[0];

const button = document.createElement("button");
button.textContent = "Change name";
button.addEventListener("click", update);

description.appendChild(button);

