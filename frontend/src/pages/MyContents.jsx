import { MyContentsIcon } from "@/components/common/Icons";
import PostsListing from "@/components/common/posts/PostsListing";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const MyContents = () => {
  const { contents, isLoading } = useSelector((state) => state.content);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin" size="50" />
      </div>
    );
  }

  return (
    <PostsListing
      title={"My Content"}
      Icon={MyContentsIcon}
      limit={3}
      contents={contents}
    />
  );
};
export default MyContents;
