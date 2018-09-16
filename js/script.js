'use strict';

var writeUsButton = document.querySelector('.write-us-button');
var writeUsPopup = document.querySelector('.modal-write-us');
var close = writeUsPopup.querySelector('.modal-close');

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
