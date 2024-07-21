// Slider

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}

//Teste
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



