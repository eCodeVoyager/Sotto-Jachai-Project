import { demoPost } from "@/data/posts.data";
import PostCard from "./PostCard";
import { routes } from "@/router/routes.data";
import PostsPaginate from "./PostsPaginate";

const PostsListing = ({ fromPage, Icon, title, limit = 2 }) => {
  return (
    <section
      className={`${
        fromPage === routes.dashboard ? "md:mt-32 mt-12" : "mt-8 px-4 md:px-0"
      }`}
    >
      <div className="flex items-center gap-2">
        <div>
          <Icon className="size-6" />
        </div>
        <h3 className="font-openSans text-2xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      {fromPage === routes.dashboard ? (
        <ul className="flex flex-col gap-8 mt-11">
          {[...Array(limit)].map((_, idx) => (
            <PostCard key={idx} post={demoPost} />
          ))}
        </ul>
      ) : (
        <>
          <div className="mt-9 pb-5 md:pb-0">
            <PostsPaginate itemsPerPage={3} />
          </div>
        </>
      )}
    </section>
  );
};
export default PostsListing;
