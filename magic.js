// get a handle on petal 
var shape = document.getElementById('petal');

// sunflower florets/seeds
function dot(x,y,color){
    // set div attributes
    x = x + 500;
    y = y + 500;
    var div = document.createElement('div');
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '7px';    
    div.style.height = '7px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);
}

// test even or odd
function isEven(n) {
   return n % 2 == 0;
}

// fermat's spiral
for (var i = 0; i < 350; i++) {
  var theta = 2.39998131 * i;
  var radius = 2.6* Math.sqrt(theta);
  var x = Math.cos(theta) * radius;
  var y = Math.sin(theta) * radius;

  var color = '#BF656A';
  if(isEven(i)) {color = '#DEDADE';} 
  dot(x,y,color);
}

// flower petals
function petal(x,y,r){
    var clone = shape.cloneNode(true);
    x = x + 482;
    y = y + 450;    
    clone.style.left = x + 'px';    
    clone.style.top = y + 'px';    
    clone.style.transform = `rotate(${r}deg) translateY(-150px)`;
    clone.style.display = 'inline-block'
    document.getElementsByTagName('body')[0].appendChild(clone);
}

// -------------------------------
//   circle equation
//     r^2 = x^2 + y^2
//     y = (+/-)SQRT(r^2 - x^2)
// -------------------------------


// draw circle with dots
function circle(){    
    var x = 0;
    var y = 0;
    var r = 200;
    for (var i =-200; i<200; i+=5){
        x = i;
        y = Math.sqrt(r*r - x*x);
        dot(x,y,'green');
        
        // switch sign and draw again
        y *= -1;
        dot(x,y,'green');

        // switch back
        y *= -1;
    }
}
// circle();


// draw petals
var x = 0;
var y = 0;
var r = 39;
for (var i =-27; i<=27; i+=4){
    x = i;
    y = Math.sqrt(r*r - x*x);
    angle = 2*Math.atan(y/(x+Math.sqrt(x*x+y*y)));
    angle = angle*120
    console.log(`x:${x},y:${y},angle:${angle}`);        
    if (!isNaN(angle)){
        petal(x,y,angle);
    }
    
    // switch sign and draw again
    y *= -1;
    x *= -1
    y += 35;
    angle += -180;
    console.log(`x:${x},y:${y},angle:${angle}`);        
    petal(x,y,angle);

    // no need to switch back, variables reassigned
}