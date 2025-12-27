"use strict"

const header = document.querySelector('.header');

document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header--scroll-state');
  } else {
    header.classList.remove('header--scroll-state');
  }
});