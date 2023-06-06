// OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

// - colocar a classse selecionado no personagem que passamos o mouse para adiionar a animação nele

// -retirara a classe selecionado do personagem que estar selecionado

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')


        personagem.classList.add('selecionado');


        // OBJETIVO 2 -trocar a imagem  e nome do personagem grande

        //     -alterar a imagem do personagem do jogador 1
        //     -alterara o nome do pesronagem do jogador 1

        
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src =`./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        
        const  nomeSelecionado = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionado;

    });
});