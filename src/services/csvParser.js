import fs from 'fs'
import path from 'path';

export const csvFilePath = (fileName) => {
    return path.join('./src/data/csv_files', fileName);
} 

export function parseCSV(content) {
    const rows = content.split('\n').filter(row => row.trim() !== '');
    const headers = rows[0].split(',');
    const data = rows.slice(1).map(row => {
        const values = row.split(',');
        const obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index].trim();  
        });
        return obj;
    });

    return data;
}

export function readCSVFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const data = parseCSV(fileContent);
        console.log(data);
    });
}




