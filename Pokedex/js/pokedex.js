window.onload = init;
var headers = {};
var url = 'https://express-workshop-5ccb92188d63.herokuapp.com';

function init() {
    if(localStorage.getItem('token')){
        token = localStorage.getItem('token');
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem('token')
            }
        }
        loadPokemon();
    } else {
        window.location.href = 'index.html';
    }
}

function loadPokemon(){
    axios.get(url + '/pokemon', headers)
    .then(function(res){
        console.log(res);
        displayPokemon(res.data.message);
    }).catch(function(err){
        console.log(err);
    });
}

function displayPokemon(pokemon){
    var body = document.querySelector('body');
    for(var i = 0; i<pokemon.length; i++){
        body.innerHTML += `<h3>${pokemon[i].pok_name}</h3>`;
    }
}