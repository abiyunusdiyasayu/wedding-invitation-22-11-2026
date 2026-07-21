// ======================
// LOADER
// ======================

window.addEventListener(
    "load",

    () => {

        const loader =
        document.getElementById(
            "loader"
        );

        if (loader) {

            setTimeout(() => {

                loader.style.display =
                "none";

            }, 500);

        }

    }

);

const cover = document.getElementById("cover");
const invitationContent =
document.getElementById("invitationContent");

const button =
document.getElementById("openInvitation");

invitationContent.style.display = "none";

button.addEventListener(
    "click",
    () => {

        cover.style.display = "none";

        invitationContent.style.display =
        "block";

    }
);

// ======================
// OPEN INVITATION
// ======================
const openInvitation =
document.getElementById(
    "openInvitation"
);

console.log(openInvitation);

if (openInvitation) {

    openInvitation.addEventListener(

        "click",

        () => {

            alert(
                "Tombol berhasil diklik!"
            );

        }

    );

}

// ======================
// COUNTDOWN
// ======================

const targetDate =
new Date(
    "November 22, 2026 08:00:00"
);

setInterval(() => {

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (
            distance %
            (1000 * 60 * 60 * 24)
        ) /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (
            distance %
            (1000 * 60 * 60)
        ) /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (
            distance %
            (1000 * 60)
        ) / 1000
    );

    const day =
    document.getElementById(
        "days"
    );

    const hour =
    document.getElementById(
        "hours"
    );

    const minute =
    document.getElementById(
        "minutes"
    );

    const second =
    document.getElementById(
        "seconds"
    );

    if (day) day.innerHTML = days;
    if (hour) hour.innerHTML = hours;
    if (minute) minute.innerHTML = minutes;
    if (second) second.innerHTML = seconds;

}, 1000);

// ======================
// COPY TEXT
// ======================

function copyText(
    text,
    message
) {

    navigator
    .clipboard
    .writeText(text);

    alert(message);

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

if (lightbox) {

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

        function (e) {

            e.preventDefault();

            const name =
            document
            .getElementById(
                "name"
            ).value;

            const attendance =
            document
            .getElementById(
                "attendance"
            ).value;

            const message =
            document
            .getElementById(
                "message"
            ).value;

            const whatsappURL =

                `https://wa.me/6281574397472?text=
Nama:%20${name}%0A
Kehadiran:%20${attendance}%0A
Pesan:%20${message}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        }

    );

}

// ======================
// MUSIC
// ======================

const music =
document.getElementById(
    "bgMusic"
);

const musicButton =
document.getElementById(
    "musicButton"
);

if (
    music &&
    musicButton
) {

    musicButton
    .addEventListener(

        "click",

        () => {

            if (
                music.paused
            ) {

                music.play();

            } else {

                music.pause();

            }

        }

    );

}

// ======================
// LIVE STREAMING
// ======================

function streamAlert() {

    alert(
        "Sementara dereng wonten."
    );

}

document.addEventListener(
    "DOMContentLoaded",

    () => {

        const button =
        document.getElementById(
            "openInvitation"
        );

        if(button){

            button.onclick =
            function(){

                alert(
                    "Buka Undangan berhasil!"
                );

            };

        }

    }
);