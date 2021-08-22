require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index')
const errorMiddleware = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
	origin: process.env.CLIENT_URL,
	credentials:true,
	optionSuccessStatus:200
}));
app.use('/api', router);
app.use(errorMiddleware)


const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => console.log(`server start in PORT = ${PORT}`))
	} catch (e) {
		console.log(e);
	}
}
start()
