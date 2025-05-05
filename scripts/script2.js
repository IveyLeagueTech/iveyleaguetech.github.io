/* 
Student Name: Ivey Rothenberg
File Name: script.js
Date: 04/18/2025
*/

// Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");

        // Toggle visibility and aria-expanded
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
            menuicon.style.color = "#2a1f14";
            menuicon.setAttribute("aria-expanded", "false");
        } else {
            navlinks.style.display = "block";
            menuicon.style.color = "#f6eee4";
            menuicon.setAttribute("aria-expanded", "true");
        }
    }

// Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// FAQ answer functions
function ans1() {
    answer.textContent = "If you don’t see a parent after several hours and the animal is cold or weak, it may be orphaned.";
}

function ans2() {
    answer.textContent = "Signs of rabies can include excessive drooling, aggression, or acting unusually tame. Do not approach the animal.";
}

function ans3() {
    answer.textContent = "No. Most birds have a poor sense of smell and will not abandon babies if touched by humans.";
}

document.addEventListener("DOMContentLoaded", function () {
  
    // Get the back-to-top button
    const backToTopButton = document.getElementById("hammer-btn");
  
      
    // Smooth scroll back to top when the button is clicked
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    });
  });


// mobile hammer script to show on scroll

const hammerBtn = document.getElementById('hammer-btn');

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    if (window.scrollY > 200) {
      hammerBtn.classList.add('visible');
    } else {
      hammerBtn.classList.remove('visible');
    }
  }
});

hammerBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// redirect to thank you page after form submission

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop default submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        // Optional: Check response.ok here
        window.location.href = '/thank-you.html'; // Update this path to match your thank-you page
      })
      .catch(error => {
        console.error('Form submission error:', error);
        alert('Something went wrong. Please try again.');
      });
    });
  }
});
