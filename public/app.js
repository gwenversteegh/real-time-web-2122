
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