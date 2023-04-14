const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Requests = require('./models/Requests')
const connectDB = require('./config/db');
const Roomroutes = require('./routes/api/rooms');
const Reqroutes = require('./routes/api/requests');

const app = express();
connectDB();

app.use(cors())
app.use(express.json())

app.use('/api', Roomroutes);

app.use('/', Reqroutes);


app.post('/SignUp', async (req, res) => {
	const user = req.body;
	if (!user.email.toLowerCase().endsWith('@bennett.edu.in')) {
		res.json({ status: 'ValidID', error: 'Invalid email address' });
	   alert("Invalid Email Address kindly use your bennett id");
	}
	else{
		try {
			const newPassword = await bcrypt.hash(user.password, 10)
			await User.create({
				name: user.name,
				email: user.email,
				password: newPassword,
				role: user.role
			})
			res.json({ status: 'ok' })
		} catch (err) {
			res.json({ status: 'error', error: err.message })
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
		const payload = {
			id: user._id,
			name: user.name,
			role: user.role
		}
		jwt.sign(payload,'secret123', { expiresIn: 3600 }, (err, token) => {
			if (err) {
				return res.json({ status: 'error', error: err.message })
			}else{
				return res.json({ status: 'ok', token: token, role: user.role})
			}
		})
	} else {
		return res.json({ status: 'error', token: false })
	}
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));