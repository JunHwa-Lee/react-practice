import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost() {
  const [enteredBody, setEnteredBody] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  } // 함수는 내가 만든 이벤트가 발생하면 뭘 해야 할지 리액트에게 알려준다.

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  ); // className과 마찬가지로 htmlFor도 기존과 다르다. 기존은 그냥 for 이었지만 변형되었다. 이제 큰 변형들은 다 배웠다.
}

export default NewPost;
