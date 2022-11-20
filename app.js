const burgerIcon = document.querySelector('.header-nav__burger')
const rwdHeaderNavItem = document.querySelectorAll('.header-nav__item li')
const rwdHeaderNavContent = document.querySelector('.header-nav__content')

burgerIcon.addEventListener('click', () => {
rwdHeaderNavContent.classList.toggle('burger-is-clicked')
rwdHeaderNavItem.forEach((item)=> {
  item.classList.toggle('fade')
})
})