import { Button } from "../ui/button";
import upload from "@/assets/icons/upload.svg";
import newDocs from "@/assets/icons/dashboard_upload_heading.svg";
import { Link } from "react-router-dom";
import { routes } from "@/router/routes.data";
const ContentUpload = () => {
  return (
    <div className="bg-custom  text-white flex items-center gap-3 justify-center py-4 w-full 2xl:max-w-[50%] mx-auto rounded-2xl flex-col sm:flex-row">
      <div className="hidden md:block">
        <img src={newDocs} alt="newDocsIcon" />
      </div>
      <h2 className="font-openSans font-bold text-lg lg:text-2xl">
        Please upload your contents here{" "}
      </h2>
      <Button>
        <Link to={routes.contentSubmission} className="flex items-center gap-2">
          <img src={upload} alt="upload" />
          <span className="font-openSans font-bold text-base">Upload</span>
        </Link>
      </Button>
    </div>
  );
};
export default ContentUpload;
