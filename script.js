// controls

hollow = false;
kylie = true;
banana = false;
watermelon = false;
blueberry = false;


// function to travel to external links
function travel(link){
    window.location.href = link;
  }

//   function  to auto scroll to location
function Scroll(Element){
    document.getElementById(Element).scrollIntoView();
}

// function to go back
function back() {
  window.location.href="../index.html";
}

// quotes

const quotes = [
  '"Lucas is a rare kind of student, motivated, innovative, and determined to make a positive impact on the world around him. It is a rare joy to find a student with such focus and drive, I look forward to seeing his education and career prosper."',
  '"Lucas was an absolute pleasure to deal with. He assisted us with some website and graphic design tasks. He performed them to a very high standard. \n\n I have no hesitation in recommending Lucas to any local design or development companies."',
  '“Lucas is a talented future engineer with a bright future ahead. He has a passion for technology and it shows!”',
  '"As Lucas\'s teacher when he began his journey in project-based learning, I had the pleasure of seeing him demonstrate incredible adaptability, a deep thirst for knowledge, and a keen ability to solve problems. What stood out most was his consistent incorporation of social justice into your projects, showcasing not only his intellect but also his commitment to making a positive impact in the world."',
  '"Lucas contributed an interactive javascript module for the Big Picture Learning Australia\'s website. He was a pleasure to work with. He was highly responsive to any feature requests and his code was clean, effective and elegant. Lucas is the kind of student who clearly demonstrates the effectiveness of the Big Picture Learning design to help students thrive and we look forward to working more with him in the future."',
  '"Lucas is very intelligent and self-managed. He is very process driven and provides a high standard of work."',
  '"I met Lucas when he was a high school student conducting a project under the Big Picture program. The goal was to build an Auslan glove, using a Raspberry Pi and an array of sensors - to determine the positions of the hand joints - and then AI techniques to process the data and translate hand movements into language"... "and Lucas has demonstrated deep knowledge of both the hardware and software for the project, as well as lots of enthusiasm and curiosity, which are rare traits in high schoolers."',
  '"Lucas\'s willingness to help and support others, strive for personal excellence and take on feedback make him an excellent learner. It has been a pleasure see his growth in his time at Cooks Hill Campus and I look forward to seeing his next steps."'
]

const authors_images = [
  'assets/images/quotes/uon.png',
  'assets/images/quotes/clickk.png',
  'assets/images/quotes/saphi.png',
  'assets/images/quotes/nhs.png',
  'assets/images/quotes/bpea.png',
  'assets/images/quotes/clickk.png',
  'assets/images/quotes/uon.png',
  'assets/images/quotes/chc.png',
]

const authors = [
  'Dr. Jacqueline D Bailey, Lecturer - Computing & IT, School of Information and Physical Sciences, The University of Newcastle',
  'Chris Chapman, Director of Clickk Pty Ltd',
  'Liam, CCO of SAPHI Engineering',
  'Thomas Deane, Head Teacher of Well Being, Newcastle High School',
  'Joe Wickert, CTO Big Picture Learning Australia',
  'Chris Chapman, Director of Clickk Pty Ltd',
  'Dr. Alexandre Mendes, Senior Lecturer - Computing & IT, School of Information and Physical Sciences, The University of Newcastle',
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


// colour scheming / logo / events

date = new Date();
month = date.getMonth();
day = date.getDate();

function changeAllFavicons(newIconUrl) {
    const head = document.head;
    const selectors = [
      "link[rel='icon']",
      "link[rel='shortcut icon']",
      "link[rel='apple-touch-icon']",
      "link[rel='mask-icon']"
    ];
  
    // Remove existing favicons
    selectors.forEach(selector => {
      const links = document.querySelectorAll(selector);
      links.forEach(link => head.removeChild(link));
    });
  
    // Create and add new favicons
    const iconTypes = [
      { rel: 'icon', type: 'image/png' },
      { rel: 'shortcut icon', type: 'image/x-icon' },
      { rel: 'apple-touch-icon', type: 'image/png' },
      { rel: 'mask-icon', type: 'image/svg+xml' }
    ];
  
    iconTypes.forEach(icon => {
      const link = document.createElement('link');
      link.rel = icon.rel;
      link.type = icon.type;
      link.href = newIconUrl;
      head.appendChild(link);
    });
  }

document.addEventListener('DOMContentLoaded', function() {
    
    if ((month == 9 && day == 13 && kylie)) {
        document.getElementById('logo').src = 'assets/images/events/love/logo.svg';
        if (month == 9 && day == 13) {
            document.getElementById('bannerText').innerHTML = "♥ Happy BirthDay Kylie, You will always have a spot in my heart ♥"; // used to be my love
        }

        // Anniversary 2/06/2023
        // if (month == 5 && day == 0o2) {
        //     anniversary = new Date('2023-06-02');
        //     const timeFromAnniversary = (date.getFullYear() - anniversary.getFullYear());
        //     document.getElementById('bannerSubText').innerHTML = '♥ Happy ' + timeFromAnniversary + ' Year Anniversary My Love of My Life ♥';
        // }

        // Valentines Day
        // if (month == 1 && day == 14) {
        //     document.getElementById('bannerSubText').innerHTML = "♥ Happy Valentines Day My Love of My Life ♥";
        // }
        document.getElementById('bannerSubText').innerHTML = "♥ Happy BirthDay Kylie, You will always have a spot in my heart ♥";  
     
        document.getElementById('header').style.backgroundImage = 'url(assets/images/events/love/banner.png)';
        document.getElementById('projects').style.backgroundImage = 'url(assets/images/events/love/projects_section.png)';
        document.getElementById('experience').style.backgroundImage = 'url(assets/images/events/love/experience.png)';
        document.getElementById('logo_footer').src = 'assets/images/events/love/logo.svg';
        document.documentElement.style.setProperty('--primary-color', '#90a2d4');
        document.documentElement.style.setProperty('--highlight-color', '#c0b8dd');
        changeAllFavicons('assets/images/events/love/logo.svg');
  
    }
    if (month == 5) {

        document.getElementById('logo').src = 'assets/images/events/pride/pride_logo.svg';
        document.getElementById('logo_footer').src = 'assets/images/events/pride/pride_logo.svg';
        changeAllFavicons('assets/images/events/pride/pride_logo.svg');
    }
    if (hollow) {
        document.getElementById('logo').src = 'assets/images/events/hollow/logo.svg';
        document.getElementById('header').style.backgroundImage = 'url(assets/images/events/hollow/banner.png)';
        document.getElementById('projects').style.backgroundImage = 'url(assets/images/events/hollow/projects_section.png)';
        document.getElementById('experience').style.backgroundImage = 'url(assets/images/events/hollow/experience.png)';
        document.getElementById('logo_footer').src = 'assets/images/events/hollow/logo.svg';
        document.documentElement.style.setProperty('--primary-color', '#b12727');
        document.documentElement.style.setProperty('--highlight-color', '#871515');
        changeAllFavicons('assets/images/events/hollow/logo.svg');
    }
    if (banana) {
        document.getElementById('logo').src = 'assets/images/events/banana/logo.svg';
        document.getElementById('header').style.backgroundImage = 'url(assets/images/events/banana/banner.png)';
        document.getElementById('projects').style.backgroundImage = 'url(assets/images/events/banana/projects_section.png)';
        document.getElementById('experience').style.backgroundImage = 'url(assets/images/events/banana/experience.png)';
        document.getElementById('logo_footer').src = 'assets/images/events/banana/logo.svg';
        document.documentElement.style.setProperty('--primary-color', '#7b7303');
        document.documentElement.style.setProperty('--highlight-color', '#f5e510');
        changeAllFavicons('assets/images/events/banana/logo.svg');
    }
    if (watermelon || month == 7 && day == 3) {
        if (month == 7 && day == 3) {
            document.getElementById('bannerSubText').innerHTML = "🍉 !!! National Watermelon Day !!! 🍉";  
        }
        document.getElementById('logo').src = 'assets/images/events/watermelon/logo.svg';
        document.getElementById('header').style.backgroundImage = 'url(assets/images/events/watermelon/banner.png)';
        document.getElementById('projects').style.backgroundImage = 'url(assets/images/events/watermelon/projects_section.png)';
        document.getElementById('experience').style.backgroundImage = 'url(assets/images/events/watermelon/experience.png)';
        document.getElementById('logo_footer').src = 'assets/images/events/watermelon/logo.svg';
        document.documentElement.style.setProperty('--primary-color', '#dd2e44');
        document.documentElement.style.setProperty('--highlight-color', '#5c913b');
        changeAllFavicons('assets/images/events/watermelon/logo.svg');
    }
    if (blueberry || month == 6 && day == 8) {
        if (month == 6 && day == 8) {
            document.getElementById('bannerSubText').innerHTML = "🫐 !!! National BlueBerry Day !!! 🫐";  
        }
        document.getElementById('logo').src = 'assets/images/events/blueberry/logo.svg';
        document.getElementById('header').style.backgroundImage = 'url(assets/images/events/blueberry/banner.png)';
        document.getElementById('projects').style.backgroundImage = 'url(assets/images/events/blueberry/projects_section.png)';
        document.getElementById('experience').style.backgroundImage = 'url(assets/images/events/blueberry/experience.png)';
        document.getElementById('logo_footer').src = 'assets/images/events/blueberry/logo.svg';
        document.documentElement.style.setProperty('--primary-color', '#132236');
        document.documentElement.style.setProperty('--highlight-color', '#083476');
        changeAllFavicons('assets/images/events/blueberry/logo.svg');
    }
});

  window.addEventListener("load", () => {
    const hash = window.location.hash;

    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // Clean up the URL
        history.replaceState(null, null, window.location.pathname);
      }
    }
  });