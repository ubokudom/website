document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var scrollImage = document.getElementById('scrollImage');

    scrollImage.addEventListener('click', function () {
        container.scrollTop = container.scrollHeight;
    });
});