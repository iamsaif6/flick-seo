// Owl Carousel

$('.testimonial__wrap').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    dots:false
});

// Magnific Popup

$('.about__video').magnificPopup({
    type: 'iframe'
});

// Theme Changer

function myTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
let timeNow = myTime(new Date);


let light = document.querySelector('.theme__light')
let dark = document.querySelector('.theme__dark')
let theme = document.querySelector('#theme')
let btn = document.querySelectorAll('.theme__btn')


let dates = new Date();
let hours = dates.getHours()



 function theme__changer(){
    if(hours > 18 || hours < 7){
        theme.setAttribute('href' , 'css/dark.css')
        btn.forEach(btn2 => btn2.classList.remove('active'))
        dark.classList.add('active')
        document.querySelector('.dialoge__text').innerHTML ="Local time is " + timeNow +" . The website detected night . Theme selected to Dark automatically . Click right fixed button to change theme.";

    }else if( hours => 7 && hours < 18){
        theme.removeAttribute('href' , 'css/dark.css') 
        document.querySelector('.dialoge__text').innerHTML ="Local time is " + timeNow + " . The website detected day . Theme selected to Light automatically . Click right fixed button to change theme";
    }
    
 }
  
 theme__changer();


 
dark.addEventListener('click' , function(){
    theme.setAttribute('href' , 'css/dark.css')
});

light.addEventListener('click' , function(){
    theme.removeAttribute('href' , 'css/dark.css')
});


btn.forEach(btn_theme => {
    btn_theme.addEventListener('click' , function(){
        btn.forEach(btn2 => btn2.classList.remove('active'))
        this.classList.add('active')
    });
});

// Dialoge Box

let overlay = document.querySelector('.dialoge__overlay')
let dialoge = document.querySelector('.dialoge')
let dialoge__close = document.querySelector('.dialoge__close')
let dialoge__quit = document.querySelector('.dialoge__quit')
let dialoge__text = document.querySelector('.dialoge__text')

function themeDialoge(){
    overlay.classList.add('active')
    dialoge.classList.add('active')
};

setTimeout(themeDialoge , 3000);

dialoge__close.addEventListener('click' , function(){
    overlay.classList.remove('active')
    dialoge.classList.remove('active')
})

dialoge__quit.addEventListener('click' , function(){
    let a = confirm('Then Please Get Out! Press OK')

    if(a == true){
        window.location.href = "www.go-to-hell.com";
    }else{
        alert('You\'re Stuck . Agree or Get Out')
    }
})




// Fixed Nav

let navBar = document.querySelector('.nav')

window.addEventListener('scroll' ,function(){
    let scrollP = Math.floor(pageYOffset);
    if(scrollP > 50){
        navBar.classList.add('active')
    }else{
        navBar.classList.remove('active')
    }
});


// Active Nav

let navLink = document.querySelectorAll('.nav__link');

navLink.forEach( eachLink => {
    eachLink.addEventListener('click' , function(){
        navLink.forEach(navLink2 => navLink2.classList.remove('active'))
        this.classList.add('active')
    })
})

// Offcanvas Menu

let trigger = document.querySelector('.offcanvas__trigger')
let triggerSpan = document.querySelector('.offcanvas__trigger-span')
let canvasOverlay = document.querySelector('.offcanvas__overlay')
let canvasMenu = document.querySelector('.offcanvas__menu')
let canvasMenuClose = document.querySelector('.offcanvas__menu-close')

trigger.addEventListener('click' , function(){
    triggerSpan.classList.toggle('active')
    canvasOverlay.classList.toggle('active')
    canvasMenu.classList.toggle('active')
})

canvasOverlay.addEventListener('click' , function(){
    this.classList.remove('active')
    canvasMenu.classList.remove('active')
    triggerSpan.classList.remove('active')
})

canvasMenuClose.addEventListener('click' , function(){
    canvasOverlay.classList.remove('active')
    canvasMenu.classList.remove('active')
    triggerSpan.classList.remove('active')
})