export default function Post({ post }) {
  return (
    <div key={post.id} className="card">
      <div className="card-body">
        <h2 className="fw-semibold">{post.title}</h2>
        <p className="fs-5">{post.content}</p>
      </div>
    </div>
  );
}
