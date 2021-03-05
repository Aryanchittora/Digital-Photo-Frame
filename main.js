function preload(){
}

function setup() {
    c = createCanvas(1000 , 600);
    c.position(275);
    v = createCapture(VIDEO);
    v.hide();
}

function draw() {
    image(v , 250, 150, 500, 300)

    fill(65,105,225);
    stroke(65,105,225);
    circle(100, 75, 70);
    circle(900, 75, 70);
    circle(100, 525, 70);
    circle(900, 525, 70);

    fill(255,0,0);
    stroke(255,0,0);
    rect(100, 65, 800, 25);
    rect(100, 515, 800, 25);
    rect(190, 65, 25, 475);
    rect(790, 65, 25, 475);
    rect(90, 65, 25, 475);
    rect(885, 65, 25, 475);
}

function take_snap() {
    save("Photo.png")
}