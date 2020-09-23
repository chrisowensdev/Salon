'use strict';
let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


const get = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

console.log(get(url));