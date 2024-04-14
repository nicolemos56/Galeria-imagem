let images = [
    "img/images (1).jpeg",
    "img/images.jpeg",
    "img/representacoes-de-interface-do-usuario-e-ux-com-laptop_23-2150201871.avif",
    "https://floresnocais.pt/wp-content/uploads/2018/10/rosas-a-la-carte-flores-no-cais-19.jpg",
    "https://formacaohist.com.br/wp-content/uploads/2021/07/sites.jpg"
  ];

  const galeria = document.querySelector(".galeria");
for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i];
  galeria.appendChild(img);
}

const modal = document.createElement("div");
modal.classList.add("modal");
galeria.appendChild(modal);

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

const imagens = document.querySelectorAll(".galeria img");
imagens.forEach(img => {
  img.addEventListener("click", e => {
    modalImg.src = e.target.src;
    modal.classList.add("abrir");
  });
});

modal.addEventListener("click", () => {
    modal.classList.remove("abrir");
  });