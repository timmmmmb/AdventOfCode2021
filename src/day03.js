const { AocClient } = require('advent-of-code-client');
require('dotenv').config()

const client = new AocClient({
    year: 2021,
    day: 3,
    token: process.env.SESSION_TOKEN
});

client.getInput().then((res) => {
    let input = res.split('\n')
    let gamma = ''
    let epsilon = ''
    let count = input[0].split('').map(Number)
    for(let i = 1; i < input.length; i++){
        let split = input[i].split('').map(Number)
        for(let j = 0; j < split.length; j++) {
            count[j] += split[j]
        }
    }
    for (const number of count) {
        if(number >= input.length/2){
            gamma += '1'
            epsilon += '0'
        }else {
            gamma += '0'
            epsilon += '1'
        }
    }

    console.log('Part 1:',parseInt(gamma, 2)*parseInt(epsilon, 2))

    let ogr = [...input]
    let co2sr = [...input]

    const mostCommonBit = (inputArray, index) => {
        let count = 0
        for(let i = 0; i < inputArray.length; i++){
            let split = inputArray[i].split('').map(Number)
            count += split[index]
        }
        if(count >= inputArray.length/2){
            return '1'
        }else {
            return '0'
        }
    }

    for(let i = 0; i < input[0].length; i++){
        if(ogr.length > 1){
            let mostCommon = mostCommonBit(ogr, i)
            ogr = ogr.filter(number => number.charAt(i) === mostCommon)
        }
        if(co2sr.length > 1){
            let mostCommon = mostCommonBit(co2sr, i)
            co2sr = co2sr.filter(number => number.charAt(i) !== mostCommon)
        }
    }

    console.log('Part 2:', parseInt(ogr[0], 2)*parseInt(co2sr[0], 2))
})
