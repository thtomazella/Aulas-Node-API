/*
usuario
endereco
telefone
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null,{
            id: 1,
            nome: 'Thiago',
            dataNascimento: new Date()
        })
    },1000)
}

//2  - adicionar a callback como segundo parametro
function obterTelefone(idusuario, callback){
    
    setTimeout(() => {
        // 3 - fazer a chamada da callback
        // callback(erro , suscesso)
        return callback(null, {
            telefefone: '992255522',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idusuario){

}


//1
// precisamos sincronizar as outras funções
// realizamos a tratativa do erros
obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false não entra
    if(error){
        console.error('DEU RUIM USUARIO', error)
        return
    }
    // 2 
    // Fazemos a chamada da callback do telefone
    obterTelefone(usuario.id, function resolverTelefone(error1, telefefone){
        if(error1){
            console.log('DEU RUIM TELEFONE',error1)
            return
        }
        console.log(`
        Nome: ${usuario.nome},
        Telefone: ${telefefone.telefefone}
    `)
        
    })
})

// const telefefone = obterTelefone(usuario.id)
// console.log('telefone:', telefefone)


