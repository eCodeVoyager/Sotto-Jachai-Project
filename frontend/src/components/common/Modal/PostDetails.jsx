import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
const PostDetails = ({ post }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button
            variant="ghost"
            className="mt-3 bg-[#EBEDF0] rounded-2xl text-gray-900 gap-2 "
          >
            <span className="font-medium text-sm ">View</span>
            <Play className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2>{post.title}</h2>
              <p className="text-muted-foreground text-sm mt-2 font-medium">
                @{post.submittedBy?.email.split("@")[0]}
              </p>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div>{post.text}</div>
          </DialogDescription>
          {post?.image?.length > 0 && (
            <figure>
              <img src={post?.image[0]} alt={post.title} />
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
export default PostDetails;
