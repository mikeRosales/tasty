function bebidasCalientes(){
	$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#bebidas_calientes_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==2) {
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
            }; 

            });     
        }
    });
}

function bebidasFrias(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#bebidas_frias_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==1) {
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
            }; 

            });     
        }
    });
}

function botana(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#botana_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==15) {
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
            }; 

            });     
        }
    });
}

function buffet(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#buffet_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==3) {
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
            }; 

            });     
        }
    });
}

function desayunos(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#desayunos_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==5) {
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
            }; 

            });     
        }
    });
}

function dulces(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#dulces_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==20) {
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
            }; 

            });     
        }
    });
}

function eventosEsp(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#eventos_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==16) {
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
            }; 

            });     
        }
    });
}

function frutas(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#frutas_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==4) {
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
            }; 

            });     
        }
    });
}

function hamburguesas(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#hamburguesas_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==6) {
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
            }; 

            });     
        }
    });
}

function helados(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#helados_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==19) {
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
            }; 

            });     
        }
    });
}

function miSuper(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#misuper_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==17) {
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
            }; 

            });     
        }
    });
}

function pescado(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#pescado_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==7) {
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
            }; 

            });     
        }
    });
}

function pizza(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#pizza_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==8) {
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
            }; 

            });     
        }
    });
}

function pollo(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#pollo_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==9) {
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
            }; 

            });     
        }
    });
}

function reposteria(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#reposteria_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==10) {
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
            }; 

            });     
        }
    });
}

function res(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#res_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==11) {
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
            }; 

            });     
        }
    });
}

function sushi(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#sushi_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==12) {
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
            }; 

            });     
        }
    });
}

function tacos(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#tacos_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==13) {
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
            }; 

            });     
        }
    });
}

function verduras(){
		$.ajax({
        type: 'get',
        url: 'http://www.tastyfoods.com.mx/users/alimentos',                
        dataType: 'json',               
        success: function (data) {  
            var contador=20;
            $("#verduras_horizontal").empty();  
            $(data).each(function (index, data) { 
            if (data.id_categoria==14) {
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
            }; 

            });     
        }
    });
}

$(document).ready(function(){
	$("#opt_bebidas_frias").on("click", function(){
	        cerrarBuscadores();
	        $('.search_bebidas_frias_h').show();
	    });

	    $("#vista_bfrias_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_bebidas_frias_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#bebidas_frias_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==1) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#vista_bfrias_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_bebidas_frias_h').show();
	    });

	    $("#opt_bebidas_calientes").on("click", function(){
	        cerrarBuscadores();
	        $('.search_bebidas_calientes_h').show();
	    });

	    $("#vista_bcal_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_bebidas_calientes_h').show();
	    });

	    $("#vista_bcal_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_bebidas_calientes_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#bebidas_calientes_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==2) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_buffet").on("click", function(){
	        cerrarBuscadores();
	        $('.search_buffet_h').show();
	    });

	     $("#vista_buffet_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_buffet_h').show();
	    });

	    $("#vista_buffet_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_buffet_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#buffet_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==3) {
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
                	};
                    
                    }); 
                }
            });

	    });

	    $("#opt_frutas").on("click", function(){
	        cerrarBuscadores();
	        $('.search_frutas_h').show();
	    });

	    $("#vista_frutas_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_frutas_h').show();
	    });

	    $("#vista_frutas_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_frutas_c').show();

	        	$.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#frutas_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==4) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_desayunos").on("click", function(){
	        cerrarBuscadores();
	        $('.search_desayunos_h').show();
	    });

	    $("#vista_desayunos_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_desayunos_h').show();
	    });

	    $("#vista_desayunos_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_desayunos_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#desayunos_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==5) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_hamburguesas").on("click", function(){
	        cerrarBuscadores();
	        $('.search_hamburguesas_h').show();
	    });

	    $("#vista_hamburguesas_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_hamburguesas_h').show();
	    });

	    $("#vista_hamburguesas_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_hamburguesas_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#hamburguesas_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==6) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_pescado").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pescado_h').show();
	    });

	    $("#vista_pescado_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_hamburguesas_h').show();
	    });

	    $("#vista_pescado_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pescado_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#pescado_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==7) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_pizza").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pizza_h').show();

	    });

	    $("#vista_pizza_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pizza_h').show();
	    });

	    $("#vista_pizza_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pizza_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#pizza_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==8) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_pollo").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pollo_h').show();
	    });

	    $("#vista_pollo_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pollo_h').show();
	    });

	    $("#vista_pollo_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_pollo_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#pollo_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==9) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_reposteria").on("click", function(){
	        cerrarBuscadores();
	        $('.search_reposteria_h').show();
	    });

	    $("#vista_reposteria_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_reposteria_h').show();
	    });

	    $("#vista_reposteria_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_reposteria_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#reposteria_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==10) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_res").on("click", function(){
	        cerrarBuscadores();
	        $('.search_res_h').show();
	    });

	    $("#vista_res_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_res_h').show();
	    });

	    $("#vista_res_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_res_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#res_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==11) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_sushi").on("click", function(){
	        cerrarBuscadores();
	        $('.search_sushi_h').show();
	    });

	    $("#vista_sushi_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_sushi_h').show();
	    });

	    $("#vista_sushi_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_sushi_c').show();


	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#sushi_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==12) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_tacos").on("click", function(){
	        cerrarBuscadores();
	        $('.search_tacos_h').show();
	    });

	     $("#vista_tacos_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_tacos_h').show();
	    });

	     $("#vista_tacos_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_tacos_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#tacos_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==13) {
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
                	};
                    
                    }); 
                }
            });
	    });

	     $("#opt_verduras").on("click", function(){
	        cerrarBuscadores();
	        $('.search_verduras_h').show();
	    });

	    $("#vista_verduras_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_verduras_h').show();
	    });

	    $("#vista_verduras_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_verduras_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#verduras_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==14) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_botana").on("click", function(){
	        cerrarBuscadores();
	        $('.search_botana_h').show();
	    });

	    $("#vista_botana_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_botana_h').show();
	    });

	     $("#vista_botana_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_botana_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#botana_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==15) {
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
                	};
                    
                    }); 
                }
            });


	    });

	    $("#opt_eventos").on("click", function(){
	        cerrarBuscadores();
	        $('.search_eventos_h').show();
	    });

	     $("#vista_eventos_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_eventos_h').show();
	    });

	    $("#vista_eventos_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_eventos_c').show();

	       	$.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#eventos_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==16) {
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
                	};
                    
                    }); 
                }
            });
	    });

	    $("#opt_misuper").on("click", function(){
	        cerrarBuscadores();
	        $('.search_misuper_h').show();
	    });

	    $("#vista_misuper_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_misuper_h').show();
	    });

	     $("#vista_misuper_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_misuper_c').show();
	        	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#misuper_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==17) {
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
                	};
                    
                    }); 
                }
            });
	    });

	     $("#opt_helados").on("click", function(){
	        cerrarBuscadores();
	        $('.search_helados_h').show();
	    });

	    $("#vista_helados_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_helados_h').show();
	    });

	     $("#vista_helados_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_helados_c').show();


	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#helados_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==19) {
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
                	};
                    
                    }); 
                }
            });
	    });

	     $("#opt_dulces").on("click", function(){
	        cerrarBuscadores();
	        $('.search_dulces_h').show();
	    });

	    $("#vista_dulces_h").on("click", function(){
	        cerrarBuscadores();
	        $('.search_dulces_h').show();
	    });

	     $("#vista_dulces_c").on("click", function(){
	        cerrarBuscadores();
	        $('.search_dulces_c').show();

	        $.ajax({
                type: 'get',
                url: 'http://www.tastyfoods.com.mx/users/alimentos',                
                dataType: 'json',               
                success: function (data) {  

                $("#dulces_cuadros").empty();  
                var contador=20;
                $(data).each(function (index, data) {
                	if (data.id_categoria==20) {
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
                	};
                    
                    }); 
                }
            });
	    });
	});


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