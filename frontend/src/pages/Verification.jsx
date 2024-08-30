import PostCard from "@/components/common/posts/PostCard";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/router/routes.data";
import ContentService from "@/services/ContentService";
import { Formik } from "formik";
import { Key, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Verification = () => {
  const [post, setPost] = useState(null);
  return (
    <>
      <Navbar />
      <section className="mt-12 px-4 md:px-0">
        <div className="flex items-center gap-4 justify-center font-bold text-text">
          <ShieldCheck className="size-7 lg:size-10" />
          <h1 className="text-2xl lg:text-4xl">Verify Your Information</h1>
        </div>
        <div className="max-w-4xl mx-auto mt-10 text-text">
          <div className="flex md:items-center gap-4 md:gap-7">
            <Key className="size-7 hidden md:block " />
            <div className="flex-1 relative">
              <Formik
                initialValues={{ key: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.key) {
                    errors.key = "Key is required";
                    toast.error("Key is required.");
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values.key);
                  ContentService.verifyPost(values.key)
                    .then(({ data }) => {
                      console.log(data);
                      setPost(data);
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      console.log(error);
                      values.key = "";
                      toast.error(
                        error.response?.data?.message ||
                          error.message ||
                          "Failed to verify."
                      );
                      setSubmitting(false);
                    });
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="relative">
                      <Input
                        placeholder="Enter your key here"
                        className="h-12 text-sm"
                        type="text"
                        name="key"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.key}
                      />

                      <Key className="size-5  md:hidden absolute right-2 top-1/2 -translate-y-1/2 " />
                    </div>

                    <Button
                      className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Verify"
                      )}
                    </Button>

                    <Button
                      className="md:hidden w-full mt-4"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Verify"
                      )}
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          {/* post content */}
          {post && (
            <div className="mt-6">
              <h2
                className={`text-center text-xl md:text-2xl font-semibold ${
                  post ? "text-teal-500" : "text-red-500"
                }`}
              >
                {post
                  ? "Your Information is verified by Authority."
                  : "Your Information is not verified by Authority."}
              </h2>
              <div className="mt-12">
                <PostCard post={post} fromPage={routes.verification} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Verification;
