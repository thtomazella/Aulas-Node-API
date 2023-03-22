const {obterPessoas} =require('./service')

async function main(){
    try {
        const {
            results
        }= await obterPessoas('a')

        const familaLars = results.filter(function(item){
            // por padrão retornar um boolean
            // para informar se deve manter ou remover da lista
            // false > remove da lista
            // true > mantem na lista
            // não encontrou =-1
            // encontrou = posicaodoarray

            const result = item.name.toLowerCase().indexOf('lars') !== -1
            // const result = item.name.toLowerCase().indexOf('lars') === -1
            return result
        })

        const names = familaLars.map(pessoa => pessoa.name)

        console.log(names)

    } catch (error) {
        console.error('ERRO ESTRUTURA:',error)
    }
}

main()