const closeScreenBtn = document.querySelector("#closeScreen");

document.querySelector("#addPhoto").addEventListener("click", () => {
  fetch("https://picsum.photos/200/300")
    .then((response) => response)
    .then((data) => {
      let img = new Image();
      img.src = data.url;
      img.style.width = "200px";
      img.style.height = "200px";
      document.querySelector("#container").appendChild(img);
    });
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

closeScreenBtn.addEventListener("click", () => {
  document.exitFullscreen();
});