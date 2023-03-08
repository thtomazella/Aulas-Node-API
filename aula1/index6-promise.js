/*
usuario
endereco
telefone
*/

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
// 1 - retirar a callback
function obterTelefone(idusuario){
    //2- criar a promise
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            //3 retira a callback e o erro
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
//4 - adicionar a chamada do telefone
// chama o usuario -  em seguida o telefone
// Por que o nome usuario? É a resposta de usuarioPromise, estamos simplismente renomeando

.then(function(usuario){
    // esta é uma parte para obter o telefone
    return obterTelefone(usuario.id)
    // ao resolver o telefone criar a resposta
    .then(function resolverTelefone(result){
        return {
            // devolver um objeto
            usuario: {
                id:usuario.id,
                nome:usuario.nome
            },
            telefone: result
        }
    })
})
// o resultado anterior será impresso nesta próxima
.then(function(resultado){
    console.log('Resultado', resultado)
})
.catch(function(error){
    console.log('DEU RUIM', error)
})

