// JavaScript untuk mengontrol animasi smooth scrolling saat pengguna mengklik navbar

// Ambil semua tautan di navbar
var navLinks = document.querySelectorAll("#navbar ul li a");

// Tambahkan event listener untuk setiap tautan
navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah tindakan bawaan dari tautan

        var targetId = this.getAttribute("href"); // Ambil id target dari tautan

        // Ambil elemen target berdasarkan id
        var targetElement = document.querySelector(targetId);

        // Lakukan animasi scrolling smooth
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});
