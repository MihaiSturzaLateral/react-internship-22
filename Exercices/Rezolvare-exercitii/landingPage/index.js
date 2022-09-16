function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function scroll_to_target1() {
  document.getElementById("target1").scrollIntoView();
}

function scroll_to_target2() {
  document.getElementById("target2").scrollIntoView();
}
function scroll_to_target3() {
  document.getElementById("target3").scrollIntoView();
}
// Get the button:
let mybutton = document.getElementById("myBtnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var slideIndexx = 1;
showDivss(slideIndexx);

function plusDivss(n) {
  showDivss((slideIndexx += n));
}

function showDivss(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {
    slideIndexx = 1;
  }
  if (n < 1) {
    slideIndexx = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexx - 1].style.display = "block";
}

function message() {
  var Name = document.getElementById("name");
  var email = document.getElementById("email");
  var msg = document.getElementById("msg");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");

  if (Name.value === "" || email.value === "" || msg.value === "") {
    danger.style.display = "block";
  } else {
    setTimeout(() => {
      Name.value = "";
      email.value = "";
      msg.value = "";
    }, 2000);
    success.style.display = "block";
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 4000);
}
