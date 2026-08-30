// js/1-timer.js
// Countdown timer to a user-chosen date, built with flatpickr + iziToast.

// Description import components
import flatpickr from 'flatpickr';
// Additional import styles
import 'flatpickr/dist/flatpickr.min.css';

// Description import components
import iziToast from 'izitoast';
// Additional import styles
import 'izitoast/dist/css/iziToast.min.css';

// ---- References to interface elements ----
const datetimePickerInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

// Will hold the date/time the user picked, once it's confirmed valid
let userSelectedDate = null;

// Holds the interval id so we can stop the timer later
let timerId = null;

// The button must start disabled until a valid future date is chosen.
// Set this explicitly in JS so the timer works correctly even if the
// `disabled` attribute is missing from the HTML markup.
startBtn.disabled = true;

// ---- Flatpickr initialization ----
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      // User picked a date in the past (or right now) — not allowed
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startBtn.disabled = true;
      return;
    }

    // Valid date — remember it and unlock the Start button
    userSelectedDate = selectedDate;
    startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

// ---- Start button click handler ----
startBtn.addEventListener('click', () => {
  if (!userSelectedDate) {
    return;
  }

  // Lock the input and the button while the timer is running
  datetimePickerInput.disabled = true;
  startBtn.disabled = true;

  // Update the display immediately, then every second after that
  updateTimerDisplay();
  timerId = setInterval(updateTimerDisplay, 1000);
});

// ---- Core tick function ----
function updateTimerDisplay() {
  const msLeft = userSelectedDate.getTime() - Date.now();

  if (msLeft <= 0) {
    clearInterval(timerId);
    renderTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    iziToast.success({
      title: 'Done',
      message: 'Time is up!',
      position: 'topRight',
    });

    // Let the user pick a new date afterwards
    datetimePickerInput.disabled = false;
    userSelectedDate = null;
    return;
  }

  const time = convertMs(msLeft);
  renderTime(time);
}

// ---- Converts milliseconds into { days, hours, minutes, seconds } ----
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);

  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);

  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// ---- Renders the four values into the interface ----
function renderTime({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

// ---- Ensures a number is always shown as two digits, e.g. 1 -> "01" ----
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
