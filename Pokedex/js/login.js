window.onload = init;

function init() {
    if(!localStorage.getItem('token')){
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = 'signin.html';
        });
    
        document.querySelector('.btn-primary').addEventListener('click', login);
    } else {
        window.location.href = 'pokedex.html';
    }

}

function login(){
    var mail = document.getElementById('input-mail').value;
    var password = document.getElementById('input-password').value;

    if(mail == "" || password == ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    axios({
        method: 'post',
        url: 'https://express-workshop-5ccb92188d63.herokuapp.com/user/login',
        data: {
            user_mail: mail,
            user_password: password
        }
    }).then(function(res){    
        console.log(res);
        if(res.data.code == 200){
            localStorage.setItem('token', res.data.message);
            window.location.href = 'pokedex.html';
        }else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(err){
        console.log(err);
    });
}