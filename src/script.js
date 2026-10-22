const WHATSAPP_NUMBER = "601118837488";

// Gantikan dua pautan di bawah dengan URL saluran WhatsApp sebenar.
const CHANNEL_URLS = {
  1: "https://whatsapp.com/channel/",
  2: "https://whatsapp.com/channel/"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

document.querySelectorAll(".channel-link").forEach(link => {
  const id = link.dataset.channel;
  const url = CHANNEL_URLS[id];
  link.href = url;
  if (!url || url === "https://whatsapp.com/channel/") {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Pautan Saluran " + id + " belum ditetapkan. Edit CHANNEL_URLS dalam src/script.js.");
    });
  }
});

document.querySelectorAll(".choose").forEach(link => link.addEventListener("click", () => {
  const wanted = link.dataset.service.toLowerCase();
  const select = document.getElementById("service");
  const option = Array.from(select.options).find(o => wanted.includes(o.text.toLowerCase().split(" (")[0]) || o.text.toLowerCase().includes(wanted.split(" (")[0]));
  if (option) select.value = option.value;
}));

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("customerName") || "").trim();
  const service = String(data.get("service") || "").trim();
  const problem = String(data.get("problem") || "").trim();
  const budget = String(data.get("budget") || "Belum pasti").trim();
  const status = document.getElementById("formStatus");
  if (!name || !service || !problem) {
    status.textContent = "Sila lengkapkan nama, servis dan penerangan masalah.";
    return;
  }
  const message = [
    "Hi KAIZAS FIX BUG, saya nak bertanya/tempah servis.",
    "",
    "Nama: " + name,
    "Servis: " + service,
    "Penerangan masalah: " + problem,
    "Bajet: " + budget,
    "",
    "Mohon pemeriksaan awal dan sebut harga. Saya faham harga dipersetujui sebelum kerja bermula."
  ].join("\n");
  status.textContent = "WhatsApp dibuka untuk anda menyemak dan menghantar mesej.";
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
});
