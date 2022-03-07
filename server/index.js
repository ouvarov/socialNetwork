require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index')
const errorMiddleware = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
	origin: process.env.CLIENT_URL,
	credentials:true,
	optionSuccessStatus: 200
}));
app.use('/api', router);
app.use(errorMiddleware)



io.on("connection", (socket) => {

	socket.on("JOIN-CHAT", (data) => {
		socket.join(data);
		console.log('user connect chat', data)
	})

	socket.on("JOIN-PROFILE", (data) => {
		socket.join(data);
		console.log('user connect profile', data)
	});

	socket.on("ADD-MESSAGE", data => {
		socket.to(data.room).emit("UPDATE-CHAT", data);
	})

	socket.on("PRINTING-MESSAGE", data => {
		socket.to(data.room).emit("UPDATE-MESSAGE", data);
	})

	socket.on("CHANGE-POST", (data) => {
		socket.to(data.room).emit("UPDATE-PROFILE", data);
	});

	socket.on('CHANGE-POST-TEXT', (data) => {
		socket.to(data.room).emit("UPDATE-POST-TEXT", data);
	})

	socket.on("disconnect", () => {
		console.log("User Disconnected", socket.id);
	});
});

server.listen(PORT,  async () =>  {
	console.log(`server start in PORT = ${PORT}`)
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
	} catch (e) {
		console.log(e);
	}
})
