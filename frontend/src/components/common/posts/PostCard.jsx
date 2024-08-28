import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <>
      <li className="flex items-center justify-between border-b border-gray-300 py-4 relative ">
        <div className="flex gap-5">
          <figure className="w-80 shrink-0">
            <img src={post.image} className="w-full object-contain" />
          </figure>
          <p className="text-sm font-semibold max-w-[500px]">{post.caption}</p>
        </div>
        <div className="absolute right-0 top-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="*:cursor-pointer shadow-md text-xl">
              <DropdownMenuItem>Copy Key</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </li>
    </>
  );
};
export default PostCard;
