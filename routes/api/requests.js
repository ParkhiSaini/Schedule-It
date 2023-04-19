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


router.post('/BookRoom', auth, async(req, res) => {
  const reques = new Req({
    userId: req.user.id,
    name: req.body.name,
    numofpeople: req.body.numofpeople,
    date: req.body.date,
    time: req.body.time,
    chapterName: req.body.chapterName,
    roomType: req.body.roomType,
    duration: req.body.duration,
    status: "Pending",
    reason: req.body.reason,
    expanded: false
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

router.post("/Requests/:id/accept", auth, async (req, res) => {
  const requestId = req.params.id;
  Req.findByIdAndUpdate(requestId, { status: "Approved" }, { new: true })
  .then((updatedRequest) => {
    console.log(updatedRequest);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post("/Requests/:id/reject", auth, async (req, res) => {
  const requestId = req.params.id;
  Req.findByIdAndUpdate(requestId, { status: "Rejected" }, { new: true })
  .then((updatedRequest) => {
    console.log(updatedRequest);
  })
  .catch((error) => {
    console.log(error);
  });
});




module.exports = router;