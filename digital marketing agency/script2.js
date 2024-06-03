
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.service-cards .card');
    const heroImage = document.getElementById('hero-image');
    const defaultImage = 'img9.png';

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const newImage = this.getAttribute('data-image');
            heroImage.setAttribute('src', newImage);
        });

        button.addEventListener('mouseout', function() {
            heroImage.setAttribute('src', defaultImage);
        });
    });
});



