//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let productsArray = [];

function showProductsList(array){

    if(array == undefined){
        array = productsArray;
    }
  


    let minimo = document.getElementById('minimo').value;
    let maximo = document.getElementById('maximo').value;

    if(maximo == 0 || maximo == undefined){
        maximo = 1000000000000;
    }

    let htmlContentToAppend = "";   


    for(let i = 0; i < array.length; i++){
        let products = array[i];
        if( products.cost >= minimo && products.cost <= maximo){

            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action  mt-1 " id="cont">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted">` + products.soldCount + ` artículos</small>
                        </div>
                            <p class="mb-1">` + products.description + `</p>
                    </div>            
                </div>
                <p class="precio">Precio:` + products.cost + `</p>   
            </div>
            `

            document.getElementById("productos").innerHTML = htmlContentToAppend;
        } 
    } 
    
}

function ordenarASC(){
    productsArray.sort((a, b) =>{
        if(a.cost > b.cost){
            return 1;
        }
        if(a.cost < b.cost){
            return -1;
        } else{
            return 0;
        }
    });

    showProductsList()
};

function ordenarDES(){
    productsArray.sort((a, b) =>{
        if(a.cost < b.cost){
            return 1;
        }
        if(a.cost > b.cost){
            return -1;
        } else{
            return 0;
        }
    });

    showProductsList()
};

function ordenarREL(){
    productsArray.sort((a, b) =>{
        if(a.soldCount < b.soldCount){
            return 1;
        }
        if(a.soldCount > b.soldCount){
            return -1;
        } else{
            return 0;
        }
    });

    showProductsList()
};




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });

    document.getElementById('clear').addEventListener('click', function(){
        document.getElementById('minimo').value = ""
        document.getElementById('maximo').value = ""
        
        showProductsList()
    });

    document.getElementById('asc').addEventListener('click', () =>{
        ordenarASC();
    });

    document.getElementById('des').addEventListener('click', () =>{
        ordenarDES();
    })

    document.getElementById('rel').addEventListener('click', () =>{
        ordenarREL();
    })

});

