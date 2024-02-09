

/* fungerer ikke :( 
document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-items").classList.toggle("active");
    });
  });
*/





/* klikke funksjon på hvert bilde i gallery for å bli stor  */ 
document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("#gallery .img-gallery img");
  
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      enlargeImage(img);
    });
  });

  function enlargeImage(img) {
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    var enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlargedImg.className = "enlarged-img";
    overlay.appendChild(enlargedImg);

    overlay.addEventListener("click", function () {
      overlay.remove();
    });
  }
});


/* responsive haburger for meny */

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
/* responsive meny går vekk når klikke på en nav-linke*/ 

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


/* siden under utviklings melding */
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
      document.getElementById('exclamation-icon').style.left = '10px'; // Justert posisjon etter forsinkelse
  }, 1000); 
});

document.getElementById('exclamation-icon').addEventListener('click', function () {
  if (document.getElementById('development-message').style.display === 'block') {
      document.getElementById('development-message').style.display = 'none';
  } else {
      document.getElementById('development-message').style.display = 'block';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var readMoreLink = document.getElementById("read-more-link");
  var hiddenParagraphs = document.querySelectorAll(".om-text p:nth-child(2), .om-text p:nth-child(3)");

  readMoreLink.addEventListener("click", function () {
    hiddenParagraphs.forEach(function (paragraph) {
      paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
    });

    // Toggle the text of the "Read more" link
    readMoreLink.innerText = (readMoreLink.innerText === 'Les mer') ? 'Les mindre' : 'Les mer';
  });
});



