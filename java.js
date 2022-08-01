function descargar(){
    location.href = 'https://www.battle.net/download/getInstallerForGame?os=win&gameProgram=DIABLO_IMMORTAL&version=Live&id=1422495451.1655912458'
}

// mostrando paginas de personajes
    // mostrando paginas de personajes

function mostrar_cazador() {
    document.getElementById('pagina_cazador').style.display = ("block");
    document.getElementById('cont-personajes').style.display = ('none')
    document.getElementById('carrusel').style.display =('none')
    }


    // mostrando paginas de personajes
    // mostrando paginas de personajes


    //mostrando inf de la pagina
let animado = document.querySelectorAll(".animado");

function mostrar_inf() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity = 1;
        } 
    }
}

window.addEventListener('scroll', mostrar_inf);

    //mostrando inf de la pagina


    //calcular build

    //cerrar los formularios
function cerrar_form (){
    document.getElementById('cont-form').style.display = ('none');
    document.getElementById('boton-casc1').style.display = ('none');
    document.getElementById('boton-pecho1').style.display = ('none');
    document.getElementById('boton-hombrera1').style.display = ('none');
    document.getElementById('boton-armpri1').style.display = ('none');
    document.getElementById('boton-armsec1').style.display = ('none');
}

    //cerrar y abrir los formularios

// casco--------------------------------------

function form_casc1(){
    document.getElementById('cont-form').style.display = ('block');
    document.getElementById('img-casc1').style.backgroundImage = ('none');
    document.getElementById('boton-casc1').style.display = ('block');
}


function agregar_casc1(){
    // valor de la lista de diferentes tipos
    let SelectCasc = document.getElementById('select_family');
    var casc1 = SelectCasc.value;


    //poner imagen y nombre del tipo en la tabla

        if (casc1 === 'op1'){
            document.getElementById('img-casc1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/vision-de-los-perdidos.png")');
            document.getElementById('infcasc1').innerHTML= 'vision de los perdidos';
        }
        else if (casc1 === 'op2'){
            document.getElementById('img-casc1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/capuz-de-odio-concentrado.png")');
            document.getElementById('infcasc1').innerHTML= 'capuz de odio concentrado';
        }
        else if (casc1 === 'op3'){
            document.getElementById('img-casc1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/ingenuidad-ilimitada.png")');
            document.getElementById('infcasc1').innerHTML= 'Ingenuidad ilimitada';
        }

    // sacar el valor de cada atributo
    var fue_casc1 =document.getElementById('fue').value;
    var vit_casc1 =document.getElementById('vit').value;
    var des_casc1 =document.getElementById('des').value;
    var int_casc1 =document.getElementById('int').value;

    //escrobor el valor de los atributos en la tabla
    document.getElementById('dat-fue-casc1').innerHTML= fue_casc1;
    document.getElementById('dat-vit-casc1').innerHTML= vit_casc1;
    document.getElementById('dat-des-casc1').innerHTML= des_casc1;
    document.getElementById('dat-int-casc1').innerHTML= int_casc1;

    document.getElementById('cont-form').style.display = ('none');
    document.getElementById('boton-casc1').style.display = ('none');

    return fue_casc1, vit_casc1, des_casc1, int_casc1;
}

// 

// pecho--------------------------------------

function form_pecho1(){
    document.getElementById('cont-form').style.display = ('block');
    document.getElementById('img-pecho1').style.backgroundImage = ('none');
    document.getElementById('boton-pecho1').style.display = ('block');
}

function agregar_pecho1(){
    // valor de la lista de diferentes tipos
    let SelectPech = document.getElementById('select_family');
    var pech1 = SelectPech.value;

    //poner imagen y nombre del tipo en la tabla

        if (pech1 === 'op1'){
            document.getElementById('img-pecho1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/corazon-de-venganza.png")');
            document.getElementById('infpech1').innerHTML= 'corazon de venganza';
        }
        else if (pech1 === 'op2'){
            document.getElementById('img-pecho1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/odio-intemperado.png")');
            document.getElementById('infpech1').innerHTML= 'odio intemperado';
        }
        else if (pech1 === 'op3'){
            document.getElementById('img-pecho1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/abrazo-de-la-oscuridad.png")');
            document.getElementById('infpech1').innerHTML= 'abrazo de la oscuridad';
        }

    // sacar el valor de cada atributo
    var fue_pecho1 =document.getElementById('fue').value;
    var vit_pecho1 =document.getElementById('vit').value;
    var des_pecho1 =document.getElementById('des').value;
    var int_pecho1 =document.getElementById('int').value;

    //escrobor el valor de los atributos en la tabla

    document.getElementById('dat-fue-pech1').innerHTML= fue_pecho1;
    document.getElementById('dat-vit-pech1').innerHTML= vit_pecho1;
    document.getElementById('dat-des-pech1').innerHTML= des_pecho1;
    document.getElementById('dat-int-pech1').innerHTML= int_pecho1;

    document.getElementById('boton-pecho1').style.display = ('none');
    document.getElementById('cont-form').style.display = ('none');
}

//

// hombrera--------------------------------------

function form_hombrera1(){
    document.getElementById('cont-form').style.display = ('block');
    document.getElementById('img-hom1').style.backgroundImage = ('none');
    document.getElementById('boton-hombrera1').style.display = ('block');
}


function agregar_hombrera1(){
    // valor de la lista de diferentes tipos
    let SelectHom = document.getElementById('select_family');
    let hom1 = SelectHom.value;

    //poner imagen y nombre del tipo en la tabla

        if (hom1 === 'op1'){
            document.getElementById('img-hom1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/hombros-de-granizo.png")');
            document.getElementById('infhom1').innerHTML='hombros de granizo';
        }
        else if (hom1 === 'op2'){
            document.getElementById('img-hom1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/cubrehombros-del-sajacielos.png")');
            document.getElementById('infhom1').innerHTML='cubrehombros del sajacielos';
        }
        else if (hom1 === 'op3'){
            document.getElementById('img-hom1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/estampida-tifonica-de-vaash.png")');
            document.getElementById('infhom1').innerHTML='estampida tifonica de vaash';
        }

    // sacar el valor de cada atributo
    var fue_hom1 =document.getElementById('fue').value;
    var vit_hom1 =document.getElementById('vit').value;
    var des_hom1 =document.getElementById('des').value;
    var int_hom1 =document.getElementById('int').value;

    //escrobor el valor de los atributos en la tabla
    document.getElementById('dat-fue-hom1').innerHTML= fue_hom1;
    document.getElementById('dat-vit-hom1').innerHTML= vit_hom1;
    document.getElementById('dat-des-hom1').innerHTML= des_hom1;
    document.getElementById('dat-int-hom1').innerHTML= int_hom1;

    document.getElementById('cont-form').style.display = ('none');
    document.getElementById('boton-hombrera1').style.display = ('none');
}

//

// pantalon--------------------------

function form_pantalon1(){
    document.getElementById('cont-form').style.display = ('block');
    document.getElementById('img-pant1').style.backgroundImage = ('none');
    document.getElementById('boton-pantalon1').style.display = ('block');
}

function agregar_pant1(){
    // valor de la lista de diferentes tipos
    let SelectPant = document.getElementById('select_family');
    let pant1 = SelectPant.value;

    //poner imagen y nombre del tipo en la tabla

        if (pant1 === 'op1'){
            document.getElementById('img-pant1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/furia-incansable-de-coff.png")');
            document.getElementById('infpant1').innerHTML='furia incansable de Coff';
        }
        else if (pant1 === 'op2'){
            document.getElementById('img-pant1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/calzas-de-la-exterminadora.png")');
            document.getElementById('infpant1').innerHTML='calzas de la exterminadora';
        }
        else if (pant1 === 'op3'){
            document.getElementById('img-pant1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/faldar-de-la-maestra-alquimista.png")');
            document.getElementById('infpant1').innerHTML='falda de la maestra alquimista';
        }

    // sacar el valor de cada atributo
    var fue_pant1 =document.getElementById('fue').value;
    var vit_pant1 =document.getElementById('vit').value;
    var des_pant1 =document.getElementById('des').value;
    var int_pant1 =document.getElementById('int').value;

    //escrobor el valor de los atributos en la tabla
    document.getElementById('dat-fue-pant1').innerHTML= fue_pant1;
    document.getElementById('dat-vit-pant1').innerHTML= vit_pant1;
    document.getElementById('dat-des-pant1').innerHTML= des_pant1;
    document.getElementById('dat-int-pant1').innerHTML= int_pant1;

    document.getElementById('cont-form').style.display = ('none');
    document.getElementById('boton-pantalon1').style.display = ('none');
}

//

// armpri--------------------------

function form_armpri1(){
    document.getElementById('cont-form').style.display = ('block');
    document.getElementById('img-armpri1').style.backgroundImage = ('none');
    document.getElementById('boton-armpri1').style.display = ('block');
}

function agregar_armpri1(){
    // valor de la lista de diferentes tipos
    let SelectArmpri = document.getElementById('select_family');
    let armpri1 = SelectArmpri.value;

    //poner imagen y nombre del tipo en la tabla

        if (armpri1 === 'op1'){
            document.getElementById('img-armpri1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/indignacion-del-dragon.png")');
            document.getElementById('infarmpri1').innerHTML='indignacion del dragon';
        }
        else if (armpri1 === 'op2'){
            document.getElementById('img-armpri1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/alcance-del-espiritu.png")');
            document.getElementById('infarmpri1').innerHTML='alcance del espiritu';
        }
        else if (armpri1 === 'op3'){
            document.getElementById('img-armpri1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/vara-de-los-ecos.png")');
            document.getElementById('infarmpri1').innerHTML='vara de los ecos';
        }

    // sacar el valor de cada atributo
    var fue_armpri1 =document.getElementById('fue').value;
    var vit_armpri1 =document.getElementById('vit').value;
    var des_armpri1 =document.getElementById('des').value;
    var int_armpri1 =document.getElementById('int').value;

    //escrobor el valor de los atributos en la tabla
    document.getElementById('dat-fue-armpri1').innerHTML= fue_armpri1;
    document.getElementById('dat-vit-armpri1').innerHTML= vit_armpri1;
    document.getElementById('dat-des-armpri1').innerHTML= des_armpri1;
    document.getElementById('dat-int-armpri1').innerHTML= int_armpri1;

    document.getElementById('cont-form').style.display = ('none');
    document.getElementById('boton-armpri1').style.display = ('none');
}

//

// armsec--------------------------

function form_armsec1(){
    document.getElementById('cont-form').style.display = ('block');
    document.getElementById('img-armsec1').style.backgroundImage = ('none');
    document.getElementById('boton-armsec1').style.display = ('block');
}

function agregar_armsec1(){
    // valor de la lista de diferentes tipos
    let SelectArmsec = document.getElementById('select_family');
    let armsec1 = SelectArmsec.value;

    //poner imagen y nombre del tipo en la tabla

        if (armsec1 === 'op1'){
            document.getElementById('img-armsec1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/reprimenda-inapelable.png")');
            document.getElementById('infarmsec1').innerHTML='reprimenta inapelable';
        }
        else if (armsec1 === 'op2'){
            document.getElementById('img-armsec1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/ojo-de-la-tormenta.png")');
            document.getElementById('infarmsec1').innerHTML='ojo de la tormenta';
        }
        else if (armsec1 === 'op3'){
            document.getElementById('img-armsec1').style.backgroundImage = ('url("https://www.diablonext.com/imagenes/guias/di/objetos/iconos/suspiro-de-alivio.png")');
            document.getElementById('infarmsec1').innerHTML='suspiro de alivio';
        }

    // sacar el valor de cada atributo
    var fue_armsec1 =document.getElementById('fue').value;
    var vit_armsec1 =document.getElementById('vit').value;
    var des_armsec1 =document.getElementById('des').value;
    var int_armsec1 =document.getElementById('int').value;

    //escrobor el valor de los atributos en la tabla
    document.getElementById('dat-fue-armsec1').innerHTML= fue_armsec1;
    document.getElementById('dat-vit-armsec1').innerHTML= vit_armsec1;
    document.getElementById('dat-des-armsec1').innerHTML= des_armsec1;
    document.getElementById('dat-int-armsec1').innerHTML= int_armsec1;

    document.getElementById('cont-form').style.display = ('none');
    document.getElementById('boton-armsec1').style.display = ('none');
}


// descargar imagen

