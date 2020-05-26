# Web Parts
Pure and simple CSS3 - JS/jQuery web parts, like: carousel, sliders, etc...

**The purpose is to be simple and lightweight.**

## Usage:

  1. The element parts styles and functionality are divided in <code>master.css</code> and <code>main.js</code> as follow:
    1. <code>master.css</code>
    ```css
      /* ---------- CAROUSEL STYLE ---------- */
      main .container #carouselController{}

      /* ---------- SLIDER STYLE ---------- */
      main .container #sliderContainer{}
    ```
    2. <code>main.js</code>
    ```javascript
      /* ---------- CAROUSEL SCRIPTS ---------- */
      $('#carouselContainer').ready(function(){});

      /* ---------- SLIDER SCRIPTS ---------- */
      $('#sliderContainer').ready(function(){});
    ```

  2. Choose what you want and copy to your project;
  3. Modify as needed.
