document.getElementById("header-utama").textContent = "Seleksi ID Berhasil";

let produkItems = Array.from(document.getElementsByClassName("produk-item"));
produkItems.forEach(item => {
  item.classList.add("tebal");
  item.textContent = "[UPDATED] " + item.textContent;
});

let pendingEl = document.querySelector('[data-status="pending"]');
if (pendingEl) {
  pendingEl.style.backgroundColor = "yellow";
}

let listItems = document.querySelectorAll("ul li");
listItems.forEach(li => {
  li.innerHTML = "<span>Konten Baru dari JS</span>";
});
