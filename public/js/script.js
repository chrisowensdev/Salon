"use strict";
const favIdentifier = document.getElementById("favIdentifier");
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    duration: 10,
  });
  var elems = document.querySelectorAll(".collapsible");
  var instance1 = M.Collapsible.init(elems);
  var elems = document.querySelectorAll(".materialboxed");
  var instance2 = M.Materialbox.init(elems);
  const formFav = document.getElementById("favorite");
});

const searchDiv = document.querySelector(".search");

searchDiv.addEventListener("click", () => {
  const searchForm = document.querySelector(".search-form");
  searchForm.classList.add("show");
});

// const favoriteButton = document.getElementById("fav");
// favoriteButton.addEventListener("click", () => {
//   const favIcon = document.getElementById("favIcon");
//   if (favIdentifier.value === "clicked") {
//     favIdentifier.value = "unclicked";
//     console.log("button unclicked");
//   } else {
//     favIdentifier.value = "clicked";
//     console.log("button clicked");
//   }
// });
