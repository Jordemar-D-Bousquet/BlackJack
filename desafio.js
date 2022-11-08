
// alert("bem vindo ao jogo de BlackJack")
function comecarJogo(){

jogador = []
cpu = []

let jogo = confirm("Iniciar uma rodada?")

if (jogo) {
    verificaAses = false
    while (!verificaAses) {
        jogador.push(comprarCarta())
        cpu.push(comprarCarta())
        if (jogador[0].valor == 11 && jogador[1].valor == 11 || cpu[0].valor == 11 && cpu[1].valor == 11){
            jogador = []
            cpu = []

        } else {
            verificaAses = true
        }
    }

    let rodada = true

    while (rodada) {
        let JogadorTexto = ''
        let JogadorPontos = 0

        let CpuTexto = ''
        let CpuPontos = 0

        for (let cartas of jogador) {
            JogadorTexto += cartas.texto
            JogadorPontos += cartas.valor
        }

        for (let cartas of cpu) {
            CpuTexto += cartas.texto
            CpuPontos += cartas.valor
        }

        if (JogadorPontos > 21 || CpuPontos > 21) {
            rodada = false
        } else {
            let confimaCompra = confirm(`suas cartas são ${JogadorTexto}. A carta revelada da Cpu é ${cpu[0].texto}` + '\n' + 'Deseja comprar mais uma carta?')

            if (confimaCompra) {
                jogador.push(comprarCarta())
                cpu.push(comprarCarta())
            } else {
                rodada = false
            }

        }

       
    }
}

// calcula os pontos do jogador e cpu

let pontosJogador = jogador.map((pontos) => {
    return pontos.valor
})

let pontosCpu = cpu.map((pontos) => {
    return pontos.valor
})

let somaJogador = 0
let somaCpu = 0

for (let i = 0; i < jogador.length; i++) {
    somaJogador += pontosJogador[i]
}

for (let i = 0; i < cpu.length; i++) {
    somaCpu += pontosCpu[i]
}

//Verifica ganhador 
let resultado = ''

if (somaJogador > somaCpu && somaJogador <= 21) {
    resultado = 'Jogador Venceu!!'
} else if (somaCpu > somaJogador && somaCpu <= 21) {
    resultado = 'Cpu Venceu!!'
} else if (somaCpu > 21 && somaJogador <= 21) {
    resultado = 'Jogador Venceu!!'
} else if (somaJogador > 21 && somaCpu <= 21) {
    resultado = 'Cpu Venceu!!'
} else {
    resultado = 'Empate'
}


alert(`Pontuação\nJogador: ${somaJogador}\nCPU: ${somaCpu}\n${resultado}` )

console.log("Jogador", somaJogador)
console.log("Cpu", somaCpu)
console.log(resultado)

}