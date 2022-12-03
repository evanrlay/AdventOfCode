import { parseFile } from "./utilities";

const part2 = () => {
    let sum = 0;
    const fileContents = parseFile('../inputs/2022/Day3/day3Real.txt');
    const fileArray = fileContents.split('\r\n');
    let groupCount = 0;
    while (groupCount < fileArray.length) {
        const duplicate = findCommon(fileArray[groupCount], fileArray[groupCount + 1], fileArray[groupCount + 2])
        sum += scoreResult(duplicate);
        groupCount += 3;
    }
    return sum;
}

const findCommon = (firstGroup: string, secondGroup: string, thirdGroup: string) => {
    const firstGroupSet = new Set(firstGroup);
    const firstSecondIntersection = new Set(
        [...secondGroup.split('')].filter(element => firstGroupSet.has(element))
    );
    const firstSecondThirdIntersection = new Set(
        [...thirdGroup.split('')].filter(element => firstSecondIntersection.has(element))
    )
    return firstSecondThirdIntersection.values().next().value;
}

const scoreResult = (duplicateCharacter: string) => {
    const charValue = Number(duplicateCharacter.charCodeAt(0));
    if (charValue <= 90) {
        return charValue - 38;
    }
    return charValue - 96;
}

console.log(part2());
