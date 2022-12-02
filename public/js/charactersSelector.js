let charOption1 = document.querySelector('.characterOp1');
let charOption2 = document.querySelector('.characterOp2');
let charOption3 = document.querySelector('.characterOp3');
let charOption4 = document.querySelector('.characterOp4');


// CSS
let navBar = document.querySelector('.navbar');
let navTitle = document.querySelector('.navTitle-Shark');
let menuBar = document.querySelector('.menubar-Shark');



const optionSelector = [
    {
        character: '',
        primary_color: '#fff',
        secondary_color: ''
    },
    {
        character: '',
        primary_color: '',
        secondary_color: ''
    },
    {
        character: '',
        primary_color: '',
        secondary_color: ''
    },
    {
        character: '',
        primary_color: '',
        secondary_color: ''
    }
]


function ShharkConfig(){
    onload(navBar.style.background = optionSelector[0].primary_color);
    navBar.classList.remove('navbar-Shark');
    navTitle.classList.remove('navTitle-Shark');
    menuBar.classList.remove('menubar-Shark');

    navBar.classList.add('navbar-Seal');
    navTitle.classList.add('navTitle-Seal');
    menuBar.classList.add('menubar-Seal');


    
}