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


    for(products of productsArray){
        
        if( products.cost >= minimo && products.cost <= maximo){

            htmlContentToAppend += `
            
                <div class="list-group ml-4 mt-4">
                    <a href='product-info.html' class="list-group-item list-group-item-action" >
                        <div class="row">
                            <div class="col-sm-3">
                                <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-fluid">
                            </div>

                            <div class="col-sm-7">
                                <h4 class="text-sm-left font-weight-bold">`+ products.name +`</h4>
                                <div class="row justify-content-left mt-4 ml-1 tex">
                                <p class="class="col-sm-7 >` + products.description + `</p>  
                                </div>
                            </div>

                            <div class="col-sm">
                                <p class="text-muted mt-2">` + products.soldCount + ` artículos</p> 
                                <div class="row mt-5">
                                <p class="mt-5 font-size-5">Precio:` + products.cost + `</p>        
                                </div>
                            </div>
    
                        </div>
                        
                    </a>
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

