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
    let searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data;
};


const getObject = async (objID) => {
    let objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objID}
    `;
    const response = await fetch(objectUrl);
    const data = await response.json();
    return data;
}

(async function () {
    // search() returns a promise, so we need to `await` it
    const searchData = await search('Monet');
    console.log(searchData)
    let objectArray = [];
    let counter = 0
    while (counter < 6) {
        searchData.objectIDs.map(async (objID) => {
            const objDetail = await getObject(objID)
            if ('Monet' in objDetail) {
                console.log('gotcha')
                objectArray.push(searchData.objID)
                counter += 1
            }
        })
        // objectArray.push(searchData.objectIDs[i]);
    }

    objectArray.map(async (object) => {
        const objectData = await getObject(object);
        console.log(object)
        const smallImage = objectData.primaryImageSmall;
        const link = document.createElement('a');
        link.setAttribute('href', `/images/${object}`);

        const image = document.createElement('img');
        image.setAttribute('src', smallImage);

        imageDiv.appendChild(link);
        link.appendChild(image);
        //imageArray[counter].setAttribute('src', smallImage);
        //counter++;
        //imageSrc.src = objectData.primaryImageSmall;
    })

})();