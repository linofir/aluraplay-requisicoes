import { conectaApi } from "./conectaApi.js"

//conectaApi.coletaDadosVideos("teste", "descricao", "https://www.youtube.com/embed/IGFSiBJIXFQ", "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true")

const formulario = document.querySelector("[data-form]")

async function coletaDadosFormulario(evento) {

    evento.preventDefault()
    
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10)
    const url = document.querySelector("[data-url]").value.toString( )
    const imagem = document.querySelector("[data-imagem]").value
    
    await conectaApi.coletaDadosVideos(titulo, descricao, url, imagem)

    window.location.href = "../pages/envio-concluido.html"
    
}

formulario.addEventListener("submit", e => coletaDadosFormulario(e))