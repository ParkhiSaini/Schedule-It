const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const connectDB = require('./config/db');
const Roomroutes = require('./routes/api/rooms');
const Reqroutes = require('./routes/api/requests');

const app = express();
connectDB();

app.use(cors())
app.use(express.json())

app.use('/api', Roomroutes);

app.use('/api/requests', Reqroutes);


app.post('/SignUp', async (req, res) => {
	console.log("Validation check started");
	if (!req.body.email.toLowerCase().endsWith('@bennett.edu.in')) {
		res.json({ status: 'ValidID', error: 'Invalid email address' });
	   console.log("Invalid Email Address kindly use your bennett id");
	}
	else{
		console.log(req.body)
		try {
			const newPassword = await bcrypt.hash(req.body.password, 10)
			await User.create({
				name: req.body.name,
				email: req.body.email,
				password: newPassword,
				role:req.body.role
			})
			res.json({ status: 'ok' })
		} catch (err) {
			res.json({ status: 'error', error: 'Duplicate email' })
		}
	}
})

app.post('/Login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));