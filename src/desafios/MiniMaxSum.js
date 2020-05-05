'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
//
//author: Luan Eleuterio
//
function miniMaxSum(arr) {
    var totalSum = []
    var minMax = []
    var len = arr.length
    var soma = 0

    for (var i = 0; i < len; i++) {
        soma = 0
        for (var j = 0; j < len; j++) {
            if (j == i) {
                continue
            } else {
                soma += arr[j]
            }
        }
        totalSum.push(soma)
    }

    minMax[0] = Math.min.apply(null, totalSum)
    minMax[1] = Math.max.apply(null, totalSum)

    console.log(minMax[0] + ' ' + minMax[1])
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
