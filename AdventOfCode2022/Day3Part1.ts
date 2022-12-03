import { parseFile } from "./utilities";

const part1 = () => {
    let sum = 0;
    const fileContents = parseFile('../inputs/2022/Day3/day3Real.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        const length = element.length;
        const duplicate = findDuplicate(element.slice(0, length / 2), element.slice(-(length / 2)))
        sum += scoreResult(duplicate);
    });
    return sum;
}

const findDuplicate = (firstHalf: string, secondHalf: string) => {
    const secondHalfSet = new Set(secondHalf);
    const intersection = new Set(
        [...firstHalf.split('')].filter(element => secondHalfSet.has(element))
    );
    return intersection.values().next().value;
}

const scoreResult = (duplicateCharacter: string) => {
    const charValue = Number(duplicateCharacter.charCodeAt(0));
    if (charValue <= 90) {
        return charValue - 38;
    }
    return charValue - 96;
}

console.log(part1());
