document.addEventListener("DOMContentLoaded", function() {
    const txt=document.getElementById('text');
    txt.textContent="This is really cool!"//changing the text content
    txt.appendChild(txt);
  });