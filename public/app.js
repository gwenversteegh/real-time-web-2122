let socket = io()

const nameSection = document.querySelector(".index")
const nameForm = document.querySelector("section > form")
let input = document.querySelector('#name')

const observer = new IntersectionObserver(showText); 
const paragraphs = document.querySelectorAll('main section ol li');

paragraphs.forEach(element => {
  observer.observe(element) 
});

function showText(entries, observer) { 
  entries.forEach(entry => {
    const targetClass = entry.target.classList;
    if(entry.isIntersecting) {
      targetClass.add('observed')
    } else {
      targetClass.remove('observed')
    }
  });
};

const options = document.querySelectorAll("main section ol li form > div")
function randomizeAnswers(){
  options.forEach((answers)=>{
    for (var i = answers.children.length; i >= 0; i--) {
      answers.appendChild(answers.children[Math.random() * i | 0]);
    }
  })
}
randomizeAnswers()

// socket.on('name', user => {
//   //add item to online-list  
//   names.insertAdjacentHTML('beforeend', 
//   `<li id="text${user.id}"> 
//       <p>${user.username}</p>
//   </li>`)


//   //adds item to ranking
//   rankingList.insertAdjacentHTML('beforeend', 
//   `<li id="${user.id}"> 
//       <p>${user.username}</p>
//       <p><span>Still playing...</span>/10</p>
//   </li>`)
// })