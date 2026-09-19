/* =========================================================
   1. DATA PROFIL (Variabel, Object, & Array)
   ========================================================= */
const dataProfil = {
    nama: "Lathifa Bening Azzahro",
    absen: "02",
    tentang: " Saya adalah siswa yang berdedikasi tinggi dalam bidang pemrograman web dan pengembangan perangkat lunak.",
            pendidikan: [
        { sekolah: "SMK Negeri 1 Kota Blitar", tahun: "2025 - Sekarang" },
        { sekolah: "SMP Negeri 2 Kota Blitar", tahun: "2022 - 2025" },
        { sekolah: "SD Negeri Plosokerep 2 Kota Blitar", tahun: "2016 - 2022" }
    ],
    citaCita: ["Guru"],
    hobi: [ "Mendengarkan Musik", "Desain Grafis"]
};

/* =========================================================
   2. FUNGSIONALITAS MANIPULASI DOM
   ========================================================= */

// Fungsi untuk memuat riwayat pendidikan ke elemen <ul>
function muatDataPendidikan() {
    const containerList = document.getElementById("pendidikan-list");
    if (!containerList) return;

    containerList.innerHTML = ""; // Bersihkan konten awal

    dataProfil.pendidikan.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = `<strong>${item.sekolah}</strong><span class="edu-year">${item.tahun}</span>`;
        containerList.appendChild(li);
    });
}

// Fungsi untuk memuat badge tag Cita-Cita & Hobi
function muatTags() {
    const containerCita = document.getElementById("citacita-tags");
    const containerHobi = document.getElementById("hobi-tags");

    if (containerCita) {
        dataProfil.citaCita.forEach(cita => {
            const span = document.createElement("span");
            span.className = "tag";
            span.innerText = "⭐ " + cita;
            containerCita.appendChild(span);
        });
    }

    if (containerHobi) {
        dataProfil.hobi.forEach(hobi => {
            const span = document.createElement("span");
            span.className = "tag";
            span.innerText = "🎯 " + hobi;
            containerHobi.appendChild(span);
        });
    }
}

/* =========================================================
   3. EVENT HANDLER & INTERAKSI
   ========================================================= */

// Fungsi interaktif yang dipanggil saat tombol diklik (event onclick)
function tampilkanPesanKhusus() {
    const box = document.getElementById("interactive-message");
    if (!box) return;

    const pesanMotivasi = [
        "\"Masa depan adalah milik mereka yang menyiapkan hari ini.\" - Soekarno",
        "\"Teknologi bukan hanya alat, tetapi seni memecahkan masalah.\"",
        "\"Jangan takut gagal, takutlah jika tidak pernah mencoba sesuatu yang baru!\""
    ];

    // Mengambil pesan secara acak
    const indexAcak = Math.floor(Math.random() * pesanMotivasi.length);

    box.style.display = "block";
    box.innerHTML = `<p style="font-style: italic; color: #ff85e8;">${pesanMotivasi[indexAcak]}</p>`;
}

/* =========================================================
   4. INI SIALISASI SAAT HALAMAN DIMUAT
   ========================================================= */
window.onload = function() {
    muatDataPendidikan();
    muatTags();
};