let cartArray = [];
let subtotal = 0
let total = 0
let costo = 0


function mostrarCarrito(carrito){
    let cart = '';
    
     for(let i = 0; i < carrito.articles.length; i++){

        if(carrito.articles[i].currency == "USD"){
            carrito.articles[i].currency = "UYU"
            carrito.articles[i].unitCost = carrito.articles[i].unitCost*40
        }

        cart += 
        `
        </tr>
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

    

    document.getElementById('productosV').innerHTML =    `<tr style="text-align: center">
    <th style="width: 20%"></th>
    <th>Producto</th>
    <th>Cant.</th>
    <th>Moneda</th>
    <th>Precio unitario</th>
    <th>Subtotal</th>
    <th></th>` + cart;

    calcularSubTotal()

}

function calcularSubTotal(){
    total = 0
    subtotal = 0
    costo = 0
    let precisosU = document.getElementsByClassName('costo')
    let cantidad = document.getElementsByClassName('cantidad')
    let envio = document.getElementById('envio').value


    
    for(let i = 0; i < precisosU.length; i++){

        subtotal += parseFloat(precisosU[i].innerHTML) * parseFloat(cantidad[i].value)

        document.getElementById('subtotal' + i).innerHTML = '$'+parseFloat(precisosU[i].innerHTML) * parseFloat(cantidad[i].value)

    }

    total += subtotal

    


    if(envio == "local"){
        costo = 0
    } else if(envio == "standard"){
        costo = total * 0.05
    } else if(envio == "express"){
        costo = total * 0.07
    } else if(envio == "premium"){
        costo = total * 0.15
    }
    
    document.getElementById('total').innerHTML = '$'+(total + costo).toFixed(0)
    document.getElementById('total1').innerHTML = '$'+(total + costo).toFixed(0)
    document.getElementById('costoE').innerHTML = '<b>Su costo de envio es: $'+ costo.toFixed(0) +'</b>'   


} 

function cuotas(){
    let cuotas = document.getElementById('cuotasss')
    document.getElementById('cuotas1').innerHTML = '<b>' + cuotas.value +' cuotas de $'+ (total / cuotas.value).toFixed(0) + '</b>'

}


function eliminar(posicion){
    const removed = cartArray.articles.splice(posicion, 1)
    localStorage.setItem('carrito', JSON.stringify(cartArray))
    mostrarCarrito(cartArray)
    calcularSubTotal()
}


function transeferencia(){
    let transf = ""

    transf = `
    <div>
    <h4>Datos de la transferencia</h4>
    <p>Nombre del banco: Santander</p>
    <p>Titular: Emercado</p>
    <p>Sucursal: Bvar. Artigas</p>
    <p>Numero de cuenta: 1234556789123</p>
    <p>Enviar comprobante de la transferencia a; jap@emercado.com.uy</p>
    </div>
    `

    document.getElementById('metPago').innerHTML = transf
}

function efectivo(){
    let efectivo = ""

    efectivo = `
    <div>
    <p>Abonara el monto al momento de la entrega o en el local si desea retirarlo por sus medios</p>
    </div>
    `

    document.getElementById('metPago').innerHTML = efectivo
}


function tarjetaC(){
    let tarjeta = ""
 
    tarjeta =`
    <div>
        <h4>Datos de la tarjeta</h4>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre" name="credito">
                </div>
                <div class="form-group col-md-6">
                <label>Apellido</label>
                <input type="text" class="form-control"  placeholder="Apellido" name="credito">
                </div>
            </div>
            <div class="form-group">
                <label>Numero de tarjeta</label>
                <input type="number" class="form-control" placeholder="Numero de tarjeta" name="credito">
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                <label>CVV</label>
                <input type="number" class="form-control" placeholder="CVV" name="credito">
                </div>
                <div class="form-group col-md-6">
                <label>Vencimiento</label>
                <input type="month" class="form-control" placeholder="Vencimiento" name="credito">
                </div>
                <div class="form-group col-md">
                <label>Cuotas</label>
                <input type="number" class="form-control" id="cuotasss" min="1" max="18" onchange="cuotas()">
                </div>
                
            </div>
            <div id="cuotas1"></div>
        </form>

    </div>    
    `
    document.getElementById('metPago').innerHTML = tarjeta
}

function tarjetaD(){
    let tarjetad = ""
 
    tarjetad =`
    <div>
        <h4>Datos de la tarjeta</h4>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre" name="debito">
                </div>
                <div class="form-group col-md-6">
                <label>Apellido</label>
                <input type="text" class="form-control"  placeholder="Apellido" name="debito">
                </div>
            </div>
            <div class="form-group">
                <label>Numero de tarjeta</label>
                <input type="number" class="form-control" placeholder="Numero de tarjeta" name="debito">
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                <label>CVV</label>
                <input type="number" class="form-control" placeholder="CVV" name="debito">
                </div>
                <div class="form-group col-md-6">
                <label>Vencimiento</label>
                <input type="month" class="form-control" placeholder="Vencimiento" name="debito">
                </div>
            </div>
        </form>

    </div>    
    `
    document.getElementById('metPago').innerHTML = tarjetad
}

function seleccionar(){
    let sel = document.getElementById('pago').value
    if(sel == "transf"){
        transeferencia()
    }else if(sel == "efectivo"){
        efectivo()
    }else if(sel == "tarjetaC"){
        tarjetaC()
    } else if(sel == "tarjetaD"){
        tarjetaD()
    }

    
}

function volver(){
    window.location.href = "index.html"
}	


document.getElementById("pag").addEventListener("click", function(o){
    o.preventDefault();

    let dir = document.getElementsByName("dir")
    for(let i = 0; i < dir.length; i++){
        if(dir[i].value == ""){
            dir[i].style.border = "1px solid red"
        } else{
            document.getElementById("bpg").innerHTML =`
            <div>
              <h4>Forma de pago:</h4>
              <div class="form-group">
                <select class="form-control" id="pago" onchange="seleccionar()">
                  <option selected hidden value="">Elija su forma de pago</option>
                  <option value="tarjetaC">Tarjeta de credito</option>
                  <option value="tarjetaD">Tarjeta de debito</option>
                  <option value="transf">Transferencia bancaria</option>
                  <option value="efectivo">Efectivo</option>
                </select>
              </div>

              <div id="metPago"></div> 
                
            </div>`
        }
    }
    let forma = document.getElementById("pago")
    if(forma.value == ""){
        forma.style.border = "1px solid red"
    } else if(forma.value == "tarjetaC"){
        let cred = document.getElementsByName("credito")
        for(let i = 0; i < cred.length; i++){
            if(cred[i].value == ""){
                cred[i].style.border = "1px solid red"
            } else{
                document.getElementById("exampleModalLabel").innerHTML =`Compra finalizada`
                document.getElementById("bpg").innerHTML =`<h6>Compra realiza con exito</h6>`
                document.getElementById("pag").remove()
                document.getElementById("but").innerHTML =`<button type="button" class="btn btn-dark w-100" onclick="volver()" >Volver al inicio</button>`
            }
            
    }} else if(forma.value == "tarjetaD"){
        let deb = document.getElementsByName("debito")
        for(let i = 0; i < deb.length; i++){
            if(deb[i].value == ""){
                deb[i].style.border = "1px solid red"
            } else{
                document.getElementById("exampleModalLabel").innerHTML =`Compra finalizada`
                document.getElementById("bpg").innerHTML =`<h6>Compra realiza con exito</h6>`
                document.getElementById("pag").remove()
                document.getElementById("but").innerHTML =`<button type="button" class="btn btn-dark w-100" onclick="volver()" >Volver al inicio</button>`
            }
            
    }} else if(forma.value == "transf"){
        document.getElementById("exampleModalLabel").innerHTML =`Compra finalizada`
        document.getElementById("bpg").innerHTML =`<h6>Compra realiza con exito</h6>`
        document.getElementById("pag").remove()
        document.getElementById("but").innerHTML =`<button type="button" class="btn btn-dark w-100" onclick="volver()" >Volver al inicio</button>`
    } else if(forma.value == "efectivo"){
        document.getElementById("exampleModalLabel").innerHTML =`Compra finalizada`
        document.getElementById("bpg").innerHTML =`<h6>Compra realiza con exito</h6>`
        document.getElementById("pag").remove()
        document.getElementById("but").innerHTML =`<button type="button" class="btn btn-dark w-100" onclick="volver()" >Volver al inicio</button>`
    }

})



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART).then(function(resultObj){
        if(resultObj.status === 'ok' &&  localStorage.getItem("carrito") == null){
            localStorage.setItem("carrito", JSON.stringify(resultObj.data));  
        }
        cartArray = JSON.parse(localStorage.getItem("carrito"));
        mostrarCarrito(cartArray);
    })
    
    

    calcularSubTotal()
});