document.getElementById("email-copy-button").addEventListener("click", function () {
    const textToCopy = "sarvin5124@gmail.com";
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Email has been copied!");
});

document.getElementById("contact-copy-button").addEventListener("click", function () {
    const textToCopy = "+91 9310524050";
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Contact has been copied!");
});
