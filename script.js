function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.onload = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    if (performance.navigation.type !== 1) {
        document.querySelector(".links1 a[href='#top']");
    }

    window.scrollTo(0, 0);
};

function showImageContainer() {
    document.querySelector('.image-container').style.display = 'flex';
}

function hideImageContainer() {
    document.querySelector('.image-container').style.display = 'none';
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.images')) {
        hideImageContainer();
    }
});