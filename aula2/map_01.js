//1 - Chamar o metodo
const service = require('./service')

//2 - funcao main
async function main(){
    try{
        //3 - criar as variaveis
        const results = await service.obterPessoas('a')
        const names =[]

        //4 -foreach
        results.results.forEach(function(item){
            names.push(item.name)
        })

        //5 - impressao
        console.log('Nomes:',names)

    }catch{
        console.error('ERRO ESTRUTURA', error)
    }
}

main()