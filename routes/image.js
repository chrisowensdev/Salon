'use strict';

const express = require('express'),
    db = require('../models/conn'),
    router = express.Router();

const reviewsList = require('../models/reviewsModel'),
    favoritesList = require('../models/favoritesModel');

//GET all reviews for this object_id
router.get('/:object_id?', async (req, res) => {
    const objectReviews = await reviewsList.showAllReviewsObject(req.params.object_id);
    console.log(objectReviews);
    res.render('template', {
        locals: {
            title: '',
            data: objectReviews,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-image'
        }
    });
});
//POST new review for this user_id
router.post('/:object_id?', (req, res) => {
    const object_id = req.params.object_id
    console.log('this is the req body: ', req.body);
    const {
        user_id,
        review_text,
        date
    } = req.body;
    await reviewsList.addReview(user_id, review_text, date, object_id);
    res.redirect(`/${object_id}`);
});
//delete review at specific review.id
router.delete('/:object_id?', (req, res) => {
    if (req.body.delete === 'Delete') {
        const {
            id
        } = req.body
        await reviewsList.removeReview(id);
        res.redirect(`/${object_id}`);
    }
})


//POST to favorites list for this user_id
router.post('/:object_id?', (req, res) => {
    const object_id = req.params.object_id
    const {
        user_id
    } = req.body;
    await favoritesList.addFavorite(user_id, object_id);
    res.redirect(`/${object_id}`);
});