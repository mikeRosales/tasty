var tipoTarjeta = false;
var conketa_tarjeta=false;
 $(document).ready(function(){
    cerrarBuscadores();
    limpiarCampos(); 
        $("#opt_credito_a").on("click", function(){
        tipoTarjeta = true;
        guardarTarjeta(tipoTarjeta);
    });

    $("#opt_debito_a").on("click", function(){
        tipoTarjeta = false;
        guardarTarjeta(tipoTarjeta);
    });
    $('.search_platillos_hor').show();

    $("#btn_mas_dinero").on("click", function(){
         $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  
                    var contador=20;
                    $("#dinero").empty();  
                    $(data).each(function (index, data) { 
                    if (data.costo_unitario >= 1000) {
                        $("#dinero").append(
                            "<li class='lista_dinero'>"+
                                "<div class='grid-photo-box img-restaurant' prueba'id="+data.id+"><a href='#page"+contador+"'>"+
                                    "<img id="+data.id+" src="+'http://www.tastyfoods.com.mx/'+data.imagen+" /></a></div>"+
                                    "<div class='swipe-content'>"+
                                        "<p class='d_text'>"+
                                        "<b>"+data.nombreP+"</b><br>$"+data.costo_unitario+"</p></a>"+
                                    "</div>"+
                            "</li>");
                        $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                        "<div class='grid'>"+
                            "<div class='col2'>"+
                                "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                            "</div>"+

                           " <div class='col2'>"+
                            "<div class='columna2_producto'>"+
                            "<ul class='sabores_p'>"+
                                "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                                "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                                "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                                "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                            "</ul>"+
                            "<div class='dato_platillo'>"+
                                "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                                "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                            "</div>"+
                            "<div id='container'>"+
                                "<section id='accordion'>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                        "<article>"+
                                            "<p id='descripcion'>"+data.descripcion+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                        "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                        "<article>"+
                                            "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                        "<article>"+
                                            "<p id='direccion'>"+data.direccion+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                        "<article>"+
                                            "<p id='telefono'>"+data.telefono+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                        "<article>"+
                                            "<p id='tiempo'>15</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' />"+
                                        "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio'  />"+
                                        "<a href='#page9' id='btn_entrega' onclick='entregaDomicilio("+data.idP+","+data.costo_unitario+")'><label class='res_envio'>Entrega a domicilio</label></a>"+
                                    "</div>"+
                                    "<input type='hidden' value="+data.idP+" />"+
                                "</section>"+
                                "</div>"+
                            "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>");
                    contador++;
                    };
                }); 
                        
                }
            });      
    });

    $("#tab4").on("click", function(){
        //MOSTRAR PLATILLOS DE PRESUPUESTO
         $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  
                    var contador=20;
                    $("#dinero").empty();  
                    $(data).each(function (index, data) { 
                        $("#dinero").append(
                            "<li class='lista_dinero'>"+
                                "<div class='grid-photo-box img-restaurant' prueba'id="+data.id+"><a href='#page"+contador+"'>"+
                                    "<img id="+data.id+" src="+'http://www.tastyfoods.com.mx/'+data.imagen+" /></a></div>"+
                                    "<div class='swipe-content'>"+
                                        "<p class='d_text'>"+
                                        "<b>"+data.nombreP+"</b><br>$"+data.costo_unitario+"</p></a>"+
                                    "</div>"+
                            "</li>");
                        $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                        "<div class='grid'>"+
                            "<div class='col2'>"+
                                "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                            "</div>"+

                           " <div class='col2'>"+
                            "<div class='columna2_producto'>"+
                            "<ul class='sabores_p'>"+
                                "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                                "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                                "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                                "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                            "</ul>"+
                            "<div class='dato_platillo'>"+
                                "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                                "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                            "</div>"+
                            "<div id='container'>"+
                                "<section id='accordion'>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                        "<article>"+
                                            "<p id='descripcion'>"+data.descripcion+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                        "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                        "<article>"+
                                            "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                        "<article>"+
                                            "<p id='direccion'>"+data.direccion+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                        "<article>"+
                                            "<p id='telefono'>"+data.telefono+"</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                        "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                        "<article>"+
                                            "<p id='tiempo'>15</p>"+
                                        "</article>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio' />"+
                                        "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                    "</div>"+
                                    "<div>"+
                                        "<input type='radio'  />"+
                                        "<a href='#page9' id='btn_entrega' onclick='entregaDomicilio("+data.idP+","+data.costo_unitario+")'><label class='res_envio'>Entrega a domicilio</label></a>"+
                                    "</div>"+
                                    "<input type='hidden' value="+data.idP+" />"+
                                "</section>"+
                                "</div>"+
                            "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>");
                    contador++;
                    }); 
                        
                }
            });
    });

 $("#guardar_fact_envio").on("click", function(){
    if ($("#nombredelafactura_e").val()=="" || $("#nombre_factura_e").val()=="" || $("#domiciliofiscal_e").val()=="" || $("#rfc_e").val()=="" || $("#correo_factura_e").val()=="") {
        camposObligatorios();
     }else{
        var nombredelafactura = $("#nombredelafactura_e").val();
        var nombre_factura = $("#nombre_factura_e").val();
        var domiciliofiscal = $("#domiciliofiscal_e").val();
        var rfc = $("#rfc_e").val();
        var correo_factura = $("#correo_factura_e").val();
        //cantidad_total
        var nombre = localStorage.getItem('nombre');
        var costo = localStorage.getItem('costo');
        limpiarCampos();
        //SE GUARDA DATOS DE FACTURACION
           $.ajax({
                                    type: "post", 
                                    url: "http://www.tastyfoods.com.mx/users/factura", //CAMBIAR URL
                                    data: ({nombredelafactura: nombredelafactura, nombre_factura: nombre_factura,domiciliofiscal:domiciliofiscal, rfc:rfc,correo_factura:correo_factura, costo:costo }),                                    
                                    dataType: "json",
                                    success: function (data) { 
                                         var opts={
                                            message:"¡Datos enviados!",
                                            position:"tc",
                                            delay:2000,
                                            autoClose:true,
                                            type:"success"
                                        };
                                        $.afui.toast(opts);
                                                                    }
                                });
        //MENSAJE
       
    }
    });

     $("#realizarP").on("click", function(){     
        var pedido = localStorage.getItem('pedido');
         if (conketa_tarjeta) {    
                var errorResponseHandler, successResponseHandler, tokenParams;         
                var tipoC = "Credito"
                var tarj_credito = $(".tarj_credito").val();
                var nombredelatarjeta = $("#nombredelatarjeta").val();
                var nombretarjetahabiente = $("#nombretarjetahabiente").val();
                var tarjeta = $("#tarjeta").val();
                var cvc = $("#cvc").val();
                var month = $("#month").val();
                var year = $("#year").val();

                tokenParams = {
                    "card": {
                        "number": tarjeta,
                        "name": nombretarjetahabiente,
                        "exp_year": year,
                        "exp_month": month,
                        "cvc": cvc
                    }  
                };
                 // $.ajax({
                 //                        type: "post", 
                 //                        url: "http://www.tastyfoods.com.mx/users/tarjeta", //CAMBIAR URL
                 //                        data: ({nombredelatarjeta: nombredelatarjeta,nombretarjetahabiente,nombretarjetahabiente,tarjeta,tarjeta,cvc:cvc,month: month,year:year}),                                    
                 //                        dataType: "json",
                 //                        success: function (data) { 
                                                                                 
                                           
                 //                         }
                 //                     });
                   
                limpiarCampos();
                //SE GUARDA LA TARJETA                                           
                successResponseHandler = function(token) {                    
                    mivariable = token.id;
                             $.ajax({
                                    type: "post", 
                                    url: "http://www.tastyfoods.com.mx/users/payment", //CAMBIAR URL
                                    data: ({conektaTokenId: mivariable, id: pedido }),                                    
                                    dataType: "json",
                                    success: function (data) { 
                                        var result = $.trim(data);                                        
                                        var opts={
                                            message:result,
                                            position:"tc",
                                            delay:2000,
                                            autoClose:true,
                                            type:"success"
                                        };
                                        $.afui.toast(opts);
                                     }
                                 });
                }; 
                errorResponseHandler = function(error) {
                    return console.log(error.message);                                    
                };
                Conekta.token.create(tokenParams, successResponseHandler, errorResponseHandler);                                                     
        }else{
                if ($("#nombredelatarjeta").val()=="" || $("#nombretarjetahabiente").val()=="" || $("#tarjeta").val()=="" || $("#cvc").val()=="") {
                    camposObligatorios();
                }
                else{
                    var tipoD = "Debito"
                    var tarj_debito = $(".tarj_debito").val();
                    var nombredelatarjeta = $("#nombredelatarjeta").val();
                    var nombretarjetahabiente = $("#nombretarjetahabiente").val();
                    var tarjeta = $("#tarjeta").val();
                    var cvc = $("#cvc").val();
                    var month = $("#month").val();
                    var year = $("#year").val();                
            
                    tokenParams = {
                        "card": {
                            "number": tarjeta,
                            "name": nombretarjetahabiente,
                            "exp_year": year,
                            "exp_month": month,
                            "cvc": cvc
                        }  
                    };

                    limpiarCampos();
                    //SE GUARDA LA TARJETA           
                    successResponseHandler = function(token) {                    
                        mivariable = token.id;
                                 $.ajax({
                                        type: "post", 
                                        url: "http://www.tastyfoods.com.mx/users/payment", //CAMBIAR URL
                                        data: ({conektaTokenId: mivariable,id: pedido }),                                    
                                        dataType: "json",
                                        success: function (data) { 
                                            var result = $.trim(data);                                        
                                            var opts={
                                                message:result,
                                                position:"tc",
                                                delay:2000,
                                                autoClose:true,
                                                type:"success"
                                            };
                                            $.afui.toast(opts);
                                         }
                                     });
                    }; 


                    errorResponseHandler = function(error) {
                        return console.log(error.message);                                    
                    };
                    Conekta.token.create(tokenParams, successResponseHandler, errorResponseHandler);     
                   
                }
            }
     });

     $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  
                    var contador=20;
                          $("#platillos_horizontal").empty();  
                    $(data).each(function (index, data) { 
                  
                        $("#platillos_horizontal").append(
                            "<li class='lista_platillo opcion' onclick=cerrarBuscadores()>"+
                                "<div class='grid-photo-box img-platillo prueba'id="+data.idP+">"+
                                "<a href='#page"+contador+"'><img  id="+data.idP+" src="+'http://www.tastyfoods.com.mx/'+data.imagen+" /></a>"+
                                "</div>"+
                                "<div class='swipe-content'>"+
                                "<a href='#page"+contador+"'>"+
                                "<div class='dato_nom'>"+
                                "<h3>"+data.nombreP+"</h3>"+
                                "<p><h4>"+data.descripcion+"</h4></p>"+
                                "<div class='dato_precio'><h3>"+data.costo_unitario+"</h3></div>"+
                                "</a>"+
                                "</div>"+
                                "</div>"+
                            "</li>");
                        if(data.domicilio==1){
                        $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                    "<div class='grid'>"+
                        "<div class='col2'>"+
                            "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                        "</div>"+

                       " <div class='col2'>"+
                        "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>15</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' />"+
                                    "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio'  />"+
                                    "<a href='#page9' id='btn_entrega' onclick='entregaDomicilio("+data.idP+","+data.costo_unitario+")'><label class='res_envio'>Entrega a domicilio</label></a>"+
                                "</div>"+
                                "<input type='hidden' class='miProducto' value="+data.idP+" />"+
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                    }else{
                                  $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                    "<div class='grid'>"+
                        "<div class='col2'>"+
                            "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                        "</div>"+

                       " <div class='col2'>"+
                        "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>15</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' />"+
                                    "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                "</div>"+                              
                                "<input type='hidden' class='miProducto' value="+data.idP+" />"+
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        
                    }
                    contador++;
                    }); 
                        
                }
            });
   
    $("#login").on("click", function(){
        if ($("#correo").val()=="" || $("#password").val()=="") {
            camposObligatorios();
        }else{
            username = $("#correo").val();
            password = $("#password").val();
            //VERIFICAR SI EL USUARIO Y EL PASSWORD COINCIDEN CON LOS DATOS

             $.ajax({
            type: "post", 
            url: "http://www.tastyfoods.com.mx/users/login", //CAMBIAR URL
            data: ({username: username, password: password  }),
            
            dataType: "json",
             success: function (data) {  
                      
                localStorage.setItem('name',username);          
                  var result = $.trim(data);
                  if (result==="Logged in"){
                 //Registro exitoso
                    var opts={
                        message:"¡Bienvenid@ a Tasty!",
                        position:"tc",
                        delay:2000,
                        autoClose:true,
                        type:"success"
                    };
                    limpiarCampos();
                   
                   window.location.assign("publicidad.html");
                    $.afui.toast(opts);
                }else{
                    $.afui.popup({
                        title: "¡Alerta!",
                        message: "Los datos no coinciden",
                        cancelText: "Aceptar",
                        cancelCallback: function () {
                        },
                        cancelOnly: false
                    });
                    //    var opts={
                    //     message:"Los datos no coinciden",
                    //     position:"tc",
                    //     delay:2000,
                    //     autoClose:true,
                    //     type:"error"
                    // };
                    // $.afui.toast(opts);
                }
            }
                        
        });
            
            
        }
    });


    // $("#register").on("click", function(){
    //     signUp();
    // });

    // $(".register").on("click", function(){
    //     limpiarCampos();
    // });



    $("#guardar_factura").on("click", function(){
        guardarFactura();
    });

    $("#btn_cambiar_contra").on("click", function(){
        cambiarContraseña();
    });

    $("#cerrar_agrad").on("click", function(){
        window.location.assign("content.html");
    });

    $("#cerrar_agrad_img").on("click", function(){
        window.location.assign("content.html");
    });

    $("#confirmar_envio").on("click", function(){
        //MOSTRAR #page11 SI EL USUARIO NO TIENE TARJETAS GUARDADAS Y #seg_vista SI SI TIENE TARJETAS GUARDADAS
    });

    $("#factura_envio").on("click", function(){
        //MOSTRAR #factura SI EL USUARIO NO TIENE FACTURAS GUARDADAS Y #seg_vista_facturas SI SI TIENE FACTURAS GUARDADAS
    });

    $("#tab1").on("click", function(){
        //MOSTRAR PLATILLOS DE VISTA HORIZONTAL
         $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  
                    var contador=20;
                          $("#platillos_horizontal").empty();  
                    $(data).each(function (index, data) { 
                  
                        $("#platillos_horizontal").append(
                            "<li class='lista_platillo opcion' onclick=cerrarBuscadores()>"+
                                "<div class='grid-photo-box img-platillo prueba'id="+data.id+">"+
                                "<a href='#page"+contador+"'><img  id="+data.id+" src="+'http://www.tastyfoods.com.mx/'+data.imagen+" /></a>"+
                                "</div>"+
                                "<div class='swipe-content'>"+
                                "<a href='#page"+contador+"'>"+
                                "<div class='dato_nom'>"+
                                "<h3>"+data.nombreP+"</h3>"+
                                "<p><h4>"+data.descripcion+"</h4></p>"+
                                "<div class='dato_precio'><h3>"+data.costo_unitario+"</h3></div>"+
                                "</a>"+
                                "</div>"+
                                "</div>"+
                            "</li>");
                         if(data.domicilio==1){
                        $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                    "<div class='grid'>"+
                        "<div class='col2'>"+
                            "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                        "</div>"+

                       " <div class='col2'>"+
                        "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>15</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' />"+
                                    "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio'  />"+
                                    "<a href='#page9' id='btn_entrega' onclick='entregaDomicilio("+data.idP+","+data.costo_unitario+")'><label class='res_envio'>Entrega a domicilio</label></a>"+
                                "</div>"+
                                "<input type='hidden' class='miProducto' value="+data.idP+" />"+
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                    }else{
                                  $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                    "<div class='grid'>"+
                        "<div class='col2'>"+
                            "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                        "</div>"+

                       " <div class='col2'>"+
                        "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>15</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' />"+
                                    "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                "</div>"+                              
                                "<input type='hidden' class='miProducto' value="+data.idP+" />"+
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        
                    }
                        contador++;
                    }); 
                        
                }
            });
    });
$('#aplicar_descuento').on('click',function(){
    var r = confirm("Verifica que has terminado de añadir todos tus platillos para obtener un mayor descuento");
    if (r == false) {
            return;
    } else {
  

    total = 0;
     $('#page9 .cantidad_platillo').each(function () {
                     total += Number(this.value);
                        
                });
    
    var actual =  Number($('#page9 #total').text());
   
    resta = parseInt(total) - 1;
    fin = parseInt(actual) - (parseInt(resta) * 2.5);
   
    $('#page9 #total').text(fin);
    localStorage.setItem('costo',fin);
    $(this).unbind( "click" );
    }
});

    $("#tab2").on("click", function(){
        //MOSTRAR RESTAURANTES DE VISTA HORIZONTAL
        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/restaurantes',             
                dataType: 'json',               
                success: function (data) {  
                    
                    $("#restaurantes").empty();  
                $(data).each(function (index, data) {   
                    $("#restaurantes").append(
                        "<li class='lista_dinero restaurante_click'  onclick='res_platillos("+data.id+");'>"+
                        // " <p id="+data.id+" >"+data.id+"</p>"+
                            "<div class='grid-photo-box img-restaurant' id="+data.id+" onclick=cerrarBuscadores()>"+                               
                                "<a href='#item_restaurante'><img src="+'http://www.tastyfoods.com.mx/'+data.imagenR+" /></a>"+
                            "</div>"+
                            "<div class='swipe-content'>"+
                                "<a href='#item_restaurante'><h3>"+data.nombre+"</h3><h3>"+data.hora_inicio+" am a "+data.hora_fin+" pm</h3></a>"+
                            "</div>"+
                        "</li>");
                            }); 
            
                        }
                    });
                
    });

    $("#tab4").on("click", function(){
        //MOSTRAR PLATILLOS DE PRESUPUESTO
    });

    $("#cerrar_agrad").on("click", function(){
        $("#publicidad").css("display","none");
    });

    $("#opt_credito").on("click", function(){
        $(".select_credito").css("display","block");
        $(".select_debito").css("display","none");
    });

     $("#opt_debito").on("click", function(){
        $(".select_credito").css("display","none");
        $(".select_debito").css("display","block");
    });

     $("#opt_credito_ap").on("click", function(){
        $(".select_credito_ap").css("display","block");
        $(".select_debito_ap").css("display","none");
    });

     $("#opt_debito_ap").on("click", function(){
        $(".select_credito_ap").css("display","none");
        $(".select_debito_ap").css("display","block");
    });

      $("#opt_credito_a").on("click", function(){
        $(".select_credito_a").css("display","block");
        $(".select_debito_a").css("display","none");
    });

     $("#opt_debito_a").on("click", function(){
        $(".select_credito_a").css("display","none");
        $(".select_debito_a").css("display","block");
    });

    // $("#btn_reservacion").on("click", function(){
    //     alert();
    //     var myLatLng = {lat: -25.363, lng: 131.044}; //Sacarlas de la bd

    //       var mapa_reserv = new google.maps.Map(document.getElementById('mapa'), {
    //         zoom: 16,
    //         center: myLatLng
    //       });

    //       var marker_Reserv = new google.maps.Marker({
    //         position: myLatLng,
    //         map: mapa_reserv,
    //       });
    // });

    $("#asignar_dom").on("click", function(){

                    var mapa = null;
            navigator.geolocation.getCurrentPosition(initMap, f_mal);

            function f_mal (){}
            function initMap(rta) {

            var lat = rta.coords.latitude;
            var lon = rta.coords.longitude;

            var glatLon = new google.maps.LatLng(lat,lon);

            var myOptions = {
              zoom: 17,
              center: glatLon
            }

            mapa = new google.maps.Map($('.map').get(0), myOptions);

            var marker = new google.maps.Marker({
              position: glatLon,
              map: mapa,
              draggable: true
            });

            marker.addListener('click', function(){
              var markerLatLng = marker.getPosition();
              mlat=markerLatLng.lat();
              mlng=markerLatLng.lng();

              var latlng = new google.maps.LatLng(mlat, mlng);
              var geocoder = new google.maps.Geocoder();
              
              geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  if (results[0]) {
                    mapa.fitBounds(results[0].geometry.viewport);
                    marker.setMap(mapa);
                    marker.setPosition(latlng);

                    $('#address').text(results[0].formatted_address);
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(mapa, marker);
                    google.maps.event.addListener(marker, 'click', function(){  
                      infowindow.setContent(results[0].formatted_address);
                      infowindow.open(map, marker);
                    });
                  } else {
                    alert('No results found');
                  }
                } else {
                  alert('Geocoder failed due to: ' + status); 
                }
              });
            });
          }


        var cantidad = [];
        var identificadores = [];
        i=0;
        j=0;
         $('.cantidad_platillo').each(function () {
                     cantidad [i] = this.value;
                        i++;
                });

         $('.pr').each(function () {
                    identificadores[j] = this.value;
                    j++;
                });
    var cantidades = JSON.stringify(cantidad);
    var productos = JSON.stringify(identificadores);
         localStorage.setItem('cantidad',cantidades);
         localStorage.setItem('ali',productos);

    });

    $(".lista_platillo").on("click", function(){
        cerrarBuscadores();
    });

    $(".lista_restaurante").on("click", function(){
        cerrarBuscadores();
    });
    $(".lista_categorias").on("click", function(){
        cerrarBuscadores();
    });
    $(".lista_dinero").on("click", function(){
        cerrarBuscadores();
    });

    $("#tab1").on("click", function(){
        cerrarBuscadores();
        $('.search_platillos_hor').show();
    });

    $("#tab2").on("click", function(){
        cerrarBuscadores();
        $('.search_restaurantes_hor').show();
    });

    

    $("#vista_pcuadros").on("click", function(){
        cerrarBuscadores();
        $('.search_platillos_hor').show();

    });

    $("#vista_phor").on("click", function(){
        cerrarBuscadores();
        $('.search_platillos_cuadros').show();
        //MOSTRAR PLATILLOS VISTA CUADROS
        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                           $("#platillos_cuadros").empty();  
                           var contador=20;
                     $(data).each(function (index, data) { 
                  
                        $("#platillos_cuadros").append(
                                "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                                    "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                                "</div></li>");
                                     if(data.domicilio==1){
                        $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                    "<div class='grid'>"+
                        "<div class='col2'>"+
                            "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                        "</div>"+

                       " <div class='col2'>"+
                        "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>15</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' />"+
                                    "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio'  />"+
                                    "<a href='#page9' id='btn_entrega' onclick='entregaDomicilio("+data.idP+","+data.costo_unitario+")'><label class='res_envio'>Entrega a domicilio</label></a>"+
                                "</div>"+
                                "<input type='hidden' class='miProducto' value="+data.idP+" />"+
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                    }else{
                                  $('.pages').append(
                        "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                    "<div class='grid'>"+
                        "<div class='col2'>"+
                            "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                        "</div>"+

                       " <div class='col2'>"+
                        "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>15</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' />"+
                                    "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                                "</div>"+                              
                                "<input type='hidden' class='miProducto' value="+data.idP+" />"+
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        
                    }
                        contador++;
                    }); 
                }
            });
    });

    $("#vista_rcuadros").on("click", function(){
        cerrarBuscadores();
        $('.search_restaurantes_hor').show();
    });

    $("#vista_rhor").on("click", function(){
        cerrarBuscadores();
        $('.search_restaurantes_cuadros').show();
        //MOSTRAR RESTAURANTES DE VISTA CUADROS
         $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/restaurantes',             
                dataType: 'json',               
                success: function (data) {  
                    $("#restaurantes_cuadros").empty(); 

                $(data).each(function (index, data) {   
                    $("#restaurantes_cuadros").append(
                        "<li onclick='res_platillos("+data.id+");' >"+
                            "<div class='grid-photo-box' id="+data.id+" onclick='cerrarBuscadores()'>"+
                            "<a href='#item_restaurante'><img src="+'http://www.tastyfoods.com.mx/'+data.imagenR+" /></a>"+
                            "</div>"+
                        "</li>");
                });     
            }
        });
    });

    $("#cerrar_publicidad").on("click", function(){
        cerrarBuscadores();
        $('.search_platillos_hor').show();
    });

    $(".lista_dinero h3").on("click", function(){
        cerrarBuscadores();
    });

    $(".valoracion").on("click", function(){
        cerrarBuscadores();
    });

    $(".swipe-content ").on("click", function(){
        cerrarBuscadores();
    });

    $("#tab3").on("click", function(){
        cerrarBuscadores();
    });

    $("#tab4").on("click", function(){
        cerrarBuscadores();

        var min = $('#min').val();
        var max = $('#max').val();

       
    });

    $("#tab5").on("click", function(){
        cerrarBuscadores();
    });

    $("li.lista_platillo").on("click", function(){
       
        cerrarBuscadores();
    });

    $(".restaurante_click").on("click", function(){
        cerrarBuscadores();
    });

    $("header").on("click", function(){
        cerrarBuscadores();
    });

    $("#a_platillo").on("click", function(){
        window.location.assign("content.html#page1");
    });


    $("#bien_dulce").on("click", function(){
         document.getElementById("bien_dulce").src = "img/ic_bien.png";
         document.getElementById("mal_dulce").src = "img/ic_malvacio.png";
    });

    $("#mal_dulce").on("click", function(){
         document.getElementById("mal_dulce").src = "img/ic_mal.png";
         document.getElementById("bien_dulce").src = "img/ic_bienvacio.png";
    });

     $("#bien_sal").on("click", function(){
                  document.getElementById("bien_sal").src = "img/ic_bien.png";
         document.getElementById("mal_sal").src = "img/ic_malvacio.png";
    });

    $("#mal_sal").on("click", function(){
        document.getElementById("mal_sal").src = "img/ic_mal.png";
         document.getElementById("bien_sal").src = "img/ic_bienvacio.png";
    });

     $("#bien_pic").on("click", function(){
        document.getElementById("bien_pic").src = "img/ic_bien.png";
        document.getElementById("mal_pic").src = "img/ic_malvacio.png";
    });

    $("#mal_pic").on("click", function(){
        document.getElementById("mal_pic").src = "img/ic_mal.png";
        document.getElementById("bien_pic").src = "img/ic_bienvacio.png";
    });

     $("#bien_lim").on("click", function(){
        document.getElementById("bien_lim").src = "img/ic_bien.png";
         document.getElementById("mal_lim").src = "img/ic_malvacio.png";
    });

    $("#mal_lim").on("click", function(){
        document.getElementById("mal_lim").src = "img/ic_mal.png";
         document.getElementById("bien_lim").src = "img/ic_bienvacio.png";
    });

    $("#star1").on("click", function(){
        document.getElementById("star1").src = "img/ic_starO_36.png";
        document.getElementById("star2").src = "img/ic_starC_36.png";
        document.getElementById("star3").src = "img/ic_starC_36.png";
        document.getElementById("star4").src = "img/ic_starC_36.png";
        document.getElementById("star5").src = "img/ic_starC_36.png";
    });

    $("#star2").on("click", function(){
        document.getElementById("star1").src = "img/ic_starO_36.png";
        document.getElementById("star2").src = "img/ic_starO_36.png";
        document.getElementById("star3").src = "img/ic_starC_36.png";
        document.getElementById("star4").src = "img/ic_starC_36.png";
        document.getElementById("star5").src = "img/ic_starC_36.png";
    });    
    
    $("#star3").on("click", function(){
        document.getElementById("star1").src = "img/ic_starO_36.png";
        document.getElementById("star2").src = "img/ic_starO_36.png";
        document.getElementById("star3").src = "img/ic_starO_36.png";
        document.getElementById("star4").src = "img/ic_starC_36.png";
        document.getElementById("star5").src = "img/ic_starC_36.png";
    });
    $("#star4").on("click", function(){
        document.getElementById("star1").src = "img/ic_starO_36.png";
        document.getElementById("star2").src = "img/ic_starO_36.png";
        document.getElementById("star3").src = "img/ic_starO_36.png";
        document.getElementById("star4").src = "img/ic_starO_36.png";
        document.getElementById("star5").src = "img/ic_starC_36.png";
    });
    $("#star5").on("click", function(){
        document.getElementById("star1").src = "img/ic_starO_36.png";
        document.getElementById("star2").src = "img/ic_starO_36.png";
        document.getElementById("star3").src = "img/ic_starO_36.png";
        document.getElementById("star4").src = "img/ic_starO_36.png";
         document.getElementById("star5").src = "img/ic_starO_36.png";
    });
});

function res_platillos(id_restaurante){
        $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#item_restaurante #platillos_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_restaurante==id_restaurante) {
            $("#item_restaurante #platillos_horizontal").append(
                "<li class='lista_categorias'>"+
                    "<div class='grid-photo-box img-platillo' prueba'id="+data.id+">"+
                    "<a href='#page"+contador+"'><img id="+data.id+" src="+'http://www.tastyfoods.com.mx/'+data.imagen+" /></a></div>"+
                    "<div class='swipe-content'>"+
                        "<a href='#page"+contador+"'>"+
                            "<div class='dato_nom'>"+
                                "<h3>"+data.nombreP+"</h3>"+
                            "</div>"+
                            "<p><h4>"+data.descripcion+"</h4></p>"+
                            "<div class='dato_precio'>"+
                                "<h3>"+data.costo_unitario+"</h3>"+
                            "</div>"+
                        "</a>"+
                        "<div class='valoracion'>"+
                            "<ul >"+
                                "<li ><a href=''><img  src='img/ic_starO_36.png'></a></li>"+
                                "<li ><a href=''><img  src='img/ic_starO_36.png'></a></li>"+
                                "<li ><a href=''><img  src='img/ic_starO_36.png'></a></li>"+
                                "<li ><a href=''><img  src='img/ic_starO_36.png'></a></li>"+
                                "<li ><a href=''><img src='img/ic_starO_36.png'></a></li>"+
                            "</ul>"+
                        "</div>"+
                     "</div>"+
                "</li>");
                $('.pages').append(
                "<div id='page"+contador+"' class='panel' data-footer='footerui' data-title='Platillo'>"+
                "<div class='grid'>"+
                    "<div class='col2'>"+
                        "<a onClick='showCustomHtmlSheet()'><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                    "</div>"+
                    "<div class='col2'>"+
                    "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3>4.2</h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3>5.5</h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3>8.9</h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3>3.5</h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                "<div id='container'>"+
                    "<section id='accordion'>"+
                "<div>"+
                            "<input type='radio' id='"+contador+"optionh-1' name='accordion-group'/>"+
                            "<label for='"+contador+"optionh-1' >Descripción</label>"+
                            "<article>"+
                                "<p id='descripcion'>"+data.descripcion+"</p>"+
                            "</article>"+
                    "</div>"+
                    "<div>"+
                        "<input type='radio' id='"+contador+"optionh-2' name='accordion-group' />"+
                        "<label for='"+contador+"optionh-2'>Restaurante</label>"+
                        "<article>"+
                            "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                        "</article>"+
                    "</div>"+
                    "<div>"+
                        "<input type='radio' id='"+contador+"optionh-3' name='accordion-group'/>"+
                        "<label for='"+contador+"optionh-3' id='btn_direccion'>Direccion</label>"+
                        "<article>"+
                            "<p id='direccion'>"+data.direccion+"</p>"+
                        "</article>"+
                    "</div>"+
                    "<div>"+
                        "<input type='radio' id='"+contador+"optionh-4' name='accordion-group'/>"+
                        "<label for='"+contador+"optionh-4' id='btn_telefono'>Teléfono</label>"+
                        "<article>"+
                            "<p id='telefono'>"+data.telefono+"</p>"+
                        "</article>"+
                    "</div>"+
                    "<div>"+
                        "<input type='radio' id='"+contador+"optionh-5' name='accordion-group'/>"+
                        "<label for='"+contador+"optionh-5'>Tiempo de entrega</label>"+
                        "<article>"+
                            "<p id='tiempo'>15</p>"+
                        "</article>"+
                    "</div>"+
                    "<div>"+
                        "<input type='radio' />"+
                        "<a href='#page7' id='btn_reservacion' onclick='reservacion()'><label class='res_envio'>Reservación</label></a>"+
                    "</div>"+
                    "<div>"+
                        "<input type='radio'  />"+
                        "<a href='#page9' id='btn_entrega' onclick='entregaDomicilio("+data.idP+","+data.costo_unitario+")'><label class='res_envio'>Entrega a domicilio</label></a>"+
                    "</div>"+
                        "<input type='hidden' value="+data.idP+" />"+
                    "</section>"+
                "</div>"+
                "</div>"+
            "</div>"+
            "</div>"+
            "</div>");
            contador++;             
            }; 

            });     
        }
    });
}

 //REGISTRO DEL USUARIO
function signUp(){
    //Verificar que todos los campos tengan valores
    if ($("#nombre").val()=="" || $("#apellidos").val()=="" || $("#reg_correo").val()=="" || $("#edad").val()=="" || $("#codigo_postal").val()=="" || $("#sexo").val()=="" || $("#reg_password").val()=="" || $("#confirmpassword").val()=="" )
    {
        camposObligatorios();
    } 
    //Contraseñas coinciden
    else if ($("#reg_password").val() === $("#confirmpassword").val())
    {
        //Extraer datos y efectuar registro
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var correo = $("#reg_correo").val();
        var password = $("#reg_password").val();
        var edad = $("#edad").val();
        var sexo = $("#sexo").val();
        var codigo_postal = $("#codigo_postal").val();
        localStorage.setItem('nombre',correo);
        limpiarCampos();
                
        $.ajax({
            type: "post", 
            url: "http://www.tastyfoods.com.mx/registro", //CAMBIAR URL
            data: ({nombre: nombre, apellidos: apellidos, correo: correo, password: password, edad: edad, sexo: sexo, codigo_postal: codigo_postal}),
            cache: false,
            dataType: "json",
             success: function (data) {  
                
                 //Registro exitoso
                    var opts={
                        message:"¡Bienvenid@ a Tasty!",
                        position:"tc",
                        delay:2000,
                        autoClose:true,
                        type:"success"
                    };
                    $.afui.toast(opts);
                    window.location.assign("publicidad.html");
            }
                        
        });

       
    }
    //Contraseñas no coinciden
    else {
        $.afui.popup({
            title: "¡Alerta!",
            message: "Las contraseñas deben coincidir",
            cancelText: "Aceptar",
            cancelCallback: function () {
            },
            cancelOnly: false
        });
        // var opts={
        //     message:"Las contraseñas deben coincidir",
        //     position:"tc",
        //     delay:2000,
        //     autoClose:true,
        //     type:"error"
        // };
        // $.afui.toast(opts);
    }
}



//GUARDAR TARJETA
function guardarTarjeta(tipoTarjeta){
    $("#guardar_tarjeta").on("click", function(){
        if (tipoTarjeta) {
            if ($("#nombredelatarjeta_a").val()=="" || $("#nombretarjetahabiente_a").val()=="" || $("#tarjeta_a").val()=="" || $("#cvc_a").val()=="") {
                camposObligatorios();
            }else{
                var tipoC = "Credito"
                var tarj_credito = $(".tarj_credito_a").val();
                var nombredelatarjeta = $("#nombredelatarjeta_a").val();
                var nombretarjetahabiente = $("#nombretarjetahabiente_a").val();
                var tarjeta = $("#tarjeta_a").val();
                var cvc = $("#cvc_a").val();
                var month = $("#month_a").val();
                var year = $("#year_a").val();

                limpiarCampos();
                //SE GUARDA LA TARJETA

                //MENSAJE
                var opts={
                    message:"¡Tarjeta guardada!",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"success"
                };
                $.afui.toast(opts);
                document.getElementById("guardar_tarjeta").href = "#tarjetas";
            }
        }else{
            if ($("#nombredelatarjeta_a").val()=="" || $("#nombretarjetahabiente_a").val()=="" || $("#tarjeta_a").val()=="" || $("#cvc_a").val()=="") {
                camposObligatorios();
            }else{
                var tipoD = "Debito"
                var tarj_debito = $(".tarj_debito_a").val();
                var nombredelatarjeta = $("#nombredelatarjeta_a").val();
                var nombretarjetahabiente = $("#nombretarjetahabiente_a").val();
                var tarjeta = $("#tarjeta_a").val();
                var cvc = $("#cvc_a").val();
                var month = $("#month_a").val();
                var year = $("#year_a").val();

                limpiarCampos();
                //SE GUARDA LA TARJETA

                //MENSAJE
                var opts={
                    message:"¡Tarjeta guardada!",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"success"
                };
                $.afui.toast(opts);
                document.getElementById("guardar_tarjeta").href = "#tarjetas";
            }
        }
    });
}

//GUARDAR FACTURA
function guardarFactura(){
     if ($("#nombredelafactura").val()=="" || $("#nombre_factura").val()=="" || $("#domiciliofiscal").val()=="" || $("#rfc").val()=="" || $("#correo_factura").val()=="") {
        camposObligatorios();
     }else{
        var nombredelafactura = $("#nombredelafactura").val();
        var nombre_factura = $("#nombre_factura").val();
        var domiciliofiscal = $("#domiciliofiscal").val();
        var rfc = $("#rfc").val();
        var correo_factura = $("#correo_factura").val();

        limpiarCampos();
        //SE GUARDA DATOS DE FACTURACION

        //MENSAJE
        var opts={
            message:"¡Tarjeta guardada!",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"success"
        };
        $.afui.toast(opts);
        // document.getElementById("guardar_factura").href = "#datos_facturas";
     }
}

//CAMBIAR CONTRASEÑA
function cambiarContraseña(){
    if ($("#contra_actual").val()=="" || $("#contra_nueva").val()=="" || $("#v_contra_nueva").val()=="") {
        camposObligatorios();
    }else{
        var contra_actual = $("#contra_actual").val();
        var contra_nueva = $("#contra_nueva").val();
        var v_contra_nueva = $("#v_contra_nueva").val();

        if (!(contra_actual=="hola")) { //VERIFICAR QUE LA CONTRASEÑA ACTUAL COICIDA CON LA BD
            //MENSAJE
            $.afui.popup({
                title: "¡Alerta!",
                message: "Tu contraseña actual no coincide.",
                cancelText: "Aceptar",
                cancelCallback: function () {
                },
                cancelOnly: false
            });
            // var opts={
            //     message:"Tu contraseña actual no coincide.",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            // $.afui.toast(opts);
        }else{

            if (!(contra_nueva == v_contra_nueva)) {
                //MENSAJE
                $.afui.popup({
                    title: "¡Alerta!",
                    message: "La nueva contraseña no coincide.",
                    cancelText: "Aceptar",
                    cancelCallback: function () {
                    },
                    cancelOnly: false
                });
                // var opts={
                //     message:"La nueva contraseña no coincide.",
                //     position:"tc",
                //     delay:2000,
                //     autoClose:true,
                //     type:"error"
                // };
                // $.afui.toast(opts);

            }else{
                // //CAMBIAR LA CONTRASEÑA EN LA BD

                // //MENSAJE
                var opts={
                    message:"¡Listo!",
                    position:"tc",
                    delay:2000,
                    autoClose:true,
                    type:"success"
                };
                $.afui.toast(opts);

                limpiarCampos();

                document.getElementById("btn_cambiar_contra").href = "#page5";
            }
        }
    }
}

//CERRAR SESION
function cerrarSesion(){
    var confirmar=confirm("¿Estás seguro de cerrar sesión?");
    if (confirmar){
       window.location.assign("index.html");
    }else{

    }
}


//HACER RESERVACION SIN PLATILLOS
function reservacion(){
        var myLatLng = {lat: -25.363, lng: 131.044}; //Sacarlas de la bd

          var mapa_reserv = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 16,
            center: myLatLng
          });

          var marker_Reserv = new google.maps.Marker({
            position: myLatLng,
            map: mapa_reserv,
        });

    $("#reservar").on("click", function(){
        if ($("#mesa").val()=="") {
            $.afui.popup({
                title: "¡Alerta!",
                message: "Selecciona para cuantas personas es tu reservación",
                cancelText: "Aceptar",
                cancelCallback: function () {
                },
                cancelOnly: false
            });
            // var opts={
            //     message:"Selecciona para cuantas personas es tu reservación",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            $.afui.toast(opts);
        }else if($("#hora").val()==""){
            $.afui.popup({
                title: "¡Alerta!",
                message: "Ingresa la hora de tu reservación",
                cancelText: "Aceptar",
                cancelCallback: function () {
                },
                cancelOnly: false
            });
            // var opts={
            //     message:"Ingresa la hora de tu reservación",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            // $.afui.toast(opts);
        }else{
            var mesa = $("#mesa").val();
            var hora = $("#hora").val();
            var id_restaurante = id_restaurante;
            var id_usuario; //Sesion del usuario
            limpiarCampos();
            document.getElementById("reservar").href = "#page8";
            //MOSTRAR TEXTO DE CONFIRMACION EN PAGE8


            $("#confirmar_reserv").on("click", function(){
                //GUARDAR LOS DATOS
                //mesa
                //hora
                //id_restaurante
                //id_usuario 

                $.afui.popup({
                    title: "¡Muchas gracias!",
                    message: "En unos momentos mas recibirás la confirmación de tu reservación.",
                    cancelText: "Aceptar",
                    cancelCallback: function () {
                        document.getElementById("confirmar_reserv").href = "#vista_horizontal";
                    },
                    cancelOnly: false
                });
            });
        }

    });
    
}
$(document).on('click','#btn_agregar_envio',function(e){
    var identificador = $(this).attr("name");

    
 $.ajax({
            type: "post", 
            url: "http://www.tastyfoods.com.mx/users/platilloEsp", //CAMBIAR URL
            data: ({id : identificador }),
            cache: false,
            dataType: "json",
             success: function (data) {  
                $('.productos_entrega').append(
                    "<li>"+
                        "<div class='productos grid'>"+
                            "<div class='sep'>"+
                                "<div class='mesa'>"+
                                    "<div class='col-3'>"+
                                        "<label for='test2' id='nombre_producto'>"+data[0].nombreP+"</label>"+
                                    "</div>"+
                                    "<div class='col-3 div_select_cp'>"+
                                        "<select class='cantidad_platillo' id='cantidad_platillo'>"+
                                            "<option value='1'>1</option>"+
                                            "<option value='2'>2</option>"+
                                            "<option value='3'>3</option>"+
                                            "<option value='4'>4</option>"+
                                            "<option value='5'>5</option>"+
                                            "<option value='6'>6</option>"+
                                            "<option value='7'>7</option>"+
                                            "<option value='8'>8</option>"+
                                            "<option value='9'>9</option>"+
                                            "<option value='10'>10</option>"+
                                            "<option value='10+'>10+</option>"+
                                        "</select>"+
                                        "<input type='number' id='input_cantidad_platillo' />"+
                                    "</div>"+
                                    "<div class='col13'>"+
                                        "<label name='"+data[0].costo_unitario+"' class='precio_producto'>"+data[0].costo_unitario+"</label>"+
                                    "</div>"+
                                "</div>"+
                                "<input type='hidden' class='pr' value='"+data[0].idP+"' />"+
                            "</div>"+
                        "</div>"+
                    "</li>");          

        totalPagar();
        

        }



    });
});
$(document).on('click','#agregar_plat_res',function(){
    var boton = $(this)
    var identificador =  localStorage.getItem('idProducto');
     $.ajax({
            type: "post", 
            url: "http://www.tastyfoods.com.mx/users/addAlim", //CAMBIAR URL
            data: ({id : identificador }),
            cache: false,
            dataType: "json",
             success: function (data) {  
                
                contador = 40;
                var div = $('#agregar_platillos_e #platillos_cuadros');
                div.empty();
                 $(data).each(function (index, data) { 
                    
                 $('.pages').append(
                 " <div  class='panel' id='seleccionar_platillo_e"+contador+"' data-title='Restaurante'>"+
                "<div class='grid'>"+
                    "<div class='col2'>"+
                         "<a onClick='showCustomHtmlSheet()''><div class='platillo'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" ></div></a>"+
                    "</div>"+
                "<div class='col2'>"+
                    "<div class='columna2_producto'>"+
                        "<ul class='sabores_p'>"+
                            "<li class='dul'><a onClick='showPopupLimDul()'><img id='dul' src='img/ic_dulceO_36.png'><h3></h3></a></li>"+
                            "<li class='sal'><a onClick='showPopupLimSal()'><img id='sal' src='img/ic_salO_36.png'><h3></h3></a></li>"+
                            "<li class='chi'><a onClick='showPopupLimChi()'><img id='chi' src='img/ic_chileO_36.png'><h3></h3></a></li>"+
                            "<li class='lim'><a onClick='showPopupLimEst()'><img id='lim' src='img/ic_limonO_36.png'><h3></h3></a></li>"+
                        "</ul>"+
                        "<div class='dato_platillo'>"+
                            "<h2 class='nom_platillo' id='nombre_platillo'>"+data.nombreP+"</h2>"+
                            "<h2 class='precio_platillo' id='precio'>"+data.costo_unitario+"</h2>"+
                        "</div>"+
                        "<div id='container'>"+
                            "<section id='accordion'>"+
                                "<div>"+
                                    "<input type='radio' id='option-50' name='accordion-group'/>"+
                                    "<label for='option-50' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='option-51' name='accordion-group'/>"+
                                    "<label for='option-51'>Tiempo de entrega</label>"+
                                    "<article>"+
                                        "<p id='tiempo'>Lorem ipsum dolor sit amet</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='' />"+
                                    "<label class='res_envio'><a href='#page9' name="+data.idProducto+" id='btn_agregar_envio'>Agregar</a></label>"+
                                    
                                "</div>"+
                            "</section>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "</div>"+
            "</div>");
                         div.append(
                        "<li>"+
                            "<div class='grid-photo-box'>"+
                            "<a href='#seleccionar_platillo_e"+contador+"'><img src="+'http://www.tastyfoods.com.mx/'+data.imagen+" /></a>"+
                            "</div>"+
                        "</li>");
                         contador++;

                  });
                 
                    
            }
                        
        });

});
//AGREGAR PLATILLOS RESERVACION
function agregarPlatilloRes(id_restaurante){
    //MOSTRAR TODOS LOS PLATILLOS CON ID RESTAURANTE 
    //(Imagenes cuadros)
}

function platilloSelecRes(id_platillo){
    //MOSTRAR TODOS LOS DATOS DEL ID PLATILLO (ALIMENTO SELECCIONADO)
    //Imagen
    //Valoracion de sabores
    //Nombre
    //Precio
    //Descripcion
    //Tiempo de entrega
}

function agregarPlatilloRes(id_platillo){
    //MOSTRAR DATOS DEL PLATILLO
    //Nombre
    //Precio
    //Total de todos los platillos

}

function agregarOtroRes(id_platillo,id_restaurante){ //id_platillo es el platillo seleccionado anteriormente aqui quiero acumularlos
    //MOSTRAR TODOS LOS PLATILLOS CON ID RESTAURANTE
    //(Imagenes cuadros)
}

//HACER RESERVACION CON PLATILLOS
function aceptarPlatillos(id_platillo,id_restaurante){ 
    $("#reservar").on("click", function(){
        if ($("#mesa").val()=="") {
            $.afui.popup({
                    title: "¡Alerta!",
                    message: "Selecciona para cuantas personas es tu reservación",
                    cancelText: "Aceptar",
                    cancelCallback: function () {
                    },
                    cancelOnly: false
            });
            // var opts={
            //     message:"Selecciona para cuantas personas es tu reservación",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            // $.afui.toast(opts);
        }else if($("#hora").val()==""){
            $.afui.popup({
                    title: "¡Alerta!",
                    message: "Ingresa la hora de tu reservación",
                    cancelText: "Aceptar",
                    cancelCallback: function () {
                    },
                    cancelOnly: false
            });
            // var opts={
            //     message:"Ingresa la hora de tu reservación",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            // $.afui.toast(opts);
        }else{
            var mesa = $("#mesa").val();
            var hora = $("#hora").val();
            var id_platillo = id_platillo; //Uno o todos los platillos que el usuario agrego a su reservacion
            var id_restaurante = id_restaurante;
            var id_usuario; //Sesion del usuario
            limpiarCampos();
            document.getElementById("reservar").href = "#page8";
            //MOSTRAR TEXTO DE CONFIRMACION EN PAGE8


            $("#confirmar_reserv").on("click", function(){
                //GUARDAR LOS DATOS
                //mesa
                //hora
                //id_restaurante
                //id_usuario 
                //platillos

                    
                $.afui.popup({
                    title: "¡Muchas gracias!",
                    message: "En unos momentos mas recibirás la confirmación de tu reservación.",
                    cancelText: "Aceptar",
                    cancelCallback: function () {
                        document.getElementById("confirmar_reserv").href = "#vista_horizontal";
                    },
                    cancelOnly: false
                });
            });
        }
    });
}

function totalPagar(){
      var sum = 0;
            $('.precio_producto').each(function () {
                    sum += Number($(this).text());
            });
             $("#page9 #total").text(sum+15);        

}
//ENTREGA A DOMICILIO
function entregaDomicilio(id,costo){
    //MOSTRAR DATOS DEL PLATILLO A ENVIO
    //Nombre
    //Precio
      localStorage.setItem('idProducto',id);
        var precio_producto = $('#precio_producto').text(); //Precio de la bd
        var cantidad_platillo;
        var signo;
        var total;
        var id_platillo = id_platillo;
         $.ajax({
            type: "post", 
            url: "http://www.tastyfoods.com.mx/users/platilloEsp", //CAMBIAR URL
            data: ({id: id }),
            
            dataType: "json",
             success: function (data) {  
               localStorage.setItem('ali',data[0].nombreP); 
               localStorage.setItem('rest',data[0].id);
               $('#page9 .sep').append("<input type='hidden' class='pr' value='"+data[0].idP+"' />");
                $("#page9 .precio_producto").text(data[0].costo_unitario);
                $("#page9 .precio_producto").attr('name',data[0].costo_unitario);   
             }
         });

            var id_restaurante = id_restaurante;
          
             $("#page9 #total").text(costo+15);
             $("#page9 #nombre_producto").text(localStorage.getItem('ali'));
             localStorage.setItem('costo',costo);
            
            cantidad_platillo = $('.cantidad_platillo').val();
         
            localStorage.setItem('cantidad',cantidad_platillo);
        $(document).on('change','.cantidad_platillo',function(){
            
            cantidad_platillo = $(this).val();
            signo = "$";
            localStorage.setItem('cantidad',cantidad_platillo);
            if (cantidad_platillo=="10+") {
                $("#cantidad_platillo").css("display","none");
                $("#input_cantidad_platillo").css("display","block");

                document.getElementById("input_cantidad_platillo").onkeyup = function() {
                    var input_cantidad_platillo = $('#input_cantidad_platillo').val();
                    
                     var cant = $(this).parents('.mesa').find('.precio_producto');  
           
                      total = input_cantidad_platillo*$(cant).attr("name");
                      cant.text(total);
                      totalPagar();
                };
            };
            //MOSTRAR PRECIO DEPENDIENDO DEL CAMBIO DEL SELECT                              
            var cant = $(this).parents('.mesa').find('.precio_producto');  
           
              total = cantidad_platillo*$(cant).attr("name");
              cant.text(total);
              totalPagar();
            var sum = Number($('#page9 #total').text());
          
             
              localStorage.setItem('costo',sum);
       
        });
    //Total

//BOTON CONFIRMAR DOMICILIO
     $("#confirmar_dom").on("click", function(){
        if ($("#caracteristica").val()=="") {
            
             //MENSAJE
             $.afui.popup({
                title: "¡Alerta!",
                message: "Ingresa una caracteristica del lugar",
                cancelText: "Aceptar",
                cancelCallback: function () {
                },
                cancelOnly: false
            });
            // var opts={
            //     message:"Ingresa una caracteristica del lugar.",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            // $.afui.toast(opts);

        }else if($("#address").text()=="Arrastra el marcador y selecciona el domicilio donde se hará tú entrega"){
            
             //MENSAJE
            $.afui.popup({
                title: "¡Alerta!",
                message: "Selecciona el lugar donde se hara tu entrega.",
                cancelText: "Aceptar",
                cancelCallback: function () {
                },
                cancelOnly: false
            });
            // var opts={
            //     message:"Selecciona el lugar donde se hara tu entrega.",
            //     position:"tc",
            //     delay:2000,
            //     autoClose:true,
            //     type:"error"
            // };
            // $.afui.toast(opts);

        }else{
            var caracteristica =$("#caracteristica").val();
            var address = $("#address").text();
              localStorage.setItem('direccion',address);
            limpiarCampos();
            $("#page12 .confirmar_datos").append("<h4>Usted ha solicitado un pedido con un costo de: $"+localStorage.getItem('costo')+"  a la direccion "+localStorage.getItem('direccion')+",¿ desea continuar con su compra?</h4>");
            document.getElementById("confirmar_dom").href = "#page12";

            $("#confirmar_envio").on("click", function(){
                //GUARDAR LOS DATOS DE ENVIO

                //id_restaurante
                //id_platillo
                //cantidad_platillo
                //total
                //address
                //caracteristica
                $.ajax({
                    type: "post", 
                    url: "http://www.tastyfoods.com.mx/users/pedidos", //CAMBIAR URL
                    data: ({cantidad: localStorage.getItem('cantidad'),nombre: localStorage.getItem('ali'),direccion: localStorage.getItem('direccion'),username: localStorage.getItem('name'), costo: localStorage.getItem('costo'), restaurante: localStorage.getItem('rest') }),
            
                    dataType: "json",
                    success: function (data) {  
                        console.log(data);
                        localStorage.setItem('pedido',data);
                            $.afui.popup({
                                title: "¡Muchas gracias!",
                                message: "En unos momentos mas recibirás la confirmación de tu pedido.",
                                cancelText: "Aceptar",
                                cancelCallback: function () {
                                    pago(total);
                                },
                                cancelOnly: false
                            });
                    }   
                 });
                
                
            });
        }
    });
}

   $(document).on("click","#opt_credito", function(){
        conketa_tarjeta = true;
        
    });
    $(document).on("click","#opt_debito", function(){
        conketa_tarjeta = false;
        
    });


function pago(total){
    var cantidad_total=total;
 

    $("#factura_envio").on("click", function(){
        generarFactura(cantidad_total);
    }); 
}

//PAGO
function pagoConekta(cantidad_total,conketa_tarjeta){
    
     
}

//GENERAR FACTURA
function generarFactura(cantidad_total){
   
}

//GUARDAR VALORACION
function guardarValoracion(id_platillo){
    var select_dulce = $("#select_dulce").val();
    var select_salado = $("#select_salado").val();
    var select_picoso = $("#select_picoso").val();
    var select_acido = $("#select_acido").val();
}

function showPopupLimEst() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_limonO_36.png'><img id='star2' src='img/ic_limonO_36.png'><img id='star3' src='img/ic_limonO_36.png'><img id='star4' src='img/ic_limonC_36.png'><img id='star5' src='img/ic_limonC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function showPopupLimChi() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_chileO_36.png'><img id='star2' src='img/ic_chileO_36.png'><img id='star3' src='img/ic_chileO_36.png'><img id='star4' src='img/ic_chileC_36.png'><img id='star5' src='img/ic_chileC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function showPopupLimSal() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_salO_36.png'><img id='star2' src='img/ic_salO_36.png'><img id='star3' src='img/ic_salO_36.png'><img id='star4' src='img/ic_salC_36.png'><img id='star5' src='img/ic_salC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function showPopupLimDul() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_dulceO_36.png'><img id='star2' src='img/ic_dulceO_36.png'><img id='star3' src='img/ic_dulceO_36.png'><img id='star4' src='img/ic_dulceC_36.png'><img id='star5' src='img/ic_dulceC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}




function alert_pago() {
    $.afui.popup({
        title: "¡Muchas gracias!",
        message: "En unos momentos mas llegara tu pedido.",
        cancelText: "Aceptar",
        cancelCallback: function () {
            // document.getElementById("processPayment_pag").href = "#vista_horizontal";
        },
        cancelOnly: false
    });
}


function showCustomHtmlSheet() {
    $.afui.actionsheet('<img id="img_platillo" src="img/Logo_1.0[1].png">');
}


function camposObligatorios(){
    $.afui.popup({
        title: "¡Alerta!",
        message: "Todos los campos son requeridos",
        cancelText: "Aceptar",
        cancelCallback: function () {
        },
        cancelOnly: false
    });
    // var opts={
    //     message:"Todos los campos son requeridos",
    //     position:"tc",
    //     delay:2000,
    //     autoClose:true,
    //     type:"error"
    // };
    // $.afui.toast(opts);
}

function habilitarInputMesa(){
    var mesa = document.getElementById("mesa_para_select").value; 
   
    if (mesa == "10+") {
        $("#mesa_para_select").css("display","none");
        $("#mesa_para_input").css("display","block");
        var mesaPara = $("#mesa_para_input").val();
    };
}


function limpiarCampos(){
    $("#correo").val("");
    $("#password").val("");
    $("#nombre").val("");
    $("#apellidos").val("");
    $("#reg_correo").val("");
    $("#reg_password").val("");
    $("#confirmpassword").val("");
    $("#edad").val("");
    $("#codigo_postal").val("");
    $('#sexo').val($('#sexo > option:first').val());
    $('.search_platillos_cuadros').val("");
    $('.search_platillos_hor').val("");
    $('.search_restaurantes_cuadros').val("");
    $('.search_restaurantes_hor').val("");
    $('.search_bebidas_frias_c').val("");
    $('.search_bebidas_frias_h').val("");
    $('.search_bebidas_calientes_c').val("");
    $('.search_bebidas_calientes_h').val("");
    $('.search_buffet_c').val("");
    $('.search_buffet_h').val("");
    $('.search_frutas_c').val("");
    $('.search_frutas_h').val("");
    $('.search_desayunos_c').val("");
    $('.search_desayunos_h').val("");
    $('.search_hamburguesas_c').val("");
    $('.search_hamburguesas_h').val("");
    $('.search_pescado_c').val("");
    $('.search_pescado_h').val("");
    $('.search_pizza_c').val("");
    $('.search_pizza_h').val("");
    $('.search_pollo_c').val("");
    $('.search_pollo_h').val("");
    $('.search_reposteria_h').val("");
    $('.search_reposteria_c').val("");
    $('.search_res_h').val("");
    $('.search_res_c').val("");
    $('.search_sushi_h').val("");
    $('.search_sushi_c').val("");
    $('.search_tacos_h').val("");
    $('.search_tacos_c').val("");
    $('.search_verduras_h').val("");
    $('.search_verduras_c').val("");
    $('.search_botana_h').val("");
    $('.search_botana_c').val("");
    $('.search_eventos_h').val("");
    $('.search_eventos_c').val("");
    $('.search_misuper_h').val("");
    $('.search_misuper_c').val("");
    $('.search_helados_h').val("");
    $('.search_helados_c').val("");
    $('.search_dulces_h').val("");
    $('.search_dulces_c').val("");
    $(".tarj_debito").val("");
    $("#nombredelatarjeta_e").val("");
    $("#nombretarjetahabiente_e").val("");
    $("#tarjeta_e").val("");
    $("#cvc_e").val("");
    $('#month_e').val($('#mont_e > option:first').val());
    $('#year_e').val($('#year_e > option:first').val());
    $(".tarj_debito_e").val("");
    $("#nombredelatarjeta").val("");
    $("#nombretarjetahabiente").val("");
    $("#tarjeta").val("");
    $("#cvc").val
    $('#month').val($('#mont > option:first').val());
    $('#year').val($('#year > option:first').val());
    $("#contra_actual").val("");
    $("#contra_nueva").val("");
    $("#v_contra_nueva").val("");
    $("#mesa").val("");
    $("#hora").val("");
    $('#cantidad_platillo').val($('#cantidad_platillo > option:first').val());
    $("#caracteristica").val("");
    $("#address").text("Arrastra el marcador y selecciona el domicilio donde se hará tú entrega.");
    $("#cantidad_platillo").css("display","block");
    $("#input_cantidad_platillo").css("display","none");

}


function cerrarBuscadores(){
    $('.search_platillos_cuadros').hide();
    $('.search_platillos_hor').hide();
    $('.search_restaurantes_cuadros').hide();
    $('.search_restaurantes_hor').hide();
    $('.search_bebidas_frias_c').hide();
    $('.search_bebidas_frias_h').hide();
    $('.search_bebidas_calientes_c').hide();
    $('.search_bebidas_calientes_h').hide();
    $('.search_buffet_c').hide();
    $('.search_buffet_h').hide();
    $('.search_frutas_c').hide();
    $('.search_frutas_h').hide();
    $('.search_desayunos_c').hide();
    $('.search_desayunos_h').hide();
    $('.search_hamburguesas_c').hide();
    $('.search_hamburguesas_h').hide();
    $('.search_pescado_c').hide();
    $('.search_pescado_h').hide();
    $('.search_pizza_c').hide();
    $('.search_pizza_h').hide();
    $('.search_pollo_c').hide();
    $('.search_pollo_h').hide();
    $('.search_reposteria_h').hide();
    $('.search_reposteria_c').hide();
    $('.search_res_h').hide();
    $('.search_res_c').hide();
    $('.search_sushi_h').hide();
    $('.search_sushi_c').hide();
    $('.search_tacos_h').hide();
    $('.search_tacos_c').hide();
    $('.search_verduras_h').hide();
    $('.search_verduras_c').hide();
    $('.search_botana_h').hide();
    $('.search_botana_c').hide();
    $('.search_eventos_h').hide();
    $('.search_eventos_c').hide();
    $('.search_misuper_h').hide();
    $('.search_misuper_c').hide();
    $('.search_helados_h').hide();
    $('.search_helados_c').hide();
    $('.search_dulces_h').hide();
    $('.search_dulces_c').hide(); 
}