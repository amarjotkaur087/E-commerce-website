$(document).ready(function () {
    $('#contactForm').submit(function (e) {
        e.preventDefault();

        let isValid = true;

        $('#contactForm input[required], #contactForm textarea[required]').each(function () {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

        const email = $('#email').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            $('#email').addClass('input-error');
            alert('Please enter a valid email address.');
            return;
        } else {
            $('#email').removeClass('input-error');
        }

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Thank you for contacting us! We will get back to you soon.');
        $('#contactForm')[0].reset();
    });
});
