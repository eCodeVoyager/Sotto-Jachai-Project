import { Button } from "@/components/ui/button";
import {
  contentDelete,
  contentStatusUpdate,
} from "@/redux/app/admin/adminContentSlice";
import { routes } from "@/router/routes.data";
import AdminService from "@/services/AdminService";
import {
  CircleCheckBig,
  CircleOff,
  Clock,
  Files,
  Key,
  Loader2,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import PostDetails from "../Modal/PostDetails";
import ActionsModal from "../Modal/ActionsModal";

const PostCard = ({ fromPage = routes.dashboard, post }) => {
  const [keyShow, setKeyShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleCopy = () => {
    navigator.clipboard.writeText(post?.keyId.key);
    toast.success("Key copied to clipboard.");
  };
  const handleStatusUpdate = (status) => {
    setIsLoading(true);
    AdminService.statusUpdate(post._id, status)
      .then((res) => {
        dispatch(contentStatusUpdate({ postId: post._id, status }));
        toast.success(res.message);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        toast.error("Failed to update status.");
      });
  };
  const handleDeletePost = () => {
    setIsLoading(true);
    AdminService.deleteContent(post._id)
      .then((res) => {
        dispatch(contentDelete({ postId: post._id }));
        toast.success(res.message);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        toast.error("Failed to delete post.");
      });
  };
  return (
    <li className="flex justify-between flex-col-reverse gap-y-5 gap-x-2 md:flex-row md:items-center pb-4 border-b border-b-custom-50 mb-4">
      <div
        className={`${
          fromPage === routes.dashboard ? "flex-[.7]" : "flex-[.6]"
        }`}
      >
        <h6 className="text-muted-foreground text-sm">
          {post?.image ? "Photo" : "Text"}
        </h6>
        <h5
          className={` text-muted-foreground my-2 text-sm ${
            post.image.length > 0 ? "hidden md:block" : ""
          }`}
        >
          @{post.submittedBy?.email.split("@")[0]}
        </h5>
        <h4 className="font-openSans font-bold text-gray-900 text-base">
          {post.title}
        </h4>

        {fromPage === routes.verification && (
          <p className="mt-2 text-muted-foreground text-sm">{post.text}</p>
        )}
        {fromPage !== routes.verification && <PostDetails post={post} />}
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
                    value={keyShow ? post.keyId?.key : "****************"}
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
                {user?.role === "admin"
                  ? "Post is not approved yet."
                  : "This post is not approved yet."}
              </p>
            </div>
          )}
        </div>
        {user?.role === "admin" && (
          <div className="mt-4 flex items-center gap-7 ">
            {post.status === "verified" && (
              <ActionsModal
                title={"Are you sure you want to delete this?"}
                onClick={handleDeletePost}
                disabled={isLoading}
              >
                <Button className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-red-400 hover:bg-red-400/90">
                  <p className="capitalize text-base font-semibold">Delete</p>
                  {isLoading ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : (
                    <Trash className="size-5" />
                  )}
                </Button>
              </ActionsModal>
            )}
            {(post.status === "pending" || post.status === "rejected") && (
              <>
                {" "}
                <ActionsModal
                  title={"Are you sure you want to verified this?"}
                  desc="Confirm verification? Once verified, this will be accessible to all users via a key."
                  disabled={isLoading}
                  onClick={() => handleStatusUpdate("verified")}
                >
                  <Button className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-custom-100 hover:bg-custom-100/90">
                    <p className="capitalize text-base font-semibold">Verify</p>
                    {isLoading ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      <CircleCheckBig className="size-5" />
                    )}
                  </Button>
                </ActionsModal>
                {post.status !== "rejected" && (
                  <ActionsModal
                    title={"Are you sure you want to reject this?"}
                    disabled={isLoading}
                    onClick={() => handleStatusUpdate("rejected")}
                  >
                    <Button className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-red-400 hover:bg-red-400/90">
                      <p className="capitalize text-base font-semibold">
                        Reject
                      </p>
                      {isLoading ? (
                        <Loader2 className="size-5 animate-spin" />
                      ) : (
                        <CircleOff className="size-5" />
                      )}
                    </Button>
                  </ActionsModal>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div
        className={`self-start mr-10 flex items-center gap-2 px-3 py-2 rounded-lg text-white    ${
          post.status === "pending" ? "bg-[#8B8B8B]" : "bg-custom-100"
        } `}
      >
        <p className={`capitalize text-base font-semibold`}>{post.status}</p>
        {post.status === "pending" ? (
          <Clock className="size-5" />
        ) : (
          <CircleCheckBig className="size-5" />
        )}
      </div>

      {post.image?.length > 0 && (
        <figure
          className={` w-full ${
            fromPage === routes.dashboard ? "flex-[.3]" : "flex-[.4]"
          }`}
        >
          <h5 className="md:hidden text-muted-foreground my-2 text-sm">
            @{post.submittedBy?.email.split("@")[0]}
          </h5>
          <img
            src={post.image}
            alt="post image"
            className={`rounded-xl max-h-[250px] w-full object-contain`}
          />
        </figure>
      )}
    </li>
  );
};
export default PostCard;
