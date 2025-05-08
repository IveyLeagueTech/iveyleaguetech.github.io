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
    document.getElementById("answer1").textContent = "Let me just juggle all that while I'm under the sink, right next to the leaking pipe that is definitely the easiest thing to fix. I’ll go ahead and make your kitchen look like a brand-new showroom while I’m at it!";
}

function ans2() {
    document.getElementById("answer2").textContent = "Absolutely! I'll patch that hole, and while I'm at it, I'll rewire your entire house and give it a makeover, too! It's not like I have a million other jobs to do, right?";
}

function ans3() {
    document.getElementById("answer3").textContent = "Of course! I'll just take care of that window, replace the door, throw in some new blinds, and give you the Fort Knox-level security system you've always wanted - and all for the same price we quoted for just the window, right?";
}

// hammer animation on page load
document.addEventListener("DOMContentLoaded", function () {
    const hammerBtn = document.getElementById("hammer-btn");

    setTimeout(() => {
        hammerBtn.innerHTML = "🔨 While You're In There...Repair";
    }, 1200);
});



      // Simple Math CAPTCHA Validation
      document.querySelector("form").addEventListener("submit", function(event) {
          const mathAnswer = document.getElementById("math_captcha").value;
          if (mathAnswer.trim() !== "9") {
              alert("Please answer the math question correctly!");
              event.preventDefault();
          }
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

// Cost calculator for contractor estimate
function getRate(contractors) {
  if (contractors == 1) return 250;
  if (contractors == 2) return 125;
  if (contractors == 3) return 100;
  if (contractors == 4) return 75;
  return 50; // 5 or more
}

function calculateCost() {
  const contractors = parseInt(document.getElementById('contractors').value);
  const days = parseInt(document.getElementById('days').value);

  if (contractors >= 1 && days >= 1) {
    const rate = getRate(contractors);
    const total = contractors * rate * days;
    document.getElementById('totalCost').innerText = `$${total.toLocaleString()}`;
  } else {
      document.getElementById('totalCost').innerText = 'Invalid input';
    }
  }
