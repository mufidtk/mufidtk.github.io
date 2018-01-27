// (function() {

// })();
//syntax: self invoking anonymous function




// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // #1 console.log('ok');

    // #2 ambil isi href
    // #3 var href = $(this).attr('href');
    // // console.log(href);
    // // tangkap elemen ybs
    // #3 var elemenHref = $(href);
    // #3 console.log(elemenHref);

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan);
    // console.log(elemenTujuan.offset().top);
    // console.log($('body').scrollTop());

    // pindahkan scroll
    // $('body').scrollTop('700');
    // $('body').scrollTop('0');
    // $('body').scrollTop(elemenTujuan.offset().top);
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});



// parallax

//about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})


//scroll
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    // portfolio
    if( wScroll > $('.portfolio').offset().top -250 ) {
        // console.log('ok');
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                // console.log('ok');
                // $('.portfolio .thumbnail').addClass('muncul');
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
});
