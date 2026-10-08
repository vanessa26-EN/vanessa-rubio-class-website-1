const button = document.querySelector("#colorbutton");
let red=false;
function changeButton() {
    //AI-assisted code
    red = !red;
    if (red) {
        document.querySelector(".petal1").style.backgroundColor ="red";
        document.querySelector(".petal2").style.backgroundColor ="red";
        document.querySelector(".petal3").style.backgroundColor ="red";
        document.querySelector(".petal4").style.backgroundColor ="red";
        document.querySelector(".petal5").style.backgroundColor ="red";
        document.querySelector(".petal6").style.backgroundColor ="red";
    } else {
        document.querySelector(".petal1").style.backgroundColor ="purple";
        document.querySelector(".petal2").style.backgroundColor ="purple";
        document.querySelector(".petal3").style.backgroundColor ="purple";
        document.querySelector(".petal4").style.backgroundColor ="purple";
        document.querySelector(".petal5").style.backgroundColor ="purple";
        document.querySelector(".petal6").style.backgroundColor ="purple";
    }
}

button.addEventListener("click", changeButton);