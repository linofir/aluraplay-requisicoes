async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

// async function coletaDados() {
//     const coleta = await fetch("http://localhost:3000/videos")

// }

export const conectaApi = {
    listaVideos
}

//coletar dados do formulário DOM
//modelar no formato corespindente do db.json
//criar função async para acessar o db e adiconar novos dados
//


