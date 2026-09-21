"use strict";

const helloButton = document.querySelector("#hello");
const message = document.querySelector("#message");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

helloButton.addEventListener("click", () => {
  message.textContent = "Xin chào! Tôi là Phạm Chí Dũng — 20250922E.";
  message.classList.add("is-greeting");

  if (!reduceMotion.matches) {
    message.animate(
      [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 550, easing: "ease-out" },
    );
  }
});

if (!reduceMotion.matches && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
  document.documentElement.classList.add("reveal-ready");
}
