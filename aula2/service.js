// ## 1 instalar o axios  $npm install axios
// ## 2 Importar o axios para o programa
// Site -> https://swapi.dev/documentation

const axios = require('axios')
const URL = `https://swapi.dev/api/people`

// 3 - Criar a função
 async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// 5 - Exportar o arquivo para ser visivel em outros módulos
modules.exports = { obterPessoas}

// 4 - Fazer a chamada da URL - para teste.. após testado pode cancelar a chamada
obterPessoas('r2')
    .then(function(resultado){
        console.log('Resultado',resultado)
    })
    .catch(function(error){
        console.error('Erro Na busca', error)
    })