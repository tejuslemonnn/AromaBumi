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
    showSubMenu[i].addEventListener('click', () =>{
        const subMenu = this.nextElementSibling;
        const arrowFooter = this.children[0];
        const arrowIcon = arrowFooter.children[0];
        subMenu.classList.toggle('show');
    });
}

/* ------------------- Location ------------------- */
const showLocation = document.querySelector('.show-location');
const locations = document.querySelectorAll('.location');
const ourStore = document.querySelectorAll('.loc__our');

for(let index = 0;index < ourStore.length; index++){
    const element = ourStore[index];
    element.addEventListener('click', (e) =>{
        var menu = e.target.getAttribute('data-name');
        console.log(locations);
        for(let z = 0; z < locations.length; z++){
            const loc = locations[z];
            loc.classList.remove('show-location');
            console.log("test" +z,loc)
        }

        const gmaps = document.getElementsByClassName(menu);
        gmaps[0].classList.add('show-location');
    })
}
/* ------------------- Footer ------------------- */
const showSubHeader = document.querySelectorAll('.show-sub-footer');
        const arrowFooter = document.querySelectorAll('.footer--arrow');
        const subHeader = document.querySelectorAll('.sub__footer');

        for(let i = 0; i < showSubHeader.length; i++){
            showSubHeader[i].addEventListener('click',() =>{
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