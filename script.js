const sketchPad = document.getElementById("sketch-pad");

let numOfSquares = 16;
for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    createDivs();
}

function getUserInput(){
    numOfSquares = 0;
    if(numOfSquares < 4 || numOfSquares > 100){
        numOfSquares = prompt("Please add a number between 4 and 100");

        sketchPad.innerHTML = "";
        for (let i = 0; i < numOfSquares * numOfSquares; i++){
            createDivs();
        }
        return;
    }else{
        getUserInput();
    };
    console.log(arr)
};

function createDivs(){
    const divs = document.createElement("div");
    divs.className = "square"
    divs.style.height = `${(sketchPad.offsetWidth / numOfSquares) - 2}px`;
    divs.style.width = `${(sketchPad.offsetWidth / numOfSquares) - 2}px`;
    sketchPad.appendChild(divs)
    return divs;
}
function draw(e){
        console.log(e.target.style.backgroundColor);
  
    e.target.classList.add("sq-hover")
}

let drawing = false;
sketchPad.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    if (!drawing){
        squares.forEach(div => {
            div.addEventListener("mouseover", draw, true)

        })
        drawing = true;
    }else{
        squares.forEach(div => {
            div.removeEventListener("mouseover", draw, true)
        })
        drawing = false;
    }
})





