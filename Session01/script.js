"use strict";

// Lấy nút, vùng thông báo và tùy chọn giảm chuyển động của người dùng.
const helloButton = document.querySelector("#hello");
const message = document.querySelector("#message");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Nhấn nút chỉ thay nội dung/trạng thái của #message, không thêm phần tử hay tải lại trang.
helloButton.addEventListener("click", () => {
  message.textContent = "Xin chào! Chúng mình là Nhóm 06: Phạm Chí Dũng (20250922E) và Nguyễn Hoàng Nam (20250169E).";
  message.classList.add("is-greeting");

  // Bỏ hiệu ứng khi người dùng đã chọn giảm chuyển động.
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

// Chỉ bật hiệu ứng xuất hiện khi cuộn nếu trình duyệt hỗ trợ và chuyển động được cho phép.
// Nếu không, các phần tử .reveal vẫn hiển thị như nội dung HTML bình thường.
if (!reduceMotion.matches && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(".reveal");
  // Khi một phần tử vào vùng nhìn thấy, thêm class CSS rồi ngừng quan sát phần tử đó.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
  // CSS chỉ ẩn .reveal sau khi observer đã được thiết lập.
  document.documentElement.classList.add("reveal-ready");
}
