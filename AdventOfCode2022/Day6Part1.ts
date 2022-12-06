import { parseFile } from "./utilities";

//const dataStream = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

const part1 = () => {
    const dataStream = parseFile(`../inputs/2022/Day6/Day6Real.txt`);
    let start = 0;
    let end = 3;
    while (end < dataStream.length) {
        const isStartingMarker = compareValues(dataStream.slice(start, end + 1).split(""));
        if(isStartingMarker) {
            return end + 1;
        }

        start++;
        end++;
    }
}

const compareValues = (values: string[]) => {
    const valuesSet = new Set(values);
    return valuesSet.size === values.length;
}


console.log(part1());
