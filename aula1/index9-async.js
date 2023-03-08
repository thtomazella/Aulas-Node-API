/*
usuario
endereco
telefone
*/

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(){

    return new Promise(function resolvePromise(resolve, reject){
        
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Thiago',
                dataNascimento: new Date()
            })
        },1000)    
    })    

}

function obterTelefone(idusuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve( {
                telefefone: '992255522',
                ddd: 11
            })
        }, 2000);
    
    })
}

function obterEndereco(idusuario,callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'zero',
            nr: 20
        })
    }, 2000);

}

main()

async function  main(){
    try{
        console.time('medida-promise')

        const usuario = await obterUsuario()
        // 1 - Comentar as funcoes a seguir
        // const telefefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        // fazer uma chamada geral
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        // 2 - adicionar as variaveis
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome}
            Telefone: ${telefone.ddd}
            Endereco: ${endereco.rua}
        `)

        console.timeEnd('medida-promise')
    }catch(error){
        console.log('DEU RUIM', error)
    }
}

