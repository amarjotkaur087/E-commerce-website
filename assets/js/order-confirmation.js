$(document).ready(function () {
    // For demonstration, generate a random order number and set status
    function generateOrderNumber() {
        return '#' + Math.floor(100000 + Math.random() * 900000);
    }

    $('#orderNo').text(generateOrderNumber());
    $('#orderStatus').text('Processing');
});
