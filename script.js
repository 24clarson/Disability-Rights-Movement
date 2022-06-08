let autoNum = 0;
const autoSlides = document.getElementsByClassName("main-top-background");
nextSlide();

function nextSlide() {
  autoNum++;
  if (autoNum >= autoSlides.length) autoNum = 0;
  for (let i=0; i<autoSlides.length; i++) {
    if (i == autoNum) {
      autoSlides[i].style.display = "block";
    } else {
      autoSlides[i].style.display = "none";
    }
  }
  setTimeout(nextSlide, 5000);
}

let manualNum = 0;
const manualSlides = document.getElementsByClassName("slideshow-image");
const manualCaptions = document.getElementsByClassName("slideshow-caption");
renderSlides();

function moveSlide(num) {
  manualNum += num;
  if (manualNum >= manualSlides.length) manualNum = 0;
  if (manualNum < 0) manualNum = manualSlides.length-1;
  renderSlides();
}

function renderSlides() {
  for (let i=0; i<manualSlides.length; i++) {
    if (i == manualNum) {
      manualSlides[i].style.display = "block";
      manualCaptions[i].style.display = "block";
    } else {
      manualSlides[i].style.display = "none";
      manualCaptions[i].style.display = "none";
    }
  }
}

function shuffle() {
  button = document.getElementById("interesting-button");
  button.style.backgroundColor = "rgb(" + 255*Math.random() + "," + 255*Math.random() + "," + 255*Math.random() + ")";
  button.style.width = (400*Math.random() + 10) + "px";
  button.style.height = (400*Math.random() + 10) + "px";
  button.style.borderRadius = 200*Math.random() + "px";
  button.style.border = 10*Math.random() + "px solid " + "rgb(" + 255*Math.random() + "," + 255*Math.random() + "," + 255*Math.random() + ")";
  button.style.transform = "skew(" + (90*Math.random()-45) + "deg," + (90*Math.random()-45) + "deg)";
}