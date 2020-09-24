'use strict';

const express = require('express');
const router = express.Router();

//TEST ROUTE
router.get('/', async (req, res) => {

    if (!req.session.is_logged_in) {
        res.render('template', {
            locals: {
                title: 'Login',
            },
            partials: {
                partial: 'partial-login',
            },
        });
    } else {
        res.render('template', {
            locals: {
                title: 'Search',
                is_logged_in: req.session.is_logged_in,
            },
            partials: {
                partial: 'partial-search',
            }
        })
    }

});

module.exports = router;