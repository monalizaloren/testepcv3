let leftVideo = document.querySelector("#left-video");
let centerVideo = document.querySelector("#center-video");
let rightVideo = document.querySelector("#right-video");
let noShowVideo = document.querySelector("#no-show-video");

function swapVideoSrc(videos) {
  videos.forEach((video) => {
    // Capturar dimensões do vídeo
    const rect = video.getBoundingClientRect();
    video.style.width = rect.width + "px";
    video.style.height = rect.height + "px";
    video.pause(); // Pausar todos os vídeos
  });

  // Trocar src dos vídeos
  let tempSrc = videos[3].src;
  videos[3].src = videos[2].src;
  videos[2].src = videos[1].src;
  videos[1].src = videos[0].src;
  videos[0].src = tempSrc;

  videos[0].load();
  videos[0].play(); // Reproduzir apenas o vídeo no centro

  // Remover estilos de dimensão fixa após um pequeno atraso para garantir que a troca foi concluída
  setTimeout(() => {
    videos.forEach((video) => {
      video.style.width = "";
      video.style.height = "";
    });
  }, 800); // Tempo suficiente para garantir que a troca foi concluída
}

leftVideo.addEventListener("click", () => {
  swapVideoSrc([centerVideo, rightVideo, noShowVideo, leftVideo]);
});

rightVideo.addEventListener("click", () => {
  swapVideoSrc([centerVideo, leftVideo, noShowVideo, rightVideo]);
});
