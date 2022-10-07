let activeItems = document.querySelectorAll('.header__menu--item') 
let btn = document.querySelector('.header__burger');

btn.addEventListener("click", ()=>{
    btn.classList.toggle('header__burger--active')
    document.querySelector('.header__menu').classList.toggle("header__menu--active")  
 if(menu.className.includes('header__menu--active')){
  activeItems.forEach((e)=>{
    e.classList.add('itemsActive')
  })
 }
else{
  activeItems.forEach((e)=>{
    e.classList.remove('itemsActive')
})}
})




let menu = document.querySelector(".header__menu");


menu.addEventListener('click', (elem)=>{
    if(elem.target == menu || elem.target.parentNode == menu){  // Розумію що це неправильно але іншого не придумав
        return
      }
  let aaa = document.querySelectorAll(".header__menu li a");
  aaa.forEach((el)=>{
    el.classList.remove('colorT')
  })
    elem.target.classList.toggle('colorT');
})


 