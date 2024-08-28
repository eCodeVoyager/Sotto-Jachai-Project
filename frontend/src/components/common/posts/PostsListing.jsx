import { demoPost } from "@/data/posts.data";

const PostsListing = ({ title, limit = 3 }) => {
  return (
    <section className="mt-4 md:mt-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <ul>
        {Array.from({ length: limit }, (v, i) => (
          <li
            key={i}
            className="flex items-center justify-between border-b border-gray-300 py-2 h-[250px]"
          >
            <div className="flex gap-5">
              <figure className="w-80 shrink-0">
                <img src={demoPost.image} className="w-full object-contain" />
              </figure>
              <p className="text-sm font-semibold max-w-3xl">
                {demoPost.caption}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default PostsListing;
