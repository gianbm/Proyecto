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
            
                <div class="col-xl-3">
                    <a href='product-info.html' class="card mb-4 shadow-sm custom-card">
                    <img class="bd-placeholder-img card-img-top"  src="` + products.imgSrc + `">
                    <h4 class="text-sm-left font-weight-bold">`+ products.name +`</h4>
                    <div class="card-body">
                        <p class="card-text">` + products.description + `</p>
                        <p class="mt-1 font-size-5">Precio:` + products.cost + `</p> 
                        <p class="text-muted mt-2">` + products.soldCount + ` artículos</p>              
                    
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

function buscar(){
    let buscar = document.getElementById('buscador').value;
    let prod = productsArray.filter( producto =>{
        return producto.name.toLowerCase().indexOf(buscar.toLowerCase()) >=-1;
    });
    showProductsList(prod)
}



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

