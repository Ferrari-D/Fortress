let sending;
let sent;
let form;
let fullName;
let emailAddress;
let phoneNumber;
let subject;
let message;

document.addEventListener('DOMContentLoaded', () => {
  form = document.querySelector('#contact_form');
  form.addEventListener('submit', sendEmail);

  fullName = document.querySelector('#name_input');
  emailAddress = document.querySelector('#email_input');
  phoneNumber = document.querySelector('#phone_input');
  subject = document.querySelector('#subject_input');
  message = document.querySelector('#message_input');
});

const sendEmail = (e) => {
  e.preventDefault();
  sending = true;

  const data = {
    name: fullName.value,
    email: emailAddress.value,
    phone: phoneNumber.value,
    subject: subject.value,
    message: message.value,
  };

  fetch('https://agitated-shockley-cce252.netlify.app/.netlify/functions/email', {
    method: 'post',
    mode: 'no-cors',
    body: JSON.stringify(data),
  })
    .then((res) => {
      sent = true;
      sending = false;

      if (res.ok) {
        sent = true;
        name = '';
        email = '';
        subject = '';
        message = '';
      }
    })
    .catch((err) => {
      console.log('Error: ', err);
    });

  window.setTimeout(() => {
    sent = false;
    sending = false;
  }, 5000);
};
