const { AocClient } = require('advent-of-code-client');
require('dotenv').config()

const client = new AocClient({
    year: 2021,
    day: 2,
    token: process.env.SESSION_TOKEN
});

client.getInput().then((res) => {
    let input = res.split('\n')
    let depth = 0
    let movement = 0
    for(let i = 0; i < input.length; i++){
        let split = input[i].split(' ')
        let command = split[0]
        let distance = parseInt(split[1], 10)

        if(command === 'forward'){
            movement += distance
        }else if(command === 'down'){
            depth += distance
        }else{
            depth -= distance
        }
    }
    console.log('Part 1:',depth*movement)
    depth = 0
    movement = 0
    let aim = 0
    for(let i = 0; i < input.length; i++){
        let split = input[i].split(' ')
        let command = split[0]
        let distance = parseInt(split[1], 10)

        if(command === 'forward'){
            movement += distance
            depth += aim * distance
        }else if(command === 'down'){
            aim += distance
        }else{
            aim -= distance
        }
    }
    console.log('Part 2:', depth*movement)
})
