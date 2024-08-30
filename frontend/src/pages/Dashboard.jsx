import ContentUpload from "@/components/common/ContentUpload";
import PostsListing from "@/components/common/posts/PostsListing";
import { routes } from "@/router/routes.data";
import { Clock, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { contents, isLoading } = useSelector((state) => state.content);
  return (
    <section className="px-4 lg:px-0  mt-12 md:mt-0">
      <ContentUpload />
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader2 className="animate-spin" size="50" />
        </div>
      ) : (
        <PostsListing
          fromPage={routes.dashboard}
          title={"Recent Uploads"}
          Icon={Clock}
          contents={contents}
        />
      )}
    </section>
  );
};
export default Dashboard;
