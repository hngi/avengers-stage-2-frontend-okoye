const toggleSideBar = ()=>{
    const nav = document.getElementById('menu_donot');
    if(nav.className === 'header__links'){
        nav.className += ' header__links--responsive';
        document.getElementById('menu_icon').className = 'hide-icon';
        document.getElementById('cancel_icon').className = '';
    } else{
        nav.className = 'header__links';
        document.getElementById('menu_icon').className = '';
        document.getElementById('cancel_icon').className = 'hide-icon';
    }
};

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
