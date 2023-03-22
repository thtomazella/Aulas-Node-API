//1 - Chamar o metodo  e criar a variavel
const service = require('./service')
Array.prototype.meuMap = function(callback){
    const novoArrayMapeado=[]
    for(let indice = 0; indice <= this.length-1; indice++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}

//2 - funcao main
async function main(){
    try{
        const results = await service.obterPessoas('a')

        //4 - map
        const names = results.results.meuMap(function(pessoa, indice){
            return `[${indice}] ${pessoa.name}`
        })

        //5 - impressao
        console.log('Nomes:',names)

    }catch(error){
        console.error('ERRO ESTRUTURA', error)
    }
}

main()