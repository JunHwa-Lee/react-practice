import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
} // 이렇게 함수의 첫 글자는 대문자를 사용 그리고 함수 안에서는 JSX 코드를 반환해야 한다.

export default Post;
