import { useState } from "react";
import { styled } from "styled-components";
import { mobile, tablet, dark } from "./responsive.js";

const Container = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	text-align: center;
	overflow: hidden;
	min-height: 100vh;
	padding: 30px 0;
	background: -webkit-gradient(
		linear,
		left bottom,
		left top,
		from(rgba(255, 255, 255, 0)),
		to(rgba(0, 67, 255, 0.7))
	);
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(0, 67, 255, 0.7) 100%
	);
	${mobile({
		padding: "20px 0",
	})}
	${dark({
		background:
			"linear-gradient(0deg,rgba(0, 0, 0, 0.7) 0%,rgba(0, 67, 255, 0.7) 100%)",
		background:
			"-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 67, 255, 0.7)));",
	})}
`;

const Title = styled.h1`
	font-size: 36px;
	font-weight: 900;
	${tablet({
		fontSize: "32px",
	})}
`;

const Input = styled.input`
	padding: 8px 10px;
	font-size: 18px;
	margin: 15px 30px;
	border-radius: 10px;
	border: 1px solid black;
	max-width: 80vw;
	${tablet({
		fontSize: "16px",
	})}
`;

const Button = styled.button`
	font-weight: 700;
	font-size: 16px;
	padding: 8px 16px;
	margin-bottom: 15px;
	background-color: white;
	color: black;
	border: 1px solid rgba(0, 0, 0, 0);
	cursor: pointer;
	box-shadow: 5px 5px 0px 0px rgb(0, 0, 0);
	-webkit-box-shadow: 5px 5px 0px 0px rgb(0, 0, 0);
	border-radius: 10px;
	&:hover {
		background-color: #dadada;
		border: 1px solid black;
		color: #3b444b;
		text-shadow: -1px -1px 0 #cdcdcd;
		transition: all 250ms linear;
		box-shadow: 4px 4px 0px 0px rgb(0, 0, 0);
		-webkit-box-shadow: 4px 4px 0px 0px rgb(0, 0, 0);
	}
	${tablet({
		fontSize: "14px",
	})}
`;

const ResultsWrapper = styled.div`
	max-width: 1200px;
	margin: 0 100px;
	${tablet({
		margin: "0 50px",
	})}
	${mobile({
		margin: "0 30px",
	})}
`;

const Post = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	background-color: #f6f6f6;
	border: 2px solid black;
	border-radius: 10px;
	text-align: left;
	min-width: 80vw;
	${dark({
		color: "black",
	})}
	${tablet({
		padding: "10px",
	})}
`;

const PostTitle = styled.h2`
	margin-bottom: 5px;
	padding-bottom: 5px;
	${tablet({
		fontSize: "22px",
	})}
	${mobile({
		fontSize: "18px",
	})}
	border-bottom: 1px solid black;
`;

const PostBody = styled.p`
	font-size: 17px;
	${tablet({
		fontSize: "16px",
	})}
	${mobile({
		fontSize: "15px",
	})}
`;

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [results, setResults] = useState([]);
	const [isFetched, setIsFetched] = useState(false);

	const getPosts = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((posts) => {
				const filteredPosts = posts.filter((post) =>
					post.title.toLowerCase().includes(searchInput.toLowerCase())
				);

				filteredPosts.sort((a, b) => b.title.length - a.title.length);
				setResults(filteredPosts);
				setIsFetched(true);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
	};

	// REPLACE GETPOSTS FUNCTION FOR NODE SERVER VERSION
	// const getPosts = () => {
	// 	fetch("http://localhost:5000/search?q=" + searchInput)
	// 		.then((response) => response.json())
	// 		.then((posts) => {
	// 			setResults(posts);
	// 			setIsFetched(true);
	// 		})
	// 		.catch((error) => {
	// 			console.log("Error fetching posts:", error);
	// 		});
	// };

	const handleKeyPress = (event) => {
		if (event.keyCode === 13 || event.which === 13) {
			getPosts();
		}
	};

	return (
		<Container>
			<Title>Blog Posts Search</Title>
			<Input
				type="text"
				placeholder="Search by title..."
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				onKeyPress={handleKeyPress}
			></Input>
			<Button onClick={getPosts}>SEARCH</Button>
			<ResultsWrapper>
				{isFetched ? (
					results.length === 0 ? (
						<Post>
							<PostBody>No results found.</PostBody>
						</Post>
					) : (
						results.map((post) => (
							<Post key={post.id}>
								<PostTitle>{post.title}</PostTitle>
								<PostBody>{post.body}</PostBody>
							</Post>
						))
					)
				) : (
					""
				)}
			</ResultsWrapper>
		</Container>
	);
}

export default App;
