import './style.scss'

let payload = 0; // default value

let payloadInputs = document.querySelectorAll('.payload-input');
let countInput = document.querySelector('#count-input');
let addCount = document.querySelector('#add-count-button');
let subtractCount = document.querySelector('#subtract-count-button');
let toggleButton = document.querySelector('#toggle-button');

countInput.defaultValue = 0;

// helpers
function handlePayloadInputClick(id, value) {
  payloadInputs.forEach(item => {
    if (item.id !== id) item.checked = false;
  });
  payload = parseInt(value);
}

// event listeners
payloadInputs.forEach(item => {
  item.setAttribute('id', `payload-${item.value}`); // set dynamic id
  item.addEventListener('click', event => {
    const value = event.target.value;
    handlePayloadInputClick(item.id, value);
  });
});

countInput.addEventListener('input', event => {
  const value = parseInt(event.target.value);
  if (isNaN(value)) countInput.value = 0;
  else countInput.value = value;
});

addCount.addEventListener('click', () => {
  const currentCounterValue = parseInt(countInput.value);
  countInput.value = parseInt(currentCounterValue + payload);
});

subtractCount.addEventListener('click', () => {
  const currentCounterValue = parseInt(countInput.value);
  countInput.value = parseInt(currentCounterValue - payload);
});

toggleButton.addEventListener('click', () => {
  if (countInput.disabled) {
    countInput.disabled = false;
    toggleButton.innerText = 'Disable Input';
  }
  else {
    countInput.disabled = true;
    toggleButton.innerText = 'Enable Input';
  }
});
