import { readFileSync } from 'fs';

export const parseFile = (fileName: string) => {
    const file = readFileSync(fileName, 'utf-8');
    return file;
}