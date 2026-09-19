"use strict";

const helloButton = document.querySelector("#hello");
const message = document.querySelector("#message");

helloButton.addEventListener("click", () => {
  message.textContent = "Xin chào! Tôi là Phạm Chí Dũng — 20250922E.";
});
