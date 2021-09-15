let info = [];
let comentsArray = [];

function mostrarInfo(inf){
    
    document.getElementById('infoProducts').innerHTML = 
    `<div class='prodInfo'> 
        <h2>`+ inf.name +`</h2>
        <div class='galeria'>
            <img src="`+ inf.images[0] +`" alt="">
            <img src="`+ inf.images[1] +`" alt="">
            <img src="`+ inf.images[2] +`" alt="">
            <img src="`+ inf.images[3] +`" alt="">
            <img src="`+ inf.images[4] +`" alt="">
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


function mostrarComentarios(com){
    let comentS= "";

    for(com of comentsArray){

    comentS = 
    `
    <div class='comentarios'>
    <h5>`+ com.user +`</h5> 
    <p>`+ com.description +`</p>
    <p>`+ com.score +`</p>
    <small class="text-muted">Fecha: ` + com.dateTime + `</small>
    </div>
    `

    document.getElementById('comen').innerHTML += comentS;
    }

};





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if(resultObj.status === 'ok'){
            info = resultObj.data;
            mostrarInfo(info)

        }
    })

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObjs){
        if(resultObjs.status === 'ok'){
            comentsArray = resultObjs.data;
            mostrarComentarios(comentsArray)

        }
    })
});