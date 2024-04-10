
var numbers = [6,5, 10, 3, 8, 1, 9];

document.getElementById('originalArray').innerText = numbers.join(', ');

function ordenarArrayMayorAMenor(arr) {
    // burujeo
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // cambia si el elemento actual es menor que el siguiente
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var sortedNumbers = ordenarArrayMayorAMenor(numbers);

document.getElementById('sortedArray').innerText = sortedNumbers.join(', ');
