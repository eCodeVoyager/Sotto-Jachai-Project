import { MyContentsIcon } from "@/components/common/Icons";
import PostsListing from "@/components/common/posts/PostsListing";

const MyContents = () => {
  return <PostsListing title={"My Content"} Icon={MyContentsIcon} limit={3} />;
};
export default MyContents;
