// document.getElementById("email-copy-button").addEventListener("click", function () {
//     const textToCopy = "sarvin5124@gmail.com";
//     const textArea = document.createElement("textarea");
//     textArea.value = textToCopy;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textArea);
//     alert("Email has been copied!");
// });

// document.getElementById("contact-copy-button").addEventListener("click", function () {
//     const textToCopy = "+91 9310524050";
//     const textArea = document.createElement("textarea");
//     textArea.value = textToCopy;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textArea);
//     alert("Contact has been copied!");
// });

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
        field.value = '';
        field.style.color = '#000';
    }
  }

  // Restore the input field when blured
  function restoreField(field) {
    if (field.value.trim() === '') {
      field.value = field.defaultValue;
      field.style.color = '#6b7280';
    }
  }