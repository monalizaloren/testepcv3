let leftVideo = document.querySelector("#left-video");
let centerVideo = document.querySelector("#center-video");
let rightVideo = document.querySelector("#right-video");
let noShowVideo = document.querySelector("#no-show-video");

function swapVideoSrc(videos) {
  // Adicionar classe de saída aos vídeos
  videos.forEach((video) => {
    video.classList.remove('video-enter', 'video-show'); // Remover classes anteriores
    video.classList.add('video-exit');
  });

  // Após a animação de saída, trocar os vídeos
  setTimeout(() => {
    // Trocar src dos vídeos
    let tempSrc = videos[3].src;
    videos[3].src = videos[2].src;
    videos[2].src = videos[1].src;
    videos[1].src = videos[0].src;
    videos[0].src = tempSrc;

    // Carregar e reproduzir o vídeo central
    videos[0].load();
    videos[0].play(); // Reproduzir apenas o vídeo no centro

    // Adicionar classe de entrada aos vídeos após a troca de src
    videos.forEach((video) => {
      video.classList.remove('video-exit');
      video.classList.add('video-enter');
    });

    
    setTimeout(() => {
      videos.forEach((video) => {
        video.classList.remove('video-enter');
        video.classList.add('video-show');
      });
    }, 400); 
  }, 400); 
}



leftVideo.addEventListener("click", () => {
  swapVideoSrc([centerVideo, rightVideo, noShowVideo, leftVideo]);
});

rightVideo.addEventListener("click", () => {
  swapVideoSrc([centerVideo, leftVideo, noShowVideo, rightVideo]);
});
