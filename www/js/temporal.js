 $(document).ready(function(){
    cerrarBuscadores();
        // $('.search_platillos_hor').show();

    $("#login").on("click", function(){
        if ($("#correo").val()=="" || $("#password").val()=="") {
            camposObligatorios();
        }else{

        }
        // window.location.assign("publicidad.html");
    });

    $("#cerrar_agrad").on("click", function(){
        window.location.assign("content.html");
    });

    $("#asignar_dom").on("click", function(){
        window.location.assign("envio.html");
    });

    $("#cerrar_agrad_img").on("click", function(){
        window.location.assign("content.html");
    });

    $("#confirmar_reserv").on("click", function(){
        alert_res();
    });

    $("#confirmar_envio").on("click", function(){
        alert_env();
    });

    $("#processPayment_pag").on("click", function(){
        alert_pago();
    });

    $("#cerrar_agrad").on("click", function(){
        $("#publicidad").css("display","none");
    });

    $("#register").on("click", function(){
        // window.location.assign("content.html");
        window.location.assign("valoracion.html");
    });

    $("#cerrar_sesion").on("click", function(){
        window.location.assign("index.html");
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

    $("#btn_reservacion").on("click", function(){
        var myLatLng = {lat: -25.363, lng: 131.044}; //Sacarlas de la bd

          var mapa_reserv = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 16,
            center: myLatLng
          });

          var marker_Reserv = new google.maps.Marker({
            position: myLatLng,
            map: mapa_reserv,
          });
    });

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

     $("#opt_bebidas_frias").on("click", function(){
        cerrarBuscadores();
        $('.search_bebidas_frias_h').show();
    });

    $("#vista_bfrias_c").on("click", function(){
        cerrarBuscadores();
        $('.search_bebidas_frias_c').show();
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
    });

    $("#vista_pcuadros").on("click", function(){
        cerrarBuscadores();
        $('.search_platillos_hor').show();
    });

    $("#vista_phor").on("click", function(){
        cerrarBuscadores();
        $('.search_platillos_cuadros').show();
    });

    $("#vista_rcuadros").on("click", function(){
        cerrarBuscadores();
        $('.search_restaurantes_hor').show();
    });

    $("#vista_rhor").on("click", function(){
        cerrarBuscadores();
        $('.search_restaurantes_cuadros').show();
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
    });

    $("#tab5").on("click", function(){
        cerrarBuscadores();
    });

    $(".grid-photo-box").on("click", function(){
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

      
function showPopupLimEst() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_starO_36.png'><img id='star2' src='img/ic_starO_36.png'><img id='star3' src='img/ic_starO_36.png'><img id='star4' src='img/ic_starC_36.png'><img id='star5' src='img/ic_starC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function showPopupLimChi() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_starO_36.png'><img id='star2' src='img/ic_starO_36.png'><img id='star3' src='img/ic_starO_36.png'><img id='star4' src='img/ic_starC_36.png'><img id='star5' src='img/ic_starC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function showPopupLimSal() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_starO_36.png'><img id='star2' src='img/ic_starO_36.png'><img id='star3' src='img/ic_starO_36.png'><img id='star4' src='img/ic_starC_36.png'><img id='star5' src='img/ic_starC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function showPopupLimDul() {
    $.afui.popup({
        title: "Sabor del platillo",
        message: "<img id='star1' src='img/ic_starO_36.png'><img id='star2' src='img/ic_starO_36.png'><img id='star3' src='img/ic_starO_36.png'><img id='star4' src='img/ic_starC_36.png'><img id='star5' src='img/ic_starC_36.png'>",
        cancelText: "Cerrar",
        cancelCallback: function () {}
    });
}

function alert_res() {
    $.afui.popup({
        title: "¡Muchas gracias!",
        message: "En unos momentos mas recibirás la confirmación de tu reservación.",
        cancelText: "Aceptar",
        cancelCallback: function () {
            // document.getElementById("confirmar_reserv").href = "#vista_horizontal";
        },
        cancelOnly: false
    });
}

function alert_env() {
    $.afui.popup({
        title: "¡Muchas gracias!",
        message: "En unos momentos mas recibirás la confirmación de tu pedido.",
        cancelText: "Aceptar",
        cancelCallback: function () {
            // document.getElementById("confirmar_envio").href = "#vista_horizontal";
        },
        cancelOnly: false
    });
}

function alert_pago() {
    $.afui.popup({
        title: "¡Muchas gracias!",
        message: "En unos momentos mas llegara tu pedido.",
        cancelText: "Aceptar",
        cancelCallback: function () {
            document.getElementById("processPayment_pag").href = "#vista_horizontal";
        },
        cancelOnly: false
    });
}


function showCustomHtmlSheet() {
    $.afui.actionsheet('<img id="img_platillo" src="img/Logo_1.0[1].png">');
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

function camposObligatorios(){
    var opts={
        message:"Todos los campos son requeridos",
        position:"tc",
        delay:2000,
        autoClose:true,
        type:"error"
    };
    $.afui.toast(opts);
}

