// function to travel to external links
function travel(link){
    window.location.href = link;
  }

function Scroll(Element){
    document.getElementById(Element).scrollIntoView();
}

function back() {
  window.location.href="../index.html";
}

const quotes = [
  '"Lucas is a rare kind of student, motivated, innovative, and determined to make a positive impact on the world around him. It is a rare joy to find a student with such focus and drive, I look forward to seeing his education and career prosper."',
  '"Lucas was an absolute pleasure to deal with. He assisted us with some website and graphic design tasks. He performed them to a very high standard. \n\n I have no hesitation in recommending Lucas to any local design or development companies."',
  '“Lucas is a talented future engineer with a bright future ahead. He has a passion for technology and it shows!”',
  '"As Lucas’s teacher when he began his journey in project-based learning, I had the pleasure of seeing him demonstrate incredible adaptability, a deep thirst for knowledge, and a keen ability to solve problems. What stood out most was his consistent incorporation of social justice into your projects, showcasing not only his intellect but also his commitment to making a positive impact in the world."'
]

const authors = [
  'Dr. Jacqueline D Bailey, Associate Lecturer - Computing & IT, The University of Newcastle',
  'Chris, Director of CLICKK',
  'Liam, CCO of SAPHI Engineering',
  'Thomas Deane, Head Teacher of Well Being, Newcastle High School',
]

let currentQuote = 0;
let currentAuthor = 0;
const switchTime = 15000;

// Auto switch text every switchTime milliseconds
setInterval(showNext, switchTime);

function showNext() {
  currentQuote = (currentQuote + 1) % quotes.length;
  currentAuthor = (currentAuthor + 1) % authors.length;
  updateText();
}

function showPrev() {
  currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
  currentAuthor = (currentAuthor - 1 + authors.length) % authors.length;
  updateText();
}

function updateText() {
  document.getElementById('quote').innerText = quotes[currentQuote];
  document.getElementById('author').innerText = authors[currentAuthor];
}