const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim para questões do dia dia"
        },
        {
            texto: "Não",
            afirmação: "Só para realizar pesquisas"
        }
        ]
    },
    {
        enunciado: "Você sabe usar a IA's",
        alternativas: [{
            texto: "Quem sabe...",
            afirmação: "Nunca me interesei em saber"
        },
        {
            texto:"Talvez",
            afirmação:"Prefiro não usar essas parada"
        }
        ]
    },
    {
        enunciado: "Quando usa IA no seu cotidiano",
        alternativas: [{
            texto: "Sim",
            afirmação: "Na hora das prova"
        },
        {
            texto: "Não",
            afirmação: "Não uso prefiro usar informações do jornal"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostaa = "";

function mostraPergunta() {
    if(posicao>=perguntas.length)
        mostraResultado();
        return;
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent=" ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = (opcaoSelecionada.afirmação;
    respostas = afirmacoes    
    posicao++,
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui 10 anos vou ta rico...";
}
mostraPergunta();
