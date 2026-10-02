/* ========================================= */
/* TODAS AS TELAS */
/* ========================================= */

const scenes = [
    document.getElementById("scene1"),
    document.getElementById("scene2"),
    document.getElementById("scene3"),
    document.getElementById("scene4"),
    document.getElementById("scene5"),
    document.getElementById("scene6"),
    document.getElementById("scene7"),
    document.getElementById("scene8")
];

let currentScene = 0;


/* ========================================= */
/* MÚSICAS */
/* ========================================= */

const mainMusic = document.getElementById("mainMusic");
const auraMusic = document.getElementById("auraMusic");

/* Volume da música principal */
mainMusic.volume = 0.45;

/* Volume da música de perda de aura */
auraMusic.volume = 0.75;


/* ========================================= */
/* TROCAR DE TELA */
/* ========================================= */

function nextScene() {

    if (currentScene >= scenes.length - 1) {
        return;
    }

    const current = scenes[currentScene];
    const next = scenes[currentScene + 1];

    current.classList.remove("active");

    setTimeout(function () {

        currentScene++;

        next.classList.add("active");


        /* ========================================= */
        /* CHEGOU NA ÚLTIMA TELA */
        /* ========================================= */

        if (currentScene === 7) {

            /* Para a música fofinha */
            mainMusic.pause();
            mainMusic.currentTime = 0;

            /* Começa a música da perda de aura */
            auraMusic.currentTime = 0;

            auraMusic.play().catch(function (error) {
                console.log("Não foi possível iniciar a música de aura:", error);
            });
        }

    }, 180);
}


/* ========================================= */
/* PRIMEIRO BOTÃO */
/* ========================================= */

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", function () {

    /* ========================================= */
    /* COMEÇA A MÚSICA PRINCIPAL */
    /* ========================================= */

    mainMusic.currentTime = 0;

    mainMusic.play().catch(function (error) {
        console.log("Não foi possível iniciar a música principal:", error);
    });

    nextScene();

});


/* ========================================= */
/* BOTÕES CONTINUAR */
/* ========================================= */

const continueButtons = document.querySelectorAll(".continue-button");

continueButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        nextScene();

    });

});