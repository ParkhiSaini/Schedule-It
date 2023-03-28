const express = require('express');
const router = express.Router();

const ReqSchema = require('../../models/Requests');

router.get('/test', (req, res) => res.send('Testing heheheheh!'));

router.post('/create-request', async(req, res) => {
  const reques = new ReqSchema(req.body);
  const saved = await reques.save()
  .then(game => {
  res.status(200).json("request successfully saved");
  })
  .catch(err => {
  res.status(400).send(err);
  });
});

router.get("/display-requests", (req, res) => {
  ReqSchema.find()
    .then(requests => res.json(requests))
    .catch(err => res.status(404).json({ noreqsfound: 'No Requests found' }));
  });
module.exports = router;