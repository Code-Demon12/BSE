document.addEventListener('DOMContentLoaded', function() {
    const termsCheckbox = document.getElementById('terms-checkbox');
    const submitButton = document.getElementById('submit-button');

    termsCheckbox.addEventListener('change', function() {
        if (termsCheckbox.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

 
    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('terms-checkbox').checked = false;
    document.getElementById('submit-button').disabled = true;

    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
});
