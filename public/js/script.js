'use strict';
let objectUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';




const search = async () => {
    let searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet`
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data;
};

console.log(search());