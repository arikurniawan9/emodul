// Pindah dari halaman awal ke menu
document.getElementById("startBtn").addEventListener("click", function () {
  document.body.classList.remove("bg_awal");
  document.body.classList.add("bg_menu");
  document.getElementById("halamanAwal").style.display = "none";
  document.getElementById("halamanMenu").style.display = "block";

  // Trigger reflow to restart animation
  document.querySelectorAll(".unit-button").forEach((btn) => {
    btn.classList.remove("unit-button"); // force reflow
    void btn.offsetWidth;
    btn.classList.add("unit-button");
  });
});

// Tombol Home
document.getElementById("homeBtn").addEventListener("click", function () {
  window.location.replace("index.html"); // tidak bisa kembali
});

// Modal Settings
const settingsBtn = document.getElementById("settingsBtn");
const modal = document.getElementById("modalSettings");
const closeModal = document.getElementById("closeModal");

settingsBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
