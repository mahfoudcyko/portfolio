let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('active');
    }
}

let header = document.querySelector('header')
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 0)
})

let menu = document.querySelector('.fa-bars')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle('activee')
}
window.onscroll = () => {
    menu.classList.remove('fa-xmark')
    navbar.classList.remove('activee')
}


const sr = ScrollReveal ({
    distance :'60px',
    duration: 2500,
    reset: true
})
sr.reveal('.home-text',{delay:200,origin:'left'})
sr.reveal('.home-img',{delay:200,origin:'right'})
sr.reveal('.about,.skills',{delay:200,origin:'bottom'})
sr.reveal('.services',{delay:200,origin:'left'})
sr.reveal('.portfolio',{delay:200,origin:'right'})
