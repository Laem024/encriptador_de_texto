document.querySelector(".encriptador__resultado__contenedor-entriptado").style.display = "none";

function cambiar_ventana() {
    document.querySelector(".encriptador__resultado__contenedor").style.display = "none";
            
    document.querySelector(".encriptador__resultado__contenedor-entriptado").style.display = "flex";

    return;
}

function validar_texto(texto) {
    let advertencia = document.getElementById('advertencia_encri');
    if(texto == ""){
        advertencia.innerText = 'El texto esta vacío.'; 
        advertencia.classList.add("encriptador__original__advertencia_p-invalid"); 
        return false;
    }else{
        const regex = /^[a-z\s¡!]+$/;
        if (!regex.test(texto)) {
            advertencia.innerText = 'El texto contiene caracteres no permitidos.';
            advertencia.classList.add("encriptador__original__advertencia_p-invalid");
            return false;
        } else {
            advertencia.innerText = 'El texto está correcto.';
            advertencia.classList.remove("encriptador__original__advertencia_p-invalid");
            return true;
        }
    }
}

function encriptar() {
    const mensaje = document.getElementById("encriptar_texto").value;

    let mensaje_new = '';
    if(validar_texto(mensaje))
    {
        const tam = mensaje.length;
        for(i=0; i<tam; i++){
            if(mensaje[i] === 'a'){
                mensaje_new = mensaje_new.concat("ai");
            }else if(mensaje[i] === 'e'){
                mensaje_new = mensaje_new.concat("enter");
            }else if(mensaje[i] === 'i'){
                mensaje_new = mensaje_new.concat("imes");
            }else if(mensaje[i] === 'o'){
                mensaje_new = mensaje_new.concat("ober");
            }else if(mensaje[i] === 'u'){
                mensaje_new = mensaje_new.concat("ufat");
            }else{
                mensaje_new = mensaje_new.concat(mensaje[i]);
            }
        }
        cambiar_ventana();
    }

    document.getElementById("texto_encriptado").value = mensaje_new;
}


function desencriptar() {

    const mensaje = document.getElementById("encriptar_texto").value;
    let mensaje_new = '';
    
    if(validar_texto(mensaje))
    {
        mensaje_new = mensaje;
        const tam = mensaje.length;
        for(i=0; i<tam; i++){
            mensaje_new = mensaje_new.replace("enter", "e")
            mensaje_new = mensaje_new.replace("imes", "i")
            mensaje_new = mensaje_new.replace("ai", "a")
            mensaje_new = mensaje_new.replace("ober", "o")
            mensaje_new = mensaje_new.replace("ufat", "u")
        }

        cambiar_ventana("desencriptar_btn");
    }

    document.getElementById("texto_encriptado").value = mensaje_new;
}

function copiar_txt() {
    let textarea = document.getElementById("texto_encriptado");
    textarea.select();
    document.execCommand("copy");
}