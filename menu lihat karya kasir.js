// Fungsi format angka ke Rupiah dengan pemisah ribuan (titik)
const formatRupiah = (angka) => {
  return "Rp" + Math.round(angka).toLocaleString("id-ID");
};

function hitungTotal() {
  // 1. Ambil data dari input DOM
  const namaPembeli = document.getElementById("namaPembeli").value;
  const namaBarang = document.getElementById("namaBarang").value;
  
  // Mengambil angka murni
  const hargaBarangInput = document.getElementById("hargaBarang").value;
  const jumlahBarangInput = document.getElementById("jumlahBarang").value;

  const hargaBarang = parseFloat(hargaBarangInput);
  const jumlahBarang = parseInt(jumlahBarangInput);

  // Validasi jika input belum diisi
  if (!namaPembeli || !namaBarang || isNaN(hargaBarang) || isNaN(jumlahBarang)) {
    alert("Harap isi semua inputan dengan benar!");
    return;
  }

  // 2. Hitung subtotal
  const subtotal = hargaBarang * jumlahBarang;

  // 3. Logika Diskon berdasarkan Subtotal
  let persenDiskon = 0;
  if (subtotal >= 500000) {
    persenDiskon = 0.10; // 10%
  } else if (subtotal >= 250000) {
    persenDiskon = 0.05; // 5%
  } else {
    persenDiskon = 0;    // 0%
  }

  const diskon = subtotal * persenDiskon;

  // 4. Hitung Total Pembayaran
  const totalBayar = subtotal - diskon;

  // 5. Tampilkan Hasil Ke DOM dalam format Rupiah Lengkap
  document.getElementById("outNamaPembeli").innerText = namaPembeli;
  document.getElementById("outNamaBarang").innerText = namaBarang;
  document.getElementById("outSubtotal").innerText = formatRupiah(subtotal);
  document.getElementById("outDiskon").innerText = formatRupiah(diskon);
  document.getElementById("outTotalBayar").innerText = formatRupiah(totalBayar);

  // Tampilkan Struk Output
  document.getElementById("outputContainer").classList.remove("hidden");
}

// Menghubungkan fungsi ke tombol
document.addEventListener("DOMContentLoaded", function () {
  const btnHitung = document.getElementById("btnHitung");
  if (btnHitung) {
    btnHitung.addEventListener("click", function(event) {
      event.preventDefault();
      hitungTotal();
    });
  }
});