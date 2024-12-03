import { useState } from "react";

export default function Post({ post, handleClick }) {
  const [newTitleInput, setNewTitleInput] = useState("");
  function handleEditClick(e) {
    e.preventDefault();
    if (!newTitleInput) return;
    post.title = newTitleInput;
    setNewTitleInput("");
  }

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="fw-semibold">{post.title}</h2>
        <p className="fs-5">{post.content}</p>
        <div className="row">
          <div className="col-9">
            <form className="row">
              <div className="col-8">
                <div className="div p">
                  <input
                    type="text"
                    className="form-control"
                    value={newTitleInput}
                    placeholder="New Title..."
                    onChange={(e) => setNewTitleInput(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-secondary ms-1"
                  onClick={handleEditClick}
                >
                  <i className="fa-solid fa-pen-to-square fs-5"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-danger shadow"
                onClick={() => handleClick(post.id)}
              >
                <i className="fa-regular fa-trash-can text-dark fa-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
