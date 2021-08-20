//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function verificar(){
let user = document.getElementById('user')
let password = document.getElementById('pass')
let msj = document.getElementById('msj')
let users = {}

if(user.value.trim() === '' || password.value.trim() === ''){
    //Valido - Invalido
    user.classList.add('invalido');
    password.classList.add('invalido');
    
    msj.innerHTML='Tu usuario o contraseña son incorrectos';
    msj.style.color='red';
    msj.style.display='block';
} else{
    
    location.href ='index.html';

    users.nombre = user.value;
    users.estado = "conectado";

    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('users', JSON.stringify(users));
}

}   



document.addEventListener("DOMContentLoaded", ()=> {
    let users =  JSON.parse( localStorage.getItem('users'))
    if(users.estado == "conectado"){
        location.href = 'index.html'}   
    

});





