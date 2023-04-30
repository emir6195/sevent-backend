const router = require('express').Router();
const User = require('../controllers/user.controller');


router.post('/', async (req, res, next) => {
    try {
        let user = new User(req.body);
        let result = await user.create();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.put('/', async (req, res, next) => {
    try {
        let user = new User(req.body);
        let result = await user.update();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.delete('/', async (req, res, next) => {
    try {
        let user = new User(req.body);
        let result = await user.delete();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        let token;
        let status;
        let message;
        let user = new User(req.body);
        let result = await user.authenticate();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;