'use strict';

const express = require('express'),
    db = require('../models/conn'),
    router = express.Router();

const reviewsList = require('../models/reviewsModel'),
    favoritesList = require('../models/favoritesModel'),
    usersList = require('../models/usersModel');


//GET all reviews and favorites for this user_id
router.get('/:user_id?', async (req, res) => {
    const userFavorites = await favoritesList.showAllFavorites(req.params.user_id);
    const userReviews = await reviewsList.showAllReviewsProfile(req.params.user_id);
    console.log(userReviews);
    console.log(userFavorites)
    res.render('template', {
        locals: {
            title: `User Profile`,
            data: userReviews,
            dataFav: userFavorites,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-profile'
        }
    });
});

module.exports = router;