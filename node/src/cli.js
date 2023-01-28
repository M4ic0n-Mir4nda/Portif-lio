import chalk from "chalk";
import fs from "fs";
import pegaArquivo from "./index.js";
import listaValidada from "./validahttp.js"

const caminho = process.argv;

async function imprimeLista(valida, resultado, arquivo = '') {
    
    if (valida) {
        console.log(
            chalk.yellow('lista validada'),
            chalk.greenBright(arquivo),
            await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('lista de links'),
            chalk.bgGreen(arquivo),
            resultado
        )
    }
}

async function processaTexto(argumento) {
    const caminho = argumento[2];
    const valida = argumento[3] === 'valida';

    try {
        fs.lstatSync(caminho);
    } catch (err) {
        if (err.code == "ENOENT") {
            console.log('arquivo ou diretorio inexistente');
            return;
        }
    }
    
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumento[2])
        imprimeLista(valida, resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.map( async (nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
            imprimeLista(valida, lista, nomeArquivo)
        })
    }
}

processaTexto(caminho)