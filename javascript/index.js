
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


const sbmtBtn = document.getElementById('sendBtn')




setTimeout(function() {
    var startBtn = document.querySelector('.fa-solid')
    startBtn.classList.add('active');
}, 1000)


window.addEventListener('scroll', fadeUp);

const menuBtn = document.querySelector('.menu')
const headerNav = document.querySelector('.header')
let isMenuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!isMenuOpen){
        menuBtn.classList.add('toggle-on')
        headerNav.classList.add('nav-on')
        isMenuOpen = true;
    }else{
        menuBtn.classList.remove('toggle-on')
        headerNav.classList.remove('nav-on')
        isMenuOpen = false;
    }
})

const linksBtn = document.querySelectorAll('.page-link')
for(var i = 0; i < linksBtn.length; i++){
    linksBtn[i].addEventListener('click', () =>{
        menuBtn.classList.remove('toggle-on')
        headerNav.classList.remove('nav-on')
        isMenuOpen = false;
})
}


