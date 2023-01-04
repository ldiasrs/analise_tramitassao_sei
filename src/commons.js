import { readFileSync, writeFile as _writeFile } from 'fs';
export const readFile = (fileName) => {
    return readFileSync(fileName, 'utf8');
}

export const writeFile = (filePath, content) => {
    _writeFile(filePath, content, err => {
    if (err) {
        console.error(err);
    }
    });
}