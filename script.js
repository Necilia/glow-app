const logo = document.getElementById("logo")

setTimeout(() => {
    logo.style.animation = "fadeOut 1s ease-in-out forwards"

    setTimeout(() => {
        logo.innerText = "Glow."
        logo.style.animation = "fadeIn 1s ease-in-out forwards"
    }, 1000)
}, 2000)

const dashboard = document.getElementById("dashboard")

setTimeout(() => {
    dashboard.style.display = "flex"
    dashboard.style.animation = "fadeIn 1s ease-in-out forwards"
}, 5000)

const intro = document.getElementById("intro")

setTimeout(() => {
    intro.style.animation = "fadeOut 1s ease-in-out forwards"
}, 4000)


const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("completed")
    });
});

