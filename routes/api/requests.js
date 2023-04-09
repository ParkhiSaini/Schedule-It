const express = require('express');
const router = express.Router();
const Req = require('../../models/Requests');


router.get('/test', (req, res) => res.send('Testing heheheheh!'));

router.get("/Requests", (req, res) => {
  Req.find()
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(404).json({ noreqsfound: 'No Requests found' }));
  });


router.post('/BookRoom', async(req, res) => {
  const reques = new Req(req.body);
  await reques.save()
  .then(requests => {
  res.status(200).json("request successfully saved");
  })
  .catch(err => {
  res.status(400).send(err);
  });
});

module.exports = router;