import ContentUpload from "@/components/common/ContentUpload";
import PostsListing from "@/components/common/posts/PostsListing";
import { Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="px-4 lg:px-0">
      <ContentUpload />
      <PostsListing title={"Recent Uploads"} Icon={Clock} />
    </section>
  );
};
export default Dashboard;
