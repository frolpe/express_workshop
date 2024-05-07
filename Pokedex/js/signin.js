window.onload = init;

function init() {
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    document.querySelector('.btn-primary').addEventListener('click', signin);
}

function signin(){
    var mail = document.getElementById('input-mail').value;
    var password = document.getElementById('input-password').value;
    var name = document.getElementById('input-name').value;

    if(mail == "" || password == "" || name == ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    axios({
        method: 'post',
        url: 'https://express-workshop-5ccb92188d63.herokuapp.com/user/signin',
        data: {
            user_mail: mail,
            user_password: password,
            user_name: name 
        }
    }).then(function(res){    
        console.log(res);
        alert("Usuario registrado correctamente");
        window.location.href = 'login.html';
    }).catch(function(err){
        console.log(err);
    });
}