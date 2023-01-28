import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto) {
    const regex = /(\<a\shref=)(\"https?:\/\/[^\s?#.].[^\s]*)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map( (captura) => ({[captura[1]]: captura[2].replace(/["]/g, '')}));
    return resultados.length !== 0 ? resultados : 'não ha links no arquivo'
}

function trataErro(err) {
    throw new Error(chalk.red(err.code, 'diretorio não encontrado'));
}

export default async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch (err) {
        trataErro(err)
    }
}
