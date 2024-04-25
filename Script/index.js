const arrow = document.querySelector("#arrow")

arrow.addEventListener("click", () => {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    })
})

const arrowPointer = document.querySelector(".arrow-pointer");

arrowPointer.addEventListener("click", () => {
    window.scrollTo({
        top: 1000,
        behavior: "smooth",
    })
})