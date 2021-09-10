let info = [];

function mostrarInfo(inf){
    
    document.getElementById('infoProducts').innerHTML = 
    `<div class='prodInfo'> 
        <div>`+ inf.name +`</div>

    </div>`
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
});