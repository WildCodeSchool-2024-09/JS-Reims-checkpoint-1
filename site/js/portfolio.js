const avatarChange = document.getElementById("avatar");

avatarChange.addEventListener("click", () => {
  avatarChange.src = "image/avatar.svg";
});

const changeText = document.querySelector(".change-text-btn");
changeText.addEventListener("click", () => {
  const newName = prompt("Enter a new name:");
  if (newName !== null) {
    const nameElement = document.getElementById("firstname");
    nameElement.textContent = newName;
    nameElement.style.color = "white";
    const sectionColor = document.querySelector(".pink-bg");
    sectionColor.style.backgroundColor = "#750ff7";
    const textColor = document.querySelectorAll(".pink-text");
    textColor.forEach((element) => {
      element.style.color = "#750ff7";
    });
    const footerColor = document.querySelector("footer");
    footerColor.style.backgroundColor = "#750ff7";
    const btnColor = document.querySelector(".change-text-btn");
    btnColor.style.backgroundColor = "#750ff7";
    btnColor.textContent = "Thank you for trying me!";
    const btnColor2 = document.querySelector(".modify-btn");
    btnColor2.style.backgroundColor = "#750ff7";

    addBtn.style.backgroundColor = "#750ff7";
    const linksColor = document.querySelectorAll("a");
    linksColor.forEach((element) => {
      element.style.color = "#750ff7";
    });
  }
});

const modifyBtn = document.querySelector(".modify-btn");
modifyBtn.addEventListener("click", () => {
  const liElements = document.querySelectorAll("#front-dev-tools li");
  liElements[0].textContent = "VSCode";
  liElements[1].textContent = "Github";
  liElements[2].textContent = "Terminal";
});

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.style.marginLeft = "10px";

const addInput = document.createElement("input");
addInput.placeholder = "Input text here";

const devToolSection = document.getElementById("back-dev-tools");

devToolSection.parentNode.appendChild(addInput);
devToolSection.parentNode.appendChild(addBtn);

addBtn.addEventListener("click", () => {
  const newListElement = document.createElement("li");
  newListElement.textContent = addInput.value;
  document.getElementById("back-dev-tools").appendChild(newListElement);
  addInput.value = "";
});
