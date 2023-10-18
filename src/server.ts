import express from "express";
import cors from "cors";
const server = express();
const port = 5000;
server.use(express.json());
server.use(cors());
server.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
