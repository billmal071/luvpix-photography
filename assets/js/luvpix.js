window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").classList.add('shadow');
        document.getElementById("navbar").classList.add('bg-primary');
    } else {
        document.getElementById("navbar").classList.remove('shadow');
        document.getElementById("navbar").classList.remove('bg-primary');
    }
}



//give nav bg color when icon is clicked
document.querySelector('.checkbtn').addEventListener('click', open);


function open() {
    let initial = document.querySelector('nav')
    initial.classList.toggle("nav-color")

    let img1 = document.getElementById('logo').src;
    if (img1.indexOf('Logo.svg') != -1) {
        document.getElementById('logo').src = './img/Logo-dark.svg';
    } else {
        document.getElementById('logo').src = './img/Logo.svg';
    }

    let img2 = document.getElementById('icon').src;
    if (img2.indexOf('hamburger.svg') != -1) {
        document.getElementById('icon').src = './img/x.svg';
    } else {
        document.getElementById('icon').src = './img/hamburger.svg';
    }
}