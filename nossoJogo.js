
alert("bem vindo ao jogo de BlackJack")

let jogo = confirm("Quer iniciar uma rodada?")

if (jogo) {
    
    let rodada = true

    while (rodada) {
        let carta1Jogador = comprarCarta()
        let carta2Jogador = comprarCarta()

        let carta1Cpu = comprarCarta()
        let carta2Cpu = comprarCarta()

        let pontuacaoJogador = carta1Jogador.valor + carta2Jogador.valor
        let pontuacaoCpu = carta1Cpu.valor + carta2Cpu.valor

        alert(`Jogador - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - ${pontuacaoJogador} \nCpu - cartas: ${carta1Cpu.texto} ${carta2Cpu.texto} - ${pontuacaoCpu}`)

        if (pontuacaoJogador > pontuacaoCpu) {

            alert('Jogador venceu!!')

        } else if (pontuacaoJogador < pontuacaoCpu) {

            alert('Cpu venceu!!')
        } else if (pontuacaoJogador === pontuacaoCpu) {

            alert('Empate!!')
        }

        let continuar = confirm('Quer continuar?')

        if(!continuar){
            rodada = false
            alert('O jogo terminou')
        }

    }
} else {
    alert('O jogo terminou')
}
