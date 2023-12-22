const closeScreenBtn = document.querySelector("#closeScreen");

closeScreenBtn.addEventListener("click", () => {
  document.exitFullscreen();
});

document.querySelector("#addPhoto").addEventListener("click", () => {
  fetch("https://picsum.photos/200/300")
    .then((response) => response)
    .then((data) => {
      saveImage(data.url);
      createImage(data.url)
    })
    .catch((error) => console.log(error));
});

document.querySelector("#openScreen").addEventListener("click", () => {
  const container = document.querySelector("#container");
  container.requestFullscreen();
});

document.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement) {
    closeScreenBtn.style.display = "block";
  } else {
    closeScreenBtn.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const images = JSON.parse(localStorage.getItem("images"));
  if(images) {
    images.forEach(source => {
      createImage(source);
    });
  }
});

function saveImage(image) {
  const images = JSON.parse(localStorage.getItem("images"));
  if (images) {
    localStorage.setItem("images", JSON.stringify([...images, image]));
  } else {
    localStorage.setItem("images", JSON.stringify([image]));
  }
}

function createImage(source) {
  let img = new Image();
  img.src = source;
  img.style.width = "200px";
  img.style.height = "200px";
  document.querySelector("#container").appendChild(img);
}
