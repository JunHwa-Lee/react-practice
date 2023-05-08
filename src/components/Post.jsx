import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
} // 이렇게 함수의 첫 글자는 대문자를 사용 그리고 함수 안에서는 JSX 코드를 반환해야 한다.

export default Post;
