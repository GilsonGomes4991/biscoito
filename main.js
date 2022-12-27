const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector('#btnTry')

const phrases = [
    'Hoje você beijou o amor da sua vida.', 
    'Deixe o amor da sua vida te fazer uma massagem tantrica.',
    'Quando o amor é verdadeiro, temos que dar uma segunda chance',
    'Você vai estar linda hoje.',
    'Toma um binoculo. Só assim pra você enxergar que sou o amor da sua vida',
    'Finalmente tenho um plano perfeito... O plano de ser o amor da sua vida eternamente.',
    'Meu corpo está muito fraco, tô precisando de vitamina V.. Você rebolando pra mim',
    'Você é Euro ou Dolar.. Por que real não pode ser',
    'E o preimo de mais gostosa vai para você! Parabéns, bb.',
    'Não sou pirata, mas vim roubar esse tesouro lindo que é você',
    'Se você quer saber o quanto eu te amo é simples: multiplique as estrelas do céu pelas gotas dos oceanos.'
]

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPharase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event){
    event.preventDefault()
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}