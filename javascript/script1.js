var images = [
    'm1.png',
    'm2.png'
];

var links = [
    'https://www.youtube.com/channel/UC3K2nGS4rvTfPlh-Rzx80OA',
    'cv.html'
];

var alts = [
    'Visit to My Channel',
    'My Resume'
 ];

var num = 0;
var num2 = 0;
function next() {
    var slider = document.getElementById('slider');
    var slider2 = document.getElementById('aslider');
    num++;num2++;
    if(num >= images.length) {
        num = 0;
    }

    if(num2 >= links.length) {
        num2 = 0;
    }

    slider.src = images[num];
    slider2.href = links[num2];
}
function prev() {
    var slider = document.getElementById('slider');
    var slider2 = document.getElementById('aslider');
    num--;num2--;
    if(num < 0) {
        num = images.length-1;
    }
    if(num2 < 0) {
        num2 = links.length-1;
    }
    slider.src = images[num];
    slider.alt = alts[num];
    slider2.href = links[num2];
}
