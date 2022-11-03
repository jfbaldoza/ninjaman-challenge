var world = [
    [1,1,1,1,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,2,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,2,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,1,1,1,1],
];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi'
}

let points = document.getElementById('points')
let score = 0

function drawWorld() {
    output = "";
    for(var row = 0; row < world.length; row++) {
        output += "<div class = 'row'>"
        for(var x = 0; x < world[row].length; x++) {
            output += "<div class = '"+ worldDict[world[row][x]] +"'></div>"
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
    if(e.keyCode == 37){
        if(world[ninjaman.y][ninjaman.x-1] != 1){
            ninjaman.x--
        }
    } 
    if(e.keyCode == 39){
        if(world[ninjaman.y][ninjaman.x+1] !=1){
            ninjaman.x++
        }
    }
    if(e.keyCode == 38){
        if(world[ninjaman.y-1][ninjaman.x] !=1){
        ninjaman.y--
        }
    }
    if(e.keyCode == 40){
        if(world[ninjaman.y+1][ninjaman.x] !=1){
            ninjaman.y++
        }
    }
    if(world[ninjaman.y][ninjaman.x] == 2){ // kung yung ninjaman ay 2 
        world[ninjaman.y][ninjaman.x] = 0;   // ninjaworld magiging 0
        score++                             // pag world is 0 plus 1 sa score
        points.innerText = score          
    }
    // world[ninjaman.y][ninjaman.x] = 0;
    drawNinjaman()
    drawWorld()
}  