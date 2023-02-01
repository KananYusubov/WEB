// jQuery(document).ready(function (){
//     // function body
// })

// $(document).ready(function (){
//     // function body
// })

// $(document).ready(()=>{
//     $('.block').addClass('active');
//     // function body
// })


// $(function (){
//     $('.nav-link').addClass('active')
//     // function body
// })

// $( () => {
//     $('.nav-link').addClass('active')
//     // function body
// })
// document.getElementById("date-now").innerText = new Date().getFullYear().toString()
// $("p").css({
//     color:'red',
//     'background-color': 'yellow',
//     fontSize: '30px'
// })

// $("p").addClass("btn-dark")
//
// $("p").removeClass("btn-dark")

$("#date-now").text(new Date().getFullYear());

$('.menu li a').click((function () {
    $(this)
        .closest(".menu")
        .find(".active")
        .removeClass('active');
    $(this).addClass('active');
}))

$('input:text').on('keydown input paste', function () {
    console.log($(this).val());
})

$('.accordion-header').on('click', function () {
    let activeHeader = $(this).hasClass('active') ?
        $(this) :
        $(this).parent().find('.accordion-header.active');
    if (!$(this).hasClass('active')) {
        activeHeader.next().slideUp(200).removeClass('active');
        activeHeader.removeClass('active');
    }
    $(this).addClass('active').next().slideToggle(400).addClass('active');
})

let sectionMore = $("#see-more"),
    topCoord = $(window).height() - sectionMore.outerHeight();

$(window).on('resize', function () {
    topCoord = $(window).height() - sectionMore.outerHeight();
    if (!sectionMore.hasClass('closed')) {
        sectionMore.css('top', topCoord);
    }
})

$('.close-green, #not-now').click(function () {
    topCoord = $(window).height() - sectionMore.outerHeight();
    let section = $(this).parent('section');
    let target = $('.close-green');
    if (section.hasClass('closed')) {
        section.animate({
            top: topCoord
        }, 400);
        target.html('&times;')
    } else {
        section.animate({
            top: '97vh'
        }, 400);
        target.html('&#9650;')
    }
    section.toggleClass('closed')
})

// $("[data-popup]").on('click', popupShow)
$('body').on('click', '[data-popup]', popupShow)

function popupShow(e) {
    e.preventDefault();
    let id = $($(this).data('popup'));
    id.fadeIn(400);
}

$('.popup-close').click(function () {
    $(this).closest('.popup-wrapper').fadeOut(600);
})

let textAnim = [
    'Read our books!',
    'Subscribe news',
    'Learn about new books',
    'Add books to our library'
]
let textId = null, textIndex = 0;
$('#start-stop').on('click', showAnimatedText);

function showAnimatedText() {
    $(this).next().addClass('fromTopToDown');
    $('#text-change').text(textAnim[textIndex]);
    textIndex++;
    textId = setInterval(function () {
        $('#text-change').text(textAnim[textIndex]);
        textIndex === textAnim.length - 1
            ? textIndex = 0
            : textIndex++;
    }, 3000);
    $('#start-stop').html('&times;')
        .off('click', showAnimatedText)
        .on('click', stopAnimatedText);
}

function stopAnimatedText() {
    $('#text-change').text('');
    $(this).next().removeClass('fromTopToDown');
    clearInterval(textId);
    $('#start-stop').html('!')
        .off('click', stopAnimatedText)
        .on('click', showAnimatedText);
}

let userPhone = $('#user-phone');
userPhone.mask("(999) 999-9999");
$('#contact-form').submit(function (e) {
    e.preventDefault();
    let userName = $('#user-name'),
        userMail = $('#user-email'),
        userMessage = $('#user-message');
    // console.log(userMessage.val().length)
    if (userName.val().length < 2) {
        userName.addClass('invalid');
        return false;
    } else userName.removeClass('invalid');

    if (userMail.val().length < 7) {
        userMail.addClass('invalid');
        return false;
    } else userMail.removeClass('invalid');

    if (userPhone.val().length < 7) {
        userPhone.addClass('invalid');
        return false;
    } else userPhone.removeClass('invalid');

    if (userMessage.val().length < 7) {
        userMessage.addClass('invalid');
        return false;
    } else userMessage.removeClass('invalid')
    $('#thanks-contact .content').text(`Thank You ${userName.val()}`);
    $('#contact-btn').attr('data-popup', '#thanks-contact').click();
})
let isNewsletterPopup = +localStorage.getItem('newsletter');

if (!isNewsletterPopup) {
    setTimeout(function () {
        $('#newsletter').fadeIn(500);
    }, 1500);
}

