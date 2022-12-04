import { parseFile } from "./utilities";

const part1 = () => {
    let overlapCount = 0;
    const fileContents = parseFile('../inputs/2022/Day4/day4Real.txt');
    const fileArray = fileContents.split('\r\n');
    fileArray.forEach(element => {
        const sections = element.split(",");
        const firstSectionBounds = sections[0].split("-");
        const secondSectionBounds = sections[1].split("-");
        const sectionOverlapped = findOverlap(firstSectionBounds, secondSectionBounds);
        if (sectionOverlapped) {
            overlapCount++;
        }
    });
    return overlapCount;
}

const findOverlap = (section1: string[], section2: string[]) => {
    const set1 = new Set();
    const set2 = new Set();
    for (let i = Number(section1[0]); i <= Number(section1[1]); i++) {
        set1.add(i);
    }

    for (let j = Number(section2[0]); j <= Number(section2[1]); j++) {
        set2.add(j);
    }

    const twoContainsOne = new Set(
        Array.from(set1).filter(element => set2.has(element))
    );

    if (twoContainsOne.size === set1.size) {
        //console.log("two contains one");
        return true;
    }

    const oneContainsTwo = new Set(
        Array.from(set2).filter(element => set1.has(element))
    );

    if (oneContainsTwo.size === set2.size) {
        //console.log("one contains two");
        return true;
    }

    return false;
}

console.log(part1());
