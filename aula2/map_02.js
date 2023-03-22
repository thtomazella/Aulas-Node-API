//1 - Chamar o metodo
const service = require('./service')

//2 - funcao main
async function main(){
    try{
        //3 - criar as variavel 
        const results = await service.obterPessoas('a')

        //4 - map
        const names = results.results.map((pessoa)=>pessoa.name)

        //5 - impressao
        console.log('Nomes:',names)

    }catch{
        console.error('ERRO ESTRUTURA', error)
    }
}

main()