//Instantiating grid  and random RGB values
const grid = document.querySelector(".grid");
R = `${Math.floor(Math.random() * 255)}`;
G = `${Math.floor(Math.random() * 255)}`;
B = `${Math.floor(Math.random() * 255)}`;

const randomColor = "rgb(" + R + "," + G + "," + B + ")";
// const size = document.getElementById('gridSubmit').addEventListener('submi',function(){
//     console.log("size")
// })

createGrid = () => {
  // if(!slider){

  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = randomColor;
    });
    grid.appendChild(div);
  }
  // } else{
//   console.log("slider");
//   for (let i = 0; i < slider.value * slider.value; i++) {
//     const div = document.createElement("div");
//     div.classList.add("square");
//     div.addEventListener("mouseover", function (event) {
//       event.target.style.backgroundColor = randomColor;
//     });
//     grid.appendChild(div);
//   }
  // }
};

// Slider
const slider = document.getElementById("SliderRange");
const output = document.getElementById("sizeValue");

output.innerHTML = slider.value;

function removeAllChildNodes(parent){
    while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
    }
}

slider.addEventListener('input',function () {
        let val =  document.getElementById('SliderRange').value;
        output.textContent = val;
        removeAllChildNodes(grid);
        grid.setAttribute('style',`grid-template-columns:repeat(${val},2fr); grid-template-rows:repeat(${val},2fr);`);
        for (let i = 0; i < val * val; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.addEventListener("mouseover", function (event) {
              event.target.style.backgroundColor = randomColor;
            });
            grid.appendChild(div);
          }
})

// Reset
console.log("reset");
resetbutton = document.querySelector("#reset");

resetbutton.addEventListener("click", function () {
  const cells = document.getElementsByClassName("square");

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
  }

  console.log("reset ");
});

// Color
const color = document.querySelector("#color");
color.addEventListener("click", function () {
  alert("this feature is not free , refresh and get a new color");

  console.log("color change" + randomColor);
});

//Calling create grid as soon as the page loads
createGrid();
