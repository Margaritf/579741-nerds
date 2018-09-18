'use strict';

var writeUsButton = document.querySelector('.write-us-button');
var writeUsPopup = document.querySelector('.modal-write-us');
var close = writeUsPopup.querySelector('.modal-close');
var form = writeUsPopup.querySelector('form');
var email = writeUsPopup.querySelector('[name=email]');
var text = writeUsPopup.querySelector('[name=input-text]');

var openPopup = function () {
	writeUsPopup.classList.add('modal-show');
};

var closePopup =  function () {
	writeUsPopup.classList.remove('modal-show');
};

writeUsButton.addEventListener('click', function (evt) {
	evt.preventDefault();
  openPopup();
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
  closePopup();
});

form.addEventListener('submit', function (evt) {
	if (!text.value || !email.value) {
    evt.preventDefault();
		writeUsPopup.classList.remove('modal-error');
	}
});
