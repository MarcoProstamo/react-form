import { useState } from "react";
import { posts } from "./assets/data/posts";
import PostList from "./assets/components/PostList";
function handleSubmit() {}

function App() {
  return (
    <>
      <header>
        <h1 className="text-center my-3">React Blog Form</h1>
      </header>
      <main>
        <section>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center my-3 gap-3"
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputText"
                placeholder="First Title"
              />
              <label htmlFor="inputText">First Title</label>
            </div>
            <button className="btn btn-primary">Filtra</button>
          </form>
        </section>
        <section className="container d-flex flex-column gap-3 mt-5">
          <PostList postList={posts} />
        </section>
      </main>
    </>
  );
}

export default App;
