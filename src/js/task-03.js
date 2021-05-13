import images from './data/images.js';


const listImgGallery = document.querySelector('#gallery');


const makeImgMarkup = ({ url, alt }) => {

    return `
    <li class ="item"><img src=${url} alt=${alt} width=300 ></li>
    `;
};

const imgElementMarkup = images.map(makeImgMarkup);



listImgGallery.insertAdjacentHTML('beforeend', imgElementMarkup);