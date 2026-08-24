const form = document.querySelector('.feedback-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  console.log({
    email,
    message,
  });
});