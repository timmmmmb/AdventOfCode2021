const { AocClient } = require('advent-of-code-client');
require('dotenv').config()

const client = new AocClient({
    year: 2021,
    day: 5,
    token: process.env.SESSION_TOKEN
});

client.getInput().then((res) => {
    /*res = '0,9 -> 5,9\n' +
        '8,0 -> 0,8\n' +
        '9,4 -> 3,4\n' +
        '2,2 -> 2,1\n' +
        '7,0 -> 7,4\n' +
        '6,4 -> 2,0\n' +
        '0,9 -> 2,9\n' +
        '3,4 -> 1,4\n' +
        '0,0 -> 8,8\n' +
        '5,5 -> 8,2'*/
    let input = res.split('\n')
    let seaFloor = []

    //initialize array
    let width = 1000
    let height = 1000

    for (let i = 0; i < width; i++) {
        seaFloor.push([])
        for (let j = 0; j < height; j++) {
            seaFloor[i].push(0)
        }
    }

    //fill array
    for (const line of input) {
        let split = line.split(' -> ')
        let start = split[0].split(',')
        let end = split[1].split(',')
        let x1, x2, y1, y2
        x1 = start[0]
        y1 = start[1]
        x2 = end[0]
        y2 = end[1]

        if(x1 === x2){
            if(y1 > y2)
                [y1,y2] =[y2, y1]
            for (let y = y1; y <= y2; y++) {
                seaFloor[y][x1]++
            }
        } else if(y1 === y2){
            if(x1 > x2)
                [x1,x2] =[x2, x1]
            for (let x = x1; x <= x2; x++) {
                seaFloor[y1][x]++
            }
        }
    }

    let result = 0

    for (const seaFloorElement of seaFloor) {
        for (const seaFloorElementElement of seaFloorElement) {
            if(seaFloorElementElement > 1){
                result++
            }
        }
    }

    console.log('Part 1', result)

})
