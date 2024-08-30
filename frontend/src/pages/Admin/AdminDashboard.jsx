import PostsListing from "@/components/common/posts/PostsListing";
import { Fingerprint } from "lucide-react";

const AdminDashboard = () => {
  return (
    <section>
      <PostsListing Icon={Fingerprint} title={"Admin Dashboard"} />
    </section>
  );
};
export default AdminDashboard;
