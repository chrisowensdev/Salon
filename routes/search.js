'use strict';

const express = require('express'),
    db = require('../models/conn'),
    fetch = require('node-fetch'),
    router = express.Router();



//GET render and data for images searched
router.post('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Search',
            searchTerm: req.body.searchTerm,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-image'
        }
    });
});

module.exports = router;