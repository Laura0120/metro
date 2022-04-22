const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const breakpoint= window.matchMedia('(max-width:767px)');
const closed = "main-nav--closed";
const opened = "main-nav--opened";
const nojs = "main-nav--nojs";

const changeNavMainView = function (from, to) {
  navMain.classList.remove(from);
  navMain.classList.add(to);
};

const closeMenu = function () {
  changeNavMainView(opened, closed);
  document.body.classList.remove('scroll-lock')
}

const openMenu = function () {
  changeNavMainView(closed, opened);
  document.body.classList.add('scroll-lock')
}

const resizeHandler = function () {
  if (!breakpoint.matches) {
    closeMenu();
  }
}
const documentKeydownHandler = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey) {
    evt.preventDefault();
    closeMenu()
    document.removeEventListener('keydown', documentKeydownHandler);
  }
};

const initMenu = function () {
  navMain.classList.remove(nojs);
  changeNavMainView(opened, closed);

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains(opened)) {
      closeMenu()
    } else {
      openMenu()
    }
  });

  window.addEventListener('resize', resizeHandler)
  document.addEventListener('keydown', documentKeydownHandler);
}

initMenu();


