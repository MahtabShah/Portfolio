// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}

// Function to handle the scroll event
function handleScroll(imagesP1, discr1) {

    if (isInViewport(imagesP1)) {
        imagesP1.classList.add('slide-in-left');
    } else {
        imagesP1.classList.remove('slide-in-left');

    }
    if (isInViewport(discr1)) {
        discr1.classList.add('slide-in-right');
    } else {
        discr1.classList.remove('slide-in-right');

    }
}

// Attach the scroll event listener
document.getElementById('intro').addEventListener('scroll', () => {

    const i1 = document.getElementById('imagesP1');
    const d1 = document.getElementById('discr1');
    const i2 = document.getElementById('imagesP2');
    const d2 = document.getElementById('discr2');
    handleScroll(i1, d1);
    handleScroll(i2, d2);

})

const i1 = document.getElementById('imagesP1');
const d1 = document.getElementById('discr1');
const i2 = document.getElementById('imagesP2');
const d2 = document.getElementById('discr2');
handleScroll(i1, d1);
handleScroll(i2, d2);



let projects = document.querySelector('.projects');
let activeEl = projects;
let arr = document.querySelectorAll('.info a');

arr.forEach(e => {
    e.addEventListener('click', () => {

        document.getElementById('myPhoto').append(document.querySelector('.shift'));
        document.getElementById('myPhoto').style.border = `1px solid #BF2EF0`;
        // document.querySelector('.intro-container h1').style.textAlign = `center`;
        document.querySelector('.intro-container h1').style.textAlign = 'center';
        document.querySelector('.intro-container h2').style.textAlign = 'center';

        // document.getElementById('intro').style.background = `#9bed`;

        if (activeEl) {

            document.getElementById(activeEl.classList[0]).classList.remove('activeChange');
            activeEl = e;

        }

        document.getElementById(activeEl.classList[0]).classList.add('activeChange');

    })
})
