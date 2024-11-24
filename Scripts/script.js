// Phone no Copy Function
document
  .getElementById("contact-copy-button")
  .addEventListener("click", function () {
    const textToCopy = "+91 9310524050";
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Contact has been copied!");
  });


// Clear the input field when focused
function clearField(field) {
  if (field.defaultValue == field.value) {
    field.value = "";
    field.style.color = "#000";
  }
}

// Restore the input field when blured
function restoreField(field) {
  if (field.value.trim() === "") {
    field.value = field.defaultValue;
    field.style.color = "#6b7280";
  }
}

// Hamburger Menu
function menu(e) {
  // Variables
  var postiton = '80px';

  // Geting from DOM
  const menuList = document.getElementById('menulist');
  const isOpen = menuList.style.top == postiton;

  // Condition
  menuList.style.top = isOpen ? '-400px' : postiton;
  menuList.style.opacity = isOpen ? '0' : '1';
  e.name = isOpen ? 'menu' : 'close';

  // Logging
  console.log("task done!");
}

// // Dynamic word selection for Typing Animation
// document.addEventListener('DOMContentLoaded', function () {
//   let counter = 3;
//   const interval = setInterval(() => {
//       counter--;
//       if (counter === 0) {
//           clearInterval(interval);
//           window.location.href = 'index.html';
//       }
//   }, 1000);
// });

// var typed = new Typed(".text",{
//   strings:["Frontend Developer","Backend Developer","Full Stack"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   backDelay: 1000,
//   loop:true
// })

// Scroll to Top
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
mybutton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ProjectWindowPopups
// homevision
let proj1 = document.getElementById("proj1");
let popup1 = document.getElementById("popup1");

proj1.addEventListener('click', function () {
  popup1.style.display = "block";
});

// Close the popup if the user clicks anywhere outside of the popup content
window.addEventListener('click', function (event) {
  if (event.target == popup1) {
    popup1.style.display = "none";
  }
});