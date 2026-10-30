
/* ======================
   LOADER
====================== */

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

window.addEventListener("load", hideLoader);

// Pengaman jika event load tidak berjalan
setTimeout(hideLoader, 5000);

// ======================
// OPEN INVITATION
// ======================

document.addEventListener("DOMContentLoaded", () => {

    const cover = document.getElementById("cover");
    const content = document.getElementById("invitationContent");
    const button = document.getElementById("openInvitation");
    const music = document.getElementById("bgMusic");

    if (content) {
        content.style.display = "none";
    }

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

            if (music) {
                music.play().catch(() => {
                    console.log(
                        "Autoplay diblokir browser."
                    );
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