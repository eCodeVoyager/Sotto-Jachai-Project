import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContent } from "@/redux/app/content/contentSlice";
import ContentService from "@/services/ContentService";
import { Formik } from "formik";
import { CloudUpload, Loader2, PenLine, Share2 } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const ContentSubmission = () => {
  const dispatch = useDispatch();
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFiles(file);
      setPreview(URL.createObjectURL(file));
    },
  });

  const handleChangeFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFiles(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <section className="mt-12 px-4 md:px-0">
      <div className="flex items-center gap-4 justify-center font-bold text-text">
        <PenLine className="size-7 lg:size-10" />
        <h1 className="text-2xl lg:text-4xl">Create a new content</h1>
      </div>
      <div className="mt-6 md:mt-32 text-text  max-w-4xl mx-auto ">
        <Formik
          initialValues={{ title: "", caption: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (!values.title) {
              toast.error("Please add a title.");
              setSubmitting(false);
              return;
            }
            if (!values.caption && !uploadedFiles) {
              toast.error("Please add a caption or upload a picture.");
              setSubmitting(false);
              return;
            }
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("text", values.caption);
            formData.append("content", uploadedFiles);
            ContentService.create(formData)
              .then(({ data }) => {
                console.log(data);
                dispatch(createContent(data));
                toast.success("Content created successfully.");
                setSubmitting(false);
                values.title = "";
                values.caption = "";
                setPreview(null);
                setUploadedFiles(null);
              })
              .catch((error) => {
                setSubmitting(false);
                console.log("Error while creating content.");
                console.log(error);
                toast.error(
                  error.response?.data?.message ||
                    error.message ||
                    "Content creation failed."
                );
              });
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="relative">
              <div className="absolute top-full translate-y-full md:top-0 md:-translate-y-[120%] md:right-0 w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Share2 className="size-5" />
                      <span>Share</span>
                    </>
                  )}
                </Button>
              </div>
              <div className="space-y-6">
                <Input
                  className="bg-background"
                  placeholder="Post title"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                />
                <Textarea
                  className="resize-none h-32"
                  placeholder="Write a caption ..."
                  name="caption"
                  onChange={handleChange}
                  value={values.caption}
                />
                <input
                  type="file"
                  name="upload_image"
                  id="upload_image"
                  {...getInputProps()}
                  onChange={handleChangeFileUpload}
                />
              </div>
              <div className="mt-6">
                {preview ? (
                  <div className="flex items-center justify-center flex-col h-[250px] md:h-[400px]">
                    <figure className="h-full">
                      <img
                        className="object-contain h-full"
                        src={preview}
                        alt="preview image"
                      />
                    </figure>
                  </div>
                ) : (
                  <div
                    className="border-2 border-dashed border-zinc-200 rounded-lg p-12"
                    {...getRootProps()}
                  >
                    <label htmlFor="upload_image">
                      <div className="flex h-full flex-col items-center justify-center space-y-3 md:space-y-1 cursor-pointer">
                        <CloudUpload className="size-8 md:size-10" />
                        <h3 className="font-semibold text-xl md:text-2xl">
                          Upload a Picture
                        </h3>
                        <p className=" text-muted-foreground text-center text-sm md:text-base">
                          Click to upload or drag and drop a picture here.
                          <span className="block font-semibold">
                            PNG, JPEG, JPG (max size 400mb)
                          </span>
                        </p>
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContentSubmission;
