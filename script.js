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
  '"As Lucas’s teacher when he began his journey in project-based learning, I had the pleasure of seeing him demonstrate incredible adaptability, a deep thirst for knowledge, and a keen ability to solve problems. What stood out most was his consistent incorporation of social justice into your projects, showcasing not only his intellect but also his commitment to making a positive impact in the world."',
  '"Lucas is very intelligent and self-managed. He is very process driven and provides a high standard of work."',
  '"I met Lucas when he was a high school student conducting a project under the Big Picture program. The goal was to build an Auslan glove, using a Raspberry Pi and an array of sensors - to determine the positions of the hand joints - and then AI techniques to process the data and translate hand movements into language"... "and Lucas has demonstrated deep knowledge of both the hardware and software for the project, as well as lots of enthusiasm and curiosity, which are rare traits in high schoolers."',
  '"Lucas’s willingness to help and support others, strive for personal excellence and take on feedback make him an excellent learner. It has been a pleasure see his growth in his time at Cooks Hill Campus and I look forward to seeing his next steps."'
]

const authors_images = [
  'assets/images/quotes/uon.png',
  'assets/images/quotes/clickk.png',
  'assets/images/quotes/saphi.png',
  'assets/images/quotes/nhs.png',
  'assets/images/quotes/clickk.png',
  'assets/images/quotes/uon.png',
  'assets/images/quotes/chc.png',
]

const authors = [
  'Dr. Jacqueline D Bailey, Associate Lecturer - Computing & IT, School of Inofrmation and Physical Sciences, The University of Newcastle',
  'Chris Chapman, Director of Clickk Pty Ltd',
  'Liam, CCO of SAPHI Engineering',
  'Thomas Deane, Head Teacher of Well Being, Newcastle High School',
  'Chris Chapman, Director of Clickk Pty Ltd',
  'Dr. Alexandre Mendes, Senior Lecturer - Computing & IT, School of Inofrmation and Physical Sciences, The University of Newcastle',
  'Nick Willis, Ex Deputy Campus Leader, Cooks Hill Campus, Newcastle High School'
]

let currentQuote = 0;
let currentAuthor = 0;
let currentAuthorImage = 0;
const switchTime = 15000;

// Auto switch text every switchTime milliseconds
setInterval(showNext, switchTime);

function showNext() {
  currentQuote = (currentQuote + 1) % quotes.length;
  currentAuthorImage = (currentAuthorImage + 1) % authors_images.length;
  currentAuthor = (currentAuthor + 1) % authors.length;
  update();
}

function showPrev() {
  currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
  currentAuthorImage = (currentAuthorImage - 1 + authors_images.length) % authors_images.length;
  currentAuthor = (currentAuthor - 1 + authors.length) % authors.length;
  update();
}

function update() {
  document.getElementById('quote').innerText = quotes[currentQuote];
  document.getElementById('author_image').src = authors_images[currentAuthorImage];
  document.getElementById('author').innerText = authors[currentAuthor];
}