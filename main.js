

//mobile menu opening and closing
let flag = 0

let mobileBtn = document.getElementById('mobile-cta')
let navagation = document.querySelector('nav')
let mobileBtnExit = document.getElementById('mobile-exit-cta');

mobileBtn.addEventListener('click', () => {
    navagation.classList.add('display-menu');
    flag = 1;
})

mobileBtnExit.addEventListener('click', () => {
    navagation.classList.remove('display-menu');
    flag = 0;
})



//fixed navbar to go away after selection an option in mobileView

let homeBtn = document.getElementById('home-nav');

homeBtn.addEventListener('click', () =>{
    navagation.classList.remove('display-menu')
})

let navbarBtn = document.getElementById('skills-nav');

navbarBtn.addEventListener('click', () =>{
    navagation.classList.remove('display-menu')
})


let gliderBtn = document.getElementById('glider-nav');

gliderBtn.addEventListener('click', () =>{
    navagation.classList.remove('display-menu')
})


let contactBtn = document.getElementById('contact-nav');

contactBtn.addEventListener('click', () =>{
    navagation.classList.remove('display-menu')
})





//scroll bar moving when scroll
const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () =>{
        
        if(lastScrollY < window.scrollY && flag == 0){
            nav.classList.add("hiddennav");
        }
        else{
            nav.classList.remove("hiddennav");
        }
        
        lastScrollY = window.scrollY;
    });




//glider.js adjustments


new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    draggable: true,
    scrollLock: true,
    dots: '#dots',

    responsive: [
        {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
        }
    ]
})