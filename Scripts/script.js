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


// Clear the input field when focused
// function clearField(field) {
//   if (field.defaultValue == field.value) {
//     field.value = "";
//     field.style.color = "#000";
//   }
// }

// Restore the input field when blured
// function restoreField(field) {
//   if (field.value.trim() === "") {
//     field.value = field.defaultValue;
//     field.style.color = "#6b7280";
//   }
// }

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

// Validate Function
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNotEmpty = (field) => field.trim().length > 0;

  if (!validateEmail(email)) {
    alert("Invalid email");
    return false;
  }
  if (!isNotEmpty(name)) {
    alert("Name is required");
    return false;
  }
  if (!isNotEmpty(message)) {
    alert("Message is required");
    return false;
  }
  return true;
}

// EmailJS
function sendMail(event) {
  // event.preventDefault();

  if (validateForm()) {
    const templateParams = {
      name: document.getElementById('name').value,
      message: document.getElementById('message').value,
      email: document.getElementById('email').value,
    };

    console.log(templateParams);

    emailjs.send('service_2hz6tjs', 'template_gezwadr', templateParams)
      .then((response) => {
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error);
        alert('Failed to send message. Please try again.');
      });
  }
}