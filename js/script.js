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
		writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
		writeUsPopup.classList.add('modal-error');
}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (writeUsPopup.classList.contains("modal-show")) {
			writeUsPopup.classList.remove("modal-show");
}
	}
});
