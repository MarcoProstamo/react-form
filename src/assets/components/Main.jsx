import { useState } from "react";
import PostList from "./PostList";
import { posts as data } from "../data/posts";

export default function Main() {
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const [filterInput, setFilterInput] = useState("");

  const [posts, setPosts] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: titleInput,
      content: contentInput,
      status: statusInput,
      author: authorInput,
      id: posts.length + 1,
    };
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    console.log(newPosts);
  }

  return (
    <main>
      <div className="container">
        {/* Add Post */}
        <section className="row gap-3">
          <div className="col-12 text-center fw-semibold fs-4">
            Post Creation
          </div>
          <div className="col-12">
            <form onSubmit={handleSubmit} className="row gap-3">
              <div className="col-12">
                <div className="row gap-3">
                  <div className="col form-floating">
                    <input
                      type="text"
                      className="form-control"
                      value={titleInput}
                      onChange={(e) => setTitleInput(e.target.value)}
                      placeholder="Title..."
                    />
                    <label className="py-3 px-4">Title...</label>
                  </div>
                  <div className="col form-floating">
                    <input
                      type="text"
                      className="form-control"
                      value={authorInput}
                      onChange={(e) => setAuthorInput(e.target.value)}
                      placeholder="Author..."
                    />
                    <label className="py-3 px-4">Author...</label>
                  </div>
                  <div className="col form-floating">
                    <input
                      type="text"
                      className="form-control"
                      value={statusInput}
                      onChange={(e) => setStatusInput(e.target.value)}
                      placeholder="Status..."
                    />
                    <label className="py-3 px-4">Status...</label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    value={contentInput}
                    onChange={(e) => setContentInput(e.target.value)}
                    placeholder="Content..."
                  />
                  <label>Content...</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary">Create</button>
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
                value={filterInput}
                onChange={(e) => setFilterInput(e.target.value)}
              />
              <label>Search...</label>
            </div>
          </form>
        </section>

        {/* Posts Output */}
        <section className="d-flex flex-column gap-3">
          <PostList postList={posts} filteringTerm={filterInput} />
        </section>
      </div>
    </main>
  );
}
