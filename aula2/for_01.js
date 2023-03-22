// 1 - Buscar o modulo criado
const service = require('./service')


// 2 - Criar o main
async function main(){
    // 4 - Try Catch
    try{
        //5 - Atribuir o método para a variável
        const result = await service.obterPessoas('a')

        const names =[]
        //9 -Colocar o time timeend para medir o tempo
        console.time('for')
        // 6 - Criar o for para percorrer o json
        for(let i=0; i<= result.results.length-1; i++){
            const pessoa = result.results[i]
            //7 - Cria a variavel e atribui a inclusão dos nomes
            names.push(pessoa.name)
        }
        //8 - Colocar a impressão dos nomes
        console.log('Nomes:', names)
        console.timeEnd('for')

    }catch(error){
        console.log('Erro interno:', error)
    }
}

// 3 - Fazer a chamada do main
main()