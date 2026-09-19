document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const contactForm = document.getElementById('contactForm');

  // 1. Pengaturan Mode Terang / Gelap
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      if (document.body.classList.contains('light-mode')) {
        themeIcon.className = 'fas fa-sun';
      } else {
        themeIcon.className = 'fas fa-moon';
      }
    });
  }

  // 2. Fitur Toggle Menu Navigasi di HP
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Menutup menu HP saat tautan diklik
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Penanganan Form Kontak (Kirim Email via EmailJS)
  if (contactForm) {
    // Inisialisasi EmailJS (Ganti PUBLIC_KEY dengan milikmu)
    emailjs.init("PUBLIC_KEY_KAMU");

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const btnSubmit = this.querySelector('button[type="submit"]');
      const originalBtnText = btnSubmit.textContent;

      // Ubah status tombol saat mengirim
      btnSubmit.textContent = 'Mengirim...';
      btnSubmit.disabled = true;

      // Parameter: 'SERVICE_ID', 'TEMPLATE_ID', form HTML
      emailjs.sendForm('SERVICE_ID_KAMU', 'TEMPLATE_ID_KAMU', this)
        .then(() => {
          alert('Terima kasih! Pesan kamu telah berhasil terkirim ke email.');
          contactForm.reset();
        })
        .catch((error) => {
          alert('Gagal mengirim pesan. Silakan coba lagi nanti.');
          console.error('EmailJS Error:', error);
        })
        .finally(() => {
          // Kembalikan tombol ke kondisi semula
          btnSubmit.textContent = originalBtnText;
          btnSubmit.disabled = false;
        });
    });
  }
});