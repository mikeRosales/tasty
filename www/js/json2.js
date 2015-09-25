 $(document).ready(function(){
 	$("#login").on("click", function(){
 		// signIn();
        window.location.assign("content.html");
    });

    $("#register").on("click", function(){
        signUp();
    });
 
 });

//REGISTRO DEL USUARIO
function signUp(){
    //Verificar que todos los campos tengan valores
    if ($("#nombre").val()=="" || $("#apellidos").val()=="" || $("#reg_correo").val()=="" || $("#edad").val()=="" || $("#codigo_postal").val()=="" || $("#sexo").val()=="" || $("#reg_password").val()=="" || $("#confirmpassword").val()=="" )
    {
        var opts={
            message:"Todos los campos son requeridos",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"error"
        };
        $.afui.toast(opts);
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

        $("#Nombre").val(" ");
    	$("#apellidos").val(" ");
    	$("#reg_correo").val(" ");
		$("#reg_password").val(" ");
		$("#confirmpassword").val(" ");
		$("#edad").val(" ");
		$("#sexo").val(" ");
		$("#codigo_postal").val(" ");
				
		$.ajax({type: "POST", 
			url: "users/registro", //CAMBIAR URL
            data: ({nombre: nombre, apellidos: apellidos, correo: correo, password: password, edad: edad, sexo: sexo, codigo_postal: codigo_postal}),
            cache: false,
            dataType: "text"
        });

        //Registro exitoso
        var opts={
            message:"¡Bienvenid@ a Umami!",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"success"
        };
        $.afui.toast(opts);
        window.location.assign("../content.html");
    }
    //Contraseñas no coinciden
    else {
        var opts={
            message:"Las contraseñas deben coincidir",
            position:"tc",
            delay:2000,
            autoClose:true,
            type:"error"
        };
        $.afui.toast(opts);
    }
}


function init() {
// PLATILLOS





//TODOS LOS PLATILLOS DEL RESTAURANTE SELECCIONADO

//CATEGORIAS
	$.getJSON('/users/categorias',function(data){
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#categorias").append(
				"<li>"+
					"<a href='item_categorias' id="+data.id_categoria+">"+data.nombre+"</a>"+
				"</li>");
		});
	});

//CATEGORIA Bebidas frias
	$.getJSON('/users/bebidas',function(data){ //bebidas frias
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#bebidas_frias").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_bebidas_frias+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Bebidas calientes
	$.getJSON('/users/bebidas',function(data){ //bebidas calientes
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#bebidas_calientes").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_bebidas_calientes+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Buffet
	$.getJSON('/users/buffet',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#buffet").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_buffet+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Frutas
	$.getJSON('/users/frutas',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#frutas").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_frutas+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Huevos
	$.getJSON('/users/huevos',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#huevos").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_huevos+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Hamburguesas
	$.getJSON('/users/hamburguesas',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#hamburguesas").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_hamburguesas+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Pescado
	$.getJSON('/users/pescado',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#pescado").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_pescado+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Pizza
	$.getJSON('/users/pizza',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#pizza").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_pizza+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Pollo
	$.getJSON('/users/pollo',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#pollo").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_pollo+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Reposteria
	$.getJSON('/users/reposteria',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#reposteria").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_reposteria+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Res
	$.getJSON('/users/res',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#res").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_res+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Sushi
	$.getJSON('/users/sushi',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#sushi").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_sushi+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Tacos
	$.getJSON('/users/tacos',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#tacos").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_tacos+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Verduras
	$.getJSON('/users/verduras',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#verduras").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_verduras+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//CATEGORIA Botana
	$.getJSON('/users/botana',function(data){ 
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#botana").append(
				"<li>"+
                    "<div class='grid-photo-box'>"+
                        "<a href='#page6' id="+data.id_botana+"><img src="+data.imagen+"/></a>"+
                    "</div>"+
                    "</li>"+
				"<li>");
		});
	});

//DINERO
	$.getJSON('/users/platillos',function(data){
	console.log(JSON.stringify(data));
						
		$(data).each(function (index, data) {   
			$("#dinero").append(
				"<li class='lista_dinero' id="+data.id_platillo+">"+
                    "<div class='grid-photo-box img-restaurant'>"+
                    	"<a href='#'><img src="+data.imagen+" /></a>"+
                    "</div>"+
                    "<div class='swipe-content'>"+
                        "<p class='d_text'><b>"+data.nombre+"</b><br>$"+data.precio+"</p>"+
                    "</div>"+
                "</li>")
		});	
			  
	});

//TODOS LOS PLATILLOS DE ACUERDO AL RANGO DE DINERO

//ALIMENTO - PRODUCTO

}

//TODOS LOS PLATILLOS DEL RESTAURANTE SELECCIONADO
function res_platillos(id_restaurante){
    id_restaurante = $(id_restaurante).text();
    console.log(id_restaurante);
}

