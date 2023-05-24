import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackStateKey = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormState, 500));
window.addEventListener('load', populateFormState);
form.addEventListener('submit', submitForm);

function saveFormState(){
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem(feedbackStateKey, JSON.stringify(formData));
}
function populateFormState() {
    const savedData = localStorage.getItem(feedbackStateKey);
    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
}
function submitForm(event) {
    event.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    };
    console.log(formData);
    localStorage.removeItem(feedbackStateKey);
        emailInput.value = '';
        messageInput.value = '';
}