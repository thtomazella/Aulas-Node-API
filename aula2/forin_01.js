// 1 - Buscar o modulo criado
const service = require('./service')


// 2 - Criar o main
async function main(){
    // 4 - Try Catch
    try{
        //5 - Atribuir o método para a variável
        const result = await service.obterPessoas('a')
        const names =[]
        console.time('forin')
        //6 - Criar o for
        for(let i in result.results){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.log('Nomes:', names)
        console.timeEnd('forin')

    }catch(error){
        console.log('Erro interno:', error)
    }
}

// 3 - Fazer a chamada do main
main()