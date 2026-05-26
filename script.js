const logo = document.getElementById("logo")

setTimeout(() => {
    logo.style.animation = "fadeOut 1s ease-in-out forwards"

    setTimeout(() => {
        logo.innerText = "Glow."
        logo.style.animation = "fadeIn 1s ease-in-out forwards"
    }, 1000)
}, 2000)

