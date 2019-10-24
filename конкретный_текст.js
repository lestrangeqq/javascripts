var divs = document.querySelectorAll(".ttt");
Array.from(divs).forEach(function(div) {
  if (div.textContent.indexOf("Буксирные суда - проектирование и конструкция") >= 0) {
    div.style.paddingLeft = "20px";
  }
  if (div.textContent.indexOf("Судоремонт в рыбной промышленности") >= 0) {
    div.style.paddingLeft = "20px";
  }
});
