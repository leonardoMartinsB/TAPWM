function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaPC = opcoes[Math.floor(Math.random() * 3)];
    
    const elementoStatus = document.getElementById('status');
    const elementoPlacar = document.getElementById('placar');

    let resultado = "";

    if (escolhaUsuario === escolhaPC) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaPC === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaPC === "papel") ||
        (escolhaUsuario === "papel" && escolhaPC === "pedra")
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }

    elementoStatus.innerText = "Computador escolheu: " + escolhaPC;
    elementoPlacar.innerText = resultado;
}