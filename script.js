/* script.js */

// ===================================
// SCRIPT 1: Jam dan Tanggal Digital
// ===================================
window.setTimeout("tampilWaktu()", 1000);

function tampilWaktu() {
  var waktu = new Date();
  var bulan = waktu.getMonth() + 1; // getMonth() dimulai dari 0 (Januari), jadi +1

  // Fungsi untuk menambahkan '0' di depan angka jika kurang dari 10 (misal: 03, 09)
  function pad(number) {
    return number < 10 ? '0' + number : number;
  }

  // Set timeout untuk mengulang fungsi setiap 1 detik
  setTimeout("tampilWaktu()", 1000);

  // Menampilkan Tanggal (DD/MM/YYYY)
  document.getElementById("tanggal").innerHTML =
    pad(waktu.getDate()) + "/" + pad(bulan) + "/" + waktu.getFullYear();

  // Menampilkan Jam (HH:MM:SS)
  document.getElementById("jam").innerHTML =
    pad(waktu.getHours()) +
    ":" +
    pad(waktu.getMinutes()) +
    ":" +
    pad(waktu.getSeconds());
}


// ===================================
// SCRIPT 2: Dark Mode Toggle (dengan Local Storage)
// ===================================
const htmlElement = document.documentElement;
const lightModeBtn = document.getElementById("lightMode");
const darkModeBtn = document.getElementById("darkMode");

const themeKey = 'data-bs-theme';

// Fungsi untuk mengatur tema dan menyimpannya di Local Storage
function setTheme(theme) {
  htmlElement.setAttribute(themeKey, theme);
  localStorage.setItem(themeKey, theme);
}

// Cek dan terapkan tema yang tersimpan saat halaman dimuat
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) {
    htmlElement.setAttribute(themeKey, savedTheme);
}

// Event listener untuk tombol Light Mode
lightModeBtn.addEventListener("click", () => {
  setTheme("light");
});

// Event listener untuk tombol Dark Mode
darkModeBtn.addEventListener("click", () => {
  setTheme("dark");
});