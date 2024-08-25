document
  .getElementById("email-copy-button")
  .addEventListener("click", function () {
    const textToCopy = "sarvin5124@gmail.com";
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Email has been copied!");
  });

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

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
// }

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

document.querySelectorAll(".image-container").forEach((container) => {
  const hoverTextHTML = `
      <h6 class="hover-text text-white text-base text-center">This project automates the process of creating a digital
      twin of any property using the floor plan.</h6>
  `;

  container.addEventListener("mouseenter", () => {
    // Check if the h6 tag already exists to avoid duplication
    if (!container.querySelector(".hover-text")) {
      container
        .querySelector(".flex-col")
        .insertAdjacentHTML("beforeend", hoverTextHTML);
    }
  });

  container.addEventListener("mouseleave", () => {
    // Remove the h6 tag on mouse leave
    const hoverText = container.querySelector(".hover-text");
    if (hoverText) {
      hoverText.remove();
    }
  });
});

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
