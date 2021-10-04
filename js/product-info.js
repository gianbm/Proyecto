let info = [];
let comentsArray = [];
let productos = [];

function mostrarInfo(inf){
    
    document.getElementById('infoProducts').innerHTML = 
    `<div class='prodInfo'> 
        <h2>`+ inf.name +`</h2>

        <div id="slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="`+inf.images[1]+`" class="d-block w-100" >
                </div>
                <div class="carousel-item">
                    <img src="`+inf.images[2]+`" class="d-block w-100" >
                </div>
                <div class="carousel-item">
                    <img src="`+inf.images[3]+`" class="d-block w-100" >
                </div>
                <div class="carousel-item">
                    <img src="`+inf.images[4]+`" class="d-block w-100" >
                </div>
            </div>
            <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
        <div class='descripcion'>
        <div class='costo'>
        <p class='pr'>Precio: `+ inf.currency + inf.cost +`</p> 
        <p class='ventas'>Cantidad de vendidios: `+ inf.soldCount +`</p>
        </div>
        <p class='Idesc'>`+ inf.description +`</p>
        </div>
        

    </div>`
};

function mostrarEstrellas(score){
    let estrellita = "";

    for(let i=1; i<=5; i++){
        if(i <= score){
            estrellita += `<span class='llena'><i class="fas fa-circle"></i></span>`
        } else {
            estrellita += `<span class='vacio'><i class="fas fa-circle"></i></span>`
        }
    }

    return estrellita;
}

function borrarEstrellas(){
    document.querySelectorAll('[Type=radio]').forEach((x) => x.checked=false);
}


function mostrarComentarios(com){
    let comentS= "";

    for(com of comentsArray){

    comentS = 
    `
    <div class='comentarios'>
    <h5>`+ com.user +`</h5> 
    <p>`+ mostrarEstrellas(parseInt(com.score)) +`</p>
    <p>`+ com.description +`</p>
    <small class="text-muted">Fecha: ` + com.dateTime + `</small>
    </div>
    `

    document.getElementById('comen').innerHTML += comentS;
    }
    

};

function mostrarRel(){
    let rela = "";
    info.relatedProducts.forEach((i) => {
        rela += `<div class="card" style="width: 18rem;">
                    <img src="`+productos[i].imgSrc+`" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">`+productos[i].description+`</p>
                    </div>
                    <p><b>Precio: `+productos[i].cost+`</b></p>
                </div>`
    })

    document.getElementById('relacionados').innerHTML += rela;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if(resultObj.status === 'ok'){
            info = resultObj.data;
            mostrarInfo(info)
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if(resultObj.status === 'ok'){
                    productos = resultObj.data
                    mostrarRel()
                }
            })
        }
    })



    

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObjs){
        if(resultObjs.status === 'ok'){
            comentsArray = resultObjs.data;
            mostrarComentarios(comentsArray)

        }
    })

    document.getElementById('coment').addEventListener('click', () => {
        let comentA = [];
        comentA.score =  parseInt(document.getElementById('score').value)
        comentA.user = document.getElementById('user').value
        comentA.description = document.getElementById('description').value
        comentA.dataTime = ""

        if(comentA.user.trim()==""){
            alert('Por favor ingrese su nombre de usario')
        } else {
            comentsArray.push(comentA)
            mostrarComentarios(comentsArray)
        }

    })
    
});