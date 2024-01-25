function encriptar(){
    var textoOriginal = document.getElementById("texto").value;
    var textoEncriptado = textoOriginal;

    for (var i = 0; i < textoOriginal.length; i++){
        if (textoOriginal[i] == "a"){
            textoEncriptado = textoEncriptado.replace("a", "ai");
        }
        if (textoOriginal[i] == "e"){
            textoEncriptado = textoEncriptado.replace("e", "enter");
        }
        if (textoOriginal[i] == "i"){
            textoEncriptado = textoEncriptado.replace("i", "imes");
        }
        if (textoOriginal[i] == "o"){
            textoEncriptado = textoEncriptado.replace("o", "ober");
        }
        if (textoOriginal[i] == "u"){
            textoEncriptado = textoEncriptado.replace("u", "ufat");
        }
    }

    document.getElementById('mensaje-encriptado').innerHTML = '<h2 id="titulo-encriptado">Texto encriptado:</h2><p>' + textoEncriptado + '</p>';
}

function desencriptar() {
    var textoEncriptado = document.getElementById('texto').value;
    var textoOriginal = textoEncriptado;

    textoOriginal = textoOriginal.replace(/ufat/g, "u");
    textoOriginal = textoOriginal.replace(/ober/g, "o");
    textoOriginal = textoOriginal.replace(/imes/g, "i");
    textoOriginal = textoOriginal.replace(/enter/g, "e");
    textoOriginal = textoOriginal.replace(/ai/g, "a");

    document.getElementById('mensaje-encriptado').innerHTML = '<h2 id="titulo-encriptado">Texto desencriptado:</h2><p>' + textoOriginal + '</p>';
}

function copiar() {
    var mensajeEncriptado = document.getElementById('mensaje-encriptado').getElementsByTagName('p')[0].innerText;
    var textarea = document.createElement('textarea');
    textarea.value = mensajeEncriptado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles.');
}