import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/search", (req, res) => {
	const searchInput = req.query.q;

	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((posts) => {
			const filteredPosts = posts.filter((post) =>
				post.title.toLowerCase().includes(searchInput.toLowerCase())
			);

			filteredPosts.sort((a, b) => b.title.length - a.title.length);
			res.json(filteredPosts);
		})
		.catch((error) => {
			console.log("Error:", error);
			res.status(500).json({ error: "An error occurred" });
		});
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
