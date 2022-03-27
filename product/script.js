// Show sidebar
const showNavbar = document.querySelector('.show-navbar');
const sidebar = document.querySelector('.navbar');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconX = document.querySelector('.icon-x');

showNavbar.addEventListener('click', () => {
    if(sidebar.style.display === 'block'){
        sidebar.style.display = 'none';
        iconHamburger.style.display = 'block';
        iconX.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
        iconX.style.display = 'block';
        iconHamburger.style.display = 'none';
    }
})

// Show sub menu
const showSubMenu = document.querySelectorAll('.show-sub-menu');
const subMenu = document.querySelectorAll('.list-sub-menu');
const arrow = document.querySelectorAll('.arrow');

// looping untuk mengambil semua elemen yang memiliki class show-sub-heading
for(let i = 0; i < showSubMenu.length; i++){
    showSubMenu[i].addEventListener('click', function(){
        // mengambil elemen yang memiliki class sub-menu
        const subMenu = this.nextElementSibling;
        // mengambil elemen yang memiliki class arrow
        const arrow = this.children[0];
        // mengambil elemen yang memiliki class arrow
        const arrowIcon = arrow.children[0];

        subMenu.classList.toggle('show');
    });
}


const showSubHeader = document.querySelectorAll('.show-sub-footer');
        const arrowFooter = document.querySelectorAll('.footer--arrow');
        const subHeader = document.querySelectorAll('.sub__footer');

        for(let i = 0; i < showSubHeader.length; i++){
            showSubHeader[i].addEventListener('click', function(){
                const subHeader = this.nextElementSibling;
                const arrowFooter = this.children[0];
                const arrowIcon = arrowFooter.children[0];

                if(subHeader.classList.contains('sub__footer')){
                    subHeader.classList.remove('sub__footer');
                    arrowFooter.style.transform = 'rotate(90deg)';
                }else{
                    subHeader.classList.add('sub__footer');
                    arrowFooter.style.transform = 'rotate(0deg)';
                }
            });
        }
