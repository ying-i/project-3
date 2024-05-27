const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left:`${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill:"forwards"});
});


// toggleAdditionalinputs() function is in home.html, so won't be used because we don't need home.html(just a draft)
// function toggleAdditionalinputs(){
//     var additionalInputs = document.getElementById("additionalInputs");
//     if(additionalInputs.style.display === "none"){
//         additionalInputs.style.display = "block";
//     }else{
//         additionalInputs.style.display = "none";
//     }
// }

