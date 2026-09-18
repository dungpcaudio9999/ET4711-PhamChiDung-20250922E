"use strict";

const helloButton = document.querySelector("#hello");
const message = document.querySelector("#message");

// TODO CP3: Thay MSSV và họ tên bằng thông tin của bạn.
helloButton.addEventListener("click", () => {
  message.textContent = "Xin chào T4711! Tôi là Họ tên — MSSV.";
});

