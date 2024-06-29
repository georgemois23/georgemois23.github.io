document.addEventListener('DOMContentLoaded', (event) => {
  const menu = document.getElementById('menu');
  const closeMenu = document.getElementById('menu1');
  const navigation = document.querySelector('.navigation');

  menu.addEventListener('click', function () {
    navigation.style.visibility = 'visible';
    document.querySelector('.logo').style.display='none';
    menu.style.display = 'none';
    closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', function () {
    navigation.style.display = 'none';
    menu.style.display = 'block';
    closeMenu.style.display = 'none';
  });
});

// Function to initialize Typed
function initializeTyped() {
  if (!sessionStorage.getItem('typedInitialized')) {
      var typed2 = new Typed(".auto-type2", {
          strings: ["Hello!"],
          typeSpeed: 50,
          loop: false,
          onComplete: function() {
              sessionStorage.setItem('typedText2', document.querySelector(".auto-type2").textContent);

              var typed3 = new Typed(".auto-type3", {
                  strings: ["My name is George Moysiadis, I am from Greece and I am a"],
                  typeSpeed: 50,
                  loop: false,
                  onComplete: function() {
                      sessionStorage.setItem('typedText3', document.querySelector(".auto-type3").textContent);

                      var typed4 = new Typed(".auto-type4", {
                          strings: ["web developer.", "student of Computer Science."],
                          typeSpeed: 100,
                          backSpeed: 60,
                          loop: false,
                          onComplete: function() {
                              sessionStorage.setItem('typedText4', document.querySelector(".auto-type4").textContent);
                              sessionStorage.setItem('typedInitialized', 'true');
                          }
                      });
                  }
              });
          }
      });
  } else {
      document.querySelector(".auto-type2").textContent = sessionStorage.getItem('typedText2');
      document.querySelector(".auto-type3").textContent = sessionStorage.getItem('typedText3');
      document.querySelector(".auto-type4").textContent = sessionStorage.getItem('typedText4');
  }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var restOfPage = document.querySelector('.rest-of-page');
  if (isInViewport(restOfPage)) {
      restOfPage.classList.add('fade-in');
  }
}

// Add scroll event listener to trigger handleScroll function
window.addEventListener('scroll', handleScroll);

// Function to toggle expandable button
function toggleExpand() {
  const button = document.querySelector('.expandable-button');
  button.classList.toggle('expanded');
  document.getElementById('arrow').innerHTML="←";
  event.preventDefault();
}

const mediaQuery = window.matchMedia('(max-width: 756px)');

function handleMediaQueryChange(event) {
  const arrowElement = document.querySelector('.arrow');
  if (event.matches) {
    arrowElement.innerHTML = '←';
    arrowElement.style.transform = 'rotate(0deg)';
    arrowElement.style.paddingBottom = '0';
  } else {
    arrowElement.innerHTML = 'LIGHTS'; // Ή όποιο άλλο περιεχόμενο θέλετε όταν η οθόνη είναι μεγαλύτερη
    arrowElement.style.transform = 'rotate(-90deg)'; // Ή άλλες προεπιλεγμένες τιμές
    arrowElement.style.paddingBottom = '1.4rem'; // Ή άλλες προεπιλεγμένες τιμές
  }
}

// Ελέγξτε την αρχική κατάσταση
handleMediaQueryChange(mediaQuery);

// Προσθέστε έναν listener για τις αλλαγές
mediaQuery.addEventListener('change', handleMediaQueryChange);
// Color Scheme toggle
document.getElementById('clr').addEventListener('click', function() {
  const currentTxtColor = getComputedStyle(document.documentElement).getPropertyValue('--txt').trim();
  if (currentTxtColor !== '#ede7de') {
      document.documentElement.style.setProperty('--txt', '#ede7de');
      document.documentElement.style.setProperty('--backg', '#025a4e');
      document.getElementById('clr').querySelector('img').src = '/other-pages/lightbulb.svg';
      document.getElementById('imgg').src = '/other-pages/github_.svg';
      document.getElementById('imgg1').src = '/other-pages/linkedin_.svg';
      document.getElementById('menu').src = '/other-pages/menu.svg';
      document.getElementById('menu').src = '/other-pages/minimize.svg';
      localStorage.setItem('colorScheme', 'dark');
  } else {
      document.documentElement.style.setProperty('--txt', '#025a4e');
      document.documentElement.style.setProperty('--backg', '#ede7de');
      document.getElementById('clr').querySelector('img').src = '/other-pages/lightbulb_.svg';
      document.getElementById('imgg').src = '/other-pages/github.svg';
      document.getElementById('imgg1').src = '/other-pages/linkedin.svg';
      document.getElementById('menu').src = '/other-pages/menu_.svg';
      document.getElementById('menu').src = '/other-pages/minimize_.svg';
      localStorage.setItem('colorScheme', 'light');
  }
});

// Open CV
document.getElementById('cv').addEventListener('click', function() {
  window.open('/Moysiadis_George.pdf', '_blank');
});

const button = document.getElementById('visitt');
let bodyy = document.querySelector('.construction');
const hasVisited = sessionStorage.getItem('hasVisited');
const mainContent = document.getElementById('mainContent');

// Check if the user has already visited the site
if (!hasVisited) {
  bodyy.style.visibility = 'visible';
  document.querySelector('html').classList.toggle('prevent-scrolling');
  mainContent.style.display = 'none';
} else {
  bodyy.style.visibility = 'hidden';
  document.querySelector('.underconstruction').style = 'filter: none';
  // document.querySelector('.navigation').style.visibility = 'visible';
  document.querySelector('html').classList.remove('prevent-scrolling');
  mainContent.style.display = 'block';
  initializeTyped();
}

button.addEventListener('click', function(evt) {
  sessionStorage.setItem('hasVisited', true);
  bodyy.style.visibility = 'hidden';
  document.querySelector('.underconstruction').style = 'filter: none';
  document.querySelector('html').classList.remove('prevent-scrolling');
  mainContent.style.display = 'block';
  initializeTyped();
}, false);



document.addEventListener('DOMContentLoaded', function() {
  const colorScheme = localStorage.getItem('colorScheme');
  if (colorScheme === 'dark') {
      document.documentElement.style.setProperty('--txt', '#ede7de');
      document.documentElement.style.setProperty('--backg', '#025a4e');
      document.getElementById('clr').querySelector('img').src = '/other-pages/lightbulb.svg';
      document.getElementById('imgg').src = '/other-pages/github_.svg';
      document.getElementById('imgg1').src = '/other-pages/linkedin_.svg';
  } else if (colorScheme === 'light') {
      document.documentElement.style.setProperty('--txt', '#025a4e');
      document.documentElement.style.setProperty('--backg', '#ede7de');
      document.getElementById('clr').querySelector('img').src = '/other-pages/lightbulb_.svg';
      document.getElementById('imgg').src = '/other-pages/github.svg';
      document.getElementById('imgg1').src = '/other-pages/linkedin.svg';
  }
});

document.getElementById('linkd').addEventListener('click',function(){
  open("https://www.linkedin.com/in/george-moysiadis/", "_blank");
  document.getElementById('gith').style.color='red';
})

document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for mouseover
  document.getElementById('butcv').addEventListener('click', function() {
      document.getElementById('cv1').innerHTML = 'View my cv';
  }); });