async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function coletaDadosVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} vizualizações`,
            url: url,
            imagem: imagem

        })
    });

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida

}

export const conectaApi = {
    listaVideos,
    coletaDadosVideos
}

//criar função async para acessar o db e adiconar novos dados
//coletar dados do formulário DOM
//modelar no formato corespindente do db.json
//


