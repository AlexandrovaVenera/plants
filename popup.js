const burger = document.querySelector('.header__hamburger')
const close = document.querySelector('.popup-close')
const menu = document.querySelector('.header__popup')
const menuLink = document.querySelector('.popup__nav-list')

burger.addEventListener('click', toggle)
close.addEventListener('click',toggle)
menu.addEventListener('click', function(e){
  if(!e.target.closest('.popup__wrapper')){
    toggle()
  }
})

/*Open modal window */
function toggle(){
    menu.classList.toggle('open')
    document.querySelector('.popup__wrapper').classList.toggle('open__wrapper')

}

if (menuLink.children.length > 0) {
  for (let i = 0; i < menuLink.children.length; i++) {
    let currentLink = menuLink.children[i];
    currentLink.addEventListener("click", toggle);
  }
}

