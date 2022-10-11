function entrar() 
{
    var login = document.getElementById('user').value;
    var senha = document.getElementById('password').value;
    
    
    if(login == "admin" && senha == 12345678)
    {
        alert("Bem-vindo!");
        location.href = "home.html";
    }
    else
    {
        alert("Login ou senha inválidos!");
    }


};