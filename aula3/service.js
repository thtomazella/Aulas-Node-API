// ## 1 instalar o axios  $npm install axios
// Site -> https://swapi.dev/documentation

const {get} = require('axios')
const URL = `https://swapi.dev/api/people`



async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await get(url)
    // 8 - pegar o endereco
    //console.log(response.data)
    //console.log(JSON.stringify(response.data))
    //7 - criar a resposta
    return response.data.results.map(mapearPessoas)
}

// 7 - Criar a resposta
function mapearPessoas(item){
    return {
        nome: item.name,
        altura: item.height
    }
}

module.exports={
    obterPessoas
}

// obterPessoas('r2-d2')
//     .then(function(resultado){
//         console.log('Resultado',resultado)
//     })
//     .catch(function(error){
//         console.error('Erro Na busca', error)
//     })