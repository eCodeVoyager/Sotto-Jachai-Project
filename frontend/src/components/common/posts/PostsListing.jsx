import { demoPost } from "@/data/posts.data";
import PostCard from "./PostCard";

const PostsListing = ({ title, limit = 3 }) => {
  return (
    <section className="mt-4 md:mt-6 max-w-4xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <ul>
        {[...Array(limit)].map((_, idx) => (
          <PostCard key={idx} post={demoPost} />
        ))}
      </ul>
    </section>
  );
};
export default PostsListing;
