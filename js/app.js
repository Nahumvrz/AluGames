let quantidadeDeJogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

        if(imagem.classList.contains('dashboard__item__img--rented')) {
            if(confirm('Deseja devolver este jogo?')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alert('Jogo devolvido com sucesso!');
            }
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            quantidadeDeJogosAlugados ++;
            jogosAlugados();
        }
}

function jogosAlugados() {
    if(quantidadeDeJogosAlugados > 3) {
        quantidadeDeJogosAlugados = 1;
    }
    console.log(`Quantidade de jogos alugados: ${quantidadeDeJogosAlugados}`);
}