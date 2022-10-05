
const observer = new IntersectionObserver(showText); 
const paragraphs = document.querySelectorAll('li');

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

