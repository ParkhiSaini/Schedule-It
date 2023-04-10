const express = require('express');
const router = express.Router();
const Req = require('../../models/Requests');
const auth = require('../../middlewares');

router.get('/test', (req, res) => res.send('Testing heheheheh!'));

router.get("/Requests", auth, (req, res, next) => {
    Req.find({userId: req.user.id})
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(404).json({ noreqsfound: 'No Requests found' }));
  });


router.post('/BookRoom', auth,async(req, res) => {
  const reques = new Req({
    userId: req.user.id,
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
  res.status(200).json({token: "okay"});
  })
  .catch(err => {
    console.log(err);
  res.status(400).json(err);
  });
});

router.get("/DeanRequests",(req, res) => {
  Req.find()
  .then(requests => res.status(200).json(requests))
  .catch(err => res.status(404).json({ noreqsfound: 'No Requests found' }));
});

module.exports = router;