/* ============================================================
   script.js — small interactions for the hero landing page
   1. Mobile menu toggle
   2. Fixed chat widget open/close
   ============================================================ */

// ---------- Mobile menu ----------
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuButton.setAttribute("aria-expanded", String(!isOpen));
});

// Close the mobile menu after choosing a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// ---------- Chat widget ----------
const chatButton = document.getElementById("chatButton");
const chatPanel = document.getElementById("chatPanel");
const chatForm = document.getElementById("chatForm");

chatButton.addEventListener("click", (event) => {
  event.stopPropagation(); // keep the document handler from closing it instantly
  chatPanel.classList.toggle("hidden");
});

// Close the chat panel when clicking anywhere outside it
document.addEventListener("click", (event) => {
  if (!chatPanel.classList.contains("hidden") &&
      !chatPanel.contains(event.target) &&
      event.target !== chatButton) {
    chatPanel.classList.add("hidden");
  }
});

// Simple send feedback — clears the input and shows a thank-you note
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = chatForm.querySelector("input");
  if (input.value.trim() === "") return;

  chatPanel.querySelector("p:nth-child(2)").textContent =
    "Thanks! Our team will reply shortly.";
  input.value = "";
});
