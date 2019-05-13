const router = require('express').Router();
const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
    try {
        const candies = await Candy.findAll()
        console.log('these are candies', candies)
        res.json(candies)
    } catch (error) {
        next(error)
    }
})

module.exports = router
