export default function Post({ post, handleClick }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="fw-semibold">{post.title}</h2>
        <p className="fs-5">{post.content}</p>
        <button
          className="btn btn-danger shadow"
          onClick={() => handleClick(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
