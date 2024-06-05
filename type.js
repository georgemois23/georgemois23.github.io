// Function to initialize Typed
function initializeTyped() {
    // Check if the flag indicating initialization exists in sessionStorage
    if (!sessionStorage.getItem('typedInitialized')) {
        var typed2 = new Typed(".auto-type2", {
            strings: ["Hello!"],
            typeSpeed: 50,
            loop: false,
            onComplete: function() {
                // Store the typed text in sessionStorage
                sessionStorage.setItem('typedText2', document.querySelector(".auto-type2").textContent);
                
                var typed3 = new Typed(".auto-type3", {
                    strings: ["My name is George Moysiadis, I am from Greece and I am a"],
                    typeSpeed: 50,
                    loop: false,
                    onComplete: function() {
                        // Store the typed text in sessionStorage
                        sessionStorage.setItem('typedText3', document.querySelector(".auto-type3").textContent);
                        
                        var typed4 = new Typed(".auto-type4", {
                            strings: ["web developer.", "student of Computer Science."],
                            typeSpeed: 100,
                            backSpeed: 60,
                            loop: false,
                            onComplete: function() {
                                // Store the typed text in sessionStorage
                                sessionStorage.setItem('typedText4', document.querySelector(".auto-type4").textContent);
                                
                                // Set the flag in sessionStorage to indicate initialization
                                sessionStorage.setItem('typedInitialized', 'true');
                            }
                        });
                    }
                });
            }
        });
    } else {
        // Retrieve the typed text from sessionStorage and set it to the elements
        document.querySelector(".auto-type2").textContent = sessionStorage.getItem('typedText2');
        document.querySelector(".auto-type3").textContent = sessionStorage.getItem('typedText3');
        document.querySelector(".auto-type4").textContent = sessionStorage.getItem('typedText4');
    }
}

// Call initializeTyped function
initializeTyped();

// Existing code from type.js file

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
      // Add the fade-in class when the rest-of-page section comes into view
      restOfPage.classList.add('fade-in');
    }
  }
  
  // Add scroll event listener to trigger handleScroll function
  window.addEventListener('scroll', handleScroll);
  
  // Existing code from type.js continues...
  

  const button = document.getElementById('visitt');
  let bodyy= document.querySelector('.construction');
  document.querySelector('html').classList.toggle('prevent-scrolling');
  button.addEventListener('click', function (evt) {
    
    bodyy.style.visibility = 'hidden';
    document.querySelector('.underconstruction').style= 'filter: none';
    document.querySelector('.navigation').style.visibility='visible';
    document.querySelector('html').classList.remove('prevent-scrolling');
    }, false);