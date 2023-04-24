let boxes = [];

function setup(){
    noLoop();
    createCanvas(500, 400);

    let colorsArray = []
    for(let i = 0; i<28; i++){
        colorsArray.push(color(random(255), random(255), random(255)));
    }

    let index = 1;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 7; j++){
            let x = j * 60 + 50;
            let y = i * 60 + 50;
            let box = new Box(x,y,50, colorsArray[index-1], index);
            boxes.push(box);
            index++;
        }
    }
}

function draw(){
    background('red');

    for(let box of boxes){
        box.display();
    }
}


class Box {
    constructor(x, y, size, color, number){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.number = number;
    }

    display(){
        fill(this.color);
        square(this.x, this.y, this.size);
    }
}