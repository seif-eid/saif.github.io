let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = '';
    letters.forEach((letter) => {
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = 'letter out';
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
            letter.className = 'letter in';
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();  
setInterval(changeText, 3000);


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.radial-bars').forEach((bar) => {
        const percentage = bar.querySelector('.percentage').textContent.replace('%', '');
        const circle = bar.querySelector('.path');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
});

//circle skills//
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var points = '';
    var rotate = 360 / dots;

    for (var i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (var i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
// mix it up portfolio//
var mixer = mixitup('.portfolio-gallery');



//active menu//
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuli.forEach(sec => sec.classList.remove('active'));
    menuli[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);


//sticky navbar///////////////////////
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});

/// toggle icon navbar ////
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


window.onscroll = () => { 
    menuIcon.classList.remove('bx-x');
    navlist.classList.remove('open');
}


/// parallax ////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-items');
        }else{
            entry.target.classList.remove('show-items');
        }
    });
});


const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => {
    observer.observe(el);
});


const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => {
    observer.observe(el);
});


const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => {
    observer.observe(el);
});

//contact//
(function() {
    emailjs.init("YMPiicdGtAiNW0CCz"); // Replace 'YOUR_USER_ID' with your EmailJS User ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_pu8bmzh', 'template_eae956a', event.target)
        .then((result) => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send the message, please try again.');
        });
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', sendEmail);
    }
});


// extra ///
document.addEventListener("DOMContentLoaded", () => {
    // Select all info buttons
    const infoButtons = document.querySelectorAll('.info-button');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the parent port-box
            const portBox = button.closest('.port-box');
            
            // Find the description container within this port-box
            const descriptionContainer = portBox.querySelector('.description-container');
            
            // Toggle the 'show' class on the description container
            descriptionContainer.classList.toggle('show');
            
            // Change button text based on whether the description is visible or not
            if (descriptionContainer.classList.contains('show')) {
                button.textContent = 'Read Less';
            } else {
                button.textContent = 'Click to Read More';
            }
        });
    });
});
