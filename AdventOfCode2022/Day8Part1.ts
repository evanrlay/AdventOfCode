import { parseFile } from "./utilities";

const treeGrid = [];
let totalVisibleTrees = 0;

const part1 = () => {
    const fileContents = parseFile('../inputs/2022/Day8/day8Real.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        const treeSizes = element.split("");
        treeGrid.push(treeSizes);
    });
    findVisibleTrees();
    return totalVisibleTrees;
}

const findVisibleTrees = () => {
    const rowLength = treeGrid[0].length;
    const rowHeight = treeGrid.length;
    totalVisibleTrees += rowLength * 2;
    totalVisibleTrees += (rowHeight - 2) * 2;

    for (let i = 1; i < rowHeight - 1; i++) {
        for (let j = 1; j < rowLength - 1; j++) {
            const currentTreeHeight = treeGrid[i][j];
            let visibleAbove = true;
            let visibleBelow = true;
            let visibleLeft = true;
            let visibleRight = true;
            //check above
            let aboveRow = i - 1;
            while (aboveRow >= 0 && visibleAbove) {
                if (treeGrid[aboveRow][j] >= currentTreeHeight) {
                    //console.log(`Tree ${treeGrid[aboveRow][j]} at [${aboveRow}][${j}] is above and taller than ${currentTreeHeight}`);
                    visibleAbove = false;
                    break;
                }
                aboveRow--;
            }
            //check right
            let rightRow = j + 1;
            while (rightRow < rowLength && visibleRight) {
                if (treeGrid[i][rightRow] >= currentTreeHeight) {
                    //console.log(`Tree ${treeGrid[i][rightRow]} at [${i}][${rightRow}] is right of and taller than ${currentTreeHeight}`)
                    visibleRight = false;
                    break;
                }
                rightRow++;
            }
            //check below
            let belowRow = i + 1;
            while (belowRow < rowHeight && visibleBelow) {
                if (treeGrid[belowRow][j] >= currentTreeHeight) {
                    //console.log(`Tree ${treeGrid[belowRow][j]} at [${belowRow}][${j}] is below and taller than ${currentTreeHeight}`)
                    visibleBelow = false;
                    break;
                }
                belowRow++;
            }
            //check left
            let leftRow = j - 1;
            while (leftRow >= 0 && visibleLeft) {
                if (treeGrid[i][leftRow] >= currentTreeHeight) {
                    //console.log(`Tree ${treeGrid[i][leftRow]} at [${i}][${leftRow}] is left of and taller than ${currentTreeHeight}`)
                    visibleLeft = false;
                    break;
                }
                leftRow--;
            }
            //console.log(`Grid at ${i},${j} is visible above: ${visibleAbove}, below: ${visibleBelow}, right: ${visibleRight}, left: ${visibleLeft}`);
            if (visibleAbove || visibleBelow || visibleRight || visibleLeft) {
                totalVisibleTrees++;
            }
        }
    }
}

console.log(part1());
