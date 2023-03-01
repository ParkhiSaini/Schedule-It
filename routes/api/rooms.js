const express = require('express');
const router = express.Router();

const Book = require('../../models/Room');

router.get('/test', (req, res) => res.send('Testing heheheheh!'));

router.get('/', (req, res) => {
    Room.find()
      .then(rooms => res.json(rooms))
      .catch(err => res.status(404).json({ nobooksfound: 'No Rooms found' }));
    });

module.exports = router;