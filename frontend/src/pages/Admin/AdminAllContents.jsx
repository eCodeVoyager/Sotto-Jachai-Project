import { MyContentsIcon } from "@/components/common/Icons";
import PostsListing from "@/components/common/posts/PostsListing";

const AdminAllContents = () => {
  return (
    <section>
      {/* TODO: show there just verified posts */}
      <PostsListing title={"All Contents"} Icon={MyContentsIcon} />
    </section>
  );
};
export default AdminAllContents;
