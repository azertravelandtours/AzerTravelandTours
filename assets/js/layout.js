const body = document.body
const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)


  function redirect()
  {
  var url = "https://m.me/420634938450085";
  window.location.href = url;
  }

  let carouselIndicatorButtons = document.querySelectorAll('#custom-carousel-indicators button')
  document.querySelectorAll('.carousel').forEach((button) => {
	  button.addEventListener('slid.bs.carousel', function () {
		  let activeIndicator = document.querySelector('.carousel-indicators button.active')
  
		  carouselIndicatorButtons.forEach((button2) => {
			  button2.classList.remove('active')
		  })
  
		  document.querySelector('#custom-carousel-indicators button[data-bs-slide-to="'
			  + activeIndicator.dataset.bsSlideTo + '"]').classList.add('active')
	  });
  });