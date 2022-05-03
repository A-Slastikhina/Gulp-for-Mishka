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

var BuyButtons = document.querySelectorAll('.product-item__buy');
var toBusket = document.querySelector ('.add-basket');
var modalBcg = document.querySelector ('.add-basket__bcg');

BuyButtons.forEach(b=>b.addEventListener ('click', function() {
    if (toBusket.classList.contains('add-closed'))
    {
        modalBcg.classList.remove('add-closed'),
        toBusket.classList.remove('add-closed');
    }
         
}))

    modalBcg.addEventListener ('click', function () {
    toBusket.classList.add('add-closed'),
    modalBcg.classList.add('add-closed');})