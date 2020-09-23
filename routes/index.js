'use strict';

const express = require('express');
const router = express.Router();


//TEST ROUTE
router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login',
        },
        partials: {
            partial: 'partial-login'
        }
    });
});

module.exports = router;