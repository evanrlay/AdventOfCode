import { parseFile } from "./utilities"

enum playTypesEnum {
    OPPONENT_ROCK = 'A',
    OPPONENT_PAPER = 'B',
    OPPONENT_SCISSORS = 'C',
    SELF_ROCK = 'X',
    SELF_PAPER = 'Y',
    SELF_SCISSORS = 'Z',
}

const playTypes = {
    A: { designation: playTypesEnum.OPPONENT_ROCK, score: 1, beatBy: playTypesEnum.SELF_PAPER, tiedBy: playTypesEnum.SELF_ROCK },
    B: { designation: playTypesEnum.OPPONENT_PAPER, score: 2, beatBy: playTypesEnum.SELF_SCISSORS, tiedBy: playTypesEnum.SELF_PAPER },
    C: { designation: playTypesEnum.OPPONENT_SCISSORS, score: 3, beatBy: playTypesEnum.SELF_ROCK, tiedBy: playTypesEnum.SELF_SCISSORS },
    X: { designation: playTypesEnum.SELF_ROCK, score: 1, beatBy: playTypesEnum.OPPONENT_PAPER, tiedBy: playTypesEnum.OPPONENT_ROCK },
    Y: { designation: playTypesEnum.SELF_PAPER, score: 2, beatBy: playTypesEnum.OPPONENT_SCISSORS, tiedBy: playTypesEnum.OPPONENT_PAPER },
    Z: { designation: playTypesEnum.SELF_SCISSORS, score: 3, beatBy: playTypesEnum.OPPONENT_ROCK, tiedBy: playTypesEnum.OPPONENT_SCISSORS },
}

const part1 = () => {
    let sum = 0;
    const fileContents = parseFile('../inputs/2022/Day2/day2Real.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        const roundChoices = element.split(' ');
        sum += playTypes[roundChoices[1]].score;
        sum += scoreComparison(roundChoices);
    });
    return sum;
}

const scoreComparison = (choices: string[]) => {
    const selfThrow = choices[1];
    const opponentThrow = choices[0];
    if (playTypes[selfThrow].beatBy === opponentThrow) {
        //opponent wins
        return 0;
    }
    if (playTypes[selfThrow].tiedBy === opponentThrow) {
        //tie
        return 3;
    }
    //you win
    return 6;
}

console.log(part1());

