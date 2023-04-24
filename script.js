function setup(){
    createCanvas(500, 500);
    background('green');
}

function draw(){

    let mat = [];
    let x = 0, y = 0;
    for(let i = 0 ; i < 4; i++){
        mat.push([]);
        for(let j = 0; j < 7; j++){
            x+=50;
            mat[i].push({sq : square(x, y, 50),
                         color : ''})
            mat[i][j].sq.color = "rgb("+Math.floor(+Math.random() * 255) +","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")";
        }
        x = 0;
        y += 50;
    }
    console.log(mat);
    return mat;
}