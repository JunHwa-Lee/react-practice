import Post from "./components/Post"; // 확장자를 붙이지 않는다.

function App() {
  return (
    <main>
      <Post author="Maximilian" body="React.js is awesome" />
      <Post author="Manuel" body="Check out the full course!" />
    </main>
  );
}

export default App;
