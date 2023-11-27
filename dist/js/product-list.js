// set img hover on product
$('.wrapProduct .itemContent .colImg .wrapImg img').hover(function() {
    var srcImg = $(this).attr('src');

    $(this).parents('.contentCol').next('.reviewImgRoom').find('img').attr('src', srcImg);
});
// end set img hover on product