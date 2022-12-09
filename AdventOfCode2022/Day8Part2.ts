import { parseFile } from "./utilities";

const treeGrid = [];
let largestVisibilityScore = 0;

const part1 = () => {
    const fileContents = parseFile('../inputs/2022/Day8/day8Real.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        const treeSizes = element.split("");
        treeGrid.push(treeSizes);
    });
    findTreeDistances();
    return largestVisibilityScore;
}

const findTreeDistances = () => {
    const rowLength = treeGrid[0].length;
    const rowHeight = treeGrid.length;

    for (let i = 1; i < rowHeight - 1; i++) {
        for (let j = 1; j < rowLength - 1; j++) {
            const currentTreeHeight = treeGrid[i][j];
            let aboveDistance = 0;
            let belowDistance = 0;
            let leftDistance = 0;
            let rightDistance = 0;
            //check above
            let aboveRow = i - 1;
            while (aboveRow >= 0) {
                aboveDistance++;
                if (treeGrid[aboveRow][j] >= currentTreeHeight) {
                    break;
                }
                aboveRow--;
            }
            //check right
            let rightRow = j + 1;
            while (rightRow < rowLength) {
                rightDistance++;
                if (treeGrid[i][rightRow] >= currentTreeHeight) {
                    break;
                }
                rightRow++;
            }
            //check below
            let belowRow = i + 1;
            while (belowRow < rowHeight) {
                belowDistance++;
                if (treeGrid[belowRow][j] >= currentTreeHeight) {
                    break;
                }
                belowRow++;
            }
            //check left
            let leftRow = j - 1;
            while (leftRow >= 0) {
                leftDistance++;
                if (treeGrid[i][leftRow] >= currentTreeHeight) {
                    break;
                }
                leftRow--;
            }
            //console.log(`Visibility at ${i},${j} is visible above: ${aboveDistance}, below: ${belowDistance}, right: ${rightDistance}, left: ${leftDistance}`);
            const totalDistanceScore = aboveDistance * leftDistance * rightDistance * belowDistance;
            if (largestVisibilityScore < totalDistanceScore) {
                largestVisibilityScore = totalDistanceScore;
            }
        }
    }
}

console.log(part1());
