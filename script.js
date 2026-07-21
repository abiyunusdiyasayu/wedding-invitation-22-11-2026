// ======================
// LOADER
// ======================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

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

// ======================
// RSVP
// ======================

const rsvpForm =
document.getElementById(
    "rsvpForm"
);

if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",

        (e) => {

            e.preventDefault();

            const name =
                document.getElementById(
                    "name"
                ).value;

            const attendance =
                document.getElementById(
                    "attendance"
                ).value;

            const message =
                document.getElementById(
                    "message"
                ).value;

            const whatsappURL =
                `https://wa.me/6281574397472?text=Nama:%20${name}%0AKehadiran:%20${attendance}%0APesan:%20${message}`;

            window.open(
                whatsappURL,
                "_blank"
            );

            rsvpForm.reset();

        }

    );

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
        "Live streaming akan tersedia mendekati hari acara."
    );

}