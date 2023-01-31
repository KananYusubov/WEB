// jQuery(document).read(function () {
//     // function body
// });


// $(document).ready(function () {
//
// })


// $(document).ready(() => {
//     $('.block').addClass('active');
//     // function body
//
// });


// $(function () {
//     $('.nav-link').addClass('active');
//     // function body
// });


// $(() => {
//     $('.nav-link').addClass('active');
//     // function body
// });


// $('p').css({
//         color: "red",
//         "background-color": 'yellow',
//         fontSize: '30px'
//     }
// )


// $('p').addClass("btn-dark");
//
// $('p').removeClass("btn-dark");


$("#date-now").text(new Date().getFullYear());


$('.menu li a').click(function () {
    $(this)
        .closest('.menu')
        .find('.active')
        .removeClass('active');

    $(this).addClass('active');
});


$('input:text').on('keydown input paste', function () {
    console.log($(this).val());
});


$('.accordion-header').on('click', function () {
    let activeHeader = $(this).hasClass('active') ? $(this) : $(this).parent().find('.accordion-header.active');

    if (!$(this).hasClass('active')) {
        activeHeader.next().slideUp(200).removeClass('active');
        activeHeader.removeClass('active');
    }

    $(this).addClass('active').next().slideToggle(400).addClass('active');

});


let sectionMore = $("#see-more"), topCoord = $(window).height() - sectionMore.outerHeight();

$(window).on('resize', function () {
    topCoord = $(window).height() - sectionMore.outerHeight();
    if (!sectionMore.hasClass('closed')) {
        sectionMore.css('top', topCoord);
    }
})
