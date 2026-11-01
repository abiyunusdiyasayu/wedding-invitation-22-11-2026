

/* ======================
   LOADER
====================== */

const loaderStartTime = Date.now();

function hideLoader() {
    const loader = document.getElementById("loader");
    const cover = document.getElementById("cover");

    if (loader) {
        loader.style.display = "none";
    }

    if (cover) {
        cover.style.display = "flex";
        cover.style.visibility = "visible";
        cover.style.opacity = "1";
    }
}

window.addEventListener("load", () => {
    const elapsed = Date.now() - loaderStartTime;
    const remaining = Math.max(0, 2000 - elapsed);

    setTimeout(hideLoader, remaining);
});

// Pengaman jika halaman terlalu lama dimuat
setTimeout(hideLoader, 10000);


/* ======================
   OPEN INVITATION
====================== */

document.addEventListener("DOMContentLoaded", () => {

    const cover = document.getElementById("cover");
    const content = document.getElementById("invitationContent");
    const button = document.getElementById("openInvitation");
    const music = document.getElementById("bgMusic");

    // Sembunyikan isi undangan sebelum tombol diklik
    if (content) {
        content.style.display = "none";
    }

    // Aksi tombol Buka Undangan
    if (button) {
        button.addEventListener("click", () => {

            if (cover) {
                cover.style.display = "none";
            }

            if (content) {
                content.style.display = "block";

                content.scrollIntoView({
                    behavior: "smooth"
                });
            }

            // Putar musik
            if (music) {
                music.play().catch(() => {
                    console.log("Autoplay diblokir browser.");
                });
            }

            button.style.display = "none";
        });
    }

});


// ======================
// COUNTDOWN
// ======================

const targetDate =
new Date("November 22, 2026 08:00:00");

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance %
            (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
            (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML =
        days;

    document.getElementById("hours").innerHTML =
        hours;

    document.getElementById("minutes").innerHTML =
        minutes;

    document.getElementById("seconds").innerHTML =
        seconds;

}, 1000);

// ======================
// COPY TEXT
// ======================

function copyText(text, message) {

    navigator.clipboard
        .writeText(text)
        .then(() => {

            alert(message);

        });

}

// ======================
// GALLERY LIGHTBOX
// ======================

const galleryImages =
document.querySelectorAll(
    ".gallery-grid img"
);

const lightbox =
document.getElementById(
    "lightbox"
);

const lightboxImage =
document.getElementById(
    "lightbox-image"
);

if (lightbox && lightboxImage) {

    galleryImages.forEach(
        (image) => {

            image.addEventListener(
                "click",

                () => {

                    lightbox.style.display =
                        "flex";

                    lightboxImage.src =
                        image.src;

                }

            );

        }
    );

    lightbox.addEventListener(
        "click",

        () => {

            lightbox.style.display =
                "none";

        }

    );

}



/* ======================
   RSVP - GOOGLE SHEETS
====================== */

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {
    rsvpForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nama = document.getElementById("name").value.trim();
        const kehadiran = document.getElementById("attendance").value;
        const pesan = document.getElementById("message").value.trim();
        const tombol = rsvpForm.querySelector('button[type="submit"]');

        if (!nama || !kehadiran) {
            alert("Mohon isi nama dan pilihan kehadiran.");
            return;
        }

        if (tombol) {
            tombol.disabled = true;
            tombol.textContent = "Mengirim...";
        }

        try {
            const formData = new URLSearchParams();
            formData.append("nama", nama);
            formData.append("kehadiran", kehadiran);
            formData.append("pesan", pesan);

            await fetch(
                "https://script.google.com/macros/s/AKfycbx2iV9JRcQ65SLTecvG-fi7kn1BzhGuJj9YJuculvYMDib-MVL4R8xfjStwkxRf0jgu/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: formData
                }
            );

                if (rsvpModal) {
                rsvpModal.classList.add("show");
            }

            // Jangan kosongkan formulir dahulu.
            // Kita tunggu sampai penyimpanan berhasil diverifikasi.

        } catch (error) {
            console.error("Kesalahan pengiriman RSVP:", error);
            alert("Pengiriman gagal. Silakan coba kembali.");
        } finally {
            if (tombol) {
                tombol.disabled = false;
                tombol.textContent = "Kirim RSVP";
            }
        }
    });
}

// ======================
// MUSIC BUTTON
// ======================

const music =
document.getElementById(
    "bgMusic"
);

const musicButton =
document.getElementById(
    "musicButton"
);

if (music && musicButton) {

    musicButton.addEventListener(
        "click",

        () => {

            if (music.paused) {

                music.play();

                musicButton.innerHTML =
                    "❚❚";

            } else {

                music.pause();

                musicButton.innerHTML =
                    "♪";

            }

        }

    );

}

// ======================
// LIVE STREAMING
// ======================

function streamAlert() {

    alert(
        "Live streaming tidak tersedia saat ini."
    );

}


(() => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to");
    const guestNameElement = document.getElementById("guestName");

    if (guestNameElement && guestName && guestName.trim()) {
        guestNameElement.textContent = guestName.trim();
    }
})();

(() => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to");
    const nameInput = document.getElementById("name");

    if (nameInput && guestName && guestName.trim()) {
        nameInput.value = guestName.trim();
    }
})();

/* ======================
   RSVP MODAL CONTROLS
====================== */

const rsvpModal = document.getElementById("rsvpModal");
const closeRsvpModal = document.getElementById("closeRsvpModal");

if (closeRsvpModal && rsvpModal) {
    closeRsvpModal.addEventListener("click", () => {
        rsvpModal.classList.remove("show");
    });
}

// Tutup popup jika area luar diklik
if (rsvpModal) {
    rsvpModal.addEventListener("click", (e) => {
        if (e.target === rsvpModal) {
            rsvpModal.classList.remove("show");
        }
    });
}


/* ======================
   LOAD RSVP WISHES
====================== */

const WISHES_API_URL = "https://script.google.com/macros/s/AKfycbx2iV9JRcQ65SLTecvG-fi7kn1BzhGuJj9YJuculvYMDib-MVL4R8xfjStwkxRf0jgu/exec";

const WISHES_PER_PAGE = 5;

let allWishes = [];
let currentWishPage = 1;


function renderWishPage() {
    const container = document.getElementById("wishContainer");
    const pagination = document.getElementById("wishPagination");
    const countInfo = document.getElementById("wishCount");

    if (!container || !pagination) return;

    const totalPages = Math.ceil(allWishes.length / WISHES_PER_PAGE);

    // Jika belum ada ucapan
    if (totalPages === 0) {
        container.innerHTML = `
            <p class="wish-loading">
                Belum ada ucapan dan doa.
            </p>
        `;

        pagination.innerHTML = "";

        if (countInfo) {
            countInfo.textContent = "Belum ada ucapan.";
        }

        return;
    }

    currentWishPage = Math.min(currentWishPage, totalPages);

    const startIndex = (currentWishPage - 1) * WISHES_PER_PAGE;

    const pageWishes = allWishes.slice(
        startIndex,
        startIndex + WISHES_PER_PAGE
    );

    // Informasi jumlah ucapan
    const firstItem = startIndex + 1;
    const lastItem = Math.min(
        startIndex + pageWishes.length,
        allWishes.length
    );

    if (countInfo) {
        countInfo.textContent =
            `Menampilkan ${firstItem}–${lastItem} dari ${allWishes.length} ucapan`;
    }

    // Tampilkan kartu ucapan
    container.innerHTML = "";

    pageWishes.forEach((item) => {
        const card = document.createElement("div");
        card.className = "wish-card";

        const nama = document.createElement("h4");
        nama.textContent = item.nama;

        const kehadiran = document.createElement("span");
        kehadiran.textContent = item.kehadiran;

        const pesan = document.createElement("p");
        pesan.textContent = item.pesan;

        card.appendChild(nama);
        card.appendChild(kehadiran);
        card.appendChild(pesan);

        container.appendChild(card);
    });

    // Navigasi pagination
    pagination.innerHTML = "";

    const previous = document.createElement("button");
    previous.textContent = "‹";
    previous.disabled = currentWishPage === 1;

    previous.addEventListener("click", () => {
        currentWishPage--;
        renderWishPage();
    });

    pagination.appendChild(previous);

    for (let page = 1; page <= totalPages; page++) {
        const button = document.createElement("button");
        button.textContent = page;

        if (page === currentWishPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            currentWishPage = page;
            renderWishPage();
        });

        pagination.appendChild(button);
    }

    const next = document.createElement("button");
    next.textContent = "›";
    next.disabled = currentWishPage === totalPages;

    next.addEventListener("click", () => {
        currentWishPage++;
        renderWishPage();
    });

    pagination.appendChild(next);
}


async function loadRSVPWishes() {
    const container = document.getElementById("wishContainer");

    if (!container) return;

    try {
        const response = await fetch(
            WISHES_API_URL + "?t=" + Date.now(),
            { cache: "no-store" }
        );

        const result = await response.json();

        if (!result.success) {
            throw new Error("Gagal mengambil data RSVP.");
        }

        // Hanya ambil ucapan yang diizinkan
        allWishes = (result.data || []).filter(
    item => item.pesan && item.pesan.trim() !== ""
);

renderWishPage();

    } catch (error) {
        console.error("Gagal memuat RSVP:", error);

        container.innerHTML = `
            <p class="wish-loading">
                Ucapan belum dapat dimuat.
                Silakan coba beberapa saat lagi.
            </p>
        `;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadRSVPWishes();

    // Perbarui daftar setiap 30 detik
    setInterval(loadRSVPWishes, 30000);
});


/* ======================
   BOTTOM NAVIGATION
====================== */

function updateBottomNav() {
    const bottomNav = document.getElementById("bottomNav");

    if (!bottomNav) return;

    const scrollPosition =
        window.scrollY + window.innerHeight;

    const pageHeight =
        document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 100) {
        bottomNav.classList.add("show");
    } else {
        bottomNav.classList.remove("show");
    }
}

window.addEventListener("scroll", updateBottomNav, {
    passive: true
});

window.addEventListener("resize", updateBottomNav);

updateBottomNav();
