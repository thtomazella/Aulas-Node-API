/*
usuario
endereco
telefone
*/

// 3 retirar a assinatura do callback
function obterUsuario(){
    //3 criar o promise e returnar
    // quando der algum problema reject(error)
    // quando sucess RESOLVE
    // após criaro a promise colocar a função dentro
    return new Promise(function resolvePromise(resolve, reject){
        
        setTimeout(function(){
            // 5 - mostrar com erro
            //return reject(new Error('Deu ruim'))
            // 3
            // retirar a callback e chamar a resolve
            //return callback(null,{
            // retira o tratamendo de erro
            return resolve({
                id: 1,
                nome: 'Thiago',
                dataNascimento: new Date()
            })
        },1000)    
    })    

}

function obterTelefone(idusuario, callback){
    
    setTimeout(() => {
        return callback(null, {
            telefefone: '992255522',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idusuario,callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'zero',
            nr: 20
        })
    }, 2000);

}

// 4 - criar a chamada
const usuarioPromise = obterUsuario()
    usuarioPromise
    .then(function(resultado){
        console.log('Resultado', resultado)
    })
    .catch(function(error){
        console.log('DEU RUIM', error)
    })
// para manipular o sucesso usamos o.then
// erro o .catch



//1 retirar resolver usuario não está usando
// function resolverUsuario(erro, usuario){
//     console.log('usuario', usuario)
// }


//2 comentar o obter usuario
// obterUsuario(function resolverUsuario(error, usuario){
//     if(error){
//         console.error('DEU RUIM USUARIO', error)
//         return
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefefone){
//         if(error1){
//             console.log('DEU RUIM TELEFONE',error1)
//             return
//         }
//         obterEndereco(usuario.id, function resolveEndereco(error2, endereco){
//             if(error2){
//                 console.log('DEU RUIM ENDERECO', error2)
//                 return
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua},
//                 Telefone: ${telefefone.telefefone}
//             `)
//         })
//     })
// })

