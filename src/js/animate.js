const collapseBtn = document.querySelector('.collapse-btn');
const collapseElem = document.querySelector('.collapse-box');

window.addEventListener('load', () => {
  collapseBtn.addEventListener('click', () => {
    if (!collapseElem.classList.contains('animation-show')) {
      collapseElem.classList.remove('animation-hide');
      collapseElem.classList.add('animation-show');
      collapseElem.style.height = '9em';
    } else {
      collapseElem.classList.remove('animation-show');
      collapseElem.classList.add('animation-hide');
      collapseElem.style.height = '0';
    }
  });
});
