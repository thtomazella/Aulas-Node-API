/*
usuario
endereco
telefone
*/

//1 - Importar o modulo interno do node.js
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

const usuarioPromise = obterUsuario()

usuarioPromise
.then(function(usuario){
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(result){
        return {
            usuario: {
                id:usuario.id,
                nome:usuario.nome
            },
            telefone: result
        }
    })
})
//2- Pegar a instrução anterior a aplicar a promise
.then(function(resultado){
    // passar os dados do usuario conforme a assinatura dele
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(resultEndereco){
        // os dados do cliente vem do resultado
        return{
            usuario:resultado.usuario,
            telefefone:resultado.telefone,
            endereco:resultEndereco
        }
    })
})

.then(function(resultado){
    //3 - mudar a impressao
    //console.log('Resultado', resultado)
    console.log(`
        Nome: ${resultado.usuario.nome},
        Endereco: ${resultado.endereco.rua},  ${resultado.endereco.nr}
        Telefone: (${resultado.telefefone.ddd}) ${resultado.telefefone.telefefone}
    `)
})
.catch(function(error){
    console.log('DEU RUIM', error)
})

