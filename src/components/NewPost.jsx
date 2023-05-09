import classes from "./NewPost.module.css";

function NewPost() {
  function changeBodyHandler(event) {
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  ); // className과 마찬가지로 htmlFor도 기존과 다르다. 기존은 그냥 for 이었지만 변형되었다. 이제 큰 변형들은 다 배웠다.
}

export default NewPost;
