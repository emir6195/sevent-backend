const router = require('express').Router();
const Event = require('../controllers/event.controller');

router.get('/', async (req, res, next) => {
  try {
    let event = new Event();
    let events = await event.readAll();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.get('/:_id', async (req, res, next) => {
  try {
    let _id = req.params['_id'];
    let event = new Event({ _id: _id });
    let result = await event.readOne();
    res.send(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:_id', async (req, res, next) => {
  try {
    let _id = req.params['_id'];
    let event = new Event({ _id: _id });
    let events = await event.delete();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    let event = new Event(req.body);
    let events = await event.update();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.put('/push-invitee', async (req, res, next) => {
  try {
    let event = new Event(req.body);
    let events = await event.pushInvitee();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.put('/push-attendee', async (req, res, next) => {
  try {
    let event = new Event(req.body);
    let events = await event.pushAttendee();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.put('/push-content', async (req, res, next) => {
  try {
    let event = new Event(req.body);
    let events = await event.pushContent();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let event = new Event(req.body);
    let events = await event.create();
    res.send(events);
  } catch (error) {
    next(error);
  }
});

module.exports = router;