import PostsListing from "@/components/common/posts/PostsListing";
import { Fingerprint, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { isLoading, allContents } = useSelector((state) => state.adminContent);
  const pendingContents = allContents.filter(
    (content) => content.status === "pending" || content.status === "rejected"
  );
  return isLoading ? (
    <div className="h-full flex items-center justify-center">
      <Loader2 className="animate-spin" size="50" />
    </div>
  ) : (
    <section>
      <PostsListing
        contents={pendingContents}
        Icon={Fingerprint}
        title={"Admin Dashboard"}
        limit={2}
      />
    </section>
  );
};
export default AdminDashboard;
