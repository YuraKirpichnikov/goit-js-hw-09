const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');


let formData = {
  email: '',
  message: '',
};


const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  formData = savedData;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Будь ласка, заповніть обидва поля перед відправкою.');
    return;
  }

  for (const [key, value] of Object.entries(formData)) {
    console.log(`${key}: ${value}`);
  }

  formData = {
    email: '',
    message: '',
  };

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}