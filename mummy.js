var User = prompt("Please enter your name");
alert("You are Welcome  " +
    User)

var images = [new(2).jpg, new(1).jpg, new(3).jpg, new(4).jpg, new(5).jpg, new(6).jpg];
var num = 0;

function next() {
    var slider = document.getElementById("Slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev(params) {
    var slider = document.getElementById("Slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}