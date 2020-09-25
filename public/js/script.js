"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    duration: 10,
  });
  var elems = document.querySelectorAll(".collapsible");
  var instance1 = M.Collapsible.init(elems);
  var elems = document.querySelectorAll(".materialboxed");
  var instance2 = M.Materialbox.init(elems);
});

const searchDiv = document.querySelector(".search");

searchDiv.addEventListener("click", () => {
  const searchForm = document.querySelector(".search-form");
  searchForm.classList.add("show");
});

// const favoriteButton = document.getElementById("fav");
// favoriteButton.addEventListener("click", () => {
//   const favIcon = document.getElementById("favIcon");
//   if (favIcon.innerHTML === "favorite_border") {
//     favIcon.innerHTML = "favorite";
//   } else {
//     favIcon.innerHTML = "favorite_border";
//   }
// });
