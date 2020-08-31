var offsetHome;
var offsetExperience;
var offsetSchool;
var offsetGallery;

window.addEventListener("load", function () {

    offsetHome = document.querySelector('#home').offsetTop;
    offsetExperience = document.querySelector('#experience').offsetTop;
    offsetSchool = document.querySelector('#school').offsetTop;
    offsetGallery = document.querySelector('#photo').offsetTop;

    offsetHome = offsetHome * 4 / 5;
    offsetExperience = offsetExperience * 4 / 5;
    offsetSchool = offsetSchool * 4 / 5;
    offsetGallery = offsetGallery * 4 / 5;

    checkActive();

});

window.addEventListener('scroll', function () {

    checkActive();

});

function checkActive() {

    if (window.scrollY <= offsetExperience) {

        deleteEffect();

        var addEffect = document.querySelector('.menu li:nth-child(1) a');
        addEffect.after(' ');
        addEffect.classList.add('active');

    } else if (window.scrollY > offsetExperience && window.scrollY <= offsetSchool) {

        deleteEffect();

        var addEffect = document.querySelector('.menu li:nth-child(2) a');
        addEffect.after(' ');
        addEffect.classList.add('active');

    } else if (window.scrollY > offsetSchool && window.scrollY <= offsetGallery) {

        deleteEffect();

        var addEffect = document.querySelector('.menu li:nth-child(3) a');
        addEffect.after(' ');
        addEffect.classList.add('active');

    } else if (window.scrollY > offsetGallery) {

        deleteEffect();

        var addEffect = document.querySelector('.menu li:nth-child(4) a');
        addEffect.after(' ');
        addEffect.classList.add('active');

    }

}

function deleteEffect() {

    var menuList = document.querySelectorAll('.menu li a');
    menuList.forEach(i => {
        i.classList.remove('active');
    });

}