let infoUs = JSON.parse(localStorage.getItem('users'))

function activar(){
    let des = document.getElementsByTagName('input')

    for(desconectados of des){
        desconectados.removeAttribute('disabled')
    }
}

function guardarCambios(){

    infoUs.img = document.getElementById('imagen').src
    infoUs.name = document.getElementById('name1').value
    infoUs.surname = document.getElementById('surname1').value
    infoUs.age = document.getElementById('age1').value
    infoUs.mail = document.getElementById('email1').value
    infoUs.contacto = document.getElementById('contact1').value
    infoUs.direccion = document.getElementById('direction1').value

    localStorage.setItem('users', JSON.stringify(infoUs))
}   


function mostrarDatos(){
    let us = JSON.parse(localStorage.getItem('users'))
    
    if(us.img == undefined){
        document.getElementById('imagen').src = "img/perfil.png"
        document.getElementById('username').innerHTML += us.nombre
        document.getElementById('name') = ""
        document.getElementById('surname') = ""
        document.getElementById('age') = ""
        document.getElementById('email') = ""
        document.getElementById('contact') = ""
        document.getElementById('direction') = ""

    } else{
        document.getElementById('imagen').src = us.img
    } 

    document.getElementById('username').innerHTML += us.nombre
    document.getElementById('name').innerHTML += us.name 
    document.getElementById('surname').innerHTML = us.surname
    document.getElementById('age').innerHTML += us.age
    document.getElementById('email') .innerHTML += us.mail
    document.getElementById('contact').innerHTML += us.contacto
    document.getElementById('direction').innerHTML += us.direccion
    
}





function foto(){
    let foto = document.getElementById('imagen')
    let fotoNueva = document.querySelector('input[type=file]').files[0];

    let reader = new FileReader();

    reader.onload = function(e) {
        foto.src = reader.result;
    }

    if(fotoNueva){
        reader.readAsDataURL(fotoNueva);
    } else {
        foto.src = "img/perfil.png";
    }
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function (e) {
    
    
    document.getElementById('change').addEventListener('click' , () => {
        activar()
    })

    document.getElementById('save').addEventListener('click' , () => {
        guardarCambios()
        
        location.reload()
        
    })
    
    mostrarDatos()
    


});