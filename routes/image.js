"use strict";

const express = require("express"),
  db = require("../models/conn"),
  fetch = require("node-fetch"),
  router = express.Router();

const reviewsList = require("../models/reviewsModel"),
  favoritesList = require("../models/favoritesModel");
var bigData;

//GET render and data for images searched
router.get("/", async (req, res) => {
  res.render("template", {
    locals: {
      title: "Search",
      is_logged_in: req.session.is_logged_in,
    },
    partials: {
      partial: "partial-image",
    },
  });
});
//GET all reviews for this object_id
router.get("/:object_id?", async (req, res) => {
  const objectReviews = await reviewsList.showAllReviewsObject(
    req.params.object_id
  );
  const objId = req.params.object_id;
  await fetch(`https://api.artic.edu/api/v1/artworks/${objId}`)
    .then((res) => res.json())
    .then((json) => {
      bigData = {
        id: json.data.id,
        title: json.data.title,
        url: json.data.thumbnail.url,
        artist_title: json.data.artist_title,
        description: json.data.description,
        place_of_origin: json.data.place_of_origin,
        medium_display: json.data.medium_display,
        alt_text: json.data.alt_text,
        info: json.data.info,
      };
    });
  console.log(bigData);
  res.render("template", {
    locals: {
      title: "",
      data: objectReviews,
      imgData: bigData,
      is_logged_in: req.session.is_logged_in,
    },
    partials: {
      partial: "partial-imageID",
    },
  });
});
//POST new review for this user_id
router.post("/:object_id?", async (req, res) => {
  const object_id = req.params.object_id;
  console.log("this is the req body: ", req.body);
  const { user_id, review_text, date } = req.body;
  await reviewsList.addReview(user_id, review_text, date, object_id);
  res.redirect(`/${object_id}`);
});
//DELETE review at specific review.id
router.delete("/:object_id?", async (req, res) => {
  const object_id = req.params.object_id;
  if (req.body.delete === "delete") {
    const { id } = req.body;
    await reviewsList.removeReview(id);
    res.redirect(`/${object_id}`);
  }
});
//POST to favorites list for this user_id
router.post("/:object_id?", async (req, res) => {
  const object_id = req.params.object_id;
  const { user_id } = req.body;
  await favoritesList.addFavorite(user_id, object_id);
  res.redirect(`/${object_id}`);
});
//DELETE favorite at specific object_id
router.delete("/:object_id?", async (req, res) => {
  if (req.body.delete === "delete") {
    const object_id = req.params.object_id;
    await favoritesList.removeFavorite(object_id);
    res.redirect(`/${object_id}`);
  }
});

module.exports = router;
