const formInput = document.querySelector('.form__input');
const formMessage = document.querySelector('.form__message');

formInput.addEventListener('invalid', (evt) => {
  evt.preventDefault();
  formInput.classList.add('form__input--invalid');
  formMessage.classList.add('form__message--visible');
});
