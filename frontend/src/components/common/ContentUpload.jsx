import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ContentUpload = () => {
  return (
    <div className="max-w-2xl h-[80px] relative">
      <Textarea placeholder="Type your message here." className="resize-none" />
      <div className="absolute right-1 bottom-1">
        <Button size="sm">
          <label
            htmlFor="caption_image"
            className="h-full w-full flex items-center justify-center"
          >
            <input type="file" name="caption_image" id="caption_image" hidden />
            Upload Media
          </label>
        </Button>
      </div>
    </div>
  );
};
export default ContentUpload;
