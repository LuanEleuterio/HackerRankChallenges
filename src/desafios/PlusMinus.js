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

// Complete the plusMinus function below.
//
//author: Luan Eleuterio
//
function plusMinus(arr) {
    var len = arr.length
    var pos = 0, neg = 0, zero = 0
    var plusArray = []


    for (var i = 0; i < len; i++) {
        if (arr[i] > 0) {
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else {
            zero++
        }
    }

    if (pos != 0) {
        plusArray.push((pos / len).toFixed(6))
    } else {
        plusArray.push(pos.toFixed(6))
    }

    if (neg != 0) {
        plusArray.push((neg / len).toFixed(6))
    } else {
        plusArray.push(neg.toFixed(6))
    }

    if (zero != 0) {
        plusArray.push((zero / len).toFixed(6))
    } else {
        plusArray.push(zero.toFixed(6))
    }

    for (var y = 0; y <= 2; y++) {
        console.log(plusArray[y])
    }

    return plusArray

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
