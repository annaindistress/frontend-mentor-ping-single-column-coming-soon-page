const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');
const formMessage = form.querySelector('.form__message');

const validateForm = () => {
  if (!formInput.validity.valid) {
    formInput.classList.add('form__input--invalid');
    formMessage.classList.add('form__message--visible');
  } else {
    formInput.classList.remove('form__input--invalid');
    formMessage.classList.remove('form__message--visible');
  }
};

formInput.addEventListener('invalid', (evt) => {
  evt.preventDefault();
  validateForm();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateForm();
});
