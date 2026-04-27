// ===== 7-Eleven Clone - JavaScript =====

document.addEventListener("DOMContentLoaded", function () {

  // ========== COOKIE BANNER ==========
  var cookieBanner = document.getElementById("cookie-banner");
  var cookieAccept = document.getElementById("cookie-accept");
  var cookieNecessary = document.getElementById("cookie-necessary");

  function closeCookieBanner() {
    cookieBanner.classList.add("hidden");
    setTimeout(function () {
      cookieBanner.style.display = "none";
    }, 500);
  }

  cookieAccept.addEventListener("click", closeCookieBanner);
  cookieNecessary.addEventListener("click", closeCookieBanner);


  // ========== MOBILE HAMBURGER MENU ==========
  var menuToggle = document.getElementById("menu-toggle");
  var navMain = document.getElementById("nav-main");

  menuToggle.addEventListener("click", function () {
    navMain.classList.toggle("active");

    var spans = menuToggle.querySelectorAll("span");

    if (navMain.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });


  // ========== MOBILE DROPDOWN MENUS ==========
  var navLinks = document.querySelectorAll(".nav-main > li > a");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
      var parentLi = this.parentElement;
      var dropdown = parentLi.querySelector(".dropdown");

      if (menuToggle.offsetParent !== null && dropdown) {
        e.preventDefault();

        if (dropdown.style.display === "block") {
          dropdown.style.display = "";
        } else {
          var allDropdowns = document.querySelectorAll(".dropdown");
          for (var j = 0; j < allDropdowns.length; j++) {
            allDropdowns[j].style.display = "";
          }
          dropdown.style.display = "block";
        }
      }
    });
  }


  // ========== HEADER SHADOW ON SCROLL ==========
  var header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.12)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.08)";
    }
  });


  // ========== HERO TEXT FADE-IN ==========
  var heroH1 = document.querySelector(".hero-content h1");
  var heroP = document.querySelector(".hero-content p");
  var heroCTA = document.getElementById("hero-cta");

  if (heroH1) {
    heroH1.style.opacity = "0";
    heroH1.style.transform = "translateY(20px)";
    setTimeout(function () {
      heroH1.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      heroH1.style.opacity = "1";
      heroH1.style.transform = "translateY(0)";
    }, 200);
  }

  if (heroP) {
    heroP.style.opacity = "0";
    heroP.style.transform = "translateY(20px)";
    setTimeout(function () {
      heroP.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      heroP.style.opacity = "1";
      heroP.style.transform = "translateY(0)";
    }, 400);
  }

  if (heroCTA) {
    heroCTA.style.opacity = "0";
    heroCTA.style.transform = "translateY(20px)";
    setTimeout(function () {
      heroCTA.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      heroCTA.style.opacity = "1";
      heroCTA.style.transform = "translateY(0)";
    }, 600);
  }


  // ========== PREVENT # LINKS FROM JUMPING ==========
  var hashLinks = document.querySelectorAll('a[href="#"]');
  for (var h = 0; h < hashLinks.length; h++) {
    hashLinks[h].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }


  console.log("7-Eleven Clone loaded successfully!");
});
