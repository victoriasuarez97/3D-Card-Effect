const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const details = document.querySelector('.details');
const album = document.querySelector('.album');
const button = document.querySelector('.purchase');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener('mouseenter', e => {
    card.style.transition = "none";

    album.style.transform = "translateZ(200px)"
    title.style.transform = "translateZ(150px)";
    subtitle.style.transform = "translateZ(125px)";
    details.style.transform = "translateZ(125px)";
    button.style.transform = "translateZ(130px)";

})

container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg), rotateX(0deg)`;

    album.style.transform = "translateZ(0px)"
    title.style.transform = "translateZ(0px)";
    subtitle.style.transform = "translateZ(0px)";
    details.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
})

