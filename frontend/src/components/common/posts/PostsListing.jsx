import PostCard from "./PostCard";
import { routes } from "@/router/routes.data";
import PostsPaginate from "./PostsPaginate";

const PostsListing = ({ fromPage, Icon, title, contents, limit = 3 }) => {
  return (
    <section
      className={`${
        fromPage === routes.dashboard ? " mt-12" : "mt-8 px-4 md:px-0"
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
      {contents.length > 0 ? (
        fromPage === routes.dashboard ? (
          <ul className="flex flex-col gap-8 mt-11">
            {contents
              ?.slice()
              .reverse()
              .slice(0, limit)
              .map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
          </ul>
        ) : (
          <>
            <div className="mt-9 pb-5 md:pb-0">
              <PostsPaginate
                contents={contents?.slice().reverse()}
                itemsPerPage={limit}
              />
            </div>
          </>
        )
      ) : (
        <>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-2xl lg:text-4xl font-semibold text-text">
              No posts to show.
            </h3>
          </div>
        </>
      )}
    </section>
  );
};
export default PostsListing;
