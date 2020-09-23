'use strict';
let objectUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';




// const search = async () => {
//     let searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet`
//     const response = await fetch(searchUrl);
//     const data = await response.json();
//     return data;
// };

// console.log(search());

// (async function () {
//     // search() returns a promise, so we need to `await` it
//     const searchData = await search();
//     console.log(searchData);
// })();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 10
    });
});