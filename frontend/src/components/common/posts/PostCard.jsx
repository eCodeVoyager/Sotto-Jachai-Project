import { Button } from "@/components/ui/button";
import { Files, Key, Play } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PostCard = ({ post }) => {
  const [keyShow, setKeyShow] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(post.key);
    toast.success("Key copied to clipboard.");
  };
  return (
    <li className="flex justify-between flex-col-reverse gap-y-5 md:flex-row pb-3 border-b border-b-custom-50 mb-3">
      <div className="flex-[.7]">
        <h6 className="text-muted-foreground text-sm">
          {post?.image ? "Photo" : "Text"}
        </h6>
        <h4 className="font-openSans font-bold text-gray-900 text-base">
          {post.caption.split(" ").slice(0, 3).join(" ")} ...
        </h4>
        <Button
          variant="ghost"
          className="mt-4 bg-[#EBEDF0] rounded-2xl text-gray-900 gap-2 "
        >
          <span className="font-medium text-sm ">View</span>
          <Play className="size-4" />
        </Button>
        <div className="mt-4">
          <h5 className="font-bold text-base ">Content Key </h5>
          <div className="flex items-center gap-2 mt-2">
            <Key className="size-6 text-text" />
            <div
              onMouseOver={() => setKeyShow(true)}
              onMouseLeave={() => setKeyShow(false)}
              className="relative w-[250px] h-8"
            >
              <input
                type="text"
                readOnly
                className="bg-custom-50 text-sm rounded-lg px-2 tracking-wider h-full w-full text-text outline-none"
                value={keyShow ? post.key : "****************"}
              />
              <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 "
              >
                <Files className="size-4 text-text" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <figure className="flex-[.3]">
        <img src={post.image} alt="post image" className="rounded-xl" />
      </figure>
    </li>
  );
};
export default PostCard;
