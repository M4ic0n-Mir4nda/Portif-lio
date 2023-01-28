import chalk from "chalk";
import fetch from "node-fetch";

function extraiLinks(arrLinks) {
    return arrLinks.map( (link) => Object.values(link).join());
}

function manejaErros(err) {
    if (err.cause.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

async function checaStatus(listaUrls) {
    const arrayStatus = await Promise.all(
        listaUrls.map(async (url) => {
            try {
                const response = await fetch(url);
                return `${response.status} - ${response.statusText}`;
            } catch (err) {
                manejaErros(err)
            }
        })
    )
    return arrayStatus;
}

async function listaValidada(arrDelinks) {
    const links = extraiLinks(arrDelinks);
    const status = await checaStatus(links);

    return arrDelinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

export default listaValidada;