function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function getRealWidth(element) {

  var cs = getComputedStyle(element);

  var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);

  var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

  // Element width minus padding and border
  elementWidth = element.offsetWidth - paddingX - borderX;

  return elementWidth;
}

docReady(function() {

  /* ---------- CAROUSEL SCRIPTS ---------- */

  if(document.getElementById('carouselContainer')) {
    let carouselContainer = document.getElementById('carouselContainer');
    let carousel = document.getElementById('carousel');

    let actualSlide = 0;
    const totalSlides = carouselContainer.children.length + 1;
    const gap = 100 / totalSlides;

    carousel.style.width = (100 * totalSlides) + '%';
    document.querySelectorAll('#carouselController .button')[actualSlide].classList.add('active');

    let slide = function(){

      if(actualSlide >= totalSlides)
        actualSlide = 0;

      document.querySelectorAll('#carouselController .button').forEach((item, i) => {
        item.classList.remove('active');
      });
      document.querySelectorAll('#carouselController .button')[actualSlide].classList.add('active');

      for (let i = 0; i < totalSlides; i++){

        if(actualSlide != totalSlides)
          document.querySelectorAll('#carousel .content')[i].style.left = ((gap * actualSlide) * -1) + '%';
        else
        document.querySelectorAll('#carousel .content')[i].style.left = '0%';
      }
    }

    document.querySelectorAll('#carouselController .button').forEach((item, i) => {
      item.addEventListener('click', function(){
        actualSlide = Array.prototype.indexOf.call(document.querySelectorAll('#carouselController .button'), this)
        slide();
      });
    });

    window.setInterval(function(){
      if(!carouselContainer.matches(':hover')){
        actualSlide += 1;
        slide();
      }
    }, 5000);

  }

  /* ---------- SLIDER SCRIPTS ---------- */

  if(document.getElementById('sliderContainer')) {
    let position = 0;
    let items = document.querySelectorAll('#sliderContainer .items .item');

    let containerWidth = getRealWidth(document.getElementById('sliderContainer'));
    let itemsContainerWidth = document.querySelectorAll('#sliderContainer .items')[0].offsetWidth;

    let moveGap = (100 / itemsContainerWidth) * containerWidth;

    document.getElementById('leftBtn').addEventListener('click', function(){
      if((position + moveGap) > 0){
        position = 0;
      } else {
        position += moveGap;
      }

      items.forEach((item, i) => {
        item.style.left = position + '%';
      });
    });

    document.getElementById('rightBtn').addEventListener('click', function(){
      if((position - moveGap) < (-100 + moveGap)){
        position = -100 + moveGap;
      } else {
        position -= moveGap;
      }

      items.forEach((item, i) => {
        item.style.left = position + '%';
      });
    });
  }

});
