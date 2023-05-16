const grid = document.querySelector('.grid');
R =  `${Math.floor(Math.random()*255)}`
G =  `${Math.floor(Math.random()*255)}`
B =  `${Math.floor(Math.random()*255)}`

const randomColor = 'rgb(' +R+","+G+","+B+")"

createGrid = () => {
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = randomColor;
    })
    grid.appendChild(div); 
}
};

    console.log('reset')
    resetbutton = document.querySelector('#reset');

    resetbutton.addEventListener('click',function(){
        const cells = document.getElementsByClassName('square')
        
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor='white';
            
        }

        console.log("reset ")
    })


   const color = document.querySelector('#color');
    color.addEventListener('click',function(){
       alert("this feature is not free , refresh and get a new color") 
       
        console.log("color change" + randomColor);
        
    });


createGrid();