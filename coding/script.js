
document.querySelectorAll('.audio-links a').forEach(link => {
  link.addEventListener('click', () => {
    alert("Opening audio version: " + link.textContent);
  });
});


document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('mouseenter', () => {
    member.style.transform = "scale(1.05)";
    member.style.transition = "transform 0.3s";
  });
  member.addEventListener('mouseleave', () => {
    member.style.transform = "scale(1)";
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link (optional)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

