function showPage(pageId, button) {
  // sembunyikan semua halaman
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // tampilkan halaman terpilih
  document.getElementById(pageId).classList.add('active');

  // navbar aktif
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
  });

  button.classList.add('active');
}

const photos = [
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/foto6.jpg",
  "img/BARU1.jpg",
  "img/BARU 2.jpg",
  "img/93.jpg",
  "img/foto10.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("albumPhoto");

/* FOTO BERIKUTNYA */
function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length;
  changePhoto();
}

/* FOTO SEBELUMNYA */
function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  changePhoto();
}

/* GANTI FOTO */
function changePhoto() {
  imgElement.style.animation = "none";
  void imgElement.offsetWidth; // reset animasi
  imgElement.style.animation = "fadeZoom .8s ease";
  imgElement.src = photos[currentIndex];
}

/* AUTO SLIDE 4 DETIK */
setInterval(nextPhoto, 4000);

window.addEventListener("load", () => {
  // HILANGKAN WELCOME
  setTimeout(() => {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 3000);

  // LOGO INSTAGRAM MUNCUL SETELAH 8 DETIK
  setTimeout(() => {
    const ig = document.getElementById("igLogo");
    ig.classList.remove("hidden");
    ig.classList.add("show");
  }, 8000); // ⏱️ 8 DETIK
});

//pesan

function kirimPesan() {
  const namaInput = document.getElementById("nama");
  const pesanInput = document.getElementById("pesan");
  const box = document.getElementById("feedbackBox");

  let nama = namaInput.value.trim();
  let pesan = pesanInput.value.trim();

  if (pesan === "") {
    alert("Pesan tidak boleh kosong!");
    return;
  }

  if (nama === "") {
    nama = "Anonim";
  }

  const div = document.createElement("div");
  div.className = "feedback-item";
  div.innerHTML = `<strong>${nama}</strong><span>${pesan}</span>`;

  box.appendChild(div);

  // reset input
  namaInput.value = "";
  pesanInput.value = "";
}

function openStrukturV3() {
  document.getElementById("strukturV3").style.display = "flex";
}

function closeStrukturV3() {
  document.getElementById("strukturV3").style.display = "none";
}

  // DELAY LOGO (8 detik)
   const banner = document.getElementById("slideBanner");

  // klik → ke Instagram
  banner.addEventListener("click", () => {
    window.open("https://instagram.com/yapenhasboediluhur_official", "_blank");
  });

  function showBanner() {
    banner.classList.remove("show"); // reset
    void banner.offsetWidth;         // force reflow
    banner.classList.add("show");
  }

  // tampil pertama kali
  setTimeout(showBanner, 3000);

  // ulang setiap 15 detik
  setInterval(showBanner, 15000);

  //PROFIL CARD

document.querySelectorAll('.profile-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show');
    card.classList.toggle('flip');
  });
});



const cards = document.querySelectorAll('.profile-card');
const searchInput = document.getElementById('searchInput');
const filterHobi = document.getElementById('filterHobi');

/* SEARCH */
searchInput.addEventListener('input', () => {
  const val = searchInput.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(val) ? 'block' : 'none';
  });
});

/* SORT */
document.getElementById('sortAZ').onclick = () => sortCards(true);
document.getElementById('sortZA').onclick = () => sortCards(false);

function sortCards(asc){
  const parent = document.querySelector('.siswa-grid');
  [...cards]
    .sort((a,b)=>{
      const n1 = a.querySelector('h3').innerText;
      const n2 = b.querySelector('h3').innerText;
      return asc ? n1.localeCompare(n2) : n2.localeCompare(n1);
    })
    .forEach(c=>parent.appendChild(c));
}

/* MODAL */
const modal = document.getElementById('profileModal');
document.querySelectorAll('.detail-btn').forEach(btn=>{
  btn.onclick = ()=>{
    const card = btn.parentElement;
    document.getElementById('modalImg').src = card.querySelector('img').src;
    document.getElementById('modalName').innerText = card.querySelector('h3').innerText;
    document.getElementById('modalRole').innerText = card.querySelector('p').innerText;
    document.getElementById('modalDetail').innerText = card.innerText;
    modal.style.display = 'flex';
  }
});

document.querySelector('.close').onclick = ()=> modal.style.display='none';

/* DARK MODE */
document.getElementById('toggleMode').onclick = ()=>{
  document.documentElement.classList.toggle('light');
};
