/* ===================Toggle icon Navbar=================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.navbar.toggle('active');
    
};


/* ===================Scroll Sections active links=================== */
let Sections = document.querySelectorAll('selection');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHieght;
        let id = sec.getAttributes ('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove ('active');
                document.querySelector ('header nav a [href*='+id+']').classList.add('active');
            });
        };
    
    });
    /* ===================Sticky Navbar=================== */
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===================Remove toggle icon and navbar when click navbar link (scroll)=================== */

    menuIcon.classList.remove('bx-x');
    menuIcon.navbar.remove('active');
};

/* ===================Scroll Reveal=================== */

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-container, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ===================typed js=================== */
const typed = new Typed ('.multiple-text',{
    strings: ['Product Manager', 'UI/UX Enthusiast', 'Storyteller', 'Marketing Advocate'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

