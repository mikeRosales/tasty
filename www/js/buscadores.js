
function buscarPlatillosHor(){
    // var search_platillos_hor = $("#search_platillos_hor").val();
     $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#platillos_horizontal").empty();  
                var contador=20;
                $(data).each(function (index, data) { 
                    if ($("#search_platillos_hor").val()==data.nombreP) {
                        //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                        // alert(data.nombreP);
                        $("#platillos_horizontal").append(
                            "<li class='lista_platillo opcion' onclick='cerrarBuscadores()'>"+
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
                                            "<input type='radio' id='"+contador+"optionbh-1' name='accordion-group'/>"+
                                            "<label for='"+contador+"optionbh-1' >Descripción</label>"+
                                            "<article>"+
                                                "<p id='descripcion'>"+data.descripcion+"</p>"+
                                            "</article>"+
                                        "</div>"+
                                        "<div>"+
                                            "<input type='radio' id='"+contador+"optionbh-2' name='accordion-group' />"+
                                            "<label for='"+contador+"optionbh-2'>Restaurante</label>"+
                                            "<article>"+
                                                "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                            "</article>"+
                                        "</div>"+
                                        "<div>"+
                                            "<input type='radio' id='"+contador+"optionbh-3' name='accordion-group'/>"+
                                            "<label for='"+contador+"optionbh-3' id='btn_direccion'>Direccion</label>"+
                                            "<article>"+
                                                "<p id='direccion'>"+data.direccion+"</p>"+
                                            "</article>"+
                                        "</div>"+
                                        "<div>"+
                                            "<input type='radio' id='"+contador+"optionbh-4' name='accordion-group'/>"+
                                            "<label for='"+contador+"optionbh-4' id='btn_telefono'>Teléfono</label>"+
                                            "<article>"+
                                                "<p id='telefono'>"+data.telefono+"</p>"+
                                            "</article>"+
                                        "</div>"+
                                        "<div>"+
                                            "<input type='radio' id='"+contador+"optionbh-5' name='accordion-group'/>"+
                                            "<label for='"+contador+"optionbh-5'>Tiempo de entrega</label>"+
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
                                    "</section>"+
                                    "</div>"+
                                "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>");
                                contador++;
                    }else if($("#search_platillos_hor").val()==""){
                                            //TODOS LOS PLATILLOS VISTA HORIZONTAL
                        $("#platillos_horizontal").append(
                            "<li class='lista_platillo opcion' oonclick='cerrarBuscadores()'>"+
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
                                    "</section>"+
                                    "</div>"+
                                "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>");
                        contador++;
                            }        
                        }); 
                    }
                });
}

function buscarPlatillosCua(){
    var search_platillos_cuadros = $("#search_platillos_cuadros").val();

        $.ajax({
            type: 'get',
            url: 'http://www.tastyfoods.com.mx/users/alimentos',                
            dataType: 'json',               
            success: function (data) {  

                $("#platillos_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) { 

    if ($("#search_platillos_cuadros").val()==data.nombreP) {
        //TODOS LOS PLATILLOS VISTA CUADROS
                $("#platillos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                    "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
        
    }else if($("#search_platillos_cuadros").val()==""){
        //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                $("#platillos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                    "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                            }        
                        }); 
                    }
                });
}


function buscarRestaurantesCua(){
    var search_restaurantes_cuadros = $("#search_restaurantes_cuadros").val();
            $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/restaurantes',             
                dataType: 'json',               
                success: function (data) {  
                    
                    $("#restaurantes_cuadros").empty();  
                $(data).each(function (index, data) {  
                if ($("#search_restaurantes_cuadros").val()==data.nombre) {
                    $("#restaurantes_cuadros").append(
                        "<li onclick='res_platillos("+data.id+");' >"+
                            "<div class='grid-photo-box' id="+data.id+" onclick='cerrarBuscadores()'>"+
                            "<a href='#item_restaurante'><img src="+'http://www.tastyfoods.com.mx/'+data.imagenR+" /></a>"+
                            "</div>"+
                        "</li>");
                       
            
                        
                }else if ($("#search_restaurantes_cuadros").val()==""){
                    $("#restaurantes_cuadros").append(
                        "<li onclick='res_platillos("+data.id+");' >"+
                            "<div class='grid-photo-box' id="+data.id+" onclick='cerrarBuscadores()'>"+
                            "<a href='#item_restaurante'><img src="+'http://www.tastyfoods.com.mx/'+data.imagenR+" /></a>"+
                            "</div>"+
                        "</li>");

                }
        });    
        } 
    });
}

function buscarRestaurantesHor(){
    var search_restaurantes_hor = $("#search_restaurantes_hor").val();
            $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/restaurantes',             
                dataType: 'json',               
                success: function (data) {  
                    
                    $("#restaurantes").empty();  
                $(data).each(function (index, data) {  
                if ($("#search_restaurantes_hor").val()==data.nombre) {
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
                       
            
                        
                }else if ($("#search_restaurantes_hor").val()==""){
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

                }
        });    
        } 
    });
}

function buscarFriasCua(){
        $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#bebidas_frias_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==1) {
                if ($("#search_bfrias_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#bebidas_frias_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }else if ($("#search_bfrias_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#bebidas_frias_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 
                }          
            }; 
        });     
        }
    });
}

function buscarFriasHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#bebidas_frias_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==1) {
                if ($("#search_bfrias_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#bebidas_frias_horizontal").append(
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
                }else if ($("#search_bfrias_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#bebidas_frias_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarCalientesCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#bebidas_calientes_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==2) {
                if ($("#search_bcal_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#bebidas_calientes_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 
                }else if ($("#search_bcal_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#bebidas_calientes_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                contador++; 
                }          
            }; 
        });     
        }
    });
}

function buscarCalientesHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#bebidas_calientes_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==2) {
                if ( $("#search_bcal_h").val()==data.nombreP) {
                //TODOS LOS PLATILLOS VISTA HORIZONTAL
                $("#bebidas_calientes_horizontal").append(
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
            }else if( $("#search_bcal_h").val()==""){
                //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                $("#bebidas_calientes_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarBuffetCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#buffet_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==3) {
                if ($("#search_buffet_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#buffet_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 
                }else if ($("#search_buffet_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#buffet_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 
                }          
            }; 
        });     
        }
    });
}

function buscarBuffetHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#buffet_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==3) {
                if ($("#search_buffet_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                     $("#buffet_horizontal").append(
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
                }else if ($("#search_buffet_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                     $("#buffet_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarFrutasCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#frutas_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==4) {
                if ($("#search_frutas_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#frutas_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_frutas_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#frutas_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }          
            }; 
        });     
        }
    });
}

function buscarFrutasHor(){
    var search_frutas_h = $("#search_frutas_h").val();
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#frutas_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==4) {
                if ($("#search_frutas_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#frutas_horizontal").append(
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

                }else if ($("#search_frutas_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#frutas_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarDesayunosCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#desayunos_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==5) {
                if ($("#search_desayunos_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#desayunos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ( $("#search_desayunos_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#desayunos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }          
            }; 
        });     
        }
    });
}

function buscarDesayunosHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#desayunos_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==5) {
                if ($("#search_desayunos_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#desayunos_horizontal").append(
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

                }else if ( $("#search_desayunos_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#desayunos_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarHambCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#hamburguesas_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==6) {
                if ($("#search_hamburguesas_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#hamburguesas_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_hamburguesas_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#hamburguesas_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }          
            }; 
        });     
        }
    });
}

function buscarHambHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#hamburguesas_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==6) {
                if ($("#search_hamburguesas_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#hamburguesas_horizontal").append(
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

                }else if ($("#search_hamburguesas_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS

                    $("#hamburguesas_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarPescadoCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#pescado_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==7) {
                if ($("#search_pescado_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#pescado_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_pescado_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#pescado_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }          
            }; 
        });     
        }
    });
}

function buscarPescadoHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#pescado_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==7) {
                if ($("#search_pescado_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#pescado_horizontal").append(
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
                }else if ($("#search_pescado_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS

                    $("#pescado_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarPizzaCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#pizza_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==8) {
                if ($("#search_pizza_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#pizza_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }else if ($("#search_pizza_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#pizza_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }          
            }; 
        });     
        }
    });
}

function buscarPizzaHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#pizza_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==8) {
                if ($("#search_pizza_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#pizza_horizontal").append(
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
                }else if ($("#search_pizza_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#pizza_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarPolloCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#pollo_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==9) {
                if ($("#search_pollo_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#pollo_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }else if ($("#search_pollo_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#pollo_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }          
            }; 
        });     
        }
    });
}

function buscarPolloHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#pollo_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==9) {
                if ($("#search_pollo_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                     $("#pollo_horizontal").append(
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

                }else if ($("#search_pollo_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                     $("#pollo_horizontal").append(
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

                }          
            }; 
        });     
        }
    });
}

function buscarReposCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#reposteria_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==10) {
                if ($("#search_reposteria_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#reposteria_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_reposteria_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#reposteria_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }          
            }; 
        });     
        }
    });
}

function buscarReposHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#reposteria_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==10) {
                if ($("#search_reposteria_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#reposteria_horizontal").append(
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

                }else if ($("#search_reposteria_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#reposteria_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarResCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#res_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==11) {
                if ($("#search_res_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#res_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }else if ($("#search_res_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#res_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }          
            }; 
        });     
        }
    });
}

function buscarResHor(){
    var search_res_h = $("#search_res_h").val();
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#res_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==11) {
                if ($("#search_res_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#res_horizontal").append(
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

                }else if ($("#search_res_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#res_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarSushiCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#sushi_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==12) {
                if ($("#search_sushi_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#sushi_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }else if ($("#search_sushi_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#sushi_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }          
            }; 
        });     
        }
    });
}

function buscarSushiHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#sushi_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==12) {
                if ($("#search_sushi_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#sushi_horizontal").append(
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

                }else if ($("#search_sushi_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#sushi_horizontal").append(
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

                }          
            }; 
        });     
        }
    });
}

function buscarTacosHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#tacos_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==13) {
                if ($("#search_tacos_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#tacos_horizontal").append(
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

                }else if ($("#search_tacos_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#tacos_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarTacosCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#tacos_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==13) {
                if ($("#search_tacos_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#tacos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_tacos_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#tacos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;
                }          
            }; 
        });     
        }
    });
}

function buscarVerdurasCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#verduras_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==14) {
                if ($("#search_verduras_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#verduras_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }else if ($("#search_verduras_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#verduras_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 
                }          
            }; 
        });     
        }
    });
}

function buscarVerdurasHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#verduras_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==14) {
                if ($("#search_verduras_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#verduras_horizontal").append(
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
                }else if ($("#search_verduras_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#verduras_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarBotanaCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#botana_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==15) {
                if ($("#search_botana_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#botana_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 
                }else if ($("#search_botana_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#botana_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                contador++; 
                }          
            }; 
        });     
        }
    });
}

function buscarBotanaHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#botana_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==15) {
                if ($("#search_botana_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                     $("#botana_horizontal").append(
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

                }else if ($("#search_botana_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS

                     $("#botana_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarEventosCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#eventos_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==16) {
                if ($("#search_eventos_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#eventos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_eventos_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#eventos_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }          
            }; 
        });     
        }
    });
}

function buscarEventosHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#eventos_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==16) {
                if ($("#search_eventos_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#eventos_horizontal").append(
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

                }else if ($("#search_eventos_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#eventos_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarSuperCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#misuper_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==17) {
                if ($("#search_misuper_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#misuper_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }else if ($("#search_misuper_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#misuper_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }          
            }; 
        });     
        }
    });
}

function buscarSuperHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#misuper_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==17) {
                if ($("#search_misuper_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#misuper_horizontal").append(
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
                }else if ($("#search_misuper_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#misuper_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarHeladosCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#helados_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==19) {
                if ($("#search_helados_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#helados_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }else if ($("#search_helados_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#helados_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++; 

                }          
            }; 
        });     
        }
    });
}

function buscarHeladosHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#helados_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==19) {
                if ($("#search_helados_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#helados_horizontal").append(
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

                }else if ($("#search_helados_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS

                    $("#helados_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}

function buscarDulcesCua(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#dulces_cuadros").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==20) {
                if ($("#search_dulces_c").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO
                    $("#dulces_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }else if ($("#search_dulces_c").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#dulces_cuadros").append(
                    "<li><div class='grid-photo-box prueba' id="+data.id+" onclick='cerrarBuscadores()'>"+
                        "<a href='#page"+contador+"'><img id="+data.id+"  src="+'http://www.tastyfoods.com.mx/'+data.imagen+"/></a>"+
                        "</div></li>");
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
                                    "<input type='radio' id='"+contador+"optionc-1' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-1' >Descripción</label>"+
                                    "<article>"+
                                        "<p id='descripcion'>"+data.descripcion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-2' name='accordion-group' />"+
                                    "<label for='"+contador+"optionc-2'>Restaurante</label>"+
                                    "<article>"+
                                        "<p id='nombre_restaurante'>"+data.nombre+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-3' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-3' id='btn_direccion'>Direccion</label>"+
                                    "<article>"+
                                        "<p id='direccion'>"+data.direccion+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-4' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-4' id='btn_telefono'>Teléfono</label>"+
                                    "<article>"+
                                        "<p id='telefono'>"+data.telefono+"</p>"+
                                    "</article>"+
                                "</div>"+
                                "<div>"+
                                    "<input type='radio' id='"+contador+"optionc-5' name='accordion-group'/>"+
                                    "<label for='"+contador+"optionc-5'>Tiempo de entrega</label>"+
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
                            "</section>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                        contador++;

                }          
            }; 
        });     
        }
    });
}

function buscarDulcesHor(){
    $.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
        var contador=20;
        $("#dulces_horizontal").empty();  
        $(data).each(function (index, data) { 
            if (data.id_categoria==20) {
                if ($("#search_dulces_h").val()==data.nombreP) {
                    //TODOS LOS PLATILLOS DEPENDE DEL DATO INGRESADO

                    $("#dulces_horizontal").append(
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

                }else if ($("#search_dulces_h").val()==""){
                    //TODOS LOS PLATILLOS VISTA CUADROS
                    $("#dulces_horizontal").append(
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
                }          
            }; 
        });     
        }
    });
}