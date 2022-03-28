/* ------------------- Navbar ------------------- */
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


const showSubMenu = document.querySelectorAll('.show-sub-menu');
const subMenu = document.querySelectorAll('.list-sub-menu');
const arrowNav = document.querySelectorAll('.arrow');

for(let i = 0; i < showSubMenu.length; i++){
    showSubMenu[i].addEventListener('click', function(){
        const subMenu = this.nextElementSibling;
        const arrowFooter = this.children[0];
        const arrowIcon = arrowFooter.children[0];
        subMenu.classList.toggle('show');
    });
}

/* ------------------- Modal -------------------*/
const open = document.querySelector('#open');
const modal_wrapper = document.querySelector('.modal-wrapper');
const close = document.querySelectorAll('#close');

open.addEventListener('click', () => {
    var input = document.querySelectorAll('input');
    var cansubmit = true;

    for (var z = 0; z < input.length; z++) {
        if (input[z].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('open').disabled = false;
        modal_wrapper.classList.add('show-modal');
    }
    else {
        document.getElementById('open').disabled = 'disabled';
    }
})


// foreach close
for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', () => {
        modal_wrapper.classList.remove('show-modal');
    })
}

/* ------------------- Footer ------------------- */
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