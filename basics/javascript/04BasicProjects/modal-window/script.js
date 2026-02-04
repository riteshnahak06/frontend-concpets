'use strict';

const overlay = document.querySelector('.overlay');

//single as only one closed button
const btnOpenModal = document.querySelectorAll('.show-modal');

const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden'); // . is only for selector as we are not selcting anything don't add .hidden
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// handle esc key event
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if modal is not hidden then close
    closeModal();
  }
});
