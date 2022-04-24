var navMain = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var test = document.querySelector('.nav__item--test')

burger.addEventListener('click', function(){
   if (navMain.classList.contains ('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add ('nav--opened');   
} 
    else {
    navMain.classList.remove ('nav--opened');
    navMain.classList.add ('nav--closed');
}
});

burger.addEventListener ('click', function(){
    if (burger.classList.contains ('burger--open')){
        burger.classList.remove('burger--open');
        burger.classList.add('burger--close');  
    }
    else {
        burger.classList.remove ('burger--close');
        burger.classList.add('burger--open') ;

}
});

burger.addEventListener ('click', function (){
    if (burger.classList.contains('burger--close')){
        test.classList.add('not-seen');
    }
    else {
        test.classList.remove('not-seen');
    }
})

