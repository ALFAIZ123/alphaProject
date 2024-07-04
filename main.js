var typed = new Typed(".typed",{
    strings: ['Alpha','Beta','Delta'],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true,
})

// Gets the Mobile Nav icon by its ID
let bars = document.getElementById('bars');

// Gets the Mobile Nav container
let mobileMenu = document.getElementById('mobileMenu');

// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
    bars.classList.toggle('fa-times');
});

// document.addEventListener("DOMContentLoaded", function() {
//     window.addEventListener('scroll', function() {
//       if (window.scrollY > 250) {
//         document.getElementById('navbar_top').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.navbar').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('navbar_top').classList.remove('fixed-top');
//         // remove padding top from body
//         document.body.style.paddingTop = '0';
//       }
//     });
//   });

