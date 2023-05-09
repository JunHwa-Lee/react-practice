import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
} // empty 태그로 감싸준 이유는 앞에서 설명했듯이, 형제 태그들을 같이 둘 수 없어서 empty 로라도 메꿨다.

export default PostsList;
