import { parseFile } from "./utilities";


const fileSystem = {};
let currentDirectory = '/';

const part1 = () => {
    const input = parseFile(`../inputs/2022/Day7/day7Real.txt`);
    const inputArray = input.split('\r\n');
    inputArray.forEach(element => {
        parseInput(element);
    });
    console.log(fileSystem);
    // findTotalSizes(fileSystem[Object.keys(fileSystem)[0]]);
    // let total = 0;
    // Object.keys(fileSystem).forEach(dir => { if (fileSystem[dir].totalFileSize < 100000) total += fileSystem[dir].totalFileSize });
    // return total;
}


const parseInput = (userInput) => {
    const userInputArray = userInput.split(" ");
    switch (userInputArray[0]) {
        case '$':
            handleCommand(userInputArray);
            break;
        case 'dir':
            handleDirectoryInformation(userInputArray[1]);
            break;
        default:
            handleFileInformation(userInputArray[0]);
            break;
    }
};

const handleCommand = (command) => {
    //[$,cd,dirName]
    if (command.length === 3) {
        if (command[2] === '..') {
            currentDirectory = fileSystem[currentDirectory].parent;
        } else {
            const dirName = command[2];
            if (!fileSystem[currentDirectory]) {
                fileSystem[dirName] = {
                    children: [],
                    selfFileSize: 0,
                    parent: null,
                    totalFileSize: 0,
                }
            }
            currentDirectory = dirName;
        }
    }
}

const handleDirectoryInformation = (dirName) => {
    if (!fileSystem[dirName]) {
        fileSystem[dirName] = {
            children: [],
            selfFileSize: 0,
            parent: currentDirectory,
            totalFileSize: 0,
        }
    }
    fileSystem[currentDirectory].children.push(dirName);
}

const handleFileInformation = (fileSize) => {
    fileSystem[currentDirectory].selfFileSize += Number(fileSize);
}

const findTotalSizes = (currentDirectory) => {
    console.log(currentDirectory);
    if (currentDirectory.children.length === 0) {
        currentDirectory.totalFileSize += currentDirectory.selfFileSize;
        return;
    }

    currentDirectory.children.forEach(child => {
        findTotalSizes(fileSystem[child]);
        currentDirectory.totalFileSize += fileSystem[child].totalFileSize;
        return;
    });

    currentDirectory.totalFileSize += currentDirectory.selfFileSize;
    return;
}


console.log(part1());
