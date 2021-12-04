const { AocClient } = require('advent-of-code-client');
require('dotenv').config()

const client = new AocClient({
    year: 2021,
    day: 4,
    token: process.env.SESSION_TOKEN
});

client.getInput().then((res) => {
    let input = res.split('\n')
    const numbers = input[0].split(',')
    let boards = []
    for (let i = 1; i < input.length; i++){
        if(input[i] === ''){
            boards.push([])
            continue
        }
        boards[boards.length - 1].push(input[i].split(/[ ]+/).filter(value => value !== ''))
    }

    const calculateResult = (board, number) => {
        let result = 0
        for (const row of board) {
            for (const rowElement of row) {
                if(rowElement !== 'done'){
                    result += parseInt(rowElement, 10)
                }
            }
        }
        return result * parseInt(number, 10)
    }

    let firstBoard = true

    function arrayRemove(arr, value) {

        return arr.filter(function(ele){
            return ele !== value;
        });
    }

    for (const number of numbers) {
        boards:
            for (const board of boards) {
                for (const row of board) {
                    let same = true
                    for (let i = 0; i < row.length; i++) {
                        if (row[i] === number) {
                            row[i] = 'done'
                        }
                    }
                    for (let i = 0; i < row.length; i++) {
                        if(row[i] !== 'done'){
                            same = false
                        }
                    }
                    if(same){
                        if(firstBoard){
                            console.log('Part 1:',calculateResult(board, number))
                            firstBoard = false
                        }
                        //remove the board
                        if(boards.length === 1){
                            console.log('Part 2:',calculateResult(board, number))
                            return
                        }
                        boards = arrayRemove(boards, board)
                        continue boards
                    }
                }
                //check the columns
                for (let i = 0; i < board.length; i++) {
                    let same = true
                    for (let j = 0; j < board.length; j++) {
                        if(board[j][i] !== 'done'){
                            same = false
                        }
                    }
                    if(same){
                        if(firstBoard){
                            console.log('Part 1:',calculateResult(board, number))
                            firstBoard = false
                        }
                        if(boards.length === 1){
                            console.log('Part 2:',calculateResult(board, number))
                            return
                        }
                        boards = arrayRemove(boards, board)
                        continue boards
                    }
                }
            }
    }
})
