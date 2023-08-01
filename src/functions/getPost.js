const getPosts = async (searchInput, setResults, setIsFetched) => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await response.json();

		const filteredPosts = posts.filter((post) =>
			post.title.toLowerCase().includes(searchInput.toLowerCase())
		);

		filteredPosts.sort((a, b) => b.title.length - a.title.length);
		setResults(filteredPosts);
		setIsFetched(true);
	} catch (error) {
		console.log("Error:", error);
	}
};

export { getPosts };

// REPLACE GETPOSTS FUNCTION FOR NODE SERVER VERSION
// const getPosts = async (searchInput, setResults, setIsFetched) => {
// 	try {
// 		const response = await fetch(
// 			`http://localhost:5000/search?q=${searchInput}`
// 		);
// 		const posts = await response.json();
// 		setResults(posts);
// 		setIsFetched(true);
// 	} catch (error) {
// 		console.log("Error fetching posts:", error);
// 	}
// };

// export { getPosts };
