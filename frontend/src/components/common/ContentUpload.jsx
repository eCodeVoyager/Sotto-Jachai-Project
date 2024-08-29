import { Button } from "../ui/button";
import upload from "@/assets/icons/upload.svg";
import newDocs from "@/assets/icons/dashboard_upload_heading.svg";
const ContentUpload = () => {
  return (
    <div className="bg-custom  text-white flex items-center gap-3 justify-center py-4 w-full 2xl:max-w-[50%] mx-auto rounded-2xl flex-col sm:flex-row">
      <div className="hidden md:block">
        <img src={newDocs} alt="newDocsIcon" />
      </div>
      <h2 className="font-openSans font-bold text-lg lg:text-2xl">
        Please upload your contents here{" "}
      </h2>
      <Button className="gap-2">
        <img src={upload} alt="upload" />
        <span className="font-openSans font-bold text-base">Upload</span>
      </Button>
    </div>
  );
};
export default ContentUpload;
