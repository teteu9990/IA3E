const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta de andar de Skate?",
        alternativas: [{
            texto: "Sim, eu gosto",
            afirmação: "inclusive ando todos os dias..."
        },
        {
            texto: "Não",
            afirmação: "Prefiro outros esportes como o... "
        }
        ]
    },
    {
        enunciado: "Você sabe mandar manobras?",
        alternativas: [{
            texto: "Sim sou bom...",
            afirmação: "Inclusive ja mandei..."
        },
        {
            texto:"Talvez um dia eu aprendo..",
            afirmação:"Ou talvez não"
        }
        ]
    },
    {
        enunciado: "Você quer ficar bom?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Pra correr o SLS"
        },
        {
            texto: "Não",
            afirmação: "Acho que não da futuro"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
