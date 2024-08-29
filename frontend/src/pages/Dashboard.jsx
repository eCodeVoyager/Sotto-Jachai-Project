import ContentUpload from "@/components/common/ContentUpload";
import PostsListing from "@/components/common/posts/PostsListing";
import { routes } from "@/router/routes.data";
import { Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="px-4 lg:px-0  mt-12 md:mt-0">
      <ContentUpload />
      <PostsListing
        fromPage={routes.dashboard}
        title={"Recent Uploads"}
        Icon={Clock}
      />
    </section>
  );
};
export default Dashboard;
