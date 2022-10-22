let socket = io()

const nameSection = document.querySelector(".index")
const nameForm = document.querySelector("section > form")
let input = document.querySelector('#name')

const quizSection = document.querySelector(".quiz")
const questionForms = document.querySelectorAll(".form")

let goodAnswers
let amountGoodAnswers

let names = document.querySelector('header ul')




nameForm.addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('name', input.value)
    input.value = ''
    nameSection.classList.add("onzichtbaar")
    quizSection.classList.remove("onzichtbaar")
  }
})



const options = document.querySelectorAll("main section-nth-of-type(2) ol li form > div")
function randomizeAnswers(){
  options.forEach((answers)=>{
    for (var i = answers.children.length; i >= 0; i--) {
      answers.appendChild(answers.children[Math.random() * i | 0]);
    }
  })
}
randomizeAnswers()

function disableForm(){
  questionForms.forEach((form)=>{
    form.addEventListener('change', event => {
      form.style.setProperty('pointer-events', 'none')
    })
  })
}
disableForm()


socket.on('name', user => {
  //add item to online-list  
  names.insertAdjacentHTML('beforeend', 
  `<li id="text${user.id}"> 
      <p>${user.username}</p>
  </li>`)


  //adds item to ranking
  rankingList.insertAdjacentHTML('beforeend', 
  `<li id="${user.id}"> 
      <p>${user.username}</p>
      <p><span>Still playing...</span>/10</p>
  </li>`)
})