import { mkdir, writeFile, readFile } from 'fs/promises';
import { basename, extname, join } from 'path';

const content = await readFile('./archivo.txt', 'utf-8');
console.log(content);

const outputDir = join('output', 'files', 'data');
await mkdir(outputDir, { recursive: true });

const uppercaseContent = content.toUpperCase();
const outputPath = join(outputDir, 'archivo_uppercase.txt');

console.log('La Extension es: ', extname(outputPath));
console.log('El nombre del archivo es: ', basename(outputPath));

await writeFile(outputPath, uppercaseContent);

console.log(`Archivo procesado y guardado en: ${outputPath}`);
