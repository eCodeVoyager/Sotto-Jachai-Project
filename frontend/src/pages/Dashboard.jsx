import ContentUpload from "@/components/common/ContentUpload";
import PostsListing from "@/components/common/posts/PostsListing";

const Dashboard = () => {
  return (
    <section className="">
      <h2 className="text2xl lg:text-4xl font-extralight uppercase  border-b border-b-gray-400 pb-3 mb-3">
        Dashboard
      </h2>
      <ContentUpload />
      <PostsListing title={"Your Resent Contents"} />
    </section>
  );
};
export default Dashboard;
