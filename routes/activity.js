'use strict';

const express = require('express'),
    db = require('../models/conn'),
    fetch = require('node-fetch'),
    router = express.Router();

const reviewsList = require('../models/reviewsModel'),
    favoritesList = require('../models/favoritesModel');
var bigData;
//GET all reviews for this object_id
router.get("/", async (req, res) => {
  const objectReviews = await reviewsList.showAllReviewsObject(
    req.params.object_id
  );
  const favData = await favoritesList.showIfFavorite(
    req.session.user_id,
    req.params.object_id
  );
  console.log(objectReviews);

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
                date_display: json.data.date_display,
                alt_text: json.data.thumbnail.alt_text,
                artist_display: json.data.artist_display
            };
        });
    res.render('template', {
        locals: {
            title: 'Activity',
            data: objectReviews,
            imgData: bigData,
            favData: favData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-activity',
        },
    });
});

module.exports = router;