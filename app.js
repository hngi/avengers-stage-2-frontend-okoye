const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParent = document.querySelector('.controls ul');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-toggle')
});

let sectionIndex = 0;

document.querySelectorAll('.controls li').forEach((indicator, index)=>{
    indicator.addEventListener('click', ()=>{
        sectionIndex = index;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (sectionIndex) * -25 + '%)';
    });
});

leftArrow.addEventListener('click', ()=>{
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translateX(' + (sectionIndex) * -25 + '%)';
});

rightArrow.addEventListener('click', ()=>{
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translateX(' + (sectionIndex) * -25 + '%)';
});