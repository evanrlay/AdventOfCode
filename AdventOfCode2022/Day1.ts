import { parseFile } from "./utilities"

const part1 = () => {
    let max = 0;
    let sum = 0;
    const fileContents = parseFile('../inputs/2022/Day1/day1Sample.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        if (element !== '') {
            const number = Number(element);
            sum += number;
        } else {
            max = sum > max ? sum : max;
            sum = 0;
        }
    });

    return max;
}

const part2 = () => {
    let maxes = [0, 0, 0];
    let sum = 0;
    const fileContents = parseFile('../inputs/2022/Day1/day1Sample.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        if (element !== '') {
            const number = Number(element);
            sum += number;
        } else {
            maxes = determineMaxes(sum, maxes);
            sum = 0;
        }
    });
    maxes = determineMaxes(sum, maxes);

    return maxes.reduce((localSum, current) => localSum + current, 0);
}

const determineMaxes = (sum: number, maxes: number[]) => {
    if (sum > maxes[0]) {
        //console.log('replace1');
        return [sum, maxes[0], maxes[1]]
    }

    if (sum > maxes[1]) {
        //console.log('replace2');
        return [maxes[0], sum, maxes[1]]
    }

    if (sum > maxes[2]) {
        //console.log('replace3');
        return [maxes[0], maxes[1], sum]
    }

    //console.log('replace nothing');
    return maxes;
}

console.log(part2());

