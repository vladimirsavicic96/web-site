var i = 0;
var images = [];
var time = 3000;

//lista slika 
images[0] = "img/company1.jpg";
images[1] = "img/onama1.jpg";
images[2] = "img/onama3.jpg";

function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;