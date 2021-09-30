/* Your JS here. */
console.log('Hello World!')

// nav bar smooth scrolling segment

const sections = document.querySelectorAll('section');
const liHeaderElements =  document.querySelectorAll('#header ul li');
const headerNames = document.querySelectorAll("#header ul a");

headerNames.forEach((x) => {
    x.addEventListener("click", clickHandler);
  });

function clickHandler(e) {
  e.preventDefault();
  const offsetTop = document.querySelector(this.getAttribute("href")).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// nav bar highlighting as scrolling segment

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((ele) => {
      if (window.pageYOffset >= ele.offsetTop - ele.clientHeight / 3) {
        current = ele.getAttribute("id");
      }
    });
  
    liHeaderElements.forEach((li) => {
      li.classList.remove("move");
      if (li.classList.contains(current)) {
        li.classList.add("move");
      }
    });
  });



// Nav bar text and bar resizing segment 

window.onscroll = function() {scrollFunction()};

function resizeLargeText(headerTextElement) {
    document.getElementById(headerTextElement).style.fontSize = "17px";
    document.getElementById(headerTextElement).style.height = "23px";
}
function resizeSmallText(headerTextElement) {
    document.getElementById(headerTextElement).style.fontSize = "20px";
    document.getElementById(headerTextElement).style.height = "50px";
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "60px";
    resizeLargeText("headerText1");
    resizeLargeText("headerText2");
    resizeLargeText("headerText3");
    resizeLargeText("headerText4");
  } else {
    document.getElementById("header").style.height = "110px";
    resizeSmallText("headerText1");
    resizeSmallText("headerText2");
    resizeSmallText("headerText3");
    resizeSmallText("headerText4");
  }
}


// Modal (clicking button to open up a box) segment

function setUpModals(modalEl, btnEl, spanEl) {
    var modal = document.getElementById(modalEl);
    var btn = document.getElementById(btnEl);
    var span = document.getElementsByClassName(spanEl)[0];
    btn.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
}

setUpModals("firstModal", "myBtn", "close");
setUpModals("secondModal", "myBtn2", "close2");
setUpModals("thirdModal", "myBtn3", "close3");

// slideshow or carousel segment

function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  
  function callSlideShow(obj) {
  
    const prev = obj.querySelector('#prevBtn');
    const next = obj.querySelector('#nextBtn');
    const slidesContainer = obj.querySelector('#slideContents');

    let currentSlide = 0;
    const numSlides = slidesContainer.children.length;

    prev.addEventListener('click', () => {
        currentSlide = modulo(currentSlide - 1, numSlides);
        obj.style.setProperty('--curr', currentSlide);
    });

    next.addEventListener('click', () => {
        currentSlide = modulo(currentSlide + 1, numSlides);
        obj.style.setProperty('--curr', currentSlide);
    });

  }
  
  const allSlides = document.querySelectorAll('#slideshowI');
  allSlides.forEach(callSlideShow);