const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se um cavalo virar um robo, a gente ta fudido?",
        alternativas: [
            {
                texto: "Sim, cavalos nao deveriam existir",
                afirmacao: "Você é um filho da puta"
            },
            {
                texto: "Não, e cavalos poderiam ter uma propria cidade",
                afirmacao: "real very real"
            }

        ]
    },
    {
        enunciado: "CAVALO 2",
        alternativas: [
            {
                texto: "Um filme excelente",
                afirmacao: "IA de cavalo é pika"
            },
            {
                texto: "Teu pai de calcinha",
                afirmacao: "rombado, nunca mais"
            }
        
        ]
    },
    {
        enunciado: "IA (principalmente para cavalos)",
        alternativas: [
            {
                texto: "Evolucao",
                afirmacao: "esse é o espirito"
            },
            {
                texto: "Foda dms",
                afirmacao: "Nao existe nada melhor que um cavalo movido por IA"
            }

        ]
    },
    {
        enunciado: "Cinco dedos no toba faz ativar a IA do cavalo, que faz com que ele cozinhe, pule, CUMprimente os outros, IA é evolucao fd",
        alternativas: [
            {
                texto: "Real",
                afirmacao: "2050 CAVALOS COMENDO MINHA FRUTA (comeram o abacaxi que guardei para a enxada americana)"
            },
            {
                texto: "fds",
                afirmacao: "SMT"
            }

        ]
    },
    {
        enunciado: "Usar IA e coisa de viado",
        alternativas: [
            {
                texto: "Discordo",
                afirmacao: "Disse o viado...."
            },
            {
                texto: "Concordo",
                afirmacao: "Disse o viado.."
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.lenght){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();