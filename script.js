const tagSelect = document.getElementById("tagSelect");
const contentInput = document.getElementById("contentInput");
const createBtn = document.getElementById("createBtn");
const outputArea = document.getElementById("outputArea");

createBtn.addEventListener("click", () => {
  const tag = tagSelect.value;
  const content = contentInput.value;

  const newElement = document.createElement(tag);

  if (tag === "img") {
    newElement.src = content;
    newElement.style.width = "200px";
    newElement.alt = "User Image";
  } else {
    newElement.innerText = content;
  }

  outputArea.appendChild(newElement);
  contentInput.value = "";
});
