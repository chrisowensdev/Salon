'use strict';

const imageDiv = document.querySelector('.images');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

const imageArray = [img1, img2, img3, img4, img5];

let objectUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';




const search = async (searchTerm) => {
    let searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}`
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data;
};


const getObject = async (objID) => {
    let objectUrl = `https://api.artic.edu/api/v1/artworks/${objID}
    `;
    const response = await fetch(objectUrl);
    const data = await response.json();
    return data;
}

(async function () {
    // search() returns a promise, so we need to `await` it
    const searchData = await search('cats');

    console.log(searchData.data)
    let objectArray = [];
    let counter = 0
    while (objectArray.length < 6) {
        searchData.data.map(async (objID) => {
            objectArray.push(objID.id)
        })
    }
    objectArray.map(async (object) => {
        const objectData = await getObject(object);
        console.log(object)
        const smallImage = objectData.data.thumbnail.url;
        console.log(smallImage)
        const url = smallImage + '/full/full/0/default.jpg'
        const link = document.createElement('a');
        link.setAttribute('href', `/images/${object}`);

        const image = document.createElement('img');
        image.setAttribute('src', url);

        imageDiv.appendChild(link);
        link.appendChild(image);
        //imageArray[counter].setAttribute('src', smallImage);
        //counter++;
        //imageSrc.src = objectData.primaryImageSmall;
    })

})();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 10
    });
});