const router = require('express').Router();
const User = require('../controllers/user.controller');


router.get('/:_id', async (req, res, next) => {
    try {
        let _id = req.params['_id'];
        let user = new User({ _id: _id });
        let result = await user.readOne();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        let user = new User(req.body);
        let result = await user.create();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.put('/:_id', async (req, res, next) => {
    try {
        let _id = req.params['_id'];
        let user = new User(req.body);
        let result = await user.update();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.put('/:_id', async (req, res, next) => {
    try {
        let _id = req.params['_id'];
        let user = new User(req.body);
        let result = await user.delete();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;