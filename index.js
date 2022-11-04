var world = [];

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}

var points = document.getElementById('points')
var score = 0

var worldheight = 15
var worldwidth = 15


function drawWorld() {
    output = "";
    for (var row=0; row<=worldheight; row++){
        world.push([1])
        output += "<div class = 'row'>"

        for(var column=0; column<=worldwidth; column++){
            if(row == 0 || row == 15 || column == -1 || column == 15){
                output += "<div class = 'wall'></div>"
                world[row].push(1)
            } 
            else {
                world[row].push(Math.floor(Math.random() * 4));
                output += "<div class = '"+ worldDict[world[row][column]] +"'></div>"
            }
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}
drawWorld()

var ninjaman = {
    x: 1,
    y: 1
}

function drawNinjaman() {
    document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px'
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px'
}
drawNinjaman()

document.onkeydown = function(e){
    if(e.keyCode == 37){  // Turn Left
        if(world[ninjaman.y][ninjaman.x-1] != 1){
            ninjaman.x--
        }
    } 
    if(e.keyCode == 39){ // Turn Left
        if(world[ninjaman.y][ninjaman.x+1] !=1){
            ninjaman.x++
        }
    }
    if(e.keyCode == 38){ // Turn Up
        if(world[ninjaman.y-1][ninjaman.x] !=1){
        ninjaman.y--
        }
    }
    if(e.keyCode == 40){ // Turn Down
        if(world[ninjaman.y+1][ninjaman.x] !=1){
            ninjaman.y++
        }
    }
    if(world[ninjaman.y][ninjaman.x] == 2){ // kung yung ninjaman ay 2 
        world[ninjaman.y][ninjaman.x] = 0;  // ninjaworld magiging 0
        score = score + 10                 // pag world is 0 plus 1 sa score
        points.innerText = score          
    }
    if(world[ninjaman.y][ninjaman.x] == 3){ // kung yung ninjaman ay 2 
        world[ninjaman.y][ninjaman.x] = 0;  // ninjaworld magiging 0
        score = score + 5                 // pag world is 0 plus 1 sa score
        points.innerText = score          
    }
    drawNinjaman()
    drawWorld()
}  