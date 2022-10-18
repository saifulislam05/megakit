const menuBtn = document.querySelector('.menu_bar')
const nav = document.querySelector('.nav_menus')

menuBtn.addEventListener('click', () => {
    // nav.classList.toggle(' nav_active')
    
    if(menuBtn.classList.contains('icofont-close')) {
        menuBtn.classList.add('icofont-navigation-menu')
        menuBtn.classList.remove('icofont-close')
    }else{
       

        menuBtn.classList.remove('icofont-navigation-menu')
        menuBtn.classList.add('icofont-close')
    }
})

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav_active')

   
})