

/*document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-items").classList.toggle("active");
    });
  });
*/






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





const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
      document.getElementById('exclamation-icon').style.left = '10px'; // Justert posisjon etter forsinkelse
  }, 1000); // Forsinkelse på 1000ms (1 sekund)
});

document.getElementById('exclamation-icon').addEventListener('click', function () {
  if (document.getElementById('development-message').style.display === 'block') {
      document.getElementById('development-message').style.display = 'none';
  } else {
      document.getElementById('development-message').style.display = 'block';
  }
});




