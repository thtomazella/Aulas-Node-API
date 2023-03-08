/*
usuario
endereco
telefone
*/
//1 
function obterUsuario(){
    //4
    setTimeout(function(){
        return {
            id: 1,
            nome: 'Thiago',
            dataNascimento: new Date()
        }
    },1000)
}

//2
function obterTelefone(idusuario){
    //7
    setTimeout(() => {
        return {
            telefefone: '992255522',
            ddd: 11
        }
    }, 2000);
}
//3
function obterEndereco(idusuario){

}
//5
const usuario = obterUsuario()
const telefefone = obterTelefone(usuario.id)

//6
console.log('usuario:', usuario)
console.log('telefone:', telefefone)


