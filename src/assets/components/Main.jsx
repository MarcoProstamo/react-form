import PostList from "./PostList";
import { posts } from "../data/posts";

export default function Main({ handleSubmit, handleChange, inputValue }) {
  return (
    <main>
      <section>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center my-4"
        >
          <div></div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={inputValue}
              onChange={handleChange}
            />
            <label htmlFor="inputText">Search...</label>
          </div>
        </form>
      </section>
      <hr />
      <section className="container d-flex flex-column gap-3 mt-5">
        <PostList postList={posts} filteringTerm={inputValue} />
      </section>
    </main>
  );
}
