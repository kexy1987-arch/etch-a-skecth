const sketchPad = document.getElementById("sketch-pad");
const random = document.getElementById("random");
const light = document.getElementById("lighter");
const dark = document.getElementById("darker");
const clear = document.getElementById("clear");

let tool = "";

random.addEventListener("click", ()=> tool = "random");
light.addEventListener("click", () => tool = "light");
dark.addEventListener("click", () => tool = "dark");


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

function reset(){
    tool = ""
}

function clearing(){
    const squares = document.querySelectorAll(".square")
    squares.forEach(sq => sq.style.backgroundColor = "")
    console.log(tool)
}

function randomColor(e){
    const r = Math.floor(Math.random()* 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
    console.log(r, g, b)
}

function darker(){
    console.log(tool)
    const bg = e.target.style.backgroundColor;
    const splitted = bg.split("");
    const a = splitted[16]
    console.log(bg)

    if (e.target.style.backgroundColor) {
        e.target.style.backgroundColor = `rgba(0, 0, 0, 0.${a + 1}`;
        return;
    }
}

function lighter(e){
    const bg = e.target.style.backgroundColor;
    const splitted = bg.split("");
    const a = splitted[16]
    console.log(bg)

    if (e.target.style.backgroundColor) {
        e.target.style.backgroundColor = `rgba(0, 0, 0, 0.${a - 1}`;
        return;
    }
}
function draw(e){
    if(tool === "random"){
        randomColor(e);
    }else if(tool === "light"){
        lighter(e);
    }else if(tool === "dark"){
        darker();
    }else{
        e.target.style.background = "rgba(0, 0, 0, 0.995)";
    }
    console.log(tool)
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





