import { MyContentsIcon } from "@/components/common/Icons";
import PostsListing from "@/components/common/posts/PostsListing";
import { useSelector } from "react-redux";

const AdminAllContents = () => {
  const { allContents } = useSelector((state) => state.adminContent);
  const verifiedContents = allContents.filter(
    (content) => content.status === "verified"
  );
  return (
    <section>
      <PostsListing
        contents={verifiedContents}
        title={"All Contents"}
        Icon={MyContentsIcon}
      />
    </section>
  );
};
export default AdminAllContents;
