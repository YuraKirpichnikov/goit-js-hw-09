const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

// Відновлюємо збережені дані при завантаженні сторінки
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {
  email: '',
  message: '',
};

form.elements.email.value = savedData.email;
form.elements.message.value = savedData.message;

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}