function convertirTexto() {
    var texto = document.getElementById('textoInput').value;
    
    var aMayusculas = document.getElementById('mayusculasRadio').checked;

    var textoConvertido = aMayusculas ? texto.toUpperCase() : texto.toLowerCase();

    document.getElementById('textoConvertido').innerText = textoConvertido;
}

document.getElementById('botonConvertir').addEventListener('click', convertirTexto);
