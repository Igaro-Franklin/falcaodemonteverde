function login() {
    var nome = prompt("Qual o seu nome");

    alert("Olá " + nome.toUpperCase() + "! Seja bem vindo. Esse é um sistema teste, para efetuar o login, por favor utilize a Matricula: ' MA001 ' e a Senha: '1234'.")
}

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "MA001" && senha == "1234"){
        alert('Logado com sucesso!');
        location.href = "/Materias/TelaPrincipal.html"
    }else{
        alert('USUARIO OU SENHA INCORRETOS!!!')
    }
}