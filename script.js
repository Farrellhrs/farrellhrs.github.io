// Reveal-on-scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Fallback: reveal anything already in (or above) the viewport, in case
// IntersectionObserver doesn't fire (e.g. after programmatic scroll)
function revealInView() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealInView, { passive: true });
window.addEventListener("load", revealInView);

// Project filters
const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.cat === filter;
      card.classList.toggle("hidden", !show);
      if (show) card.classList.add("visible");
    });
  });
});

// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
