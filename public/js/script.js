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
const searchBox = document.getElementById("icon_prefix2")

searchBox.addEventListener("change", () => {
  let searchTerm = searchBox.innerHTML
  console.log(searchTerm)
  localStorage.setItem("searchTerm", searchTerm)
})