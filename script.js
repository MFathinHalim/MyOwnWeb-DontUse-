const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let element of revealElements) {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition - 150 && elementPosition > -element.offsetHeight + 150) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
}
consoleText(['About M.Fathin Halim', 'About Doma'], 'text',["#be9b6"]);

function consoleText(words, id, colors) {
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById('text')
  target.setAttribute('style', 'color:' + colors[0]);
  target.style.fontSize = "4vw";
  target.style.color = "#be9b6";
  target.style.borderColor = "#be9b6";
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        target.style.fontSize = "4vw";
        target.style.color = "#be9b6";
  target.style.borderColor = "#be9b6";
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();