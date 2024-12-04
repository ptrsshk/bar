const sliderSection = document.getElementById('showcase')
const sliderContainer = document.getElementById('slider-container')
const slider = document.querySelectorAll('.slider-item')
const btnRight = document.querySelector('.right')
const btnLeft = document.querySelector('.left')
let position = 0;
let numberOfClicks = window.innerWidth <= 768 ? 5 : 3
let offsetIndex = 0
let resizeTimeout
let padding = parseInt(window.getComputedStyle(sliderSection).getPropertyValue('padding-left'))

window.addEventListener('resize', (e) => {
  if ( !resizeTimeout ) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      e.target.innerWidth <= 768 ? numberOfClicks = 5 : numberOfClicks = 3
      offsetIndex = 0
      padding = parseInt(window.getComputedStyle(sliderContainer).getPropertyValue('padding-left'))
      btnRight.removeAttribute('disabled')
      btnLeft.setAttribute('disabled', '')
      slider.forEach((slide) => {
        slide.style.left = `${position = 0}px`
      })
     }, 600);
  }
}, false)

btnRight.addEventListener('click', () => {
  position -= (2080 + padding*2 - sliderContainer.offsetWidth)/numberOfClicks
  console.log(sliderSection.offsetWidth, window.getComputedStyle(sliderContainer).marginLeft);
  slider.forEach((slide) => {
    slide.style.left = `${position}px`
  })
  offsetIndex++
  if (offsetIndex > 0) {
    btnLeft.removeAttribute('disabled')
    if (offsetIndex === numberOfClicks) {
      btnRight.setAttribute('disabled', '')
    }
  }
})
btnLeft.addEventListener('click', () => {
  position += (2080 + padding*2 - sliderContainer.offsetWidth)/numberOfClicks
  console.log(sliderSection.offsetWidth, window.getComputedStyle(sliderContainer).marginLeft);
  slider.forEach((slide) => {
    slide.style.left = `${position}px`
  })
  offsetIndex--
  if (offsetIndex < numberOfClicks) {
    btnRight.removeAttribute('disabled')
    if (offsetIndex === 0) {
      btnLeft.setAttribute('disabled', '')
    }
  }
})