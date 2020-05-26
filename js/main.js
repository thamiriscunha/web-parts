/* ---------- CAROUSEL SCRIPTS ---------- */
$('#carouselContainer').ready(function(){

  let actualSlide = 0;
  const totalSlides = $('#carousel .content').length;
  const gap = 100 / totalSlides;

  $('#carousel').css('width', (100 * totalSlides) + '%');
  $('#carouselController .button:eq(' + actualSlide + ')').addClass('active');

  let slide = function(){

    if(actualSlide >= totalSlides)
      actualSlide = 0;

    $('#carouselController .button').removeClass('active');
    $('#carouselController .button:eq(' + actualSlide + ')').addClass('active');

    for (let i = 0; i < totalSlides; i++){

      if(actualSlide != totalSlides)
        $('#carousel .content:eq(' + i + ')').css(
          'left', ((gap * actualSlide) * -1) + '%'
        );
      else
      $('#carousel .content:eq(' + i + ')').css(
        'left', '0%'
      );
    }
  }

  $('#carouselController .button').on('click', function(){
    actualSlide = $(this).index();
    slide();
  });

  window.setInterval(function(){
    if(!$('#carouselContainer').is(':hover')){
      actualSlide += 1;
      slide();
    }
  }, 5000);

});

/* ---------- SLIDER SCRIPTS ---------- */
$('#sliderContainer').ready(function(){

  let position = 0;
  let items = $('#sliderContainer .items .item');

  let containerWidth = $('#sliderContainer').width();
  let itemsContainerWidth = $('#sliderContainer .items').width();

  let moveGap = (100 / itemsContainerWidth) * containerWidth;

  $('#leftBtn').on('click', function(){

    if((position + moveGap) > 0){
      position = 0;
    } else {
      position += moveGap;
    }

    items.css('left', position + '%');

  });

  $('#rightBtn').on('click', function(){

    if((position - moveGap) < (-100 + moveGap)){
      position = -100 + moveGap;
    } else {
      position -= moveGap;
    }

    items.css('left', position + '%');

  });

});
