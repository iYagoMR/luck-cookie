//Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnAgain = document.querySelector("#btnAgain")

let randomCookie = Math.round(Math.random() * 3)

/*
cookieMessages = [
    {
        msg: "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    },

    {
        msg: "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    },

    {
        msg: "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    },

    {
        msg: "A juventude não é uma época da vida, é um estado de espírito.",
    },
]
*/

//Eventos
btnOpen.addEventListener('click', handleOpenClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('click', function(e) {
    if(e.key == 'click' && screen1.classList.contains('hide')) {
        handleAgainClick()
    }
})

//Functions
function handleOpenClick(event) {
    event.preventDefault()

    toggleScreen()

    //Cookie messages
    if (randomCookie == 0) {
        screen2.querySelector("p").innerText = `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`
    }
    else if(randomCookie == 1) {
        screen2.querySelector("p").innerText = `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?`
    }
    else if(randomCookie == 2) {
        screen2.querySelector("p").innerText = `Defeitos e virtudes são apenas dois lados da mesma moeda.`
    }
    else if(randomCookie == 3) {
        screen2.querySelector("p").innerText = `A juventude não é uma época da vida, é um estado de espírito.`
    }

}

function handleAgainClick() {
    toggleScreen()
    randomCookie = Math.round(Math.random() * 3)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}