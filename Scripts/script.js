document.getElementById("copy-button").addEventListener("click", function() {
      const textToCopy = "sarvin5124@gmail.com";
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Email has been copied!");
  });
  