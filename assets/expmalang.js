const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// Displaying mobile menu (the toggle one)
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Showing active menu when scrolling
const highlightMenu = () => {
    const elementHighlight = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const natureMenu = document.querySelector('#nature-page');
    const attractionMenu = document.querySelector('#attraction-page');
    const cultureMenu = document.querySelector('#culture-page');
    const cullinaryMenu = document.querySelector('#cullinary-page');

    // scrolling position
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // adding 'highlight' class to menu items (in desktop mode)
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        natureMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        natureMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        attractionMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        attractionMenu.classList.add('highlight');
        natureMenu.classList.remove('highlight');
        return;
    }
    // removing 'highlight' class from menu items (in mobile mode)
    if((elementHighlight && window.innerWidth < 960 && scrollPos < 600) || elementHighlight) {
        elementHighlight.classList.remove('highlight')
    }
}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

