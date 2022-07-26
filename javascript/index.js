
function fadeUp(){
    var fade = document.querySelectorAll('.fade')
    for(var i = 0;i < fade.length; i++){
        var height = window.innerHeight;
        var top = fade[i].getBoundingClientRect().top
        var fadePoint = 100

        if(top < height - fadePoint){
            fade[i].classList.add('active')
        }else{
            fade[i].classList.remove('active')
        }
    }

}


setTimeout(function() {
    var startBtn = document.querySelector('.fa-solid')
    startBtn.classList.add('active');
}, 200)
window.addEventListener('scroll', fadeUp);
