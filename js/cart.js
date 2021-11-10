let cartArray = [];


function mostrarCarrito(carrito){
    let cart = '';
    
     for(let i = 0; i < carrito.articles.length; i++){

        if(carrito.articles[i].currency == "USD"){
            carrito.articles[i].currency = "UYU"
            carrito.articles[i].unitCost = carrito.articles[i].unitCost*40
        }

        cart += 
        `
        <tr id="prod${i}">
        <td>
        <img src="${carrito.articles[i].src}" style="width: 100%; height: 120px;">
        </td>
        <td>
        <b>${carrito.articles[i].name}</b>
        </td>
        <td>
        <input type="number" class="cantidad" min="0" value=${carrito.articles[i].count} onchange="calcularSubTotal()"></input>
        </td>
        <td>
        ${carrito.articles[i].currency}
        </td>
        <td class="costo">    
        ${carrito.articles[i].unitCost}
        </td>
        <td id="subtotal${i}">
        0
        </td>
        <td>
        <button id="eliminar${i}" class="btn btn-danger" onclick="eliminar(${i})">X</button>
        </td>
        </tr>
        `
        
    }   

    calcularSubTotal()

    document.getElementById('productosV').innerHTML += cart;

}

function calcularSubTotal(){

    let precisosU = document.getElementsByClassName('costo')
    let cantidad = document.getElementsByClassName('cantidad')
    let envios = document.getElementsByName('envio')
    let subtotal = 0
    let total = 0
    
    for(let i = 0; i < precisosU.length; i++){

        subtotal += parseFloat(precisosU[i].innerHTML) * parseFloat(cantidad[i].value)

        document.getElementById('subtotal' + i).innerHTML = parseFloat(precisosU[i].innerHTML) * parseFloat(cantidad[i].value)

    }

    total += subtotal

    for(let i = 0; i < envios.length; i++){
        if(envios[i].checked){
            total = parseFloat(envios[i].value) * total
        }    
    }

    document.getElementById('total').innerHTML = total.toFixed(0)
    document.getElementById('total1').innerHTML = total.toFixed(0)
    
} 

function eliminar(i){

    document.getElementById('prod' + i).setAttribute('style', 'display: none')
    let total = 0
    let subtotal = 0

    total = parseInt(document.getElementById('total'))
    subtotal = parseInt(document.getElementById('subtotal' + i))
    parseInt(total) -= parseInt(subtotal)
    
    document.getElementById('total').innerHTML = total
    document.getElementById('total1').innerHTML = total

}














//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART).then(function(resultObj){
        if(resultObj.status === 'ok'){
            cartArray = resultObj.data;
            mostrarCarrito(cartArray);
        }
    })
    calcularSubTotal()
});