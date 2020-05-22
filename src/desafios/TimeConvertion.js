'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.

    Author: Luan Eleuterio
 */
function timeConversion(s) {
    var newHour = s.substr(0, 8)
    var typeHour = s.substr(8, 2)
    var convert = ""

    if (typeHour == "PM" && s.substr(0, 2) != "12") {
        convert = parseInt(s.substr(0, 2)) + 12
        newHour = newHour.replace(s.substr(0, 2), convert.toString())
    } else if (typeHour == "AM" && s.substr(0, 2) == "12") {
        newHour = newHour.replace(s.substr(0, 2), "00")
    }

    return newHour
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
