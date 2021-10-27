let infoUs = JSON.parse(localStorage.getItem('users'))

function activar(){
    let des = document.getElementsByTagName('input')

    for(desconectados of des){
        desconectados.removeAttribute('disabled')
    }
}

function cargarDatos(){
    
    
    document.getElementById('imagen').innerHTML += infoUs.img
    document.getElementById('username').innerHTML += infoUs.nombre 
    document.getElementById('name').innerHTML += infoUs.name
    document.getElementById('surname').innerHTML += infoUs.surname
    document.getElementById('email').innerHTML += infoUs.mail
}

function guardarCambios(){
    
    infoUs.name = document.getElementById('name1').value
    infoUs.surname = document.getElementById('surname1').value
    infoUs.age = document.getElementById('age1').value
    infoUs.mail = document.getElementById('email1').value
    infoUs.contact = document.getElementById('contact1').value
    infoUs.direction = document.getElementById('direction1').value



    document.getElementById('name').innerHTML = infoUs.name
    document.getElementById('surname').innerHTML = infoUs.surname
    document.getElementById('age').innerHTML = infoUs.age 
    document.getElementById('email').innerHTML = infoUs.mail 
    document.getElementById('contact').innerHTML = infoUs.contact
    document.getElementById('direction').innerHTML = infoUs.direction
    
    
    
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
        
    })

    cargarDatos()
});