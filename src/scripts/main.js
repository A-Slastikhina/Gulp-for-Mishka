var navMain = document.querySelector('.navMain');
var burger = document.querySelector('.burger');
var modalClose = document.querySelector ('.modalClose')
burger.addEventListener('click', function(){
    navMain.classList.remove('navMain--open')
    burger.classList.remove('burger');
    burger.classList.add('modalClose');
})

