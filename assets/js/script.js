$(document).ready(function() {
    AOS.init();
    let Skills = document.querySelector('#skills');
    let SkillsLevel = document.querySelectorAll('.skill-item-field-level');

    window.onscroll = function() {
        if (window.scrollY >= Skills.offsetTop - 450) {
            SkillsLevel.forEach((SkillLevel) => {
                SkillLevel.style.width = SkillLevel.dataset.level;
            });
        } else if (window.scrollY >= Skills.offsetTop + 450) {
            SkillsLevel.forEach((SkillLevel) => {
                SkillLevel.style.width = 0;
            });
        } else {
            SkillsLevel.forEach((SkillLevel) => {
                SkillLevel.style.width = 0;
            });
        }
    }

    $('.form-item .form-field').on('focusout', function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-data');
        } else {
            $(this).parent().removeClass('has-data');
        }
    })
    $('.form-item .form-field').on('focusout', function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-data-textaria');
        } else {
            $(this).parent().removeClass('has-data-textaria');
        }
    })

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            $('.btn-to-top').fadeIn(400);
        } else {
            $('.btn-to-top').fadeOut(400);
        }
    })



});



function soon() {
    alert("Sory , It is not ready now ");
}