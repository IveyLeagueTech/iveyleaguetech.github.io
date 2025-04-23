/* 
Student Name: Ivey Rothenberg
File Name: script.js
Date: 04/18/2025
*/

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
		var menuicon = document.getElementById("icon");
		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
				menuicon.style.color = "#2a1f14";
		} else {
		    navlinks.style.display = "block";
				menuicon.style.color = "#f6eee4";
		}
}

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");


function ans1() {
    answer.textContent = "If you don’t see a parent after several hours and the animal is cold or weak, it may be orphaned.";
  }
  
function ans2() {
    answer.textContent = "Signs of rabies can include excessive drooling, aggression, or acting unusually tame. Do not approach the animal.";
  }
  
function ans3() {
    answer.textContent = "No. Most birds have a poor sense of smell and will not abandon babies if touched by humans.";
  }
  
function ans4() {
    answer.textContent = "You can volunteer by visiting our rescue center in person.";
  }