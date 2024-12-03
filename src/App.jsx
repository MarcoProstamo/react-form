import { useState } from "react";
import { posts } from "./assets/data/posts";
import PostList from "./assets/components/PostList";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <header>
        <h1 className="text-center my-3">React Blog Form</h1>
      </header>
      <main>
        <section>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center my-4"
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Ex. Javascript"
                value={inputValue}
                onChange={handleChange}
              />
              <label htmlFor="inputText">Ex. Javascript</label>
            </div>
          </form>
        </section>
        <section className="container d-flex flex-column gap-3 mt-5">
          <PostList postList={posts} filteringTerm={inputValue} />
        </section>
      </main>
    </>
  );
}

export default App;
