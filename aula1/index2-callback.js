/*
usuario
endereco
telefone
*/

// após finalizar a função chama a calback
// passo a função dentro do obter usuario
// a resposta da callback retorna para a 
// função
function obterUsuario(callback){
    setTimeout(function(){
        //3 callback
        return callback(null,{
            id: 1,
            nome: 'Thiago',
            dataNascimento: new Date()
        })
    },1000)
}


function obterTelefone(idusuario){

    setTimeout(() => {
        return {
            telefefone: '992255522',
            ddd: 11
        }
    }, 2000);
}

function obterEndereco(idusuario){

}

// metodo callback
// 1
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

// 2
// chama o usuário
// após a resposta resolve o usuário
obterUsuario(resolverUsuario)

// const telefefone = obterTelefone(usuario.id)
// console.log('telefone:', telefefone)


