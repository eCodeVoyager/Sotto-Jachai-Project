import { demoPost } from "@/data/posts.data";
import PostCard from "./PostCard";

const PostsListing = ({ Icon, title, limit = 3 }) => {
  return (
    <section className="mt-12 md:mt-32">
      <div className="flex items-center gap-2">
        <div>
          <Icon className="size-6" />
        </div>
        <h3 className="font-openSans text-2xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      <ul>
        {[...Array(limit)].map((_, idx) => (
          <PostCard key={idx} post={demoPost} />
        ))}
      </ul>
    </section>
  );
};
export default PostsListing;
