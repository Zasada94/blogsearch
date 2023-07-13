import { styled } from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(0, 67, 255, 0.7) 100%
	);
	min-height: 100vh;
	padding: 30px 0;
`;
const Title = styled.h1``;

const Input = styled.input`
	padding: 8px 10px;
	font-size: 16px;
	margin: 10px 0;
  border-radius: 10px;
  border: 1px solid black;
`;

const Button = styled.button`
	padding: 8px 16px;
	margin-bottom: 10px;
	background-color: white;
	color: black;
	border: none;
	cursor: pointer;
	box-shadow: 5px 5px 0px 0px rgb(0, 0, 0);
	border-radius: 10px;
`;

const ResultsWrapper = styled.div``;

const Post = styled.div``;

const PostTitle = styled.h2``;

const PostBody = styled.p``;

function App() {
	return (
		<Container>
			<Title>Blog Posts Search</Title>
			<Input type="text" placeholder="Search by title..."></Input>
			<Button>Search</Button>
			<ResultsWrapper>
				<Post>
					<PostTitle>title</PostTitle>
					<PostBody>body</PostBody>
				</Post>
			</ResultsWrapper>
		</Container>
	);
}

export default App;
