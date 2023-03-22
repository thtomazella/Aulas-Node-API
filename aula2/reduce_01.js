const {obterPessoas} =require('./service')

async function main(){
    try {
        const {results} = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log('Pesos:', pesos)
        // [20.2, 30.3, 40.5]
        const total = pesos.reduce((anterior, proximo)=>{
            return anterior + proximo
        })

        console.log('Peso Total:', total)

    } catch (error) {
        console.error('ERRO ESTRUTURA:',error)
    }
}

main()