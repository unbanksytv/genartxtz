import p5 from "p5";

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()
const seed = ~~(fxrand()*123456789);
let s;

const numCircles = ~~(fxrand()*500) + 100;

window.$fxhashFeatures = {
  "Density": numCircles > 500?"High":(numCircles<200?"Low":"Medium")
}

let palette = ['#eb4034', '#f7dc36', '#347ceb', '#b034eb', '#34eb9e']; // Fidenza-like color palette
let cubes = [];

function setup() {
  createCanvas(3000, 2000, WEBGL);
  // Initialize cubes
  for (let i = 0; i < 9999; i++) { // Number of cubes
    let x = random(-width/2, width/2);
    let y = random(-height/2, height/2);
    let z = random(-1000, 1000);
    let col = random(palette);
    cubes.push(new Cube(x, y, z, col));
  }
}

function draw() {
  background(200);
  
  // Set isometric perspective
  rotateX(QUARTER_PI);
  rotateY(QUARTER_PI);

  // Draw cubes
  for (let cube of cubes) {
    cube.display();
  }
}

class Cube {
  constructor(x, y, z, col) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.col = col;
  }
  
  display() {
    push();
    translate(this.x, this.y, this.z);
    fill(this.col);
    box(33); // Size of the cube
    pop();
  }
}


let myp5 = new p5(sketch, window.document.body);