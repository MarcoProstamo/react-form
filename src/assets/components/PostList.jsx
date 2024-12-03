import Post from "./Post";

export default function PostList({ postList, filteringTerm, handleClick }) {
  return (
    <section className="d-flex flex-column gap-3 my-4">
      {postList
        .filter((post) =>
          post.title.toLowerCase().includes(filteringTerm.toLowerCase())
        )
        .map((post) => (
          <Post key={post.id} post={post} handleClick={handleClick} />
        ))}
    </section>
  );
}
