const { AocClient } = require('advent-of-code-client');
require('dotenv').config()

const client = new AocClient({
    year: 2021,
    day: 1,
    token: process.env.SESSION_TOKEN
});

client.getInput().then((res) => {
    let input = res.split('\n').map(Number)
    let result = 0
    for(let i = 0; i < input.length-1; i++){
        if (input[i + 1] > input[i]) {
            result++;
        }
    }
    console.log('Part 1:',result)
    result = 0
    for(let i = 0; i < input.length-2; i++){
        let current = input[i] + input[i + 1] + input[i + 2]
        let next = input[i + 1] + input[i + 2]+ input[i + 3]
        if (next > current) {
            result++;
        }
    }
    console.log('Part 2:', result)
})
