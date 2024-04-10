
function calcularPromedio() {
    var numerosString = document.getElementById('numerosInput').value;
    
    // Convertir la cadena de números en un array
    var numerosArray = numerosString.split(',').map(Number);
    
    // Calcular la suma de los números
    var suma = 0;
    for (var i = 0; i < numerosArray.length; i++) {
        suma += numerosArray[i];
    }
    
    // Calcular el promedio si hay números en el array
    var promedio = 0;
    if (numerosArray.length > 0) {
        promedio = suma / numerosArray.length;
    }

    document.getElementById('resultado').innerText = "El promedio de los números es: " + promedio.toFixed(2);
}
