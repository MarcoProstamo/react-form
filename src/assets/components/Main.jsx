import PostList from "./PostList";
import { posts } from "../data/posts";

export default function Main({ handleSubmit, handleChange, inputValue }) {
  return (
    <main>
      <div className="container">
        {/* Add Post */}
        <section className="row gap-3">
          <div className="col-12 text-center fw-semibold fs-4">
            Post Creation
          </div>
          <div className="col-12">
            <form className="row gap-3">
              <div className="col-12">
                <div className="row gap-3">
                  <div className="col p-0 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title..."
                    />
                    <label>Title...</label>
                  </div>
                  <div className="col p-0 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Author..."
                    />
                    <label>Author...</label>
                  </div>
                  <div className="col p-0 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Status..."
                    />
                    <label>Status...</label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Content..."
                  />
                  <label>Content...</label>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <hr />

      <div className="container">
        {/* Filter Post */}
        <section className="d-flex justify-content-center my-4">
          <form role="search">
            <div className="form-floating">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                value={inputValue}
                onChange={handleChange}
              />
              <label>Search...</label>
            </div>
          </form>
        </section>

        {/* Posts Output */}
        <section className="d-flex flex-column gap-3">
          <PostList postList={posts} filteringTerm={inputValue} />
        </section>
      </div>
    </main>
  );
}
