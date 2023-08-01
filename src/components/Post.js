import { styled } from "styled-components";
import { mobile, tablet } from "../functions/responsive.js";

const PostWrapper = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	background-color: white;
	border: 2px solid black;
	border-radius: 10px;
	text-align: left;
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

const Post = ({ title, body }) => {
	return (
		<PostWrapper>
			<PostTitle>{title}</PostTitle>
			<PostBody>{body}</PostBody>
		</PostWrapper>
	);
};

export default Post;
