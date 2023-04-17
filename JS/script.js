/* A function that is typing the text in the page. */
let typed = new Typed("#typing", {
   strings: ["", "", "Desenvolvedor Web.", "Estudante de Análise e Desenvolvimento de Sistemas.", "Estudante de Técnico em Desenvolvimento de Sistemas."],
   typeSpeed: 40,
   BackSpeed: 60,
   loop: true
});

const accordionItems = document.querySelectorAll('.accordion .timeline-title');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.nextElementSibling;
        const icon = item.querySelector('i');
        text.classList.toggle('accordion-open');
        if(icon.classList.contains('fa-arrow-turn-down')){
            icon.classList.remove('fa-arrow-turn-down')
            icon.classList.add('fa-arrow-turn-up');
        }else {
            icon.classList.remove('fa-arrow-turn-up');
            icon.classList.toggle('fa-arrow-turn-down');
        }
    });
});


/* This code is adding event listeners to the elements with the IDs "linkedin" and "github". When these
elements are clicked, the code opens a new window with the corresponding LinkedIn or GitHub profile
of the developer. */
document.querySelector("#linkedin").addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/eversonvieiradelima/", "_blank");
});

document.querySelector("#github").addEventListener('click', () => {
    window.open("https://github.com/EversonVieiradeLima", "_blank");
});


/**
 * If the mouse leaves the image, and the mouse is not hovering over the links, then remove the box
 * container.
 * @param event - the event object
 */
const portfolioImgs = document.querySelectorAll(".portfolio-img img");
const portfolioBox = document.querySelectorAll(".portfolio-box-container");
const portfolioBoxContainers = [...portfolioBox]

function addBoxContainer (event) {
    const element = event.target;
    const nextElement = element.nextElementSibling;
    nextElement.classList.add('open-container');
}
function removeBoxContainer (event) {
    const element = event.target;
    const nextElement = element.nextElementSibling;
    nextElement.classList.remove('open-container');
}

const repoLink = Array.from(document.querySelectorAll('.portfolio-box-container .repo a'));
const siteLink = Array.from(document.querySelectorAll('.portfolio-box-container .site a'));

portfolioImgs.forEach((item, index) => {
    item.addEventListener('mouseenter', addBoxContainer);
    item.addEventListener('mouseleave', (event) => {
        let relatedTargetInLinks = false;
        repoLink.forEach((link) => {
            if (event.relatedTarget === link) {
                relatedTargetInLinks = true;
            }
        });
        siteLink.forEach((link) => {
            if (event.relatedTarget === link) {
                relatedTargetInLinks = true;
            }
        });

        if (event.relatedTarget === null || relatedTargetInLinks) {
            return;
        }
        removeBoxContainer(event);
    });  
})