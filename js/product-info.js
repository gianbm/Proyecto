let info = [];
let coments = [];

function mostrarInfo(inf){
    
    document.getElementById('infoProducts').innerHTML = 
    `<div class='prodInfo'> 
        <div>`+ inf.name +`</div>

    </div>`
};

function mostrarComentarios(com){
    let comentS= "";

    for(comentarios of coments){

    comentS = 
    `
    <div class='comentarios'>
    <h4>`+ comentarios.user +`</h4>
    <p>`+ comentarios.description +`</p>
    <small class="text-muted">Fecha: ` + comentarios.dateTime + `</small>
    </div>
    `
    }

    document.getElementById('comentS').innerHTML = comentS;
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
            coments = resultObjs.data;
            mostrarComentarios(coments)

        }
    })
});