import { parseFile } from "./utilities"

enum playTypesEnum {
    OPPONENT_ROCK = 'A',
    OPPONENT_PAPER = 'B',
    OPPONENT_SCISSORS = 'C',
    SELF_ROCK = 'ROCK',
    SELF_PAPER = 'PAPER',
    SELF_SCISSORS = 'SCISSORS',
}

const playTypes = {
    A: { designation: playTypesEnum.OPPONENT_ROCK, score: 1, beatBy: playTypesEnum.SELF_PAPER, tiedBy: playTypesEnum.SELF_ROCK, beats: playTypesEnum.SELF_SCISSORS },
    B: { designation: playTypesEnum.OPPONENT_PAPER, score: 2, beatBy: playTypesEnum.SELF_SCISSORS, tiedBy: playTypesEnum.SELF_PAPER, beats: playTypesEnum.SELF_ROCK },
    C: { designation: playTypesEnum.OPPONENT_SCISSORS, score: 3, beatBy: playTypesEnum.SELF_ROCK, tiedBy: playTypesEnum.SELF_SCISSORS, beats: playTypesEnum.SELF_PAPER },
    ROCK: { designation: playTypesEnum.SELF_ROCK, score: 1, beatBy: playTypesEnum.OPPONENT_PAPER, tiedBy: playTypesEnum.OPPONENT_ROCK },
    PAPER: { designation: playTypesEnum.SELF_PAPER, score: 2, beatBy: playTypesEnum.OPPONENT_SCISSORS, tiedBy: playTypesEnum.OPPONENT_PAPER },
    SCISSORS: { designation: playTypesEnum.SELF_SCISSORS, score: 3, beatBy: playTypesEnum.OPPONENT_ROCK, tiedBy: playTypesEnum.OPPONENT_SCISSORS },
    X: { designation: 'lose' },
    Y: { designation: 'draw' },
    Z: { designation: 'win' },
}


const part2 = () => {
    let sum = 0;
    const fileContents = parseFile('../inputs/2022/Day2/day2Real.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        const roundChoices = element.split(' ');
        const play = findPlay(roundChoices);
        sum += playTypes[play].score;
        sum += scoreComparison([roundChoices[0], play]);
    });
    return sum;
}

const findPlay = (choices: string[]) => {
    const playOutcome = playTypes[choices[1]].designation;
    const opponentThrow = choices[0];
    switch (playOutcome) {
        case 'win':
            return playTypes[opponentThrow].beatBy;
        case 'draw':
            return playTypes[opponentThrow].tiedBy;
        case 'lose':
            return playTypes[opponentThrow].beats;
    }
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

console.log(part2());

