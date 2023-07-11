/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*Scroll Section acive link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    /*=====Sticky Navbar========*/ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    /*remove toggle icon when click link*/
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');
};

/*Scroll reveal */
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

/* typed js*/
const typed = new Typed('.multiple-text',{
    strings: ['Machine Learning Engineer','Frontend Developer','Data Analyst'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function sendEmail(){
    sendEmail.send({
        Host : "smtp.gmail.com",
        Username : document.getElementById("email").value ,
        To : 'mehta.kuldeep.2002@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("sub").value,
        Body : document.getElementById("body").value
    }).then(
        message => alert(message)
    );
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

