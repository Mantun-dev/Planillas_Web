const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    let options = {
        one: 'active'
    };
    res.render('dashboard', options);
});


router.get('/personal', (req, res) => {
    let options = {
        two: 'active'
    };
    res.render('personal', options)
});

router.get('/planilla', (req, res) => {
    let options = {
        three: 'active'
    };
    res.render('planilla', options)
});

router.get('/alorsps', (req, res) => {
    let options = {
        four: 'active'
    };
    res.render('alorsps', options)
});

router.get('/starteksps', (req, res) => {
    let options = {
        five: 'active'
    };
    res.render('starteksps', options)
});

router.get('/zerovariansps', (req, res) => {
    let options = {
        six: 'active'
    };
    res.render('zerovariansps', options)
});

router.get('/starteksps', (req, res) => {
    let options = {
        seven: 'active'
    };
    res.render('starteksps', options)
});

router.get('/startektgu', (req, res) => {
    let options = {
        eight: 'active'
    };
    res.render('startektgu', options)
});

router.get('/startektguxviaje', (req, res) => {
    let options = {
        nine: 'active'
    };
    res.render('startektguxviaje', options)
});

router.get('/bonos', (req, res) => {
    let options = {
        ten: 'active'
    };
    res.render('bonos', options)
});

router.get('/deducciones', (req, res) => {
    let options = {
        eleven: 'active'
    };
    res.render('deducciones', options)
});


module.exports = router;