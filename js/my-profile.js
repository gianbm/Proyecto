//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function usuario(){
    let user = JSON.parse(localStorage.getItem('users'))

    document.getElementById('menu').innerHTML += '<a class="py-2 d-none d-md-inline-block" href="my-profile.html">'+ user.nombre +'</a>'
}


document.addEventListener("DOMContentLoaded", function (e) {
    usuario()
});