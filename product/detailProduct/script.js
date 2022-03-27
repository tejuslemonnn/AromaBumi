/* ------------- navbar ------------- */
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


/* ------------- DetailProduct ------------- */
const mySlide = document.querySelectorAll('.myslider');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
    let i;
    for(i = 0; i < mySlide.length; i++){
        mySlide[i].style.display = 'none';
    }
    if(n > mySlide.length){
        counter = 1;
    }
    if(n < 1){
        counter = mySlide.length;
    }

    mySlide[counter - 1].style.display = 'block';
}

/* ------------- Footer ------------- */
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