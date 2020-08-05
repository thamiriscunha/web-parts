# Web Parts
Pure and simple CSS3 - JS web parts, like: carousel, sliders, etc...

**The purpose is to be simple and lightweight.**

## Usage:

1. The element parts *(styles and functionality)* are divided in <code>master.css</code> and <code>main.js</code> as follow:

<code>master.css</code>

```css
  /* ---------- CAROUSEL STYLE ---------- */
  main .container #carouselController{}

  /* ---------- SLIDER STYLE ---------- */
  main .container #sliderContainer{}
```

<code>main.js</code>

```javascript
  /* ---------- CAROUSEL SCRIPTS ---------- */
  if(document.getElementById('carouselContainer')){}

  /* ---------- SLIDER SCRIPTS ---------- */
  if(document.getElementById('sliderContainer')){}
```

2. Choose what you want and copy to your project;
3. Modify as needed.
