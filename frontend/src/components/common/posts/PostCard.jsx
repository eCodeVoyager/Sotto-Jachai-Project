import { Button } from "@/components/ui/button";
import { routes } from "@/router/routes.data";
import { Files, Key, Play } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const PostCard = ({ fromPage = routes.dashboard, post }) => {
  const [keyShow, setKeyShow] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const handleCopy = () => {
    navigator.clipboard.writeText(post.keyId.key);
    toast.success("Key copied to clipboard.");
  };
  return (
    <li className="flex justify-between flex-col-reverse gap-y-5 gap-x-2 md:flex-row md:items-center pb-3 border-b border-b-custom-50 mb-3">
      <div
        className={`${
          fromPage === routes.dashboard ? "flex-[.7]" : "flex-[.6]"
        }`}
      >
        <h6 className="text-muted-foreground text-sm">
          {post?.image ? "Photo" : "Text"}
        </h6>
        <h5 className="text-muted-foreground my-2 text-sm">
          @{post.submittedBy.email.split("@")[0]}
        </h5>
        <h4 className="font-openSans font-bold text-gray-900 text-base">
          {post.title}
        </h4>
        <p className="mt-2 text-muted-foreground text-sm">{post.text}</p>
        <Button
          variant="ghost"
          className="mt-4 bg-[#EBEDF0] rounded-2xl text-gray-900 gap-2 "
        >
          <span className="font-medium text-sm ">View</span>
          <Play className="size-4" />
        </Button>
        <div className="mt-4">
          {post.status === "verified" ? (
            <>
              <h5 className="font-bold text-base ">Content Key </h5>
              <div className="flex items-center gap-2 mt-2">
                <Key className="size-6 text-text" />
                <div
                  onMouseOver={() => setKeyShow(true)}
                  onMouseLeave={() => setKeyShow(false)}
                  className="relative w-full sm:w-[350px] h-8"
                >
                  <input
                    type="text"
                    readOnly
                    className="bg-custom-50 text-sm rounded-lg px-2 tracking-wider h-full w-full text-text outline-none"
                    value={keyShow ? post.keyId.key : "****************"}
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 "
                  >
                    <Files className="size-4 text-text" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>
              <p className="font-semibold  text-sm text-red-400">
                {user.role === "admin"
                  ? "Post is not approved yet."
                  : "Your post is not approved yet."}
              </p>
            </div>
          )}
        </div>
        {user.role === "admin" && (
          <div className="flex items-center gap-4 mt-4">
            <p>Update status to : </p>
            <Button
              variant="outline"
              className={`${
                post.status === "verified"
                  ? "text-red-400 border-red-500 hover:text-red-500/90"
                  : "text-teal-500 border-teal-500 hover:text-teal-500/90"
              }`}
            >
              {post.status === "verified" ? "Pending" : "Verified"}
            </Button>
          </div>
        )}
      </div>
      <figure
        className={`h-[250px] flex justify-center ${
          fromPage === routes.dashboard ? "flex-[.3]" : "flex-[.4]"
        }`}
      >
        <img src={post.image} alt="post image" className="rounded-xl h-full" />
      </figure>
    </li>
  );
};
export default PostCard;
