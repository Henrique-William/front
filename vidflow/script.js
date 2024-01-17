const containerVideos = document.querySelector(".videos__container")

const api = fetch("https://3000-henriquewilliam-front-bot12qof5k3.ws-us107.gitpod.io/videos")
.then(res => res.json())
.then((videos) =>
    videos.forEach(video => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>     
        `
    })
)

.catch((error) => {
    containerVideos.innerHTML = `<p>Houve um erro ao carregar o video: ${error}</p>`
})
