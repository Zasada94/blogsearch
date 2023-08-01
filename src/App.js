import { useState } from "react";
import { styled } from "styled-components";
import { mobile, tablet, dark } from "./functions/responsive.js";
import { getPosts } from "./functions/getPost.js";
import Post from "./components/Post.js";

const Container = styled.div`
	color: black;
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

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [results, setResults] = useState([]);
	const [isFetched, setIsFetched] = useState(false);

	const fetchPosts = () => {
		getPosts(searchInput, setResults, setIsFetched);
	};

	const handleKeyPress = (event) => {
		if (event.keyCode === 13 || event.which === 13) {
			fetchPosts();
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
			<Button onClick={fetchPosts}>SEARCH</Button>
			<ResultsWrapper>
				{isFetched ? (
					results.length === 0 ? (
						<Post title="no results found"></Post>
					) : (
						results.map((post) => (
							<Post key={post.id} title={post.title} body={post.body}></Post>
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
