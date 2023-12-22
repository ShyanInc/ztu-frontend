document.querySelector("#addPhoto").addEventListener("click", async () => {
  fetch("https://picsum.photos/200/300")
    .then((response) => response)
    .then((data) => {
      let img = new Image();
      console.log(data)
      img.src = data.url;
      img.style.width = "200px";
      img.style.height = "200px";

      document.querySelector("#container").appendChild(img);
    });
});
