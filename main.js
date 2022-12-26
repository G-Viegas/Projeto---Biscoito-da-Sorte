let list = [
  `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`,
  `Não compense na ira o que lhe falta na razão`,
  `A vida trará coisas boas se tiver paciência.`,
  `Defeitos e virtudes são apenas dois lados da mesma moeda.`,
  `A maior de todas as torres começa no solo.`,
  `Não há que ser forte. Há que ser flexível.`,
  `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?`,
  `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?`,
  `A juventude não é uma época da vida, é um estado de espírito.`,
  `Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.`
]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
let randomNumber


btn1.addEventListener('click', openCookie)
btn2.addEventListener('click', openCookie)

function openCookie(event){
  
  event.preventDefault()
  console.log(randomNumber)
  toggleScreen()
  document
    .querySelector('.screen2 p')
    .innerText = `${list[randomNumber]}`
  
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  randomNumber = Math.floor(Math.random() * 10)
}


