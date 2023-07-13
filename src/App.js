import { useState } from "react";
import { styled } from "styled-components";
import { mobile, tablet, dark } from "./responsive";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	overflow: hidden;
	min-height: 100vh;
	padding: 30px 0;
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
	})}
`;

const Title = styled.h1`
	font-size: 36px;
	${tablet({
		fontSize: "32px",
	})}
`;

const Input = styled.input`
	padding: 8px 10px;
	font-size: 16px;
	margin: 15px 30px;
	border-radius: 10px;
	border: 1px solid black;
	max-width: 80vw;
`;

const Button = styled.button`
	font-weight: 700;
	padding: 8px 16px;
	margin-bottom: 15px;
	background-color: white;
	color: black;
	border: 1px solid rgba(0, 0, 0, 0);
	cursor: pointer;
	box-shadow: 5px 5px 0px 0px rgb(0, 0, 0);
	border-radius: 10px;
	&:hover {
		background-color: #dadada;
		border: 1px solid black;
		color: #3b444b;
		text-shadow: -1px -1px 0 #cdcdcd;
		transition: all 250ms linear;
		box-shadow: 4px 4px 0px 0px rgb(0, 0, 0);
	}
`;

const ResultsWrapper = styled.div`
	max-width: 1200px;
	margin: 0 100px;
	${mobile({
		margin: "0 30px",
	})}
	${tablet({
		margin: "0 50px",
	})}
`;

const Post = styled.div`
	margin-bottom: 20px;
	text-align: left;
	${dark({
		color: "#f8f9fa",
	})}
`;

const PostTitle = styled.h2`
	margin-bottom: 5px;
	${mobile({
		fontSize: "18px",
	})}
	${tablet({
		fontSize: "22px",
	})}
`;

const PostBody = styled.p`
	font-size: 17px;
	${mobile({
		fontSize: "15px",
	})}
	${tablet({
		fontSize: "16px",
	})}
`;

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [results, setResults] = useState([]);

	const getPosts = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((posts) => {
				const filteredPosts = posts.filter((post) =>
					post.title.toLowerCase().includes(searchInput.toLowerCase())
				);

				filteredPosts.sort((a, b) => b.title.length - a.title.length);
				setResults(filteredPosts);
			})
			.catch((error) => {
				console.log("Error fetching posts:", error);
			});
	};

	return (
		<Container>
			<Title>Blog Posts Search</Title>
			<Input
				type="text"
				placeholder="Search by title..."
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			></Input>
			<Button onClick={getPosts}>SEARCH</Button>
			<ResultsWrapper>
				{results.map((post) => (
					<Post key={post.id}>
						<PostTitle>{post.title}</PostTitle>
						<PostBody>{post.body}</PostBody>
					</Post>
				))}
			</ResultsWrapper>
		</Container>
	);
}

export default App;
