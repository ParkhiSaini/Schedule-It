const express = require('express');
const router = express.Router();
const Req = require('../../models/Requests');
const crypto = require("crypto");
const auth = require('./auth');

router.get('/test', (req, res) => res.send('Testing heheheheh!'));

router.get("/Requests", (req, res) => {
    Req.find()
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(404).json({ noreqsfound: 'No Requests found' }));
  });


router.post('/BookRoom', async(req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  const reques = new Req({
    id: id,
    name: req.body.name,
    numofpeople: req.body.numofpeople,
    date: req.body.date,
    priority: req.body.priority,
    chapterName: req.body.chapterName,
    roomType: req.body.roomType,
    duration: req.body.duration,
    status: "Pending",
    reason: "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });
  await reques.save()
  .then(requests => {
  res.status(200).json({status: "okay"});
  })
  .catch(err => {
  res.status(400).send(err);
  });
});

router.get("/DeanRequests", (req, res) => {
  Req.find()
  .then(requests => res.status(200).json(requests))
  .catch(err => res.status(404).json({ noreqsfound: 'No Requests found' }));
});

module.exports = router;