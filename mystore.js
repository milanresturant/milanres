

/*document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-items").classList.toggle("active");
    });
  });
*/



function sendEmail() {
  emailjs.send("gmail", "template_id", {
      to_email: "amiraalhasan2003@gmail.com",
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  }).then(
      function(response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
      },
      function(error) {
          console.error("Email failed to send:", error);
          alert("Error sending email. Please try again later.");
      }
  );
}



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

/**FJERNE AKTIVERING NÅR KLIKKE PÅ EN TING FUNGERER IKKE! */

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
  hamburger.classList.remove("aktive");
  navMenu.classList.remove("aktive");
}))









