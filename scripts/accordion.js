let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    let currentPanel = event.currentTarget.nextElementSibling;
    event.currentTarget.classList.toggle("active");
    if (currentPanel.style.maxHeight) {
      currentPanel.style.maxHeight = null;
    } else {
      currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
    }
  });
}
