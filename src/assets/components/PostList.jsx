import Post from "./Post";

export default function PostList({ postList, filteringTerm }) {
  return postList
    .filter((post) =>
      post.title.toLowerCase().includes(filteringTerm.toLowerCase())
    )
    .map((post) => <Post key={post.id} post={post} />);
}
