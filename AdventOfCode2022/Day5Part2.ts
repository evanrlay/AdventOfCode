import { parseFile } from "./utilities";

// const cratePositions = {
//     1: ['Z', 'N'],
//     2: ['M', 'C', 'D'],
//     3: ['P']
// }

const cratePositions = {
    1: ['W', 'M', 'L', 'F'],
    2: ['B', 'Z', 'V', 'M', 'F'],
    3: ['H', 'V', 'R', 'S', 'L', 'Q',],
    4: ['F', 'S', 'V', 'Q', 'P', 'M', 'T', 'J'],
    5: ['L', 'S', 'W'],
    6: ['F', 'V', 'P', 'M', 'R', 'J', 'W'],
    7: ['J', 'Q', 'C', 'P', 'N', 'R', 'F'],
    8: ['V', 'H', 'P', 'S', 'Z', 'W', 'R', 'B'],
    9: ['B', 'M', 'J', 'C', 'G', 'H', 'Z', 'W'],
}

const part1 = () => {
    const skipLines = { skipLines: 10, fileName: 'day5Real' }; //5 for sample 10 for real
    const fileContents = parseFile(`../inputs/2022/Day5/${skipLines.fileName}.txt`);
    const fileArray = fileContents.split('\r\n');
    const inputs = fileArray.slice(skipLines.skipLines);
    inputs.forEach(element => {
        //sample element: move 3 from 5 to 7 or move 1 from 2 to 1
        const sections = element.split(" ");
        const moveCount = Number(sections[1]);
        const moveFrom = Number(sections[3]);
        const moveTo = Number(sections[5]);
        performMoves(moveCount, moveFrom, moveTo);
    });

    const topCrates = []

    for (let property in cratePositions) {
        topCrates.push(cratePositions[property].pop());
    }

    return topCrates.join("");
}

const performMoves = (moveCount, moveFrom, moveTo) => {
    let cratesToMove = cratePositions[moveFrom].slice(-1 * moveCount);
    for (let i = 0; i < moveCount; i++) {
        cratePositions[moveFrom].pop();
        cratePositions[moveTo].push(cratesToMove[i]);
    }
}

console.log(part1());
