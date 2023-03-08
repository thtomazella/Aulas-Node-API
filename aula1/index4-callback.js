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

function obterTelefone(idusuario, callback){
    
    setTimeout(() => {
        return callback(null, {
            telefefone: '992255522',
            ddd: 11
        })
    }, 2000);
}

//1 chama a calback como segundo parametro
function obterEndereco(idusuario,callback){
    // cria os dados
    setTimeout(() => {
        return callback(null, {
            rua: 'zero',
            nr: 20
        })
    }, 2000);

}


function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('DEU RUIM USUARIO', error)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefefone){
        if(error1){
            console.log('DEU RUIM TELEFONE',error1)
            return
        }
        // cria a callback da resposta endereco
        obterEndereco(usuario.id, function resolveEndereco(error2, endereco){
            if(error2){
                console.log('DEU RUIM ENDERECO', error2)
                return
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},
                Telefone: ${telefefone.telefefone}
            `)
        })
    })
})

// const telefefone = obterTelefone(usuario.id)
// console.log('telefone:', telefefone)


