$(document).ready(function () {
    $('#shippingForm').submit(function (e) {
        e.preventDefault();

        // Simple form validation
        let isValid = true;
        $('#shippingForm input[required]').each(function () {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Order placed successfully!');
        // Here you can add further processing like sending data to server or redirecting
        window.location.href = 'order-confirmation.html';
    });
});
