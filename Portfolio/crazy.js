var switchJumbo = function() {
    var randomAnswer = Math.random();
        if (randomAnswer < 0.15) {
            document.getElementById("danger").src="images/pulp.jpg";
        }
        else if(randomAnswer < 0.3) {
            document.getElementById("danger").src="images/dating.jpg";
        }
        else if(randomAnswer < 0.45 ) {
            document.getElementById("danger").src="images/vader.jpg";
        }
        else if(randomAnswer < 0.6) {
            document.getElementById("danger").src="images/nein.jpg";
        }
        else if(randomAnswer < 0.75) {
            document.getElementById("danger").src="images/buzz.gif";
        }
        else if(randomAnswer < 1) {
            document.getElementById("danger").src="images/gotcha.gif";
        }
}

var trollVideo = function() {
    var random = Math.random();
        if (random < 0.3) {
            document.getElementById("danger").style.display = "none";
            document.getElementById("video").style.display = "block";
        }
        else if (random < 1) {
            document.getElementById("danger").src="images/sure.jpg";
        }
}

$(document).ready(function() {
  $('#pushmenot').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});

function like() {
    confirm("You clicked the link right?");
    alert("You random citizen, I like you.");
}
/*
var vid = document.getElementById("video");

function playVid() {
    vid.play();
}
*/

/*var jumboArray = [ 
    { name: "pulp", image: "images/pulp.jpg"},
    { name: "dating", image: "images/dating.jpg"},
    { name: "vader", image: "images/vader.jpg"},
    { name: "nein", image: "images/nein.jpg"},
    { name: "buzz", image: "images/buzz.gif"},
    { name: "gotcha", image: "images/gotcha.gif"},
];
*/
/*
var switchJumbo = function() {
    var randomAnswer = Math.random();
        if (randomAnswer < 0.15) {
            randomAnswer = jumboArray[0];
            document.getElementById("danger").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.3) {
            randomAnswer = jumboArray[1];
            document.getElementById("danger").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.45) {
            randomAnswer = jumboArray[2];
            document.getElementById("danger").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.6) {
            randomAnswer = jumboArray[3];
            document.getElementById("danger").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.75) {
            randomAnswer = jumboArray[4];
            document.getElementById("danger").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 1) {
            randomAnswer = jumboArray[5];
            document.getElementById("danger").innerHTML = randomAnswer;
        }
}

for (var i = 0; i < switchJumbo.length; i += 1) {
    var jumboArray = getRandomItem(switchJumbo);
    danger[i].innerHTML = jumboArray.name + '<img src="'+switchJumbo.image+'">';
}
*/
/*
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();
var w;
var h;
var offset;
var glitchInterval;

img.src = "images/Poly-Lakeside.jpg";
img.onload = function() {
    init();
    window.onresize = init;
};

var init = function() {
    clearInterval(glitchInterval);
    canvas.width = w = window.innerWidth;
    offset = w * .1;
    canvas.height = h = ~~(175 * ((w - (offset * 2)) / img.width)*4);
    
    glitchInterval = setInterval(function() {
        clear();
        context.drawImage(img, 0, -110, img.width, 960, offset, 0, w - (offset * 2), h);
        setTimeout(glitchImg, randInt(250, 1000));
    }, 500);
};
			
var clear = function() {
    context.rect(0, 0, w, h);
    context.fillStyle = 'white';
    context.fill();
};
    
var glitchImg = function() {
    for (var i = 0; i < randInt(1, 13); i++) {
        var x = Math.random() * w;
        var y = Math.random() * h;
        var spliceWidth = w - x;
        var spliceHeight = randInt(5, h / 3);
        context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
        context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
};
			
var randInt = function(a, b) {
    return ~~(Math.random() * (b - a) + a);
};
*/
