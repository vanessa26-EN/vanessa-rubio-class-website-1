const container = document.querySelector(".container");
const message = document.querySelector("#message");
const secretMessage = document.querySelector(".secret-message");

function changeMessage() {
   secretMessage.style.display = "block";
}

container.addEventListener("mouseenter", changeMessage);
button.addEventListener("mouseleave", restMessage);