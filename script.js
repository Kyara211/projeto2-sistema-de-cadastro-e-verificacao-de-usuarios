//Cadastro de usuario
const nome = prompt("Digite seu nome")
let idade = parseInt(prompt("digite sua idade"))


//Verifica a idade do usuario
if(idade < 13) {
  alert("você não tem idade suficiente, não é possivel realizar o cadastro")
}else if (idade >= 13) {
//Criar a senha do usuario
 let senha = prompt("Crie sua senha")

//Login
let aprovNome = prompt("Digite seu nome para fazer login")
let aprovSenha = prompt("Digite sua senha para fazer login")

//Verificação de usuario
if(aprovNome === nome && aprovSenha === senha){
alert(`Login realizado com sucesso! Bem-vindo, ${nome}.`)
}else {
    alert(`Nome ou senha incorretos. Tente novamente.`)
}
}