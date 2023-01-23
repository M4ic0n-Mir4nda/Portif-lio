function clickMenu() {
    const listItens = document.querySelector('#itens');
    const nav = document.querySelector('.menu');
    const conteudo = document.querySelector('.container');

    if (listItens.style.display == 'block') {
        listItens.style.display = 'none';
        conteudo.style.display = 'block';
    } else {
        listItens.style.display = 'block';
        conteudo.style.display = 'none';
        nav.style.display = 'none';
    }
}



