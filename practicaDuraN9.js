var numbers = [1,1,5, 10, 3, 8, 1, 9, 5, 3, 8,6,7,6];

document.getElementById('originalArray').innerText = numbers.join(', ');

function encontrarNumerosDuplicados(arr) {
    var duplicates = []; 
    var temp = {}; 
    
    // recorre el array
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        
        // Si el numero ya se vio lo guarda
        if (temp[num]) {
            duplicates.push(num);
        } else {
            // Marcar el número como visto
            temp[num] = true;
        }
    }
    
    return duplicates;
}

var duplicados = encontrarNumerosDuplicados(numbers);

document.getElementById('duplicados').innerText = duplicados.join(', ');