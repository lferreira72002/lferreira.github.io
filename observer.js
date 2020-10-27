const faders= document.querySelectorAll('.fade');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -10px 0px"
};

const appeareonscroll = new IntersectionObserver(function(
    entries,
    appeareonscroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appeareonscroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appeareonscroll.observe(fader);
});