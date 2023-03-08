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

// 3 - Chamar o metodo main
main()

// 2 - Criar as chamadas
// **  Colocar a palavar async -- automaticamente ela retornará uma Promise
async function  main(){
    try{
        // 4 -  Colocar a medicao de tempo de execucao
        console.time('medida-promise')

        const usuario = await obterUsuario()
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id)

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


// 1 - comentar todo codigo
// const usuarioPromise = obterUsuario()

// usuarioPromise
// .then(function(usuario){
//     return obterTelefone(usuario.id)
//     .then(function resolverTelefone(result){
//         return {
//             usuario: {
//                 id:usuario.id,
//                 nome:usuario.nome
//             },
//             telefone: result
//         }
//     })
// })
// .then(function(resultado){
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resolverEndereco(resultEndereco){
//         return{
//             usuario:resultado.usuario,
//             telefefone:resultado.telefone,
//             endereco:resultEndereco
//         }
//     })
// })

// .then(function(resultado){
//     console.log(`
//         Nome: ${resultado.usuario.nome},
//         Endereco: ${resultado.endereco.rua},  ${resultado.endereco.nr}
//         Telefone: (${resultado.telefefone.ddd}) ${resultado.telefefone.telefefone}
//     `)
// })
// .catch(function(error){
//     console.log('DEU RUIM', error)
// })
