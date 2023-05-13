import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState(""); // 이 값은 아래에 enteredBody 객체에 전달되도록 된다.
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
} // empty 태그로 감싸준 이유는 앞에서 설명했듯이, 형제 태그들을 같이 둘 수 없어서 empty 로라도 메꿨다.

export default PostsList;
