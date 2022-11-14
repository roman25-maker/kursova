let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menuO');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  $('body').toggleClass('lock')
})


const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    mobile: true, 
    live: true 
  })
  wow.init(); 
  