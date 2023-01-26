const imgPerfil = document.querySelector('.img-perfil');
const arrButtons = document.querySelectorAll('[data-experiencias]');

$('nav a').click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
})

$('ul a').click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
})

imgPerfil.addEventListener('mouseenter', () => {
    imgPerfil.classList.add('animacaoImagemPerfil');
})

imgPerfil.addEventListener('mouseout', () => {
    imgPerfil.classList.remove('animacaoImagemPerfil');
})

arrButtons.forEach( (elemento) => {
    elemento.addEventListener('click', (event) => {
        experienciaTrabalho(event.target.dataset.experiencias)
    })
})

function clickMenu() {
    const listItens = document.querySelector('#itens');

    if (listItens.style.display == 'block') {
        listItens.style.display = 'none';
    } else {
        listItens.style.display = 'block';
    } 

}

function experienciaTrabalho(experiencia) {
    const titulo = document.querySelector('.tituloExperiencia');
    const explicacao = document.querySelector('.explicacaoExperiencia');

    if (experiencia == 'estoquista') {
        titulo.innerHTML = 'Darc by Magazine'
        explicacao.innerHTML = 'Responsavel no recebimento e na conferência de produtos, separação de materiais de acordo com especificações, acompanhamento de produtos que estiverem acabando, elaboração de relatórios sobre a entrada e saída de produtos, separação de pedidos e manutenção da organização do local em que se encontram esses produtos'
    } else if (experiencia == 'vendedor') {
        titulo.innerHTML = 'Darc by Magazine'
        explicacao.innerHTML = 'Responsável pelo atendimento direto ao consumidor, negocia os preços de uma mercadoria, os prazos, as condições de pagamento e os descontos dessa venda. orienta o cliente sobre as especificações dos produtos e/ou serviços, controlar a demanda dos pedidos em estoque e cumpre as metas de vendas.'
    } else {
        titulo.innerHTML = 'Dni Autocom Automação'
        explicacao.innerHTML = 'Responsável pelo gerenciamento de rede da empresa, criação de usuários de rede, gerenciamento de servidor de domínio, políticas de grupo, gerenciamento de regras no servidor de arquivos, configuração de firewall, configuração de roteadores, impressoras, periféricos em geral, manutenção de maquina, suporte ao cliente e etc.'
    }
}
