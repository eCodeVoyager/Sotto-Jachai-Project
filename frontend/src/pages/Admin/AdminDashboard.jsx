import PostsListing from "@/components/common/posts/PostsListing";
import { Fingerprint } from "lucide-react";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { allContents } = useSelector((state) => state.adminContent);
  return (
    <section>
      <PostsListing
        contents={allContents}
        Icon={Fingerprint}
        title={"Admin Dashboard"}
      />
    </section>
  );
};
export default AdminDashboard;
