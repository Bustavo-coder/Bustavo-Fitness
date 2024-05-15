const navigate = document.getElementById("navigate")
const mToggle = document.getElementById("menu-toggle")


const active = () => {
    navigate.classList.toggle("active")
}
mToggle.addEventListener("click", active)