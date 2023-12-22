const names = document.querySelector("input[type=text]");
const result = document.querySelector("h3");
const images = document.querySelector(".images");
const image = document.querySelector(".image");


let data;

function clickHandler() {
  try {
    data = JSON.parse(names.value);
    result.textContent = "Чудово";
    result.style.color = "green";
    showImages();
  } catch (error) {
    result.textContent = "Невірний формат JSON";
    result.style.color = "red";
  }
}

function showImages() {
  images.innerHTML = "";
  data.forEach((element) => {
    const img = createImage(element);
    img.addEventListener("click", () => {
      const fullImg = createImage(element);
      image.innerHTML = "";
      image.appendChild(fullImg);
    });
    images.appendChild(img);
  });
}

function createImage(fileName) {
  const element = document.createElement("img");
  element.src = `images/${fileName}`;
  element.alt = fileName;
  return element;
}
