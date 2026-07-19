window.addEventListener(
    "load",

    ()=>{

        setTimeout(()=>{

            document
            .getElementById(
                "loader"
            )
            .style.display=
            "none";

        },2000);

    }
)

const targetDate =
new Date(
    "November 22, 2026 10:00:00"
);

setInterval(()=>{

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );

    const hours =
    Math.floor(
        (
            distance %
            (1000*60*60*24)
        )
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (
            distance %
            (1000*60*60)
        )
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (
            distance %
            (1000*60)
        )
        /
        1000
    );

    document
    .getElementById(
        "days"
    ).innerHTML=
    days;

    document
    .getElementById(
        "hours"
    ).innerHTML=
    hours;

    document
    .getElementById(
        "minutes"
    ).innerHTML=
    minutes;

    document
    .getElementById(
        "seconds"
    ).innerHTML=
    seconds;

},1000);

function copyText(text){

    navigator
    .clipboard
    .writeText(text);

    alert(
        "Nomor rekening berhasil disalin!"
    );

}

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

galleryImages.forEach(
    (image)=>{

        image.addEventListener(

            "click",

            ()=>{

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

    ()=>{

        lightbox.style.display =
        "none";

    }

);

document
.getElementById(
    "rsvpForm"
)
.addEventListener(

    "submit",

    function(e){

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

const music =
document.getElementById(
    "bgMusic"
);

const musicButton =
document.getElementById(
    "musicButton"
);

musicButton.addEventListener(

    "click",

    ()=>{

        if(music.paused){

            music.play();

        }else{

            music.pause();

        }

    }

);



