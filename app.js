import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config()

app.use(cors());
app.use(express.json());

let arr = []
const port = process.env.PORT;

app.get("/",(req,res)=> {
	res.send("HELLO WORLD:");
});

app.post("/",(req,res)=> {
	const {name} = req.body;

	arr.push(name);
	res.send("HELLO WORLD:" + name);
});

app.listen(port, () => {
	console.log("SERVER UP AT PORT: " + port);
})

