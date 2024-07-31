// Grid size
const grid = document.querySelector(".grid");

function adjustWidth(){
    if(document.body.offsetWidth < 960){
        grid.style.maxWidth = 'none';
        grid.style.maxHeight = 'none';
        return;
    }
    // Maintain an aspect ratio of 3/2
    const newWidth = (3/2) * grid.offsetHeight;
    grid.style.maxWidth = `${newWidth}px`;
    
}

adjustWidth();
window.addEventListener("resize", adjustWidth);